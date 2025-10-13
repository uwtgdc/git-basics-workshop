# UWT Game Dev Club Git Basics Workshop: Collaborative Mosaic

Add yourself to the mosaic by submitting **one** JSON file in `submissions/` via Pull Request.
When your PR is merged, the site redeploys and your tile appears on GitHub Pages 🎉

Live site: [🔗 UWT Game Dev Git Basics Workshop](https://uwtgdc.github.io/git-basics-workshop/)

## Quickstart

1. Create a branch named `add/<your-github-username>`
2. Copy `templates/submission.json` to `submissions/<your-github-username>.json`
3. Edit the fields (`name`, `color`, `message`, `emoji`)
4. Commit changes to your branch, push changes from your _local_ branch to your branch on GitHub, open a PR (Pull Request) from your branch on GitHub into to this repo's `main` branch

## Workshop Guidelines

✅ Do:

- Create a branch `add/<your-github-username>`
- Add exactly one file: `submissions/<your-github-username>.json`
- Keep JSON valid and follow the template fields

🚫 Do not:

- Edit any files outside `submissions/`
- Rename, delete, or modify other people's files

Your PR will run GitHub Action checks to ensure:

- Exactly one file changed (which should be `<your-github-username>.json`)
- The file is inside `submissions/`
- The filename matches your GitHub username
- The JSON matches the basic schema

When checks pass, a some GitHub Actions magic merges your PR and the webapp will update with your Tile

## Repository architecture

```text
git-basics-workshop/
├─ .gitignore
├─ index.html
├─ LICENSE
├─ package.json
├─ package-lock.json
├─ README.md
├─ vite.config.js
├─ /scripts/
│  └─ build-manifest.mjs
├─ /src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ components/Tile.jsx
├─ /submissions/            # add ONE submission file into this directory
│  ├─ <your-github-username>.json
│  ├─ RheaMimiCarillo.json. # valid sample submission
│  └─ README.md
├─ /templates/
│  ├─ README.md
│  ├─ schema.json
│  └─ submission.json       # <- use THIS file as your starting point!
└─ /.github/
   ├─ PULL_REQUEST_TEMPLATE.md
   └─ /workflows/
      ├─ validate.yml       # blocks merge conflicts & forbidden changes in PRs
      └─ pages.yml          # builds + deploys React app to GitHub Pages
```

## Glossary

“**_Git_ vs _GitHub_**”: Git = local save states + history; GitHub = online hub for sharing & collaboration.
“**Branch**”: your sandbox line of work.
“**PR**”: 'Pull Request' asking to merge your branch into the main project.
“**CI checks**”: magic robots that keep us from stepping on toes.
“**Deploy**”: turn code into a live website.
