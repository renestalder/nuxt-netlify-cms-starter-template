module.exports = {
  api: function(isStatic) {
    let baseURL = "http://localhost:3000";
    let browserBaseURL = "";

    console.log('Generating page with following base url:');
    console.log(process.env.BASE_URL);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

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
