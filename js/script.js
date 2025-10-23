$('#results').html(``);

function swapCase(str) {

    /* 

    Function to transform all the lower case letters to uppercase and all
    the upper case letters to lowercase.  If the character is not a letter,
    it is left as it is.  For example, Hello World becomes hELLO wORLD

    */

    let updatedStr = "";
    for (let i=0;i<str.length;i++) {
        if (str[i].charCodeAt(0) >=65 && str[i].charCodeAt(0) <= 90) {
            updatedStr += String.fromCharCode(str[i].charCodeAt(0) + 32);
        } else if (str[i].charCodeAt(0) >=97 && str[i].charCodeAt(0) <= 122) {
            updatedStr += String.fromCharCode(str[i].charCodeAt(0) - 32);
        } else {
            updatedStr += str[i];
        }
    }

    return updatedStr;
}