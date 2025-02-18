import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const Sidebar = (props) => {
  const title = props.title;
  const contents = props.content;
  const tags = contents.match(/<h. id=".*">.*<\/h.>/g);
  const [show, toggleShow] = useState(false);

  return (
    <div>
      <Button>
        <div
          className={`button`}
          onClick={() => toggleShow(!show)}
          onKeyDown={() => toggleShow(!show)}
          role="button"
          tabIndex="0"
        >
          <FaBars />
        </div>
      </Button>
      <Side onClick={() => toggleShow(!show)}>
        {show ? <SidebarActive onClick={() => toggleShow(!show)} /> : null}
        <Menu className={`${show ? "is-show" : "no-show"}`}>
          <aside className="menu">
            <p className="menu-label">{title}</p>
            <ul className="menu-list">
              {tags.map((tag, key) => (
                <li key={key}>
                  <a
                    href={`#${tag
                      .replace(/<h. id=".*">/, "")
                      .replace(/<\/h.>/, "")}`}
                  >
                    {tag.replace(/<h. id=".*">/, "").replace(/<\/h.>/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Menu>
      </Side>
    </div>
  );
};

const Side = styled.div`
  div.no-show {
    max-width: 0;
    border-right: 0;
  }
  div.is-show {
    max-width: 33%;
    transition: max-width 0.5s;
    border-right: 2px solid white;
  }
`;

const SidebarActive = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  display: block;
  cursor: default;
  content: " ";
  background: transparent;
`;

const Button = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 1rem;
  z-index: 5;
  div.no-active {
    display: none;
  }
  div.is-active {
    display: inline-block;
  }
`;

const Menu = styled.div`
  position: fixed;
  z-index: 99;
  background-color: #006e4f;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 0;
  top: 0;
  left: 0;
  padding: 2rem 0;
`;

export default Sidebar;
