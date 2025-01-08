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


/*

App.js file

import { useState } from "react";
import Modal from "./Components/Modal.jsx";

function App() {
  const [opneModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <h1>Hey, Click on the button to open the modal.</h1>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>Open</button>
      {opneModal && <Modal closeModal={setOpenModal} />}
    </div> 
  );
}

Modal.css file 

.modalBackground {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modalContainer {
    width: 500px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
  
  .title h1 {
    margin-bottom: 10px;
  }
  
  .body p {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
  }
  
  .footer button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .footer button:hover {
    opacity: 0.8;
  }
  
  .footer button:first-child {
    background-color: #f44336;
    color: white;
  }
  
  .footer button:last-child {
    background-color: #4caf50;
    color: white;
  }
  

App.css

.App {
  display: flex;
  flex-direction: column;
  padding: 4rem;
  height: 100vh;
  align-items: center;
}

.App .openModalBtn {
  background-color: cornflowerblue;
  height: 2rem;
  width: 100px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: medium;
  
}

*/