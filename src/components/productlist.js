import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/contextprovider';

const Productlist = ({ addToCart }) => {
  const products = useContext(ProductContext);
  const [addedItemId, setAddedItemId] = useState(null);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItemId(item.id);

    // Clear the addedItemId state after a brief delay
    setTimeout(() => {
      setAddedItemId(null);
    }, 1500); // Adjust the delay as needed
  };

  return (
    <>
      <div className=" pb-8 px-4 md:px-24 text-[#121212]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
          {products.map((item) => (
            <div className='flex flex-col border border-[#c2bebe] rounded-[8px]' key={item.id}>
              <div style={{ backgroundImage: `url(${item.img})`, backgroundPosition: '', backgroundSize: 'cover' }} className='w-full h-[300px] border-b border-[#c2bebe]'></div>
              <div className='p-6'>
                <div className='flex w-full items-center justify-between'>
                  <p className='font-Outfit text-sm font-semibold'>{item.name}</p>
                  <p className='text-sm font-semibold font-Outfit'>{'$' + item.price}</p>
                </div>
                <p className='font-Outfit text-xs text-[#ababab] mt-2'>{item.description}</p>
                <button onClick={() => handleAddToCart(item)} className='mt-3 px-3 py-1 bg-[#121212] text-[#f5f5f5] font-Outfit text-xs text-center font-medium rounded-[8px]'>
                  {addedItemId === item.id ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productlist;
