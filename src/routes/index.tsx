import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main>
      <section>
        <div className="wrap">
          <h1>example homepage.</h1>
          <p className="lead">Optional subtitle. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            repellendus?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
            Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
            voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae accusantium
            laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Links to articles</h2>
          <p>Links to articles go here eventually. They'll look better, too.</p>
          <div>
            <Link to="/articles/article_category_1/example_1" className="[&.active]:font-bold">
              Example article 1
            </Link>
          </div>
          <div>
            <Link to="/articles/article_category_2/example_2" className="[&.active]:font-bold">
              Example article 2
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Section with call-to-action</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur assumenda voluptatum sit nulla
            voluptates officia at, animi possimus dolore quos iste libero eos quas quo facilis, minus optio ipsa!
            Necessitatibus dignissimos iste sapiente illum vero eligendi beatae accusantium laboriosam minima unde?
            Blanditiis ad harum reprehenderit fuga doloribus ratione distinctio quis?</p>

          <div className="cta">
            <h2>Call to action title?</h2>
            <p>Virovek provides high-titer AAV manufacturing, custom vector production and precision capsid engineering
              for research and development programs. Discuss fluorescent capsid labeling, reporter-vector design, serotype
              selection or a custom AAV study with our scientific team.</p>
            <div className="actions">
              <a className="btn secondary" target="_blank" rel="noreferrer" href="https://store.virovek.com/">Browse Premade
                AAV Products</a>
              <a className="btn secondary" target="_blank" rel="noreferrer"
                href="https://store.virovek.com/forms/custom">Request a Custom AAV Quote</a>
              <a className="btn secondary" target="_blank" rel="noreferrer" href="mailto:info@virovek.com">Email the team</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}