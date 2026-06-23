import { FiSearch } from "react-icons/fi";
import "./Header.css";
import Profile from "../../assets/profile.jpg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="menuItem">
          <FiSearch className="btn-search" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="profile">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </>
  );
};
export default Header;
