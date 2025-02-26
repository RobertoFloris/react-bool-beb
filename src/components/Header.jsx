import { Link } from "react-router-dom";

const Header = () => {
  return (

    <header className=" z-2 flex justify-between items-center p-6 text-neutral-50 bg-stone-700 fixed top-0 right-0 left-0">
      <Link to='/'>
        <h1 className="text-3xl">BoolB&B</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <Link to='/nuova-casa' className="p-2">Affitta su BoolB&B</Link>
      </div>
    </header>

  );
};

export default Header;
