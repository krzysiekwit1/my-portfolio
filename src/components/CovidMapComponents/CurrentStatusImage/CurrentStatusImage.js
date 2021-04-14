import React from "react"
import "./currentStatusImage.scss"
import { Col, Image } from "react-bootstrap"
const CurrentStatusImage = props => {
  return (
    <Col className="current-status-image  p-1" xs={6} style={props.style}>
      <Image src={props.icon} className="mx-auto d-block mt-3" alt="" />
      <p className="mt-1">{props.information}</p>
      <p className="mt-2">{props.informationData}</p>
    </Col>
  )
}
export default CurrentStatusImage
