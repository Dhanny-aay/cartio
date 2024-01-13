import { useContext } from "react";
import close from './assets/close.png';
import arrow from './assets/arrow.png';
import { CartContext, CartStateContext } from "../contexts/contextprovider";

const ShoppingCart = ({ removeFromCart, updateQuantity, calculateTotalCost }) => {

    const [cartItems, setCartItems] = useContext(CartContext);
    const [cartState, setCartstate] = useContext(CartStateContext);

    const calculateTotal = (item) => {
        return item.price * item.quantity;
    };

    if (cartItems.length === 0) {
        return (
          <p className="text-center text-base font-Outfit font-medium mt-3">No items in the cart yet.</p>
        );
    }

    return ( 
        <>
        <div className=" fixed top-[80px] left-0 w-full h-[100vh]  bg-[#fff] px-4 md:px-24 overflow-auto">
            <div className=" w-full pb-32">
                <span className=" my-16 text-center w-full flex items-center justify-between text-2xl md:text-4xl font-Outfit font-medium">
                    <p>Your Cart</p>
                    <img onClick={()=>{setCartstate(false)}} src={ arrow } className=" w-6 md:w-12" alt="" />
                </span>
                <div className=" w-full flex flex-col lg:flex-row md:items-start md:justify-between">
                    <div className="w-full lg:w-[67%] overflow-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className=" text-xs md:text-sm uppercase font-Outfit text-[#ababab] font-normal border-b">
                                        <th className="text-left pb-2">Product</th>
                                        <th className="text-center pb-2">Price</th>
                                        <th className="text-center pb-2">Quantity</th>
                                        <th className="text-center pb-2">Total</th>
                                        <th className="text-center pb-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr className="border-b font-Outfit" key={item.id}>
                                            <td className="flex flex-row items-center py-3 space-x-3 md:space-x-0 md:space-y-0">
                                                <img src={item.img} className="w-[40px] h-[40px] md:w-[55px] md:h-[90px]" alt="" />
                                                <p className="font-Outfit text-sm font-medium">{item.name}</p>
                                            </td>
                                            <td className=" text-xs md:text-sm font-normal text-center">{`$${item.price}`}</td>
                                            <td className=" text-xs md:text-sm font-normal text-center">
                                                <div className="flex justify-center items-center">
                                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className='px-2 py-1 bg-gray-200 text-gray-700 font-Outfit text-xs text-center font-medium rounded-l-md'>
                                                        -
                                                    </button>
                                                    <span className="px-2 py-1 bg-gray-100 text-gray-700 font-Outfit text-xs text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className='px-2 py-1 bg-gray-200 text-gray-700 font-Outfit text-xs text-center font-medium rounded-r-md'>
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="text-sm font-normal text-center">{`$${calculateTotal(item)}`}</td>
                                            <td className="text-sm font-normal text-center">
                                                <button onClick={() => removeFromCart(item.id)} className='w-6 h-6 md:w-8 md:h-8 bg-[#ababab] flex justify-center items-center rounded-[50%]'>
                                                    <img src={close} className="md:w-3 md:h-3 w-2 h-2" alt="" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    </div>

                    <div className=" w-full lg:w-[30%] mt-8 lg:mt-0">
                        <div className=" w-full px-4 py-4 rounded-t-[6px] border-b border-[#00000063] bg-[#ababab87]">
                            <p className=" font-Outfit text-[#121212] text-base font-medium">Order Summary</p>
                        </div>
                        <div className=" py-4 px-4 w-full bg-[#ababab87]">
                            <span className=" w-full flex justify-between items-center">
                                <p className=" font-Outfit text-sm font-medium text-[#121212a6]">Subtotal</p> 
                                <p className=" font-Outfit text-sm font-normal text-[#121212]">${calculateTotalCost().toFixed(2)}</p> 
                            </span>
                            <span className=" w-full flex justify-between items-center mt-2">
                                <p className=" font-Outfit text-sm font-medium text-[#121212a6]">Shipping</p> 
                                <p className=" font-Outfit text-sm font-normal text-[#121212]">Free</p> 
                            </span>
                        </div>
                        <div className=" py-4 px-4 w-full rounded-b-[6px] bg-[#ababab]">
                            <span className=" w-full flex justify-between items-center">
                                <p className=" font-Outfit text-base font-medium text-[#121212]">Total</p> 
                                <p className=" font-Outfit text-base font-normal text-[#121212]">${calculateTotalCost().toFixed(2)}</p> 
                            </span>
                        </div>
                        <div className=" mt-2 w-full">
                            <button className=" w-full h-full py-3 rounded-[6px] bg-[#121212] text-[#f5f5f5] tracking-wide font-Outfit font-medium text-base">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default ShoppingCart;