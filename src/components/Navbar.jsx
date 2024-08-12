import React from "react";
import Logo from "../assets/dev-logo.png";
// import Links from "../layout/Links";
import { Outlet, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
// import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  // const Link = [
  //   { to: "/home", id: 1, label: "Home" },
  //   { to: "/about", id: 2, label: "About" },
  //   { to: "/project", id: 3, label: "Project" },
  //   { to: "/contact", id: 4, label: "Contact" },
  // ];
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" />
        {/* <div className="nav-links">
          {Link.map(({ to, label, id }) => (
            <Links className="links" to={to} key={id}>
              {label}
            </Links>
          ))}
        </div> */}
        <ul>
          <li>
            <Link to="/home" className="list">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about " className="list">
              About
            </Link>
          </li>
          <li>
            <Link to="/project" className="list">
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" className="list">
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="search">
          <input type="text" placeholder="Search..." />
          <CiSearch className="fasearch" />
        </div> */}
        <CiMenuBurger className="menu" />
        {/* <TiThMenuOutline className="menu" /> */}
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Navbar;
