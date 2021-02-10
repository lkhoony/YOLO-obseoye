# Yolo Obseoye

Team project for Web Programming

Open App : https://yolo-obseoye.herokuapp.com/

[![GitHub license](https://img.shields.io/github/license/lkhoony/YOLO-obseoye?style=plastic)](https://github.com/lkhoony/YOLO-obseoye)

## Introduction

Yolo Obseoye is a web site introducing attractions, restaurants and activities of Jeju island in Korea

  - introduces information of attractions, restaurants and activities
  - provides information of the top 20 for each
  - moves to instagram or map page using link

### Tech

Yolo Obseoye uses a number of open source projects to work properly:

* HTML5 - Markup web pages
* CSS - how HTML elements are to be displayed on screen
* Javascript - change elements of HTML and CSS dinamically
* node.js  - execute server on localhost
* jQuery - Javascript library to much easier to deal with HTML and CSS elements
* Heroku - platform as a service enables to operate application

### Installation

Yolo Obseoye requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd YOLO-obseoye
$ npm install -d
$ node app.js
```

### Development

Open your favorite Terminal and run these commands.

```sh
$ node app.js
```

By default, the default will be configured by port 3000, so change this within the app.js if necessary. When ready, simply modify the app.js to operate other port.

```Javascript
const port = process.env.PORT || ${port};
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:port
```

#### Heroku

This web site use Heroku to deployment application. If you wanna deploy your application, follow below steps.

To deploy your application on Heroku, you need to download and install the [Heroku CLI].

First, Login to Heroku
```sh
$ heroku login
```
Second, Create a new Git repository 
```sh
$ cd YOLO-obseoye
$ git init
$ heroku git:remote -a Yolo-obseoye
```
Third, Deploy your application
```sh
git add .
git commit -am "commit message"
git push heroku master
```

### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [Heroku Cli]: <https://devcenter.heroku.com/articles/heroku-cli>
    