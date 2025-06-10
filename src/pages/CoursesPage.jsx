import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const Courses = () => {
  return(
    <div>
      <Header/>
      <h1> Our Academic Programs</h1>
      <p> Vivekanand College offers a comprehensive range of undergraduate and postgraduate
        programs to designed to equip students with knowledge and skills demanded by today's 
        dynamic global landscapes. Our curriculum is regularly updated to reflect industry trends 
        and academic advancements
      </p>

      <h2> Discover Campus Life</h2>
      <video> 
        <source src="college-tour-FAmcnyfF.mp4" type="video/mp4"></source>
      </video>

      <h2> Undergraduate Programs (UG)</h2>
      <ul> 
        <li> Bachelor of Science(BSc)</li> 
        <ul>
          <li> Computer Science (3 years)</li>
          <li> Information Technology (3 years)</li>
          <li> Biotechnology (3 years)</li>
        </ul>
      </ul>
        <ul> 
          <li> Bachlelor of Commerce (B.Com)</li>
          <ul>
            <li> Accounting and Finance (3 years)</li>
            <li> Banking and Insurance</li>
          </ul>
        </ul>

        <ul>
          <li> Bachelors of Arts (B.A)</li>
          <ul>
            <li> English Literature (3 years)</li>
            <li> Psychology (3 years)</li>
          </ul>
        </ul>

        <h1><b> Postgraduate Programs (PG)</b></h1>
        <hr></hr>

        <ul>
          <li> Master of Science(M.Sc.)</li>
          <ul>
            <li> Computer Science (2 years)</li>
            <li> Information Technology (2 years)</li>
            </ul>
        </ul>
        <ul>
          <li> Master of Commerce (M.Com) (2 years)</li>
        </ul>
        <ul>
          <li> Masters of Arts (M.A)(2 years)</li>
        </ul>

        <h2> Program Details and Fee Structure (annual)</h2>
        <hr></hr>


        <table border="2">
				<thead> 
					<tr>
						<th>Program Type</th>
						<th>Course name</th>
						<th>Duration</th>
            <th>Annual fee (INR)</th>
            <th>Eligibility </th>
					</tr>
				</thead>
				<tbody>
					<tr> 
						<td>UG</td>
						<td>B.Sc computer Science</td>
						<td>3 years</td>
            <td> 85,000</td>
            <td>10+2 with PCM (50%)</td>

					</tr>
					<tr>
						<td>UG</td>
						<td>B.Com Accounting and Finance</td>
						<td>3 years</td>
            <td> 70,000</td>
            <td>10+2 with Commerce(45%)</td>
					</tr>
					<tr>
						<td>UG</td>
						<td>M.Sc Information Technology</td>
						<td>2 years</td>
            <td> 95,000</td>
            <td>B.Sc. IT/CS (50%)</td>
					</tr>
					
				</tbody>
				
			</table>


      <h2> Specilized and Vocational Courses</h2>

      <p> In Addition to traditional degree programs, we offer various certificate
        and diploma courses in areas like Digital Marketing, Web Development, Data Analytics,
        and Soft Skills Development, providing specialized training for 
        career enhancement.
      </p>

      <p text-align="center"> Have questiens about a specific Courses?</p>

      <button type="button"> Inquire about Courses</button>
      <Footer/>

  
    </div>
  )
}

export default Courses