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
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentBody;
