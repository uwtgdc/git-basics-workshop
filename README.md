# UWT Game Dev Club Git Basics Workshop: Collaborative Mosaic

Add yourself to the mosaic by submitting **one** JSON file in `submissions/` via Pull Request.
When your PR is merged, the site redeploys and your tile appears on GitHub Pages 🎉

Live site: (TODO: add link to deployed site here)

## Quickstart

1. Create a branch named `add/<your-github-username>`
2. Copy `templates/submission.json` to `submissions/<your-github-username>.json`
3. Edit the fields (`name`, `color`, `message`, `emoji`)
4. Commit changes to your branch, push changes from your _local_ branch to your branch on GitHub, open a PR (Pull Request) from your branch on GitHub into to this repo's `main` branch

## How to contribute (Workshop Rules)

✅ Do:
- Create a branch `add/<your-github-username>`
- Add exactly one file: `submissions/<your-github-username>.json`
- Keep JSON valid and follow the template fields

🚫 Do not:
- Edit any files outside `submissions/`
- Rename or delete other people's files

Your PR will run checks to ensure:
- Exactly one file changed (which should be `<your-github-username>.json`)
- The file is inside `submissions/`
- The filename matches your GitHub username
- The JSON matches the basic schema

When checks pass, a some GitHub Actions magic merges your PR and the webapp will update with your Tile

## Repository architecture (WIP)

todo: update this architecture to reflect the actual, final file structure

```text
git-basics-workshop/
├─ README.md
├─ package.json
├─ vite.config.js
├─ index.html
├─ /public/
│  └─ (auto-generated at build) submissions/
│     ├─ index.json
│     └─ <student files>.json
├─ /scripts/
│  └─ build-manifest.mjs
├─ /src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ components/Tile.jsx
├─ /templates/
│  ├─ submission.json
│  └─ schema.json
├─ /submissions/            # students add ONE file here
│  └─ README.md
└─ /.github/
   ├─ PULL_REQUEST_TEMPLATE.md
   └─ /workflows/
      ├─ validate.yml       # blocks merge conflict PRs
      └─ pages.yml          # builds + deploys to GitHub Pages
```
