# Houses of Westeros (And some Essos houses, too)
#### A Backbone/Express App

This app is ready to go with all the JSON-based CRUD routes you need! Build a front end for it using Backbone.

## Setup

Before we can start this app, there are a few things we need to do...

1. In the root of the repository, run `npm install`. This is similar to `bundle` in rubyland... But with some differences. If you don't have Node installed, go [here](http://nodejs.org/) and download and run the installer. NPM is installed as part of Node.

2. Start `psql` and create a `houses_of_westeros_development` database.

3. Run `npm install -g sequelize-cli`. This installs the command line interface for the `sequelize` module.

4. Run `sequelize db:migrate`. Can you guess what this does?

5. Run `node seedfile.js`. This will populate the database with all the information about ASOIAF houses.

## Your Task

Implement full CRUD for this app using backbone.
