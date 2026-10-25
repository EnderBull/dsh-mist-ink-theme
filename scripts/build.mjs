import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const css = await readFile(path.join(root, 'src/theme.css'), 'utf8')
const template = await readFile(path.join(root, 'src/client.js'), 'utf8')

if (!template.includes('__THEME_CSS__')) {
  throw new Error('src/client.js is missing the __THEME_CSS__ placeholder')
}

const output = template.replace('__THEME_CSS__', JSON.stringify(css))
await mkdir(path.join(root, 'lib'), { recursive: true })
await writeFile(path.join(root, 'lib/client.js'), output, 'utf8')
console.log(`built lib/client.js — ${css.length} bytes of CSS, ${output.length} bytes total`)
