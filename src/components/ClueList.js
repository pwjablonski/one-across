import React from "react";
import "../css/App.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { clueListItemClicked } from "../actions";
import { getCurrentClue, getCurrentDirection } from "../selectors";

export default function ClueList({ clues, direction }) {
  const dispatch = useDispatch();
  const currentClue = useSelector(getCurrentClue);
  const currentDirection = useSelector(getCurrentDirection);

  function onClueListItemClicked(clue) {
    dispatch(clueListItemClicked(clue, direction));
  }

  return (
    <div className="cluelist">
      <h3 className="cluelist-title">{direction}</h3>
      <ol className="cluelist-list">
        {clues.map(function(clue, i) {
          return (
            <li
              className={classnames("clue", {
                "clue-selected":
                  currentClue === Number(clue.slice(0, clue.indexOf("."))) &&
                  currentDirection === direction
              })}
              key={i}
              onClick={() => onClueListItemClicked(clue)}
            >
              <span className="clue-text">{clue}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

ClueList.propTypes = {
  clues: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired
};
