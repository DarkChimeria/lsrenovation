const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
.then(createWindowsInstaller)
.catch((error) => {
                console.error(error.message || error)
                process.exit(1)
})

function getInstallerConfig () {
                console.log('Création de l\'installateur')
                const rootPath = path.join('./')
                const outPath = path.join(rootPath, 'Output')

                return Promise.resolve({
                               appDirectory: path.join(outPath, 'release-prod-builds/lsrenovation-win32-x64/'),
                               authors: 'Anthony Slimani',
                               noMsi: true,
                               outputDirectory: path.join(outPath, 'windows-installer', 'Prod'),
                               exe: 'lsrenovation.exe',
                               setupExe: 'LSRenovationInstaller.exe',
                               setupIcon: path.join(rootPath, 'assets', 'icons', 'win', 'favicon.ico'),
                               loadingGif: path.join(rootPath, 'assets', 'gifs', 'gear.gif')
                })
}
