# Website Performance Optimization portfolio project

The challenge was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

The optimized portfolio can be viewed and tested here: http://cajoue.github.io/frontend-nanodegree-mobile-portfolio

To review the code, check out the repository

### more ways to view the project:

1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```
Then open a browser and visit localhost:8080

2. To make your local server accessible remotely, download and install [ngrok](https://ngrok.com/).

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

Then copy the public URL ngrok gives you and test it using [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)! 
Or you could profile the gh-pages version: [frontend-nanodegree-mobile-portfolio](http://cajoue.github.io/frontend-nanodegree-mobile-portfolio)

### repo folders: src and dist
The __src__ folder contains readable project files, that show optimizations and their explanations.
The __dist__ folder contains files that have been further optimized (minified and stripped of comments). Performance was assessed using the __dist__ files

## First steps
Having read the [evaluation guidelines](https://www.udacity.com/course/viewer#!/c-nd001/l-2735848561/m-2686388535) I researched automation and build tools for js, css and image optimization. Decided to try Gulp this time as I had already tried Grunt in a previous project.
* Created src and dist folders, moved all initial code to src
* Created .gitignore file
* Created package.json file using npm init
* Created gulpfile.js (as outlined in udacity webcast and published in forum - see resources)
* installed suggested packages
* edited gulpfile.js to suit project directory structure
* add image optimization to gulpfile
* add browser sync to gulpfile
* add set-up gh-pages to gulpfile


## Part 1: Optimize PageSpeed Insights score for index.html

View and measure optimized pages here: http://cajoue.github.io/frontend-nanodegree-mobile-portfolio/

Aim to optimize the PageSpeed Insights score for index.html to 90 or higher

### Actions - Part 1
* Measured performance
* Optimized images
* Dealt with render-blocking JavaScript and CSS in above-the-fold content
* Achieved PageScore targets of 94 for Mobile and 96 for DeskTop

### Initial results
Used PageSpeed Insights running ngrok on source index.html

#### Desktop

__30 / 100__ Suggestions Summary

`_Should Fix:_
* Optimize images
_Consider Fixing:_
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
* Leverage browser caching
* Enable compression
* Minify HTML

#### Mobile

__28 / 100__ Speed

_Should Fix:_
* Optimize images
* Eliminate render-blocking JavaScript and CSS in above-the-fold content
_Consider Fixing:_
* Leverage browser caching
* Enable compression
* Minify HTML

__100 / 100__ User Experience

PageSpeed Insights supplied optimized image, js and css resources for download.

### Optimizations:
* Use image files generated by PageSpeed Insights and measure again. Optimized images copied to corresponding directories in dist folder. Have renamed pizzeria to pizzeria-small in case I need something different for part 2 

_Results_

__90 / 100 Desktop__ 

__77 / 100 Mobile__

Simply optimizing the images provided a huge boost in performance.

* Deal with render-blocking JavaScript and CSS in above-the-fold content

JS
Moved scripts to bottom of html
Added async to analytics.js link to remove from critical path
Added script to call google fonts

CSS
Added media attribute to print.css link to remove from critical path
Minified and inlined critical css in html file (used Critical Path CSS Generator by Jonas Ohlsson)

_Results:_

__95 / 100 Desktop__

__94 / 100 Mobile__

#### Extra Fixes

* Specify Image sizes.

__95 / 100 Desktop__

__94 / 100 Mobile__

* Minify scripts and styles (inline and link to minified files in dist folder)_Note_, the PageSpeed score went down for mobile, this is due to the source mapping function in the gulpfile (which caused a minify JS suggestion from PageSpeed) :( but I thought it was worth keeping in.

__Desktop__

95 / 100

96 / 100 without source mapping

__Mobile__

93 / 100

94 / 100 without source mapping

* Minify html file and image optimization - see dist folder for minified version of index.html and src folder for readable version

_Results:_

__96 / 100 Desktop__

__94 / 100 Mobile__

with and without source mapping


## Part 2: Optimize Frames per Second in pizza.html

Aim to optimize views/pizza.html until your frames per second rate is 60fps or higher. Also, optimize the pizzas to resize at under 10ms.

View optimized pages here: http://cajoue.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html

### Actions - Part 2
* Used Chrome Devtools for analysis
* Identified two functions that caused forced reflow
* Resize Fix1 - Removed unnecessary function determineDx and Moved DOM node selection out of resize loop
* General Fix2 - Optimize images and minify dist folder
* Scroll Fix1 - updatePositions() used getElementsByClassName and reduced number of pizzas
* Scroll Fix2 - updatePositions() move phase and scrolldist out of loop
* General Fix2 - use getElementBy... instead of querySelector throughout for consistency and efficiency.
* Scroll Fix3 - used a lovely transform instead of style change in updatePositions. This was more efficient - now that there are fewer pizzas to move, a separate layer was created for each pizza so that they didn't have to be constantly repainted. Noticed that the pizza position was now off :( so made change to calc
* Scroll Fix4 - used requestAnimationFrame for pizza animation. Although performance was good, I couldn't get it out of my head that I should use rAF to handle the moving elements. 

### Initial results
#### Console messages from Timing API
Time to generate pizzas on load: 19.01 ms

Avg time (ms) to generate last 10 frames: 37.4, 29.8, 29.4, 28.5, 27.6

Time (ms) to resize Pizzas: 81.1, 82.6, 105.9, 109.6, 84.9

#### Initial resize

Frame time (ms): 173.9

Summary   | Time   | Self Time

mouseup   | 151.49 | 0.03

change    | 151.45 | 1.27

func call | 150.19 | 1.05

onchange  |  25.19 | 0

resizePiz |  25.19 | 0

changePiz |  25.19 | 2.17

determDx  |   2.16 | 0.44

*Forced reflow is a likely performance bottleneck.*

due to repeated calls to Recalculate Styles and Layout

#### Initial scroll - samples

Frames per second: 13, 12, 12, 12, 12

Frame time (ms): 75.55, 78.9, *77.6*, 80.6, 80.7

Summary   | Time  | Self Time

Scroll    | 68.39 | 0.11

func call | 67.85 | 0.57

updatePos | 67.27 | *32.88*

*Forced reflow is a likely performance bottleneck.*

### Optimized results

#### Console messages from Timing API

Time to generate pizzas on load: 17.63 ms

Avg time (ms) to generate last 10 frames: 0.31, 0.24, 0.24, 0.27, 0.24

Time (ms) to resize Pizzas: 0.60, 0.38, 0.34, 0.42, 0.36

#### Optimized resize

Frame time (ms): 31

Summary   | Time   | Self Time

mouseup   | 1.15 | 0.04

change    | 1.11 | 0.10

func call | 0.95 | 0.25

onchange  | 0.71 | 0

resizePiz | 0.71 | 0.52

#### Optimized scroll - samples

Frames per second: 64, 58, 60, 58, 59

Frame time (ms): 15.58, 16.97, *16.61*, 17.16, 16.69

Summary   | Time  | Self Time

Scroll    | 0.17 | 0.10

func call | 0.08 | 0.07

onScroll  | 0.01 | 0

### Summary and lessons learned
* Use more specific methods when selecting DOM nodes - getElementby... instead of querySelector...
* Don't select DOM nodes inside loops
* Use requestAnimationFrame for moving elements
* Be aware of forced reflow (layout and recalc styles) - try a transform instead of style change
* Be aware of the number of elements on a page! Don't create more than necessary.
* Be aware of where calculations take place - they don't necessarily need to be inside a loop.

### Resources
* https://docs.npmjs.com/getting-started/using-a-package.json
* https://discussions.udacity.com/t/1-8-2016-project-structure-for-front-end-projects-webcast/
* http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp
* https://jonassebastianohlsson.com/criticalpathcssgenerator/
* http://www.w3schools.com/jsref/prop_element_scrolltop.asp
* https://discussions.udacity.com/t/if-using-gulp-for-p4-you-might-find-this-useful/36817
* https://css-tricks.com/using-requestanimationframe/
* http://www.html5rocks.com/en/tutorials/speed/animations/
