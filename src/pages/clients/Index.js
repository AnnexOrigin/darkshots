import React, { useState, useEffect } from "react";
import TD from "../../components/table/Td";
import ContentHeader from "../../components/shared/ContentHeader";
import ContentBody from "../../components/shared/ContentBody";
import SimpleButton from "../../components/buttons/SimpleButton";
import SimpleTable from "../../components/table/SimpleTable";

const Clients = () => {
  const [users, setUsers] = useState([]);
  // Table Properties
  const tableHeaders = [
    { columnName: "fullName" },
    { columnName: "contact number" },
    { columnName: "description" },
    { columnName: "action" },
  ];
  const tableRows = [
    {
      fullName: "Paul L. De leon",
      contact: "paul@deleon@gmail.com",
      description:
        "In this role, your schedule breathes flexibility, allowing your innovative juices to flow at their own tempo. Whether you're transforming rough sketches into polished masterpieces or collaborating with the team to give life to imaginative concepts, you'll be the conductor of your artistic symphony.",
    },
  ];
  return (
    <>
      {/* Content Header */}
      <ContentHeader
        title={"Clients"}
        rightArea={
          <div className="col-4">
            <input type="text" className="form-control " placeholder="search" />
          </div>
        }
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
                      <TD classes={" td-ellipsis"} values={td.fullName} />
                      <TD classes={" td-ellipsis"} values={td.contact} />
                      <TD classes={" td-ellipsis"} values={td.description} />
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

export default Clients;
