Package.describe({
    name: "yankeyhotel:widow-width",
    summary: "A tiny package to keep an eye on your window width and media queries",
    version: "0.1.0",
    git: "https://github.com/yankeyhotel/meteor-widow-width"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.1");
    api.use(["meteor", "ddp", "jquery"]);

    api.addFiles("client/index.js", ["client"]);

    api.export("log");
});






Package.onTest(function(api) {
    api.use("tinytest");
    api.use("yankeyhotel:widow-width");

    api.addFiles("tests/client/index.js", ["client"]);

});
