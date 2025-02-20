const CardHome = ({ bnb }) => {
  const { description, address } = bnb
  return (
    <div>
      <ul>
        <li>
          <p>{description}</p>
          <p>{address}</p>
          <hr />
        </li>
      </ul>
    </div>
  )
}

export default CardHome