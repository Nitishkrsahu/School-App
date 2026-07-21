import React from "react";

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div
      className="card shadow border-0 rounded-4 h-100"
      style={{
        width: "100%",
        minHeight: "420px",
        maxHeight: "420px",
        overflow: "hidden"
      }}
    >

      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          🎓 Student Details
        </h5>
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-warning text-dark"
            onClick={() => onEdit(student)}
            title="Edit Student"
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(student)}
            title="Delete Student"
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>


      <div
        className="card-body overflow-auto"
      >

        <div className="text-center mb-3">

          <img
            src={
              student.profileImage ||
              "https://via.placeholder.com/120"
            }
            alt="student"
            className="rounded-circle border"
            width="100"
            height="100"
          />

        </div>


        <div className="row">

          <div className="col-6 mb-2">
            <strong>Name</strong>
            <p className="mb-0">
              {student.firstName} {student.lastName}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Roll No</strong>
            <p className="mb-0">
              {student.rollNumber}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Class</strong>
            <p className="mb-0">
              {student.class}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Section</strong>
            <p className="mb-0">
              {student.section}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Email</strong>
            <p className="mb-0 text-truncate">
              {student.email}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Phone</strong>
            <p className="mb-0">
              {student.phone}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Parent</strong>
            <p className="mb-0">
              {student.parentName}
            </p>
          </div>


          <div className="col-6 mb-2">
            <strong>Status</strong>
            <br />

            <span className="badge bg-success">
              {student.status}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentCard;