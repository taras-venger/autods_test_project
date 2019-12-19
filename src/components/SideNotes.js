import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.article`
  height: 65vh;
  border: 1px solid lightgrey;
  padding: 10px;
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
      <Link to=''>Visit help section</Link>
    </Wrapper>
  );
}

export default SideNotes;
