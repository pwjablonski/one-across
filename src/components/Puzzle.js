import React, {useEffect} from 'react';
import '../css/App.css';
import PuzzleHeader from './PuzzleHeader';
// import Toolbar from './Toolbar';
import PuzzleLayout from './PuzzleLayout';
import { useDispatch, useSelector } from 'react-redux'
import {
  keyInputted,
  puzzleComponentLoaded,
} from '../actions'
import PausedGameModal from './PausedGameModal';
import { Redirect } from "react-router-dom";
import {getCurrentSessionId, isPuzzleDisplayed} from '../selectors'


export default function Puzzle({match}) {
  const dispatch = useDispatch()
  const currentSessionId = useSelector(getCurrentSessionId)
  const puzzleIsDisplayed = useSelector(isPuzzleDisplayed)

  useEffect(() => {
    dispatch(puzzleComponentLoaded(match.params.id));
  })

  useEffect(() => {
    function onInput(e){
      dispatch(keyInputted(e.key));
      e.preventDefault()
    }

    window.addEventListener('keydown', onInput);
    return () => {
      window.removeEventListener('keydown', onInput);
    };
  }, [dispatch]);

  if(!puzzleIsDisplayed){
    return <Redirect to="/" />
  } else if(!currentSessionId) {
    return <p> Loading</p>
  }

  return (
    <div
     className="puzzle"
    >
        <PuzzleHeader/>
        {/* <Toolbar /> */}
        <PuzzleLayout />
        <PausedGameModal/>
    </div>
  );
}