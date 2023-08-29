import dayjs from '@/src/lib/dayjs';

export function formatDate(date: string, withoutSufix = false) {
  return dayjs(date).fromNow(withoutSufix);
}
