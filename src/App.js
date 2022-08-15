
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import products from "./products.json";




function App() {
  console.log(process.env.BACKEND_URL)
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {products.map((product) => {
          return <Card
          productName={product.name}
          productImage={`${process.env.REACT_APP_BACKEND_URL}/${product.image[0]?.destination}/${product.image[0]?.filename}`}
          productDesc={product.description}
          productPrice={product.price}
          productBrand={product.brand.name}
        />
        })}
        
        <Footer />
      </header>
    </div>
  );
}

export default App;
