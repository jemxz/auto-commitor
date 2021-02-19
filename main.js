const { app, BrowserWindow } = require('electron') 
try {
    require('electron-reloader')(module)
  } catch (_) {}


function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
      width: 600,
      height: 300,
      frame: false,
      webPreferences: {
        nodeIntegration: true,
      },
    })
  
    // and load the index.html of the app.
    win.loadFile('index.html')
  }
  
  app.whenReady().then(createWindow)

// In this file, you can include the rest of your 
// app's specific main process code. You can also 
// put them in separate files and require them here. 
