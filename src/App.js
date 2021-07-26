import React, { useEffect, useState } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import url from './url/index';
axios.defaults.baseURL = url;

function App() {
  const [commentInfo, setCommentInfo] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0,
  });

  useEffect(() => {
    axios.get(`?_page=${page}&_limit=10`).then((res) => {
      console.log(res.data);
      setCommentInfo((prev) => [...prev, ...res.data]);
    });
  }, [page]);

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [setPage, inView]);

  return (
    <div className="App">
      {commentInfo.map(function (info, i) {
        return (
          <div>
            <div>Comment Id {info.id}</div>
            <div>Email {info.email}</div>
            <div>Comment {info.body}</div>
          </div>
        );
      })}
      {commentInfo.length !== 0 && <div ref={ref}>hi</div>}
    </div>
  );
}

export default App;
