import React from "react";
import "../css/App.css";
import { useSelector } from "react-redux";
import Board from "./Board";
import ClueBar from "./ClueBar";
import ClueList from "./ClueList";
import { getClueLists } from "../selectors";

export default function PuzzleLayout() {
  const clues = useSelector(getClueLists);

  return (
    <div className="layout">
      <div className="layout-left">
        <ClueBar />
        <Board />
      </div>
      <div className="layout-right">
        <ClueList clues={clues.across} direction="across" />
        <ClueList clues={clues.down} direction="down" />
      </div>
    </div>
  );
}
