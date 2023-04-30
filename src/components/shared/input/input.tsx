import React from "react";

interface Iprop extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error: string | undefined;
}
const Input = ({ label, ...restprop }: Iprop) => {
  return (
    <>
      <label htmlFor="yourUsername" className="form-label text-capitalize ">
        {label}
      </label>
      <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">
          @
        </span>
        <input {...restprop} />
        <div className="invalid-feedback">Please enter your username.</div>
      </div>
    </>
  );
};

export default Input;
