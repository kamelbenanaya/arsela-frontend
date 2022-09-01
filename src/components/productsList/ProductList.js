import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../spinner/Spinner";
import Card from "../card/Card";


export const ProductList = ({productsList,setproductsList,data,isLoading,error,resetOnSubmit}) => {
    // const getProducts = async () => {
    //     const response = await axios.get("http://localhost:3001/api/v1/products/");
    //     console.log(response.data);
    //     console.log(
    //       "🚀 ~ file: App.js ~ line 23 ~ getProducts ~ response.data",
    //       response.data
    //     );
    //     return response.data.data;
    //   };
    
    //   const [productsList, setproductsList] = useState([]);
    
    //   const { isLoading, data, error } = useQuery(["getProducts"], getProducts);
      const callback = (data) => {
        console.log("🚀 ~ file: App.js ~ line 14 ~ callback ~ e", data);
        setproductsList(data);
      };
      useEffect(() => {
        setproductsList(data);
      }, [data]);
    
      if (error) {
        return <div>Error</div>;
      }
      const callbackreset = (e) =>{
        console.log("clicked",e)
      }    

  return (
    <>
    {isLoading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}
      {productsList?.length === 0 && (
        <div className="productNotFound">
          Product not found
          <br/>
          <button className="submitbuttonfilter" onClick={resetOnSubmit}>
      {" "}
      reset
    </button>
        </div>
      )}
      {productsList &&
        productsList.map((product, index) => {
          // if (index < 4) {
          return (
            <div>
              <Card
                key={index}
                productName={product.name}
                productImage={`${process.env.REACT_APP_BACKEND_URL}/${product.image[0]?.destination}/${product.image[0]?.filename}`}
                productDesc={product.description}
                productPrice={product.price}
                productBrand={product.brand.name}
              />
            </div>
          );
          // }
        })}</>
  )
}
