import React from "react"
import { Row, Col } from "react-bootstrap"
import "./firstScene.scss"
const FirstScene = props => {
  return (
    <Row ref={props.firstSceneRef} className="first-scene-container mx-0 my-0">
      <div ref={props.firstSceneRef} className="lines">
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
        <div className="lines__line"></div>
      </div>
      <Col
        xs={{ span: 6, offset: 4 }}
        sm={{ span: 6, offset: 6 }}
        md={{ span: 6, offset: 6 }}
      >
        <div className="text">
          <span>H</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
          <span>o</span>
          <span>,</span>
          <pre></pre>
          <span>I'</span>
          <span>m</span>
          <span>K</span>
          <span>r</span>
          <span>z</span>
          <span>y</span>
          <span>s</span>
          <span>z</span>
          <span>t</span>
          <span>o</span>
          <span>f</span>
          <span>W</span>
          <span>i</span>
          <span>t</span>
          <span>k</span>
          <span>o</span>
          <span>w</span>
          <span>s</span>
          <span>k</span>
          <span>i</span>
        </div>
      </Col>
      <Row className="arrows-container justify-content-center">
        <svg
          onClick={() => props.scrollToSecondScene()}
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
    </Row>
  )
}
export default FirstScene
