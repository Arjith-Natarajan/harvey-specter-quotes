# Harvey Specter quotes
A JavaScript micro-library to get quotes of **Harvey Specter**, from the series **Suits**.

[![Travis](https://img.shields.io/travis/Arjith-Natarajan/harvey-specter-quotes.svg)](https://travis-ci.org/Arjith-Natarajan/harvey-specter-quotes)
[![npm](https://img.shields.io/npm/v/harvey-specter-quotes.svg)](https://www.npmjs.com/package/harvey-specter-quotes)
[![Codecov](https://img.shields.io/codecov/c/github/Arjith-Natarajan/harvey-specter-quotes.svg)](https://codecov.io/gh/Arjith-Natarajan/harvey-specter-quotes)
[![npm](https://img.shields.io/npm/dt/harvey-specter-quotes.svg)](#installation)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg?style=flat)](http://makeapullrequest.com)

```javascript
console.log('Harvey says...');
harveyQuotes.random(); // "I don’t play the odds, I play the man."
harveyQuotes.random(); // "Don't go to trial."
harveyQuotes.random(); // "Life is like this__ . I like this ^-."
...
```
> Who doesn't love a good Harvey Specter reply?

**harvey-specter-quotes** is a micro-library that can be used to generate quotes from [Suits Series](http://www.usanetwork.com/suits), spoken by Harvey. This package is an attempt to document the wisdom that is given to all, by the makers of Suits.


[**Harvey Specter**](http://suits.wikia.com/wiki/Harvey_Specter), is a cocky lawyer at a top New York Law Firm. Known as the 'best closer' in the city, he is one hell of a lawyer. He has built his career and life around one thing: *winning*. The Internet features his quotes in [discussions](https://www.reddit.com/r/suits/comments/66089l/did_harvey_specter_ever_actually_say_this_meme/),  [blogposts](https://www.scoopwhoop.com/Witty-One-Liners-By-Harvey-Specter-Suits/#.x30ij247i), [posters](https://in.pinterest.com/whatwouldharveydo/harvey-specter-quotes/?lp=true), and even in [memes](http://www.usanetwork.com/sites/usanetwork/files/styles/usanetwork_media_gallery_image/public/2016/01/ThisIsHarvey2.jpg?itok=mahTOVkL). Inspired by those, this library aims to record his quotes from the Show.

[<div style="text-align:center"><img alt="harvey-gif" align="centre" src="https://media.giphy.com/media/b08YeH0RXfBXa/giphy.gif"></div>]()


## Table of Contents

  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Usage](#usage)
  * [API](#api)
  * [Contributing](#missing-something)
  * [Credit](#credits)
  * [License](#license)

## Requirements
The following are pre-requisites to run :
  * [Node.js][node] 0.10+
  * [npm][npm] (normally comes with Node.js)

## Installation
 Inside your project, run:
```sh
$ npm install harvey-specter-quotes
```
*This is project is distributed via [npm](npm) only*

## Usage
You can load the node module dependency into your code with a require call:
```javaScript
var harveyQuotes = require('harvey-specter-quotes');
```
### Example
```javascript
var harveyQuotes = require('harvey-specter-quotes');

var allQuotes = harveyQuotes.all;
var randomQuote = harveyQuotes.random();
var anotherRandomQuote = harveyQuotes.random();

console.log('Harvey replied,', randomQuote);
```

## API
The `harvey-specter-quotes` object has the following methods and attributes:
### `all`
Returns all available quotes as an array.
### `random([count])`
Function that returns a random quote from the collection of quote, that is never same as the previous call.
```js
var randomQuote = harveyQuotes.random();
var anotherRandomQuote = harveyQuotes.random();

// randomQuote !== anotherRandomQuote
// At all times
```
#### count - type:number (optional)
When passed in an optional number as argument, API returns an array of quotes from the collection matching length of the argument specified.
```js
var moreQuotes = harveyQuotes.random(4);
console.log(moreQuotes);
>> [ 'The better you dress, the worse you can behave.',
     'Life is a game. Play to win.',
     'Work until you no longer have to inroduce yourself',
     'Win a no win situation by rewriting the rules.' ]

```



## Missing Something?
Do have some more cool ideas for this project? Maybe you found some [bugs? or few typos?](https://github.com/Arjith-Natarajan/harvey-specter-quotes/issues)
Can't scratch off the itch to make this even more awesome?

Guess what, I have been looking for you! :tada: **Open an issue or submit a pull!**

### How Can I Help ?
* Add Documentation - in form of comments & docs(for example, a CONTRIBUTING.md)
* Come up with features to improve the project
* Find Broken things and open issues
* Enlighten me with better coding patterns and structures

### Contributing
1. Fork it!
2. Create your feature branch:
`git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Credits
Thanks to [@kentcdodds](https://github.com/kentcdodds) to have helped me get started with my first-ever Open Source library. Checkout his [blogpost](https://blog.kentcdodds.com/introducing-how-to-contribute-to-open-source-be67917eb704) and [course here](https://egghead.io/courses/how-to-write-an-open-source-javascript-library).

## License
This project is licensed under the [MIT License](LICENSE).  
[Arjith Natarajan](https://github.com/arjith-natarajan) **&copy;** 2018


[node]: https://nodejs.org/
[npm]: https://www.npmjs.com/
