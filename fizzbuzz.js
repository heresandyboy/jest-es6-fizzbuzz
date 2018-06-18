export default function fizzbuzz(number) {
    if (!number)
        return

        let arr = []
        arr.push(1)
        if (number === 1) {
            return arr
        }
        arr.push(2);
        return arr
}