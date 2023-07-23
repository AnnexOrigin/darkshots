import React from "react";

const ContentBody = ({ leftArea, rightArea, children }) => {
  return (
    <div className="col-12">
      <div className="row mx-0 gap-2">
        <div className="col-12 col-lg d-flex justify-content-lg-start gap-1 gx-1">
          {leftArea != null ? leftArea : null}
        </div>
        <div className="col-12 col-lg d-flex justify-content-lg-end gap-1 gx-1">
          {rightArea != null ? rightArea : null}
        </div>
        <div className="col-12 overflow-auto p-0" style={{ height: "50vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
