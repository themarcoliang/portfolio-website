import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"
import "../styles/styles.scss"

export default function Home() {
  return (
    <div className="intro">
      <Header/>
      <p>
          Hi! I'm Marco, a <mark class="red">Computer Engineering</mark> student at Simon Fraser <br/>
          University, with a minor in Computing Science, and I'm expected  <br/>
          to graduate in 2021. <br/>
          <br/>
          Currently, I'm working as an iOS Development intern at <mark class="red">Rivian</mark>, but <br/>
          I'm always excited to learn about new opportunities, so feel free to <br/>
          get in touch with me through any of the channels linked above! <br/>
      </p>
      <h1>MARCO<br/>&emsp;LIANG</h1>
      <Navigation/>
    </div>
  )
}
