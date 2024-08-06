import React from "react";
import Logo from "../assets/AkinDev.png";
import Links from "../layout/Links";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const Link = [
    { to: "/home", id: 1, label: "Home" },
    { to: "/about", id: 2, label: "About" },
    { to: "/project", id: 3, label: "Project" },
    { to: "/contact", id: 4, label: "Contact" },
  ];
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" />
        <div>
          {Link.map(({ to, label, id }) => (
            <Links to={to} key={id}>
              {label}
            </Links>
          ))}
        </div>
        <div>
          <p>Search</p>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
