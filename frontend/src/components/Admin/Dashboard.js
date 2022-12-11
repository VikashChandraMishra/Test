import { useEffect, useState } from "react";
import ApplicationData from "./ApplicationData";
import '../../styles/list.css'
import Sidebar from "./Sidebar"

const Dashboard = () => {

  const [applications, setApplications] = useState([]);

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
        // console.log(json.applications[0])
        setApplications(json.applications);
      }
      else alert("Cannot fetch applications' list at the moment!");
    }
    fetchData();
  })


  return (
    <div className="mx-4 my-3">
      <div className="row">
        <table id="list">
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Applicant</th>
              <th>Status</th>
              <th>Documents</th>
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
        {/* <Sidebar /> */}
    </div>
  )
}

export default Dashboard;