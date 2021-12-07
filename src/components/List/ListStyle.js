import styled from 'styled-components';

export const ListWrapper = styled.div`
  margin: 120px auto 80px;
  padding: 20px 100px;
  min-height: 100%;
`;

export const ListBlock = styled.div`
  margin: 50px 0;
`;

export const CardContainer = styled.div`
  margin-bottom: 50px;

  & .ant-card {
    border: 3px solid #a9d992;
    border-radius: 10px;
  }
  & .ant-card-head-title {
    font-size: 20px;
  }
`;
