const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

require('update-electron-app')()

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    ipcMain.handle('ping', () => 'pong')
    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            console.log('creating new window!')
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        console.log(`platform is ${process.platform}.. closing!`)
        app.quit()
    }
})
