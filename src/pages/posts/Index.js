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
    { columnName: "author" },
    { columnName: "job" },
    { columnName: "requirements" },
    { columnName: "description" },
    { columnName: "date created" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      author: "Alfredo John R. Lera III",
      job: "Video Editor",
      requirements:
        "Conceptualize and create visually stunning designs for a variety of mediums, including digital, print, and social media.",
      description:
        "In this role, your schedule breathes flexibility, allowing your innovative juices to flow at their own tempo. Whether you're transforming rough sketches into polished masterpieces or collaborating with the team to give life to imaginative concepts, you'll be the conductor of your artistic symphony.",
      dateCreated: "06/15/2022",
    },
  ];
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
        <SimpleTable
          heads={tableHeaders}
          rows={
            <>
              {tableRows.map((td) => {
                return (
                  <>
                    <tr
                      key={td._id}
                      className="align-middlefont-weight-bold text-center"
                    >
                      <TD classes={" td-ellipsis"} values={td.author} />
                      <TD classes={" td-ellipsis"} values={td.job} />

                      <TD classes={" td-ellipsis"} values={td.requirements} />

                      <TD classes={" td-ellipsis"} values={td.description} />

                      <TD
                        classes={"col-2 td-ellipsis"}
                        values={td.dateCreated}
                      />
                      <TD
                        classes={"border-start col-1"}
                        values={
                          <div className="btn-group ">
                            <SimpleButton
                              color="outline-dark"
                              size={"sm"}
                              onClick={() => {}}
                              icon={<i class="bi bi-eye"></i>}
                            />
                            <SimpleButton
                              color="outline-dark"
                              size={"sm"}
                              onClick={() => {}}
                              icon={<i class="bi bi-pencil-square"></i>}
                            />
                            <SimpleButton
                              color="outline-dark"
                              size={"sm"}
                              onClick={() => {}}
                              icon={<i class="bi bi-trash3"></i>}
                            />
                          </div>
                        }
                      />
                    </tr>
                  </>
                );
              })}
            </>
          }
        />
      </ContentBody>
    </>
  );
};

export default Posts;
