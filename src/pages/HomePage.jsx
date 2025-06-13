import React from 'react'
import './mystyle.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const Home = () => {
     return(
       <div id="home2">
          <Header/>
               <div className='page-container'>
                   <div className='college-image'>
                      <img src="/Images/home.jpeg" alt="Vivekanand College Campus"  className="college-image1"height={350} width={950} />
                      <div className='front-image'> 
                
                            <h1><b>Welcome to Vivekanand College!</b></h1>
                            <p>Your journey to excellence start here</p>
                            <a href="AdmissionPage" id="main1"><h6>Apply Now!</h6></a>
                      </div> 
                      
                    </div>   

                      <p>Vivekanand College* is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p> 
                      <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                      <h2>WHY CHOOSE VIVEKANAND COLLEGE ?</h2>
                      <hr></hr>
                      <ul>
                          <li><strong>Legacy of Excellence:</strong> Decades of commitment to quality education.</li>
                          <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                          <li><strong>Modern Facilities:</strong> Well-equipped labs, expansive library, and comfortable campus.</li>
                          <li><strong>Holistic Development:</strong> Focus on co-curricular activities, sports, and community service.</li>
                          <li><strong>Strong Placements:</strong> Excellent career opportunities with leading companies.</li>
                      </ul>

                      <h2> Campus Life and Facilities</h2>
                      <hr></hr>
                      <div id="image2">
                       <img src="./Images/1.png "className='page1'/>
                       <img src="./Images/2.png" className='page2'/>
                       
                      </div>
                          <p id="center"> Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning</p>

                          <p id="home1"> Ready to explore our courses?</p>
                          <a href="/CoursesPage" id="home">Explore Courses</a>
                      </div>  

          <Footer/>
        </div>
  )
}

export default Home