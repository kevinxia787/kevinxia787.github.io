import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Container, Jumbotron } from 'reactstrap';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Landing.css';
import { FaBriefcase, FaLinkedin, FaGraduationCap, FaGithub, FaInstagram, FaYoutube  } from 'react-icons/fa';

import profile from './images/profile.PNG';
import blockfi from './images/blockfi_logo.png';
import capitalone from './images/capitalone.png';
import bu from './images/bu.png';

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <Jumbotron style={{backgroundColor: '#FFFFFF'}}>
            <Container style={{display: 'inline-flex'}}>
              <Image src={profile} roundedCircle/>
              <Container>
                <h1 className='display-3' >Hey! I'm Kevin</h1>
                <p className='lead' style={{textAlign: 'left'}}>Welcome to my barebones personal site. During the day I'm a software engineer @ <a href="https://www.blockfi.com">BlockFi</a>, working on complex security problems in the CeFi/Cryptocurrency space.
                 At night you might find me cooking, reading, gaming, or practicing the (guitar || piano).<br/> <br/> Below you'll find a timeline of my entire journey (start to present) in software engineering. If you'd like to connect on social media, all of my relevent social sites are below.</p>
                
                <Container>
                  <a href='https://www.linkedin.com/in/kevinxia787' style={{color: '#000000'}}>
                    <FaLinkedin size='40px'/>
                  </a>
                  <a href='https://www.github.com/kevinxia787' style={{color: '#000000'}}>
                    <FaGithub size='40px'/>
                  </a>
                  <a href='https://www.instagram.com/kevinxia787' style={{color: '#000000'}}>
                    <FaInstagram size='40px'/>
                  </a>
                  <a href='https://www.youtube.com/channel/UCoo2tVgzonkAHc6lWLSgvaw' style={{color: '#000000'}}>
                    <FaYoutube size='40px'/>
                  </a>
                </Container>
              </Container>
            </Container>
            
          </Jumbotron>
          <hr/>
          <br></br>
          <br/>
          <Container>
            <VerticalTimeline className="vertical-timeline-custom-line" layout="1-column">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#ffffff', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '6px solid  #000000' }}
                  date= {
                    <div class="lead" style={{float: 'left'}}>
                      Apr 2021 - present
                    </div>
                  }
                  iconStyle={{ background: '#FFFFFF', color: '#000000'}}
                  icon={<FaBriefcase/>}
                >
                <Container style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src={blockfi} style={{width: '75px', height: '75px'}}/>
                  <h3 className="display-4" style={{fontSize: "42px"}}>BlockFi</h3>
                </Container>
                <h4 className="display-4" style={{fontSize: "20px", justifyContent: 'center'}}>Software Engineer</h4>
              
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: '#FFFFFF', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '6px solid  #000000' }}
                  date= {
                    <div class="lead" style={{float: 'right'}}>
                      Aug 2019 - Apr 2021
                    </div>
                  }
                  iconStyle={{ background: '#ffffff', color: '#00000' }}
                  icon={<FaBriefcase/> }
                >
                <Container style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src={capitalone} style={{width: '75px', height: '75px'}}/>
                  <h3 className="display-4" style={{fontSize: "42px"}}>Capital One</h3>
                </Container>
                <h4 className="display-4" style={{fontSize: "20px"}}>Senior Associate Software Engineer</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  contentStyle={{ background: '#FFFFFF', color: '#000000' }}
                  contentArrowStyle={{ borderRight: '6px solid  #000000' }}
                  date= {
                    <div class="lead" style={{float: 'left'}}>
                      Graduated - May 2019
                    </div>
                  }
                  iconStyle={{ background: '#ffffff', color: '#00000' }}
                  icon={<FaGraduationCap/> }
                >
                <Container style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                  <Image src={bu} style={{width: '75px', height: '75px'}}/>
                  <h3 className="display-4" style={{fontSize: "42px"}}>Boston University</h3>
                </Container>
                <h4 className="display-4" style={{fontSize: "20px"}}>B.A. in Computer Science</h4>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Container>
          
        </div>
      </div>
    )
  }
}

export default Landing;