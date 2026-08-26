export default function ArticleHeader({ title, subtitle, category }: {
  title: React.ReactNode
  subtitle: React.ReactNode
  category: React.ReactNode
}) {
  return (
    <header>
      <div className="wrap">
        <div className="eyebrow">{category}</div>
        <h1>{title}</h1>
        <p className="dek">{subtitle}</p>
      </div>
    </header>
  )
}