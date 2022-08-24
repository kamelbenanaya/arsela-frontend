import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import { ItSupport } from "./components/itSupport/ItSupport";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/spinner/Spinner";
import { useQuery } from "@tanstack/react-query";
import Slider from "./components/silder/Slider"
function App() {
  

  const getProducts = async () => {
    const response = await axios.get("http://localhost:3001/api/v1/products/");
    console.log(response.data);
    console.log(
      "🚀 ~ file: App.js ~ line 23 ~ getProducts ~ response.data",
      response.data
    );
    return response.data.data;
  };
  const { isLoading, data, error } = useQuery(["getProducts"], getProducts);
  useEffect(() => {
    console.log("99999", data);
  }, [data]);
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
     
        <Header />
        <Slider/>
      <div className="app-container ">
        <div className="sidebar" >
        <Sidebar />
        </div>
        <div className="beforecard">
          
        {isLoading && (
                       
                          <div className="spinner-container">
                          <Spinner />
                       </div>
                      )}
          {data &&
            data.map((product, index) => {
              // if (index < 4) {
                return (
                  <div>
                   
                     
                      
                    
                    <Card
                      productName={product.name}
                      productImage={`${process.env.REACT_APP_BACKEND_URL}/${product.image[0]?.destination}/${product.image[0]?.filename}`}
                      productDesc={product.description}
                      productPrice={product.price}
                      productBrand={product.brand.name}
                    />
                  </div>
                );
              // }
            })}
            <ItSupport />
        </div>
        </div>
        

        
        <Footer />
     
    </div>
  );
}

export default App;
