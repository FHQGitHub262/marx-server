"use strict";

const Hapi = require("hapi");
const Pack = require("./package");
const Vision = require("@hapi/vision");
const Path = require("path");

const server = Hapi.server({
  port: require("./config").http,
  host: "localhost",
  routes: {
    files: {
      relativeTo: Path.join(__dirname, "public")
    }
  }
});

var validate = function(decodedToken, callback) {
  return { isValid: true };
};
const init = async () => {
  server.state("token", {
    ttl: null, // 时效
    isSecure: false, // https
    isHttpOnly: false, // http Only
    encoding: "none", // encode
    clearInvalid: false, // 移除不可用的 cookie
    strictHeader: true // 不允许违反 RFC 6265
  });

  await server.register([
    require("inert"),
    require("@hapi/vision"),
    require("hapi-auth-jwt2"),
    {
      plugin: require("hapi-swagger"),
      options: {
        info: {
          title: "Marx Server Document",
          version: Pack.version
        }
      }
    }
    // {
    //   plugin: require("hapi-pino"),
    //   options: {
    //     prettyPrint: true
    //   }
    // }
  ]);

  server.auth.strategy("jwt", "jwt", {
    key: "NeverShareYourSecret", // Never Share your secret key
    validate,
    cookieKey: "token"
  });

  server.auth.default("jwt");

  server.route([
    {
      method: "GET",
      path: "/{param*}",
      config: {
        auth: false
      },
      handler: {
        directory: {
          path: "."
          // redirectToSlash: true
        }
      }
    },
    ...require("./routes/user"),
    ...require("./routes/test")
  ]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
