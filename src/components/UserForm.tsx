import React from 'react';

const SignInForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full md:w-64 rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 md:py-3 md:px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="mb-4">
        <label className="block text-black dark:text-white mb-2.5">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full md:w-10 rounded border-[1.5px] border-stroke bg-transparent py-2 px-3 md:py-3 md:px-4 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>

      <div className="text-center mt-4">
        <button className="w-full md:w-1/2 rounded bg-meta-3 p-3 font-medium text-gray">
          Sign In
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
