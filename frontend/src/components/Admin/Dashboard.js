import { useEffect, useState } from "react";
import ApplicationData from "./ApplicationData";
import '../../styles/list.css'

const Dashboard = () => {

  const [applications, setApplications] = useState([]);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/admin/fetch-applications', {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json = await response.json();
      if (json.success) {
        setApplications(json.applications);
        setApplicants(json.applicants);
      }
      else alert("Cannot fetch applications' list at the moment!");
    }
    fetchData();
  })


  return (
    <div>
      <div className="my-2 mx-4">
        <h4 className="text-center">Admin Panel</h4>

        <div className="my-3">
          <strong>Number of registered applicants: {applicants.length}</strong><br />
          <strong>Number of applications submitted: {applications.length}</strong>
        </div>

        <table id="list">
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Applicant</th>
              <th>Status</th>
              <th>Documents Uploaded</th>
              <th>Time of Upload</th>
            </tr>
          </thead>
          <tbody>
            {
              applications.map((application) => {
                return <ApplicationData key={application._id} application={application} />
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard;