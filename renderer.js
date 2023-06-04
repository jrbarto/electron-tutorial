const info = document.getElementById('info')
info.innerText = `
This app is using Node.js (v${versions.node()}), \
Chrome (v${versions.chrome()}), \
and Electron (v${versions.electron()})
`

const runPing = async () => {
    const response = await window.functions.ping()
    console.log(`Response is '${response}'`)
}
runPing()