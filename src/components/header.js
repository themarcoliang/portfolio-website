import React from "react"
import {Link} from "gatsby"
import "../styles/styles.scss"

export default function Header(){
    return (
        <header>
            <div className = "container">
                <div className = "inner-header">
                    <div className = "logo">
                        <Link to="/">Marco Liang</Link>
                    </div>
                    <div className = "contacts">
                        <Link to="https://github.com/themarcoliang" target="_blank">GitHub</Link>
                        <Link to="https://www.linkedin.com/in/marco-liang/" target="_blank">LinkedIn</Link>
                        <a href="mailto: marcoliang333@gmail.com">Email</a>
                        <Link to="/" target="_blank">Resume</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}