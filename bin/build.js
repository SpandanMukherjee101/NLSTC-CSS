#!/usr/bin/env node
import { PurgeCSS } from 'purgecss'
import fs from 'fs'
import path from 'path'

// Get arguments (e.g. --out ./public/css)
const args = process.argv.slice(2)
const outIndex = args.indexOf('--out')
const outputFile = outIndex !== -1 ? args[outIndex + 1] : './nlstc.min.css'

// Default paths to scan for used classes
const content = [
  './**/*.html',
  './**/*.{js,jsx,ts,tsx}',
]

// Location of your CSS inside the package
const inputFile = path.resolve('node_modules/nlstc-css/nlstc.css')

console.log('🔍 Running PurgeCSS on nlstc.css...')

try {
  const purgeCSSResult = await new PurgeCSS().purge({
    content,
    css: [inputFile],
  })

  fs.writeFileSync(outputFile, purgeCSSResult[0].css)
  console.log(`✅ Purged CSS written to: ${outputFile}`)
} catch (err) {
  console.error('❌ PurgeCSS failed:', err)
  process.exit(1)
}
