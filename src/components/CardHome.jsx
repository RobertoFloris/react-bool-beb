import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";

const CardHome = ({ bnb }) => {
  const { id, description, address, likes } = bnb;

  const { fetchLikes } = useGlobalContext();

  return (
    <>
      <Link to={`/${id}`}>
        <ul>
          <li>
            <p>{description}</p>
            <p>{address}</p>
            <p>like: {likes}</p>
          </li>
        </ul>
      </Link>
      <button onClick={() => fetchLikes(id)}>Like</button>
      <hr />
    </>

  );
};

export default CardHome;
