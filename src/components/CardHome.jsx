import { Link } from "react-router-dom"

const CardHome = ({ bnb }) => {
  const { id, description, address, imgs, likes } = bnb
  return (
    <Link to={`/${id}`}>
      <ul>
        <li>
          <p>{description}</p>
          <p>{address}</p>
          <p>{imgs}</p>
          <p>{likes}</p>
          <hr />
        </li>
      </ul>
    </Link>
  )
}

export default CardHome