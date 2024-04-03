
export default async function install() {
    console.log('install exec', process.env.CLI_TPL_INFO, process.env.CLI_PROJECT_INFO)
    // const cloneSpinner = ora(`安装${this.tpl.name}模版...`).start()
    // try {
    //     const targetPath = process.cwd()
    //     const srcPath = path.resolve(this.pkg.cacheFilePath, 'template')
    //     fse.ensureDirSync(targetPath)
    //     fse.ensureDirSync(srcPath)
    //     fse.copySync(srcPath, targetPath)
    //     await this.ejsRender()
    //     cloneSpinner.succeed()
    //     if (this.tpl.scripts) {
    //         for (let i = 0; i < this.tpl.scripts.length; i++) {
    //             const script = this.tpl.scripts[i]
    //             await this.execCommand(script)
    //         }
    //     }
    // }
    // catch (error) {
    //     cloneSpinner.isSpinning && cloneSpinner.stopAndPersist({ symbol: '❌' })
    //     throw error
    // }
}