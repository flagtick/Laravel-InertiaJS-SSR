const path = require("path");
const mix = require("laravel-mix");

// Build files
mix.js("resources/js/app.js", "public/js")
    .vue({ version: 3 })
    .alias({ "@": path.resolve("resources/js") })
    .extract()
    .postCss("resources/css/app.css", "public/css")
    .version();
