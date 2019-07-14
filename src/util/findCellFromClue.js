export default function findCellFromClue(clue, gridnums){
    var clueNum = clue.slice(0, clue.indexOf('.'))
    return gridnums.findIndex(function(num){
        return num === Number(clueNum)
    })
}