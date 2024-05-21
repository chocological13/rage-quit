import React from "react";
import Modal from "@/components/modal";

const SignInBtn: React.FC = () => {
  const button = (
    <button
      type="button"
      className="mb-2 me-2 w-full rounded-full bg-ragered py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 md:block"
      aria-label="sign in button"
    >
      SIGN IN
    </button>
  );

  return (
    <Modal
      el={button}
      title="Uh oh.. :("
      desc="This feature isn't available yet, please check back soon!!"
    />
  );
};

export default SignInBtn;
