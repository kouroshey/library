"use server";

import appConfig from "@/config/appConfig";
import { Book, BookByIdParams, BooksListParams } from "./models";

export const getBooksList = async ({
  query,
}: BooksListParams): Promise<Book[]> => {
  const url =
    `${appConfig.baseUrl}` +
    (query && query.length > 0 ? `?search=${query}` : "");

  const res = await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });

  return res;
};

export const getBookById = async ({ id }: BookByIdParams): Promise<Book> => {
  const url = `${appConfig.baseUrl}` + `/${id}`;

  const res = await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      return [];
    });

  return res;
};
