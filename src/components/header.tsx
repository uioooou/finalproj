import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const route = ["Home", "Profile", "Knowledge", "Project"];
  const [clickMenu, setClickMenu] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const ButtonList = (
    <div className="flex-md-break align-items-center">
      {route.map((content, index) => (
        <div key={index} className="header-route-button pointer-cursor my-1">
          <p className="text-default m-0 text-uppercase">{content}</p>
        </div>
      ))}
      <div className="flex-md-show flex-md-break ms-auto">
        <button className="header-button pointer-cursor ms-auto">
          <h5 className="fw-bold m-0">Press me to Login</h5>
        </button>
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 10) {
          header.classList.add("backdrop-blur");
        } else {
          header.classList.remove("backdrop-blur");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="position-fixed" id="header">
      <div>
        <div className="custom-header">{ButtonList}</div>
        <div
          className={`custom-mobile-header ${clickMenu ? "menu-clicked" : ""}`}
        >
          <div className="d-flex">
            <button
              className="menu-button pointer-cursor ms-0"
              onClick={() => setClickMenu(clickMenu ? false : true)}
            >
              <Menu size={30} />
            </button>
            <button className="header-button pointer-cursor ms-auto">
              <h5 className="fw-bold m-0">Press me to Login</h5>
            </button>
          </div>
          <div className={clickMenu ? "d-block" : "d-none"}>{ButtonList}</div>
        </div>
      </div>
      <div
        style={{ width: `${scrollPercent}%` }}
        className="scrollY-detector"
      ></div>
    </header>
  );
};

export default Header;
