import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import SimpleButton from "../../components/buttons/SimpleButton";
const CreateUser = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity()) {
      // Perform form submission logic here
      alert("Valid form submitted!");
    } else {
      alert("All fields are required");
    }
    setValidated(true);
  };

  return (
    <>
      <Modal
        modalName={"createUserModal"}
        modalTitle={"Create New User"}
        formId={"createUserForm"}
        modalContent={
          <>
            <form
              className="needs-validation"
              onSubmit={handleSubmit}
              novalidate
            >
              <div className="modal-body row mx-0 gap-2">
                <div className="col-12 input-group">
                  <span className="input-group-text">Full name</span>
                  <input
                    type="text"
                    name={formData.fullName}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-12 input-group">
                  <span className="input-group-text">Contact/Email</span>
                  <input
                    type="text"
                    name={formData.contact}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-12 input-group">
                  <span className="input-group-text">Username</span>
                  <input
                    type="text"
                    name={formData.username}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="col-12 input-group">
                  <span className="input-group-text">Password</span>
                  <input
                    type="password"
                    name={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <SimpleButton
                  color={"secondary"}
                  label={"Cancel"}
                  modalDismiss={"modal"}
                />
                <SimpleButton
                  submitType={"submit"}
                  color={"success"}
                  label={"Create User"}
                />
              </div>
            </form>
          </>
        }
      />
    </>
  );
};

export default CreateUser;
