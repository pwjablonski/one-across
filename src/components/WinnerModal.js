import React from 'react';
import {duration, utc} from 'moment'
import '../css/App.css';
import Modal from './Modal';
import {useDispatch, useSelector} from 'react-redux'
import {
  closeWinnerModal,
} from '../actions'
import {
    isWinnerModalOpen,
    getTimerValue
} from '../selectors'

export default function WinnerModal() {
  const dispatch = useDispatch();
  const winnerModalIsOpen= useSelector(isWinnerModalOpen);
  const timerValue = useSelector(getTimerValue)
  const time = utc(duration(timerValue).asMilliseconds()).format("H:mm:ss");

  function onCloseWinnerModal() {
    dispatch(closeWinnerModal());
  }

  return (
    <Modal isOpen={winnerModalIsOpen}>
        <div className='modal__text'>
            <h1>Congratulations!</h1>
            <p>You finished the puzzle in {time} </p>
        </div>
        <div className='modal__button' onClick={onCloseWinnerModal}>
            OK
        </div>
    </Modal>
  );
}