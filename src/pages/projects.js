import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/styles.scss"

export default function Projects() {
  return (
    <div className="projects">
      <Header/>
      <div className = "list">
            <button>
                <span className="name">Joergen</span>
                <span className="date">05.2020</span>
            </button>

            <button>
                <span className="name">Paper Plane</span>
                <span className="date">04.2020</span>
            </button>

            <button>
                <span className="name">Reversi-AI</span>
                <span className="date">07.2020</span>
            </button>
            
            <button>
                <span className="name">RISC-V ExecUnit</span>
                <span className="date">04.2020</span>
            </button>

            <button>
                <span className="name">S-Talk</span>
                <span className="date">02.2020</span>
            </button>
      </div>

      <p className = "project_description">
          A Discord bot that streams YouTube music, can be controlled <br/>
          through the iOS companion app. Built the bot itself using the  <br/>
          <mark class="red">Discord.js</mark> API,  YouTube API, and written in JavaScript.  <br/>
          <br/>
          The iOS companion app is written in <mark class="red">Swift</mark>, implements  <br/>
          <mark class="red">SiriKit</mark> for the  voice commands. The app and bot  <br/>
          communicates through a <mark class="red">Websocket</mark> connection, and the bot <br/>
          itself is hosted on a Raspberry pi.  <br/>
      </p>

      <h1>Joergen</h1>
      <Navigation/>
    </div>
  )
}
