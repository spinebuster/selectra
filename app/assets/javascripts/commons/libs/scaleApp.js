/*!
scaleapp - v0.4.3 - 2014-02-07
This program is distributed under the terms of the MIT license.
Copyright (c) 2011-2014 Markus Kohlhase <mail@markus-kohlhase.de>
*/
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m=[].slice;g=/function[^(]*\(([^)]*)\)/,d=/([^\s,]+)/g,h=function(a){var b;return((null!=a?null!=(b=a.toString().match(g))?b[1]:void 0:void 0)||"").match(d)||[]},i=function(a,b,c){var d,e,f,g,h,i,j,k,l;if(null==a&&(a=[]),null==b&&(b=function(){}),d=a.length,h=[],0===d)return b(null,h);for(e=[],f=!1,l=[],g=j=0,k=a.length;k>j;g=++j)i=a[g],l.push(function(a,g){var i,j;j=function(){var a,i;if(a=arguments[0],i=2<=arguments.length?m.call(arguments,1):[],a){if(e[g]=a,f=!0,!c)return b(e,h)}else h[g]=i.length<2?i[0]:i;return--d<=0?f?b(e,h):b(null,h):void 0};try{return a(j)}catch(k){return i=k,j(i)}}(i,g));return l},j=function(a,b,c){var d,e,f,g,h,i;return null==a&&(a=[]),null==b&&(b=function(){}),g=-1,d=a.length,i=[],0===d?b(null,i):(e=[],f=!1,(h=function(){var j,k,l;if(k=arguments[0],l=2<=arguments.length?m.call(arguments,1):[],k){if(e[g]=k,f=!0,!c)return b(e,i)}else g>-1&&(i[g]=l.length<2?l[0]:l);if(++g>=d)return f?b(e,i):b(null,i);try{return a[g](h)}catch(n){return j=n,h(j)}})())},k=function(a,b){var c,d;return c=-1,0===a.length?b():(d=function(){var e,f;return e=arguments[0],f=2<=arguments.length?m.call(arguments,1):[],null!=e?b(e):++c>=a.length?b.apply(null,[null].concat(m.call(f))):a[c].apply(a,m.call(f).concat([d]))})()},f=function(a,b,c,d){var e,f;return null==a&&(a=[]),f=function(){var c,d,f;for(f=[],c=0,d=a.length;d>c;c++)e=a[c],f.push(function(a){return function(c){return b(a,c)}}(e));return f}(),l.runParallel(f,c,d)},l={doForAll:f,runParallel:i,runSeries:j,runWaterfall:k,getArgumentNames:h,hasArgument:function(a,b){return null==b&&(b=1),l.getArgumentNames(a).length>=b}},b=function(){function a(a,b){this.cascadeChannels=null!=b?b:!1,this.channels={},a instanceof Object?this.installTo(a):a===!0&&(this.cascadeChannels=!0)}return a.prototype.on=function(b,c,d){var e,f,g,h,i,j,k,l,m,n;if(null==d&&(d=this),null==(j=this.channels)[b]&&(j[b]=[]),h=this,b instanceof Array){for(m=[],k=0,l=b.length;l>k;k++)e=b[k],m.push(this.on(e,c,d));return m}if("object"==typeof b){n=[];for(f in b)i=b[f],n.push(this.on(f,i,c));return n}return"function"!=typeof c?!1:"string"!=typeof b?!1:(g={context:d,callback:c},{attach:function(){return h.channels[b].push(g),this},detach:function(){return a._rm(h,b,g.callback),this}}.attach())},a.prototype.off=function(b,c){var d;switch(typeof b){case"string":"function"==typeof c&&a._rm(this,b,c),"undefined"==typeof c&&a._rm(this,b);break;case"function":for(d in this.channels)a._rm(this,d,b);break;case"undefined":for(d in this.channels)a._rm(this,d);break;case"object":for(d in this.channels)a._rm(this,d,null,b)}return this},a.prototype.emit=function(a,b,c){var d,e,f,g;return null==c&&(c=function(){}),"function"==typeof b&&(c=b,b=void 0),"string"!=typeof a?!1:(f=this.channels[a]||[],g=function(){var c,d,g;for(g=[],c=0,d=f.length;d>c;c++)e=f[c],g.push(function(c){return function(d){var e;try{return l.hasArgument(c.callback,3)?c.callback.apply(c.context,[b,a,d]):d(null,c.callback.apply(c.context,[b,a]))}catch(f){return e=f,d(e)}}}(e));return g}(),l.runSeries(g,function(a){var b,d;return a&&(b=new Error(function(){var b,c,e;for(e=[],b=0,c=a.length;c>b;b++)d=a[b],null!=d&&e.push(d.message);return e}().join("; "))),c(b)},!0),this.cascadeChannels&&(d=a.split("/")).length>1&&this.emit(d.slice(0,-1).join("/"),b,c),this)},a.prototype.installTo=function(a,b){var c,d;if("object"==typeof a)for(c in this)d=this[c],b?a[c]=d:null==a[c]&&(a[c]=d);return this},a._rm=function(a,b,c,d){var e;if(null!=a.channels[b])return a.channels[b]=function(){var f,g,h,i;for(h=a.channels[b],i=[],f=0,g=h.length;g>f;f++)e=h[f],(null!=c?e.callback!==c:null!=d?e.context!==d:e.context!==a)&&i.push(e);return i}()},a}(),e=function(a,b,c){return typeof b!==a?""+c+" has to be a "+a:void 0},a=function(){function a(a){this.Sandbox=a,this._modules={},this._plugins=[],this._instances={},this._sandboxes={},this._running={},this._mediator=new b(this),this.Mediator=b,null==this.Sandbox&&(this.Sandbox=function(a,b,c,d){return this.instanceId=b,this.options=null!=c?c:{},this.moduleId=d,a._mediator.installTo(this),this})}return a.prototype.log={error:function(){},log:function(){},info:function(){},warn:function(){},enable:function(){}},a.prototype.register=function(a,b,c){var d;return null==c&&(c={}),(d=e("string",a,"module ID")||e("function",b,"creator")||e("object",c,"option parameter"))?(this.log.error("could not register module '"+a+"': "+d),this):a in this._modules?(this.log.warn("module "+a+" was already registered"),this):(this._modules[a]={creator:b,options:c,id:a},this)},a.prototype.start=function(a,b,c){var d,f,g;return null==b&&(b={}),null==c&&(c=function(){}),0===arguments.length?this._startAll():a instanceof Array?this._startAll(a,b):"function"==typeof a?this._startAll(null,a):("function"==typeof b&&(c=b,b={}),(d=e("string",a,"module ID")||e("object",b,"second parameter")||(this._modules[a]?void 0:"module doesn't exist"))?this._startFail(d,c):(f=b.instanceId||a,this._running[f]===!0?this._startFail(new Error("module was already started"),c):(g=function(a){return function(b,e,g){if(b)return a._startFail(b,c);try{return l.hasArgument(e.init,2)?e.init(g,function(b){return b||(a._running[f]=!0),c(b)}):(e.init(g),a._running[f]=!0,c())}catch(h){return d=h,a._startFail(d,c)}}}(this),this.boot(function(d){return function(e){return e?d._startFail(e,c):d._createInstance(a,b,g)}}(this)))))},a.prototype._startFail=function(a,b){return this.log.error(a),b(new Error("could not start module: "+a.message)),this},a.prototype._createInstance=function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o;if(f=b.instanceId||a,j=b.options,h=this._modules[a],this._instances[f])return c(this._instances[f]);for(e={},o=[h.options,j],m=0,n=o.length;n>m;m++)if(i=o[m])for(g in i)l=i[g],null==e[g]&&(e[g]=l);return d="function"==typeof b.sandbox?b.sandbox:this.Sandbox,k=new d(this,f,e,a),this._runSandboxPlugins("init",k,function(a){return function(){var b;return b=new h.creator(k),"function"!=typeof b.init?c(new Error("module has no 'init' method")):(a._instances[f]=b,a._sandboxes[f]=k,c(null,b,e))}}(this))},a.prototype._runSandboxPlugins=function(a,b,c){var d,e;return e=function(){var c,e,f,g,h;for(f=this._plugins,h=[],c=0,e=f.length;e>c;c++)d=f[c],"function"==typeof(null!=(g=d.plugin)?g[a]:void 0)&&h.push(function(c){var d;return d=c.plugin[a],function(a){return l.hasArgument(d,3)?d(b,c.options,a):(d(b,c.options),a())}}(d));return h}.call(this),l.runSeries(e,c,!0)},a.prototype._startAll=function(a,b){var c,d,e;return null==a&&(a=function(){var a;a=[];for(d in this._modules)a.push(d);return a}.call(this)),e=function(a){return function(b,c){return a.start(b,a._modules[b].options,c)}}(this),c=function(c){var d,e,f,g;return(null!=c?c.length:void 0)>0&&(f=function(){var b,d,f;for(f=[],e=b=0,d=c.length;d>b;e=++b)g=c[e],null!=g&&f.push("'"+a[e]+"'");return f}(),d=new Error("errors occoured in the following modules: "+f)),"function"==typeof b?b(d):void 0},l.doForAll(a,e,c,!0),this},a.prototype.stop=function(a,b){var c,d;return null==b&&(b=function(){}),0===arguments.length||"function"==typeof a?l.doForAll(function(){var a;a=[];for(d in this._instances)a.push(d);return a}.call(this),function(a){return function(){return a.stop.apply(a,arguments)}}(this),a,!0):(c=this._instances[a])&&(delete this._instances[a],this._mediator.off(c),this._runSandboxPlugins("destroy",this._sandboxes[a],function(d){return function(e){return l.hasArgument(c.destroy)?c.destroy(function(c){return delete d._running[a],b(e||c)}):("function"==typeof c.destroy&&c.destroy(),delete d._running[a],b(e))}}(this))),this},a.prototype.use=function(a,b){var c,d,e;if(a instanceof Array)for(d=0,e=a.length;e>d;d++)switch(c=a[d],typeof c){case"function":this.use(c);break;case"object":this.use(c.plugin,c.options)}else{if("function"!=typeof a)return this;this._plugins.push({creator:a,options:b})}return this},a.prototype.boot=function(a){var b,c,d;return b=this,d=function(){var a,d,e,f;for(e=this._plugins,f=[],a=0,d=e.length;d>a;a++)c=e[a],c.booted!==!0&&f.push(function(a){return l.hasArgument(a.creator,3)?function(c){var d;return d=a.creator(b,a.options,function(b){return b||(a.booted=!0,a.plugin=d),c()})}:function(c){return a.plugin=a.creator(b,a.options),a.booted=!0,c()}}(c));return f}.call(this),l.runSeries(d,a,!0),this},a}(),c={VERSION:"0.4.3",util:l,Mediator:b,Core:a,plugins:{},modules:{}},null!=("undefined"!=typeof define&&null!==define?define.amd:void 0)?define(function(){return c}):"undefined"!=typeof window&&null!==window?null==window.scaleApp&&(window.scaleApp=c):null!=("undefined"!=typeof module&&null!==module?module.exports:void 0)&&(module.exports=c)}).call(this);
