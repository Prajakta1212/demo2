import React from 'react'
import './mystyle.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const Contact = () => {
  return(
    <div id="home2">
      <Header/>
      <div id="contact">
        <h1 id="about" >Contact Us</h1>

            <p>We'd love to hear from you ! Whether you have questions about admission, programs, or campus life,
                our theam is here to help.
            </p>

            <h2> General Enqueries </h2>
            <hr></hr>

            <h5> Vivekanand Collehe Main Campus</h5>
            <p>[Your college Full Address Here, e.g, Mahatma Gandhi Road,Chembur, Mumbai, Maharashtra 400071 ] India </p>
            <p> Phone: **+91 1234567890**</p>
            <p>Email: **info@vivekanandcollege.edu**</p>
            <p>Office Hours: Monday-Friday, 9:AM-5:PM IST </p>

            <h2> Admission Office</h2>
            <hr></hr>
            <p> For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 8456971252</p>
            <p>Email: admission@vivekanandcollege.edu</p>

            <h2> Student Support Services</h2>
            <hr></hr>
            <p> For current student support, academic advising, or general assistance:</p>
            <p>Phone: +91 9845765555</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>

            <h2>Find Us on Google Maps</h2>
            <hr></hr>
            <hr></hr>
            <p>[You can embed a Google Map here later using an inframe or a React map library.]</p>
            <a href="https://maps.google.com/?q=Vivekanand+College"><u> view on Google Map</u></a>

        
            <h2> Send Us a Message </h2>
            <hr></hr>
            <p> [ Contact form with fields for Name, Email, Subject, Message can be added here.]</p>
          </div>
            <Footer/>



    </div>
  )
}

export default Contact