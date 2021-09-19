import React from 'react';
import "./components.css"

export default function Header() {
  return(
    <div className="header">
      <div><a href="/">simple forum</a></div>
      <div><a href="/login">login</a></div>
    </div>
  );
}