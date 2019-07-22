export default function getCurrentClueText(state) {
  const { currentClue } = state.ui;
  const { currentDirection } = state.ui;
  const clueList = state.currentPuzzle.clues[currentDirection];

  const clue = clueList.find(clueListItem => {
    const clueNum = clueListItem.slice(0, clueListItem.indexOf("."));
    return Number(clueNum) === currentClue;
  });
  return clue ? clue.slice(clue.indexOf(".") + 2, clue.length) : null;
}
