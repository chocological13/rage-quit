import React from "react";
// import LangSelect from "./language-select";

const SearchBar: React.FC = () => {
  return (
    <>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-[1.5rem] text-sm text-gray-900 rounded-3xl bg-transparent dark:bg-gray-700 focus:outline-none dark:placeholder-gray-400 dark:text-white" placeholder="SEARCH" />
      <div className="absolute inset-y-0 start-0 flex items-center ps-[9.75rem] pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
    </>
  );
};

export default SearchBar;
