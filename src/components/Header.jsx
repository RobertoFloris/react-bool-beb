const Header = () => {
  return (

    <header className="flex justify-between items-center p-6 text-neutral-50 bg-stone-700 ">
      <h1 className="text-3xl">BoolB&B</h1>
      <div className="flex items-center space-x-4">
        <button className="p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        </button>
        <button className="p-2">Affitta su BoolB&B</button>
      </div>
    </header>

  );
};

export default Header;
