import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faReact,
  faLaravel,
  faHtml5,
  faCss3,
  faJs,
  faPhp,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons"
import { Row, Col, Container } from "react-bootstrap"
import gatsbySVG from "../../../assets/images/svg/gatsby.svg"
import jQuerySVG from "../../../assets/images/svg/jquery.svg"
import netlifySVG from "../../../assets/images/svg/netlify.svg"
import graphqlSVG from "../../../assets/images/svg/graphql.svg"
import photo from "../../../assets/images/Photo.jpg"
import "./secondScene.scss"

const SecondScene = props => {
  return (
    <Container
      fluid="md"
      ref={props.secondSceneRef}
      className={`second-scene-container${
        props.secondSceneStatus === true ? " second-scene-container-active" : ""
      }`}
    >
      <Col
        xs={12}
        className="about-title-container d-flex justify-content-center"
      >
        <span className="about-title">About</span>
      </Col>
      <Row className=" mt-0">
        <Col xs={12} md={6} className="left-section">
          <div className="hexagon" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hexagon__hexTop"></div>
            <div className="hexagon__hexBottom"></div>
          </div>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <div className="personal-information mt-3">
                I am a newly made engineer. I enjoy creating software and
                learning new technologies. In my spare time I like to play
                tennis, unfortunately the current situation makes it difficult.
                That's why I spend my time on studying and creating websites.
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className="right-section text-center">
          <Col xs={12} className="mt-5 mt-sm-3">
            <span>Technologies:</span>
          </Col>
          <Row className="mt-5 technologies">
            <Col xs={3} className="javascript-icon-container">
              <FontAwesomeIcon icon={faJs} size="3x" />
              <h5>JavaScript</h5>
            </Col>
            <Col xs={3} className="gatsbyjs-icon-container">
              <img
                src={gatsbySVG}
                className="gatsbyjs-icon"
                alt="gatsby icon"
              />
              <h5>GatsbyJs</h5>
            </Col>
            <Col xs={3} className="react-icon-container">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h5>React</h5>
            </Col>
            <Col xs={3} className="jquery-icon-container">
              <img src={jQuerySVG} className="jquery-icon" alt="jquery icon" />
              <h5>jQuery</h5>
            </Col>
            <Col xs={3} className="netlify-icon-container">
              <img
                src={netlifySVG}
                className="netlify-icon"
                alt="netlify icon"
              />
              <h5>Netlify</h5>
            </Col>
            <Col xs={3} className="graphql-icon-container">
              <img
                src={graphqlSVG}
                className="graphql-icon"
                alt="graphql icon"
              />
              <h5>GraphQL</h5>
            </Col>
            <Col xs={3} className="php-icon-container">
              <FontAwesomeIcon icon={faPhp} size="3x" />
              <h5>PHP</h5>
            </Col>
            <Col xs={3} className="laravel-icon-container">
              <FontAwesomeIcon icon={faLaravel} size="3x" />
              <h5>Laravel</h5>
            </Col>
            <Col xs={3} className="css-icon-container">
              <FontAwesomeIcon icon={faCss3} size="3x" />
              <h5>CSS</h5>
            </Col>
            <Col xs={3} className="sass-icon-container">
              <FontAwesomeIcon icon={faSass} size="3x" />
              <h5>SASS</h5>
            </Col>
            <Col xs={3} className="html5-icon-container">
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <h5>HTML5</h5>
            </Col>
            <Col xs={3} className="git-icon-container">
              <FontAwesomeIcon icon={faGitAlt} size="3x" />
              <h5>Git</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="arrows-container mx-0 mt-auto mt-md-5 align-bottom mb-3 w-100 d-flex justify-content-center">
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
