import React from "react";

const SectionContainer = ({ leftArea, rightArea, children }) => {
  return (
    <div className="col-12">
      <div className="row mx-0 gap-2">
        <div className="col-12 col-lg d-flex justify-content-lg-start">
          {leftArea}
        </div>
        <div className="col-12 col-lg d-flex justify-content-lg-end">
          {rightArea}
        </div>
        <div className="col-12 overflow-auto p-0" style={{ height: "50vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
