import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/article_category_1/example_1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/articles/example_1"!</div>
}
