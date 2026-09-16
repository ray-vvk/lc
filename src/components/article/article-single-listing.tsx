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
          </div>
        </div>
      </a>
    </>
  )
}