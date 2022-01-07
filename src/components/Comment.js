import React from 'react';
import "./components.css"

export default function Comment({comment, username}) {
  return(
    <div className="comment">
      <div className="comment-body">{comment}</div>
      <div className="username">{username}</div>
    </div>
  );
}