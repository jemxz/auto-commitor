var fs = require('fs');
var cmd=require('node-cmd');




 function runForever() { 
      fs.readFile('index.txt', 'utf-8', function(err, data) {
         if (err) throw err;
         var arr = fs.readFileSync('index.txt', 'utf-8').split('\n')
         
         if (arr[0] === "name"){
             var newValue = data.replace(/name/gim, 'email');
         } else if (arr[0] === "email"){
             var newValue = data.replace(/email/gim, 'name');
         }
      
         fs.writeFile('index.txt', newValue, 'utf-8', function(err, data) {
             if (err) throw err;
             
         })
     })

    cmd.runSync('git add .');
    cmd.runSync('git commit -m "First Message"');
    cmd.runSync('git push origin master')

    console.log("task complete ...");
 }