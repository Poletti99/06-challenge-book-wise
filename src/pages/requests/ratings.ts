import { api } from '@/src/lib/axios';
import { Rating } from '@/src/types';

interface getRatingsResponse {
  ratings: Rating[];
  cursorId: string;
}
export async function getRatings(
  cursorId?: string,
): Promise<getRatingsResponse> {
  const { data } = await api.get<getRatingsResponse>(
    `/ratings?cursorId=${cursorId}`,
  );

  return {
    ratings: data.ratings,
    cursorId: data.cursorId,
  };
}
