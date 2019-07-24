import React from "react";
import "../css/App.css";
import UploadPuzzle from "./UploadPuzzle";

export default function PuzzleSelector() {
  return (
    <div className="choosepuzzle">
      <UploadPuzzle />
    </div>
  );
}
