function palindrome(text) {
    splittedText = text.split('');
    reverse = splittedText.reverse();
    return reverse.join('');
}

console.log(palindrome("ibu ratna antar ubi"));