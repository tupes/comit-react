import { roadGraph} from './roads.js';
import { range, randomPick } from './utils.js';

export class VillageState {
  constructor(place, parcels) {
  this.place = place;
  this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    }

    let parcels = this.parcels.map((parcel) => {
      if (parcel.place !== this.place) {
        return parcel;
      }
      return { place: destination,
        address: parcel.address};
    }).filter((parcel) => {
      return parcel.place !== parcel.address;
    });

    return new VillageState(destination, parcels);
  }
}

export function generateParcels(parcelCount = 5) {
  return range(parcelCount).map(() => {
    const address = randomPick(Object.keys(roadGraph));
    const place = randomPick(Object.keys(roadGraph)
    .filter((from) => from !== address));
    return { place, address };
  });
}