import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Accounts = () => {
  // API url
  const apiEndpoint = "https://darkshot-server.onrender.com/api";
  // Table data, Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact" },
    { columnName: "username" },
    { columnName: "action" },
  ];
  const [tableUsers, setTableUsers] = useState([]);
  async function getTableData() {
    try {
      const response = await fetch(apiEndpoint + `/users`); // Replace with your server URL
      const data = await response.json();
      if (response.status == 200) {
        setTableUsers(data);
      } else {
        alert("Table not displaying");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    getTableData();
  }, []);
  // Get specific row
  const [RowData, SetRowData] = useState([]);
  // Form values
  const [id, setId] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleName = (e) => {
    setNameValue(e.target.value);
  };
  const handleContact = (e) => {
    setContactValue(e.target.value);
  };
  const handleUserName = (e) => {
    setUsernameValue(e.target.value);
  };
  const handlePassword = (e) => {
    setPasswordValue(e.target.value);
  };
  // View Modal
  const [viewModal, setViewModal] = useState(false);
  const handleViewClose = () => {
    getTableData();
    setViewModal(false);
  };
  const handleViewShow = () => {
    setViewModal(true);
  };
  // Create Modal
  const [createModal, setCreateModal] = useState(false);

  const handleCreateClose = () => {
    getTableData();
    setCreateModal(false);
  };
  const handleCreateShow = () => {
    setCreateModal(true);
  };
  // Update Modal
  const [updateModal, setUpdateModal] = useState(false);

  const handleUpdateClose = () => {
    getTableData();
    setUpdateModal(false);
  };
  const handleUpdateShow = () => {
    setUpdateModal(true);
  };
  // Delete Modal
  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteClose = () => {
    getTableData();
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
        const updatedData = await response.json();
        alert("Updated data:" + updatedData);
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
        const updatedData = await response.json();
        handleUpdateClose();
      } else {
        console.error("Error updating data:", response.statusText);
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
            icon={<i class="bi bi-person-plus-fill"></i>}
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
                    <TD
                      classes={"td-ellipsis text-capitalize "}
                      values={td.fullName}
                    />
                    <TD classes={"td-ellipsis"} values={td.contact} />
                    <TD classes={"td-ellipsis"} values={td.username} />
                    <TD
                      classes={"td-ellipsis"}
                      values={
                        <div className="btn-group">
                          <SimpleButton
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleViewShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i class="bi bi-eye"></i>}
                          />
                          <SimpleButton
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleUpdateShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i class="bi bi-pencil-square"></i>}
                          />
                          <SimpleButton
                            color="outline-dark"
                            size={"sm"}
                            onClick={() => {
                              handleDeleteShow(SetRowData(td), setId(td._id));
                            }}
                            icon={<i class="bi bi-trash3"></i>}
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
      {/* Modal View Users */}
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
      {/* Modal Create Users */}
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
            <Modal.Body>
              <div className="input-group mb-2">
                <span className="input-group-text">Full Name</span>
                <input
                  type="text"
                  name=""
                  defaultValue={""}
                  onChange={handleName}
                  className="form-control"
                  required
                />
              </div>
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
      {/* Modal Update Users */}
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
            <Modal.Body>
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
              <div className="input-group mb-2">
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
      {/* Modal Update Users */}
      <Modal show={deleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        {RowData && (
          <Modal.Body>
            Are you sure you want to delete
            <span className="th-fw-bold">{RowData.fullName}</span>
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
