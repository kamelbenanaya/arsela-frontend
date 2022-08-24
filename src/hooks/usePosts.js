import React, { useEffect, useState } from "react";
import axios from "axios";

export const usePosts = (url,data) => {

    const [post, setPost] = useState();
    const [error, setError] = useState()
    const handlePosts = async (url,data) => {
      try {
       const response =  await axios.post(url,data)
       setPost(response.data);
      } catch (error) {
        console.log(error);
        setError(error)
      }
    };
    useEffect(()=>{
        handlePosts(url,data)
          },[])
  return { post,error}
}
