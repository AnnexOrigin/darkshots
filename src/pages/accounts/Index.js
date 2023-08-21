import React, { useState, useEffect, useRef } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
const Accounts = () => {
  const apiEndpoint = "http://localhost:3001/api/users";
  const postApiEndpoint = "http://localhost:3001/api/user";
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
  const [rowData, setRowData] = useState([]);
  // Modal Displays for CRUD functions
  const [ViewShow, setViewShow] = useState(false);
  const [ViewClose, setViewClose] = useState(true);
  const handleViewShow = () => {
    setViewShow(true);
  };
  const handleViewClose = () => {
    setViewClose(true);
  };
  // Form values
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // setId for CRUD functions
  const [id, setId] = useState(null);
  // const handleClientName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleContact = (e) => {
  //   setContact(e.target.value);
  // };
  // const handleUserName = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // FUNCTIONS HERE
  async function getTableData() {
    try {
      const response = await fetch(apiEndpoint); // Replace with your server URL
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

  const handleAdd = () => {};
  const handleView = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};
  // ================================================================
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };
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
            modalTarget={"userModal"}
            onClick={() => {
              handleShowModal();
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
                            modalTarget={"updateModal"}
                            onClick={() => {
                              handleViewShow(setRowData(tableUsers));
                            }}
                            color={"dark"}
                            label={"View"}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            modalTarget={"updateModal"}
                            onClick={() => {
                              handleEdit(td._id);
                            }}
                            color={"dark"}
                            label={"Edit"}
                          />
                          <SimpleButton
                            classes={"rounded-0"}
                            onClick={() => {
                              handleDelete(td._id);
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
    </>
  );
};

export default Accounts;
