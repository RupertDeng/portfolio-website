# Responsive portfolio website with React.js, CSS grid and flexbox

## Note for deployment on Github Pages:

1) Install Github Pages package as dev-dependency: `npm install gh-pages --save-dev`

2) Add properties to package.json file:
   - add at top level the url of the github page: `"homepage": "http://{username}.github.io/{repo-name}"`
   - in the "scripts" property add "predeploy" and "deploy": `"predeploy": "npm run build", "deploy": "gh-pages -d build"`

3) Make sure Github repository is added in git: `git remote -v`

4) Deploy: `npm run deploy`

5) In the Github repository setting "Pages" tab, select the "gh-pages" branch as source

6) Regular commit to main branch will (likely) not automatically update github page, need to manually run deploy to update.
