// Compiled using marko@4.5.3-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function(input) {
          this.state = {
              count: input.count || 0
            };
        },
        increment: function() {
          this.state.count++;
        }
      },
    marko_componentType = "/arcmarko-get-index$0/components/fancy-button/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"count\">" +
    marko_escapeXml(state.count) +
    "</div><button class=\"example-button\"" +
    marko_attr("data-marko", {
      onclick: __component.d("increment")
    }, false) +
    ">Click me!</button>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: ".count {\n    color:#09c;\n    font-size:3em;\n  }\n  .example-button {\n    font-size:1em;\n    padding:0.5em;\n  }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/arcmarko-get-index$0/components/fancy-button/index.marko",
    component: "./index.marko"
  };
