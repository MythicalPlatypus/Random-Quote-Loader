//TODO lol
//  Create Loader
//  Dynamically adjust quote ids from 'quote' to 'long-quote' if quote is long
//  Make twitter button share the quote text and author to Twitter (API?)
//  Make new-quote button run newLocalQuote
//

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

function newLocalQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // Check if no quote author is unknown and display 'Unknown', else display Author.
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }
    // Check if the quote is a long quote, If so apply long-quote class.
    if (quote.text.length >= 100) {
        console.log("it's more than 100!")
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    console.log(quoteText.innerHTML);
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteBtn.addEventListener("click", newLocalQuote);
twitterBtn.addEventListener("click", tweetQuote)
newLocalQuote();

/* FETCH QUOTE VERSION OF ABOVE CODE.
let apiQuotes = [];

function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    console.log(quote)
}
async function getQuotes() {
    const apiUrl = 'quotes.js'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
    } catch (error) {
        await getQuotes()
    }

}

getQuotes().then(r => newQuote());*/
