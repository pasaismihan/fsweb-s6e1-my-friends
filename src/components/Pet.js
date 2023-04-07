import React, { useState } from "react";

export default function Pet({ pet }) {
  /* 👉 Buraya prop lazım mı? state lazım mı? */
  const [like, setLike] = useState(false);
  return (
    <div className="pet-friends container">
      <p>
        {pet.name} ({pet.type})
      </p>
      {/* 👉 tasarıma dikkat. buraya bir şey lazım sanki? */}

      <button onClick={() => setLike(!like)}>beğen {like ? "❤️" : ""}</button>
    </div>
  );
}
