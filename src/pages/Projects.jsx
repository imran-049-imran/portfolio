import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import ytseo from "../assets/projects/ytseo.png";

const Projects = () => {
  
  const descStyle = {
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here’s a featured project I’ve built recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytseo}
              isBlog={false}
              title="YouTube SEO Tag Generator"
              description={
                <span style={descStyle}>
                  A Spring Boot + Thymeleaf web app that extracts SEO-friendly tags from YouTube
                  videos based on a given title. Features dark mode, Tailwind CSS, Bootstrap Icons,
                  and clipboard copy functionality. Designed for content creators to optimize video
                  metadata.
                </span>
              }
              ghLink="https://github.com/imran-049-imran/YouTube-SEO-Tag-Generator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="QuickBite – Food Delivery Web App"
              description={
                <span style={descStyle}>
                   Built a full-stack food delivery platform with real-time cart updates, category-wise food browsing, and 
secure order placement using React and Spring Boot REST APIs. Implemented JWT authentication, role
based access, and protected routes for users and admins with Spring Security and React route guards. 
Developed an admin dashboard for managing food items, categories, and orders with MySQL integration 
using JPA/Hibernate. Designed a responsive, mobile-friendly UI with optimized API performance, Toast 
notifications, and a scalable backend architecture for smooth user experience.
                </span>
              }
              ghLink="https://github.com/imran-049-imran/YouTube-SEO-Tag-Generator"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
