import { api } from '@/src/lib/axios';
import { Book } from '@/src/types';

export interface GETBooksAxiosResponse {
  books: Book[];
  cursorId: string;
}

export async function getBooks(
  currentCursorId = '',
  category = '',
): Promise<GETBooksAxiosResponse> {
  const {
    data: { books, cursorId },
  } = await api.get<GETBooksAxiosResponse>('/books', {
    params: {
      cursorId: currentCursorId,
      category,
    },
  });

  return {
    books,
    cursorId,
  };
}
