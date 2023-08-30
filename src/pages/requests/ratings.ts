import { api } from '@/src/lib/axios';
import { Rating } from '@/src/types';

export interface getRatingsResponse {
  ratings: Rating[];
  cursorId: string;
}
export async function getRatings(
  cursorId?: string,
  userId: string = '',
): Promise<getRatingsResponse> {
  const { data } = await api.get<getRatingsResponse>(
    `/ratings?cursorId=${cursorId}`,
    {
      params: {
        userId,
      },
    },
  );

  return {
    ratings: data.ratings,
    cursorId: data.cursorId,
  };
}
