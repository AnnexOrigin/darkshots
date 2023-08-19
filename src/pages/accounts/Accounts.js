import React, { useState, useEffect } from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import TD from "../../components/table/Td";
import Modals from "./Modals";
const Accounts = () => {
  const apiEndpoint = "https://darkshot-server.onrender.com/api/users";
  // Table Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact" },
    { columnName: "username" },
    { columnName: "action" },
  ];
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await fetch(apiEndpoint); // Replace with your server URL
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  const handleEdit = async (userId) => {
    alert(userId);
    // try {
    //   const response = await fetch("http://localhost:3001/api/users"); // Replace with your server URL
    //   const data = await response.json();
    //   console.table(data);
    // } catch (error) {
    //   console.error("Error fetching users:", error);
    // }
  };
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/${userId}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        // User deleted successfully
        console.log("User deleted successfully");
        fetchUsers();
        // You might want to refresh your user list or update the UI here
      } else if (response.status === 404) {
        const data = await response.json();
        console.log(data.message); // User not found
      } else {
        const data = await response.json();
        console.log(data.message); // Error occurred
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };
  const handleDeleteClick = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      handleDelete(userId);
    }
  };
  const tableRows =
    users.length > 0 ? (
      users.map((td) => {
        // Validate
        return (
          <tr
            key={td._id}
            className="align-middle font-weight-bold text-center"
          >
            <TD classes={"td-ellipsis text-capitalize "} values={td.fullName} />
            <TD classes={"td-ellipsis"} values={td.contact} />
            <TD classes={"td-ellipsis"} values={td.username} />
            <TD
              classes={"col-2 td-ellipsis"}
              values={
                <div className="btn-group">
                  <SimpleButton
                    classes={"rounded-0"}
                    onClick={() => {
                      handleEdit(td._id);
                    }}
                    color={"dark"}
                    label={"Edit"}
                  />
                  <SimpleButton
                    classes={"rounded-0"}
                    onClick={() => {
                      handleDeleteClick(td._id);
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
    );
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Accounts"}
        rightArea={[
          <SimpleButton
            color="dark"
            label={"Create New User"}
            classes={"rounded-0 "}
            modalLink={"createUserModal"}
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
        <SimpleTable heads={tableHeaders} rows={tableRows} />
      </ContentBody>
      <Modals />
    </>
  );
};

export default Accounts;
