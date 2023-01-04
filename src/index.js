module.exports = function toReadable(number) {
    let fromZeroToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let fromElevenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let formTwentyToNinety = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) {
        return fromZeroToTen[number];
    } else if (number >= 10 && number <= 19) {
        return fromElevenToNineteen[(number % 10)];
    } else if ((number >= 20 && (number % 10) == 0) && number < 100) {
        return formTwentyToNinety[((number - (number % 10)) / 10) - 2];
    } else if ((number >= 20 && (number % 10 != 0)) && number < 100) {
        let firstDigit, secondDigit;

        secondDigit = number % 10;
        firstDigit = (number - secondDigit) / 10;

        return `${formTwentyToNinety[firstDigit - 2]} ${fromZeroToTen[secondDigit]}`;
    } else if (number >= 100 && number < 1000) {
        let firstDigit, secondDigit, thirdDigit;
        thirdDigit = number % 10;
        secondDigit = ((number - (thirdDigit)) / 10) % 10;
        firstDigit = (number - (number % 100)) / 100;

        if (number % 100 == 0) {
            firstDigit = number / 100;
            return `${fromZeroToTen[firstDigit]} hundred`;
        } else if (secondDigit == 0) {
            return `${fromZeroToTen[firstDigit]} hundred ${fromZeroToTen[thirdDigit]}`;
        }
        else {
            thirdDigit = number % 10;
            secondDigit = ((number - (thirdDigit)) / 10) % 10;
            firstDigit = (number - (number % 100)) / 100;

            if (secondDigit == 1) {
                return `${fromZeroToTen[firstDigit]} hundred ${fromElevenToNineteen[thirdDigit]}`;
            } else if (thirdDigit == 0) {
                return `${fromZeroToTen[firstDigit]} hundred ${formTwentyToNinety[secondDigit - 2]}`;
            }

            return `${fromZeroToTen[firstDigit]} hundred ${formTwentyToNinety[secondDigit - 2]} ${fromZeroToTen[thirdDigit]}`;
        }

    }
}
