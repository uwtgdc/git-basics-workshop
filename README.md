# UWT Game Dev Club Git Basics Workshop: Collaborative Mosaic

Add yourself to the mosaic by submitting **one** JSON file in `submissions/` via Pull Request.
When your PR is merged, the site redeploys and your tile appears on GitHub Pages 🎉

Live site: [🔗 UWT Game Dev Git Basics Workshop](https://uwtgdc.github.io/git-basics-workshop/)

## Quickstart

0. **Login** to GitHub [Sign up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fcommits%2Fshow&source=header-repo&source_repo=uwtgdc%2Fgit-basics-workshop) / [Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fuwtgdc%2Fgit-basics-workshop%2Fcommits%2Fmain%2F).
1. [**Fork**](https://github.com/uwtgdc/git-basics-workshop/fork) your own copy of the git-basics-workshop repo.
2. **Create a branch** in your fork named `add/<your-github-username>`
3. **Copy** `templates/submission.json` to `submissions/<your-github-username>.json`
4. **Edit** the fields (`name`, `color`, `message`, `emoji`)
5. **`Commit`** changes to your `branch`, then `push` or `publish` changes from your _local branch_ to your fork on GitHub,
6. [Open a **New pull request**](https://github.com/uwtgdc/git-basics-workshop/compare) (PR) **from** your fork / branch on GitHub **into** the original repo's `main` branch.

## Workshop Guidelines

✅ Do:

- Create a branch `add/<your-github-username>`
- Add exactly one file: `submissions/<your-github-username>.json`
- Keep JSON valid and follow the template fields
- Ask for help if you're stumped for over 2 minutes

🚫 Do not:

- Edit any files outside `submissions/`
- Rename, delete, or modify other people's files

Your PR will run GitHub Action checks to ensure:

- Exactly one file changed (which should be `<your-github-username>.json`)
- The file is inside `submissions/`
- The filename matches your GitHub username
- The JSON matches the basic schema

When checks pass, [magic workflow actions](https://github.com/uwtgdc/git-basics-workshop/actions) merges your PR and the webapp will update with your customized mosaic Tile :)

## Repository Architecture

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
“**Fork**”: create a copy of someone else's repository (e.g., make a backup of this workshop's code).
“**Branch**”: your sandbox line of work.
"**Local branch**": a branch on your local machine (e.g., the branch you are currently working on in VSCode, IntelliJ, CodeSpaces, etc.) is different from the identically named branch on GitHub. While they may share the same name, they are separate entities and any changes made to the local branch will not be reflected on the GitHub branch until you `push` the changes.
“**PR**”: 'Pull Request' asking to merge your branch into the main project.
“**CI checks**”: magic robots that keep us from stepping on toes.
“**Deploy**”: turn code into a live website.
