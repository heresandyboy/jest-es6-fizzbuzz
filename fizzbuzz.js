export default function fizzbuzz(n) {
    if (!n)
        return

    let arr = []

    let i = 0

    i += 1
    arr.push(i)
    if (n === i) {
        return arr
    }

    i += 1;
    arr.push(i)
    if (n === i) {
        return arr
    }
    
    arr.push("Fizz")
    return arr   
}