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
      title: data.joergen.title,
      active: "joergen"
    }
    // this.descriptionChange = this.descriptionChange.bind(this);
  }
  updateDescription(newDescription) {
    this.setState({description: newDescription});
  }
  updateTitle(newTitle) {
    this.setState({title: newTitle});
  }
  updateActive(newActive){
    this.setState({active: newActive});
  }

  render(){
    return (
      <div id="projects">
        <Header/>
        <div className="list" id="project_list">
            <button className={`button ${this.state.active === "joergen" ? 'active' : ''}`} onClick={() => {
              this.updateDescription(data.joergen.description)
              this.updateTitle("Joergen")
              this.updateActive("joergen")}}>
                <span className="name">{data.joergen.title}</span>
                <span className="date">{data.joergen.date}</span>
            </button>
  
            <button className={`button ${this.state.active === "paper_plane" ? 'active' : ''}`} onClick={() => {
              this.updateDescription(data.paper_plane.description)
              this.updateTitle("Paper Plane")
              this.updateActive("paper_plane")}}>
                <span className="name">{data.paper_plane.title}</span>
                <span className="date">{data.paper_plane.date}</span>
            </button>
  
            <button className={`button ${this.state.active === "reversi_ai" ? 'active' : ''}`} onClick={() => {
              this.updateDescription(data.reversi_ai.description)
              this.updateTitle("Reversi-AI")
              this.updateActive("reversi_ai")}}>
                <span className="name">{data.reversi_ai.title}</span>
                <span className="date">{data.reversi_ai.date}</span>
            </button>
            
            <button className = {`button ${this.state.active === "risc_v_execunit" ? 'active' : ''}`} onClick={() => {
              this.updateDescription(data.risc_v_execunit.description)
              this.updateTitle("RISC-V ExecUnit")
              this.updateActive("risc_v_execunit")}}>
                <span className="name">{data.risc_v_execunit.title}</span>
                <span className="date">{data.risc_v_execunit.date}</span>
            </button>
  
            <button className = {`button ${this.state.active === "s_talk" ? 'active' : ''}`} onClick={() => {
              this.updateDescription(data.s_talk.description)
              this.updateTitle("S-Talk")
              this.updateActive("s_talk")}}>
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
  
    
}
