import React from 'react';
import { Menu, Icon } from 'antd';
import styled from 'styled-components';

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
    <div className='Header'>
      <IconWrapper>
        <Icon type='close' />
      </IconWrapper>
      <h1>23 Untracked products in my store</h1>
      <NavbarWrapper>
        <Menu mode='horizontal'>
          <Menu.Item key='manual'>Manual Add</Menu.Item>
          <Menu.Item key='csv'>Add from CSV</Menu.Item>
        </Menu>
        <span>How do i get the source products ID</span>
      </NavbarWrapper>
    </div>
  );
}

export default Header;