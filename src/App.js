
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import products from "./products.json";
import Sidebar from "./components/sidebar/Sidebar"




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header /><div className="beforecard">
        {products.map((product,index) => {
          if(index <  4) {
          return <Card
          productName={product.name}
          productImage={`${process.env.REACT_APP_BACKEND_URL}/${product.image[0]?.destination}/${product.image[0]?.filename}`}
          productDesc={product.description}
          productPrice={product.price}
          productBrand={product.brand.name} 
        />}
        })}</div>
        <Sidebar/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
