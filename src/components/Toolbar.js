import React from 'react';
import {duration, utc} from 'moment'
import '../css/App.css';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { getTimerValue, isTimerPaused} from '../selectors';
import {useSelector, useDispatch} from 'react-redux'
import useInterval from '../customHooks/useInterval'
import {
  pauseTimer,
  incrementTimer,
  revealPuzzle,
  clearPuzzle,
} from '../actions'


export default function Toolbar() {
  const dispatch = useDispatch()
  const timerPaused = useSelector(isTimerPaused)
  const timerValue = useSelector(getTimerValue)
  const time = utc(duration(timerValue).asMilliseconds()).format("H:mm:ss");

  useInterval(() => {
    if(!timerPaused){
      dispatch(incrementTimer())
    }
  }, 1000);
  
  function onPauseTimer() {
    dispatch(pauseTimer());
  }

  function onRevealPuzzle(){
    dispatch(revealPuzzle());
  }

  function onClearPuzzle(){
    dispatch(clearPuzzle());
  }
  
  return (
    <div className="toolbar">
      <ul className="toolbar-tools">
        <li className="toolbar-item">
          <div className="toolbar-button">
            <FontAwesomeIcon className="toolbar-button-item" icon={faCog} size="2x" />
          </div>
        </li>
        <li className="toolbar-item toolbar-timer">
          <div className="timer-button toolbar-button" onClick={onPauseTimer}>
            <div className="timer-count">{time}</div>
            <FontAwesomeIcon className="toolbar-button-pause" icon={faPause} />
          </div>
        </li>
        <li className="toolbar-item">
            <div className="toolbar-button toolbar-button-text">
                rebus
            </div>
            <div className="toolbar-button toolbar-button-text" onClick={onClearPuzzle}>
                clear
            </div>
            <div className="toolbar-button toolbar-button-text" onClick={onRevealPuzzle}>
                reveal
            </div>
            <div className="toolbar-button toolbar-button-text">
                check
            </div>
            <div className="toolbar-button">
              <FontAwesomeIcon className="toolbar-button-item" icon={faPencilAlt} size="2x" />
            </div>
        </li>
      </ul>
    </div>
  );
}