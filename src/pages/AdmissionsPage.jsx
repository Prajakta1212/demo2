import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const Admission = () => {
  return(
    <div className="demo2">
      <Header/>
      <h1> Admission at Vivekanad College </h1>

      <p> Welcome to the Admission page of Vivvekanand College! We are delighted
        you're considering joining our vibrant academic community. our admission 
        process is designed to be straightforward and accessible.
      </p>

      <p>
        Please review the eligibility criteria and key dates below for upcoming
        academic year. For any queries, feel free to control our admission office.

      </p>

      <h2><b>Eligibility Criteria for Undergraduate programs</b> </h2>
        <table border="2">
				<thead> 
					<tr>
						<th><b>Program</b></th>
						<th><b>Minimum qualification</b></th>
						<th><b>Required Subjects</b></th>
            <th><b>Minimum Marks (%)</b></th>
					</tr>
				</thead>
				<tbody>
					<tr> 
						<td>B.Sc Computer Science</td>
						<td>10+2 (or equivalent)</td>
						<td>Physics, Chemistry, maths</td>
            <td> 50%</td>

					</tr>
					<tr>
						<td>B.Com Accounting and Finance</td>
						<td>10+2 (or equivalent)</td>
            <td>Commerce Stream</td>
						<td>45%</td>
					</tr>
					<tr>
						<td>B.A. English Literature</td>
						<td>10+2 (or equivalent)</td>
            <td> Any stream</td>
						<td>40%</td>
					</tr>
					
				</tbody>
				
			</table>

      <h2><b> Application Process</b></h2>
      <ol>
        <li><b> Online Application:</b> Fill out the application form available on our portal.</li>
        <li><b> Document Submission:</b> Upload scanned copies of required documents (marks sheets, ID proof, etc.).</li>
        <li><b>Entrance Exam (if applicable): </b>Appear for the college entrance examination.</li>
        <li><b> Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
        <li><b> Fee payment:</b> Complete the admission by paying the required fees.</li>

      </ol>

      <p> For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Course page or contact us directly.</p>
      <Footer/>
    </div>
  )
}

export default Admission
