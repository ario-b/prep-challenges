const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

function combine() {
    var combinedText = ""
    for (var i = 0; i < arguments.length; i++) {
        combinedText += arguments[i].join(" ")
        if (i !== arguments.length){
            combinedText += " "
        }
    }
    return combinedText
}

console.log(combine(first, second, third));