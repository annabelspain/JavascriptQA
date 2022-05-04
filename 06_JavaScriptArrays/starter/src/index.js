let quote = ["I", "am", "your", "friend"];
console.log(quote);
console.log(quote[2]);

quote.pop();
console.log(quote);

quote.push('father');
console.log(quote);

quote.unshift("Luke");
console.log(quote);

let erroneousWord = "Luke";
let lukeIsHere = quote.find(n => {
    return n === erroneousWord
});
let lukeIsAt;
if (lukeIsHere){
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";
}
console.log(quote);

let output = ""
for (let i = 0; i < quote.length; i++)
{
    if(i  === quote.length - 1)
    {
        output += quote[i] + "!"
    }
    else if(quote[i] === 'No'){
        output += quote[i] + ", "
    }
    else{
        output += quote[i] + " "
    }
}
console.log(output)
