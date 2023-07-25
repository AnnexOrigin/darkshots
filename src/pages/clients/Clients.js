import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";

const Clients = () => {
  // Table Properties
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "first name" },
    { columnName: "middle name" },
    { columnName: "last name" },
    { columnName: "email" },
    { columnName: "contact number" },
    { columnName: "description" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      id: 1,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      contactNumber: "09565268452",
      email: "name@gmail.com",
      description: "admin",
    },
    {
      id: 8,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      description: "admin",
    },
    {
      id: 9,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      description: "admin",
    },
    {
      id: 10,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      description: "admin",
    },
    {
      id: 11,
      firstName: "name",
      middleName: "name",
      lastName: "name",
      email: "name@gmail.com",
      contactNumber: "09565268452",
      description: "admin",
    },
  ];
  const tableHeadContent = "clientsHeads";
  const tableBodyContent = "clientsRows";
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Clients"}
        rightArea={
          <div className="col-4">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="search"
            />
          </div>
        }
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

export default Clients;
