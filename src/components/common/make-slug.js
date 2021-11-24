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


const isHTML = (str) => {
    const fragment = document.createRange().createContextualFragment(str);
    
    // remove all non text nodes from fragment
    fragment.querySelectorAll('*').forEach(el => el.parentNode.removeChild(el));
    
    // if there is textContent, then not a pure HTML
    return !(fragment.textContent || '').trim();
}

function  htmlDecode(content) {
    let e = document.createElement('div');
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

const calculateTime = (id, eventTime, afterComplete) => {
    var countDownDate = new Date(eventTime).getTime();        
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate + 14400000 - now;
        //console.log(distance);
        let ele = document.getElementById(id);
        
        if (distance < 4000) {
            clearInterval(x);
            if(ele){
                ele.innerHTML = afterComplete;
            }
        }else{
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = (days*24)+Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if(ele){
                ele.innerHTML = '';
                ele.innerHTML = pad(hours,2) + ":"  + pad(minutes,2) + ":" + pad(seconds,2);
            }
        }
    }, 1000);
} 

const calculateTime1 = (id, eventTime, afterComplete) => {
    var countDownDate = new Date(eventTime).getTime();        
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        //console.log(distance);
        let ele = document.getElementById(id);
        
        if (distance < 4000) {
            clearInterval(x);
            if(ele){
                ele.innerHTML = afterComplete;
            }
        }else{
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = (days*24)+Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if(ele){
                ele.innerHTML = '';
                ele.innerHTML = pad(hours,2) + ":"  + pad(minutes,2) + ":" + pad(seconds,2);
            }
        }
    }, 1000);
} 

const checkExtension = (filename) =>{
    const ext = filename.split('.').pop()
    const extensions = ['avi','bmp','csv','doc','docx','gif','jpg','pdf','png','pps','ppt','pptx','rar','rtf','tif','wmv','xls','xlsx','zip','jpeg'];
    if(extensions.includes(ext)){
        return true
    }else{
        return false
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
    calculateTime1,
    checkExtension,
    isHTML,
}
