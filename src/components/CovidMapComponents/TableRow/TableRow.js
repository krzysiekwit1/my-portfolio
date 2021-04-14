import React from "react"
import "./tableRow.scss"

const TableRow = props => {
  return (
    <tr>
      <th scope="row">{props.number}</th>
      <td onClick={props.showCharts}>{props.country}</td>
      <td>{props.cases}</td>
      <td>{props.activeCases}</td>
      <td>{props.deaths}</td>
      <td>{props.testsNumber}</td>
      <td>{props.todayCases}</td>
      <td>{props.todayDeaths}</td>
      <td>{props.todayRecovered}</td>
    </tr>
  )
}
export default TableRow
