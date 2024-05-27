import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Community() {
  const [data, setData] = useState(null);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/dbTest")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(() => {
        console.log("에러임");
      });
  }, []);


  return (
    <>
      <CommunityPostList/>
    </>
  );
}

export default Community;