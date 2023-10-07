import { Container, Row, Col } from 'react-bootstrap'
import Text from '../components/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import "../pages/style.css";


function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Kim Tinh</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://www.facebook.com/kiim.tiinhh");
            }}
              className='socailmediabtn'><AiFillFacebook className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/kiiwhint.td._/");
            }}
              className='socailmediabtn'><FaInstagram className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.tiktok.com/@25th7.kiiwhint_");
            }}
              className='socailmediabtn'><FaTiktok className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home