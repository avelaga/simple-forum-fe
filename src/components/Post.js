import React, { useState } from 'react';
import "./components.css"

export default function Post(props) {

  // const [username, setUsername] = useState("sunburstbox");
  // const [postTitle, setPostTitle] = useState("what the fuck did i just see");

  return(
    <div className="post">
      <div className="post-title">{props.postTitle}</div>
      <div className="username">{props.username}</div>
    </div>  
  );
}