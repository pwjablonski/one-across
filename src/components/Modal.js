
import React from 'react';
import {createPortal} from 'react-dom';

export default function Modal({children, isOpen}) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    (
      <div className="modal">
        <div className="modal__blur"></div>
        <div className="modal__contents">
          {children}
        </div>
      </div>
    ),
    document.getElementById('modals'),
  );
}