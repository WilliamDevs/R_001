import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Condition = styled.h5`
    /* width: 40%; */
  `;
  const Temp = styled.h3``;
  return (
    <>
      <Temp>{props.temp}</Temp>
      <Condition>{props.condition}</Condition>
    </>
  );
};

export default Condition;
