const repeatString = function (sentence, num) {
    let repeatedSentence = sentence;
    for (let index = 0; index < num - 1; index++) {
        repeatedSentence += sentence;
    }
    return repeatedSentence;
};

// Do not edit below this line
module.exports = repeatString;
