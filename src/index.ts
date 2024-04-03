import ejs from 'ejs'
import fse from 'fs-extra'
import { glob } from 'glob'
import path from "node:path"
import ora from 'ora'

export default async function install() {
    const { cacheFilePath } = JSON.parse(process.env.CLI_PKG_INFO || '')
    const root = cacheFilePath
    const cloneSpinner = ora(`安装项目模版...`).start()
    try {
        const targetPath = process.cwd()
        const srcPath = path.resolve(root, 'template')
        fse.ensureDirSync(targetPath)
        fse.ensureDirSync(srcPath)
        fse.copySync(srcPath, targetPath)
        await ejsRender()
        cloneSpinner.succeed()
    }
    catch (error) {
        cloneSpinner.isSpinning && cloneSpinner.stopAndPersist({ symbol: '❌' })
        throw error
    }
}

async function ejsRender() {
    const projectInfo = JSON.parse(process.env.CLI_PROJECT_INFO || '')
    const dir = process.cwd()
    const files = await glob('**', {
        cwd: dir,
        nodir: true,
        ignore: ['**/node_modules/**'],
    })
    return Promise.all(files.map(async (file) => {
        const filePath = path.resolve(dir, file)
        return new Promise((resolve, reject) => {
            ejs.renderFile(filePath, projectInfo, {}, async (error, content) => {
                if (error)
                    return reject(error)

                fse.writeFileSync(filePath, content, 'utf-8')
                resolve(content)
            })
        })
    }))
}