(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['atf'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <h3 class=\"section-name freeform-exclusive\" style=\"text-align:center;\">ExpressNews.com Exclusive</h3>\n  ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n  <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">\n    <h2 class=\"freeform-atf-headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n  </a>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "  <h2 class=\"freeform-atf-headline\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<xmp>\n  <style>\n    img.freeform-atf-photo {\n      margin: 1em 0;\n      width: 100%;\n    }\n\n    h3.freeform-exclusive {\n      text-align: center;\n    }\n\n    h2.freeform-atf-headline {\n      font-family: Pierpont-bold, serif;\n      font-size: 29px;\n      font-weight: normal;\n      line-height: 31px;\n      margin: 1% auto;\n      text-align: center;\n    }\n\n    @media (min-width: 1280px) {\n      h2.freeform-atf-headline {\n        font-size: 26px;\n      }\n    }\n  </style>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.storyLink : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "  <img class=\"freeform-atf-photo\" src=\""
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n</xmp>";
},"useData":true});
templates['express-briefing'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n    <style>\n        img.podcastImage {\n            float: left;\n            padding-right: 10px;\n            width: 72px;\n        }\n\n        .podtext {\n            line-height: 20px;\n            margin-bottom: 0;\n        }\n\n        .audioContainer {\n            margin-bottom: .5em;\n        }\n\n        .controlContainer {\n            display: flex;\n            flex-flow: row nowrap;\n            justify-content: space-between;\n        }\n\n        .controlContainer .play {\n            cursor: pointer;\n            font-weight: bold;\n        }\n\n        .controlContainer .time,\n        .controlContainer .play {\n            margin: auto 0;\n        }\n\n        .scrubberContainer {\n            flex-basis: 50%;\n            margin: auto 0;\n            position: relative;\n        }\n\n        .scrubberContainer div {\n            position: absolute;\n        }\n\n        .scrubberContainer .length {\n            background-color: gray;\n            height: 5px;\n            width: 100%;\n        }\n\n        .scrubberContainer .progress {\n            background-color: black;\n            height: 5px;\n            width: 0px;\n            z-index: 5;\n        }\n\n        .article-text .podContainer {\n            background: #f7f7f7;\n        }\n\n        .article-text .podtext {\n            line-height: 20px;\n            margin-bottom: 0;\n        }\n\n        .article-text .controlContainer {\n            justify-content: space-between;\n        }\n\n        .article-text .controlContainer .play {\n            flex-basis: 20%;\n        }\n    </style>\n    <div class=\"podContainer\">\n        <img class=\"podcastImage\" src=\"http://ww1.hdnux.com/photos/70/11/41/14719068/4/500x500.png\">\n        <h2 class=\"podhed\">Start your day with local news</h2>\n        <p class=\"podtext\">"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "</p>\n        <div class=\"audioContainer\">\n            <audio preload=\"auto\" src=\""
    + alias4(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"file","hash":{},"data":data}) : helper)))
    + "\"></audio>\n            <div class=\"controlContainer\">\n                <p class=\"play\">►</p>\n                <div class=\"scrubberContainer\">\n                    <div class=\"length\"></div>\n                    <div class=\"progress\"></div>\n                </div>\n                <div class=\"time\">\n                    <span class=\"current\">0:00</span> /\n                    <span class=\"duration\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</xmp>";
},"useData":true});
templates['iframe'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <h3 class=\"freeform-iframe-exclusive section-name\">ExpressNews.com Exclusive</h3> ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\n    <h2 class=\"freeform-iframe-headline\"><a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</a></h2>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <h2 class=\"freeform-iframe-headline\">"
    + container.escapeExpression(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n    ";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "\n    <p class=\"freeform-iframe-subhead\">"
    + container.escapeExpression(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"chatter","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<xmp>\n    <style>\n        h3.freeform-iframe-exclusive {\n            text-align: center;\n        }\n\n        h2.freeform-iframe-headline {\n            font-family: Pierpont-bold, serif;\n            font-size: 42px;\n            line-height: 36px;\n            margin: 1% auto;\n            text-align: center;\n        }\n\n        p.freeform-iframe-subhead {\n            font-family: Georgia, serif;\n            font-size: 18px;\n            text-align: center;\n        }\n\n        .vidWrapper {\n            margin-bottom: 1em;\n            position: relative;\n            padding-bottom: 56.25%;\n            padding-top: 25px;\n            height: 0;\n        }\n\n        .vidWrapper iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 94%;\n        }\n    </style>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.storyLink : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.chatter : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"vidWrapper\">\n        "
    + ((stack1 = ((helper = (helper = helpers.iframe || (depth0 != null ? depth0.iframe : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"iframe","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n</xmp>";
},"useData":true});
templates['related-feature-block-b'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n    <style>\n        .fancy-refer-link {\n            background: #FDFDFD;\n        }\n\n        .fancy-refer-link img {\n            height: auto;\n            max-width: 100%;\n        }\n\n        .fancy-refer-link h4 {\n            background: #222;\n            color: #FAFAFA;\n            font-family: 'Sanchez Black', serif;\n            font-size: 17px;\n            font-weight: normal;\n            line-height: 1em;\n            margin-bottom: .33em;\n            padding: .25em 0 .25em .25em;\n            text-transform: capitalize;\n        }\n\n        .fancy-refer-link p {\n            line-height: 20px;\n            margin: 0;\n        }\n\n        .fancy-refer-link .headline {\n            font-weight: bold;\n            margin-bottom: .5em;\n        }\n\n        .fancy-refer-link .chatter {\n            font-size: 16px;\n        }\n\n        @media(min-width: 768px) {\n            .fancy-refer-link {\n                display: flex;\n                flex-flow: row nowrap;\n                justify-content: space-between;\n            }\n            .fancy-refer-link div {\n                flex-basis: 48%;\n            }\n        }\n    </style>\n\n    <div class=\"fancy-refer-link-container\">\n        <a href=\""
    + alias4(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "\">\n            <div class=\"fancy-refer-link\">\n                <div class=\"img-container\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n                </div>\n                <div class=\"text-container\">\n                    <h4>More from the Express-News</h4>\n                    <p class=\"headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</p>\n                    <p class=\"chatter\">"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "\n                    </p>\n                </div>\n            </div>\n        </a>\n    </div>\n</xmp>";
},"useData":true});
templates['related-feature-block'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n    <style>\n        img.freeform-cp-photo {\n            margin: 1em 0;\n            width: 100%;\n        }\n\n        h3.freeform-exclusive {\n            text-align: left;\n            font-weight: bold;\n        }\n\n        h2.freeform-cp-headline {\n            font-family: Pierpont-bold, serif;\n            font-size: 42px;\n            line-height: 36px;\n            margin: 1% auto;\n            text-align: left;\n        }\n\n        @media (min-width: 1280px) {\n            h2.freeform-cp-headline {\n                font-size: 33px;\n            }\n        }\n\n        p.freeform-cp-subhead {\n            font-family: Georgia, serif;\n            font-size: 20px;\n            width: 100%;\n        }\n\n        span.freeform-cp-dropcap {\n            font-family: Pierpont-bold, serif;\n            font-size: 32px;\n            font-weight: bold;\n        }\n\n        .related-block a:hover {\n            text-decoration: none;\n        }\n    </style>\n\n    <div class=\"related-block\">\n        <div class=\"solo_triple\">\n        </div>\n\n        <h3 class=\"section-name freeform-exclusive\" style=\"text-align:left;\">Related Feature</h3>\n\n        <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "\">\n            <h2 class=\"freeform-cp-headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n            <img class=\"freeform-cp-photo\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n        </a>\n\n        <p class=\"freeform-cp-subhead\">"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n\n</xmp>";
},"useData":true});
templates['related-feature-sidebar'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n    <style>\n        .related-project-box {\n            border-top: 5px solid #ccc;\n            border-bottom: 1px solid #ccc;\n            width: 100%;\n            margin: 0 0 24px 0;\n            float: right;\n            clear: right;\n        }\n\n        .related-project-box h2 {\n            font-family: Sanchez Bold, helvetica, sans-serif;\n            font-size: 14px;\n            font-weight: normal;\n            color: #222;\n            text-transform: uppercase;\n            width: 100%;\n            background: transparent;\n            line-height: 30px;\n            height: 30px;\n            border-bottom: 1px solid #ccc;\n            margin: 0 0 16px 0;\n            padding: 0;\n        }\n\n        .related-project-box .img-wrap {\n            width: 100%;\n            height: 200px;\n            margin: 0;\n            padding: 0;\n            position: relative;\n            overflow: hidden;\n        }\n\n        .related-project-box .img-wrap img {\n            width: 100%;\n            height: auto;\n            position: absolute;\n            top: -9999px;\n            bottom: -9999px;\n            left: -9999px;\n            right: -9999px;\n            margin: auto;\n        }\n\n        .related-project-box h3 {\n            font-family: Pierpont-bold, serif;\n            font-size: 32px;\n            line-height: 36px;\n            margin: 1% auto;\n            text-align: left;\n        }\n\n        .related-project-box p {\n            font-family: Georgia, serif;\n            font-size: 14px;\n            line-height: 24px;\n        }\n\n        @media (min-width: 768px) {\n            .related-project-box {\n                width: 300px;\n                margin: 0 0 40px 68px;\n            }\n        }\n    </style>\n\n    <div class=\"related-project-box\">\n        <h2>Related Feature</h2>\n        <div class=\"img-wrap\">\n            <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "\">\n                <img src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" />\n            </a>\n        </div>\n        <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "\">\n            <h3>"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h3>\n        </a>\n        <p>"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + "\n            <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "\">Read now.</a>\n        </p>\n    </div>\n</xmp>";
},"useData":true});
templates['story'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "  <h3 class=\"section-name freeform-exclusive\" style=\"text-align:center;\">ExpressNews.com Exclusive</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <span class=\"freeform-cp-dropcap\">"
    + alias4(((helper = (helper = helpers.firstLetter || (depth0 != null ? depth0.firstLetter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstLetter","hash":{},"data":data}) : helper)))
    + "</span>"
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " "
    + alias4(((helper = (helper = helpers.firstLetter || (depth0 != null ? depth0.firstLetter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstLetter","hash":{},"data":data}) : helper)))
    + alias4(((helper = (helper = helpers.chatter || (depth0 != null ? depth0.chatter : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chatter","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<xmp>\n  <style>\n    img.freeform-cp-photo {\n      margin: 1em 0;\n      width: 100%;\n    }\n\n    h3.freeform-exclusive {\n      text-align: center;\n    }\n\n    h2.freeform-cp-headline {\n      font-family: Pierpont-bold, serif;\n      font-size: 42px;\n      line-height: 36px;\n      margin: 1% auto;\n      text-align: center;\n    }\n\n    @media (min-width: 1280px) {\n      h2.freeform-cp-headline {\n        font-size: 33px;\n      }\n    }\n\n    p.freeform-cp-subhead {\n      font-family: Georgia, serif;\n      font-size: 18px;\n    }\n\n    span.freeform-cp-dropcap {\n      font-family: Pierpont-bold, serif;\n      font-size: 32px;\n      font-weight: bold;\n    }\n  </style>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.exclusive : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <a href=\""
    + alias4(((helper = (helper = helpers.storyLink || (depth0 != null ? depth0.storyLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"storyLink","hash":{},"data":data}) : helper)))
    + "\">\n    <h2 class=\"freeform-cp-headline\">"
    + alias4(((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"headline","hash":{},"data":data}) : helper)))
    + "</h2>\n  </a>\n\n  <img class=\"freeform-cp-photo\" src=\""
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\">\n\n  <p class=\"freeform-cp-subhead\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dropcap : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + "\n  </p>\n</xmp>";
},"useData":true});
})();