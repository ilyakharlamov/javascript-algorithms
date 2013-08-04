var config = module.exports;

config["javascript-algorithms"] = {
    env: "node",        // "node" | "browser"
    rootPath: "../",
    sources: [
        "src/**/*.js"      // Glob patterns supported
    ],
    tests: [
        "test/**/*.js"
    ]
};
