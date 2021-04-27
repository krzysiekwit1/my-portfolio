import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faLaravel,
  faHtml5,
  faCss3,
  faJs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons"
import { Row, Col, Container } from "react-bootstrap"
import photo from "../../../assets/images/Photo.jpg"
import "./secondScene.scss"
const SecondScene = props => {
  return (
    <Container
      ref={props.secondSceneRef}
      className={`second-scene-container${
        props.secondSceneStatus === true ? " second-scene-container-active" : ""
      }`}
    >
      <Col xs={12} className="about-title-container">
        <span className="about-title">About</span>
      </Col>
      <Row className="mt-md-5 mt-0">
        <Col xs={12} md={6} className="left-section">
          <div className="hexagon" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hexagon__hexTop"></div>
            <div className="hexagon__hexBottom"></div>
          </div>
          <div className="personal-information ">
            I am a newly made engineer. I enjoy creating software and learning
            new technologies. In my spare time I like to play tennis,
            unfortunately the current situation makes it difficult. That's why I
            spend my time on studying and creating websites.
          </div>
        </Col>
        <Col xs={12} md={6} className="right-section">
          <Col xs={12} className="mt-5 mt-sm-3">
            <span>Technologies:</span>
          </Col>
          <Row className="skills-section mt-md-5">
            <Col xs={6} className="skills-section__left">
              <FontAwesomeIcon icon={faJs} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">JavaScript</div>
              <FontAwesomeIcon icon={faReact} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">React</div>
              <FontAwesomeIcon icon={faPhp} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">PHP</div>
            </Col>
            <Col xs={6} className="skills-section__right">
              <FontAwesomeIcon icon={faLaravel} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">Laravel</div>
              <FontAwesomeIcon icon={faCss3} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">CSS</div>
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <div className="icon-name mb-md-4 mt-md-2">HTML</div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ position: "absolute", bottom: 0 }}
        className="arrows-container mx-0 mt-0 mt-md-5 mb-3"
      >
        <svg
          onClick={() => props.scrollToThirdScene()}
          className="arrows-container__arrows-down"
        >
          <polygon
            className="arrows-container__arrow-top"
            points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
          />
          <polygon
            className="arrows-container__arrow-middle"
            points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
          />
          <polygon
            id="buggedArrow"
            className="arrows-container__arrow-bottom"
            points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
          />
        </svg>
      </Row>
    </Container>
  )
}
export default SecondScene
