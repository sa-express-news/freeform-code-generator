##SAEN Freeform Code Generator##

This tool generates HTML code you can use for freeforms on the Express-News home page. The generator [lives on our S3 server,](https://s3.amazonaws.com/projects.expressnews.com/freeform-generator/index.html) should you need to use it.

To further develop this project, a couple things to know:

-Handlebars templates live in the `js` directory, and I compiled them down to a `templates.js` file.
-All page logic lives in `js/index.js`. I didn't bother with a compiler - it's all old-school JS, baby.
