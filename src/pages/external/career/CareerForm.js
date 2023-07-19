import React from "react";
import InputField from "../../../components/forms/InputField";
import SelectField from "../../../components/forms/SelectField";
const CareerForm = ({ items }) => {
  return (
    <form method="" action="" className="form row">
      <div className="col-6">
        <InputField name="Applicant's Name" type="text" />
      </div>
      <div className="col-6">
        <InputField name="Contact number / email" type="text" />
      </div>
      <div className="col-6">
        <SelectField name="Preferred Position" items={items} />
      </div>
      <div className="col-6">
        <InputField name="cv / resume" type="file" />
      </div>
    </form>
  );
};
export default CareerForm;
