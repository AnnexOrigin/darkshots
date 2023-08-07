import React from "react";
const SimpleTable = ({ heads, rows, tableBodyContent }) => {
  return (
    <table className="table table-sm table-hover table-responsive">
      <thead className="align-end text-uppercase ">
        {heads != null
          ? heads.map((th) => {
              return (
                <>
                  <th
                    key={th.columnName}
                    className="th-fw-bold text-center p-0 sticky-top th-bg-secondary"
                  >
                    <div className="col-12 th-fw-bold text-centerpy-2 th-bg-secondary">
                      {th.columnName}
                    </div>
                  </th>
                </>
              );
            })
          : ""}
      </thead>
      <tbody>
        {tableBodyContent === "accountsRows"
          ? rows.map((td) => {
              return (
                <>
                  <tr
                    key={td.id}
                    className="align-middle text-uppercaseth-fw-bold text-center th-fw-bold "
                  >
                    <td>{td.id}</td>
                    <td>{td.firstName}</td>
                    <td>{td.middleName}</td>
                    <td>{td.lastName}</td>
                    <td>{td.email}</td>
                    <td>{td.contactNumber}</td>
                    <td>{td.position}</td>
                    <td>{/* Place function here */}</td>
                  </tr>
                </>
              );
            })
          : ""}
        {tableBodyContent === "applicantsRows"
          ? rows.map((td) => {
              return (
                <>
                  <tr
                    key={td.id}
                    className="align-middle text-uppercaseth-fw-bold text-center th-fw-bold "
                  >
                    <td>{td.id}</td>
                    <td>{td.firstName}</td>
                    <td>{td.middleName}</td>
                    <td>{td.lastName}</td>
                    <td>{td.contactNumber}</td>
                    <td>{td.email}</td>
                    <td>{td.prefferedPosition}</td>
                    <td>{td.fileName}</td>
                    <td>{/* Place function here */}</td>
                  </tr>
                </>
              );
            })
          : ""}
        {tableBodyContent === "clientsRows"
          ? rows.map((td) => {
              return (
                <>
                  <tr
                    key={td.id}
                    className="align-middle text-uppercaseth-fw-bold text-center th-fw-bold "
                  >
                    <td>{td.id}</td>
                    <td>{td.firstName}</td>
                    <td>{td.middleName}</td>
                    <td>{td.lastName}</td>
                    <td>{td.contactNumber}</td>
                    <td>{td.email}</td>
                    <td>{td.description}</td>
                    <td>{/* Place function here */}</td>
                  </tr>
                </>
              );
            })
          : ""}
        {tableBodyContent === "postsRows"
          ? rows.map((td) => {
              return (
                <>
                  <tr
                    key={td.id}
                    className="align-middle text-uppercaseth-fw-bold text-center th-fw-bold "
                  >
                    <td>{td.id}</td>
                    <td>{td.author}</td>
                    <td>{td.jobType}</td>
                    <td>{td.requirements}</td>
                    <td>{td.description}</td>
                    <td>{td.dateCreated}</td>
                    <td>{/* Place function here */}</td>
                  </tr>
                </>
              );
            })
          : ""}
      </tbody>
    </table>
  );
};

export default SimpleTable;
