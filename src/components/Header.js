import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import antonImg from "../assets/anton.jpg";
import iarImg from "../assets/iar.jpg";
import kiryuhaImg from "../assets/kiryuha.jpg";
import maxonImg from "../assets/maxon.jpg";
import nikitosImg from "../assets/nikitos.jpg";
import antonGif from "../assets/anton.gif";
import iarGif from "../assets/iar.gif";
import kiryuhaGif from "../assets/kiryuha.gif";
import maxonGif from "../assets/maxon.gif";
import nikitosGif from "../assets/nikitos.gif";

const themeImages = {
  anton: antonGif,
  iar: iarGif,
  kiryuha: kiryuhaGif,
  maxon: maxonGif,
  nikitos: nikitosGif,
};

const themeIcons = {
  anton: antonImg,
  iar: iarImg,
  kiryuha: kiryuhaImg,
  maxon: maxonImg,
  nikitos: nikitosImg,
};

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "anton";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.style.backgroundImage = `url(${themeImages[theme]})`;
    document.documentElement.style.backgroundSize = 'cover';
    document.documentElement.style.backgroundPosition = 'center';
    document.documentElement.style.backgroundRepeat = 'no-repeat';
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="bratvatasks logo" />
        <span>Братваааааtasks</span>
      </div>
      <div className="themeSelector">
        {Object.keys(themeIcons).map((key) => (
          <span
            key={key}
            onClick={() => setTheme(key)}
            className={theme === key ? "activeTheme" : ""}
            style={{ backgroundImage: `url(${themeIcons[key]})` }}
          ></span>
        ))}
      </div>
    </header>
  );
};