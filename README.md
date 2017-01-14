# MERN App Kit

Ground zero for your next MERN app.

  - Sass is transpiled, autoprefixed, and minified
  - ES6 and JSX are transpiled and uglified
  - Production files are updated on save and the browser will refresh automagically
  - All required/imported modules are concatenated and minified into a single file
  - Ran on an Express server that is deployable to Heroku

## Prerequisites

  - `brew install mongodb`
  - `sudo mkdir -p /data/db`
  - `sudo chown -R $(whoami) /data/`

## Getting started

  - clone the repo
  - `npm run init-dev`
  - reference **Workflow**

## Available commands

  - `npm run build` compile all src to dist
  - `npm run dev` start server, watch files, and auto refresh
  - `mongod` run database
  - `npm run prod` wipe out dist, recompile all src to dist, and uglify JavaScript
  - `npm run clean` wipe out dist entirely

## Workflow

  - simultaneously run `mongod` & `npm run dev` to run database, start server, watch files, and auto refresh
  - Live [http://localhost:3000](http://localhost:3000)

## Publishing

  - Disconnect your local repo from this one with `git remote remove origin`
  - `hub create`
  - add, commit, and push

## Deploying

With Heroku command line tools installed, simply run:

  - `heroku create`
  - `heroku addons:create mongolab`
  - `git push heroku master`

## Sass organization

  The Sass is organized following [SMACSS](https://smacss.com) (Scalable & Modular Architecture for CSS) conventions.

## Credits

  - [magentanova](https://github.com/magentanova) Server + DB setup
  - [t3patterson](http://github.com/t3patterson) Server + DB setup

## Misc:

  - Follow Bucky: [Twitter](https://twitter.com/BuckyMaler), [GitHub](https://github.com/BuckyMaler)
