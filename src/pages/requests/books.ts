import { api } from '@/src/lib/axios';
import { Book } from '@/src/types';

export interface GETBooksAxiosResponse {
  books: Book[];
  cursorId: string;
}

export async function getBooks(
  currentCursorId: string,
): Promise<GETBooksAxiosResponse> {
  const {
    data: { books, cursorId },
  } = await api.get<GETBooksAxiosResponse>(
    `/books?cursorId=${currentCursorId}`,
  );

  return {
    books,
    cursorId,
  };
}
