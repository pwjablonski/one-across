export default function getCurrentCharacter(state) {
  return state.session.fill[state.ui.currentCell];
}
