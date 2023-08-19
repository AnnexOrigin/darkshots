import React, { useState, useEffect } from "react";
import TD from "../../components/table/Td";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
const Applicants = () => {
  const [users, setUsers] = useState([]);
  const sectionBody = { marginTop: "58px" };
  const sectionTitle = "Applicants";
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "fullName name" },
    { columnName: "contact" },
    { columnName: "preffered_position" },
    { columnName: "action" },
  ];
  const tableRows =
    users.length > 0 ? (
      users.map((td) => {
        if (
          td._id === "" &&
          td.fullName === "" &&
          td.contact === "" &&
          td.preffered_position === "" &&
          td.action === ""
        ) {
          return null;
        }
        // Validate
        return (
          <tr key={td._id} className="align-middlefont-weight-bold text-center">
            <TD classes={"col-1 td-ellipsis"} values={td._id} />
            <TD classes={"td-ellipsis text-capitalize "} values={td.fullName} />
            <TD classes={"td-ellipsis"} values={td.contact} />
            <TD classes={"td-ellipsis"} values={td.preffered_position} />
            <TD classes={"td-ellipsis"} values={td.action} />
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan={5} className="text-center">
          No applicants
        </td>
      </tr>
    );
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
        <SimpleTable heads={tableHeaders} rows={tableRows} />
      </ContentBody>
    </>
  );
};

export default Applicants;
