import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ to, children }) => {
  return <NavLink to={to}>{children}</NavLink>;
};

export default Links;
