import React from 'react';
import "./components.css"

export default function Post({title, username}) {
  return(
    <div className="post">
      <div className="post-title">{title}</div>
      <div className="username">{username}</div>
    </div>  
  );
}