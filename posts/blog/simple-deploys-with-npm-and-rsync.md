---
title: 'Simple deploys with NPM and rsync'
abstract: 'Deploying static sites using NPM scripts and the power of rsync'
slug: simple-deploys-with-npm-and-rsync
type: blog
status: publish
published: 2018-11-20 00:00:00 UTC
tags: web,javascript
image: 
position: 
---

If you\'re building a JavaScript heavy static site (perhaps you\'re
using something like `vue-cli` or `create-react-app`, or perhaps you\'re
rolling your own Webpack config like I\'m doing in the examples), using
something like Capistrano for deployment is a lot of extra work, while
messing about with FTP is annoying and error-prone. Let\'s split the
difference, and use some simple tools to make life easier.

## Requirements

* A machine with `rsync` (any Mac, most (all?) flavours of Linux,
  Windows 10 Linux subsystem)
* Node JS with `npm` (or `yarn`)
* SSH access to your host

## Initial implementation

Throughout the examples, I\'m assuming that `npm run build` will compile
your project into a `project-name` folder with an `index.html`, which
you can then serve from the path of your choice on the server. To start
with, we can run the build step, then manually run the command to copy
the files to the remote host:

    // package.json
    "scripts": {
      "build": "webpack --config webpack.production.js"
    }
    
    // terminal:
    $ rsync -avz --delete project-name deployuser@server.domain:/path/to/static/files/"
{: .ql-syntax spellcheck="false"}

This works, but means you have to keep track of that deploy command and
all those `rsync` flags are just begging for a typo. Let\'s automate it
a little.

## Make it a script

You can run shell commands from NPM scripts, so we\'ll clean that up
into a single, self-documenting, easily typed command:

    // package.json
    "scripts": {
      "build": "webpack --config webpack.production.js",
      "deploy": "webpack --config webpack.production.js && rsync -avz --delete project-name deployuser@server.domain:/path/to/static/files/"
    }
    
    // terminal
    $ npm run deploy
{: .ql-syntax spellcheck="false"}

## Scripts can call other scripts

NPM scripts can not only call shell commands, they can call other NPM
scripts. We\'ll use a dedicated `transfer` script, and call that along
with `build` when we `deploy`\:

    // package.json
    "scripts": {
      "build": "webpack --config webpack.production.js",
      "transfer": "rsync -avz --delete project-name deployuser@server.domain:/path/to/static/files/"
      "deploy": "npm run build && npm run transfer"
    }
    
    // terminal
    $ npm run deploy
{: .ql-syntax spellcheck="false"}

## Refactor paths into NPM variables

As a final step, if you\'re sharing your code publicly you might want to
avoid hard-coding the deploy user and path into the repo. NPM lets you
add additional global config variables via the `.npmrc` file, which
defaults to `~/.npmrc`. We can make our deploy path part of that config
and refer to it in `package.json` with the `$npm_config_` prefix:

    // .npmrc
    deploy_path = deployuser@server.domain:/path/to/static/files/
    
    // package.json
    "scripts": {
      "build": "webpack --config webpack.production.js",
      "transfer": "rsync -avz --delete project-name $npm_config_deploy_path"
      "deploy": "npm run build && npm run transfer"
    }
    
    // terminal
    $ npm run deploy
{: .ql-syntax spellcheck="false"}

You can also have an `.npmrc` file in your project directory, if you
don\'t mind either checking it in to version control or adding it to
your project\'s `.gitignore` file.

## Bonus tip for Ruby users

It\'s worth noting you can do much the same thing using Ruby and `rake`
instead of Node and `npm`.

    # Rakefile
    
    namespace :deploy do
      desc "Build the website from source"
      task :build do
        status = system("npm run build")
        puts status ? "OK" : "FAILED"
      end
    
      desc "Deploy website via rsync"
      task :push do
        status = system("rsync -avz --delete project-name deployuser@server.domain:/path/to/static/files/")
        puts status ? "OK" : "FAILED"
      end
    end
    
    desc "Build and deploy website"
      task :deploy => ["deploy:build", "deploy:push"] do
    end
    
    # terminal
    $ rake deploy
{: .ql-syntax spellcheck="false"}

If you\'re using NPM already I don\'t see much reason to use `rake`
instead but it might be useful if you\'re using a other Ruby tools.


