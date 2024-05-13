import React from "react";

const SignInBtn: React.FC = () => {
  return (
    <>
      <button
        type="button"
        className="mb-2 me-2 hidden w-full rounded-full bg-ragered py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 md:block dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        SIGN IN
      </button>
    </>
  );
};

export default SignInBtn;
