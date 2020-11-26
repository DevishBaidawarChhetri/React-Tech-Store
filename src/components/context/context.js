import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialMedias } from './socialMedias';
import { items } from '../Context/productData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0,
    links: linkData,
    cart: [],
    socialIcons: socialMedias,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storedProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: false
  }

  componentDidMount () {
    this.setProducts( items );
  }

  // Set Products
  setProducts = ( products ) => {
    let storeProducts = products.map( item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image }
      // console.log( product );
      return product;
    } );

    // Featured Products
    let featuredProducts = storeProducts.filter( ( item ) => item.featured === true );
    this.setState( {
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    } )
  }

  // Getting Cart from local storage
  getStorageCart = () => {
    return [];
  }

  // Getting Product from local storage
  getStorageProduct = () => {
    return [];
  }

  //Get Totals
  getTotal = () => { };

  //Add Total
  addTotal = () => { };

  //Sync to storage
  syncStorage = () => { };

  // Add to cart
  addToCart = ( id ) => {
    console.log( `Add to cart ${ id }` );
  };

  // Set single product
  setSingleProduct = ( id ) => {
    console.log( `Set Single Product ${ id }` );
  }

  // Handle Sidebar
  handleSidebar = () => {
    this.setState( {
      sidebarOpen: !this.state.sidebarOpen
    } );
  }

  // Handle Cart
  handleCart = () => {
    this.setState( {
      cartOpen: !this.state.cartOpen
    } );
  }

  // Open Cart
  openCart = () => {
    this.setState( { cartOpen: true } )
  }

  // Close Cart
  closeCart = () => {
    this.setState( { cartOpen: false } )
  }

  render () {
    return (
      <ProductContext.Provider value={
        {
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }
      }>
        { this.props.children }
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
