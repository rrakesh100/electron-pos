const electron = require('electron');

const app = electron.app;

var BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('window-all-closed', function() {
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});

  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
   console.log('Window closed')
    mainWindow = null;
  });
});
