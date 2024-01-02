import React from "react";

const Props = (props) => {
  return (
    <div>
      <h4>
        My Name is {props.name} and I am {props.age} Years Old
        <h5>{props.children}</h5>
        {/* this will only Render this htlm section because its and child of
        component */}
      </h4>
    </div>
  );
};

export default Props;
