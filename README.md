# Atrocity Exhibipsum
## Ballardian Placeholder Text Generator

### What is it?
Atrocity exhibipsum is a placeholder text generator - it uses the top 1500 or so most used words in J.G. Ballard's _The Atrocity Exhibition_ to build paragraphs of postmodern gibberish. 

You can view the demo at http://davidbiddle.co.uk/atrocity-exhibipsum.

### Running it locally
You can get it by cloning the repo into the directory of your choice from the command line:

`git clone https://github.com/DavidBiddle/atrocity-exhibipsum.git yourfoldername`

Make sure you're running an HTTP server on your computer - the script uses an [Ajax call](https://en.wikipedia.org/wiki/Ajax_(programming)) to get the wordlist and you'll fall foul of the [same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy) if you aren't, and then the next step wont work. All you'll be left with is a pretty webpage with a completely useless form on it. 

Now just navigate to the directory where you cloned the repo earlier in any modern browser. Wa-HEY! You're up and running.

### Licensing
MIT Licensed.
