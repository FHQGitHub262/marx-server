const Joi = require("joi");
const JWT = require("jsonwebtoken");
const crypto = require("crypto");
module.exports = [
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const token = JWT.sign(
        {
          privilege: "student"
        },
        "NeverShareYourSecret"
      );

      h.state("token", token);

      return h.response({
        success: true,
        ret: {
          name: "学生1"
        }
      });
    },
    config: {
      auth: false,
      tags: ["api", "user"],
      description: "登录接口",
      validate: {
        payload: {
          uuid: Joi.string().example("123456"),
          password: Joi.string().example("123456")
        }
      },
      response: {
        schema: Joi.object().keys({
          success: Joi.boolean().example(true),
          ret: Joi.object().keys({
            name: Joi.string().example("学生1")
          })
        })
      }
    }
  },
  {
    method: "POST",
    path: "/logout",
    handler: (request, h) => {
      return h
        .response({
          success: true,
          ret: "登出成功" + JSON.stringify(request.auth.credentials)
        })
        .unstate("token");
    },
    config: {
      tags: ["api", "user"],
      description: "登出接口",
      validate: {},
      response: {}
    }
  },
  {
    method: "POST",
    path: "/add_users",
    handler: (request, h) => {
      return h.response({
        success: request.auth.credentials.privilege !== "student",
        ret: "修改成功"
      });
    },
    config: {
      tags: ["api", "user"],
      description: "添加用户接口",
      validate: {},
      response: {}
    }
  }
];
