import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { SiMacos, SiVisualstudiocode, SiPostman, SiSlack, SiVercel, SiGithub, SiNpm, SiReact } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Toolstack() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
    </Row>

  );
}

export default Toolstack;
