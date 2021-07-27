import { useEffect, useState } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import styled from 'styled-components';
import url from './url/index';
axios.defaults.baseURL = url;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const CommentContainer = styled.div`
  margin-top: 33px;
`;

const CommentBox = styled.div`
  width: 500px;
  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 14px;
  font-size: 18px;
`;

const CommentBody = styled.div`
  margin: 20px;
`;
const CommentElement = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.span`
  margin-right: 12px;
  font-weight: 700;
`;
const CommentTitle = styled.div`
  font-weight: 700;
`;

function App() {
  const [commentInfo, setCommentInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    root: null,
    rootMargin: '10px',
    threshold: 0,
  });

  useEffect(() => {
    axios.get(`?_page=${page}&_limit=10`).then((res) => {
      setCommentInfo((prev) => [...prev, ...res.data]);
    });
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [setPage, inView]);

  return (
    <Root className="App">
      <CommentContainer>
        {commentInfo.map(function (info, i) {
          return (
            <CommentBox key={i}>
              <CommentBody>
                <CommentElement>
                  <Title>Comment Id</Title>
                  {info.id}
                </CommentElement>
                <CommentElement>
                  <Title>Email</Title> {info.email}
                </CommentElement>
                <CommentElement>
                  <CommentTitle>Comment</CommentTitle> {info.body}
                </CommentElement>
              </CommentBody>
            </CommentBox>
          );
        })}
      </CommentContainer>
      {commentInfo.length !== 0 && <div ref={ref}> </div>}
    </Root>
  );
}

export default App;
