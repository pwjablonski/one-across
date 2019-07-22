export default function findNextClue(currentCell, currentDirection, grid) {
  if (currentDirection === "down") {
    for (let i = currentCell + 1; i < 225; i += 1) {
      if (grid[i] === ".") {
        continue;
      }
      if (i < 15 || grid[i - 15] === ".") {
        return i;
      }
    }
  } else if (currentDirection === "across") {
    for (let i = currentCell + 1; i < 225; i += 1) {
      if (grid[i] === ".") {
        continue;
      }
      if (i % 15 === 0 || grid[i - 1] === ".") {
        return i;
      }
    }
  }
  return 0;
}
