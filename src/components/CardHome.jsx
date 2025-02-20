import { useState } from "react";

const CardHome = ({ bnb }) => {
  const { description, address } = bnb;
  const [likes, setLikes] = useState(0);

  const likeHandler = () => {
    fetch("/updateLikes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bnb.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setLikes(data.likes);
        } else {
          console.error("Errore nell'aggiornamento dei like");
        }
      })
      .catch((errror) => {
        console.error("Errore", error);
      });
  };
  return (
    <div>
      <ul>
        <li>
          <p>{description}</p>
          <p>{address}</p>
          <button onClick={likeHandler}>Like</button>
          <p>Likes: {likes}</p>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default CardHome;
