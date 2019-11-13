import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { Container } from "reactstrap";

const Layout = () => {
  return (
    <Container fluid>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Container>
  );
};

export default Layout;
