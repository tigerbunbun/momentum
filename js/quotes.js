const quotes = [
    {
        quote: "You may shoot me with your words. You may cut me with your eyes. You may kill me with your hatefulness. But still, like air, I'll rise.",
        author: "Maya Angelou",
    },
    {
        quote: "Nothing is absolute. Everything changes. Everything moves. Everything revolves. Everything flies and goes away.",
        author: "Frida Kahlo",
    },
    {
        quote: "I took a deep breath and listened to the old brag of my heart. I am. I am. I am.",
        author: "Sylvia Plath",
    },
    {
        quote: "To all the little girls who are watching this, never doubt that you are valuable and powerful and deserving of every chance and opportunity in the world to purse and achieve your dreams.",
        author: "Hillary Clinton",
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
        quote: "I had reasoned this out in my mind : There was one of two things I had a right to, liberty or dath; If I could not have one, I would have the other.",
        author: "Harriet Tubman",
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
        quote: "Words actually matters. They're significant, they can transform and open up our imagination.",
        author: "Opal Tometi",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;