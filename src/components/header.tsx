import { useEffect } from "react";

const Header = () => {
  const route = ["Home", "Profile", "Knowledge", "Project"];

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

  return (
    <header className="custom-header position-fixed" id="header">
      <div className="d-flex align-items-center">
        {route.map((content,index) => (
          <div key={index} className="header-route-button pointer-cursor">
            <p className="text-default m-0 text-uppercase">{content}</p>
          </div>
        ))}
        <button className="header-button pointer-cursor">
            <h5 className="fw-bold m-0">Press me to Login</h5>
        </button>
      </div>
    </header>
  );
};

export default Header;
