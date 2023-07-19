import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import Icon from "../../assets/images/placeholder/Img_placeholder.jpg";
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
  const tableHeadContent = "accountHeads";
  const tableBodyContent = "accountRows";
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Account Settings"}
        rightArea={
          <div className="col-3">
            <input
              type="text"
              name=""
              id=""
              className="form-control form-control-sm"
              placeholder="search"
            />
          </div>
        }
      />
      {/* Content Body */}
      <ContentBody
        leftArea={
          <SimpleButton
            size="sm"
            color="success"
            icon={Icon}
            label={"Left Button"}
          />
        }
        rightArea={[
          <SimpleButton
            size="sm"
            color="dark"
            label={"Right Button"}
            classes={"text-light rounded-0 "}
          />,
        ]}
      >
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
