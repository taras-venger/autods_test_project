import React from 'react';
import { Upload, Icon } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.article`
  height: 65vh;
`;

function CustomUpload() {
  return (
    <Wrapper>
      <Upload.Dragger style={{ border: '0px' }}>
        <p className='ant-upload-drag-icon'>
          <Icon type='file-text' style={{ color: '#2678D9' }} />
        </p>
        <p className='ant-upload-text'>Drop CSV file</p>
        <p className='ant-upload-hint'>Or select file from your computer</p>
      </Upload.Dragger>
    </Wrapper>
  );
}

export default CustomUpload;
