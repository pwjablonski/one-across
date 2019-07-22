import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";

import {
  getCurrentClue,
  getCurrentClueText,
  getCurrentDirection
} from "../selectors";

export default function ClueBar() {
  const clue = useSelector(getCurrentClue);
  const clueText = useSelector(getCurrentClueText);
  const currentDirection = useSelector(getCurrentDirection);
  const letter = currentDirection === "across" ? "A" : "D";

  return (
    <div className="cluebar">
      <div className="cluebar-number">{`${clue}${letter}`}</div>
      <div className="cluebar-text">{clueText}</div>
    </div>
  );
}
