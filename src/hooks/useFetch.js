import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const handlefetch = async (url) => {
      try {
        setIsLoading(true);
       const response =  await axios(url)
        
      setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(error)
      }
    };
  
    useEffect(()=>{

 // action only happen when page rendred
  handlefetch(url)



    },[])
    return{
        data, isLoading, error
    }
}
