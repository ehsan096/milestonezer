import search from "./search.svg";
import name from "./name.svg";
import notification from "./notification.svg";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <span className="home">Home</span>
      <img src={search} className="search" alt="logo" />
      <img src={name} className="name" alt="logo" />
      <img src={notification} className="notification" alt="logo" />
    </div>
  );
};

export default TopBar;
