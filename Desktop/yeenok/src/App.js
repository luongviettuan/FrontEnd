import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from'./pages/Login';
import Regitster from './pages/Regitster'
import About from './pages/About';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route part="/regitster" exact component={Regitster} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/category/:id" exact component={Category} />
          <Route path="/blogdetail" exact component={BlogDetail} />
          <Route path="/category" exact component={Category} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/productdetail" exact component={ProductDetail} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
