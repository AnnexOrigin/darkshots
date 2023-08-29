import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
const Index = () => {
  return (
    <>
      {/* Users Modal */}
      <ContentHeader
        title={"Order"}
        rightArea={[
          <div className="col-4">
            <input
              type="text"
              className="form-control "
              placeholder="search"
              autoComplete="off"
            />
          </div>,
        ]}
      />
      {/* Content Body */}
      <ContentBody></ContentBody>
    </>
  );
};

export default Index;
