markdown data goes in this directory.
it gets taken in by astro's content collections APIs and then used elsewhere.

tag name ought to be pretty. Full-Stack Development.
it will get lowercased and hyphenated when processed later on. 



steps to take for readying an article: 
* get the frontmatter right
* paste in the references, wrap each line in a li tag with id's as reference-1 reference-2 increasing 
  * references must be in APA format.
  * use emmet to generate a bunch of li's with those id's. it's `li[id="reference-$"]*50`.
* ctrl-f regex to find all the standalone numbers, they're the in-text references
  * `for period before digit: \.\d`
  * `for space before digit: \s\d `
  * `for period and then 0 or more spaces before digit: \.\s?\d `
* two lines between all the paragraphs. that means get to the last word, do a line break, then do another line break. 
* ensure formatting generally (bold, italics, etc.) matches 
