import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
import Modal from "react-bootstrap/Modal";
const Accounts = () => {
  // API url
  // const apiEndpoint = "https://darkshot-server.onrender.com/api";
  const apiEndpoint = "http://localhost:3001/api";
  // Array Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact" },
    { columnName: "position" },
    { columnName: "action" },
  ];
  const position = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "client",
      label: "Client",
    },
    {
      value: "applicant",
      label: "Applicant",
    },
  ];
  const [tableUsers, setTableUsers] = useState([]);
  async function getTableData() {
    try {
      const response = await fetch(apiEndpoint + "/users"); // Replace with your server URL
      const data = await response.json();
      if (response.status == 200) {
        setTableUsers(data);
        console.log(data.userLists);
      } else {
        alert("Table not displaying");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    getTableData();
  }, [{}]);
  // Get specific row
  const [RowData, SetRowData] = useState([]);
  // Form values
  const [id, setId] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  // VARIABLE HANDLERS
  const handleName = (e) => {
    validField(e);
    setNameValue(e.target.value);
  };
  const handleContact = (e) => {
    validField(e);
    setContactValue(e.target.value);
  };
  const handleUserName = (e) => {
    validField(e);
    setUsernameValue(e.target.value);
  };
  const handlePassword = (e) => {
    validField(e);
    setPasswordValue(e.target.value);
  };
  const handlePosition = (e) => {
    validField(e);
    setPositionValue(e.target.value);
  };
  // Client-Side field validation
  const validField = (e) => {
    const inputClass =
      e.target.value === ""
        ? "form-control is-invalid"
        : "form-control is-valid";
    e.target.className = inputClass;
  };
  // MODAL TOGGLERS
  // View Modal
  const [viewModal, setViewModal] = useState(false);
  const handleViewClose = () => {
    setViewModal(false);
  };
  const handleViewShow = () => {
    setViewModal(true);
  };
  // Create Modal
  const [createModal, setCreateModal] = useState(false);

  const handleCreateClose = () => {
    setCreateModal(false);
  };
  const handleCreateShow = () => {
    setCreateModal(true);
  };
  // Update Modal
  const [updateModal, setUpdateModal] = useState(false);

  const handleUpdateClose = () => {
    setUpdateModal(false);
  };
  const handleUpdateShow = () => {
    setUpdateModal(true);
  };
  // Delete Modal
  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteClose = () => {
    setDeleteModal(false);
  };
  const handleDeleteShow = () => {
    setDeleteModal(true);
  };
  // CRUD Functions
  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      fullName: nameValue,
      contact: contactValue,
      username: usernameValue,
      password: passwordValue,
      position: positionValue,
    });
    try {
      const postUrl = apiEndpoint + "/user";
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (response.ok) {
        const addedData = await response.json();
        alert(
          "User added successfully:\n" + JSON.stringify(addedData, null, 2)
        );
        const form = document.getElementById("formCreate");
        form.reset();
        handleCreateClose();
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const handleDelete = async () => {
    const userId = RowData._id;
    const deleteUrl = apiEndpoint + `/user/${userId}`;
    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        body: JSON.stringify({ id: userId }),
      }); // Replace with your server URL
      const data = await response.json();
      if (response.status == 200) {
        console.log("User deleted");
        handleDeleteClose();
      } else {
        console.log("Failed to delete user");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const body = {};
    if (nameValue) body.fullName = nameValue;
    if (contactValue) body.contact = contactValue;
    if (usernameValue) body.username = usernameValue;
    if (passwordValue) body.password = passwordValue;
    if (positionValue) body.position = positionValue;
    try {
      const postUrl = apiEndpoint + "/user/" + id;
      const response = await fetch(postUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log("User updated:\n" + body);
        handleUpdateClose();
      } else {
        console.error("Error updating data:", response.statusText);
        handleUpdateClose();
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  return (
    <>
      {/* Users Modal */}
      <ContentHeader
        title={"Accounts"}
        rightArea={[
          <SimpleButton
            color="dark"
            label={"Create New User"}
            classes={"rounded-0 "}
            onClick={handleCreateShow}
            icon={<i className="bi bi-person-plus-fill"></i>}
          />,
          <div className="col-4">
            <input
              type="text"
              className="form-control "
              placeholder="search"
              autoComplete="off"
            />
          </div>,
        ]}
      />
      {/* Content Body */}
      <ContentBody>
        <SimpleTable
          heads={tableHeaders}
          rows={
            tableUsers.length > 0 ? (
              tableUsers.map((td) => {
                // Validate
                return (
                  <tr
                    key={td._id}
                    className="align-middle font-weight-bold text-center"
                  >
                    <TD classes={"text-capitalize "} values={td.fullName} />
                    <TD values={td.contact} />
                    <TD values={td.position} />
                    <TD
                      classes={"border-start border-end col-1"}
                      values={
                        <div className="btn-group gap-1">
                          <SimpleButton
                            classes={"rounded-0"}
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleViewShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i className="bi bi-eye"></i>}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleUpdateShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i className="bi bi-pencil-square"></i>}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleDeleteShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i className="bi bi-trash3"></i>}
                          />
                        </div>
                      }
                    />
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No accounts
                </td>
              </tr>
            )
          }
        />
      </ContentBody>
      {/* Modal View User */}
      <Modal show={viewModal} onHide={handleViewClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        {RowData && (
          <Modal.Body>
            <p>Name: {RowData.fullName}</p>
            <p>Contact: {RowData.contact}</p>
            <p>Username: {RowData.username}</p>
            <p>Password: {RowData.password}</p>
            <p>Position: {RowData.position}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <SimpleButton
            color="secondary"
            onClick={handleViewClose}
            label={"Close"}
          />
        </Modal.Footer>
      </Modal>
      {/* Modal Create User */}
      <Modal
        show={createModal}
        onHide={handleCreateClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <form
          id="formCreate"
          className="needs-validation"
          onSubmit={handleCreateSubmit}
          noValidate={false}
        >
          {RowData && (
            <Modal.Body className="row mx-0 gap-2">
              <div className="input-group">
                <span className="input-group-text">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={""}
                  onChange={handleName}
                  className={`form-control`}
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Contact/Email</span>
                <input
                  type="text"
                  name=""
                  defaultValue={""}
                  onChange={handleContact}
                  className="form-control  "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  name=""
                  defaultValue={""}
                  onChange={handleUserName}
                  className="form-control "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Password</span>
                <input
                  type="password"
                  name=""
                  defaultValue={""}
                  onChange={handlePassword}
                  className="form-control "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Position</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handlePosition}
                >
                  <option value={""} selected>
                    select position
                  </option>
                  {position.map((pos) => {
                    return <option value={pos.value}>{pos.label}</option>;
                  })}
                </select>
              </div>
            </Modal.Body>
          )}
          <Modal.Footer>
            <SimpleButton
              color="secondary"
              onClick={handleCreateClose}
              label={"Close"}
            />
            <SimpleButton
              type={"submit"}
              color="primary"
              label={"Save Changes"}
            />
          </Modal.Footer>
        </form>
      </Modal>
      {/* Modal Update User */}
      <Modal
        show={updateModal}
        onHide={handleUpdateClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <form
          id="formUpdate"
          className="needs-validation"
          onSubmit={handleUpdateSubmit}
          noValidate={false}
        >
          {RowData && (
            <Modal.Body className="row mx-0 gap-2">
              <div className="input-group">
                <span className="input-group-text">Full Name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={RowData.fullName}
                  onChange={handleName}
                  className="form-control"
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Contact/Email</span>
                <input
                  type="text"
                  name="contact"
                  defaultValue={RowData.contact}
                  onChange={handleContact}
                  className="form-control  "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Username</span>
                <input
                  type="text"
                  name="username"
                  defaultValue={RowData.username}
                  onChange={handleUserName}
                  className="form-control "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Password</span>
                <input
                  type="password"
                  name="password"
                  defaultValue={RowData.password}
                  onChange={handlePassword}
                  className="form-control "
                  required
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">Position</span>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  defaultValue={RowData.position}
                  onChange={handlePosition}
                >
                  <option value={""} selected>
                    select position
                  </option>
                  {position.map((pos) => {
                    return <option value={pos.value}>{pos.label}</option>;
                  })}
                </select>
              </div>
            </Modal.Body>
          )}
          <Modal.Footer>
            <SimpleButton
              color="secondary"
              onClick={handleUpdateClose}
              label={"Close"}
            />
            <SimpleButton
              type={"submit"}
              color="primary"
              label={"Save Changes"}
            />
          </Modal.Footer>
        </form>
      </Modal>
      {/* Modal Delete User */}
      <Modal show={deleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        {RowData && (
          <Modal.Body>
            Are you sure you want to delete
            <span className="th-fw-bold">{" " + RowData.fullName}</span>
          </Modal.Body>
        )}
        <Modal.Footer>
          <SimpleButton
            type={"button"}
            color={"secondary"}
            onClick={handleDeleteClose}
            label={"Cancel"}
          />
          <SimpleButton
            type={"submit"}
            color={"danger"}
            label={"Delete"}
            onClick={handleDelete}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Accounts;
