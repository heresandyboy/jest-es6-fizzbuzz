const fizzbuzz = (n) => {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1;
        let str = ""
        if (divisibleBy3(i)) {
            str += say("Fizz");
        }
        if (divisbleBy5(i)) {
            str += say("Buzz")
        }
        if (str === "") {
            str = i
        }
        arr.push(str);
    }

    return arr;
}


const say = (word) => {    
    return word;
}

const divisbleBy5 = (i) => {
    return i % 5 === 0;
}

const divisibleBy3 = (i) => {
    return i % 3 === 0;
}

export default fizzbuzz