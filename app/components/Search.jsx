"use client";
import searchImage from "@/public/search.svg";
import Image from "next/image";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";

const Search = ({ docs }) => {
  const [searchResult, setSearchResult] = useState([]);
  const [term, setTerm] = useState("");
  const router = useRouter();


  function handleChange(event) {
    const value = event.target.value;
    setTerm(value);
    doSearch(value);
  }
     
  const doSearch = useDebounce((term) => {
    const found = docs.filter((doc) => {
      return doc.title.toLowerCase().includes(term.toLowerCase());
    });      
    console.log(found);
    setSearchResult(found);
  }, 500);

  function closeSearchResult(event) {
    event.preventDefault();
   // setSearchResult([]);
    router.push(event.target.href);
    setTerm("");
  }

  return (
    <>
      <div className="lg:block lg:max-w-md lg:flex-auto">
        <button
          type="button"
          className="focus:[&amp;:not(:focus-visible)]:outline-none hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover-ring-white/20 lg:flex"
        >
          <Image
            src={searchImage}
            alt="Search"
            className="h-5 w-5"
            width={50}
            height={50}
          />
   
          <input
            type="text"
            placeholder="Search"
            value={term}
            placeholder="Search"
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none"
          />
        </button>
      </div>

      {term && term.trim().length > 0 && (
        <SearchResult
          results={searchResult}
          term={term}
          closeSearchResult={closeSearchResult}
        />
      )}
    </>
  );
};

export default Search;
