module.exports = {
  api: function(isStatic) {
    const baseURL = process.env.BASE_URL || "http://localhost:3000";
    const browserBaseURL = !isStatic ? "" : baseURL;

    return {
      baseURL,
      browserBaseURL
    };
  },
  content: [
    [
      "pages",
      {
        page: "/page/_page",
        permalink: "/:slug",
        isPost: false
      }
    ]
  ]
};
