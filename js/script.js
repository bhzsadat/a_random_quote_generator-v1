/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Array of 5 objects, all 5 have the quote, sourse, and year properties and 1 has citation
let quotes = [
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    citation: "https://www.adobe.com/express/discover/quotes/short",
    year: 1975
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
    year: 1980
  },
  {
    quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    source: "Reba McEntire",
    year: 1950
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou",
    year: 1990
  },
  {
    quote: "Keep calm and carry on.",
    source: "Winston S. Churchill",
    year: 1920
  }
];
console.log(quotes);

/***
 * `getRandomQuote` function
***/
// getRandomQuote function that creates a random index and then finds and returns the quote at that index
function getRandomQuote() {
  
  let rand = Math.floor(Math.random() * quotes.length);
  let qte = quotes[rand];
  return qte;
}

console.log(getRandomQuote());

/***
 * `printQuote` function
***/
// printQuote function that takes a random quote object, creates a message string using its properties
function printQuote() {
  let qt = getRandomQuote();
  let msg = `<p class ="quote">${qt.quote}</p> <p class ="source">${qt.source}`;
  //check for citation property
  if (qt.citation) {
    msg += `<span class="citation">${qt.citation}</span>`;
  }
  //check for year property
  if (qt.year) {
    msg += `<span class="year">${qt.year}</span>`;
  }
  msg += `</p>`;

  document.getElementById('quote-box').innerHTML = msg; 
  console.log(msg);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);