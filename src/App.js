import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/DefaultPage';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import SideBar from './components/navbar/SideBar';
import SideCart from './components/sidecart/SideCart';

function App () {
  return (
    <>
      {/* Nav Bar, Side Bar and Cart and Footer Component */ }
      <Navbar />
      <SideBar />
      <SideCart />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/contact" component={ Contact } />
        <Route exact path="/products" component={ Products } />
        <Route path="/products/:id" component={ SingleProduct } />
        <Route path="/cart" component={ Cart } />
        <Route component={ Default } />
      </Switch>
    </>
  );
}

export default App;
