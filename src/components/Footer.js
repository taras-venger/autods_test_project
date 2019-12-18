import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid lightgrey;
`;

function Footer() {
  return (
    <Wrapper>
      <Button type='primary' size='large' style={{ width: '150px' }}>
        Next
      </Button>
    </Wrapper>
  );
}

export default Footer;
