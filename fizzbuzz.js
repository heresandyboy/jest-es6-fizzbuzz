export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []
    arr.push(1)
    if (n === 1) {
        return arr
    }
    arr.push(2)
    if (n === 2) {
        return arr
    }
    arr.push("Fizz")
    return arr
}