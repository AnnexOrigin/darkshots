import React from "react";

const SimpleTable = ({ heads, rows }) => {
  return (
    <table className="table table-sm table-hover table-responsive">
      <thead className=" text-center text-uppercase ">
        {heads != null
          ? heads.map((th, index) => {
              return (
                <>
                  <th
                    key={index}
                    className="th-fw-bold p-0 sticky-top th-bg-secondary"
                  >
                    <div className=" th-fw-bold th-bg-secondary">
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
