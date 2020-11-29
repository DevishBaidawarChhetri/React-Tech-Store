import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';
import Cart from './pages/CartPage';
import Default from './pages/DefaultPage';
import Navbar from './components/Navbar/NavBar';
import SideBar from './components/Navbar/SideBar';
import SideCart from './components/Sidecart/SideCart';
import Footer from './components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

function App () {
  return (
    <>
      <ScrollToTop />
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
      <Footer />
    </>
  );
}

export default App;
