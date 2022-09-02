const quotes = [
    {
        quote: "Never stop fighting for what you believe in.",
        author: "Ana Amari",
    },
    {
        quote: "Knowledge is power.",
        author: "Francis Bacon",
    },
    {
        quote: "I took a deep breath and listened to the old brag of my heart. I am. I am. I am.",
        author: "Sylvia Plath",
    },
    {
        quote: "Crying does not indicate that you are weak. Since birth, it has always been a sign that you are alive",
        author: "Charlotte Bronte",
    },
    {
        quote: "This is what my soul is telling me : Be peaceful and love everyone;",
        author: "Malaya Yousafzai",
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "You can't get hung up on thinking, 'Am I the victim of this situation?' No, I'm in charge of it.",
        author: "Marie Claire",
    },
    {
        quote: "Freedom, by definition, is people realizing that they are their own leaders.",
        author: "Diane Nash",
    },
    {
        quote: "The truth will set you free, but first it will piss you off.",
        author: "Gloria Steinem",
    },
    {
        quote: "I'm not bossy, I'm the boss.",
        author: "Beyonce",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;