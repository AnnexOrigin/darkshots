import React from "react";

const ContentHeader = ({ title, rightArea }) => {
  return (
    <>
      <div className="col-12 py-2">
        <div className="row mx-0 gap-2">
          <div className="col-12 col-lg d-flex justify-content-lg-start justify-content-center align-items-center gap-1 gx-1">
            <span className=" h4 th-fw-bold text-uppercase">{title}</span>
          </div>
          <div className="col-12 col-lg d-flex justify-content-lg-end justify-content-center align-items-center gap-2 gx-1">
            {rightArea != null ? rightArea : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentHeader;
