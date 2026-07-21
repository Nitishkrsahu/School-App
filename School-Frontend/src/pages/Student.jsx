import React, { useEffect, useState } from "react";
import axios from "axios";

import DashboardLayout from "../layouts/DashboardLayout";
import StudentCard from "../components/StudentCard";
import AddStudentModal from "../components/AddStudentModal";
import EditStudentModal from "../components/EditStudentModal";
import DeleteModal from "../components/DeleteModal";
import { useAuth } from "../hooks/useAuth";

const StudentPage = () => {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState(null);
    const [creating, setCreating] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState("");
    const { token } = useAuth();

    useEffect(() => {
        getStudents();
    }, [token]);


    const getStudents = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/students",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setStudents(res.data.data);

        } catch (err) {

            console.log(err);
            setError("Failed to load students");

        } finally {

            setLoading(false);

        }

    };

    const handleAddClick = () => {
        setShowAddModal(true);
        setError("");
    };

    const handleAddStudent = async (formData, profileImage) => {
        setCreating(true);
        setError("");

        try {
            const requestData = new FormData();

            // Add form fields
            Object.keys(formData).forEach((key) => {
                requestData.append(key, formData[key]);
            });

            // Add image if provided
            if (profileImage) {
                requestData.append('profileImage', profileImage);
            }

            const res = await axios.post(
                "http://localhost:5000/api/students",
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Add new student to list
            setStudents([...students, res.data.data]);

            setShowAddModal(false);

        } catch (err) {
            setError(err.response?.data?.message || "Failed to add student");
            console.log(err);
        } finally {
            setCreating(false);
        }
    };

    const handleEditClick = (student) => {
        setEditingStudent(student);
        setShowEditModal(true);
        setError("");
    };

    const handleDeleteClick = (student) => {
        setStudentToDelete(student);
        setShowDeleteModal(true);
        setError("");
    };

    const handleSaveStudent = async (formData, profileImage) => {
        setUpdating(true);
        setError("");

        try {
            const requestData = new FormData();

            // Add form fields
            Object.keys(formData).forEach((key) => {
                requestData.append(key, formData[key]);
            });

            // Add image if provided
            if (profileImage) {
                requestData.append('profileImage', profileImage);
            }

            const res = await axios.put(
                `http://localhost:5000/api/students/${editingStudent._id}`,
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            // Update the student in the list
            setStudents(students.map(s => 
                s._id === editingStudent._id ? res.data.data : s
            ));

            setShowEditModal(false);
            setEditingStudent(null);

        } catch (err) {
            setError(err.response?.data?.message || "Failed to update student");
            console.log(err);
        } finally {
            setUpdating(false);
        }
    };

    const handleDeleteStudent = async () => {
        setDeleting(true);
        setError("");

        try {
            await axios.delete(
                `http://localhost:5000/api/students/${studentToDelete._id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Remove the student from the list
            setStudents(students.filter(s => s._id !== studentToDelete._id));

            setShowDeleteModal(false);
            setStudentToDelete(null);

        } catch (err) {
            setError(err.response?.data?.message || "Failed to delete student");
            console.log(err);
        } finally {
            setDeleting(false);
        }
    };

    return (

        <DashboardLayout>

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>
                    👨‍🎓 Students
                </h2>

                <button className="btn btn-success" onClick={handleAddClick}>
                    + Add Student
                </button>

            </div>

            {error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button type="button" className="btn-close" onClick={() => setError("")}></button>
            </div>}

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
                                            <StudentCard 
                                                student={student}
                                                onEdit={handleEditClick}
                                                onDelete={handleDeleteClick}
                                            />
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

            <AddStudentModal
                show={showAddModal}
                onClose={() => {
                    setShowAddModal(false);
                    setError("");
                }}
                onSave={handleAddStudent}
                loading={creating}
            />

            <EditStudentModal
                show={showEditModal}
                onClose={() => {
                    setShowEditModal(false);
                    setEditingStudent(null);
                }}
                onSave={handleSaveStudent}
                student={editingStudent}
                loading={updating}
            />

            <DeleteModal
                show={showDeleteModal}
                onClose={() => {
                    setShowDeleteModal(false);
                    setStudentToDelete(null);
                }}
                onDelete={handleDeleteStudent}
                student={studentToDelete}
                loading={deleting}
            />

        </DashboardLayout>

    );
};

export default StudentPage;