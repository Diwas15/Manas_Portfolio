import logo from './images/manas3.png';
import './App.css';
import wipro from './images/wipro.png';
import school from './images/school.png';
import call from './images/call.png';
import email from './images/email.png';
import degree from './images/degree.png';
import upKey from './images/up.png';
import React, {useEffect, useState} from 'react';
function App() {
  const [show, setShow] = useState(false);

  const moveUp = ()=>{
    
    let about = document.getElementById('about').offsetTop;
    let experience = document.getElementById('experience').offsetTop;
    let education = document.getElementById('education').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    let curPos = window.scrollY;

    if(curPos>=about-1 && curPos<experience-1){
      window.scrollTo({top:0});
    }
    else if(curPos>=experience-1 && curPos<education-1){
      window.scrollTo({top:about});
    }
    else if(curPos>=education-1 && curPos<education+(contact-education)/2){
      window.scrollTo({top:experience});
    }
    else{
      window.scrollTo({top:education});
    }
    
  }

  const moveDown = ()=>{
    let about = document.getElementById('about').offsetTop;
    let experience = document.getElementById('experience').offsetTop;
    let education = document.getElementById('education').offsetTop;
    let contact = document.getElementById('contact').offsetTop;

    let curPos = window.scrollY;

    if(curPos>=about-1 && curPos<experience-1){
      window.scrollTo({top:experience});
    }
    else if(curPos>=experience-1 && curPos<education-1){
      window.scrollTo({top:education});
    }
    else if(curPos>=education-1 && curPos<education+(contact-education)/2){
      window.scrollTo({top:contact});
    }
    
  }

  document.addEventListener('scroll',()=>{
    if(window.scrollY >=document.getElementById('about').offsetTop-1 ){
      setShow(true);
    }
    else setShow(false);
  })

  return (
    <div className="App">
      <img className={!show?'hideArrows':'moveUp'} src={upKey} onClick={moveUp} alt="" />
      <img className={!show?'hideArrows':'moveDown'} src={upKey} onClick={moveDown} alt="" />

      <header className='header'>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact Me</a>
      </header>
      <div id="about" className="About">
        <div className="about_desc">
          <h1>Hey!</h1>
          <p>Myself <b>Manas Sati</b>, a Solution Architect L1 at Wipro with 3.2 years of experience in SAP software. I’m passionate about designing innovative solutions, eager to learn new technologies,
            and committed to driving success through collaboration and continuous improvement.</p>
        </div>
        <div className="professional_image">
          <img src={logo} alt="" />
        </div>
      </div>
      <div id="experience" className="experience">
        <p>Experience</p>
        <div className="card">
          <div className="company_logo">
            <img src={wipro} alt="" />
          </div>
          <div className="job_title">
            <h3>Administrator - L1</h3>
            <p>Wipro, Greater Noida, Uttar Pradesh, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>Jan 2023 - Dec 2023 (1 year)</p>
          </div>
        </div>
        <div className="card">
          <div className="company_logo">
            <img src={wipro} alt="" />
          </div>
          <div className="job_title">
            <h3>System Engineer - L1</h3>
            <p>Wipro, Greater Noida, Uttar Pradesh, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>Nov 2021 - Jul 2023 (1 year, 9 months)</p>
          </div>
        </div>
      </div>




      <div id="education" className="experience">
        <p>Education</p>
        <div className="card">
          <div className="company_logo">
            <img src={degree} width="130px" height="130px" alt="" />
          </div>
          <div className="job_title">
            <h3>BCA</h3>
            <p>Amrapali University, Haldwani, Uttarakhand, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>May 2018 - April 2021</p>
          </div>
        </div>
        <div className="card">
          <div className="company_logo">
            <img src={school} width="130px" height="130px" alt="" />
          </div>
          <div className="job_title">
            <h3>SSC</h3>
            <p>Vivekanand Vidya Mandir Higher Secondary School, Ranikhet, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>May 2015 - April 2016</p>
          </div>
        </div>
        <div className="card">
          <div className="company_logo">
            <img src={school} width="130px" height="130px" alt="" />
          </div>
          <div className="job_title">
            <h3>HSC</h3>
            <p>National Inter College, Ranikhet, India</p>
            <p style={{fontSize:'15px' ,color:'#777777'}}>May 2017 - April 2018</p>
          </div>
        </div>
      </div>

      <div id="contact" className="experience">
        <p>Contact Me</p>
        <div className="container">
          <div className="contact_card">
            <img style={{marginRight:'.5rem', height:'1.4rem'}} src={call} alt="" />
            <a href="tel:7088833530">7088833530</a>
          </div>
          <div className="contact_card">
            <img style={{marginRight:'.5rem', height:'1.6rem'}} src={email} alt="" />
            <a href="mailto:satimanas2001@gmail.com">satimanas2001@gmail.com</a>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
