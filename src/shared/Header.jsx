const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/pJhrNbt/wedding6.jpg" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-6xl border-b-4 border-r-4  border-yellow-500 font-bold bg-gradient-to-r from-rose-500 to-indigo-500 text-transparent bg-clip-text animate-spin">LifeLine</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
