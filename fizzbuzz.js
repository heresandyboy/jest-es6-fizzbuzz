const fizzbuzz = (n) => {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1;
        let str = ""
        if (divisibleBy3(i)) {
            str += "Fizz"
        }
        if (divisbleBy5(i)) {
            str += "Buzz"
        }
        if (str === "") {
            str = i
        }
        arr.push(str);
    }

    return arr;
}


function divisbleBy5 (i) {
    return i % 5 === 0;
}

function divisibleBy3 (i) {
    return i % 3 === 0;
}

export default fizzbuzz