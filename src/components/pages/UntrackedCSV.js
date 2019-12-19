import React from 'react';
import { Row, Col } from 'antd';
import CustomUpload from '../Upload';
import SideNotes from '../SideNotes';
import Footer from '../Footer';

function UntrackedCSV() {
  return (
    <div className='UntrackedCSV'>
      <Row gutter={16}>
        <Col span={16}>
          <CustomUpload />
        </Col>
        <Col span={8}>
          <SideNotes />
        </Col>
      </Row>
      <Footer btnLable='Next' />
    </div>
  );
}

export default UntrackedCSV;
