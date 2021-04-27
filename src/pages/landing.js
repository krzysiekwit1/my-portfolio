import React, { useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/LandingPage/navBar/Navbar"
import FirstSection from "../components/LandingPage/FirstSection/FirstSection"
import SecondSection from "../components/LandingPage/SecondSection/SecondSection"
import ThirdSection from "../components/LandingPage/ThirdSection/ThirdSection"
import FourthSection from "../components/LandingPage/FourthSection/FourthSection"
import Footer from "../components/LandingPage/Footer/Footer"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const Landing = () => {
  useEffect(() => {
    document.body.style = "overflow-y:auto;"
  })

  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
      <Link to="/">
        <FontAwesomeIcon
          style={{
            position: "fixed",
            left: "5px",
            top: "70px",
            color: "red",
            zIndex: "2",
          }}
          icon={faAngleDoubleLeft}
          size="3x"
        />
      </Link>
    </>
  )
}
export default Landing
