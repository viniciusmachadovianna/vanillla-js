function sum(a,b,...more){return a+b+more.reduce((total,number)=>total+number,0)};
function getTag(tagName){return document.getElementsByTagName(tagName)};
function getClass(className){return document.querySelectorAll(`.${className}`)};
function getId(elementId){return document.getElementById(elementId)};

// export default {sum, getTag, getClass, getId};