import React from "react"
import useStyles from "./styles"

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        bottom: "0",
        overflow: "hidden",
        backgroundColor: "#383838",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          color: "white",
          fontSize: "20px",
          height: "30px",
        }}
      ></span>
    </div>
  )
}

export default Footer
