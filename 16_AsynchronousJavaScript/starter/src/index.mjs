import { registerEventListeners } from "./formUtils.mjs";
import { getResults, populateResults } from "./getResultsUtils.mjs";
import runPromise from "./promise.mjs";

//runPromise()

getResults()
    .then(results => populateResults(results))
    .catch(error => console.log(error.message))

registerEventListeners()