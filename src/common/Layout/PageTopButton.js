import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaAngleDoubleUp } from "react-icons/fa";

const PageTopButton = () => {
  const [onTop, setOnTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const onScroll = () => {
    const offset =
      window.pageYOffset ||
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (offset >= 20 && !onTop) return false;
    if (offset >= 20 && onTop) {
      setOnTop(false);
      return false;
    }
    setOnTop(true);
    return true;
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  });

  return (
    <Button>
      <div
        className={`button ${onTop ? "no-active" : "is-active"}`}
        onClick={() => scrollToTop()}
        onKeyDown={() => scrollToTop()}
        role="button"
        tabIndex="0"
      >
        <FaAngleDoubleUp />
      </div>
    </Button>
  );
};

const Button = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  div.no-active {
    display: none;
  }
  div.is-active {
    display: inline-block;
  }
`;

export default PageTopButton;
