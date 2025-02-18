import React from "react";

import NavbarDesktopEn from "./NavbarDesktopEn";
import NavbarTouchEn from "./NavbarTouchEn";

const NavbarEn = () => {
  return (
    <div className="is-fixed-top">
      <NavbarDesktopEn />
      <NavbarTouchEn />
    </div>
  );
};

export default NavbarEn;
