import React from 'react';

const Card = () => {
  return (
    <div className='bg-[#EB6A47] lg:w-full md:w-59 rounded-lg h-25 flex space-x-9 md:space-x-5 p-5 mb-4 md:mb-0 mr-5'>
    <div className="flex md:h-11.5 mt-1 md:w-11.5 items-center justify-center  rounded-full rounded-full bg-[#F3A68F] dark:bg-lightblue mb-4 md:mb-0">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="vuesax/linear/receipt-item">
<path id="Vector" d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_3" d="M9 13.01H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_4" d="M9 9.01001H12" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_5" d="M5.99561 13H6.00459" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_6" d="M5.99561 9H6.00459" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

    </div>

    <div className="flex flex-col">
      <h4 className="lg:text-1xl md:text-sm font-bold text-white dark:text-white mb-2">
      Total Rent
      </h4>
      <span className="lg:text-xl font-medium text-white md:text-sm">1</span>
    </div>
  </div>
  );
};

export default Card;

