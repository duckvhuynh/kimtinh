import { Container, Row, Col } from 'react-bootstrap'
import "../pages/style.css";


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'> I am Kim Tinh, currently a senior student majoring in high-quality translation and interpretation at Da Nang University of Foreign Languages. I am also a teacher, an English tutor with nearly one year of experience teaching students. In addition, I am a Copywriter and an SEO Specialist.
                        </p>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default Aboutpage