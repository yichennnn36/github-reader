import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 100%;
  padding: 0 14px;
  background: black;
  position: fixed;
  z-index: 2;
  top: 0;

  & h2 {
    line-height: 5rem;
    color: #a9d992;
  }
`;