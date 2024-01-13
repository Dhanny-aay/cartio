import { useContext } from "react";
import { CartStateContext } from "../contexts/contextprovider";

const Navbar = ({cartItemCount}) => {

    const [cartState, setCartstate] = useContext(CartStateContext);

    return ( 
        <>
        <div className=" px-3 md:px-24 py-6 bg-[#121212] flex items-center justify-between text-[#f5f5f5] fixed top-0 left-0 w-full">
            <p className=' font-Outfit text-2xl uppercase font-medium'>Cartio</p>
            <span className=' flex'>
                <button onClick={()=>{setCartstate(true)}} className=' py-1 px-4 border-y border-x font-Outfit border-[#f5f5f55] rounded-l-[3px]'>Cart</button>
                <button onClick={()=>{setCartstate(true)}} className=' py-1 px-4 border-y border-r font-Outfit border-[#f5f5f55] rounded-r-[3px]'>{cartItemCount}</button>
            </span>
        </div>
        </>
     );
}
 
export default Navbar;