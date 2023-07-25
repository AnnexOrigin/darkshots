import React from "react";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";

const Posts = () => {
  // Table Properties
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "author" },
    { columnName: "job type" },
    { columnName: "requirements" },
    { columnName: "description" },
    { columnName: "date created" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      id: "1",
      author: "1",
      jobType: "1",
      requirements: "1",
      description: "1",
      dateCreated: "1",
    },
  ];
  const tableHeadContent = "postsHeads";
  const tableBodyContent = "postsRows";
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Posts"}
        rightArea={[
          <SimpleButton
            size="sm"
            color="dark"
            label={"Create Job Post"}
            classes={"text-light rounded-0 "}
          />,
          ,
          <div className="col-4">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="search"
            />
          </div>,
        ]}
      />

      {/* Content Body */}
      <ContentBody>
        <SimpleTable
          heads={tableHeaders}
          rows={tableRows}
          tableHeadContent={tableHeadContent}
          tableBodyContent={tableBodyContent}
        />
      </ContentBody>
    </>
  );
};

export default Posts;
