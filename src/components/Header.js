import MoonIcon from "../assests/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="text-wrapper">
          <h2>Markdown code snippts</h2>
          <button>
            <MoonIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
