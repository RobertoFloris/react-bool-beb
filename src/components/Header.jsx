import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-25 px-10 flex justify-between items-center px-4 text-neutral-50 bg-stone-700 ">
      <Link to="/">
        <img src="./img/logo_b&b.png" className="h-25" alt="" />
      </Link>
      <div className="flex items-center space-x-4">
        <Link to="/nuova-casa" className="px-2 py-2 ms-1 text-xs text-stone-600 bg-yellow-500 border-stone-400 rounded-xl cursor-pointer">
          Affitta su BoolB&B
        </Link>
      </div>
    </header>
  );
};

export default Header;
