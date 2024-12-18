import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SILAS ABAYOMI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid animate-ping lg:animate-bounce"
                style={{ maxHeight: "450px", animationDuration: "10s" }}
              />

            </Col>



          </Row>
        </Container>
      </Container>
      <Home2 />
    </section >
  );
}

export default Home;
