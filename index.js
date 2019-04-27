const { app, BrowserWindow } = require("electron")

// Gardez une reference globale de l"objet window, si vous ne le faites pas, la fenetre sera
// fermée automatiquement quand l"objet JavaScript sera garbage collected.
let win

function createWindow () {
  win = new BrowserWindow(
    {
        width: 1920, height: 1080,
        center: true,
        webPreferences: {
          nodeIntegration: true
        }
      })
  win.loadFile("index.html")
  // win.webContents.openDevTools()

  // Émit lorsque la fenêtre est fermée.
  win.on("closed", () => {
    win = null
  })
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  // MacOS exeption
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // Sur macOS, il est commun de re-créer une fenêtre de l"application quand
  // l"icône du dock est cliquée et qu"il n"y a pas d"autres fenêtres d"ouvertes.
  if (win === null) {
    createWindow()
  }
})