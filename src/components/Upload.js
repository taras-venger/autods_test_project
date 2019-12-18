import React from 'react';
import { Upload, Icon } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.article`
  height: 70vh;
`;

function CustomUpload() {
  return (
    <Wrapper>
      <Upload.Dragger>
        <p className='ant-upload-drag-icon'>
          <Icon type='file-text' />
        </p>
        <p className='ant-upload-text'>Drop CSV file</p>
        <p className='ant-upload-hint'>Or select file from your computer</p>
      </Upload.Dragger>
    </Wrapper>
  );
}

export default CustomUpload;
