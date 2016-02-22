## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>

## First steps
Researched automation and build tools for js, css and image optimization. Decided to try Gulp this time as I had already tried Grunt in a previous project.
* Created src and dist folders, moved all initial code to src
* Created .gitignore file
* Created package.json file using npm init
* Created gulpfile.js (as outlined in udacity webcast and published in forum - see resources)
* installed suggested packages
* edited gulpfile.js to suit project directory structure
* add image optimization to gulpfile
* edited gulpfile to use browser sync
## Part 1: Optimize PageSpeed Insights score for index.html
### Actions - Part 1
* Part 1 measure performance
* Optimized images
* dealt with render-blocking JavaScript and CSS in above-the-fold content
* Achieved PageScore targets of 94 for Mobile and 96 for DeskTop
### Initial results
Used PageSpeed Insights running ngrok on source index.html
##### Desktop
30 / 100 Suggestions Summary
Should Fix:
* Optimize images
Consider Fixing:
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
* Leverage browser caching
* Enable compression
* Minify HTML
##### Mobile
28 / 100 Speed
Should Fix:
* Optimize images
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
Consider Fixing:
* Leverage browser caching
* Enable compression
* Minify HTML
100 / 100 User Experience

PageSpeed Insights supplied optimized image, js and css resources for download.

### Optimizations:
1 - use image files generated by PageSpeed Insights and measure again. Optimized images copied to corresponding directories in dist folder. Have renamed pizzeria to pizzeria-small in case I need something different for part 2.

#### Results
##### Desktop
90 / 100 Suggestions Summary
Consider Fixing:
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
* Leverage browser caching
* Enable compression
* Minify HTML
##### Mobile
77 / 100 Speed
Should Fix:
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
Consider Fixing:
* Leverage browser caching
* Enable compression
* Minify HTML

2 - deal with render-blocking JavaScript and CSS in above-the-fold content

JS
Moved scripts to bottom of html
Added async to analytics.js link to remove from critical path
Added script to call google fonts

CSS
Added media attribute to print.css link to remove from critical path
Minified and inlined critical css in html file (used Critical Path CSS Generator by Jonas Ohlsson)

#### Results:
##### Desktop
95 / 100 Suggestions Summary

##### Mobile
94 / 100 Speed

Extra Fixes

3 - Specify Image sizes.
##### Desktop
95 / 100 Suggestions Summary

##### Mobile
94 / 100 Speed

4 - Minify scripts and styles (inline and link to minified files in dist folder) Note, the PageSpeed score went down for mobile, this is due to the source mapping function in the gulpfile (which caused a minify JS suggestion from PageSpeed) :( but I thought it was worth keeping in.

##### Desktop
95 / 100 Suggestions Summary
96 / 100 without source mapping

##### Mobile
93 / 100 Speed
94 / 100 without source mapping

5 - minify html file and image optimization - see dist folder for minified version of index.html and src folder for readable version

Results
##### Desktop
96 / 100 Suggestions Summary
with and without source mapping

##### Mobile
94 / 100 Speed
with and without source mapping

## Part 2: Optimize Frames per Second in pizza.html
### Actions - Part 2
* Used Chrome Devtools for analysis
* Identified two functions that caused forced reflow
* Resize Fix1- Removed unnecessary function determineDx and Moved DOM node selection out of resize loop
* Optimize images and minify dist folder
### Initial results
#### Console messages from Timing API
Time to generate pizzas on load: 19.01 ms
Avg time (ms) to generate last 10 frames: 37.4, 29.8, 29.4, 28.5, 27.6
Time (ms) to resize Pizzas: 81.1, 82.6, 105.9, 109.6, 84.9
#### Initial load
First Paint: 5.29s
DOMContentLoaded: 5.6s
Load Event: 6.12s
#### Initial resize
fps: 5
Frame time (ms): 173.9
Summary   | Time   | Self Time
---------------------------
mouseup   | 151.49 | 0.03
change    | 151.45 | 1.27
func call | 150.19 | 1.05
onchange  |  25.19 | 0
resizePiz |  25.19 | 0
changePiz |  25.19 | 2.17
determDx  |   2.16 | 0.44
*Forced reflow is a likely performance bottleneck.*
due to repeated calls to Recalculate Styles and Layout

#### resize Fix1
fps: 23
Frame time (ms): 41.9
Summary   | Time   | Self Time
---------------------------
mouseup   | 2.62 | 0.04
change    | 2.57 | 0.08
func call | 2.49 | 0.9
onchange  | 1.59 | 0
resizePiz | 1.59 | 0.93

*Recalc style now followed by Layout once only.*
Recalc Style |  1.43 | 1.43 | 200 elements
Layout       | 16.0  | 16.0 | 115 nodes


#### Initial Scroll
Frames per second: 17.9, 18.6, 17.9, 13.7, 18.6
Frame time (ms): 148.5, 68.5, *69.3*, 69.2, 67.3
Summary   | Time  | Self Time
---------------------------
Scroll    | 60.97 | 0.09
func call | 60.87 | 0.14
updatePos | 60.73 | *29.70*
*Forced reflow is a likely performance bottleneck.*


### TODO and next steps
* Fix Forced reflow problems on scroll
* host on gh-pages
* reduce number of images
* optimize images

### Resources
* https://docs.npmjs.com/getting-started/using-a-package.json
* https://discussions.udacity.com/t/1-8-2016-project-structure-for-front-end-projects-webcast/
* http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp
* https://jonassebastianohlsson.com/criticalpathcssgenerator/
