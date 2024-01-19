import React from "react";
import { Col } from "react-bootstrap";
import MyNavvina from "./MyNavvina";
import Body from "./Body";

const MyHome = () => {
  return (
    <Col md={10} className="gradient">
      <div>
        <MyNavvina />
      </div>
      <div>
        <Body />
      </div>

      {/* Altri contenuti della Home */}
    </Col>
  );
};

export default MyHome;
