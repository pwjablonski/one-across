export default function findCellFromClue(clue, gridnums) {
  const clueNum = clue.slice(0, clue.indexOf("."));
  return gridnums.findIndex(num => {
    return num === Number(clueNum);
  });
}
