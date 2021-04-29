import React, { Component } from "react"
import FirstScene from "../components/MainPageComponents/FirstScene/FirstScene"
import SecondScene from "../components/MainPageComponents/SecondScene/SecondScene"
import ThirdScene from "../components/MainPageComponents/ThirdScene/ThirdScene"
import FourthScene from "../components/MainPageComponents/FourthScene/FourthScene"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import "../styles/styles.scss"

class CubeAnimator extends Component {
  componentDidMount() {
    document.title = "Krzysztof Witkowski"
    //document.body.style = "overflow:hidden;background: #ebebeb;"
  }
  constructor(props) {
    super(props)
    this.firstSceneRef = React.createRef()
    this.secondSceneRef = React.createRef()
    this.thirdSceneRef = React.createRef()
    this.fourthSceneRef = React.createRef()
  }
  state = {
    secondScene: false,
    thirdScene: false,
    fourthScene: false,
  }

  scrollToSecondScene = () => {
    this.secondSceneRef.current.scrollIntoView({ behavior: "smooth" })
    this.setState({ secondScene: true })
  }
  scrollToThirdScene = () => {
    this.thirdSceneRef.current.scrollIntoView({ behavior: "smooth" })
    this.setState({ thirdScene: true })
  }
  scrollToFourthScene = () => {
    this.fourthSceneRef.current.scrollIntoView({ behavior: "smooth" })
    this.setState({ fourthScene: true })
  }
  scrollToFirstScene = () => {
    this.firstSceneRef.current.scrollIntoView({ behavior: "smooth" })
  }
  render() {
    const { secondScene } = this.state
    const { thirdScene } = this.state
    const { fourthScene } = this.state

    return (
      <>
        <Container fluid className="m-0 p-0">
          <FirstScene
            firstSceneRef={this.firstSceneRef}
            scrollToSecondScene={this.scrollToSecondScene}
          />
          <SecondScene
            secondSceneRef={this.secondSceneRef}
            scrollToThirdScene={this.scrollToThirdScene}
            secondSceneStatus={secondScene}
          />
          <ThirdScene
            thirdSceneRef={this.thirdSceneRef}
            scrollToFourthScene={this.scrollToFourthScene}
            thirdSceneStatus={thirdScene}
          />
        </Container>
        <FourthScene
          fourthSceneRef={this.fourthSceneRef}
          scrollToFirstScene={this.scrollToFirstScene}
          fourthSceneStatus={fourthScene}
        />
      </>
    )
  }
}
export default CubeAnimator
