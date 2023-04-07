import React from "react";
import PetsList from "./PetsList";

export default function Friend(props) {
  /* 👉 önce başka bir compenenti bitirmen lazım? */
  const { friend, marriageStatusChanger } = props;

  /* 👉 Ya friend'leri yoksa? bunu unutmayalım. Bir şey yapmak lazım*/
  return (
    <div className="friend-friends container">
      <div className="friend-info">
        <div>
          <h3>Adı: {friend.name} </h3>
          <p>Yaş: {friend.age} </p>
          <p>
            Evli mi?: {friend.married ? "evet" : "hayır"}{" "}
            <button
              onClick={() => {
                marriageStatusChanger(friend.id);
              }}
            >
              Değiştir
            </button>
          </p>
          <div>
            Hobileri:
            <ul>
              {friend.hobbies.map((hobby, index) => {
                return <li key={index}>{hobby}</li>;
              })}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 Tasarıma göre buraya hangi component gelmeli? */}
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  );
}
