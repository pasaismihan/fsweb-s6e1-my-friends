import React from "react";
import Friend from "./Friend";

export default function FriendsList(props) {
  /* 👉 Buraya propları almak lazım mı? */
  const { friends, marriageStatusChanger } = props;

  return (
    <div className="list-friends container">
      {/* 👉 buraya hangi component/ları almak lazım? */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          marriageStatusChanger={marriageStatusChanger}
          key={friend.id}
        />
      ))}
    </div>
  );
}
