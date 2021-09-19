import Comment from "../components/Comment";
import Header from "../components/Header";
import React, { useState } from 'react';
import './pages.css';

function FullPost() {
  const [username, setUsername] = useState("sunburstbox");
  const [postBody, setpostBody] = useState("saduhasd ads ad ads asd   th rt hdr gsfad wd wA ESGRDT YGUM HFVDSA WE FSRGDTHY GHFGD FSDAS waesret hy desrdthfy hdgfs dae sretrhdgsf ");
  const [postTitle, setPostTitle] = useState("what the fuck did i just see");
  return (
    <div className="full-post">
      <div className="post-title">{postTitle}</div>
      <div className="username">{username}</div>
      <div className="post-body">{postBody}</div>
    </div>
  );
}

export default function PostDetail() {
  return (
    <div className="post-detail">
      <Header />
      <FullPost />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
