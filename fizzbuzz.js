export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1;
        let str = "";
        if (i % 3 === 0 && i % 5 === 0) {
            str = "FizzBuzz";
        } else if (i % 3 === 0) {
            str = "Fizz";
        } else if (i % 5 === 0) {
            str = "Buzz";
        }
        if (str === "") {
            str = i;
        }
        arr.push(str);
    }

    return arr;
}