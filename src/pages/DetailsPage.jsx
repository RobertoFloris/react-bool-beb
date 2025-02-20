import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CardDetails from "../components/CardDetails";

const DetailsPage = () => {

  const { id } = useParams();
  const { bnbId, fetchBnBId } = useGlobalContext()

  useEffect(() => {
    fetchBnBId(id)
  }, [])

  return (
    <div>
      <CardDetails bnbId={bnbId} />
    </div>
  )
}

export default DetailsPage