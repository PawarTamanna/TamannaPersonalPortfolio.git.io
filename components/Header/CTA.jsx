import React from 'react'
import Resume from '../../assets/Tamanna_PAWAR.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={Resume} className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
