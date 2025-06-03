const pools = {
  "poolNumber": 457,
  "views": [
    {
      "1": "Tree middle",
      "2": "Tree base"
    },
    {
      "1": "Room 47",
      "2": "Big crossroad A"
    },
    {
      "1": "Room 53",
      "2": "Room 51"
    },
    {
      "1": "Room 62",
      "2": "Red pooltoy"
    },
    {
      "1": "12 Pillars up",
      "2": "12 Pillars down"
    },
    {
      "1": "Room 70",
      "2": "Room 4"
    },
    {
      "1": "Room 71",
      "2": "Room 28"
    },
    {
      "1": "Room 80",
      "2": "2 orange fusillis"
    },
    {
      "1": "Enter the green slide",
      "2": "Hexagon drawing ????"
    },
    {
      "1": "Room 94",
      "2": "Room 87"
    },
    {
      "1": "12 Pillars down west",
      "2": "12 Pillars down"
    },
    {
      "1": "3 Hooks no eye",
      "2": "Room 78"
    },
    {
      "1": "2 Red fusillis",
      "2": "Room 81"
    },
    {
      "1": "Big crossroad A",
      "2": "Room 82"
    },
    {
      "1": "Room 117",
      "2": "Room 110"
    },
    {
      "1": "Room 124",
      "2": "Room 110"
    },
    {
      "1": "Room 134",
      "2": "Corridor with window"
    },
    {
      "1": "Pijurro",
      "2": "Room 4"
    },
    {
      "1": "Room 205",
      "2": "2 orange fusillis"
    },
    {
      "1": "Room 225",
      "2": "Big crossroad A"
    },
    {
      "1": "Room 248",
      "2": "Radiator"
    },
    {
      "1": "Room 270",
      "2": "Pijurro"
    },
    {
      "1": "Room 256",
      "2": "One weird window"
    },
    {
      "1": "Room 315",
      "2": "Room 313"
    },
    {
      "1": "Og city window",
      "2": "Og city"
    },
    {
      "1": "Room 182",
      "2": "Room 330"
    },
    {
      "1": "Room 337",
      "2": "Room 331"
    },
    {
      "1": "Tree top",
      "2": "Tree middle"
    },
    {
      "1": "Room 342",
      "2": "Blue fusilli"
    },
    {
      "1": "Room 445",
      "2": "Inside room with pillars"
    },
    {
      "1": "Snake green slide",
      "2": "Talk to me"
    }
  ],
  "pools": [
    {
      "id": "Spawn",
      "desc": "HI EYE",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "End",
          "description": null
        },
        {
          "type": 3,
          "link": "Radio",
          "description": null
        }
      ]
    },
    {
      "id": "End",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Spawn",
          "description": null
        }
      ]
    },
    {
      "id": "Radio",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Spawn",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 4",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 5",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 3",
          "description": null
        }
      ]
    },
    {
      "id": "Room 3",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Radio",
          "description": null
        },
        {
          "type": 0,
          "link": "Elevator exit",
          "description": null
        },
        {
          "type": 1,
          "link": "3 Indigo slides",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 107",
          "description": null
        }
      ]
    },
    {
      "id": "Room 4",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Radio",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 27",
          "description": null
        },
        {
          "type": 0,
          "link": "Tomb corridor",
          "description": null
        }
      ]
    },
    {
      "id": "Room 5",
      "desc": "--> Radio",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Radio",
          "description": null
        },
        {
          "type": 2,
          "link": "Fren cage",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 74",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 69",
          "description": null
        }
      ]
    },
    {
      "id": "3 Indigo slides",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 3",
          "description": null
        },
        {
          "type": 3,
          "link": "Radio pick 1",
          "description": null
        },
        {
          "type": 0,
          "link": "pediluv",
          "description": null
        }
      ]
    },
    {
      "id": "Radio pick 1",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "3 Indigo slides",
          "description": null
        },
        {
          "type": 5,
          "link": "Botomless pit",
          "description": null
        }
      ]
    },
    {
      "id": "Botomless pit",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Radio pick 1",
          "description": null
        },
        {
          "type": 3,
          "link": "Bush north",
          "description": null
        },
        {
          "type": 1,
          "link": "Purple pooltoy",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 110",
          "description": null
        }
      ]
    },
    {
      "id": "Bush north",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Botomless pit",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 347",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 36",
          "description": null
        },
        {
          "type": 4,
          "link": "Room 74",
          "description": null
        }
      ]
    },
    {
      "id": "Room 16",
      "desc": "10 pillars and square pool",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Tree base",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 427",
          "description": null
        }
      ]
    },
    {
      "id": "Tree base",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 16",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 234",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 334",
          "description": null
        }
      ]
    },
    {
      "id": "Fren cage",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 5",
          "description": null
        }
      ]
    },
    {
      "id": "Room 27",
      "desc": "/!\\ flashlight",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 4",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 28",
          "description": null
        }
      ]
    },
    {
      "id": "Room 28",
      "desc": "--> Room 27",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 27",
          "description": null
        },
        {
          "type": 3,
          "link": "ARG Link ?",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 270",
          "description": null
        }
      ]
    },
    {
      "id": "ARG Link ?",
      "desc": "aHR0cHM6Ly9",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 28",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 30",
          "description": null
        }
      ]
    },
    {
      "id": "Room 30",
      "desc": "2 circles in wall",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "ARG Link ?",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 31",
          "description": null
        }
      ]
    },
    {
      "id": "Room 31",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 30",
          "description": null
        },
        {
          "type": 2,
          "link": "Little square cross",
          "description": null
        }
      ]
    },
    {
      "id": "Little square cross",
      "desc": "you can see stairs north",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 31",
          "description": null
        },
        {
          "type": 0,
          "link": "Flooded stairs",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 237",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 233",
          "description": null
        }
      ]
    },
    {
      "id": "Flooded stairs",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Little square cross",
          "description": null
        },
        {
          "type": 5,
          "link": "Flooded stairs upside",
          "description": null
        }
      ]
    },
    {
      "id": "Flooded stairs upside",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 4,
          "link": "Flooded stairs",
          "description": null
        },
        {
          "type": 2,
          "link": "Blue fusilli",
          "description": null
        }
      ]
    },
    {
      "id": "Blue fusilli",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Flooded stairs upside",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 36",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 37",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 72",
          "description": null
        }
      ]
    },
    {
      "id": "Room 36",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Blue fusilli",
          "description": null
        },
        {
          "type": 2,
          "link": "Bush north",
          "description": null
        }
      ]
    },
    {
      "id": "Room 37",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Blue fusilli",
          "description": null
        },
        {
          "type": 0,
          "link": "Diamond lamp pool",
          "description": null
        },
        {
          "type": 1,
          "link": "Radio Pick 2",
          "description": null
        }
      ]
    },
    {
      "id": "Radio Pick 2",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 37",
          "description": null
        },
        {
          "type": 1,
          "link": "Big crossroad A",
          "description": null
        }
      ]
    },
    {
      "id": "Diamond lamp pool",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 37",
          "description": null
        },
        {
          "type": 3,
          "link": "Tree middle",
          "description": null
        }
      ]
    },
    {
      "id": "Tree middle",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Diamond lamp pool",
          "description": null
        },
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 45",
          "description": null
        }
      ]
    },
    {
      "id": "Triangle crossroad",
      "desc": "South is circle passage",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Tree middle",
          "description": null
        },
        {
          "type": 1,
          "link": "Hexagon drawing ????",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 158",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 334",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 336",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 315",
          "description": null
        },
        {
          "type": 0,
          "link": "Og city",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 313",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 331",
          "description": null
        },
        {
          "type": 3,
          "link": "2 triangle doors",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 402",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 408",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 404",
          "description": null
        }
      ]
    },
    {
      "id": "Hexagon drawing ????",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 415",
          "description": null
        }
      ]
    },
    {
      "id": "Room 45",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Tree middle",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 46",
          "description": null
        }
      ]
    },
    {
      "id": "Room 46",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 45",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 47",
          "description": null
        }
      ]
    },
    {
      "id": "Room 47",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 46",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 48",
          "description": null
        }
      ]
    },
    {
      "id": "Room 48",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 47",
          "description": null
        },
        {
          "type": 1,
          "link": "2 orange fusillis",
          "description": null
        }
      ]
    },
    {
      "id": "2 orange fusillis",
      "desc": "5 vertical orange sliders",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 48",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 50",
          "description": null
        }
      ]
    },
    {
      "id": "Room 50",
      "desc": "stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "2 orange fusillis",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 51",
          "description": null
        }
      ]
    },
    {
      "id": "Room 51",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 50",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 52",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 56",
          "description": null
        }
      ]
    },
    {
      "id": "Room 52",
      "desc": "Dark Room with a pillar inside",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 51",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 53",
          "description": null
        },
        {
          "type": 2,
          "link": "3 Hooks no eye",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 216",
          "description": null
        }
      ]
    },
    {
      "id": "Room 53",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 52",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 54",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 423",
          "description": null
        }
      ]
    },
    {
      "id": "Room 54",
      "desc": "needs flashlight ?",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 53",
          "description": null
        },
        {
          "type": 3,
          "link": "12 Pillars down",
          "description": null
        }
      ]
    },
    {
      "id": "12 Pillars down",
      "desc": "Has an emoji :) and music",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 54",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 56",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 58",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 101",
          "description": null
        }
      ]
    },
    {
      "id": "Room 56",
      "desc": "Needs flashlight",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "12 Pillars down",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 51",
          "description": null
        }
      ]
    },
    {
      "id": "Room 58",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "12 Pillars down",
          "description": null
        },
        {
          "type": 0,
          "link": "City crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "City crossroad",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 58",
          "description": null
        },
        {
          "type": 3,
          "link": "Red pooltoy",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 389",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 453",
          "description": null
        }
      ]
    },
    {
      "id": "Red pooltoy",
      "desc": "an emoji has come out :c",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "City crossroad",
          "description": null
        },
        {
          "type": 0,
          "link": "EYE SIEGE",
          "description": null
        }
      ]
    },
    {
      "id": "EYE SIEGE",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Red pooltoy",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 387",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 62",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 309",
          "description": null
        }
      ]
    },
    {
      "id": "Room 62",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "EYE SIEGE",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 63",
          "description": null
        }
      ]
    },
    {
      "id": "Room 63",
      "desc": "Has music",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 62",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 64",
          "description": null
        }
      ]
    },
    {
      "id": "Room 64",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 4,
          "link": "Room 63",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 65",
          "description": null
        }
      ]
    },
    {
      "id": "Room 65",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 64",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 66",
          "description": null
        }
      ]
    },
    {
      "id": "Room 66",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Room 65",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 432",
          "description": null
        },
        {
          "type": 2,
          "link": "12 Pillars up",
          "description": null
        }
      ]
    },
    {
      "id": "12 Pillars up",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Room 66",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 206",
          "description": null
        }
      ]
    },
    {
      "id": "Room 69",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 4,
          "link": "Room 5",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 70",
          "description": null
        }
      ]
    },
    {
      "id": "Room 70",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 69",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 71",
          "description": null
        }
      ]
    },
    {
      "id": "Room 71",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 70",
          "description": null
        },
        {
          "type": 0,
          "link": "Pijurro",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 72",
          "description": null
        }
      ]
    },
    {
      "id": "Room 72",
      "desc": "Dark. Little stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 71",
          "description": null
        },
        {
          "type": 1,
          "link": "Blue fusilli",
          "description": null
        }
      ]
    },
    {
      "id": "Room 74",
      "desc": "/!\\ Room 5",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 5",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 76",
          "description": null
        },
        {
          "type": 5,
          "link": "Bush north",
          "description": null
        }
      ]
    },
    {
      "id": "Room 76",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 74",
          "description": null
        },
        {
          "type": 3,
          "link": "2 Red fusillis",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 77",
          "description": null
        },
        {
          "type": 1,
          "link": "3 Hooks no eye",
          "description": null
        }
      ]
    },
    {
      "id": "Room 77",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 4,
          "link": "Room 76",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 78",
          "description": null
        },
        {
          "type": 2,
          "link": "Purple pooltoy",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 227",
          "description": null
        }
      ]
    },
    {
      "id": "Room 78",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 77",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 79",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 222",
          "description": null
        }
      ]
    },
    {
      "id": "Room 79",
      "desc": "stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 78",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 80",
          "description": null
        }
      ]
    },
    {
      "id": "Room 80",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 79",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 81",
          "description": null
        }
      ]
    },
    {
      "id": "Room 81",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 80",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 82",
          "description": null
        }
      ]
    },
    {
      "id": "Room 82",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 81",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 83",
          "description": null
        }
      ]
    },
    {
      "id": "Room 83",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 82",
          "description": null
        },
        {
          "type": 0,
          "link": "Enter the green slide",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 96",
          "description": null
        }
      ]
    },
    {
      "id": "Enter the green slide",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 83",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 85",
          "description": null
        }
      ]
    },
    {
      "id": "Room 85",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Enter the green slide",
          "description": null
        },
        {
          "type": 3,
          "link": "Radio pick 3",
          "description": null
        }
      ]
    },
    {
      "id": "Radio pick 3",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 85",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 87",
          "description": null
        },
        {
          "type": 1,
          "link": "Purple cornello",
          "description": null
        },
        {
          "type": 0,
          "link": "360 Green slide",
          "description": null
        },
        {
          "type": 2,
          "link": "8 Green slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 87",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Radio pick 3",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 430",
          "description": null
        }
      ]
    },
    {
      "id": "Purple cornello",
      "desc": "the pool is filled with emojis..",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Radio pick 3",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 90",
          "description": null
        }
      ]
    },
    {
      "id": "Room 90",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Purple cornello",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 91",
          "description": null
        }
      ]
    },
    {
      "id": "Room 91",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 4,
          "link": "Room 90",
          "description": null
        },
        {
          "type": 0,
          "link": "Red slides start",
          "description": null
        }
      ]
    },
    {
      "id": "Red slides start",
      "desc": "6 red slides, 3 east 3 west. its dark",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 91",
          "description": null
        },
        {
          "type": 2,
          "link": "Corridor",
          "description": null
        }
      ]
    },
    {
      "id": "Corridor",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Red slides start",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 94",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 445",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 442",
          "description": null
        }
      ]
    },
    {
      "id": "Room 94",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Corridor",
          "description": null
        },
        {
          "type": 4,
          "link": "Room 95",
          "description": null
        }
      ]
    },
    {
      "id": "Room 95",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Room 94",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 96",
          "description": null
        }
      ]
    },
    {
      "id": "Room 96",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 95",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 83",
          "description": null
        },
        {
          "type": 1,
          "link": "12 Pillars down west",
          "description": null
        }
      ]
    },
    {
      "id": "12 Pillars down west",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 96",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 98",
          "description": null
        }
      ]
    },
    {
      "id": "Room 98",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "12 Pillars down west",
          "description": null
        },
        {
          "type": 1,
          "link": "Tomb",
          "description": null
        },
        {
          "type": 2,
          "link": "Hexagon lights",
          "description": null
        }
      ]
    },
    {
      "id": "Tomb",
      "desc": "little stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 98",
          "description": null
        },
        {
          "type": 4,
          "link": "Very dark L stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Very dark L stairs",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Tomb",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 101",
          "description": null
        }
      ]
    },
    {
      "id": "Room 101",
      "desc": "secret ???",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Very dark L stairs",
          "description": null
        },
        {
          "type": 0,
          "link": "12 Pillars down",
          "description": null
        }
      ]
    },
    {
      "id": "3 Hooks no eye",
      "desc": "3 orange slides",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 52",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 76",
          "description": null
        },
        {
          "type": 2,
          "link": "Talk to me",
          "description": null
        }
      ]
    },
    {
      "id": "2 Red fusillis",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 76",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 224",
          "description": null
        },
        {
          "type": 3,
          "link": "Big crossroad A",
          "description": null
        }
      ]
    },
    {
      "id": "Big crossroad A",
      "desc": "view on 2 passages upside",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "2 Red fusillis",
          "description": null
        },
        {
          "type": 0,
          "link": "Radio Pick 2",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 423",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 421",
          "description": null
        }
      ]
    },
    {
      "id": "Room 107",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 3",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 109",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 108",
          "description": null
        }
      ]
    },
    {
      "id": "Room 108",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 4,
          "link": "Room 107",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 110",
          "description": null
        }
      ]
    },
    {
      "id": "Room 109",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 107",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 117",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 142",
          "description": null
        }
      ]
    },
    {
      "id": "Room 110",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Room 108",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 111",
          "description": null
        },
        {
          "type": 3,
          "link": "Botomless pit",
          "description": null
        }
      ]
    },
    {
      "id": "Room 111",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 110",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 112",
          "description": null
        }
      ]
    },
    {
      "id": "Room 112",
      "desc": "DARK ROOM contains stairs",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 111",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 113",
          "description": null
        }
      ]
    },
    {
      "id": "Room 113",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 112",
          "description": null
        },
        {
          "type": 3,
          "link": "Fren stairs !",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 114",
          "description": null
        }
      ]
    },
    {
      "id": "Room 114",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 113",
          "description": null
        },
        {
          "type": 2,
          "link": "pediluv",
          "description": null
        }
      ]
    },
    {
      "id": "pediluv",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 114",
          "description": null
        },
        {
          "type": 1,
          "link": "3 Indigo slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 117",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 109",
          "description": null
        },
        {
          "type": 1,
          "link": "Rectangle trapezoid",
          "description": null
        }
      ]
    },
    {
      "id": "Rectangle trapezoid",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 117",
          "description": null
        },
        {
          "type": 2,
          "link": "Yellow 2 pooltoy",
          "description": null
        }
      ]
    },
    {
      "id": "Yellow 2 pooltoy",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Rectangle trapezoid",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 120",
          "description": null
        },
        {
          "type": 2,
          "link": "2 Red slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 120",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Yellow 2 pooltoy",
          "description": null
        },
        {
          "type": 1,
          "link": "Snake green slide",
          "description": null
        },
        {
          "type": 1,
          "link": "Big crossroad B",
          "description": null
        }
      ]
    },
    {
      "id": "2 Red slides",
      "desc": "dark stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Yellow 2 pooltoy",
          "description": null
        },
        {
          "type": 3,
          "link": "octogon",
          "description": null
        }
      ]
    },
    {
      "id": "octogon",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "2 Red slides",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 123",
          "description": null
        }
      ]
    },
    {
      "id": "Room 123",
      "desc": "dark stairs again. inside.",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "octogon",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 124",
          "description": null
        }
      ]
    },
    {
      "id": "Room 124",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 123",
          "description": null
        },
        {
          "type": 2,
          "link": "Red room",
          "description": null
        }
      ]
    },
    {
      "id": "Red room",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 124",
          "description": null
        },
        {
          "type": 5,
          "link": "Radio pick 4",
          "description": null
        }
      ]
    },
    {
      "id": "Radio pick 4",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 4,
          "link": "Red room",
          "description": null
        },
        {
          "type": 0,
          "link": "Diagonal clouds",
          "description": null
        }
      ]
    },
    {
      "id": "Diagonal clouds",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Radio pick 4",
          "description": null
        },
        {
          "type": 0,
          "link": "Dark cloud threeway",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 393",
          "description": null
        }
      ]
    },
    {
      "id": "Dark cloud threeway",
      "desc": "Corridor",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Diagonal clouds",
          "description": null
        },
        {
          "type": 3,
          "link": "Shady slider ends",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 302",
          "description": null
        }
      ]
    },
    {
      "id": "Shady slider ends",
      "desc": "chair !!!!",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Dark cloud threeway",
          "description": null
        },
        {
          "type": 3,
          "link": "Corridor with window",
          "description": null
        }
      ]
    },
    {
      "id": "Corridor with window",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Shady slider ends",
          "description": null
        },
        {
          "type": 3,
          "link": "2 Door sizes",
          "description": null
        }
      ]
    },
    {
      "id": "Room 132",
      "desc": "Dark stairs ",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "If i could climb",
          "description": null
        },
        {
          "type": 3,
          "link": "2 Door sizes",
          "description": null
        }
      ]
    },
    {
      "id": "If i could climb",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 132",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 134",
          "description": null
        }
      ]
    },
    {
      "id": "Room 134",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "If i could climb",
          "description": null
        },
        {
          "type": 2,
          "link": "Handrails for doors",
          "description": null
        }
      ]
    },
    {
      "id": "Handrails for doors",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Room 134",
          "description": null
        },
        {
          "type": 0,
          "link": "Dark passage",
          "description": null
        },
        {
          "type": 1,
          "link": "Fren stairs !",
          "description": null
        },
        {
          "type": 2,
          "link": "Red and green slides",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 167",
          "description": null
        },
        {
          "type": 0,
          "link": "4 Blue slides",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 170",
          "description": null
        }
      ]
    },
    {
      "id": "Fren stairs !",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 113",
          "description": null
        },
        {
          "type": 0,
          "link": "Handrails for doors",
          "description": null
        }
      ]
    },
    {
      "id": "Red and green slides",
      "desc": "Stairs stairs stairs stairs (4x)",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Handrails for doors",
          "description": null
        },
        {
          "type": 2,
          "link": "CHIBRAX",
          "description": null
        }
      ]
    },
    {
      "id": "CHIBRAX",
      "desc": "has music",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Red and green slides",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 142",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 350",
          "description": null
        }
      ]
    },
    {
      "id": "Room 142",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "CHIBRAX",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 109",
          "description": null
        }
      ]
    },
    {
      "id": "Dark passage",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Handrails for doors",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 145",
          "description": null
        }
      ]
    },
    {
      "id": "Room 145",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Dark passage",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 146",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 148",
          "description": null
        }
      ]
    },
    {
      "id": "Room 146",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 145",
          "description": null
        },
        {
          "type": 4,
          "link": "Radiator",
          "description": null
        }
      ]
    },
    {
      "id": "Radiator",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 5,
          "link": "Room 146",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 352",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 355",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 350",
          "description": null
        }
      ]
    },
    {
      "id": "Room 148",
      "desc": "Stairs inside ",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 145",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 149",
          "description": null
        }
      ]
    },
    {
      "id": "Room 149",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 148",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 245",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 247",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 150",
          "description": null
        }
      ]
    },
    {
      "id": "Room 150",
      "desc": "pitch black room",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 149",
          "description": null
        },
        {
          "type": 2,
          "link": "Stairs with a bush",
          "description": null
        }
      ]
    },
    {
      "id": "Stairs with a bush",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 150",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 152",
          "description": null
        }
      ]
    },
    {
      "id": "Room 152",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Stairs with a bush",
          "description": null
        },
        {
          "type": 3,
          "link": "Between the blocks",
          "description": null
        }
      ]
    },
    {
      "id": "Between the blocks",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 152",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 154",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 359",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 357",
          "description": null
        }
      ]
    },
    {
      "id": "Room 154",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Between the blocks",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 155",
          "description": null
        }
      ]
    },
    {
      "id": "Room 155",
      "desc": "stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 154",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 156",
          "description": null
        }
      ]
    },
    {
      "id": "Room 156",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 155",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 157",
          "description": null
        }
      ]
    },
    {
      "id": "Room 157",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 156",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 158",
          "description": null
        }
      ]
    },
    {
      "id": "Room 158",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 157",
          "description": null
        },
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Og city",
      "desc": "Flashlight needed for west",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "3 Hooks",
          "description": null
        },
        {
          "type": 3,
          "link": "Arcs no light",
          "description": null
        }
      ]
    },
    {
      "id": "Elevator exit",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 3",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 163",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 263",
          "description": null
        }
      ]
    },
    {
      "id": "Room 163",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Elevator exit",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 165",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 353",
          "description": null
        },
        {
          "type": 0,
          "link": "RGB slides",
          "description": null
        }
      ]
    },
    {
      "id": "RGB slides",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 163",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 245",
          "description": null
        }
      ]
    },
    {
      "id": "Room 165",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 163",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 260",
          "description": null
        },
        {
          "type": 5,
          "link": "Room 167",
          "description": null
        }
      ]
    },
    {
      "id": "Room 167",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Handrails for doors",
          "description": null
        },
        {
          "type": 4,
          "link": "Room 165",
          "description": null
        }
      ]
    },
    {
      "id": "4 Blue slides",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Handrails for doors",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 243",
          "description": null
        }
      ]
    },
    {
      "id": "Room 170",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Handrails for doors",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 171",
          "description": null
        }
      ]
    },
    {
      "id": "Room 171",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 170",
          "description": null
        },
        {
          "type": 1,
          "link": "Maintenance",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 196",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 180",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 194",
          "description": null
        }
      ]
    },
    {
      "id": "Maintenance",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 171",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 173",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 342",
          "description": null
        },
        {
          "type": 1,
          "link": "Tree top",
          "description": null
        }
      ]
    },
    {
      "id": "Room 173",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Maintenance",
          "description": null
        },
        {
          "type": 3,
          "link": "Color codes",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 337",
          "description": null
        }
      ]
    },
    {
      "id": "Color codes",
      "desc": "ALARM ALARM ALARM",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 173",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 175",
          "description": null
        }
      ]
    },
    {
      "id": "Room 175",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Color codes",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 176",
          "description": null
        },
        {
          "type": 3,
          "link": "Og city window",
          "description": null
        }
      ]
    },
    {
      "id": "Room 176",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 175",
          "description": null
        },
        {
          "type": 2,
          "link": "Staircage up",
          "description": null
        }
      ]
    },
    {
      "id": "Staircage up",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 176",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 179",
          "description": null
        },
        {
          "type": 4,
          "link": "Staircage down",
          "description": null
        }
      ]
    },
    {
      "id": "Staircage down",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Staircage up",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 182",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 337",
          "description": null
        }
      ]
    },
    {
      "id": "Room 179",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Staircage up",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 180",
          "description": null
        }
      ]
    },
    {
      "id": "Room 180",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 179",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 171",
          "description": null
        }
      ]
    },
    {
      "id": "Room 182",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Staircage down",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 183",
          "description": null
        }
      ]
    },
    {
      "id": "Room 183",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 182",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 184",
          "description": null
        }
      ]
    },
    {
      "id": "Room 184",
      "desc": "View on 3 hooks with eye",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 183",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 185",
          "description": null
        }
      ]
    },
    {
      "id": "Room 185",
      "desc": "Dark with stairs",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 184",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 187",
          "description": null
        }
      ]
    },
    {
      "id": "Pijurro",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 71",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 188",
          "description": null
        }
      ]
    },
    {
      "id": "Room 187",
      "desc": "view on _|-",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 185",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 188",
          "description": null
        }
      ]
    },
    {
      "id": "Room 188",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 187",
          "description": null
        },
        {
          "type": 1,
          "link": "Pijurro",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 190",
          "description": null
        }
      ]
    },
    {
      "id": "Room 190",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 188",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 191",
          "description": null
        }
      ]
    },
    {
      "id": "Room 191",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 190",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 192",
          "description": null
        }
      ]
    },
    {
      "id": "Room 192",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 191",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 193",
          "description": null
        }
      ]
    },
    {
      "id": "Room 193",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 192",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 194",
          "description": null
        }
      ]
    },
    {
      "id": "Room 194",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 193",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 171",
          "description": null
        }
      ]
    },
    {
      "id": "Room 196",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 171",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 197",
          "description": null
        }
      ]
    },
    {
      "id": "Room 197",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 196",
          "description": null
        },
        {
          "type": 2,
          "link": "Kiss fren !",
          "description": null
        }
      ]
    },
    {
      "id": "Kiss fren !",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 197",
          "description": null
        },
        {
          "type": 2,
          "link": "City pool",
          "description": null
        }
      ]
    },
    {
      "id": "City pool",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Kiss fren !",
          "description": null
        },
        {
          "type": 2,
          "link": "Purple spiral",
          "description": null
        }
      ]
    },
    {
      "id": "Purple spiral",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "City pool",
          "description": null
        },
        {
          "type": 1,
          "link": "3 big plants",
          "description": null
        }
      ]
    },
    {
      "id": "3 big plants",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Purple spiral",
          "description": null
        },
        {
          "type": 3,
          "link": "Wave crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Wave crossroad",
      "desc": "Wave",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "3 big plants",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 357",
          "description": null
        },
        {
          "type": 2,
          "link": "2 Door sizes",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 366",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 204",
          "description": null
        },
        {
          "type": 3,
          "link": "hydroponics",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 441",
          "description": null
        },
        {
          "type": 0,
          "link": "Coliseum",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 435",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 437",
          "description": null
        }
      ]
    },
    {
      "id": "Coliseum",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 240",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 278",
          "description": null
        }
      ]
    },
    {
      "id": "Room 204",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Nice stairs",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 205",
          "description": null
        }
      ]
    },
    {
      "id": "Room 205",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 204",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 206",
          "description": null
        }
      ]
    },
    {
      "id": "Room 206",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 205",
          "description": null
        },
        {
          "type": 3,
          "link": "12 Pillars up",
          "description": null
        }
      ]
    },
    {
      "id": "Nice stairs",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 204",
          "description": null
        },
        {
          "type": 2,
          "link": "Red pooltoy 2",
          "description": null
        }
      ]
    },
    {
      "id": "Red pooltoy 2",
      "desc": "rip",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Nice stairs",
          "description": null
        },
        {
          "type": 2,
          "link": "Bagel top",
          "description": null
        }
      ]
    },
    {
      "id": "Bagel top",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Red pooltoy 2",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 211",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 433",
          "description": null
        },
        {
          "type": 2,
          "link": "Screamer",
          "description": null
        }
      ]
    },
    {
      "id": "Room 211",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Bagel top",
          "description": null
        },
        {
          "type": 4,
          "link": "Room 212",
          "description": null
        }
      ]
    },
    {
      "id": "Room 212",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Room 211",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 213",
          "description": null
        }
      ]
    },
    {
      "id": "Room 213",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 212",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 214",
          "description": null
        }
      ]
    },
    {
      "id": "Room 214",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 213",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 215",
          "description": null
        }
      ]
    },
    {
      "id": "Room 215",
      "desc": "Starirs",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 214",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 216",
          "description": null
        }
      ]
    },
    {
      "id": "Room 216",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 215",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 52",
          "description": null
        }
      ]
    },
    {
      "id": "Purple pooltoy",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 77",
          "description": null
        },
        {
          "type": 0,
          "link": "Botomless pit",
          "description": null
        },
        {
          "type": 2,
          "link": "Snake green slide",
          "description": null
        }
      ]
    },
    {
      "id": "Snake green slide",
      "desc": "Stairs inside",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Purple pooltoy",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 286",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 222",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 120",
          "description": null
        }
      ]
    },
    {
      "id": "Room 222",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Snake green slide",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 78",
          "description": null
        }
      ]
    },
    {
      "id": "Room 224",
      "desc": "stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "2 Red fusillis",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 225",
          "description": null
        }
      ]
    },
    {
      "id": "Room 225",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 224",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 226",
          "description": null
        }
      ]
    },
    {
      "id": "Room 226",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 225",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 227",
          "description": null
        }
      ]
    },
    {
      "id": "Room 227",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 226",
          "description": null
        },
        {
          "type": 0,
          "link": "Worst stairs ever",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 77",
          "description": null
        }
      ]
    },
    {
      "id": "Worst stairs ever",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 227",
          "description": null
        },
        {
          "type": 0,
          "link": "Under the worst stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Under the worst stairs",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Worst stairs ever",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 231",
          "description": null
        }
      ]
    },
    {
      "id": "Room 231",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Under the worst stairs",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 232",
          "description": null
        }
      ]
    },
    {
      "id": "Room 232",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 231",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 233",
          "description": null
        }
      ]
    },
    {
      "id": "Room 233",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 232",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 234",
          "description": null
        },
        {
          "type": 0,
          "link": "Little square cross",
          "description": null
        }
      ]
    },
    {
      "id": "Room 234",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 233",
          "description": null
        },
        {
          "type": 3,
          "link": "Tree base",
          "description": null
        }
      ]
    },
    {
      "id": "Room 237",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Little square cross",
          "description": null
        },
        {
          "type": 2,
          "link": "Pools in stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Pools in stairs",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 237",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 239",
          "description": null
        }
      ]
    },
    {
      "id": "Room 239",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Pools in stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Room 240",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Coliseum",
          "description": null
        },
        {
          "type": 2,
          "link": "6 Indigo slides",
          "description": null
        }
      ]
    },
    {
      "id": "6 Indigo slides",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 240",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 242",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 360",
          "description": null
        }
      ]
    },
    {
      "id": "Room 242",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "6 Indigo slides",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 243",
          "description": null
        }
      ]
    },
    {
      "id": "Room 243",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 242",
          "description": null
        },
        {
          "type": 3,
          "link": "4 Blue slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 245",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 149",
          "description": null
        },
        {
          "type": 0,
          "link": "RGB slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 247",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 149",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 248",
          "description": null
        }
      ]
    },
    {
      "id": "Room 248",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 247",
          "description": null
        },
        {
          "type": 0,
          "link": "One weird window",
          "description": null
        }
      ]
    },
    {
      "id": "One weird window",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Room 248",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 254",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 252",
          "description": null
        }
      ]
    },
    {
      "id": "3 Hooks",
      "desc": "HI EYE",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Og city",
          "description": null
        },
        {
          "type": 3,
          "link": "Green pooltoy",
          "description": null
        },
        {
          "type": 2,
          "link": "3 Orange slides",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 268",
          "description": null
        }
      ]
    },
    {
      "id": "3 Orange slides",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "3 Hooks",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 252",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 258",
          "description": null
        }
      ]
    },
    {
      "id": "Room 252",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "3 Orange slides",
          "description": null
        },
        {
          "type": 2,
          "link": "One weird window",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 266",
          "description": null
        }
      ]
    },
    {
      "id": "Room 254",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "One weird window",
          "description": null
        },
        {
          "type": 2,
          "link": "4 circle lights",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 283",
          "description": null
        }
      ]
    },
    {
      "id": "4 circle lights",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 254",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 256",
          "description": null
        }
      ]
    },
    {
      "id": "Room 256",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "4 circle lights",
          "description": null
        },
        {
          "type": 1,
          "link": "Carousel",
          "description": null
        }
      ]
    },
    {
      "id": "Carousel",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 256",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 258",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 355",
          "description": null
        }
      ]
    },
    {
      "id": "Room 258",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Carousel",
          "description": null
        },
        {
          "type": 0,
          "link": "3 Orange slides",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 260",
          "description": null
        }
      ]
    },
    {
      "id": "Room 260",
      "desc": "4 pillars inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 258",
          "description": null
        },
        {
          "type": 1,
          "link": "Tomb corridor",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 165",
          "description": null
        }
      ]
    },
    {
      "id": "Tomb corridor",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 260",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 4",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 265",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 263",
          "description": null
        }
      ]
    },
    {
      "id": "Room 263",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Tomb corridor",
          "description": null
        },
        {
          "type": 2,
          "link": "Elevator exit",
          "description": null
        }
      ]
    },
    {
      "id": "Room 265",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Tomb corridor",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 268",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 266",
          "description": null
        }
      ]
    },
    {
      "id": "Room 266",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 265",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 252",
          "description": null
        }
      ]
    },
    {
      "id": "Room 268",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 265",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 270",
          "description": null
        },
        {
          "type": 0,
          "link": "3 Hooks",
          "description": null
        }
      ]
    },
    {
      "id": "Room 270",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 268",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 330",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 28",
          "description": null
        }
      ]
    },
    {
      "id": "Green pooltoy",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "3 Hooks",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 283",
          "description": null
        }
      ]
    },
    {
      "id": "Room 278",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Coliseum",
          "description": null
        },
        {
          "type": 4,
          "link": "Room 279",
          "description": null
        }
      ]
    },
    {
      "id": "Room 279",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 5,
          "link": "Room 278",
          "description": null
        },
        {
          "type": 0,
          "link": "Open corridor",
          "description": null
        }
      ]
    },
    {
      "id": "Open corridor",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 279",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 281",
          "description": null
        }
      ]
    },
    {
      "id": "Room 281",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Open corridor",
          "description": null
        },
        {
          "type": 3,
          "link": "Quadstairs D",
          "description": null
        }
      ]
    },
    {
      "id": "Quadstairs D",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 281",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 283",
          "description": null
        }
      ]
    },
    {
      "id": "Room 283",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Quadstairs D",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 254",
          "description": null
        },
        {
          "type": 1,
          "link": "Green pooltoy",
          "description": null
        }
      ]
    },
    {
      "id": "Room 286",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Snake green slide",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 287",
          "description": null
        }
      ]
    },
    {
      "id": "Room 287",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 286",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 288",
          "description": null
        }
      ]
    },
    {
      "id": "Room 288",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 287",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 289",
          "description": null
        },
        {
          "type": 1,
          "link": "Orange and cyan slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 289",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 288",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 290",
          "description": null
        }
      ]
    },
    {
      "id": "Room 290",
      "desc": "View on PRGCGPR",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 289",
          "description": null
        },
        {
          "type": 2,
          "link": "Screamer",
          "description": null
        }
      ]
    },
    {
      "id": "Screamer",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 290",
          "description": null
        },
        {
          "type": 3,
          "link": "Bagel top",
          "description": null
        }
      ]
    },
    {
      "id": "Orange and cyan slides",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 288",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 294",
          "description": null
        }
      ]
    },
    {
      "id": "Room 294",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Orange and cyan slides",
          "description": null
        },
        {
          "type": 2,
          "link": "Elevator 2",
          "description": null
        }
      ]
    },
    {
      "id": "Elevator 2",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 294",
          "description": null
        },
        {
          "type": 2,
          "link": "Church south",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 296",
          "description": null
        },
        {
          "type": 3,
          "link": "Bagel base",
          "description": null
        }
      ]
    },
    {
      "id": "Room 296",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Elevator 2",
          "description": null
        },
        {
          "type": 0,
          "link": "Big crossroad B",
          "description": null
        }
      ]
    },
    {
      "id": "Big crossroad B",
      "desc": "Has no views. 2 bushes and stairs west",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Room 296",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 298",
          "description": null
        },
        {
          "type": 2,
          "link": "Church north",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 120",
          "description": null
        }
      ]
    },
    {
      "id": "Room 298",
      "desc": "Stairs inside. Dark ",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Big crossroad B",
          "description": null
        },
        {
          "type": 2,
          "link": "Church north",
          "description": null
        }
      ]
    },
    {
      "id": "Church north",
      "desc": "Music",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Room 298",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 300",
          "description": null
        },
        {
          "type": 3,
          "link": "Big crossroad B",
          "description": null
        }
      ]
    },
    {
      "id": "Room 300",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Church north",
          "description": null
        },
        {
          "type": 3,
          "link": "Huge stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Huge stairs",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 300",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 302",
          "description": null
        }
      ]
    },
    {
      "id": "Room 302",
      "desc": "chair inside !! 3 blobs, green slider end. clouds.",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Huge stairs",
          "description": null
        },
        {
          "type": 1,
          "link": "Dark cloud threeway",
          "description": null
        }
      ]
    },
    {
      "id": "hydroponics",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Biggest pool",
          "description": null
        }
      ]
    },
    {
      "id": "Biggest pool",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "hydroponics",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 432",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 396",
          "description": null
        },
        {
          "type": 0,
          "link": "Snake path",
          "description": null
        }
      ]
    },
    {
      "id": "Snake path",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Biggest pool",
          "description": null
        },
        {
          "type": 2,
          "link": "Quadstairs E",
          "description": null
        }
      ]
    },
    {
      "id": "Quadstairs E",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Snake path",
          "description": null
        },
        {
          "type": 1,
          "link": "6 Arcs pool",
          "description": null
        }
      ]
    },
    {
      "id": "Room 309",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "EYE SIEGE",
          "description": null
        },
        {
          "type": 0,
          "link": "6 Arcs pool",
          "description": null
        }
      ]
    },
    {
      "id": "6 Arcs pool",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Room 309",
          "description": null
        },
        {
          "type": 0,
          "link": "Quadstairs E",
          "description": null
        },
        {
          "type": 0,
          "link": "Pillars no light",
          "description": null
        },
        {
          "type": 1,
          "link": "Purple slide emoji pool",
          "description": null
        }
      ]
    },
    {
      "id": "Purple slide emoji pool",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "6 Arcs pool",
          "description": null
        },
        {
          "type": 1,
          "link": "Wall pits",
          "description": null
        }
      ]
    },
    {
      "id": "Wall pits",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Purple slide emoji pool",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 313",
          "description": null
        }
      ]
    },
    {
      "id": "Room 313",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Wall pits",
          "description": null
        },
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Room 315",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Screamer B",
          "description": null
        }
      ]
    },
    {
      "id": "Screamer B",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 315",
          "description": null
        },
        {
          "type": 3,
          "link": "Pranker emoji pool",
          "description": null
        }
      ]
    },
    {
      "id": "Pranker emoji pool",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Screamer B",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 318",
          "description": null
        }
      ]
    },
    {
      "id": "Room 318",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Pranker emoji pool",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 319",
          "description": null
        }
      ]
    },
    {
      "id": "Room 319",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 318",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 320",
          "description": null
        }
      ]
    },
    {
      "id": "Room 320",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 319",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 322",
          "description": null
        }
      ]
    },
    {
      "id": "Room 322",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Og city window",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 320",
          "description": null
        }
      ]
    },
    {
      "id": "Og city window",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 322",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 175",
          "description": null
        }
      ]
    },
    {
      "id": "Pillars no light",
      "desc": "Pitch black",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "6 Arcs pool",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 327",
          "description": null
        }
      ]
    },
    {
      "id": "Room 327",
      "desc": "Pitch black. Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Pillars no light",
          "description": null
        },
        {
          "type": 2,
          "link": "Arcs no light",
          "description": null
        }
      ]
    },
    {
      "id": "Arcs no light",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Room 327",
          "description": null
        },
        {
          "type": 2,
          "link": "Og city",
          "description": null
        }
      ]
    },
    {
      "id": "Room 330",
      "desc": "Stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Room 270",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 331",
          "description": null
        }
      ]
    },
    {
      "id": "Room 331",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 330",
          "description": null
        },
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Room 334",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Tree base",
          "description": null
        }
      ]
    },
    {
      "id": "Room 336",
      "desc": "Bush north, stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Big blue spin slide",
          "description": null
        }
      ]
    },
    {
      "id": "Room 337",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Staircage down",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 173",
          "description": null
        }
      ]
    },
    {
      "id": "Tree top",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Maintenance",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 438",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 447",
          "description": null
        }
      ]
    },
    {
      "id": "Room 342",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Maintenance",
          "description": null
        },
        {
          "type": 1,
          "link": "Big blue spin slide",
          "description": null
        }
      ]
    },
    {
      "id": "Big blue spin slide",
      "desc": "Circle in wall north ",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Room 342",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 336",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 345",
          "description": null
        }
      ]
    },
    {
      "id": "Room 345",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Big blue spin slide",
          "description": null
        },
        {
          "type": 2,
          "link": "Access",
          "description": null
        }
      ]
    },
    {
      "id": "Room 347",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Bush north",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 348",
          "description": null
        }
      ]
    },
    {
      "id": "Room 348",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 347",
          "description": null
        },
        {
          "type": 1,
          "link": "Hello fren",
          "description": null
        }
      ]
    },
    {
      "id": "Hello fren",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 348",
          "description": null
        },
        {
          "type": 2,
          "link": "Enter the purple slide",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 366",
          "description": null
        }
      ]
    },
    {
      "id": "Room 350",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "CHIBRAX",
          "description": null
        },
        {
          "type": 0,
          "link": "Radiator",
          "description": null
        }
      ]
    },
    {
      "id": "Room 352",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Radiator",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 353",
          "description": null
        }
      ]
    },
    {
      "id": "Room 353",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 352",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 163",
          "description": null
        }
      ]
    },
    {
      "id": "Room 355",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Radiator",
          "description": null
        },
        {
          "type": 3,
          "link": "Carousel",
          "description": null
        }
      ]
    },
    {
      "id": "Room 357",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 0,
          "link": "Between the blocks",
          "description": null
        }
      ]
    },
    {
      "id": "Room 359",
      "desc": "little stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Between the blocks",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 360",
          "description": null
        }
      ]
    },
    {
      "id": "Room 360",
      "desc": "Contains stairs",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 359",
          "description": null
        },
        {
          "type": 3,
          "link": "6 Indigo slides",
          "description": null
        }
      ]
    },
    {
      "id": "2 Door sizes",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Corridor with window",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 132",
          "description": null
        }
      ]
    },
    {
      "id": "Room 366",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Hello fren",
          "description": null
        }
      ]
    },
    {
      "id": "Enter the purple slide",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Hello fren",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 371",
          "description": null
        },
        {
          "type": 1,
          "link": "Big stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Big stairs",
      "desc": "Huge stairs",
      "size": 1,
      "passages": [
        {
          "type": 0,
          "link": "Enter the purple slide",
          "description": null
        },
        {
          "type": 1,
          "link": "Bagel mid",
          "description": null
        }
      ]
    },
    {
      "id": "Bagel mid",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Big stairs",
          "description": null
        },
        {
          "type": 1,
          "link": "Hexagon lights",
          "description": null
        },
        {
          "type": 4,
          "link": "Bagel base",
          "description": null
        },
        {
          "type": 0,
          "link": "PRGCGPR",
          "description": null
        }
      ]
    },
    {
      "id": "Room 371",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Enter the purple slide",
          "description": null
        },
        {
          "type": 3,
          "link": "Lil green fusilli",
          "description": null
        }
      ]
    },
    {
      "id": "Lil green fusilli",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 371",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 435",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 373",
          "description": null
        }
      ]
    },
    {
      "id": "Room 373",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Lil green fusilli",
          "description": null
        },
        {
          "type": 2,
          "link": "Access",
          "description": null
        }
      ]
    },
    {
      "id": "Access",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 373",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 345",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 375",
          "description": null
        }
      ]
    },
    {
      "id": "Room 375",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Access",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 376",
          "description": null
        }
      ]
    },
    {
      "id": "Room 376",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 375",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 377",
          "description": null
        }
      ]
    },
    {
      "id": "Room 377",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 376",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 448",
          "description": null
        }
      ]
    },
    {
      "id": "2 triangle doors",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 383",
          "description": null
        },
        {
          "type": 3,
          "link": "8 Green slides",
          "description": null
        }
      ]
    },
    {
      "id": "Room 383",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 384",
          "description": null
        },
        {
          "type": 1,
          "link": "2 triangle doors",
          "description": null
        }
      ]
    },
    {
      "id": "Room 384",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 383",
          "description": null
        },
        {
          "type": 3,
          "link": "360 Indigo slide",
          "description": null
        }
      ]
    },
    {
      "id": "360 Indigo slide",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 384",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 386",
          "description": null
        }
      ]
    },
    {
      "id": "Room 386",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "360 Indigo slide",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 387",
          "description": null
        }
      ]
    },
    {
      "id": "Room 387",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 386",
          "description": null
        },
        {
          "type": 1,
          "link": "EYE SIEGE",
          "description": null
        }
      ]
    },
    {
      "id": "Room 389",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "360 Green slide",
          "description": null
        },
        {
          "type": 1,
          "link": "City crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "360 Green slide",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 2,
          "link": "Room 389",
          "description": null
        },
        {
          "type": 1,
          "link": "Radio pick 3",
          "description": null
        }
      ]
    },
    {
      "id": "8 Green slides",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Radio pick 3",
          "description": null
        },
        {
          "type": 2,
          "link": "2 triangle doors",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 394",
          "description": null
        }
      ]
    },
    {
      "id": "Room 394",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "8 Green slides",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 395",
          "description": null
        }
      ]
    },
    {
      "id": "Room 395",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 394",
          "description": null
        },
        {
          "type": 2,
          "link": "Line in wall pool",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 396",
          "description": null
        }
      ]
    },
    {
      "id": "Room 396",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 395",
          "description": null
        },
        {
          "type": 0,
          "link": "Biggest pool",
          "description": null
        }
      ]
    },
    {
      "id": "Line in wall pool",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Room 395",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 403",
          "description": null
        }
      ]
    },
    {
      "id": "Room 402",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 407",
          "description": null
        }
      ]
    },
    {
      "id": "Room 403",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Line in wall pool",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 404",
          "description": null
        }
      ]
    },
    {
      "id": "Room 404",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 403",
          "description": null
        }
      ]
    },
    {
      "id": "Talk to me",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "3 Hooks no eye",
          "description": null
        },
        {
          "type": 1,
          "link": "Bagel base",
          "description": null
        }
      ]
    },
    {
      "id": "Bagel base",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Talk to me",
          "description": null
        },
        {
          "type": 2,
          "link": "Elevator 2",
          "description": null
        },
        {
          "type": 5,
          "link": "Bagel mid",
          "description": null
        }
      ]
    },
    {
      "id": "Church south",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Elevator 2",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 406",
          "description": null
        }
      ]
    },
    {
      "id": "Church east A",
      "desc": "table",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 406",
          "description": null
        },
        {
          "type": 0,
          "link": "Church east B",
          "description": null
        }
      ]
    },
    {
      "id": "Church east B",
      "desc": "cloth, weird windows, old assets",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Church east A",
          "description": null
        },
        {
          "type": 0,
          "link": "Church east C",
          "description": null
        }
      ]
    },
    {
      "id": "Church east C",
      "desc": "cloth and fireplace",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Church east B",
          "description": null
        },
        {
          "type": 2,
          "link": "Scissors stairs",
          "description": null
        }
      ]
    },
    {
      "id": "Scissors stairs",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 3,
          "link": "Church east C",
          "description": null
        },
        {
          "type": 3,
          "link": "Cloud crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Cloud crossroad",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Scissors stairs",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 392",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 405",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 433",
          "description": null
        }
      ]
    },
    {
      "id": "Room 392",
      "desc": "Clouds hanged to ceiling",
      "size": 2,
      "passages": [
        {
          "type": 1,
          "link": "Cloud crossroad",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 393",
          "description": null
        }
      ]
    },
    {
      "id": "Room 393",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 392",
          "description": null
        },
        {
          "type": 3,
          "link": "Diagonal clouds",
          "description": null
        }
      ]
    },
    {
      "id": "PRGCGPR",
      "desc": "stairs inside",
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 405",
          "description": null
        },
        {
          "type": 1,
          "link": "Bagel mid",
          "description": null
        }
      ]
    },
    {
      "id": "Hexagon lights",
      "desc": null,
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Bagel mid",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 98",
          "description": null
        }
      ]
    },
    {
      "id": "Room 405",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Cloud crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "PRGCGPR",
          "description": null
        }
      ]
    },
    {
      "id": "Room 406",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Church south",
          "description": null
        },
        {
          "type": 3,
          "link": "Church east A",
          "description": null
        }
      ]
    },
    {
      "id": "Room 407",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 2,
          "link": "Room 402",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 411",
          "description": null
        }
      ]
    },
    {
      "id": "Room 408",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Triangle crossroad",
          "description": null
        },
        {
          "type": 1,
          "link": "Arc crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Arc crossroad",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 408",
          "description": null
        },
        {
          "type": 3,
          "link": "In 8 green slides",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 447",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 445",
          "description": null
        }
      ]
    },
    {
      "id": "In 8 green slides",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Arc crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 411",
          "description": null
        }
      ]
    },
    {
      "id": "Room 411",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "In 8 green slides",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 407",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 413",
          "description": null
        }
      ]
    },
    {
      "id": "Room 413",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 411",
          "description": null
        },
        {
          "type": 2,
          "link": "Inside room with pillars",
          "description": null
        }
      ]
    },
    {
      "id": "Inside room with pillars",
      "desc": "view on radio pick 3 I think",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 413",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 415",
          "description": null
        }
      ]
    },
    {
      "id": "Room 415",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Inside room with pillars",
          "description": null
        },
        {
          "type": 0,
          "link": "Hexagon drawing ????",
          "description": null
        },
        {
          "type": 3,
          "link": "3 Way corridor",
          "description": null
        }
      ]
    },
    {
      "id": "3 Way corridor",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 415",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 418",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 455",
          "description": null
        }
      ]
    },
    {
      "id": "Room 418",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "3 Way corridor",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 419",
          "description": null
        }
      ]
    },
    {
      "id": "Room 419",
      "desc": "lights north",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 418",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 420",
          "description": null
        }
      ]
    },
    {
      "id": "Room 420",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 419",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 421",
          "description": null
        },
        {
          "type": 1,
          "link": "Radio pick 5",
          "description": null
        }
      ]
    },
    {
      "id": "Room 421",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 420",
          "description": null
        },
        {
          "type": 2,
          "link": "Big crossroad A",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 427",
          "description": null
        }
      ]
    },
    {
      "id": "Room 423",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Big crossroad A",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 53",
          "description": null
        }
      ]
    },
    {
      "id": "Room 427",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 16",
          "description": null
        },
        {
          "type": 1,
          "link": "Room 421",
          "description": null
        }
      ]
    },
    {
      "id": "Radio pick 5",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Room 420",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 430",
          "description": null
        }
      ]
    },
    {
      "id": "Room 430",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Radio pick 5",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 87",
          "description": null
        }
      ]
    },
    {
      "id": "Room 432",
      "desc": "",
      "size": 2,
      "passages": [
        {
          "type": 0,
          "link": "Biggest pool",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 66",
          "description": null
        }
      ]
    },
    {
      "id": "Room 433",
      "desc": null,
      "size": 1,
      "passages": [
        {
          "type": 3,
          "link": "Bagel top",
          "description": null
        },
        {
          "type": 0,
          "link": "Cloud crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Room 435",
      "desc": "",
      "size": 1,
      "passages": [
        {
          "type": 1,
          "link": "Lil green fusilli",
          "description": null
        },
        {
          "type": 2,
          "link": "Wave crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Room 437",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 439",
          "description": null
        }
      ]
    },
    {
      "id": "Room 438",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 0,
          "link": "Tree top",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 439",
          "description": null
        }
      ]
    },
    {
      "id": "Room 439",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 438",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 437",
          "description": null
        }
      ]
    },
    {
      "id": "Room 441",
      "desc": "",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Wave crossroad",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 442",
          "description": null
        }
      ]
    },
    {
      "id": "Room 442",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 441",
          "description": null
        },
        {
          "type": 1,
          "link": "Corridor",
          "description": null
        }
      ]
    },
    {
      "id": "Room 445",
      "desc": "Stairs",
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Corridor",
          "description": null
        },
        {
          "type": 0,
          "link": "Arc crossroad",
          "description": null
        }
      ]
    },
    {
      "id": "Room 447",
      "desc": "Stairs inside",
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Arc crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 448",
          "description": null
        },
        {
          "type": 2,
          "link": "Tree top",
          "description": null
        }
      ]
    },
    {
      "id": "Room 448",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 2,
          "link": "Room 377",
          "description": null
        },
        {
          "type": 3,
          "link": "Room 447",
          "description": null
        }
      ]
    },
    {
      "id": "Room 453",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "City crossroad",
          "description": null
        },
        {
          "type": 2,
          "link": "Room 454",
          "description": null
        }
      ]
    },
    {
      "id": "Room 454",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 3,
          "link": "Room 453",
          "description": null
        },
        {
          "type": 0,
          "link": "Room 455",
          "description": null
        }
      ]
    },
    {
      "id": "Room 455",
      "desc": null,
      "size": 0,
      "passages": [
        {
          "type": 1,
          "link": "Room 454",
          "description": null
        },
        {
          "type": 2,
          "link": "3 Way corridor",
          "description": null
        }
      ]
    }
  ]
}