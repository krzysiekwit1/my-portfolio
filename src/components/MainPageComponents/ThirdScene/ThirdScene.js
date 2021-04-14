import React from "react"
import { Link } from "gatsby"
import covidImage from "../../../assets/images/CovidApi.png"
import githubImage from "../../../assets/images/github.png"
import shopImage from "../../../assets/images/Shop.png"
import { Container, Col, Row } from "react-bootstrap"
import "./thirdScene.scss"
const ThirdScene = props => {
  return (
    <Container
      ref={props.thirdSceneRef}
      className={`third-scene-container${
        props.thirdSceneStatus === true ? " third-scene-container-active" : ""
      }`}
    >
      <Col xs={12} className="projects-title-container">
        <span className="projects-title">Projects</span>
      </Col>
      <Row className="mt-5 justify-content-center mb-5">
        <Col className="projects-container">
          <Row className="justify-content-center">
            <Col xs={4} lg={2} className="project m-0 p-0">
              <Link to="/covid">
                <img fluid src={covidImage} alt="" />
                <div className="project-text-container">
                  <div> Covid Data App</div>
                </div>
              </Link>
            </Col>
            <Col xs={4} lg={2} className="project m-0 p-0">
              <Link to="/shop">
                <img fluid src={shopImage} alt="" />
                <div className="project-text-container">
                  <div> Shop App</div>
                </div>
              </Link>
            </Col>
            <Col xs={4} lg={2} className="project m-0 p-0">
              <a href="https://github.com/krzysiekwit1" target="_blank">
                <img fluid src={githubImage} alt="" />
                <div className="project-text-container">
                  <div> GitHub</div>
                </div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ position: "absolute", bottom: 0 }}
        className="arrows-container mx-0 mt-auto mb-3 justify-content-center "
      >
        <svg
          onClick={() => props.scrollToFourthScene()}
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
export default ThirdScene
