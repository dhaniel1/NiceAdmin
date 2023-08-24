import React from "react";

interface Iprop extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error: boolean;
  spanData: string | null;
}

const Input = ({ label, spanData, error, ...restprop }: Iprop) => {
  return (
    <>
      <label htmlFor={restprop.id} className="form-label text-capitalize ">
        {label}
      </label>
      <div className="input-group has-validation">
        {spanData && (
          <span className="input-group-text" id="inputGroupPrepend">
            {spanData}
          </span>
        )}

        <input {...restprop} />
        {error && <div className="invalid-feedback d-block">{error}</div>}
      </div>
    </>
  );
};

export default Input;
