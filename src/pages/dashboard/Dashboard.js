import React from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import SimpleButton from "../../components/buttons/SimpleButton";
const Dashboard = () => {
  const sectionTitle = "Accounts Settings";
  const containerStyle = {
    marginTop: "3.625rem",
  };
  const contentHeight = {
    height: "calc(100vh - 3.625rem)",
    overflow: "auto",
  };
  const tableHeaders = [
    { columName: "id" },
    { columName: "first name" },
    { columName: "middle name" },
    { columName: "last name" },
    { columName: "email" },
    { columName: "contact number" },
    { columName: "position" },
    { columName: "action" },
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
  const tableHeadContent = "dashboardHeads";
  const tableBodyContent = "dashboardRows";
  return (
    <>
      <div className="row flex-nowrap mx-0" style={containerStyle}>
        <aside className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed vh-100 text-light container">
          Sidebar
        </aside>
        <section
          className="col-10 col-sm-9 col-md-9 col-lg-9 col-xl-10 pt-4 px-5 offset-2 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-2 "
          style={contentHeight}
        >
          {/* Section Header */}
          <div className="d-flex align-items-center py-3">
            <div className="col-auto th-fs-3 th-fw-bold text-uppercase">
              Account Settings
            </div>
            <div className="col d-flex justify-content-end ">
              <div className="col-3">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="search"
                    className="form-control form-control-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Section Content */}
          <SectionContainer
            leftArea={
              <SimpleButton size="sm" color="success" label="left Area" />
            }
            rightArea={
              <SimpleButton size="sm" color="success" label="right Area" />
            }
          >
            <table className="table table-sm table-hover table-responsive">
              <thead className="align-end text-uppercase ">
                {tableHeaders.map((th) => {
                  return (
                    <>
                      <th className="th-fw-bold text-center p-0 sticky-top  th-bg-secondary">
                        {/* TABLE TITLE */}
                        <div className="col-12 th-fw-bold text-centerpy-2  th-bg-secondary">
                          {th.columName}
                        </div>
                      </th>
                    </>
                  );
                })}
              </thead>
              <tbody>
                {tableRows.map((td) => {
                  return (
                    <>
                      <tr className="align-middle text-uppercaseth-fw-bold text-center th-fw-bold ">
                        <td>{td.id}</td>
                        <td>{td.firstName}</td>
                        <td>{td.middleName}</td>
                        <td>{td.lastName}</td>
                        <td>{td.email}</td>
                        <td>{td.contactNumber}</td>
                        <td>{td.position}</td>
                        <td>{td.action}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </SectionContainer>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
