const log = require('electron-log');
var logger = require('electron-logger');

logger.setOutput({file:"./log.log"});

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let child;

function renderWindow() {
  logger.info('renderWindow');
  mainWindow = new BrowserWindow({ width: 1100, height: 600 });
  console.log('path::', __dirname);

  // and load the index.html of the app.
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });

  logger.info(startUrl);
  mainWindow.loadURL(startUrl);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

function createWindow() {
  renderWindow();
  let exec = require('child_process').exec;
  // Create the browser window.
  child = exec('node ./src/server/server.js');
  child.stdout.on('data', (data) => {
    logger.info(data);
    console.log(`stdout: ${data}`);
  });
  child.stderr.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  child.on('close', (code) => {
    console.log(`closing code: ${code}`);
    child.kill();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    child.kill();
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
