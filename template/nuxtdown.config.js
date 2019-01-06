module.exports = {
  api: function(isStatic) {
    let baseURL = "http://localhost:3000";
    let browserBaseURL = "";

    const envUrl = process.env.BASE_URL || "http://localhost:3000";
    browserBaseURL = !isStatic ? "" : envUrl;

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
