import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  margin: 0px;
`;

const Details = styled.div`
  width: 18vw;
  display: flex;
  justify-content: space-between;
`;

function ItemDescription() {
  return (
    <div>
      <Title>consequat excepteur excepteur</Title>
      <Details>
        <span>Sell ID: ER36656685</span>
        <span>SKU: ER36656685</span>
      </Details>
    </div>
  );
}

export default ItemDescription;
