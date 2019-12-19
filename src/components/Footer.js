import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  left: 0px;
  bottom: 0px;
  padding: 0px 30px;
  background-color: white;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  border-top: 1px solid #e5e5e5;
`;

function Footer(props) {
  return (
    <StyledFooter>
      <StyledDiv>
        <Button type='primary' size='large' style={{ width: '150px' }}>
          {props.btnLable}
        </Button>
      </StyledDiv>
    </StyledFooter>
  );
}

export default Footer;
