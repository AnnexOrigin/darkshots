import React from "react";

const ContentHeader = ({ title, rightArea }) => {
  return (
    <>
      <div className="d-flex align-items-center py-3">
        <div className="col-auto th-fs-3 th-fw-bold text-uppercase">
          {title}
        </div>
        <div className="col d-flex justify-content-end ">{rightArea}</div>
      </div>
    </>
  );
};

export default ContentHeader;
