"use client";

import { getBookById } from "../api/booksApi";
import { Book, BookByIdParams } from "../api/models";
import useSWR, { Fetcher } from "swr";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Loader from "@/components/loader/Loader";
import ArrowLeftIcon from "@/components/icons/arrow-left";
import Link from "next/link";
import { routes } from "@/constants/routes";

const BookDetails = ({ params }: { params: { id: string } }) => {
  const fetcher: Fetcher<Book, BookByIdParams> = (params) =>
    getBookById(params);
  const { data: book, isLoading } = useSWR<Book>(`api/books/${params.id}`, () =>
    fetcher({ id: params.id }),
  );

  return (
    <div
      className={cn(
        "flex flex-col w-full mx-auto bg-gray-50 rounded-lg shadow-md p-6 h-full",
        "md:w-[80%] lg:w-[60%] md:my-10",
      )}
    >
      <div className="flex flex-col gap-4 mb-6 w-full items-center relative">
        <div className="absolute left-0 top-1">
          <Link
            href={routes.books}
            className={cn(
              "flex items-center gap-1 transition-colors duration-300",
              "text-gray-700 hover:text-primary text-sm md:text-md",
            )}
          >
            <ArrowLeftIcon />
            <p className="heading-sm">Back</p>
          </Link>
        </div>
        <h1 className="text-primary text-center text-2xl md:text-4xl font-bold">
          Book Details
        </h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : !book ? (
        <div className="flex justify-center p-8 text-gray-600">
          Book not found
        </div>
      ) : (
        <div className="flex flex-col w-full mx-auto p-6 md:mt-10">
          <div
            className={cn(
              "flex flex-col bg-white rounded-xl shadow-md p-4",
              "md:flex-row md:p-6",
            )}
          >
            {/* Book Cover */}
            <div
              className={cn(
                "w-full relative min-h-[300px] rounded-lg overflow-hidden",
                "md:w-1/3",
              )}
            >
              <Image
                src={book.cover_image || "/images/image-placeholder.webp"}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Book Details */}
            <div
              className={cn(
                "flex flex-col w-full mt-4",
                "md:mt-0 md:w-2/3 md:px-6",
              )}
            >
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {book.title}
              </h1>
              <div className="space-y-4">
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-gray-700">
                    Author:
                  </span>
                  {book.author}
                </p>
                <p className="text-lg">
                  <span className="font-semibold mr-2 text-gray-700">
                    Publication Year:
                  </span>
                  {book.publication_year}
                </p>
                <div>
                  <span className="font-semibold block mb-2 text-gray-700">
                    Genres:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {book.genre?.map((genre) => (
                      <span
                        key={genre}
                        className={cn(
                          "inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full",
                          "text-sm font-medium",
                        )}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="font-semibold block mb-2 text-gray-700">
                    Description:
                  </span>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
