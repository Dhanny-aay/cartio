import { createContext, useEffect, useState } from "react";
import bluemug from './assets/bluemug.webp';
import bluejay from './assets/bluejay.jpg';
import rubyred from './assets/rubyred.webp';
import golden from './assets/gold-tray.webp';
import emerald from './assets/emerald.webp';
import decanter from './assets/decanter.jpg';

export const CartContext = createContext();
export const ProductContext = createContext();
export const CartStateContext = createContext();

const ContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartState, setCartstate] = useState(false);

    const products = [
      { id:'0', name: 'Jay Blue Glass', price: 70, img: bluejay, description: 'Elegant blue glass perfect for both casual and formal occasions.' },
      { id:'1', name: 'Ruby Red Vase', price: 45, img: rubyred, description: 'A stunning ruby red vase to add a pop of color to your living space.' },
      { id:'2', name: 'Golden Elegance Tray', price: 120, img: golden, description: 'An exquisite golden tray for serving with style and sophistication.' },
      { id:'3', name: 'Emerald Green Bowl', price: 55, img: emerald, description: 'A vibrant emerald green bowl, ideal for salads or decorative use.' },
      { id:'4', name: 'Crystal Clear Decanter', price: 90, img: decanter, description: 'A crystal clear decanter to enhance the presentation of your favorite beverages.' },
      { id:'5', name: 'Sapphire Blue Mug ', price: 35, img: bluemug, description: 'Set of sapphire blue mugs, perfect for enjoying your favorite hot beverages.' }
    ];    
  
    return (
      <>
        <CartContext.Provider value={[cartItems, setCartItems]}>
          <ProductContext.Provider value={products}>
            <CartStateContext.Provider value={[cartState, setCartstate]} >
              {props.children}
            </CartStateContext.Provider>
          </ProductContext.Provider>
        </CartContext.Provider>
      </>
    );
  };
  
  export default ContextProvider;
  