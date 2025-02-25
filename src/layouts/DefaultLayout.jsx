import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="py-30">
        <Outlet />
      </div>
    </>
  )
}

export default DefaultLayout