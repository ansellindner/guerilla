## Mini Client

This folder serves as a client (frontend) framework for the Mini.

We are trying to make it easy for developers to add to this structure in a form of a plugin. Each folder should use a new instance of Express. That way unique public and views paths can be set.

### Plugin Structure

The current naming convention of Mini apps is for lowercase using dashes (-) between words. App names should end in "-mini". Your my-app-mini folder should contain an index.js, a README, and a mini.json. All dependencies should be loaded as browserify, the mini currently doesn't support bower, sorry. NOTE: our default templating engine is ejs.

client folder
|_my-app-mini
  |_public folder
    |_css
    |_img
    |_js
  |_views folder
    |_parts folder for template parts
      |_head.ejs
      |_etc
    |_index.ejs
  |_index.js
  |_README.md
  |_mini.json

You can also add your app directly into the client folder alongside app-list.js, however this space is reserved for built in Mini apps. If you'd like to submit an app to be included with our default bundle, please contact us. This method will limit your app to the use of the default miniui Views and Public folders, and the mini.json, unless you modify them. 

### app-list.js

App-list.js is the module exported to the main instance of express. It lists all the require routes for the other apps. Your route should match your app name without the -mini on the end. So my-app-mini would be added with my-app.

	mini.use('/my-app', require('./my-app-mini'));

Your app will now be available at the localhost/my-app route.

### index.js

In your index file you'll need to require("express") and create an instance 
	
	var my-app = express()

Once that is done you can set your views and public routes relative to your app.

	Add some demo here.

### mini.json

Mini.json is the settings file for your app. At a minimum it should include a name and version number. Below is just an example of the things you can put into the mini.json.

	{
		"name": "my-app-mini",
		"version": "0.1.0",
		"license": "MIT",
		"route": "/my-app",
		"author": "my name",
		"url": "example.com/my-app",
		"docs": "example.com/my-app/docs",
		"repo": "https://github.com/my-github/repo",
		"social": {
			"twitter": "https://twitter.com/my-twitter-handle",
			"reddit": "my-u/name"
		},		
		"browserify": {
			"something": "you have browerified for the app",
			"somethingelse": "you have browserified for the app"
		}
	}

We'll be adding more funcionality from the mini.json file in the future.