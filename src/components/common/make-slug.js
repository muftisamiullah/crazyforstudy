const MakeSlug = (str) => {
    return str.trim().toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}
const MakeSlug2 = (str) => {
    return str.trim().toLowerCase().replace(/ +/g,'-');     
}
const stringToSlug = (str)=> { // <-- removed the argument // <-- added this statement

      str = str.replace(/^\s+|\s+$/g, ''); // trim
      str = str.toLowerCase();
      str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
               .replace(/\s+/g, '-') // collapse whitespace and replace by -
               .replace(/-+/g, '-') // collapse dashes
               .replace(/'+/g, '') // collapse '
               .replace(/,+/g, '') // collapse ,
               .replace(/#160;+/g, ''); // collapse ,
      return str;
};
const SameSlug = (str) => {
    return str.trim().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
}

const GetString = (str, length) => {
    return str.substr(0,length);
}
const GetName = (str) => {
    if(str){
        return str.replace('-', ' ');   
    }
}
function createMarkup(data) {
    return {__html: data};
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str?.replace(re, function(matched){
        return mapObj[matched];
    });
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

export {
    MakeSlug,
    SameSlug,
    GetString,
    GetName,
    createMarkup,
    capitalize,
    replaceAll,
    stringToSlug,
    MakeSlug2,
    reverseString
}
