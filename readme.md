implementation notes

each article will be its own html page. 
i kind of want to be able to render all the articles in code and adjust all the <head> stuff that way too.
but then i won't have fine grained control over the layout of each webpage that the article will be dropped into. 

hmm... maybe i switch to nextjs ssg, build everything, deploy the bundle on gh pages.

i think here's what i do. each article is its own html page. react is injected into each page into the root div. we'll have like 20-30 articles. kinda tedious but not that tedious. the header and footer and navbar are react. they stay the same mostly. i pass article title and other stuff in as string as props. the article bodies of each article need to be different. specific to each article because each article's layout is different. 

i think i could componentify the simple sections, pass the needed info in as string or maybe as react node. so when i receive an article and put together the webpage, i'm just passing text in as string for those. 