const quotes = [
    {
        quote: "quote1",
        author : "author1",
    },
    {
        quote:"quote2",
        author : "author2",
    },
    {
        quote:"quote3",
        author : "author3",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;