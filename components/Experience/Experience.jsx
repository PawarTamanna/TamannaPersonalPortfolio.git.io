import React from 'react'
import './Experience.css'
import {BsCheck2All} from 'react-icons/bs'

const Experiance = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Devolopment</h3>
          <div className="experience_content">
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Beggier</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience_backend">
        <h3>Related Cources</h3>
            <div className="experience_content">
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>HTML and CSS</h4>
                  <small className='text-light'>Completed course from coincent IIT Guwahati</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>MERN Stack</h4>
                  <small className='text-light'>Ongoing MERN Stack training program from NullClass</small>
                </div>
              </article>
              <article className='experience_details'>
                <BsCheck2All className='experience_details-icon'/> 
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Currently doing react course from Udemy</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experiance
