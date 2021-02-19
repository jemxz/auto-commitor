var fs = require('fs');
var cmd=require('node-cmd');

function showAlertsFail(){
    document.getElementById('bootstrap-alert').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alertFail').style.display = 'none'}, 10);
    
    
  }
  function showAlertsSuccess(){
    document.getElementById('bootstrap-alert').style.display = 'block';
    setTimeout(function(){document.getElementById('bootstrap-alert').style.display = 'none'}, 10);
    
    
  }

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
        try {
            cmd.runSync('git add .');
            cmd.runSync('git commit -m "First Message"');
            cmd.runSync('git push origin master')
            showAlertsSuccess()
        } catch (error) {
            showAlertsFail()   
        }
   }
      


 

// runForever()

// setInterval(runForever, 60000)
// setInterval(runForever, 43200000)

 