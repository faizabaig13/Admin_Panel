import React, { useState } from 'react'
import MyImage from '../assets/ps51.png';
import { Link } from 'react-router-dom';
import CancelOrder from './DeleteOrder';
import { Edit } from './Edit';
export const OrderModel = () => {
  const [showCancelOrder, setShowCancelOrder] = useState(false);

  const closeCancelOrder = () => {
    setShowCancelOrder(false);
  };

  const openCancelOrder = () => {
    console.log("Delete button clicked");
    setShowCancelOrder(true);
  };

  const closeCancelOrderLog = () => {
    console.log("Closing delete form");
    setShowCancelOrder(false);
  };
  // Edit

  const [showEdit, setShowEdit] = useState(false);

  const closeEdit = () => {
    setShowEdit(false);
  };

  const openEdit = () => {
    console.log("Delete button clicked");
    setShowEdit(true);
  };

  const closeEditLog = () => {
    console.log("Closing delete form");
    setShowEdit(false);
  };
  return (
    <div className="flex flex-col justify-center bg-white w-full p-4 md:p-8 rounded-2xl  mx-auto">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm font-bold">
    <h2 className="text-center pr-7 text-3xl font-bold leading-9 tracking-tight text-meta-3">
          Order Details <span className='text-yellow text-base font-medium'>status: lorem ipsum</span>
        </h2>
        <div className=' m-2'>
            <h1 >Order Id: <span className='text-gray-2 font-medium'>01</span> </h1>
            <h1  className='mt-1'>Lessee Name: <span className='text-gray-2 font-medium'>Albert</span> </h1>
            <h1  className='mt-1'>Lessee Phone: <span className='text-gray-2 font-medium'>+65 123 456</span> </h1>
            <h1  className='mt-1'>Lessee Shipping Address: <span className='text-gray-2 font-medium'> Anson,Tanjong Pagar 07,08,Singapore</span> </h1>
        </div>
        <div className=' mt-4 text-3xl'>
        <h1 className='text-meta-3 mt-1'>Item Description</h1>
        </div>
        <div className=' mt-4 flex gap-2'>

            <img src={MyImage} alt="" width={100} className='rounded-xl' />
         <div>
         <h1>Sony Playstation 5</h1>
            <span className='text-gray-2'> Lorem ipsum</span>
            <br />
            <br />

            <span className='text-gray-2 '>Quantity: 1</span>

         </div>
         <br />
         <br />
 
        </div>
      </div>
      <br />
      <br />
    <div className='flex gap-30 border-b border-stroke '>
    <h1 className='pb-2 text-gray-2 m-1 '>Renting</h1>
    <h1 className='text-xs font-bold mt-1'>10-03-2023 <span className='text-gray-2 '>-To-</span> 20-03-2023</h1>
    </div>
    <div className='flex gap-65 border-b border-stroke'>
    <h1 className='pb-2 text-gray-2 m-1 '>Total Price  </h1>
    <h1 className='text-xs m-1 font-bold'>$40</h1>
    </div>
    <div className='flex gap-40 border-b border-stroke'>
    <h1 className='pb-2 text-gray-2 m-1 '>Delivery /Collection fee</h1>
    <h1 className='text-xs m-1 font-bold'>$5</h1>
    </div>
    <div className='flex gap-48 border-b border-stroke'>
    <h1 className='pb-2 text-gray-2 m-1 '>Refundable Deposit</h1>
    <h1 className='text-xs m-1 font-bold'>$5</h1>
    </div>
    <div className='flex gap-65 text-meta-3 border-b border-stroke'>
    <h1 className='pb-2 text-gray-2 text-meta-3  m-1 '>Order Total</h1>
    <h1 className='text-xs m-1 font-bold' >$50</h1>
    </div>
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <Link
          onClick={openEdit}
          to="#"
          className="inline-flex mt-3 items-center justify-center bg-[#B8E2D3] py-3 px-6 md:px-8 text-center font-medium text-meta-3 rounded hover:bg-opacity-90"
        >
          Edit
        </Link>
        <Link
          onClick={openCancelOrder}
          to="#"
          className="inline-flex mt-3 items-center justify-center bg-[#EEB4B4] py-3 px-6 md:px-8 text-center font-medium text-[#D02F33] rounded hover:bg-opacity-90"
        >
          Cancel Order
        </Link>
      </div>
{showCancelOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg ml-40">
            <div className="relative rounded-3xl shadow-lg bg-white">
              <button onClick={closeCancelOrder} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-6">
                <CancelOrder />
              </div>
            </div>
          </div>
        </div>
      )}
      {showEdit && (
   <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-3xl shadow-lg bg-white w-180 -ml-15">
              <button onClick={closeEdit} className="absolute top-4 right-4 bg-white text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#CACACA">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
              <div className="p-6">
                <Edit/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
