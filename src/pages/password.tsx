import React, { useState, useEffect } from 'react';
import unsplash from '../assets/Screen Shot 2023-11-05 at 1.27.00 PM.png';
import { Outlet, Link } from "react-router-dom";

const Password = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="flex justify-center mt-30">
      <div className={`rounded shadow-2xl transform ${showContent ? 'scale-100' : 'scale-75'} transition-transform ease-in-out duration-500`}>
      <img
  src={unsplash}
  alt="Description of the image"
  width={500}
  height={100}
  className={`rounded hidden lg:block`}
/>
      </div>
      <div className={`form shadow shadow-2xl rounded flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white transition-opacity ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`sm:mx-auto sm:w-full sm:max-w-sm mt-10 transition-opacity ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold leading-9 tracking-tight text-gray-800">Forgot Password</h2>
        </div>
        <div className={`mt-10 sm:mx-auto sm:w-full sm:max-w-sm transition-opacity ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-2 transition-opacity ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}">Email</label>
              </div>
              <div className="mt-2">
                <input
                  id="email"
                  name="Email"
                  type="email"
                  autoComplete="current-password"
                  required
                  className={`bg-bodydark text-black outline-none p-10 block w-full  opacity-30 border border-body border-2 rounded-xl border-0 p-3 shadow-inner placeholder-gray-400 focus:ring-primary sm:text-sm sm:leading-6`}
                  // style={{ outlineColor: themes.stroke }}
                />
              </div>
            </div>
            <div className={`transition-opacity ease-in-out duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
            <button type="submit" className={`text-white tracking-wider  flex w-full justify-center rounded-md bg-meta-3 px-7 py-4 text-sm font-semibold leading-6 text-${themes.white} shadow-sm hover:bg-${themes.primary} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}>Recover Password</button>
            <br />
            <Link to={`/`} className={`mt-10 text-sm text-meta-3 tracking-wider bold `}>Back to login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
