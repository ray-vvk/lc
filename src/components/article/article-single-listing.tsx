import type { CollectionEntry } from "astro:content"
import styles from "../../styles/components/article-single-listing-wrapper.module.css"

export default function ArticleSingleListing({ article }: {
  article: CollectionEntry<"articleData">
}) {
  // because the pubDate is midnight UTC and what gets shown here is the result of showing it in our browser's time zone, we need to add some hours (10 just to be safe) to it to show the right date.
  const pubDateAdjusted = new Date(article.data.pubDate.getTime() + 10 * 60 * 60 * 1000)
  const f = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  })
  return (
    <>
      <a className={styles.link} href={`/lc/articles/${article.id}`}>
        <div className={styles.card}>
          <div className={styles.title}>{article.data.title}</div>
          <div className={styles.notTitle}>
            {article.data.subtitle ? <div className={styles.subtitle}>{article.data.subtitle}</div> : null}
            <div className={styles.author}>{article.data.author}</div>
            <div className={styles.pubDate}>Published {f.format(pubDateAdjusted)}</div>
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