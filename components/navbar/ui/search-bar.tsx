import React from "react";
// import LangSelect from "./language-select";

const SearchBar: React.FC = () => {
  return (
    <>
      <input
        type="text"
        id="search-navbar"
        className="block w-full rounded-3xl bg-transparent p-2 ps-[1.5rem] text-sm text-gray-900 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
        placeholder="SEARCH"
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-[9.75rem]">
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
    </>
  );
};

export default SearchBar;
