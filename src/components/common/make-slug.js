import moment from 'moment';

const MakeSlug = (str) => {
    return str?.trim().toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');   
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
        // return str.replaceAll('-', ' ');   
        return str.split('-').join(' ');
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

const getEdition = (ed) => {
    if (ed > 3 && ed < 21) return 'th';
    switch (ed % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

function  htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const calculateTime = (id, eventTime) => {
    const currentTime = new Date().getTime();
    var diffTime = (eventTime + 14400000) - currentTime;
    var duration = moment.duration(diffTime, 'milliseconds');
    var interval = 1000;
    if(currentTime < (eventTime + 14400000)){
        var inter = setInterval(() => {
            duration = moment.duration(duration - interval, 'milliseconds');
            if(document.getElementById(id) !== null){
                document.getElementById(id).innerHTML="";
                document.getElementById(id).innerHTML=duration.hours() + ":" + duration.minutes() + ":" + duration.seconds();
            }
        }, interval);
    }   
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
    reverseString,
    getEdition,
    htmlDecode,
    calculateTime,
}
