import React from 'react';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  border-bottom: 1px solid #b7b7b7;
  margin-bottom: 20px;
`;

const NavbarWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
`;

function Header() {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon type='close' />
      </IconWrapper>
      <h1>23 Untracked products in my store</h1>
      <NavbarWrapper>
        <Menu mode='horizontal'>
          <Menu.Item key='manual'>
            <Link to='/mannual'>Manual Add</Link>
          </Menu.Item>
          <Menu.Item key='csv'>
            <Link to='/csv'>Add from CSV</Link>
          </Menu.Item>
        </Menu>
        <Link to=''>How do i get the source products ID</Link>
      </NavbarWrapper>
    </Wrapper>
  );
}

export default Header;
