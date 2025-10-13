import fs from 'fs-extra'
import path from 'path'
import Ajv from 'ajv'

const repoRoot = process.cwd()
const submissionsDir = path.join(repoRoot, 'submissions')
const publicDir = path.join(repoRoot, 'public')
const publicSubsDir = path.join(publicDir, 'submissions')
const schemaPath = path.join(repoRoot, 'templates', 'schema.json')

await fs.ensureDir(publicSubsDir)

const files = (await fs.pathExists(submissionsDir))
  ? (await fs.readdir(submissionsDir)).filter(f => f.endsWith('.json'))
  : []

const schema = JSON.parse(await fs.readFile(schemaPath, 'utf8'))
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
const validate = ajv.compile(schema)

const entries = []

for (const f of files) {
  const src = path.join(submissionsDir, f)
  const raw = await fs.readFile(src, 'utf8')
  try {
    const json = JSON.parse(raw)
    const ok = validate(json)
    if (!ok) {
      console.warn(`Skipping ${f}: schema errors`, validate.errors)
      continue
    }
    entries.push(json)
    await fs.copy(src, path.join(publicSubsDir, f))
  } catch {
    console.warn(`Skipping ${f}: invalid JSON`)
  }
}

await fs.writeJson(path.join(publicSubsDir, 'index.json'), entries, { spaces: 2 })
console.log(`Built manifest with ${entries.length} submission(s).`)
