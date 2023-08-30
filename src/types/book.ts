type Rating = {
  id: string;
  rate: number;
};

export type Book = {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  ratings: Rating[];
};
