import React, { Component } from "react"
import axios from "axios"
import TableRow from "../components/CovidMapComponents/TableRow/TableRow"
import CurrentStatusImage from "../components/CovidMapComponents/CurrentStatusImage/CurrentStatusImage"
import MapChart from "../components/CovidMapComponents/Maps/MapChart"
import CovidDataForSpecificCountry from "../components/CovidMapComponents/CovidDataForSpecificCountry/CovidDataForSpecificCountry"
import medicalMaskImage from "../assets/images/medical-mask.png"
import covidVirusImage from "../assets/images/coronavirus.png"
import recoveredImage from "../assets/images/healthy.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Row, Col, Container, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.scss"
import "../styles/covid.scss"

class CovidMapContainer extends Component {
  state = {
    data: [["Country", "Cases"]],
    cases: 0,
    active: 0,
    deaths: 0,
    recovered: 0,
    tableCovidData: [
      ["Country"],
      ["Cases"],
      ["ActiveCases"],
      ["Deaths"],
      ["Recovered"],
      ["TestsNumber"],
      ["TodayCases"],
      ["TodayRecovered"],
      ["TodayDeaths"],
      ["isoAlpha2"],
    ],
    inputSpecificCountry: "",
    showDataSpecificCountry: "",
    specificCountryDays: [],
    specificCountryActiveCases: [],
    specificCountryNewCases: [],
    specificCountryTotalCases: [],
    specificCountryTotalDeaths: [],
    specificCountryTotalTests: [],
    specificCountryNewDeaths: [],
  }
  componentDidMount() {
    //summed covid data for all countries
    document.body.style = "overflow:auto"
    const optionsBasicData = {
      method: "GET",
      url: "https://covid-19-statistics.p.rapidapi.com/reports/total",
      headers: {
        "x-rapidapi-key": "0d45c40ca1msh7f414238ad946a1p1d31dfjsn310aae9427a1",
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
      },
    }
    axios
      .request(optionsBasicData)
      .then(response => {
        this.setState({
          cases: response.data["data"]["confirmed"],
          active: response.data["data"]["active"],
          deaths: response.data["data"]["deaths"],
          recovered: response.data["data"]["recovered"],
        })
      })
      .catch(error => {
        console.error(error)
      })
    //covid data per country
    const optionsAllCountryData = {
      method: "GET",
      url: "https://corona.lmao.ninja/v2/countries?yesterday&sort",
    }
    let array = [["Country", "Cases"]]
    let dataArrayAllCountries = []
    axios
      .request(optionsAllCountryData)
      .then(response => {
        for (let i = 0; i <= 220; i++) {
          if (response.data[i]["countryInfo"]["iso2"] !== null) {
            if (i === 208) {
              array.push(["US", response.data[i]["cases"]])
            }
            array.push([response.data[i]["country"], response.data[i]["cases"]])
          }
        }
        for (let i = 0; i <= 220; i++) {
          if (response.data[i]["countryInfo"]["iso2"] != null) {
            dataArrayAllCountries.push({
              country: response.data[i]["country"],
              cases: response.data[i]["cases"],
              activeCases: response.data[i]["active"],
              deaths: response.data[i]["deaths"],
              recovered: response.data[i]["recovered"],
              testsNumber: response.data[i]["tests"],
              todayCases: response.data[i]["todayCases"],
              todayRecovered: response.data[i]["todayRecovered"],
              todayDeaths: response.data[i]["todayCases"],
              isoAlpha2: response.data[i]["countryInfo"]["iso2"],
            })
          }
        }
        ///
        dataArrayAllCountries.sort((a, b) => {
          return b.cases - a.cases
        })
        this.setState({ data: array })
        this.setState({ tableCovidData: dataArrayAllCountries })
        //console.log(this.state.tableCovidData);
      })
      .catch(error => {
        console.error(error)
      })
    //history by country
  }
  getHistoryForCountry(e) {
    e.preventDefault()
    const array = {
      days: [],
      activeCases: [],
      newCases: [],
      totalCases: [],
      totalDeaths: [],
      totalTests: [],
      newDeaths: [],
    }
    const options = {
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/history",
      params: { country: this.state.inputSpecificCountry },
      headers: {
        "x-rapidapi-key": "0d45c40ca1msh7f414238ad946a1p1d31dfjsn310aae9427a1",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
      },
    }

    axios
      .request(options)
      .then(response => {
        if (response.data.response !== "") {
          for (let i = 0; i <= 210; i++) {
            array.days.push(response.data.response[i]["day"])
            array.activeCases.push(response.data.response[i]["cases"].active)
            array.newCases.push(response.data.response[i]["cases"].new)
            array.totalCases.push(response.data.response[i]["cases"].total)
            array.totalDeaths.push(response.data.response[i]["deaths"].total)
            array.totalTests.push(response.data.response[i]["tests"].total)
            array.newDeaths.push(response.data.response[i]["deaths"].new)
          }
          this.setState({ specificCountryDays: array.days })
          this.setState({
            specificCountryActiveCases: array.activeCases,
          })
          this.setState({
            specificCountryTotalCases: array.totalCases,
          })
          this.setState({
            specificCountryNewCases: array.newCases,
          })
          this.setState({
            specificCountryTotalDeaths: array.totalDeaths,
          })
          this.setState({
            specificCountryTotalTests: array.totalTests,
          })
          this.setState({
            specificCountryNewDeaths: array.newDeaths,
          })
          this.setState({ showDataSpecificCountry: "a" })
        } else {
          alert("No data for that country")
        }
      })
      .catch(error => {
        console.error(error)
      })
  }
  handleInputChange = e => {
    this.setState({ inputSpecificCountry: e })
  }
  prepareDataSpecificCountry = (label, x, y, fill, backgroundColor) => {
    const data = {
      labels: x,
      datasets: [
        {
          label: label,
          data: y,
          fill: fill,
          backgroundColor: backgroundColor,
        },
      ],
    }
    return data
  }
  handleClickOnCountry(e, country) {
    e.persist()
    this.setState({ inputSpecificCountry: country }, () => {
      this.getHistoryForCountry(e)
    })
    window.scrollTo(0, 0)
  }

  render() {
    const showSpecificCountry = this.state.showDataSpecificCountry
    let specificCountryDataContainer
    if (showSpecificCountry) {
      specificCountryDataContainer = (
        <CovidDataForSpecificCountry
          chart1={this.prepareDataSpecificCountry(
            "Active Cases",
            this.state.specificCountryDays,
            this.state.specificCountryActiveCases,
            true,
            "#5cb04d",
            1
          )}
          chart2={this.prepareDataSpecificCountry(
            "Total Cases",
            this.state.specificCountryDays,
            this.state.specificCountryTotalCases,
            true,
            "#2668c9",
            1
          )}
          chart3={this.prepareDataSpecificCountry(
            "New Deaths",
            this.state.specificCountryDays,
            this.state.specificCountryNewDeaths,
            true,
            "#d9db39",
            1
          )}
          chart4={this.prepareDataSpecificCountry(
            "New Cases",
            this.state.specificCountryDays,
            this.state.specificCountryNewCases,
            true,
            "#ad181d",
            1
          )}
        />
      )
    } else {
      specificCountryDataContainer = <div className=""></div>
    }
    return (
      <Container>
        <Row>
          <Col xs={12}>{specificCountryDataContainer}</Col>
        </Row>
        <Row className="mt-5">
          <input
            onChange={event => this.handleInputChange(event.target.value)}
            className="specific-country-input pl-2"
            type="text"
            placeholder="Check your country"
          />
          <button
            onClick={e => this.getHistoryForCountry(e)}
            className="specific-country-button ml-3 px-4"
          >
            Search
          </button>
        </Row>
        <Row className="mt-5">
          <Col xs={12} md={6}>
            <MapChart data={this.state.data} />
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <CurrentStatusImage
                style={{ background: "#f0d807" }}
                icon={medicalMaskImage}
                information="Total Cases:"
                informationData={this.state.cases}
              />
              <CurrentStatusImage
                style={{ background: "#14db2f" }}
                icon={medicalMaskImage}
                information="Total Active Cases:"
                informationData={this.state.active}
              />
            </Row>
            <Row>
              <CurrentStatusImage
                style={{ background: "#e60b1a" }}
                icon={covidVirusImage}
                information="Total Deaths:"
                informationData={this.state.deaths}
              />
              <CurrentStatusImage
                style={{ background: "#17aeff" }}
                icon={recoveredImage}
                information="Total Recovered:"
                informationData={this.state.recovered}
              />
            </Row>
          </Col>
        </Row>
        <table className="table table-striped">
          <thead>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Cases</th>
            <th scope="col">Active Cases</th>
            <th scope="col">Deaths</th>
            <th scope="col">Tests Number</th>
            <th scope="col">Today Cases</th>
            <th scope="col">Today Deaths</th>
            <th scope="col">Today Recovered</th>
          </thead>
          <tbody>
            {this.state.tableCovidData.map((item, i) => {
              return (
                <TableRow
                  showCharts={e => this.handleClickOnCountry(e, item.country)}
                  key={i}
                  number={i + 1}
                  country={item.country}
                  cases={item.cases}
                  activeCases={item.activeCases}
                  deaths={item.deaths}
                  testsNumber={item.testsNumber}
                  todayCases={item.todayCases}
                  todayDeaths={item.todayDeaths}
                  todayRecovered={item.todayRecovered}
                />
              )
            })}
          </tbody>
        </table>
        <Link to="/">
          <FontAwesomeIcon
            style={{
              position: "fixed",
              left: "5px",
              top: "5px",
              color: "red",
            }}
            icon={faAngleDoubleLeft}
            size="3x"
          />
        </Link>
      </Container>
    )
  }
}
export default CovidMapContainer
