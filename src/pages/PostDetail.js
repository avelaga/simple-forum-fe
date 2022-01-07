import Comment from "../components/Comment";
import Header from "../components/Header";
import React, { useState } from 'react';
import './pages.css';

async function getFullPost(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export default function PostDetail() {
// export default function PostDetail({title, username}) {

  const [username, setUsername] = useState("sunburstbox");
  const [body, setBody] = useState("saduhasd ads ad ads asd   th rt hdr gsfad wd wA ESGRDT YGUM HFVDSA WE FSRGDTHY GHFGD FSDAS waesret hy desrdthfy hdgfs dae sretrhdgsf ");
  const [title, setTitle] = useState("what the fuck did i just see");
  const [comments, setComments] = useState(
    [
      {
        "comment" : "this is the comment",
        "username" : "mchdkabg"
      },
      {
        "comment" : "this is the comment",
        "username" : "mchdkabg"
      },
      {
        "comment" : "this is the comment",
        "username" : "mchdkabg"
      }
    ]
  );

  // useEffect(() => {
  //   TODO: FIGURE OUT HOW TO MAKE API CALL TO FILL IN STATE DATA. i started copying and pasting the async function in but havent finished or got anything working
  // });

  return (
    <div>
      <Header />
      <div className="full-post">
        <div className="post-title">{title}</div>
        <div className="username">{username}</div>
        <div className="post-body">{body}</div>
      </div>
      {comments.map((value, index) => {
        return <Comment key={index} comment={value.comment} username={value.username} />
      })}
    </div>
  );
}
