(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['partials_tabla.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <tr>\r\n            <td class=\"etiqueta\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"API") || (depth0 != null ? lookupProperty(depth0,"API") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"API","hash":{},"data":data,"loc":{"start":{"line":14,"column":33},"end":{"line":14,"column":40}}}) : helper)))
    + "</td>\r\n            <td class=\"etiqueta\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"Description") || (depth0 != null ? lookupProperty(depth0,"Description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Description","hash":{},"data":data,"loc":{"start":{"line":15,"column":33},"end":{"line":15,"column":48}}}) : helper)))
    + "</td>\r\n            <td class=\"etiqueta\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"HTTPS") || (depth0 != null ? lookupProperty(depth0,"HTTPS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"HTTPS","hash":{},"data":data,"loc":{"start":{"line":16,"column":33},"end":{"line":16,"column":42}}}) : helper)))
    + "</td>\r\n            <td class=\"etiqueta\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"Cors") || (depth0 != null ? lookupProperty(depth0,"Cors") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Cors","hash":{},"data":data,"loc":{"start":{"line":17,"column":33},"end":{"line":17,"column":41}}}) : helper)))
    + "</td>\r\n        </tr>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table id=\"tabla\">\r\n    <thead>\r\n        <tr>\r\n            <th><span class=\"etiqueta\">Nombre</span></th>\r\n            <th><span class=\"etiqueta\">Descripción</span></th>\r\n            <th><span class=\"etiqueta\">HTTP</span></th>\r\n            <th><span class=\"etiqueta\">CORS</span></th>\r\n\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"resp") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":19,"column":17}}})) != null ? stack1 : "")
    + "    </tbody>\r\n</table>";
},"useData":true});
})();