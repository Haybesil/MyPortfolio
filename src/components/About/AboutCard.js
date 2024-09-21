import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Silas Abayomi Oluwafemi </span>
            from <span className="purple">Ogun State, Nigeria.</span>
            
            <span className="block mt-[20px]"> I am currently employed as a React developer at Nupat Technologies, where I enjoy building dynamic web applications.</span>
           
           
            <span className="block mt-[20px]"> I hold a degree in Physics from Olabisi Onabanjo University, which has given me a strong analytical foundation.</span>
           
            <span className="block mt-[30px]">Apart from coding, there are several activities that I love to do!</span>
            
          </p>


          <ul>
            <li className="about-activity flex items-center gap-[20px]">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity flex items-center gap-[20px]">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity flex items-center gap-[20px]">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer pt-[10px]">Silas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
