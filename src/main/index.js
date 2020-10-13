const { app, BrowserWindow } = require('electron');

const PORT = process.env.PORT || 8080;

let window;

function createWindow() {
  window = new BrowserWindow({
    width: 560,
    height: 800,
    alwaysOnTop: true,
    title: 'Electron/React/Bootstrap',
    show: true,
    webPreferences: { nodeIntegration: true },
  });

  switch (process.env.NODE_ENV) {
    case 'production':
      window.loadFile('./dist/index.html');
      break;
    default:
      window.loadURL(`http://localhost:${PORT}`);
      break;
  }
}

/* Electron event listeners */

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  // Excluding macOS, closing all the windows of an app should quit the app
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
