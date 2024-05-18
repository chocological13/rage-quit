import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar: React.FC = () => {
  return (
    <div className="relative flex flex-col">
      <input
        type="text"
        id="search-navbar"
        className="relative block w-full rounded-3xl bg-navsearch p-2 ps-[1.5rem] text-sm text-gray-400 focus:outline-none dark:bg-gray-700 dark:placeholder-gray-400"
        placeholder="SEARCH"
      />
      <div className="pointer-events-none absolute inset-y-0 end-5 flex items-center md:ps-[9rem]">
        <SearchIcon className="text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
