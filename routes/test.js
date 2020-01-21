module.exports = [
  {
    method: "GET",
    path: "/hello",
    handler: (request, h) => {
      return h.file(require("path").join(process.cwd(), "./public/hello.html"));
    },
    config: {
      auth: false,
      tags: ["api", "tests"],
      description: "测试hello-hapi"
    }
  }
];
