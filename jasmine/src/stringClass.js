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
    var regex = /[aeiou]/;
    return regex.test(this);
};

/**
 * [function to convert a string to uppercase]
 * @return {[string]} [returns a string with all its characters in upper case]
 */
String.prototype.toUpper = function() {

};

//TODO
/**
 * [function to convert a string to lowercase]
 * @return {[string]} [returns a string with all its characters in lower case]
 */
String.prototype.toLower = function() {

};

//TODO
/**
 * [function to convert the first character of a string to uppercase]
 * @return {[string]} [returns a string with its first character in upper case]
 */
String.prototype.ucFirst = function() {

};

//TODO
/**
 * [function to check if the string is a question]
 * @return {[boolean]} [returns true if the string ends with a question mark]
 */
StringingClass.prototype.isQuestion = function() {

};

//TODO
/**
 * [function to return a list of the words in a string]
 * @return {[array]} [returns a list of the words in a string as an array]
 */
String.prototype.words = function() {

};

//TODO
/**
 * [function to return the number of words in a string]
 * @return {[number]} [returns the number of words in a string]
 */
String.prototype.wordCount = function() {

};

//TODO
/**
 * [function to return a currency representation of a string]
 * @return {[string]} [returns the number of words in a stringp]
 */
String.prototype.toCurrency = function() {

};

//TODO
/**
 * [function to return a number representation of a currency string]
 * @return {[number]} [returns a number representation of a currency string]
 */
String.prototype.fromCurrency = function() {

};
