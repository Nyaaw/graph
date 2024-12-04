const inputBox = document.getElementById("input-box");
const inputIsDirected = document.getElementById("is-directed");
const errorBox = document.getElementById("error-box");
const divider = document.getElementById("divider");
const statusMsg = document.getElementById("status-message");
let isResizing = false;


// d3
const svg = d3.select("svg");
const width = svg.node().clientWidth;
const height = svg.node().clientHeight;

let startWidth = 0;
let startX = 0;

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
    isDirected: false
}) {
    try {
        const g = parseInput(data.input);
        drawGraph(g, data.isDirected);
        errorBox.textContent = "";
    } catch (e) {
        errorBox.textContent = e.message;
    }
}

function drawGraph(g, isDirected = false, radius = 20) {
    const { nodes, edges } = g;
    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(edges).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-100))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .selectAll("line")
        .data(edges)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-width", 2);

    const node = svg.append("g")
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", radius)
        .attr("fill", "black")
        .call(drag(simulation));

    const text = svg.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "white")
        .text(d => d.id);

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    if (isDirected) {
        svg.append("defs").append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", radius)
            .attr("refY", 0)
            .attr("orient", "auto")
            .attr("markerWidth", 10)
            .attr("markerHeight", 10)
            .attr("xoverflow", "visible")
            .append("svg:path")
            .attr("d", "M 0,-5 L 10,0 L 0,5")
            .attr("fill", "lightgray")
            .style("stroke", "none");

        link.attr("marker-end", "url(#arrowhead)");
    }
}


function parseInput(txt) {
    const lines = txt.split("\n").map(line => line.trim());
    const nodes = new Set();
    const edges = [];

    for (let line of lines) {
        if (line === "") continue;

        const parts = line.split(/\s+/);
        if (parts.length === 1) {
            nodes.add(parts[0]);
        } else if (parts.length === 2) {
            const [node1, node2] = parts;
            nodes.add(node1);
            nodes.add(node2);
            edges.push({ source: node1, target: node2 });
        } else {
            throw new Error(`Invalid input format: "${line}"`);
        }
    }

    return {
        nodes: Array.from(nodes).map(id => ({ id: id })),
        edges: edges,
    };
}

// compression

function compressAndEncode(data) {
    const compressed = pako.deflate(data, { to: 'string' });
    return btoa(String.fromCharCode.apply(null, compressed));
}

function decodeAndDecompress(base64Data) {
    const binaryString = atob(base64Data);
    const binaryArray = Uint8Array.from(binaryString, c => c.charCodeAt(0));
    return new TextDecoder().decode(pako.inflate(binaryArray));
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
    }
}


// divider resize
divider.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = document.getElementById("input-section").offsetWidth;
    e.preventDefault();
});

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


// draw triggers
function collectAndDraw() {
    const data = {
        input: inputBox.value,
        isDirected: inputIsDirected.checked,
    }
    draw(data);
    updateURL(data);
}

inputBox.addEventListener("input", collectAndDraw);

inputIsDirected.addEventListener("change", collectAndDraw);

loadFromURL();


// utils

// doesnt work on firefox
// document.getElementById("save-as-png").addEventListener("click", () => {
//     let serialize = (svgNode) => {
//         const xmlns = "http://www.w3.org/2000/xmlns/";
//         const xlinkns = "http://www.w3.org/1999/xlink";
//         const svgns = "http://www.w3.org/2000/svg";
//         svgNode = svgNode.cloneNode(true);
//         const fragment = window.location.href + "#";
//         const walker = document.createTreeWalker(svgNode, NodeFilter.SHOW_ELEMENT);
//         while (walker.nextNode()) {
//             for (const attr of walker.currentNode.attributes) {
//                 if (attr.value.includes(fragment)) {
//                     attr.value = attr.value.replace(fragment, "#");
//                 }
//             }
//         }
//         svgNode.setAttributeNS(xmlns, "xmlns", svgns);
//         svgNode.setAttributeNS(xmlns, "xmlns:xlink", xlinkns);
//         const serializer = new window.XMLSerializer;
//         const string = serializer.serializeToString(svgNode);

//         return new Blob([string], { type: "image/svg+xml" });
//     }

//     const svgHtml = document.querySelector("svg");

//     const svgBBox = svgHtml.getBoundingClientRect();


//     const svgBlob = serialize(svgHtml);
//     const url = URL.createObjectURL(svgBlob);

//     const image = new Image();

//     image.onload = function () {
//         const canvas = document.createElement("canvas");
//         canvas.width = svgBBox.width;
//         canvas.height = svgBBox.height;
//         const context = canvas.getContext("2d");
//         console.log(canvas)
//         context.drawImage(image, 0, 0);
//         const pngURL = canvas.toDataURL("image/png");
//         const a = document.createElement("a");
//         a.href = pngURL;
//         a.download = "graph.png";
//         a.click();
//         URL.revokeObjectURL(url);
//     };

//     image.onerror = function () {
//         console.error("Failed to render the SVG on canvas.");
//         URL.revokeObjectURL(url);
//     };

//     image.src = url;
// });

document.getElementById("copy-url-button").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(window.location)
        statusMsg.style.visibility = "visible";
        statusMsg.textContent = "Link copied!";

    } catch (error) {
        statusMsg.style.visibility = "visible";
        statusMsg.textContent = "Link copied!";
    }
    setTimeout(() => {
        statusMsg.style.visibility = "hidden";
        statusMsg.textContent = "";
    }, 5000);

});