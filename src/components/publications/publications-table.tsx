import styles from "../../styles/components/publications-tbody.module.css"

export default function PublicationsTable({ count, publicationData }: {
  count: number
  publicationData: {
    "Article:": string;
    "Link:": string;
    "Year Published:": string;
    "Lot Number:": string;
    "Summary:": string;
  }[]
}) {
  const dataToDisplay = publicationData
  if (count > 0) {
    const removeNumber = dataToDisplay.length - count;
    for (let i = 0; i < removeNumber; i++) {
      const length = dataToDisplay.length;
      const r = Math.floor(Math.random() * length);
      dataToDisplay.splice(r, 1)
    }
  }
  return (<>
    <table className="comparison">
      <thead>
        <tr>
          <th>Publication title</th>
          <th>Year published</th>
        </tr>
      </thead>
      <tbody>
        {
          dataToDisplay.map((pub, i) => {
            const articleTitle = pub["Article:"];
            const articleLink = pub["Link:"];
            const articleYear = pub["Year Published:"]
              ? pub["Year Published:"]
              : "N/A";

            return (
              <tr key={i}>
                <td>
                  {articleLink.includes("https") ? (
                    <div className={`${styles.publication} ${styles.publicationLink}`}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={articleLink}
                      >
                        {articleTitle}
                      </a>
                    </div>
                  ) : (
                    <div className={styles.publication}>
                      <span>{articleTitle}</span>
                    </div>
                  )}
                </td>
                <td>{articleYear}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  </>)
}