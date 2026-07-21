import React, { useState } from "react";

const AddStudentModal = ({ show, onClose, onSave, loading }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    admissionNumber: "",
    gender: "Male",
    dateOfBirth: "",
    class: "",
    section: "",
    academicYear: "",
    email: "",
    phone: "",
    address: "",
    parentName: "",
    parentPhone: "",
    status: "Active",
  });

  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData, profileImage);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      rollNumber: "",
      admissionNumber: "",
      gender: "Male",
      dateOfBirth: "",
      class: "",
      section: "",
      academicYear: "",
      email: "",
      phone: "",
      address: "",
      parentName: "",
      parentPhone: "",
      status: "Active",
    });
    setProfileImage(null);
    setImagePreview(null);
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
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">
              <i className="bi bi-plus-circle"></i> Add New Student
            </h5>
            <button
              className="btn-close btn-close-white"
              onClick={onClose}
              disabled={loading}
            ></button>
          </div>

          <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
            <form onSubmit={handleSubmit}>
              {/* Profile Image Upload */}
              <div className="mb-4 text-center">
                <div
                  style={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    border: "2px solid #ddd",
                  }}
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <i
                      className="bi bi-image"
                      style={{ fontSize: "3rem", color: "#999" }}
                    ></i>
                  )}
                </div>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control mt-3"
                />
                <small className="text-muted">
                  Max size: 5MB. Allowed formats: JPG, PNG, GIF, WebP
                </small>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
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
                    Last Name *
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
                    Roll Number *
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
                  <label htmlFor="admissionNumber" className="form-label">
                    Admission Number *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="admissionNumber"
                    name="admissionNumber"
                    value={formData.admissionNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="gender" className="form-label">
                    Gender *
                  </label>
                  <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="class" className="form-label">
                    Class *
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
                    Section *
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
                  <label htmlFor="academicYear" className="form-label">
                    Academic Year *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="academicYear"
                    name="academicYear"
                    placeholder="2024-2025"
                    value={formData.academicYear}
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
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="parentName" className="form-label">
                    Parent Name *
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
                  <label htmlFor="parentPhone" className="form-label">
                    Parent Phone *
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="parentPhone"
                    name="parentPhone"
                    value={formData.parentPhone}
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
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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
              className="btn btn-success"
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
                  Creating...
                </>
              ) : (
                <>
                  <i className="bi bi-check"></i> Add Student
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentModal;
