/*TODO
*   Create Loader*/

function newLocalQuote() {
    let quote;
    try {
        quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
        console.log(quote)
    } catch (e) {
        alert(e)
    }
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
