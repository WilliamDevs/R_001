import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-size: 1.6em;
  `;
  const Country = styled.h3`
    font-size: 0.6em;
  `;

  return (
    <Container>
      <City>{props.city}</City>
      <Country>{props.country}</Country>
    </Container>
  );
};

export default Location;
