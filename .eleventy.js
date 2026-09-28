const { default: Image, generateHTML } = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/assets");

    // Rebuild in --serve mode when photos are added/removed, even though
    // src/photos isn't passthrough-copied (eleventy-img handles its output).
    eleventyConfig.addWatchTarget("src/photos");

    // Turns a source path into the responsive <picture> markup for a
    // gallery photo. Drop a new file in src/photos/ and this generates
    // resized webp/jpeg variants automatically — no per-photo markup.
    eleventyConfig.addAsyncShortcode("galleryImage", async function(src, alt) {
        let metadata = await Image(src, {
            widths: [320, 640, 960, 1280, 1600],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/assets/images/gallery/",
            urlPath: "/assets/images/gallery/",
        });

        return generateHTML(metadata, {
            alt,
            sizes: "40vw",
            loading: "lazy",
            decoding: "async",
        });
    });

    // Same idea as galleryImage, but for the full-bleed hero photo: it needs
    // to stay eager/full-viewport-wide (it's the LCP image, always visible on
    // load) and keep transparency, so the fallback format is png, not jpeg.
    eleventyConfig.addAsyncShortcode("heroImage", async function(src, alt) {
        let metadata = await Image(src, {
            widths: [640, 960, 1280, 1600, 1920, 2400],
            formats: ["webp", "png"],
            outputDir: "./_site/assets/images/gallery/",
            urlPath: "/assets/images/gallery/",
        });

        return generateHTML(metadata, {
            alt,
            sizes: "100vw",
            loading: "eager",
            decoding: "async",
            fetchpriority: "high",
        });
    });

    return {
        dir: { input: "src", output: "_site", includes: "_includes" }
    };
};
