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
    storeProducts: [],
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
    }, () => {
      this.addTotal();
    } );
  };

  // Set single product
  setSingleProduct = ( id ) => {
    // console.log( `Set Single Product ${ id }` );
    let product = this.state.storeProducts.find( item => item.id === id );
    localStorage.setItem( 'singleProduct', JSON.stringify( product ) );
    this.setState( {
      singleProduct: { ...product },
      loading: false
    } )
  }

  // Getting Product from local storage
  getStorageProduct = () => {
    return (
      localStorage.getItem( 'singleProduct' ) ? JSON.parse( localStorage.getItem( 'singleProduct' ) ) : {}
    );
  }

  // Add to cart
  addToCart = ( id ) => {
    let tempCart = [ ...this.state.cart ];
    let tempProducts = [ ...this.state.storeProducts ];
    let tempItem = tempCart.find( item => item.id === id );

    // Check if cart is empty
    if ( !tempItem ) {
      tempItem = tempProducts.find( item => item.id === id );
      let total = tempItem.price;
      let cartItems = { ...tempItem, count: 1, total }
      tempCart = [ ...tempCart, cartItems ];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat( tempItem.total.toFixed( 2 ) );
    }

    // Adding products to cart 
    this.setState( {
      cart: tempCart
    }, () => {
      this.addTotal(); // calculating total
      this.syncStorage(); // syncing to local storage (session)
      this.openCart(); // opening cart
    } )
  };

  //Get Totals
  getTotal = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach( item => {
      subTotal += item.total;
      cartItems += item.count
    } );
    subTotal = parseFloat( subTotal.toFixed( 2 ) );
    let tax = parseFloat( ( subTotal * 0.13 ).toFixed( 2 ) );
    let total = parseFloat( ( subTotal + tax ).toFixed( 2 ) );
    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  };

  //Add Total
  addTotal = () => {
    const totals = this.getTotal();
    this.setState( {
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    } )
  };

  //Sync to storage
  syncStorage = () => {
    localStorage.setItem( 'cart', JSON.stringify( this.state.cart ) );
  };

  // Getting Cart from local storage
  getStorageCart = () => {
    return (
      localStorage.getItem( 'cart' ) ? JSON.parse( localStorage.getItem( 'cart' ) ) : []
    );
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
