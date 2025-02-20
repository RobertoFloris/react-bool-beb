import { Link } from "react-router-dom";
import { useState } from "react";

const CardHome = ({ bnb }) => {
  const { id, description, address } = bnb;
  const [likes, setLikes] = useState(0);
  const apiUrl = import.meta.env.VITE_API_URL;

  const likeHandler = () => {
    fetch(`${apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bnb.id }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data); // Log the response data
        if (data.message) {
          // Assuming the server increments the likes and returns a message
          setLikes((prevLikes) => prevLikes + 1);
        } else {
          console.error("Errore nell'aggiornamento dei like");
        }
      })
      .catch((error) => {
        console.error("Errore", error);
      });
  };

  return (
    <Link to={`/${id}`}>
      <ul>
        <li>
          <p>{description}</p>
          <p>{address}</p>
          <button onClick={likeHandler}>Like</button>
          <p>Likes: {likes}</p>
          <hr />
        </li>
      </ul>
    </Link>
  );
};

export default CardHome;
