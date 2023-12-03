import React, { useState } from 'react';
import Navbar from '../components/Sidebar/Navbar';
import Sidebar from '../components/Sidebar/Sidebars';
import SignInForm from '../components/SignInForm';
import { OrderModel } from '../components/OrderModel';

const Orders = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [showOrderModel, setShowOrderModel] = useState(false);
  const openOrderModel = () => {
    setShowOrderModel(true);
  };

  const closeOrderModel = () => {
    setShowOrderModel(false);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row bg-gray transition-all">
    {/* Sidebar and Navbar components */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    <div className="flex-1">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <h1 className="m-10 text-4xl font-bold">
           Orders <span className="text-meta-3">(2)</span>
          </h1>
   
          <div className="flex flex-col md:flex-row m-5 md:m-10 gap-4 p-5 rounded-lg bg-white border border-box">
  <div className="w-full md:w-2/3">
    <input
      type="text"
      placeholder="Search orders by"
      className="w-full p-4 bg-white border border-box rounded-lg"
    />
  </div>
  <div className="md:w-full lg:w-1/5 mt-4 md:mt-0">
    <div className="text-center relative text-gray-2 h-15 p-3 md:w-70 lg:w-full font-bold border border-box border-1 rounded-lg bg-whiter">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center gap-x-1.5 rounded-md bg-whiter px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        lessee
        <svg
          className={`-mr-1 h-5 w-5 text-gray-400 ${isOpen ? 'transform rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-70 lg:w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
              role="menuitem"
              tabIndex={-1}
            >
              order id
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
              role="menuitem"
              tabIndex={-1}
            >
              Lessee name
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm border-b border-box text-center"
              role="menuitem"
              tabIndex={-1}
            >
              Lessor name
            </a>
          </div>
        </div>
      )}
    </div>
  </div>
  <div className="md:w-1/4 mt-4 md:mt-0 flex relative">
  <button
            className="flex-grow bg-meta-3 h-15 text-white rounded-md text-center flex justify-center align-center items-center"
           
          >
         <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1D9E6F"
                stroke="currentColor"
                width={20}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>     Search
          </button>
  </div>
</div>


 
        <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg  border border-box">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white">
        <thead className="text-lg text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
            <tr>
            <th scope="col" className="px-6 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            ID
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="px-1 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            LESSOR
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="px-1 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            LESSEE
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="px-2 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            ITEM
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="px-1 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
           TOTAL PRICE
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="px-6 py-3 text-gray-2">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            STATUS
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-base border-b border-1 border-box ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   01
                </th>
                <td className=" py-4">
                    John Doe
                </td>
                <td className="py-4">
                    Devis miller
                </td>
                <td className="py-4">
                    Playstation 5
                </td>
                <td className="py-4">
                    $ 40
                </td>
                <td className=" py-4">
                    Lessee Returned
                </td>
        
                    <td className="border-b border-box py-5  dark-border-strokedark text-primary">
                    <button   onClick={openOrderModel} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
    <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>


                        </button>
                      </td>

            </tr>
            <tr className="text-base border-b border-1 border-box ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   02
                </th>
                <td className=" py-4">
                    John Doe
                </td>
                <td className=" py-4">
                    Devis miller
                </td>
                <td className=" py-4">
                    Playstation 5
                </td>
                <td className="py-4">
                    $ 40
                </td>
                <td className=" py-4">
                    Lessee Returned
                </td>
        
                    <td className="border-b border-box py-5 dark-border-strokedark text-primary">
                    <button   onClick={openOrderModel} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
    <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>


                        </button>
                      </td>

            </tr>
           
            <tr className="text-base border-b border-1 border-box ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   03
                </th>
                <td className=" py-4">
                    John Doe
                </td>
                <td className=" py-4">
                    Devis miller
                </td>
                <td className=" py-4">
                    Playstation 5
                </td>
                <td className=" py-4">
                    $ 40
                </td>
                <td className=" py-4">
                    Lessee Returned
                </td>
        
                    <td className="border-b border-box py-5  dark-border-strokedark text-primary">
                    <button   onClick={openOrderModel} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
    <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>


                        </button>
                      </td>

            </tr>
            <tr className="text-base border-b border-1 border-box ">
                <th scope="row" className=" py-4 font-medium px-6 text-gray-900 whitespace-nowrap dark:text-white">
                   04
                </th>
                <td className="py-4">
                    John Doe
                </td>
                <td className=" py-4">
                    Devis miller
                </td>
                <td className=" py-4">
                    Playstation 5
                </td>
                <td className=" py-4">
                    $ 40
                </td>
                <td className=" py-4">
                    Lessee Returned
                </td>
        
                    <td className="border-b border-box py-5 dark-border-strokedark text-primary">
            
                        <button   onClick={openOrderModel} className='bg-[#D5EDE5] w-20 h-8 rounded-full text-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className='ml-7.5'>
    <path d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z" stroke="#0E9F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>


                        </button>
                      </td>

            </tr>
           
        </tbody>
    </table>
</div>
      </div>
      {showOrderModel && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
    <div className="relative max-w-lg mx-4">
      <div className="relative mt-10 rounded-2xl bg-white shadow-2xl">
        <button onClick={closeOrderModel} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24" fill='#CACACA'>
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
          </svg>
        </button>
        <div className="p-6">
          <OrderModel />
        </div>
      </div>
    </div>
  </div>
)}

      </div>
  
  );
};

export default Orders;
function setShowOrderModel(arg0: boolean) {
  throw new Error('Function not implemented.');
}

