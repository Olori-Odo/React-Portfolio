import React from "react";
import Logo from "../assets/dev-logo.png";
import Links from "../layout/Links";
import { Outlet, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";

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
        <div className="nav-links">
          {Link.map(({ to, label, id }) => (
            <Links className="links" to={to} key={id}>
              {label}
            </Links>
          ))}
        </div>
        <div className="search">
          <p>Search</p>
        </div>
        <CiMenuBurger />
        <TiThMenuOutline />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
