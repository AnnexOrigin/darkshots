import React, { useState, useEffect } from "react";
import TD from "../../components/table/Td";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";

const Posts = () => {
  const [users, setUsers] = useState([]);
  // Table Properties
  const tableHeaders = [
    { columnName: "id" },
    { columnName: "author" },
    { columnName: "job" },
    { columnName: "requirements" },
    { columnName: "description" },
    { columnName: "date_created" },
    { columnName: "action" },
  ];
  const tableRows =
    users.length > 0 ? (
      users.map((td) => {
        if (
          td._id === "" &&
          td.fullName === "" &&
          td.contact === "" &&
          td.description === "" &&
          td.action === ""
        ) {
          return null;
        }
        // Validate
        return (
          <tr
            key={td._id}
            className="align-middle text-capitalize font-weight-bold text-center"
          >
            <TD classes={"col-1 td-ellipsis"} values={td._id} />
            <TD classes={"td-ellipsis"} values={td.author} />
            <TD classes={"td-ellipsis"} values={td.job} />
            <TD classes={"td-ellipsis"} values={td.requirements} />
            <TD classes={"td-ellipsis"} values={td.description} />
            <TD classes={"td-ellipsis"} values={td.date_created} />
            <TD classes={"td-ellipsis"} values={td.action} />
          </tr>
        );
      })
    ) : (
      <tr>
        <td colSpan={7} className="text-center">
          No posts
        </td>
      </tr>
    );
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Posts"}
        rightArea={[
          <SimpleButton
            color="dark"
            label={"Create Job Post"}
            classes={" rounded-0 "}
            icon={<i class="bi bi-clipboard2-plus"></i>}
          />,
          ,
          <div className="col-4">
            <input type="text" className="form-control " placeholder="search" />
          </div>,
        ]}
      />

      {/* Content Body */}
      <ContentBody>
        <SimpleTable heads={tableHeaders} rows={tableRows} />
      </ContentBody>
    </>
  );
};

export default Posts;
