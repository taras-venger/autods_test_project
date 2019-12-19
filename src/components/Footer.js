import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.footer`
  // position: fixed;
  buttom: 0px;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-top: 1px solid lightgrey;
`;

function Footer(props) {
  return (
    <Wrapper>
      <Button type='primary' size='large' style={{ width: '150px' }}>
        {props.btnLable}
      </Button>
    </Wrapper>
  );
}

export default Footer;
