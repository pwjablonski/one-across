import React from "react";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { unpauseTimer } from "../actions";
import { isPausedGameModalOpen } from "../selectors";

export default function PausedGameModal() {
  const dispatch = useDispatch();
  const pausedGameModalIsOpen = useSelector(isPausedGameModalOpen);

  function onUnpauseTimer() {
    dispatch(unpauseTimer());
  }

  return (
    <Modal isOpen={pausedGameModalIsOpen}>
      <div className="modal__text">
        <p>
          Your game has been <strong>paused</strong>
        </p>
      </div>
      <button className="modal__button" type="button" onClick={onUnpauseTimer}>
        OK
      </button>
    </Modal>
  );
}
