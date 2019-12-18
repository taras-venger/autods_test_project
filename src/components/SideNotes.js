import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  height: 70vh;
  border: 1px solid lightgrey;
`;

function SideNotes() {
  return (
    <Wrapper>
      <h3>CSV format</h3>
      <p>
        The file must be a CSV file with the and should include the next fields
        as the names of the columns:
      </p>
      <ul>
        <li>ProductID</li>
        <li>title</li>
        <li>price</li>
      </ul>
      <p>Visit help section</p>
    </Wrapper>
  );
}

export default SideNotes;
