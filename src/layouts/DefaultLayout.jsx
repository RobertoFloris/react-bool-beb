import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {

  return (
    <>
      <Header />
      <main className="bg-stone-100 relative min-h-[100vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default DefaultLayout