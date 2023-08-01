import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
const AccountSettings = () => {
  // Table Properties
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "first name" },
    { columnName: "middle name" },
    { columnName: "last name" },
    { columnName: "email" },
    { columnName: "contact number" },
    { columnName: "position" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      id: 1,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 2,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 3,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 4,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 5,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 6,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 7,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 8,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 9,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 10,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
    {
      id: 11,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      position: "admin",
    },
  ];
  const tableHeadContent = "accountsHeads";
  const tableBodyContent = "accountsRows";
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Account Settings"}
        rightArea={[
          <SimpleButton
            color="dark"
            label={"Create New User"}
            classes={"rounded-0 "}
            icon={<i class="bi bi-person-plus-fill"></i>}
          />,
          <div className="col-4">
            <input type="text" className="form-control " placeholder="search" />
          </div>,
        ]}
      />

      {/* Content Body */}
      <ContentBody>
        <SimpleTable
          heads={tableHeaders}
          rows={tableRows}
          tableHeadContent={tableHeadContent}
          tableBodyContent={tableBodyContent}
        />
      </ContentBody>
    </>
  );
};

export default AccountSettings;
