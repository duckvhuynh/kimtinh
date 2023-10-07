import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";

import kyna from "/src/assets/images/kyna.jpg";
import starlight from "/src/assets/images/starlight.jpg";
import tutor from "/src/assets/images/tutor.jpg";
import seoandcopywriter from "/src/assets/images/seoandcopywriter.png";
import "../pages/style.css";


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={kyna}
                isBlog={false}
                title="English Teacher"
                description="at Kyna English"
                ghLink="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={starlight}
                isBlog={false}
                title="English Teacher and Receptionist"
                description="at Starlight English Center"
                ghLink="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={tutor}
                isBlog={false}
                title="English Tutor"
                description="Work from home"
                ghLink="#"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={seoandcopywriter}
                isBlog={false}
                title="SEO Specialist and Copywriter"
                description="Self-learning and working from home"
                ghLink="#"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;