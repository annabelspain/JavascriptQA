import {resultURL} from './constants.mjs'

const populateResults = results => {
    let resultsDisplay = document.createElement('section');
    let resultsPlaceholder = document.querySelector('div#resultsPlaceholder');
    let resultsArticle = document.querySelector('article#results');
    
    results.forEach(result => {
        let resultDisplay = document.createElement('p');
        resultDisplay.textContent = `${result.home} ${result.homeScore} - ${result.awayScore} ${result.away}`;
        resultsDisplay.appendChild(resultDisplay);
    });

    resultsArticle.replaceChild(resultsDisplay, resultsPlaceholder);
}

/*
export const getResults = () => 
{
    // Put your code here
    return fetch(resultURL)
    .then(results => 
        {
        if(results.ok)
        {
            return results = results.json()
        } else
        {
            throw new Error("Data not fetched")
        }
    })
    .then(results => {
        let reactRangerResults = results
        populateResults(reactRangerResults)
    })
    .catch(error => console.log(error.message)) 
}
*/

export async function getResults()
{
    let results = await fetch(resultURL)
    let reactRangerResults = await results.json
    return reactRangerResults
}
