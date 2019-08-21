import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from'./pages/Login';
import About from './pages/About';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Catagory from './pages/Catagory';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/about" exact component={About} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blogdetail" exact component={BlogDetail} />
        <Route path="/catagory" exact component={Catagory} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/productdetail" exact component={ProductDetail} />
      </div>
    </Router>
  );
}

export default App;
