import React from "react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarTouch from "./NavbarTouch";

const Navbar = () => {
  return (
    <div className="is-fixed-top">
      <NavbarDesktop />
      <NavbarTouch />
    </div>
  );
};

export default Navbar;
