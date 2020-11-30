const isPrime = require('./isPrime');

const main = () => {
    const number = process.argv.slice(2)[0];
    if(number){
        return [number, isPrime(parseInt(number))];
        
    }
    if(number === undefined) {
        throw new Error("No Input Found");
    }
}

const [number, output] = main();
console.log(`Is ${number} Prime Number: ${output}`);