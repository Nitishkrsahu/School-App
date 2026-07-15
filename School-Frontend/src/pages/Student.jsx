import React, { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import StudentCard from "../components/StudentCard";

const StudentPage = () => {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStudents();
    }, []);


    const getStudents = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/students"
            );

            setStudents(res.data.data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };


    return (

        <DashboardLayout>

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>
                    👨‍🎓 Students
                </h2>

                <button className="btn btn-primary">
                    + Add Student
                </button>

            </div>


            {
                loading ? (

                    <div className="text-center">
                        <div className="spinner-border text-primary"></div>
                    </div>

                ) : (

                    <div className="row">

                        {
                            students.length > 0 ? (

                                students.map((student) => (

                                    <div
                                        className="col-lg-6 col-md-12 mb-4"
                                        key={student._id}
                                    >
                                        <div style={{ height: "100%" }}>
                                            <StudentCard student={student} />
                                        </div>
                                    </div>

                                ))

                            ) : (

                                <div className="alert alert-warning">
                                    No Students Found
                                </div>

                            )
                        }

                    </div>

                )
            }


        </DashboardLayout>

    );
};

export default StudentPage;