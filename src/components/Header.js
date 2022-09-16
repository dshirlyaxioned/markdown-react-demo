import { BsMoonFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="text-wrapper">
          <h2>Markdown code snippts</h2>
          <button className="icon">
            <BsMoonFill fill="#88d1ef" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
