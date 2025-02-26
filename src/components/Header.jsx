import { Link } from "react-router-dom";

const Header = () => {
  return (

    <header className=" h-25 z-2 flex justify-between items-center px-4 text-neutral-50 bg-stone-700 fixed top-0 right-0 left-0">
      <Link to='/'>
        <img src="./img/logo_b&b.png" className="h-25" alt="" />
      </Link>
      <div className="flex items-center space-x-4">
        <Link to='/nuova-casa' className="p-2">Affitta su BoolB&B</Link>
      </div>
    </header>

  );
};

export default Header;
