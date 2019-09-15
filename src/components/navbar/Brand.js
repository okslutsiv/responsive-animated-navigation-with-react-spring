import React from "react";
import styled from "styled-components";
import logo from "../assets/logo192.png";

function Brand() {
  return <Image src={logo} alt="brand"></Image>;
}

export default Brand;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
  z-index: 200;
`;
