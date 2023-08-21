import React, { useState, useEffect, useRef } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
import Modal from "../../components/modal/Modal";
import hideModal from "../../components/modal/HideModal";
const Accounts = () => {
  // API url
  const apiEndpoint = "https://darkshot-server.onrender.com/api/";
  // Table Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact" },
    { columnName: "username" },
    { columnName: "action" },
  ];
  // Table data
  const [tableUsers, setTableUsers] = useState([]);
  // Get specific row
  const [RowData, SetRowData] = useState([]);
  // Form values
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // setId for CRUD functions
  const [id, setId] = useState(null);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handleUserName = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  // FUNCTIONS HERE
  async function getTableData() {
    try {
      const response = await fetch(apiEndpoint + `users`); // Replace with your server URL
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
    setName("");
    setContact("");
    setUsername("");
    setPassword("");
  };
  // Handle displays

  const handleViewUpdate = () => {
    setName(RowData.fullName);
    setContact(RowData.contact);
    setUsername(RowData.username);
    setPassword(RowData.password);
  };
  const handleViewCreate = () => {};
  // CRUD submissions
  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    const body = JSON.stringify({
      fullName: name,
      contact: contact,
      username: username,
      password: password,
    });
    try {
      const postUrl = apiEndpoint + "user";
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      if (response.ok) {
        const updatedData = await response.json();
        alert("Updated data:", updatedData);
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const handleDelete = async () => {
    const userId = RowData._id;
    const deleteUrl = apiEndpoint + `user/${userId}`;
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
            modalTarget={"addModal"}
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
                            modalTarget={"editModal"}
                            onClick={() => {
                              handleViewUpdate();
                              SetRowData(td);
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
          <input
            type="text"
            name=""
            value={RowData.fullName}
            className="form-control mb-2"
            readOnly
          />
          <input
            type="text"
            name=""
            value={RowData.contact}
            className="form-control mb-2"
            readOnly
          />
          <input
            type="text"
            name=""
            value={RowData.username}
            className="form-control mb-2"
            readOnly
          />
          <input
            type="text"
            name=""
            value={RowData.password}
            className="form-control mb-2"
            readOnly
          />
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
      <Modal title={"Create User"} id={"addModal"} backdrop={"static"}>
        <form
          className="needs-validation"
          onSubmit={handleCreateSubmit}
          noValidate={false}
        >
          <div className="modal-body">
            <input
              type="text"
              name=""
              onChange={handleName}
              className="form-control mb-2"
              required
            />
            <input
              type="text"
              name=""
              onChange={handleContact}
              className="form-control mb-2"
              required
            />
            <input
              type="text"
              name=""
              onChange={handleUserName}
              className="form-control mb-2"
              required
            />
            <input
              type="password"
              name=""
              onChange={handlePassword}
              className="form-control mb-2"
              required
            />
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

      <Modal title={"Edit User"} id={"editModal"} backdrop={"static"}>
        <form className="needs-valdiation" noValidate>
          <div className="modal-body">
            <input
              type="text"
              // value={name}
              defaultValue={RowData.fullName}
              onChange={handleName}
              className="form-control mb-2"
              required
            />
            <input
              type="text"
              // value={contact}
              defaultValue={RowData.contact}
              onChange={handleContact}
              className="form-control mb-2"
              required
            />
            <input
              type="text"
              // value={username}
              defaultValue={RowData.username}
              onChange={handleUserName}
              className="form-control mb-2"
              required
            />
            <input
              type="password"
              // value={password}
              defaultValue={RowData.password}
              onChange={handlePassword}
              className="form-control mb-2"
              required
            />
          </div>
          <div className="modal-footer">
            <SimpleButton
              type={"button"}
              color={"secondary"}
              modalDismiss={true}
              label={"Cancel"}
            />
            <SimpleButton type={"submit"} color={"primary"} label={"Update"} />
          </div>
        </form>
      </Modal>
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
