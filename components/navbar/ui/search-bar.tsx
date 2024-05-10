import React from "react";
// import LangSelect from "./language-select";

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* <div>
        <LangSelect />
      </div> */}
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <span className="sr-only">Search</span>
      </button>
      <div className="relative hidden md:block">
        <input type="text" id="search-navbar" className="block w-full p-2 ps-[1.5rem] text-sm text-gray-900 rounded-3xl bg-navsearch dark:bg-gray-700 focus:outline-none dark:placeholder-gray-400 dark:text-white" placeholder="SEARCH" />
        <div className="absolute inset-y-0 start-0 flex items-center ps-[9.75rem] pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
