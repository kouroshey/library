export interface Book {
  id: number;
  title: string;
  author: string;
  publication_year: number;
  genre: string[];
  description: string;
  cover_image: string;
}

export interface BooksListParams {
  query?: string;
}

export interface BookByIdParams {
  id: string;
}
