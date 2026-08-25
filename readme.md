implementation notes

each article will be its own html page. 
i kind of want to be able to render all the articles in code and adjust all the <\head> stuff that way too.
but then i won't have fine grained control over the layout of each webpage that the article will be dropped into. 

hmm... maybe i switch to nextjs ssg, build everything, deploy the bundle on gh pages.

i think here's what i do. each article is its own html page. react is injected into each page into the root div. we'll have like 20-30 articles. kinda tedious but not that tedious. the header and footer and navbar are react. they stay the same mostly. i pass article title and other stuff in as string as props. the article bodies of each article need to be different. specific to each article because each article's layout is different. 

i think i could componentify the simple sections, pass the needed info in as string or maybe as react node. so when i receive an article and put together the webpage, i'm just passing the text in. probably react node so i can pass in <\p>'s and <\a>'s to keep layout. i should make callout its own component. i should make full width table and aside table components, actually full-width section and grid section with aside should be their own components. i should make card row and card their own components. componentify everything and pass in the article's info as react node. 

routing will become an issue. we'll have many articles and i need to keep a homepage that links to all of them, as well as a page so users can browse articles by category. i've always wanted to try out tanstack router. might be the time.

ok, here's the plan i'm settling on. use a routing library for client side navigation. one index.html page. handle seo with dynamic head management. tanstack router it is.
