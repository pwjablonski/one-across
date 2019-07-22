import React from "react";
import "../css/App.css";
import { useSelector, useDispatch } from "react-redux";
import Cell from "./Cell";
import { cellSelected } from "../actions";
import {
  getCurrentPuzzleGrid,
  getCurrentPuzzleGridNums,
  getHilightedCells,
  getCurrentCell,
  getFill
} from "../selectors";

export default function Board() {
  const dispatch = useDispatch();
  const fill = useSelector(getFill);
  const grid = useSelector(getCurrentPuzzleGrid);
  const gridNums = useSelector(getCurrentPuzzleGridNums);
  const currentCell = useSelector(getCurrentCell);
  const hilightedCells = useSelector(getHilightedCells);

  function onCellSelected(i) {
    dispatch(cellSelected(i));
  }

  return (
    <svg
      className="board"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin meet"
    >
      <g className="cells">
        {grid.map((cell, i) => {
          const isSelected = currentCell === i;
          const isHilighted = !!hilightedCells.includes(i);
          return (
            <Cell
              content={cell}
              gridNum={gridNums[i]}
              fill={fill[i]}
              index={i}
              isSelected={isSelected}
              isHilighted={isHilighted}
              key={i}
              onCellSelected={onCellSelected}
            />
          );
        })}
      </g>
    </svg>
  );
}
