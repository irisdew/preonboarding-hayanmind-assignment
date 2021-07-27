import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  margin-top: 33px;
  color: #212529;
`;

export const Card = styled.div`
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 12px;
  padding: 20px;

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
