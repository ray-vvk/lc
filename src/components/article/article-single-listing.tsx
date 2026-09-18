import type { CollectionEntry } from "astro:content"
import styles from "../styles/components/article-single-listing-wrapper.module.css"

export default function ArticleSingleListing({ article }: {
  article: CollectionEntry<"articleData">
}) {
  return (
    <>
      <a className={styles.link} href={`/lc/articles/${article.id}`}>
        <div className={styles.card}>
          <div className={styles.title}>{article.data.title}</div>
          <div className={styles.notTitle}>
            {article.data.subtitle ? <div className={styles.subtitle}>{article.data.subtitle}</div> : null}
            <div className={styles.author}>{article.data.author}</div>
            <div className={styles.pubDate}>Published {article.data.pubDate.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}</div>
            <div className={styles.tags}>Tags: {article.data.tags.map((tag, i, tags) => i === tags.length - 1 ? tag : `${tag}, `)}</div>
            <div className={styles.keywords}>
              {article.data.keywords ? "Keywords: " : null}
              {article.data.keywords
                ? article.data.keywords.map((kw, i, kws) => i === kws.length - 1 ? kw : `${kw}, `)
                : null}
            </div>
          </div>
        </div>
      </a>
    </>
  )
}