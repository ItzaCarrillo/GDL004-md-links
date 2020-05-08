const validaAndRead = {};
const fs = require('fs');
const path = require('path');
const pathAddByUser = process.argv[2];
const linkArray =[];

//##function to validate the md document#######
function validamdFile(pathAddByUser){
    if (path.extname(pathAddByUser) === '.md') {
      console.log(`correct file ${pathAddByUser}`);
      linkArray.push(pathAddByUser);
      
    } else {
      console.error(`file invalid ${ pathAddByUser }`);
    }
  } 
    validamdFile(pathAddByUser);


//##function to read the file #################

const readFile = () => {
  fs.readFile(pathAddByUser,'utf8',(badError, linkArray)=>{
    if(badError){
      console.log('error');
    }  else{
    let regExpValidLinks = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
    let linksToRead = linkArray.match(regExpValidLinks);
    //if (linkArray.match(regex)) {
    console.log(linksToRead);
    }
  })
}


module.exports.validaAndRead = validamdFile;
module.exports.readFile = readFile;



