import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 33px;
`;

export const Card = styled.div`
  height: 193px;
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  box-sizing: border-box;
  margin: 0 auto 12px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    margin-bottom: 12px;
    b {
      margin-right: 12px;
    }
  }

  .comment-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
`;
