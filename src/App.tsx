import Navbar from "./components/navbar"
import Footer from "./components/footer"
// import ArticleHeader from "./components/article-header"
import owl from ".././images/placeholder_owl.jpg"

function App() {

  return (
    <>
      <Navbar />
      {/* <ArticleHeader /> */}
      <main>
        <section>
          <div className="wrap">
            <h2>Section with some paragraphs</h2>
            <p className="lead">Optional subtitle. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              repellendus?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
              Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
              voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae accusantium
              laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, velit! If you're citing the literature,
              that can be done too (<a href="#123">Athos et al</a>). Like so. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Fugit earum eius hic quasi, possimus laboriosam. Quos dolor perspiciatis inventore
              recusandae?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero velit qui similique quo ipsum modi quos,
              explicabo cupiditate, aliquid nesciunt facere sapiente repellendus asperiores et. Illum quos nulla, earum
              architecto odit qui aliquid mollitia atque saepe voluptatem! Nihil voluptate pariatur, vero quam ratione
              praesentium, nesciunt eos, nulla a id repellendus quaerat laboriosam consequuntur! Rem assumenda numquam
              animi, dolorum ea maiores minus odit. Quod quas provident nisi inventore. Id, porro! Facilis beatae totam
              soluta, optio aspernatur, quis earum temporibus tempora doloremque, labore officia cumque. Suscipit minima,
              ducimus quod culpa harum, voluptates debitis soluta aperiam assumenda inventore tempora? Quibusdam, amet
              provident!</p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>Section with some paragraphs and a graphic</h2>
            <p className="lead">Optional subtitle. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              repellendus?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
              Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
              voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae accusantium
              laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
            <p>Sample text goes here. There is a graphic below this paragraph. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quo possimus modi aliquid in sit, unde molestias eos? Consectetur, est tempora.</p>
            <figure>
              <img src={owl} loading="lazy"
                alt="Side-by-side timeline showing immediate visualization of fluorescent capsid-labeled AAV during attachment, endocytosis, endosomal trafficking and genome release, compared with delayed GFP expression after successful gene delivery." />
              <figcaption><strong>Figure 1.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                delectus accusamus laudantium dolores natus, magnam minus distinctio veritatis dicta quod?</figcaption>
            </figure>
            <p>You may also elect to have more text after the graphic within the same section. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
              Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
              voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae accusantium
              laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div>
              <h2>Section with a callout </h2>
              <p className="lead">Optional subtitle. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
                repellendus?
              </p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quis in modi! Soluta, quas cum fuga, aliquid in
                laudantium hic corporis nobis officiis quisquam, voluptas mollitia blanditiis illo quia deleniti non debitis
                delectus expedita ducimus dolorem quo quos odio? Quam, odit assumenda! Pariatur et distinctio ratione,
                doloribus magni aliquid deleniti totam. Provident, architecto quae sit eius repellendus voluptate quos vero.
              </p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id reiciendis laboriosam soluta
                dolorum, ipsum assumenda dolores rerum nam sequi tempora facere similique possimus ullam! Doloremque id
                explicabo nemo non laborum iure iste placeat voluptatem ut quibusdam assumenda, omnis, totam at dignissimos
                odio molestiae culpa animi error aut facere enim eligendi consectetur? Officia culpa dicta eaque sint
                eligendi. Similique sint ducimus soluta quo illum mollitia adipisci reiciendis repudiandae, optio officiis
                repellendus veritatis voluptate sed consequuntur minima perspiciatis temporibus veniam. Labore corporis,
                explicabo cupiditate dignissimos fugiat delectus numquam qui. Repellat repellendus nulla dolorum ut est in
                delectus, officiis ex asperiores sint?</p>
              <div className="callout">
                <div className="question">Callout contents. A quote, perhaps?</div>
                <div className="question">Or an important statistic from the literature.</div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur iste perferendis fuga hic? Aliquid,
                laboriosam sed inventore suscipit quibusdam nihil. Odio laborum voluptatum quisquam dolore iusto neque
                cumque ullam recusandae. Debitis totam enim laudantium ullam hic laborum, earum similique, eaque, iusto quas
                corporis? Eius nulla ipsa dignissimos harum numquam illo magni error provident tenetur optio vero corrupti
                quasi voluptate, veritatis dolor ducimus, adipisci quis neque suscipit ipsam, dolore labore sequi?
                Laudantium id eum architecto repudiandae porro maxime, vero minima cupiditate nihil molestias. Assumenda non
                aperiam saepe deserunt ipsum vitae consequuntur debitis similique iste perspiciatis eos corrupti, doloribus
                nemo ullam nihil optio dolorum voluptatibus, laborum velit odio cupiditate quisquam ratione. Temporibus
                dolorem vel, accusamus quis ipsa est optio doloremque iusto.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div>
              <h2>Section with a table inline</h2>
              <p className="lead">Optional subtitle. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
                repellendus?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit quas, quod deleniti aspernatur esse aut,
                tempora omnis delectus impedit, blanditiis dignissimos hic tempore atque maxime veritatis. Nihil nulla ut
                explicabo illo exercitationem, sunt commodi ipsum odio ab ullam doloremque enim, rerum voluptas. Iusto quae
                perspiciatis repellendus velit qui quasi est, ducimus iste veniam illo illum odio, dolores blanditiis
                doloribus nemo, quisquam nulla porro eaque incidunt officia corporis sapiente. Unde corporis nisi repellat
                sapiente voluptatum maiores ipsam laboriosam magnam iure architecto. Ea eaque commodi adipisci, quia
                voluptates tempora ipsa iure quidem asperiores autem inventore, facere ex nam in dolorum nemo?</p>
            </div>
            <div className="table-overflower">
              <table className="comparison">
                <thead>
                  <tr>
                    <th>Table header</th>
                    <th>Table header</th>
                    <th>Table header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                  </tr>
                  <tr>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                  </tr>
                  <tr>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <figcaption><strong>Table 1.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              delectus accusamus laudantium dolores natus, magnam minus distinctio veritatis dicta quod?</figcaption>
          </div>
        </section>

        <section>
          <div className="wrap grid">
            <div>
              <h2>Section with a table aside</h2>
              <p className="lead">This section behaves responsively. That is, the layout adjusts appropriately when this webpage
                is viewed on smaller screens. The table goes beneath the paragraphs.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit quas, quod deleniti aspernatur esse aut,
                tempora omnis delectus impedit, blanditiis dignissimos hic tempore atque maxime veritatis. Nihil nulla ut
                explicabo illo exercitationem, sunt commodi ipsum odio ab ullam doloremque enim, rerum voluptas. Iusto quae
                perspiciatis repellendus velit qui quasi est, ducimus iste veniam illo illum odio, dolores blanditiis
                doloribus nemo, quisquam nulla porro eaque incidunt officia corporis sapiente. Unde corporis nisi repellat
                sapiente voluptatum maiores ipsam laboriosam magnam iure architecto. Ea eaque commodi adipisci, quia
                voluptates tempora ipsa iure quidem asperiores autem inventore, facere ex nam in dolorum nemo?</p>
            </div>
            <aside>
              <div className="table-overflower">
                <table className="comparison">
                  <thead>
                    <tr>
                      <th>Table header</th>
                      <th>Table header</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                      <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    </tr>
                    <tr>
                      <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                      <td>Data points. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <figcaption><strong>Table 2.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                delectus accusamus laudantium dolores natus, magnam minus distinctio veritatis dicta quod?</figcaption>
            </aside>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>Section with ordered list and graphic</h2>
            <p className="lead">Optional subtitle. Lorem ipsum dolor sit amet.</p>

            <h3>1. Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem dolorem molestiae libero dolor
              officiis nihil beatae pariatur fuga sed amet voluptatem voluptate recusandae tempora debitis incidunt, laborum
              modi voluptatibus aut exercitationem aliquid distinctio. Perspiciatis obcaecati aliquid suscipit corporis
              culpa.</p>

            <h3>2. Lorem ipsum dolor sit amet consectetur.</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem dolorem molestiae libero dolor
              officiis nihil beatae pariatur fuga sed amet voluptatem voluptate recusandae tempora debitis incidunt, laborum
              modi voluptatibus aut exercitationem aliquid distinctio. Perspiciatis obcaecati aliquid suscipit corporis
              culpa.</p>

            <h3>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita!</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum autem dolorem molestiae libero dolor
              officiis nihil beatae pariatur fuga sed amet voluptatem voluptate recusandae tempora debitis incidunt, laborum
              modi voluptatibus aut exercitationem aliquid distinctio. Perspiciatis obcaecati aliquid suscipit corporis
              culpa.</p>

            <figure>
              <img src={owl} loading="lazy"
                alt="AAV intracellular trafficking diagram showing receptor binding, endocytosis, endosomal trafficking, endosomal escape, transport toward the nucleus, nuclear entry, genome release and transgene expression." />
              <figcaption><strong>Figure 2.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis
                ea facilis dolorem iste fuga eveniet consectetur nobis nostrum. Mollitia?</figcaption>
            </figure>
          </div>
        </section>

        <section>
          <div className="wrap grid">
            <div>
              <h2>Section with graphic aside</h2>
              <p className="lead">Optional subtitle. This section is also responsively designed.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
                Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
                voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae
                accusantium
                laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, velit aliquam. Exercitationem
                praesentium veritatis quaerat rem unde, quam iure vel? Porro, ab, amet qui illum nihil nam ipsam placeat
                omnis ipsa aut neque, provident necessitatibus ad quas eaque quibusdam est.</p>
            </div>
            <aside>
              <figure>
                <img src={owl} loading="lazy"
                  alt="Side-by-side timeline showing immediate visualization of fluorescent capsid-labeled AAV during attachment, endocytosis, endosomal trafficking and genome release, compared with delayed GFP expression after successful gene delivery." />
                <figcaption><strong>Figure 3.</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  delectus accusamus laudantium dolores natus, magnam minus distinctio veritatis dicta quod?</figcaption>
              </figure>
            </aside>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div>
              <h2>Section with cards and callout</h2>
              <p className="lead">Optional subtitle. This section is responsively designed, thanks to CSS grid.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur praesentium voluptates optio quaerat?
                Distinctio, ipsam alias, veniam nobis magnam nisi voluptatem delectus, eos saepe quam ullam modi? Dolores
                voluptatibus iure ipsum molestiae earum odio doloremque dolore iusto, deleniti, sapiente nisi quae
                accusantium
                laboriosam minus temporibus mollitia ut id consequuntur expedita.</p>
              <div className="cards">
                <div className="card">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam aliquid pariatur, provident quia sunt exercitationem omnis nam. Pariatur, non.</p>
                </div>
                <div className="card">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam aliquid pariatur, provident quia sunt exercitationem omnis nam. Pariatur, non.</p>
                </div>
                <div className="card">
                  <h3>Lorem ipsum dolor sit.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam aliquid pariatur, provident quia sunt exercitationem omnis nam. Pariatur, non.</p>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ipsum eos architecto praesentium quae,
                consequuntur voluptatem dolorum ad tempore libero? Itaque tempore vel enim. Fuga quam maiores veritatis
                quasi odio consectetur ab iste necessitatibus blanditiis, eius nihil, ullam animi voluptates asperiores at
                dolor placeat assumenda illum. Ipsum illum quos pariatur doloremque doloribus perferendis. Neque amet
                deleniti officia magni doloremque aperiam!</p>
              <div className="callout">
                <strong>Practical note:</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, tenetur maxime alias ducimus expedita aperiam? Modi unde quae tempore, ipsum molestiae, nobis, odio sequi facere amet placeat vitae minima est labore hic. Similique ratione quibusdam laborum repellendus quia expedita illum velit adipisci accusamus nisi magni, cupiditate molestiae commodi suscipit quisquam?
              </div>
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

        <section className="references">
          <div className="wrap">
            <h2>References</h2>
            <ol>
              <li id="123">Athos E.A., Levinson B., Kistler A., Zemansky J., Bostrom A., Freimer N., Gitschier J. (2007).
                Dichotomy
                and perceptual distortions in absolute pitch ability. Proceedings of the National Academy of Sciences of the
                United States of America, 104(37), 14795–14800.</li>
              <li>Citation name university research institute date et al. names names etc. journal conference etc.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam libero molestiae voluptatem
                consequatur a ipsum hic facere provident porro quas alias ullam, id veritatis deleniti obcaecati
                accusantium! Deleniti, libero.</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
