import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/styles.scss"


export default class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      description: "default description",
      title: "Default Title"
    }
    // this.descriptionChange = this.descriptionChange.bind(this);
  }
  descriptionChange(newDescription) {
    this.setState({description: newDescription});
  }
  titleChange(newTitle) {
    this.setState({title: newTitle});
  }

  render(){
    return (
      <div id="projects">
        <Header/>
        <div className="list" id="project_list">
            <button className="button active" onClick={() => {
              this.descriptionChange()
              this.titleChange("Joergen")}}>
                <span className="name">Joergen</span>
                <span className="date">05.2020</span>
            </button>
  
            <button className="button" onClick={() => {
              this.descriptionChange("this is Paper Plane")
              this.titleChange("Paper Plane")}}>
                <span className="name">Paper Plane</span>
                <span className="date">04.2020</span>
            </button>
  
            <button className="button" onClick={() => {
              this.descriptionChange("this is Reversi-AI")
              this.titleChange("Reversi-AI")}}>
                <span className="name">Reversi-AI</span>
                <span className="date">07.2020</span>
            </button>
            
            <button className = "button" onClick={() => {
              this.descriptionChange("this is RISC-V ExecUnit")
              this.titleChange("RISC-V ExecUnit")}}>
                <span className="name">RISC-V ExecUnit</span>
                <span className="date">04.2020</span>
            </button>
  
            <button className = "button" onClick={() => {
              this.descriptionChange("this is S-Talk")
              this.titleChange("S-Talk")}}>
                <span className="name">S-Talk</span>
                <span className="date">02.2020</span>
            </button>
        </div>
        <p>{this.state.description}</p>
        <h1>{this.state.title}</h1>
        <Navigation/>
      </div>
    )}
  
      /* //  <p className = "project_description">
      //     A Discord bot that streams YouTube music, can be controlled <br/>
      //     through the iOS companion app. Built the bot itself using the  <br/>
      //     <mark className="red">Discord.js</mark> API,  YouTube API, and written in JavaScript.  <br/>
      //     <br/>
      //     The iOS companion app is written in <mark className="red">Swift</mark>, implements  <br/>
      //     <mark className="red">SiriKit</mark> for the  voice commands. The app and bot  <br/>
      //     communicates through a <mark className="red">Websocket</mark> connection, and the bot <br/>
      //     itself is hosted on a Raspberry pi.  <br/>
      // </p> */
}
