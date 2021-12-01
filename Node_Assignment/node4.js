var readLine = require('readline-sync')
var fs= require('fs');

var searchStr = readLine.question("Enter serch string");
console.log("Given input is " + searchStr);
fs.readFile("myFile.txt", function (err, data) {
    if (err) throw err;
    if(data.includes(searchStr)){
     console.log("The given file includes the string " + data);
    }
  });



  fs.readFile("myFile.txt", function (err, data) {
    if (err) throw err;
   let wordCount = String(data).split(searchStr).length - 1;
   let wCount = String(data).split('').length;
   
     console.log(`The given file includes the string ${wordCount} Times ` );
     console.log(" Number of Words in the myFiles.txt  "  + wCount )
 
  });




  fs.mkdir('./myDir', { recursive: true }, (err) => {
    if (err) console.log(err)


fs.writeFile('./myDir/myFile4.txt', 'Hello World ', function (err) {
    if (err) console.log(err);
    console.log('File Creted Successfully');
  });
  });
 fs.unlink('myFile4.txt',function(err){
if(err)console.log(err);
console.log("File Deleted ");

 })

var myFolderCreate = readLine.question("Enter the folder name");
fs.mkdir(`./${myFolderCreate}`,function(err){
    if(err)console.log(err);
});
var myFolderDelete = readLine.question("Enter the folder name to delete");
fs.rmdir(`${myFolderDelete}`,function(err){
    console.log(err);
})
