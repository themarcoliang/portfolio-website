import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"

var nav_active;

function toggleClass(id) {
  if(nav_active == null)
  {
    nav_active = document.getElementById("nav_home");
  }
  var element = document.getElementById(id);
  element.classList.toggle("active");
  nav_active.classList.toggle("active");
  nav_active = element;
  // alert(id);
}

function scrollPage(page){
  document.getElementById(page).scrollIntoView(true);
}

const IndexPage = () => (  
  <Fragment>
    <SEO title="Home" />
    <div id="page-container">
      <div id="page1" className="page">
        <div id="left1">
          <h4 id="clock">12:48 AM March 27, 2020</h4>
        </div>
        <div id="center1">
          <h1 id="title">MARCO LIANG</h1>
        </div>
        <div id="right1">
          <p id="subtitle">3/4th Year Computer Engineering Student<br/>
           Simon Fraser University<br/>
           Vancouver, Canada</p>
        </div>
        
      </div>
      
      {/* <div style={{backgroundColor: "#133043", width: "20vw"}}/> */}

      <div id="page2" className="page" style={{backgroundColor: "red"}}>
        <h1 style={{color:"white"}}>This is page 2</h1>
      </div>
      
      <div id="page3" className="page" style={{backgroundColor: "yellow"}}>
        <h1 style={{color:"black"}}>This is page 3</h1>
      </div>
    </div>

    <div class="topnav">
        <a className="active" id="nav_home" onClick={()=>{toggleClass("nav_home"); scrollPage("page1")}}>MARCO</a>
        <a id="nav_proj" onClick={()=>{toggleClass("nav_proj"); scrollPage("page2")}}>PROJECTS</a>
        <a id="nav_exp" onClick={()=>{toggleClass("nav_exp"); scrollPage("page3")}}>EXPERIENCE</a>
        <a>GET IN TOUCH</a>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Fragment>
)

export default IndexPage
