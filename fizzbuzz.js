export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1;
        str = "";
        if (i % 15 === 0) {
            str = "FizzBuzz"
            arr.push(str)
        } else if (i % 3 === 0) {
            str = "Fizz"
            arr.push(str)
        } else if (i % 5 === 0) {
            str = "Buzz"
            arr.push(str)
        }
        
        if (str === "") {
            arr.push(i)
        }
    }

    return arr;
}