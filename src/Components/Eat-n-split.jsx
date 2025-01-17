import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
    // setSelectedFriend(false);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}

      {friend.balance === 0 && (
        <p className="red">
          You and {friend.name} are even {friend.balance}$
        </p>
      )}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}=${id}`,
      balance: 0,
    };

    console.log(newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label> 🧑🏼‍🤝‍👩Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 image URl</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill With {selectedFriend.name}</h2>

      <label>💰 Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>🕴🏾 Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👨🏻‍🤝‍👨🏼 {selectedFriend.name}&apos;s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the Bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default App;



/*        

:root {
  --color-lightest: #fff4e6;
  --color-light: #ffe8cc;
  --color-medium: #ffa94d;
  --color-dark: #ff922b;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body {
  height: 100vh;
  color: #495057;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  min-height: 66vh;
  display: grid;
  grid-template-columns: 34rem 44rem;
  column-gap: 4rem;
  align-items: start;
}

.button {
  background-color: var(--color-medium);
  color: #343a40;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 7px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.button:hover {
  background-color: var(--color-dark);
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.sidebar li {
  display: grid;
  grid-template-columns: 4.8rem 1fr auto;
  align-items: center;
  column-gap: 1.6rem;

  padding: 1.2rem;
  border-radius: 7px;
  transition: 0.5s;
}

.selected,
.sidebar li:hover {
  background-color: var(--color-lightest);
}

.sidebar li img {
  border-radius: 50%;
  width: 100%;
  grid-row: span 2;
}

.sidebar li h3 {
  grid-row: 1;
  grid-column: 2;
}

.sidebar li p {
  grid-row: 2;
  grid-column: 2;
}

.sidebar li .button {
  grid-row: span 2;
  grid-column: 3;
}

.sidebar > .button {
  float: right;
  margin-right: 1.2rem;
}

.green {
  color: #66a80f;
}

.red {
  color: #e03131;
}

form {
  font-size: 1.6rem;
  display: grid;
  align-items: center;
  gap: 1.2rem;

  background-color: var(--color-lightest);
  border-radius: 7px;
}

.form-add-friend {
  grid-template-columns: 1fr 1.5fr;
  margin-bottom: 1.6rem;
  padding: 1.2rem;
}
.form-split-bill {
  grid-template-columns: 1fr 12rem;
  padding: 3.2rem 4rem;
}

label {
  font-weight: 500;
}

label::first-letter {
  display: inline-block;
  margin-right: 4px;
  font-size: 1.8rem;
}

input,
select {
  font-family: inherit;
  color: inherit;
  font-size: 1.5rem;
  padding: 0.7rem;
  text-align: center;
  border: 1px solid var(--color-light);
  border-radius: 4px;
  transition: 0.3s;
}

input:focus,
select:focus {
  outline: none;
  border: 1px solid var(--color-dark);
}

form .button {
  margin-top: 0.6rem;
  grid-column: 2;
}

form h2 {
  grid-column: 1 / -1;
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin-bottom: 1.6rem;
}

*/