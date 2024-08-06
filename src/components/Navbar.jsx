import React from "react";
import Logo from "../assets/AkinDev.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const Links = [
  //   { to: "/home", id: 1, label: "Home" },
  //   { to: "/about", id: 2, label: "About" },
  //   { to: "/project", id: 3, label: "Project" },
  //   { to: "/contact", id: 4, label: "Contact" },
  // ];
  return (
    <>
      <nav>
        <img src={Logo} alt="Logo" />
        <ul>
          <li>
            {" "}
            <Link to="/home">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/project">Project</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>{" "}
          </li>
        </ul>
        <div>
          <p>Search</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
