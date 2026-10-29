import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const templatePath = join(__dirname, 'dist', 'index.html')
const template = readFileSync(templatePath, 'utf-8')

const ssrEntryPath = join(__dirname, 'dist-server', 'entry-server.js')
const { render } = await import(pathToFileURL(ssrEntryPath).href)

const appHtml = render()
const finalHtml = template.replace('<!--ssr-outlet-->', appHtml)

writeFileSync(templatePath, finalHtml, 'utf-8')
console.log(`[prerender] Injected ${appHtml.length} bytes into dist/index.html`)
