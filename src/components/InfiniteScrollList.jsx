import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { Container, Card } from './InfiniteScrollList.styles';

const InfiniteScrollList = () => {
  const [ref, inView] = useInView();

  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments', { params: { _page: page, _limit: 10 } })
      .then((response) => {
        setComments((prev) => [...prev, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <>
      <Container>
        {comments.map((comment, index) => (
          <Card key={index}>
            <div>
              <b>Comment Id</b>
              <span>{comment.id}</span>
            </div>
            <div>
              <b>Email</b>
              <span>{comment.email}</span>
            </div>
            <div className="comment-box">
              <b>Comment</b>
              <span>{comment.body}</span>
            </div>
          </Card>
        ))}
      </Container>
      {comments.length !== 0 && <div ref={ref} style={{ height: '1px' }}></div>}
    </>
  );
};

export default InfiniteScrollList;
