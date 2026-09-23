import type { CollectionEntry } from "astro:content";

/**
 * sort article array so recent (pub date) is first
 * @param articleData array of articles from content collection
 */
export function sortRecentFirst(articleData: CollectionEntry<"articleData">[]) {
  const sortedArticleData = articleData.toSorted((a, b) => {
    if (a.data.pubDate < b.data.pubDate) return 1;
    if (a.data.pubDate > b.data.pubDate) return -1;
    return 0;
  })
  return sortedArticleData
}