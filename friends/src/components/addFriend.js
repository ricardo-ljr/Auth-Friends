import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddFriend() {
  const [newFriend, setNewFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        setNewFriend({
          ...newFriend,
          name: "",
          age: "",
          email: ""
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Add New Friend</h1>
      <form onSubmit={addFriend}>
        <input
          type="text"
          name="name"
          placeholder="enter name here..."
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="enter age here..."
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="enter email here..."
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}
