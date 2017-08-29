(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['atf'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <h3 class=\"section-name freeform-exclusive\" style=\"text-align:center;\">ExpressNews.com Exclusive</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n<style>\n\n  img.freeform-atf-photo {\n    margin: 1em 0;\n    width: 100%;\n  }\n\n  h3.freeform-exclusive{\n    text-align: center;\n  }\n \n  h2.freeform-atf-headline {\n    font-family: Pierpont-bold, serif;\n    font-size: 29px;\n    font-weight: normal;\n    line-height: 38px;\n    margin: 1% auto;\n    text-align: center;\n  }\n \n  @media (min-width: 1280px) {\n    h2.freeform-atf-headline {\n      font-size: 26px;\n    }\n  }\n</style>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">\n  <h2 class=\"freeform-atf-headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2></a>\n\n <img class=\"freeform-atf-photo\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n</xmp>";
},"useData":true});
templates['iframe'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <h3 class=\"freeform-iframe-exclusive section-name\">ExpressNews.com Exclusive</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <h2 class=\"freeform-iframe-headline\"><a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</a></h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <h2 class=\"freeform-iframe-headline\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function";

  return "<xmp>\n            <style>\n            h3.freeform-iframe-exclusive {\n                text-align: center;\n            }\n\n            h2.freeform-iframe-headline {\n                font-family: Pierpont-bold, serif;\n                font-size: 44px;\n                line-height: 38px;\n                margin: 1% auto;\n                text-align: center;\n            }\n\n            p.freeform-iframe-subhead {\n                font-family: Georgia, serif;\n                font-size: 18px;\n                text-align: center;\n            }\n\n            .vidWrapper {\n                margin-bottom: 1em;\n                position: relative;\n                padding-bottom: 56.25%;\n                padding-top: 25px;\n                height: 0;\n            }\n\n            .vidWrapper iframe {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 94%;\n            }\n            </style>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.storyLink : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "            <p class=\"freeform-iframe-subhead\">"
    + container.escapeExpression(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "</p>\n            <div class=\"vidWrapper\">\n                "
    + ((stack1 = ((helper = (helper = helpers.iframe || (depth0 != null ? depth0.iframe : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"iframe","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n            </div>\n        </xmp>";
},"useData":true});
templates['story'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <h3 class=\"section-name freeform-exclusive\" style=\"text-align:center;\">ExpressNews.com Exclusive</h3>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n<style>\n\n  img.freeform-cp-photo {\n    margin: 1em 0;\n    width: 100%;\n  }\n\n  h3.freeform-exclusive{\n    text-align: center;\n  }\n \n  h2.freeform-cp-headline {\n    font-family: Pierpont-bold, serif;\n    font-size: 44px;\n    line-height: 38px;\n    margin: 1% auto;\n    text-align: center;\n  }\n \n  @media (min-width: 1280px) {\n    h2.freeform-cp-headline {\n      font-size: 35px;\n    }\n  }\n \n  p.freeform-cp-subhead {\n    font-family: Georgia, serif;\n    font-size: 18px;\n  }\n \n  span.freeform-cp-dropcap {\n    font-family: Pierpont-bold, serif;\n    font-size: 32px;\n    font-weight: bold;\n  }\n</style>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n<a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">\n  <h2 class=\"freeform-cp-headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2></a>\n\n <img class=\"freeform-cp-photo\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n\n <p class=\"freeform-cp-subhead\">\n  <span class=\"freeform-cp-dropcap\">"
    + alias4(((helper = (helper = helpers.firstLetter || (depth0 != null ? depth0.firstLetter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstLetter","hash":{},"data":data}) : helper)))
    + "</span>"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "\n </p>\n</xmp>";
},"useData":true});
})();