export default function findNewCurrentCell(grid, currentCell, keyPressed) {
  let incrementor;
  if (keyPressed === "ArrowDown") {
    incrementor = 15;
  } else if (keyPressed === "ArrowUp") {
    incrementor = -15;
  } else if (keyPressed === "ArrowLeft") {
    incrementor = -1;
  } else if (keyPressed === "ArrowRight") {
    incrementor = 1;
  }

  const nextCell = currentCell + incrementor;

  if (nextCell < 0 || nextCell > grid.length - 1) {
    return currentCell;
  }
  if (grid[nextCell] !== ".") {
    return nextCell;
  }
  return findNewCurrentCell(grid, nextCell, keyPressed);
}
