import type { CollectionEntry } from "astro:content"

export default function ArticleSearch({ articleData }: {
  articleData: CollectionEntry<"articleData">[]
}) {
  return (
    <div>
      {articleData.map(article => <div key={article.id}><a href={`/lc/articles/${article.id}`}>{article.data.title}</a></div>)}
    </div>
  )
}