
export function range(size, startAt = 0) {
  return [...Array(size).keys()].map(i => i + startAt);
}

export function randomPick(array) {
  const choice = Math.floor(
    Math.random() * array.length);
  return array[choice];
}