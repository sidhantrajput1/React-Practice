// import { useState } from "react";
import './Modal.css'

function Modal({ closeModal }) {
  

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus unde officia odit non exercitationem quas!
          </p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancle</button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
