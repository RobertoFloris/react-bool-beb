import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"

const Home = () => {
  const { fetchBnB, bnb } = useGlobalContext()

  useEffect(fetchBnB, [])

  return (
    <div>
      <ul>
        <li></li>
      </ul>
    </div>
  )
}

export default Home