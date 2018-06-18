export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []

    let i = 0

    while (i < n) {
        i += 1;
        if (i === 3) {
            arr.push("Fizz");
        } else {
            arr.push(i);
        }
    }
    return arr;   
}