var fs = require("fs");
var rl =require('readline')


var fileData = "";
var charCount=0;
var lineCount=0;
var wordCount=0;
var readerStream = fs.createReadStream('myFile.txt');
var readLine =rl.createInterface({
    input : fs.createReadStream('myFile.txt'),

})



readerStream.on('data',function(readData){

    for(let i=0;i<fileData.length;i++){
      
        if(fileData[i]!=''){
            charCount++;
        }
     
   
    }
    
})

readLine.on('line',function(line){
lineCount++;
})



readerStream.on('end',function(){

console.log("Read Data " +fileData )
console.log("Number of Characters    " + charCount);
console.log("Number of Lines in file  " + lineCount );
console.log("Number of words in file are " + wordCount);

})

readerStream.on('error',function(error){
    console.log("Error is " + error);

})