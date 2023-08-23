import React, { useState, useEffect, useRef } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
import Modal from "../../components/modal/Modal";
const Accounts = () => {
  // API url
  const apiEndpoint = "http://localhost:3001/api";
  // Table Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact" },
    { columnName: "username" },
    { columnName: "action" },
  ];
  // Modal Togglers
  const [showEditModal, setShowEditModal] = useState(false);
  const openEditModal = () => {
    setShowEditModal(true);
  };
  const closeEditModal = () => {
    setShowEditModal(false);
  };
  // Table data
  const [tableUsers, setTableUsers] = useState([]);
  // Get specific row
  const [RowData, SetRowData] = useState([]);
  // Form values
  const [nameValue, setNameValue] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  // setId for CRUD functions
  const [id, setId] = useState("");
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
  // FUNCTIONS HERE
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
  const clearFields = () => {
    setNameValue("");
    setContactValue("");
    setUsernameValue("");
    setPasswordValue("");
  };
  // Handle displays
  const handleViewUpdate = () => {
    console.log("Before Update");
    console.log(id);
    console.log(nameValue);
    console.log(contactValue);
    console.log(usernameValue);
    console.log(passwordValue);
  };
  const handleViewCreate = () => {
    console.log("Before Create");
    console.log(id);
    console.log(nameValue);
    console.log(contactValue);
    console.log(usernameValue);
    console.log(passwordValue);
  };
  // CRUD submissions
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
        getTableData();
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
        getTableData();
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
        alert("Updated data:" + updatedData);
        const form = document.getElementById("formUpdate");
        form.reset();
        // hideModal("updateModal");
        getTableData();
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // ================================================================

  // ================================================================
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
            modalTarget={"createModal"}
            onClick={() => {
              handleViewCreate();
            }}
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
                            classes={"rounded-0"}
                            modalTarget={"viewModal"}
                            onClick={() => {
                              SetRowData(td);
                            }}
                            color={"dark"}
                            label={"View"}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            modalTarget={"updateModal"}
                            onClick={() => {
                              openEditModal(() => {
                                SetRowData(td);
                                setId(td._id);
                              });
                            }}
                            color={"dark"}
                            label={"Edit"}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            modalTarget={"deleteModal"}
                            onClick={() => {
                              SetRowData(td);
                            }}
                            color={"dark"}
                            label={"Delete"}
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
      <Modal title={"View User"} id={"viewModal"}>
        <div className="modal-body">
          <div className="input-group mb-2">
            <span className="input-group-text">Full Name</span>
            <input
              type="text"
              name=""
              value={RowData.fullName}
              className="form-control"
              readOnly
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Contact/Email</span>
            <input
              type="text"
              name=""
              value={RowData.contact}
              className="form-control"
              readOnly
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Username</span>
            <input
              type="text"
              name=""
              value={RowData.username}
              className="form-control"
              readOnly
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Password</span>
            <input
              type="text"
              name=""
              value={RowData.password}
              className="form-control"
              readOnly
            />
          </div>
        </div>
        <div className="modal-footer">
          <SimpleButton
            type={"button"}
            color={"secondary"}
            modalDismiss={true}
            label={"Close"}
          />
        </div>
      </Modal>
      <Modal title={"Create User"} id={"createModal"} backdrop={"static"}>
        <form
          id="formCreate"
          className="needs-validation"
          onSubmit={handleCreateSubmit}
          noValidate={false}
        >
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Create User
            </button>
          </div>
        </form>
      </Modal>
      {showEditModal && (
        <Modal
          title={"Update User"}
          id={"updateModal"}
          // backdrop={"static"}
          showModal={showEditModal}
          closeModal={closeEditModal}
        >
          <form
            id="formUpdate"
            className="needs-validation"
            onSubmit={handleUpdateSubmit}
            noValidate={false}
          >
            <div className="modal-body">
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
              <div className="input-group d-flex justify-content-end">
                <button type="submit" className="btn btn-success ">
                  Update User
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      )}
      <Modal title={"Delete User"} id={"deleteModal"} closeModal={true}>
        <div className="modal-body">
          Are you sure you want to delete{" "}
          <span className="th-fw-bold">{RowData.fullName}</span>
        </div>
        <div className="modal-footer">
          <SimpleButton
            type={"button"}
            color={"secondary"}
            modalDismiss={true}
            label={"Cancel"}
          />
          <SimpleButton
            type={"submit"}
            color={"danger"}
            label={"Delete"}
            onClick={handleDelete}
          />
        </div>
      </Modal>
    </>
  );
};

export default Accounts;
