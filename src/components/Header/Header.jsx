import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return(
        <header class="demo">
            <h2>Vivekanand College</h2>
            <nav>
                <Link to="/" id="main">Home</Link>
                <Link to="/aboutpage" id="main">About</Link>
                <Link to="/coursespage" id="main">Courses</Link>
                <Link to="/contactpage" id="main">Contact</Link>
                <Link to="/admissionpage" id="main1"><b>Apply Now!</b></Link>

            </nav>
        </header>
    )
}

export default Header
