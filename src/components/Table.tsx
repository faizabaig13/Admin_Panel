
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebars';
import Navbar from '../components/Sidebar/Navbar';
import ProductOne from '../assets/product1.jpeg';
import ProductTwo from '../assets/product2.png';
import ProductThree from '../assets/product3.jpeg';
import ProductFour from '../assets/product4.jpeg';
import { Link } from 'react-router-dom';
import Uploading from './Uploading';
import CategoryEdit from './CategoryEdit';


const Table = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [showUploading, setShowUploading] = useState(false);
  const openUploading = () => {
    setShowUploading(true);
  };
  const [enabled, setEnabled] = useState<boolean>(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  
  const closeUploading = () => {
    setShowUploading(false);
  };
  

  const [showCategoryEdit, setShowCategoryEdit] = useState(false);
  const openCategoryEdit = () => {
    setShowCategoryEdit(true);
  };
  
  const closeCategoryEdit = () => {
    setShowCategoryEdit(false);
  };
  
  return (
    <div className="flex-1">
   
    <h1 className="font-black text-3xl m-5 boldish md:m-10">
       Categories<span className="text-meta-3 boldish">(2)</span>
      </h1>
    <div className="flex flex-col md:flex-row m-5 md:m-10 gap-4 border border-box p-5 rounded-lg  bg-white">
        <div className="md:w-full lg:w-2/3">
          <input
            type="text"
            placeholder="Search by"
            className="w-full p-4 bg-whiter border border-box rounded-lg"
          />
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0 flex">
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
              </svg>  Search 
          </button>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0 flex">
        <button
            className="flex-grow bg-meta-3 h-15 text-white rounded-md"
            onClick={openUploading}
          >
            + Add Category
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto m-10 shadow-md sm:rounded-lg  border border-box">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white">
      <thead className="text-lg text-gray-2 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-1 border-box">
          <tr>
          <th scope="col" className="py-3 px-5">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
          ID
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className=" py-3">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            CATEGORY NAME
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className="py-3">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            NO OF PRODUCTS
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className=" py-3">
              <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            ADDED ON
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.4532 9.31999L10.3132 7.17999L9.00655 5.86666C8.45322 5.31333 7.55322 5.31333 6.99988 5.86666L3.54655 9.31999C3.09322 9.77333 3.41988 10.5467 4.05322 10.5467H7.79322H11.9466C12.5866 10.5467 12.9066 9.77333 12.4532 9.31999Z" fill="#292D32"/>
              <path d="M3.54678 14.68L5.68678 16.82L6.99345 18.1333C7.54678 18.6867 8.44678 18.6867 9.00012 18.1333L12.4534 14.68C12.9068 14.2267 12.5801 13.4533 11.9468 13.4533L8.20678 13.4533L4.05345 13.4533C3.41345 13.4533 3.09345 14.2267 3.54678 14.68Z" fill="#292D32"/>
            </svg>
          </div>
              </th>
              <th scope="col" className=" py-3">
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
              <td className="px-6 py-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" className='rounded-lg'/>
            </div>
            <p className="text-sm text-black dark:text-white">
              Gaming
            </p>
          </div>
              </td>
              <td className="px-6 py-4">
                  180
              </td>
              <td className="px-6 py-4">
                 20-4-2022
              </td>
                <td className="border-b border-box py-5 px-4 ">
                <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none text-danger items-center"
      >     Disabled
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only "
           
          />
     
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
              enabled && '!right-1 !translate-x-full !bg-white dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
                    </td>
            
        
                  <td className="border-b border-box py-5 px-4 dark-border-strokedark text-primary">
                      <button onClick={openCategoryEdit} className='w-25 text-center h-9 rounded-full justify-center items-center bg-[#D9DDFA] ' >
                      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" className='ml-9' xmlns="http://www.w3.org/2000/svg" >
<path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 18.3333H17.5" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </button>
                    </td>

          </tr>
          <tr className="text-base border-b border-1 border-box ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 02
              </th>
              <td className="px-6 py-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductTwo} alt="Product" className='rounded-lg' />
            </div>
            <p className="text-sm text-black dark:text-white">
              Backpack
            </p>
          </div>
              </td>
              <td className="px-6 py-4">
                  180
              </td>
              <td className="px-6 py-4">
                 20-4-2022
              </td>
              <td className="border-b border-box py-5 px-4 dark-border-strokedark">
              <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none text-meta-3 items-center"
      >     Enabled
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only "
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
     
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`absolute right-1 top-1 h-6 w-6 rounded-full bg-meta-3 transition ${
              enabled && '!right-1 !translate-x-full !bg-meta-3 dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
                    </td>
            
        
                  <td className="border-b border-box py-5 px-4 dark-border-strokedark text-primary">
                  <button onClick={openCategoryEdit} className='w-25 text-center h-9 rounded-full justify-center items-center bg-[#D9DDFA] ' >
                      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" className='ml-9' xmlns="http://www.w3.org/2000/svg" >
<path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 18.3333H17.5" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </button>
                    </td>

          </tr>
          <tr className="text-base border-b border-1 border-box ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 03
              </th>
              <td className="px-6 py-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductThree} alt="Product"className='rounded-lg' />
            </div>
            <p className="text-sm text-black dark:text-white">
              Shoes
            </p>
          </div>
              </td>
              <td className="px-6 py-4">
                  180
              </td>
              <td className="px-6 py-4">
                 20-4-2022
              </td>
              <td className="border-b border-box py-5 px-4 dark-border-strokedark">
              <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none text-meta-3 items-center"
      >     Enabled
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only "
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
     
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`absolute right-1 top-1 h-6 w-6 rounded-full bg-meta-3 transition ${
              enabled && '!right-1 !translate-x-full !bg-meta-3 dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
                    </td>
            
        
                  <td className="border-b border-box py-5 px-4 dark-border-strokedark text-primary">
                  <button onClick={openCategoryEdit} className='w-25 text-center h-9 rounded-full justify-center items-center bg-[#D9DDFA] ' >
                      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" className='ml-9' xmlns="http://www.w3.org/2000/svg" >
<path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 18.3333H17.5" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </button>
                    </td>

          </tr>
          <tr className="text-base border-b border-1 border-box ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 04
              </th>
              <td className="px-6 py-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductFour} alt="Product" className='rounded-lg' width={52}/>
            </div>
            <p className="text-sm text-black dark:text-white">
              Car
            </p>
          </div>
              </td>
              <td className="px-6 py-4">
                  180
              </td>
              <td className="px-6 py-4">
                 20-4-2022
              </td>
                <td className="border-b border-1 border-box py-5 px-4 ">
                <label
        htmlFor="toggle1"
        className="flex cursor-pointer select-none text-danger items-center"
      >     Disabled
        <div className="relative">
          <input
            type="checkbox"
            id="toggle1"
            className="sr-only "
           
          />
     
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
              enabled && '!right-1 !translate-x-full !bg-white dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
                    </td>
            
        
                  <td className="border-b border-1 border-box py-5 px-4 dark-border-strokedark text-primary">
                  <button onClick={openCategoryEdit} className='w-25 text-center h-9 rounded-full justify-center items-center bg-[#D9DDFA] ' >
                      <svg width="23" height="23" viewBox="0 0 20 20" fill="none" className='ml-9' xmlns="http://www.w3.org/2000/svg" >
<path d="M11.05 3.00002L4.20829 10.2417C3.94996 10.5167 3.69996 11.0584 3.64996 11.4334L3.34162 14.1334C3.23329 15.1084 3.93329 15.775 4.89996 15.6084L7.58329 15.15C7.95829 15.0834 8.48329 14.8084 8.74162 14.525L15.5833 7.28335C16.7666 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2333 1.75002 11.05 3.00002Z" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.90833 4.20825C10.2667 6.50825 12.1333 8.26659 14.45 8.49992" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 18.3333H17.5" stroke="#404EED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                      </button>
                    </td>

          </tr>
      </tbody>
  </table>
</div>
{showUploading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-white rounded-2xl border-box border shadow-2xl">
              <button
                onClick={closeUploading}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
              <div className="p-8">
                <Uploading />
              </div>
            </div>
          </div>
        </div>
      )}
      {showCategoryEdit && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50">
          <div className="relative w-full max-w-lg">
            <div className="relative bg-white rounded-2xl border-box border shadow-2xl">
              <button
                onClick={closeCategoryEdit}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
               <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#CACACA'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
              <div className="p-8">
                <CategoryEdit/>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Table;