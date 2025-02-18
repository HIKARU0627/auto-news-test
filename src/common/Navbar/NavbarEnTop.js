import React from "react";

import NavbarDesktopEnTop from "./NavbarDesktopEnTop";
import NavbarTouchEnTop from "./NavbarTouchEnTop";

const NavbarEn = () => {
  return (
    <div className="is-fixed-top">
      <NavbarDesktopEnTop />
      <NavbarTouchEnTop />
    </div>
  );
};

export default NavbarEn;
