import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

import Brand from "./Brand";
import Collapse from "./Collapse";
import Burger from "./Burger";

export default function Navbar({ open, handleOpen, links }) {
  const barAnimation = useSpring({
    from: {
      transform: "translate3d(0,-10rem,0)",
    },
    transform: "translate3d(0,0,0)",
  });

  const linkAnimation = useSpring({
    config: config.wobbly,
    transform: "translate3d(0,0,0)",
    from: {
      transform: "translate3d(0,-2rem,0)",
    },
    delay: 800,
  });
  return (
    <NavBar style={barAnimation}>
      <FlexBox>
        <Brand></Brand>
        <LinksContainer style={linkAnimation}>
          {links.map(link => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </LinksContainer>
        <BurgerWrapper>
          <Burger open={open} handleOpen={handleOpen}></Burger>
        </BurgerWrapper>
      </FlexBox>
      <Collapse links={links} open={open} handleOpen={handleOpen}></Collapse>
    </NavBar>
  );
}

Navbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

const NavBar = styled(animated.div)`
  background: #1d404a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.5rem;
`;

const LinksContainer = styled(animated.ul)`
  list-style: none;
  display: flex;

  & li {
    transition: 0.3s all;
    margin-left: 8px;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 2rem;
`;
const BurgerWrapper = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
