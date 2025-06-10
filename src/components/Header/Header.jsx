import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <nav>
                <Link to="/">HomePage</Link>
                <Link to="/aboutpage">AboutPage</Link>
                <Link to="/coursespage">CoursesPage</Link>
                <Link to="/contactpage">ContactPage</Link>
                <Link to="/admissionpage">AdmissionPage</Link>

            </nav>
        </header>
    )
}

export default Header