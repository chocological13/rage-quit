import React from "react";

const SignInBtn: React.FC = () => {
  return (
    <>
      <button type="button" className="text-white bg-ragered hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm w-full py-1.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hidden md:block">
        SIGN IN
      </button>
    </>
  );
};

export default SignInBtn;
