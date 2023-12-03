import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Transform = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const [showTransform, setShowTransform] = useState(false); // Corrected variable name
    const navigate = useNavigate();
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
  return (
    <div className="flex bg-white w-100 p-15 flex-col justify-center px-5 py-12 lg:px-8 rounded-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       <h1 className='text-4xl font-black text-meta-3 text-center ml-15'>Create a charge</h1>
      
      </div>
      <br />
      <label htmlFor="">Type</label>
      <div className="text-center relative text-gray-2 h-12 p-2 md:w-100 font-bold border border-box border-1 rounded-lg bg-whiter">
        
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-whiter px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                
              >
                Late Return
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
                  className="absolute right-0 text-gray-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                       Late Return
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Reimbursement
                    </a>
                    <a
                      href="#"
                      className="text-gray-2 block px-4 py-2 text-sm border-b border-box text-center"
                      role="menuitem"
                      tabIndex={-1}
                    >
                      Compensation
                    </a>
                 
                  </div>
                </div>
              )}
            </div>
            <br />
            <label htmlFor="">User</label>
      <input type="text" placeholder='John Doe' className=' text-gray-2 h-10 p-2 md:w-100 font-bold border border-box border-1 rounded-lg bg-whiter' />
      <br />
            <label htmlFor="">Amount</label>
     
      <input type="text" placeholder='$40' className=' text-gray-2 h-10 p-2 md:w-100 font-bold border border-box border-1 rounded-lg bg-whiter' />
      <br />
      <label htmlFor="">Remarks</label>
      <textarea className="resize rounded-md bg-whiter border border-box border-1  w-100 h-30">Lorem Ipsum</textarea>
      <br />
      <div className='justify-center text-center'>
          <button className='w-50 h-15 bg-meta-3 text-white rounded-lg mt-10 ml-14 text-center'>Save</button>
          </div>
    </div>
    
  )
}
