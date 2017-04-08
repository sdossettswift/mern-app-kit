# MERN App Kit

Ground zero for your next MERN app.

## Webpack

  - Autoprefixer
  - Babel
  - UglifyJS
  - Webpack Dev Middleware
  - Hot Module Replacement

## Prerequisites

  - `brew install mongodb`
  - `sudo mkdir -p /data/db`
  - `sudo chown -R $(whoami) /data/`

## Getting started

  - clone the repo
  - `npm install`
  - update `dbLocation` path in `./db/config.js`
  - reference **Workflow**

## Available commands

  - `mongod` run database
  - `npm run build:dev` compile all src to dist
  - `npm run build:prod` wipe out dist, recompile all src to dist with performance optimizations
  - `npm run dev` start server, watch files, and auto refresh
  - `npm run clean` wipe out dist entirely

## Workflow

  - simultaneously run `mongod` & `npm run dev` to run database, start server, watch files, and auto refresh
  - Live [http://localhost:8080](http://localhost:8080)

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

## Misc:

  - Follow Bucky: [Twitter](https://twitter.com/BuckyMaler), [GitHub](https://github.com/BuckyMaler)
