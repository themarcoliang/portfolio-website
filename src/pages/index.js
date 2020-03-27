import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"


const IndexPage = () => (  
  <Fragment>
    <SEO title="Home" />
    <div id="page-container">
      <div id="page1" className="page" style={{backgroundColor: "#133043"}}>
        <h4 id="clock">12:48 AM March 27, 2020</h4>
        <h1 id="title">MARCO LIANG</h1>
        <p id="subtitle">3/4th Year Computer Engineering Student<br/>
           Simon Fraser University<br/>
           Vancouver, Canada</p>
      </div>
      <div id="page2" className="page" style={{backgroundColor: "red"}}>
        <h1 style={{color:"white"}}>This is page 2</h1>
      </div>
      <div id="page3" className="page" style={{backgroundColor: "yellow"}}>
        <h1 style={{color:"black"}}>This is page 3</h1>
      </div>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Fragment>
)

export default IndexPage
