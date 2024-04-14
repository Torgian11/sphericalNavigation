const constellations = [{
    "name": "Ursa Major",
    "stars": [{
        "name": "Dubhe",
        "ra": 11.03,
        "dec": 61.75
      },
      {
        "name": "Merak",
        "ra": 11.07,
        "dec": 56.38
      }
    ],
    "centroid": {
      "ra": 10.67,
      "dec": 55.38
    },
    "distanceFromSol": 78,
    "neighbors": [{
        "constellation": "Ursa Minor",
        "distance": 3.5
      },
      {
        "constellation": "Orion",
        "distance": 7.2
      },
      {
        "constellation": "Leo",
        "distance": 9.8
      },
      {
        "constellation": "Canis Major",
        "distance": 12.4
      }
    ]
  },
  {
    "name": "Ursa Minor",
    "stars": [{
      "name": "Polaris",
      "ra": 2.6,
      "dec": 89.26
    }],
    "centroid": {
      "ra": 15,
      "dec": 77.67
    },
    "distanceFromSol": 8,
    "neighbors": [{
        "constellation": "Ursa Major",
        "distance": 3.5
      },
      {
        "constellation": "Cassiopeia",
        "distance": 6.1
      },
      {
        "constellation": "Draco",
        "distance": 8.4
      }
    ]
  },
  {
    "name": "Orion",
    "stars": [{
        "name": "Betelgeuse",
        "ra": 5.92,
        "dec": 7.41
      },
      {
        "name": "Rigel",
        "ra": 5.24,
        "dec": -8.2
      },
      {
        "name": "Bellatrix",
        "ra": 5.42,
        "dec": 6.35
      },
      {
        "name": "Mintaka",
        "ra": 5.6,
        "dec": -0.3
      }
    ],
    "centroid": {
      "ra": 5.533,
      "dec": 2.283
    },
    "neighbors": [{
        "constellation": "Ursa Major",
        "distance": 7.2
      },
      {
        "constellation": "Canis Major",
        "distance": 9.5
      },
      {
        "constellation": "Taurus",
        "distance": 10.8
      },
      {
        "constellation": "Gemini",
        "distance": 14.2
      }
    ]
  },
  {
    "name": "Leo",
    "stars": [{
        "name": "Regulus",
        "ra": 10.14,
        "dec": 11.97
      },
      {
        "name": "Denebola",
        "ra": 11.06,
        "dec": 14.57
      }
    ],
    "centroid": {
      "ra": 10.333,
      "dec": 12.767
    },
    "neighbors": [{
        "constellation": "Ursa Major",
        "distance": 9.8
      },
      {
        "constellation": "Virgo",
        "distance": 4.3
      },
      {
        "constellation": "Cancer",
        "distance": 12.7
      },
      {
        "constellation": "Hydra",
        "distance": 15.1
      }
    ]
  },
  {
    "name": "Cassiopeia",
    "stars": [{
        "name": "Schedar",
        "ra": 0.675,
        "dec": 56.537
      },
      {
        "name": "Caph",
        "ra": 0.988,
        "dec": 59.15
      }
    ],
    "centroid": {
      "ra": 0.933,
      "dec": 59.083
    },
    "neighbors": [{
        "constellation": "Ursa Minor",
        "distance": 6.1
      },
      {
        "constellation": "Pegasus",
        "distance": 8.9
      },
      {
        "constellation": "Andromeda",
        "distance": 10.3
      }
    ]
  },
  {
    "name": "Cygnus",
    "stars": [{
        "name": "Deneb",
        "ra": 20.69,
        "dec": 45.28
      },
      {
        "name": "Albireo",
        "ra": 19.51,
        "dec": 27.96
      }
    ],
    "centroid": {
      "ra": 20.1,
      "dec": 41.133
    },
    "neighbors": [{
        "constellation": "Lyra",
        "distance": 4.8
      },
      {
        "constellation": "Draco",
        "distance": 9.2
      },
      {
        "constellation": "Cepheus",
        "distance": 11.5
      }
    ]
  },
  {
    "name": "Pegasus",
    "stars": [{
        "name": "Markab",
        "ra": 23.08,
        "dec": 15.21
      },
      {
        "name": "Scheat",
        "ra": 23.06,
        "dec": 28.08
      }
    ],
    "centroid": {
      "ra": 22.917,
      "dec": 24.217
    },
    "neighbors": [{
        "constellation": "Cassiopeia",
        "distance": 8.9
      },
      {
        "constellation": "Cygnus",
        "distance": 5.2
      },
      {
        "constellation": "Andromeda",
        "distance": 11.4
      }
    ]
  },
  {
    "name": "Boötes",
    "stars": [{
        "name": "Arcturus",
        "ra": 14.26,
        "dec": 19.18
      },
      {
        "name": "Seginus",
        "ra": 14.66,
        "dec": 38.32
      }
    ],
    "centroid": {
      "ra": 14.4,
      "dec": 30.75
    },
    "neighbors": [{
        "constellation": "Virgo",
        "distance": 6.4
      },
      {
        "constellation": "Corona Borealis",
        "distance": 8.1
      },
      {
        "constellation": "Canes Venatici",
        "distance": 9.7
      }
    ]
  },
  {
    "name": "Auriga",
    "stars": [{
        "name": "Capella",
        "ra": 5.278,
        "dec": 45.983
      },
      {
        "name": "Menkalinan",
        "ra": 5.089,
        "dec": 44.95
      }
    ],
    "centroid": {
      "ra": 5.133,
      "dec": 45.633
    },
    "neighbors": [{
        "constellation": "Taurus",
        "distance": 9.2
      },
      {
        "constellation": "Perseus",
        "distance": 6.7
      },
      {
        "constellation": "Gemini",
        "distance": 11.5
      }
    ]
  },
  {
    "name": "Taurus",
    "stars": [{
        "name": "Aldebaran",
        "ra": 4.6,
        "dec": 16.5
      },
      {
        "name": "Elnath",
        "ra": 5.4,
        "dec": 28.6
      }
    ],
    "centroid": {
      "ra": 4.983,
      "dec": 17.55
    },
    "neighbors": [{
        "constellation": "Orion",
        "distance": 10.8
      },
      {
        "constellation": "Auriga",
        "distance": 9.2
      },
      {
        "constellation": "Perseus",
        "distance": 7.1
      }
    ]
  },
  {
    "name": "Canis Major",
    "stars": [{
        "name": "Sirius",
        "ra": 6.75,
        "dec": -16.72
      },
      {
        "name": "Adhara",
        "ra": 6.98,
        "dec": -28.97
      }
    ],
    "centroid": {
      "ra": 7.1,
      "dec": -20.85
    },
    "neighbors": [{
        "constellation": "Orion",
        "distance": 9.5
      },
      {
        "constellation": "Puppis",
        "distance": 7.8
      },
      {
        "constellation": "Gemini",
        "distance": 13.6
      }
    ]
  },
  {
    "name": "Canis Minor",
    "stars": [{
      "name": "Procyon",
      "ra": 7.65,
      "dec": 5.23
    }],
    "centroid": {
      "ra": 7.65,
      "dec": 5.23
    },
    "neighbors": [{
        "constellation": "Gemini",
        "distance": 7.4
      },
      {
        "constellation": "Monoceros",
        "distance": 6.2
      },
      {
        "constellation": "Hydra",
        "distance": 9.8
      }
    ]
  },
  {
    "name": "Virgo",
    "stars": [{
        "name": "Spica",
        "ra": 13.41,
        "dec": -11.16
      },
      {
        "name": "Porrima",
        "ra": 12.82,
        "dec": -1.46
      }
    ],
    "centroid": {
      "ra": 13.113,
      "dec": -6.31
    },
    "neighbors": [{
        "constellation": "Leo",
        "distance": 4.3
      },
      {
        "constellation": "Boötes",
        "distance": 6.4
      },
      {
        "constellation": "Libra",
        "distance": 5.9
      }
    ]
  },
  {
    "name": "Scorpius",
    "stars": [{
        "name": "Antares",
        "ra": 16.49,
        "dec": -26.43
      },
      {
        "name": "Shaula",
        "ra": 17.56,
        "dec": -37.1
      }
    ],
    "centroid": {
      "ra": 16.967,
      "dec": -31.767
    },
    "neighbors": [{
        "constellation": "Sagittarius",
        "distance": 5.7
      },
      {
        "constellation": "Ophiuchus",
        "distance": 8.1
      },
      {
        "constellation": "Libra",
        "distance": 9.3
      }
    ]
  },
  {
    "name": "Aquarius",
    "stars": [{
        "name": "Sadalsuud",
        "ra": 21.42,
        "dec": -5.57
      },
      {
        "name": "Sadalmelik",
        "ra": 22.09,
        "dec": -0.31
      }
    ],
    "centroid": {
      "ra": 21.767,
      "dec": -2.94
    },
    "neighbors": [{
        "constellation": "Pegasus",
        "distance": 9.8
      },
      {
        "constellation": "Pisces",
        "distance": 5.2
      },
      {
        "constellation": "Capricornus",
        "distance": 4.6
      }
    ]
  },
  {
    "name": "Sagittarius",
    "stars": [{
        "name": "Kaus Australis",
        "ra": 18.4,
        "dec": -34.38
      },
      {
        "name": "Nunki",
        "ra": 18.92,
        "dec": -26.3
      }
    ],
    "centroid": {
      "ra": 18.67,
      "dec": -30.34
    },
    "neighbors": [{
        "constellation": "Scorpius",
        "distance": 5.7
      },
      {
        "constellation": "Ophiuchus",
        "distance": 9.2
      },
      {
        "constellation": "Capricornus",
        "distance": 7.5
      }
    ]
  },
  {
    "name": "Capricornus",
    "stars": [{
      "name": "Deneb Algedi",
      "ra": 21.47,
      "dec": -16.13
    }],
    "centroid": {
      "ra": 21.47,
      "dec": -16.13
    },
    "neighbors": [{
        "constellation": "Sagittarius",
        "distance": 7.5
      },
      {
        "constellation": "Aquarius",
        "distance": 4.6
      },
      {
        "constellation": "Microscopium",
        "distance": 5.8
      }
    ]
  },
  {
    "name": "Gemini",
    "stars": [{
        "name": "Pollux",
        "ra": 7.75,
        "dec": 28.03
      },
      {
        "name": "Castor",
        "ra": 7.58,
        "dec": 31.89
      }
    ],
    "centroid": {
      "ra": 7.665,
      "dec": 29.96
    },
    "neighbors": [{
        "constellation": "Taurus",
        "distance": 11.5
      },
      {
        "constellation": "Auriga",
        "distance": 11.5
      },
      {
        "constellation": "Canis Minor",
        "distance": 7.4
      }
    ]
  },
  {
    "name": "Hydra",
    "stars": [{
      "name": "Alphard",
      "ra": 9.46,
      "dec": -8.67
    }],
    "centroid": {
      "ra": 9.46,
      "dec": -8.67
    },
    "neighbors": [{
        "constellation": "Leo",
        "distance": 15.1
      },
      {
        "constellation": "Virgo",
        "distance": 11.2
      },
      {
        "constellation": "Crater",
        "distance": 6.9
      }
    ]
  },
  {
    "name": "Eridanus",
    "stars": [{
      "name": "Achernar",
      "ra": 1.63,
      "dec": -57.24
    }],
    "centroid": {
      "ra": 1.63,
      "dec": -57.24
    },
    "neighbors": [{
        "constellation": "Orion",
        "distance": 14.3
      },
      {
        "constellation": "Taurus",
        "distance": 16.2
      },
      {
        "constellation": "Cetus",
        "distance": 5.9
      }
    ]
  },
  {
    "name": "Lyra",
    "stars": [{
      "name": "Vega",
      "ra": 18.62,
      "dec": 38.78
    }],
    "centroid": {
      "ra": 18.62,
      "dec": 38.78
    },
    "neighbors": [{
        "constellation": "Cygnus",
        "distance": 4.8
      },
      {
        "constellation": "Draco",
        "distance": 8.9
      },
      {
        "constellation": "Hercules",
        "distance": 10.7
      }
    ]
  }
];

/*  May have messed this up */
const calcAngularDistance = (ra1, dec1, ra2, dec2) => {
  // Convert RA and Dec from degrees to radians
  const ra1Rad = ra1 * (Math.PI / 180);
  const dec1Rad = dec1 * (Math.PI / 180);
  const ra2Rad = ra2 * (Math.PI / 180);
  const dec2Rad = dec2 * (Math.PI / 180);

  // Apply the spherical law of cosines
  const distance = Math.acos(
    Math.sin(dec1Rad) * Math.sin(dec2Rad) +
    Math.cos(dec1Rad) * Math.cos(dec2Rad) * Math.cos(ra1Rad - ra2Rad)
  );

  // Returns the angular distance in radians. For degrees, multiply by 180/Math.PI
  return distance;
}

const distances = calcAngularDistance(constellations[0].centroid.ra, constellations[0].centroid.dec, constellations[1].centroid.ra, constellations[1].centroid.dec)

// calcSpatialDistance wont' work unless I re-add `distanceFromSol` to it. Not sure if this is useful or not for increasing accuracy.

/* function calcSpatialDistance(constellation1, constellation2) {
  // Get the distance of each constellation from Sol
  const distance1 = constellation1.distanceFromSol;
  const distance2 = constellation2.distanceFromSol;

  // Get the angular distance between the two constellations using their centroids
  const angularDistance = calcAngularDistance(constellation1.centroid.ra, constellation1.centroid.dec, constellation2.centroid.ra, constellation2.centroid.dec);

  // Use original function. This is like using the Pythagorean theorem but in 3D space....
  // I think...
  const chordLength = calcDistance(constellation1.centroid.ra, constellation1.centroid.dec, constellation2.centroid.ra, constellation2.centroid.dec);

  // I think this is Euclidean space.
  return Math.sqrt(distance1 ** 2 + distance2 ** 2 - 2 * distance1 * distance2 * Math.cos(angularDistance));
} */

const calcDistance = (ra1, dec1, ra2, dec2) => {
  // Rectangular Coordinates of first constellation
  const x1Coords = Math.cos(ra1) * Math.cos(dec1)
  const y1Coords = Math.sin(ra1) * Math.cos(dec1)
  const z1Coords = Math.sin(dec1)

  // Rectangular Coordinates of second constellation
  const x2Coords = Math.cos(ra2) * Math.cos(dec2)
  const y2Coords = Math.sin(ra2) * Math.cos(dec2)
  const z2Coords = Math.sin(dec2)

  // Coordinate Differences

  const dx = (x2Coords - x1Coords)
  const dy = (y2Coords - y1Coords)
  const dz = (z2Coords - z1Coords)

  // Distance

  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
  return distance
}

/* const distance2 = calcSpatialDistance(constellations[0], constellations[1]); */


/* const findShortestPath = (startConstellationName, endConstellationName) => {
  const distances = {};
  const previous = {};
  const unvisited = new Set();

  // Initialize distances
  for (const constellation of constellations) {
 */
function findShortestPathDijkstra(startConstellationName, endConstellationName) {
    if (!startConstellationName || !endConstellationName) {
        throw new Error('Start and end constellation names are required.');
    }

    const startConstellation = constellations.find(c => c.name === startConstellationName);
    const endConstellation = constellations.find(c => c.name === endConstellationName);

    if (!startConstellation || !endConstellation) {
        throw new Error(`Constellation "${startConstellationName}" or "${endConstellationName}" not found. Please check and re-enter your start and end constellation names.`);
    }

    const distances = {};
    const previous = {};
    const unvisited = new Set(); 

    // Initialize distances
    for (const constellation of constellations) {
        distances[constellation.name] = Infinity; 
        previous[constellation.name] = null; 
        unvisited.add(constellation.name); 
    }
    distances[startConstellationName] = 0; 

    while (unvisited.size > 0) {
        // Find node with the smallest known distance
        let currentNode = Array.from(unvisited).reduce((minNode, node) => 
            distances[node] < distances[minNode] ? node : minNode
        );

        // Early exit if endConstellation is reached
        if (currentNode === endConstellationName) {
            break;
        }

        unvisited.delete(currentNode);

        const currentNodeData = constellations.find(c => c.name === currentNode);
        for (const neighbor of currentNodeData.neighbors) {
            const altDistance = distances[currentNode] + neighbor.distance;
            if (altDistance < distances[neighbor.constellation]) {
                distances[neighbor.constellation] = altDistance;
                previous[neighbor.constellation] = currentNode;
            }
        } 
    }

    // Path Reconstruction
    const path = [];
    let currentNode = endConstellationName;
    while (previous[currentNode]) {
        path.unshift(currentNode);
        currentNode = previous[currentNode];
    }
    path.unshift(startConstellationName);

    return path.length > 1 ? path : null; // Return null if no path found
}
const path = findShortestPathDijkstra('Ursa Minor', 'Boötes');

if (path) {
  console.log("Path: ", path); // e.g., ["Orion", "Taurus", "Perseus", "Cassiopeia"]
} else {
  console.log("No path found between the constellations");
}
