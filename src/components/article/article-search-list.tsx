import type { CollectionEntry } from "astro:content"
import { articleSearchBarContents } from "../../store"
import { useLoadingStore, useStore } from "@nanostores/react"
import Fuse from "fuse.js"
import { useMemo } from "react"

export default function ArticleSearch({ articleData }: {
  articleData: CollectionEntry<"articleData">[]
}) {
  const search = useStore(articleSearchBarContents)
  const fuse = useMemo(() => {
    return new Fuse(articleData, {
      keys: ['id', 'data.title'],
      threshold: 0.4
    })
  }, [])
  const searchResults = fuse.search(search)

  if (search) { // if user is searching for anything
    if (searchResults.length > 0) { // if there are search results
      return (
        <div>
          {searchResults.map(searchResult => <div key={searchResult.item.id}><a href={`/lc/articles/${searchResult.item.id}`}>{searchResult.item.data.title}</a></div>)}
        </div>
      )
    } else { // no results
      return (
        <div>
          No articles matched your search query.
        </div>
      )
    }
  }
  // if user is not searching for anything
  return ( // show all articles
    <div>
      {articleData.map(article => <div key={article.id}><a href={`/lc/articles/${article.id}`}>{article.data.title}</a></div>)}
    </div>
  )
}