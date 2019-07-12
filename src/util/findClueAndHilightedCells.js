export default function findClueAndHilightecCells(currentDirection, currentCell, grid, gridnums){
    let newHilightedCells = [];
    let lineStart;
    let lineEnd;
    let incrementor;
    let shouldReturnCells = false

    if (currentDirection === 'across'){
        lineStart = currentCell - (currentCell % 15)
        lineEnd = lineStart + 15
        incrementor = 1
    } else if (currentDirection === 'down') {
        lineStart = 0 + (currentCell % 15)
        lineEnd = lineStart + 211
        incrementor = 15
    }

    let newClue = gridnums[lineStart]

    for(let i = lineStart; i < lineEnd; i+=incrementor){
        if(i === currentCell){
            shouldReturnCells = true
        } else if(grid[i] === '.' && shouldReturnCells){
            return {newClue, newHilightedCells}
        } else if(grid[i] === '.' && !shouldReturnCells){
            newHilightedCells = []
            newClue = gridnums[i + incrementor]
        } else {
            newHilightedCells.push(i);
        }
    }
    return {newClue, newHilightedCells};
}