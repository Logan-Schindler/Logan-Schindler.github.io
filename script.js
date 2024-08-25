const quoteText = document.querySelector(".footer-quote");
const quoteBtn = document.getElementById("quoteButton")

let quoteNum=0;
const quotes=[
    ["We who cut mere stones must always be envisioning cathedrals","-Medieval Quarry Worker Creed"],
    ["Live as if you were to die tomorrow. Learn as if you were to live forever.","-Mahatma Gandhi"],
    ["Tell me and I forget, teach me and I may remember, involve me and I learn.","- Benjamin Franklin"],
    ["You can’t put a limit on anything. The more you dream, the farther you get.","-Michael Phelps"],
    ["I think sometimes in life the biggest challenges end up being the best things that happen in your life.","-Tom Brady"],
    ["Technology is a gift of God. After the gift of life, it is perhaps the greatest of God’s gifts. It is the mother of civilizations, of arts and of sciences.","-Freeman Dyson"],
    ["Programming isn’t about what you know; it’s about what you can figure out.","-Chris Pine"]
];

//Display new quote
const newQuote = ()=>{
    //Clear the existing
    quoteText.innerHTML = "";

    //Select random quote but don't repeat 
    let randInt = Math.floor(Math.random() * 6);
    while(randInt === quoteNum){
        randInt = Math.floor(Math.random() * 6);
    }
    quoteNum = randInt;

    const quote = quotes[quoteNum][0];
    const speaker = quotes[quoteNum][1];

    //print random quote
    quoteText.innerHTML = `<p>"<i>${quote}</i>"</p> <p>${speaker}</p>`;
}

quoteBtn.addEventListener("click", newQuote);
