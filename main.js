console.log("Main process");
const prefix = "Main: "

const electron = require("electron");   // Load electron module
const app = electron.app;   // Creating a new electron application
const BrowserWindow = electron.BrowserWindow;   // Creating a new electron window
const path = require("path");   // Load the built in path module
const url = require("url");     // Load the built in url module

console.log(prefix + "All modules loaded");

let mainWindow;     // Declaring the main window object

function createWindow(){    // Function to initialize the main window
    mainWindow = new BrowserWindow({
        frame: false,
        show: false
    });     // Creating a new instance of a window and assigning it to the mainWindow object with options to disable the frame and keep it hidden for now
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));    // Load our index.html file into the browser window
    
    mainWindow.on('closed', () => {     // When the main window is closed, set the main window to null. I think this is a cleanup step?
        mainWindow = null;
        
    });

    mainWindow.on('ready-to-show', () => {  // When the main window has finished laoding the html, css, and js files, go ahead and show the window
        mainWindow.show();
    });
}

app.on('ready', createWindow);  // Create the main window when the app is ready

app.on('closed', () => {
    mainWindow = null;
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow == null) {
        createWindow();
    }
});