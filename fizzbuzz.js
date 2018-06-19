export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1

        if (i % 3 === 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            arr.push("Fizz")
        } else if (i % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(i);
        }
    }
    return arr;
}