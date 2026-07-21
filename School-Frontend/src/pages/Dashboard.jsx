import React, { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import StudentCard from "../components/StudentCard";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {

  const [students, setStudents] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    getStudents();
  }, [token]);

  const getStudents = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/students", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setStudents(res.data.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <DashboardLayout>

      <h2 className="mb-4">
        Dashboard
      </h2>

      <div className="row">

      </div>

      <div className="card shadow border-0">

        <div className="card-header bg-white">
          <h5 className="mb-0">
            Recent Students
          </h5>
        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>

              <tr>

                <th>Name</th>

                <th>Class</th>

                <th>Section</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {students.slice(0, 5).map((student) => (

                <tr key={student._id}>

                  <td>
                    {student.firstName} {student.lastName}
                  </td>

                  <td>
                    {student.class}
                  </td>

                  <td>
                    {student.section}
                  </td>

                  <td>

                    <span className="badge bg-success">
                      {student.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>

  );
};

export default Dashboard;