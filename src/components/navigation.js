import React from "react"
import {Link} from "gatsby"
import "../styles/styles.scss"

export default function Navigation(){
    return(
        <div className = "navigation">
            <nav>
                <Link to="/" activeStyle={{ color: "red" }}>Intro</Link>
                <Link to="/projects" activeStyle={{ color: "red" }}>Projects</Link>
                <Link to="/experiences" activeStyle={{ color: "red" }}>Experiences</Link>
                <Link to="/contacts" activeStyle={{ color: "red" }}>Contacts</Link>
            </nav>
        </div>
    )
}