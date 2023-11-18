const fs = require('fs');
const directory = 'public/songs';
let songs = []
console.log("Path of fileNames.js is => "+__filename)
// console.log(fs.readdirSync(""))


// filenames = fs.readdirSync(directory); 
// filenames.forEach(element => {
//   if (!element.isDirectory &&  element.endsWith("mp3")){
//       songs.push(element.replace(/ /g,"%20"))}
//   else{filenames.splice(filenames.indexOf(element),1)}
// });
//console.log(songs)
module.exports=songs 