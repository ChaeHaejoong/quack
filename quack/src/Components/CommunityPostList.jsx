import React from "react";
import './CommunityPostList.css';
import '../index.css';

function CommunityPostList(props) {
  return(
    <div className="postList-container mar-LR">
      <div className="img-container">
        <img></img>
      </div>
      <div className="text-container">
        <h1>제목임</h1>
        <h3>내용임</h3>
      </div>
    </div>
  )
}

export default CommunityPostList;