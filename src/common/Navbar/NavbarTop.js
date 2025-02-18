import React from "react";

import NavbarDesktopTop from "./NavbarDesktopTop";
import NavbarTouchTop from "./NavbarTouchTop";

const NavbarTop = () => {
  return (
    <div className="is-fixed-top">
      <NavbarDesktopTop />
      <NavbarTouchTop />
      {/*
          NavbarDesktopTop: デスクトップ用ナビゲーション
          NavbarTouchTop  : スマホ用なゲーション
      */}
    </div>
  );
};

export default NavbarTop;
