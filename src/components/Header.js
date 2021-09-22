import React from 'react';
import "./components.css"

export default function Header(props) {
  return(
    <div className="header">
      <div><a href="/">simple forum</a></div>
      {!props.login &&
      <div><a href="/login">login</a></div>
      }
      
    </div>
  );
}