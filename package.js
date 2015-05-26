Package.describe({
    name: "yankeyhotel:window-width",
    summary: "A tiny package to keep an eye on your window width and media queries",
    version: "0.1.0",
    git: "https://github.com/yankeyhotel/meteor-widow-width",
    documentation: "README.md"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");
    api.use(["meteor", "ddp", "jquery", "templating", "less"]);

    api.addFiles([
        "lib/settings.js",
        "client/window-width-variables.less",
        "client/window-width.less",
        "client/window-width.js",
    ], ["client"]);

    api.addFiles("server/window-width.js", ["server"]);

    api.export("yankeyhotelWW", ["client", "server"]);
});






Package.onTest(function(api) {
    api.use("tinytest");
    api.use("yankeyhotel:widow-width");

    api.addFiles("tests/client/index.js", ["client"]);

});
