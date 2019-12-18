import React from 'react';
import { Row, Col } from 'antd';
import CustomUpload from './Upload';
import SideNotes from './SideNotes';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 16px;
`;

function UntrackedCSV() {
  return (
    <div>
      <Wrapper>
        <Row gutter={16}>
          <Col span={16}>
            <CustomUpload />
          </Col>
          <Col span={8}>
            <SideNotes />
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
}

export default UntrackedCSV;
