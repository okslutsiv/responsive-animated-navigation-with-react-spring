import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

function Collapse({ links, open: openMenu, handleOpen }) {
  const { open } = useSpring({
    open: openMenu ? 0 : 1,
  });
  return openMenu === true ? (
    <CollapseWrapper
      style={{
        transform: open
          .interpolate({ range: [0, 1], output: [0, -200] })
          .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
    >
      <NavList>
        {links.map(link => (
          <li key={link} onClick={handleOpen}>
            <a href="/">{link}</a>
          </li>
        ))}
      </NavList>
    </CollapseWrapper>
  ) : null;
}

Collapse.propTypes = {
  links: PropTypes.array,
  open: PropTypes.bool.isRequired,
};

export default Collapse;

const CollapseWrapper = styled(animated.div)`
  background: #1d404a;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: 0.3s all;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #61dafb;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
  }
  & a:hover {
    color: #daf6ff;
  }
`;
