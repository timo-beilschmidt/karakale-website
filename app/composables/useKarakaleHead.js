import { createPageHead } from '@/utils/seo';

export function useKarakaleHead(input) {
  useHead(createPageHead(input));
}
