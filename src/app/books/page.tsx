"use client";

import React, { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";
import { getBooksList } from "./api/booksApi";
import { Book, BooksListParams } from "./api/models";
import Loader from "@/components/loader/Loader";
import SearchIcon from "@/components/icons/search";
import Input from "@/components/input/input";
import BookCard from "./_components/BookCard";
import { cn } from "@/lib/utils";

const BooksPage = () => {
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  const fetcher: Fetcher<Book[], BooksListParams> = (params) =>
    getBooksList(params);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  const { data, isLoading } = useSWR<Book[]>(
    `api/books?search=${debouncedQuery}`,
    () => fetcher({ query: debouncedQuery }),
  );

  return (
    <div
      className={cn(
        "flex flex-col w-full mx-auto bg-gray-50 rounded-lg shadow-md p-6",
        "md:w-[80%] lg:w-[60%] md:mt-10",
      )}
    >
      {/* title and searchbar*/}
      <div className="flex flex-col gap-4 mb-6 w-full items-center">
        <h1 className="text-primary text-center text-4xl font-bold">
          Online Library
        </h1>
        <div className="relative md:w-96">
          <Input
            name="search"
            onError={() => {}}
            placeholder="Search..."
            type="text"
            value={query}
            setValue={setQuery}
            icon={<SearchIcon />}
          />
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <div className="flex flex-col gap-4">
          {data.length > 0 ? (
            data.map((book) => <BookCard key={book.id} book={book} />)
          ) : isLoading ? (
            <Loader />
          ) : (
            <p className="text-center text-gray-600">
              There are no books to show.
            </p>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BooksPage;
