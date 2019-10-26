import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import './App.css';
import Home from './pages/Home';
import Login from'./pages/Login';
import Regitster from './pages/Regitster'
import About from './pages/About';
import Cart from './pages/Cart';
import BlogDetail from './pages/BlogDetail';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import Search from './pages/Search'
import {CartProvider} from './context/Cart.Context'
import Brand from './pages/Brand';
function App() {
  return (
    <CookiesProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/productdetail/:id"  component={ProductDetail} />
              <Route path="/" exact component={Home} />
              <Route path="/about"  component={About} />
              <Route path="/cart"  component={Cart} />
              <Route path="/category/:id"  component={Category} />
              <Route path="/category"  component={Category} />
              <Route path="/checkout"  component={Checkout} />
              <Route path="/contact"  component={Contact} />
              <Route path="/search" component={Search} />
              <Route path="/login"  component={Login} />
              <Route path="/brand/:id" component={Brand} />
              <Route part="/regitster" component={Regitster} />
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </CookiesProvider>
  );
}

export default App;
