module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assests");

  return {
    dir: { input: "src", output: "_site" },
  };
};
