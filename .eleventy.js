module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/styles");
  eleventyConfig.addPassthroughCopy("./src/assests");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/_posts");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: { input: "src", output: "_site" },
  };
};
