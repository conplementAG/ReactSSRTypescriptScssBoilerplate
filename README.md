# React project template

### Work in progress

[![Build Status](https://cpgithub.visualstudio.com/GitHubPipelines/_apis/build/status/conplementAG.ReactSSRTypescriptScssBoilerplate)](https://cpgithub.visualstudio.com/GitHubPipelines/_build/latest?definitionId=4)

## Features
- ✅ Server side rendering
- ✅ Typescript 
- ✅ Scss
- ✅ Hot Module Replacement (client & server)
- ✅ Tests (Jest)
- Server & client side debugging
- Code Coverage (Jest)
- Linting (Tslint)
- Microfrontends ready (unique base paths for static assets, escape hatch possible for all webpack configuration bits if needed)

## Out of scope
- architectural patterns and structure such as flux / redux / mobx / IoC & DI etc.

## Ideas behind the template
- All features possible throgh **excellent** [Razzle](https://github.com/jaredpalmer/razzle) project.
- This template is simply configuring a few bits together, adding neccessary changes to support typescript and jest tests with typescript, docker 

## How to use
- download or clone as a base for your project
- run `npm start` to start in development mode with HMR for both client and server side code. Note that in this mode you will get a brief FOUC at the startup, but this is gone when using production build
- to see how the app looks like in production build, run `npm build` and then `npm run start:prod`
- for tests, simply use `npm test`
- for debugging of server side code -> use VisualStudio Code (F5 / Start Debugging)
- for debugging of client side code -> either use VS Code Chrome plugin, or use the Chrome Inspector directly as you would debug any JS app
