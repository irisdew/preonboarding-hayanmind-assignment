import React from 'react';
import { Container, Card } from './App.styles';

function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <div>
            <b>Comment Id</b>
            <span>1</span>
          </div>
          <div>
            <b>Email</b>
            <span>Eliseo@gardner.biz</span>
          </div>
          <div className="comment-box">
            <b>Comment</b>
            <span>
              laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem
              quasi\nreiciendis et nam sapiente accusantium
            </span>
          </div>
        </Card>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </div>
  );
}

export default App;
