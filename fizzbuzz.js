const fizzbuzz = (n) => {
    if (!n)
        return

    let arr = []
    let i = 0
    
     
    while (i < n) {
        i += 1;
        let str = ""
        if (number(i).isDivisibleBy(3)) {
            str += say("Fizz");
        }        
        if (number(i).isDivisibleBy(5)) {
            str += say("Buzz")
        }
        if (str === "") {
            str = say(i)
        }
        arr.push(str);
    }

    return arr;
}

const number = (numberToCheck) => ({isDivisibleBy: (divisor) => {
    return numberToCheck % divisor ==0 
}})

const say = (something) => {    
    return something;
}

export default fizzbuzz