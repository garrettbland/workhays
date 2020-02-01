# Work Hays

**Description**
Node app using express, handlebars, tailwindcss, and alpinejs


### Developing locally

Clone this repo, run `npm install`. Then `npm run dev` to fire up the development server on `http://localhost:3000`. Nodemon is used, so it will watch for file changes and hot reload.

The build process will automatically compile `tailwind.css`, uglify && minify it, and create a new file called `style.min.css`. This is the css file that will be referenced during dev and prod. 

### Flow
This app is using handlebars (`.hbs` file extensions) for the view templating engine.  This allows templates, partials, and helpers and some basic level logic to be used before the html is sent to the client.

The routes get the data from the database, send it to `filename.hbs`, handlebars compiles it to html and sends to the client. Once on the client end, handlebars is done. The only thing on the client side to manipulate data or do other fancy things is alpine js. 

### References
Tailwind CSS :  [https://tailwindcss.com/](https://tailwindcss.com/)
Alpine JS: [https://github.com/alpinejs/alpine](https://github.com/alpinejs/alpine)
Handlebars: [https://www.npmjs.com/package/express-handlebars](https://www.npmjs.com/package/express-handlebars)