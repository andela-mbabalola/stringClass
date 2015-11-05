"Use strict";
/********************************************************
*Name: Inverted Index.
*Description:  Extending the String Class (Checkpoint Two)
*Author: Babalola Maryam
****************************************************/

/**
 * [function to check weather a string contains vowels or not]
 * @return {[boolean]} [returns true if a vowel is found else false]
 */
String.prototype.hasVowels = function() {
    var regex = /[aeiou]/,
        str = this;
        return regex.test(this);
};

/**
 * [function to convert a string to uppercase]
 * @return {[string]} [returns a string with all its characters in upper case]
 */
String.prototype.toUpper = function() {
    var str = this;
    return str.replace(/[a-z]/g, function(wordToConvert){
        return String.fromCharCode(wordToConvert.charCodeAt() - 32);
    });
};

/**
 * [function to convert a string to lowercase]
 * @return {[string]} [returns a string with all its characters in lower case]
 */
String.prototype.toLower = function() {
    var str = this;
    return str.replace(/[A-Z]/g, function(wordToConvert){
        return String.fromCharCode(wordToConvert.charCodeAt() + 32);
    });
};

/**
 * [function to convert the first character of a string to uppercase]
 * @return {[string]} [returns a string with its first character in upper case]
 */
String.prototype.ucFirst = function() {
    var str = this;
    return str.charAt(0).toUpper() + str.substr(1);
};

/**
 * [function to check if the string is a question]
 * @return {[boolean]} [returns true if the string ends with a question mark]
 */
String.prototype.isQuestion = function() {
    var stringCheck = /[A-Za-z]\?/g,
        str = this;
        return stringCheck.test(str);
};

/**
 * [function to return a list of the words in a string]
 * @return {[array]} [returns a list of the words in a string as an array]
 */
String.prototype.words = function() {
    var str = this;
    return str.split(/\s/);
};

/**
 * [function to return the number of words in a string]
 * @return {[number]} [returns the number of words in a string]
 */
String.prototype.wordCount = function() {
    var str = this;
    return str.words().length;
};

//TODO
/**
 * [function to return a currency representation of a string]
 * @return {[string]} [returns the number of words in a stringp]
 */
String.prototype.toCurrency = function() {
    var regex = /(\d)(?=(\d{3})+(?!(\d)))/g,
        str = this;
        return str.replace(regex, '$1,');
};

/**
 * [function to return a number representation of a currency string]
 * @return {[number]} [returns a number representation of a currency string]
 */
String.prototype.fromCurrency = function() {
    var str = this;
    return +str.replace(/\,/g, '');
};
