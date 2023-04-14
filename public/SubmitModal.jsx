import React from "react";

function SubmitModal({ onClose }) {
  return (
    <>
      <div className="modal-bg">
        <div className="modal">
          <ion-icon name="close-outline" onClick={onClose}></ion-icon>
          <div className="submit-modal__content">
            <h1 className="submit-modal__text">Pet successfully submitted!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitModal;
