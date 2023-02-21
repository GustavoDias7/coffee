module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: "src/view/",
      includes: "_includes",
      output: "public",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
