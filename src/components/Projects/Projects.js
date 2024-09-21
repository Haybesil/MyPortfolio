import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Affillestate from '../../Assets/Projects/Affillestate.png'
import Bored from '../../Assets/Projects/Bored.png'
import Dashboard from '../../Assets/Projects/Dashboard.png'
import Elite from '../../Assets/Projects/Elite.png'
import Hosting from '../../Assets/Projects/Hosting.png'
import Review from '../../Assets/Projects/Review.png'
import Task from '../../Assets/Projects/Task.png'

function Projects() {
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bored}
              isBlog={false}
              title="Bored App"
              description="The Bored App helps users combat boredom by suggesting various tasks and activities. Users can filter tasks by categories like 'indoor,' 'outdoor,' and 'creative,' while also saving their favorites for easy access. Built with React.js, this app offers a clean and intuitive interface for an enhanced user experience."
              ghLink="https://github.com/Haybesil/Bored"
              demoLink="https://bored-ten-sigma.vercel.app/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Affillestate}
              isBlog={false}
              title="Real Estate Web App"
              description="This real estate web app allows users to browse and search for properties easily. It features property listings with detailed information, an intuitive search function, and user-friendly design. Built with React.js and integrated with a backend for data management."
              ghLink="https://github.com/Haybesil/Affilestate"
              demoLink="https://affilestate.vercel.app/"
            />

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Elite}
              isBlog={false}
              title="Elite Hub"
              description="Elite Hub is an ongoing project designed to help students find hostels for rent. The platform features an intuitive interface for browsing available accommodations, user reviews, and detailed property descriptions. With advanced search filters, students can easily find the perfect place to stay."
              ghLink="https://github.com/Haybesil/Elite-Hub"
              demoLink="https://elite-hub.vercel.app/"
            />


          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
              isBlog={false}
              title="Student Facilitator Interaction"
              description="This is an ongoing project, a web app that facilitates communication between students and facilitators. Students can receive important updates regarding classes, events, and other activities. With user authentication, the platform ensures secure interactions and personalized information sharing."
              ghLink="https://github.com/NUPAT-TECHNOLOGIES/Nupat-Student-Dashboard"
              demoLink="https://nupat-student-dashboard-chi.vercel.app/"
            />

          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Task}
              isBlog={false}
              title="Task Manager"
              description="A task manager application featuring user authentication with Firebase. Users can create, manage, and track their tasks effortlessly. The app includes features like task categorization, deadline reminders, and a clean, responsive design, making task management efficient and straightforward."
              ghLink="https://github.com/Haybesil/React-Todo"
              demoLink="https://react-todo-two-red.vercel.app/"
            />


          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Review}
              isBlog={false}
              title="Company and Product Reviews"
              description="A web app that allows users to share reviews about various companies and products. The platform features user authentication for secure access, enabling users to post, read, and rate reviews while ensuring a trustworthy community. It is an ongoing project"
              ghLink="https://github.com/geecoder/my-view-app"
              demoLink=""
            />

          </Col>

          <Col md={4} className="project-card">
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
