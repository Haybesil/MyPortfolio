import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Affillestate from '../../Assets/Projects/Affillestate.png'
import MyView from '../../Assets/Projects/MyView.png'
import Dashboard from '../../Assets/Projects/Dashboard.png'
import Elite from '../../Assets/Projects/Elite.png'
import Hosting from '../../Assets/Projects/Hosting.png'
import Review from '../../Assets/Projects/Review.png'
import SummerCode from '../../Assets/Projects/SummerCode.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={MyView}
              isBlog={false}
              title="Customer Rating App for Service Providers"
              description="This platform enables users to share feedback on their experiences, helping businesses gauge customer satisfaction and improve their offerings. The app features a user-friendly interface where customers can select services, provide ratings, and leave comments. With this tool, companies can gain valuable insights into their service quality and make data-driven decisions to enhance customer experiences"
              ghLink="https://github.com/geecoder/my-view-app"
              demoLink="https://my-view-app-vert.vercel.app/"
            />

          </Col>

          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={Affillestate}
              isBlog={false}
              title="Real Estate Web App"
              description="This real estate web app allows users to browse and search for properties easily. It features property listings with detailed information, an intuitive search function, and user-friendly design. Built with React.js and integrated with a backend for data management."
              ghLink="https://github.com/Haybesil/Affilestate"
              demoLink="https://affilestate.vercel.app/"
            />

          </Col>

          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={Elite}
              isBlog={false}
              title="Elite Hub"
              description="Elite Hub is an ongoing project designed to help students find hostels for rent. The platform features an intuitive interface for browsing available accommodations, user reviews, and detailed property descriptions. With advanced search filters, students can easily find the perfect place to stay."
              ghLink="https://github.com/Haybesil/Elite-Hub"
              demoLink="https://elite-hub.vercel.app/"
            />


          </Col>

          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Student Facilitator Interaction"
              description="This is an ongoing project, a web app that facilitates communication between students and facilitators. Students can receive important updates regarding classes, events, and other activities. With user authentication, the platform ensures secure interactions and personalized information sharing."
              ghLink="https://github.com/NUPAT-TECHNOLOGIES/Nupat-Student-Dashboard"
              demoLink="https://nupat-student-dashboard-chi.vercel.app/"
            />

          </Col>
          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={SummerCode}
              isBlog={false}
              title="Summer Code Camp Page"
              description="The Summer Code Camp page is designed to provide prospective participants with all the essential information about the coding workshops offered for children. The page highlights key details such as the camp's schedule, curriculum, and registration process. It features a clean and visually appealing layout with engaging content, ensuring that both parents and children can easily navigate and learn about the camp offerings. Key sections include a brief overview of the camp's goals, an outline of the different coding courses available, testimonials from past participants, and a simple yet effective registration form. The page is fully responsive, providing an optimized experience on both desktop and mobile devices, and is aimed at encouraging sign-ups and enhancing overall user engagement."
              ghLink="https://github.com/NUPAT-TECHNOLOGIES/Nupat-africa-website"
              demoLink="https://nupat.africa/summer-code-camp"
            />


          </Col>

          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={Review}
              isBlog={false}
              title="Company and Product Reviews"
              description="A web app that allows users to share reviews about various companies and products. The platform features user authentication for secure access, enabling users to post, read, and rate reviews while ensuring a trustworthy community. It is an ongoing project"
              ghLink="https://github.com/geecoder/my-view-app"
              demoLink=""
            />

          </Col>

          <Col md={4} className="project-card"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <ProjectCard
              imgPath={Hosting}
              isBlog={false}
              title="Hosting Site"
              description="A comprehensive hosting platform that allows users to host their websites easily. The site features user authentication, domain registration, and a variety of hosting plans. It provides a user-friendly dashboard for managing hosted websites and monitoring performance metrics."
              ghLink="https:https://github.com/Haybesil/Hosting-"
              demoLink="http://hosting-website-five.vercel.app/"
            />

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
