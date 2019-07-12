export default function getCurrentClueText(state) {
    const currentClue = state.ui.currentClue;
    const currentDirection = state.ui.currentDirection;
    const clueList = state.currentPuzzle.clues[currentDirection]

    const clue = clueList.find(function(clueListItem){
        var clueNum = clueListItem.slice(0, clueListItem.indexOf('.'))
        return Number(clueNum) === currentClue
    })
    return clue ? clue.slice(clue.indexOf('.') + 2, clue.length): null;
}