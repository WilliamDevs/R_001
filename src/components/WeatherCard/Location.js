import React from "react";
import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-size: 1.6em;
  `;

  return (
    <Container>
      <City className="city">Missouri</City>
      <h3 className="country">North America</h3>
    </Container>
  );
};

export default Location;
