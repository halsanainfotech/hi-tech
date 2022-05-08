module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/js")
    eleventyConfig.addPassthroughCopy("./src/assets")
    return {
        dir: {
            input: "src",
            output: "public",
            data: "_data"
        },
    };
};