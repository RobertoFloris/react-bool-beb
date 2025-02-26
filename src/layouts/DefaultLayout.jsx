import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const DefaultLayout = () => {

  return (
    <>
      <Header />
      <main className="py-35 px-6 bg-stone-100">
        <Outlet />
      </main>
    </>
  )
}

export default DefaultLayout