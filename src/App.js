import React, {Component} from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class App extends Component {
    render() {
      return (
        <React.Fragment>
          <div className='rows' style={{width:'100%'}}>
            <div id='title' className='row'>
              <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <h1>Marco Liang</h1>
              </ScrollAnimation>
            </div>

            <div id='subtitle' className='row'>
              <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <p>what am I<br/>who am i<br/>website building is<br/>hard as fuck</p>
              </ScrollAnimation>
            </div>
          </div>
        </React.Fragment>
      );
    }
}

export default App