import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import Product_Detail from './Components/Products/Product-Detail/Product_Detail';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Products /> comment - "CTRL+K+C"*/}
      <Product_Detail />
    </div>
  );
}

export default App;
