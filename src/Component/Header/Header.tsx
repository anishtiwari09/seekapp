import { useContext } from "react";
import AllDataContext from "../../context/AllDataContext";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(AllDataContext);
  return (
    <div className="header_container">
      <h1 className="title">Where in the world?</h1>
      <div className="toggleDarkModeContainer">
        <button
          className="toggleBackgroundBtn"
          onClick={() => setDarkMode(!darkMode)}
        >
          <img
            src={`/images/icons/${
              darkMode ? "darkMode" : "LightBackground"
            }/lightmode.svg`}
          />
        </button>
        <div className="darkMode_text">Dark Mode</div>
      </div>
    </div>
  );
}
