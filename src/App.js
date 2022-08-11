import logo from './logo.svg';
import './App.css';
import Card from "./components/card/Card"
import Header from "./components/header/Header"
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Card/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
