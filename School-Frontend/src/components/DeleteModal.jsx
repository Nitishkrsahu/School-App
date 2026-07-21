import React from "react";

const DeleteModal = ({
  show,
  onClose,
  onDelete,
  student,
  loading = false
}) => {


  if (!show) return null;


  return (

    <div
      className="modal fade show d-block"
      style={{
        backgroundColor:"rgba(0,0,0,0.5)"
      }}
    >

      <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content rounded-4 shadow">


          <div className="modal-header bg-danger text-white">

            <h5 className="modal-title">
              <i className="bi bi-trash"></i>
              Delete Student
            </h5>


            <button
              className="btn-close btn-close-white"
              onClick={onClose}
              disabled={loading}
            ></button>


          </div>



          <div className="modal-body text-center">

            <h6>
              Are you sure?
            </h6>

            <p>
              You want to delete
              <strong>
                {" "}{student?.firstName} {student?.lastName}
              </strong>
            </p>


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
              className="btn btn-danger"
              onClick={onDelete}
              disabled={loading}
            >

              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Deleting...
                </>
              ) : (
                <>
                  <i className="bi bi-trash"></i>
                  Delete
                </>
              )}

            </button>


          </div>


        </div>

      </div>

    </div>

  );

};


export default DeleteModal;