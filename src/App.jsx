// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

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

// function App() {
//   return (
//     <div className="app">
//       <div className="sidebar">
//         <FriendList />
//       </div>
//     </div>
//   )
// }

// function FriendList() {
//   const friends = initialFriends;

//   return (
//   <ul>{friends.map((friend) => (
//     <li key={friend.id}>{friend.name}</li>
//   )) }</ul>
//   )
// }

// function Friend ({friend}) {

// }

export default App;
