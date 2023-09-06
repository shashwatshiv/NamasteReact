import { APP_LOGO } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-icon" src={APP_LOGO} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul className="nav-menu">
          <li>Home</li>
          <li>About </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
