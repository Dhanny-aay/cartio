import Navbar from "./components/navbar";
import Productlist from "./components/productlist";
import { useContext, useState } from "react";
import { CartContext, CartStateContext } from "./contexts/contextprovider";
import ShoppingCart from "./components/shoppingCart";




function App() {

  const [cartItems, setCartItems] = useContext(CartContext);
  const [cartState, setCartstate] = useContext(CartStateContext);
 

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find(item => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, increase its quantity
      setCartItems(prevCartItems => prevCartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };


  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        // Ensure the new quantity is at least 1
        item.quantity = Math.max(newQuantity, 1);
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };


  console.log(cartItems)

  return (
    <div className=" relative mb-8 md:mb-16">
      <Navbar cartItemCount={getCartItemCount()}/>
      <p className=" mt-32 text-center text-2xl md:text-4xl mb-8 md:mb-16 font-Outfit font-medium">Products</p>
      <Productlist addToCart={addToCart}/>
      {  cartState && <ShoppingCart removeFromCart={removeFromCart} updateQuantity={updateQuantity} calculateTotalCost={calculateTotalCost}/>}
    </div>
  );
}

export default App;
