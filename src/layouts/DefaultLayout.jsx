import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {

  return (
    <>
      <Header />
      <main className="bg-stone-100 overflow-x-hidden">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout