import React from "react"
import { Bar } from "react-chartjs-2"
import { Row, Col } from "react-bootstrap"
import "./covidDataForSpecificCountry.scss"

const CovidDataForSpecificCountry = props => {
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <Bar data={props.chart1} borderWidth={1} />
        </Col>
        <Col xs={12} md={6}>
          <Bar data={props.chart2} borderWidth={1} />
        </Col>
        <Col xs={12} md={6}>
          <Bar data={props.chart3} borderWidth={1} />
        </Col>
        <Col xs={12} md={6}>
          <Bar data={props.chart4} borderWidth={1} />
        </Col>
      </Row>
    </>
  )
}
export default CovidDataForSpecificCountry
