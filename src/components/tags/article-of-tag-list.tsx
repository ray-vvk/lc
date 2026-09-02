import type { CollectionEntry, InferEntrySchema, RenderedContent } from "astro:content";
import { articleSortType } from "../../store";
import { useStore } from "@nanostores/react";

export default function ArticleOfTagList({ articlesOfTag }: {
  articlesOfTag: (CollectionEntry<"articleData"> | undefined)[]
}) {
  const $articleSortType = useStore(articleSortType)
  let articlesToBeShown = articlesOfTag

  if ($articleSortType === "pubDate") {
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.pubDate < b.data.pubDate) return -1
        if (a.data.pubDate > b.data.pubDate) return 1
        return 0
      }
      return -1
    })
  } else { // alphabetical is the default choice
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.title < b.data.title) return -1
        if (a.data.title > b.data.title) return 1
        return 0
      }
      return -1
    })
  }


  // articleSortType.subscribe(sort => {
  //   switch (sort) {
  //     case "alphabetical":
  //       articlesToBeShown.sort((a, b) => {
  //         if (a && b) {
  //           if (a.data.title < b.data.title) return -1
  //           if (a.data.title > b.data.title) return 1
  //           return 0
  //         }
  //         return -1
  //       })
  //       break;
  //     case "pubDate":
  //       articlesToBeShown.sort((a, b) => {
  //         if (a && b) {
  //           if (a.data.pubDate < b.data.pubDate) return -1
  //           if (a.data.pubDate > b.data.pubDate) return 1
  //           return 0
  //         }
  //         return -1
  //       })
  //       break;
  //     default:
  //       break;
  //   }
  // })

  return (
    <div>
      {
        articlesToBeShown
          ? articlesToBeShown.map((article, i) => (
            <div key={i}>
              <a href={`/lc/articles/${article?.id}`}>{article?.data.title}</a>
            </div>
          ))
          : "There are no articles associated with this tag."
      }
    </div>

  )
}


