import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionsPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup'
const App = () => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
  <>
  <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Prajakta Vittal Ukkoji"
          studentPhotoUrl="/Images/prajakta3.png" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutpage" element={<About/>}/>
          <Route path="/coursespage" element={<Courses/>}/>
          <Route path="/contactpage" element={<Contact/>}/>
          <Route path="/admissionpage" element={<Admission/>}/>
        </Routes>
        <ChatbotComponent/>
      </BrowserRouter>

    </div>
    </>
  

  )
       
} 

export default App