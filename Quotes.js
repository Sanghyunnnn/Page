const quotes=
[


    {
        quote:"1111111",
        author:"Kim"
    }
    ,
    {
        quote:"2222222222",
        author:"Ki2222222222"
    }
    ,

    {
        quote:"3333333331",
        author:"Kim3333333333333333"
    }
    ,

    {
        quote:"444444444441",
        author:"Ki444444444444"
    }
    ,

    {
        quote:"555555555555555",
        author:"Kim55555555555"
    }
    ,

    {
        quote:"1111111",
        author:"Kim"
    }
    ,
    {
        quote:"1111111",
        author:"Kim"
    }
    ,

    {
        quote:"1111111",
        author:"Kim"
    }
    ,

    {
        quote:"1111111",
        author:"Kim"
    }
    ,

    {
        quote:"1111111",
        author:"Kim"
    }
    ,

    {
        quote:"1111111",
        author:"Kim"
    }
    

];






const quote =document.querySelector('#quote span:first-child');
const author =document.querySelector('#quote span:last-child');



const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText=todaysQuote.quote;

author.innerText=todaysQuote.author;