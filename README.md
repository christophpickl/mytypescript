# mytypescript

play around with spring boot + typescript

* upgrade your local npm version via: `brew upgrade npm`
* update modules via: `npm i npm`
* install typescript for npm: `npm install -g typescript`

# Todos

* [x] YES: enable auto reload: just edit file (JS/TS) and automatically changes visible in browser (no keystroke needed)
* [x] NOPE: use yarn to manage dependencies
    - decided to stick with npm
* [X] NOPE: use webpack to create bundle (use import statement in JS files)
    - alternative: use javascript modules in browser instead
* [ ] run tests with mocha (framework) + chai (assertion lib)
    - [ ] move spec.ts files into src/test folder
* [ ] integrate with gradle (test+build)

# enable auto reload

* add `spring-boot-devtools` dependency

* package file ... always works, but have to do for each changed file :-/
* synchronize file ... only first time :-/

## in intellij settings

* (?) enable "Synchronize files on frame or editor tab activation" (enabled by default) 
* (?) enable "Build project automatically" (disabled by default)
* (?) enable "compiler.automake.allow.when.app.running" in registry
* (?) run configuration -> "on update" -> update resources
* !!! run configuration -> "on frame deactivation" (editor loses focus) -> update resources

## for typescript

* !!! in preferences / language & frameworks / typescript -> enable "recompile on changes"

# javascript modules

* add in your HTML page: `<script type="module" src="/index.js"></script>`
* in your `index.ts` add reference to other files: `import {greet, Person} from "./service.js";` (the .js at the end IS important!)
* in your `tsconfig.json` set: `"module": "es6"`
* this will fire a new request in the browser 😃

# dependency manager

## which one?

* npm (the community standard so far) or yarn (facebook's own, had been better)
* npm => https://iamturns.com/yarn-vs-npm-2018/

## npm help

* to get dependecy updater:
    1. install the needed module: `npm install npm-check --save-dev`
    1. add a script to `package.json`: `"upgrade-interactive": "npm-check --update"`
    1. then run: `npm run upgrade-interactive`

# testing

* install the modules: `npm install chai mocha ts-node @types/chai @types/mocha --save-dev`
* write some `*.spec.ts` test
* add a script to `package.json` to run tests: `"test": "mocha -r ts-node/register src/**/*.spec.ts"`
* now simply run: `npm test`

* help: https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2
