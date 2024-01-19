import "./App.css";
import React from "react";
import MyNavvona from "./component/MyNavvona";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Home from "./component/MyHome";

function App() {
  return (
    <Container fluid>
      <Row>
        <MyNavvona />
        <Home />
      </Row>
    </Container>
  );
}

export default App;
