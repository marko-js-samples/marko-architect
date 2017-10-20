// Compiled using marko@4.5.3-2 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/arcmarko-get-index$0/page.marko",
    components_helpers = require("marko/dist/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_page_tag = marko_loadTag(require("lasso/taglib/config-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/dist/components/taglib/component-globals-tag")),
    marko_loadTemplate = require("marko/dist/runtime/helper-loadTemplate"),
    fancy_button_template = marko_loadTemplate(require.resolve("./components/fancy-button/index.marko")),
    fancy_button_tag = marko_loadTag(fancy_button_template),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/dist/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  lasso_page_tag({
      cacheKey: "get-index",
      dirname: __dirname,
      filename: __filename
    }, out);

  out.w("<!doctype html><html lang=\"en\"><head><meta charset=\"UTF-8\"><title>Marko + .architect</title>");

  lasso_head_tag({}, out, __component, "4");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<h1>Marko + .architect</h1>");

  fancy_button_tag({}, out, __component, "7");

  lasso_body_tag({}, out, __component, "8");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "9");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    aa_: true,
    _l_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/arcmarko-get-index$0/page.marko",
    tags: [
      "lasso/taglib/config-tag",
      "lasso/taglib/head-tag",
      "marko/dist/components/taglib/component-globals-tag",
      "./components/fancy-button/index.marko",
      "lasso/taglib/body-tag",
      "marko/dist/components/taglib/init-components-tag",
      "marko/dist/taglibs/async/await-reorderer-tag"
    ]
  };
