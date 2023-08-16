import React from "react";

const SimpleTable = ({ heads, rows }) => {
  return (
    <table className="table table-sm table-hover table-responsive">
      <thead className="align-end text-uppercase ">
        {heads != null
          ? heads.map((th, index) => {
              return (
                <>
                  <th
                    key={index}
                    className="th-fw-bold  text-center p-0 sticky-top th-bg-secondary"
                  >
                    <div className="col-12 th-fw-bold  py-2 th-bg-secondary">
                      {th.columnName}
                    </div>
                  </th>
                </>
              );
            })
          : ""}
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default SimpleTable;
