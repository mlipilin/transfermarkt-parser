# Contributing to Transfermarkt Parser

## Release

Up package version, add a tag:

```bash
git checkout main
git pull
npx lerna run release --scope transfermarkt-parser
```

Than create a release for the tag via GitHub interface.

After creating the release, "Node.js Package" action will run in order to publish a new version of the package to [NPM](https://www.npmjs.com).
