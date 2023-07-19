import React from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";
import Icon from "../../assets/images/placeholder/Img_placeholder.jpg";
const AccountSettings = () => {
  const sectionTitle = "Account Settings";
  const containerStyle = {
    marginTop: "3.625rem",
  };
  const contentHeight = {
    height: "calc(100vh - 3.625rem)",
    overflow: "auto",
  };
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
              {sectionTitle}
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
          </SectionContainer>
        </section>
      </div>
    </>
  );
};

export default AccountSettings;
