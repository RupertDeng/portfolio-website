<b style="font-size:1.8rem">Responsive portfolio website with React.js, CSS grid and flexbox.</b>
<br></br>

<u style="font-size:1.5rem">Note for deployment on Github Pages:</u>

1) install Github Pages package as dev-dependency:

- <span style="background-color: lightgray; color: black">npm install gh-pages --save-dev</span>
<br></br>

2) Add properties to package.json file:

- add at top level the url for the github page: <span style="background-color: lightgray; color: black">"homepage": "http://{username}.github.io/{repo-name}"</span>
- in the "scripts" property add "predeploy" and "deploy": <span style="background-color: lightgray; color: black">"predeploy": "npm run build", "deploy": "gh-pages -d build"</span>
<br></br>

3) Make sure Github repository is added in git:
- <span style="background-color: lightgray; color: black">git remove -v</span>
<br></br>

4) Deploy: 
- <span style="background-color: lightgray; color: black">npm run deploy</span>
<br></br>

5) In the Github repository setting "Pages" tab, select the "gh-pages" branch as source
<br>

6) Regular commit to main branch will (likely) not automatically update github page, need to manually run deploy to update.
