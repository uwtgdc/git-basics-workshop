/**
 * Build the manifest of submissions for the GitHub Pages site.
 *
 * This script reads the JSON files in the `submissions` directory and validates them against the schema in `templates/schema.json`.
 * It then writes a JSON file in `public/submissions/index.json` containing the list of valid submissions.
 *
 * @author Rhea Mimi Carillo <https://github.com/RheaMimiCarillo>
 * @author UWT Game Dev Club <https://github.com/uwtgdc>
 */

import fs from 'fs-extra'
import path from 'path'
import Ajv from 'ajv'

/**
 * The root directory of the repository.
 * @type {string}
 * @constant
 */
const repoRoot = process.cwd()

/**
 * The directory containing the submissions.
 * @type {string}
 * @constant
 */
const submissionsDir = path.join(repoRoot, 'submissions')

/**
 * The public directory for the GitHub Pages site.
 * @type {string}
 * @constant
 */
const publicDir = path.join(repoRoot, 'public')

/**
 * The public directory for the submissions.
 * @type {string}
 * @constant
 */
const publicSubsDir = path.join(publicDir, 'submissions')

/**
 * The path to the schema file for validating submissions.
 * @type {string}
 * @constant
 */
const schemaPath = path.join(repoRoot, 'templates', 'schema.json')
/**
 * Ensure the public directory for submissions exists.
 * If the directory does not exist, create it.
 */
await fs.ensureDir(publicSubsDir)

/**
 * Read the list of files in the submissions directory.
 * If the directory does not exist, return an empty list.
 */
const files = (await fs.pathExists(submissionsDir))
  ? (await fs.readdir(submissionsDir)).filter(f => f.endsWith('.json'))
  : []

/**
 * Load the schema for validating submissions.
 * Compile the schema into a validation function.
 */
const schema = JSON.parse(await fs.readFile(schemaPath, 'utf8'))
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
const validate = ajv.compile(schema)

/**
 * Initialize an empty list to store the valid submissions.
 */
const entries = []

/**
 * Iterate over the list of files in the submissions directory.
 * For each file, read the contents, parse the JSON, and validate against the schema.
 * If the JSON is invalid or the schema validation fails, skip the file.
 * If the file is valid, add it to the list of entries.
 * Copy the file from the submissions directory to the public directory.
 */
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

/**
 * Write the list of valid entries to a JSON file in the public directory.
 */
await fs.writeJson(path.join(publicSubsDir, 'index.json'), entries, { spaces: 2 })
console.log(`Built manifest with ${entries.length} submission(s).`)
