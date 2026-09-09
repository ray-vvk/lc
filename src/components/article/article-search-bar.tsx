import { articleSearchBarContents } from "../../store"
import { useStore } from "@nanostores/react"

export default function ArticleSearchBar() {
  const search = useStore(articleSearchBarContents)
  return(
    <input type="text" value={search} onChange={(e) => {
      articleSearchBarContents.set(e.target.value)
    }} 
    style={{
      padding: '0.3rem',
      width: '20rem',
    }}
    />
  )
}

