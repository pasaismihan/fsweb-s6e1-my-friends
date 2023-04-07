import React from "react";
import { useState } from "react";
import Search from "./Search";
import FriendsList from "./FriendsList";
import friendsData from "../dummy-data/friends";

export default function App() {
  /* 👉 Buraya state tanımlamak gerekli mi? */

  const [friends, setFriends] = useState(friendsData);

  const searchHandler = (event) => {
    const searchResult = friendsData.filter((friend) => {
      return friend.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFriends(searchResult);
  };

  const marriageStatusChanger = (id) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id == id) {
        friend.married = !friend.married;
      }
      return friend;
    });
    setFriends(updatedFriends);
  };

  return (
    <div className="app-friends container">
      {/* 👉 Buraya hangi componentler gelecek? */}
      <Search searchHandler={searchHandler} />
      <FriendsList
        friends={friends}
        marriageStatusChanger={marriageStatusChanger}
      />
    </div>
  );
}
