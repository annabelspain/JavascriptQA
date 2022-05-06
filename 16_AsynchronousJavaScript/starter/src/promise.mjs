export default function runPromise()
{
    let aPromise = new Promise((resolve, reject) => 
    {
        let delayedFunc = setTimeout( () => 
        {
            //whether it resolves or rejects is unknown
            let randomNumber = Math.random();
            (randomNumber < 0.5) ? resolve(randomNumber) :
            reject(randomNumber);
        }, Math.random() * 5000)
    })
    aPromise
        .then
        (
            data => {
                console.log(`Promised resolved with ${data}`)
            }
        )
        .catch
        (
            error => {
                console.log(`Promise rejected with ${error}`)
            }
        )
}