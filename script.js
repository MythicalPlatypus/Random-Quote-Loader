/*TODO
*   Create Loader*/

function newLocalQuote() {
    let quote = "test";
        quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        console.log(quote)
        document.getElementById("quote").innerHTML = quote.text
        document.getElementById("author").innerHTML = quote.author
        console.log(document.getElementById("quote").innerHTML)
}

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
