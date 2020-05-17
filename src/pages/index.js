import React, { Fragment } from "react"
import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/index.css"
import stairs from "../images/stairs.png"
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
        <h1>hi</h1>
    </div>

    <div class="page-container">
      <div id="page1" className="page">
            <div id="title_container">
                <img src={stairs} alt="stairs" id="stairs_pic"/>
                <h1 id="title"><span>MARCO &emsp;<br/>&emsp;LIANG</span></h1>
            </div>
        
          <p id="subtitle" className="label new-label"><span>welcome.</span></p>
        
      </div>
      
      <div id="page2" className="page">
        <p id="about_me_top">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent euismod mauris placerat neque rutrum, et 
          volutpat purus porta. Curabitur egestas in erat nec cursus. 
          Nullam et velit id lorem tincidunt aliquet. Sed aliquam 
          rutrum laoreet. Aliquam ut nunc rutrum, auctor nulla eu, 
          interdum ex. Quisque sit amet tincidunt libero, id pretium 
          leo. Pellentesque dictum molestie augue, a condimentum 
          est vulputate at.
        </p>
        <p id="about_me_bottom">
          Duis egestas interdum enim non elementum. Sed euismod 
          ipsum vel lectus interdum auctor eget quis turpis. Nulla 
          varius, ipsum sed eleifend commodo, urna ex pulvinar 
          risus, ac vehicula tellus neque a lacus. In iaculis venenatis 
          suscipit. Nunc sit amet erat a odio dapibus vestibulum 
          dapibus id arcu. Pellentesque egestas sem ut tortor dictum, 
        </p>
        <Link id="about_me_link" to="/page-2">
          About
        </Link>
      </div>
      <div id="page3" className="page">
        <p id="project_start"> 
            I wanted to create a space  where I can showcase my 
            work, and also an opportunity  for me to learn a bit 
            more about web development
        </p>

        <Link id="project_link" to="/page-2">View Other Work</Link>
      
      </div>

      <div id="page4" className="page">
        <div id="contact_container">
          <h1 id="contact_header">This is a work in progress<br/>See something broken? Something you don't like? <br/>Or...just for a chat?<br/>Let me know!</h1>
          <a id="email_link" href="mailto:marcoliang333@gmail.com">marcoliang333@gmail.com</a>
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
