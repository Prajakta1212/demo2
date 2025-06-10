import React from 'react'
import Header from '../components/Header/Header'
import './mystyle.css'
import Footer from '../components/Footer/Footer'
const About = () => {
  return(
    <div className="demo">
      <Header/>
      <h1> About Vivekanand College</h1>

      <p> Vivekanand College stands as beacon of knowledge and intigrity,
        committed to delivering transformative education since its inception
        in [Year of Establishment, e.g., 1980]. Located in the bustling heart of
        [City/Area. e.g.,Chembur,mumbai], our college has consistently strived to 
        uphold the highest standars of academic rigor and ethical values.

      </p>

      <p> Our vision is to empower students with critical thinking skills, a global
        perspective, and a strong sense of social responsibility. We aim to nurture
        individuals who are not successful in their careers but also contibuting members of society.</p>

        <h2><b> Our Mission</b></h2>
        <hr></hr>
        <ul>
          <li> To provide high-quality, accessible education across various disciplines.</li>
          <li> To foster research, innovation, and creativity among students and faculity.</li>
          <li> To cultivate a diverse and inclusive learning environment.</li>  
          <li> To instill strong ethical values and leadership qualities</li>
        </ul>
        <h2><b> Our Values</b></h2>   
        <hr></hr>
          <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand
          College is built. We encourage open dialogue, intellectual curiosity, and relentless pursuit of knowledge.</p>
        
        <h2><b> Our History</b></h2>
        <hr></hr>
          <p> [Briefly describe the college's history-e.g., how it started, key milestones, 
            growth over the years, famous alumni if any]. Our journey began with a vision to make
            quality education available to all, and we continue that legacy today.</p>
        <Footer/>

    </div>
  )
}

export default About