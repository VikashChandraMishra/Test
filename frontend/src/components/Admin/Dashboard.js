import { useEffect, useMemo, useState } from "react";
import Table from "./Table";
import Sidebar from "./Sidebar"

const Dashboard = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/admin/fetch-applicant-list', {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
        },
      })

      const json = await response.json();
      if (json.success) {
        setData(json.applicants);
      }
      else alert("Cannot fetch applicant list at the moment!");
    }
    fetchData();
  })

  const columns = useMemo(
    () => [
      {
        Header: "List",
        columns: [
          {
            Header: "FirstName",
            accessor: "firstname"
          },
          {
            Header: "MiddleName",
            accessor: "middlename"
          },
          {
            Header: "LastName",
            accessor: "lastname"
          }, {
            Header: "DOB",
            accessor: "dob"
          }, {
            Header: "Category",
            accessor: "category"
          }, {
            Header: "Qualification",
            accessor: "qualification"
          },
          {
            Header: "Gender",
            accessor: "gender"
          },
        ]
      },
    ],
    []
  );

  return (
    <div className="row bg-light">
        <Sidebar />
        <Table columns={columns} data={data} />
    </div>
  )
}

export default Dashboard;