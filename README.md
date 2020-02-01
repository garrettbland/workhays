# Work Hays

**Description**
Node app using express, ejs, tailwindcss, and alpinejs


### Developing locally

Clone this repo, run `npm install`. Then `npm run dev` to fire up the development server on `http://localhost:3000`. Nodemon is used, so it will watch for file changes and hot reload. Run `npm run prod` to setup production environment

The build process will automatically compile `tailwind.css`, uglify && minify it, and create a new file called `style.css`. This is the css file that will be referenced during dev. In prod, it will analyze all of the ejs files, purge the unused css, and then minify for tiny css sizes.

`purgecss.config.js` is used to glob the ejs files from views to analyze for purgecss.

### Flow
This app is using EJS (`.ejs` file extensions) for the view templating engine.  This allows multiple partials and pages to render before getting served to the client.

The routes get the data from the database, send it to `filename.ejs`, ejs compiles it to html and sends to the client. Once on the client end, ejs is done. The only thing on the client side to manipulate data or do other fancy things is alpine js. 

### References
Tailwind CSS :  [https://tailwindcss.com/](https://tailwindcss.com/)
Alpine JS: [https://github.com/alpinejs/alpine](https://github.com/alpinejs/alpine)
EJS: [https://ejs.co/](https://ejs.co/)

### Helpful 

Multiline EJS comment (wont get rendered to client)
```
<%/* 
===========================================================================

Description:
Foo Bar sentence

To Do:
- description of to do

Params:
- title | STRING

===========================================================================
*/%>
```

Single EJS comment (wont get rendered to client)
```
<%# Single line comment %>
```

Port already in use

1. Find the PID of the process
```
lsof -i :3000 -t
```

2. Kill the PID
```
kill ${pid}
```