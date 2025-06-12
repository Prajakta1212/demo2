import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Admission from './pages/AdmissionsPage'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
const App = () => {
  return (
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

  )
       
} 

export default App