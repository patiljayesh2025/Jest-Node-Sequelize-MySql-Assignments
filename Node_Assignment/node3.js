var fs =require("fs");
fs.readFile("myFile.txt",function(error,data){
if(error)console.log(error);

fs.writeFile("myFiles2.txt",data,(error)=>{
    if(error)console.log(error);
    console.log("Data Written Successfully to myFiels2.txt");
})

})