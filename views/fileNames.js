const fs = require('fs');
const path = require("path");
const directory = 'public/songs';
let songs = []
filenames = fs.readdirSync(directory); 
filenames.forEach(element => {
  if (!element.isDirectory &&  element.endsWith("mp3")){
      songs.push(element.replace(/ /g,"%20"))}
  else{filenames.splice(filenames.indexOf(element),1)}
});
//console.log(songs)
module.exports.songs=songs
module.exports.pathIs = __filename