const _rules = new Map()
    .set(3, "Fizz")
    .set(5, "Buzz")
    .set(7, "Bang")

const fizzbuzz = (n) => {
    if (!n) return

    let arr = []
    let i = 0

    while (i < n) {
        i += 1;
        let str = sayForRule(i)
        arr.push(str);
    }
    return arr;
}

const sayForRule = (i) => {
    let str = ""
    for (const [key, value] of _rules) {
        if (number(i).isDivisibleBy(key))
            str += say(value)
    }
    if (str === "")
        str = say(i)
    return str
}

const number = (numberToCheck) => ({
    isDivisibleBy: (divisor) => {
        return numberToCheck % divisor == 0
    }
})

const say = (something) => {
    return something;
}

export default fizzbuzz