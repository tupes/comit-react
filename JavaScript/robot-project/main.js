import { goalOrientedRobot as robot } from './robot.js';
import { VillageState, generateParcels } from './village-state.js';

function runRobot(state, robot, memory) {
  for (let turn = 0;; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}


const state = new VillageState(
  "Post Office",
  generateParcels(5)
)

runRobot(state, robot, []);
