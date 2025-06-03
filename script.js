console.log(pools.poolNumber)
// Logs "Mercury"

const inputBox = document.getElementById("input-box");
const inputIsDirected = document.getElementById("is-directed");
const errorBox = document.getElementById("error-box");
const divider = document.getElementById("divider");
const statusMsg = document.getElementById("status-message");
const visualizer = document.getElementById("visualizer");
let isResizing = false;


// d3
const svg = d3.select("svg");
const width = svg.node().clientWidth;
const height = svg.node().clientHeight;

let startWidth = 0;
let startX = 0;

// Array to store references to all inputs
const inputsList = [];

const N = pools.pools.length
const M = N
var matchR

// A DFS based recursive function that 
// returns true if a matching for 
// vertex u is possible
function bpm(u, seen, match)
{
    // Try every job one by one
    for (let v = 0; v < N; v++)
    {
        // If applicant u is interested 
        // in job v and v is not visited
        if (pools.pools[u].passages.findIndex(x => x.link == pools.pools[v].id) != -1 && !seen[v])
        {
                
            // Mark v as visited
            seen[v] = true; 

            // If job 'v' is not assigned to
            // an applicant OR previously
            // assigned applicant for job v (which
            // is match[v]) has an alternate job available.
            // Since v is marked as visited in the 
            // above line, match[v] in the following
            // recursive call will not get job 'v' again
            if (match[v] < 0 || bpm(match[v], seen, match))
            {
                match[v] = u;
                return true;
            }   
        }
    }
    return false;
}

// Returns maximum number 
// of matching from M to N
function maxBPM()
{
    // An array to keep track of the 
    // applicants assigned to jobs. 
    // The value of matchR[i] is the 
    // applicant number assigned to job i, 
    // the value -1 indicates nobody is assigned.
    matchR = new Array(N);

    // Initially all jobs are available
    for(let i = 0; i < N; ++i)
        matchR[i] = -1;

    // Count of jobs assigned to applicants
    let result = 0; 
    for (let u = 0; u < M; u++)
    {
        // Mark all jobs as not seen 
        // for next applicant.
        let seen =new Array(N);
        for(let i = 0; i < N; ++i)
            seen[i] = false;

        // Find if the applicant 'u' can get a job
        if (bpm(u, seen, matchR))
            result++;
    }
    return result;
}

function addInput() {
    // Get the container div
    const inputsDiv = document.getElementById('inputs');

    // Create a new input element
    const newInput = document.createElement('input');
    newInput.type = 'range';
    newInput.className = 'range';
    newInput.min = '-100';
    newInput.max = '100';
    newInput.value = '0';
    newInput.step = '0.1'
    
    // Generate a unique ID for the new input and its corresponding text
    const inputCount = inputsList.length;
    newInput.id = `input${inputCount}`;
    newInput.arrIndex = inputCount;

    // Create a new paragraph element to display the input value
    const newText = document.createElement('p');
    newText.className = 'rangetext';
    newText.id = `${newInput.id}t`;
    newText.textContent = '0'; // Initial value

    // Add an event listener to the input to update the text
    newInput.addEventListener('input', function() {
        
        val = this.value / 10;
        val = val**2 + 90 * val**3;
        inputsList[this.arrIndex] = val;
        newText.textContent = val.toFixed(5);
    });

    // Append the new input and text to the container div
    inputsDiv.appendChild(newInput);
    inputsDiv.appendChild(newText);

    // Add the new input to the inputsList array
    inputsList.push(newInput.value);
}

function drag(simulation) {
    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
}


function draw(data = {
    input: "",
    isDirected: true
}) {
    try {
        const g = parseInput(data.input);
        drawGraph(g, data.isDirected);
        errorBox.textContent = "";
    } catch (e) {
        errorBox.textContent = e.message;
    }
}

const zoom = d3.zoom()
    .scaleExtent([0.1, 3])
    .on("zoom", ({ transform }) => {
        svg.selectAll("line, circle, text")
            .attr("transform", transform);
    });

svg.call(zoom);


function drawGraph(g, isDirected = true, radius = 20) {
    const { nodes, edges } = g;
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(nodes)
        .alphaDecay(0.01    )
        .alphaTarget(0)
        // .force("x", d3.forceX(0).strength(-0.01))
        // .force("y", d3.forceY(0).strength(-0.01));

    const link = svg.append("g")
        .selectAll("line")
        .data(edges)
        .join("line")
        .attr("stroke", "white")
        .attr("stroke-width", 2);

    const node = svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", radius)
        .attr("fill", "white")
        .call(drag(simulation));

    const text = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "black")
        .text(d => d.id);
        
    let arrow;
    if (isDirected) {
        arrow = svg.append("defs").append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", radius)
            .attr("refY", 0)
            .attr("orient", "auto")
            .attr("markerWidth", 10)
            .attr("markerHeight", 7)
            .attr("xoverflow", "visible")
            .append("svg:path")
            .attr("d", "M 0,-5 L 7,0 L 0,5")
            .attr("fill", "white")
            .style("stroke", "none");

        link.attr("marker-end", "url(#arrowhead)");
    }
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y)
            .attr("stroke", linkColor)
        // edgeLabels
        //     .attr("x", d => (d.source.x + d.target.x) / 2)
        //     .attr("y", d => (d.source.y + d.target.y) / 2);
        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
        arrow
            .attr("fill", "white")
        
        // 100 1 -200
        simulation.force("link", d3.forceLink(edges).id(d => d.id).distance(inputsList[0]).strength(inputsList[1]))
        .force("charge", d3.forceManyBody().strength(inputsList[2]))//.distanceMax(2000))
        .force("center", d3.forceCenter(0,0))
    });

}


maxBPM()

console.log(matchR)

function linkColor(c){
    for(let i = 0; i < matchR.length; i++){
        if(pools.pools[i].id == c.target.id){
            if(matchR[i] == -1)
                break
            if(matchR[i] == i)
                break
            if(pools.pools[matchR[i]].id == c.source.id)
                return "red"
        }
    }
    return "white"
}

inputsList[0] = 300
inputsList[1] = 1
inputsList[2] = -3000

function parseInput() {
    const nodes = new Set();
    const edges = [];

    for (let pool of pools.pools) {
        nodes.add(pool.id)
        for(let passage of pool.passages){
            if(!edges.some(e => e.source == passage.link && e.target == pool.id))
                edges.push({ source: pool.id, target: passage.link});
        }
    }

    return {
        nodes: Array.from(nodes).map(id => ({ id: id })),
        edges: edges,
    };
}


// html & stuff

function updateURL(o) {
    let txt = JSON.stringify(o);
    const encoded = compressAndEncode(txt);
    const url = new URL(window.location);
    url.searchParams.set("data", encoded);
    window.history.replaceState(null, "", url.toString());
}

function loadFromURL() {
    const url = new URL(window.location);
    const encoded = url.searchParams.get("data");
    if (encoded) {
        try {
            const decoded = decodeAndDecompress(encoded);
            let data = JSON.parse(decoded);
            draw(data);
            inputBox.value = data.input;
            inputIsDirected.checked = data.isDirected;
        } catch (e) {
            console.error("Failed to decode data from URL:", e);
        }
    }else{
        draw();
    }
}


window.addEventListener("mousemove", (e) => {
    if (isResizing) {
        const newWidth = startWidth + (e.clientX - startX);

        if (newWidth < 300 || newWidth > window.innerWidth * 0.5) {
            return;
        }
        document.getElementById("input-section").style.width = `${newWidth}px`;
    }
});

window.addEventListener("mouseup", () => {
    isResizing = false;
});

addInput()
addInput()
addInput()

// draw triggers
function collectAndDraw() {
    const data = {
        input: inputBox.value,
        isDirected: inputIsDirected.checked,
    }
    draw(data);
    updateURL(data);
}
loadFromURL();