dotify
======

simple library built off of [BlastJS](https://github.com/julianshapiro/blast) that truncates overflowing text in container

### Usage

- you'll need jquery + jqueryui widget factory dependencies
- include the dotify.js file
- add `$(selector).dotify()` in appropriate frontend js file (inside `<script>` block somewhere, inside main.js, etc)

### [EXAMPLE](http://jsfiddle.net/MzH74/4/) 

### TODOs:

- AMD-ify this
- add more options
- add CSS component to hanlde automatic overflow + hidden flags
- add callbacks to handle clicking dots to show all 
- fix edge case where half of the last line of text is showing

### License: MIT
