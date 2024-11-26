import React from "react";
import { Book } from "../api/models";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "@/components/button/button";
import { routes } from "@/constants/routes";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-xl shadow-md transition-all duration-300 p-4 w-full",
        "md:flex-row md:p-6",
        "hover:shadow-xl",
      )}
    >
      <div
        className={cn(
          "w-full relative min-h-[150px] rounded-lg overflow-hidden",
          "md:w-1/4",
        )}
      >
        <Image
          src={book.cover_image}
          alt={book.title}
          fill
          className={cn(
            "object-cover hover:scale-105 transition-transform duration-300",
          )}
        />
      </div>
      <div
        className={cn(
          "flex flex-col justify-between w-full px-4",
          "md:px-6 md:w-3/4",
        )}
      >
        <div>
          <h3
            className={cn(
              "text-gray-800 mb-2 transition-colors",
              "md:text-2xl hover:text-primary",
              "text-xl font-bold",
            )}
          >
            {book.title}
          </h3>
          <span
            className={cn(
              "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-3",
              "text-sm font-medium",
            )}
          >
            {book.genre}
          </span>
          <p
            className={cn("text-gray-600 leading-relaxed text-sm md:text-base")}
          >
            {book.description}
          </p>
        </div>
        <div
          className={cn(
            "mt-4 w-full space-y-2",
            "flex flex-col md:flex-row items-center justify-between",
          )}
        >
          <div
            className={cn(
              "flex items-center flex-col space-y-2 w-full",
              "md:flex-row md:space-x-4",
            )}
          >
            <Button
              asLink
              href={`${routes.books}/${book.id}`}
              className="rounded-lg text-sm w-full md:w-max"
            >
              View Details
            </Button>
          </div>
          <span className="text-xs md:text-sm text-gray-500 text-nowrap">
            published: {book.publication_year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
