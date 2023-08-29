import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
const Index = () => {
  return (
    <>
      {/* Users Modal */}
      <ContentHeader title={"Profile"} />
      {/* Content Body */}
      <ContentBody>
        <div className="">
          <div className="th-fs-3">Personal Information</div>
          <div className="col row mx-0 gap-2">
            <div className=" col-12 col-lg">
              <span className="form-label">Full name</span>
              <input type="text" name="" id="" className="form-control" />
            </div>
            <div className=" col-12 col-lg">
              <span className="form-label">Email</span>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                readOnly
              />
            </div>
            <div className=" col-12 col-lg">
              <span className="form-label">Contact Number</span>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                readOnly
              />
            </div>
          </div>

          <div className="th-fs-3">Account Information</div>
          <div className="col row mx-0 gap-2">
            <div className=" col-12 col-lg">
              <span className="form-label">Username</span>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                readOnly
              />
            </div>

            <div className=" col-12 col-lg">
              <span className="form-label">Password</span>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                readOnly
              />
            </div>

            <div className=" col-12 col-lg">
              <span className="form-label">Position</span>
              <input
                type="text"
                name=""
                id=""
                className="form-control"
                disabled
              />
            </div>
          </div>
          <div className="col p-3 float-end">
            <SimpleButton
              color={"dark"}
              classes={"col-12 col-lg-auto"}
              label={"Edit User"}
            />
          </div>
        </div>
      </ContentBody>
    </>
  );
};

export default Index;
