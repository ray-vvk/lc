import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/article_category_2/example_2')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/example_2"!</div>
}
