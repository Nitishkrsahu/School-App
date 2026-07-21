import React, { useState, useEffect } from "react";

const EditStudentModal = ({ show, onClose, onSave, student, loading }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    class: "",
    section: "",
    email: "",
    phone: "",
    parentName: "",
    status: "active",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        firstName: student.firstName || "",
        lastName: student.lastName || "",
        rollNumber: student.rollNumber || "",
        class: student.class || "",
        section: student.section || "",
        email: student.email || "",
        phone: student.phone || "",
        parentName: student.parentName || "",
        status: student.status || "active",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">
              <i className="bi bi-pencil"></i> Edit Student
            </h5>
            <button
              className="btn-close btn-close-white"
              onClick={onClose}
              disabled={loading}
            ></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="rollNumber" className="form-label">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="rollNumber"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="class" className="form-label">
                    Class
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="section" className="form-label">
                    Section
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="section"
                    name="section"
                    value={formData.section}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="parentName" className="form-label">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    className="form-control"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Saving...
                </>
              ) : (
                <>
                  <i className="bi bi-check"></i> Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentModal;
