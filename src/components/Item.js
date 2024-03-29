import React, { useRef } from 'react';
import styled from 'styled-components';
import ItemDescription from './ItemDescription';
import { Checkbox, Avatar, Input, Select } from 'antd';
const { Option } = Select;

const margin = 20;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  padding: 5px;
`;

const JustifyLeft = styled(Wrapper)`
  justify-content: flex-start;
  border: none;
`;

const JustifyRight = styled(JustifyLeft)`
  justify-content: flex-end;
`;

function Item(props) {
  const refID = useRef();
  const color = props.selected && '#F2F2F2';
  const handleChangeInput = e => console.log(e.target.value);
  const handleChangeSelect = option => console.log(option);

  return (
    <Wrapper id={props.id} ref={refID} style={{ backgroundColor: color }}>
      <JustifyLeft>
        <Checkbox
          style={{ marginRight: margin }}
          onClick={() => props.click(refID.current)}
        />
        <Avatar
          style={{ marginRight: margin }}
          shape='square'
          size={90}
          src={props.src}
        ></Avatar>
        <ItemDescription />
      </JustifyLeft>
      <JustifyRight>
        <Input
          style={{ width: '20vw', marginLeft: margin }}
          placeholder='Enter Source ID'
          onChange={handleChangeInput}
        />
        <Select
          style={{ width: '20vw', marginLeft: margin }}
          placeholder='Enter Source site'
          onChange={handleChangeSelect}
        >
          <Option value='site_1'>Site 1</Option>
          <Option value='site_2'>Site 2</Option>
          <Option value='site_3'>Site 3</Option>
        </Select>
      </JustifyRight>
    </Wrapper>
  );
}

export default Item;
