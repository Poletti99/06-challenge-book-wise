import { Book } from './book';

export type Rating = {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book: Book;
  user: {
    name: string;
    id: string;
    avatar_url: string;
  };
};
