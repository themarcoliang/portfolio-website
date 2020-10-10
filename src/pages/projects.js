import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/styles.scss"
import * as data from "../data/projects.json"

export default class Projects extends React.Component {
  constructor(){
    super();
    this.state = {
      description: data.joergen.description,
      title: data.joergen.title
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
              this.descriptionChange(data.joergen.description)
              this.titleChange("Joergen")}}>
                <span className="name">{data.joergen.title}</span>
                <span className="date">{data.joergen.date}</span>
            </button>
  
            <button className="button" onClick={() => {
              this.descriptionChange(data.paper_plane.description)
              this.titleChange("Paper Plane")}}>
                <span className="name">{data.paper_plane.title}</span>
                <span className="date">{data.paper_plane.date}</span>
            </button>
  
            <button className="button" onClick={() => {
              this.descriptionChange(data.reversi_ai.description)
              this.titleChange("Reversi-AI")}}>
                <span className="name">{data.reversi_ai.title}</span>
                <span className="date">{data.reversi_ai.date}</span>
            </button>
            
            <button className = "button" onClick={() => {
              this.descriptionChange(data.risc_v_execunit.description)
              this.titleChange("RISC-V ExecUnit")}}>
                <span className="name">{data.risc_v_execunit.title}</span>
                <span className="date">{data.risc_v_execunit.date}</span>
            </button>
  
            <button className = "button" onClick={() => {
              this.descriptionChange(data.s_talk.description)
              this.titleChange("S-Talk")}}>
                <span className="name">{data.s_talk.title}</span>
                <span className="date">{data.s_talk.date}</span>
            </button>
        </div>
        <div className = "description">
          <p>{this.state.description[0]}</p>
          <p>{this.state.description[1]}</p>
        </div>
        
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
