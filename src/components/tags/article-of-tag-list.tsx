import type { CollectionEntry } from "astro:content";
import { articleSortType } from "../../store";
import { useStore } from "@nanostores/react";

export default function ArticleOfTagList({ articlesOfTag }: {
  articlesOfTag: (CollectionEntry<"articleData"> | undefined)[]
}) {
  const $articleSortType = useStore(articleSortType)
  let articlesToBeShown = articlesOfTag

  if (articlesToBeShown.length === 0) {
    return <div><p style={{ color: "var(--muted)" }}>There are no articles associated with this tag.</p></div>
  }

  if ($articleSortType === "pubDate-a") {
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.pubDate < b.data.pubDate) return -1
        if (a.data.pubDate > b.data.pubDate) return 1
        return 0
      }
      return -1
    })
  } else if ($articleSortType === "pubDate-d") {
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.pubDate < b.data.pubDate) return 1
        if (a.data.pubDate > b.data.pubDate) return -1
        return 0
      }
      return -1
    })
  } else if ($articleSortType === "updatedDate-a") {
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.updatedDate < b.data.updatedDate) return -1
        if (a.data.updatedDate > b.data.updatedDate) return 1
        return 0
      }
      return -1
    })
  } else if ($articleSortType === "updatedDate-d") {
    articlesToBeShown.sort((a, b) => {
      if (a && b) {
        if (a.data.updatedDate < b.data.updatedDate) return 1
        if (a.data.updatedDate > b.data.updatedDate) return -1
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


