import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
const Applicants = () => {
  const sectionBody = { marginTop: "58px" };
  const sectionTitle = "Applicants";
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "first name" },
    { columnName: "middle name" },
    { columnName: "last name" },
    { columnName: "email" },
    { columnName: "contact number" },
    { columnName: "preffered position" },
    { columnName: "file name" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      id: "1",
      firstName: "1",
      middleName: "1",
      lastName: "1",
      email: "1",
      contactNumber: "1",
      prefferedPosition: "1",
      fileName: "1",
    },
  ];
  const tableBodyContent = "applicantsRows";
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Applicants"}
        rightArea={
          <div className="col-4">
            <input type="text" className="form-control " placeholder="search" />
          </div>
        }
      />

      {/* Content Body */}
      <ContentBody>
        <SimpleTable
          heads={tableHeaders}
          rows={tableRows}
          tableBodyContent={tableBodyContent}
        />
      </ContentBody>
    </>
  );
};

export default Applicants;
