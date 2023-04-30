import React from "react";

interface Iprop extends React.HTMLProps<HTMLButtonElement> {};

const Button = (props: Iprop) => {
  return (
    <div className="col-12">
      <button className="btn btn-primary w-100" type="submit">
       {props.title}
      </button>
    </div>
  );
};

export default Button;
