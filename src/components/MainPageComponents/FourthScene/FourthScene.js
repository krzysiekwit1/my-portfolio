import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Container, Row } from "react-bootstrap"
import "./fourthScene.scss"
const FourthScene = props => {
  return (
    <Container
      fluid
      ref={props.fourthSceneRef}
      className="fourth-scene-container"
    >
      <Row className="justify-content-center footer-icons-container pt-3">
        <a
          className="ml-4"
          href="https://www.linkedin.com/in/krzysztof-witkowski-5a773a196/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          className="ml-3"
          href="https://github.com/krzysiekwit1"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      </Row>
      <Row className="copyright-container justify-content-center mt-3 ml-2">
        <span>Krzysztof Witkowski ©2021</span>
      </Row>
      <Row className="justify-content-end mini-arrows">
        <svg
          onClick={() => props.scrollToFirstScene()}
          className="mini-arrows-container"
        >
          <polygon
            className="arrow-top"
            points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
          />
          <polygon
            className="arrow-middle"
            points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
          />
          <polygon
            className="arrow-bottom"
            points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
          />
        </svg>
      </Row>
    </Container>
  )
}
export default FourthScene
