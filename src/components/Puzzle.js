import React, { useEffect } from "react";
import "../css/App.css";
import PropTypes from "prop-types";
// import Toolbar from './Toolbar';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import PuzzleLayout from "./PuzzleLayout";
import PuzzleHeader from "./PuzzleHeader";
import { keyInputted, puzzleComponentLoaded } from "../actions";
import PausedGameModal from "./PausedGameModal";
import { isPuzzleLoaded } from "../selectors";

export default function Puzzle({ match }) {
  const dispatch = useDispatch();
  const puzzleIsLoaded = useSelector(isPuzzleLoaded);

  useEffect(() => {
    dispatch(puzzleComponentLoaded(match.params.id));
  });

  useEffect(() => {
    function onInput(e) {
      dispatch(keyInputted(e.key));
      e.preventDefault();
    }
    window.addEventListener("keydown", onInput);
    return () => {
      window.removeEventListener("keydown", onInput);
    };
  }, [dispatch]);

  if (!puzzleIsLoaded) {
    return (
      <div className="puzzle__loading">
        <FontAwesomeIcon pulse icon={faSpinner} size="2x" />
      </div>
    );
  }

  return (
    <div className="puzzle">
      <PuzzleHeader />
      {/* <Toolbar /> */}
      <PuzzleLayout />
      <PausedGameModal />
    </div>
  );
}

Puzzle.propTypes = {
  match: PropTypes.object.isRequired
};
