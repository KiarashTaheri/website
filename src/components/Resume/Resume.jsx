import React from 'react';
import './Resume.css'

const Resume = () => (
  <section id='resume' className='section'>
    <h2 className='resume__section__title'>Resume</h2>
    <div className='resume__section center'>
      <div className='resume__embedded__view'>
        <iframe src="/Kiarash_Taheri_resume.pdf" width="100%" height="800px" title="Resume" />
      </div>
    </div>
  </section>
)

export default Resume