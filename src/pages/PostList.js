import Post from "../components/Post";
import Header from "../components/Header";
import React, { useState } from 'react';
import './pages.css';

export default function PostList() {

  const [posts, setPosts] = useState(
    [
      {
        "id": 1,
        "title": "this is title 1",
        "username": "sunburstbox"
      },
      {
        "id": 2,
        "title": "this is title 2",
        "username": "poopbutt"
      }
    ]
  );

  return (
    <div>
      <Header />
      {posts.map((value, index) => {
        return <a key={index} href={"/posts/"+value.id}><Post title={value.title} username={value.username}/></a>
      })}
    </div>
  );
}
