
const CardDetails = ({ bnbId }) => {
  const { description, rooms, beds, restrooms, square_meters, address, likes, host_name, host_surname, host_phone, host_email, reviews } = bnbId
  return (
    <div>
      <p>description: {description}</p>
      <p>rooms: {rooms}</p>
      <p>beds: {beds}</p>
      <p>restrooms: {restrooms}</p>
      <p>square_meters: {square_meters}</p>
      <p>address: {address}</p>
      <p>likes: {likes}</p>
      <p>host_name: {host_name}</p>
      <p>host_surname: {host_surname}</p>
      <p>host_phone: {host_phone}</p>
      <p>host_mail: {host_email}</p>
      <hr />
      <p>reviews:</p>
      <hr />

      {reviews?.map(review => (
        <div key={review.id}>
          <p>Name: {review.name}</p>
          <p>surname: {review.surname}</p>
          <p>vote: {review.vote}</p>
          <p>text: {review.text}</p>
          <hr />
        </div>
      ))}

    </div>
  )
}

export default CardDetails