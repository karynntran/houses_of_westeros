# Houses of Westeros (And some Essos houses, too)
#### A Backbone/Express App

This app is ready to go with all the JSON-based CRUD routes you need! Build a front end for it using Backbone.

## Setup

Before we can start this app, there are a few things we need to do...

1. In the root of the repository, run `npm install`. This is similar to `bundle` in rubyland... But with some differences. If you don't have Node installed, go [here](http://nodejs.org/) and download and run the installer. NPM is installed as part of Node.

2. Start `psql` and create a `houses_of_westeros_development` database.

3. In terminal, try running the command `sequelize`. If it returns an error, run `npm install -g sequelize-cli`. This installs the command line interface for the `sequelize` module.

4. Run `sequelize db:migrate`. Can you guess what this does?

5. Run `node seedfile.js`. This will populate the database with all the information about ASOIAF houses.

## Your Task

Implement the app's client-side structure using backbone.

The homepage should show a list with all the houses.

**Extra**

On the homepage, add a form to submit new houses. When it is submitted, the list with all the houses should be updated automatically.
