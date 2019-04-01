// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/sanitize.css/sanitize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/variables.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/donors.json":[function(require,module,exports) {
module.exports = [{
  name: "Yesenia Lubowitz",
  amount: 312.56,
  type: "Match"
}, {
  name: "Ewald Weimann IV",
  amount: 85.36,
  type: "Challenge"
}, {
  name: "Denis Armstrong",
  amount: 357.18,
  type: "Match"
}, {
  name: "Roberta Gerhold",
  amount: 644.86,
  type: "Donation"
}, {
  name: "Favian Wilderman",
  amount: 519.92,
  type: "Match"
}, {
  name: "Ericka Herzog Sr.",
  amount: 534.68,
  type: "Donation"
}, {
  name: "Bryon Rohan",
  amount: 738.75,
  type: "Donation"
}, {
  name: "Jewell Kihn",
  amount: 195.27,
  type: "Donation"
}, {
  name: "Art Gottlieb II",
  amount: 369.91,
  type: "Donation"
}, {
  name: "Adrian Boehm I",
  amount: 497.79,
  type: "Donation"
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("sanitize.css");

require("./css/variables.css");

require("./css/index.css");

var _donors = _interopRequireDefault(require("./assets/donors.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaignCard = function campaignCard() {
  return {
    _cache: function _cache() {
      var cache = {
        cardIsFront: true
      };
      return cache;
    },
    flip: function flip(e, data) {
      var donorsTableSibling = document.querySelector('.card_back--article-table_thead'); // toggle cardFront boolean

      data.cardIsFront = !data.cardIsFront; // if card front visible

      if (data.cardIsFront) {
        // card back animation leave
        data.cardBack.classList.add('flip_out'); // wait for card back animation end

        data.cardBack.addEventListener("animationend", function () {
          // card back hide
          data.cardBack.classList.add('hide'); // card front remove hide

          data.cardFront.classList.remove('hide'); // card back animation enter

          data.cardFront.classList.add('flip_in');
        }, {
          once: true
        });
        data.cardFront.addEventListener("animationend", function () {
          // remove ui classes
          data.cardBack.classList.remove('flip_out');
          data.cardFront.classList.remove('flip_in');
        }, {
          once: true
        });
      } else {
        // card front animation leave
        data.cardFront.classList.add('flip_out'); // wait for card front animation end

        data.cardFront.addEventListener("animationend", function () {
          // card back remove hide
          data.cardFront.classList.add('hide'); // card front hide

          data.cardBack.classList.remove('hide'); // card back animation enter

          data.cardBack.classList.add('flip_in');
        }, {
          once: true
        }); // wait for card back animation

        data.cardBack.addEventListener("animationend", function () {
          // remove ui classes
          data.cardFront.classList.remove('flip_out');
          data.cardBack.classList.remove('flip_in');
        }, {
          once: true
        });
      }
    },
    setDonors: function setDonors(data) {
      var donor;
      var total = 0;
      var donorsTableSibling = document.querySelector('.card_back--article-table_thead');
      data.donors.map(function (el, i) {
        donor = "<div class=\"card_back--article-table_trow key_".concat(i, "\">\n          <div class=\"card_back--article-table_td\">").concat(el.name, "</div>\n          <div class=\"card_back--article-table_td\">").concat(el.amount, "</div>\n          <div class=\"card_back--article-table_td\">").concat(el.type, "</div>\n        </div>");
        total = el.amount + total; // append donor(s) after `div.card_back--article-table_thead`

        donorsTableSibling.insertAdjacentHTML("afterend", donor);
      });
      return total;
    },
    setDonorsTotal: function setDonorsTotal(total) {
      var elements = document.querySelectorAll('.donorTotal--js'); // loop elements

      for (var i = 0; i < elements.length; i++) {
        // display total donated
        elements[i].textContent = total;
      }
    },
    setNumOfDonors: function setNumOfDonors(total) {
      var elements = document.querySelectorAll('.numOfDonors--js'); // loop elements

      for (var i = 0; i < elements.length; i++) {
        // display total num of donors
        elements[i].textContent = total;
      }
    },
    // init app
    init: function init() {
      var _this = this;

      // store data
      var data = this._cache();

      data.donors = _donors.default;
      data.card = document.getElementById("card");
      data.cardFront = document.querySelector(".card_front--container");
      data.cardBack = document.querySelector(".card_back--container"); // build donor data

      var total = this.setDonors(data);
      this.setDonorsTotal(total);
      this.setNumOfDonors(data.donors.length); // listen for card click

      data.card.addEventListener("click", function (e) {
        // do not flip if cta btn is clicked
        if (!e.target.classList.contains('card_back__cta')) {
          // flip front/back
          _this.flip(e, data);
        }
      });
    }
  };
};

document.addEventListener("DOMContentLoaded", function () {
  // store factory function
  // in app variable
  var app = campaignCard(); // call campaign init

  app.init();
});
},{"sanitize.css":"../node_modules/sanitize.css/sanitize.css","./css/variables.css":"css/variables.css","./css/index.css":"css/index.css","./assets/donors.json":"assets/donors.json"}],"../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54041" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map