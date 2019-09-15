import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Burger({ open, handleOpen }) {
  return (
    <Wrapper onClick={handleOpen}>
      <div className={open ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOpen: PropTypes.func.isRequired,
};

export default Burger;

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding-top: 0.7rem;
  z-index: 200;

  & span {
    background-color: #61dafb;
    height: 0.4rem;
    width: 3.5rem;
    margin-bottom: 0.7rem;
    display: block;
    transition: 0.3s all;
    position: relative;
  }

  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }
`;
