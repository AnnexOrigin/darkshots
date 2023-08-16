import React from "react";

const td = ({ classes, values, colSpan }) => {
  return (
    <>
      <td colSpan={colSpan} className={`${classes}`}>
        {values}
      </td>
    </>
  );
};

export default td;
