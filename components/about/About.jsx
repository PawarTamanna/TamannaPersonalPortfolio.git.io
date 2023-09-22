import React from 'react'
import './About.css'
import ME from '../../assets/tn1.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            {/* <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small></small>
            </article> */}
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>1</small>
            </article>
            <article className='about_card'>
              <BsFolderCheck className='about_icon' />
              <h5>Projects</h5>
              <small>3+ completed projects</small>
            </article>
          </div>

          <p>
          Hello,I'm Tamanna Pawar, an Electrical Engineering student at IIT Gandhinagar, with a strong passion for Frontend Web Development.My skill set encompasses a proficiency in HTML, CSS, JavaScript, and ReactJS.In addition to my coursework, I've led a team of 25 members in developing a real-time pothole detection system, demonstrating my leadership and collaboration skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
