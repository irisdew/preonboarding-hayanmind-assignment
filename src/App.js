import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { Container, Card } from './App.styles';

function App() {
  const [ref, inView] = useInView();

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments', { params: { _page: page, _limit: 5 } })
      .then((response) => {
        console.log(response.data);
        setData((prev) => [...prev, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  useEffect(() => {
    console.log(inView);
    if (inView) {
      setPage((prev) => (prev < 100 ? prev + 1 : prev));
    }
  }, [inView]);

  return (
    <div className="App">
      <Container>
        {data.map((d, index) => (
          <Card>
            <div>
              <b>Comment Id</b>
              <span>{d.id}</span>
            </div>
            <div>
              <b>Email</b>
              <span>{d.email}</span>
            </div>
            <div className="comment-box">
              <b>Comment</b>
              <span>{d.body}</span>
            </div>
            <div ref={index === data.length - 1 ? ref : null}></div>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default App;
