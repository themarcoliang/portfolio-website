import React, { Fragment } from "react"
import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"
import stairs from "../images/stairs.png"
import moon from "../images/moon.jpg"
import architecture from "../images/architecture.jpg"
// import Img from "gatsby-image"

var nav_active;

// Can be removed later
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function noScroll() {
  window.scrollTo(0,0);
}

window.addEventListener('scroll', noScroll);
window.addEventListener("pageshow", async ()=> {
  await sleep(500); //for debugging
  
  document.querySelector("body").classList.add("loaded");
  window.removeEventListener('scroll', noScroll);
});


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
    <SEO title="Home Page" />
    <div id="loader">
        <h1>loading...</h1>
    </div>

    <div class="page-container">
      <div id="page1" className="page">
        <div id="left">
          {/* <h4 id="clock">12:48 AM March 27, 2020</h4> */}
        </div>
        <div id="center">
            <div id="title_container">
                <img src={stairs} alt="stairs" id="stairs_pic"/>
                <h1 id="title"><span>MARCO &emsp;<br/>&emsp;LIANG</span></h1>
            </div>
        </div>
        
        <div id="right">
          <p id="subtitle" className="label new-label"><span>welcome.</span></p>
        </div>
        
      </div>
      
      <div id="page2" className="page">
        <p id="about_me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent euismod mauris placerat neque rutrum, et 
          volutpat purus porta. Curabitur egestas in erat nec cursus. 
          Nullam et velit id lorem tincidunt aliquet. Sed aliquam 
          rutrum laoreet. Aliquam ut nunc rutrum, auctor nulla eu, 
          interdum ex. Quisque sit amet tincidunt libero, id pretium 
          leo. Pellentesque dictum molestie augue, a condimentum 
          est vulputate at.
          <br/><br/>
          Duis egestas interdum enim non elementum. Sed euismod 
          ipsum vel lectus interdum auctor eget quis turpis. Nulla 
          varius, ipsum sed eleifend commodo, urna ex pulvinar 
          risus, ac vehicula tellus neque a lacus. In iaculis venenatis 
          suscipit. Nunc sit amet erat a odio dapibus vestibulum 
          dapibus id arcu. Pellentesque egestas sem ut tortor dictum, 
        </p>

        <h2 id="project_start_date">3 22 2020.</h2>

        <p id="project_start"> 
            For Fuck's Sakes
            <br/><br/>
            Change this to some less cringey BS
        </p>

        <div id="moon_container">
          <img src={moon} alt="stairs" id="moon_pic"/>
          
          <p id="project_link">
              To learn more about some of my other projects,
              <br/>press &nbsp;
              <Link to="/page-2" style={{color:"white"}} activeStyle={{color:"red"}}>here</Link>
          </p>
        </div>
        
      </div>
      
      <div id="page3" className="page">
        <div id="contact_container">
          <h1 id="contact_header">This is a work in progress<br/>See something broken? Something you don't like? <br/>Let me know!</h1>

          <form id="contact_form" action="https://getform.io/f/7f1db3f9-c8ee-4d12-a6a5-3f3c05604cd3" method="POST">
            
            <input id="email_field" type="email" name="email" placeholder="email" required/>
            {/* <label for="email_field">email</label> */}
            <br/>
            <input id="name_field" type="text" name="name" placeholder="name" required/>
            {/* <label for="name_field">name</label> */}
            <br/>
            <input id="comment_field" type="text" name="comment" placeholder="comment" required/>
            {/* <label for="message_field">message</label> */}
            <br/>
            <button type="submit">submit</button>
          </form>
          
        </div>
        <img src={architecture} alt="architecture" id="architecture_pic"/>
      </div>
    </div>
    
    <div class="lines">
      <hr noshade="noshade"></hr>
      <hr noshade="noshade"></hr>
      <hr noshade="noshade"></hr>
    </div>

    <div class="dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>

    <div class="topnav">
          <button className="active" id="nav_home" onClick={()=>{toggleClass("nav_home"); scrollPage("page1")}}>MARCO</button>
          <button id="nav_proj" onClick={()=>{toggleClass("nav_proj"); scrollPage("page2")}}>PROJECTS</button>
          <button id="nav_exp" onClick={()=>{toggleClass("nav_exp"); scrollPage("page3")}}>EXPERIENCE</button>
          <button id="nav_contact" onClick={()=>{toggleClass("nav_contact"); scrollPage("page3")}}>GET IN TOUCH</button>
      </div>           
  </Fragment>
)

export default IndexPage
