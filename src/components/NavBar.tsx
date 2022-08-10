import React from "react";

export default function NavBar ({pause}) {
  return (
    <div id="navbar">
      <button id="pause-btn" onClick={() => {pause()}}>PAUSE</button>
      <span>Saved Thoughts</span>
      <span>Log In</span>
    </div>
  )
}