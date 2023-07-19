import React from "react";
const Applicants = () => {
  const sectionBody = { marginTop: "58px" };
  const sectionTitle = "Applicants";
  const tableHeaders = [
    { columName: "Name" },
    { columName: "Category" },
    { columName: "Percentage" },
    { columName: "Remarks" },
    { columName: "Color" },
  ];
  const tableRows = [
    {
      name: "Juan Dela Cruz",
      category: "Earthquake",
      percentage: "50%",
      remarks: "unsatisfactory",
      color: "yellow",
    },
    {
      name: "Cardo Dimagiba",
      category: "Fire",
      percentage: "30%",
      remarks: "urgent",
      color: "red",
    },
    {
      name: "Daniel Cassanova",
      category: "Typhoon",
      percentage: "80%",
      remarks: "satisfactory",
      color: "green",
    },
  ];
  const tableHeadContent = "applicantsHeads";
  const tableBodyContent = "applicantsRows";
  return (
    <>
      <div className="container text-light">
        <div>sidebar</div>
        <div>section</div>
      </div>
    </>
  );
};

export default Applicants;
