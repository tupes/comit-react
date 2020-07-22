import { roadGraph, mailRoute } from './roads.js';
import { randomPick } from './utils.js';

export function randomRobot(state) {
  return { 
    direction: randomPick(roadGraph[state.place])
  };
}

export function routeRobot(state, memory) {
  if (memory.length === 0) {
    memory = mailRoute;
  }

  return { 
    direction: memory[0],
    memory: memory.slice(1)
  };
}

export function goalOrientedRobot({place, parcels}, route) {
  if (route.length !== 0) {
    return { direction: route[0], memory: route.slice(1) };
  }

  // determine next step
  const parcel = parcels[0];
  if (parcel.place !== place) {
    // pick up parcel
    route = findRoute(roadGraph, place, parcel.place);
  } else {
    // deliver parcel to address
    route = findRoute(roadGraph, place, parcel.address);
  }

  return { direction: route[0], memory: route.slice(1) };
}

function findRoute(graph, from, to) {
  const work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) {
        return route.concat(place);
      }
      if (!work.some((w) => w.at === place)) {
        work.push({ 
          at: place, 
          route: route.concat(place)
        });
      }
    }
  }
}