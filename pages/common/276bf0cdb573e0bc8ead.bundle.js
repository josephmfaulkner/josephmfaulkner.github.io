/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _scss_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_common_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_js_materialize__WEBPACK_IMPORTED_MODULE_1__);



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document,
      win = window,
      ArrayProto = Array.prototype,
      slice = ArrayProto.slice,
      filter = ArrayProto.filter,
      push = ArrayProto.push;

  var noop = function () {},
      isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  },
      isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/,
      classMatch = /^\.[\w-]*$/,
      htmlMatch = /<.+>/,
      singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector,
        i = 0,
        length;

    if (isString(selector)) {
      elems = idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context);

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments),
        length = args.length,
        i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length,
        i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
      /* Use browser's `matches` function if string */
      isString(selector) ? matches :
      /* Match a cash element */
      selector.cash ? function (el) {
        return selector.is(el);
      } :
      /* Direct comparison */
      function (el, selector) {
        return el === selector;
      }
    );
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length,
          i = first.length,
          j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return node[uid] = node[uid] || {};
  }

  function setData(node, key, value) {
    return getDataCache(node)[key] = value;
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        });
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className);
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this;
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false,
          classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        });
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this;
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this;
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = isFunction(selector) ? selector : getCompareFunction(selector);

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return index < 0 ? this[index + this.length] : this[index];
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0],
          collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g,
        whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }();

  var getPrefixedProp = function () {
    var cache = {},
        doc = document,
        div = doc.createElement("div"),
        style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          prefixes = ["webkit", "moz", "ms", "o"],
          props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }();

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop];
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"),
        eventCache = events && events[eventName],
        index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line
      var originalCallback;
      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;
          while (!matches(t, delegate)) {
            if (t === this || t === null) {
              return t = false;
            }

            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    /**
     * Modified
     * Triggers browser event
     * @param String eventName
     * @param Object data - Add properties to event object
     */
    trigger: function (eventName, data) {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        evt = this.extend(evt, data);
        return this.each(function (v) {
          return v.dispatchEvent(evt);
        });
      }
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return el.checked ? el.value : null;
      case "checkbox":
        return el.checked ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      }

      return this.each(function (v) {
        return v.value = value;
      });
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, i === 0 ? child : child.cloneNode(true), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = content.nodeType ? content[0].outerHTML : content;
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;

      cash(selector).each(function (el, i) {
        var parent = el.parentNode,
            sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        if (!!v.parentNode) {
          return v.parentNode.removeChild(v);
        }
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return !selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      });
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false,
          comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      };

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last,
          result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || selector && matches(last, selector)) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function (selector) {
      var collection = this.parent().children(selector),
          el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });

  return cash;
});
;
var Component = function () {
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} options
   */
  function Component(classDef, el, options) {
    _classCallCheck(this, Component);

    // Display error if el is valid HTML Element
    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    }

    // If exists, destroy and reinitialize in child
    var ins = classDef.getInstance(el);
    if (!!ins) {
      ins.destroy();
    }

    this.el = el;
    this.$el = cash(el);
  }

  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList | jQuery} els
   * @param {Object} options
   */


  _createClass(Component, null, [{
    key: "init",
    value: function init(classDef, els, options) {
      var instances = null;
      if (els instanceof Element) {
        instances = new classDef(els, options);
      } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
        var instancesArr = [];
        for (var i = 0; i < els.length; i++) {
          instancesArr.push(new classDef(els[i], options));
        }
        instances = instancesArr;
      }

      return instances;
    }
  }]);

  return Component;
}();

; // Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
  if (window.Package) {
    M = {};
  } else {
    window.M = {};
  }

  // Check for jQuery
  M.jQueryLoaded = !!window.jQuery;
})(window);

// AMD
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return M;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Common JS
} else {}

M.version = '1.0.0';

M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

/**
 * TabPress Keydown handler
 */
M.tabPressed = false;
M.keyDown = false;
var docHandleKeydown = function (e) {
  M.keyDown = true;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = true;
  }
};
var docHandleKeyup = function (e) {
  M.keyDown = false;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = false;
  }
};
var docHandleFocus = function (e) {
  if (M.keyDown) {
    document.body.classList.add('keyboard-focused');
  }
};
var docHandleBlur = function (e) {
  document.body.classList.remove('keyboard-focused');
};
document.addEventListener('keydown', docHandleKeydown, true);
document.addEventListener('keyup', docHandleKeyup, true);
document.addEventListener('focus', docHandleFocus, true);
document.addEventListener('blur', docHandleBlur, true);

/**
 * Initialize jQuery wrapper for plugin
 * @param {Class} plugin  javascript class
 * @param {string} pluginName  jQuery plugin name
 * @param {string} classRef  Class reference name
 */
M.initializeJqueryWrapper = function (plugin, pluginName, classRef) {
  jQuery.fn[pluginName] = function (methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (plugin.prototype[methodOrOptions]) {
      var params = Array.prototype.slice.call(arguments, 1);

      // Getter methods
      if (methodOrOptions.slice(0, 3) === 'get') {
        var instance = this.first()[0][classRef];
        return instance[methodOrOptions].apply(instance, params);
      }

      // Void methods
      return this.each(function () {
        var instance = this[classRef];
        instance[methodOrOptions].apply(instance, params);
      });

      // Initialize plugin if options or no argument is passed in
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      plugin.init(this, arguments[0]);
      return this;
    }

    // Return error if an unrecognized  method name is passed in
    jQuery.error("Method " + methodOrOptions + " does not exist on jQuery." + pluginName);
  };
};

/**
 * Automatically initialize components
 * @param {Element} context  DOM Element to search within for components
 */
M.AutoInit = function (context) {
  // Use document.body if no context is given
  var root = !!context ? context : document.body;

  var registry = {
    Autocomplete: root.querySelectorAll('.autocomplete:not(.no-autoinit)'),
    Carousel: root.querySelectorAll('.carousel:not(.no-autoinit)'),
    Chips: root.querySelectorAll('.chips:not(.no-autoinit)'),
    Collapsible: root.querySelectorAll('.collapsible:not(.no-autoinit)'),
    Datepicker: root.querySelectorAll('.datepicker:not(.no-autoinit)'),
    Dropdown: root.querySelectorAll('.dropdown-trigger:not(.no-autoinit)'),
    Materialbox: root.querySelectorAll('.materialboxed:not(.no-autoinit)'),
    Modal: root.querySelectorAll('.modal:not(.no-autoinit)'),
    Parallax: root.querySelectorAll('.parallax:not(.no-autoinit)'),
    Pushpin: root.querySelectorAll('.pushpin:not(.no-autoinit)'),
    ScrollSpy: root.querySelectorAll('.scrollspy:not(.no-autoinit)'),
    FormSelect: root.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: root.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: root.querySelectorAll('.tabs:not(.no-autoinit)'),
    TapTarget: root.querySelectorAll('.tap-target:not(.no-autoinit)'),
    Timepicker: root.querySelectorAll('.timepicker:not(.no-autoinit)'),
    Tooltip: root.querySelectorAll('.tooltipped:not(.no-autoinit)'),
    FloatingActionButton: root.querySelectorAll('.fixed-action-btn:not(.no-autoinit)')
  };

  for (var pluginName in registry) {
    var plugin = M[pluginName];
    plugin.init(registry[pluginName]);
  }
};

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
M.objectSelectorString = function (obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
M.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
M.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, '\\$1');
};

M.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css('position') === 'fixed') {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Escapes hash from special characters
 * @param {Element} container  Container element that acts as the boundary
 * @param {Bounding} bounding  element bounding that is being checked
 * @param {Number} offset  offset from edge that counts as exceeding
 * @returns {Edges}
 */
M.checkWithinContainer = function (container, bounding, offset) {
  var edges = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };

  var containerRect = container.getBoundingClientRect();
  // If body element is smaller than viewport, use viewport height instead.
  var containerBottom = container === document.body ? Math.max(containerRect.bottom, window.innerHeight) : containerRect.bottom;

  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;

  var scrolledX = bounding.left - scrollLeft;
  var scrolledY = bounding.top - scrollTop;

  // Check for container and viewport for each edge
  if (scrolledX < containerRect.left + offset || scrolledX < offset) {
    edges.left = true;
  }

  if (scrolledX + bounding.width > containerRect.right - offset || scrolledX + bounding.width > window.innerWidth - offset) {
    edges.right = true;
  }

  if (scrolledY < containerRect.top + offset || scrolledY < offset) {
    edges.top = true;
  }

  if (scrolledY + bounding.height > containerBottom - offset || scrolledY + bounding.height > window.innerHeight - offset) {
    edges.bottom = true;
  }

  return edges;
};

M.checkPossibleAlignments = function (el, container, bounding, offset) {
  var canAlign = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  };

  var containerAllowsOverflow = getComputedStyle(container).overflow === 'visible';
  var containerRect = container.getBoundingClientRect();
  var containerHeight = Math.min(containerRect.height, window.innerHeight);
  var containerWidth = Math.min(containerRect.width, window.innerWidth);
  var elOffsetRect = el.getBoundingClientRect();

  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;

  var scrolledX = bounding.left - scrollLeft;
  var scrolledYTopEdge = bounding.top - scrollTop;
  var scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop;

  // Check for container and viewport for left
  canAlign.spaceOnRight = !containerAllowsOverflow ? containerWidth - (scrolledX + bounding.width) : window.innerWidth - (elOffsetRect.left + bounding.width);
  if (canAlign.spaceOnRight < 0) {
    canAlign.left = false;
  }

  // Check for container and viewport for Right
  canAlign.spaceOnLeft = !containerAllowsOverflow ? scrolledX - bounding.width + elOffsetRect.width : elOffsetRect.right - bounding.width;
  if (canAlign.spaceOnLeft < 0) {
    canAlign.right = false;
  }

  // Check for container and viewport for Top
  canAlign.spaceOnBottom = !containerAllowsOverflow ? containerHeight - (scrolledYTopEdge + bounding.height + offset) : window.innerHeight - (elOffsetRect.top + bounding.height + offset);
  if (canAlign.spaceOnBottom < 0) {
    canAlign.top = false;
  }

  // Check for container and viewport for Bottom
  canAlign.spaceOnTop = !containerAllowsOverflow ? scrolledYBottomEdge - (bounding.height - offset) : elOffsetRect.bottom - (bounding.height + offset);
  if (canAlign.spaceOnTop < 0) {
    canAlign.bottom = false;
  }

  return canAlign;
};

M.getOverflowParent = function (element) {
  if (element == null) {
    return null;
  }

  if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
    return element;
  }

  return M.getOverflowParent(element.parentElement);
};

/**
 * Gets id of component from a trigger
 * @param {Element} trigger  trigger
 * @returns {string}
 */
M.getIdFromTrigger = function (trigger) {
  var id = trigger.getAttribute('data-target');
  if (!id) {
    id = trigger.getAttribute('href');
    if (id) {
      id = id.slice(1);
    } else {
      id = '';
    }
  }
  return id;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
M.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
M.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = Date.now || function () {
  return new Date().getTime();
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
M.throttle = function (func, wait, options) {
  var context = void 0,
      args = void 0,
      result = void 0;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
; /*
  v2.2.0
  2017 Julian Garnier
  Released under the MIT license
  */
var $jscomp = { scope: {} };$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};$jscomp.getGlobal = function (e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
};$jscomp.global = $jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function () {
      return $jscomp.arrayIterator(this);
    } });$jscomp.initSymbolIterator = function () {};
};$jscomp.arrayIterator = function (e) {
  var r = 0;return $jscomp.iteratorPrototype(function () {
    return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
  });
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };return e;
};$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();e instanceof String && (e += "");var p = 0,
      m = { next: function () {
      if (p < e.length) {
        var u = p++;return { value: r(u, e[u]), done: !1 };
      }m.next = function () {
        return { done: !0, value: void 0 };
      };return m.next();
    } };m[Symbol.iterator] = function () {
    return m;
  };return m;
};
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;e = e.split(".");for (m = 0; m < e.length - 1; m++) {
      var u = e[m];u in p || (p[u] = {});p = p[u];
    }e = e[e.length - 1];m = p[e];r = r(m);r != m && null != r && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
  }
};$jscomp.polyfill("Array.prototype.keys", function (e) {
  return e ? e : function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, "es6-impl", "es3");var $jscomp$this = this;
(function (r) {
  M.anime = r();
})(function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];c.call(b, k, n, a) && f.push(k);
      }
    }return f;
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }function C(a) {
    var c = {},
        d;for (d in a) {
      c[d] = a[d];
    }return c;
  }function D(a, c) {
    var d = C(a),
        b;for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }return d;
  }function z(a, c) {
    var d = C(a),
        b;for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }return d;
  }function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);var d = parseInt(c[2], 16),
        c = parseInt(c[3], 16);return "rgba(" + a + "," + d + "," + c + ",1)";
  }function U(a) {
    function c(a, c, b) {
      0 > b && (b += 1);1 < b && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100,
        f = parseInt(d[3]) / 100,
        d = d[4] || 1;if (0 == b) f = b = a = f;else {
      var n = .5 > f ? f * (1 + b) : f + b - f * b,
          k = 2 * f - n,
          f = c(k, n, a + 1 / 3),
          b = c(k, n, a);a = c(k, n, a - 1 / 3);
    }return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
  }function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }function V(a) {
    if (-1 < a.indexOf("translate") || "perspective" === a) return "px";if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function J(a, c) {
    if (h.dom(a) && u(W, c)) return "transform";if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";if (h.dom(a) && "transform" !== c && E(a, c)) return "css";if (null != a[c]) return "object";
  }function X(a, c) {
    var d = V(c),
        d = -1 < c.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }a = r(n, function (a, b) {
      return f[b] === c;
    });return a.length ? a[0] : d;
  }function K(a, c) {
    switch (J(a, c)) {case "transform":
        return X(a, c);case "css":
        return E(a, c);case "attribute":
        return a.getAttribute(c);}return a[c] || 0;
  }function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return c + a + b;case "-":
        return c - a + b;case "*":
        return c * a + b;}
  }function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }function M(a) {
    a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);0 < b && (c += F(d, f));d = f;
    }return c;
  }function N(a) {
    if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {case "circle":
        return 2 * Math.PI * a.getAttribute("r");case "rect":
        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");case "line":
        return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });case "polyline":
        return M(a);case "polygon":
        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));}
  }function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
    }var b = d(),
        f = d(-1),
        n = d(1);switch (a.property) {case "x":
        return b.x;case "y":
        return b.y;
      case "angle":
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;}
  }function O(a, c) {
    var d = /-?\d*\.?\d+/g,
        b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? "rgba(" + f[1] + ",1)" : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += "";return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
  }function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }function Z(a) {
    var c = P(a);return c.map(function (a, b) {
      return { target: a, id: b, total: c.length };
    });
  }function aa(a, c) {
    var d = C(c);if (h.arr(a)) {
      var b = a.length;2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
    }return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
    }).map(function (a) {
      return z(a, d);
    });
  }function ba(a, c) {
    var d = {},
        b;for (b in a) {
      var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), 1 === f.length && (f = f[0]));d[b] = f;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }function da(a, c) {
    var d;return a.tweens.map(function (b) {
      b = ba(b, c);var f = b.value,
          e = K(c.target, a.name),
          k = d ? d.to.original : e,
          k = h.arr(f) ? f[0] : k,
          w = L(h.arr(f) ? f[1] : f, k),
          e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
    });
  }function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }function R(a, c, d, b) {
    var f = "delay" === a;return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }function fa(a) {
    var c = D(ga, a),
        d = D(S, a),
        b = Z(a.targets),
        f = [],
        e = z(c, d),
        k;for (k in a) {
      e.hasOwnProperty(k) || "targets" === k || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
    }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R("duration", a, c, d), delay: R("delay", a, c, d) });
  }function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }function d(a) {
      return g.reversed ? g.duration - a : a;
    }function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
            k = e.animatable,
            h = e.tweens,
            n = h.length - 1,
            l = h[n];n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0,
              x = l.to.numbers[t],
              q = l.from.numbers[t],
              x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));n.push(x);
        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
      }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
      }g.currentTime = a;g.progress = a / g.duration * 100;
    }function f(a) {
      if (g[a]) g[a](g);
    }function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }function k(a) {
      var k = g.duration,
          n = g.offset,
          w = n + g.delay,
          r = g.currentTime,
          x = g.reversed,
          q = d(a);if (g.children.length) {
        var u = g.children,
            v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f("update");a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
    }a = void 0 === a ? {} : a;var h,
        t,
        l = 0,
        p = null,
        m = c(),
        g = fa(a);g.reset = function () {
      var a = g.direction,
          c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = "reverse" === a;g.remaining = "alternate" === a && 1 === c ? 2 : c;b(0);for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };g.tick = function (a) {
      h = a;t || (t = h);k((l + h - t) * q.speed);
    };g.seek = function (a) {
      k(d(a));
    };g.pause = function () {
      var a = v.indexOf(g);-1 < a && v.splice(a, 1);g.paused = !0;
    };g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };g.reverse = function () {
      g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
    };g.restart = function () {
      g.pause();
      g.reset();g.play();
    };g.finished = m;g.reset();g.autoplay && g.play();return g;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      S = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      H,
      h = { arr: function (a) {
      return Array.isArray(a);
    }, obj: function (a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    pth: function (a) {
      return h.obj(a) && a.hasOwnProperty("totalLength");
    }, svg: function (a) {
      return a instanceof SVGElement;
    }, dom: function (a) {
      return a.nodeType || h.svg(a);
    }, str: function (a) {
      return "string" === typeof a;
    }, fnc: function (a) {
      return "function" === typeof a;
    }, und: function (a) {
      return "undefined" === typeof a;
    }, hex: function (a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function (a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function (a) {
      return (/^hsl/.test(a)
      );
    }, col: function (a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    } },
      A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }return function (c, d, b, f) {
      if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
          e[k] = a(.1 * k, c, b);
        }return function (k) {
          if (c === d && b === f) return k;if (0 === k) return 0;if (1 === k) return 1;for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
            h += .1;
          }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (.001 <= n) {
            for (h = 0; 4 > h; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (0 === n) break;var m = a(l, c, b) - k,
                  l = l - m / n;
            }k = l;
          } else if (0 === n) k = l;else {
            var l = h,
                h = h + .1,
                g = 0;do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++g);k = m;
          }return a(k, d, f);
        };
      }
    };
  }(),
      Q = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        b = { linear: A(.25, .25, .75, .75) },
        f = {},
        e;for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = { type: f.type };
    }return b;
  }(),
      ha = { css: function (a, c, d) {
      return a.style[c] = d;
    }, attribute: function (a, c, d) {
      return a.setAttribute(c, d);
    }, object: function (a, c, d) {
      return a[c] = d;
    }, transform: function (a, c, d, b, f) {
      b[f] || (b[f] = []);b[f].push(c + "(" + d + ")");
    } },
      v = [],
      B = 0,
      ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }function c(c) {
      var b = v.length;if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }a();
      } else cancelAnimationFrame(B), B = 0;
    }return a;
  }();q.version = "2.2.0";q.speed = 1;q.running = v;q.remove = function (a) {
    a = P(a);for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };q.getValue = K;q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a,
        b = c || 100;return function (a) {
      return { el: d, property: a, totalLength: N(d) * (b / 100) };
    };
  };q.setDashoffset = function (a) {
    var c = N(a);a.setAttribute("stroke-dasharray", c);return c;
  };q.bezier = A;q.easings = Q;q.timeline = function (a) {
    var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
      });c.seek(0);c.reset();c.autoplay && c.restart();return c;
    };return c;
  };q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };return q;
});
;(function ($, anim) {
  'use strict';

  var _defaults = {
    accordion: true,
    onOpenStart: undefined,
    onOpenEnd: undefined,
    onCloseStart: undefined,
    onCloseEnd: undefined,
    inDuration: 300,
    outDuration: 300
  };

  /**
   * @class
   *
   */

  var Collapsible = function (_Component) {
    _inherits(Collapsible, _Component);

    /**
     * Construct Collapsible instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Collapsible(el, options) {
      _classCallCheck(this, Collapsible);

      var _this3 = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, Collapsible, el, options));

      _this3.el.M_Collapsible = _this3;

      /**
       * Options for the collapsible
       * @member Collapsible#options
       * @prop {Boolean} [accordion=false] - Type of the collapsible
       * @prop {Function} onOpenStart - Callback function called before collapsible is opened
       * @prop {Function} onOpenEnd - Callback function called after collapsible is opened
       * @prop {Function} onCloseStart - Callback function called before collapsible is closed
       * @prop {Function} onCloseEnd - Callback function called after collapsible is closed
       * @prop {Number} inDuration - Transition in duration in milliseconds.
       * @prop {Number} outDuration - Transition duration in milliseconds.
       */
      _this3.options = $.extend({}, Collapsible.defaults, options);

      // Setup tab indices
      _this3.$headers = _this3.$el.children('li').children('.collapsible-header');
      _this3.$headers.attr('tabindex', 0);

      _this3._setupEventHandlers();

      // Open first active
      var $activeBodies = _this3.$el.children('li.active').children('.collapsible-body');
      if (_this3.options.accordion) {
        // Handle Accordion
        $activeBodies.first().css('display', 'block');
      } else {
        // Handle Expandables
        $activeBodies.css('display', 'block');
      }
      return _this3;
    }

    _createClass(Collapsible, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Collapsible = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this4 = this;

        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this);
        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this);
        this.el.addEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.addEventListener('keydown', _this4._handleCollapsibleKeydownBound);
        });
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this5 = this;

        this.el.removeEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.removeEventListener('keydown', _this5._handleCollapsibleKeydownBound);
        });
      }

      /**
       * Handle Collapsible Click
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleClick",
      value: function _handleCollapsibleClick(e) {
        var $header = $(e.target).closest('.collapsible-header');
        if (e.target && $header.length) {
          var $collapsible = $header.closest('.collapsible');
          if ($collapsible[0] === this.el) {
            var $collapsibleLi = $header.closest('li');
            var $collapsibleLis = $collapsible.children('li');
            var isActive = $collapsibleLi[0].classList.contains('active');
            var index = $collapsibleLis.index($collapsibleLi);

            if (isActive) {
              this.close(index);
            } else {
              this.open(index);
            }
          }
        }
      }

      /**
       * Handle Collapsible Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleKeydown",
      value: function _handleCollapsibleKeydown(e) {
        if (e.keyCode === 13) {
          this._handleCollapsibleClickBound(e);
        }
      }

      /**
       * Animate in collapsible slide
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "_animateIn",
      value: function _animateIn(index) {
        var _this6 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');

          anim.remove($body[0]);
          $body.css({
            display: 'block',
            overflow: 'hidden',
            height: 0,
            paddingTop: '',
            paddingBottom: ''
          });

          var pTop = $body.css('padding-top');
          var pBottom = $body.css('padding-bottom');
          var finalHeight = $body[0].scrollHeight;
          $body.css({
            paddingTop: 0,
            paddingBottom: 0
          });

          anim({
            targets: $body[0],
            height: finalHeight,
            paddingTop: pTop,
            paddingBottom: pBottom,
            duration: this.options.inDuration,
            easing: 'easeInOutCubic',
            complete: function (anim) {
              $body.css({
                overflow: '',
                paddingTop: '',
                paddingBottom: '',
                height: ''
              });

              // onOpenEnd callback
              if (typeof _this6.options.onOpenEnd === 'function') {
                _this6.options.onOpenEnd.call(_this6, $collapsibleLi[0]);
              }
            }
          });
        }
      }

      /**
       * Animate out collapsible slide
       * @param {Number} index - 0th index of slide to open
       */

    }, {
      key: "_animateOut",
      value: function _animateOut(index) {
        var _this7 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');
          anim.remove($body[0]);
          $body.css('overflow', 'hidden');
          anim({
            targets: $body[0],
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: this.options.outDuration,
            easing: 'easeInOutCubic',
            complete: function () {
              $body.css({
                height: '',
                overflow: '',
                padding: '',
                display: ''
              });

              // onCloseEnd callback
              if (typeof _this7.options.onCloseEnd === 'function') {
                _this7.options.onCloseEnd.call(_this7, $collapsibleLi[0]);
              }
            }
          });
        }
      }

      /**
       * Open Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "open",
      value: function open(index) {
        var _this8 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length && !$collapsibleLi[0].classList.contains('active')) {
          // onOpenStart callback
          if (typeof this.options.onOpenStart === 'function') {
            this.options.onOpenStart.call(this, $collapsibleLi[0]);
          }

          // Handle accordion behavior
          if (this.options.accordion) {
            var $collapsibleLis = this.$el.children('li');
            var $activeLis = this.$el.children('li.active');
            $activeLis.each(function (el) {
              var index = $collapsibleLis.index($(el));
              _this8.close(index);
            });
          }

          // Animate in
          $collapsibleLi[0].classList.add('active');
          this._animateIn(index);
        }
      }

      /**
       * Close Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "close",
      value: function close(index) {
        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length && $collapsibleLi[0].classList.contains('active')) {
          // onCloseStart callback
          if (typeof this.options.onCloseStart === 'function') {
            this.options.onCloseStart.call(this, $collapsibleLi[0]);
          }

          // Animate out
          $collapsibleLi[0].classList.remove('active');
          this._animateOut(index);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Collapsible.__proto__ || Object.getPrototypeOf(Collapsible), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Collapsible;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Collapsible;
  }(Component);

  M.Collapsible = Collapsible;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Collapsible, 'collapsible', 'M_Collapsible');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    alignment: 'left',
    autoFocus: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
  };

  /**
   * @class
   */

  var Dropdown = function (_Component2) {
    _inherits(Dropdown, _Component2);

    function Dropdown(el, options) {
      _classCallCheck(this, Dropdown);

      var _this9 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, Dropdown, el, options));

      _this9.el.M_Dropdown = _this9;
      Dropdown._dropdowns.push(_this9);

      _this9.id = M.getIdFromTrigger(el);
      _this9.dropdownEl = document.getElementById(_this9.id);
      _this9.$dropdownEl = $(_this9.dropdownEl);

      /**
       * Options for the dropdown
       * @member Dropdown#options
       * @prop {String} [alignment='left'] - Edge which the dropdown is aligned to
       * @prop {Boolean} [autoFocus=true] - Automatically focus dropdown el for keyboard
       * @prop {Boolean} [constrainWidth=true] - Constrain width to width of the button
       * @prop {Element} container - Container element to attach dropdown to (optional)
       * @prop {Boolean} [coverTrigger=true] - Place dropdown over trigger
       * @prop {Boolean} [closeOnClick=true] - Close on click of dropdown item
       * @prop {Boolean} [hover=false] - Open dropdown on hover
       * @prop {Number} [inDuration=150] - Duration of open animation in ms
       * @prop {Number} [outDuration=250] - Duration of close animation in ms
       * @prop {Function} onOpenStart - Function called when dropdown starts opening
       * @prop {Function} onOpenEnd - Function called when dropdown finishes opening
       * @prop {Function} onCloseStart - Function called when dropdown starts closing
       * @prop {Function} onCloseEnd - Function called when dropdown finishes closing
       */
      _this9.options = $.extend({}, Dropdown.defaults, options);

      /**
       * Describes open/close state of dropdown
       * @type {Boolean}
       */
      _this9.isOpen = false;

      /**
       * Describes if dropdown content is scrollable
       * @type {Boolean}
       */
      _this9.isScrollable = false;

      /**
       * Describes if touch moving on dropdown content
       * @type {Boolean}
       */
      _this9.isTouchMoving = false;

      _this9.focusedIndex = -1;
      _this9.filterQuery = [];

      // Move dropdown-content after dropdown-trigger
      if (!!_this9.options.container) {
        $(_this9.options.container).append(_this9.dropdownEl);
      } else {
        _this9.$el.after(_this9.dropdownEl);
      }

      _this9._makeDropdownFocusable();
      _this9._resetFilterQueryBound = _this9._resetFilterQuery.bind(_this9);
      _this9._handleDocumentClickBound = _this9._handleDocumentClick.bind(_this9);
      _this9._handleDocumentTouchmoveBound = _this9._handleDocumentTouchmove.bind(_this9);
      _this9._handleDropdownClickBound = _this9._handleDropdownClick.bind(_this9);
      _this9._handleDropdownKeydownBound = _this9._handleDropdownKeydown.bind(_this9);
      _this9._handleTriggerKeydownBound = _this9._handleTriggerKeydown.bind(_this9);
      _this9._setupEventHandlers();
      return _this9;
    }

    _createClass(Dropdown, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._resetDropdownStyles();
        this._removeEventHandlers();
        Dropdown._dropdowns.splice(Dropdown._dropdowns.indexOf(this), 1);
        this.el.M_Dropdown = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        // Trigger keydown handler
        this.el.addEventListener('keydown', this._handleTriggerKeydownBound);

        // Item click handler
        this.dropdownEl.addEventListener('click', this._handleDropdownClickBound);

        // Hover event handlers
        if (this.options.hover) {
          this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
          this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
          this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
          this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.addEventListener('mouseleave', this._handleMouseLeaveBound);

          // Click event handlers
        } else {
          this._handleClickBound = this._handleClick.bind(this);
          this.el.addEventListener('click', this._handleClickBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('keydown', this._handleTriggerKeydownBound);
        this.dropdownEl.removeEventListener('click', this._handleDropdownClickBound);

        if (this.options.hover) {
          this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
          this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        } else {
          this.el.removeEventListener('click', this._handleClickBound);
        }
      }
    }, {
      key: "_setupTemporaryEventHandlers",
      value: function _setupTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
        document.body.addEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.addEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_removeTemporaryEventHandlers",
      value: function _removeTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
        document.body.removeEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.removeEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_handleClick",
      value: function _handleClick(e) {
        e.preventDefault();
        this.open();
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.open();
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave(e) {
        var toEl = e.toElement || e.relatedTarget;
        var leaveToDropdownContent = !!$(toEl).closest('.dropdown-content').length;
        var leaveToActiveDropdownTrigger = false;

        var $closestTrigger = $(toEl).closest('.dropdown-trigger');
        if ($closestTrigger.length && !!$closestTrigger[0].M_Dropdown && $closestTrigger[0].M_Dropdown.isOpen) {
          leaveToActiveDropdownTrigger = true;
        }

        // Close hover dropdown if mouse did not leave to either active dropdown-trigger or dropdown-content
        if (!leaveToActiveDropdownTrigger && !leaveToDropdownContent) {
          this.close();
        }
      }
    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        var _this10 = this;

        var $target = $(e.target);
        if (this.options.closeOnClick && $target.closest('.dropdown-content').length && !this.isTouchMoving) {
          // isTouchMoving to check if scrolling on mobile.
          setTimeout(function () {
            _this10.close();
          }, 0);
        } else if ($target.closest('.dropdown-trigger').length || !$target.closest('.dropdown-content').length) {
          setTimeout(function () {
            _this10.close();
          }, 0);
        }
        this.isTouchMoving = false;
      }
    }, {
      key: "_handleTriggerKeydown",
      value: function _handleTriggerKeydown(e) {
        // ARROW DOWN OR ENTER WHEN SELECT IS CLOSED - open Dropdown
        if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ENTER) && !this.isOpen) {
          e.preventDefault();
          this.open();
        }
      }

      /**
       * Handle Document Touchmove
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentTouchmove",
      value: function _handleDocumentTouchmove(e) {
        var $target = $(e.target);
        if ($target.closest('.dropdown-content').length) {
          this.isTouchMoving = true;
        }
      }

      /**
       * Handle Dropdown Click
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownClick",
      value: function _handleDropdownClick(e) {
        // onItemClick callback
        if (typeof this.options.onItemClick === 'function') {
          var itemEl = $(e.target).closest('li')[0];
          this.options.onItemClick.call(this, itemEl);
        }
      }

      /**
       * Handle Dropdown Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownKeydown",
      value: function _handleDropdownKeydown(e) {
        if (e.which === M.keys.TAB) {
          e.preventDefault();
          this.close();

          // Navigate down dropdown list
        } else if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) && this.isOpen) {
          e.preventDefault();
          var direction = e.which === M.keys.ARROW_DOWN ? 1 : -1;
          var newFocusedIndex = this.focusedIndex;
          var foundNewIndex = false;
          do {
            newFocusedIndex = newFocusedIndex + direction;

            if (!!this.dropdownEl.children[newFocusedIndex] && this.dropdownEl.children[newFocusedIndex].tabIndex !== -1) {
              foundNewIndex = true;
              break;
            }
          } while (newFocusedIndex < this.dropdownEl.children.length && newFocusedIndex >= 0);

          if (foundNewIndex) {
            this.focusedIndex = newFocusedIndex;
            this._focusFocusedItem();
          }

          // ENTER selects choice on focused item
        } else if (e.which === M.keys.ENTER && this.isOpen) {
          // Search for <a> and <button>
          var focusedElement = this.dropdownEl.children[this.focusedIndex];
          var $activatableElement = $(focusedElement).find('a, button').first();

          // Click a or button tag if exists, otherwise click li tag
          if (!!$activatableElement.length) {
            $activatableElement[0].click();
          } else if (!!focusedElement) {
            focusedElement.click();
          }

          // Close dropdown on ESC
        } else if (e.which === M.keys.ESC && this.isOpen) {
          e.preventDefault();
          this.close();
        }

        // CASE WHEN USER TYPE LETTERS
        var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40];
        if (letter && nonLetters.indexOf(e.which) === -1) {
          this.filterQuery.push(letter);

          var string = this.filterQuery.join(''),
              newOptionEl = $(this.dropdownEl).find('li').filter(function (el) {
            return $(el).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if (newOptionEl) {
            this.focusedIndex = $(newOptionEl).index();
            this._focusFocusedItem();
          }
        }

        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1000);
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_resetFilterQuery",
      value: function _resetFilterQuery() {
        this.filterQuery = [];
      }
    }, {
      key: "_resetDropdownStyles",
      value: function _resetDropdownStyles() {
        this.$dropdownEl.css({
          display: '',
          width: '',
          height: '',
          left: '',
          top: '',
          'transform-origin': '',
          transform: '',
          opacity: ''
        });
      }
    }, {
      key: "_makeDropdownFocusable",
      value: function _makeDropdownFocusable() {
        // Needed for arrow key navigation
        this.dropdownEl.tabIndex = 0;

        // Only set tabindex if it hasn't been set by user
        $(this.dropdownEl).children().each(function (el) {
          if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', 0);
          }
        });
      }
    }, {
      key: "_focusFocusedItem",
      value: function _focusFocusedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus) {
          this.dropdownEl.children[this.focusedIndex].focus();
        }
      }
    }, {
      key: "_getDropdownPosition",
      value: function _getDropdownPosition() {
        var offsetParentBRect = this.el.offsetParent.getBoundingClientRect();
        var triggerBRect = this.el.getBoundingClientRect();
        var dropdownBRect = this.dropdownEl.getBoundingClientRect();

        var idealHeight = dropdownBRect.height;
        var idealWidth = dropdownBRect.width;
        var idealXPos = triggerBRect.left - dropdownBRect.left;
        var idealYPos = triggerBRect.top - dropdownBRect.top;

        var dropdownBounds = {
          left: idealXPos,
          top: idealYPos,
          height: idealHeight,
          width: idealWidth
        };

        // Countainer here will be closest ancestor with overflow: hidden
        var closestOverflowParent = !!this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode;

        var alignments = M.checkPossibleAlignments(this.el, closestOverflowParent, dropdownBounds, this.options.coverTrigger ? 0 : triggerBRect.height);

        var verticalAlignment = 'top';
        var horizontalAlignment = this.options.alignment;
        idealYPos += this.options.coverTrigger ? 0 : triggerBRect.height;

        // Reset isScrollable
        this.isScrollable = false;

        if (!alignments.top) {
          if (alignments.bottom) {
            verticalAlignment = 'bottom';
          } else {
            this.isScrollable = true;

            // Determine which side has most space and cutoff at correct height
            if (alignments.spaceOnTop > alignments.spaceOnBottom) {
              verticalAlignment = 'bottom';
              idealHeight += alignments.spaceOnTop;
              idealYPos -= alignments.spaceOnTop;
            } else {
              idealHeight += alignments.spaceOnBottom;
            }
          }
        }

        // If preferred horizontal alignment is possible
        if (!alignments[horizontalAlignment]) {
          var oppositeAlignment = horizontalAlignment === 'left' ? 'right' : 'left';
          if (alignments[oppositeAlignment]) {
            horizontalAlignment = oppositeAlignment;
          } else {
            // Determine which side has most space and cutoff at correct height
            if (alignments.spaceOnLeft > alignments.spaceOnRight) {
              horizontalAlignment = 'right';
              idealWidth += alignments.spaceOnLeft;
              idealXPos -= alignments.spaceOnLeft;
            } else {
              horizontalAlignment = 'left';
              idealWidth += alignments.spaceOnRight;
            }
          }
        }

        if (verticalAlignment === 'bottom') {
          idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);
        }
        if (horizontalAlignment === 'right') {
          idealXPos = idealXPos - dropdownBRect.width + triggerBRect.width;
        }
        return {
          x: idealXPos,
          y: idealYPos,
          verticalAlignment: verticalAlignment,
          horizontalAlignment: horizontalAlignment,
          height: idealHeight,
          width: idealWidth
        };
      }

      /**
       * Animate in dropdown
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this11 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: [0, 1],
            easing: 'easeOutQuad'
          },
          scaleX: [0.3, 1],
          scaleY: [0.3, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuint',
          complete: function (anim) {
            if (_this11.options.autoFocus) {
              _this11.dropdownEl.focus();
            }

            // onOpenEnd callback
            if (typeof _this11.options.onOpenEnd === 'function') {
              _this11.options.onOpenEnd.call(_this11, _this11.el);
            }
          }
        });
      }

      /**
       * Animate out dropdown
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this12 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: 0,
            easing: 'easeOutQuint'
          },
          scaleX: 0.3,
          scaleY: 0.3,
          duration: this.options.outDuration,
          easing: 'easeOutQuint',
          complete: function (anim) {
            _this12._resetDropdownStyles();

            // onCloseEnd callback
            if (typeof _this12.options.onCloseEnd === 'function') {
              _this12.options.onCloseEnd.call(_this12, _this12.el);
            }
          }
        });
      }

      /**
       * Place dropdown
       */

    }, {
      key: "_placeDropdown",
      value: function _placeDropdown() {
        // Set width before calculating positionInfo
        var idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
        this.dropdownEl.style.width = idealWidth + 'px';

        var positionInfo = this._getDropdownPosition();
        this.dropdownEl.style.left = positionInfo.x + 'px';
        this.dropdownEl.style.top = positionInfo.y + 'px';
        this.dropdownEl.style.height = positionInfo.height + 'px';
        this.dropdownEl.style.width = positionInfo.width + 'px';
        this.dropdownEl.style.transformOrigin = (positionInfo.horizontalAlignment === 'left' ? '0' : '100%') + " " + (positionInfo.verticalAlignment === 'top' ? '0' : '100%');
      }

      /**
       * Open Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }
        this.isOpen = true;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Reset styles
        this._resetDropdownStyles();
        this.dropdownEl.style.display = 'block';

        this._placeDropdown();
        this._animateIn();
        this._setupTemporaryEventHandlers();
      }

      /**
       * Close Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }
        this.isOpen = false;
        this.focusedIndex = -1;

        // onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this._animateOut();
        this._removeTemporaryEventHandlers();

        if (this.options.autoFocus) {
          this.el.focus();
        }
      }

      /**
       * Recalculate dimensions
       */

    }, {
      key: "recalculateDimensions",
      value: function recalculateDimensions() {
        if (this.isOpen) {
          this.$dropdownEl.css({
            width: '',
            height: '',
            left: '',
            top: '',
            'transform-origin': ''
          });
          this._placeDropdown();
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Dropdown.__proto__ || Object.getPrototypeOf(Dropdown), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Dropdown;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Dropdown;
  }(Component);

  /**
   * @static
   * @memberof Dropdown
   */


  Dropdown._dropdowns = [];

  M.Dropdown = Dropdown;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Dropdown, 'dropdown', 'M_Dropdown');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };

  /**
   * @class
   *
   */

  var Modal = function (_Component3) {
    _inherits(Modal, _Component3);

    /**
     * Construct Modal instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Modal(el, options) {
      _classCallCheck(this, Modal);

      var _this13 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, Modal, el, options));

      _this13.el.M_Modal = _this13;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [opacity=0.5] - Opacity of the modal overlay
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=250] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before modal is opened
       * @prop {Function} onOpenEnd - Callback function called after modal is opened
       * @prop {Function} onCloseStart - Callback function called before modal is closed
       * @prop {Function} onCloseEnd - Callback function called after modal is closed
       * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
       * @prop {String} [startingTop='4%'] - startingTop
       * @prop {String} [endingTop='10%'] - endingTop
       */
      _this13.options = $.extend({}, Modal.defaults, options);

      /**
       * Describes open/close state of modal
       * @type {Boolean}
       */
      _this13.isOpen = false;

      _this13.id = _this13.$el.attr('id');
      _this13._openingTrigger = undefined;
      _this13.$overlay = $('<div class="modal-overlay"></div>');
      _this13.el.tabIndex = 0;
      _this13._nthModalOpened = 0;

      Modal._count++;
      _this13._setupEventHandlers();
      return _this13;
    }

    _createClass(Modal, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        Modal._count--;
        this._removeEventHandlers();
        this.el.removeAttribute('style');
        this.$overlay.remove();
        this.el.M_Modal = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleOverlayClickBound = this._handleOverlayClick.bind(this);
        this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this);

        if (Modal._count === 1) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }
        this.$overlay[0].addEventListener('click', this._handleOverlayClickBound);
        this.el.addEventListener('click', this._handleModalCloseClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Modal._count === 0) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }
        this.$overlay[0].removeEventListener('click', this._handleOverlayClickBound);
        this.el.removeEventListener('click', this._handleModalCloseClickBound);
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.modal-trigger');
        if ($trigger.length) {
          var modalId = M.getIdFromTrigger($trigger[0]);
          var modalInstance = document.getElementById(modalId).M_Modal;
          if (modalInstance) {
            modalInstance.open($trigger);
          }
          e.preventDefault();
        }
      }

      /**
       * Handle Overlay Click
       */

    }, {
      key: "_handleOverlayClick",
      value: function _handleOverlayClick() {
        if (this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Handle Modal Close Click
       * @param {Event} e
       */

    }, {
      key: "_handleModalCloseClick",
      value: function _handleModalCloseClick(e) {
        var $closeTrigger = $(e.target).closest('.modal-close');
        if ($closeTrigger.length) {
          this.close();
        }
      }

      /**
       * Handle Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(e) {
        // ESC key
        if (e.keyCode === 27 && this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Handle Focus
       * @param {Event} e
       */

    }, {
      key: "_handleFocus",
      value: function _handleFocus(e) {
        // Only trap focus if this modal is the last model opened (prevents loops in nested modals).
        if (!this.el.contains(e.target) && this._nthModalOpened === Modal._modalsOpen) {
          this.el.focus();
        }
      }

      /**
       * Animate in modal
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this14 = this;

        // Set initial styles
        $.extend(this.el.style, {
          display: 'block',
          opacity: 0
        });
        $.extend(this.$overlay[0].style, {
          display: 'block',
          opacity: 0
        });

        // Animate overlay
        anim({
          targets: this.$overlay[0],
          opacity: this.options.opacity,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });

        // Define modal animation options
        var enterAnimOptions = {
          targets: this.el,
          duration: this.options.inDuration,
          easing: 'easeOutCubic',
          // Handle modal onOpenEnd callback
          complete: function () {
            if (typeof _this14.options.onOpenEnd === 'function') {
              _this14.options.onOpenEnd.call(_this14, _this14.el, _this14._openingTrigger);
            }
          }
        };

        // Bottom sheet animation
        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(enterAnimOptions, {
            bottom: 0,
            opacity: 1
          });
          anim(enterAnimOptions);

          // Normal modal animation
        } else {
          $.extend(enterAnimOptions, {
            top: [this.options.startingTop, this.options.endingTop],
            opacity: 1,
            scaleX: [0.8, 1],
            scaleY: [0.8, 1]
          });
          anim(enterAnimOptions);
        }
      }

      /**
       * Animate out modal
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this15 = this;

        // Animate overlay
        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuart'
        });

        // Define modal animation options
        var exitAnimOptions = {
          targets: this.el,
          duration: this.options.outDuration,
          easing: 'easeOutCubic',
          // Handle modal ready callback
          complete: function () {
            _this15.el.style.display = 'none';
            _this15.$overlay.remove();

            // Call onCloseEnd callback
            if (typeof _this15.options.onCloseEnd === 'function') {
              _this15.options.onCloseEnd.call(_this15, _this15.el);
            }
          }
        };

        // Bottom sheet animation
        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(exitAnimOptions, {
            bottom: '-100%',
            opacity: 0
          });
          anim(exitAnimOptions);

          // Normal modal animation
        } else {
          $.extend(exitAnimOptions, {
            top: [this.options.endingTop, this.options.startingTop],
            opacity: 0,
            scaleX: 0.8,
            scaleY: 0.8
          });
          anim(exitAnimOptions);
        }
      }

      /**
       * Open Modal
       * @param {cash} [$trigger]
       */

    }, {
      key: "open",
      value: function open($trigger) {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        Modal._modalsOpen++;
        this._nthModalOpened = Modal._modalsOpen;

        // Set Z-Index based on number of currently open modals
        this.$overlay[0].style.zIndex = 1000 + Modal._modalsOpen * 2;
        this.el.style.zIndex = 1000 + Modal._modalsOpen * 2 + 1;

        // Set opening trigger, undefined indicates modal was opened by javascript
        this._openingTrigger = !!$trigger ? $trigger[0] : undefined;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el, this._openingTrigger);
        }

        if (this.options.preventScrolling) {
          document.body.style.overflow = 'hidden';
        }

        this.el.classList.add('open');
        this.el.insertAdjacentElement('afterend', this.$overlay[0]);

        if (this.options.dismissible) {
          this._handleKeydownBound = this._handleKeydown.bind(this);
          this._handleFocusBound = this._handleFocus.bind(this);
          document.addEventListener('keydown', this._handleKeydownBound);
          document.addEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);
        this._animateIn();

        // Focus modal
        this.el.focus();

        return this;
      }

      /**
       * Close Modal
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        Modal._modalsOpen--;
        this._nthModalOpened = 0;

        // Call onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this.el.classList.remove('open');

        // Enable body scrolling only if there are no more modals open.
        if (Modal._modalsOpen === 0) {
          document.body.style.overflow = '';
        }

        if (this.options.dismissible) {
          document.removeEventListener('keydown', this._handleKeydownBound);
          document.removeEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);
        this._animateOut();
        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Modal.__proto__ || Object.getPrototypeOf(Modal), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Modal;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Modal;
  }(Component);

  /**
   * @static
   * @memberof Modal
   */


  Modal._modalsOpen = 0;

  /**
   * @static
   * @memberof Modal
   */
  Modal._count = 0;

  M.Modal = Modal;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Modal, 'modal', 'M_Modal');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  };

  /**
   * @class
   *
   */

  var Materialbox = function (_Component4) {
    _inherits(Materialbox, _Component4);

    /**
     * Construct Materialbox instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Materialbox(el, options) {
      _classCallCheck(this, Materialbox);

      var _this16 = _possibleConstructorReturn(this, (Materialbox.__proto__ || Object.getPrototypeOf(Materialbox)).call(this, Materialbox, el, options));

      _this16.el.M_Materialbox = _this16;

      /**
       * Options for the modal
       * @member Materialbox#options
       * @prop {Number} [inDuration=275] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before materialbox is opened
       * @prop {Function} onOpenEnd - Callback function called after materialbox is opened
       * @prop {Function} onCloseStart - Callback function called before materialbox is closed
       * @prop {Function} onCloseEnd - Callback function called after materialbox is closed
       */
      _this16.options = $.extend({}, Materialbox.defaults, options);

      _this16.overlayActive = false;
      _this16.doneAnimating = true;
      _this16.placeholder = $('<div></div>').addClass('material-placeholder');
      _this16.originalWidth = 0;
      _this16.originalHeight = 0;
      _this16.originInlineStyles = _this16.$el.attr('style');
      _this16.caption = _this16.el.getAttribute('data-caption') || '';

      // Wrap
      _this16.$el.before(_this16.placeholder);
      _this16.placeholder.append(_this16.$el);

      _this16._setupEventHandlers();
      return _this16;
    }

    _createClass(Materialbox, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Materialbox = undefined;

        // Unwrap image
        $(this.placeholder).after(this.el).remove();

        this.$el.removeAttr('style');
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this);
        this.el.addEventListener('click', this._handleMaterialboxClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleMaterialboxClickBound);
      }

      /**
       * Handle Materialbox Click
       * @param {Event} e
       */

    }, {
      key: "_handleMaterialboxClick",
      value: function _handleMaterialboxClick(e) {
        // If already modal, return to original
        if (this.doneAnimating === false || this.overlayActive && this.doneAnimating) {
          this.close();
        } else {
          this.open();
        }
      }

      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        if (this.overlayActive) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        if (this.overlayActive) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       * @param {Event} e
       */

    }, {
      key: "_handleWindowEscape",
      value: function _handleWindowEscape(e) {
        // ESC key
        if (e.keyCode === 27 && this.doneAnimating && this.overlayActive) {
          this.close();
        }
      }

      /**
       * Find ancestors with overflow: hidden; and make visible
       */

    }, {
      key: "_makeAncestorsOverflowVisible",
      value: function _makeAncestorsOverflowVisible() {
        this.ancestorsChanged = $();
        var ancestor = this.placeholder[0].parentNode;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (this.ancestorsChanged === undefined) {
              this.ancestorsChanged = curr;
            } else {
              this.ancestorsChanged = this.ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }
      }

      /**
       * Animate image in
       */

    }, {
      key: "_animateImageIn",
      value: function _animateImageIn() {
        var _this17 = this;

        var animOptions = {
          targets: this.el,
          height: [this.originalHeight, this.newHeight],
          width: [this.originalWidth, this.newWidth],
          left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
          top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this17.doneAnimating = true;

            // onOpenEnd callback
            if (typeof _this17.options.onOpenEnd === 'function') {
              _this17.options.onOpenEnd.call(_this17, _this17.el);
            }
          }
        };

        // Override max-width or max-height if needed
        this.maxWidth = this.$el.css('max-width');
        this.maxHeight = this.$el.css('max-height');
        if (this.maxWidth !== 'none') {
          animOptions.maxWidth = this.newWidth;
        }
        if (this.maxHeight !== 'none') {
          animOptions.maxHeight = this.newHeight;
        }

        anim(animOptions);
      }

      /**
       * Animate image out
       */

    }, {
      key: "_animateImageOut",
      value: function _animateImageOut() {
        var _this18 = this;

        var animOptions = {
          targets: this.el,
          width: this.originalWidth,
          height: this.originalHeight,
          left: 0,
          top: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this18.placeholder.css({
              height: '',
              width: '',
              position: '',
              top: '',
              left: ''
            });

            // Revert to width or height attribute
            if (_this18.attrWidth) {
              _this18.$el.attr('width', _this18.attrWidth);
            }
            if (_this18.attrHeight) {
              _this18.$el.attr('height', _this18.attrHeight);
            }

            _this18.$el.removeAttr('style');
            _this18.originInlineStyles && _this18.$el.attr('style', _this18.originInlineStyles);

            // Remove class
            _this18.$el.removeClass('active');
            _this18.doneAnimating = true;

            // Remove overflow overrides on ancestors
            if (_this18.ancestorsChanged.length) {
              _this18.ancestorsChanged.css('overflow', '');
            }

            // onCloseEnd callback
            if (typeof _this18.options.onCloseEnd === 'function') {
              _this18.options.onCloseEnd.call(_this18, _this18.el);
            }
          }
        };

        anim(animOptions);
      }

      /**
       * Update open and close vars
       */

    }, {
      key: "_updateVars",
      value: function _updateVars() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.caption = this.el.getAttribute('data-caption') || '';
      }

      /**
       * Open Materialbox
       */

    }, {
      key: "open",
      value: function open() {
        var _this19 = this;

        this._updateVars();
        this.originalWidth = this.el.getBoundingClientRect().width;
        this.originalHeight = this.el.getBoundingClientRect().height;

        // Set states
        this.doneAnimating = false;
        this.$el.addClass('active');
        this.overlayActive = true;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Set positioning for placeholder
        this.placeholder.css({
          width: this.placeholder[0].getBoundingClientRect().width + 'px',
          height: this.placeholder[0].getBoundingClientRect().height + 'px',
          position: 'relative',
          top: 0,
          left: 0
        });

        this._makeAncestorsOverflowVisible();

        // Set css on origin
        this.$el.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        });

        // Change from width or height attribute to css
        this.attrWidth = this.$el.attr('width');
        this.attrHeight = this.$el.attr('height');
        if (this.attrWidth) {
          this.$el.css('width', this.attrWidth + 'px');
          this.$el.removeAttr('width');
        }
        if (this.attrHeight) {
          this.$el.css('width', this.attrHeight + 'px');
          this.$el.removeAttr('height');
        }

        // Add overlay
        this.$overlay = $('<div id="materialbox-overlay"></div>').css({
          opacity: 0
        }).one('click', function () {
          if (_this19.doneAnimating) {
            _this19.close();
          }
        });

        // Put before in origin image to preserve z-index layering.
        this.$el.before(this.$overlay);

        // Set dimensions if needed
        var overlayOffset = this.$overlay[0].getBoundingClientRect();
        this.$overlay.css({
          width: this.windowWidth + 'px',
          height: this.windowHeight + 'px',
          left: -1 * overlayOffset.left + 'px',
          top: -1 * overlayOffset.top + 'px'
        });

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        // Animate Overlay
        anim({
          targets: this.$overlay[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });

        // Add and animate caption if it exists
        if (this.caption !== '') {
          if (this.$photocaption) {
            anim.remove(this.$photoCaption[0]);
          }
          this.$photoCaption = $('<div class="materialbox-caption"></div>');
          this.$photoCaption.text(this.caption);
          $('body').append(this.$photoCaption);
          this.$photoCaption.css({ display: 'inline' });

          anim({
            targets: this.$photoCaption[0],
            opacity: 1,
            duration: this.options.inDuration,
            easing: 'easeOutQuad'
          });
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = this.originalWidth / this.windowWidth;
        var heightPercent = this.originalHeight / this.windowHeight;
        this.newWidth = 0;
        this.newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = this.originalHeight / this.originalWidth;
          this.newWidth = this.windowWidth * 0.9;
          this.newHeight = this.windowWidth * 0.9 * ratio;
        } else {
          ratio = this.originalWidth / this.originalHeight;
          this.newWidth = this.windowHeight * 0.9 * ratio;
          this.newHeight = this.windowHeight * 0.9;
        }

        this._animateImageIn();

        // Handle Exit triggers
        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        this._handleWindowEscapeBound = this._handleWindowEscape.bind(this);

        window.addEventListener('scroll', this._handleWindowScrollBound);
        window.addEventListener('resize', this._handleWindowResizeBound);
        window.addEventListener('keyup', this._handleWindowEscapeBound);
      }

      /**
       * Close Materialbox
       */

    }, {
      key: "close",
      value: function close() {
        var _this20 = this;

        this._updateVars();
        this.doneAnimating = false;

        // onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        if (this.caption !== '') {
          anim.remove(this.$photoCaption[0]);
        }

        // disable exit handlers
        window.removeEventListener('scroll', this._handleWindowScrollBound);
        window.removeEventListener('resize', this._handleWindowResizeBound);
        window.removeEventListener('keyup', this._handleWindowEscapeBound);

        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this20.overlayActive = false;
            _this20.$overlay.remove();
          }
        });

        this._animateImageOut();

        // Remove Caption + reset css settings on image
        if (this.caption !== '') {
          anim({
            targets: this.$photoCaption[0],
            opacity: 0,
            duration: this.options.outDuration,
            easing: 'easeOutQuad',
            complete: function () {
              _this20.$photoCaption.remove();
            }
          });
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Materialbox.__proto__ || Object.getPrototypeOf(Materialbox), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Materialbox;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Materialbox;
  }(Component);

  M.Materialbox = Materialbox;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Materialbox, 'materialbox', 'M_Materialbox');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    responsiveThreshold: 0 // breakpoint for swipeable
  };

  var Parallax = function (_Component5) {
    _inherits(Parallax, _Component5);

    function Parallax(el, options) {
      _classCallCheck(this, Parallax);

      var _this21 = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, Parallax, el, options));

      _this21.el.M_Parallax = _this21;

      /**
       * Options for the Parallax
       * @member Parallax#options
       * @prop {Number} responsiveThreshold
       */
      _this21.options = $.extend({}, Parallax.defaults, options);
      _this21._enabled = window.innerWidth > _this21.options.responsiveThreshold;

      _this21.$img = _this21.$el.find('img').first();
      _this21.$img.each(function () {
        var el = this;
        if (el.complete) $(el).trigger('load');
      });

      _this21._updateParallax();
      _this21._setupEventHandlers();
      _this21._setupStyles();

      Parallax._parallaxes.push(_this21);
      return _this21;
    }

    _createClass(Parallax, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        Parallax._parallaxes.splice(Parallax._parallaxes.indexOf(this), 1);
        this.$img[0].style.transform = '';
        this._removeEventHandlers();

        this.$el[0].M_Parallax = undefined;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleImageLoadBound = this._handleImageLoad.bind(this);
        this.$img[0].addEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          Parallax._handleScrollThrottled = M.throttle(Parallax._handleScroll, 5);
          window.addEventListener('scroll', Parallax._handleScrollThrottled);

          Parallax._handleWindowResizeThrottled = M.throttle(Parallax._handleWindowResize, 5);
          window.addEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.$img[0].removeEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          window.removeEventListener('scroll', Parallax._handleScrollThrottled);
          window.removeEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_setupStyles",
      value: function _setupStyles() {
        this.$img[0].style.opacity = 1;
      }
    }, {
      key: "_handleImageLoad",
      value: function _handleImageLoad() {
        this._updateParallax();
      }
    }, {
      key: "_updateParallax",
      value: function _updateParallax() {
        var containerHeight = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500;
        var imgHeight = this.$img[0].offsetHeight;
        var parallaxDist = imgHeight - containerHeight;
        var bottom = this.$el.offset().top + containerHeight;
        var top = this.$el.offset().top;
        var scrollTop = M.getDocumentScrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
        var parallax = parallaxDist * percentScrolled;

        if (!this._enabled) {
          this.$img[0].style.transform = '';
        } else if (bottom > scrollTop && top < scrollTop + windowHeight) {
          this.$img[0].style.transform = "translate3D(-50%, " + parallax + "px, 0)";
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Parallax.__proto__ || Object.getPrototypeOf(Parallax), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Parallax;
      }
    }, {
      key: "_handleScroll",
      value: function _handleScroll() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];
          parallaxInstance._updateParallax.call(parallaxInstance);
        }
      }
    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];
          parallaxInstance._enabled = window.innerWidth > parallaxInstance.options.responsiveThreshold;
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Parallax;
  }(Component);

  /**
   * @static
   * @memberof Parallax
   */


  Parallax._parallaxes = [];

  M.Parallax = Parallax;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Parallax, 'parallax', 'M_Parallax');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity // breakpoint for swipeable
  };

  /**
   * @class
   *
   */

  var Tabs = function (_Component6) {
    _inherits(Tabs, _Component6);

    /**
     * Construct Tabs instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Tabs(el, options) {
      _classCallCheck(this, Tabs);

      var _this22 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, Tabs, el, options));

      _this22.el.M_Tabs = _this22;

      /**
       * Options for the Tabs
       * @member Tabs#options
       * @prop {Number} duration
       * @prop {Function} onShow
       * @prop {Boolean} swipeable
       * @prop {Number} responsiveThreshold
       */
      _this22.options = $.extend({}, Tabs.defaults, options);

      // Setup
      _this22.$tabLinks = _this22.$el.children('li.tab').children('a');
      _this22.index = 0;
      _this22._setupActiveTabLink();

      // Setup tabs content
      if (_this22.options.swipeable) {
        _this22._setupSwipeableTabs();
      } else {
        _this22._setupNormalTabs();
      }

      // Setup tabs indicator after content to ensure accurate widths
      _this22._setTabsAndTabWidth();
      _this22._createIndicator();

      _this22._setupEventHandlers();
      return _this22;
    }

    _createClass(Tabs, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._indicator.parentNode.removeChild(this._indicator);

        if (this.options.swipeable) {
          this._teardownSwipeableTabs();
        } else {
          this._teardownNormalTabs();
        }

        this.$el[0].M_Tabs = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        window.addEventListener('resize', this._handleWindowResizeBound);

        this._handleTabClickBound = this._handleTabClick.bind(this);
        this.el.addEventListener('click', this._handleTabClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        window.removeEventListener('resize', this._handleWindowResizeBound);
        this.el.removeEventListener('click', this._handleTabClickBound);
      }

      /**
       * Handle window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        this._setTabsAndTabWidth();

        if (this.tabWidth !== 0 && this.tabsWidth !== 0) {
          this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + 'px';
          this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + 'px';
        }
      }

      /**
       * Handle tab click
       * @param {Event} e
       */

    }, {
      key: "_handleTabClick",
      value: function _handleTabClick(e) {
        var _this23 = this;

        var tab = $(e.target).closest('li.tab');
        var tabLink = $(e.target).closest('a');

        // Handle click on tab link only
        if (!tabLink.length || !tabLink.parent().hasClass('tab')) {
          return;
        }

        if (tab.hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!tabLink.attr('target')) {
          return;
        }

        // Make the old tab inactive.
        this.$activeTabLink.removeClass('active');
        var $oldContent = this.$content;

        // Update the variables with the new link and content
        this.$activeTabLink = tabLink;
        this.$content = $(M.escapeHash(tabLink[0].hash));
        this.$tabLinks = this.$el.children('li.tab').children('a');

        // Make the tab active.
        this.$activeTabLink.addClass('active');
        var prevIndex = this.index;
        this.index = Math.max(this.$tabLinks.index(tabLink), 0);

        // Swap content
        if (this.options.swipeable) {
          if (this._tabsCarousel) {
            this._tabsCarousel.set(this.index, function () {
              if (typeof _this23.options.onShow === 'function') {
                _this23.options.onShow.call(_this23, _this23.$content[0]);
              }
            });
          }
        } else {
          if (this.$content.length) {
            this.$content[0].style.display = 'block';
            this.$content.addClass('active');
            if (typeof this.options.onShow === 'function') {
              this.options.onShow.call(this, this.$content[0]);
            }

            if ($oldContent.length && !$oldContent.is(this.$content)) {
              $oldContent[0].style.display = 'none';
              $oldContent.removeClass('active');
            }
          }
        }

        // Update widths after content is swapped (scrollbar bugfix)
        this._setTabsAndTabWidth();

        // Update indicator
        this._animateIndicator(prevIndex);

        // Prevent the anchor's default click action
        e.preventDefault();
      }

      /**
       * Generate elements for tab indicator.
       */

    }, {
      key: "_createIndicator",
      value: function _createIndicator() {
        var _this24 = this;

        var indicator = document.createElement('li');
        indicator.classList.add('indicator');

        this.el.appendChild(indicator);
        this._indicator = indicator;

        setTimeout(function () {
          _this24._indicator.style.left = _this24._calcLeftPos(_this24.$activeTabLink) + 'px';
          _this24._indicator.style.right = _this24._calcRightPos(_this24.$activeTabLink) + 'px';
        }, 0);
      }

      /**
       * Setup first active tab link.
       */

    }, {
      key: "_setupActiveTabLink",
      value: function _setupActiveTabLink() {
        // If the location.hash matches one of the links, use that as the active tab.
        this.$activeTabLink = $(this.$tabLinks.filter('[href="' + location.hash + '"]'));

        // If no match is found, use the first link or any with class 'active' as the initial active tab.
        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a.active').first();
        }
        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a').first();
        }

        this.$tabLinks.removeClass('active');
        this.$activeTabLink[0].classList.add('active');

        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0);

        if (this.$activeTabLink.length) {
          this.$content = $(M.escapeHash(this.$activeTabLink[0].hash));
          this.$content.addClass('active');
        }
      }

      /**
       * Setup swipeable tabs
       */

    }, {
      key: "_setupSwipeableTabs",
      value: function _setupSwipeableTabs() {
        var _this25 = this;

        // Change swipeable according to responsive threshold
        if (window.innerWidth > this.options.responsiveThreshold) {
          this.options.swipeable = false;
        }

        var $tabsContent = $();
        this.$tabLinks.each(function (link) {
          var $currContent = $(M.escapeHash(link.hash));
          $currContent.addClass('carousel-item');
          $tabsContent = $tabsContent.add($currContent);
        });

        var $tabsWrapper = $('<div class="tabs-content carousel carousel-slider"></div>');
        $tabsContent.first().before($tabsWrapper);
        $tabsWrapper.append($tabsContent);
        $tabsContent[0].style.display = '';

        // Keep active tab index to set initial carousel slide
        var activeTabIndex = this.$activeTabLink.closest('.tab').index();

        this._tabsCarousel = M.Carousel.init($tabsWrapper[0], {
          fullWidth: true,
          noWrap: true,
          onCycleTo: function (item) {
            var prevIndex = _this25.index;
            _this25.index = $(item).index();
            _this25.$activeTabLink.removeClass('active');
            _this25.$activeTabLink = _this25.$tabLinks.eq(_this25.index);
            _this25.$activeTabLink.addClass('active');
            _this25._animateIndicator(prevIndex);
            if (typeof _this25.options.onShow === 'function') {
              _this25.options.onShow.call(_this25, _this25.$content[0]);
            }
          }
        });

        // Set initial carousel slide to active tab
        this._tabsCarousel.set(activeTabIndex);
      }

      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownSwipeableTabs",
      value: function _teardownSwipeableTabs() {
        var $tabsWrapper = this._tabsCarousel.$el;
        this._tabsCarousel.destroy();

        // Unwrap
        $tabsWrapper.after($tabsWrapper.children());
        $tabsWrapper.remove();
      }

      /**
       * Setup normal tabs.
       */

    }, {
      key: "_setupNormalTabs",
      value: function _setupNormalTabs() {
        // Hide Tabs Content
        this.$tabLinks.not(this.$activeTabLink).each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));
            if ($currContent.length) {
              $currContent[0].style.display = 'none';
            }
          }
        });
      }

      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownNormalTabs",
      value: function _teardownNormalTabs() {
        // show Tabs Content
        this.$tabLinks.each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));
            if ($currContent.length) {
              $currContent[0].style.display = '';
            }
          }
        });
      }

      /**
       * set tabs and tab width
       */

    }, {
      key: "_setTabsAndTabWidth",
      value: function _setTabsAndTabWidth() {
        this.tabsWidth = this.$el.width();
        this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
      }

      /**
       * Finds right attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcRightPos",
      value: function _calcRightPos(el) {
        return Math.ceil(this.tabsWidth - el.position().left - el[0].getBoundingClientRect().width);
      }

      /**
       * Finds left attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcLeftPos",
      value: function _calcLeftPos(el) {
        return Math.floor(el.position().left);
      }
    }, {
      key: "updateTabIndicator",
      value: function updateTabIndicator() {
        this._setTabsAndTabWidth();
        this._animateIndicator(this.index);
      }

      /**
       * Animates Indicator to active tab.
       * @param {Number} prevIndex
       */

    }, {
      key: "_animateIndicator",
      value: function _animateIndicator(prevIndex) {
        var leftDelay = 0,
            rightDelay = 0;

        if (this.index - prevIndex >= 0) {
          leftDelay = 90;
        } else {
          rightDelay = 90;
        }

        // Animate
        var animOptions = {
          targets: this._indicator,
          left: {
            value: this._calcLeftPos(this.$activeTabLink),
            delay: leftDelay
          },
          right: {
            value: this._calcRightPos(this.$activeTabLink),
            delay: rightDelay
          },
          duration: this.options.duration,
          easing: 'easeOutQuad'
        };
        anim.remove(this._indicator);
        anim(animOptions);
      }

      /**
       * Select tab.
       * @param {String} tabId
       */

    }, {
      key: "select",
      value: function select(tabId) {
        var tab = this.$tabLinks.filter('[href="#' + tabId + '"]');
        if (tab.length) {
          tab.trigger('click');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tabs.__proto__ || Object.getPrototypeOf(Tabs), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tabs;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Tabs;
  }(Component);

  M.Tabs = Tabs;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tabs, 'tabs', 'M_Tabs');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    exitDelay: 200,
    enterDelay: 0,
    html: null,
    margin: 5,
    inDuration: 250,
    outDuration: 200,
    position: 'bottom',
    transitionMovement: 10
  };

  /**
   * @class
   *
   */

  var Tooltip = function (_Component7) {
    _inherits(Tooltip, _Component7);

    /**
     * Construct Tooltip instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Tooltip(el, options) {
      _classCallCheck(this, Tooltip);

      var _this26 = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, Tooltip, el, options));

      _this26.el.M_Tooltip = _this26;
      _this26.options = $.extend({}, Tooltip.defaults, options);

      _this26.isOpen = false;
      _this26.isHovered = false;
      _this26.isFocused = false;
      _this26._appendTooltipEl();
      _this26._setupEventHandlers();
      return _this26;
    }

    _createClass(Tooltip, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        $(this.tooltipEl).remove();
        this._removeEventHandlers();
        this.el.M_Tooltip = undefined;
      }
    }, {
      key: "_appendTooltipEl",
      value: function _appendTooltipEl() {
        var tooltipEl = document.createElement('div');
        tooltipEl.classList.add('material-tooltip');
        this.tooltipEl = tooltipEl;

        var tooltipContentEl = document.createElement('div');
        tooltipContentEl.classList.add('tooltip-content');
        tooltipContentEl.innerHTML = this.options.html;
        tooltipEl.appendChild(tooltipContentEl);
        document.body.appendChild(tooltipEl);
      }
    }, {
      key: "_updateTooltipContent",
      value: function _updateTooltipContent() {
        this.tooltipEl.querySelector('.tooltip-content').innerHTML = this.options.html;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
        this._handleFocusBound = this._handleFocus.bind(this);
        this._handleBlurBound = this._handleBlur.bind(this);
        this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.addEventListener('focus', this._handleFocusBound, true);
        this.el.addEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.removeEventListener('focus', this._handleFocusBound, true);
        this.el.removeEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "open",
      value: function open(isManual) {
        if (this.isOpen) {
          return;
        }
        isManual = isManual === undefined ? true : undefined; // Default value true
        this.isOpen = true;
        // Update tooltip content with HTML attribute options
        this.options = $.extend({}, this.options, this._getAttributeOptions());
        this._updateTooltipContent();
        this._setEnterDelayTimeout(isManual);
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isHovered = false;
        this.isFocused = false;
        this.isOpen = false;
        this._setExitDelayTimeout();
      }

      /**
       * Create timeout which delays when the tooltip closes
       */

    }, {
      key: "_setExitDelayTimeout",
      value: function _setExitDelayTimeout() {
        var _this27 = this;

        clearTimeout(this._exitDelayTimeout);

        this._exitDelayTimeout = setTimeout(function () {
          if (_this27.isHovered || _this27.isFocused) {
            return;
          }

          _this27._animateOut();
        }, this.options.exitDelay);
      }

      /**
       * Create timeout which delays when the toast closes
       */

    }, {
      key: "_setEnterDelayTimeout",
      value: function _setEnterDelayTimeout(isManual) {
        var _this28 = this;

        clearTimeout(this._enterDelayTimeout);

        this._enterDelayTimeout = setTimeout(function () {
          if (!_this28.isHovered && !_this28.isFocused && !isManual) {
            return;
          }

          _this28._animateIn();
        }, this.options.enterDelay);
      }
    }, {
      key: "_positionTooltip",
      value: function _positionTooltip() {
        var origin = this.el,
            tooltip = this.tooltipEl,
            originHeight = origin.offsetHeight,
            originWidth = origin.offsetWidth,
            tooltipHeight = tooltip.offsetHeight,
            tooltipWidth = tooltip.offsetWidth,
            newCoordinates = void 0,
            margin = this.options.margin,
            targetTop = void 0,
            targetLeft = void 0;

        this.xMovement = 0, this.yMovement = 0;

        targetTop = origin.getBoundingClientRect().top + M.getDocumentScrollTop();
        targetLeft = origin.getBoundingClientRect().left + M.getDocumentScrollLeft();

        if (this.options.position === 'top') {
          targetTop += -tooltipHeight - margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = -this.options.transitionMovement;
        } else if (this.options.position === 'right') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += originWidth + margin;
          this.xMovement = this.options.transitionMovement;
        } else if (this.options.position === 'left') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += -tooltipWidth - margin;
          this.xMovement = -this.options.transitionMovement;
        } else {
          targetTop += originHeight + margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = this.options.transitionMovement;
        }

        newCoordinates = this._repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
        $(tooltip).css({
          top: newCoordinates.y + 'px',
          left: newCoordinates.x + 'px'
        });
      }
    }, {
      key: "_repositionWithinScreen",
      value: function _repositionWithinScreen(x, y, width, height) {
        var scrollLeft = M.getDocumentScrollLeft();
        var scrollTop = M.getDocumentScrollTop();
        var newX = x - scrollLeft;
        var newY = y - scrollTop;

        var bounding = {
          left: newX,
          top: newY,
          width: width,
          height: height
        };

        var offset = this.options.margin + this.options.transitionMovement;
        var edges = M.checkWithinContainer(document.body, bounding, offset);

        if (edges.left) {
          newX = offset;
        } else if (edges.right) {
          newX -= newX + width - window.innerWidth;
        }

        if (edges.top) {
          newY = offset;
        } else if (edges.bottom) {
          newY -= newY + height - window.innerHeight;
        }

        return {
          x: newX + scrollLeft,
          y: newY + scrollTop
        };
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._positionTooltip();
        this.tooltipEl.style.visibility = 'visible';
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 1,
          translateX: this.xMovement,
          translateY: this.yMovement,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 0,
          translateX: 0,
          translateY: 0,
          duration: this.options.outDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.isHovered = true;
        this.isFocused = false; // Allows close of tooltip when opened by focus.
        this.open(false);
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave() {
        this.isHovered = false;
        this.isFocused = false; // Allows close of tooltip when opened by focus.
        this.close();
      }
    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (M.tabPressed) {
          this.isFocused = true;
          this.open(false);
        }
      }
    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        this.isFocused = false;
        this.close();
      }
    }, {
      key: "_getAttributeOptions",
      value: function _getAttributeOptions() {
        var attributeOptions = {};
        var tooltipTextOption = this.el.getAttribute('data-tooltip');
        var positionOption = this.el.getAttribute('data-position');

        if (tooltipTextOption) {
          attributeOptions.html = tooltipTextOption;
        }

        if (positionOption) {
          attributeOptions.position = positionOption;
        }
        return attributeOptions;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tooltip.__proto__ || Object.getPrototypeOf(Tooltip), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tooltip;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Tooltip;
  }(Component);

  M.Tooltip = Tooltip;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tooltip, 'tooltip', 'M_Tooltip');
  }
})(cash, M.anime);
; /*!
  * Waves v0.6.4
  * http://fian.my.id/Waves
  *
  * Copyright 2014 Alfiana E. Sibuea and other contributors
  * Released under the MIT license
  * https://github.com/fians/Waves/blob/master/LICENSE
  */

;(function (window) {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);

  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function offset(elem) {
    var docElem,
        win,
        box = { top: 0, left: 0 },
        doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(obj) {
    var style = '';

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += a + ':' + obj[a] + ';';
      }
    }

    return style;
  }

  var Effect = {

    // Effect delay
    duration: 750,

    show: function (e, element) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      var el = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple);

      // Get click coordinate and element witdh
      var pos = offset(el);
      var relativeY = e.pageY - pos.top;
      var relativeX = e.pageX - pos.left;
      var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

      // Support for touch devices
      if ('touches' in e) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);

      // Set ripple position
      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };

      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', '');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';

      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';

      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e) {
      TouchHandler.touchup(e);

      var el = this;
      var width = el.clientWidth * 1.4;

      // Get first ripple
      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');
      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }

      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');

      // Get delay beetween mousedown and mouse leave
      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      }

      // Fade out ripple after delay
      setTimeout(function () {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',

          // Duration
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };

        ripple.setAttribute('style', convertStyle(style));

        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },

    // Little hack to make <input> can perform waves effect
    wrapInput: function (elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];

        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode;

          // If input already have parent just pass through
          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          }

          // Put element class and style to the specified parent
          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';

          var elementStyle = el.getAttribute('style');

          if (!elementStyle) {
            elementStyle = '';
          }

          wrapper.setAttribute('style', elementStyle);

          el.className = 'waves-button-input';
          el.removeAttribute('style');

          // Put element as child
          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };

  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function (e) {
      var allow = true;

      if (e.type === 'touchstart') {
        TouchHandler.touches += 1; //push
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function () {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1; //pop after 500ms
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }

      return allow;
    },
    touchup: function (e) {
      TouchHandler.allowEvent(e);
    }
  };

  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentNode !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      }
      target = target.parentNode;
    }
    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {
    var element = getWavesEffectElement(e);

    if (element !== null) {
      Effect.show(e, element);

      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }

      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
      element.addEventListener('dragend', Effect.hide, false);
    }
  }

  Waves.displayEffect = function (options) {
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    //Wrap input inside <i> tag
    Effect.wrapInput($$('.waves-effect'));

    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }

    document.body.addEventListener('mousedown', showEffect, false);
  };

  /**
   * Attach Waves to an input element (or any element which doesn't
   * bubble mouseup/mousedown events).
   *   Intended to be used with dynamically loaded forms/inputs, or
   * where the user doesn't want a delegated click handler.
   */
  Waves.attach = function (element) {
    //FUTURE: automatically add waves classes and allow users
    // to specify them with an options param? Eg. light/classic/button
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentNode;
    }

    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }

    element.addEventListener('mousedown', showEffect, false);
  };

  window.Waves = Waves;

  document.addEventListener('DOMContentLoaded', function () {
    Waves.displayEffect();
  }, false);
})(window);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    html: '',
    displayLength: 4000,
    inDuration: 300,
    outDuration: 375,
    classes: '',
    completeCallback: null,
    activationPercent: 0.8
  };

  var Toast = function () {
    function Toast(options) {
      _classCallCheck(this, Toast);

      /**
       * Options for the toast
       * @member Toast#options
       */
      this.options = $.extend({}, Toast.defaults, options);
      this.message = this.options.html;

      /**
       * Describes current pan state toast
       * @type {Boolean}
       */
      this.panning = false;

      /**
       * Time remaining until toast is removed
       */
      this.timeRemaining = this.options.displayLength;

      if (Toast._toasts.length === 0) {
        Toast._createContainer();
      }

      // Create new toast
      Toast._toasts.push(this);
      var toastElement = this._createToast();
      toastElement.M_Toast = this;
      this.el = toastElement;
      this.$el = $(toastElement);
      this._animateIn();
      this._setTimer();
    }

    _createClass(Toast, [{
      key: "_createToast",


      /**
       * Create toast and append it to toast container
       */
      value: function _createToast() {
        var toast = document.createElement('div');
        toast.classList.add('toast');

        // Add custom classes onto toast
        if (!!this.options.classes.length) {
          $(toast).addClass(this.options.classes);
        }

        // Set content
        if (typeof HTMLElement === 'object' ? this.message instanceof HTMLElement : this.message && typeof this.message === 'object' && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === 'string') {
          toast.appendChild(this.message);

          // Check if it is jQuery object
        } else if (!!this.message.jquery) {
          $(toast).append(this.message[0]);

          // Insert as html;
        } else {
          toast.innerHTML = this.message;
        }

        // Append toasft
        Toast._container.appendChild(toast);
        return toast;
      }

      /**
       * Animate in toast
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        // Animate toast in
        anim({
          targets: this.el,
          top: 0,
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }

      /**
       * Create setInterval which automatically removes toast when timeRemaining >= 0
       * has been reached
       */

    }, {
      key: "_setTimer",
      value: function _setTimer() {
        var _this29 = this;

        if (this.timeRemaining !== Infinity) {
          this.counterInterval = setInterval(function () {
            // If toast is not being dragged, decrease its time remaining
            if (!_this29.panning) {
              _this29.timeRemaining -= 20;
            }

            // Animate toast out
            if (_this29.timeRemaining <= 0) {
              _this29.dismiss();
            }
          }, 20);
        }
      }

      /**
       * Dismiss toast with animation
       */

    }, {
      key: "dismiss",
      value: function dismiss() {
        var _this30 = this;

        window.clearInterval(this.counterInterval);
        var activationDistance = this.el.offsetWidth * this.options.activationPercent;

        if (this.wasSwiped) {
          this.el.style.transition = 'transform .05s, opacity .05s';
          this.el.style.transform = "translateX(" + activationDistance + "px)";
          this.el.style.opacity = 0;
        }

        anim({
          targets: this.el,
          opacity: 0,
          marginTop: -40,
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          complete: function () {
            // Call the optional callback
            if (typeof _this30.options.completeCallback === 'function') {
              _this30.options.completeCallback();
            }
            // Remove toast from DOM
            _this30.$el.remove();
            Toast._toasts.splice(Toast._toasts.indexOf(_this30), 1);
            if (Toast._toasts.length === 0) {
              Toast._removeContainer();
            }
          }
        });
      }
    }], [{
      key: "getInstance",


      /**
       * Get Instance
       */
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Toast;
      }

      /**
       * Append toast container and add event handlers
       */

    }, {
      key: "_createContainer",
      value: function _createContainer() {
        var container = document.createElement('div');
        container.setAttribute('id', 'toast-container');

        // Add event handler
        container.addEventListener('touchstart', Toast._onDragStart);
        container.addEventListener('touchmove', Toast._onDragMove);
        container.addEventListener('touchend', Toast._onDragEnd);

        container.addEventListener('mousedown', Toast._onDragStart);
        document.addEventListener('mousemove', Toast._onDragMove);
        document.addEventListener('mouseup', Toast._onDragEnd);

        document.body.appendChild(container);
        Toast._container = container;
      }

      /**
       * Remove toast container and event handlers
       */

    }, {
      key: "_removeContainer",
      value: function _removeContainer() {
        // Add event handler
        document.removeEventListener('mousemove', Toast._onDragMove);
        document.removeEventListener('mouseup', Toast._onDragEnd);

        $(Toast._container).remove();
        Toast._container = null;
      }

      /**
       * Begin drag handler
       * @param {Event} e
       */

    }, {
      key: "_onDragStart",
      value: function _onDragStart(e) {
        if (e.target && $(e.target).closest('.toast').length) {
          var $toast = $(e.target).closest('.toast');
          var toast = $toast[0].M_Toast;
          toast.panning = true;
          Toast._draggedToast = toast;
          toast.el.classList.add('panning');
          toast.el.style.transition = '';
          toast.startingXPos = Toast._xPos(e);
          toast.time = Date.now();
          toast.xPos = Toast._xPos(e);
        }
      }

      /**
       * Drag move handler
       * @param {Event} e
       */

    }, {
      key: "_onDragMove",
      value: function _onDragMove(e) {
        if (!!Toast._draggedToast) {
          e.preventDefault();
          var toast = Toast._draggedToast;
          toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
          toast.xPos = Toast._xPos(e);
          toast.velocityX = toast.deltaX / (Date.now() - toast.time);
          toast.time = Date.now();

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          toast.el.style.transform = "translateX(" + totalDeltaX + "px)";
          toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
        }
      }

      /**
       * End drag handler
       */

    }, {
      key: "_onDragEnd",
      value: function _onDragEnd() {
        if (!!Toast._draggedToast) {
          var toast = Toast._draggedToast;
          toast.panning = false;
          toast.el.classList.remove('panning');

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;

          // Remove toast
          if (shouldBeDismissed) {
            toast.wasSwiped = true;
            toast.dismiss();

            // Animate toast back to original position
          } else {
            toast.el.style.transition = 'transform .2s, opacity .2s';
            toast.el.style.transform = '';
            toast.el.style.opacity = '';
          }
          Toast._draggedToast = null;
        }
      }

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       */

    }, {
      key: "_xPos",
      value: function _xPos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        }
        // mouse event
        return e.clientX;
      }

      /**
       * Remove all toasts
       */

    }, {
      key: "dismissAll",
      value: function dismissAll() {
        for (var toastIndex in Toast._toasts) {
          Toast._toasts[toastIndex].dismiss();
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Toast;
  }();

  /**
   * @static
   * @memberof Toast
   * @type {Array.<Toast>}
   */


  Toast._toasts = [];

  /**
   * @static
   * @memberof Toast
   */
  Toast._container = null;

  /**
   * @static
   * @memberof Toast
   * @type {Toast}
   */
  Toast._draggedToast = null;

  M.Toast = Toast;
  M.toast = function (options) {
    return new Toast(options);
  };
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };

  /**
   * @class
   */

  var Sidenav = function (_Component8) {
    _inherits(Sidenav, _Component8);

    /**
     * Construct Sidenav instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Sidenav(el, options) {
      _classCallCheck(this, Sidenav);

      var _this31 = _possibleConstructorReturn(this, (Sidenav.__proto__ || Object.getPrototypeOf(Sidenav)).call(this, Sidenav, el, options));

      _this31.el.M_Sidenav = _this31;
      _this31.id = _this31.$el.attr('id');

      /**
       * Options for the Sidenav
       * @member Sidenav#options
       * @prop {String} [edge='left'] - Side of screen on which Sidenav appears
       * @prop {Boolean} [draggable=true] - Allow swipe gestures to open/close Sidenav
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Function called when sidenav starts entering
       * @prop {Function} onOpenEnd - Function called when sidenav finishes entering
       * @prop {Function} onCloseStart - Function called when sidenav starts exiting
       * @prop {Function} onCloseEnd - Function called when sidenav finishes exiting
       */
      _this31.options = $.extend({}, Sidenav.defaults, options);

      /**
       * Describes open/close state of Sidenav
       * @type {Boolean}
       */
      _this31.isOpen = false;

      /**
       * Describes if Sidenav is fixed
       * @type {Boolean}
       */
      _this31.isFixed = _this31.el.classList.contains('sidenav-fixed');

      /**
       * Describes if Sidenav is being draggeed
       * @type {Boolean}
       */
      _this31.isDragged = false;

      // Window size variables for window resize checks
      _this31.lastWindowWidth = window.innerWidth;
      _this31.lastWindowHeight = window.innerHeight;

      _this31._createOverlay();
      _this31._createDragTarget();
      _this31._setupEventHandlers();
      _this31._setupClasses();
      _this31._setupFixed();

      Sidenav._sidenavs.push(_this31);
      return _this31;
    }

    _createClass(Sidenav, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._enableBodyScrolling();
        this._overlay.parentNode.removeChild(this._overlay);
        this.dragTarget.parentNode.removeChild(this.dragTarget);
        this.el.M_Sidenav = undefined;
        this.el.style.transform = '';

        var index = Sidenav._sidenavs.indexOf(this);
        if (index >= 0) {
          Sidenav._sidenavs.splice(index, 1);
        }
      }
    }, {
      key: "_createOverlay",
      value: function _createOverlay() {
        var overlay = document.createElement('div');
        this._closeBound = this.close.bind(this);
        overlay.classList.add('sidenav-overlay');

        overlay.addEventListener('click', this._closeBound);

        document.body.appendChild(overlay);
        this._overlay = overlay;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        if (Sidenav._sidenavs.length === 0) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }

        this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
        this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
        this._handleCloseDragBound = this._handleCloseDrag.bind(this);
        this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
        this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);

        this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);
        this._overlay.addEventListener('touchmove', this._handleCloseDragBound);
        this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);
        this.el.addEventListener('touchmove', this._handleCloseDragBound);
        this.el.addEventListener('touchend', this._handleCloseReleaseBound);
        this.el.addEventListener('click', this._handleCloseTriggerClickBound);

        // Add resize for side nav fixed
        if (this.isFixed) {
          this._handleWindowResizeBound = this._handleWindowResize.bind(this);
          window.addEventListener('resize', this._handleWindowResizeBound);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Sidenav._sidenavs.length === 1) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }

        this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);
        this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);
        this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);
        this.el.removeEventListener('touchmove', this._handleCloseDragBound);
        this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
        this.el.removeEventListener('click', this._handleCloseTriggerClickBound);

        // Remove resize for side nav fixed
        if (this.isFixed) {
          window.removeEventListener('resize', this._handleWindowResizeBound);
        }
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.sidenav-trigger');
        if (e.target && $trigger.length) {
          var sidenavId = M.getIdFromTrigger($trigger[0]);

          var sidenavInstance = document.getElementById(sidenavId).M_Sidenav;
          if (sidenavInstance) {
            sidenavInstance.open($trigger);
          }
          e.preventDefault();
        }
      }

      /**
       * Set variables needed at the beggining of drag
       * and stop any current transition.
       * @param {Event} e
       */

    }, {
      key: "_startDrag",
      value: function _startDrag(e) {
        var clientX = e.targetTouches[0].clientX;
        this.isDragged = true;
        this._startingXpos = clientX;
        this._xPos = this._startingXpos;
        this._time = Date.now();
        this._width = this.el.getBoundingClientRect().width;
        this._overlay.style.display = 'block';
        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this._verticallyScrolling = false;
        anim.remove(this.el);
        anim.remove(this._overlay);
      }

      /**
       * Set variables needed at each drag move update tick
       * @param {Event} e
       */

    }, {
      key: "_dragMoveUpdate",
      value: function _dragMoveUpdate(e) {
        var clientX = e.targetTouches[0].clientX;
        var currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this.deltaX = Math.abs(this._xPos - clientX);
        this._xPos = clientX;
        this.velocityX = this.deltaX / (Date.now() - this._time);
        this._time = Date.now();
        if (this._initialScrollTop !== currentScrollTop) {
          this._verticallyScrolling = true;
        }
      }

      /**
       * Handles Dragging of Sidenav
       * @param {Event} e
       */

    }, {
      key: "_handleDragTargetDrag",
      value: function _handleDragTargetDrag(e) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        }

        // If not being dragged, set initial drag start variables
        if (!this.isDragged) {
          this._startDrag(e);
        }

        // Run touchmove updates
        this._dragMoveUpdate(e);

        // Calculate raw deltaX
        var totalDeltaX = this._xPos - this._startingXpos;

        // dragDirection is the attempted user drag direction
        var dragDirection = totalDeltaX > 0 ? 'right' : 'left';

        // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction
        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
        if (this.options.edge === dragDirection) {
          totalDeltaX = 0;
        }

        /**
         * transformX is the drag displacement
         * transformPrefix is the initial transform placement
         * Invert values if Sidenav is right edge
         */
        var transformX = totalDeltaX;
        var transformPrefix = 'translateX(-100%)';
        if (this.options.edge === 'right') {
          transformPrefix = 'translateX(100%)';
          transformX = -transformX;
        }

        // Calculate open/close percentage of sidenav, with open = 1 and close = 0
        this.percentOpen = Math.min(1, totalDeltaX / this._width);

        // Set transform and opacity styles
        this.el.style.transform = transformPrefix + " translateX(" + transformX + "px)";
        this._overlay.style.opacity = this.percentOpen;
      }

      /**
       * Handle Drag Target Release
       */

    }, {
      key: "_handleDragTargetRelease",
      value: function _handleDragTargetRelease() {
        if (this.isDragged) {
          if (this.percentOpen > 0.2) {
            this.open();
          } else {
            this._animateOut();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }

      /**
       * Handle Close Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCloseDrag",
      value: function _handleCloseDrag(e) {
        if (this.isOpen) {
          // Check if draggable
          if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
            return;
          }

          // If not being dragged, set initial drag start variables
          if (!this.isDragged) {
            this._startDrag(e);
          }

          // Run touchmove updates
          this._dragMoveUpdate(e);

          // Calculate raw deltaX
          var totalDeltaX = this._xPos - this._startingXpos;

          // dragDirection is the attempted user drag direction
          var dragDirection = totalDeltaX > 0 ? 'right' : 'left';

          // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction
          totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
          if (this.options.edge !== dragDirection) {
            totalDeltaX = 0;
          }

          var transformX = -totalDeltaX;
          if (this.options.edge === 'right') {
            transformX = -transformX;
          }

          // Calculate open/close percentage of sidenav, with open = 1 and close = 0
          this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width);

          // Set transform and opacity styles
          this.el.style.transform = "translateX(" + transformX + "px)";
          this._overlay.style.opacity = this.percentOpen;
        }
      }

      /**
       * Handle Close Release
       */

    }, {
      key: "_handleCloseRelease",
      value: function _handleCloseRelease() {
        if (this.isOpen && this.isDragged) {
          if (this.percentOpen > 0.8) {
            this._animateIn();
          } else {
            this.close();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }

      /**
       * Handles closing of Sidenav when element with class .sidenav-close
       */

    }, {
      key: "_handleCloseTriggerClick",
      value: function _handleCloseTriggerClick(e) {
        var $closeTrigger = $(e.target).closest('.sidenav-close');
        if ($closeTrigger.length && !this._isCurrentlyFixed()) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        // Only handle horizontal resizes
        if (this.lastWindowWidth !== window.innerWidth) {
          if (window.innerWidth > 992) {
            this.open();
          } else {
            this.close();
          }
        }

        this.lastWindowWidth = window.innerWidth;
        this.lastWindowHeight = window.innerHeight;
      }
    }, {
      key: "_setupClasses",
      value: function _setupClasses() {
        if (this.options.edge === 'right') {
          this.el.classList.add('right-aligned');
          this.dragTarget.classList.add('right-aligned');
        }
      }
    }, {
      key: "_removeClasses",
      value: function _removeClasses() {
        this.el.classList.remove('right-aligned');
        this.dragTarget.classList.remove('right-aligned');
      }
    }, {
      key: "_setupFixed",
      value: function _setupFixed() {
        if (this._isCurrentlyFixed()) {
          this.open();
        }
      }
    }, {
      key: "_isCurrentlyFixed",
      value: function _isCurrentlyFixed() {
        return this.isFixed && window.innerWidth > 992;
      }
    }, {
      key: "_createDragTarget",
      value: function _createDragTarget() {
        var dragTarget = document.createElement('div');
        dragTarget.classList.add('drag-target');
        document.body.appendChild(dragTarget);
        this.dragTarget = dragTarget;
      }
    }, {
      key: "_preventBodyScrolling",
      value: function _preventBodyScrolling() {
        var body = document.body;
        body.style.overflow = 'hidden';
      }
    }, {
      key: "_enableBodyScrolling",
      value: function _enableBodyScrolling() {
        var body = document.body;
        body.style.overflow = '';
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen === true) {
          return;
        }

        this.isOpen = true;

        // Run onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          anim.remove(this.el);
          anim({
            targets: this.el,
            translateX: 0,
            duration: 0,
            easing: 'easeOutQuad'
          });
          this._enableBodyScrolling();
          this._overlay.style.display = 'none';

          // Handle non-fixed Sidenav
        } else {
          if (this.options.preventScrolling) {
            this._preventBodyScrolling();
          }

          if (!this.isDragged || this.percentOpen != 1) {
            this._animateIn();
          }
        }
      }
    }, {
      key: "close",
      value: function close() {
        if (this.isOpen === false) {
          return;
        }

        this.isOpen = false;

        // Run onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          var transformX = this.options.edge === 'left' ? '-105%' : '105%';
          this.el.style.transform = "translateX(" + transformX + ")";

          // Handle non-fixed Sidenav
        } else {
          this._enableBodyScrolling();

          if (!this.isDragged || this.percentOpen != 0) {
            this._animateOut();
          } else {
            this._overlay.style.display = 'none';
          }
        }
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._animateSidenavIn();
        this._animateOverlayIn();
      }
    }, {
      key: "_animateSidenavIn",
      value: function _animateSidenavIn() {
        var _this32 = this;

        var slideOutPercent = this.options.edge === 'left' ? -1 : 1;
        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", 0],
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function () {
            // Run onOpenEnd callback
            if (typeof _this32.options.onOpenEnd === 'function') {
              _this32.options.onOpenEnd.call(_this32, _this32.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayIn",
      value: function _animateOverlayIn() {
        var start = 0;
        if (this.isDragged) {
          start = this.percentOpen;
        } else {
          $(this._overlay).css({
            display: 'block'
          });
        }

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: [start, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        this._animateSidenavOut();
        this._animateOverlayOut();
      }
    }, {
      key: "_animateSidenavOut",
      value: function _animateSidenavOut() {
        var _this33 = this;

        var endPercent = this.options.edge === 'left' ? -1 : 1;
        var slideOutPercent = 0;
        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? endPercent + this.percentOpen : endPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", endPercent * 105 + "%"],
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            // Run onOpenEnd callback
            if (typeof _this33.options.onCloseEnd === 'function') {
              _this33.options.onCloseEnd.call(_this33, _this33.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayOut",
      value: function _animateOverlayOut() {
        var _this34 = this;

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            $(_this34._overlay).css('display', 'none');
          }
        });
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Sidenav.__proto__ || Object.getPrototypeOf(Sidenav), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Sidenav;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Sidenav;
  }(Component);

  /**
   * @static
   * @memberof Sidenav
   * @type {Array.<Sidenav>}
   */


  Sidenav._sidenavs = [];

  M.Sidenav = Sidenav;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Sidenav, 'sidenav', 'M_Sidenav');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    throttle: 100,
    scrollOffset: 200, // offset - 200 allows elements near bottom of page to scroll
    activeClass: 'active',
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }
  };

  /**
   * @class
   *
   */

  var ScrollSpy = function (_Component9) {
    _inherits(ScrollSpy, _Component9);

    /**
     * Construct ScrollSpy instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function ScrollSpy(el, options) {
      _classCallCheck(this, ScrollSpy);

      var _this35 = _possibleConstructorReturn(this, (ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy)).call(this, ScrollSpy, el, options));

      _this35.el.M_ScrollSpy = _this35;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [throttle=100] - Throttle of scroll handler
       * @prop {Number} [scrollOffset=200] - Offset for centering element when scrolled to
       * @prop {String} [activeClass='active'] - Class applied to active elements
       * @prop {Function} [getActiveElement] - Used to find active element
       */
      _this35.options = $.extend({}, ScrollSpy.defaults, options);

      // setup
      ScrollSpy._elements.push(_this35);
      ScrollSpy._count++;
      ScrollSpy._increment++;
      _this35.tickId = -1;
      _this35.id = ScrollSpy._increment;
      _this35._setupEventHandlers();
      _this35._handleWindowScroll();
      return _this35;
    }

    _createClass(ScrollSpy, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        ScrollSpy._elements.splice(ScrollSpy._elements.indexOf(this), 1);
        ScrollSpy._elementsInView.splice(ScrollSpy._elementsInView.indexOf(this), 1);
        ScrollSpy._visibleElements.splice(ScrollSpy._visibleElements.indexOf(this.$el), 1);
        ScrollSpy._count--;
        this._removeEventHandlers();
        $(this.options.getActiveElement(this.$el.attr('id'))).removeClass(this.options.activeClass);
        this.el.M_ScrollSpy = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var throttledResize = M.throttle(this._handleWindowScroll, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);
        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
        if (ScrollSpy._count === 1) {
          window.addEventListener('scroll', this._handleWindowScrollBound);
          window.addEventListener('resize', this._handleThrottledResizeBound);
          document.body.addEventListener('click', this._handleTriggerClick);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (ScrollSpy._count === 0) {
          window.removeEventListener('scroll', this._handleWindowScrollBound);
          window.removeEventListener('resize', this._handleThrottledResizeBound);
          document.body.removeEventListener('click', this._handleTriggerClick);
        }
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target);
        for (var i = ScrollSpy._elements.length - 1; i >= 0; i--) {
          var scrollspy = ScrollSpy._elements[i];
          if ($trigger.is('a[href="#' + scrollspy.$el.attr('id') + '"]')) {
            e.preventDefault();
            var offset = scrollspy.$el.offset().top + 1;

            anim({
              targets: [document.documentElement, document.body],
              scrollTop: offset - scrollspy.options.scrollOffset,
              duration: 400,
              easing: 'easeOutCubic'
            });
            break;
          }
        }
      }

      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        // unique tick id
        ScrollSpy._ticks++;

        // viewport rectangle
        var top = M.getDocumentScrollTop(),
            left = M.getDocumentScrollLeft(),
            right = left + window.innerWidth,
            bottom = top + window.innerHeight;

        // determine which elements are in view
        var intersections = ScrollSpy._findElements(top, right, bottom, left);
        for (var i = 0; i < intersections.length; i++) {
          var scrollspy = intersections[i];
          var lastTick = scrollspy.tickId;
          if (lastTick < 0) {
            // entered into view
            scrollspy._enter();
          }

          // update tick id
          scrollspy.tickId = ScrollSpy._ticks;
        }

        for (var _i = 0; _i < ScrollSpy._elementsInView.length; _i++) {
          var _scrollspy = ScrollSpy._elementsInView[_i];
          var _lastTick = _scrollspy.tickId;
          if (_lastTick >= 0 && _lastTick !== ScrollSpy._ticks) {
            // exited from view
            _scrollspy._exit();
            _scrollspy.tickId = -1;
          }
        }

        // remember elements in view for next tick
        ScrollSpy._elementsInView = intersections;
      }

      /**
       * Find elements that are within the boundary
       * @param {number} top
       * @param {number} right
       * @param {number} bottom
       * @param {number} left
       * @return {Array.<ScrollSpy>}   A collection of elements
       */

    }, {
      key: "_enter",
      value: function _enter() {
        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);
          if (ScrollSpy._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy._visibleElements[0][0].M_ScrollSpy.id) {
            ScrollSpy._visibleElements.unshift(this.$el);
          } else {
            ScrollSpy._visibleElements.push(this.$el);
          }
        } else {
          ScrollSpy._visibleElements.push(this.$el);
        }

        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
      }
    }, {
      key: "_exit",
      value: function _exit() {
        var _this36 = this;

        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);

          ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (el) {
            return el.attr('id') != _this36.$el.attr('id');
          });
          if (ScrollSpy._visibleElements[0]) {
            // Check if empty
            $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
          }
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_ScrollSpy;
      }
    }, {
      key: "_findElements",
      value: function _findElements(top, right, bottom, left) {
        var hits = [];
        for (var i = 0; i < ScrollSpy._elements.length; i++) {
          var scrollspy = ScrollSpy._elements[i];
          var currTop = top + scrollspy.options.scrollOffset || 200;

          if (scrollspy.$el.height() > 0) {
            var elTop = scrollspy.$el.offset().top,
                elLeft = scrollspy.$el.offset().left,
                elRight = elLeft + scrollspy.$el.width(),
                elBottom = elTop + scrollspy.$el.height();

            var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);

            if (isIntersect) {
              hits.push(scrollspy);
            }
          }
        }
        return hits;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return ScrollSpy;
  }(Component);

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */


  ScrollSpy._elements = [];

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */
  ScrollSpy._elementsInView = [];

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<cash>}
   */
  ScrollSpy._visibleElements = [];

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._count = 0;

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._increment = 0;

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._ticks = 0;

  M.ScrollSpy = ScrollSpy;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(ScrollSpy, 'scrollSpy', 'M_ScrollSpy');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    data: {}, // Autocomplete data set
    limit: Infinity, // Limit of results the autocomplete shows
    onAutocomplete: null, // Callback for when autocompleted
    minLength: 1, // Min characters before autocomplete starts
    sortFunction: function (a, b, inputString) {
      // Sort function for sorting autocomplete results
      return a.indexOf(inputString) - b.indexOf(inputString);
    }
  };

  /**
   * @class
   *
   */

  var Autocomplete = function (_Component10) {
    _inherits(Autocomplete, _Component10);

    /**
     * Construct Autocomplete instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Autocomplete(el, options) {
      _classCallCheck(this, Autocomplete);

      var _this37 = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, Autocomplete, el, options));

      _this37.el.M_Autocomplete = _this37;

      /**
       * Options for the autocomplete
       * @member Autocomplete#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {number} shift
       * @prop {number} padding
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */
      _this37.options = $.extend({}, Autocomplete.defaults, options);

      // Setup
      _this37.isOpen = false;
      _this37.count = 0;
      _this37.activeIndex = -1;
      _this37.oldVal;
      _this37.$inputField = _this37.$el.closest('.input-field');
      _this37.$active = $();
      _this37._mousedown = false;
      _this37._setupDropdown();

      _this37._setupEventHandlers();
      return _this37;
    }

    _createClass(Autocomplete, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeDropdown();
        this.el.M_Autocomplete = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputBlurBound = this._handleInputBlur.bind(this);
        this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this);
        this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this);

        this.el.addEventListener('blur', this._handleInputBlurBound);
        this.el.addEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('click', this._handleInputClickBound);
        this.container.addEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.addEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.addEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.addEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('blur', this._handleInputBlurBound);
        this.el.removeEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.container.removeEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.removeEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.removeEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.removeEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this38 = this;

        this.container = document.createElement('ul');
        this.container.id = "autocomplete-options-" + M.guid();
        $(this.container).addClass('autocomplete-content dropdown-content');
        this.$inputField.append(this.container);
        this.el.setAttribute('data-target', this.container.id);

        this.dropdown = M.Dropdown.init(this.el, {
          autoFocus: false,
          closeOnClick: false,
          coverTrigger: false,
          onItemClick: function (itemEl) {
            _this38.selectOption($(itemEl));
          }
        });

        // Sketchy removal of dropdown click handler
        this.el.removeEventListener('click', this.dropdown._handleClickBound);
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        this.container.parentNode.removeChild(this.container);
      }

      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        if (!this._mousedown) {
          this.close();
          this._resetAutocomplete();
        }
      }

      /**
       * Handle Input Keyup and Focus
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeyupAndFocus",
      value: function _handleInputKeyupAndFocus(e) {
        if (e.type === 'keyup') {
          Autocomplete._keydown = false;
        }

        this.count = 0;
        var val = this.el.value.toLowerCase();

        // Don't capture enter or arrow key usage.
        if (e.keyCode === 13 || e.keyCode === 38 || e.keyCode === 40) {
          return;
        }

        // Check if the input isn't empty
        // Check if focus triggered by tab
        if (this.oldVal !== val && (M.tabPressed || e.type !== 'focus')) {
          this.open();
        }

        // Update oldVal
        this.oldVal = val;
      }

      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Autocomplete._keydown = true;

        // Arrow keys and enter key usage
        var keyCode = e.keyCode,
            liElement = void 0,
            numItems = $(this.container).children('li').length;

        // select element on Enter
        if (keyCode === M.keys.ENTER && this.activeIndex >= 0) {
          liElement = $(this.container).children('li').eq(this.activeIndex);
          if (liElement.length) {
            this.selectOption(liElement);
            e.preventDefault();
          }
          return;
        }

        // Capture up and down key
        if (keyCode === M.keys.ARROW_UP || keyCode === M.keys.ARROW_DOWN) {
          e.preventDefault();

          if (keyCode === M.keys.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
          }

          if (keyCode === M.keys.ARROW_DOWN && this.activeIndex < numItems - 1) {
            this.activeIndex++;
          }

          this.$active.removeClass('active');
          if (this.activeIndex >= 0) {
            this.$active = $(this.container).children('li').eq(this.activeIndex);
            this.$active.addClass('active');
          }
        }
      }

      /**
       * Handle Input Click
       * @param {Event} e
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick(e) {
        this.open();
      }

      /**
       * Handle Container Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMousedownAndTouchstart",
      value: function _handleContainerMousedownAndTouchstart(e) {
        this._mousedown = true;
      }

      /**
       * Handle Container Mouseup and Touchend
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMouseupAndTouchend",
      value: function _handleContainerMouseupAndTouchend(e) {
        this._mousedown = false;
      }

      /**
       * Highlight partial match
       */

    }, {
      key: "_highlight",
      value: function _highlight(string, $el) {
        var img = $el.find('img');
        var matchStart = $el.text().toLowerCase().indexOf('' + string.toLowerCase() + ''),
            matchEnd = matchStart + string.length - 1,
            beforeMatch = $el.text().slice(0, matchStart),
            matchText = $el.text().slice(matchStart, matchEnd + 1),
            afterMatch = $el.text().slice(matchEnd + 1);
        $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
        if (img.length) {
          $el.prepend(img);
        }
      }

      /**
       * Reset current element position
       */

    }, {
      key: "_resetCurrentElement",
      value: function _resetCurrentElement() {
        this.activeIndex = -1;
        this.$active.removeClass('active');
      }

      /**
       * Reset autocomplete elements
       */

    }, {
      key: "_resetAutocomplete",
      value: function _resetAutocomplete() {
        $(this.container).empty();
        this._resetCurrentElement();
        this.oldVal = null;
        this.isOpen = false;
        this._mousedown = false;
      }

      /**
       * Select autocomplete option
       * @param {Element} el  Autocomplete option list item element
       */

    }, {
      key: "selectOption",
      value: function selectOption(el) {
        var text = el.text().trim();
        this.el.value = text;
        this.$el.trigger('change');
        this._resetAutocomplete();
        this.close();

        // Handle onAutocomplete callback.
        if (typeof this.options.onAutocomplete === 'function') {
          this.options.onAutocomplete.call(this, text);
        }
      }

      /**
       * Render dropdown content
       * @param {Object} data  data set
       * @param {String} val  current input value
       */

    }, {
      key: "_renderDropdown",
      value: function _renderDropdown(data, val) {
        var _this39 = this;

        this._resetAutocomplete();

        var matchingData = [];

        // Gather all matching data
        for (var key in data) {
          if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
            // Break if past limit
            if (this.count >= this.options.limit) {
              break;
            }

            var entry = {
              data: data[key],
              key: key
            };
            matchingData.push(entry);

            this.count++;
          }
        }

        // Sort
        if (this.options.sortFunction) {
          var sortFunctionBound = function (a, b) {
            return _this39.options.sortFunction(a.key.toLowerCase(), b.key.toLowerCase(), val.toLowerCase());
          };
          matchingData.sort(sortFunctionBound);
        }

        // Render
        for (var i = 0; i < matchingData.length; i++) {
          var _entry = matchingData[i];
          var $autocompleteOption = $('<li></li>');
          if (!!_entry.data) {
            $autocompleteOption.append("<img src=\"" + _entry.data + "\" class=\"right circle\"><span>" + _entry.key + "</span>");
          } else {
            $autocompleteOption.append('<span>' + _entry.key + '</span>');
          }

          $(this.container).append($autocompleteOption);
          this._highlight(val, $autocompleteOption);
        }
      }

      /**
       * Open Autocomplete Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        var val = this.el.value.toLowerCase();

        this._resetAutocomplete();

        if (val.length >= this.options.minLength) {
          this.isOpen = true;
          this._renderDropdown(this.options.data, val);
        }

        // Open dropdown
        if (!this.dropdown.isOpen) {
          this.dropdown.open();
        } else {
          // Recalculate dropdown when its already open
          this.dropdown.recalculateDimensions();
        }
      }

      /**
       * Close Autocomplete Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        this.dropdown.close();
      }

      /**
       * Update Data
       * @param {Object} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        var val = this.el.value.toLowerCase();
        this.options.data = data;

        if (this.isOpen) {
          this._renderDropdown(data, val);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Autocomplete;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Autocomplete;
  }(Component);

  /**
   * @static
   * @memberof Autocomplete
   */


  Autocomplete._keydown = false;

  M.Autocomplete = Autocomplete;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Autocomplete, 'autocomplete', 'M_Autocomplete');
  }
})(cash);
;(function ($) {
  // Function to update labels of text fields
  M.updateTextFields = function () {
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function (element, index) {
      var $this = $(this);
      if (element.value.length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== null) {
        $this.siblings('label').addClass('active');
      } else if (element.validity) {
        $this.siblings('label').toggleClass('active', element.validity.badInput === true);
      } else {
        $this.siblings('label').removeClass('active');
      }
    });
  };

  M.validate_field = function (object) {
    var hasLength = object.attr('data-length') !== null;
    var lenAttr = parseInt(object.attr('data-length'));
    var len = object[0].value.length;

    if (len === 0 && object[0].validity.badInput === false && !object.is(':required')) {
      if (object.hasClass('validate')) {
        object.removeClass('valid');
        object.removeClass('invalid');
      }
    } else {
      if (object.hasClass('validate')) {
        // Check for character counter attributes
        if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
          object.removeClass('invalid');
          object.addClass('valid');
        } else {
          object.removeClass('valid');
          object.addClass('invalid');
        }
      }
    }
  };

  M.textareaAutoResize = function ($textarea) {
    // Wrap if native element
    if ($textarea instanceof Element) {
      $textarea = $($textarea);
    }

    if (!$textarea.length) {
      console.error('No textarea element found');
      return;
    }

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }

    // Set font properties of hiddenDiv
    var fontFamily = $textarea.css('font-family');
    var fontSize = $textarea.css('font-size');
    var lineHeight = $textarea.css('line-height');

    // Firefox can't handle padding shorthand.
    var paddingTop = $textarea.css('padding-top');
    var paddingRight = $textarea.css('padding-right');
    var paddingBottom = $textarea.css('padding-bottom');
    var paddingLeft = $textarea.css('padding-left');

    if (fontSize) {
      hiddenDiv.css('font-size', fontSize);
    }
    if (fontFamily) {
      hiddenDiv.css('font-family', fontFamily);
    }
    if (lineHeight) {
      hiddenDiv.css('line-height', lineHeight);
    }
    if (paddingTop) {
      hiddenDiv.css('padding-top', paddingTop);
    }
    if (paddingRight) {
      hiddenDiv.css('padding-right', paddingRight);
    }
    if (paddingBottom) {
      hiddenDiv.css('padding-bottom', paddingBottom);
    }
    if (paddingLeft) {
      hiddenDiv.css('padding-left', paddingLeft);
    }

    // Set original-height, if none
    if (!$textarea.data('original-height')) {
      $textarea.data('original-height', $textarea.height());
    }

    if ($textarea.attr('wrap') === 'off') {
      hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
    }

    hiddenDiv.text($textarea[0].value + '\n');
    var content = hiddenDiv.html().replace(/\n/g, '<br>');
    hiddenDiv.html(content);

    // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea[0].offsetWidth > 0 && $textarea[0].offsetHeight > 0) {
      hiddenDiv.css('width', $textarea.width() + 'px');
    } else {
      hiddenDiv.css('width', window.innerWidth / 2 + 'px');
    }

    /**
     * Resize if the new height is greater than the
     * original height of the textarea
     */
    if ($textarea.data('original-height') <= hiddenDiv.innerHeight()) {
      $textarea.css('height', hiddenDiv.innerHeight() + 'px');
    } else if ($textarea[0].value.length < $textarea.data('previous-length')) {
      /**
       * In case the new height is less than original height, it
       * means the textarea has less text than before
       * So we set the height to the original one
       */
      $textarea.css('height', $textarea.data('original-height') + 'px');
    }
    $textarea.data('previous-length', $textarea[0].value.length);
  };

  $(document).ready(function () {
    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if (this.value.length !== 0 || $(this).attr('placeholder') !== null) {
        $(this).siblings('label').addClass('active');
      }
      M.validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function () {
      M.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function (e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function (e) {
          if (this.value.length) {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select (after native reset)
        setTimeout(function () {
          formReset.find('select').each(function () {
            // check if initialized
            if (this.M_FormSelect) {
              $(this).trigger('change');
            }
          });
        }, 0);
      }
    });

    /**
     * Add active when element has focus
     * @param {Event} e
     */
    document.addEventListener('focus', function (e) {
      if ($(e.target).is(input_selector)) {
        $(e.target).siblings('label, .prefix').addClass('active');
      }
    }, true);

    /**
     * Remove active when element is blurred
     * @param {Event} e
     */
    document.addEventListener('blur', function (e) {
      var $inputElement = $(e.target);
      if ($inputElement.is(input_selector)) {
        var selector = '.prefix';

        if ($inputElement[0].value.length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === null) {
          selector += ', label';
        }
        $inputElement.siblings(selector).removeClass('active');
        M.validate_field($inputElement);
      }
    }, true);

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup', radio_checkbox, function (e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === M.keys.TAB) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function (e) {
          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    var text_area_selector = '.materialize-textarea';
    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Resize textarea on document load after storing
       * the original height and the original length
       */
      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', this.value.length);
      M.textareaAutoResize($textarea);
    });

    $(document).on('keyup', text_area_selector, function () {
      M.textareaAutoResize($(this));
    });
    $(document).on('keydown', text_area_selector, function () {
      M.textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input[0].value = file_names.join(', ');
      path_input.trigger('change');
    });
  }); // End of $(document).ready
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    indicators: true,
    height: 400,
    duration: 500,
    interval: 6000
  };

  /**
   * @class
   *
   */

  var Slider = function (_Component11) {
    _inherits(Slider, _Component11);

    /**
     * Construct Slider instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Slider(el, options) {
      _classCallCheck(this, Slider);

      var _this40 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, Slider, el, options));

      _this40.el.M_Slider = _this40;

      /**
       * Options for the modal
       * @member Slider#options
       * @prop {Boolean} [indicators=true] - Show indicators
       * @prop {Number} [height=400] - height of slider
       * @prop {Number} [duration=500] - Length in ms of slide transition
       * @prop {Number} [interval=6000] - Length in ms of slide interval
       */
      _this40.options = $.extend({}, Slider.defaults, options);

      // setup
      _this40.$slider = _this40.$el.find('.slides');
      _this40.$slides = _this40.$slider.children('li');
      _this40.activeIndex = _this40.$slides.filter(function (item) {
        return $(item).hasClass('active');
      }).first().index();
      if (_this40.activeIndex != -1) {
        _this40.$active = _this40.$slides.eq(_this40.activeIndex);
      }

      _this40._setSliderHeight();

      // Set initial positions of captions
      _this40.$slides.find('.caption').each(function (el) {
        _this40._animateCaptionIn(el, 0);
      });

      // Move img src into background-image
      _this40.$slides.find('img').each(function (el) {
        var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        if ($(el).attr('src') !== placeholderBase64) {
          $(el).css('background-image', 'url("' + $(el).attr('src') + '")');
          $(el).attr('src', placeholderBase64);
        }
      });

      _this40._setupIndicators();

      // Show active slide
      if (_this40.$active) {
        _this40.$active.css('display', 'block');
      } else {
        _this40.$slides.first().addClass('active');
        anim({
          targets: _this40.$slides.first()[0],
          opacity: 1,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });

        _this40.activeIndex = 0;
        _this40.$active = _this40.$slides.eq(_this40.activeIndex);

        // Update indicators
        if (_this40.options.indicators) {
          _this40.$indicators.eq(_this40.activeIndex).addClass('active');
        }
      }

      // Adjust height to current slide
      _this40.$active.find('img').each(function (el) {
        anim({
          targets: _this40.$active.find('.caption')[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });
      });

      _this40._setupEventHandlers();

      // auto scroll
      _this40.start();
      return _this40;
    }

    _createClass(Slider, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this.pause();
        this._removeIndicators();
        this._removeEventHandlers();
        this.el.M_Slider = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this41 = this;

        this._handleIntervalBound = this._handleInterval.bind(this);
        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.addEventListener('click', _this41._handleIndicatorClickBound);
          });
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this42 = this;

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.removeEventListener('click', _this42._handleIndicatorClickBound);
          });
        }
      }

      /**
       * Handle indicator click
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        var currIndex = $(e.target).index();
        this.set(currIndex);
      }

      /**
       * Handle Interval
       */

    }, {
      key: "_handleInterval",
      value: function _handleInterval() {
        var newActiveIndex = this.$slider.find('.active').index();
        if (this.$slides.length === newActiveIndex + 1) newActiveIndex = 0;
        // loop to start
        else newActiveIndex += 1;

        this.set(newActiveIndex);
      }

      /**
       * Animate in caption
       * @param {Element} caption
       * @param {Number} duration
       */

    }, {
      key: "_animateCaptionIn",
      value: function _animateCaptionIn(caption, duration) {
        var animOptions = {
          targets: caption,
          opacity: 0,
          duration: duration,
          easing: 'easeOutQuad'
        };

        if ($(caption).hasClass('center-align')) {
          animOptions.translateY = -100;
        } else if ($(caption).hasClass('right-align')) {
          animOptions.translateX = 100;
        } else if ($(caption).hasClass('left-align')) {
          animOptions.translateX = -100;
        }

        anim(animOptions);
      }

      /**
       * Set height of slider
       */

    }, {
      key: "_setSliderHeight",
      value: function _setSliderHeight() {
        // If fullscreen, do nothing
        if (!this.$el.hasClass('fullscreen')) {
          if (this.options.indicators) {
            // Add height if indicators are present
            this.$el.css('height', this.options.height + 40 + 'px');
          } else {
            this.$el.css('height', this.options.height + 'px');
          }
          this.$slider.css('height', this.options.height + 'px');
        }
      }

      /**
       * Setup indicators
       */

    }, {
      key: "_setupIndicators",
      value: function _setupIndicators() {
        var _this43 = this;

        if (this.options.indicators) {
          this.$indicators = $('<ul class="indicators"></ul>');
          this.$slides.each(function (el, index) {
            var $indicator = $('<li class="indicator-item"></li>');
            _this43.$indicators.append($indicator[0]);
          });
          this.$el.append(this.$indicators[0]);
          this.$indicators = this.$indicators.children('li.indicator-item');
        }
      }

      /**
       * Remove indicators
       */

    }, {
      key: "_removeIndicators",
      value: function _removeIndicators() {
        this.$el.find('ul.indicators').remove();
      }

      /**
       * Cycle to nth item
       * @param {Number} index
       */

    }, {
      key: "set",
      value: function set(index) {
        var _this44 = this;

        // Wrap around indices.
        if (index >= this.$slides.length) index = 0;else if (index < 0) index = this.$slides.length - 1;

        // Only do if index changes
        if (this.activeIndex != index) {
          this.$active = this.$slides.eq(this.activeIndex);
          var $caption = this.$active.find('.caption');
          this.$active.removeClass('active');

          anim({
            targets: this.$active[0],
            opacity: 0,
            duration: this.options.duration,
            easing: 'easeOutQuad',
            complete: function () {
              _this44.$slides.not('.active').each(function (el) {
                anim({
                  targets: el,
                  opacity: 0,
                  translateX: 0,
                  translateY: 0,
                  duration: 0,
                  easing: 'easeOutQuad'
                });
              });
            }
          });

          this._animateCaptionIn($caption[0], this.options.duration);

          // Update indicators
          if (this.options.indicators) {
            this.$indicators.eq(this.activeIndex).removeClass('active');
            this.$indicators.eq(index).addClass('active');
          }

          anim({
            targets: this.$slides.eq(index)[0],
            opacity: 1,
            duration: this.options.duration,
            easing: 'easeOutQuad'
          });

          anim({
            targets: this.$slides.eq(index).find('.caption')[0],
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: this.options.duration,
            delay: this.options.duration,
            easing: 'easeOutQuad'
          });

          this.$slides.eq(index).addClass('active');
          this.activeIndex = index;

          // Reset interval
          this.start();
        }
      }

      /**
       * Pause slider interval
       */

    }, {
      key: "pause",
      value: function pause() {
        clearInterval(this.interval);
      }

      /**
       * Start slider interval
       */

    }, {
      key: "start",
      value: function start() {
        clearInterval(this.interval);
        this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
      }

      /**
       * Move to next slide
       */

    }, {
      key: "next",
      value: function next() {
        var newIndex = this.activeIndex + 1;

        // Wrap around indices.
        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;

        this.set(newIndex);
      }

      /**
       * Move to previous slide
       */

    }, {
      key: "prev",
      value: function prev() {
        var newIndex = this.activeIndex - 1;

        // Wrap around indices.
        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;

        this.set(newIndex);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Slider.__proto__ || Object.getPrototypeOf(Slider), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Slider;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Slider;
  }(Component);

  M.Slider = Slider;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Slider, 'slider', 'M_Slider');
  }
})(cash, M.anime);
;(function ($, anim) {
  $(document).on('click', '.card', function (e) {
    if ($(this).children('.card-reveal').length) {
      var $card = $(e.target).closest('.card');
      if ($card.data('initialOverflow') === undefined) {
        $card.data('initialOverflow', $card.css('overflow') === undefined ? '' : $card.css('overflow'));
      }
      var $cardReveal = $(this).find('.card-reveal');
      if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
        // Make Reveal animate down and display none
        anim({
          targets: $cardReveal[0],
          translateY: 0,
          duration: 225,
          easing: 'easeInOutQuad',
          complete: function (anim) {
            var el = anim.animatables[0].target;
            $(el).css({ display: 'none' });
            $card.css('overflow', $card.data('initialOverflow'));
          }
        });
      } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
        $card.css('overflow', 'hidden');
        $cardReveal.css({ display: 'block' });
        anim({
          targets: $cardReveal[0],
          translateY: '-100%',
          duration: 300,
          easing: 'easeInOutQuad'
        });
      }
    }
  });
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
    limit: Infinity,
    onChipAdd: null,
    onChipSelect: null,
    onChipDelete: null
  };

  /**
   * @typedef {Object} chip
   * @property {String} tag  chip tag string
   * @property {String} [image]  chip avatar image string
   */

  /**
   * @class
   *
   */

  var Chips = function (_Component12) {
    _inherits(Chips, _Component12);

    /**
     * Construct Chips instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Chips(el, options) {
      _classCallCheck(this, Chips);

      var _this45 = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, Chips, el, options));

      _this45.el.M_Chips = _this45;

      /**
       * Options for the modal
       * @member Chips#options
       * @prop {Array} data
       * @prop {String} placeholder
       * @prop {String} secondaryPlaceholder
       * @prop {Object} autocompleteOptions
       */
      _this45.options = $.extend({}, Chips.defaults, options);

      _this45.$el.addClass('chips input-field');
      _this45.chipsData = [];
      _this45.$chips = $();
      _this45._setupInput();
      _this45.hasAutocomplete = Object.keys(_this45.options.autocompleteOptions).length > 0;

      // Set input id
      if (!_this45.$input.attr('id')) {
        _this45.$input.attr('id', M.guid());
      }

      // Render initial chips
      if (_this45.options.data.length) {
        _this45.chipsData = _this45.options.data;
        _this45._renderChips(_this45.chipsData);
      }

      // Setup autocomplete if needed
      if (_this45.hasAutocomplete) {
        _this45._setupAutocomplete();
      }

      _this45._setPlaceholder();
      _this45._setupLabel();
      _this45._setupEventHandlers();
      return _this45;
    }

    _createClass(Chips, [{
      key: "getData",


      /**
       * Get Chips Data
       */
      value: function getData() {
        return this.chipsData;
      }

      /**
       * Teardown component
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventHandlers();
        this.$chips.remove();
        this.el.M_Chips = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleChipClickBound = this._handleChipClick.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputFocusBound = this._handleInputFocus.bind(this);
        this._handleInputBlurBound = this._handleInputBlur.bind(this);

        this.el.addEventListener('click', this._handleChipClickBound);
        document.addEventListener('keydown', Chips._handleChipsKeydown);
        document.addEventListener('keyup', Chips._handleChipsKeyup);
        this.el.addEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].addEventListener('focus', this._handleInputFocusBound);
        this.$input[0].addEventListener('blur', this._handleInputBlurBound);
        this.$input[0].addEventListener('keydown', this._handleInputKeydownBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleChipClickBound);
        document.removeEventListener('keydown', Chips._handleChipsKeydown);
        document.removeEventListener('keyup', Chips._handleChipsKeyup);
        this.el.removeEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].removeEventListener('focus', this._handleInputFocusBound);
        this.$input[0].removeEventListener('blur', this._handleInputBlurBound);
        this.$input[0].removeEventListener('keydown', this._handleInputKeydownBound);
      }

      /**
       * Handle Chip Click
       * @param {Event} e
       */

    }, {
      key: "_handleChipClick",
      value: function _handleChipClick(e) {
        var $chip = $(e.target).closest('.chip');
        var clickedClose = $(e.target).is('.close');
        if ($chip.length) {
          var index = $chip.index();
          if (clickedClose) {
            // delete chip
            this.deleteChip(index);
            this.$input[0].focus();
          } else {
            // select chip
            this.selectChip(index);
          }

          // Default handle click to focus on input
        } else {
          this.$input[0].focus();
        }
      }

      /**
       * Handle Chips Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputFocus",


      /**
       * Handle Input Focus
       */
      value: function _handleInputFocus() {
        this.$el.addClass('focus');
      }

      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        this.$el.removeClass('focus');
      }

      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Chips._keydown = true;

        // enter
        if (e.keyCode === 13) {
          // Override enter if autocompleting.
          if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) {
            return;
          }

          e.preventDefault();
          this.addChip({
            tag: this.$input[0].value
          });
          this.$input[0].value = '';

          // delete or left
        } else if ((e.keyCode === 8 || e.keyCode === 37) && this.$input[0].value === '' && this.chipsData.length) {
          e.preventDefault();
          this.selectChip(this.chipsData.length - 1);
        }
      }

      /**
       * Render Chip
       * @param {chip} chip
       * @return {Element}
       */

    }, {
      key: "_renderChip",
      value: function _renderChip(chip) {
        if (!chip.tag) {
          return;
        }

        var renderedChip = document.createElement('div');
        var closeIcon = document.createElement('i');
        renderedChip.classList.add('chip');
        renderedChip.textContent = chip.tag;
        renderedChip.setAttribute('tabindex', 0);
        $(closeIcon).addClass('material-icons close');
        closeIcon.textContent = 'close';

        // attach image if needed
        if (chip.image) {
          var img = document.createElement('img');
          img.setAttribute('src', chip.image);
          renderedChip.insertBefore(img, renderedChip.firstChild);
        }

        renderedChip.appendChild(closeIcon);
        return renderedChip;
      }

      /**
       * Render Chips
       */

    }, {
      key: "_renderChips",
      value: function _renderChips() {
        this.$chips.remove();
        for (var i = 0; i < this.chipsData.length; i++) {
          var chipEl = this._renderChip(this.chipsData[i]);
          this.$el.append(chipEl);
          this.$chips.add(chipEl);
        }

        // move input to end
        this.$el.append(this.$input[0]);
      }

      /**
       * Setup Autocomplete
       */

    }, {
      key: "_setupAutocomplete",
      value: function _setupAutocomplete() {
        var _this46 = this;

        this.options.autocompleteOptions.onAutocomplete = function (val) {
          _this46.addChip({
            tag: val
          });
          _this46.$input[0].value = '';
          _this46.$input[0].focus();
        };

        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
      }

      /**
       * Setup Input
       */

    }, {
      key: "_setupInput",
      value: function _setupInput() {
        this.$input = this.$el.find('input');
        if (!this.$input.length) {
          this.$input = $('<input></input>');
          this.$el.append(this.$input);
        }

        this.$input.addClass('input');
      }

      /**
       * Setup Label
       */

    }, {
      key: "_setupLabel",
      value: function _setupLabel() {
        this.$label = this.$el.find('label');
        if (this.$label.length) {
          this.$label.setAttribute('for', this.$input.attr('id'));
        }
      }

      /**
       * Set placeholder
       */

    }, {
      key: "_setPlaceholder",
      value: function _setPlaceholder() {
        if (this.chipsData !== undefined && !this.chipsData.length && this.options.placeholder) {
          $(this.$input).prop('placeholder', this.options.placeholder);
        } else if ((this.chipsData === undefined || !!this.chipsData.length) && this.options.secondaryPlaceholder) {
          $(this.$input).prop('placeholder', this.options.secondaryPlaceholder);
        }
      }

      /**
       * Check if chip is valid
       * @param {chip} chip
       */

    }, {
      key: "_isValid",
      value: function _isValid(chip) {
        if (chip.hasOwnProperty('tag') && chip.tag !== '') {
          var exists = false;
          for (var i = 0; i < this.chipsData.length; i++) {
            if (this.chipsData[i].tag === chip.tag) {
              exists = true;
              break;
            }
          }
          return !exists;
        }

        return false;
      }

      /**
       * Add chip
       * @param {chip} chip
       */

    }, {
      key: "addChip",
      value: function addChip(chip) {
        if (!this._isValid(chip) || this.chipsData.length >= this.options.limit) {
          return;
        }

        var renderedChip = this._renderChip(chip);
        this.$chips.add(renderedChip);
        this.chipsData.push(chip);
        $(this.$input).before(renderedChip);
        this._setPlaceholder();

        // fire chipAdd callback
        if (typeof this.options.onChipAdd === 'function') {
          this.options.onChipAdd.call(this, this.$el, renderedChip);
        }
      }

      /**
       * Delete chip
       * @param {Number} chip
       */

    }, {
      key: "deleteChip",
      value: function deleteChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this.$chips.eq(chipIndex).remove();
        this.$chips = this.$chips.filter(function (el) {
          return $(el).index() >= 0;
        });
        this.chipsData.splice(chipIndex, 1);
        this._setPlaceholder();

        // fire chipDelete callback
        if (typeof this.options.onChipDelete === 'function') {
          this.options.onChipDelete.call(this, this.$el, $chip[0]);
        }
      }

      /**
       * Select chip
       * @param {Number} chip
       */

    }, {
      key: "selectChip",
      value: function selectChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this._selectedChip = $chip;
        $chip[0].focus();

        // fire chipSelect callback
        if (typeof this.options.onChipSelect === 'function') {
          this.options.onChipSelect.call(this, this.$el, $chip[0]);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Chips.__proto__ || Object.getPrototypeOf(Chips), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Chips;
      }
    }, {
      key: "_handleChipsKeydown",
      value: function _handleChipsKeydown(e) {
        Chips._keydown = true;

        var $chips = $(e.target).closest('.chips');
        var chipsKeydown = e.target && $chips.length;

        // Don't handle keydown inputs on input and textarea
        if ($(e.target).is('input, textarea') || !chipsKeydown) {
          return;
        }

        var currChips = $chips[0].M_Chips;

        // backspace and delete
        if (e.keyCode === 8 || e.keyCode === 46) {
          e.preventDefault();

          var selectIndex = currChips.chipsData.length;
          if (currChips._selectedChip) {
            var index = currChips._selectedChip.index();
            currChips.deleteChip(index);
            currChips._selectedChip = null;

            // Make sure selectIndex doesn't go negative
            selectIndex = Math.max(index - 1, 0);
          }

          if (currChips.chipsData.length) {
            currChips.selectChip(selectIndex);
          }

          // left arrow key
        } else if (e.keyCode === 37) {
          if (currChips._selectedChip) {
            var _selectIndex = currChips._selectedChip.index() - 1;
            if (_selectIndex < 0) {
              return;
            }
            currChips.selectChip(_selectIndex);
          }

          // right arrow key
        } else if (e.keyCode === 39) {
          if (currChips._selectedChip) {
            var _selectIndex2 = currChips._selectedChip.index() + 1;

            if (_selectIndex2 >= currChips.chipsData.length) {
              currChips.$input[0].focus();
            } else {
              currChips.selectChip(_selectIndex2);
            }
          }
        }
      }

      /**
       * Handle Chips Keyup
       * @param {Event} e
       */

    }, {
      key: "_handleChipsKeyup",
      value: function _handleChipsKeyup(e) {
        Chips._keydown = false;
      }

      /**
       * Handle Chips Blur
       * @param {Event} e
       */

    }, {
      key: "_handleChipsBlur",
      value: function _handleChipsBlur(e) {
        if (!Chips._keydown) {
          var $chips = $(e.target).closest('.chips');
          var currChips = $chips[0].M_Chips;

          currChips._selectedChip = null;
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Chips;
  }(Component);

  /**
   * @static
   * @memberof Chips
   */


  Chips._keydown = false;

  M.Chips = Chips;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Chips, 'chips', 'M_Chips');
  }

  $(document).ready(function () {
    // Handle removal of static chips.
    $(document.body).on('click', '.chip .close', function () {
      var $chips = $(this).closest('.chips');
      if ($chips.length && $chips[0].M_Chips) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    top: 0,
    bottom: Infinity,
    offset: 0,
    onPositionChange: null
  };

  /**
   * @class
   *
   */

  var Pushpin = function (_Component13) {
    _inherits(Pushpin, _Component13);

    /**
     * Construct Pushpin instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Pushpin(el, options) {
      _classCallCheck(this, Pushpin);

      var _this47 = _possibleConstructorReturn(this, (Pushpin.__proto__ || Object.getPrototypeOf(Pushpin)).call(this, Pushpin, el, options));

      _this47.el.M_Pushpin = _this47;

      /**
       * Options for the modal
       * @member Pushpin#options
       */
      _this47.options = $.extend({}, Pushpin.defaults, options);

      _this47.originalOffset = _this47.el.offsetTop;
      Pushpin._pushpins.push(_this47);
      _this47._setupEventHandlers();
      _this47._updatePosition();
      return _this47;
    }

    _createClass(Pushpin, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this.el.style.top = null;
        this._removePinClasses();
        this._removeEventHandlers();

        // Remove pushpin Inst
        var index = Pushpin._pushpins.indexOf(this);
        Pushpin._pushpins.splice(index, 1);
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        document.addEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        document.removeEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var scrolled = M.getDocumentScrollTop() + this.options.offset;

        if (this.options.top <= scrolled && this.options.bottom >= scrolled && !this.el.classList.contains('pinned')) {
          this._removePinClasses();
          this.el.style.top = this.options.offset + "px";
          this.el.classList.add('pinned');

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pinned');
          }
        }

        // Add pin-top (when scrolled position is above top)
        if (scrolled < this.options.top && !this.el.classList.contains('pin-top')) {
          this._removePinClasses();
          this.el.style.top = 0;
          this.el.classList.add('pin-top');

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-top');
          }
        }

        // Add pin-bottom (when scrolled position is below bottom)
        if (scrolled > this.options.bottom && !this.el.classList.contains('pin-bottom')) {
          this._removePinClasses();
          this.el.classList.add('pin-bottom');
          this.el.style.top = this.options.bottom - this.originalOffset + "px";

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-bottom');
          }
        }
      }
    }, {
      key: "_removePinClasses",
      value: function _removePinClasses() {
        // IE 11 bug (can't remove multiple classes in one line)
        this.el.classList.remove('pin-top');
        this.el.classList.remove('pinned');
        this.el.classList.remove('pin-bottom');
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Pushpin.__proto__ || Object.getPrototypeOf(Pushpin), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Pushpin;
      }
    }, {
      key: "_updateElements",
      value: function _updateElements() {
        for (var elIndex in Pushpin._pushpins) {
          var pInstance = Pushpin._pushpins[elIndex];
          pInstance._updatePosition();
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Pushpin;
  }(Component);

  /**
   * @static
   * @memberof Pushpin
   */


  Pushpin._pushpins = [];

  M.Pushpin = Pushpin;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Pushpin, 'pushpin', 'M_Pushpin');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    direction: 'top',
    hoverEnabled: true,
    toolbarEnabled: false
  };

  $.fn.reverse = [].reverse;

  /**
   * @class
   *
   */

  var FloatingActionButton = function (_Component14) {
    _inherits(FloatingActionButton, _Component14);

    /**
     * Construct FloatingActionButton instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function FloatingActionButton(el, options) {
      _classCallCheck(this, FloatingActionButton);

      var _this48 = _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call(this, FloatingActionButton, el, options));

      _this48.el.M_FloatingActionButton = _this48;

      /**
       * Options for the fab
       * @member FloatingActionButton#options
       * @prop {Boolean} [direction] - Direction fab menu opens
       * @prop {Boolean} [hoverEnabled=true] - Enable hover vs click
       * @prop {Boolean} [toolbarEnabled=false] - Enable toolbar transition
       */
      _this48.options = $.extend({}, FloatingActionButton.defaults, options);

      _this48.isOpen = false;
      _this48.$anchor = _this48.$el.children('a').first();
      _this48.$menu = _this48.$el.children('ul').first();
      _this48.$floatingBtns = _this48.$el.find('ul .btn-floating');
      _this48.$floatingBtnsReverse = _this48.$el.find('ul .btn-floating').reverse();
      _this48.offsetY = 0;
      _this48.offsetX = 0;

      _this48.$el.addClass("direction-" + _this48.options.direction);
      if (_this48.options.direction === 'top') {
        _this48.offsetY = 40;
      } else if (_this48.options.direction === 'right') {
        _this48.offsetX = -40;
      } else if (_this48.options.direction === 'bottom') {
        _this48.offsetY = -40;
      } else {
        _this48.offsetX = 40;
      }
      _this48._setupEventHandlers();
      return _this48;
    }

    _createClass(FloatingActionButton, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_FloatingActionButton = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleFABClickBound = this._handleFABClick.bind(this);
        this._handleOpenBound = this.open.bind(this);
        this._handleCloseBound = this.close.bind(this);

        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.addEventListener('mouseenter', this._handleOpenBound);
          this.el.addEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.addEventListener('click', this._handleFABClickBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.removeEventListener('mouseenter', this._handleOpenBound);
          this.el.removeEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.removeEventListener('click', this._handleFABClickBound);
        }
      }

      /**
       * Handle FAB Click
       */

    }, {
      key: "_handleFABClick",
      value: function _handleFABClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      /**
       * Handle Document Click
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest(this.$menu).length) {
          this.close();
        }
      }

      /**
       * Open FAB
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          this._animateInToolbar();
        } else {
          this._animateInFAB();
        }
        this.isOpen = true;
      }

      /**
       * Close FAB
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          window.removeEventListener('scroll', this._handleCloseBound, true);
          document.body.removeEventListener('click', this._handleDocumentClickBound, true);
          this._animateOutToolbar();
        } else {
          this._animateOutFAB();
        }
        this.isOpen = false;
      }

      /**
       * Classic FAB Menu open
       */

    }, {
      key: "_animateInFAB",
      value: function _animateInFAB() {
        var _this49 = this;

        this.$el.addClass('active');

        var time = 0;
        this.$floatingBtnsReverse.each(function (el) {
          anim({
            targets: el,
            opacity: 1,
            scale: [0.4, 1],
            translateY: [_this49.offsetY, 0],
            translateX: [_this49.offsetX, 0],
            duration: 275,
            delay: time,
            easing: 'easeInOutQuad'
          });
          time += 40;
        });
      }

      /**
       * Classic FAB Menu close
       */

    }, {
      key: "_animateOutFAB",
      value: function _animateOutFAB() {
        var _this50 = this;

        this.$floatingBtnsReverse.each(function (el) {
          anim.remove(el);
          anim({
            targets: el,
            opacity: 0,
            scale: 0.4,
            translateY: _this50.offsetY,
            translateX: _this50.offsetX,
            duration: 175,
            easing: 'easeOutQuad',
            complete: function () {
              _this50.$el.removeClass('active');
            }
          });
        });
      }

      /**
       * Toolbar transition Menu open
       */

    }, {
      key: "_animateInToolbar",
      value: function _animateInToolbar() {
        var _this51 = this;

        var scaleFactor = void 0;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var btnRect = this.el.getBoundingClientRect();
        var backdrop = $('<div class="fab-backdrop"></div>');
        var fabColor = this.$anchor.css('background-color');
        this.$anchor.append(backdrop);

        this.offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
        this.offsetY = windowHeight - btnRect.bottom;
        scaleFactor = windowWidth / backdrop[0].clientWidth;
        this.btnBottom = btnRect.bottom;
        this.btnLeft = btnRect.left;
        this.btnWidth = btnRect.width;

        // Set initial state
        this.$el.addClass('active');
        this.$el.css({
          'text-align': 'center',
          width: '100%',
          bottom: 0,
          left: 0,
          transform: 'translateX(' + this.offsetX + 'px)',
          transition: 'none'
        });
        this.$anchor.css({
          transform: 'translateY(' + -this.offsetY + 'px)',
          transition: 'none'
        });
        backdrop.css({
          'background-color': fabColor
        });

        setTimeout(function () {
          _this51.$el.css({
            transform: '',
            transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
          });
          _this51.$anchor.css({
            overflow: 'visible',
            transform: '',
            transition: 'transform .2s'
          });

          setTimeout(function () {
            _this51.$el.css({
              overflow: 'hidden',
              'background-color': fabColor
            });
            backdrop.css({
              transform: 'scale(' + scaleFactor + ')',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });
            _this51.$menu.children('li').children('a').css({
              opacity: 1
            });

            // Scroll to close.
            _this51._handleDocumentClickBound = _this51._handleDocumentClick.bind(_this51);
            window.addEventListener('scroll', _this51._handleCloseBound, true);
            document.body.addEventListener('click', _this51._handleDocumentClickBound, true);
          }, 100);
        }, 0);
      }

      /**
       * Toolbar transition Menu close
       */

    }, {
      key: "_animateOutToolbar",
      value: function _animateOutToolbar() {
        var _this52 = this;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var backdrop = this.$el.find('.fab-backdrop');
        var fabColor = this.$anchor.css('background-color');

        this.offsetX = this.btnLeft - windowWidth / 2 + this.btnWidth / 2;
        this.offsetY = windowHeight - this.btnBottom;

        // Hide backdrop
        this.$el.removeClass('active');
        this.$el.css({
          'background-color': 'transparent',
          transition: 'none'
        });
        this.$anchor.css({
          transition: 'none'
        });
        backdrop.css({
          transform: 'scale(0)',
          'background-color': fabColor
        });
        this.$menu.children('li').children('a').css({
          opacity: ''
        });

        setTimeout(function () {
          backdrop.remove();

          // Set initial state.
          _this52.$el.css({
            'text-align': '',
            width: '',
            bottom: '',
            left: '',
            overflow: '',
            'background-color': '',
            transform: 'translate3d(' + -_this52.offsetX + 'px,0,0)'
          });
          _this52.$anchor.css({
            overflow: '',
            transform: 'translate3d(0,' + _this52.offsetY + 'px,0)'
          });

          setTimeout(function () {
            _this52.$el.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s'
            });
            _this52.$anchor.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });
          }, 20);
        }, 200);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FloatingActionButton;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return FloatingActionButton;
  }(Component);

  M.FloatingActionButton = FloatingActionButton;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FloatingActionButton, 'floatingActionButton', 'M_FloatingActionButton');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    // Close when date is selected
    autoClose: false,

    // the default output format for the input field value
    format: 'mmm dd, yyyy',

    // Used to create date object from current input string
    parse: null,

    // The initial date to view when first opened
    defaultDate: null,

    // Make the `defaultDate` the initial selected value
    setDefaultDate: false,

    disableWeekends: false,

    disableDayFn: null,

    // First day of week (0: Sunday, 1: Monday etc)
    firstDay: 0,

    // The earliest date that can be selected
    minDate: null,
    // Thelatest date that can be selected
    maxDate: null,

    // Number of years either side, or array of upper/lower range
    yearRange: 10,

    // used internally (don't config outside)
    minYear: 0,
    maxYear: 9999,
    minMonth: undefined,
    maxMonth: undefined,

    startRange: null,
    endRange: null,

    isRTL: false,

    // Render the month after year in the calendar title
    showMonthAfterYear: false,

    // Render days of the calendar grid that fall in the next or previous month
    showDaysInNextAndPreviousMonths: false,

    // Specify a DOM element to render the calendar in
    container: null,

    // Show clear button
    showClearBtn: false,

    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },

    // events array
    events: [],

    // callback function
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  };

  /**
   * @class
   *
   */

  var Datepicker = function (_Component15) {
    _inherits(Datepicker, _Component15);

    /**
     * Construct Datepicker instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Datepicker(el, options) {
      _classCallCheck(this, Datepicker);

      var _this53 = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, Datepicker, el, options));

      _this53.el.M_Datepicker = _this53;

      _this53.options = $.extend({}, Datepicker.defaults, options);

      // make sure i18n defaults are not lost when only few i18n option properties are passed
      if (!!options && options.hasOwnProperty('i18n') && typeof options.i18n === 'object') {
        _this53.options.i18n = $.extend({}, Datepicker.defaults.i18n, options.i18n);
      }

      // Remove time component from minDate and maxDate options
      if (_this53.options.minDate) _this53.options.minDate.setHours(0, 0, 0, 0);
      if (_this53.options.maxDate) _this53.options.maxDate.setHours(0, 0, 0, 0);

      _this53.id = M.guid();

      _this53._setupVariables();
      _this53._insertHTMLIntoDOM();
      _this53._setupModal();

      _this53._setupEventHandlers();

      if (!_this53.options.defaultDate) {
        _this53.options.defaultDate = new Date(Date.parse(_this53.el.value));
      }

      var defDate = _this53.options.defaultDate;
      if (Datepicker._isDate(defDate)) {
        if (_this53.options.setDefaultDate) {
          _this53.setDate(defDate, true);
          _this53.setInputValue();
        } else {
          _this53.gotoDate(defDate);
        }
      } else {
        _this53.gotoDate(new Date());
      }

      /**
       * Describes open/close state of datepicker
       * @type {Boolean}
       */
      _this53.isOpen = false;
      return _this53;
    }

    _createClass(Datepicker, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.modal.destroy();
        $(this.modalEl).remove();
        this.destroySelects();
        this.el.M_Datepicker = undefined;
      }
    }, {
      key: "destroySelects",
      value: function destroySelects() {
        var oldYearSelect = this.calendarEl.querySelector('.orig-select-year');
        if (oldYearSelect) {
          M.FormSelect.getInstance(oldYearSelect).destroy();
        }
        var oldMonthSelect = this.calendarEl.querySelector('.orig-select-month');
        if (oldMonthSelect) {
          M.FormSelect.getInstance(oldMonthSelect).destroy();
        }
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        if (this.options.showClearBtn) {
          $(this.clearBtn).css({ visibility: '' });
          this.clearBtn.innerHTML = this.options.i18n.clear;
        }

        this.doneBtn.innerHTML = this.options.i18n.done;
        this.cancelBtn.innerHTML = this.options.i18n.cancel;

        if (this.options.container) {
          this.$modalEl.appendTo(this.options.container);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this54 = this;

        this.modalEl.id = 'modal-' + this.id;
        this.modal = M.Modal.init(this.modalEl, {
          onCloseEnd: function () {
            _this54.isOpen = false;
          }
        });
      }
    }, {
      key: "toString",
      value: function toString(format) {
        var _this55 = this;

        format = format || this.options.format;
        if (!Datepicker._isDate(this.date)) {
          return '';
        }

        var formatArray = format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var formattedDate = formatArray.map(function (label) {
          if (_this55.formats[label]) {
            return _this55.formats[label]();
          }

          return label;
        }).join('');
        return formattedDate;
      }
    }, {
      key: "setDate",
      value: function setDate(date, preventOnSelect) {
        if (!date) {
          this.date = null;
          this._renderDateDisplay();
          return this.draw();
        }
        if (typeof date === 'string') {
          date = new Date(Date.parse(date));
        }
        if (!Datepicker._isDate(date)) {
          return;
        }

        var min = this.options.minDate,
            max = this.options.maxDate;

        if (Datepicker._isDate(min) && date < min) {
          date = min;
        } else if (Datepicker._isDate(max) && date > max) {
          date = max;
        }

        this.date = new Date(date.getTime());

        this._renderDateDisplay();

        Datepicker._setToStartOfDay(this.date);
        this.gotoDate(this.date);

        if (!preventOnSelect && typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.date);
        }
      }
    }, {
      key: "setInputValue",
      value: function setInputValue() {
        this.el.value = this.toString();
        this.$el.trigger('change', { firedBy: this });
      }
    }, {
      key: "_renderDateDisplay",
      value: function _renderDateDisplay() {
        var displayDate = Datepicker._isDate(this.date) ? this.date : new Date();
        var i18n = this.options.i18n;
        var day = i18n.weekdaysShort[displayDate.getDay()];
        var month = i18n.monthsShort[displayDate.getMonth()];
        var date = displayDate.getDate();
        this.yearTextEl.innerHTML = displayDate.getFullYear();
        this.dateTextEl.innerHTML = day + ", " + month + " " + date;
      }

      /**
       * change view to a specific date
       */

    }, {
      key: "gotoDate",
      value: function gotoDate(date) {
        var newCalendar = true;

        if (!Datepicker._isDate(date)) {
          return;
        }

        if (this.calendars) {
          var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
              lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
              visibleDate = date.getTime();
          // get the end of the month
          lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
          lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
          newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate;
        }

        if (newCalendar) {
          this.calendars = [{
            month: date.getMonth(),
            year: date.getFullYear()
          }];
        }

        this.adjustCalendars();
      }
    }, {
      key: "adjustCalendars",
      value: function adjustCalendars() {
        this.calendars[0] = this.adjustCalendar(this.calendars[0]);
        this.draw();
      }
    }, {
      key: "adjustCalendar",
      value: function adjustCalendar(calendar) {
        if (calendar.month < 0) {
          calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
          calendar.month += 12;
        }
        if (calendar.month > 11) {
          calendar.year += Math.floor(Math.abs(calendar.month) / 12);
          calendar.month -= 12;
        }
        return calendar;
      }
    }, {
      key: "nextMonth",
      value: function nextMonth() {
        this.calendars[0].month++;
        this.adjustCalendars();
      }
    }, {
      key: "prevMonth",
      value: function prevMonth() {
        this.calendars[0].month--;
        this.adjustCalendars();
      }
    }, {
      key: "render",
      value: function render(year, month, randId) {
        var opts = this.options,
            now = new Date(),
            days = Datepicker._getDaysInMonth(year, month),
            before = new Date(year, month, 1).getDay(),
            data = [],
            row = [];
        Datepicker._setToStartOfDay(now);
        if (opts.firstDay > 0) {
          before -= opts.firstDay;
          if (before < 0) {
            before += 7;
          }
        }
        var previousMonth = month === 0 ? 11 : month - 1,
            nextMonth = month === 11 ? 0 : month + 1,
            yearOfPreviousMonth = month === 0 ? year - 1 : year,
            yearOfNextMonth = month === 11 ? year + 1 : year,
            daysInPreviousMonth = Datepicker._getDaysInMonth(yearOfPreviousMonth, previousMonth);
        var cells = days + before,
            after = cells;
        while (after > 7) {
          after -= 7;
        }
        cells += 7 - after;
        var isWeekSelected = false;
        for (var i = 0, r = 0; i < cells; i++) {
          var day = new Date(year, month, 1 + (i - before)),
              isSelected = Datepicker._isDate(this.date) ? Datepicker._compareDates(day, this.date) : false,
              isToday = Datepicker._compareDates(day, now),
              hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
              isEmpty = i < before || i >= days + before,
              dayNumber = 1 + (i - before),
              monthNumber = month,
              yearNumber = year,
              isStartRange = opts.startRange && Datepicker._compareDates(opts.startRange, day),
              isEndRange = opts.endRange && Datepicker._compareDates(opts.endRange, day),
              isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
              isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && Datepicker._isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day);

          if (isEmpty) {
            if (i < before) {
              dayNumber = daysInPreviousMonth + dayNumber;
              monthNumber = previousMonth;
              yearNumber = yearOfPreviousMonth;
            } else {
              dayNumber = dayNumber - days;
              monthNumber = nextMonth;
              yearNumber = yearOfNextMonth;
            }
          }

          var dayConfig = {
            day: dayNumber,
            month: monthNumber,
            year: yearNumber,
            hasEvent: hasEvent,
            isSelected: isSelected,
            isToday: isToday,
            isDisabled: isDisabled,
            isEmpty: isEmpty,
            isStartRange: isStartRange,
            isEndRange: isEndRange,
            isInRange: isInRange,
            showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
          };

          row.push(this.renderDay(dayConfig));

          if (++r === 7) {
            data.push(this.renderRow(row, opts.isRTL, isWeekSelected));
            row = [];
            r = 0;
            isWeekSelected = false;
          }
        }
        return this.renderTable(opts, data, randId);
      }
    }, {
      key: "renderDay",
      value: function renderDay(opts) {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
          if (opts.showDaysInNextAndPreviousMonths) {
            arr.push('is-outside-current-month');
            arr.push('is-selection-disabled');
          } else {
            return '<td class="is-empty"></td>';
          }
        }
        if (opts.isDisabled) {
          arr.push('is-disabled');
        }

        if (opts.isToday) {
          arr.push('is-today');
        }
        if (opts.isSelected) {
          arr.push('is-selected');
          ariaSelected = 'true';
        }
        if (opts.hasEvent) {
          arr.push('has-event');
        }
        if (opts.isInRange) {
          arr.push('is-inrange');
        }
        if (opts.isStartRange) {
          arr.push('is-startrange');
        }
        if (opts.isEndRange) {
          arr.push('is-endrange');
        }
        return "<td data-day=\"" + opts.day + "\" class=\"" + arr.join(' ') + "\" aria-selected=\"" + ariaSelected + "\">" + ("<button class=\"datepicker-day-button\" type=\"button\" data-year=\"" + opts.year + "\" data-month=\"" + opts.month + "\" data-day=\"" + opts.day + "\">" + opts.day + "</button>") + '</td>';
      }
    }, {
      key: "renderRow",
      value: function renderRow(days, isRTL, isRowSelected) {
        return '<tr class="datepicker-row' + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
      }
    }, {
      key: "renderTable",
      value: function renderTable(opts, data, randId) {
        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + randId + '">' + this.renderHead(opts) + this.renderBody(data) + '</table></div>';
      }
    }, {
      key: "renderHead",
      value: function renderHead(opts) {
        var i = void 0,
            arr = [];
        for (i = 0; i < 7; i++) {
          arr.push("<th scope=\"col\"><abbr title=\"" + this.renderDayName(opts, i) + "\">" + this.renderDayName(opts, i, true) + "</abbr></th>");
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
      }
    }, {
      key: "renderBody",
      value: function renderBody(rows) {
        return '<tbody>' + rows.join('') + '</tbody>';
      }
    }, {
      key: "renderTitle",
      value: function renderTitle(instance, c, year, month, refYear, randId) {
        var i = void 0,
            j = void 0,
            arr = void 0,
            opts = this.options,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="datepicker-controls" role="heading" aria-live="assertive">',
            monthHtml = void 0,
            yearHtml = void 0,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
          arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' + (i === month ? ' selected="selected"' : '') + (isMinYear && i < opts.minMonth || isMaxYear && i > opts.maxMonth ? 'disabled="disabled"' : '') + '>' + opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<select class="datepicker-select orig-select-month" tabindex="-1">' + arr.join('') + '</select>';

        if ($.isArray(opts.yearRange)) {
          i = opts.yearRange[0];
          j = opts.yearRange[1] + 1;
        } else {
          i = year - opts.yearRange;
          j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
          if (i >= opts.minYear) {
            arr.push("<option value=\"" + i + "\" " + (i === year ? 'selected="selected"' : '') + ">" + i + "</option>");
          }
        }

        yearHtml = "<select class=\"datepicker-select orig-select-year\" tabindex=\"-1\">" + arr.join('') + "</select>";

        var leftArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-prev" + (prev ? '' : ' is-disabled') + "\" type=\"button\">" + leftArrow + "</button>";

        html += '<div class="selects-container">';
        if (opts.showMonthAfterYear) {
          html += yearHtml + monthHtml;
        } else {
          html += monthHtml + yearHtml;
        }
        html += '</div>';

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
          prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
          next = false;
        }

        var rightArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-next" + (next ? '' : ' is-disabled') + "\" type=\"button\">" + rightArrow + "</button>";

        return html += '</div>';
      }

      /**
       * refresh the HTML
       */

    }, {
      key: "draw",
      value: function draw(force) {
        if (!this.isOpen && !force) {
          return;
        }
        var opts = this.options,
            minYear = opts.minYear,
            maxYear = opts.maxYear,
            minMonth = opts.minMonth,
            maxMonth = opts.maxMonth,
            html = '',
            randId = void 0;

        if (this._y <= minYear) {
          this._y = minYear;
          if (!isNaN(minMonth) && this._m < minMonth) {
            this._m = minMonth;
          }
        }
        if (this._y >= maxYear) {
          this._y = maxYear;
          if (!isNaN(maxMonth) && this._m > maxMonth) {
            this._m = maxMonth;
          }
        }

        randId = 'datepicker-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

        for (var c = 0; c < 1; c++) {
          this._renderDateDisplay();
          html += this.renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId);
        }

        this.destroySelects();

        this.calendarEl.innerHTML = html;

        // Init Materialize Select
        var yearSelect = this.calendarEl.querySelector('.orig-select-year');
        var monthSelect = this.calendarEl.querySelector('.orig-select-month');
        M.FormSelect.init(yearSelect, {
          classes: 'select-year',
          dropdownOptions: { container: document.body, constrainWidth: false }
        });
        M.FormSelect.init(monthSelect, {
          classes: 'select-month',
          dropdownOptions: { container: document.body, constrainWidth: false }
        });

        // Add change handlers for select
        yearSelect.addEventListener('change', this._handleYearChange.bind(this));
        monthSelect.addEventListener('change', this._handleMonthChange.bind(this));

        if (typeof this.options.onDraw === 'function') {
          this.options.onDraw(this);
        }
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleInputChangeBound = this._handleInputChange.bind(this);
        this._handleCalendarClickBound = this._handleCalendarClick.bind(this);
        this._finishSelectionBound = this._finishSelection.bind(this);
        this._handleMonthChange = this._handleMonthChange.bind(this);
        this._closeBound = this.close.bind(this);

        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('change', this._handleInputChangeBound);
        this.calendarEl.addEventListener('click', this._handleCalendarClickBound);
        this.doneBtn.addEventListener('click', this._finishSelectionBound);
        this.cancelBtn.addEventListener('click', this._closeBound);

        if (this.options.showClearBtn) {
          this._handleClearClickBound = this._handleClearClick.bind(this);
          this.clearBtn.addEventListener('click', this._handleClearClickBound);
        }
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        var _this56 = this;

        this.$modalEl = $(Datepicker._template);
        this.modalEl = this.$modalEl[0];

        this.calendarEl = this.modalEl.querySelector('.datepicker-calendar');

        this.yearTextEl = this.modalEl.querySelector('.year-text');
        this.dateTextEl = this.modalEl.querySelector('.date-text');
        if (this.options.showClearBtn) {
          this.clearBtn = this.modalEl.querySelector('.datepicker-clear');
        }
        this.doneBtn = this.modalEl.querySelector('.datepicker-done');
        this.cancelBtn = this.modalEl.querySelector('.datepicker-cancel');

        this.formats = {
          d: function () {
            return _this56.date.getDate();
          },
          dd: function () {
            var d = _this56.date.getDate();
            return (d < 10 ? '0' : '') + d;
          },
          ddd: function () {
            return _this56.options.i18n.weekdaysShort[_this56.date.getDay()];
          },
          dddd: function () {
            return _this56.options.i18n.weekdays[_this56.date.getDay()];
          },
          m: function () {
            return _this56.date.getMonth() + 1;
          },
          mm: function () {
            var m = _this56.date.getMonth() + 1;
            return (m < 10 ? '0' : '') + m;
          },
          mmm: function () {
            return _this56.options.i18n.monthsShort[_this56.date.getMonth()];
          },
          mmmm: function () {
            return _this56.options.i18n.months[_this56.date.getMonth()];
          },
          yy: function () {
            return ('' + _this56.date.getFullYear()).slice(2);
          },
          yyyy: function () {
            return _this56.date.getFullYear();
          }
        };
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('change', this._handleInputChangeBound);
        this.calendarEl.removeEventListener('click', this._handleCalendarClickBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleCalendarClick",
      value: function _handleCalendarClick(e) {
        if (!this.isOpen) {
          return;
        }

        var $target = $(e.target);
        if (!$target.hasClass('is-disabled')) {
          if ($target.hasClass('datepicker-day-button') && !$target.hasClass('is-empty') && !$target.parent().hasClass('is-disabled')) {
            this.setDate(new Date(e.target.getAttribute('data-year'), e.target.getAttribute('data-month'), e.target.getAttribute('data-day')));
            if (this.options.autoClose) {
              this._finishSelection();
            }
          } else if ($target.closest('.month-prev').length) {
            this.prevMonth();
          } else if ($target.closest('.month-next').length) {
            this.nextMonth();
          }
        }
      }
    }, {
      key: "_handleClearClick",
      value: function _handleClearClick() {
        this.date = null;
        this.setInputValue();
        this.close();
      }
    }, {
      key: "_handleMonthChange",
      value: function _handleMonthChange(e) {
        this.gotoMonth(e.target.value);
      }
    }, {
      key: "_handleYearChange",
      value: function _handleYearChange(e) {
        this.gotoYear(e.target.value);
      }

      /**
       * change view to a specific month (zero-index, e.g. 0: January)
       */

    }, {
      key: "gotoMonth",
      value: function gotoMonth(month) {
        if (!isNaN(month)) {
          this.calendars[0].month = parseInt(month, 10);
          this.adjustCalendars();
        }
      }

      /**
       * change view to a specific full year (e.g. "2012")
       */

    }, {
      key: "gotoYear",
      value: function gotoYear(year) {
        if (!isNaN(year)) {
          this.calendars[0].year = parseInt(year, 10);
          this.adjustCalendars();
        }
      }
    }, {
      key: "_handleInputChange",
      value: function _handleInputChange(e) {
        var date = void 0;

        // Prevent change event from being fired when triggered by the plugin
        if (e.firedBy === this) {
          return;
        }
        if (this.options.parse) {
          date = this.options.parse(this.el.value, this.options.format);
        } else {
          date = new Date(Date.parse(this.el.value));
        }

        if (Datepicker._isDate(date)) {
          this.setDate(date);
        }
      }
    }, {
      key: "renderDayName",
      value: function renderDayName(opts, day, abbr) {
        day += opts.firstDay;
        while (day >= 7) {
          day -= 7;
        }
        return abbr ? opts.i18n.weekdaysAbbrev[day] : opts.i18n.weekdays[day];
      }

      /**
       * Set input value to the selected date and close Datepicker
       */

    }, {
      key: "_finishSelection",
      value: function _finishSelection() {
        this.setInputValue();
        this.close();
      }

      /**
       * Open Datepicker
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this);
        }
        this.draw();
        this.modal.open();
        return this;
      }

      /**
       * Close Datepicker
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this);
        }
        this.modal.close();
        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Datepicker.__proto__ || Object.getPrototypeOf(Datepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_isDate",
      value: function _isDate(obj) {
        return (/Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
        );
      }
    }, {
      key: "_isWeekend",
      value: function _isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }
    }, {
      key: "_getDaysInMonth",
      value: function _getDaysInMonth(year, month) {
        return [31, Datepicker._isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
      }
    }, {
      key: "_isLeapYear",
      value: function _isLeapYear(year) {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    }, {
      key: "_compareDates",
      value: function _compareDates(a, b) {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Datepicker;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Datepicker;
  }(Component);

  Datepicker._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', '</div>', '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', '</div>', '</div>', '</div>', '</div>', '</div>'].join('');

  M.Datepicker = Datepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Datepicker, 'datepicker', 'M_Datepicker');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    dialRadius: 135,
    outerRadius: 105,
    innerRadius: 70,
    tickRadius: 20,
    duration: 350,
    container: null,
    defaultTime: 'now', // default time, 'now' or '13:14' e.g.
    fromNow: 0, // Millisecond offset from the defaultTime
    showClearBtn: false,

    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },

    autoClose: false, // auto close when minute is selected
    twelveHour: true, // change to 12 hour AM/PM clock from 24 hour
    vibrate: true, // vibrate the device when dragging clock hand

    // Callbacks
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  };

  /**
   * @class
   *
   */

  var Timepicker = function (_Component16) {
    _inherits(Timepicker, _Component16);

    function Timepicker(el, options) {
      _classCallCheck(this, Timepicker);

      var _this57 = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this, Timepicker, el, options));

      _this57.el.M_Timepicker = _this57;

      _this57.options = $.extend({}, Timepicker.defaults, options);

      _this57.id = M.guid();
      _this57._insertHTMLIntoDOM();
      _this57._setupModal();
      _this57._setupVariables();
      _this57._setupEventHandlers();

      _this57._clockSetup();
      _this57._pickerSetup();
      return _this57;
    }

    _createClass(Timepicker, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.modal.destroy();
        $(this.modalEl).remove();
        this.el.M_Timepicker = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleClockClickStartBound = this._handleClockClickStart.bind(this);
        this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this);
        this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this);

        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.plate.addEventListener('mousedown', this._handleClockClickStartBound);
        this.plate.addEventListener('touchstart', this._handleClockClickStartBound);

        $(this.spanHours).on('click', this.showView.bind(this, 'hours'));
        $(this.spanMinutes).on('click', this.showView.bind(this, 'minutes'));
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleClockClickStart",
      value: function _handleClockClickStart(e) {
        e.preventDefault();
        var clockPlateBR = this.plate.getBoundingClientRect();
        var offset = { x: clockPlateBR.left, y: clockPlateBR.top };

        this.x0 = offset.x + this.options.dialRadius;
        this.y0 = offset.y + this.options.dialRadius;
        this.moved = false;
        var clickPos = Timepicker._Pos(e);
        this.dx = clickPos.x - this.x0;
        this.dy = clickPos.y - this.y0;

        // Set clock hands
        this.setHand(this.dx, this.dy, false);

        // Mousemove on document
        document.addEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.addEventListener('touchmove', this._handleDocumentClickMoveBound);

        // Mouseup on document
        document.addEventListener('mouseup', this._handleDocumentClickEndBound);
        document.addEventListener('touchend', this._handleDocumentClickEndBound);
      }
    }, {
      key: "_handleDocumentClickMove",
      value: function _handleDocumentClickMove(e) {
        e.preventDefault();
        var clickPos = Timepicker._Pos(e);
        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;
        this.moved = true;
        this.setHand(x, y, false, true);
      }
    }, {
      key: "_handleDocumentClickEnd",
      value: function _handleDocumentClickEnd(e) {
        var _this58 = this;

        e.preventDefault();
        document.removeEventListener('mouseup', this._handleDocumentClickEndBound);
        document.removeEventListener('touchend', this._handleDocumentClickEndBound);
        var clickPos = Timepicker._Pos(e);
        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;
        if (this.moved && x === this.dx && y === this.dy) {
          this.setHand(x, y);
        }

        if (this.currentView === 'hours') {
          this.showView('minutes', this.options.duration / 2);
        } else if (this.options.autoClose) {
          $(this.minutesView).addClass('timepicker-dial-out');
          setTimeout(function () {
            _this58.done();
          }, this.options.duration / 2);
        }

        if (typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.hours, this.minutes);
        }

        // Unbind mousemove event
        document.removeEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.removeEventListener('touchmove', this._handleDocumentClickMoveBound);
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        this.$modalEl = $(Timepicker._template);
        this.modalEl = this.$modalEl[0];
        this.modalEl.id = 'modal-' + this.id;

        // Append popover to input by default
        var containerEl = document.querySelector(this.options.container);
        if (this.options.container && !!containerEl) {
          this.$modalEl.appendTo(containerEl);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this59 = this;

        this.modal = M.Modal.init(this.modalEl, {
          onOpenStart: this.options.onOpenStart,
          onOpenEnd: this.options.onOpenEnd,
          onCloseStart: this.options.onCloseStart,
          onCloseEnd: function () {
            if (typeof _this59.options.onCloseEnd === 'function') {
              _this59.options.onCloseEnd.call(_this59);
            }
            _this59.isOpen = false;
          }
        });
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        this.currentView = 'hours';
        this.vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;

        this._canvas = this.modalEl.querySelector('.timepicker-canvas');
        this.plate = this.modalEl.querySelector('.timepicker-plate');

        this.hoursView = this.modalEl.querySelector('.timepicker-hours');
        this.minutesView = this.modalEl.querySelector('.timepicker-minutes');
        this.spanHours = this.modalEl.querySelector('.timepicker-span-hours');
        this.spanMinutes = this.modalEl.querySelector('.timepicker-span-minutes');
        this.spanAmPm = this.modalEl.querySelector('.timepicker-span-am-pm');
        this.footer = this.modalEl.querySelector('.timepicker-footer');
        this.amOrPm = 'PM';
      }
    }, {
      key: "_pickerSetup",
      value: function _pickerSetup() {
        var $clearBtn = $("<button class=\"btn-flat timepicker-clear waves-effect\" style=\"visibility: hidden;\" type=\"button\" tabindex=\"" + (this.options.twelveHour ? '3' : '1') + "\">" + this.options.i18n.clear + "</button>").appendTo(this.footer).on('click', this.clear.bind(this));
        if (this.options.showClearBtn) {
          $clearBtn.css({ visibility: '' });
        }

        var confirmationBtnsContainer = $('<div class="confirmation-btns"></div>');
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.cancel + '</button>').appendTo(confirmationBtnsContainer).on('click', this.close.bind(this));
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.done + '</button>').appendTo(confirmationBtnsContainer).on('click', this.done.bind(this));
        confirmationBtnsContainer.appendTo(this.footer);
      }
    }, {
      key: "_clockSetup",
      value: function _clockSetup() {
        if (this.options.twelveHour) {
          this.$amBtn = $('<div class="am-btn">AM</div>');
          this.$pmBtn = $('<div class="pm-btn">PM</div>');
          this.$amBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
          this.$pmBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
        }

        this._buildHoursView();
        this._buildMinutesView();
        this._buildSVGClock();
      }
    }, {
      key: "_buildSVGClock",
      value: function _buildSVGClock() {
        // Draw clock hands and others
        var dialRadius = this.options.dialRadius;
        var tickRadius = this.options.tickRadius;
        var diameter = dialRadius * 2;

        var svg = Timepicker._createSVGEl('svg');
        svg.setAttribute('class', 'timepicker-svg');
        svg.setAttribute('width', diameter);
        svg.setAttribute('height', diameter);
        var g = Timepicker._createSVGEl('g');
        g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');
        var bearing = Timepicker._createSVGEl('circle');
        bearing.setAttribute('class', 'timepicker-canvas-bearing');
        bearing.setAttribute('cx', 0);
        bearing.setAttribute('cy', 0);
        bearing.setAttribute('r', 4);
        var hand = Timepicker._createSVGEl('line');
        hand.setAttribute('x1', 0);
        hand.setAttribute('y1', 0);
        var bg = Timepicker._createSVGEl('circle');
        bg.setAttribute('class', 'timepicker-canvas-bg');
        bg.setAttribute('r', tickRadius);
        g.appendChild(hand);
        g.appendChild(bg);
        g.appendChild(bearing);
        svg.appendChild(g);
        this._canvas.appendChild(svg);

        this.hand = hand;
        this.bg = bg;
        this.bearing = bearing;
        this.g = g;
      }
    }, {
      key: "_buildHoursView",
      value: function _buildHoursView() {
        var $tick = $('<div class="timepicker-tick"></div>');
        // Hours view
        if (this.options.twelveHour) {
          for (var i = 1; i < 13; i += 1) {
            var tick = $tick.clone();
            var radian = i / 6 * Math.PI;
            var radius = this.options.outerRadius;
            tick.css({
              left: this.options.dialRadius + Math.sin(radian) * radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(radian) * radius - this.options.tickRadius + 'px'
            });
            tick.html(i === 0 ? '00' : i);
            this.hoursView.appendChild(tick[0]);
            // tick.on(mousedownEvent, mousedown);
          }
        } else {
          for (var _i2 = 0; _i2 < 24; _i2 += 1) {
            var _tick = $tick.clone();
            var _radian = _i2 / 6 * Math.PI;
            var inner = _i2 > 0 && _i2 < 13;
            var _radius = inner ? this.options.innerRadius : this.options.outerRadius;
            _tick.css({
              left: this.options.dialRadius + Math.sin(_radian) * _radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(_radian) * _radius - this.options.tickRadius + 'px'
            });
            _tick.html(_i2 === 0 ? '00' : _i2);
            this.hoursView.appendChild(_tick[0]);
            // tick.on(mousedownEvent, mousedown);
          }
        }
      }
    }, {
      key: "_buildMinutesView",
      value: function _buildMinutesView() {
        var $tick = $('<div class="timepicker-tick"></div>');
        // Minutes view
        for (var i = 0; i < 60; i += 5) {
          var tick = $tick.clone();
          var radian = i / 30 * Math.PI;
          tick.css({
            left: this.options.dialRadius + Math.sin(radian) * this.options.outerRadius - this.options.tickRadius + 'px',
            top: this.options.dialRadius - Math.cos(radian) * this.options.outerRadius - this.options.tickRadius + 'px'
          });
          tick.html(Timepicker._addLeadingZero(i));
          this.minutesView.appendChild(tick[0]);
        }
      }
    }, {
      key: "_handleAmPmClick",
      value: function _handleAmPmClick(e) {
        var $btnClicked = $(e.target);
        this.amOrPm = $btnClicked.hasClass('am-btn') ? 'AM' : 'PM';
        this._updateAmPmView();
      }
    }, {
      key: "_updateAmPmView",
      value: function _updateAmPmView() {
        if (this.options.twelveHour) {
          this.$amBtn.toggleClass('text-primary', this.amOrPm === 'AM');
          this.$pmBtn.toggleClass('text-primary', this.amOrPm === 'PM');
        }
      }
    }, {
      key: "_updateTimeFromInput",
      value: function _updateTimeFromInput() {
        // Get the time
        var value = ((this.el.value || this.options.defaultTime || '') + '').split(':');
        if (this.options.twelveHour && !(typeof value[1] === 'undefined')) {
          if (value[1].toUpperCase().indexOf('AM') > 0) {
            this.amOrPm = 'AM';
          } else {
            this.amOrPm = 'PM';
          }
          value[1] = value[1].replace('AM', '').replace('PM', '');
        }
        if (value[0] === 'now') {
          var now = new Date(+new Date() + this.options.fromNow);
          value = [now.getHours(), now.getMinutes()];
          if (this.options.twelveHour) {
            this.amOrPm = value[0] >= 12 && value[0] < 24 ? 'PM' : 'AM';
          }
        }
        this.hours = +value[0] || 0;
        this.minutes = +value[1] || 0;
        this.spanHours.innerHTML = this.hours;
        this.spanMinutes.innerHTML = Timepicker._addLeadingZero(this.minutes);

        this._updateAmPmView();
      }
    }, {
      key: "showView",
      value: function showView(view, delay) {
        if (view === 'minutes' && $(this.hoursView).css('visibility') === 'visible') {
          // raiseCallback(this.options.beforeHourSelect);
        }
        var isHours = view === 'hours',
            nextView = isHours ? this.hoursView : this.minutesView,
            hideView = isHours ? this.minutesView : this.hoursView;
        this.currentView = view;

        $(this.spanHours).toggleClass('text-primary', isHours);
        $(this.spanMinutes).toggleClass('text-primary', !isHours);

        // Transition view
        hideView.classList.add('timepicker-dial-out');
        $(nextView).css('visibility', 'visible').removeClass('timepicker-dial-out');

        // Reset clock hand
        this.resetClock(delay);

        // After transitions ended
        clearTimeout(this.toggleViewTimer);
        this.toggleViewTimer = setTimeout(function () {
          $(hideView).css('visibility', 'hidden');
        }, this.options.duration);
      }
    }, {
      key: "resetClock",
      value: function resetClock(delay) {
        var view = this.currentView,
            value = this[view],
            isHours = view === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            radian = value * unit,
            radius = isHours && value > 0 && value < 13 ? this.options.innerRadius : this.options.outerRadius,
            x = Math.sin(radian) * radius,
            y = -Math.cos(radian) * radius,
            self = this;

        if (delay) {
          $(this.canvas).addClass('timepicker-canvas-out');
          setTimeout(function () {
            $(self.canvas).removeClass('timepicker-canvas-out');
            self.setHand(x, y);
          }, delay);
        } else {
          this.setHand(x, y);
        }
      }
    }, {
      key: "setHand",
      value: function setHand(x, y, roundBy5) {
        var _this60 = this;

        var radian = Math.atan2(x, -y),
            isHours = this.currentView === 'hours',
            unit = Math.PI / (isHours || roundBy5 ? 6 : 30),
            z = Math.sqrt(x * x + y * y),
            inner = isHours && z < (this.options.outerRadius + this.options.innerRadius) / 2,
            radius = inner ? this.options.innerRadius : this.options.outerRadius;

        if (this.options.twelveHour) {
          radius = this.options.outerRadius;
        }

        // Radian should in range [0, 2PI]
        if (radian < 0) {
          radian = Math.PI * 2 + radian;
        }

        // Get the round value
        var value = Math.round(radian / unit);

        // Get the round radian
        radian = value * unit;

        // Correct the hours or minutes
        if (this.options.twelveHour) {
          if (isHours) {
            if (value === 0) value = 12;
          } else {
            if (roundBy5) value *= 5;
            if (value === 60) value = 0;
          }
        } else {
          if (isHours) {
            if (value === 12) {
              value = 0;
            }
            value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
          } else {
            if (roundBy5) {
              value *= 5;
            }
            if (value === 60) {
              value = 0;
            }
          }
        }

        // Once hours or minutes changed, vibrate the device
        if (this[this.currentView] !== value) {
          if (this.vibrate && this.options.vibrate) {
            // Do not vibrate too frequently
            if (!this.vibrateTimer) {
              navigator[this.vibrate](10);
              this.vibrateTimer = setTimeout(function () {
                _this60.vibrateTimer = null;
              }, 100);
            }
          }
        }

        this[this.currentView] = value;
        if (isHours) {
          this['spanHours'].innerHTML = value;
        } else {
          this['spanMinutes'].innerHTML = Timepicker._addLeadingZero(value);
        }

        // Set clock hand and others' position
        var cx1 = Math.sin(radian) * (radius - this.options.tickRadius),
            cy1 = -Math.cos(radian) * (radius - this.options.tickRadius),
            cx2 = Math.sin(radian) * radius,
            cy2 = -Math.cos(radian) * radius;
        this.hand.setAttribute('x2', cx1);
        this.hand.setAttribute('y2', cy1);
        this.bg.setAttribute('cx', cx2);
        this.bg.setAttribute('cy', cy2);
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        this._updateTimeFromInput();
        this.showView('hours');

        this.modal.open();
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        this.modal.close();
      }

      /**
       * Finish timepicker selection.
       */

    }, {
      key: "done",
      value: function done(e, clearValue) {
        // Set input value
        var last = this.el.value;
        var value = clearValue ? '' : Timepicker._addLeadingZero(this.hours) + ':' + Timepicker._addLeadingZero(this.minutes);
        this.time = value;
        if (!clearValue && this.options.twelveHour) {
          value = value + " " + this.amOrPm;
        }
        this.el.value = value;

        // Trigger change event
        if (value !== last) {
          this.$el.trigger('change');
        }

        this.close();
        this.el.focus();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.done(null, true);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Timepicker.__proto__ || Object.getPrototypeOf(Timepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_addLeadingZero",
      value: function _addLeadingZero(num) {
        return (num < 10 ? '0' : '') + num;
      }
    }, {
      key: "_createSVGEl",
      value: function _createSVGEl(name) {
        var svgNS = 'http://www.w3.org/2000/svg';
        return document.createElementNS(svgNS, name);
      }

      /**
       * @typedef {Object} Point
       * @property {number} x The X Coordinate
       * @property {number} y The Y Coordinate
       */

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       * @return {Point} x and y location
       */

    }, {
      key: "_Pos",
      value: function _Pos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
        }
        // mouse event
        return { x: e.clientX, y: e.clientY };
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Timepicker;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Timepicker;
  }(Component);

  Timepicker._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ':', '<span class="timepicker-span-minutes"></span>', '</div>', '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', '</div>', '</div>', '</div>', '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', '</div>', '<div class="timepicker-footer"></div>', '</div>', '</div>', '</div>'].join('');

  M.Timepicker = Timepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Timepicker, 'timepicker', 'M_Timepicker');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {};

  /**
   * @class
   *
   */

  var CharacterCounter = function (_Component17) {
    _inherits(CharacterCounter, _Component17);

    /**
     * Construct CharacterCounter instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function CharacterCounter(el, options) {
      _classCallCheck(this, CharacterCounter);

      var _this61 = _possibleConstructorReturn(this, (CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter)).call(this, CharacterCounter, el, options));

      _this61.el.M_CharacterCounter = _this61;

      /**
       * Options for the character counter
       */
      _this61.options = $.extend({}, CharacterCounter.defaults, options);

      _this61.isInvalid = false;
      _this61.isValidLength = false;
      _this61._setupCounter();
      _this61._setupEventHandlers();
      return _this61;
    }

    _createClass(CharacterCounter, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.CharacterCounter = undefined;
        this._removeCounter();
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleUpdateCounterBound = this.updateCounter.bind(this);

        this.el.addEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.addEventListener('input', this._handleUpdateCounterBound, true);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.removeEventListener('input', this._handleUpdateCounterBound, true);
      }

      /**
       * Setup counter element
       */

    }, {
      key: "_setupCounter",
      value: function _setupCounter() {
        this.counterEl = document.createElement('span');
        $(this.counterEl).addClass('character-counter').css({
          float: 'right',
          'font-size': '12px',
          height: 1
        });

        this.$el.parent().append(this.counterEl);
      }

      /**
       * Remove counter element
       */

    }, {
      key: "_removeCounter",
      value: function _removeCounter() {
        $(this.counterEl).remove();
      }

      /**
       * Update counter
       */

    }, {
      key: "updateCounter",
      value: function updateCounter() {
        var maxLength = +this.$el.attr('data-length'),
            actualLength = this.el.value.length;
        this.isValidLength = actualLength <= maxLength;
        var counterString = actualLength;

        if (maxLength) {
          counterString += '/' + maxLength;
          this._validateInput();
        }

        $(this.counterEl).html(counterString);
      }

      /**
       * Add validation classes
       */

    }, {
      key: "_validateInput",
      value: function _validateInput() {
        if (this.isValidLength && this.isInvalid) {
          this.isInvalid = false;
          this.$el.removeClass('invalid');
        } else if (!this.isValidLength && !this.isInvalid) {
          this.isInvalid = true;
          this.$el.removeClass('valid');
          this.$el.addClass('invalid');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_CharacterCounter;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return CharacterCounter;
  }(Component);

  M.CharacterCounter = CharacterCounter;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(CharacterCounter, 'characterCounter', 'M_CharacterCounter');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    duration: 200, // ms
    dist: -100, // zoom scale TODO: make this more intuitive as an option
    shift: 0, // spacing for center image
    padding: 0, // Padding between non center items
    numVisible: 5, // Number of visible items in carousel
    fullWidth: false, // Change to full width styles
    indicators: false, // Toggle indicators
    noWrap: false, // Don't wrap around and cycle through items.
    onCycleTo: null // Callback for when a new slide is cycled to.
  };

  /**
   * @class
   *
   */

  var Carousel = function (_Component18) {
    _inherits(Carousel, _Component18);

    /**
     * Construct Carousel instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Carousel(el, options) {
      _classCallCheck(this, Carousel);

      var _this62 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, Carousel, el, options));

      _this62.el.M_Carousel = _this62;

      /**
       * Options for the carousel
       * @member Carousel#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {Number} shift
       * @prop {Number} padding
       * @prop {Number} numVisible
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */
      _this62.options = $.extend({}, Carousel.defaults, options);

      // Setup
      _this62.hasMultipleSlides = _this62.$el.find('.carousel-item').length > 1;
      _this62.showIndicators = _this62.options.indicators && _this62.hasMultipleSlides;
      _this62.noWrap = _this62.options.noWrap || !_this62.hasMultipleSlides;
      _this62.pressed = false;
      _this62.dragged = false;
      _this62.offset = _this62.target = 0;
      _this62.images = [];
      _this62.itemWidth = _this62.$el.find('.carousel-item').first().innerWidth();
      _this62.itemHeight = _this62.$el.find('.carousel-item').first().innerHeight();
      _this62.dim = _this62.itemWidth * 2 + _this62.options.padding || 1; // Make sure dim is non zero for divisions.
      _this62._autoScrollBound = _this62._autoScroll.bind(_this62);
      _this62._trackBound = _this62._track.bind(_this62);

      // Full Width carousel setup
      if (_this62.options.fullWidth) {
        _this62.options.dist = 0;
        _this62._setCarouselHeight();

        // Offset fixed items when indicators.
        if (_this62.showIndicators) {
          _this62.$el.find('.carousel-fixed-item').addClass('with-indicators');
        }
      }

      // Iterate through slides
      _this62.$indicators = $('<ul class="indicators"></ul>');
      _this62.$el.find('.carousel-item').each(function (el, i) {
        _this62.images.push(el);
        if (_this62.showIndicators) {
          var $indicator = $('<li class="indicator-item"></li>');

          // Add active to first by default.
          if (i === 0) {
            $indicator[0].classList.add('active');
          }

          _this62.$indicators.append($indicator);
        }
      });
      if (_this62.showIndicators) {
        _this62.$el.append(_this62.$indicators);
      }
      _this62.count = _this62.images.length;

      // Cap numVisible at count
      _this62.options.numVisible = Math.min(_this62.count, _this62.options.numVisible);

      // Setup cross browser string
      _this62.xform = 'transform';
      ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
        var e = prefix + 'Transform';
        if (typeof document.body.style[e] !== 'undefined') {
          _this62.xform = e;
          return false;
        }
        return true;
      });

      _this62._setupEventHandlers();
      _this62._scroll(_this62.offset);
      return _this62;
    }

    _createClass(Carousel, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Carousel = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this63 = this;

        this._handleCarouselTapBound = this._handleCarouselTap.bind(this);
        this._handleCarouselDragBound = this._handleCarouselDrag.bind(this);
        this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this);
        this._handleCarouselClickBound = this._handleCarouselClick.bind(this);

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.addEventListener('touchstart', this._handleCarouselTapBound);
          this.el.addEventListener('touchmove', this._handleCarouselDragBound);
          this.el.addEventListener('touchend', this._handleCarouselReleaseBound);
        }

        this.el.addEventListener('mousedown', this._handleCarouselTapBound);
        this.el.addEventListener('mousemove', this._handleCarouselDragBound);
        this.el.addEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.addEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.addEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.addEventListener('click', _this63._handleIndicatorClickBound);
          });
        }

        // Resize
        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);

        window.addEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this64 = this;

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.removeEventListener('touchstart', this._handleCarouselTapBound);
          this.el.removeEventListener('touchmove', this._handleCarouselDragBound);
          this.el.removeEventListener('touchend', this._handleCarouselReleaseBound);
        }
        this.el.removeEventListener('mousedown', this._handleCarouselTapBound);
        this.el.removeEventListener('mousemove', this._handleCarouselDragBound);
        this.el.removeEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.removeEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.removeEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.removeEventListener('click', _this64._handleIndicatorClickBound);
          });
        }

        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Handle Carousel Tap
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselTap",
      value: function _handleCarouselTap(e) {
        // Fixes firefox draggable image bug
        if (e.type === 'mousedown' && $(e.target).is('img')) {
          e.preventDefault();
        }
        this.pressed = true;
        this.dragged = false;
        this.verticalDragged = false;
        this.reference = this._xpos(e);
        this.referenceY = this._ypos(e);

        this.velocity = this.amplitude = 0;
        this.frame = this.offset;
        this.timestamp = Date.now();
        clearInterval(this.ticker);
        this.ticker = setInterval(this._trackBound, 100);
      }

      /**
       * Handle Carousel Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselDrag",
      value: function _handleCarouselDrag(e) {
        var x = void 0,
            y = void 0,
            delta = void 0,
            deltaY = void 0;
        if (this.pressed) {
          x = this._xpos(e);
          y = this._ypos(e);
          delta = this.reference - x;
          deltaY = Math.abs(this.referenceY - y);
          if (deltaY < 30 && !this.verticalDragged) {
            // If vertical scrolling don't allow dragging.
            if (delta > 2 || delta < -2) {
              this.dragged = true;
              this.reference = x;
              this._scroll(this.offset + delta);
            }
          } else if (this.dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          } else {
            // Vertical scrolling.
            this.verticalDragged = true;
          }
        }

        if (this.dragged) {
          // If dragging don't allow vertical scroll.
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      /**
       * Handle Carousel Release
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselRelease",
      value: function _handleCarouselRelease(e) {
        if (this.pressed) {
          this.pressed = false;
        } else {
          return;
        }

        clearInterval(this.ticker);
        this.target = this.offset;
        if (this.velocity > 10 || this.velocity < -10) {
          this.amplitude = 0.9 * this.velocity;
          this.target = this.offset + this.amplitude;
        }
        this.target = Math.round(this.target / this.dim) * this.dim;

        // No wrap of items.
        if (this.noWrap) {
          if (this.target >= this.dim * (this.count - 1)) {
            this.target = this.dim * (this.count - 1);
          } else if (this.target < 0) {
            this.target = 0;
          }
        }
        this.amplitude = this.target - this.offset;
        this.timestamp = Date.now();
        requestAnimationFrame(this._autoScrollBound);

        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
        }
        return false;
      }

      /**
       * Handle Carousel CLick
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselClick",
      value: function _handleCarouselClick(e) {
        // Disable clicks if carousel was dragged.
        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else if (!this.options.fullWidth) {
          var clickedIndex = $(e.target).closest('.carousel-item').index();
          var diff = this._wrap(this.center) - clickedIndex;

          // Disable clicks if carousel was shifted by click
          if (diff !== 0) {
            e.preventDefault();
            e.stopPropagation();
          }
          this._cycleTo(clickedIndex);
        }
      }

      /**
       * Handle Indicator CLick
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        e.stopPropagation();

        var indicator = $(e.target).closest('.indicator-item');
        if (indicator.length) {
          this._cycleTo(indicator.index());
        }
      }

      /**
       * Handle Throttle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        if (this.options.fullWidth) {
          this.itemWidth = this.$el.find('.carousel-item').first().innerWidth();
          this.imageHeight = this.$el.find('.carousel-item.active').height();
          this.dim = this.itemWidth * 2 + this.options.padding;
          this.offset = this.center * 2 * this.itemWidth;
          this.target = this.offset;
          this._setCarouselHeight(true);
        } else {
          this._scroll();
        }
      }

      /**
       * Set carousel height based on first slide
       * @param {Booleam} imageOnly - true for image slides
       */

    }, {
      key: "_setCarouselHeight",
      value: function _setCarouselHeight(imageOnly) {
        var _this65 = this;

        var firstSlide = this.$el.find('.carousel-item.active').length ? this.$el.find('.carousel-item.active').first() : this.$el.find('.carousel-item').first();
        var firstImage = firstSlide.find('img').first();
        if (firstImage.length) {
          if (firstImage[0].complete) {
            // If image won't trigger the load event
            var imageHeight = firstImage.height();
            if (imageHeight > 0) {
              this.$el.css('height', imageHeight + 'px');
            } else {
              // If image still has no height, use the natural dimensions to calculate
              var naturalWidth = firstImage[0].naturalWidth;
              var naturalHeight = firstImage[0].naturalHeight;
              var adjustedHeight = this.$el.width() / naturalWidth * naturalHeight;
              this.$el.css('height', adjustedHeight + 'px');
            }
          } else {
            // Get height when image is loaded normally
            firstImage.one('load', function (el, i) {
              _this65.$el.css('height', el.offsetHeight + 'px');
            });
          }
        } else if (!imageOnly) {
          var slideHeight = firstSlide.height();
          this.$el.css('height', slideHeight + 'px');
        }
      }

      /**
       * Get x position from event
       * @param {Event} e
       */

    }, {
      key: "_xpos",
      value: function _xpos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        }

        // mouse event
        return e.clientX;
      }

      /**
       * Get y position from event
       * @param {Event} e
       */

    }, {
      key: "_ypos",
      value: function _ypos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientY;
        }

        // mouse event
        return e.clientY;
      }

      /**
       * Wrap index
       * @param {Number} x
       */

    }, {
      key: "_wrap",
      value: function _wrap(x) {
        return x >= this.count ? x % this.count : x < 0 ? this._wrap(this.count + x % this.count) : x;
      }

      /**
       * Tracks scrolling information
       */

    }, {
      key: "_track",
      value: function _track() {
        var now = void 0,
            elapsed = void 0,
            delta = void 0,
            v = void 0;

        now = Date.now();
        elapsed = now - this.timestamp;
        this.timestamp = now;
        delta = this.offset - this.frame;
        this.frame = this.offset;

        v = 1000 * delta / (1 + elapsed);
        this.velocity = 0.8 * v + 0.2 * this.velocity;
      }

      /**
       * Auto scrolls to nearest carousel item.
       */

    }, {
      key: "_autoScroll",
      value: function _autoScroll() {
        var elapsed = void 0,
            delta = void 0;

        if (this.amplitude) {
          elapsed = Date.now() - this.timestamp;
          delta = this.amplitude * Math.exp(-elapsed / this.options.duration);
          if (delta > 2 || delta < -2) {
            this._scroll(this.target - delta);
            requestAnimationFrame(this._autoScrollBound);
          } else {
            this._scroll(this.target);
          }
        }
      }

      /**
       * Scroll to target
       * @param {Number} x
       */

    }, {
      key: "_scroll",
      value: function _scroll(x) {
        var _this66 = this;

        // Track scrolling state
        if (!this.$el.hasClass('scrolling')) {
          this.el.classList.add('scrolling');
        }
        if (this.scrollingTimeout != null) {
          window.clearTimeout(this.scrollingTimeout);
        }
        this.scrollingTimeout = window.setTimeout(function () {
          _this66.$el.removeClass('scrolling');
        }, this.options.duration);

        // Start actual scroll
        var i = void 0,
            half = void 0,
            delta = void 0,
            dir = void 0,
            tween = void 0,
            el = void 0,
            alignment = void 0,
            zTranslation = void 0,
            tweenedOpacity = void 0,
            centerTweenedOpacity = void 0;
        var lastCenter = this.center;
        var numVisibleOffset = 1 / this.options.numVisible;

        this.offset = typeof x === 'number' ? x : this.offset;
        this.center = Math.floor((this.offset + this.dim / 2) / this.dim);
        delta = this.offset - this.center * this.dim;
        dir = delta < 0 ? 1 : -1;
        tween = -dir * delta * 2 / this.dim;
        half = this.count >> 1;

        if (this.options.fullWidth) {
          alignment = 'translateX(0)';
          centerTweenedOpacity = 1;
        } else {
          alignment = 'translateX(' + (this.el.clientWidth - this.itemWidth) / 2 + 'px) ';
          alignment += 'translateY(' + (this.el.clientHeight - this.itemHeight) / 2 + 'px)';
          centerTweenedOpacity = 1 - numVisibleOffset * tween;
        }

        // Set indicator active
        if (this.showIndicators) {
          var diff = this.center % this.count;
          var activeIndicator = this.$indicators.find('.indicator-item.active');
          if (activeIndicator.index() !== diff) {
            activeIndicator.removeClass('active');
            this.$indicators.find('.indicator-item').eq(diff)[0].classList.add('active');
          }
        }

        // center
        // Don't show wrapped items.
        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)];

          // Add active class to center item.
          if (!$(el).hasClass('active')) {
            this.$el.find('.carousel-item').removeClass('active');
            el.classList.add('active');
          }
          var transformString = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween * i + "px) translateZ(" + this.options.dist * tween + "px)";
          this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
        }

        for (i = 1; i <= half; ++i) {
          // right side
          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta < 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 + tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 + tween * dir);
          }
          // Don't show wrapped items.
          if (!this.noWrap || this.center + i < this.count) {
            el = this.images[this._wrap(this.center + i)];
            var _transformString = alignment + " translateX(" + (this.options.shift + (this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
            this._updateItemStyle(el, tweenedOpacity, -i, _transformString);
          }

          // left side
          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta > 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 - tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 - tween * dir);
          }
          // Don't show wrapped items.
          if (!this.noWrap || this.center - i >= 0) {
            el = this.images[this._wrap(this.center - i)];
            var _transformString2 = alignment + " translateX(" + (-this.options.shift + (-this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
            this._updateItemStyle(el, tweenedOpacity, -i, _transformString2);
          }
        }

        // center
        // Don't show wrapped items.
        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)];
          var _transformString3 = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween + "px) translateZ(" + this.options.dist * tween + "px)";
          this._updateItemStyle(el, centerTweenedOpacity, 0, _transformString3);
        }

        // onCycleTo callback
        var $currItem = this.$el.find('.carousel-item').eq(this._wrap(this.center));
        if (lastCenter !== this.center && typeof this.options.onCycleTo === 'function') {
          this.options.onCycleTo.call(this, $currItem[0], this.dragged);
        }

        // One time callback
        if (typeof this.oneTimeCallback === 'function') {
          this.oneTimeCallback.call(this, $currItem[0], this.dragged);
          this.oneTimeCallback = null;
        }
      }

      /**
       * Cycle to target
       * @param {Element} el
       * @param {Number} opacity
       * @param {Number} zIndex
       * @param {String} transform
       */

    }, {
      key: "_updateItemStyle",
      value: function _updateItemStyle(el, opacity, zIndex, transform) {
        el.style[this.xform] = transform;
        el.style.zIndex = zIndex;
        el.style.opacity = opacity;
        el.style.visibility = 'visible';
      }

      /**
       * Cycle to target
       * @param {Number} n
       * @param {Function} callback
       */

    }, {
      key: "_cycleTo",
      value: function _cycleTo(n, callback) {
        var diff = this.center % this.count - n;

        // Account for wraparound.
        if (!this.noWrap) {
          if (diff < 0) {
            if (Math.abs(diff + this.count) < Math.abs(diff)) {
              diff += this.count;
            }
          } else if (diff > 0) {
            if (Math.abs(diff - this.count) < diff) {
              diff -= this.count;
            }
          }
        }

        this.target = this.dim * Math.round(this.offset / this.dim);
        // Next
        if (diff < 0) {
          this.target += this.dim * Math.abs(diff);

          // Prev
        } else if (diff > 0) {
          this.target -= this.dim * diff;
        }

        // Set one time callback
        if (typeof callback === 'function') {
          this.oneTimeCallback = callback;
        }

        // Scroll
        if (this.offset !== this.target) {
          this.amplitude = this.target - this.offset;
          this.timestamp = Date.now();
          requestAnimationFrame(this._autoScrollBound);
        }
      }

      /**
       * Cycle to next item
       * @param {Number} [n]
       */

    }, {
      key: "next",
      value: function next(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center + n;
        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }
        this._cycleTo(index);
      }

      /**
       * Cycle to previous item
       * @param {Number} [n]
       */

    }, {
      key: "prev",
      value: function prev(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center - n;
        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }

        this._cycleTo(index);
      }

      /**
       * Cycle to nth item
       * @param {Number} [n]
       * @param {Function} callback
       */

    }, {
      key: "set",
      value: function set(n, callback) {
        if (n === undefined || isNaN(n)) {
          n = 0;
        }

        if (n > this.count || n < 0) {
          if (this.noWrap) {
            return;
          }

          n = this._wrap(n);
        }

        this._cycleTo(n, callback);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Carousel.__proto__ || Object.getPrototypeOf(Carousel), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Carousel;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Carousel;
  }(Component);

  M.Carousel = Carousel;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Carousel, 'carousel', 'M_Carousel');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    onOpen: undefined,
    onClose: undefined
  };

  /**
   * @class
   *
   */

  var TapTarget = function (_Component19) {
    _inherits(TapTarget, _Component19);

    /**
     * Construct TapTarget instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function TapTarget(el, options) {
      _classCallCheck(this, TapTarget);

      var _this67 = _possibleConstructorReturn(this, (TapTarget.__proto__ || Object.getPrototypeOf(TapTarget)).call(this, TapTarget, el, options));

      _this67.el.M_TapTarget = _this67;

      /**
       * Options for the select
       * @member TapTarget#options
       * @prop {Function} onOpen - Callback function called when feature discovery is opened
       * @prop {Function} onClose - Callback function called when feature discovery is closed
       */
      _this67.options = $.extend({}, TapTarget.defaults, options);

      _this67.isOpen = false;

      // setup
      _this67.$origin = $('#' + _this67.$el.attr('data-target'));
      _this67._setup();

      _this67._calculatePositioning();
      _this67._setupEventHandlers();
      return _this67;
    }

    _createClass(TapTarget, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.TapTarget = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
        this._handleTargetClickBound = this._handleTargetClick.bind(this);
        this._handleOriginClickBound = this._handleOriginClick.bind(this);

        this.el.addEventListener('click', this._handleTargetClickBound);
        this.originEl.addEventListener('click', this._handleOriginClickBound);

        // Resize
        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);

        window.addEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleTargetClickBound);
        this.originEl.removeEventListener('click', this._handleOriginClickBound);
        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Handle Target Click
       * @param {Event} e
       */

    }, {
      key: "_handleTargetClick",
      value: function _handleTargetClick(e) {
        this.open();
      }

      /**
       * Handle Origin Click
       * @param {Event} e
       */

    }, {
      key: "_handleOriginClick",
      value: function _handleOriginClick(e) {
        this.close();
      }

      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        this._calculatePositioning();
      }

      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest('.tap-target-wrapper').length) {
          this.close();
          e.preventDefault();
          e.stopPropagation();
        }
      }

      /**
       * Setup Tap Target
       */

    }, {
      key: "_setup",
      value: function _setup() {
        // Creating tap target
        this.wrapper = this.$el.parent()[0];
        this.waveEl = $(this.wrapper).find('.tap-target-wave')[0];
        this.originEl = $(this.wrapper).find('.tap-target-origin')[0];
        this.contentEl = this.$el.find('.tap-target-content')[0];

        // Creating wrapper
        if (!$(this.wrapper).hasClass('.tap-target-wrapper')) {
          this.wrapper = document.createElement('div');
          this.wrapper.classList.add('tap-target-wrapper');
          this.$el.before($(this.wrapper));
          this.wrapper.append(this.el);
        }

        // Creating content
        if (!this.contentEl) {
          this.contentEl = document.createElement('div');
          this.contentEl.classList.add('tap-target-content');
          this.$el.append(this.contentEl);
        }

        // Creating foreground wave
        if (!this.waveEl) {
          this.waveEl = document.createElement('div');
          this.waveEl.classList.add('tap-target-wave');

          // Creating origin
          if (!this.originEl) {
            this.originEl = this.$origin.clone(true, true);
            this.originEl.addClass('tap-target-origin');
            this.originEl.removeAttr('id');
            this.originEl.removeAttr('style');
            this.originEl = this.originEl[0];
            this.waveEl.append(this.originEl);
          }

          this.wrapper.append(this.waveEl);
        }
      }

      /**
       * Calculate positioning
       */

    }, {
      key: "_calculatePositioning",
      value: function _calculatePositioning() {
        // Element or parent is fixed position?
        var isFixed = this.$origin.css('position') === 'fixed';
        if (!isFixed) {
          var parents = this.$origin.parents();
          for (var i = 0; i < parents.length; i++) {
            isFixed = $(parents[i]).css('position') == 'fixed';
            if (isFixed) {
              break;
            }
          }
        }

        // Calculating origin
        var originWidth = this.$origin.outerWidth();
        var originHeight = this.$origin.outerHeight();
        var originTop = isFixed ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top;
        var originLeft = isFixed ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left;

        // Calculating screen
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var centerX = windowWidth / 2;
        var centerY = windowHeight / 2;
        var isLeft = originLeft <= centerX;
        var isRight = originLeft > centerX;
        var isTop = originTop <= centerY;
        var isBottom = originTop > centerY;
        var isCenterX = originLeft >= windowWidth * 0.25 && originLeft <= windowWidth * 0.75;

        // Calculating tap target
        var tapTargetWidth = this.$el.outerWidth();
        var tapTargetHeight = this.$el.outerHeight();
        var tapTargetTop = originTop + originHeight / 2 - tapTargetHeight / 2;
        var tapTargetLeft = originLeft + originWidth / 2 - tapTargetWidth / 2;
        var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

        // Calculating content
        var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth / 2 + originWidth;
        var tapTargetTextHeight = tapTargetHeight / 2;
        var tapTargetTextTop = isTop ? tapTargetHeight / 2 : 0;
        var tapTargetTextBottom = 0;
        var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth / 2 - originWidth : 0;
        var tapTargetTextRight = 0;
        var tapTargetTextPadding = originWidth;
        var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

        // Calculating wave
        var tapTargetWaveWidth = originWidth > originHeight ? originWidth * 2 : originWidth * 2;
        var tapTargetWaveHeight = tapTargetWaveWidth;
        var tapTargetWaveTop = tapTargetHeight / 2 - tapTargetWaveHeight / 2;
        var tapTargetWaveLeft = tapTargetWidth / 2 - tapTargetWaveWidth / 2;

        // Setting tap target
        var tapTargetWrapperCssObj = {};
        tapTargetWrapperCssObj.top = isTop ? tapTargetTop + 'px' : '';
        tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth + 'px' : '';
        tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight + 'px' : '';
        tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft + 'px' : '';
        tapTargetWrapperCssObj.position = tapTargetPosition;
        $(this.wrapper).css(tapTargetWrapperCssObj);

        // Setting content
        $(this.contentEl).css({
          width: tapTargetTextWidth + 'px',
          height: tapTargetTextHeight + 'px',
          top: tapTargetTextTop + 'px',
          right: tapTargetTextRight + 'px',
          bottom: tapTargetTextBottom + 'px',
          left: tapTargetTextLeft + 'px',
          padding: tapTargetTextPadding + 'px',
          verticalAlign: tapTargetTextAlign
        });

        // Setting wave
        $(this.waveEl).css({
          top: tapTargetWaveTop + 'px',
          left: tapTargetWaveLeft + 'px',
          width: tapTargetWaveWidth + 'px',
          height: tapTargetWaveHeight + 'px'
        });
      }

      /**
       * Open TapTarget
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        // onOpen callback
        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this, this.$origin[0]);
        }

        this.isOpen = true;
        this.wrapper.classList.add('open');

        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
      }

      /**
       * Close Tap Target
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        // onClose callback
        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this, this.$origin[0]);
        }

        this.isOpen = false;
        this.wrapper.classList.remove('open');

        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(TapTarget.__proto__ || Object.getPrototypeOf(TapTarget), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_TapTarget;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return TapTarget;
  }(Component);

  M.TapTarget = TapTarget;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(TapTarget, 'tapTarget', 'M_TapTarget');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    classes: '',
    dropdownOptions: {}
  };

  /**
   * @class
   *
   */

  var FormSelect = function (_Component20) {
    _inherits(FormSelect, _Component20);

    /**
     * Construct FormSelect instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function FormSelect(el, options) {
      _classCallCheck(this, FormSelect);

      // Don't init if browser default version
      var _this68 = _possibleConstructorReturn(this, (FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).call(this, FormSelect, el, options));

      if (_this68.$el.hasClass('browser-default')) {
        return _possibleConstructorReturn(_this68);
      }

      _this68.el.M_FormSelect = _this68;

      /**
       * Options for the select
       * @member FormSelect#options
       */
      _this68.options = $.extend({}, FormSelect.defaults, options);

      _this68.isMultiple = _this68.$el.prop('multiple');

      // Setup
      _this68.el.tabIndex = -1;
      _this68._keysSelected = {};
      _this68._valueDict = {}; // Maps key to original and generated option element.
      _this68._setupDropdown();

      _this68._setupEventHandlers();
      return _this68;
    }

    _createClass(FormSelect, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeDropdown();
        this.el.M_FormSelect = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this69 = this;

        this._handleSelectChangeBound = this._handleSelectChange.bind(this);
        this._handleOptionClickBound = this._handleOptionClick.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);

        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.addEventListener('click', _this69._handleOptionClickBound);
        });
        this.el.addEventListener('change', this._handleSelectChangeBound);
        this.input.addEventListener('click', this._handleInputClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this70 = this;

        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.removeEventListener('click', _this70._handleOptionClickBound);
        });
        this.el.removeEventListener('change', this._handleSelectChangeBound);
        this.input.removeEventListener('click', this._handleInputClickBound);
      }

      /**
       * Handle Select Change
       * @param {Event} e
       */

    }, {
      key: "_handleSelectChange",
      value: function _handleSelectChange(e) {
        this._setValueToInput();
      }

      /**
       * Handle Option Click
       * @param {Event} e
       */

    }, {
      key: "_handleOptionClick",
      value: function _handleOptionClick(e) {
        e.preventDefault();
        var option = $(e.target).closest('li')[0];
        var key = option.id;
        if (!$(option).hasClass('disabled') && !$(option).hasClass('optgroup') && key.length) {
          var selected = true;

          if (this.isMultiple) {
            // Deselect placeholder option if still selected.
            var placeholderOption = $(this.dropdownOptions).find('li.disabled.selected');
            if (placeholderOption.length) {
              placeholderOption.removeClass('selected');
              placeholderOption.find('input[type="checkbox"]').prop('checked', false);
              this._toggleEntryFromArray(placeholderOption[0].id);
            }
            selected = this._toggleEntryFromArray(key);
          } else {
            $(this.dropdownOptions).find('li').removeClass('selected');
            $(option).toggleClass('selected', selected);
          }

          // Set selected on original select option
          // Only trigger if selected state changed
          var prevSelected = $(this._valueDict[key].el).prop('selected');
          if (prevSelected !== selected) {
            $(this._valueDict[key].el).prop('selected', selected);
            this.$el.trigger('change');
          }
        }

        e.stopPropagation();
      }

      /**
       * Handle Input Click
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        if (this.dropdown && this.dropdown.isOpen) {
          this._setValueToInput();
          this._setSelectedStates();
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this71 = this;

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('select-wrapper ' + this.options.classes);
        this.$el.before($(this.wrapper));
        this.wrapper.appendChild(this.el);

        if (this.el.disabled) {
          this.wrapper.classList.add('disabled');
        }

        // Create dropdown
        this.$selectOptions = this.$el.children('option, optgroup');
        this.dropdownOptions = document.createElement('ul');
        this.dropdownOptions.id = "select-options-" + M.guid();
        $(this.dropdownOptions).addClass('dropdown-content select-dropdown ' + (this.isMultiple ? 'multiple-select-dropdown' : ''));

        // Create dropdown structure.
        if (this.$selectOptions.length) {
          this.$selectOptions.each(function (el) {
            if ($(el).is('option')) {
              // Direct descendant option.
              var optionEl = void 0;
              if (_this71.isMultiple) {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'multiple');
              } else {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el);
              }

              _this71._addOptionToValueDict(el, optionEl);
            } else if ($(el).is('optgroup')) {
              // Optgroup.
              var selectOptions = $(el).children('option');
              $(_this71.dropdownOptions).append($('<li class="optgroup"><span>' + el.getAttribute('label') + '</span></li>')[0]);

              selectOptions.each(function (el) {
                var optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'optgroup-option');
                _this71._addOptionToValueDict(el, optionEl);
              });
            }
          });
        }

        this.$el.after(this.dropdownOptions);

        // Add input dropdown
        this.input = document.createElement('input');
        $(this.input).addClass('select-dropdown dropdown-trigger');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('readonly', 'true');
        this.input.setAttribute('data-target', this.dropdownOptions.id);
        if (this.el.disabled) {
          $(this.input).prop('disabled', 'true');
        }

        this.$el.before(this.input);
        this._setValueToInput();

        // Add caret
        var dropdownIcon = $('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
        this.$el.before(dropdownIcon[0]);

        // Initialize dropdown
        if (!this.el.disabled) {
          var dropdownOptions = $.extend({}, this.options.dropdownOptions);

          // Add callback for centering selected option when dropdown content is scrollable
          dropdownOptions.onOpenEnd = function (el) {
            var selectedOption = $(_this71.dropdownOptions).find('.selected').first();

            if (selectedOption.length) {
              // Focus selected option in dropdown
              M.keyDown = true;
              _this71.dropdown.focusedIndex = selectedOption.index();
              _this71.dropdown._focusFocusedItem();
              M.keyDown = false;

              // Handle scrolling to selected option
              if (_this71.dropdown.isScrollable) {
                var scrollOffset = selectedOption[0].getBoundingClientRect().top - _this71.dropdownOptions.getBoundingClientRect().top; // scroll to selected option
                scrollOffset -= _this71.dropdownOptions.clientHeight / 2; // center in dropdown
                _this71.dropdownOptions.scrollTop = scrollOffset;
              }
            }
          };

          if (this.isMultiple) {
            dropdownOptions.closeOnClick = false;
          }
          this.dropdown = M.Dropdown.init(this.input, dropdownOptions);
        }

        // Add initial selections
        this._setSelectedStates();
      }

      /**
       * Add option to value dict
       * @param {Element} el  original option element
       * @param {Element} optionEl  generated option element
       */

    }, {
      key: "_addOptionToValueDict",
      value: function _addOptionToValueDict(el, optionEl) {
        var index = Object.keys(this._valueDict).length;
        var key = this.dropdownOptions.id + index;
        var obj = {};
        optionEl.id = key;

        obj.el = el;
        obj.optionEl = optionEl;
        this._valueDict[key] = obj;
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        $(this.wrapper).find('.caret').remove();
        $(this.input).remove();
        $(this.dropdownOptions).remove();
        $(this.wrapper).before(this.$el);
        $(this.wrapper).remove();
      }

      /**
       * Setup dropdown
       * @param {Element} select  select element
       * @param {Element} option  option element from select
       * @param {String} type
       * @return {Element}  option element added
       */

    }, {
      key: "_appendOptionWithIcon",
      value: function _appendOptionWithIcon(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = option.disabled ? 'disabled ' : '';
        var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';
        var multipleCheckbox = this.isMultiple ? "<label><input type=\"checkbox\"" + disabledClass + "\"/><span>" + option.innerHTML + "</span></label>" : option.innerHTML;
        var liEl = $('<li></li>');
        var spanEl = $('<span></span>');
        spanEl.html(multipleCheckbox);
        liEl.addClass(disabledClass + " " + optgroupClass);
        liEl.append(spanEl);

        // add icons
        var iconUrl = option.getAttribute('data-icon');
        if (!!iconUrl) {
          var imgEl = $("<img alt=\"\" src=\"" + iconUrl + "\">");
          liEl.prepend(imgEl);
        }

        // Check for multiple type.
        $(this.dropdownOptions).append(liEl[0]);
        return liEl[0];
      }

      /**
       * Toggle entry from option
       * @param {String} key  Option key
       * @return {Boolean}  if entry was added or removed
       */

    }, {
      key: "_toggleEntryFromArray",
      value: function _toggleEntryFromArray(key) {
        var notAdded = !this._keysSelected.hasOwnProperty(key);
        var $optionLi = $(this._valueDict[key].optionEl);

        if (notAdded) {
          this._keysSelected[key] = true;
        } else {
          delete this._keysSelected[key];
        }

        $optionLi.toggleClass('selected', notAdded);

        // Set checkbox checked value
        $optionLi.find('input[type="checkbox"]').prop('checked', notAdded);

        // use notAdded instead of true (to detect if the option is selected or not)
        $optionLi.prop('selected', notAdded);

        return notAdded;
      }

      /**
       * Set text value to input
       */

    }, {
      key: "_setValueToInput",
      value: function _setValueToInput() {
        var values = [];
        var options = this.$el.find('option');

        options.each(function (el) {
          if ($(el).prop('selected')) {
            var text = $(el).text();
            values.push(text);
          }
        });

        if (!values.length) {
          var firstDisabled = this.$el.find('option:disabled').eq(0);
          if (firstDisabled.length && firstDisabled[0].value === '') {
            values.push(firstDisabled.text());
          }
        }

        this.input.value = values.join(', ');
      }

      /**
       * Set selected state of dropdown to match actual select element
       */

    }, {
      key: "_setSelectedStates",
      value: function _setSelectedStates() {
        this._keysSelected = {};

        for (var key in this._valueDict) {
          var option = this._valueDict[key];
          var optionIsSelected = $(option.el).prop('selected');
          $(option.optionEl).find('input[type="checkbox"]').prop('checked', optionIsSelected);
          if (optionIsSelected) {
            this._activateOption($(this.dropdownOptions), $(option.optionEl));
            this._keysSelected[key] = true;
          } else {
            $(option.optionEl).removeClass('selected');
          }
        }
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       */

    }, {
      key: "_activateOption",
      value: function _activateOption(collection, newOption) {
        if (newOption) {
          if (!this.isMultiple) {
            collection.find('li.selected').removeClass('selected');
          }
          var option = $(newOption);
          option.addClass('selected');
        }
      }

      /**
       * Get Selected Values
       * @return {Array}  Array of selected values
       */

    }, {
      key: "getSelectedValues",
      value: function getSelectedValues() {
        var selectedValues = [];
        for (var key in this._keysSelected) {
          selectedValues.push(this._valueDict[key].el.value);
        }
        return selectedValues;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FormSelect.__proto__ || Object.getPrototypeOf(FormSelect), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FormSelect;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return FormSelect;
  }(Component);

  M.FormSelect = FormSelect;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FormSelect, 'formSelect', 'M_FormSelect');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {};

  /**
   * @class
   *
   */

  var Range = function (_Component21) {
    _inherits(Range, _Component21);

    /**
     * Construct Range instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Range(el, options) {
      _classCallCheck(this, Range);

      var _this72 = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, Range, el, options));

      _this72.el.M_Range = _this72;

      /**
       * Options for the range
       * @member Range#options
       */
      _this72.options = $.extend({}, Range.defaults, options);

      _this72._mousedown = false;

      // Setup
      _this72._setupThumb();

      _this72._setupEventHandlers();
      return _this72;
    }

    _createClass(Range, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeThumb();
        this.el.M_Range = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleRangeChangeBound = this._handleRangeChange.bind(this);
        this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this);
        this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this);
        this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this);
        this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this);

        this.el.addEventListener('change', this._handleRangeChangeBound);

        this.el.addEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.addEventListener('touchstart', this._handleRangeMousedownTouchstartBound);

        this.el.addEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);

        this.el.addEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.addEventListener('touchend', this._handleRangeMouseupTouchendBound);

        this.el.addEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('change', this._handleRangeChangeBound);

        this.el.removeEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.removeEventListener('touchstart', this._handleRangeMousedownTouchstartBound);

        this.el.removeEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);

        this.el.removeEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.removeEventListener('touchend', this._handleRangeMouseupTouchendBound);

        this.el.removeEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }

      /**
       * Handle Range Change
       * @param {Event} e
       */

    }, {
      key: "_handleRangeChange",
      value: function _handleRangeChange() {
        $(this.value).html(this.$el.val());

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        var offsetLeft = this._calcRangeOffset();
        $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
      }

      /**
       * Handle Range Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleRangeMousedownTouchstart",
      value: function _handleRangeMousedownTouchstart(e) {
        // Set indicator value
        $(this.value).html(this.$el.val());

        this._mousedown = true;
        this.$el.addClass('active');

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        if (e.type !== 'input') {
          var offsetLeft = this._calcRangeOffset();
          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
        }
      }

      /**
       * Handle Range Input, Mousemove and Touchmove
       */

    }, {
      key: "_handleRangeInputMousemoveTouchmove",
      value: function _handleRangeInputMousemoveTouchmove() {
        if (this._mousedown) {
          if (!$(this.thumb).hasClass('active')) {
            this._showRangeBubble();
          }

          var offsetLeft = this._calcRangeOffset();
          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
          $(this.value).html(this.$el.val());
        }
      }

      /**
       * Handle Range Mouseup and Touchend
       */

    }, {
      key: "_handleRangeMouseupTouchend",
      value: function _handleRangeMouseupTouchend() {
        this._mousedown = false;
        this.$el.removeClass('active');
      }

      /**
       * Handle Range Blur, Mouseout and Touchleave
       */

    }, {
      key: "_handleRangeBlurMouseoutTouchleave",
      value: function _handleRangeBlurMouseoutTouchleave() {
        if (!this._mousedown) {
          var paddingLeft = parseInt(this.$el.css('padding-left'));
          var marginLeft = 7 + paddingLeft + 'px';

          if ($(this.thumb).hasClass('active')) {
            anim.remove(this.thumb);
            anim({
              targets: this.thumb,
              height: 0,
              width: 0,
              top: 10,
              easing: 'easeOutQuad',
              marginLeft: marginLeft,
              duration: 100
            });
          }
          $(this.thumb).removeClass('active');
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupThumb",
      value: function _setupThumb() {
        this.thumb = document.createElement('span');
        this.value = document.createElement('span');
        $(this.thumb).addClass('thumb');
        $(this.value).addClass('value');
        $(this.thumb).append(this.value);
        this.$el.after(this.thumb);
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeThumb",
      value: function _removeThumb() {
        $(this.thumb).remove();
      }

      /**
       * morph thumb into bubble
       */

    }, {
      key: "_showRangeBubble",
      value: function _showRangeBubble() {
        var paddingLeft = parseInt($(this.thumb).parent().css('padding-left'));
        var marginLeft = -7 + paddingLeft + 'px'; // TODO: fix magic number?
        anim.remove(this.thumb);
        anim({
          targets: this.thumb,
          height: 30,
          width: 30,
          top: -30,
          marginLeft: marginLeft,
          duration: 300,
          easing: 'easeOutQuint'
        });
      }

      /**
       * Calculate the offset of the thumb
       * @return {Number}  offset in pixels
       */

    }, {
      key: "_calcRangeOffset",
      value: function _calcRangeOffset() {
        var width = this.$el.width() - 15;
        var max = parseFloat(this.$el.attr('max')) || 100; // Range default max
        var min = parseFloat(this.$el.attr('min')) || 0; // Range default min
        var percent = (parseFloat(this.$el.val()) - min) / (max - min);
        return percent * width;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Range.__proto__ || Object.getPrototypeOf(Range), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Range;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Range;
  }(Component);

  M.Range = Range;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Range, 'range', 'M_Range');
  }

  Range.init($('input[type=range]'));
})(cash, M.anime);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb21tb24uc2Nzcz8wMmQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbGl6ZS1jc3MvZGlzdC9qcy9tYXRlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNnQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLEM7Ozs7OztBQ1hBLHVDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGtEQUFrRCw4REFBOEQsMEJBQTBCLDRDQUE0Qyx1QkFBdUIsa0JBQWtCLEVBQUUsT0FBTyx3Q0FBd0MsRUFBRSxFQUFFLDRCQUE0QixtQkFBbUIsRUFBRSxPQUFPLHVCQUF1Qiw0QkFBNEIsa0JBQWtCLEVBQUUsOEJBQThCLEVBQUU7O0FBRXhlLGdDQUFnQywyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRSxFQUFFLHlEQUF5RCxxRUFBcUUsNkRBQTZELG9CQUFvQixHQUFHLEVBQUU7O0FBRWpqQixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLFlBQVk7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsY0FBYzs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxZQUFZO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsR0FBRzs7QUFFSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQixhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLE9BQU87QUFDcEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLElBQUksSUFBMEM7QUFDOUMsRUFBRSxpQ0FBWSxFQUFFLG1DQUFFO0FBQ2xCO0FBQ0EsR0FBRztBQUFBLG9HQUFDOztBQUVKO0FBQ0EsQ0FBQyxNQUFNLEVBS047O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZTtBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsVUFBVSxHQUFHO0FBQzVCLHVGQUF1RjtBQUN2RixFQUFFO0FBQ0Y7QUFDQSxFQUFFLHlDQUF5QztBQUMzQztBQUNBLHNDQUFzQztBQUN0QyxFQUFFLDJCQUEyQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUNBQXVDLDhFQUE4RSx1RkFBdUY7QUFDbk87QUFDQSxLQUFLLEVBQUUsRUFBRTtBQUNULEVBQUU7QUFDRixZQUFZO0FBQ1osMkJBQTJCLDBCQUEwQixJQUFJO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0JBQStCLEtBQUssV0FBVztBQUMvQztBQUNBLElBQUk7QUFDSixFQUFFLG9DQUFvQztBQUN0QywrQkFBK0IsaUNBQWlDO0FBQ2hFLFdBQVc7QUFDWDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLE9BQU87QUFDUCxnQkFBZ0I7QUFDaEIsUUFBUTtBQUNSLEtBQUssR0FBRztBQUNSO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUIsV0FBVyxrQkFBa0I7QUFDckUsbUJBQW1CLG9CQUFvQixFQUFFO0FBQ3pDLEtBQUssb0JBQW9CLFNBQVMsU0FBUyxxREFBcUQsMkNBQTJDO0FBQzNJO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUMscUJBQXFCO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCw0RkFBNEYsT0FBTztBQUNuRztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxnQ0FBZ0M7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGNBQWM7QUFDZCxVQUFVO0FBQ1Y7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLFVBQVU7QUFDVjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3RELDJCQUEyQjtBQUMzQiwrQkFBK0I7QUFDL0IsR0FBRztBQUNIO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckMsS0FBSyw0SEFBNEgseUJBQXlCO0FBQzFKO0FBQ0Esc0JBQXNCLDBCQUEwQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCx3RUFBd0U7QUFDeEUsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILGdEQUFnRCw0RUFBNEUsMkRBQTJEO0FBQ3ZMLEdBQUc7QUFDSDtBQUNBLGdEQUFnRCxzQkFBc0IsaUJBQWlCLHVEQUF1RCxlQUFlO0FBQzdKO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxFQUFFO0FBQ1AsR0FBRztBQUNILHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGtDQUFrQztBQUNsQyxHQUFHO0FBQ0gsb0NBQW9DLGlCQUFpQixrQkFBa0Isa0JBQWtCLG9DQUFvQyxrQkFBa0I7QUFDL0kseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxpQkFBaUIseUJBQXlCLHFCQUFxQjtBQUMvRCwyQkFBMkIsd0JBQXdCO0FBQ25ELEtBQUs7QUFDTCxHQUFHO0FBQ0gsb0RBQW9ELGtDQUFrQztBQUN0RixpREFBaUQ7QUFDakQsMEVBQTBFO0FBQzFFLGtCQUFrQixtREFBbUQsR0FBRyxtREFBbUQsRUFBRTtBQUM3SCxvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLEdBQUc7QUFDSDtBQUNBLCtCQUErQjtBQUMvQixLQUFLO0FBQ0w7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVLGlDQUFpQztBQUMzQztBQUNBLDBEQUEwRDtBQUMxRCxPQUFPO0FBQ1AsS0FBSyxpR0FBaUcsUUFBUSxRQUFRO0FBQ3RILEdBQUc7QUFDSCwrQ0FBK0M7QUFDL0M7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsS0FBSztBQUNMLEdBQUc7QUFDSCxpQkFBaUI7QUFDakIsdUJBQXVCLG1GQUFtRjtBQUMxRyxLQUFLO0FBQ0wsMEJBQTBCLGlDQUFpQyxZQUFZLGdDQUFnQztBQUN2RyxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGNBQWM7QUFDZCxVQUFVO0FBQ1YseUJBQXlCO0FBQ3pCO0FBQ0EsT0FBTyxpQ0FBaUM7QUFDeEMsS0FBSyxvQ0FBb0MsOEJBQThCO0FBQ3ZFLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQixlQUFlLCtCQUErQix1Q0FBdUMsd0JBQXdCLHNFQUFzRSxvQkFBb0IsbUNBQW1DLDJCQUEyQjtBQUN6VCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsMkJBQTJCLEtBQUs7QUFDaEMsU0FBUyxpQkFBaUI7QUFDMUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsMEJBQTBCO0FBQzFCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHdEQUF3RCxpREFBaUQ7QUFDekcsS0FBSyxhQUFhLGFBQWEsNEdBQTRHO0FBQzNJLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLDRCQUE0QixpQ0FBaUMsT0FBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLFNBQVMsV0FBVyxvTkFBb04sT0FBTztBQUMvTztBQUNBO0FBQ0E7QUFDQSxpRUFBaUUseURBQXlEO0FBQzFILFNBQVMsdUNBQXVDLE9BQU87QUFDdkQ7QUFDQSxTQUFTLGVBQWUsNkNBQTZDLG1CQUFtQjtBQUN4RixPQUFPLDBDQUEwQyxPQUFPO0FBQ3hEO0FBQ0EsT0FBTyxrQkFBa0I7QUFDekIsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLCtDQUErQyxPQUFPO0FBQ3REO0FBQ0EsU0FBUyxZQUFZLEtBQUs7QUFDMUI7QUFDQTtBQUNBLE9BQU8sa0VBQWtFLHlCQUF5Qix3RkFBd0YsWUFBWTtBQUN0TSxLQUFLLHFCQUFxQixLQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EscUJBQXFCLGtCQUFrQixlQUFlLGNBQWMsYUFBYSxpQkFBaUIsNkJBQTZCLG1EQUFtRCxLQUFLLDJCQUEyQixLQUFLO0FBQ3ZOO0FBQ0E7QUFDQSxNQUFNO0FBQ04sWUFBWSxhQUFhO0FBQ3pCLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTiwyQkFBMkIseUJBQXlCO0FBQ3BELE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTiwrQkFBK0IsTUFBTTtBQUNyQyxNQUFNO0FBQ047QUFDQSxnQkFBZ0I7QUFDaEIsTUFBTSxlQUFlLFVBQVUsdUJBQXVCO0FBQ3RELEdBQUcsVUFBVSxzSEFBc0g7QUFDbkksV0FBVywrRUFBK0U7QUFDMUY7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixFQUFFLGVBQWUsRUFBRTtBQUM5QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxQ0FBcUMsdUNBQXVDLFFBQVE7QUFDcEY7QUFDQSxTQUFTO0FBQ1QsMkNBQTJDLHNCQUFzQixzQkFBc0Isc0JBQXNCLHVCQUF1QjtBQUNwSTtBQUNBLFdBQVcsSUFBSTtBQUNmLG9GQUFvRjtBQUNwRix1QkFBdUIsT0FBTztBQUM5QixvRkFBb0YsbUJBQW1CO0FBQ3ZHO0FBQ0EsYUFBYTtBQUNiLFdBQVcseUJBQXlCO0FBQ3BDO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxhQUFhLHdDQUF3QztBQUNyRCxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxhQUFhO0FBQ2I7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPLEdBQUc7QUFDVixhQUFhLGdDQUFnQztBQUM3QyxjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLEtBQUs7QUFDTCxHQUFHO0FBQ0gsWUFBWTtBQUNaO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLDBCQUEwQjtBQUMxQixLQUFLLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHVCQUF1QjtBQUN2Qix1QkFBdUIsT0FBTztBQUM5QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUcsR0FBRyxvQkFBb0IsWUFBWSxjQUFjO0FBQ3BELGFBQWEsc0JBQXNCLEtBQUs7QUFDeEMsd0RBQXdELEtBQUs7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSSxlQUFlO0FBQ25CO0FBQ0EscUJBQXFCO0FBQ3JCLGNBQWM7QUFDZDtBQUNBLElBQUk7QUFDSixpQkFBaUIsc0NBQXNDO0FBQ3ZELElBQUksYUFBYSxjQUFjO0FBQy9CLGlCQUFpQixVQUFVLGVBQWU7QUFDMUM7QUFDQSxxQkFBcUI7QUFDckIsT0FBTyxFQUFFO0FBQ1QsaUNBQWlDLEdBQUcsbUNBQW1DLGVBQWUsaUJBQWlCLGdCQUFnQiwwQkFBMEIsa0NBQWtDLGFBQWEsaUJBQWlCLGlCQUFpQixTQUFTLGFBQWEsaUJBQWlCLDRDQUE0QztBQUNyVCxPQUFPLEVBQUUsVUFBVSxVQUFVLDBCQUEwQjtBQUN2RCxNQUFNO0FBQ04sSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msb0JBQW9COztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLGlDQUFpQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLEtBQUs7QUFDdEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEMsT0FBTztBQUNQO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFFBQVE7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsdUNBQXVDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsT0FBTztBQUN4QixrQkFBa0Isa0JBQWtCO0FBQ3BDOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHLEVBQUU7QUFDTCxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekIsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EseUJBQXlCLG1CQUFtQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE1BQU07QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCLGtCQUFrQjtBQUNsQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkJBQTJCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlCQUFpQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsNEJBQTRCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsU0FBUztBQUNUO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUgsK2JBQStiOztBQUUvYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtHQUErRztBQUMvRztBQUNBLHlCQUF5QixpQkFBaUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUIsb0JBQW9CLE9BQU87QUFDM0Isb0JBQW9CLE9BQU87QUFDM0I7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCLGtCQUFrQixNQUFNO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RTtBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekIsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QixpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsbUNBQW1DOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0JBQW9CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVJQUF1STtBQUN2SSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCLGlCQUFpQixRQUFRO0FBQ3pCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsUUFBUTtBQUN6QixpQkFBaUIsT0FBTztBQUN4QixrQkFBa0IsUUFBUTtBQUMxQjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCLGtCQUFrQixRQUFRO0FBQzFCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEIsaUJBQWlCLFFBQVE7QUFDekI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsTUFBTTtBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUNybFlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJwYWdlcy9jb21tb24vMjc2YmYwY2RiNTczZTBiYzhlYWQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2NvbW1vbi5zY3NzJztcbmltcG9ydCAnbWF0ZXJpYWxpemUtY3NzL2Rpc3QvanMvbWF0ZXJpYWxpemUnO1xuXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJykudGhlbihyZWdpc3RyYXRpb24gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6ICcsIHJlZ2lzdHJhdGlvbik7XG4gICAgICAgIH0pLmNhdGNoKHJlZ2lzdHJhdGlvbkVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVyByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCByZWdpc3RyYXRpb25FcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIVxuICogTWF0ZXJpYWxpemUgdjEuMC4wIChodHRwOi8vbWF0ZXJpYWxpemVjc3MuY29tKVxuICogQ29weXJpZ2h0IDIwMTQtMjAxNyBNYXRlcmlhbGl6ZVxuICogTUlUIExpY2Vuc2UgKGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Eb2dmYWxvL21hdGVyaWFsaXplL21hc3Rlci9MSUNFTlNFKVxuICovXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikgeyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7IH0gfSBlbHNlIGlmIChcInZhbHVlXCIgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyohIGNhc2gtZG9tIDEuMy41LCBodHRwczovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9jYXNoIEBsaWNlbnNlIE1JVCAqL1xuKGZ1bmN0aW9uIChmYWN0b3J5KSB7XG4gIHdpbmRvdy5jYXNoID0gZmFjdG9yeSgpO1xufSkoZnVuY3Rpb24gKCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICB3aW4gPSB3aW5kb3csXG4gICAgICBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgICAgc2xpY2UgPSBBcnJheVByb3RvLnNsaWNlLFxuICAgICAgZmlsdGVyID0gQXJyYXlQcm90by5maWx0ZXIsXG4gICAgICBwdXNoID0gQXJyYXlQcm90by5wdXNoO1xuXG4gIHZhciBub29wID0gZnVuY3Rpb24gKCkge30sXG4gICAgICBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAvLyBAc2VlIGh0dHBzOi8vY3JidWcuY29tLzU2ODQ0OFxuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gdHlwZW9mIG5vb3AgJiYgaXRlbS5jYWxsO1xuICB9LFxuICAgICAgaXNTdHJpbmcgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiB0eXBlb2YgaXRlbSA9PT0gdHlwZW9mIFwiXCI7XG4gIH07XG5cbiAgdmFyIGlkTWF0Y2ggPSAvXiNbXFx3LV0qJC8sXG4gICAgICBjbGFzc01hdGNoID0gL15cXC5bXFx3LV0qJC8sXG4gICAgICBodG1sTWF0Y2ggPSAvPC4rPi8sXG4gICAgICBzaW5nbGV0ID0gL15cXHcrJC87XG5cbiAgZnVuY3Rpb24gZmluZChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvYztcbiAgICB2YXIgZWxlbXMgPSBjbGFzc01hdGNoLnRlc3Qoc2VsZWN0b3IpID8gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yLnNsaWNlKDEpKSA6IHNpbmdsZXQudGVzdChzZWxlY3RvcikgPyBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKSA6IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIGVsZW1zO1xuICB9XG5cbiAgdmFyIGZyYWc7XG4gIGZ1bmN0aW9uIHBhcnNlSFRNTChzdHIpIHtcbiAgICBpZiAoIWZyYWcpIHtcbiAgICAgIGZyYWcgPSBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KG51bGwpO1xuICAgICAgdmFyIGJhc2UgPSBmcmFnLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpO1xuICAgICAgYmFzZS5ocmVmID0gZG9jLmxvY2F0aW9uLmhyZWY7XG4gICAgICBmcmFnLmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgfVxuXG4gICAgZnJhZy5ib2R5LmlubmVySFRNTCA9IHN0cjtcblxuICAgIHJldHVybiBmcmFnLmJvZHkuY2hpbGROb2RlcztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVhZHkoZm4pIHtcbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG4gICAgICBmbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZm4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEluaXQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBhbHJlYWR5IGEgY2FzaCBjb2xsZWN0aW9uLCBkb24ndCBkbyBhbnkgZnVydGhlciBwcm9jZXNzaW5nXG4gICAgaWYgKHNlbGVjdG9yLmNhc2ggJiYgc2VsZWN0b3IgIT09IHdpbikge1xuICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cblxuICAgIHZhciBlbGVtcyA9IHNlbGVjdG9yLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoO1xuXG4gICAgaWYgKGlzU3RyaW5nKHNlbGVjdG9yKSkge1xuICAgICAgZWxlbXMgPSBpZE1hdGNoLnRlc3Qoc2VsZWN0b3IpID9cbiAgICAgIC8vIElmIGFuIElEIHVzZSB0aGUgZmFzdGVyIGdldEVsZW1lbnRCeUlkIGNoZWNrXG4gICAgICBkb2MuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc2xpY2UoMSkpIDogaHRtbE1hdGNoLnRlc3Qoc2VsZWN0b3IpID9cbiAgICAgIC8vIElmIEhUTUwsIHBhcnNlIGl0IGludG8gcmVhbCBlbGVtZW50c1xuICAgICAgcGFyc2VIVE1MKHNlbGVjdG9yKSA6XG4gICAgICAvLyBlbHNlIHVzZSBgZmluZGBcbiAgICAgIGZpbmQoc2VsZWN0b3IsIGNvbnRleHQpO1xuXG4gICAgICAvLyBJZiBmdW5jdGlvbiwgdXNlIGFzIHNob3J0Y3V0IGZvciBET00gcmVhZHlcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICBvblJlYWR5KHNlbGVjdG9yKTtyZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1zKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBJZiBhIHNpbmdsZSBET00gZWxlbWVudCBpcyBwYXNzZWQgaW4gb3IgcmVjZWl2ZWQgdmlhIElELCByZXR1cm4gdGhlIHNpbmdsZSBlbGVtZW50XG4gICAgaWYgKGVsZW1zLm5vZGVUeXBlIHx8IGVsZW1zID09PSB3aW4pIHtcbiAgICAgIHRoaXNbMF0gPSBlbGVtcztcbiAgICAgIHRoaXMubGVuZ3RoID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJlYXQgbGlrZSBhbiBhcnJheSBhbmQgbG9vcCB0aHJvdWdoIGVhY2ggaXRlbS5cbiAgICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzW2ldID0gZWxlbXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBjYXNoKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBJbml0KHNlbGVjdG9yLCBjb250ZXh0KTtcbiAgfVxuXG4gIHZhciBmbiA9IGNhc2guZm4gPSBjYXNoLnByb3RvdHlwZSA9IEluaXQucHJvdG90eXBlID0geyAvLyBqc2hpbnQgaWdub3JlOmxpbmVcbiAgICBjYXNoOiB0cnVlLFxuICAgIGxlbmd0aDogMCxcbiAgICBwdXNoOiBwdXNoLFxuICAgIHNwbGljZTogQXJyYXlQcm90by5zcGxpY2UsXG4gICAgbWFwOiBBcnJheVByb3RvLm1hcCxcbiAgICBpbml0OiBJbml0XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBcImNvbnN0cnVjdG9yXCIsIHsgdmFsdWU6IGNhc2ggfSk7XG5cbiAgY2FzaC5wYXJzZUhUTUwgPSBwYXJzZUhUTUw7XG4gIGNhc2gubm9vcCA9IG5vb3A7XG4gIGNhc2guaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG4gIGNhc2guaXNTdHJpbmcgPSBpc1N0cmluZztcblxuICBjYXNoLmV4dGVuZCA9IGZuLmV4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB0YXJnZXQgPSB0YXJnZXQgfHwge307XG5cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgbGVuZ3RoID0gYXJncy5sZW5ndGgsXG4gICAgICAgIGkgPSAxO1xuXG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgaSA9IDA7XG4gICAgfVxuXG4gICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFhcmdzW2ldKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIGFyZ3NbaV0pIHtcbiAgICAgICAgaWYgKGFyZ3NbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gYXJnc1tpXVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBlYWNoKGNvbGxlY3Rpb24sIGNhbGxiYWNrKSB7XG4gICAgdmFyIGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGNhbGxiYWNrLmNhbGwoY29sbGVjdGlvbltpXSwgY29sbGVjdGlvbltpXSwgaSwgY29sbGVjdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoZWwsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG0gPSBlbCAmJiAoZWwubWF0Y2hlcyB8fCBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpO1xuICAgIHJldHVybiAhIW0gJiYgbS5jYWxsKGVsLCBzZWxlY3Rvcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21wYXJlRnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLyogVXNlIGJyb3dzZXIncyBgbWF0Y2hlc2AgZnVuY3Rpb24gaWYgc3RyaW5nICovXG4gICAgICBpc1N0cmluZyhzZWxlY3RvcikgPyBtYXRjaGVzIDpcbiAgICAgIC8qIE1hdGNoIGEgY2FzaCBlbGVtZW50ICovXG4gICAgICBzZWxlY3Rvci5jYXNoID8gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5pcyhlbCk7XG4gICAgICB9IDpcbiAgICAgIC8qIERpcmVjdCBjb21wYXJpc29uICovXG4gICAgICBmdW5jdGlvbiAoZWwsIHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBlbCA9PT0gc2VsZWN0b3I7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuaXF1ZShjb2xsZWN0aW9uKSB7XG4gICAgcmV0dXJuIGNhc2goc2xpY2UuY2FsbChjb2xsZWN0aW9uKS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGluZGV4LCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBpbmRleDtcbiAgICB9KSk7XG4gIH1cblxuICBjYXNoLmV4dGVuZCh7XG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChmaXJzdCwgc2Vjb25kKSB7XG4gICAgICB2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG4gICAgICAgICAgaSA9IGZpcnN0Lmxlbmd0aCxcbiAgICAgICAgICBqID0gMDtcblxuICAgICAgZm9yICg7IGogPCBsZW47IGkrKywgaisrKSB7XG4gICAgICAgIGZpcnN0W2ldID0gc2Vjb25kW2pdO1xuICAgICAgfVxuXG4gICAgICBmaXJzdC5sZW5ndGggPSBpO1xuICAgICAgcmV0dXJuIGZpcnN0O1xuICAgIH0sXG5cbiAgICBlYWNoOiBlYWNoLFxuICAgIG1hdGNoZXM6IG1hdGNoZXMsXG4gICAgdW5pcXVlOiB1bmlxdWUsXG4gICAgaXNBcnJheTogQXJyYXkuaXNBcnJheSxcbiAgICBpc051bWVyaWM6IGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgdWlkID0gY2FzaC51aWQgPSBcIl9jYXNoXCIgKyBEYXRlLm5vdygpO1xuXG4gIGZ1bmN0aW9uIGdldERhdGFDYWNoZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGVbdWlkXSA9IG5vZGVbdWlkXSB8fCB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERhdGEobm9kZSwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBnZXREYXRhQ2FjaGUobm9kZSlba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGF0YShub2RlLCBrZXkpIHtcbiAgICB2YXIgYyA9IGdldERhdGFDYWNoZShub2RlKTtcbiAgICBpZiAoY1trZXldID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNba2V5XSA9IG5vZGUuZGF0YXNldCA/IG5vZGUuZGF0YXNldFtrZXldIDogY2FzaChub2RlKS5hdHRyKFwiZGF0YS1cIiArIGtleSk7XG4gICAgfVxuICAgIHJldHVybiBjW2tleV07XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVEYXRhKG5vZGUsIGtleSkge1xuICAgIHZhciBjID0gZ2V0RGF0YUNhY2hlKG5vZGUpO1xuICAgIGlmIChjKSB7XG4gICAgICBkZWxldGUgY1trZXldO1xuICAgIH0gZWxzZSBpZiAobm9kZS5kYXRhc2V0KSB7XG4gICAgICBkZWxldGUgbm9kZS5kYXRhc2V0W2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhc2gobm9kZSkucmVtb3ZlQXR0cihcImRhdGEtXCIgKyBuYW1lKTtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIGRhdGE6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgaWYgKGlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZ2V0RGF0YSh0aGlzWzBdLCBuYW1lKSA6IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiBzZXREYXRhKHYsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSB7XG4gICAgICAgIHRoaXMuZGF0YShrZXksIG5hbWVba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiByZW1vdmVEYXRhKHYsIGtleSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIG5vdFdoaXRlTWF0Y2ggPSAvXFxTKy9nO1xuXG4gIGZ1bmN0aW9uIGdldENsYXNzZXMoYykge1xuICAgIHJldHVybiBpc1N0cmluZyhjKSAmJiBjLm1hdGNoKG5vdFdoaXRlTWF0Y2gpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3ModiwgYykge1xuICAgIHJldHVybiB2LmNsYXNzTGlzdCA/IHYuY2xhc3NMaXN0LmNvbnRhaW5zKGMpIDogbmV3IFJlZ0V4cChcIihefCApXCIgKyBjICsgXCIoIHwkKVwiLCBcImdpXCIpLnRlc3Qodi5jbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3ModiwgYywgc3BhY2VkTmFtZSkge1xuICAgIGlmICh2LmNsYXNzTGlzdCkge1xuICAgICAgdi5jbGFzc0xpc3QuYWRkKGMpO1xuICAgIH0gZWxzZSBpZiAoc3BhY2VkTmFtZS5pbmRleE9mKFwiIFwiICsgYyArIFwiIFwiKSkge1xuICAgICAgdi5jbGFzc05hbWUgKz0gXCIgXCIgKyBjO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHYsIGMpIHtcbiAgICBpZiAodi5jbGFzc0xpc3QpIHtcbiAgICAgIHYuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdi5jbGFzc05hbWUgPSB2LmNsYXNzTmFtZS5yZXBsYWNlKGMsIFwiXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZuLmV4dGVuZCh7XG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChjKSB7XG4gICAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoYyk7XG5cbiAgICAgIHJldHVybiBjbGFzc2VzID8gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciBzcGFjZWROYW1lID0gXCIgXCIgKyB2LmNsYXNzTmFtZSArIFwiIFwiO1xuICAgICAgICBlYWNoKGNsYXNzZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgYWRkQ2xhc3ModiwgYywgc3BhY2VkTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkgOiB0aGlzO1xuICAgIH0sXG5cbiAgICBhdHRyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmICghbmFtZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1swXSA/IHRoaXNbMF0uZ2V0QXR0cmlidXRlID8gdGhpc1swXS5nZXRBdHRyaWJ1dGUobmFtZSkgOiB0aGlzWzBdW25hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIGlmICh2LnNldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdi5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2W25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hdHRyKGtleSwgbmFtZVtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNoZWNrID0gZmFsc2UsXG4gICAgICAgICAgY2xhc3NlcyA9IGdldENsYXNzZXMoYyk7XG4gICAgICBpZiAoY2xhc3NlcyAmJiBjbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBjaGVjayA9IGhhc0NsYXNzKHYsIGNsYXNzZXNbMF0pO1xuICAgICAgICAgIHJldHVybiAhY2hlY2s7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0sXG5cbiAgICBwcm9wOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHRoaXNbMF1bbmFtZV0gOiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICB2W25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgICB0aGlzLnByb3Aoa2V5LCBuYW1lW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKHYucmVtb3ZlQXR0cmlidXRlKSB7XG4gICAgICAgICAgdi5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHZbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgICB9XG4gICAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoYyk7XG4gICAgICByZXR1cm4gY2xhc3NlcyA/IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICBlYWNoKGNsYXNzZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModiwgYyk7XG4gICAgICAgIH0pO1xuICAgICAgfSkgOiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmVQcm9wOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICBkZWxldGUgdltuYW1lXTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24gKGMsIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpc1tzdGF0ZSA/IFwiYWRkQ2xhc3NcIiA6IFwicmVtb3ZlQ2xhc3NcIl0oYyk7XG4gICAgICB9XG4gICAgICB2YXIgY2xhc3NlcyA9IGdldENsYXNzZXMoYyk7XG4gICAgICByZXR1cm4gY2xhc3NlcyA/IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgc3BhY2VkTmFtZSA9IFwiIFwiICsgdi5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgZWFjaChjbGFzc2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIGlmIChoYXNDbGFzcyh2LCBjKSkge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModiwgYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZENsYXNzKHYsIGMsIHNwYWNlZE5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KSA6IHRoaXM7XG4gICAgfSB9KTtcblxuICBmbi5leHRlbmQoe1xuICAgIGFkZDogZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdW5pcXVlKGNhc2gubWVyZ2UodGhpcywgY2FzaChzZWxlY3RvciwgY29udGV4dCkpKTtcbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICBlYWNoKHRoaXMsIGNhbGxiYWNrKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlcTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzLmdldChpbmRleCkpO1xuICAgIH0sXG5cbiAgICBmaWx0ZXI6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBhcmF0b3IgPSBpc0Z1bmN0aW9uKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogZ2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKTtcblxuICAgICAgcmV0dXJuIGNhc2goZmlsdGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmF0b3IoZSwgc2VsZWN0b3IpO1xuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBmaXJzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoMCk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbmRleCA8IDAgPyB0aGlzW2luZGV4ICsgdGhpcy5sZW5ndGhdIDogdGhpc1tpbmRleF07XG4gICAgfSxcblxuICAgIGluZGV4OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdmFyIGNoaWxkID0gZWxlbSA/IGNhc2goZWxlbSlbMF0gOiB0aGlzWzBdLFxuICAgICAgICAgIGNvbGxlY3Rpb24gPSBlbGVtID8gdGhpcyA6IGNhc2goY2hpbGQpLnBhcmVudCgpLmNoaWxkcmVuKCk7XG4gICAgICByZXR1cm4gc2xpY2UuY2FsbChjb2xsZWN0aW9uKS5pbmRleE9mKGNoaWxkKTtcbiAgICB9LFxuXG4gICAgbGFzdDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXEoLTEpO1xuICAgIH1cblxuICB9KTtcblxuICB2YXIgY2FtZWxDYXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW1lbFJlZ2V4ID0gLyg/Ol5cXHd8W0EtWl18XFxiXFx3KS9nLFxuICAgICAgICB3aGl0ZVNwYWNlID0gL1tcXHMtX10rL2c7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZShjYW1lbFJlZ2V4LCBmdW5jdGlvbiAobGV0dGVyLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbGV0dGVyW2luZGV4ID09PSAwID8gXCJ0b0xvd2VyQ2FzZVwiIDogXCJ0b1VwcGVyQ2FzZVwiXSgpO1xuICAgICAgfSkucmVwbGFjZSh3aGl0ZVNwYWNlLCBcIlwiKTtcbiAgICB9O1xuICB9KCk7XG5cbiAgdmFyIGdldFByZWZpeGVkUHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FjaGUgPSB7fSxcbiAgICAgICAgZG9jID0gZG9jdW1lbnQsXG4gICAgICAgIGRpdiA9IGRvYy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICBzdHlsZSA9IGRpdi5zdHlsZTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcHJvcCA9IGNhbWVsQ2FzZShwcm9wKTtcbiAgICAgIGlmIChjYWNoZVtwcm9wXSkge1xuICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICB9XG5cbiAgICAgIHZhciB1Y1Byb3AgPSBwcm9wLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcC5zbGljZSgxKSxcbiAgICAgICAgICBwcmVmaXhlcyA9IFtcIndlYmtpdFwiLCBcIm1velwiLCBcIm1zXCIsIFwib1wiXSxcbiAgICAgICAgICBwcm9wcyA9IChwcm9wICsgXCIgXCIgKyBwcmVmaXhlcy5qb2luKHVjUHJvcCArIFwiIFwiKSArIHVjUHJvcCkuc3BsaXQoXCIgXCIpO1xuXG4gICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAocCkge1xuICAgICAgICBpZiAocCBpbiBzdHlsZSkge1xuICAgICAgICAgIGNhY2hlW3BdID0gcHJvcCA9IGNhY2hlW3Byb3BdID0gcDtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgfTtcbiAgfSgpO1xuXG4gIGNhc2gucHJlZml4ZWRQcm9wID0gZ2V0UHJlZml4ZWRQcm9wO1xuICBjYXNoLmNhbWVsQ2FzZSA9IGNhbWVsQ2FzZTtcblxuICBmbi5leHRlbmQoe1xuICAgIGNzczogZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgICBpZiAoaXNTdHJpbmcocHJvcCkpIHtcbiAgICAgICAgcHJvcCA9IGdldFByZWZpeGVkUHJvcChwcm9wKTtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfSkgOiB3aW4uZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdKVtwcm9wXTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3ApIHtcbiAgICAgICAgdGhpcy5jc3Moa2V5LCBwcm9wW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY29tcHV0ZShlbCwgcHJvcCkge1xuICAgIHJldHVybiBwYXJzZUludCh3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbFswXSwgbnVsbClbcHJvcF0sIDEwKSB8fCAwO1xuICB9XG5cbiAgZWFjaChbXCJXaWR0aFwiLCBcIkhlaWdodFwiXSwgZnVuY3Rpb24gKHYpIHtcbiAgICB2YXIgbG93ZXIgPSB2LnRvTG93ZXJDYXNlKCk7XG5cbiAgICBmbltsb3dlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtsb3dlcl07XG4gICAgfTtcblxuICAgIGZuW1wiaW5uZXJcIiArIHZdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNbMF1bXCJjbGllbnRcIiArIHZdO1xuICAgIH07XG5cbiAgICBmbltcIm91dGVyXCIgKyB2XSA9IGZ1bmN0aW9uIChtYXJnaW5zKSB7XG4gICAgICByZXR1cm4gdGhpc1swXVtcIm9mZnNldFwiICsgdl0gKyAobWFyZ2lucyA/IGNvbXB1dGUodGhpcywgXCJtYXJnaW5cIiArICh2ID09PSBcIldpZHRoXCIgPyBcIkxlZnRcIiA6IFwiVG9wXCIpKSArIGNvbXB1dGUodGhpcywgXCJtYXJnaW5cIiArICh2ID09PSBcIldpZHRoXCIgPyBcIlJpZ2h0XCIgOiBcIkJvdHRvbVwiKSkgOiAwKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiByZWdpc3RlckV2ZW50KG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZXZlbnRDYWNoZSA9IGdldERhdGEobm9kZSwgXCJfY2FzaEV2ZW50c1wiKSB8fCBzZXREYXRhKG5vZGUsIFwiX2Nhc2hFdmVudHNcIiwge30pO1xuICAgIGV2ZW50Q2FjaGVbZXZlbnROYW1lXSA9IGV2ZW50Q2FjaGVbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudENhY2hlW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBldmVudHMgPSBnZXREYXRhKG5vZGUsIFwiX2Nhc2hFdmVudHNcIiksXG4gICAgICAgIGV2ZW50Q2FjaGUgPSBldmVudHMgJiYgZXZlbnRzW2V2ZW50TmFtZV0sXG4gICAgICAgIGluZGV4O1xuXG4gICAgaWYgKCFldmVudENhY2hlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICBpbmRleCA9IGV2ZW50Q2FjaGUuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICBldmVudENhY2hlLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVhY2goZXZlbnRDYWNoZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50KTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnRDYWNoZSA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIGZuLmV4dGVuZCh7XG4gICAgb2ZmOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gcmVtb3ZlRXZlbnQodiwgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb246IGZ1bmN0aW9uIChldmVudE5hbWUsIGRlbGVnYXRlLCBjYWxsYmFjaywgcnVuT25jZSkge1xuICAgICAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgICB2YXIgb3JpZ2luYWxDYWxsYmFjaztcbiAgICAgIGlmICghaXNTdHJpbmcoZXZlbnROYW1lKSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZXZlbnROYW1lKSB7XG4gICAgICAgICAgdGhpcy5vbihrZXksIGRlbGVnYXRlLCBldmVudE5hbWVba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Z1bmN0aW9uKGRlbGVnYXRlKSkge1xuICAgICAgICBjYWxsYmFjayA9IGRlbGVnYXRlO1xuICAgICAgICBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChldmVudE5hbWUgPT09IFwicmVhZHlcIikge1xuICAgICAgICBvblJlYWR5KGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICBvcmlnaW5hbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IGUudGFyZ2V0O1xuICAgICAgICAgIHdoaWxlICghbWF0Y2hlcyh0LCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgIGlmICh0ID09PSB0aGlzIHx8IHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdCA9IHQucGFyZW50Tm9kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodCkge1xuICAgICAgICAgICAgb3JpZ2luYWxDYWxsYmFjay5jYWxsKHQsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgZmluYWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBpZiAocnVuT25jZSkge1xuICAgICAgICAgIGZpbmFsQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmVtb3ZlRXZlbnQodiwgZXZlbnROYW1lLCBmaW5hbENhbGxiYWNrKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdGVyRXZlbnQodiwgZXZlbnROYW1lLCBmaW5hbENhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvbmU6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRlbGVnYXRlLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMub24oZXZlbnROYW1lLCBkZWxlZ2F0ZSwgY2FsbGJhY2ssIHRydWUpO1xuICAgIH0sXG5cbiAgICByZWFkeTogb25SZWFkeSxcblxuICAgIC8qKlxuICAgICAqIE1vZGlmaWVkXG4gICAgICogVHJpZ2dlcnMgYnJvd3NlciBldmVudFxuICAgICAqIEBwYXJhbSBTdHJpbmcgZXZlbnROYW1lXG4gICAgICogQHBhcmFtIE9iamVjdCBkYXRhIC0gQWRkIHByb3BlcnRpZXMgdG8gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgaWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XG4gICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpO1xuICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICBldnQgPSB0aGlzLmV4dGVuZChldnQsIGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZW5jb2RlKG5hbWUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIFwiJlwiICsgZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoLyUyMC9nLCBcIitcIik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTZWxlY3RNdWx0aXBsZV8oZWwpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZWFjaChlbC5vcHRpb25zLCBmdW5jdGlvbiAobykge1xuICAgICAgaWYgKG8uc2VsZWN0ZWQpIHtcbiAgICAgICAgdmFsdWVzLnB1c2goby52YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPyB2YWx1ZXMgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0U2luZ2xlXyhlbCkge1xuICAgIHZhciBzZWxlY3RlZEluZGV4ID0gZWwuc2VsZWN0ZWRJbmRleDtcbiAgICByZXR1cm4gc2VsZWN0ZWRJbmRleCA+PSAwID8gZWwub3B0aW9uc1tzZWxlY3RlZEluZGV4XS52YWx1ZSA6IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYWx1ZShlbCkge1xuICAgIHZhciB0eXBlID0gZWwudHlwZTtcbiAgICBpZiAoIXR5cGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKHR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSBcInNlbGVjdC1vbmVcIjpcbiAgICAgICAgcmV0dXJuIGdldFNlbGVjdFNpbmdsZV8oZWwpO1xuICAgICAgY2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuICAgICAgICByZXR1cm4gZ2V0U2VsZWN0TXVsdGlwbGVfKGVsKTtcbiAgICAgIGNhc2UgXCJyYWRpb1wiOlxuICAgICAgICByZXR1cm4gZWwuY2hlY2tlZCA/IGVsLnZhbHVlIDogbnVsbDtcbiAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICByZXR1cm4gZWwuY2hlY2tlZCA/IGVsLnZhbHVlIDogbnVsbDtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBlbC52YWx1ZSA/IGVsLnZhbHVlIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF1ZXJ5ID0gXCJcIjtcblxuICAgICAgZWFjaCh0aGlzWzBdLmVsZW1lbnRzIHx8IHRoaXMsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAoZWwuZGlzYWJsZWQgfHwgZWwudGFnTmFtZSA9PT0gXCJGSUVMRFNFVFwiKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gZWwubmFtZTtcbiAgICAgICAgc3dpdGNoIChlbC50eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiZmlsZVwiOlxuICAgICAgICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgICAgIGNhc2UgXCJzdWJtaXRcIjpcbiAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwic2VsZWN0LW11bHRpcGxlXCI6XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gZ2V0VmFsdWUoZWwpO1xuICAgICAgICAgICAgaWYgKHZhbHVlcyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgKz0gZW5jb2RlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0VmFsdWUoZWwpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHF1ZXJ5ICs9IGVuY29kZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcXVlcnkuc3Vic3RyKDEpO1xuICAgIH0sXG5cbiAgICB2YWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXNbMF0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LnZhbHVlID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaW5zZXJ0RWxlbWVudChlbCwgY2hpbGQsIHByZXBlbmQpIHtcbiAgICBpZiAocHJlcGVuZCkge1xuICAgICAgdmFyIGZpcnN0ID0gZWwuY2hpbGROb2Rlc1swXTtcbiAgICAgIGVsLmluc2VydEJlZm9yZShjaGlsZCwgZmlyc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0Q29udGVudChwYXJlbnQsIGNoaWxkLCBwcmVwZW5kKSB7XG4gICAgdmFyIHN0ciA9IGlzU3RyaW5nKGNoaWxkKTtcblxuICAgIGlmICghc3RyICYmIGNoaWxkLmxlbmd0aCkge1xuICAgICAgZWFjaChjaGlsZCwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGluc2VydENvbnRlbnQocGFyZW50LCB2LCBwcmVwZW5kKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVhY2gocGFyZW50LCBzdHIgPyBmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYuaW5zZXJ0QWRqYWNlbnRIVE1MKHByZXBlbmQgPyBcImFmdGVyYmVnaW5cIiA6IFwiYmVmb3JlZW5kXCIsIGNoaWxkKTtcbiAgICB9IDogZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHJldHVybiBpbnNlcnRFbGVtZW50KHYsIGkgPT09IDAgPyBjaGlsZCA6IGNoaWxkLmNsb25lTm9kZSh0cnVlKSwgcHJlcGVuZCk7XG4gICAgfSk7XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIGFmdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGNhc2goc2VsZWN0b3IpLmluc2VydEFmdGVyKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFwcGVuZDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIGluc2VydENvbnRlbnQodGhpcywgY29udGVudCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYXBwZW5kVG86IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgIGluc2VydENvbnRlbnQoY2FzaChwYXJlbnQpLCB0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBiZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgY2FzaChzZWxlY3RvcikuaW5zZXJ0QmVmb3JlKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIGVtcHR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmh0bWwoXCJcIik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaHRtbDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIGlmIChjb250ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbMF0uaW5uZXJIVE1MO1xuICAgICAgfVxuICAgICAgdmFyIHNvdXJjZSA9IGNvbnRlbnQubm9kZVR5cGUgPyBjb250ZW50WzBdLm91dGVySFRNTCA6IGNvbnRlbnQ7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmlubmVySFRNTCA9IHNvdXJjZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbnNlcnRBZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBjYXNoKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZSxcbiAgICAgICAgICAgIHNpYmxpbmcgPSBlbC5uZXh0U2libGluZztcbiAgICAgICAgX3RoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoaSA9PT0gMCA/IHYgOiB2LmNsb25lTm9kZSh0cnVlKSwgc2libGluZyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgICBjYXNoKHNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgX3RoaXMyLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGkgPT09IDAgPyB2IDogdi5jbG9uZU5vZGUodHJ1ZSksIGVsKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBwcmVwZW5kOiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgaW5zZXJ0Q29udGVudCh0aGlzLCBjb250ZW50LCB0cnVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBwcmVwZW5kVG86IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgIGluc2VydENvbnRlbnQoY2FzaChwYXJlbnQpLCB0aGlzLCB0cnVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgaWYgKCEhdi5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcmV0dXJuIHYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHRleHQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIGRvY0VsID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICBmbi5leHRlbmQoe1xuICAgIHBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogZWwub2Zmc2V0TGVmdCxcbiAgICAgICAgdG9wOiBlbC5vZmZzZXRUb3BcbiAgICAgIH07XG4gICAgfSxcblxuICAgIG9mZnNldDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlY3QgPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsLmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWwuY2xpZW50TGVmdFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2FzaCh0aGlzWzBdLm9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZuLmV4dGVuZCh7XG4gICAgY2hpbGRyZW46IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGVsZW1zID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHB1c2guYXBwbHkoZWxlbXMsIGVsLmNoaWxkcmVuKTtcbiAgICAgIH0pO1xuICAgICAgZWxlbXMgPSB1bmlxdWUoZWxlbXMpO1xuXG4gICAgICByZXR1cm4gIXNlbGVjdG9yID8gZWxlbXMgOiBlbGVtcy5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXModiwgc2VsZWN0b3IpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCB0aGlzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGNhc2goKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXIoc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucGFyZW50KCkuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfSxcblxuICAgIGlzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWF0Y2ggPSBmYWxzZSxcbiAgICAgICAgICBjb21wYXJhdG9yID0gZ2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBtYXRjaCA9IGNvbXBhcmF0b3IoZWwsIHNlbGVjdG9yKTtcbiAgICAgICAgcmV0dXJuICFtYXRjaDtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3Rvci5ub2RlVHlwZSkge1xuICAgICAgICByZXR1cm4gY2FzaChzZWxlY3RvciAmJiB0aGlzLmhhcyhzZWxlY3RvcikubGVuZ3RoID8gc2VsZWN0b3IgOiBudWxsKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1zID0gW107XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHB1c2guYXBwbHkoZWxlbXMsIGZpbmQoc2VsZWN0b3IsIGVsKSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHVuaXF1ZShlbGVtcyk7XG4gICAgfSxcblxuICAgIGhhczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgY29tcGFyYXRvciA9IGlzU3RyaW5nKHNlbGVjdG9yKSA/IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gZmluZChzZWxlY3RvciwgZWwpLmxlbmd0aCAhPT0gMDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNvbnRhaW5zKHNlbGVjdG9yKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLmZpbHRlcihjb21wYXJhdG9yKTtcbiAgICB9LFxuXG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgIH0sXG5cbiAgICBub3Q6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBhcmF0b3IgPSBnZXRDb21wYXJlRnVuY3Rpb24oc2VsZWN0b3IpO1xuXG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiAhY29tcGFyYXRvcihlbCwgc2VsZWN0b3IpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIHBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgcmVzdWx0LnB1c2goaXRlbS5wYXJlbnROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB1bmlxdWUocmVzdWx0KTtcbiAgICB9LFxuXG4gICAgcGFyZW50czogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICB2YXIgbGFzdCxcbiAgICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGxhc3QgPSBpdGVtO1xuXG4gICAgICAgIHdoaWxlIChsYXN0ICYmIGxhc3QucGFyZW50Tm9kZSAmJiBsYXN0ICE9PSBkb2MuYm9keS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgbGFzdCA9IGxhc3QucGFyZW50Tm9kZTtcblxuICAgICAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgJiYgbWF0Y2hlcyhsYXN0LCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGxhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB1bmlxdWUocmVzdWx0KTtcbiAgICB9LFxuXG4gICAgcHJldjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICB9LFxuXG4gICAgc2libGluZ3M6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgICBlbCA9IHRoaXNbMF07XG5cbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gaSAhPT0gZWw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgcmV0dXJuIGNhc2g7XG59KTtcbjtcbnZhciBDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBHZW5lcmljIGNvbnN0cnVjdG9yIGZvciBhbGwgY29tcG9uZW50c1xuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cbiAgZnVuY3Rpb24gQ29tcG9uZW50KGNsYXNzRGVmLCBlbCwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb21wb25lbnQpO1xuXG4gICAgLy8gRGlzcGxheSBlcnJvciBpZiBlbCBpcyB2YWxpZCBIVE1MIEVsZW1lbnRcbiAgICBpZiAoIShlbCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKEVycm9yKGVsICsgJyBpcyBub3QgYW4gSFRNTCBFbGVtZW50JykpO1xuICAgIH1cblxuICAgIC8vIElmIGV4aXN0cywgZGVzdHJveSBhbmQgcmVpbml0aWFsaXplIGluIGNoaWxkXG4gICAgdmFyIGlucyA9IGNsYXNzRGVmLmdldEluc3RhbmNlKGVsKTtcbiAgICBpZiAoISFpbnMpIHtcbiAgICAgIGlucy5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IGVsO1xuICAgIHRoaXMuJGVsID0gY2FzaChlbCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge2NsYXNzfSBjbGFzc0RlZlxuICAgKiBAcGFyYW0ge0VsZW1lbnQgfCBOb2RlTGlzdCB8IGpRdWVyeX0gZWxzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKENvbXBvbmVudCwgbnVsbCwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGNsYXNzRGVmLCBlbHMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBpbnN0YW5jZXMgPSBudWxsO1xuICAgICAgaWYgKGVscyBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgaW5zdGFuY2VzID0gbmV3IGNsYXNzRGVmKGVscywgb3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKCEhZWxzICYmIChlbHMuanF1ZXJ5IHx8IGVscy5jYXNoIHx8IGVscyBpbnN0YW5jZW9mIE5vZGVMaXN0KSkge1xuICAgICAgICB2YXIgaW5zdGFuY2VzQXJyID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaW5zdGFuY2VzQXJyLnB1c2gobmV3IGNsYXNzRGVmKGVsc1tpXSwgb3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlcyA9IGluc3RhbmNlc0FycjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluc3RhbmNlcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufSgpO1xuXG47IC8vIFJlcXVpcmVkIGZvciBNZXRlb3IgcGFja2FnZSwgdGhlIHVzZSBvZiB3aW5kb3cgcHJldmVudHMgZXhwb3J0IGJ5IE1ldGVvclxuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgaWYgKHdpbmRvdy5QYWNrYWdlKSB7XG4gICAgTSA9IHt9O1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5NID0ge307XG4gIH1cblxuICAvLyBDaGVjayBmb3IgalF1ZXJ5XG4gIE0ualF1ZXJ5TG9hZGVkID0gISF3aW5kb3cualF1ZXJ5O1xufSkod2luZG93KTtcblxuLy8gQU1EXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gIGRlZmluZSgnTScsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE07XG4gIH0pO1xuXG4gIC8vIENvbW1vbiBKU1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWV4cG9ydHMubm9kZVR5cGUpIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBNO1xuICB9XG4gIGV4cG9ydHMuZGVmYXVsdCA9IE07XG59XG5cbk0udmVyc2lvbiA9ICcxLjAuMCc7XG5cbk0ua2V5cyA9IHtcbiAgVEFCOiA5LFxuICBFTlRFUjogMTMsXG4gIEVTQzogMjcsXG4gIEFSUk9XX1VQOiAzOCxcbiAgQVJST1dfRE9XTjogNDBcbn07XG5cbi8qKlxuICogVGFiUHJlc3MgS2V5ZG93biBoYW5kbGVyXG4gKi9cbk0udGFiUHJlc3NlZCA9IGZhbHNlO1xuTS5rZXlEb3duID0gZmFsc2U7XG52YXIgZG9jSGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gIE0ua2V5RG93biA9IHRydWU7XG4gIGlmIChlLndoaWNoID09PSBNLmtleXMuVEFCIHx8IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19ET1dOIHx8IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19VUCkge1xuICAgIE0udGFiUHJlc3NlZCA9IHRydWU7XG4gIH1cbn07XG52YXIgZG9jSGFuZGxlS2V5dXAgPSBmdW5jdGlvbiAoZSkge1xuICBNLmtleURvd24gPSBmYWxzZTtcbiAgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5UQUIgfHwgZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX0RPV04gfHwgZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX1VQKSB7XG4gICAgTS50YWJQcmVzc2VkID0gZmFsc2U7XG4gIH1cbn07XG52YXIgZG9jSGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICBpZiAoTS5rZXlEb3duKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1mb2N1c2VkJyk7XG4gIH1cbn07XG52YXIgZG9jSGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChlKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgna2V5Ym9hcmQtZm9jdXNlZCcpO1xufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBkb2NIYW5kbGVLZXlkb3duLCB0cnVlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZG9jSGFuZGxlS2V5dXAsIHRydWUpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBkb2NIYW5kbGVGb2N1cywgdHJ1ZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZG9jSGFuZGxlQmx1ciwgdHJ1ZSk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBqUXVlcnkgd3JhcHBlciBmb3IgcGx1Z2luXG4gKiBAcGFyYW0ge0NsYXNzfSBwbHVnaW4gIGphdmFzY3JpcHQgY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBwbHVnaW5OYW1lICBqUXVlcnkgcGx1Z2luIG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc1JlZiAgQ2xhc3MgcmVmZXJlbmNlIG5hbWVcbiAqL1xuTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlciA9IGZ1bmN0aW9uIChwbHVnaW4sIHBsdWdpbk5hbWUsIGNsYXNzUmVmKSB7XG4gIGpRdWVyeS5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChtZXRob2RPck9wdGlvbnMpIHtcbiAgICAvLyBDYWxsIHBsdWdpbiBtZXRob2QgaWYgdmFsaWQgbWV0aG9kIG5hbWUgaXMgcGFzc2VkIGluXG4gICAgaWYgKHBsdWdpbi5wcm90b3R5cGVbbWV0aG9kT3JPcHRpb25zXSkge1xuICAgICAgdmFyIHBhcmFtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgIC8vIEdldHRlciBtZXRob2RzXG4gICAgICBpZiAobWV0aG9kT3JPcHRpb25zLnNsaWNlKDAsIDMpID09PSAnZ2V0Jykge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmZpcnN0KClbMF1bY2xhc3NSZWZdO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kT3JPcHRpb25zXS5hcHBseShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICAgIH1cblxuICAgICAgLy8gVm9pZCBtZXRob2RzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpc1tjbGFzc1JlZl07XG4gICAgICAgIGluc3RhbmNlW21ldGhvZE9yT3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSBwbHVnaW4gaWYgb3B0aW9ucyBvciBubyBhcmd1bWVudCBpcyBwYXNzZWQgaW5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtZXRob2RPck9wdGlvbnMgPT09ICdvYmplY3QnIHx8ICFtZXRob2RPck9wdGlvbnMpIHtcbiAgICAgIHBsdWdpbi5pbml0KHRoaXMsIGFyZ3VtZW50c1swXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gZXJyb3IgaWYgYW4gdW5yZWNvZ25pemVkICBtZXRob2QgbmFtZSBpcyBwYXNzZWQgaW5cbiAgICBqUXVlcnkuZXJyb3IoXCJNZXRob2QgXCIgKyBtZXRob2RPck9wdGlvbnMgKyBcIiBkb2VzIG5vdCBleGlzdCBvbiBqUXVlcnkuXCIgKyBwbHVnaW5OYW1lKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQXV0b21hdGljYWxseSBpbml0aWFsaXplIGNvbXBvbmVudHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dCAgRE9NIEVsZW1lbnQgdG8gc2VhcmNoIHdpdGhpbiBmb3IgY29tcG9uZW50c1xuICovXG5NLkF1dG9Jbml0ID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgLy8gVXNlIGRvY3VtZW50LmJvZHkgaWYgbm8gY29udGV4dCBpcyBnaXZlblxuICB2YXIgcm9vdCA9ICEhY29udGV4dCA/IGNvbnRleHQgOiBkb2N1bWVudC5ib2R5O1xuXG4gIHZhciByZWdpc3RyeSA9IHtcbiAgICBBdXRvY29tcGxldGU6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLmF1dG9jb21wbGV0ZTpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIENhcm91c2VsOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIENoaXBzOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGlwczpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIENvbGxhcHNpYmxlOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsYXBzaWJsZTpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIERhdGVwaWNrZXI6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLmRhdGVwaWNrZXI6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBEcm9wZG93bjogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tdHJpZ2dlcjpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIE1hdGVyaWFsYm94OiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXRlcmlhbGJveGVkOm5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgTW9kYWw6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsOm5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgUGFyYWxsYXg6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnBhcmFsbGF4Om5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgUHVzaHBpbjogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcucHVzaHBpbjpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFNjcm9sbFNweTogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Nyb2xsc3B5Om5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgRm9ybVNlbGVjdDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3Q6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBTaWRlbmF2OiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlbmF2Om5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgVGFiczogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiczpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFRhcFRhcmdldDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFwLXRhcmdldDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFRpbWVwaWNrZXI6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVwaWNrZXI6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBUb29sdGlwOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b29sdGlwcGVkOm5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgRmxvYXRpbmdBY3Rpb25CdXR0b246IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLmZpeGVkLWFjdGlvbi1idG46bm90KC5uby1hdXRvaW5pdCknKVxuICB9O1xuXG4gIGZvciAodmFyIHBsdWdpbk5hbWUgaW4gcmVnaXN0cnkpIHtcbiAgICB2YXIgcGx1Z2luID0gTVtwbHVnaW5OYW1lXTtcbiAgICBwbHVnaW4uaW5pdChyZWdpc3RyeVtwbHVnaW5OYW1lXSk7XG4gIH1cbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYXBwcm94aW1hdGVkIHNlbGVjdG9yIHN0cmluZyBmb3IgYSBqUXVlcnkgb2JqZWN0XG4gKiBAcGFyYW0ge2pRdWVyeX0gb2JqICBqUXVlcnkgb2JqZWN0IHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTS5vYmplY3RTZWxlY3RvclN0cmluZyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgdmFyIHRhZ1N0ciA9IG9iai5wcm9wKCd0YWdOYW1lJykgfHwgJyc7XG4gIHZhciBpZFN0ciA9IG9iai5hdHRyKCdpZCcpIHx8ICcnO1xuICB2YXIgY2xhc3NTdHIgPSBvYmouYXR0cignY2xhc3MnKSB8fCAnJztcbiAgcmV0dXJuICh0YWdTdHIgKyBpZFN0ciArIGNsYXNzU3RyKS5yZXBsYWNlKC9cXHMvZywgJycpO1xufTtcblxuLy8gVW5pcXVlIFJhbmRvbSBJRFxuTS5ndWlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICBTdHJpbmcgcmV0dXJuZWQgZnJvbSB0aGlzLmhhc2hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk0uZXNjYXBlSGFzaCA9IGZ1bmN0aW9uIChoYXNoKSB7XG4gIHJldHVybiBoYXNoLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfCx8PXxcXC8pL2csICdcXFxcJDEnKTtcbn07XG5cbk0uZWxlbWVudE9yUGFyZW50SXNGaXhlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xuICB2YXIgaXNGaXhlZCA9IGZhbHNlO1xuICAkY2hlY2tFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5jc3MoJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcbiAgICAgIGlzRml4ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBpc0ZpeGVkO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFZGdlc1xuICogQHByb3BlcnR5IHtCb29sZWFufSB0b3AgIElmIHRoZSB0b3AgZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcmlnaHQgIElmIHRoZSByaWdodCBlZGdlIHdhcyBleGNlZWRlZFxuICogQHByb3BlcnR5IHtCb29sZWFufSBib3R0b20gIElmIHRoZSBib3R0b20gZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbGVmdCAgSWYgdGhlIGxlZnQgZWRnZSB3YXMgZXhjZWVkZWRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kaW5nXG4gKiBAcHJvcGVydHkge051bWJlcn0gbGVmdCAgbGVmdCBvZmZzZXQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcCAgdG9wIG9mZnNldCBjb29yZGluYXRlXG4gKiBAcHJvcGVydHkge051bWJlcn0gd2lkdGhcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xuXG4vKipcbiAqIEVzY2FwZXMgaGFzaCBmcm9tIHNwZWNpYWwgY2hhcmFjdGVyc1xuICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXIgIENvbnRhaW5lciBlbGVtZW50IHRoYXQgYWN0cyBhcyB0aGUgYm91bmRhcnlcbiAqIEBwYXJhbSB7Qm91bmRpbmd9IGJvdW5kaW5nICBlbGVtZW50IGJvdW5kaW5nIHRoYXQgaXMgYmVpbmcgY2hlY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCAgb2Zmc2V0IGZyb20gZWRnZSB0aGF0IGNvdW50cyBhcyBleGNlZWRpbmdcbiAqIEByZXR1cm5zIHtFZGdlc31cbiAqL1xuTS5jaGVja1dpdGhpbkNvbnRhaW5lciA9IGZ1bmN0aW9uIChjb250YWluZXIsIGJvdW5kaW5nLCBvZmZzZXQpIHtcbiAgdmFyIGVkZ2VzID0ge1xuICAgIHRvcDogZmFsc2UsXG4gICAgcmlnaHQ6IGZhbHNlLFxuICAgIGJvdHRvbTogZmFsc2UsXG4gICAgbGVmdDogZmFsc2VcbiAgfTtcblxuICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgLy8gSWYgYm9keSBlbGVtZW50IGlzIHNtYWxsZXIgdGhhbiB2aWV3cG9ydCwgdXNlIHZpZXdwb3J0IGhlaWdodCBpbnN0ZWFkLlxuICB2YXIgY29udGFpbmVyQm90dG9tID0gY29udGFpbmVyID09PSBkb2N1bWVudC5ib2R5ID8gTWF0aC5tYXgoY29udGFpbmVyUmVjdC5ib3R0b20sIHdpbmRvdy5pbm5lckhlaWdodCkgOiBjb250YWluZXJSZWN0LmJvdHRvbTtcblxuICB2YXIgc2Nyb2xsTGVmdCA9IGNvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICB2YXIgc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcDtcblxuICB2YXIgc2Nyb2xsZWRYID0gYm91bmRpbmcubGVmdCAtIHNjcm9sbExlZnQ7XG4gIHZhciBzY3JvbGxlZFkgPSBib3VuZGluZy50b3AgLSBzY3JvbGxUb3A7XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbnRhaW5lciBhbmQgdmlld3BvcnQgZm9yIGVhY2ggZWRnZVxuICBpZiAoc2Nyb2xsZWRYIDwgY29udGFpbmVyUmVjdC5sZWZ0ICsgb2Zmc2V0IHx8IHNjcm9sbGVkWCA8IG9mZnNldCkge1xuICAgIGVkZ2VzLmxlZnQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHNjcm9sbGVkWCArIGJvdW5kaW5nLndpZHRoID4gY29udGFpbmVyUmVjdC5yaWdodCAtIG9mZnNldCB8fCBzY3JvbGxlZFggKyBib3VuZGluZy53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoIC0gb2Zmc2V0KSB7XG4gICAgZWRnZXMucmlnaHQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHNjcm9sbGVkWSA8IGNvbnRhaW5lclJlY3QudG9wICsgb2Zmc2V0IHx8IHNjcm9sbGVkWSA8IG9mZnNldCkge1xuICAgIGVkZ2VzLnRvcCA9IHRydWU7XG4gIH1cblxuICBpZiAoc2Nyb2xsZWRZICsgYm91bmRpbmcuaGVpZ2h0ID4gY29udGFpbmVyQm90dG9tIC0gb2Zmc2V0IHx8IHNjcm9sbGVkWSArIGJvdW5kaW5nLmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCAtIG9mZnNldCkge1xuICAgIGVkZ2VzLmJvdHRvbSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZWRnZXM7XG59O1xuXG5NLmNoZWNrUG9zc2libGVBbGlnbm1lbnRzID0gZnVuY3Rpb24gKGVsLCBjb250YWluZXIsIGJvdW5kaW5nLCBvZmZzZXQpIHtcbiAgdmFyIGNhbkFsaWduID0ge1xuICAgIHRvcDogdHJ1ZSxcbiAgICByaWdodDogdHJ1ZSxcbiAgICBib3R0b206IHRydWUsXG4gICAgbGVmdDogdHJ1ZSxcbiAgICBzcGFjZU9uVG9wOiBudWxsLFxuICAgIHNwYWNlT25SaWdodDogbnVsbCxcbiAgICBzcGFjZU9uQm90dG9tOiBudWxsLFxuICAgIHNwYWNlT25MZWZ0OiBudWxsXG4gIH07XG5cbiAgdmFyIGNvbnRhaW5lckFsbG93c092ZXJmbG93ID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpLm92ZXJmbG93ID09PSAndmlzaWJsZSc7XG4gIHZhciBjb250YWluZXJSZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gTWF0aC5taW4oY29udGFpbmVyUmVjdC5oZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIHZhciBjb250YWluZXJXaWR0aCA9IE1hdGgubWluKGNvbnRhaW5lclJlY3Qud2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgdmFyIGVsT2Zmc2V0UmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIHZhciBzY3JvbGxMZWZ0ID0gY29udGFpbmVyLnNjcm9sbExlZnQ7XG4gIHZhciBzY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xuXG4gIHZhciBzY3JvbGxlZFggPSBib3VuZGluZy5sZWZ0IC0gc2Nyb2xsTGVmdDtcbiAgdmFyIHNjcm9sbGVkWVRvcEVkZ2UgPSBib3VuZGluZy50b3AgLSBzY3JvbGxUb3A7XG4gIHZhciBzY3JvbGxlZFlCb3R0b21FZGdlID0gYm91bmRpbmcudG9wICsgZWxPZmZzZXRSZWN0LmhlaWdodCAtIHNjcm9sbFRvcDtcblxuICAvLyBDaGVjayBmb3IgY29udGFpbmVyIGFuZCB2aWV3cG9ydCBmb3IgbGVmdFxuICBjYW5BbGlnbi5zcGFjZU9uUmlnaHQgPSAhY29udGFpbmVyQWxsb3dzT3ZlcmZsb3cgPyBjb250YWluZXJXaWR0aCAtIChzY3JvbGxlZFggKyBib3VuZGluZy53aWR0aCkgOiB3aW5kb3cuaW5uZXJXaWR0aCAtIChlbE9mZnNldFJlY3QubGVmdCArIGJvdW5kaW5nLndpZHRoKTtcbiAgaWYgKGNhbkFsaWduLnNwYWNlT25SaWdodCA8IDApIHtcbiAgICBjYW5BbGlnbi5sZWZ0ID0gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBmb3IgY29udGFpbmVyIGFuZCB2aWV3cG9ydCBmb3IgUmlnaHRcbiAgY2FuQWxpZ24uc3BhY2VPbkxlZnQgPSAhY29udGFpbmVyQWxsb3dzT3ZlcmZsb3cgPyBzY3JvbGxlZFggLSBib3VuZGluZy53aWR0aCArIGVsT2Zmc2V0UmVjdC53aWR0aCA6IGVsT2Zmc2V0UmVjdC5yaWdodCAtIGJvdW5kaW5nLndpZHRoO1xuICBpZiAoY2FuQWxpZ24uc3BhY2VPbkxlZnQgPCAwKSB7XG4gICAgY2FuQWxpZ24ucmlnaHQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBjb250YWluZXIgYW5kIHZpZXdwb3J0IGZvciBUb3BcbiAgY2FuQWxpZ24uc3BhY2VPbkJvdHRvbSA9ICFjb250YWluZXJBbGxvd3NPdmVyZmxvdyA/IGNvbnRhaW5lckhlaWdodCAtIChzY3JvbGxlZFlUb3BFZGdlICsgYm91bmRpbmcuaGVpZ2h0ICsgb2Zmc2V0KSA6IHdpbmRvdy5pbm5lckhlaWdodCAtIChlbE9mZnNldFJlY3QudG9wICsgYm91bmRpbmcuaGVpZ2h0ICsgb2Zmc2V0KTtcbiAgaWYgKGNhbkFsaWduLnNwYWNlT25Cb3R0b20gPCAwKSB7XG4gICAgY2FuQWxpZ24udG9wID0gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBmb3IgY29udGFpbmVyIGFuZCB2aWV3cG9ydCBmb3IgQm90dG9tXG4gIGNhbkFsaWduLnNwYWNlT25Ub3AgPSAhY29udGFpbmVyQWxsb3dzT3ZlcmZsb3cgPyBzY3JvbGxlZFlCb3R0b21FZGdlIC0gKGJvdW5kaW5nLmhlaWdodCAtIG9mZnNldCkgOiBlbE9mZnNldFJlY3QuYm90dG9tIC0gKGJvdW5kaW5nLmhlaWdodCArIG9mZnNldCk7XG4gIGlmIChjYW5BbGlnbi5zcGFjZU9uVG9wIDwgMCkge1xuICAgIGNhbkFsaWduLmJvdHRvbSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhbkFsaWduO1xufTtcblxuTS5nZXRPdmVyZmxvd1BhcmVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChlbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkub3ZlcmZsb3cgIT09ICd2aXNpYmxlJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIE0uZ2V0T3ZlcmZsb3dQYXJlbnQoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbn07XG5cbi8qKlxuICogR2V0cyBpZCBvZiBjb21wb25lbnQgZnJvbSBhIHRyaWdnZXJcbiAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlciAgdHJpZ2dlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuTS5nZXRJZEZyb21UcmlnZ2VyID0gZnVuY3Rpb24gKHRyaWdnZXIpIHtcbiAgdmFyIGlkID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gIGlmICghaWQpIHtcbiAgICBpZCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgaWYgKGlkKSB7XG4gICAgICBpZCA9IGlkLnNsaWNlKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCA9ICcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaWQ7XG59O1xuXG4vKipcbiAqIE11bHRpIGJyb3dzZXIgc3VwcG9ydCBmb3IgZG9jdW1lbnQgc2Nyb2xsIHRvcFxuICogQHJldHVybnMge051bWJlcn1cbiAqL1xuTS5nZXREb2N1bWVudFNjcm9sbFRvcCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDA7XG59O1xuXG4vKipcbiAqIE11bHRpIGJyb3dzZXIgc3VwcG9ydCBmb3IgZG9jdW1lbnQgc2Nyb2xsIGxlZnRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk0uZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwO1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBFZGdlc1xuICogQHByb3BlcnR5IHtCb29sZWFufSB0b3AgIElmIHRoZSB0b3AgZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gcmlnaHQgIElmIHRoZSByaWdodCBlZGdlIHdhcyBleGNlZWRlZFxuICogQHByb3BlcnR5IHtCb29sZWFufSBib3R0b20gIElmIHRoZSBib3R0b20gZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbGVmdCAgSWYgdGhlIGxlZnQgZWRnZSB3YXMgZXhjZWVkZWRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEJvdW5kaW5nXG4gKiBAcHJvcGVydHkge051bWJlcn0gbGVmdCAgbGVmdCBvZmZzZXQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHRvcCAgdG9wIG9mZnNldCBjb29yZGluYXRlXG4gKiBAcHJvcGVydHkge051bWJlcn0gd2lkdGhcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBoZWlnaHRcbiAqL1xuXG4vKipcbiAqIEdldCB0aW1lIGluIG1zXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAdHlwZSB7ZnVuY3Rpb259XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBnZXRUaW1lID0gRGF0ZS5ub3cgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiwgdGhhdCwgd2hlbiBpbnZva2VkLCB3aWxsIG9ubHkgYmUgdHJpZ2dlcmVkIGF0IG1vc3Qgb25jZVxuICogZHVyaW5nIGEgZ2l2ZW4gd2luZG93IG9mIHRpbWUuIE5vcm1hbGx5LCB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHdpbGwgcnVuXG4gKiBhcyBtdWNoIGFzIGl0IGNhbiwgd2l0aG91dCBldmVyIGdvaW5nIG1vcmUgdGhhbiBvbmNlIHBlciBgd2FpdGAgZHVyYXRpb247XG4gKiBidXQgaWYgeW91J2QgbGlrZSB0byBkaXNhYmxlIHRoZSBleGVjdXRpb24gb24gdGhlIGxlYWRpbmcgZWRnZSwgcGFzc1xuICogYHtsZWFkaW5nOiBmYWxzZX1gLiBUbyBkaXNhYmxlIGV4ZWN1dGlvbiBvbiB0aGUgdHJhaWxpbmcgZWRnZSwgZGl0dG8uXG4gKiBAbGljZW5zZSBodHRwczovL3Jhdy5naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL21hc3Rlci9MSUNFTlNFXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdFxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbk0udGhyb3R0bGUgPSBmdW5jdGlvbiAoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgY29udGV4dCA9IHZvaWQgMCxcbiAgICAgIGFyZ3MgPSB2b2lkIDAsXG4gICAgICByZXN1bHQgPSB2b2lkIDA7XG4gIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgdmFyIHByZXZpb3VzID0gMDtcbiAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IHt9KTtcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBnZXRUaW1lKCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdyA9IGdldFRpbWUoKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIHZhciByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBwcmV2aW91cyA9IG5vdztcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuOyAvKlxuICB2Mi4yLjBcbiAgMjAxNyBKdWxpYW4gR2FybmllclxuICBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgKi9cbnZhciAkanNjb21wID0geyBzY29wZToge30gfTskanNjb21wLmRlZmluZVByb3BlcnR5ID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIChlLCByLCBwKSB7XG4gIGlmIChwLmdldCB8fCBwLnNldCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMgYW5kIHNldHRlcnMuXCIpO2UgIT0gQXJyYXkucHJvdG90eXBlICYmIGUgIT0gT2JqZWN0LnByb3RvdHlwZSAmJiAoZVtyXSA9IHAudmFsdWUpO1xufTskanNjb21wLmdldEdsb2JhbCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93ID09PSBlID8gZSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGdsb2JhbCAmJiBudWxsICE9IGdsb2JhbCA/IGdsb2JhbCA6IGU7XG59OyRqc2NvbXAuZ2xvYmFsID0gJGpzY29tcC5nZXRHbG9iYWwodGhpcyk7JGpzY29tcC5TWU1CT0xfUFJFRklYID0gXCJqc2NvbXBfc3ltYm9sX1wiO1xuJGpzY29tcC5pbml0U3ltYm9sID0gZnVuY3Rpb24gKCkge1xuICAkanNjb21wLmluaXRTeW1ib2wgPSBmdW5jdGlvbiAoKSB7fTskanNjb21wLmdsb2JhbC5TeW1ib2wgfHwgKCRqc2NvbXAuZ2xvYmFsLlN5bWJvbCA9ICRqc2NvbXAuU3ltYm9sKTtcbn07JGpzY29tcC5zeW1ib2xDb3VudGVyXyA9IDA7JGpzY29tcC5TeW1ib2wgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gJGpzY29tcC5TWU1CT0xfUFJFRklYICsgKGUgfHwgXCJcIikgKyAkanNjb21wLnN5bWJvbENvdW50ZXJfKys7XG59O1xuJGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICRqc2NvbXAuaW5pdFN5bWJvbCgpO3ZhciBlID0gJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yO2UgfHwgKGUgPSAkanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3IgPSAkanNjb21wLmdsb2JhbC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiICE9IHR5cGVvZiBBcnJheS5wcm90b3R5cGVbZV0gJiYgJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsIGUsIHsgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuICRqc2NvbXAuYXJyYXlJdGVyYXRvcih0aGlzKTtcbiAgICB9IH0pOyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yID0gZnVuY3Rpb24gKCkge307XG59OyRqc2NvbXAuYXJyYXlJdGVyYXRvciA9IGZ1bmN0aW9uIChlKSB7XG4gIHZhciByID0gMDtyZXR1cm4gJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHIgPCBlLmxlbmd0aCA/IHsgZG9uZTogITEsIHZhbHVlOiBlW3IrK10gfSA6IHsgZG9uZTogITAgfTtcbiAgfSk7XG59O1xuJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZSA9IGZ1bmN0aW9uIChlKSB7XG4gICRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSA9IHsgbmV4dDogZSB9O2VbJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtyZXR1cm4gZTtcbn07JGpzY29tcC5hcnJheSA9ICRqc2NvbXAuYXJyYXkgfHwge307JGpzY29tcC5pdGVyYXRvckZyb21BcnJheSA9IGZ1bmN0aW9uIChlLCByKSB7XG4gICRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSBpbnN0YW5jZW9mIFN0cmluZyAmJiAoZSArPSBcIlwiKTt2YXIgcCA9IDAsXG4gICAgICBtID0geyBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocCA8IGUubGVuZ3RoKSB7XG4gICAgICAgIHZhciB1ID0gcCsrO3JldHVybiB7IHZhbHVlOiByKHUsIGVbdV0pLCBkb25lOiAhMSB9O1xuICAgICAgfW0ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgZG9uZTogITAsIHZhbHVlOiB2b2lkIDAgfTtcbiAgICAgIH07cmV0dXJuIG0ubmV4dCgpO1xuICAgIH0gfTttW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG07XG4gIH07cmV0dXJuIG07XG59O1xuJGpzY29tcC5wb2x5ZmlsbCA9IGZ1bmN0aW9uIChlLCByLCBwLCBtKSB7XG4gIGlmIChyKSB7XG4gICAgcCA9ICRqc2NvbXAuZ2xvYmFsO2UgPSBlLnNwbGl0KFwiLlwiKTtmb3IgKG0gPSAwOyBtIDwgZS5sZW5ndGggLSAxOyBtKyspIHtcbiAgICAgIHZhciB1ID0gZVttXTt1IGluIHAgfHwgKHBbdV0gPSB7fSk7cCA9IHBbdV07XG4gICAgfWUgPSBlW2UubGVuZ3RoIC0gMV07bSA9IHBbZV07ciA9IHIobSk7ciAhPSBtICYmIG51bGwgIT0gciAmJiAkanNjb21wLmRlZmluZVByb3BlcnR5KHAsIGUsIHsgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogciB9KTtcbiAgfVxufTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmtleXNcIiwgZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUgPyBlIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkanNjb21wLml0ZXJhdG9yRnJvbUFycmF5KHRoaXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZTtcbiAgICB9KTtcbiAgfTtcbn0sIFwiZXM2LWltcGxcIiwgXCJlczNcIik7dmFyICRqc2NvbXAkdGhpcyA9IHRoaXM7XG4oZnVuY3Rpb24gKHIpIHtcbiAgTS5hbmltZSA9IHIoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZShhKSB7XG4gICAgaWYgKCFoLmNvbChhKSkgdHJ5IHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpO1xuICAgIH0gY2F0Y2ggKGMpIHt9XG4gIH1mdW5jdGlvbiByKGEsIGMpIHtcbiAgICBmb3IgKHZhciBkID0gYS5sZW5ndGgsIGIgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBhcmd1bWVudHNbMV0gOiB2b2lkIDAsIGYgPSBbXSwgbiA9IDA7IG4gPCBkOyBuKyspIHtcbiAgICAgIGlmIChuIGluIGEpIHtcbiAgICAgICAgdmFyIGsgPSBhW25dO2MuY2FsbChiLCBrLCBuLCBhKSAmJiBmLnB1c2goayk7XG4gICAgICB9XG4gICAgfXJldHVybiBmO1xuICB9ZnVuY3Rpb24gcChhKSB7XG4gICAgcmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uIChhLCBkKSB7XG4gICAgICByZXR1cm4gYS5jb25jYXQoaC5hcnIoZCkgPyBwKGQpIDogZCk7XG4gICAgfSwgW10pO1xuICB9ZnVuY3Rpb24gbShhKSB7XG4gICAgaWYgKGguYXJyKGEpKSByZXR1cm4gYTtcbiAgICBoLnN0cihhKSAmJiAoYSA9IGUoYSkgfHwgYSk7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBhIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gPyBbXS5zbGljZS5jYWxsKGEpIDogW2FdO1xuICB9ZnVuY3Rpb24gdShhLCBjKSB7XG4gICAgcmV0dXJuIGEuc29tZShmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGEgPT09IGM7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBDKGEpIHtcbiAgICB2YXIgYyA9IHt9LFxuICAgICAgICBkO2ZvciAoZCBpbiBhKSB7XG4gICAgICBjW2RdID0gYVtkXTtcbiAgICB9cmV0dXJuIGM7XG4gIH1mdW5jdGlvbiBEKGEsIGMpIHtcbiAgICB2YXIgZCA9IEMoYSksXG4gICAgICAgIGI7Zm9yIChiIGluIGEpIHtcbiAgICAgIGRbYl0gPSBjLmhhc093blByb3BlcnR5KGIpID8gY1tiXSA6IGFbYl07XG4gICAgfXJldHVybiBkO1xuICB9ZnVuY3Rpb24geihhLCBjKSB7XG4gICAgdmFyIGQgPSBDKGEpLFxuICAgICAgICBiO2ZvciAoYiBpbiBjKSB7XG4gICAgICBkW2JdID0gaC51bmQoYVtiXSkgPyBjW2JdIDogYVtiXTtcbiAgICB9cmV0dXJuIGQ7XG4gIH1mdW5jdGlvbiBUKGEpIHtcbiAgICBhID0gYS5yZXBsYWNlKC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksIGZ1bmN0aW9uIChhLCBjLCBkLCBrKSB7XG4gICAgICByZXR1cm4gYyArIGMgKyBkICsgZCArIGsgKyBrO1xuICAgIH0pO3ZhciBjID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGEpO1xuICAgIGEgPSBwYXJzZUludChjWzFdLCAxNik7dmFyIGQgPSBwYXJzZUludChjWzJdLCAxNiksXG4gICAgICAgIGMgPSBwYXJzZUludChjWzNdLCAxNik7cmV0dXJuIFwicmdiYShcIiArIGEgKyBcIixcIiArIGQgKyBcIixcIiArIGMgKyBcIiwxKVwiO1xuICB9ZnVuY3Rpb24gVShhKSB7XG4gICAgZnVuY3Rpb24gYyhhLCBjLCBiKSB7XG4gICAgICAwID4gYiAmJiAoYiArPSAxKTsxIDwgYiAmJiAtLWI7cmV0dXJuIGIgPCAxIC8gNiA/IGEgKyA2ICogKGMgLSBhKSAqIGIgOiAuNSA+IGIgPyBjIDogYiA8IDIgLyAzID8gYSArIChjIC0gYSkgKiAoMiAvIDMgLSBiKSAqIDYgOiBhO1xuICAgIH12YXIgZCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGEpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGEpO2EgPSBwYXJzZUludChkWzFdKSAvIDM2MDt2YXIgYiA9IHBhcnNlSW50KGRbMl0pIC8gMTAwLFxuICAgICAgICBmID0gcGFyc2VJbnQoZFszXSkgLyAxMDAsXG4gICAgICAgIGQgPSBkWzRdIHx8IDE7aWYgKDAgPT0gYikgZiA9IGIgPSBhID0gZjtlbHNlIHtcbiAgICAgIHZhciBuID0gLjUgPiBmID8gZiAqICgxICsgYikgOiBmICsgYiAtIGYgKiBiLFxuICAgICAgICAgIGsgPSAyICogZiAtIG4sXG4gICAgICAgICAgZiA9IGMoaywgbiwgYSArIDEgLyAzKSxcbiAgICAgICAgICBiID0gYyhrLCBuLCBhKTthID0gYyhrLCBuLCBhIC0gMSAvIDMpO1xuICAgIH1yZXR1cm4gXCJyZ2JhKFwiICsgMjU1ICogZiArIFwiLFwiICsgMjU1ICogYiArIFwiLFwiICsgMjU1ICogYSArIFwiLFwiICsgZCArIFwiKVwiO1xuICB9ZnVuY3Rpb24geShhKSB7XG4gICAgaWYgKGEgPSAvKFtcXCtcXC1dP1swLTkjXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWMoYSkpIHJldHVybiBhWzJdO1xuICB9ZnVuY3Rpb24gVihhKSB7XG4gICAgaWYgKC0xIDwgYS5pbmRleE9mKFwidHJhbnNsYXRlXCIpIHx8IFwicGVyc3BlY3RpdmVcIiA9PT0gYSkgcmV0dXJuIFwicHhcIjtpZiAoLTEgPCBhLmluZGV4T2YoXCJyb3RhdGVcIikgfHwgLTEgPCBhLmluZGV4T2YoXCJza2V3XCIpKSByZXR1cm4gXCJkZWdcIjtcbiAgfWZ1bmN0aW9uIEkoYSwgYykge1xuICAgIHJldHVybiBoLmZuYyhhKSA/IGEoYy50YXJnZXQsIGMuaWQsIGMudG90YWwpIDogYTtcbiAgfWZ1bmN0aW9uIEUoYSwgYykge1xuICAgIGlmIChjIGluIGEuc3R5bGUpIHJldHVybiBnZXRDb21wdXRlZFN0eWxlKGEpLmdldFByb3BlcnR5VmFsdWUoYy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCkpIHx8IFwiMFwiO1xuICB9ZnVuY3Rpb24gSihhLCBjKSB7XG4gICAgaWYgKGguZG9tKGEpICYmIHUoVywgYykpIHJldHVybiBcInRyYW5zZm9ybVwiO2lmIChoLmRvbShhKSAmJiAoYS5nZXRBdHRyaWJ1dGUoYykgfHwgaC5zdmcoYSkgJiYgYVtjXSkpIHJldHVybiBcImF0dHJpYnV0ZVwiO2lmIChoLmRvbShhKSAmJiBcInRyYW5zZm9ybVwiICE9PSBjICYmIEUoYSwgYykpIHJldHVybiBcImNzc1wiO2lmIChudWxsICE9IGFbY10pIHJldHVybiBcIm9iamVjdFwiO1xuICB9ZnVuY3Rpb24gWChhLCBjKSB7XG4gICAgdmFyIGQgPSBWKGMpLFxuICAgICAgICBkID0gLTEgPCBjLmluZGV4T2YoXCJzY2FsZVwiKSA/IDEgOiAwICsgZDthID0gYS5zdHlsZS50cmFuc2Zvcm07aWYgKCFhKSByZXR1cm4gZDtmb3IgKHZhciBiID0gW10sIGYgPSBbXSwgbiA9IFtdLCBrID0gLyhcXHcrKVxcKCguKz8pXFwpL2c7IGIgPSBrLmV4ZWMoYSk7KSB7XG4gICAgICBmLnB1c2goYlsxXSksIG4ucHVzaChiWzJdKTtcbiAgICB9YSA9IHIobiwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmW2JdID09PSBjO1xuICAgIH0pO3JldHVybiBhLmxlbmd0aCA/IGFbMF0gOiBkO1xuICB9ZnVuY3Rpb24gSyhhLCBjKSB7XG4gICAgc3dpdGNoIChKKGEsIGMpKSB7Y2FzZSBcInRyYW5zZm9ybVwiOlxuICAgICAgICByZXR1cm4gWChhLCBjKTtjYXNlIFwiY3NzXCI6XG4gICAgICAgIHJldHVybiBFKGEsIGMpO2Nhc2UgXCJhdHRyaWJ1dGVcIjpcbiAgICAgICAgcmV0dXJuIGEuZ2V0QXR0cmlidXRlKGMpO31yZXR1cm4gYVtjXSB8fCAwO1xuICB9ZnVuY3Rpb24gTChhLCBjKSB7XG4gICAgdmFyIGQgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKGEpO2lmICghZCkgcmV0dXJuIGE7dmFyIGIgPSB5KGEpIHx8IDA7YyA9IHBhcnNlRmxvYXQoYyk7YSA9IHBhcnNlRmxvYXQoYS5yZXBsYWNlKGRbMF0sIFwiXCIpKTtzd2l0Y2ggKGRbMF1bMF0pIHtjYXNlIFwiK1wiOlxuICAgICAgICByZXR1cm4gYyArIGEgKyBiO2Nhc2UgXCItXCI6XG4gICAgICAgIHJldHVybiBjIC0gYSArIGI7Y2FzZSBcIipcIjpcbiAgICAgICAgcmV0dXJuIGMgKiBhICsgYjt9XG4gIH1mdW5jdGlvbiBGKGEsIGMpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGMueCAtIGEueCwgMikgKyBNYXRoLnBvdyhjLnkgLSBhLnksIDIpKTtcbiAgfWZ1bmN0aW9uIE0oYSkge1xuICAgIGEgPSBhLnBvaW50cztmb3IgKHZhciBjID0gMCwgZCwgYiA9IDA7IGIgPCBhLm51bWJlck9mSXRlbXM7IGIrKykge1xuICAgICAgdmFyIGYgPSBhLmdldEl0ZW0oYik7MCA8IGIgJiYgKGMgKz0gRihkLCBmKSk7ZCA9IGY7XG4gICAgfXJldHVybiBjO1xuICB9ZnVuY3Rpb24gTihhKSB7XG4gICAgaWYgKGEuZ2V0VG90YWxMZW5ndGgpIHJldHVybiBhLmdldFRvdGFsTGVuZ3RoKCk7c3dpdGNoIChhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge2Nhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgcmV0dXJuIDIgKiBNYXRoLlBJICogYS5nZXRBdHRyaWJ1dGUoXCJyXCIpO2Nhc2UgXCJyZWN0XCI6XG4gICAgICAgIHJldHVybiAyICogYS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSArIDIgKiBhLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtjYXNlIFwibGluZVwiOlxuICAgICAgICByZXR1cm4gRih7IHg6IGEuZ2V0QXR0cmlidXRlKFwieDFcIiksIHk6IGEuZ2V0QXR0cmlidXRlKFwieTFcIikgfSwgeyB4OiBhLmdldEF0dHJpYnV0ZShcIngyXCIpLCB5OiBhLmdldEF0dHJpYnV0ZShcInkyXCIpIH0pO2Nhc2UgXCJwb2x5bGluZVwiOlxuICAgICAgICByZXR1cm4gTShhKTtjYXNlIFwicG9seWdvblwiOlxuICAgICAgICB2YXIgYyA9IGEucG9pbnRzO3JldHVybiBNKGEpICsgRihjLmdldEl0ZW0oYy5udW1iZXJPZkl0ZW1zIC0gMSksIGMuZ2V0SXRlbSgwKSk7fVxuICB9ZnVuY3Rpb24gWShhLCBjKSB7XG4gICAgZnVuY3Rpb24gZChiKSB7XG4gICAgICBiID0gdm9pZCAwID09PSBiID8gMCA6IGI7cmV0dXJuIGEuZWwuZ2V0UG9pbnRBdExlbmd0aCgxIDw9IGMgKyBiID8gYyArIGIgOiAwKTtcbiAgICB9dmFyIGIgPSBkKCksXG4gICAgICAgIGYgPSBkKC0xKSxcbiAgICAgICAgbiA9IGQoMSk7c3dpdGNoIChhLnByb3BlcnR5KSB7Y2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGIueDtjYXNlIFwieVwiOlxuICAgICAgICByZXR1cm4gYi55O1xuICAgICAgY2FzZSBcImFuZ2xlXCI6XG4gICAgICAgIHJldHVybiAxODAgKiBNYXRoLmF0YW4yKG4ueSAtIGYueSwgbi54IC0gZi54KSAvIE1hdGguUEk7fVxuICB9ZnVuY3Rpb24gTyhhLCBjKSB7XG4gICAgdmFyIGQgPSAvLT9cXGQqXFwuP1xcZCsvZyxcbiAgICAgICAgYjtiID0gaC5wdGgoYSkgPyBhLnRvdGFsTGVuZ3RoIDogYTtpZiAoaC5jb2woYikpIHtcbiAgICAgIGlmIChoLnJnYihiKSkge1xuICAgICAgICB2YXIgZiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhiKTtiID0gZiA/IFwicmdiYShcIiArIGZbMV0gKyBcIiwxKVwiIDogYjtcbiAgICAgIH0gZWxzZSBiID0gaC5oZXgoYikgPyBUKGIpIDogaC5oc2woYikgPyBVKGIpIDogdm9pZCAwO1xuICAgIH0gZWxzZSBmID0gKGYgPSB5KGIpKSA/IGIuc3Vic3RyKDAsIGIubGVuZ3RoIC0gZi5sZW5ndGgpIDogYiwgYiA9IGMgJiYgIS9cXHMvZy50ZXN0KGIpID8gZiArIGMgOiBmO2IgKz0gXCJcIjtyZXR1cm4geyBvcmlnaW5hbDogYiwgbnVtYmVyczogYi5tYXRjaChkKSA/IGIubWF0Y2goZCkubWFwKE51bWJlcikgOiBbMF0sIHN0cmluZ3M6IGguc3RyKGEpIHx8IGMgPyBiLnNwbGl0KGQpIDogW10gfTtcbiAgfWZ1bmN0aW9uIFAoYSkge1xuICAgIGEgPSBhID8gcChoLmFycihhKSA/IGEubWFwKG0pIDogbShhKSkgOiBbXTtyZXR1cm4gcihhLCBmdW5jdGlvbiAoYSwgZCwgYikge1xuICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA9PT0gZDtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIFooYSkge1xuICAgIHZhciBjID0gUChhKTtyZXR1cm4gYy5tYXAoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiB7IHRhcmdldDogYSwgaWQ6IGIsIHRvdGFsOiBjLmxlbmd0aCB9O1xuICAgIH0pO1xuICB9ZnVuY3Rpb24gYWEoYSwgYykge1xuICAgIHZhciBkID0gQyhjKTtpZiAoaC5hcnIoYSkpIHtcbiAgICAgIHZhciBiID0gYS5sZW5ndGg7MiAhPT0gYiB8fCBoLm9iaihhWzBdKSA/IGguZm5jKGMuZHVyYXRpb24pIHx8IChkLmR1cmF0aW9uID0gYy5kdXJhdGlvbiAvIGIpIDogYSA9IHsgdmFsdWU6IGEgfTtcbiAgICB9cmV0dXJuIG0oYSkubWFwKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBiID0gYiA/IDAgOiBjLmRlbGF5O2EgPSBoLm9iaihhKSAmJiAhaC5wdGgoYSkgPyBhIDogeyB2YWx1ZTogYSB9O2gudW5kKGEuZGVsYXkpICYmIChhLmRlbGF5ID0gYik7cmV0dXJuIGE7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4geihhLCBkKTtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIGJhKGEsIGMpIHtcbiAgICB2YXIgZCA9IHt9LFxuICAgICAgICBiO2ZvciAoYiBpbiBhKSB7XG4gICAgICB2YXIgZiA9IEkoYVtiXSwgYyk7aC5hcnIoZikgJiYgKGYgPSBmLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gSShhLCBjKTtcbiAgICAgIH0pLCAxID09PSBmLmxlbmd0aCAmJiAoZiA9IGZbMF0pKTtkW2JdID0gZjtcbiAgICB9ZC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQoZC5kdXJhdGlvbik7ZC5kZWxheSA9IHBhcnNlRmxvYXQoZC5kZWxheSk7cmV0dXJuIGQ7XG4gIH1mdW5jdGlvbiBjYShhKSB7XG4gICAgcmV0dXJuIGguYXJyKGEpID8gQS5hcHBseSh0aGlzLCBhKSA6IFFbYV07XG4gIH1mdW5jdGlvbiBkYShhLCBjKSB7XG4gICAgdmFyIGQ7cmV0dXJuIGEudHdlZW5zLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgYiA9IGJhKGIsIGMpO3ZhciBmID0gYi52YWx1ZSxcbiAgICAgICAgICBlID0gSyhjLnRhcmdldCwgYS5uYW1lKSxcbiAgICAgICAgICBrID0gZCA/IGQudG8ub3JpZ2luYWwgOiBlLFxuICAgICAgICAgIGsgPSBoLmFycihmKSA/IGZbMF0gOiBrLFxuICAgICAgICAgIHcgPSBMKGguYXJyKGYpID8gZlsxXSA6IGYsIGspLFxuICAgICAgICAgIGUgPSB5KHcpIHx8IHkoaykgfHwgeShlKTtiLmZyb20gPSBPKGssIGUpO2IudG8gPSBPKHcsIGUpO2Iuc3RhcnQgPSBkID8gZC5lbmQgOiBhLm9mZnNldDtiLmVuZCA9IGIuc3RhcnQgKyBiLmRlbGF5ICsgYi5kdXJhdGlvbjtiLmVhc2luZyA9IGNhKGIuZWFzaW5nKTtiLmVsYXN0aWNpdHkgPSAoMUUzIC0gTWF0aC5taW4oTWF0aC5tYXgoYi5lbGFzdGljaXR5LCAxKSwgOTk5KSkgLyAxRTM7Yi5pc1BhdGggPSBoLnB0aChmKTtiLmlzQ29sb3IgPSBoLmNvbChiLmZyb20ub3JpZ2luYWwpO2IuaXNDb2xvciAmJiAoYi5yb3VuZCA9IDEpO3JldHVybiBkID0gYjtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIGVhKGEsIGMpIHtcbiAgICByZXR1cm4gcihwKGEubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gYy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgdmFyIGMgPSBKKGEudGFyZ2V0LCBiLm5hbWUpO2lmIChjKSB7XG4gICAgICAgICAgdmFyIGQgPSBkYShiLCBhKTtiID0geyB0eXBlOiBjLCBwcm9wZXJ0eTogYi5uYW1lLCBhbmltYXRhYmxlOiBhLCB0d2VlbnM6IGQsIGR1cmF0aW9uOiBkW2QubGVuZ3RoIC0gMV0uZW5kLCBkZWxheTogZFswXS5kZWxheSB9O1xuICAgICAgICB9IGVsc2UgYiA9IHZvaWQgMDtyZXR1cm4gYjtcbiAgICAgIH0pO1xuICAgIH0pKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiAhaC51bmQoYSk7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBSKGEsIGMsIGQsIGIpIHtcbiAgICB2YXIgZiA9IFwiZGVsYXlcIiA9PT0gYTtyZXR1cm4gYy5sZW5ndGggPyAoZiA/IE1hdGgubWluIDogTWF0aC5tYXgpLmFwcGx5KE1hdGgsIGMubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICByZXR1cm4gYlthXTtcbiAgICB9KSkgOiBmID8gYi5kZWxheSA6IGQub2Zmc2V0ICsgYi5kZWxheSArIGIuZHVyYXRpb247XG4gIH1mdW5jdGlvbiBmYShhKSB7XG4gICAgdmFyIGMgPSBEKGdhLCBhKSxcbiAgICAgICAgZCA9IEQoUywgYSksXG4gICAgICAgIGIgPSBaKGEudGFyZ2V0cyksXG4gICAgICAgIGYgPSBbXSxcbiAgICAgICAgZSA9IHooYywgZCksXG4gICAgICAgIGs7Zm9yIChrIGluIGEpIHtcbiAgICAgIGUuaGFzT3duUHJvcGVydHkoaykgfHwgXCJ0YXJnZXRzXCIgPT09IGsgfHwgZi5wdXNoKHsgbmFtZTogaywgb2Zmc2V0OiBlLm9mZnNldCwgdHdlZW5zOiBhYShhW2tdLCBkKSB9KTtcbiAgICB9YSA9IGVhKGIsIGYpO3JldHVybiB6KGMsIHsgY2hpbGRyZW46IFtdLCBhbmltYXRhYmxlczogYiwgYW5pbWF0aW9uczogYSwgZHVyYXRpb246IFIoXCJkdXJhdGlvblwiLCBhLCBjLCBkKSwgZGVsYXk6IFIoXCJkZWxheVwiLCBhLCBjLCBkKSB9KTtcbiAgfWZ1bmN0aW9uIHEoYSkge1xuICAgIGZ1bmN0aW9uIGMoKSB7XG4gICAgICByZXR1cm4gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIHAgPSBhO1xuICAgICAgfSk7XG4gICAgfWZ1bmN0aW9uIGQoYSkge1xuICAgICAgcmV0dXJuIGcucmV2ZXJzZWQgPyBnLmR1cmF0aW9uIC0gYSA6IGE7XG4gICAgfWZ1bmN0aW9uIGIoYSkge1xuICAgICAgZm9yICh2YXIgYiA9IDAsIGMgPSB7fSwgZCA9IGcuYW5pbWF0aW9ucywgZiA9IGQubGVuZ3RoOyBiIDwgZjspIHtcbiAgICAgICAgdmFyIGUgPSBkW2JdLFxuICAgICAgICAgICAgayA9IGUuYW5pbWF0YWJsZSxcbiAgICAgICAgICAgIGggPSBlLnR3ZWVucyxcbiAgICAgICAgICAgIG4gPSBoLmxlbmd0aCAtIDEsXG4gICAgICAgICAgICBsID0gaFtuXTtuICYmIChsID0gcihoLCBmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiBhIDwgYi5lbmQ7XG4gICAgICAgIH0pWzBdIHx8IGwpO2ZvciAodmFyIGggPSBNYXRoLm1pbihNYXRoLm1heChhIC0gbC5zdGFydCAtIGwuZGVsYXksIDApLCBsLmR1cmF0aW9uKSAvIGwuZHVyYXRpb24sIHcgPSBpc05hTihoKSA/IDEgOiBsLmVhc2luZyhoLCBsLmVsYXN0aWNpdHkpLCBoID0gbC50by5zdHJpbmdzLCBwID0gbC5yb3VuZCwgbiA9IFtdLCBtID0gdm9pZCAwLCBtID0gbC50by5udW1iZXJzLmxlbmd0aCwgdCA9IDA7IHQgPCBtOyB0KyspIHtcbiAgICAgICAgICB2YXIgeCA9IHZvaWQgMCxcbiAgICAgICAgICAgICAgeCA9IGwudG8ubnVtYmVyc1t0XSxcbiAgICAgICAgICAgICAgcSA9IGwuZnJvbS5udW1iZXJzW3RdLFxuICAgICAgICAgICAgICB4ID0gbC5pc1BhdGggPyBZKGwudmFsdWUsIHcgKiB4KSA6IHEgKyB3ICogKHggLSBxKTtwICYmIChsLmlzQ29sb3IgJiYgMiA8IHQgfHwgKHggPSBNYXRoLnJvdW5kKHggKiBwKSAvIHApKTtuLnB1c2goeCk7XG4gICAgICAgIH1pZiAobCA9IGgubGVuZ3RoKSBmb3IgKG0gPSBoWzBdLCB3ID0gMDsgdyA8IGw7IHcrKykge1xuICAgICAgICAgIHAgPSBoW3cgKyAxXSwgdCA9IG5bd10sIGlzTmFOKHQpIHx8IChtID0gcCA/IG0gKyAodCArIHApIDogbSArICh0ICsgXCIgXCIpKTtcbiAgICAgICAgfSBlbHNlIG0gPSBuWzBdO2hhW2UudHlwZV0oay50YXJnZXQsIGUucHJvcGVydHksIG0sIGMsIGsuaWQpO2UuY3VycmVudFZhbHVlID0gbTtiKys7XG4gICAgICB9aWYgKGIgPSBPYmplY3Qua2V5cyhjKS5sZW5ndGgpIGZvciAoZCA9IDA7IGQgPCBiOyBkKyspIHtcbiAgICAgICAgSCB8fCAoSCA9IEUoZG9jdW1lbnQuYm9keSwgXCJ0cmFuc2Zvcm1cIikgPyBcInRyYW5zZm9ybVwiIDogXCItd2Via2l0LXRyYW5zZm9ybVwiKSwgZy5hbmltYXRhYmxlc1tkXS50YXJnZXQuc3R5bGVbSF0gPSBjW2RdLmpvaW4oXCIgXCIpO1xuICAgICAgfWcuY3VycmVudFRpbWUgPSBhO2cucHJvZ3Jlc3MgPSBhIC8gZy5kdXJhdGlvbiAqIDEwMDtcbiAgICB9ZnVuY3Rpb24gZihhKSB7XG4gICAgICBpZiAoZ1thXSkgZ1thXShnKTtcbiAgICB9ZnVuY3Rpb24gZSgpIHtcbiAgICAgIGcucmVtYWluaW5nICYmICEwICE9PSBnLnJlbWFpbmluZyAmJiBnLnJlbWFpbmluZy0tO1xuICAgIH1mdW5jdGlvbiBrKGEpIHtcbiAgICAgIHZhciBrID0gZy5kdXJhdGlvbixcbiAgICAgICAgICBuID0gZy5vZmZzZXQsXG4gICAgICAgICAgdyA9IG4gKyBnLmRlbGF5LFxuICAgICAgICAgIHIgPSBnLmN1cnJlbnRUaW1lLFxuICAgICAgICAgIHggPSBnLnJldmVyc2VkLFxuICAgICAgICAgIHEgPSBkKGEpO2lmIChnLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB2YXIgdSA9IGcuY2hpbGRyZW4sXG4gICAgICAgICAgICB2ID0gdS5sZW5ndGg7XG4gICAgICAgIGlmIChxID49IGcuY3VycmVudFRpbWUpIGZvciAodmFyIEcgPSAwOyBHIDwgdjsgRysrKSB7XG4gICAgICAgICAgdVtHXS5zZWVrKHEpO1xuICAgICAgICB9IGVsc2UgZm9yICg7IHYtLTspIHtcbiAgICAgICAgICB1W3ZdLnNlZWsocSk7XG4gICAgICAgIH1cbiAgICAgIH1pZiAocSA+PSB3IHx8ICFrKSBnLmJlZ2FuIHx8IChnLmJlZ2FuID0gITAsIGYoXCJiZWdpblwiKSksIGYoXCJydW5cIik7aWYgKHEgPiBuICYmIHEgPCBrKSBiKHEpO2Vsc2UgaWYgKHEgPD0gbiAmJiAwICE9PSByICYmIChiKDApLCB4ICYmIGUoKSksIHEgPj0gayAmJiByICE9PSBrIHx8ICFrKSBiKGspLCB4IHx8IGUoKTtmKFwidXBkYXRlXCIpO2EgPj0gayAmJiAoZy5yZW1haW5pbmcgPyAodCA9IGgsIFwiYWx0ZXJuYXRlXCIgPT09IGcuZGlyZWN0aW9uICYmIChnLnJldmVyc2VkID0gIWcucmV2ZXJzZWQpKSA6IChnLnBhdXNlKCksIGcuY29tcGxldGVkIHx8IChnLmNvbXBsZXRlZCA9ICEwLCBmKFwiY29tcGxldGVcIiksIFwiUHJvbWlzZVwiIGluIHdpbmRvdyAmJiAocCgpLCBtID0gYygpKSkpLCBsID0gMCk7XG4gICAgfWEgPSB2b2lkIDAgPT09IGEgPyB7fSA6IGE7dmFyIGgsXG4gICAgICAgIHQsXG4gICAgICAgIGwgPSAwLFxuICAgICAgICBwID0gbnVsbCxcbiAgICAgICAgbSA9IGMoKSxcbiAgICAgICAgZyA9IGZhKGEpO2cucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYSA9IGcuZGlyZWN0aW9uLFxuICAgICAgICAgIGMgPSBnLmxvb3A7Zy5jdXJyZW50VGltZSA9IDA7Zy5wcm9ncmVzcyA9IDA7Zy5wYXVzZWQgPSAhMDtnLmJlZ2FuID0gITE7Zy5jb21wbGV0ZWQgPSAhMTtnLnJldmVyc2VkID0gXCJyZXZlcnNlXCIgPT09IGE7Zy5yZW1haW5pbmcgPSBcImFsdGVybmF0ZVwiID09PSBhICYmIDEgPT09IGMgPyAyIDogYztiKDApO2ZvciAoYSA9IGcuY2hpbGRyZW4ubGVuZ3RoOyBhLS07KSB7XG4gICAgICAgIGcuY2hpbGRyZW5bYV0ucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9O2cudGljayA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICBoID0gYTt0IHx8ICh0ID0gaCk7aygobCArIGggLSB0KSAqIHEuc3BlZWQpO1xuICAgIH07Zy5zZWVrID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgIGsoZChhKSk7XG4gICAgfTtnLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSB2LmluZGV4T2YoZyk7LTEgPCBhICYmIHYuc3BsaWNlKGEsIDEpO2cucGF1c2VkID0gITA7XG4gICAgfTtnLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBnLnBhdXNlZCAmJiAoZy5wYXVzZWQgPSAhMSwgdCA9IDAsIGwgPSBkKGcuY3VycmVudFRpbWUpLCB2LnB1c2goZyksIEIgfHwgaWEoKSk7XG4gICAgfTtnLnJldmVyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBnLnJldmVyc2VkID0gIWcucmV2ZXJzZWQ7dCA9IDA7bCA9IGQoZy5jdXJyZW50VGltZSk7XG4gICAgfTtnLnJlc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBnLnBhdXNlKCk7XG4gICAgICBnLnJlc2V0KCk7Zy5wbGF5KCk7XG4gICAgfTtnLmZpbmlzaGVkID0gbTtnLnJlc2V0KCk7Zy5hdXRvcGxheSAmJiBnLnBsYXkoKTtyZXR1cm4gZztcbiAgfXZhciBnYSA9IHsgdXBkYXRlOiB2b2lkIDAsIGJlZ2luOiB2b2lkIDAsIHJ1bjogdm9pZCAwLCBjb21wbGV0ZTogdm9pZCAwLCBsb29wOiAxLCBkaXJlY3Rpb246IFwibm9ybWFsXCIsIGF1dG9wbGF5OiAhMCwgb2Zmc2V0OiAwIH0sXG4gICAgICBTID0geyBkdXJhdGlvbjogMUUzLCBkZWxheTogMCwgZWFzaW5nOiBcImVhc2VPdXRFbGFzdGljXCIsIGVsYXN0aWNpdHk6IDUwMCwgcm91bmQ6IDAgfSxcbiAgICAgIFcgPSBcInRyYW5zbGF0ZVggdHJhbnNsYXRlWSB0cmFuc2xhdGVaIHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzY2FsZVggc2NhbGVZIHNjYWxlWiBza2V3WCBza2V3WSBwZXJzcGVjdGl2ZVwiLnNwbGl0KFwiIFwiKSxcbiAgICAgIEgsXG4gICAgICBoID0geyBhcnI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKTtcbiAgICB9LCBvYmo6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gLTEgPCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIk9iamVjdFwiKTtcbiAgICB9LFxuICAgIHB0aDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBoLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KFwidG90YWxMZW5ndGhcIik7XG4gICAgfSwgc3ZnOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xuICAgIH0sIGRvbTogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBhLm5vZGVUeXBlIHx8IGguc3ZnKGEpO1xuICAgIH0sIHN0cjogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBcInN0cmluZ1wiID09PSB0eXBlb2YgYTtcbiAgICB9LCBmbmM6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYTtcbiAgICB9LCB1bmQ6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIGE7XG4gICAgfSwgaGV4OiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuICgvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKVxuICAgICAgKTtcbiAgICB9LCByZ2I6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gKC9ecmdiLy50ZXN0KGEpXG4gICAgICApO1xuICAgIH0sIGhzbDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiAoL15oc2wvLnRlc3QoYSlcbiAgICAgICk7XG4gICAgfSwgY29sOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGguaGV4KGEpIHx8IGgucmdiKGEpIHx8IGguaHNsKGEpO1xuICAgIH0gfSxcbiAgICAgIEEgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gYShhLCBkLCBiKSB7XG4gICAgICByZXR1cm4gKCgoMSAtIDMgKiBiICsgMyAqIGQpICogYSArICgzICogYiAtIDYgKiBkKSkgKiBhICsgMyAqIGQpICogYTtcbiAgICB9cmV0dXJuIGZ1bmN0aW9uIChjLCBkLCBiLCBmKSB7XG4gICAgICBpZiAoMCA8PSBjICYmIDEgPj0gYyAmJiAwIDw9IGIgJiYgMSA+PSBiKSB7XG4gICAgICAgIHZhciBlID0gbmV3IEZsb2F0MzJBcnJheSgxMSk7aWYgKGMgIT09IGQgfHwgYiAhPT0gZikgZm9yICh2YXIgayA9IDA7IDExID4gazsgKytrKSB7XG4gICAgICAgICAgZVtrXSA9IGEoLjEgKiBrLCBjLCBiKTtcbiAgICAgICAgfXJldHVybiBmdW5jdGlvbiAoaykge1xuICAgICAgICAgIGlmIChjID09PSBkICYmIGIgPT09IGYpIHJldHVybiBrO2lmICgwID09PSBrKSByZXR1cm4gMDtpZiAoMSA9PT0gaykgcmV0dXJuIDE7Zm9yICh2YXIgaCA9IDAsIGwgPSAxOyAxMCAhPT0gbCAmJiBlW2xdIDw9IGs7ICsrbCkge1xuICAgICAgICAgICAgaCArPSAuMTtcbiAgICAgICAgICB9LS1sO3ZhciBsID0gaCArIChrIC0gZVtsXSkgLyAoZVtsICsgMV0gLSBlW2xdKSAqIC4xLFxuICAgICAgICAgICAgICBuID0gMyAqICgxIC0gMyAqIGIgKyAzICogYykgKiBsICogbCArIDIgKiAoMyAqIGIgLSA2ICogYykgKiBsICsgMyAqIGM7aWYgKC4wMDEgPD0gbikge1xuICAgICAgICAgICAgZm9yIChoID0gMDsgNCA+IGg7ICsraCkge1xuICAgICAgICAgICAgICBuID0gMyAqICgxIC0gMyAqIGIgKyAzICogYykgKiBsICogbCArIDIgKiAoMyAqIGIgLSA2ICogYykgKiBsICsgMyAqIGM7aWYgKDAgPT09IG4pIGJyZWFrO3ZhciBtID0gYShsLCBjLCBiKSAtIGssXG4gICAgICAgICAgICAgICAgICBsID0gbCAtIG0gLyBuO1xuICAgICAgICAgICAgfWsgPSBsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoMCA9PT0gbikgayA9IGw7ZWxzZSB7XG4gICAgICAgICAgICB2YXIgbCA9IGgsXG4gICAgICAgICAgICAgICAgaCA9IGggKyAuMSxcbiAgICAgICAgICAgICAgICBnID0gMDtkbyB7XG4gICAgICAgICAgICAgIG0gPSBsICsgKGggLSBsKSAvIDIsIG4gPSBhKG0sIGMsIGIpIC0gaywgMCA8IG4gPyBoID0gbSA6IGwgPSBtO1xuICAgICAgICAgICAgfSB3aGlsZSAoMWUtNyA8IE1hdGguYWJzKG4pICYmIDEwID4gKytnKTtrID0gbTtcbiAgICAgICAgICB9cmV0dXJuIGEoaywgZCwgZik7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSgpLFxuICAgICAgUSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBhKGEsIGIpIHtcbiAgICAgIHJldHVybiAwID09PSBhIHx8IDEgPT09IGEgPyBhIDogLU1hdGgucG93KDIsIDEwICogKGEgLSAxKSkgKiBNYXRoLnNpbigyICogKGEgLSAxIC0gYiAvICgyICogTWF0aC5QSSkgKiBNYXRoLmFzaW4oMSkpICogTWF0aC5QSSAvIGIpO1xuICAgIH12YXIgYyA9IFwiUXVhZCBDdWJpYyBRdWFydCBRdWludCBTaW5lIEV4cG8gQ2lyYyBCYWNrIEVsYXN0aWNcIi5zcGxpdChcIiBcIiksXG4gICAgICAgIGQgPSB7IEluOiBbWy41NSwgLjA4NSwgLjY4LCAuNTNdLCBbLjU1LCAuMDU1LCAuNjc1LCAuMTldLCBbLjg5NSwgLjAzLCAuNjg1LCAuMjJdLCBbLjc1NSwgLjA1LCAuODU1LCAuMDZdLCBbLjQ3LCAwLCAuNzQ1LCAuNzE1XSwgWy45NSwgLjA1LCAuNzk1LCAuMDM1XSwgWy42LCAuMDQsIC45OCwgLjMzNV0sIFsuNiwgLS4yOCwgLjczNSwgLjA0NV0sIGFdLCBPdXQ6IFtbLjI1LCAuNDYsIC40NSwgLjk0XSwgWy4yMTUsIC42MSwgLjM1NSwgMV0sIFsuMTY1LCAuODQsIC40NCwgMV0sIFsuMjMsIDEsIC4zMiwgMV0sIFsuMzksIC41NzUsIC41NjUsIDFdLCBbLjE5LCAxLCAuMjIsIDFdLCBbLjA3NSwgLjgyLCAuMTY1LCAxXSwgWy4xNzUsIC44ODUsIC4zMiwgMS4yNzVdLCBmdW5jdGlvbiAoYiwgYykge1xuICAgICAgICByZXR1cm4gMSAtIGEoMSAtIGIsIGMpO1xuICAgICAgfV0sIEluT3V0OiBbWy40NTUsIC4wMywgLjUxNSwgLjk1NV0sIFsuNjQ1LCAuMDQ1LCAuMzU1LCAxXSwgWy43NywgMCwgLjE3NSwgMV0sIFsuODYsIDAsIC4wNywgMV0sIFsuNDQ1LCAuMDUsIC41NSwgLjk1XSwgWzEsIDAsIDAsIDFdLCBbLjc4NSwgLjEzNSwgLjE1LCAuODZdLCBbLjY4LCAtLjU1LCAuMjY1LCAxLjU1XSwgZnVuY3Rpb24gKGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIC41ID4gYiA/IGEoMiAqIGIsIGMpIC8gMiA6IDEgLSBhKC0yICogYiArIDIsIGMpIC8gMjtcbiAgICAgIH1dIH0sXG4gICAgICAgIGIgPSB7IGxpbmVhcjogQSguMjUsIC4yNSwgLjc1LCAuNzUpIH0sXG4gICAgICAgIGYgPSB7fSxcbiAgICAgICAgZTtmb3IgKGUgaW4gZCkge1xuICAgICAgZi50eXBlID0gZSwgZFtmLnR5cGVdLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBmKSB7XG4gICAgICAgICAgYltcImVhc2VcIiArIGEudHlwZSArIGNbZl1dID0gaC5mbmMoZCkgPyBkIDogQS5hcHBseSgkanNjb21wJHRoaXMsIGQpO1xuICAgICAgICB9O1xuICAgICAgfShmKSksIGYgPSB7IHR5cGU6IGYudHlwZSB9O1xuICAgIH1yZXR1cm4gYjtcbiAgfSgpLFxuICAgICAgaGEgPSB7IGNzczogZnVuY3Rpb24gKGEsIGMsIGQpIHtcbiAgICAgIHJldHVybiBhLnN0eWxlW2NdID0gZDtcbiAgICB9LCBhdHRyaWJ1dGU6IGZ1bmN0aW9uIChhLCBjLCBkKSB7XG4gICAgICByZXR1cm4gYS5zZXRBdHRyaWJ1dGUoYywgZCk7XG4gICAgfSwgb2JqZWN0OiBmdW5jdGlvbiAoYSwgYywgZCkge1xuICAgICAgcmV0dXJuIGFbY10gPSBkO1xuICAgIH0sIHRyYW5zZm9ybTogZnVuY3Rpb24gKGEsIGMsIGQsIGIsIGYpIHtcbiAgICAgIGJbZl0gfHwgKGJbZl0gPSBbXSk7YltmXS5wdXNoKGMgKyBcIihcIiArIGQgKyBcIilcIik7XG4gICAgfSB9LFxuICAgICAgdiA9IFtdLFxuICAgICAgQiA9IDAsXG4gICAgICBpYSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBhKCkge1xuICAgICAgQiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjKTtcbiAgICB9ZnVuY3Rpb24gYyhjKSB7XG4gICAgICB2YXIgYiA9IHYubGVuZ3RoO2lmIChiKSB7XG4gICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgYjspIHtcbiAgICAgICAgICB2W2RdICYmIHZbZF0udGljayhjKSwgZCsrO1xuICAgICAgICB9YSgpO1xuICAgICAgfSBlbHNlIGNhbmNlbEFuaW1hdGlvbkZyYW1lKEIpLCBCID0gMDtcbiAgICB9cmV0dXJuIGE7XG4gIH0oKTtxLnZlcnNpb24gPSBcIjIuMi4wXCI7cS5zcGVlZCA9IDE7cS5ydW5uaW5nID0gdjtxLnJlbW92ZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgYSA9IFAoYSk7Zm9yICh2YXIgYyA9IHYubGVuZ3RoOyBjLS07KSB7XG4gICAgICBmb3IgKHZhciBkID0gdltjXSwgYiA9IGQuYW5pbWF0aW9ucywgZiA9IGIubGVuZ3RoOyBmLS07KSB7XG4gICAgICAgIHUoYSwgYltmXS5hbmltYXRhYmxlLnRhcmdldCkgJiYgKGIuc3BsaWNlKGYsIDEpLCBiLmxlbmd0aCB8fCBkLnBhdXNlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtxLmdldFZhbHVlID0gSztxLnBhdGggPSBmdW5jdGlvbiAoYSwgYykge1xuICAgIHZhciBkID0gaC5zdHIoYSkgPyBlKGEpWzBdIDogYSxcbiAgICAgICAgYiA9IGMgfHwgMTAwO3JldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHsgZWw6IGQsIHByb3BlcnR5OiBhLCB0b3RhbExlbmd0aDogTihkKSAqIChiIC8gMTAwKSB9O1xuICAgIH07XG4gIH07cS5zZXREYXNob2Zmc2V0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYyA9IE4oYSk7YS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIGMpO3JldHVybiBjO1xuICB9O3EuYmV6aWVyID0gQTtxLmVhc2luZ3MgPSBRO3EudGltZWxpbmUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBjID0gcShhKTtjLnBhdXNlKCk7Yy5kdXJhdGlvbiA9IDA7Yy5hZGQgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgYy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIGEuYmVnYW4gPSAhMDthLmNvbXBsZXRlZCA9ICEwO1xuICAgICAgfSk7bShkKS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHZhciBkID0geihiLCBEKFMsIGEgfHwge30pKTtkLnRhcmdldHMgPSBkLnRhcmdldHMgfHwgYS50YXJnZXRzO2IgPSBjLmR1cmF0aW9uO3ZhciBlID0gZC5vZmZzZXQ7ZC5hdXRvcGxheSA9ICExO2QuZGlyZWN0aW9uID0gYy5kaXJlY3Rpb247ZC5vZmZzZXQgPSBoLnVuZChlKSA/IGIgOiBMKGUsIGIpO2MuYmVnYW4gPSAhMDtjLmNvbXBsZXRlZCA9ICEwO2Muc2VlayhkLm9mZnNldCk7ZCA9IHEoZCk7ZC5iZWdhbiA9ICEwO2QuY29tcGxldGVkID0gITA7ZC5kdXJhdGlvbiA+IGIgJiYgKGMuZHVyYXRpb24gPSBkLmR1cmF0aW9uKTtjLmNoaWxkcmVuLnB1c2goZCk7XG4gICAgICB9KTtjLnNlZWsoMCk7Yy5yZXNldCgpO2MuYXV0b3BsYXkgJiYgYy5yZXN0YXJ0KCk7cmV0dXJuIGM7XG4gICAgfTtyZXR1cm4gYztcbiAgfTtxLnJhbmRvbSA9IGZ1bmN0aW9uIChhLCBjKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjIC0gYSArIDEpKSArIGE7XG4gIH07cmV0dXJuIHE7XG59KTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgYWNjb3JkaW9uOiB0cnVlLFxuICAgIG9uT3BlblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25PcGVuRW5kOiB1bmRlZmluZWQsXG4gICAgb25DbG9zZVN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25DbG9zZUVuZDogdW5kZWZpbmVkLFxuICAgIGluRHVyYXRpb246IDMwMCxcbiAgICBvdXREdXJhdGlvbjogMzAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgQ29sbGFwc2libGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhDb2xsYXBzaWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgQ29sbGFwc2libGUgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDb2xsYXBzaWJsZShlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbGxhcHNpYmxlKTtcblxuICAgICAgdmFyIF90aGlzMyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDb2xsYXBzaWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbGxhcHNpYmxlKSkuY2FsbCh0aGlzLCBDb2xsYXBzaWJsZSwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMzLmVsLk1fQ29sbGFwc2libGUgPSBfdGhpczM7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIGNvbGxhcHNpYmxlXG4gICAgICAgKiBAbWVtYmVyIENvbGxhcHNpYmxlI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbYWNjb3JkaW9uPWZhbHNlXSAtIFR5cGUgb2YgdGhlIGNvbGxhcHNpYmxlXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlblN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBjb2xsYXBzaWJsZSBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuRW5kIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIGNvbGxhcHNpYmxlIGlzIG9wZW5lZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlU3RhcnQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYmVmb3JlIGNvbGxhcHNpYmxlIGlzIGNsb3NlZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlRW5kIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGFmdGVyIGNvbGxhcHNpYmxlIGlzIGNsb3NlZFxuICAgICAgICogQHByb3Age051bWJlcn0gaW5EdXJhdGlvbiAtIFRyYW5zaXRpb24gaW4gZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzLlxuICAgICAgICogQHByb3Age051bWJlcn0gb3V0RHVyYXRpb24gLSBUcmFuc2l0aW9uIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgICAqL1xuICAgICAgX3RoaXMzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2libGUuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBTZXR1cCB0YWIgaW5kaWNlc1xuICAgICAgX3RoaXMzLiRoZWFkZXJzID0gX3RoaXMzLiRlbC5jaGlsZHJlbignbGknKS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWhlYWRlcicpO1xuICAgICAgX3RoaXMzLiRoZWFkZXJzLmF0dHIoJ3RhYmluZGV4JywgMCk7XG5cbiAgICAgIF90aGlzMy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIC8vIE9wZW4gZmlyc3QgYWN0aXZlXG4gICAgICB2YXIgJGFjdGl2ZUJvZGllcyA9IF90aGlzMy4kZWwuY2hpbGRyZW4oJ2xpLmFjdGl2ZScpLmNoaWxkcmVuKCcuY29sbGFwc2libGUtYm9keScpO1xuICAgICAgaWYgKF90aGlzMy5vcHRpb25zLmFjY29yZGlvbikge1xuICAgICAgICAvLyBIYW5kbGUgQWNjb3JkaW9uXG4gICAgICAgICRhY3RpdmVCb2RpZXMuZmlyc3QoKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEhhbmRsZSBFeHBhbmRhYmxlc1xuICAgICAgICAkYWN0aXZlQm9kaWVzLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90aGlzMztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ29sbGFwc2libGUsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuZWwuTV9Db2xsYXBzaWJsZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29sbGFwc2libGVLZXlkb3duQm91bmQgPSB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuJGhlYWRlcnMuZWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpczQuX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bkJvdW5kKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ29sbGFwc2libGVDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy4kaGVhZGVycy5lYWNoKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgICBoZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIF90aGlzNS5faGFuZGxlQ29sbGFwc2libGVLZXlkb3duQm91bmQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ29sbGFwc2libGUgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2soZSkge1xuICAgICAgICB2YXIgJGhlYWRlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmICRoZWFkZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyICRjb2xsYXBzaWJsZSA9ICRoZWFkZXIuY2xvc2VzdCgnLmNvbGxhcHNpYmxlJyk7XG4gICAgICAgICAgaWYgKCRjb2xsYXBzaWJsZVswXSA9PT0gdGhpcy5lbCkge1xuICAgICAgICAgICAgdmFyICRjb2xsYXBzaWJsZUxpID0gJGhlYWRlci5jbG9zZXN0KCdsaScpO1xuICAgICAgICAgICAgdmFyICRjb2xsYXBzaWJsZUxpcyA9ICRjb2xsYXBzaWJsZS5jaGlsZHJlbignbGknKTtcbiAgICAgICAgICAgIHZhciBpc0FjdGl2ZSA9ICRjb2xsYXBzaWJsZUxpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAkY29sbGFwc2libGVMaXMuaW5kZXgoJGNvbGxhcHNpYmxlTGkpO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZShpbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm9wZW4oaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDb2xsYXBzaWJsZSBLZXlkb3duXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ29sbGFwc2libGVLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ29sbGFwc2libGVDbGlja0JvdW5kKGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0ZSBpbiBjb2xsYXBzaWJsZSBzbGlkZVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gMHRoIGluZGV4IG9mIHNsaWRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbihpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgICAgICB2YXIgJGNvbGxhcHNpYmxlTGkgPSB0aGlzLiRlbC5jaGlsZHJlbignbGknKS5lcShpbmRleCk7XG4gICAgICAgIGlmICgkY29sbGFwc2libGVMaS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgJGJvZHkgPSAkY29sbGFwc2libGVMaS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKTtcblxuICAgICAgICAgIGFuaW0ucmVtb3ZlKCRib2R5WzBdKTtcbiAgICAgICAgICAkYm9keS5jc3Moe1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcnLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBwVG9wID0gJGJvZHkuY3NzKCdwYWRkaW5nLXRvcCcpO1xuICAgICAgICAgIHZhciBwQm90dG9tID0gJGJvZHkuY3NzKCdwYWRkaW5nLWJvdHRvbScpO1xuICAgICAgICAgIHZhciBmaW5hbEhlaWdodCA9ICRib2R5WzBdLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAkYm9keS5jc3Moe1xuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogJGJvZHlbMF0sXG4gICAgICAgICAgICBoZWlnaHQ6IGZpbmFsSGVpZ2h0LFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogcFRvcCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IHBCb3R0b20sXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJycsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogJycsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnJ1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBvbk9wZW5FbmQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczYub3B0aW9ucy5vbk9wZW5FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfdGhpczYub3B0aW9ucy5vbk9wZW5FbmQuY2FsbChfdGhpczYsICRjb2xsYXBzaWJsZUxpWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0ZSBvdXQgY29sbGFwc2libGUgc2xpZGVcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIDB0aCBpbmRleCBvZiBzbGlkZSB0byBvcGVuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3V0KGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgICAgIHZhciAkY29sbGFwc2libGVMaSA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaScpLmVxKGluZGV4KTtcbiAgICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCkge1xuICAgICAgICAgIHZhciAkYm9keSA9ICRjb2xsYXBzaWJsZUxpLmNoaWxkcmVuKCcuY29sbGFwc2libGUtYm9keScpO1xuICAgICAgICAgIGFuaW0ucmVtb3ZlKCRib2R5WzBdKTtcbiAgICAgICAgICAkYm9keS5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogJGJvZHlbMF0sXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAwLFxuICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRDdWJpYycsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAkYm9keS5jc3Moe1xuICAgICAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICcnXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vIG9uQ2xvc2VFbmQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczcub3B0aW9ucy5vbkNsb3NlRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM3Lm9wdGlvbnMub25DbG9zZUVuZC5jYWxsKF90aGlzNywgJGNvbGxhcHNpYmxlTGlbMF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIENvbGxhcHNpYmxlXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSAwdGggaW5kZXggb2Ygc2xpZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICAgIHZhciAkY29sbGFwc2libGVMaSA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaScpLmVxKGluZGV4KTtcbiAgICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCAmJiAhJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIC8vIG9uT3BlblN0YXJ0IGNhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydC5jYWxsKHRoaXMsICRjb2xsYXBzaWJsZUxpWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBIYW5kbGUgYWNjb3JkaW9uIGJlaGF2aW9yXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2NvcmRpb24pIHtcbiAgICAgICAgICAgIHZhciAkY29sbGFwc2libGVMaXMgPSB0aGlzLiRlbC5jaGlsZHJlbignbGknKTtcbiAgICAgICAgICAgIHZhciAkYWN0aXZlTGlzID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpLmFjdGl2ZScpO1xuICAgICAgICAgICAgJGFjdGl2ZUxpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICB2YXIgaW5kZXggPSAkY29sbGFwc2libGVMaXMuaW5kZXgoJChlbCkpO1xuICAgICAgICAgICAgICBfdGhpczguY2xvc2UoaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQW5pbWF0ZSBpblxuICAgICAgICAgICRjb2xsYXBzaWJsZUxpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGVJbihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBDb2xsYXBzaWJsZVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gMHRoIGluZGV4IG9mIHNsaWRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKGluZGV4KSB7XG4gICAgICAgIHZhciAkY29sbGFwc2libGVMaSA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaScpLmVxKGluZGV4KTtcbiAgICAgICAgaWYgKCRjb2xsYXBzaWJsZUxpLmxlbmd0aCAmJiAkY29sbGFwc2libGVMaVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgLy8gb25DbG9zZVN0YXJ0IGNhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0LmNhbGwodGhpcywgJGNvbGxhcHNpYmxlTGlbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFuaW1hdGUgb3V0XG4gICAgICAgICAgJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZU91dChpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoQ29sbGFwc2libGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb2xsYXBzaWJsZSksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX0NvbGxhcHNpYmxlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENvbGxhcHNpYmxlO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5Db2xsYXBzaWJsZSA9IENvbGxhcHNpYmxlO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoQ29sbGFwc2libGUsICdjb2xsYXBzaWJsZScsICdNX0NvbGxhcHNpYmxlJyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBhbGlnbm1lbnQ6ICdsZWZ0JyxcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgY29uc3RyYWluV2lkdGg6IHRydWUsXG4gICAgY29udGFpbmVyOiBudWxsLFxuICAgIGNvdmVyVHJpZ2dlcjogdHJ1ZSxcbiAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgaG92ZXI6IGZhbHNlLFxuICAgIGluRHVyYXRpb246IDE1MCxcbiAgICBvdXREdXJhdGlvbjogMjUwLFxuICAgIG9uT3BlblN0YXJ0OiBudWxsLFxuICAgIG9uT3BlbkVuZDogbnVsbCxcbiAgICBvbkNsb3NlU3RhcnQ6IG51bGwsXG4gICAgb25DbG9zZUVuZDogbnVsbCxcbiAgICBvbkl0ZW1DbGljazogbnVsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICovXG5cbiAgdmFyIERyb3Bkb3duID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICAgX2luaGVyaXRzKERyb3Bkb3duLCBfQ29tcG9uZW50Mik7XG5cbiAgICBmdW5jdGlvbiBEcm9wZG93bihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgICAgdmFyIF90aGlzOSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcm9wZG93bi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKSkuY2FsbCh0aGlzLCBEcm9wZG93biwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM5LmVsLk1fRHJvcGRvd24gPSBfdGhpczk7XG4gICAgICBEcm9wZG93bi5fZHJvcGRvd25zLnB1c2goX3RoaXM5KTtcblxuICAgICAgX3RoaXM5LmlkID0gTS5nZXRJZEZyb21UcmlnZ2VyKGVsKTtcbiAgICAgIF90aGlzOS5kcm9wZG93bkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoX3RoaXM5LmlkKTtcbiAgICAgIF90aGlzOS4kZHJvcGRvd25FbCA9ICQoX3RoaXM5LmRyb3Bkb3duRWwpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBkcm9wZG93blxuICAgICAgICogQG1lbWJlciBEcm9wZG93biNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfSBbYWxpZ25tZW50PSdsZWZ0J10gLSBFZGdlIHdoaWNoIHRoZSBkcm9wZG93biBpcyBhbGlnbmVkIHRvXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2F1dG9Gb2N1cz10cnVlXSAtIEF1dG9tYXRpY2FsbHkgZm9jdXMgZHJvcGRvd24gZWwgZm9yIGtleWJvYXJkXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2NvbnN0cmFpbldpZHRoPXRydWVdIC0gQ29uc3RyYWluIHdpZHRoIHRvIHdpZHRoIG9mIHRoZSBidXR0b25cbiAgICAgICAqIEBwcm9wIHtFbGVtZW50fSBjb250YWluZXIgLSBDb250YWluZXIgZWxlbWVudCB0byBhdHRhY2ggZHJvcGRvd24gdG8gKG9wdGlvbmFsKVxuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtjb3ZlclRyaWdnZXI9dHJ1ZV0gLSBQbGFjZSBkcm9wZG93biBvdmVyIHRyaWdnZXJcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbY2xvc2VPbkNsaWNrPXRydWVdIC0gQ2xvc2Ugb24gY2xpY2sgb2YgZHJvcGRvd24gaXRlbVxuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtob3Zlcj1mYWxzZV0gLSBPcGVuIGRyb3Bkb3duIG9uIGhvdmVyXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW5EdXJhdGlvbj0xNTBdIC0gRHVyYXRpb24gb2Ygb3BlbiBhbmltYXRpb24gaW4gbXNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvdXREdXJhdGlvbj0yNTBdIC0gRHVyYXRpb24gb2YgY2xvc2UgYW5pbWF0aW9uIGluIG1zXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlblN0YXJ0IC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gZHJvcGRvd24gc3RhcnRzIG9wZW5pbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuRW5kIC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gZHJvcGRvd24gZmluaXNoZXMgb3BlbmluZ1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlU3RhcnQgLSBGdW5jdGlvbiBjYWxsZWQgd2hlbiBkcm9wZG93biBzdGFydHMgY2xvc2luZ1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlRW5kIC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gZHJvcGRvd24gZmluaXNoZXMgY2xvc2luZ1xuICAgICAgICovXG4gICAgICBfdGhpczkub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEcm9wZG93bi5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIG9wZW4vY2xvc2Ugc3RhdGUgb2YgZHJvcGRvd25cbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczkuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIGlmIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2Nyb2xsYWJsZVxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIF90aGlzOS5pc1Njcm9sbGFibGUgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgaWYgdG91Y2ggbW92aW5nIG9uIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczkuaXNUb3VjaE1vdmluZyA9IGZhbHNlO1xuXG4gICAgICBfdGhpczkuZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICBfdGhpczkuZmlsdGVyUXVlcnkgPSBbXTtcblxuICAgICAgLy8gTW92ZSBkcm9wZG93bi1jb250ZW50IGFmdGVyIGRyb3Bkb3duLXRyaWdnZXJcbiAgICAgIGlmICghIV90aGlzOS5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICAkKF90aGlzOS5vcHRpb25zLmNvbnRhaW5lcikuYXBwZW5kKF90aGlzOS5kcm9wZG93bkVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzOS4kZWwuYWZ0ZXIoX3RoaXM5LmRyb3Bkb3duRWwpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczkuX21ha2VEcm9wZG93bkZvY3VzYWJsZSgpO1xuICAgICAgX3RoaXM5Ll9yZXNldEZpbHRlclF1ZXJ5Qm91bmQgPSBfdGhpczkuX3Jlc2V0RmlsdGVyUXVlcnkuYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQgPSBfdGhpczkuX2hhbmRsZURvY3VtZW50Q2xpY2suYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9oYW5kbGVEb2N1bWVudFRvdWNobW92ZUJvdW5kID0gX3RoaXM5Ll9oYW5kbGVEb2N1bWVudFRvdWNobW92ZS5iaW5kKF90aGlzOSk7XG4gICAgICBfdGhpczkuX2hhbmRsZURyb3Bkb3duQ2xpY2tCb3VuZCA9IF90aGlzOS5faGFuZGxlRHJvcGRvd25DbGljay5iaW5kKF90aGlzOSk7XG4gICAgICBfdGhpczkuX2hhbmRsZURyb3Bkb3duS2V5ZG93bkJvdW5kID0gX3RoaXM5Ll9oYW5kbGVEcm9wZG93bktleWRvd24uYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9oYW5kbGVUcmlnZ2VyS2V5ZG93bkJvdW5kID0gX3RoaXM5Ll9oYW5kbGVUcmlnZ2VyS2V5ZG93bi5iaW5kKF90aGlzOSk7XG4gICAgICBfdGhpczkuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzOTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZXNldERyb3Bkb3duU3R5bGVzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgRHJvcGRvd24uX2Ryb3Bkb3ducy5zcGxpY2UoRHJvcGRvd24uX2Ryb3Bkb3ducy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgdGhpcy5lbC5NX0Ryb3Bkb3duID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgLy8gVHJpZ2dlciBrZXlkb3duIGhhbmRsZXJcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlVHJpZ2dlcktleWRvd25Cb3VuZCk7XG5cbiAgICAgICAgLy8gSXRlbSBjbGljayBoYW5kbGVyXG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURyb3Bkb3duQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgLy8gSG92ZXIgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3Zlcikge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlRW50ZXJCb3VuZCA9IHRoaXMuX2hhbmRsZU1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9oYW5kbGVNb3VzZUVudGVyQm91bmQpO1xuICAgICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlTGVhdmVCb3VuZCA9IHRoaXMuX2hhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlQm91bmQpO1xuICAgICAgICAgIHRoaXMuZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcblxuICAgICAgICAgIC8vIENsaWNrIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVUcmlnZ2VyS2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRHJvcGRvd25DbGlja0JvdW5kKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyKSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5faGFuZGxlTW91c2VFbnRlckJvdW5kKTtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlQm91bmQpO1xuICAgICAgICAgIHRoaXMuZHJvcGRvd25FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xpY2tCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwVGVtcG9yYXJ5RXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cFRlbXBvcmFyeUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIC8vIFVzZSBjYXB0dXJlIHBoYXNlIGV2ZW50IGhhbmRsZXIgdG8gcHJldmVudCBjbGlja1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRG9jdW1lbnRUb3VjaG1vdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRHJvcGRvd25LZXlkb3duQm91bmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlVGVtcG9yYXJ5RXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVUZW1wb3JhcnlFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAvLyBVc2UgY2FwdHVyZSBwaGFzZSBldmVudCBoYW5kbGVyIHRvIHByZXZlbnQgY2xpY2tcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZURvY3VtZW50VG91Y2htb3ZlQm91bmQpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZURyb3Bkb3duS2V5ZG93bkJvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1vdXNlRW50ZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVNb3VzZUxlYXZlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1vdXNlTGVhdmUoZSkge1xuICAgICAgICB2YXIgdG9FbCA9IGUudG9FbGVtZW50IHx8IGUucmVsYXRlZFRhcmdldDtcbiAgICAgICAgdmFyIGxlYXZlVG9Ecm9wZG93bkNvbnRlbnQgPSAhISQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGg7XG4gICAgICAgIHZhciBsZWF2ZVRvQWN0aXZlRHJvcGRvd25UcmlnZ2VyID0gZmFsc2U7XG5cbiAgICAgICAgdmFyICRjbG9zZXN0VHJpZ2dlciA9ICQodG9FbCkuY2xvc2VzdCgnLmRyb3Bkb3duLXRyaWdnZXInKTtcbiAgICAgICAgaWYgKCRjbG9zZXN0VHJpZ2dlci5sZW5ndGggJiYgISEkY2xvc2VzdFRyaWdnZXJbMF0uTV9Ecm9wZG93biAmJiAkY2xvc2VzdFRyaWdnZXJbMF0uTV9Ecm9wZG93bi5pc09wZW4pIHtcbiAgICAgICAgICBsZWF2ZVRvQWN0aXZlRHJvcGRvd25UcmlnZ2VyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIGhvdmVyIGRyb3Bkb3duIGlmIG1vdXNlIGRpZCBub3QgbGVhdmUgdG8gZWl0aGVyIGFjdGl2ZSBkcm9wZG93bi10cmlnZ2VyIG9yIGRyb3Bkb3duLWNvbnRlbnRcbiAgICAgICAgaWYgKCFsZWF2ZVRvQWN0aXZlRHJvcGRvd25UcmlnZ2VyICYmICFsZWF2ZVRvRHJvcGRvd25Db250ZW50KSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEb2N1bWVudENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZU9uQ2xpY2sgJiYgJHRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCAmJiAhdGhpcy5pc1RvdWNoTW92aW5nKSB7XG4gICAgICAgICAgLy8gaXNUb3VjaE1vdmluZyB0byBjaGVjayBpZiBzY3JvbGxpbmcgb24gbW9iaWxlLlxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMxMC5jbG9zZSgpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9IGVsc2UgaWYgKCR0YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duLXRyaWdnZXInKS5sZW5ndGggfHwgISR0YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGgpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMTAuY2xvc2UoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVG91Y2hNb3ZpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVRyaWdnZXJLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVRyaWdnZXJLZXlkb3duKGUpIHtcbiAgICAgICAgLy8gQVJST1cgRE9XTiBPUiBFTlRFUiBXSEVOIFNFTEVDVCBJUyBDTE9TRUQgLSBvcGVuIERyb3Bkb3duXG4gICAgICAgIGlmICgoZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX0RPV04gfHwgZS53aGljaCA9PT0gTS5rZXlzLkVOVEVSKSAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRG9jdW1lbnQgVG91Y2htb3ZlXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRG9jdW1lbnRUb3VjaG1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRG9jdW1lbnRUb3VjaG1vdmUoZSkge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuICAgICAgICBpZiAoJHRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tY29udGVudCcpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuaXNUb3VjaE1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRHJvcGRvd24gQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEcm9wZG93bkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURyb3Bkb3duQ2xpY2soZSkge1xuICAgICAgICAvLyBvbkl0ZW1DbGljayBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkl0ZW1DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBpdGVtRWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCdsaScpWzBdO1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkl0ZW1DbGljay5jYWxsKHRoaXMsIGl0ZW1FbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRHJvcGRvd24gS2V5ZG93blxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURyb3Bkb3duS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEcm9wZG93bktleWRvd24oZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gTS5rZXlzLlRBQikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICAgICAgICAvLyBOYXZpZ2F0ZSBkb3duIGRyb3Bkb3duIGxpc3RcbiAgICAgICAgfSBlbHNlIGlmICgoZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX0RPV04gfHwgZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX1VQKSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gZS53aGljaCA9PT0gTS5rZXlzLkFSUk9XX0RPV04gPyAxIDogLTE7XG4gICAgICAgICAgdmFyIG5ld0ZvY3VzZWRJbmRleCA9IHRoaXMuZm9jdXNlZEluZGV4O1xuICAgICAgICAgIHZhciBmb3VuZE5ld0luZGV4ID0gZmFsc2U7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgbmV3Rm9jdXNlZEluZGV4ID0gbmV3Rm9jdXNlZEluZGV4ICsgZGlyZWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAoISF0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW5bbmV3Rm9jdXNlZEluZGV4XSAmJiB0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW5bbmV3Rm9jdXNlZEluZGV4XS50YWJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgZm91bmROZXdJbmRleCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gd2hpbGUgKG5ld0ZvY3VzZWRJbmRleCA8IHRoaXMuZHJvcGRvd25FbC5jaGlsZHJlbi5sZW5ndGggJiYgbmV3Rm9jdXNlZEluZGV4ID49IDApO1xuXG4gICAgICAgICAgaWYgKGZvdW5kTmV3SW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXNlZEluZGV4ID0gbmV3Rm9jdXNlZEluZGV4O1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNGb2N1c2VkSXRlbSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEVOVEVSIHNlbGVjdHMgY2hvaWNlIG9uIGZvY3VzZWQgaXRlbVxuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5FTlRFUiAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgICAgIC8vIFNlYXJjaCBmb3IgPGE+IGFuZCA8YnV0dG9uPlxuICAgICAgICAgIHZhciBmb2N1c2VkRWxlbWVudCA9IHRoaXMuZHJvcGRvd25FbC5jaGlsZHJlblt0aGlzLmZvY3VzZWRJbmRleF07XG4gICAgICAgICAgdmFyICRhY3RpdmF0YWJsZUVsZW1lbnQgPSAkKGZvY3VzZWRFbGVtZW50KS5maW5kKCdhLCBidXR0b24nKS5maXJzdCgpO1xuXG4gICAgICAgICAgLy8gQ2xpY2sgYSBvciBidXR0b24gdGFnIGlmIGV4aXN0cywgb3RoZXJ3aXNlIGNsaWNrIGxpIHRhZ1xuICAgICAgICAgIGlmICghISRhY3RpdmF0YWJsZUVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAkYWN0aXZhdGFibGVFbGVtZW50WzBdLmNsaWNrKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghIWZvY3VzZWRFbGVtZW50KSB7XG4gICAgICAgICAgICBmb2N1c2VkRWxlbWVudC5jbGljaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENsb3NlIGRyb3Bkb3duIG9uIEVTQ1xuICAgICAgICB9IGVsc2UgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5FU0MgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ0FTRSBXSEVOIFVTRVIgVFlQRSBMRVRURVJTXG4gICAgICAgIHZhciBsZXR0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICBub25MZXR0ZXJzID0gWzksIDEzLCAyNywgMzgsIDQwXTtcbiAgICAgICAgaWYgKGxldHRlciAmJiBub25MZXR0ZXJzLmluZGV4T2YoZS53aGljaCkgPT09IC0xKSB7XG4gICAgICAgICAgdGhpcy5maWx0ZXJRdWVyeS5wdXNoKGxldHRlcik7XG5cbiAgICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5maWx0ZXJRdWVyeS5qb2luKCcnKSxcbiAgICAgICAgICAgICAgbmV3T3B0aW9uRWwgPSAkKHRoaXMuZHJvcGRvd25FbCkuZmluZCgnbGknKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gJChlbCkudGV4dCgpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzdHJpbmcpID09PSAwO1xuICAgICAgICAgIH0pWzBdO1xuXG4gICAgICAgICAgaWYgKG5ld09wdGlvbkVsKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJbmRleCA9ICQobmV3T3B0aW9uRWwpLmluZGV4KCk7XG4gICAgICAgICAgICB0aGlzLl9mb2N1c0ZvY3VzZWRJdGVtKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWx0ZXJUaW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLl9yZXNldEZpbHRlclF1ZXJ5Qm91bmQsIDEwMDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVzZXRGaWx0ZXJRdWVyeVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXNldEZpbHRlclF1ZXJ5KCkge1xuICAgICAgICB0aGlzLmZpbHRlclF1ZXJ5ID0gW107XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZXNldERyb3Bkb3duU3R5bGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2V0RHJvcGRvd25TdHlsZXMoKSB7XG4gICAgICAgIHRoaXMuJGRyb3Bkb3duRWwuY3NzKHtcbiAgICAgICAgICBkaXNwbGF5OiAnJyxcbiAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICd0cmFuc2Zvcm0tb3JpZ2luJzogJycsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgICBvcGFjaXR5OiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX21ha2VEcm9wZG93bkZvY3VzYWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlRHJvcGRvd25Gb2N1c2FibGUoKSB7XG4gICAgICAgIC8vIE5lZWRlZCBmb3IgYXJyb3cga2V5IG5hdmlnYXRpb25cbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnRhYkluZGV4ID0gMDtcblxuICAgICAgICAvLyBPbmx5IHNldCB0YWJpbmRleCBpZiBpdCBoYXNuJ3QgYmVlbiBzZXQgYnkgdXNlclxuICAgICAgICAkKHRoaXMuZHJvcGRvd25FbCkuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGlmICghZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2ZvY3VzRm9jdXNlZEl0ZW1cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZm9jdXNGb2N1c2VkSXRlbSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNlZEluZGV4ID49IDAgJiYgdGhpcy5mb2N1c2VkSW5kZXggPCB0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW4ubGVuZ3RoICYmIHRoaXMub3B0aW9ucy5hdXRvRm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW5bdGhpcy5mb2N1c2VkSW5kZXhdLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2dldERyb3Bkb3duUG9zaXRpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZ2V0RHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgdmFyIG9mZnNldFBhcmVudEJSZWN0ID0gdGhpcy5lbC5vZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB0cmlnZ2VyQlJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgZHJvcGRvd25CUmVjdCA9IHRoaXMuZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICB2YXIgaWRlYWxIZWlnaHQgPSBkcm9wZG93bkJSZWN0LmhlaWdodDtcbiAgICAgICAgdmFyIGlkZWFsV2lkdGggPSBkcm9wZG93bkJSZWN0LndpZHRoO1xuICAgICAgICB2YXIgaWRlYWxYUG9zID0gdHJpZ2dlckJSZWN0LmxlZnQgLSBkcm9wZG93bkJSZWN0LmxlZnQ7XG4gICAgICAgIHZhciBpZGVhbFlQb3MgPSB0cmlnZ2VyQlJlY3QudG9wIC0gZHJvcGRvd25CUmVjdC50b3A7XG5cbiAgICAgICAgdmFyIGRyb3Bkb3duQm91bmRzID0ge1xuICAgICAgICAgIGxlZnQ6IGlkZWFsWFBvcyxcbiAgICAgICAgICB0b3A6IGlkZWFsWVBvcyxcbiAgICAgICAgICBoZWlnaHQ6IGlkZWFsSGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBpZGVhbFdpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ291bnRhaW5lciBoZXJlIHdpbGwgYmUgY2xvc2VzdCBhbmNlc3RvciB3aXRoIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgdmFyIGNsb3Nlc3RPdmVyZmxvd1BhcmVudCA9ICEhdGhpcy5kcm9wZG93bkVsLm9mZnNldFBhcmVudCA/IHRoaXMuZHJvcGRvd25FbC5vZmZzZXRQYXJlbnQgOiB0aGlzLmRyb3Bkb3duRWwucGFyZW50Tm9kZTtcblxuICAgICAgICB2YXIgYWxpZ25tZW50cyA9IE0uY2hlY2tQb3NzaWJsZUFsaWdubWVudHModGhpcy5lbCwgY2xvc2VzdE92ZXJmbG93UGFyZW50LCBkcm9wZG93bkJvdW5kcywgdGhpcy5vcHRpb25zLmNvdmVyVHJpZ2dlciA/IDAgOiB0cmlnZ2VyQlJlY3QuaGVpZ2h0KTtcblxuICAgICAgICB2YXIgdmVydGljYWxBbGlnbm1lbnQgPSAndG9wJztcbiAgICAgICAgdmFyIGhvcml6b250YWxBbGlnbm1lbnQgPSB0aGlzLm9wdGlvbnMuYWxpZ25tZW50O1xuICAgICAgICBpZGVhbFlQb3MgKz0gdGhpcy5vcHRpb25zLmNvdmVyVHJpZ2dlciA/IDAgOiB0cmlnZ2VyQlJlY3QuaGVpZ2h0O1xuXG4gICAgICAgIC8vIFJlc2V0IGlzU2Nyb2xsYWJsZVxuICAgICAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghYWxpZ25tZW50cy50b3ApIHtcbiAgICAgICAgICBpZiAoYWxpZ25tZW50cy5ib3R0b20pIHtcbiAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50ID0gJ2JvdHRvbSc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxhYmxlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpZGUgaGFzIG1vc3Qgc3BhY2UgYW5kIGN1dG9mZiBhdCBjb3JyZWN0IGhlaWdodFxuICAgICAgICAgICAgaWYgKGFsaWdubWVudHMuc3BhY2VPblRvcCA+IGFsaWdubWVudHMuc3BhY2VPbkJvdHRvbSkge1xuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudCA9ICdib3R0b20nO1xuICAgICAgICAgICAgICBpZGVhbEhlaWdodCArPSBhbGlnbm1lbnRzLnNwYWNlT25Ub3A7XG4gICAgICAgICAgICAgIGlkZWFsWVBvcyAtPSBhbGlnbm1lbnRzLnNwYWNlT25Ub3A7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZGVhbEhlaWdodCArPSBhbGlnbm1lbnRzLnNwYWNlT25Cb3R0b207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgcHJlZmVycmVkIGhvcml6b250YWwgYWxpZ25tZW50IGlzIHBvc3NpYmxlXG4gICAgICAgIGlmICghYWxpZ25tZW50c1tob3Jpem9udGFsQWxpZ25tZW50XSkge1xuICAgICAgICAgIHZhciBvcHBvc2l0ZUFsaWdubWVudCA9IGhvcml6b250YWxBbGlnbm1lbnQgPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgICAgICAgaWYgKGFsaWdubWVudHNbb3Bwb3NpdGVBbGlnbm1lbnRdKSB7XG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50ID0gb3Bwb3NpdGVBbGlnbm1lbnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIERldGVybWluZSB3aGljaCBzaWRlIGhhcyBtb3N0IHNwYWNlIGFuZCBjdXRvZmYgYXQgY29ycmVjdCBoZWlnaHRcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnRzLnNwYWNlT25MZWZ0ID4gYWxpZ25tZW50cy5zcGFjZU9uUmlnaHQpIHtcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdyaWdodCc7XG4gICAgICAgICAgICAgIGlkZWFsV2lkdGggKz0gYWxpZ25tZW50cy5zcGFjZU9uTGVmdDtcbiAgICAgICAgICAgICAgaWRlYWxYUG9zIC09IGFsaWdubWVudHMuc3BhY2VPbkxlZnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50ID0gJ2xlZnQnO1xuICAgICAgICAgICAgICBpZGVhbFdpZHRoICs9IGFsaWdubWVudHMuc3BhY2VPblJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICBpZGVhbFlQb3MgPSBpZGVhbFlQb3MgLSBkcm9wZG93bkJSZWN0LmhlaWdodCArICh0aGlzLm9wdGlvbnMuY292ZXJUcmlnZ2VyID8gdHJpZ2dlckJSZWN0LmhlaWdodCA6IDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3Jpem9udGFsQWxpZ25tZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgaWRlYWxYUG9zID0gaWRlYWxYUG9zIC0gZHJvcGRvd25CUmVjdC53aWR0aCArIHRyaWdnZXJCUmVjdC53aWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IGlkZWFsWFBvcyxcbiAgICAgICAgICB5OiBpZGVhbFlQb3MsXG4gICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IHZlcnRpY2FsQWxpZ25tZW50LFxuICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQ6IGhvcml6b250YWxBbGlnbm1lbnQsXG4gICAgICAgICAgaGVpZ2h0OiBpZGVhbEhlaWdodCxcbiAgICAgICAgICB3aWR0aDogaWRlYWxXaWR0aFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW4gZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluKCkge1xuICAgICAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5kcm9wZG93bkVsKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5kcm9wZG93bkVsLFxuICAgICAgICAgIG9wYWNpdHk6IHtcbiAgICAgICAgICAgIHZhbHVlOiBbMCwgMV0sXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjYWxlWDogWzAuMywgMV0sXG4gICAgICAgICAgc2NhbGVZOiBbMC4zLCAxXSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1aW50JyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgICAgICAgIGlmIChfdGhpczExLm9wdGlvbnMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgIF90aGlzMTEuZHJvcGRvd25FbC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbk9wZW5FbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMxMS5vcHRpb25zLm9uT3BlbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczExLm9wdGlvbnMub25PcGVuRW5kLmNhbGwoX3RoaXMxMSwgX3RoaXMxMS5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIG91dCBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgdmFyIF90aGlzMTIgPSB0aGlzO1xuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZHJvcGRvd25FbCk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZHJvcGRvd25FbCxcbiAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWludCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjYWxlWDogMC4zLFxuICAgICAgICAgIHNjYWxlWTogMC4zLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1aW50JyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgICAgICAgIF90aGlzMTIuX3Jlc2V0RHJvcGRvd25TdHlsZXMoKTtcblxuICAgICAgICAgICAgLy8gb25DbG9zZUVuZCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczEyLm9wdGlvbnMub25DbG9zZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczEyLm9wdGlvbnMub25DbG9zZUVuZC5jYWxsKF90aGlzMTIsIF90aGlzMTIuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUGxhY2UgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9wbGFjZURyb3Bkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3BsYWNlRHJvcGRvd24oKSB7XG4gICAgICAgIC8vIFNldCB3aWR0aCBiZWZvcmUgY2FsY3VsYXRpbmcgcG9zaXRpb25JbmZvXG4gICAgICAgIHZhciBpZGVhbFdpZHRoID0gdGhpcy5vcHRpb25zLmNvbnN0cmFpbldpZHRoID8gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA6IHRoaXMuZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnN0eWxlLndpZHRoID0gaWRlYWxXaWR0aCArICdweCc7XG5cbiAgICAgICAgdmFyIHBvc2l0aW9uSW5mbyA9IHRoaXMuX2dldERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnN0eWxlLmxlZnQgPSBwb3NpdGlvbkluZm8ueCArICdweCc7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS50b3AgPSBwb3NpdGlvbkluZm8ueSArICdweCc7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS5oZWlnaHQgPSBwb3NpdGlvbkluZm8uaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnN0eWxlLndpZHRoID0gcG9zaXRpb25JbmZvLndpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IChwb3NpdGlvbkluZm8uaG9yaXpvbnRhbEFsaWdubWVudCA9PT0gJ2xlZnQnID8gJzAnIDogJzEwMCUnKSArIFwiIFwiICsgKHBvc2l0aW9uSW5mby52ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ3RvcCcgPyAnMCcgOiAnMTAwJScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE9wZW4gRHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuXG4gICAgICAgIC8vIG9uT3BlblN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0LmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBzdHlsZXNcbiAgICAgICAgdGhpcy5fcmVzZXREcm9wZG93blN0eWxlcygpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duRWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgdGhpcy5fcGxhY2VEcm9wZG93bigpO1xuICAgICAgICB0aGlzLl9hbmltYXRlSW4oKTtcbiAgICAgICAgdGhpcy5fc2V0dXBUZW1wb3JhcnlFdmVudEhhbmRsZXJzKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2UgRHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mb2N1c2VkSW5kZXggPSAtMTtcblxuICAgICAgICAvLyBvbkNsb3NlU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYW5pbWF0ZU91dCgpO1xuICAgICAgICB0aGlzLl9yZW1vdmVUZW1wb3JhcnlFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvRm9jdXMpIHtcbiAgICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZWNhbGN1bGF0ZSBkaW1lbnNpb25zXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZWNhbGN1bGF0ZURpbWVuc2lvbnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWNhbGN1bGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMuJGRyb3Bkb3duRWwuY3NzKHtcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICAgIHRvcDogJycsXG4gICAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICcnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fcGxhY2VEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KERyb3Bkb3duLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRHJvcGRvd24pLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9Ecm9wZG93bjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBEcm9wZG93bjtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBEcm9wZG93blxuICAgKi9cblxuXG4gIERyb3Bkb3duLl9kcm9wZG93bnMgPSBbXTtcblxuICBNLkRyb3Bkb3duID0gRHJvcGRvd247XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihEcm9wZG93biwgJ2Ryb3Bkb3duJywgJ01fRHJvcGRvd24nKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIG9wYWNpdHk6IDAuNSxcbiAgICBpbkR1cmF0aW9uOiAyNTAsXG4gICAgb3V0RHVyYXRpb246IDI1MCxcbiAgICBvbk9wZW5TdGFydDogbnVsbCxcbiAgICBvbk9wZW5FbmQ6IG51bGwsXG4gICAgb25DbG9zZVN0YXJ0OiBudWxsLFxuICAgIG9uQ2xvc2VFbmQ6IG51bGwsXG4gICAgcHJldmVudFNjcm9sbGluZzogdHJ1ZSxcbiAgICBkaXNtaXNzaWJsZTogdHJ1ZSxcbiAgICBzdGFydGluZ1RvcDogJzQlJyxcbiAgICBlbmRpbmdUb3A6ICcxMCUnXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgTW9kYWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDMpIHtcbiAgICBfaW5oZXJpdHMoTW9kYWwsIF9Db21wb25lbnQzKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBNb2RhbCBpbnN0YW5jZSBhbmQgc2V0IHVwIG92ZXJsYXlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBNb2RhbChlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vZGFsKTtcblxuICAgICAgdmFyIF90aGlzMTMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTW9kYWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihNb2RhbCkpLmNhbGwodGhpcywgTW9kYWwsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMTMuZWwuTV9Nb2RhbCA9IF90aGlzMTM7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIG1vZGFsXG4gICAgICAgKiBAbWVtYmVyIE1vZGFsI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvcGFjaXR5PTAuNV0gLSBPcGFjaXR5IG9mIHRoZSBtb2RhbCBvdmVybGF5XG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW5EdXJhdGlvbj0yNTBdIC0gTGVuZ3RoIGluIG1zIG9mIGVudGVyIHRyYW5zaXRpb25cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvdXREdXJhdGlvbj0yNTBdIC0gTGVuZ3RoIGluIG1zIG9mIGV4aXQgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbW9kYWwgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBtb2RhbCBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBtb2RhbCBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZUVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBtb2RhbCBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbZGlzbWlzc2libGU9dHJ1ZV0gLSBBbGxvdyBtb2RhbCB0byBiZSBkaXNtaXNzZWQgYnkga2V5Ym9hcmQgb3Igb3ZlcmxheSBjbGlja1xuICAgICAgICogQHByb3Age1N0cmluZ30gW3N0YXJ0aW5nVG9wPSc0JSddIC0gc3RhcnRpbmdUb3BcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IFtlbmRpbmdUb3A9JzEwJSddIC0gZW5kaW5nVG9wXG4gICAgICAgKi9cbiAgICAgIF90aGlzMTMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNb2RhbC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIG9wZW4vY2xvc2Ugc3RhdGUgb2YgbW9kYWxcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczEzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICBfdGhpczEzLmlkID0gX3RoaXMxMy4kZWwuYXR0cignaWQnKTtcbiAgICAgIF90aGlzMTMuX29wZW5pbmdUcmlnZ2VyID0gdW5kZWZpbmVkO1xuICAgICAgX3RoaXMxMy4kb3ZlcmxheSA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1vdmVybGF5XCI+PC9kaXY+Jyk7XG4gICAgICBfdGhpczEzLmVsLnRhYkluZGV4ID0gMDtcbiAgICAgIF90aGlzMTMuX250aE1vZGFsT3BlbmVkID0gMDtcblxuICAgICAgTW9kYWwuX2NvdW50Kys7XG4gICAgICBfdGhpczEzLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczEzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNb2RhbCwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIE1vZGFsLl9jb3VudC0tO1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmVsLk1fTW9kYWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU92ZXJsYXlDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmIChNb2RhbC5fY291bnQgPT09IDEpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRvdmVybGF5WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlTW9kYWxDbG9zZUNsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgaWYgKE1vZGFsLl9jb3VudCA9PT0gMCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJG92ZXJsYXlbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVNb2RhbENsb3NlQ2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFRyaWdnZXIgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVUcmlnZ2VyQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgICAgdmFyICR0cmlnZ2VyID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLm1vZGFsLXRyaWdnZXInKTtcbiAgICAgICAgaWYgKCR0cmlnZ2VyLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBtb2RhbElkID0gTS5nZXRJZEZyb21UcmlnZ2VyKCR0cmlnZ2VyWzBdKTtcbiAgICAgICAgICB2YXIgbW9kYWxJbnN0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsSWQpLk1fTW9kYWw7XG4gICAgICAgICAgaWYgKG1vZGFsSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIG1vZGFsSW5zdGFuY2Uub3BlbigkdHJpZ2dlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBPdmVybGF5IENsaWNrXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlT3ZlcmxheUNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU92ZXJsYXlDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBNb2RhbCBDbG9zZSBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1vZGFsQ2xvc2VDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb2RhbENsb3NlQ2xpY2soZSkge1xuICAgICAgICB2YXIgJGNsb3NlVHJpZ2dlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbC1jbG9zZScpO1xuICAgICAgICBpZiAoJGNsb3NlVHJpZ2dlci5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgS2V5ZG93blxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUtleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlS2V5ZG93bihlKSB7XG4gICAgICAgIC8vIEVTQyBrZXlcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5vcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIEZvY3VzXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRm9jdXMoZSkge1xuICAgICAgICAvLyBPbmx5IHRyYXAgZm9jdXMgaWYgdGhpcyBtb2RhbCBpcyB0aGUgbGFzdCBtb2RlbCBvcGVuZWQgKHByZXZlbnRzIGxvb3BzIGluIG5lc3RlZCBtb2RhbHMpLlxuICAgICAgICBpZiAoIXRoaXMuZWwuY29udGFpbnMoZS50YXJnZXQpICYmIHRoaXMuX250aE1vZGFsT3BlbmVkID09PSBNb2RhbC5fbW9kYWxzT3Blbikge1xuICAgICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW4gbW9kYWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluKCkge1xuICAgICAgICB2YXIgX3RoaXMxNCA9IHRoaXM7XG5cbiAgICAgICAgLy8gU2V0IGluaXRpYWwgc3R5bGVzXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuZWwuc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSk7XG4gICAgICAgICQuZXh0ZW5kKHRoaXMuJG92ZXJsYXlbMF0uc3R5bGUsIHtcbiAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSBvdmVybGF5XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgICAgb3BhY2l0eTogdGhpcy5vcHRpb25zLm9wYWNpdHksXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEZWZpbmUgbW9kYWwgYW5pbWF0aW9uIG9wdGlvbnNcbiAgICAgICAgdmFyIGVudGVyQW5pbU9wdGlvbnMgPSB7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJyxcbiAgICAgICAgICAvLyBIYW5kbGUgbW9kYWwgb25PcGVuRW5kIGNhbGxiYWNrXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMxNC5vcHRpb25zLm9uT3BlbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczE0Lm9wdGlvbnMub25PcGVuRW5kLmNhbGwoX3RoaXMxNCwgX3RoaXMxNC5lbCwgX3RoaXMxNC5fb3BlbmluZ1RyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCb3R0b20gc2hlZXQgYW5pbWF0aW9uXG4gICAgICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYm90dG9tLXNoZWV0JykpIHtcbiAgICAgICAgICAkLmV4dGVuZChlbnRlckFuaW1PcHRpb25zLCB7XG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYW5pbShlbnRlckFuaW1PcHRpb25zKTtcblxuICAgICAgICAgIC8vIE5vcm1hbCBtb2RhbCBhbmltYXRpb25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkLmV4dGVuZChlbnRlckFuaW1PcHRpb25zLCB7XG4gICAgICAgICAgICB0b3A6IFt0aGlzLm9wdGlvbnMuc3RhcnRpbmdUb3AsIHRoaXMub3B0aW9ucy5lbmRpbmdUb3BdLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHNjYWxlWDogWzAuOCwgMV0sXG4gICAgICAgICAgICBzY2FsZVk6IFswLjgsIDFdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYW5pbShlbnRlckFuaW1PcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgb3V0IG1vZGFsXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3V0KCkge1xuICAgICAgICB2YXIgX3RoaXMxNSA9IHRoaXM7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSBvdmVybGF5XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVmaW5lIG1vZGFsIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgICAgIHZhciBleGl0QW5pbU9wdGlvbnMgPSB7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMTUuZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIF90aGlzMTUuJG92ZXJsYXkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIENhbGwgb25DbG9zZUVuZCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczE1Lm9wdGlvbnMub25DbG9zZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczE1Lm9wdGlvbnMub25DbG9zZUVuZC5jYWxsKF90aGlzMTUsIF90aGlzMTUuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBCb3R0b20gc2hlZXQgYW5pbWF0aW9uXG4gICAgICAgIGlmICh0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYm90dG9tLXNoZWV0JykpIHtcbiAgICAgICAgICAkLmV4dGVuZChleGl0QW5pbU9wdGlvbnMsIHtcbiAgICAgICAgICAgIGJvdHRvbTogJy0xMDAlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhbmltKGV4aXRBbmltT3B0aW9ucyk7XG5cbiAgICAgICAgICAvLyBOb3JtYWwgbW9kYWwgYW5pbWF0aW9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJC5leHRlbmQoZXhpdEFuaW1PcHRpb25zLCB7XG4gICAgICAgICAgICB0b3A6IFt0aGlzLm9wdGlvbnMuZW5kaW5nVG9wLCB0aGlzLm9wdGlvbnMuc3RhcnRpbmdUb3BdLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIHNjYWxlWDogMC44LFxuICAgICAgICAgICAgc2NhbGVZOiAwLjhcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhbmltKGV4aXRBbmltT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIE1vZGFsXG4gICAgICAgKiBAcGFyYW0ge2Nhc2h9IFskdHJpZ2dlcl1cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCR0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgTW9kYWwuX21vZGFsc09wZW4rKztcbiAgICAgICAgdGhpcy5fbnRoTW9kYWxPcGVuZWQgPSBNb2RhbC5fbW9kYWxzT3BlbjtcblxuICAgICAgICAvLyBTZXQgWi1JbmRleCBiYXNlZCBvbiBudW1iZXIgb2YgY3VycmVudGx5IG9wZW4gbW9kYWxzXG4gICAgICAgIHRoaXMuJG92ZXJsYXlbMF0uc3R5bGUuekluZGV4ID0gMTAwMCArIE1vZGFsLl9tb2RhbHNPcGVuICogMjtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS56SW5kZXggPSAxMDAwICsgTW9kYWwuX21vZGFsc09wZW4gKiAyICsgMTtcblxuICAgICAgICAvLyBTZXQgb3BlbmluZyB0cmlnZ2VyLCB1bmRlZmluZWQgaW5kaWNhdGVzIG1vZGFsIHdhcyBvcGVuZWQgYnkgamF2YXNjcmlwdFxuICAgICAgICB0aGlzLl9vcGVuaW5nVHJpZ2dlciA9ICEhJHRyaWdnZXIgPyAkdHJpZ2dlclswXSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBvbk9wZW5TdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwsIHRoaXMuX29wZW5pbmdUcmlnZ2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmVudFNjcm9sbGluZykge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgICAgICB0aGlzLmVsLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCB0aGlzLiRvdmVybGF5WzBdKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmRpc21pc3NpYmxlKSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlS2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQgPSB0aGlzLl9oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duQm91bmQpO1xuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlRm9jdXNCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy4kb3ZlcmxheVswXSk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbigpO1xuXG4gICAgICAgIC8vIEZvY3VzIG1vZGFsXG4gICAgICAgIHRoaXMuZWwuZm9jdXMoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBNb2RhbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIE1vZGFsLl9tb2RhbHNPcGVuLS07XG4gICAgICAgIHRoaXMuX250aE1vZGFsT3BlbmVkID0gMDtcblxuICAgICAgICAvLyBDYWxsIG9uQ2xvc2VTdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0LmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcblxuICAgICAgICAvLyBFbmFibGUgYm9keSBzY3JvbGxpbmcgb25seSBpZiB0aGVyZSBhcmUgbm8gbW9yZSBtb2RhbHMgb3Blbi5cbiAgICAgICAgaWYgKE1vZGFsLl9tb2RhbHNPcGVuID09PSAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVLZXlkb3duQm91bmQpO1xuICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlRm9jdXNCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy4kb3ZlcmxheVswXSk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVPdXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9Nb2RhbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBNb2RhbFxuICAgKi9cblxuXG4gIE1vZGFsLl9tb2RhbHNPcGVuID0gMDtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgTW9kYWxcbiAgICovXG4gIE1vZGFsLl9jb3VudCA9IDA7XG5cbiAgTS5Nb2RhbCA9IE1vZGFsO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoTW9kYWwsICdtb2RhbCcsICdNX01vZGFsJyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBpbkR1cmF0aW9uOiAyNzUsXG4gICAgb3V0RHVyYXRpb246IDIwMCxcbiAgICBvbk9wZW5TdGFydDogbnVsbCxcbiAgICBvbk9wZW5FbmQ6IG51bGwsXG4gICAgb25DbG9zZVN0YXJ0OiBudWxsLFxuICAgIG9uQ2xvc2VFbmQ6IG51bGxcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBNYXRlcmlhbGJveCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50NCkge1xuICAgIF9pbmhlcml0cyhNYXRlcmlhbGJveCwgX0NvbXBvbmVudDQpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IE1hdGVyaWFsYm94IGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gTWF0ZXJpYWxib3goZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYXRlcmlhbGJveCk7XG5cbiAgICAgIHZhciBfdGhpczE2ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1hdGVyaWFsYm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWF0ZXJpYWxib3gpKS5jYWxsKHRoaXMsIE1hdGVyaWFsYm94LCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczE2LmVsLk1fTWF0ZXJpYWxib3ggPSBfdGhpczE2O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBtb2RhbFxuICAgICAgICogQG1lbWJlciBNYXRlcmlhbGJveCNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW5EdXJhdGlvbj0yNzVdIC0gTGVuZ3RoIGluIG1zIG9mIGVudGVyIHRyYW5zaXRpb25cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvdXREdXJhdGlvbj0yMDBdIC0gTGVuZ3RoIGluIG1zIG9mIGV4aXQgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbWF0ZXJpYWxib3ggaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBtYXRlcmlhbGJveCBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBtYXRlcmlhbGJveCBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZUVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBtYXRlcmlhbGJveCBpcyBjbG9zZWRcbiAgICAgICAqL1xuICAgICAgX3RoaXMxNi5vcHRpb25zID0gJC5leHRlbmQoe30sIE1hdGVyaWFsYm94LmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXMxNi5vdmVybGF5QWN0aXZlID0gZmFsc2U7XG4gICAgICBfdGhpczE2LmRvbmVBbmltYXRpbmcgPSB0cnVlO1xuICAgICAgX3RoaXMxNi5wbGFjZWhvbGRlciA9ICQoJzxkaXY+PC9kaXY+JykuYWRkQ2xhc3MoJ21hdGVyaWFsLXBsYWNlaG9sZGVyJyk7XG4gICAgICBfdGhpczE2Lm9yaWdpbmFsV2lkdGggPSAwO1xuICAgICAgX3RoaXMxNi5vcmlnaW5hbEhlaWdodCA9IDA7XG4gICAgICBfdGhpczE2Lm9yaWdpbklubGluZVN0eWxlcyA9IF90aGlzMTYuJGVsLmF0dHIoJ3N0eWxlJyk7XG4gICAgICBfdGhpczE2LmNhcHRpb24gPSBfdGhpczE2LmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXB0aW9uJykgfHwgJyc7XG5cbiAgICAgIC8vIFdyYXBcbiAgICAgIF90aGlzMTYuJGVsLmJlZm9yZShfdGhpczE2LnBsYWNlaG9sZGVyKTtcbiAgICAgIF90aGlzMTYucGxhY2Vob2xkZXIuYXBwZW5kKF90aGlzMTYuJGVsKTtcblxuICAgICAgX3RoaXMxNi5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXMxNjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTWF0ZXJpYWxib3gsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuZWwuTV9NYXRlcmlhbGJveCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBVbndyYXAgaW1hZ2VcbiAgICAgICAgJCh0aGlzLnBsYWNlaG9sZGVyKS5hZnRlcih0aGlzLmVsKS5yZW1vdmUoKTtcblxuICAgICAgICB0aGlzLiRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlTWF0ZXJpYWxib3hDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlTWF0ZXJpYWxib3hDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlTWF0ZXJpYWxib3hDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVNYXRlcmlhbGJveENsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBNYXRlcmlhbGJveCBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTWF0ZXJpYWxib3hDbGljayhlKSB7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbW9kYWwsIHJldHVybiB0byBvcmlnaW5hbFxuICAgICAgICBpZiAodGhpcy5kb25lQW5pbWF0aW5nID09PSBmYWxzZSB8fCB0aGlzLm92ZXJsYXlBY3RpdmUgJiYgdGhpcy5kb25lQW5pbWF0aW5nKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFdpbmRvdyBTY3JvbGxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dTY3JvbGxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93U2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFdpbmRvdyBSZXNpemVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5vdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFdpbmRvdyBSZXNpemVcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dFc2NhcGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93RXNjYXBlKGUpIHtcbiAgICAgICAgLy8gRVNDIGtleVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiB0aGlzLmRvbmVBbmltYXRpbmcgJiYgdGhpcy5vdmVybGF5QWN0aXZlKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmluZCBhbmNlc3RvcnMgd2l0aCBvdmVyZmxvdzogaGlkZGVuOyBhbmQgbWFrZSB2aXNpYmxlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfbWFrZUFuY2VzdG9yc092ZXJmbG93VmlzaWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWtlQW5jZXN0b3JzT3ZlcmZsb3dWaXNpYmxlKCkge1xuICAgICAgICB0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPSAkKCk7XG4gICAgICAgIHZhciBhbmNlc3RvciA9IHRoaXMucGxhY2Vob2xkZXJbMF0ucGFyZW50Tm9kZTtcbiAgICAgICAgd2hpbGUgKGFuY2VzdG9yICE9PSBudWxsICYmICEkKGFuY2VzdG9yKS5pcyhkb2N1bWVudCkpIHtcbiAgICAgICAgICB2YXIgY3VyciA9ICQoYW5jZXN0b3IpO1xuICAgICAgICAgIGlmIChjdXJyLmNzcygnb3ZlcmZsb3cnKSAhPT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgICBjdXJyLmNzcygnb3ZlcmZsb3cnLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYW5jZXN0b3JzQ2hhbmdlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHRoaXMuYW5jZXN0b3JzQ2hhbmdlZCA9IGN1cnI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPSB0aGlzLmFuY2VzdG9yc0NoYW5nZWQuYWRkKGN1cnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGltYWdlIGluXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUltYWdlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUltYWdlSW4oKSB7XG4gICAgICAgIHZhciBfdGhpczE3ID0gdGhpcztcblxuICAgICAgICB2YXIgYW5pbU9wdGlvbnMgPSB7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICBoZWlnaHQ6IFt0aGlzLm9yaWdpbmFsSGVpZ2h0LCB0aGlzLm5ld0hlaWdodF0sXG4gICAgICAgICAgd2lkdGg6IFt0aGlzLm9yaWdpbmFsV2lkdGgsIHRoaXMubmV3V2lkdGhdLFxuICAgICAgICAgIGxlZnQ6IE0uZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0KCkgKyB0aGlzLndpbmRvd1dpZHRoIC8gMiAtIHRoaXMucGxhY2Vob2xkZXIub2Zmc2V0KCkubGVmdCAtIHRoaXMubmV3V2lkdGggLyAyLFxuICAgICAgICAgIHRvcDogTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpICsgdGhpcy53aW5kb3dIZWlnaHQgLyAyIC0gdGhpcy5wbGFjZWhvbGRlci5vZmZzZXQoKS50b3AgLSB0aGlzLm5ld0hlaWdodCAvIDIsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMxNy5kb25lQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gb25PcGVuRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMTcub3B0aW9ucy5vbk9wZW5FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxNy5vcHRpb25zLm9uT3BlbkVuZC5jYWxsKF90aGlzMTcsIF90aGlzMTcuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBPdmVycmlkZSBtYXgtd2lkdGggb3IgbWF4LWhlaWdodCBpZiBuZWVkZWRcbiAgICAgICAgdGhpcy5tYXhXaWR0aCA9IHRoaXMuJGVsLmNzcygnbWF4LXdpZHRoJyk7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gdGhpcy4kZWwuY3NzKCdtYXgtaGVpZ2h0Jyk7XG4gICAgICAgIGlmICh0aGlzLm1heFdpZHRoICE9PSAnbm9uZScpIHtcbiAgICAgICAgICBhbmltT3B0aW9ucy5tYXhXaWR0aCA9IHRoaXMubmV3V2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF4SGVpZ2h0ICE9PSAnbm9uZScpIHtcbiAgICAgICAgICBhbmltT3B0aW9ucy5tYXhIZWlnaHQgPSB0aGlzLm5ld0hlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0oYW5pbU9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW1hZ2Ugb3V0XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUltYWdlT3V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbWFnZU91dCgpIHtcbiAgICAgICAgdmFyIF90aGlzMTggPSB0aGlzO1xuXG4gICAgICAgIHZhciBhbmltT3B0aW9ucyA9IHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICAgIHdpZHRoOiB0aGlzLm9yaWdpbmFsV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLm9yaWdpbmFsSGVpZ2h0LFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczE4LnBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICcnLFxuICAgICAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICAgICBsZWZ0OiAnJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJldmVydCB0byB3aWR0aCBvciBoZWlnaHQgYXR0cmlidXRlXG4gICAgICAgICAgICBpZiAoX3RoaXMxOC5hdHRyV2lkdGgpIHtcbiAgICAgICAgICAgICAgX3RoaXMxOC4kZWwuYXR0cignd2lkdGgnLCBfdGhpczE4LmF0dHJXaWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX3RoaXMxOC5hdHRySGVpZ2h0KSB7XG4gICAgICAgICAgICAgIF90aGlzMTguJGVsLmF0dHIoJ2hlaWdodCcsIF90aGlzMTguYXR0ckhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzMTguJGVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfdGhpczE4Lm9yaWdpbklubGluZVN0eWxlcyAmJiBfdGhpczE4LiRlbC5hdHRyKCdzdHlsZScsIF90aGlzMTgub3JpZ2luSW5saW5lU3R5bGVzKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGNsYXNzXG4gICAgICAgICAgICBfdGhpczE4LiRlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBfdGhpczE4LmRvbmVBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgb3ZlcmZsb3cgb3ZlcnJpZGVzIG9uIGFuY2VzdG9yc1xuICAgICAgICAgICAgaWYgKF90aGlzMTguYW5jZXN0b3JzQ2hhbmdlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgX3RoaXMxOC5hbmNlc3RvcnNDaGFuZ2VkLmNzcygnb3ZlcmZsb3cnLCAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9uQ2xvc2VFbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMxOC5vcHRpb25zLm9uQ2xvc2VFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxOC5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczE4LCBfdGhpczE4LmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYW5pbShhbmltT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVXBkYXRlIG9wZW4gYW5kIGNsb3NlIHZhcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVWYXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVZhcnMoKSB7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKSB8fCAnJztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIE1hdGVyaWFsYm94XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgdmFyIF90aGlzMTkgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhcnMoKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEhlaWdodCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgIC8vIFNldCBzdGF0ZXNcbiAgICAgICAgdGhpcy5kb25lQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5vdmVybGF5QWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAvLyBvbk9wZW5TdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHBvc2l0aW9uaW5nIGZvciBwbGFjZWhvbGRlclxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHRoaXMucGxhY2Vob2xkZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5wbGFjZWhvbGRlclswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyAncHgnLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX21ha2VBbmNlc3RvcnNPdmVyZmxvd1Zpc2libGUoKTtcblxuICAgICAgICAvLyBTZXQgY3NzIG9uIG9yaWdpblxuICAgICAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICd6LWluZGV4JzogMTAwMCxcbiAgICAgICAgICAnd2lsbC1jaGFuZ2UnOiAnbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0J1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGFuZ2UgZnJvbSB3aWR0aCBvciBoZWlnaHQgYXR0cmlidXRlIHRvIGNzc1xuICAgICAgICB0aGlzLmF0dHJXaWR0aCA9IHRoaXMuJGVsLmF0dHIoJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMuYXR0ckhlaWdodCA9IHRoaXMuJGVsLmF0dHIoJ2hlaWdodCcpO1xuICAgICAgICBpZiAodGhpcy5hdHRyV2lkdGgpIHtcbiAgICAgICAgICB0aGlzLiRlbC5jc3MoJ3dpZHRoJywgdGhpcy5hdHRyV2lkdGggKyAncHgnKTtcbiAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVBdHRyKCd3aWR0aCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmF0dHJIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLiRlbC5jc3MoJ3dpZHRoJywgdGhpcy5hdHRySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cignaGVpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgb3ZlcmxheVxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnPGRpdiBpZD1cIm1hdGVyaWFsYm94LW92ZXJsYXlcIj48L2Rpdj4nKS5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSkub25lKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMxOS5kb25lQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICBfdGhpczE5LmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQdXQgYmVmb3JlIGluIG9yaWdpbiBpbWFnZSB0byBwcmVzZXJ2ZSB6LWluZGV4IGxheWVyaW5nLlxuICAgICAgICB0aGlzLiRlbC5iZWZvcmUodGhpcy4kb3ZlcmxheSk7XG5cbiAgICAgICAgLy8gU2V0IGRpbWVuc2lvbnMgaWYgbmVlZGVkXG4gICAgICAgIHZhciBvdmVybGF5T2Zmc2V0ID0gdGhpcy4kb3ZlcmxheVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB0aGlzLndpbmRvd1dpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMud2luZG93SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiAtMSAqIG92ZXJsYXlPZmZzZXQubGVmdCArICdweCcsXG4gICAgICAgICAgdG9wOiAtMSAqIG92ZXJsYXlPZmZzZXQudG9wICsgJ3B4J1xuICAgICAgICB9KTtcblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy4kb3ZlcmxheVswXSk7XG5cbiAgICAgICAgLy8gQW5pbWF0ZSBPdmVybGF5XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBhbmQgYW5pbWF0ZSBjYXB0aW9uIGlmIGl0IGV4aXN0c1xuICAgICAgICBpZiAodGhpcy5jYXB0aW9uICE9PSAnJykge1xuICAgICAgICAgIGlmICh0aGlzLiRwaG90b2NhcHRpb24pIHtcbiAgICAgICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJHBob3RvQ2FwdGlvblswXSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuJHBob3RvQ2FwdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJtYXRlcmlhbGJveC1jYXB0aW9uXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgdGhpcy4kcGhvdG9DYXB0aW9uLnRleHQodGhpcy5jYXB0aW9uKTtcbiAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRoaXMuJHBob3RvQ2FwdGlvbik7XG4gICAgICAgICAgdGhpcy4kcGhvdG9DYXB0aW9uLmNzcyh7IGRpc3BsYXk6ICdpbmxpbmUnIH0pO1xuXG4gICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRwaG90b0NhcHRpb25bMF0sXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNpemUgSW1hZ2VcbiAgICAgICAgdmFyIHJhdGlvID0gMDtcbiAgICAgICAgdmFyIHdpZHRoUGVyY2VudCA9IHRoaXMub3JpZ2luYWxXaWR0aCAvIHRoaXMud2luZG93V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHRQZXJjZW50ID0gdGhpcy5vcmlnaW5hbEhlaWdodCAvIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICB0aGlzLm5ld1dpZHRoID0gMDtcbiAgICAgICAgdGhpcy5uZXdIZWlnaHQgPSAwO1xuXG4gICAgICAgIGlmICh3aWR0aFBlcmNlbnQgPiBoZWlnaHRQZXJjZW50KSB7XG4gICAgICAgICAgcmF0aW8gPSB0aGlzLm9yaWdpbmFsSGVpZ2h0IC8gdGhpcy5vcmlnaW5hbFdpZHRoO1xuICAgICAgICAgIHRoaXMubmV3V2lkdGggPSB0aGlzLndpbmRvd1dpZHRoICogMC45O1xuICAgICAgICAgIHRoaXMubmV3SGVpZ2h0ID0gdGhpcy53aW5kb3dXaWR0aCAqIDAuOSAqIHJhdGlvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJhdGlvID0gdGhpcy5vcmlnaW5hbFdpZHRoIC8gdGhpcy5vcmlnaW5hbEhlaWdodDtcbiAgICAgICAgICB0aGlzLm5ld1dpZHRoID0gdGhpcy53aW5kb3dIZWlnaHQgKiAwLjkgKiByYXRpbztcbiAgICAgICAgICB0aGlzLm5ld0hlaWdodCA9IHRoaXMud2luZG93SGVpZ2h0ICogMC45O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYW5pbWF0ZUltYWdlSW4oKTtcblxuICAgICAgICAvLyBIYW5kbGUgRXhpdCB0cmlnZ2Vyc1xuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dFc2NhcGVCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd0VzY2FwZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZVdpbmRvd0VzY2FwZUJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBNYXRlcmlhbGJveFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMjAgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVZhcnMoKTtcbiAgICAgICAgdGhpcy5kb25lQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgLy8gb25DbG9zZVN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZWwpO1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLiRvdmVybGF5WzBdKTtcblxuICAgICAgICBpZiAodGhpcy5jYXB0aW9uICE9PSAnJykge1xuICAgICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJHBob3RvQ2FwdGlvblswXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkaXNhYmxlIGV4aXQgaGFuZGxlcnNcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5faGFuZGxlV2luZG93RXNjYXBlQm91bmQpO1xuXG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuJG92ZXJsYXlbMF0sXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyMC5vdmVybGF5QWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpczIwLiRvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fYW5pbWF0ZUltYWdlT3V0KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIENhcHRpb24gKyByZXNldCBjc3Mgc2V0dGluZ3Mgb24gaW1hZ2VcbiAgICAgICAgaWYgKHRoaXMuY2FwdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuJHBob3RvQ2FwdGlvblswXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMyMC4kcGhvdG9DYXB0aW9uLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KE1hdGVyaWFsYm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWF0ZXJpYWxib3gpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9NYXRlcmlhbGJveDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNYXRlcmlhbGJveDtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uTWF0ZXJpYWxib3ggPSBNYXRlcmlhbGJveDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKE1hdGVyaWFsYm94LCAnbWF0ZXJpYWxib3gnLCAnTV9NYXRlcmlhbGJveCcpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgcmVzcG9uc2l2ZVRocmVzaG9sZDogMCAvLyBicmVha3BvaW50IGZvciBzd2lwZWFibGVcbiAgfTtcblxuICB2YXIgUGFyYWxsYXggPSBmdW5jdGlvbiAoX0NvbXBvbmVudDUpIHtcbiAgICBfaW5oZXJpdHMoUGFyYWxsYXgsIF9Db21wb25lbnQ1KTtcblxuICAgIGZ1bmN0aW9uIFBhcmFsbGF4KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFyYWxsYXgpO1xuXG4gICAgICB2YXIgX3RoaXMyMSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQYXJhbGxheC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhcmFsbGF4KSkuY2FsbCh0aGlzLCBQYXJhbGxheCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMyMS5lbC5NX1BhcmFsbGF4ID0gX3RoaXMyMTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgUGFyYWxsYXhcbiAgICAgICAqIEBtZW1iZXIgUGFyYWxsYXgjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gcmVzcG9uc2l2ZVRocmVzaG9sZFxuICAgICAgICovXG4gICAgICBfdGhpczIxLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgUGFyYWxsYXguZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgX3RoaXMyMS5fZW5hYmxlZCA9IHdpbmRvdy5pbm5lcldpZHRoID4gX3RoaXMyMS5vcHRpb25zLnJlc3BvbnNpdmVUaHJlc2hvbGQ7XG5cbiAgICAgIF90aGlzMjEuJGltZyA9IF90aGlzMjEuJGVsLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgICBfdGhpczIxLiRpbWcuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgIGlmIChlbC5jb21wbGV0ZSkgJChlbCkudHJpZ2dlcignbG9hZCcpO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMjEuX3VwZGF0ZVBhcmFsbGF4KCk7XG4gICAgICBfdGhpczIxLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIF90aGlzMjEuX3NldHVwU3R5bGVzKCk7XG5cbiAgICAgIFBhcmFsbGF4Ll9wYXJhbGxheGVzLnB1c2goX3RoaXMyMSk7XG4gICAgICByZXR1cm4gX3RoaXMyMTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUGFyYWxsYXgsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBQYXJhbGxheC5fcGFyYWxsYXhlcy5zcGxpY2UoUGFyYWxsYXguX3BhcmFsbGF4ZXMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIHRoaXMuJGltZ1swXS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAgIHRoaXMuJGVsWzBdLk1fUGFyYWxsYXggPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVJbWFnZUxvYWRCb3VuZCA9IHRoaXMuX2hhbmRsZUltYWdlTG9hZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLiRpbWdbMF0uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuX2hhbmRsZUltYWdlTG9hZEJvdW5kKTtcblxuICAgICAgICBpZiAoUGFyYWxsYXguX3BhcmFsbGF4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgUGFyYWxsYXguX2hhbmRsZVNjcm9sbFRocm90dGxlZCA9IE0udGhyb3R0bGUoUGFyYWxsYXguX2hhbmRsZVNjcm9sbCwgNSk7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFBhcmFsbGF4Ll9oYW5kbGVTY3JvbGxUaHJvdHRsZWQpO1xuXG4gICAgICAgICAgUGFyYWxsYXguX2hhbmRsZVdpbmRvd1Jlc2l6ZVRocm90dGxlZCA9IE0udGhyb3R0bGUoUGFyYWxsYXguX2hhbmRsZVdpbmRvd1Jlc2l6ZSwgNSk7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIFBhcmFsbGF4Ll9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuJGltZ1swXS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy5faGFuZGxlSW1hZ2VMb2FkQm91bmQpO1xuXG4gICAgICAgIGlmIChQYXJhbGxheC5fcGFyYWxsYXhlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgUGFyYWxsYXguX2hhbmRsZVNjcm9sbFRocm90dGxlZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIFBhcmFsbGF4Ll9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cFN0eWxlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cFN0eWxlcygpIHtcbiAgICAgICAgdGhpcy4kaW1nWzBdLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW1hZ2VMb2FkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUltYWdlTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUGFyYWxsYXgoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVBhcmFsbGF4XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVBhcmFsbGF4KCkge1xuICAgICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gdGhpcy4kZWwuaGVpZ2h0KCkgPiAwID8gdGhpcy5lbC5wYXJlbnROb2RlLm9mZnNldEhlaWdodCA6IDUwMDtcbiAgICAgICAgdmFyIGltZ0hlaWdodCA9IHRoaXMuJGltZ1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHZhciBwYXJhbGxheERpc3QgPSBpbWdIZWlnaHQgLSBjb250YWluZXJIZWlnaHQ7XG4gICAgICAgIHZhciBib3R0b20gPSB0aGlzLiRlbC5vZmZzZXQoKS50b3AgKyBjb250YWluZXJIZWlnaHQ7XG4gICAgICAgIHZhciB0b3AgPSB0aGlzLiRlbC5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciB3aW5kb3dCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQ7XG4gICAgICAgIHZhciBwZXJjZW50U2Nyb2xsZWQgPSAod2luZG93Qm90dG9tIC0gdG9wKSAvIChjb250YWluZXJIZWlnaHQgKyB3aW5kb3dIZWlnaHQpO1xuICAgICAgICB2YXIgcGFyYWxsYXggPSBwYXJhbGxheERpc3QgKiBwZXJjZW50U2Nyb2xsZWQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy4kaW1nWzBdLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvdHRvbSA+IHNjcm9sbFRvcCAmJiB0b3AgPCBzY3JvbGxUb3AgKyB3aW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICB0aGlzLiRpbWdbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzRCgtNTAlLCBcIiArIHBhcmFsbGF4ICsgXCJweCwgMClcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChQYXJhbGxheC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhcmFsbGF4KSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fUGFyYWxsYXg7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVTY3JvbGxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFBhcmFsbGF4Ll9wYXJhbGxheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBQYXJhbGxheC5fcGFyYWxsYXhlc1tpXTtcbiAgICAgICAgICBwYXJhbGxheEluc3RhbmNlLl91cGRhdGVQYXJhbGxheC5jYWxsKHBhcmFsbGF4SW5zdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFBhcmFsbGF4Ll9wYXJhbGxheGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHBhcmFsbGF4SW5zdGFuY2UgPSBQYXJhbGxheC5fcGFyYWxsYXhlc1tpXTtcbiAgICAgICAgICBwYXJhbGxheEluc3RhbmNlLl9lbmFibGVkID0gd2luZG93LmlubmVyV2lkdGggPiBwYXJhbGxheEluc3RhbmNlLm9wdGlvbnMucmVzcG9uc2l2ZVRocmVzaG9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBhcmFsbGF4O1xuICB9KENvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFBhcmFsbGF4XG4gICAqL1xuXG5cbiAgUGFyYWxsYXguX3BhcmFsbGF4ZXMgPSBbXTtcblxuICBNLlBhcmFsbGF4ID0gUGFyYWxsYXg7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihQYXJhbGxheCwgJ3BhcmFsbGF4JywgJ01fUGFyYWxsYXgnKTtcbiAgfVxufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgb25TaG93OiBudWxsLFxuICAgIHN3aXBlYWJsZTogZmFsc2UsXG4gICAgcmVzcG9uc2l2ZVRocmVzaG9sZDogSW5maW5pdHkgLy8gYnJlYWtwb2ludCBmb3Igc3dpcGVhYmxlXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgVGFicyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Nikge1xuICAgIF9pbmhlcml0cyhUYWJzLCBfQ29tcG9uZW50Nik7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgVGFicyBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRhYnMoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJzKTtcblxuICAgICAgdmFyIF90aGlzMjIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFicy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRhYnMpKS5jYWxsKHRoaXMsIFRhYnMsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMjIuZWwuTV9UYWJzID0gX3RoaXMyMjtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgVGFic1xuICAgICAgICogQG1lbWJlciBUYWJzI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uU2hvd1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IHN3aXBlYWJsZVxuICAgICAgICogQHByb3Age051bWJlcn0gcmVzcG9uc2l2ZVRocmVzaG9sZFxuICAgICAgICovXG4gICAgICBfdGhpczIyLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVGFicy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICBfdGhpczIyLiR0YWJMaW5rcyA9IF90aGlzMjIuJGVsLmNoaWxkcmVuKCdsaS50YWInKS5jaGlsZHJlbignYScpO1xuICAgICAgX3RoaXMyMi5pbmRleCA9IDA7XG4gICAgICBfdGhpczIyLl9zZXR1cEFjdGl2ZVRhYkxpbmsoKTtcblxuICAgICAgLy8gU2V0dXAgdGFicyBjb250ZW50XG4gICAgICBpZiAoX3RoaXMyMi5vcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICBfdGhpczIyLl9zZXR1cFN3aXBlYWJsZVRhYnMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzMjIuX3NldHVwTm9ybWFsVGFicygpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCB0YWJzIGluZGljYXRvciBhZnRlciBjb250ZW50IHRvIGVuc3VyZSBhY2N1cmF0ZSB3aWR0aHNcbiAgICAgIF90aGlzMjIuX3NldFRhYnNBbmRUYWJXaWR0aCgpO1xuICAgICAgX3RoaXMyMi5fY3JlYXRlSW5kaWNhdG9yKCk7XG5cbiAgICAgIF90aGlzMjIuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzMjI7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRhYnMsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuX2luZGljYXRvci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX2luZGljYXRvcik7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zd2lwZWFibGUpIHtcbiAgICAgICAgICB0aGlzLl90ZWFyZG93blN3aXBlYWJsZVRhYnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl90ZWFyZG93bk5vcm1hbFRhYnMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsWzBdLk1fVGFicyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kID0gdGhpcy5faGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlVGFiQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZVRhYkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUYWJDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUYWJDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgd2luZG93IFJlc2l6ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVdpbmRvd1Jlc2l6ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIHRoaXMuX3NldFRhYnNBbmRUYWJXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRhYldpZHRoICE9PSAwICYmIHRoaXMudGFic1dpZHRoICE9PSAwKSB7XG4gICAgICAgICAgdGhpcy5faW5kaWNhdG9yLnN0eWxlLmxlZnQgPSB0aGlzLl9jYWxjTGVmdFBvcyh0aGlzLiRhY3RpdmVUYWJMaW5rKSArICdweCc7XG4gICAgICAgICAgdGhpcy5faW5kaWNhdG9yLnN0eWxlLnJpZ2h0ID0gdGhpcy5fY2FsY1JpZ2h0UG9zKHRoaXMuJGFjdGl2ZVRhYkxpbmspICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSB0YWIgY2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVUYWJDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVUYWJDbGljayhlKSB7XG4gICAgICAgIHZhciBfdGhpczIzID0gdGhpcztcblxuICAgICAgICB2YXIgdGFiID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGkudGFiJyk7XG4gICAgICAgIHZhciB0YWJMaW5rID0gJChlLnRhcmdldCkuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBvbiB0YWIgbGluayBvbmx5XG4gICAgICAgIGlmICghdGFiTGluay5sZW5ndGggfHwgIXRhYkxpbmsucGFyZW50KCkuaGFzQ2xhc3MoJ3RhYicpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhYi5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY3QgYXMgcmVndWxhciBsaW5rIGlmIHRhcmdldCBhdHRyaWJ1dGUgaXMgc3BlY2lmaWVkLlxuICAgICAgICBpZiAoISF0YWJMaW5rLmF0dHIoJ3RhcmdldCcpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgb2xkIHRhYiBpbmFjdGl2ZS5cbiAgICAgICAgdGhpcy4kYWN0aXZlVGFiTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciAkb2xkQ29udGVudCA9IHRoaXMuJGNvbnRlbnQ7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB2YXJpYWJsZXMgd2l0aCB0aGUgbmV3IGxpbmsgYW5kIGNvbnRlbnRcbiAgICAgICAgdGhpcy4kYWN0aXZlVGFiTGluayA9IHRhYkxpbms7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQgPSAkKE0uZXNjYXBlSGFzaCh0YWJMaW5rWzBdLmhhc2gpKTtcbiAgICAgICAgdGhpcy4kdGFiTGlua3MgPSB0aGlzLiRlbC5jaGlsZHJlbignbGkudGFiJykuY2hpbGRyZW4oJ2EnKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSB0YWIgYWN0aXZlLlxuICAgICAgICB0aGlzLiRhY3RpdmVUYWJMaW5rLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBNYXRoLm1heCh0aGlzLiR0YWJMaW5rcy5pbmRleCh0YWJMaW5rKSwgMCk7XG5cbiAgICAgICAgLy8gU3dhcCBjb250ZW50XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3RhYnNDYXJvdXNlbCkge1xuICAgICAgICAgICAgdGhpcy5fdGFic0Nhcm91c2VsLnNldCh0aGlzLmluZGV4LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMyMy5vcHRpb25zLm9uU2hvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF90aGlzMjMub3B0aW9ucy5vblNob3cuY2FsbChfdGhpczIzLCBfdGhpczIzLiRjb250ZW50WzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLiRjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy4kY29udGVudFswXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25TaG93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNob3cuY2FsbCh0aGlzLCB0aGlzLiRjb250ZW50WzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRvbGRDb250ZW50Lmxlbmd0aCAmJiAhJG9sZENvbnRlbnQuaXModGhpcy4kY29udGVudCkpIHtcbiAgICAgICAgICAgICAgJG9sZENvbnRlbnRbMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgJG9sZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB3aWR0aHMgYWZ0ZXIgY29udGVudCBpcyBzd2FwcGVkIChzY3JvbGxiYXIgYnVnZml4KVxuICAgICAgICB0aGlzLl9zZXRUYWJzQW5kVGFiV2lkdGgoKTtcblxuICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yXG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbmRpY2F0b3IocHJldkluZGV4KTtcblxuICAgICAgICAvLyBQcmV2ZW50IHRoZSBhbmNob3IncyBkZWZhdWx0IGNsaWNrIGFjdGlvblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2VuZXJhdGUgZWxlbWVudHMgZm9yIHRhYiBpbmRpY2F0b3IuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY3JlYXRlSW5kaWNhdG9yXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZUluZGljYXRvcigpIHtcbiAgICAgICAgdmFyIF90aGlzMjQgPSB0aGlzO1xuXG4gICAgICAgIHZhciBpbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpbmRpY2F0b3IpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3IgPSBpbmRpY2F0b3I7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyNC5faW5kaWNhdG9yLnN0eWxlLmxlZnQgPSBfdGhpczI0Ll9jYWxjTGVmdFBvcyhfdGhpczI0LiRhY3RpdmVUYWJMaW5rKSArICdweCc7XG4gICAgICAgICAgX3RoaXMyNC5faW5kaWNhdG9yLnN0eWxlLnJpZ2h0ID0gX3RoaXMyNC5fY2FsY1JpZ2h0UG9zKF90aGlzMjQuJGFjdGl2ZVRhYkxpbmspICsgJ3B4JztcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgZmlyc3QgYWN0aXZlIHRhYiBsaW5rLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwQWN0aXZlVGFiTGlua1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEFjdGl2ZVRhYkxpbmsoKSB7XG4gICAgICAgIC8vIElmIHRoZSBsb2NhdGlvbi5oYXNoIG1hdGNoZXMgb25lIG9mIHRoZSBsaW5rcywgdXNlIHRoYXQgYXMgdGhlIGFjdGl2ZSB0YWIuXG4gICAgICAgIHRoaXMuJGFjdGl2ZVRhYkxpbmsgPSAkKHRoaXMuJHRhYkxpbmtzLmZpbHRlcignW2hyZWY9XCInICsgbG9jYXRpb24uaGFzaCArICdcIl0nKSk7XG5cbiAgICAgICAgLy8gSWYgbm8gbWF0Y2ggaXMgZm91bmQsIHVzZSB0aGUgZmlyc3QgbGluayBvciBhbnkgd2l0aCBjbGFzcyAnYWN0aXZlJyBhcyB0aGUgaW5pdGlhbCBhY3RpdmUgdGFiLlxuICAgICAgICBpZiAodGhpcy4kYWN0aXZlVGFiTGluay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLiRhY3RpdmVUYWJMaW5rID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpLnRhYicpLmNoaWxkcmVuKCdhLmFjdGl2ZScpLmZpcnN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuJGFjdGl2ZVRhYkxpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy4kYWN0aXZlVGFiTGluayA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaS50YWInKS5jaGlsZHJlbignYScpLmZpcnN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0YWJMaW5rcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuJGFjdGl2ZVRhYkxpbmtbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG5cbiAgICAgICAgdGhpcy5pbmRleCA9IE1hdGgubWF4KHRoaXMuJHRhYkxpbmtzLmluZGV4KHRoaXMuJGFjdGl2ZVRhYkxpbmspLCAwKTtcblxuICAgICAgICBpZiAodGhpcy4kYWN0aXZlVGFiTGluay5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRjb250ZW50ID0gJChNLmVzY2FwZUhhc2godGhpcy4kYWN0aXZlVGFiTGlua1swXS5oYXNoKSk7XG4gICAgICAgICAgdGhpcy4kY29udGVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBzd2lwZWFibGUgdGFic1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwU3dpcGVhYmxlVGFic1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cFN3aXBlYWJsZVRhYnMoKSB7XG4gICAgICAgIHZhciBfdGhpczI1ID0gdGhpcztcblxuICAgICAgICAvLyBDaGFuZ2Ugc3dpcGVhYmxlIGFjY29yZGluZyB0byByZXNwb25zaXZlIHRocmVzaG9sZFxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZVRocmVzaG9sZCkge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zd2lwZWFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkdGFic0NvbnRlbnQgPSAkKCk7XG4gICAgICAgIHRoaXMuJHRhYkxpbmtzLmVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICB2YXIgJGN1cnJDb250ZW50ID0gJChNLmVzY2FwZUhhc2gobGluay5oYXNoKSk7XG4gICAgICAgICAgJGN1cnJDb250ZW50LmFkZENsYXNzKCdjYXJvdXNlbC1pdGVtJyk7XG4gICAgICAgICAgJHRhYnNDb250ZW50ID0gJHRhYnNDb250ZW50LmFkZCgkY3VyckNvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgJHRhYnNXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cInRhYnMtY29udGVudCBjYXJvdXNlbCBjYXJvdXNlbC1zbGlkZXJcIj48L2Rpdj4nKTtcbiAgICAgICAgJHRhYnNDb250ZW50LmZpcnN0KCkuYmVmb3JlKCR0YWJzV3JhcHBlcik7XG4gICAgICAgICR0YWJzV3JhcHBlci5hcHBlbmQoJHRhYnNDb250ZW50KTtcbiAgICAgICAgJHRhYnNDb250ZW50WzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICAvLyBLZWVwIGFjdGl2ZSB0YWIgaW5kZXggdG8gc2V0IGluaXRpYWwgY2Fyb3VzZWwgc2xpZGVcbiAgICAgICAgdmFyIGFjdGl2ZVRhYkluZGV4ID0gdGhpcy4kYWN0aXZlVGFiTGluay5jbG9zZXN0KCcudGFiJykuaW5kZXgoKTtcblxuICAgICAgICB0aGlzLl90YWJzQ2Fyb3VzZWwgPSBNLkNhcm91c2VsLmluaXQoJHRhYnNXcmFwcGVyWzBdLCB7XG4gICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICBvbkN5Y2xlVG86IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gX3RoaXMyNS5pbmRleDtcbiAgICAgICAgICAgIF90aGlzMjUuaW5kZXggPSAkKGl0ZW0pLmluZGV4KCk7XG4gICAgICAgICAgICBfdGhpczI1LiRhY3RpdmVUYWJMaW5rLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIF90aGlzMjUuJGFjdGl2ZVRhYkxpbmsgPSBfdGhpczI1LiR0YWJMaW5rcy5lcShfdGhpczI1LmluZGV4KTtcbiAgICAgICAgICAgIF90aGlzMjUuJGFjdGl2ZVRhYkxpbmsuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgX3RoaXMyNS5fYW5pbWF0ZUluZGljYXRvcihwcmV2SW5kZXgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczI1Lm9wdGlvbnMub25TaG93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIF90aGlzMjUub3B0aW9ucy5vblNob3cuY2FsbChfdGhpczI1LCBfdGhpczI1LiRjb250ZW50WzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBpbml0aWFsIGNhcm91c2VsIHNsaWRlIHRvIGFjdGl2ZSB0YWJcbiAgICAgICAgdGhpcy5fdGFic0Nhcm91c2VsLnNldChhY3RpdmVUYWJJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gbm9ybWFsIHRhYnMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdGVhcmRvd25Td2lwZWFibGVUYWJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3RlYXJkb3duU3dpcGVhYmxlVGFicygpIHtcbiAgICAgICAgdmFyICR0YWJzV3JhcHBlciA9IHRoaXMuX3RhYnNDYXJvdXNlbC4kZWw7XG4gICAgICAgIHRoaXMuX3RhYnNDYXJvdXNlbC5kZXN0cm95KCk7XG5cbiAgICAgICAgLy8gVW53cmFwXG4gICAgICAgICR0YWJzV3JhcHBlci5hZnRlcigkdGFic1dyYXBwZXIuY2hpbGRyZW4oKSk7XG4gICAgICAgICR0YWJzV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBub3JtYWwgdGFicy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cE5vcm1hbFRhYnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBOb3JtYWxUYWJzKCkge1xuICAgICAgICAvLyBIaWRlIFRhYnMgQ29udGVudFxuICAgICAgICB0aGlzLiR0YWJMaW5rcy5ub3QodGhpcy4kYWN0aXZlVGFiTGluaykuZWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgICAgIGlmICghIWxpbmsuaGFzaCkge1xuICAgICAgICAgICAgdmFyICRjdXJyQ29udGVudCA9ICQoTS5lc2NhcGVIYXNoKGxpbmsuaGFzaCkpO1xuICAgICAgICAgICAgaWYgKCRjdXJyQ29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGN1cnJDb250ZW50WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBub3JtYWwgdGFicy5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl90ZWFyZG93bk5vcm1hbFRhYnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdGVhcmRvd25Ob3JtYWxUYWJzKCkge1xuICAgICAgICAvLyBzaG93IFRhYnMgQ29udGVudFxuICAgICAgICB0aGlzLiR0YWJMaW5rcy5lYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgICAgaWYgKCEhbGluay5oYXNoKSB7XG4gICAgICAgICAgICB2YXIgJGN1cnJDb250ZW50ID0gJChNLmVzY2FwZUhhc2gobGluay5oYXNoKSk7XG4gICAgICAgICAgICBpZiAoJGN1cnJDb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAkY3VyckNvbnRlbnRbMF0uc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogc2V0IHRhYnMgYW5kIHRhYiB3aWR0aFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFRhYnNBbmRUYWJXaWR0aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRUYWJzQW5kVGFiV2lkdGgoKSB7XG4gICAgICAgIHRoaXMudGFic1dpZHRoID0gdGhpcy4kZWwud2lkdGgoKTtcbiAgICAgICAgdGhpcy50YWJXaWR0aCA9IE1hdGgubWF4KHRoaXMudGFic1dpZHRoLCB0aGlzLmVsLnNjcm9sbFdpZHRoKSAvIHRoaXMuJHRhYkxpbmtzLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaW5kcyByaWdodCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxuICAgICAgICogQHBhcmFtIHtjYXNofSBlbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NhbGNSaWdodFBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxjUmlnaHRQb3MoZWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnRhYnNXaWR0aCAtIGVsLnBvc2l0aW9uKCkubGVmdCAtIGVsWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaW5kcyBsZWZ0IGF0dHJpYnV0ZSBmb3IgaW5kaWNhdG9yIGJhc2VkIG9uIGFjdGl2ZSB0YWIuXG4gICAgICAgKiBAcGFyYW0ge2Nhc2h9IGVsXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY2FsY0xlZnRQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FsY0xlZnRQb3MoZWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZWwucG9zaXRpb24oKS5sZWZ0KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlVGFiSW5kaWNhdG9yXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVGFiSW5kaWNhdG9yKCkge1xuICAgICAgICB0aGlzLl9zZXRUYWJzQW5kVGFiV2lkdGgoKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZUluZGljYXRvcih0aGlzLmluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlcyBJbmRpY2F0b3IgdG8gYWN0aXZlIHRhYi5cbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBwcmV2SW5kZXhcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5kaWNhdG9yXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbmRpY2F0b3IocHJldkluZGV4KSB7XG4gICAgICAgIHZhciBsZWZ0RGVsYXkgPSAwLFxuICAgICAgICAgICAgcmlnaHREZWxheSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5kZXggLSBwcmV2SW5kZXggPj0gMCkge1xuICAgICAgICAgIGxlZnREZWxheSA9IDkwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJpZ2h0RGVsYXkgPSA5MDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFuaW1hdGVcbiAgICAgICAgdmFyIGFuaW1PcHRpb25zID0ge1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuX2luZGljYXRvcixcbiAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5fY2FsY0xlZnRQb3ModGhpcy4kYWN0aXZlVGFiTGluayksXG4gICAgICAgICAgICBkZWxheTogbGVmdERlbGF5XG4gICAgICAgICAgfSxcbiAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2NhbGNSaWdodFBvcyh0aGlzLiRhY3RpdmVUYWJMaW5rKSxcbiAgICAgICAgICAgIGRlbGF5OiByaWdodERlbGF5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9O1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLl9pbmRpY2F0b3IpO1xuICAgICAgICBhbmltKGFuaW1PcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxlY3QgdGFiLlxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRhYklkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWxlY3RcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QodGFiSWQpIHtcbiAgICAgICAgdmFyIHRhYiA9IHRoaXMuJHRhYkxpbmtzLmZpbHRlcignW2hyZWY9XCIjJyArIHRhYklkICsgJ1wiXScpO1xuICAgICAgICBpZiAodGFiLmxlbmd0aCkge1xuICAgICAgICAgIHRhYi50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KFRhYnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJzKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fVGFicztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUYWJzO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5UYWJzID0gVGFicztcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKFRhYnMsICd0YWJzJywgJ01fVGFicycpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgZXhpdERlbGF5OiAyMDAsXG4gICAgZW50ZXJEZWxheTogMCxcbiAgICBodG1sOiBudWxsLFxuICAgIG1hcmdpbjogNSxcbiAgICBpbkR1cmF0aW9uOiAyNTAsXG4gICAgb3V0RHVyYXRpb246IDIwMCxcbiAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgdHJhbnNpdGlvbk1vdmVtZW50OiAxMFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFRvb2x0aXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDcpIHtcbiAgICBfaW5oZXJpdHMoVG9vbHRpcCwgX0NvbXBvbmVudDcpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IFRvb2x0aXAgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUb29sdGlwKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9vbHRpcCk7XG5cbiAgICAgIHZhciBfdGhpczI2ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRvb2x0aXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb29sdGlwKSkuY2FsbCh0aGlzLCBUb29sdGlwLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczI2LmVsLk1fVG9vbHRpcCA9IF90aGlzMjY7XG4gICAgICBfdGhpczI2Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVG9vbHRpcC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzMjYuaXNPcGVuID0gZmFsc2U7XG4gICAgICBfdGhpczI2LmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgX3RoaXMyNi5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzMjYuX2FwcGVuZFRvb2x0aXBFbCgpO1xuICAgICAgX3RoaXMyNi5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXMyNjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9vbHRpcCwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgICQodGhpcy50b29sdGlwRWwpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuZWwuTV9Ub29sdGlwID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBwZW5kVG9vbHRpcEVsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FwcGVuZFRvb2x0aXBFbCgpIHtcbiAgICAgICAgdmFyIHRvb2x0aXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b29sdGlwRWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtdG9vbHRpcCcpO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbCA9IHRvb2x0aXBFbDtcblxuICAgICAgICB2YXIgdG9vbHRpcENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b29sdGlwQ29udGVudEVsLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAtY29udGVudCcpO1xuICAgICAgICB0b29sdGlwQ29udGVudEVsLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5odG1sO1xuICAgICAgICB0b29sdGlwRWwuYXBwZW5kQ2hpbGQodG9vbHRpcENvbnRlbnRFbCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbHRpcEVsKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVRvb2x0aXBDb250ZW50XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVRvb2x0aXBDb250ZW50KCkge1xuICAgICAgICB0aGlzLnRvb2x0aXBFbC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1jb250ZW50JykuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmh0bWw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZUVudGVyQm91bmQgPSB0aGlzLl9oYW5kbGVNb3VzZUVudGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlTGVhdmVCb3VuZCA9IHRoaXMuX2hhbmRsZU1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRm9jdXNCb3VuZCA9IHRoaXMuX2hhbmRsZUZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUJsdXJCb3VuZCA9IHRoaXMuX2hhbmRsZUJsdXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5faGFuZGxlTW91c2VFbnRlckJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVCbHVyQm91bmQsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9oYW5kbGVNb3VzZUVudGVyQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlRm9jdXNCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2hhbmRsZUJsdXJCb3VuZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKGlzTWFudWFsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpc01hbnVhbCA9IGlzTWFudWFsID09PSB1bmRlZmluZWQgPyB0cnVlIDogdW5kZWZpbmVkOyAvLyBEZWZhdWx0IHZhbHVlIHRydWVcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAvLyBVcGRhdGUgdG9vbHRpcCBjb250ZW50IHdpdGggSFRNTCBhdHRyaWJ1dGUgb3B0aW9uc1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCB0aGlzLl9nZXRBdHRyaWJ1dGVPcHRpb25zKCkpO1xuICAgICAgICB0aGlzLl91cGRhdGVUb29sdGlwQ29udGVudCgpO1xuICAgICAgICB0aGlzLl9zZXRFbnRlckRlbGF5VGltZW91dChpc01hbnVhbCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9zZXRFeGl0RGVsYXlUaW1lb3V0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlIHRpbWVvdXQgd2hpY2ggZGVsYXlzIHdoZW4gdGhlIHRvb2x0aXAgY2xvc2VzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0RXhpdERlbGF5VGltZW91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRFeGl0RGVsYXlUaW1lb3V0KCkge1xuICAgICAgICB2YXIgX3RoaXMyNyA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2V4aXREZWxheVRpbWVvdXQpO1xuXG4gICAgICAgIHRoaXMuX2V4aXREZWxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyNy5pc0hvdmVyZWQgfHwgX3RoaXMyNy5pc0ZvY3VzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczI3Ll9hbmltYXRlT3V0KCk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5leGl0RGVsYXkpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSB0aW1lb3V0IHdoaWNoIGRlbGF5cyB3aGVuIHRoZSB0b2FzdCBjbG9zZXNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRFbnRlckRlbGF5VGltZW91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRFbnRlckRlbGF5VGltZW91dChpc01hbnVhbCkge1xuICAgICAgICB2YXIgX3RoaXMyOCA9IHRoaXM7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2VudGVyRGVsYXlUaW1lb3V0KTtcblxuICAgICAgICB0aGlzLl9lbnRlckRlbGF5VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghX3RoaXMyOC5pc0hvdmVyZWQgJiYgIV90aGlzMjguaXNGb2N1c2VkICYmICFpc01hbnVhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMjguX2FuaW1hdGVJbigpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZW50ZXJEZWxheSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9wb3NpdGlvblRvb2x0aXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcG9zaXRpb25Ub29sdGlwKCkge1xuICAgICAgICB2YXIgb3JpZ2luID0gdGhpcy5lbCxcbiAgICAgICAgICAgIHRvb2x0aXAgPSB0aGlzLnRvb2x0aXBFbCxcbiAgICAgICAgICAgIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICBvcmlnaW5XaWR0aCA9IG9yaWdpbi5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHRvb2x0aXBIZWlnaHQgPSB0b29sdGlwLm9mZnNldEhlaWdodCxcbiAgICAgICAgICAgIHRvb2x0aXBXaWR0aCA9IHRvb2x0aXAub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHZvaWQgMCxcbiAgICAgICAgICAgIG1hcmdpbiA9IHRoaXMub3B0aW9ucy5tYXJnaW4sXG4gICAgICAgICAgICB0YXJnZXRUb3AgPSB2b2lkIDAsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdm9pZCAwO1xuXG4gICAgICAgIHRoaXMueE1vdmVtZW50ID0gMCwgdGhpcy55TW92ZW1lbnQgPSAwO1xuXG4gICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCArIE0uZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICB0YXJnZXRUb3AgKz0gLXRvb2x0aXBIZWlnaHQgLSBtYXJnaW47XG4gICAgICAgICAgdGFyZ2V0TGVmdCArPSBvcmlnaW5XaWR0aCAvIDIgLSB0b29sdGlwV2lkdGggLyAyO1xuICAgICAgICAgIHRoaXMueU1vdmVtZW50ID0gLXRoaXMub3B0aW9ucy50cmFuc2l0aW9uTW92ZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdGFyZ2V0VG9wICs9IG9yaWdpbkhlaWdodCAvIDIgLSB0b29sdGlwSGVpZ2h0IC8gMjtcbiAgICAgICAgICB0YXJnZXRMZWZ0ICs9IG9yaWdpbldpZHRoICsgbWFyZ2luO1xuICAgICAgICAgIHRoaXMueE1vdmVtZW50ID0gdGhpcy5vcHRpb25zLnRyYW5zaXRpb25Nb3ZlbWVudDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgIHRhcmdldFRvcCArPSBvcmlnaW5IZWlnaHQgLyAyIC0gdG9vbHRpcEhlaWdodCAvIDI7XG4gICAgICAgICAgdGFyZ2V0TGVmdCArPSAtdG9vbHRpcFdpZHRoIC0gbWFyZ2luO1xuICAgICAgICAgIHRoaXMueE1vdmVtZW50ID0gLXRoaXMub3B0aW9ucy50cmFuc2l0aW9uTW92ZW1lbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0VG9wICs9IG9yaWdpbkhlaWdodCArIG1hcmdpbjtcbiAgICAgICAgICB0YXJnZXRMZWZ0ICs9IG9yaWdpbldpZHRoIC8gMiAtIHRvb2x0aXBXaWR0aCAvIDI7XG4gICAgICAgICAgdGhpcy55TW92ZW1lbnQgPSB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbk1vdmVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSB0aGlzLl9yZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcbiAgICAgICAgJCh0b29sdGlwKS5jc3Moe1xuICAgICAgICAgIHRvcDogbmV3Q29vcmRpbmF0ZXMueSArICdweCcsXG4gICAgICAgICAgbGVmdDogbmV3Q29vcmRpbmF0ZXMueCArICdweCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZXBvc2l0aW9uV2l0aGluU2NyZWVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlcG9zaXRpb25XaXRoaW5TY3JlZW4oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IE0uZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCk7XG4gICAgICAgIHZhciBuZXdYID0geCAtIHNjcm9sbExlZnQ7XG4gICAgICAgIHZhciBuZXdZID0geSAtIHNjcm9sbFRvcDtcblxuICAgICAgICB2YXIgYm91bmRpbmcgPSB7XG4gICAgICAgICAgbGVmdDogbmV3WCxcbiAgICAgICAgICB0b3A6IG5ld1ksXG4gICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMub3B0aW9ucy5tYXJnaW4gKyB0aGlzLm9wdGlvbnMudHJhbnNpdGlvbk1vdmVtZW50O1xuICAgICAgICB2YXIgZWRnZXMgPSBNLmNoZWNrV2l0aGluQ29udGFpbmVyKGRvY3VtZW50LmJvZHksIGJvdW5kaW5nLCBvZmZzZXQpO1xuXG4gICAgICAgIGlmIChlZGdlcy5sZWZ0KSB7XG4gICAgICAgICAgbmV3WCA9IG9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChlZGdlcy5yaWdodCkge1xuICAgICAgICAgIG5ld1ggLT0gbmV3WCArIHdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWRnZXMudG9wKSB7XG4gICAgICAgICAgbmV3WSA9IG9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChlZGdlcy5ib3R0b20pIHtcbiAgICAgICAgICBuZXdZIC09IG5ld1kgKyBoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHg6IG5ld1ggKyBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHk6IG5ld1kgKyBzY3JvbGxUb3BcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlSW4oKSB7XG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgICB0aGlzLnRvb2x0aXBFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLnRvb2x0aXBFbCk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMudG9vbHRpcEVsLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgdHJhbnNsYXRlWDogdGhpcy54TW92ZW1lbnQsXG4gICAgICAgICAgdHJhbnNsYXRlWTogdGhpcy55TW92ZW1lbnQsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlT3V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVPdXQoKSB7XG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMudG9vbHRpcEVsKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy50b29sdGlwRWwsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlTW91c2VFbnRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb3VzZUVudGVyKCkge1xuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7IC8vIEFsbG93cyBjbG9zZSBvZiB0b29sdGlwIHdoZW4gb3BlbmVkIGJ5IGZvY3VzLlxuICAgICAgICB0aGlzLm9wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlTW91c2VMZWF2ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb3VzZUxlYXZlKCkge1xuICAgICAgICB0aGlzLmlzSG92ZXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlOyAvLyBBbGxvd3MgY2xvc2Ugb2YgdG9vbHRpcCB3aGVuIG9wZW5lZCBieSBmb2N1cy5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRm9jdXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRm9jdXMoKSB7XG4gICAgICAgIGlmIChNLnRhYlByZXNzZWQpIHtcbiAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5vcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVCbHVyKCkge1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXRBdHRyaWJ1dGVPcHRpb25zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEF0dHJpYnV0ZU9wdGlvbnMoKSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVPcHRpb25zID0ge307XG4gICAgICAgIHZhciB0b29sdGlwVGV4dE9wdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uT3B0aW9uID0gdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcblxuICAgICAgICBpZiAodG9vbHRpcFRleHRPcHRpb24pIHtcbiAgICAgICAgICBhdHRyaWJ1dGVPcHRpb25zLmh0bWwgPSB0b29sdGlwVGV4dE9wdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbk9wdGlvbikge1xuICAgICAgICAgIGF0dHJpYnV0ZU9wdGlvbnMucG9zaXRpb24gPSBwb3NpdGlvbk9wdGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0cmlidXRlT3B0aW9ucztcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoVG9vbHRpcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRvb2x0aXApLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9Ub29sdGlwO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRvb2x0aXA7XG4gIH0oQ29tcG9uZW50KTtcblxuICBNLlRvb2x0aXAgPSBUb29sdGlwO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoVG9vbHRpcCwgJ3Rvb2x0aXAnLCAnTV9Ub29sdGlwJyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyAvKiFcbiAgKiBXYXZlcyB2MC42LjRcbiAgKiBodHRwOi8vZmlhbi5teS5pZC9XYXZlc1xuICAqXG4gICogQ29weXJpZ2h0IDIwMTQgQWxmaWFuYSBFLiBTaWJ1ZWEgYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9maWFucy9XYXZlcy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICovXG5cbjsoZnVuY3Rpb24gKHdpbmRvdykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIFdhdmVzID0gV2F2ZXMgfHwge307XG4gIHZhciAkJCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwuYmluZChkb2N1bWVudCk7XG5cbiAgLy8gRmluZCBleGFjdCBwb3NpdGlvbiBvZiBlbGVtZW50XG4gIGZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICAgIHJldHVybiBvYmogIT09IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xuICB9XG5cbiAgZnVuY3Rpb24gb2Zmc2V0KGVsZW0pIHtcbiAgICB2YXIgZG9jRWxlbSxcbiAgICAgICAgd2luLFxuICAgICAgICBib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9LFxuICAgICAgICBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB9XG4gICAgd2luID0gZ2V0V2luZG93KGRvYyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFN0eWxlKG9iaikge1xuICAgIHZhciBzdHlsZSA9ICcnO1xuXG4gICAgZm9yICh2YXIgYSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoYSkpIHtcbiAgICAgICAgc3R5bGUgKz0gYSArICc6JyArIG9ialthXSArICc7JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICB2YXIgRWZmZWN0ID0ge1xuXG4gICAgLy8gRWZmZWN0IGRlbGF5XG4gICAgZHVyYXRpb246IDc1MCxcblxuICAgIHNob3c6IGZ1bmN0aW9uIChlLCBlbGVtZW50KSB7XG5cbiAgICAgIC8vIERpc2FibGUgcmlnaHQgY2xpY2tcbiAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbCA9IGVsZW1lbnQgfHwgdGhpcztcblxuICAgICAgLy8gQ3JlYXRlIHJpcHBsZVxuICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9ICd3YXZlcy1yaXBwbGUnO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQocmlwcGxlKTtcblxuICAgICAgLy8gR2V0IGNsaWNrIGNvb3JkaW5hdGUgYW5kIGVsZW1lbnQgd2l0ZGhcbiAgICAgIHZhciBwb3MgPSBvZmZzZXQoZWwpO1xuICAgICAgdmFyIHJlbGF0aXZlWSA9IGUucGFnZVkgLSBwb3MudG9wO1xuICAgICAgdmFyIHJlbGF0aXZlWCA9IGUucGFnZVggLSBwb3MubGVmdDtcbiAgICAgIHZhciBzY2FsZSA9ICdzY2FsZSgnICsgZWwuY2xpZW50V2lkdGggLyAxMDAgKiAxMCArICcpJztcblxuICAgICAgLy8gU3VwcG9ydCBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgaWYgKCd0b3VjaGVzJyBpbiBlKSB7XG4gICAgICAgIHJlbGF0aXZlWSA9IGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3A7XG4gICAgICAgIHJlbGF0aXZlWCA9IGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0O1xuICAgICAgfVxuXG4gICAgICAvLyBBdHRhY2ggZGF0YSB0byBlbGVtZW50XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnLCBEYXRlLm5vdygpKTtcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnLCBzY2FsZSk7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCByZWxhdGl2ZVgpO1xuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgcmVsYXRpdmVZKTtcblxuICAgICAgLy8gU2V0IHJpcHBsZSBwb3NpdGlvblxuICAgICAgdmFyIHJpcHBsZVN0eWxlID0ge1xuICAgICAgICAndG9wJzogcmVsYXRpdmVZICsgJ3B4JyxcbiAgICAgICAgJ2xlZnQnOiByZWxhdGl2ZVggKyAncHgnXG4gICAgICB9O1xuXG4gICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZSArICcgd2F2ZXMtbm90cmFuc2l0aW9uJztcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICByaXBwbGUuY2xhc3NOYW1lID0gcmlwcGxlLmNsYXNzTmFtZS5yZXBsYWNlKCd3YXZlcy1ub3RyYW5zaXRpb24nLCAnJyk7XG5cbiAgICAgIC8vIFNjYWxlIHRoZSByaXBwbGVcbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZS50cmFuc2Zvcm0gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlLm9wYWNpdHkgPSAnMSc7XG5cbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG4gICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcbiAgICAgIHJpcHBsZVN0eWxlWyd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuXG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgVG91Y2hIYW5kbGVyLnRvdWNodXAoZSk7XG5cbiAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICB2YXIgd2lkdGggPSBlbC5jbGllbnRXaWR0aCAqIDEuNDtcblxuICAgICAgLy8gR2V0IGZpcnN0IHJpcHBsZVxuICAgICAgdmFyIHJpcHBsZSA9IG51bGw7XG4gICAgICB2YXIgcmlwcGxlcyA9IGVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdmVzLXJpcHBsZScpO1xuICAgICAgaWYgKHJpcHBsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByaXBwbGUgPSByaXBwbGVzW3JpcHBsZXMubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWxhdGl2ZVggPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKTtcbiAgICAgIHZhciByZWxhdGl2ZVkgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICAgIHZhciBzY2FsZSA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnKTtcblxuICAgICAgLy8gR2V0IGRlbGF5IGJlZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2UgbGVhdmVcbiAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICB2YXIgZGVsYXkgPSAzNTAgLSBkaWZmO1xuXG4gICAgICBpZiAoZGVsYXkgPCAwKSB7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICAgIH1cblxuICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICd0b3AnOiByZWxhdGl2ZVkgKyAncHgnLFxuICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYICsgJ3B4JyxcbiAgICAgICAgICAnb3BhY2l0eSc6ICcwJyxcblxuICAgICAgICAgIC8vIER1cmF0aW9uXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW1vei10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW1zLXRyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICctby10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAndHJhbnNmb3JtJzogc2NhbGVcbiAgICAgICAgfTtcblxuICAgICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShzdHlsZSkpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIEVmZmVjdC5kdXJhdGlvbik7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSxcblxuICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcbiAgICB3cmFwSW5wdXQ6IGZ1bmN0aW9uIChlbGVtZW50cykge1xuICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlbGVtZW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICB2YXIgZWwgPSBlbGVtZW50c1thXTtcblxuICAgICAgICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAvLyBJZiBpbnB1dCBhbHJlYWR5IGhhdmUgcGFyZW50IGp1c3QgcGFzcyB0aHJvdWdoXG4gICAgICAgICAgaWYgKHBhcmVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpJyAmJiBwYXJlbnQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUHV0IGVsZW1lbnQgY2xhc3MgYW5kIHN0eWxlIHRvIHRoZSBzcGVjaWZpZWQgcGFyZW50XG4gICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUgKyAnIHdhdmVzLWlucHV0LXdyYXBwZXInO1xuXG4gICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSA9IGVsLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgIGlmICghZWxlbWVudFN0eWxlKSB7XG4gICAgICAgICAgICBlbGVtZW50U3R5bGUgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3dhdmVzLWJ1dHRvbi1pbnB1dCc7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgLy8gUHV0IGVsZW1lbnQgYXMgY2hpbGRcbiAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsKTtcbiAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRGlzYWJsZSBtb3VzZWRvd24gZXZlbnQgZm9yIDUwMG1zIGR1cmluZyBhbmQgYWZ0ZXIgdG91Y2hcbiAgICovXG4gIHZhciBUb3VjaEhhbmRsZXIgPSB7XG4gICAgLyogdXNlcyBhbiBpbnRlZ2VyIHJhdGhlciB0aGFuIGJvb2wgc28gdGhlcmUncyBubyBpc3N1ZXMgd2l0aFxuICAgICAqIG5lZWRpbmcgdG8gY2xlYXIgdGltZW91dHMgaWYgYW5vdGhlciB0b3VjaCBldmVudCBvY2N1cnJlZFxuICAgICAqIHdpdGhpbiB0aGUgNTAwbXMuIENhbm5vdCBtb3VzZXVwIGJldHdlZW4gdG91Y2hzdGFydCBhbmRcbiAgICAgKiB0b3VjaGVuZCwgbm9yIGluIHRoZSA1MDBtcyBhZnRlciB0b3VjaGVuZC4gKi9cbiAgICB0b3VjaGVzOiAwLFxuICAgIGFsbG93RXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgYWxsb3cgPSB0cnVlO1xuXG4gICAgICBpZiAoZS50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgKz0gMTsgLy9wdXNoXG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ3RvdWNoZW5kJyB8fCBlLnR5cGUgPT09ICd0b3VjaGNhbmNlbCcpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgLT0gMTsgLy9wb3AgYWZ0ZXIgNTAwbXNcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gJ21vdXNlZG93bicgJiYgVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgIGFsbG93ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGxvdztcbiAgICB9LFxuICAgIHRvdWNodXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERlbGVnYXRlZCBjbGljayBoYW5kbGVyIGZvciAud2F2ZXMtZWZmZWN0IGVsZW1lbnQuXG4gICAqIHJldHVybnMgbnVsbCB3aGVuIC53YXZlcy1lZmZlY3QgZWxlbWVudCBub3QgaW4gXCJjbGljayB0cmVlXCJcbiAgICovXG4gIGZ1bmN0aW9uIGdldFdhdmVzRWZmZWN0RWxlbWVudChlKSB7XG4gICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCB8fCBlLnNyY0VsZW1lbnQ7XG5cbiAgICB3aGlsZSAodGFyZ2V0LnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpICYmIHRhcmdldC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1YmJsZSB0aGUgY2xpY2sgYW5kIHNob3cgZWZmZWN0IGlmIC53YXZlcy1lZmZlY3QgZWxlbSB3YXMgZm91bmRcbiAgICovXG4gIGZ1bmN0aW9uIHNob3dFZmZlY3QoZSkge1xuICAgIHZhciBlbGVtZW50ID0gZ2V0V2F2ZXNFZmZlY3RFbGVtZW50KGUpO1xuXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIEVmZmVjdC5zaG93KGUsIGVsZW1lbnQpO1xuXG4gICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIFdhdmVzLmRpc3BsYXlFZmZlY3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKCdkdXJhdGlvbicgaW4gb3B0aW9ucykge1xuICAgICAgRWZmZWN0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvL1dyYXAgaW5wdXQgaW5zaWRlIDxpPiB0YWdcbiAgICBFZmZlY3Qud3JhcElucHV0KCQkKCcud2F2ZXMtZWZmZWN0JykpO1xuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBdHRhY2ggV2F2ZXMgdG8gYW4gaW5wdXQgZWxlbWVudCAob3IgYW55IGVsZW1lbnQgd2hpY2ggZG9lc24ndFxuICAgKiBidWJibGUgbW91c2V1cC9tb3VzZWRvd24gZXZlbnRzKS5cbiAgICogICBJbnRlbmRlZCB0byBiZSB1c2VkIHdpdGggZHluYW1pY2FsbHkgbG9hZGVkIGZvcm1zL2lucHV0cywgb3JcbiAgICogd2hlcmUgdGhlIHVzZXIgZG9lc24ndCB3YW50IGEgZGVsZWdhdGVkIGNsaWNrIGhhbmRsZXIuXG4gICAqL1xuICBXYXZlcy5hdHRhY2ggPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vRlVUVVJFOiBhdXRvbWF0aWNhbGx5IGFkZCB3YXZlcyBjbGFzc2VzIGFuZCBhbGxvdyB1c2Vyc1xuICAgIC8vIHRvIHNwZWNpZnkgdGhlbSB3aXRoIGFuIG9wdGlvbnMgcGFyYW0/IEVnLiBsaWdodC9jbGFzc2ljL2J1dHRvblxuICAgIGlmIChlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgRWZmZWN0LndyYXBJbnB1dChbZWxlbWVudF0pO1xuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gIH07XG5cbiAgd2luZG93LldhdmVzID0gV2F2ZXM7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBXYXZlcy5kaXNwbGF5RWZmZWN0KCk7XG4gIH0sIGZhbHNlKTtcbn0pKHdpbmRvdyk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGh0bWw6ICcnLFxuICAgIGRpc3BsYXlMZW5ndGg6IDQwMDAsXG4gICAgaW5EdXJhdGlvbjogMzAwLFxuICAgIG91dER1cmF0aW9uOiAzNzUsXG4gICAgY2xhc3NlczogJycsXG4gICAgY29tcGxldGVDYWxsYmFjazogbnVsbCxcbiAgICBhY3RpdmF0aW9uUGVyY2VudDogMC44XG4gIH07XG5cbiAgdmFyIFRvYXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRvYXN0KG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUb2FzdCk7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIHRvYXN0XG4gICAgICAgKiBAbWVtYmVyIFRvYXN0I29wdGlvbnNcbiAgICAgICAqL1xuICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIFRvYXN0LmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMub3B0aW9ucy5odG1sO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBjdXJyZW50IHBhbiBzdGF0ZSB0b2FzdFxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIHRoaXMucGFubmluZyA9IGZhbHNlO1xuXG4gICAgICAvKipcbiAgICAgICAqIFRpbWUgcmVtYWluaW5nIHVudGlsIHRvYXN0IGlzIHJlbW92ZWRcbiAgICAgICAqL1xuICAgICAgdGhpcy50aW1lUmVtYWluaW5nID0gdGhpcy5vcHRpb25zLmRpc3BsYXlMZW5ndGg7XG5cbiAgICAgIGlmIChUb2FzdC5fdG9hc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBUb2FzdC5fY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgdG9hc3RcbiAgICAgIFRvYXN0Ll90b2FzdHMucHVzaCh0aGlzKTtcbiAgICAgIHZhciB0b2FzdEVsZW1lbnQgPSB0aGlzLl9jcmVhdGVUb2FzdCgpO1xuICAgICAgdG9hc3RFbGVtZW50Lk1fVG9hc3QgPSB0aGlzO1xuICAgICAgdGhpcy5lbCA9IHRvYXN0RWxlbWVudDtcbiAgICAgIHRoaXMuJGVsID0gJCh0b2FzdEVsZW1lbnQpO1xuICAgICAgdGhpcy5fYW5pbWF0ZUluKCk7XG4gICAgICB0aGlzLl9zZXRUaW1lcigpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUb2FzdCwgW3tcbiAgICAgIGtleTogXCJfY3JlYXRlVG9hc3RcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSB0b2FzdCBhbmQgYXBwZW5kIGl0IHRvIHRvYXN0IGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZVRvYXN0KCkge1xuICAgICAgICB2YXIgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9hc3QuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcblxuICAgICAgICAvLyBBZGQgY3VzdG9tIGNsYXNzZXMgb250byB0b2FzdFxuICAgICAgICBpZiAoISF0aGlzLm9wdGlvbnMuY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgICAkKHRvYXN0KS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY2xhc3Nlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY29udGVudFxuICAgICAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAnb2JqZWN0JyA/IHRoaXMubWVzc2FnZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogdGhpcy5tZXNzYWdlICYmIHR5cGVvZiB0aGlzLm1lc3NhZ2UgPT09ICdvYmplY3QnICYmIHRoaXMubWVzc2FnZSAhPT0gbnVsbCAmJiB0aGlzLm1lc3NhZ2Uubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIHRoaXMubWVzc2FnZS5ub2RlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgalF1ZXJ5IG9iamVjdFxuICAgICAgICB9IGVsc2UgaWYgKCEhdGhpcy5tZXNzYWdlLmpxdWVyeSkge1xuICAgICAgICAgICQodG9hc3QpLmFwcGVuZCh0aGlzLm1lc3NhZ2VbMF0pO1xuXG4gICAgICAgICAgLy8gSW5zZXJ0IGFzIGh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9hc3QuaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZW5kIHRvYXNmdFxuICAgICAgICBUb2FzdC5fY29udGFpbmVyLmFwcGVuZENoaWxkKHRvYXN0KTtcbiAgICAgICAgcmV0dXJuIHRvYXN0O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW4gdG9hc3RcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluKCkge1xuICAgICAgICAvLyBBbmltYXRlIHRvYXN0IGluXG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYydcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlIHNldEludGVydmFsIHdoaWNoIGF1dG9tYXRpY2FsbHkgcmVtb3ZlcyB0b2FzdCB3aGVuIHRpbWVSZW1haW5pbmcgPj0gMFxuICAgICAgICogaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFRpbWVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFRpbWVyKCkge1xuICAgICAgICB2YXIgX3RoaXMyOSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMudGltZVJlbWFpbmluZyAhPT0gSW5maW5pdHkpIHtcbiAgICAgICAgICB0aGlzLmNvdW50ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIElmIHRvYXN0IGlzIG5vdCBiZWluZyBkcmFnZ2VkLCBkZWNyZWFzZSBpdHMgdGltZSByZW1haW5pbmdcbiAgICAgICAgICAgIGlmICghX3RoaXMyOS5wYW5uaW5nKSB7XG4gICAgICAgICAgICAgIF90aGlzMjkudGltZVJlbWFpbmluZyAtPSAyMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBvdXRcbiAgICAgICAgICAgIGlmIChfdGhpczI5LnRpbWVSZW1haW5pbmcgPD0gMCkge1xuICAgICAgICAgICAgICBfdGhpczI5LmRpc21pc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEaXNtaXNzIHRvYXN0IHdpdGggYW5pbWF0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkaXNtaXNzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzbWlzcygpIHtcbiAgICAgICAgdmFyIF90aGlzMzAgPSB0aGlzO1xuXG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuY291bnRlckludGVydmFsKTtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25EaXN0YW5jZSA9IHRoaXMuZWwub2Zmc2V0V2lkdGggKiB0aGlzLm9wdGlvbnMuYWN0aXZhdGlvblBlcmNlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMud2FzU3dpcGVkKSB7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuMDVzLCBvcGFjaXR5IC4wNXMnO1xuICAgICAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgYWN0aXZhdGlvbkRpc3RhbmNlICsgXCJweClcIjtcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIG1hcmdpblRvcDogLTQwLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDYWxsIHRoZSBvcHRpb25hbCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczMwLm9wdGlvbnMuY29tcGxldGVDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczMwLm9wdGlvbnMuY29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRvYXN0IGZyb20gRE9NXG4gICAgICAgICAgICBfdGhpczMwLiRlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIFRvYXN0Ll90b2FzdHMuc3BsaWNlKFRvYXN0Ll90b2FzdHMuaW5kZXhPZihfdGhpczMwKSwgMSk7XG4gICAgICAgICAgICBpZiAoVG9hc3QuX3RvYXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgVG9hc3QuX3JlbW92ZUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fVG9hc3Q7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQXBwZW5kIHRvYXN0IGNvbnRhaW5lciBhbmQgYWRkIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY3JlYXRlQ29udGFpbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZUNvbnRhaW5lcigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2FzdC1jb250YWluZXInKTtcblxuICAgICAgICAvLyBBZGQgZXZlbnQgaGFuZGxlclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIFRvYXN0Ll9vbkRyYWdTdGFydCk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBUb2FzdC5fb25EcmFnTW92ZSk7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIFRvYXN0Ll9vbkRyYWdFbmQpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBUb2FzdC5fb25EcmFnU3RhcnQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBUb2FzdC5fb25EcmFnTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBUb2FzdC5fb25EcmFnRW5kKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgIFRvYXN0Ll9jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIHRvYXN0IGNvbnRhaW5lciBhbmQgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVDb250YWluZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlQ29udGFpbmVyKCkge1xuICAgICAgICAvLyBBZGQgZXZlbnQgaGFuZGxlclxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBUb2FzdC5fb25EcmFnTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBUb2FzdC5fb25EcmFnRW5kKTtcblxuICAgICAgICAkKFRvYXN0Ll9jb250YWluZXIpLnJlbW92ZSgpO1xuICAgICAgICBUb2FzdC5fY29udGFpbmVyID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBCZWdpbiBkcmFnIGhhbmRsZXJcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9vbkRyYWdTdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyYWdTdGFydChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiAkKGUudGFyZ2V0KS5jbG9zZXN0KCcudG9hc3QnKS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgJHRvYXN0ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLnRvYXN0Jyk7XG4gICAgICAgICAgdmFyIHRvYXN0ID0gJHRvYXN0WzBdLk1fVG9hc3Q7XG4gICAgICAgICAgdG9hc3QucGFubmluZyA9IHRydWU7XG4gICAgICAgICAgVG9hc3QuX2RyYWdnZWRUb2FzdCA9IHRvYXN0O1xuICAgICAgICAgIHRvYXN0LmVsLmNsYXNzTGlzdC5hZGQoJ3Bhbm5pbmcnKTtcbiAgICAgICAgICB0b2FzdC5lbC5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG4gICAgICAgICAgdG9hc3Quc3RhcnRpbmdYUG9zID0gVG9hc3QuX3hQb3MoZSk7XG4gICAgICAgICAgdG9hc3QudGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgdG9hc3QueFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRHJhZyBtb3ZlIGhhbmRsZXJcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9vbkRyYWdNb3ZlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJhZ01vdmUoZSkge1xuICAgICAgICBpZiAoISFUb2FzdC5fZHJhZ2dlZFRvYXN0KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHZhciB0b2FzdCA9IFRvYXN0Ll9kcmFnZ2VkVG9hc3Q7XG4gICAgICAgICAgdG9hc3QuZGVsdGFYID0gTWF0aC5hYnModG9hc3QueFBvcyAtIFRvYXN0Ll94UG9zKGUpKTtcbiAgICAgICAgICB0b2FzdC54UG9zID0gVG9hc3QuX3hQb3MoZSk7XG4gICAgICAgICAgdG9hc3QudmVsb2NpdHlYID0gdG9hc3QuZGVsdGFYIC8gKERhdGUubm93KCkgLSB0b2FzdC50aW1lKTtcbiAgICAgICAgICB0b2FzdC50aW1lID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgIHZhciB0b3RhbERlbHRhWCA9IHRvYXN0LnhQb3MgLSB0b2FzdC5zdGFydGluZ1hQb3M7XG4gICAgICAgICAgdmFyIGFjdGl2YXRpb25EaXN0YW5jZSA9IHRvYXN0LmVsLm9mZnNldFdpZHRoICogdG9hc3Qub3B0aW9ucy5hY3RpdmF0aW9uUGVyY2VudDtcbiAgICAgICAgICB0b2FzdC5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyB0b3RhbERlbHRhWCArIFwicHgpXCI7XG4gICAgICAgICAgdG9hc3QuZWwuc3R5bGUub3BhY2l0eSA9IDEgLSBNYXRoLmFicyh0b3RhbERlbHRhWCAvIGFjdGl2YXRpb25EaXN0YW5jZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBFbmQgZHJhZyBoYW5kbGVyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfb25EcmFnRW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uRHJhZ0VuZCgpIHtcbiAgICAgICAgaWYgKCEhVG9hc3QuX2RyYWdnZWRUb2FzdCkge1xuICAgICAgICAgIHZhciB0b2FzdCA9IFRvYXN0Ll9kcmFnZ2VkVG9hc3Q7XG4gICAgICAgICAgdG9hc3QucGFubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHRvYXN0LmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bhbm5pbmcnKTtcblxuICAgICAgICAgIHZhciB0b3RhbERlbHRhWCA9IHRvYXN0LnhQb3MgLSB0b2FzdC5zdGFydGluZ1hQb3M7XG4gICAgICAgICAgdmFyIGFjdGl2YXRpb25EaXN0YW5jZSA9IHRvYXN0LmVsLm9mZnNldFdpZHRoICogdG9hc3Qub3B0aW9ucy5hY3RpdmF0aW9uUGVyY2VudDtcbiAgICAgICAgICB2YXIgc2hvdWxkQmVEaXNtaXNzZWQgPSBNYXRoLmFicyh0b3RhbERlbHRhWCkgPiBhY3RpdmF0aW9uRGlzdGFuY2UgfHwgdG9hc3QudmVsb2NpdHlYID4gMTtcblxuICAgICAgICAgIC8vIFJlbW92ZSB0b2FzdFxuICAgICAgICAgIGlmIChzaG91bGRCZURpc21pc3NlZCkge1xuICAgICAgICAgICAgdG9hc3Qud2FzU3dpcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRvYXN0LmRpc21pc3MoKTtcblxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBiYWNrIHRvIG9yaWdpbmFsIHBvc2l0aW9uXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvYXN0LmVsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4ycywgb3BhY2l0eSAuMnMnO1xuICAgICAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICB0b2FzdC5lbC5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICAgIFRvYXN0Ll9kcmFnZ2VkVG9hc3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHggcG9zaXRpb24gb2YgbW91c2Ugb3IgdG91Y2ggZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl94UG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3hQb3MoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICByZXR1cm4gZS5jbGllbnRYO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBhbGwgdG9hc3RzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkaXNtaXNzQWxsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzbWlzc0FsbCgpIHtcbiAgICAgICAgZm9yICh2YXIgdG9hc3RJbmRleCBpbiBUb2FzdC5fdG9hc3RzKSB7XG4gICAgICAgICAgVG9hc3QuX3RvYXN0c1t0b2FzdEluZGV4XS5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb2FzdDtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBUb2FzdFxuICAgKiBAdHlwZSB7QXJyYXkuPFRvYXN0Pn1cbiAgICovXG5cblxuICBUb2FzdC5fdG9hc3RzID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFRvYXN0XG4gICAqL1xuICBUb2FzdC5fY29udGFpbmVyID0gbnVsbDtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgVG9hc3RcbiAgICogQHR5cGUge1RvYXN0fVxuICAgKi9cbiAgVG9hc3QuX2RyYWdnZWRUb2FzdCA9IG51bGw7XG5cbiAgTS5Ub2FzdCA9IFRvYXN0O1xuICBNLnRvYXN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFRvYXN0KG9wdGlvbnMpO1xuICB9O1xufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGVkZ2U6ICdsZWZ0JyxcbiAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgaW5EdXJhdGlvbjogMjUwLFxuICAgIG91dER1cmF0aW9uOiAyMDAsXG4gICAgb25PcGVuU3RhcnQ6IG51bGwsXG4gICAgb25PcGVuRW5kOiBudWxsLFxuICAgIG9uQ2xvc2VTdGFydDogbnVsbCxcbiAgICBvbkNsb3NlRW5kOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxpbmc6IHRydWVcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuXG4gIHZhciBTaWRlbmF2ID0gZnVuY3Rpb24gKF9Db21wb25lbnQ4KSB7XG4gICAgX2luaGVyaXRzKFNpZGVuYXYsIF9Db21wb25lbnQ4KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBTaWRlbmF2IGluc3RhbmNlIGFuZCBzZXQgdXAgb3ZlcmxheVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZGVuYXYoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTaWRlbmF2KTtcblxuICAgICAgdmFyIF90aGlzMzEgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2lkZW5hdi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNpZGVuYXYpKS5jYWxsKHRoaXMsIFNpZGVuYXYsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMzEuZWwuTV9TaWRlbmF2ID0gX3RoaXMzMTtcbiAgICAgIF90aGlzMzEuaWQgPSBfdGhpczMxLiRlbC5hdHRyKCdpZCcpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBTaWRlbmF2XG4gICAgICAgKiBAbWVtYmVyIFNpZGVuYXYjb3B0aW9uc1xuICAgICAgICogQHByb3Age1N0cmluZ30gW2VkZ2U9J2xlZnQnXSAtIFNpZGUgb2Ygc2NyZWVuIG9uIHdoaWNoIFNpZGVuYXYgYXBwZWFyc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtkcmFnZ2FibGU9dHJ1ZV0gLSBBbGxvdyBzd2lwZSBnZXN0dXJlcyB0byBvcGVuL2Nsb3NlIFNpZGVuYXZcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtpbkR1cmF0aW9uPTI1MF0gLSBMZW5ndGggaW4gbXMgb2YgZW50ZXIgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age051bWJlcn0gW291dER1cmF0aW9uPTIwMF0gLSBMZW5ndGggaW4gbXMgb2YgZXhpdCB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlblN0YXJ0IC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gc2lkZW5hdiBzdGFydHMgZW50ZXJpbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuRW5kIC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gc2lkZW5hdiBmaW5pc2hlcyBlbnRlcmluZ1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlU3RhcnQgLSBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzaWRlbmF2IHN0YXJ0cyBleGl0aW5nXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2VFbmQgLSBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzaWRlbmF2IGZpbmlzaGVzIGV4aXRpbmdcbiAgICAgICAqL1xuICAgICAgX3RoaXMzMS5vcHRpb25zID0gJC5leHRlbmQoe30sIFNpZGVuYXYuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBvcGVuL2Nsb3NlIHN0YXRlIG9mIFNpZGVuYXZcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczMxLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBpZiBTaWRlbmF2IGlzIGZpeGVkXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXMzMS5pc0ZpeGVkID0gX3RoaXMzMS5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGVuYXYtZml4ZWQnKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgaWYgU2lkZW5hdiBpcyBiZWluZyBkcmFnZ2VlZFxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIF90aGlzMzEuaXNEcmFnZ2VkID0gZmFsc2U7XG5cbiAgICAgIC8vIFdpbmRvdyBzaXplIHZhcmlhYmxlcyBmb3Igd2luZG93IHJlc2l6ZSBjaGVja3NcbiAgICAgIF90aGlzMzEubGFzdFdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICBfdGhpczMxLmxhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgIF90aGlzMzEuX2NyZWF0ZU92ZXJsYXkoKTtcbiAgICAgIF90aGlzMzEuX2NyZWF0ZURyYWdUYXJnZXQoKTtcbiAgICAgIF90aGlzMzEuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgX3RoaXMzMS5fc2V0dXBDbGFzc2VzKCk7XG4gICAgICBfdGhpczMxLl9zZXR1cEZpeGVkKCk7XG5cbiAgICAgIFNpZGVuYXYuX3NpZGVuYXZzLnB1c2goX3RoaXMzMSk7XG4gICAgICByZXR1cm4gX3RoaXMzMTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2lkZW5hdiwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5fZW5hYmxlQm9keVNjcm9sbGluZygpO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fb3ZlcmxheSk7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZHJhZ1RhcmdldCk7XG4gICAgICAgIHRoaXMuZWwuTV9TaWRlbmF2ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIHZhciBpbmRleCA9IFNpZGVuYXYuX3NpZGVuYXZzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgU2lkZW5hdi5fc2lkZW5hdnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY3JlYXRlT3ZlcmxheVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVPdmVybGF5KCkge1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLl9jbG9zZUJvdW5kID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3NpZGVuYXYtb3ZlcmxheScpO1xuXG4gICAgICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbG9zZUJvdW5kKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgICAgICB0aGlzLl9vdmVybGF5ID0gb3ZlcmxheTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGlmIChTaWRlbmF2Ll9zaWRlbmF2cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhbmRsZURyYWdUYXJnZXREcmFnQm91bmQgPSB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0RHJhZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0UmVsZWFzZUJvdW5kID0gdGhpcy5faGFuZGxlRHJhZ1RhcmdldFJlbGVhc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2VEcmFnQm91bmQgPSB0aGlzLl9oYW5kbGVDbG9zZURyYWcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2VSZWxlYXNlQm91bmQgPSB0aGlzLl9oYW5kbGVDbG9zZVJlbGVhc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvc2VUcmlnZ2VyQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNsb3NlVHJpZ2dlckNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZURyYWdUYXJnZXREcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0UmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVDbG9zZURyYWdCb3VuZCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDbG9zZVJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlQ2xvc2VEcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ2xvc2VSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xvc2VUcmlnZ2VyQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgLy8gQWRkIHJlc2l6ZSBmb3Igc2lkZSBuYXYgZml4ZWRcbiAgICAgICAgaWYgKHRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kID0gdGhpcy5faGFuZGxlV2luZG93UmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBpZiAoU2lkZW5hdi5fc2lkZW5hdnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRyaWdnZXJDbGljayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWdUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRHJhZ1RhcmdldERyYWdCb3VuZCk7XG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURyYWdUYXJnZXRSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUNsb3NlRHJhZ0JvdW5kKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZUNsb3NlUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVDbG9zZURyYWdCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDbG9zZVJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbG9zZVRyaWdnZXJDbGlja0JvdW5kKTtcblxuICAgICAgICAvLyBSZW1vdmUgcmVzaXplIGZvciBzaWRlIG5hdiBmaXhlZFxuICAgICAgICBpZiAodGhpcy5pc0ZpeGVkKSB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZUJvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBUcmlnZ2VyIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlVHJpZ2dlckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICAgIHZhciAkdHJpZ2dlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWRlbmF2LXRyaWdnZXInKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmICR0cmlnZ2VyLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBzaWRlbmF2SWQgPSBNLmdldElkRnJvbVRyaWdnZXIoJHRyaWdnZXJbMF0pO1xuXG4gICAgICAgICAgdmFyIHNpZGVuYXZJbnN0YW5jZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNpZGVuYXZJZCkuTV9TaWRlbmF2O1xuICAgICAgICAgIGlmIChzaWRlbmF2SW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHNpZGVuYXZJbnN0YW5jZS5vcGVuKCR0cmlnZ2VyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHZhcmlhYmxlcyBuZWVkZWQgYXQgdGhlIGJlZ2dpbmluZyBvZiBkcmFnXG4gICAgICAgKiBhbmQgc3RvcCBhbnkgY3VycmVudCB0cmFuc2l0aW9uLlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3N0YXJ0RHJhZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zdGFydERyYWcoZSkge1xuICAgICAgICB2YXIgY2xpZW50WCA9IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX3N0YXJ0aW5nWHBvcyA9IGNsaWVudFg7XG4gICAgICAgIHRoaXMuX3hQb3MgPSB0aGlzLl9zdGFydGluZ1hwb3M7XG4gICAgICAgIHRoaXMuX3RpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIHRoaXMuX2luaXRpYWxTY3JvbGxUb3AgPSB0aGlzLmlzT3BlbiA/IHRoaXMuZWwuc2Nyb2xsVG9wIDogTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICB0aGlzLl92ZXJ0aWNhbGx5U2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZWwpO1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLl9vdmVybGF5KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdmFyaWFibGVzIG5lZWRlZCBhdCBlYWNoIGRyYWcgbW92ZSB1cGRhdGUgdGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2RyYWdNb3ZlVXBkYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2RyYWdNb3ZlVXBkYXRlKGUpIHtcbiAgICAgICAgdmFyIGNsaWVudFggPSBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxUb3AgPSB0aGlzLmlzT3BlbiA/IHRoaXMuZWwuc2Nyb2xsVG9wIDogTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICB0aGlzLmRlbHRhWCA9IE1hdGguYWJzKHRoaXMuX3hQb3MgLSBjbGllbnRYKTtcbiAgICAgICAgdGhpcy5feFBvcyA9IGNsaWVudFg7XG4gICAgICAgIHRoaXMudmVsb2NpdHlYID0gdGhpcy5kZWx0YVggLyAoRGF0ZS5ub3coKSAtIHRoaXMuX3RpbWUpO1xuICAgICAgICB0aGlzLl90aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgaWYgKHRoaXMuX2luaXRpYWxTY3JvbGxUb3AgIT09IGN1cnJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICB0aGlzLl92ZXJ0aWNhbGx5U2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgRHJhZ2dpbmcgb2YgU2lkZW5hdlxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURyYWdUYXJnZXREcmFnXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURyYWdUYXJnZXREcmFnKGUpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgZHJhZ2dhYmxlXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyYWdnYWJsZSB8fCB0aGlzLl9pc0N1cnJlbnRseUZpeGVkKCkgfHwgdGhpcy5fdmVydGljYWxseVNjcm9sbGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG5vdCBiZWluZyBkcmFnZ2VkLCBzZXQgaW5pdGlhbCBkcmFnIHN0YXJ0IHZhcmlhYmxlc1xuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgdGhpcy5fc3RhcnREcmFnKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIHRvdWNobW92ZSB1cGRhdGVzXG4gICAgICAgIHRoaXMuX2RyYWdNb3ZlVXBkYXRlKGUpO1xuXG4gICAgICAgIC8vIENhbGN1bGF0ZSByYXcgZGVsdGFYXG4gICAgICAgIHZhciB0b3RhbERlbHRhWCA9IHRoaXMuX3hQb3MgLSB0aGlzLl9zdGFydGluZ1hwb3M7XG5cbiAgICAgICAgLy8gZHJhZ0RpcmVjdGlvbiBpcyB0aGUgYXR0ZW1wdGVkIHVzZXIgZHJhZyBkaXJlY3Rpb25cbiAgICAgICAgdmFyIGRyYWdEaXJlY3Rpb24gPSB0b3RhbERlbHRhWCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgICAgIC8vIERvbid0IGFsbG93IHRvdGFsRGVsdGFYIHRvIGV4Y2VlZCBTaWRlbmF2IHdpZHRoIG9yIGJlIGRyYWdnZWQgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblxuICAgICAgICB0b3RhbERlbHRhWCA9IE1hdGgubWluKHRoaXMuX3dpZHRoLCBNYXRoLmFicyh0b3RhbERlbHRhWCkpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVkZ2UgPT09IGRyYWdEaXJlY3Rpb24pIHtcbiAgICAgICAgICB0b3RhbERlbHRhWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogdHJhbnNmb3JtWCBpcyB0aGUgZHJhZyBkaXNwbGFjZW1lbnRcbiAgICAgICAgICogdHJhbnNmb3JtUHJlZml4IGlzIHRoZSBpbml0aWFsIHRyYW5zZm9ybSBwbGFjZW1lbnRcbiAgICAgICAgICogSW52ZXJ0IHZhbHVlcyBpZiBTaWRlbmF2IGlzIHJpZ2h0IGVkZ2VcbiAgICAgICAgICovXG4gICAgICAgIHZhciB0cmFuc2Zvcm1YID0gdG90YWxEZWx0YVg7XG4gICAgICAgIHZhciB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVkZ2UgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICB0cmFuc2Zvcm1QcmVmaXggPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICAgICAgdHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1YO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRlIG9wZW4vY2xvc2UgcGVyY2VudGFnZSBvZiBzaWRlbmF2LCB3aXRoIG9wZW4gPSAxIGFuZCBjbG9zZSA9IDBcbiAgICAgICAgdGhpcy5wZXJjZW50T3BlbiA9IE1hdGgubWluKDEsIHRvdGFsRGVsdGFYIC8gdGhpcy5fd2lkdGgpO1xuXG4gICAgICAgIC8vIFNldCB0cmFuc2Zvcm0gYW5kIG9wYWNpdHkgc3R5bGVzXG4gICAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtUHJlZml4ICsgXCIgdHJhbnNsYXRlWChcIiArIHRyYW5zZm9ybVggKyBcInB4KVwiO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSB0aGlzLnBlcmNlbnRPcGVuO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBEcmFnIFRhcmdldCBSZWxlYXNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRHJhZ1RhcmdldFJlbGVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRHJhZ1RhcmdldFJlbGVhc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnBlcmNlbnRPcGVuID4gMC4yKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZU91dCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaXNEcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fdmVydGljYWxseVNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENsb3NlIERyYWdcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDbG9zZURyYWdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2xvc2VEcmFnKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgZHJhZ2dhYmxlXG4gICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlIHx8IHRoaXMuX2lzQ3VycmVudGx5Rml4ZWQoKSB8fCB0aGlzLl92ZXJ0aWNhbGx5U2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgbm90IGJlaW5nIGRyYWdnZWQsIHNldCBpbml0aWFsIGRyYWcgc3RhcnQgdmFyaWFibGVzXG4gICAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dlZCkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnREcmFnKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJ1biB0b3VjaG1vdmUgdXBkYXRlc1xuICAgICAgICAgIHRoaXMuX2RyYWdNb3ZlVXBkYXRlKGUpO1xuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIHJhdyBkZWx0YVhcbiAgICAgICAgICB2YXIgdG90YWxEZWx0YVggPSB0aGlzLl94UG9zIC0gdGhpcy5fc3RhcnRpbmdYcG9zO1xuXG4gICAgICAgICAgLy8gZHJhZ0RpcmVjdGlvbiBpcyB0aGUgYXR0ZW1wdGVkIHVzZXIgZHJhZyBkaXJlY3Rpb25cbiAgICAgICAgICB2YXIgZHJhZ0RpcmVjdGlvbiA9IHRvdGFsRGVsdGFYID4gMCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cbiAgICAgICAgICAvLyBEb24ndCBhbGxvdyB0b3RhbERlbHRhWCB0byBleGNlZWQgU2lkZW5hdiB3aWR0aCBvciBiZSBkcmFnZ2VkIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgICB0b3RhbERlbHRhWCA9IE1hdGgubWluKHRoaXMuX3dpZHRoLCBNYXRoLmFicyh0b3RhbERlbHRhWCkpO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWRnZSAhPT0gZHJhZ0RpcmVjdGlvbikge1xuICAgICAgICAgICAgdG90YWxEZWx0YVggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB0cmFuc2Zvcm1YID0gLXRvdGFsRGVsdGFYO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgdHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1YO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBvcGVuL2Nsb3NlIHBlcmNlbnRhZ2Ugb2Ygc2lkZW5hdiwgd2l0aCBvcGVuID0gMSBhbmQgY2xvc2UgPSAwXG4gICAgICAgICAgdGhpcy5wZXJjZW50T3BlbiA9IE1hdGgubWluKDEsIDEgLSB0b3RhbERlbHRhWCAvIHRoaXMuX3dpZHRoKTtcblxuICAgICAgICAgIC8vIFNldCB0cmFuc2Zvcm0gYW5kIG9wYWNpdHkgc3R5bGVzXG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyB0cmFuc2Zvcm1YICsgXCJweClcIjtcbiAgICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSB0aGlzLnBlcmNlbnRPcGVuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENsb3NlIFJlbGVhc2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDbG9zZVJlbGVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2xvc2VSZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gJiYgdGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wZXJjZW50T3BlbiA+IDAuOCkge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZUluKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3ZlcnRpY2FsbHlTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZXMgY2xvc2luZyBvZiBTaWRlbmF2IHdoZW4gZWxlbWVudCB3aXRoIGNsYXNzIC5zaWRlbmF2LWNsb3NlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2xvc2VUcmlnZ2VyQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2xvc2VUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgICB2YXIgJGNsb3NlVHJpZ2dlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zaWRlbmF2LWNsb3NlJyk7XG4gICAgICAgIGlmICgkY2xvc2VUcmlnZ2VyLmxlbmd0aCAmJiAhdGhpcy5faXNDdXJyZW50bHlGaXhlZCgpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFdpbmRvdyBSZXNpemVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICAvLyBPbmx5IGhhbmRsZSBob3Jpem9udGFsIHJlc2l6ZXNcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpbmRvd1dpZHRoICE9PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmxhc3RXaW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cENsYXNzZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBDbGFzc2VzKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVkZ2UgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgICB0aGlzLmRyYWdUYXJnZXQuY2xhc3NMaXN0LmFkZCgncmlnaHQtYWxpZ25lZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVDbGFzc2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUNsYXNzZXMoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWxpZ25lZCcpO1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQtYWxpZ25lZCcpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBGaXhlZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEZpeGVkKCkge1xuICAgICAgICBpZiAodGhpcy5faXNDdXJyZW50bHlGaXhlZCgpKSB7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2lzQ3VycmVudGx5Rml4ZWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDdXJyZW50bHlGaXhlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGaXhlZCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDk5MjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NyZWF0ZURyYWdUYXJnZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlRHJhZ1RhcmdldCgpIHtcbiAgICAgICAgdmFyIGRyYWdUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHJhZ1RhcmdldC5jbGFzc0xpc3QuYWRkKCdkcmFnLXRhcmdldCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRyYWdUYXJnZXQpO1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXQgPSBkcmFnVGFyZ2V0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcHJldmVudEJvZHlTY3JvbGxpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcHJldmVudEJvZHlTY3JvbGxpbmcoKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZW5hYmxlQm9keVNjcm9sbGluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9lbmFibGVCb2R5U2Nyb2xsaW5nKCkge1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICAvLyBSdW4gb25PcGVuU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhhbmRsZSBmaXhlZCBTaWRlbmF2XG4gICAgICAgIGlmICh0aGlzLl9pc0N1cnJlbnRseUZpeGVkKCkpIHtcbiAgICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9lbmFibGVCb2R5U2Nyb2xsaW5nKCk7XG4gICAgICAgICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgLy8gSGFuZGxlIG5vbi1maXhlZCBTaWRlbmF2XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2ZW50U2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2ZW50Qm9keVNjcm9sbGluZygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghdGhpcy5pc0RyYWdnZWQgfHwgdGhpcy5wZXJjZW50T3BlbiAhPSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlSW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgICAgLy8gUnVuIG9uQ2xvc2VTdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0LmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgZml4ZWQgU2lkZW5hdlxuICAgICAgICBpZiAodGhpcy5faXNDdXJyZW50bHlGaXhlZCgpKSB7XG4gICAgICAgICAgdmFyIHRyYW5zZm9ybVggPSB0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnID8gJy0xMDUlJyA6ICcxMDUlJztcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIHRyYW5zZm9ybVggKyBcIilcIjtcblxuICAgICAgICAgIC8vIEhhbmRsZSBub24tZml4ZWQgU2lkZW5hdlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2VuYWJsZUJvZHlTY3JvbGxpbmcoKTtcblxuICAgICAgICAgIGlmICghdGhpcy5pc0RyYWdnZWQgfHwgdGhpcy5wZXJjZW50T3BlbiAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlT3V0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlSW4oKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVTaWRlbmF2SW4oKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZU92ZXJsYXlJbigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZVNpZGVuYXZJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlU2lkZW5hdkluKCkge1xuICAgICAgICB2YXIgX3RoaXMzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHNsaWRlT3V0UGVyY2VudCA9IHRoaXMub3B0aW9ucy5lZGdlID09PSAnbGVmdCcgPyAtMSA6IDE7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dlZCkge1xuICAgICAgICAgIHNsaWRlT3V0UGVyY2VudCA9IHRoaXMub3B0aW9ucy5lZGdlID09PSAnbGVmdCcgPyBzbGlkZU91dFBlcmNlbnQgKyB0aGlzLnBlcmNlbnRPcGVuIDogc2xpZGVPdXRQZXJjZW50IC0gdGhpcy5wZXJjZW50T3BlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZWwpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IFtzbGlkZU91dFBlcmNlbnQgKiAxMDAgKyBcIiVcIiwgMF0sXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUnVuIG9uT3BlbkVuZCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczMyLm9wdGlvbnMub25PcGVuRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIF90aGlzMzIub3B0aW9ucy5vbk9wZW5FbmQuY2FsbChfdGhpczMyLCBfdGhpczMyLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU92ZXJsYXlJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3ZlcmxheUluKCkge1xuICAgICAgICB2YXIgc3RhcnQgPSAwO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICBzdGFydCA9IHRoaXMucGVyY2VudE9wZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzLl9vdmVybGF5KS5jc3Moe1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5fb3ZlcmxheSk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuX292ZXJsYXksXG4gICAgICAgICAgb3BhY2l0eTogW3N0YXJ0LCAxXSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmluRHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3V0KCkge1xuICAgICAgICB0aGlzLl9hbmltYXRlU2lkZW5hdk91dCgpO1xuICAgICAgICB0aGlzLl9hbmltYXRlT3ZlcmxheU91dCgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZVNpZGVuYXZPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZVNpZGVuYXZPdXQoKSB7XG4gICAgICAgIHZhciBfdGhpczMzID0gdGhpcztcblxuICAgICAgICB2YXIgZW5kUGVyY2VudCA9IHRoaXMub3B0aW9ucy5lZGdlID09PSAnbGVmdCcgPyAtMSA6IDE7XG4gICAgICAgIHZhciBzbGlkZU91dFBlcmNlbnQgPSAwO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICBzbGlkZU91dFBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnID8gZW5kUGVyY2VudCArIHRoaXMucGVyY2VudE9wZW4gOiBlbmRQZXJjZW50IC0gdGhpcy5wZXJjZW50T3BlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZWwpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IFtzbGlkZU91dFBlcmNlbnQgKiAxMDAgKyBcIiVcIiwgZW5kUGVyY2VudCAqIDEwNSArIFwiJVwiXSxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUnVuIG9uT3BlbkVuZCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczMzLm9wdGlvbnMub25DbG9zZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczMzLm9wdGlvbnMub25DbG9zZUVuZC5jYWxsKF90aGlzMzMsIF90aGlzMzMuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlT3ZlcmxheU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3ZlcmxheU91dCgpIHtcbiAgICAgICAgdmFyIF90aGlzMzQgPSB0aGlzO1xuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuX292ZXJsYXkpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLl9vdmVybGF5LFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoX3RoaXMzNC5fb3ZlcmxheSkuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChTaWRlbmF2Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2lkZW5hdiksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1NpZGVuYXY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2lkZW5hdjtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTaWRlbmF2XG4gICAqIEB0eXBlIHtBcnJheS48U2lkZW5hdj59XG4gICAqL1xuXG5cbiAgU2lkZW5hdi5fc2lkZW5hdnMgPSBbXTtcblxuICBNLlNpZGVuYXYgPSBTaWRlbmF2O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoU2lkZW5hdiwgJ3NpZGVuYXYnLCAnTV9TaWRlbmF2Jyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICB0aHJvdHRsZTogMTAwLFxuICAgIHNjcm9sbE9mZnNldDogMjAwLCAvLyBvZmZzZXQgLSAyMDAgYWxsb3dzIGVsZW1lbnRzIG5lYXIgYm90dG9tIG9mIHBhZ2UgdG8gc2Nyb2xsXG4gICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICAgIGdldEFjdGl2ZUVsZW1lbnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcmV0dXJuICdhW2hyZWY9XCIjJyArIGlkICsgJ1wiXSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFNjcm9sbFNweSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50OSkge1xuICAgIF9pbmhlcml0cyhTY3JvbGxTcHksIF9Db21wb25lbnQ5KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBTY3JvbGxTcHkgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTY3JvbGxTcHkoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTY3JvbGxTcHkpO1xuXG4gICAgICB2YXIgX3RoaXMzNSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTY3JvbGxTcHkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY3JvbGxTcHkpKS5jYWxsKHRoaXMsIFNjcm9sbFNweSwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMzNS5lbC5NX1Njcm9sbFNweSA9IF90aGlzMzU7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIG1vZGFsXG4gICAgICAgKiBAbWVtYmVyIE1vZGFsI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFt0aHJvdHRsZT0xMDBdIC0gVGhyb3R0bGUgb2Ygc2Nyb2xsIGhhbmRsZXJcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtzY3JvbGxPZmZzZXQ9MjAwXSAtIE9mZnNldCBmb3IgY2VudGVyaW5nIGVsZW1lbnQgd2hlbiBzY3JvbGxlZCB0b1xuICAgICAgICogQHByb3Age1N0cmluZ30gW2FjdGl2ZUNsYXNzPSdhY3RpdmUnXSAtIENsYXNzIGFwcGxpZWQgdG8gYWN0aXZlIGVsZW1lbnRzXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IFtnZXRBY3RpdmVFbGVtZW50XSAtIFVzZWQgdG8gZmluZCBhY3RpdmUgZWxlbWVudFxuICAgICAgICovXG4gICAgICBfdGhpczM1Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgU2Nyb2xsU3B5LmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLy8gc2V0dXBcbiAgICAgIFNjcm9sbFNweS5fZWxlbWVudHMucHVzaChfdGhpczM1KTtcbiAgICAgIFNjcm9sbFNweS5fY291bnQrKztcbiAgICAgIFNjcm9sbFNweS5faW5jcmVtZW50Kys7XG4gICAgICBfdGhpczM1LnRpY2tJZCA9IC0xO1xuICAgICAgX3RoaXMzNS5pZCA9IFNjcm9sbFNweS5faW5jcmVtZW50O1xuICAgICAgX3RoaXMzNS5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICBfdGhpczM1Ll9oYW5kbGVXaW5kb3dTY3JvbGwoKTtcbiAgICAgIHJldHVybiBfdGhpczM1O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTY3JvbGxTcHksIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBTY3JvbGxTcHkuX2VsZW1lbnRzLnNwbGljZShTY3JvbGxTcHkuX2VsZW1lbnRzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICBTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3LnNwbGljZShTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3LmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy5zcGxpY2UoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuaW5kZXhPZih0aGlzLiRlbCksIDEpO1xuICAgICAgICBTY3JvbGxTcHkuX2NvdW50LS07XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudCh0aGlzLiRlbC5hdHRyKCdpZCcpKSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgdGhpcy5lbC5NX1Njcm9sbFNweSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHZhciB0aHJvdHRsZWRSZXNpemUgPSBNLnRocm90dGxlKHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbCwgMjAwKTtcbiAgICAgICAgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQgPSB0aHJvdHRsZWRSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsQm91bmQgPSB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgaWYgKFNjcm9sbFNweS5fY291bnQgPT09IDEpIHtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsQm91bmQpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRyaWdnZXJDbGljayk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGlmIChTY3JvbGxTcHkuX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kKTtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFRyaWdnZXIgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVUcmlnZ2VyQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgICAgdmFyICR0cmlnZ2VyID0gJChlLnRhcmdldCk7XG4gICAgICAgIGZvciAodmFyIGkgPSBTY3JvbGxTcHkuX2VsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbHNweSA9IFNjcm9sbFNweS5fZWxlbWVudHNbaV07XG4gICAgICAgICAgaWYgKCR0cmlnZ2VyLmlzKCdhW2hyZWY9XCIjJyArIHNjcm9sbHNweS4kZWwuYXR0cignaWQnKSArICdcIl0nKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHNjcm9sbHNweS4kZWwub2Zmc2V0KCkudG9wICsgMTtcblxuICAgICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICAgIHRhcmdldHM6IFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLFxuICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldCAtIHNjcm9sbHNweS5vcHRpb25zLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgV2luZG93IFNjcm9sbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVdpbmRvd1Njcm9sbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVXaW5kb3dTY3JvbGwoKSB7XG4gICAgICAgIC8vIHVuaXF1ZSB0aWNrIGlkXG4gICAgICAgIFNjcm9sbFNweS5fdGlja3MrKztcblxuICAgICAgICAvLyB2aWV3cG9ydCByZWN0YW5nbGVcbiAgICAgICAgdmFyIHRvcCA9IE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKSxcbiAgICAgICAgICAgIGxlZnQgPSBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpLFxuICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgICAgICBib3R0b20gPSB0b3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIGVsZW1lbnRzIGFyZSBpbiB2aWV3XG4gICAgICAgIHZhciBpbnRlcnNlY3Rpb25zID0gU2Nyb2xsU3B5Ll9maW5kRWxlbWVudHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlcnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHNjcm9sbHNweSA9IGludGVyc2VjdGlvbnNbaV07XG4gICAgICAgICAgdmFyIGxhc3RUaWNrID0gc2Nyb2xsc3B5LnRpY2tJZDtcbiAgICAgICAgICBpZiAobGFzdFRpY2sgPCAwKSB7XG4gICAgICAgICAgICAvLyBlbnRlcmVkIGludG8gdmlld1xuICAgICAgICAgICAgc2Nyb2xsc3B5Ll9lbnRlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHVwZGF0ZSB0aWNrIGlkXG4gICAgICAgICAgc2Nyb2xsc3B5LnRpY2tJZCA9IFNjcm9sbFNweS5fdGlja3M7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgX3Njcm9sbHNweSA9IFNjcm9sbFNweS5fZWxlbWVudHNJblZpZXdbX2ldO1xuICAgICAgICAgIHZhciBfbGFzdFRpY2sgPSBfc2Nyb2xsc3B5LnRpY2tJZDtcbiAgICAgICAgICBpZiAoX2xhc3RUaWNrID49IDAgJiYgX2xhc3RUaWNrICE9PSBTY3JvbGxTcHkuX3RpY2tzKSB7XG4gICAgICAgICAgICAvLyBleGl0ZWQgZnJvbSB2aWV3XG4gICAgICAgICAgICBfc2Nyb2xsc3B5Ll9leGl0KCk7XG4gICAgICAgICAgICBfc2Nyb2xsc3B5LnRpY2tJZCA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbWVtYmVyIGVsZW1lbnRzIGluIHZpZXcgZm9yIG5leHQgdGlja1xuICAgICAgICBTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3ID0gaW50ZXJzZWN0aW9ucztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaW5kIGVsZW1lbnRzIHRoYXQgYXJlIHdpdGhpbiB0aGUgYm91bmRhcnlcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3BcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSByaWdodFxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGJvdHRvbVxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGxlZnRcbiAgICAgICAqIEByZXR1cm4ge0FycmF5LjxTY3JvbGxTcHk+fSAgIEEgY29sbGVjdGlvbiBvZiBlbGVtZW50c1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2VudGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2VudGVyKCkge1xuICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cyA9IFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdKSB7XG4gICAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICBpZiAoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF1bMF0uTV9TY3JvbGxTcHkgJiYgdGhpcy5pZCA8IFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdWzBdLk1fU2Nyb2xsU3B5LmlkKSB7XG4gICAgICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy51bnNoaWZ0KHRoaXMuJGVsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMucHVzaCh0aGlzLiRlbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLnB1c2godGhpcy4kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2V4aXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZXhpdCgpIHtcbiAgICAgICAgdmFyIF90aGlzMzYgPSB0aGlzO1xuXG4gICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZS5oZWlnaHQoKSAhPSAwO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0pIHtcbiAgICAgICAgICAkKHRoaXMub3B0aW9ucy5nZXRBY3RpdmVFbGVtZW50KFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdLmF0dHIoJ2lkJykpKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuXG4gICAgICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMgPSBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWwuYXR0cignaWQnKSAhPSBfdGhpczM2LiRlbC5hdHRyKCdpZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZW1wdHlcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0uYXR0cignaWQnKSkpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KFNjcm9sbFNweS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNjcm9sbFNweSksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1Njcm9sbFNweTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2ZpbmRFbGVtZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5kRWxlbWVudHModG9wLCByaWdodCwgYm90dG9tLCBsZWZ0KSB7XG4gICAgICAgIHZhciBoaXRzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgU2Nyb2xsU3B5Ll9lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBzY3JvbGxzcHkgPSBTY3JvbGxTcHkuX2VsZW1lbnRzW2ldO1xuICAgICAgICAgIHZhciBjdXJyVG9wID0gdG9wICsgc2Nyb2xsc3B5Lm9wdGlvbnMuc2Nyb2xsT2Zmc2V0IHx8IDIwMDtcblxuICAgICAgICAgIGlmIChzY3JvbGxzcHkuJGVsLmhlaWdodCgpID4gMCkge1xuICAgICAgICAgICAgdmFyIGVsVG9wID0gc2Nyb2xsc3B5LiRlbC5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgZWxMZWZ0ID0gc2Nyb2xsc3B5LiRlbC5vZmZzZXQoKS5sZWZ0LFxuICAgICAgICAgICAgICAgIGVsUmlnaHQgPSBlbExlZnQgKyBzY3JvbGxzcHkuJGVsLndpZHRoKCksXG4gICAgICAgICAgICAgICAgZWxCb3R0b20gPSBlbFRvcCArIHNjcm9sbHNweS4kZWwuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgIHZhciBpc0ludGVyc2VjdCA9ICEoZWxMZWZ0ID4gcmlnaHQgfHwgZWxSaWdodCA8IGxlZnQgfHwgZWxUb3AgPiBib3R0b20gfHwgZWxCb3R0b20gPCBjdXJyVG9wKTtcblxuICAgICAgICAgICAgaWYgKGlzSW50ZXJzZWN0KSB7XG4gICAgICAgICAgICAgIGhpdHMucHVzaChzY3JvbGxzcHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGl0cztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTY3JvbGxTcHk7XG4gIH0oQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgU2Nyb2xsU3B5XG4gICAqIEB0eXBlIHtBcnJheS48U2Nyb2xsU3B5Pn1cbiAgICovXG5cblxuICBTY3JvbGxTcHkuX2VsZW1lbnRzID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKiBAdHlwZSB7QXJyYXkuPFNjcm9sbFNweT59XG4gICAqL1xuICBTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3ID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKiBAdHlwZSB7QXJyYXkuPGNhc2g+fVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMgPSBbXTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgU2Nyb2xsU3B5XG4gICAqL1xuICBTY3JvbGxTcHkuX2NvdW50ID0gMDtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgU2Nyb2xsU3B5XG4gICAqL1xuICBTY3JvbGxTcHkuX2luY3JlbWVudCA9IDA7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll90aWNrcyA9IDA7XG5cbiAgTS5TY3JvbGxTcHkgPSBTY3JvbGxTcHk7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihTY3JvbGxTcHksICdzY3JvbGxTcHknLCAnTV9TY3JvbGxTcHknKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGRhdGE6IHt9LCAvLyBBdXRvY29tcGxldGUgZGF0YSBzZXRcbiAgICBsaW1pdDogSW5maW5pdHksIC8vIExpbWl0IG9mIHJlc3VsdHMgdGhlIGF1dG9jb21wbGV0ZSBzaG93c1xuICAgIG9uQXV0b2NvbXBsZXRlOiBudWxsLCAvLyBDYWxsYmFjayBmb3Igd2hlbiBhdXRvY29tcGxldGVkXG4gICAgbWluTGVuZ3RoOiAxLCAvLyBNaW4gY2hhcmFjdGVycyBiZWZvcmUgYXV0b2NvbXBsZXRlIHN0YXJ0c1xuICAgIHNvcnRGdW5jdGlvbjogZnVuY3Rpb24gKGEsIGIsIGlucHV0U3RyaW5nKSB7XG4gICAgICAvLyBTb3J0IGZ1bmN0aW9uIGZvciBzb3J0aW5nIGF1dG9jb21wbGV0ZSByZXN1bHRzXG4gICAgICByZXR1cm4gYS5pbmRleE9mKGlucHV0U3RyaW5nKSAtIGIuaW5kZXhPZihpbnB1dFN0cmluZyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIEF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MTApIHtcbiAgICBfaW5oZXJpdHMoQXV0b2NvbXBsZXRlLCBfQ29tcG9uZW50MTApO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IEF1dG9jb21wbGV0ZSBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEF1dG9jb21wbGV0ZShlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF1dG9jb21wbGV0ZSk7XG5cbiAgICAgIHZhciBfdGhpczM3ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEF1dG9jb21wbGV0ZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEF1dG9jb21wbGV0ZSkpLmNhbGwodGhpcywgQXV0b2NvbXBsZXRlLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczM3LmVsLk1fQXV0b2NvbXBsZXRlID0gX3RoaXMzNztcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICAgKiBAbWVtYmVyIEF1dG9jb21wbGV0ZSNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBkdXJhdGlvblxuICAgICAgICogQHByb3Age051bWJlcn0gZGlzdFxuICAgICAgICogQHByb3Age251bWJlcn0gc2hpZnRcbiAgICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmdcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBmdWxsV2lkdGhcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBpbmRpY2F0b3JzXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gbm9XcmFwXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ3ljbGVUb1xuICAgICAgICovXG4gICAgICBfdGhpczM3Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b2NvbXBsZXRlLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLy8gU2V0dXBcbiAgICAgIF90aGlzMzcuaXNPcGVuID0gZmFsc2U7XG4gICAgICBfdGhpczM3LmNvdW50ID0gMDtcbiAgICAgIF90aGlzMzcuYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgIF90aGlzMzcub2xkVmFsO1xuICAgICAgX3RoaXMzNy4kaW5wdXRGaWVsZCA9IF90aGlzMzcuJGVsLmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpO1xuICAgICAgX3RoaXMzNy4kYWN0aXZlID0gJCgpO1xuICAgICAgX3RoaXMzNy5fbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICBfdGhpczM3Ll9zZXR1cERyb3Bkb3duKCk7XG5cbiAgICAgIF90aGlzMzcuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzMzc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEF1dG9jb21wbGV0ZSwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRHJvcGRvd24oKTtcbiAgICAgICAgdGhpcy5lbC5NX0F1dG9jb21wbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0Qmx1ckJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRCbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c0JvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRLZXl1cEFuZEZvY3VzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2Vkb3duQW5kVG91Y2hzdGFydEJvdW5kID0gdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2Vkb3duQW5kVG91Y2hzdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRCb3VuZCA9IHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNldXBBbmRUb3VjaGVuZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2hhbmRsZUlucHV0Qmx1ckJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2Vkb3duQW5kVG91Y2hzdGFydEJvdW5kKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNldXBBbmRUb3VjaGVuZEJvdW5kKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2hhbmRsZUlucHV0Qmx1ckJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2Vkb3duQW5kVG91Y2hzdGFydEJvdW5kKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNldXBBbmRUb3VjaGVuZEJvdW5kKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRHJvcGRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBEcm9wZG93bigpIHtcbiAgICAgICAgdmFyIF90aGlzMzggPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuaWQgPSBcImF1dG9jb21wbGV0ZS1vcHRpb25zLVwiICsgTS5ndWlkKCk7XG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmFkZENsYXNzKCdhdXRvY29tcGxldGUtY29udGVudCBkcm9wZG93bi1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuJGlucHV0RmllbGQuYXBwZW5kKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgdGhpcy5jb250YWluZXIuaWQpO1xuXG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSBNLkRyb3Bkb3duLmluaXQodGhpcy5lbCwge1xuICAgICAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgICBjb3ZlclRyaWdnZXI6IGZhbHNlLFxuICAgICAgICAgIG9uSXRlbUNsaWNrOiBmdW5jdGlvbiAoaXRlbUVsKSB7XG4gICAgICAgICAgICBfdGhpczM4LnNlbGVjdE9wdGlvbigkKGl0ZW1FbCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2tldGNoeSByZW1vdmFsIG9mIGRyb3Bkb3duIGNsaWNrIGhhbmRsZXJcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZHJvcGRvd24uX2hhbmRsZUNsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZURyb3Bkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZURyb3Bkb3duKCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgQmx1clxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Qmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEJsdXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2Vkb3duKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIHRoaXMuX3Jlc2V0QXV0b2NvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgS2V5dXAgYW5kIEZvY3VzXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRLZXl1cEFuZEZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1cyhlKSB7XG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdrZXl1cCcpIHtcbiAgICAgICAgICBBdXRvY29tcGxldGUuX2tleWRvd24gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5lbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIERvbid0IGNhcHR1cmUgZW50ZXIgb3IgYXJyb3cga2V5IHVzYWdlLlxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgaXNuJ3QgZW1wdHlcbiAgICAgICAgLy8gQ2hlY2sgaWYgZm9jdXMgdHJpZ2dlcmVkIGJ5IHRhYlxuICAgICAgICBpZiAodGhpcy5vbGRWYWwgIT09IHZhbCAmJiAoTS50YWJQcmVzc2VkIHx8IGUudHlwZSAhPT0gJ2ZvY3VzJykpIHtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBvbGRWYWxcbiAgICAgICAgdGhpcy5vbGRWYWwgPSB2YWw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IEtleWRvd25cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEtleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRLZXlkb3duKGUpIHtcbiAgICAgICAgQXV0b2NvbXBsZXRlLl9rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAvLyBBcnJvdyBrZXlzIGFuZCBlbnRlciBrZXkgdXNhZ2VcbiAgICAgICAgdmFyIGtleUNvZGUgPSBlLmtleUNvZGUsXG4gICAgICAgICAgICBsaUVsZW1lbnQgPSB2b2lkIDAsXG4gICAgICAgICAgICBudW1JdGVtcyA9ICQodGhpcy5jb250YWluZXIpLmNoaWxkcmVuKCdsaScpLmxlbmd0aDtcblxuICAgICAgICAvLyBzZWxlY3QgZWxlbWVudCBvbiBFbnRlclxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gTS5rZXlzLkVOVEVSICYmIHRoaXMuYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgICAgIGxpRWxlbWVudCA9ICQodGhpcy5jb250YWluZXIpLmNoaWxkcmVuKCdsaScpLmVxKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgIGlmIChsaUVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbihsaUVsZW1lbnQpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXB0dXJlIHVwIGFuZCBkb3duIGtleVxuICAgICAgICBpZiAoa2V5Q29kZSA9PT0gTS5rZXlzLkFSUk9XX1VQIHx8IGtleUNvZGUgPT09IE0ua2V5cy5BUlJPV19ET1dOKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgaWYgKGtleUNvZGUgPT09IE0ua2V5cy5BUlJPV19VUCAmJiB0aGlzLmFjdGl2ZUluZGV4ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleC0tO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChrZXlDb2RlID09PSBNLmtleXMuQVJST1dfRE9XTiAmJiB0aGlzLmFjdGl2ZUluZGV4IDwgbnVtSXRlbXMgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4Kys7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy4kYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLiRhY3RpdmUgPSAkKHRoaXMuY29udGFpbmVyKS5jaGlsZHJlbignbGknKS5lcSh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuJGFjdGl2ZS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dENsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENvbnRhaW5lciBNb3VzZWRvd24gYW5kIFRvdWNoc3RhcnRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDb250YWluZXJNb3VzZWRvd25BbmRUb3VjaHN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnQoZSkge1xuICAgICAgICB0aGlzLl9tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDb250YWluZXIgTW91c2V1cCBhbmQgVG91Y2hlbmRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ29udGFpbmVyTW91c2V1cEFuZFRvdWNoZW5kKGUpIHtcbiAgICAgICAgdGhpcy5fbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGlnaGxpZ2h0IHBhcnRpYWwgbWF0Y2hcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oaWdobGlnaHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGlnaGxpZ2h0KHN0cmluZywgJGVsKSB7XG4gICAgICAgIHZhciBpbWcgPSAkZWwuZmluZCgnaW1nJyk7XG4gICAgICAgIHZhciBtYXRjaFN0YXJ0ID0gJGVsLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJycgKyBzdHJpbmcudG9Mb3dlckNhc2UoKSArICcnKSxcbiAgICAgICAgICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIHN0cmluZy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgYmVmb3JlTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKDAsIG1hdGNoU3RhcnQpLFxuICAgICAgICAgICAgbWF0Y2hUZXh0ID0gJGVsLnRleHQoKS5zbGljZShtYXRjaFN0YXJ0LCBtYXRjaEVuZCArIDEpLFxuICAgICAgICAgICAgYWZ0ZXJNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hFbmQgKyAxKTtcbiAgICAgICAgJGVsLmh0bWwoXCI8c3Bhbj5cIiArIGJlZm9yZU1hdGNoICsgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz5cIiArIG1hdGNoVGV4dCArIFwiPC9zcGFuPlwiICsgYWZ0ZXJNYXRjaCArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgaWYgKGltZy5sZW5ndGgpIHtcbiAgICAgICAgICAkZWwucHJlcGVuZChpbWcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzZXQgY3VycmVudCBlbGVtZW50IHBvc2l0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVzZXRDdXJyZW50RWxlbWVudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXNldEN1cnJlbnRFbGVtZW50KCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVzZXQgYXV0b2NvbXBsZXRlIGVsZW1lbnRzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVzZXRBdXRvY29tcGxldGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzZXRBdXRvY29tcGxldGUoKSB7XG4gICAgICAgICQodGhpcy5jb250YWluZXIpLmVtcHR5KCk7XG4gICAgICAgIHRoaXMuX3Jlc2V0Q3VycmVudEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5vbGRWYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxlY3QgYXV0b2NvbXBsZXRlIG9wdGlvblxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCAgQXV0b2NvbXBsZXRlIG9wdGlvbiBsaXN0IGl0ZW0gZWxlbWVudFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2VsZWN0T3B0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0T3B0aW9uKGVsKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gZWwudGV4dCgpLnRyaW0oKTtcbiAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHRleHQ7XG4gICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB0aGlzLl9yZXNldEF1dG9jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIG9uQXV0b2NvbXBsZXRlIGNhbGxiYWNrLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkF1dG9jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkF1dG9jb21wbGV0ZS5jYWxsKHRoaXMsIHRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVuZGVyIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhICBkYXRhIHNldFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbCAgY3VycmVudCBpbnB1dCB2YWx1ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbmRlckRyb3Bkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlckRyb3Bkb3duKGRhdGEsIHZhbCkge1xuICAgICAgICB2YXIgX3RoaXMzOSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRBdXRvY29tcGxldGUoKTtcblxuICAgICAgICB2YXIgbWF0Y2hpbmdEYXRhID0gW107XG5cbiAgICAgICAgLy8gR2F0aGVyIGFsbCBtYXRjaGluZyBkYXRhXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAvLyBCcmVhayBpZiBwYXN0IGxpbWl0XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudCA+PSB0aGlzLm9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBlbnRyeSA9IHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVtrZXldLFxuICAgICAgICAgICAgICBrZXk6IGtleVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1hdGNoaW5nRGF0YS5wdXNoKGVudHJ5KTtcblxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvcnRcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zb3J0RnVuY3Rpb24pIHtcbiAgICAgICAgICB2YXIgc29ydEZ1bmN0aW9uQm91bmQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMzkub3B0aW9ucy5zb3J0RnVuY3Rpb24oYS5rZXkudG9Mb3dlckNhc2UoKSwgYi5rZXkudG9Mb3dlckNhc2UoKSwgdmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbWF0Y2hpbmdEYXRhLnNvcnQoc29ydEZ1bmN0aW9uQm91bmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF0Y2hpbmdEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIF9lbnRyeSA9IG1hdGNoaW5nRGF0YVtpXTtcbiAgICAgICAgICB2YXIgJGF1dG9jb21wbGV0ZU9wdGlvbiA9ICQoJzxsaT48L2xpPicpO1xuICAgICAgICAgIGlmICghIV9lbnRyeS5kYXRhKSB7XG4gICAgICAgICAgICAkYXV0b2NvbXBsZXRlT3B0aW9uLmFwcGVuZChcIjxpbWcgc3JjPVxcXCJcIiArIF9lbnRyeS5kYXRhICsgXCJcXFwiIGNsYXNzPVxcXCJyaWdodCBjaXJjbGVcXFwiPjxzcGFuPlwiICsgX2VudHJ5LmtleSArIFwiPC9zcGFuPlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxzcGFuPicgKyBfZW50cnkua2V5ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5hcHBlbmQoJGF1dG9jb21wbGV0ZU9wdGlvbik7XG4gICAgICAgICAgdGhpcy5faGlnaGxpZ2h0KHZhbCwgJGF1dG9jb21wbGV0ZU9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIEF1dG9jb21wbGV0ZSBEcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIHZhciB2YWwgPSB0aGlzLmVsLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgdGhpcy5fcmVzZXRBdXRvY29tcGxldGUoKTtcblxuICAgICAgICBpZiAodmFsLmxlbmd0aCA+PSB0aGlzLm9wdGlvbnMubWluTGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX3JlbmRlckRyb3Bkb3duKHRoaXMub3B0aW9ucy5kYXRhLCB2YWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3BlbiBkcm9wZG93blxuICAgICAgICBpZiAoIXRoaXMuZHJvcGRvd24uaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5kcm9wZG93bi5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUmVjYWxjdWxhdGUgZHJvcGRvd24gd2hlbiBpdHMgYWxyZWFkeSBvcGVuXG4gICAgICAgICAgdGhpcy5kcm9wZG93bi5yZWNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIEF1dG9jb21wbGV0ZSBEcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVwZGF0ZSBEYXRhXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlRGF0YVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURhdGEoZGF0YSkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5lbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLm9wdGlvbnMuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyRHJvcGRvd24oZGF0YSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChBdXRvY29tcGxldGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdXRvY29tcGxldGUpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9BdXRvY29tcGxldGU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQXV0b2NvbXBsZXRlO1xuICB9KENvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIEF1dG9jb21wbGV0ZVxuICAgKi9cblxuXG4gIEF1dG9jb21wbGV0ZS5fa2V5ZG93biA9IGZhbHNlO1xuXG4gIE0uQXV0b2NvbXBsZXRlID0gQXV0b2NvbXBsZXRlO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoQXV0b2NvbXBsZXRlLCAnYXV0b2NvbXBsZXRlJywgJ01fQXV0b2NvbXBsZXRlJyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgbGFiZWxzIG9mIHRleHQgZmllbGRzXG4gIE0udXBkYXRlVGV4dEZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIGlucHV0W3R5cGU9ZGF0ZV0sIGlucHV0W3R5cGU9dGltZV0sIHRleHRhcmVhJztcbiAgICAkKGlucHV0X3NlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgIGlmIChlbGVtZW50LnZhbHVlLmxlbmd0aCA+IDAgfHwgJChlbGVtZW50KS5pcygnOmZvY3VzJykgfHwgZWxlbWVudC5hdXRvZm9jdXMgfHwgJHRoaXMuYXR0cigncGxhY2Vob2xkZXInKSAhPT0gbnVsbCkge1xuICAgICAgICAkdGhpcy5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQudmFsaWRpdHkpIHtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScsIGVsZW1lbnQudmFsaWRpdHkuYmFkSW5wdXQgPT09IHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIE0udmFsaWRhdGVfZmllbGQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdmFyIGhhc0xlbmd0aCA9IG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpICE9PSBudWxsO1xuICAgIHZhciBsZW5BdHRyID0gcGFyc2VJbnQob2JqZWN0LmF0dHIoJ2RhdGEtbGVuZ3RoJykpO1xuICAgIHZhciBsZW4gPSBvYmplY3RbMF0udmFsdWUubGVuZ3RoO1xuXG4gICAgaWYgKGxlbiA9PT0gMCAmJiBvYmplY3RbMF0udmFsaWRpdHkuYmFkSW5wdXQgPT09IGZhbHNlICYmICFvYmplY3QuaXMoJzpyZXF1aXJlZCcpKSB7XG4gICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygndmFsaWQnKTtcbiAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvYmplY3QuaGFzQ2xhc3MoJ3ZhbGlkYXRlJykpIHtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGNoYXJhY3RlciBjb3VudGVyIGF0dHJpYnV0ZXNcbiAgICAgICAgaWYgKG9iamVjdC5pcygnOnZhbGlkJykgJiYgaGFzTGVuZ3RoICYmIGxlbiA8PSBsZW5BdHRyIHx8IG9iamVjdC5pcygnOnZhbGlkJykgJiYgIWhhc0xlbmd0aCkge1xuICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgb2JqZWN0LmFkZENsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgTS50ZXh0YXJlYUF1dG9SZXNpemUgPSBmdW5jdGlvbiAoJHRleHRhcmVhKSB7XG4gICAgLy8gV3JhcCBpZiBuYXRpdmUgZWxlbWVudFxuICAgIGlmICgkdGV4dGFyZWEgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAkdGV4dGFyZWEgPSAkKCR0ZXh0YXJlYSk7XG4gICAgfVxuXG4gICAgaWYgKCEkdGV4dGFyZWEubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyB0ZXh0YXJlYSBlbGVtZW50IGZvdW5kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGV4dGFyZWEgQXV0byBSZXNpemVcbiAgICB2YXIgaGlkZGVuRGl2ID0gJCgnLmhpZGRlbmRpdicpLmZpcnN0KCk7XG4gICAgaWYgKCFoaWRkZW5EaXYubGVuZ3RoKSB7XG4gICAgICBoaWRkZW5EaXYgPSAkKCc8ZGl2IGNsYXNzPVwiaGlkZGVuZGl2IGNvbW1vblwiPjwvZGl2PicpO1xuICAgICAgJCgnYm9keScpLmFwcGVuZChoaWRkZW5EaXYpO1xuICAgIH1cblxuICAgIC8vIFNldCBmb250IHByb3BlcnRpZXMgb2YgaGlkZGVuRGl2XG4gICAgdmFyIGZvbnRGYW1pbHkgPSAkdGV4dGFyZWEuY3NzKCdmb250LWZhbWlseScpO1xuICAgIHZhciBmb250U2l6ZSA9ICR0ZXh0YXJlYS5jc3MoJ2ZvbnQtc2l6ZScpO1xuICAgIHZhciBsaW5lSGVpZ2h0ID0gJHRleHRhcmVhLmNzcygnbGluZS1oZWlnaHQnKTtcblxuICAgIC8vIEZpcmVmb3ggY2FuJ3QgaGFuZGxlIHBhZGRpbmcgc2hvcnRoYW5kLlxuICAgIHZhciBwYWRkaW5nVG9wID0gJHRleHRhcmVhLmNzcygncGFkZGluZy10b3AnKTtcbiAgICB2YXIgcGFkZGluZ1JpZ2h0ID0gJHRleHRhcmVhLmNzcygncGFkZGluZy1yaWdodCcpO1xuICAgIHZhciBwYWRkaW5nQm90dG9tID0gJHRleHRhcmVhLmNzcygncGFkZGluZy1ib3R0b20nKTtcbiAgICB2YXIgcGFkZGluZ0xlZnQgPSAkdGV4dGFyZWEuY3NzKCdwYWRkaW5nLWxlZnQnKTtcblxuICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgaGlkZGVuRGl2LmNzcygnZm9udC1zaXplJywgZm9udFNpemUpO1xuICAgIH1cbiAgICBpZiAoZm9udEZhbWlseSkge1xuICAgICAgaGlkZGVuRGl2LmNzcygnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KTtcbiAgICB9XG4gICAgaWYgKGxpbmVIZWlnaHQpIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ2xpbmUtaGVpZ2h0JywgbGluZUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChwYWRkaW5nVG9wKSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCdwYWRkaW5nLXRvcCcsIHBhZGRpbmdUb3ApO1xuICAgIH1cbiAgICBpZiAocGFkZGluZ1JpZ2h0KSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCdwYWRkaW5nLXJpZ2h0JywgcGFkZGluZ1JpZ2h0KTtcbiAgICB9XG4gICAgaWYgKHBhZGRpbmdCb3R0b20pIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ3BhZGRpbmctYm90dG9tJywgcGFkZGluZ0JvdHRvbSk7XG4gICAgfVxuICAgIGlmIChwYWRkaW5nTGVmdCkge1xuICAgICAgaGlkZGVuRGl2LmNzcygncGFkZGluZy1sZWZ0JywgcGFkZGluZ0xlZnQpO1xuICAgIH1cblxuICAgIC8vIFNldCBvcmlnaW5hbC1oZWlnaHQsIGlmIG5vbmVcbiAgICBpZiAoISR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnKSkge1xuICAgICAgJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcsICR0ZXh0YXJlYS5oZWlnaHQoKSk7XG4gICAgfVxuXG4gICAgaWYgKCR0ZXh0YXJlYS5hdHRyKCd3cmFwJykgPT09ICdvZmYnKSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCdvdmVyZmxvdy13cmFwJywgJ25vcm1hbCcpLmNzcygnd2hpdGUtc3BhY2UnLCAncHJlJyk7XG4gICAgfVxuXG4gICAgaGlkZGVuRGl2LnRleHQoJHRleHRhcmVhWzBdLnZhbHVlICsgJ1xcbicpO1xuICAgIHZhciBjb250ZW50ID0gaGlkZGVuRGl2Lmh0bWwoKS5yZXBsYWNlKC9cXG4vZywgJzxicj4nKTtcbiAgICBoaWRkZW5EaXYuaHRtbChjb250ZW50KTtcblxuICAgIC8vIFdoZW4gdGV4dGFyZWEgaXMgaGlkZGVuLCB3aWR0aCBnb2VzIGNyYXp5LlxuICAgIC8vIEFwcHJveGltYXRlIHdpdGggaGFsZiBvZiB3aW5kb3cgc2l6ZVxuXG4gICAgaWYgKCR0ZXh0YXJlYVswXS5vZmZzZXRXaWR0aCA+IDAgJiYgJHRleHRhcmVhWzBdLm9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ3dpZHRoJywgJHRleHRhcmVhLndpZHRoKCkgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgKyAncHgnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNpemUgaWYgdGhlIG5ldyBoZWlnaHQgaXMgZ3JlYXRlciB0aGFuIHRoZVxuICAgICAqIG9yaWdpbmFsIGhlaWdodCBvZiB0aGUgdGV4dGFyZWFcbiAgICAgKi9cbiAgICBpZiAoJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcpIDw9IGhpZGRlbkRpdi5pbm5lckhlaWdodCgpKSB7XG4gICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCBoaWRkZW5EaXYuaW5uZXJIZWlnaHQoKSArICdweCcpO1xuICAgIH0gZWxzZSBpZiAoJHRleHRhcmVhWzBdLnZhbHVlLmxlbmd0aCA8ICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnKSkge1xuICAgICAgLyoqXG4gICAgICAgKiBJbiBjYXNlIHRoZSBuZXcgaGVpZ2h0IGlzIGxlc3MgdGhhbiBvcmlnaW5hbCBoZWlnaHQsIGl0XG4gICAgICAgKiBtZWFucyB0aGUgdGV4dGFyZWEgaGFzIGxlc3MgdGV4dCB0aGFuIGJlZm9yZVxuICAgICAgICogU28gd2Ugc2V0IHRoZSBoZWlnaHQgdG8gdGhlIG9yaWdpbmFsIG9uZVxuICAgICAgICovXG4gICAgICAkdGV4dGFyZWEuY3NzKCdoZWlnaHQnLCAkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JykgKyAncHgnKTtcbiAgICB9XG4gICAgJHRleHRhcmVhLmRhdGEoJ3ByZXZpb3VzLWxlbmd0aCcsICR0ZXh0YXJlYVswXS52YWx1ZS5sZW5ndGgpO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUZXh0IGJhc2VkIGlucHV0c1xuICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgaW5wdXRbdHlwZT1kYXRlXSwgaW5wdXRbdHlwZT10aW1lXSwgdGV4dGFyZWEnO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBmb3JtIGF1dG8gY29tcGxldGVcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCAhPT0gMCB8fCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IG51bGwpIHtcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBNLnZhbGlkYXRlX2ZpZWxkKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBpbnB1dCBlbGVtZW50IGhhcyBiZWVuIHByZS1wb3B1bGF0ZWQgb24gZG9jdW1lbnQgcmVhZHlcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBNLnVwZGF0ZVRleHRGaWVsZHMoKTtcbiAgICB9KTtcblxuICAgIC8vIEhUTUwgRE9NIEZPUk0gUkVTRVQgaGFuZGxpbmdcbiAgICAkKGRvY3VtZW50KS5vbigncmVzZXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGZvcm1SZXNldCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKGZvcm1SZXNldC5pcygnZm9ybScpKSB7XG4gICAgICAgIGZvcm1SZXNldC5maW5kKGlucHV0X3NlbGVjdG9yKS5yZW1vdmVDbGFzcygndmFsaWQnKS5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNldCBzZWxlY3QgKGFmdGVyIG5hdGl2ZSByZXNldClcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9ybVJlc2V0LmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgIGlmICh0aGlzLk1fRm9ybVNlbGVjdCkge1xuICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBhY3RpdmUgd2hlbiBlbGVtZW50IGhhcyBmb2N1c1xuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoJChlLnRhcmdldCkuaXMoaW5wdXRfc2VsZWN0b3IpKSB7XG4gICAgICAgICQoZS50YXJnZXQpLnNpYmxpbmdzKCdsYWJlbCwgLnByZWZpeCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhY3RpdmUgd2hlbiBlbGVtZW50IGlzIGJsdXJyZWRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgJGlucHV0RWxlbWVudCA9ICQoZS50YXJnZXQpO1xuICAgICAgaWYgKCRpbnB1dEVsZW1lbnQuaXMoaW5wdXRfc2VsZWN0b3IpKSB7XG4gICAgICAgIHZhciBzZWxlY3RvciA9ICcucHJlZml4JztcblxuICAgICAgICBpZiAoJGlucHV0RWxlbWVudFswXS52YWx1ZS5sZW5ndGggPT09IDAgJiYgJGlucHV0RWxlbWVudFswXS52YWxpZGl0eS5iYWRJbnB1dCAhPT0gdHJ1ZSAmJiAkaW5wdXRFbGVtZW50LmF0dHIoJ3BsYWNlaG9sZGVyJykgPT09IG51bGwpIHtcbiAgICAgICAgICBzZWxlY3RvciArPSAnLCBsYWJlbCc7XG4gICAgICAgIH1cbiAgICAgICAgJGlucHV0RWxlbWVudC5zaWJsaW5ncyhzZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBNLnZhbGlkYXRlX2ZpZWxkKCRpbnB1dEVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuXG4gICAgLy8gUmFkaW8gYW5kIENoZWNrYm94IGZvY3VzIGNsYXNzXG4gICAgdmFyIHJhZGlvX2NoZWNrYm94ID0gJ2lucHV0W3R5cGU9cmFkaW9dLCBpbnB1dFt0eXBlPWNoZWNrYm94XSc7XG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgcmFkaW9fY2hlY2tib3gsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBUQUIsIGNoZWNrIGlmIHRhYmJpbmcgdG8gcmFkaW8gb3IgY2hlY2tib3guXG4gICAgICBpZiAoZS53aGljaCA9PT0gTS5rZXlzLlRBQikge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMub25lKCdibHVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB0ZXh0X2FyZWFfc2VsZWN0b3IgPSAnLm1hdGVyaWFsaXplLXRleHRhcmVhJztcbiAgICAkKHRleHRfYXJlYV9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRleHRhcmVhID0gJCh0aGlzKTtcbiAgICAgIC8qKlxuICAgICAgICogUmVzaXplIHRleHRhcmVhIG9uIGRvY3VtZW50IGxvYWQgYWZ0ZXIgc3RvcmluZ1xuICAgICAgICogdGhlIG9yaWdpbmFsIGhlaWdodCBhbmQgdGhlIG9yaWdpbmFsIGxlbmd0aFxuICAgICAgICovXG4gICAgICAkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JywgJHRleHRhcmVhLmhlaWdodCgpKTtcbiAgICAgICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnLCB0aGlzLnZhbHVlLmxlbmd0aCk7XG4gICAgICBNLnRleHRhcmVhQXV0b1Jlc2l6ZSgkdGV4dGFyZWEpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGV4dF9hcmVhX3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBNLnRleHRhcmVhQXV0b1Jlc2l6ZSgkKHRoaXMpKTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIHRleHRfYXJlYV9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgTS50ZXh0YXJlYUF1dG9SZXNpemUoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBGaWxlIElucHV0IFBhdGhcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpbGVfZmllbGQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWxlLWZpZWxkJyk7XG4gICAgICB2YXIgcGF0aF9pbnB1dCA9IGZpbGVfZmllbGQuZmluZCgnaW5wdXQuZmlsZS1wYXRoJyk7XG4gICAgICB2YXIgZmlsZXMgPSAkKHRoaXMpWzBdLmZpbGVzO1xuICAgICAgdmFyIGZpbGVfbmFtZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZV9uYW1lcy5wdXNoKGZpbGVzW2ldLm5hbWUpO1xuICAgICAgfVxuICAgICAgcGF0aF9pbnB1dFswXS52YWx1ZSA9IGZpbGVfbmFtZXMuam9pbignLCAnKTtcbiAgICAgIHBhdGhfaW5wdXQudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfSk7XG4gIH0pOyAvLyBFbmQgb2YgJChkb2N1bWVudCkucmVhZHlcbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBpbmRpY2F0b3JzOiB0cnVlLFxuICAgIGhlaWdodDogNDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW50ZXJ2YWw6IDYwMDBcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBTbGlkZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDExKSB7XG4gICAgX2luaGVyaXRzKFNsaWRlciwgX0NvbXBvbmVudDExKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBTbGlkZXIgaW5zdGFuY2UgYW5kIHNldCB1cCBvdmVybGF5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2xpZGVyKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2xpZGVyKTtcblxuICAgICAgdmFyIF90aGlzNDAgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVyKSkuY2FsbCh0aGlzLCBTbGlkZXIsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNDAuZWwuTV9TbGlkZXIgPSBfdGhpczQwO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBtb2RhbFxuICAgICAgICogQG1lbWJlciBTbGlkZXIjb3B0aW9uc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtpbmRpY2F0b3JzPXRydWVdIC0gU2hvdyBpbmRpY2F0b3JzXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaGVpZ2h0PTQwMF0gLSBoZWlnaHQgb2Ygc2xpZGVyXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbZHVyYXRpb249NTAwXSAtIExlbmd0aCBpbiBtcyBvZiBzbGlkZSB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW50ZXJ2YWw9NjAwMF0gLSBMZW5ndGggaW4gbXMgb2Ygc2xpZGUgaW50ZXJ2YWxcbiAgICAgICAqL1xuICAgICAgX3RoaXM0MC5vcHRpb25zID0gJC5leHRlbmQoe30sIFNsaWRlci5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgICBfdGhpczQwLiRzbGlkZXIgPSBfdGhpczQwLiRlbC5maW5kKCcuc2xpZGVzJyk7XG4gICAgICBfdGhpczQwLiRzbGlkZXMgPSBfdGhpczQwLiRzbGlkZXIuY2hpbGRyZW4oJ2xpJyk7XG4gICAgICBfdGhpczQwLmFjdGl2ZUluZGV4ID0gX3RoaXM0MC4kc2xpZGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gJChpdGVtKS5oYXNDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KS5maXJzdCgpLmluZGV4KCk7XG4gICAgICBpZiAoX3RoaXM0MC5hY3RpdmVJbmRleCAhPSAtMSkge1xuICAgICAgICBfdGhpczQwLiRhY3RpdmUgPSBfdGhpczQwLiRzbGlkZXMuZXEoX3RoaXM0MC5hY3RpdmVJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzNDAuX3NldFNsaWRlckhlaWdodCgpO1xuXG4gICAgICAvLyBTZXQgaW5pdGlhbCBwb3NpdGlvbnMgb2YgY2FwdGlvbnNcbiAgICAgIF90aGlzNDAuJHNsaWRlcy5maW5kKCcuY2FwdGlvbicpLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIF90aGlzNDAuX2FuaW1hdGVDYXB0aW9uSW4oZWwsIDApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIE1vdmUgaW1nIHNyYyBpbnRvIGJhY2tncm91bmQtaW1hZ2VcbiAgICAgIF90aGlzNDAuJHNsaWRlcy5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICB2YXIgcGxhY2Vob2xkZXJCYXNlNjQgPSAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUJBUC8vL3dBQUFDSDVCQUVLQUFFQUxBQUFBQUFCQUFFQUFBSUNUQUVBT3c9PSc7XG4gICAgICAgIGlmICgkKGVsKS5hdHRyKCdzcmMnKSAhPT0gcGxhY2Vob2xkZXJCYXNlNjQpIHtcbiAgICAgICAgICAkKGVsKS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCAndXJsKFwiJyArICQoZWwpLmF0dHIoJ3NyYycpICsgJ1wiKScpO1xuICAgICAgICAgICQoZWwpLmF0dHIoJ3NyYycsIHBsYWNlaG9sZGVyQmFzZTY0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzNDAuX3NldHVwSW5kaWNhdG9ycygpO1xuXG4gICAgICAvLyBTaG93IGFjdGl2ZSBzbGlkZVxuICAgICAgaWYgKF90aGlzNDAuJGFjdGl2ZSkge1xuICAgICAgICBfdGhpczQwLiRhY3RpdmUuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczQwLiRzbGlkZXMuZmlyc3QoKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IF90aGlzNDAuJHNsaWRlcy5maXJzdCgpWzBdLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IF90aGlzNDAub3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXM0MC5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIF90aGlzNDAuJGFjdGl2ZSA9IF90aGlzNDAuJHNsaWRlcy5lcShfdGhpczQwLmFjdGl2ZUluZGV4KTtcblxuICAgICAgICAvLyBVcGRhdGUgaW5kaWNhdG9yc1xuICAgICAgICBpZiAoX3RoaXM0MC5vcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICBfdGhpczQwLiRpbmRpY2F0b3JzLmVxKF90aGlzNDAuYWN0aXZlSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGp1c3QgaGVpZ2h0IHRvIGN1cnJlbnQgc2xpZGVcbiAgICAgIF90aGlzNDAuJGFjdGl2ZS5maW5kKCdpbWcnKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiBfdGhpczQwLiRhY3RpdmUuZmluZCgnLmNhcHRpb24nKVswXSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogX3RoaXM0MC5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQwLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgLy8gYXV0byBzY3JvbGxcbiAgICAgIF90aGlzNDAuc3RhcnQoKTtcbiAgICAgIHJldHVybiBfdGhpczQwO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTbGlkZXIsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUluZGljYXRvcnMoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fU2xpZGVyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNDEgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZUludGVydmFsQm91bmQgPSB0aGlzLl9oYW5kbGVJbnRlcnZhbC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbmRpY2F0b3JDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlSW5kaWNhdG9yQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNDEuX2hhbmRsZUluZGljYXRvckNsaWNrQm91bmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM0MiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczQyLl9oYW5kbGVJbmRpY2F0b3JDbGlja0JvdW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBpbmRpY2F0b3IgY2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbmRpY2F0b3JDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbmRpY2F0b3JDbGljayhlKSB7XG4gICAgICAgIHZhciBjdXJySW5kZXggPSAkKGUudGFyZ2V0KS5pbmRleCgpO1xuICAgICAgICB0aGlzLnNldChjdXJySW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBJbnRlcnZhbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUludGVydmFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUludGVydmFsKCkge1xuICAgICAgICB2YXIgbmV3QWN0aXZlSW5kZXggPSB0aGlzLiRzbGlkZXIuZmluZCgnLmFjdGl2ZScpLmluZGV4KCk7XG4gICAgICAgIGlmICh0aGlzLiRzbGlkZXMubGVuZ3RoID09PSBuZXdBY3RpdmVJbmRleCArIDEpIG5ld0FjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgLy8gbG9vcCB0byBzdGFydFxuICAgICAgICBlbHNlIG5ld0FjdGl2ZUluZGV4ICs9IDE7XG5cbiAgICAgICAgdGhpcy5zZXQobmV3QWN0aXZlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW4gY2FwdGlvblxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBjYXB0aW9uXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlQ2FwdGlvbkluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVDYXB0aW9uSW4oY2FwdGlvbiwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGFuaW1PcHRpb25zID0ge1xuICAgICAgICAgIHRhcmdldHM6IGNhcHRpb24sXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCQoY2FwdGlvbikuaGFzQ2xhc3MoJ2NlbnRlci1hbGlnbicpKSB7XG4gICAgICAgICAgYW5pbU9wdGlvbnMudHJhbnNsYXRlWSA9IC0xMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoJChjYXB0aW9uKS5oYXNDbGFzcygncmlnaHQtYWxpZ24nKSkge1xuICAgICAgICAgIGFuaW1PcHRpb25zLnRyYW5zbGF0ZVggPSAxMDA7XG4gICAgICAgIH0gZWxzZSBpZiAoJChjYXB0aW9uKS5oYXNDbGFzcygnbGVmdC1hbGlnbicpKSB7XG4gICAgICAgICAgYW5pbU9wdGlvbnMudHJhbnNsYXRlWCA9IC0xMDA7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltKGFuaW1PcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgaGVpZ2h0IG9mIHNsaWRlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFNsaWRlckhlaWdodFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTbGlkZXJIZWlnaHQoKSB7XG4gICAgICAgIC8vIElmIGZ1bGxzY3JlZW4sIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKCF0aGlzLiRlbC5oYXNDbGFzcygnZnVsbHNjcmVlbicpKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICAvLyBBZGQgaGVpZ2h0IGlmIGluZGljYXRvcnMgYXJlIHByZXNlbnRcbiAgICAgICAgICAgIHRoaXMuJGVsLmNzcygnaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodCArIDQwICsgJ3B4Jyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmNzcygnaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodCArICdweCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRzbGlkZXIuY3NzKCdoZWlnaHQnLCB0aGlzLm9wdGlvbnMuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBpbmRpY2F0b3JzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBJbmRpY2F0b3JzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwSW5kaWNhdG9ycygpIHtcbiAgICAgICAgdmFyIF90aGlzNDMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcbiAgICAgICAgICB0aGlzLiRzbGlkZXMuZWFjaChmdW5jdGlvbiAoZWwsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgJGluZGljYXRvciA9ICQoJzxsaSBjbGFzcz1cImluZGljYXRvci1pdGVtXCI+PC9saT4nKTtcbiAgICAgICAgICAgIF90aGlzNDMuJGluZGljYXRvcnMuYXBwZW5kKCRpbmRpY2F0b3JbMF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRpbmRpY2F0b3JzWzBdKTtcbiAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzID0gdGhpcy4kaW5kaWNhdG9ycy5jaGlsZHJlbignbGkuaW5kaWNhdG9yLWl0ZW0nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBpbmRpY2F0b3JzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlSW5kaWNhdG9yc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVJbmRpY2F0b3JzKCkge1xuICAgICAgICB0aGlzLiRlbC5maW5kKCd1bC5pbmRpY2F0b3JzJykucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3ljbGUgdG8gbnRoIGl0ZW1cbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KGluZGV4KSB7XG4gICAgICAgIHZhciBfdGhpczQ0ID0gdGhpcztcblxuICAgICAgICAvLyBXcmFwIGFyb3VuZCBpbmRpY2VzLlxuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy4kc2xpZGVzLmxlbmd0aCkgaW5kZXggPSAwO2Vsc2UgaWYgKGluZGV4IDwgMCkgaW5kZXggPSB0aGlzLiRzbGlkZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAvLyBPbmx5IGRvIGlmIGluZGV4IGNoYW5nZXNcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggIT0gaW5kZXgpIHtcbiAgICAgICAgICB0aGlzLiRhY3RpdmUgPSB0aGlzLiRzbGlkZXMuZXEodGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgdmFyICRjYXB0aW9uID0gdGhpcy4kYWN0aXZlLmZpbmQoJy5jYXB0aW9uJyk7XG4gICAgICAgICAgdGhpcy4kYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy4kYWN0aXZlWzBdLFxuICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczQ0LiRzbGlkZXMubm90KCcuYWN0aXZlJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldHM6IGVsLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVg6IDAsXG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLl9hbmltYXRlQ2FwdGlvbkluKCRjYXB0aW9uWzBdLCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMuZXEodGhpcy5hY3RpdmVJbmRleCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycy5lcShpbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy4kc2xpZGVzLmVxKGluZGV4KVswXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuJHNsaWRlcy5lcShpbmRleCkuZmluZCgnLmNhcHRpb24nKVswXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgICBkZWxheTogdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLiRzbGlkZXMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgICAvLyBSZXNldCBpbnRlcnZhbFxuICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBhdXNlIHNsaWRlciBpbnRlcnZhbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicGF1c2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTdGFydCBzbGlkZXIgaW50ZXJ2YWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLl9oYW5kbGVJbnRlcnZhbEJvdW5kLCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKyB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1vdmUgdG8gbmV4dCBzbGlkZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwibmV4dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xuXG4gICAgICAgIC8vIFdyYXAgYXJvdW5kIGluZGljZXMuXG4gICAgICAgIGlmIChuZXdJbmRleCA+PSB0aGlzLiRzbGlkZXMubGVuZ3RoKSBuZXdJbmRleCA9IDA7ZWxzZSBpZiAobmV3SW5kZXggPCAwKSBuZXdJbmRleCA9IHRoaXMuJHNsaWRlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuc2V0KG5ld0luZGV4KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNb3ZlIHRvIHByZXZpb3VzIHNsaWRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmV2XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJldigpIHtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gdGhpcy5hY3RpdmVJbmRleCAtIDE7XG5cbiAgICAgICAgLy8gV3JhcCBhcm91bmQgaW5kaWNlcy5cbiAgICAgICAgaWYgKG5ld0luZGV4ID49IHRoaXMuJHNsaWRlcy5sZW5ndGgpIG5ld0luZGV4ID0gMDtlbHNlIGlmIChuZXdJbmRleCA8IDApIG5ld0luZGV4ID0gdGhpcy4kc2xpZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5zZXQobmV3SW5kZXgpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTbGlkZXIpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9TbGlkZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2xpZGVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5TbGlkZXIgPSBTbGlkZXI7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihTbGlkZXIsICdzbGlkZXInLCAnTV9TbGlkZXInKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuY2FyZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKCQodGhpcykuY2hpbGRyZW4oJy5jYXJkLXJldmVhbCcpLmxlbmd0aCkge1xuICAgICAgdmFyICRjYXJkID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcmQnKTtcbiAgICAgIGlmICgkY2FyZC5kYXRhKCdpbml0aWFsT3ZlcmZsb3cnKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICRjYXJkLmRhdGEoJ2luaXRpYWxPdmVyZmxvdycsICRjYXJkLmNzcygnb3ZlcmZsb3cnKSA9PT0gdW5kZWZpbmVkID8gJycgOiAkY2FyZC5jc3MoJ292ZXJmbG93JykpO1xuICAgICAgfVxuICAgICAgdmFyICRjYXJkUmV2ZWFsID0gJCh0aGlzKS5maW5kKCcuY2FyZC1yZXZlYWwnKTtcbiAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygkKCcuY2FyZC1yZXZlYWwgLmNhcmQtdGl0bGUnKSkgfHwgJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlIGknKSkpIHtcbiAgICAgICAgLy8gTWFrZSBSZXZlYWwgYW5pbWF0ZSBkb3duIGFuZCBkaXNwbGF5IG5vbmVcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogJGNhcmRSZXZlYWxbMF0sXG4gICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMjI1LFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYW5pbSkge1xuICAgICAgICAgICAgdmFyIGVsID0gYW5pbS5hbmltYXRhYmxlc1swXS50YXJnZXQ7XG4gICAgICAgICAgICAkKGVsKS5jc3MoeyBkaXNwbGF5OiAnbm9uZScgfSk7XG4gICAgICAgICAgICAkY2FyZC5jc3MoJ292ZXJmbG93JywgJGNhcmQuZGF0YSgnaW5pdGlhbE92ZXJmbG93JykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKCQoZS50YXJnZXQpLmlzKCQoJy5jYXJkIC5hY3RpdmF0b3InKSkgfHwgJChlLnRhcmdldCkuaXMoJCgnLmNhcmQgLmFjdGl2YXRvciBpJykpKSB7XG4gICAgICAgICRjYXJkLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICRjYXJkUmV2ZWFsLmNzcyh7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6ICRjYXJkUmV2ZWFsWzBdLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6ICctMTAwJScsXG4gICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGRhdGE6IFtdLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBzZWNvbmRhcnlQbGFjZWhvbGRlcjogJycsXG4gICAgYXV0b2NvbXBsZXRlT3B0aW9uczoge30sXG4gICAgbGltaXQ6IEluZmluaXR5LFxuICAgIG9uQ2hpcEFkZDogbnVsbCxcbiAgICBvbkNoaXBTZWxlY3Q6IG51bGwsXG4gICAgb25DaGlwRGVsZXRlOiBudWxsXG4gIH07XG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IGNoaXBcbiAgICogQHByb3BlcnR5IHtTdHJpbmd9IHRhZyAgY2hpcCB0YWcgc3RyaW5nXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBbaW1hZ2VdICBjaGlwIGF2YXRhciBpbWFnZSBzdHJpbmdcbiAgICovXG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgQ2hpcHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDEyKSB7XG4gICAgX2luaGVyaXRzKENoaXBzLCBfQ29tcG9uZW50MTIpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IENoaXBzIGluc3RhbmNlIGFuZCBzZXQgdXAgb3ZlcmxheVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIENoaXBzKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hpcHMpO1xuXG4gICAgICB2YXIgX3RoaXM0NSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDaGlwcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENoaXBzKSkuY2FsbCh0aGlzLCBDaGlwcywgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM0NS5lbC5NX0NoaXBzID0gX3RoaXM0NTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgQ2hpcHMjb3B0aW9uc1xuICAgICAgICogQHByb3Age0FycmF5fSBkYXRhXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfSBwbGFjZWhvbGRlclxuICAgICAgICogQHByb3Age1N0cmluZ30gc2Vjb25kYXJ5UGxhY2Vob2xkZXJcbiAgICAgICAqIEBwcm9wIHtPYmplY3R9IGF1dG9jb21wbGV0ZU9wdGlvbnNcbiAgICAgICAqL1xuICAgICAgX3RoaXM0NS5vcHRpb25zID0gJC5leHRlbmQoe30sIENoaXBzLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM0NS4kZWwuYWRkQ2xhc3MoJ2NoaXBzIGlucHV0LWZpZWxkJyk7XG4gICAgICBfdGhpczQ1LmNoaXBzRGF0YSA9IFtdO1xuICAgICAgX3RoaXM0NS4kY2hpcHMgPSAkKCk7XG4gICAgICBfdGhpczQ1Ll9zZXR1cElucHV0KCk7XG4gICAgICBfdGhpczQ1Lmhhc0F1dG9jb21wbGV0ZSA9IE9iamVjdC5rZXlzKF90aGlzNDUub3B0aW9ucy5hdXRvY29tcGxldGVPcHRpb25zKS5sZW5ndGggPiAwO1xuXG4gICAgICAvLyBTZXQgaW5wdXQgaWRcbiAgICAgIGlmICghX3RoaXM0NS4kaW5wdXQuYXR0cignaWQnKSkge1xuICAgICAgICBfdGhpczQ1LiRpbnB1dC5hdHRyKCdpZCcsIE0uZ3VpZCgpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVuZGVyIGluaXRpYWwgY2hpcHNcbiAgICAgIGlmIChfdGhpczQ1Lm9wdGlvbnMuZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXM0NS5jaGlwc0RhdGEgPSBfdGhpczQ1Lm9wdGlvbnMuZGF0YTtcbiAgICAgICAgX3RoaXM0NS5fcmVuZGVyQ2hpcHMoX3RoaXM0NS5jaGlwc0RhdGEpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXR1cCBhdXRvY29tcGxldGUgaWYgbmVlZGVkXG4gICAgICBpZiAoX3RoaXM0NS5oYXNBdXRvY29tcGxldGUpIHtcbiAgICAgICAgX3RoaXM0NS5fc2V0dXBBdXRvY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXM0NS5fc2V0UGxhY2Vob2xkZXIoKTtcbiAgICAgIF90aGlzNDUuX3NldHVwTGFiZWwoKTtcbiAgICAgIF90aGlzNDUuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzNDU7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENoaXBzLCBbe1xuICAgICAga2V5OiBcImdldERhdGFcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBDaGlwcyBEYXRhXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlwc0RhdGE7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLiRjaGlwcy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5lbC5NX0NoaXBzID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2hpcENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDaGlwQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRGb2N1c0JvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRGb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dEJsdXJCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Qmx1ci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDaGlwQ2xpY2tCb3VuZCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBDaGlwcy5faGFuZGxlQ2hpcHNLZXlkb3duKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBDaGlwcy5faGFuZGxlQ2hpcHNLZXl1cCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIENoaXBzLl9oYW5kbGVDaGlwc0JsdXIsIHRydWUpO1xuICAgICAgICB0aGlzLiRpbnB1dFswXS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUlucHV0Rm9jdXNCb3VuZCk7XG4gICAgICAgIHRoaXMuJGlucHV0WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVJbnB1dEJsdXJCb3VuZCk7XG4gICAgICAgIHRoaXMuJGlucHV0WzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd25Cb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2hpcENsaWNrQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgQ2hpcHMuX2hhbmRsZUNoaXBzS2V5ZG93bik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgQ2hpcHMuX2hhbmRsZUNoaXBzS2V5dXApO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCBDaGlwcy5faGFuZGxlQ2hpcHNCbHVyLCB0cnVlKTtcbiAgICAgICAgdGhpcy4kaW5wdXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVJbnB1dEZvY3VzQm91bmQpO1xuICAgICAgICB0aGlzLiRpbnB1dFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlSW5wdXRCbHVyQm91bmQpO1xuICAgICAgICB0aGlzLiRpbnB1dFswXS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDaGlwIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2hpcENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNoaXBDbGljayhlKSB7XG4gICAgICAgIHZhciAkY2hpcCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jaGlwJyk7XG4gICAgICAgIHZhciBjbGlja2VkQ2xvc2UgPSAkKGUudGFyZ2V0KS5pcygnLmNsb3NlJyk7XG4gICAgICAgIGlmICgkY2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSAkY2hpcC5pbmRleCgpO1xuICAgICAgICAgIGlmIChjbGlja2VkQ2xvc2UpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBjaGlwXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNoaXAoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy4kaW5wdXRbMF0uZm9jdXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2VsZWN0IGNoaXBcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Q2hpcChpbmRleCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVmYXVsdCBoYW5kbGUgY2xpY2sgdG8gZm9jdXMgb24gaW5wdXRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRpbnB1dFswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENoaXBzIEtleWRvd25cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEZvY3VzXCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgRm9jdXNcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEZvY3VzKCkge1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgQmx1clxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Qmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEJsdXIoKSB7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdmb2N1cycpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBJbnB1dCBLZXlkb3duXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUlucHV0S2V5ZG93bihlKSB7XG4gICAgICAgIENoaXBzLl9rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIC8vIE92ZXJyaWRlIGVudGVyIGlmIGF1dG9jb21wbGV0aW5nLlxuICAgICAgICAgIGlmICh0aGlzLmhhc0F1dG9jb21wbGV0ZSAmJiB0aGlzLmF1dG9jb21wbGV0ZSAmJiB0aGlzLmF1dG9jb21wbGV0ZS5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5hZGRDaGlwKHtcbiAgICAgICAgICAgIHRhZzogdGhpcy4kaW5wdXRbMF0udmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLiRpbnB1dFswXS52YWx1ZSA9ICcnO1xuXG4gICAgICAgICAgLy8gZGVsZXRlIG9yIGxlZnRcbiAgICAgICAgfSBlbHNlIGlmICgoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gMzcpICYmIHRoaXMuJGlucHV0WzBdLnZhbHVlID09PSAnJyAmJiB0aGlzLmNoaXBzRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5zZWxlY3RDaGlwKHRoaXMuY2hpcHNEYXRhLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVuZGVyIENoaXBcbiAgICAgICAqIEBwYXJhbSB7Y2hpcH0gY2hpcFxuICAgICAgICogQHJldHVybiB7RWxlbWVudH1cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW5kZXJDaGlwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlckNoaXAoY2hpcCkge1xuICAgICAgICBpZiAoIWNoaXAudGFnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlbmRlcmVkQ2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICByZW5kZXJlZENoaXAuY2xhc3NMaXN0LmFkZCgnY2hpcCcpO1xuICAgICAgICByZW5kZXJlZENoaXAudGV4dENvbnRlbnQgPSBjaGlwLnRhZztcbiAgICAgICAgcmVuZGVyZWRDaGlwLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICAgICAgJChjbG9zZUljb24pLmFkZENsYXNzKCdtYXRlcmlhbC1pY29ucyBjbG9zZScpO1xuICAgICAgICBjbG9zZUljb24udGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuXG4gICAgICAgIC8vIGF0dGFjaCBpbWFnZSBpZiBuZWVkZWRcbiAgICAgICAgaWYgKGNoaXAuaW1hZ2UpIHtcbiAgICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY2hpcC5pbWFnZSk7XG4gICAgICAgICAgcmVuZGVyZWRDaGlwLmluc2VydEJlZm9yZShpbWcsIHJlbmRlcmVkQ2hpcC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbmRlcmVkQ2hpcC5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgICAgICByZXR1cm4gcmVuZGVyZWRDaGlwO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbmRlciBDaGlwc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbmRlckNoaXBzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlckNoaXBzKCkge1xuICAgICAgICB0aGlzLiRjaGlwcy5yZW1vdmUoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaXBzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBjaGlwRWwgPSB0aGlzLl9yZW5kZXJDaGlwKHRoaXMuY2hpcHNEYXRhW2ldKTtcbiAgICAgICAgICB0aGlzLiRlbC5hcHBlbmQoY2hpcEVsKTtcbiAgICAgICAgICB0aGlzLiRjaGlwcy5hZGQoY2hpcEVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdmUgaW5wdXQgdG8gZW5kXG4gICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRpbnB1dFswXSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgQXV0b2NvbXBsZXRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBBdXRvY29tcGxldGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBBdXRvY29tcGxldGUoKSB7XG4gICAgICAgIHZhciBfdGhpczQ2ID0gdGhpcztcblxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucy5vbkF1dG9jb21wbGV0ZSA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICBfdGhpczQ2LmFkZENoaXAoe1xuICAgICAgICAgICAgdGFnOiB2YWxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczQ2LiRpbnB1dFswXS52YWx1ZSA9ICcnO1xuICAgICAgICAgIF90aGlzNDYuJGlucHV0WzBdLmZvY3VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSBNLkF1dG9jb21wbGV0ZS5pbml0KHRoaXMuJGlucHV0WzBdLCB0aGlzLm9wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgSW5wdXRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cElucHV0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuJGlucHV0ID0gdGhpcy4kZWwuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgaWYgKCF0aGlzLiRpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRpbnB1dCA9ICQoJzxpbnB1dD48L2lucHV0PicpO1xuICAgICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRpbnB1dC5hZGRDbGFzcygnaW5wdXQnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBMYWJlbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwTGFiZWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBMYWJlbCgpIHtcbiAgICAgICAgdGhpcy4kbGFiZWwgPSB0aGlzLiRlbC5maW5kKCdsYWJlbCcpO1xuICAgICAgICBpZiAodGhpcy4kbGFiZWwubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLiRpbnB1dC5hdHRyKCdpZCcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBwbGFjZWhvbGRlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFBsYWNlaG9sZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFBsYWNlaG9sZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlwc0RhdGEgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5jaGlwc0RhdGEubGVuZ3RoICYmIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICQodGhpcy4kaW5wdXQpLnByb3AoJ3BsYWNlaG9sZGVyJywgdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyKTtcbiAgICAgICAgfSBlbHNlIGlmICgodGhpcy5jaGlwc0RhdGEgPT09IHVuZGVmaW5lZCB8fCAhIXRoaXMuY2hpcHNEYXRhLmxlbmd0aCkgJiYgdGhpcy5vcHRpb25zLnNlY29uZGFyeVBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgJCh0aGlzLiRpbnB1dCkucHJvcCgncGxhY2Vob2xkZXInLCB0aGlzLm9wdGlvbnMuc2Vjb25kYXJ5UGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2hlY2sgaWYgY2hpcCBpcyB2YWxpZFxuICAgICAgICogQHBhcmFtIHtjaGlwfSBjaGlwXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaXNWYWxpZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pc1ZhbGlkKGNoaXApIHtcbiAgICAgICAgaWYgKGNoaXAuaGFzT3duUHJvcGVydHkoJ3RhZycpICYmIGNoaXAudGFnICE9PSAnJykge1xuICAgICAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpcHNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGlwc0RhdGFbaV0udGFnID09PSBjaGlwLnRhZykge1xuICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICFleGlzdHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWRkIGNoaXBcbiAgICAgICAqIEBwYXJhbSB7Y2hpcH0gY2hpcFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRkQ2hpcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZENoaXAoY2hpcCkge1xuICAgICAgICBpZiAoIXRoaXMuX2lzVmFsaWQoY2hpcCkgfHwgdGhpcy5jaGlwc0RhdGEubGVuZ3RoID49IHRoaXMub3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZW5kZXJlZENoaXAgPSB0aGlzLl9yZW5kZXJDaGlwKGNoaXApO1xuICAgICAgICB0aGlzLiRjaGlwcy5hZGQocmVuZGVyZWRDaGlwKTtcbiAgICAgICAgdGhpcy5jaGlwc0RhdGEucHVzaChjaGlwKTtcbiAgICAgICAgJCh0aGlzLiRpbnB1dCkuYmVmb3JlKHJlbmRlcmVkQ2hpcCk7XG4gICAgICAgIHRoaXMuX3NldFBsYWNlaG9sZGVyKCk7XG5cbiAgICAgICAgLy8gZmlyZSBjaGlwQWRkIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2hpcEFkZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNoaXBBZGQuY2FsbCh0aGlzLCB0aGlzLiRlbCwgcmVuZGVyZWRDaGlwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERlbGV0ZSBjaGlwXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gY2hpcFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVsZXRlQ2hpcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlbGV0ZUNoaXAoY2hpcEluZGV4KSB7XG4gICAgICAgIHZhciAkY2hpcCA9IHRoaXMuJGNoaXBzLmVxKGNoaXBJbmRleCk7XG4gICAgICAgIHRoaXMuJGNoaXBzLmVxKGNoaXBJbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGNoaXBzID0gdGhpcy4kY2hpcHMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHJldHVybiAkKGVsKS5pbmRleCgpID49IDA7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaXBzRGF0YS5zcGxpY2UoY2hpcEluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5fc2V0UGxhY2Vob2xkZXIoKTtcblxuICAgICAgICAvLyBmaXJlIGNoaXBEZWxldGUgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DaGlwRGVsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2hpcERlbGV0ZS5jYWxsKHRoaXMsIHRoaXMuJGVsLCAkY2hpcFswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZWxlY3QgY2hpcFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNoaXBcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNlbGVjdENoaXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RDaGlwKGNoaXBJbmRleCkge1xuICAgICAgICB2YXIgJGNoaXAgPSB0aGlzLiRjaGlwcy5lcShjaGlwSW5kZXgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZENoaXAgPSAkY2hpcDtcbiAgICAgICAgJGNoaXBbMF0uZm9jdXMoKTtcblxuICAgICAgICAvLyBmaXJlIGNoaXBTZWxlY3QgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DaGlwU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2hpcFNlbGVjdC5jYWxsKHRoaXMsIHRoaXMuJGVsLCAkY2hpcFswXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoQ2hpcHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGlwcyksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX0NoaXBzO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2hpcHNLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNoaXBzS2V5ZG93bihlKSB7XG4gICAgICAgIENoaXBzLl9rZXlkb3duID0gdHJ1ZTtcblxuICAgICAgICB2YXIgJGNoaXBzID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNoaXBzJyk7XG4gICAgICAgIHZhciBjaGlwc0tleWRvd24gPSBlLnRhcmdldCAmJiAkY2hpcHMubGVuZ3RoO1xuXG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBrZXlkb3duIGlucHV0cyBvbiBpbnB1dCBhbmQgdGV4dGFyZWFcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCdpbnB1dCwgdGV4dGFyZWEnKSB8fCAhY2hpcHNLZXlkb3duKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGN1cnJDaGlwcyA9ICRjaGlwc1swXS5NX0NoaXBzO1xuXG4gICAgICAgIC8vIGJhY2tzcGFjZSBhbmQgZGVsZXRlXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0Nikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHZhciBzZWxlY3RJbmRleCA9IGN1cnJDaGlwcy5jaGlwc0RhdGEubGVuZ3RoO1xuICAgICAgICAgIGlmIChjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY3VyckNoaXBzLl9zZWxlY3RlZENoaXAuaW5kZXgoKTtcbiAgICAgICAgICAgIGN1cnJDaGlwcy5kZWxldGVDaGlwKGluZGV4KTtcbiAgICAgICAgICAgIGN1cnJDaGlwcy5fc2VsZWN0ZWRDaGlwID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHNlbGVjdEluZGV4IGRvZXNuJ3QgZ28gbmVnYXRpdmVcbiAgICAgICAgICAgIHNlbGVjdEluZGV4ID0gTWF0aC5tYXgoaW5kZXggLSAxLCAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY3VyckNoaXBzLmNoaXBzRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJDaGlwcy5zZWxlY3RDaGlwKHNlbGVjdEluZGV4KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsZWZ0IGFycm93IGtleVxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICBpZiAoY3VyckNoaXBzLl9zZWxlY3RlZENoaXApIHtcbiAgICAgICAgICAgIHZhciBfc2VsZWN0SW5kZXggPSBjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcC5pbmRleCgpIC0gMTtcbiAgICAgICAgICAgIGlmIChfc2VsZWN0SW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJDaGlwcy5zZWxlY3RDaGlwKF9zZWxlY3RJbmRleCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gcmlnaHQgYXJyb3cga2V5XG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgIGlmIChjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcCkge1xuICAgICAgICAgICAgdmFyIF9zZWxlY3RJbmRleDIgPSBjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcC5pbmRleCgpICsgMTtcblxuICAgICAgICAgICAgaWYgKF9zZWxlY3RJbmRleDIgPj0gY3VyckNoaXBzLmNoaXBzRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgY3VyckNoaXBzLiRpbnB1dFswXS5mb2N1cygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY3VyckNoaXBzLnNlbGVjdENoaXAoX3NlbGVjdEluZGV4Mik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENoaXBzIEtleXVwXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2hpcHNLZXl1cFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDaGlwc0tleXVwKGUpIHtcbiAgICAgICAgQ2hpcHMuX2tleWRvd24gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ2hpcHMgQmx1clxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNoaXBzQmx1clwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDaGlwc0JsdXIoZSkge1xuICAgICAgICBpZiAoIUNoaXBzLl9rZXlkb3duKSB7XG4gICAgICAgICAgdmFyICRjaGlwcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jaGlwcycpO1xuICAgICAgICAgIHZhciBjdXJyQ2hpcHMgPSAkY2hpcHNbMF0uTV9DaGlwcztcblxuICAgICAgICAgIGN1cnJDaGlwcy5fc2VsZWN0ZWRDaGlwID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENoaXBzO1xuICB9KENvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIENoaXBzXG4gICAqL1xuXG5cbiAgQ2hpcHMuX2tleWRvd24gPSBmYWxzZTtcblxuICBNLkNoaXBzID0gQ2hpcHM7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihDaGlwcywgJ2NoaXBzJywgJ01fQ2hpcHMnKTtcbiAgfVxuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBIYW5kbGUgcmVtb3ZhbCBvZiBzdGF0aWMgY2hpcHMuXG4gICAgJChkb2N1bWVudC5ib2R5KS5vbignY2xpY2snLCAnLmNoaXAgLmNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRjaGlwcyA9ICQodGhpcykuY2xvc2VzdCgnLmNoaXBzJyk7XG4gICAgICBpZiAoJGNoaXBzLmxlbmd0aCAmJiAkY2hpcHNbMF0uTV9DaGlwcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5jaGlwJykucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0pO1xufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIHRvcDogMCxcbiAgICBib3R0b206IEluZmluaXR5LFxuICAgIG9mZnNldDogMCxcbiAgICBvblBvc2l0aW9uQ2hhbmdlOiBudWxsXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgUHVzaHBpbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MTMpIHtcbiAgICBfaW5oZXJpdHMoUHVzaHBpbiwgX0NvbXBvbmVudDEzKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBQdXNocGluIGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gUHVzaHBpbihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hwaW4pO1xuXG4gICAgICB2YXIgX3RoaXM0NyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNocGluLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaHBpbikpLmNhbGwodGhpcywgUHVzaHBpbiwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM0Ny5lbC5NX1B1c2hwaW4gPSBfdGhpczQ3O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBtb2RhbFxuICAgICAgICogQG1lbWJlciBQdXNocGluI29wdGlvbnNcbiAgICAgICAqL1xuICAgICAgX3RoaXM0Ny5vcHRpb25zID0gJC5leHRlbmQoe30sIFB1c2hwaW4uZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICBfdGhpczQ3Lm9yaWdpbmFsT2Zmc2V0ID0gX3RoaXM0Ny5lbC5vZmZzZXRUb3A7XG4gICAgICBQdXNocGluLl9wdXNocGlucy5wdXNoKF90aGlzNDcpO1xuICAgICAgX3RoaXM0Ny5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICBfdGhpczQ3Ll91cGRhdGVQb3NpdGlvbigpO1xuICAgICAgcmV0dXJuIF90aGlzNDc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFB1c2hwaW4sIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3JlbW92ZVBpbkNsYXNzZXMoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBwdXNocGluIEluc3RcbiAgICAgICAgdmFyIGluZGV4ID0gUHVzaHBpbi5fcHVzaHBpbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgUHVzaHBpbi5fcHVzaHBpbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFB1c2hwaW4uX3VwZGF0ZUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgUHVzaHBpbi5fdXBkYXRlRWxlbWVudHMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlUG9zaXRpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgICAgIHZhciBzY3JvbGxlZCA9IE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKSArIHRoaXMub3B0aW9ucy5vZmZzZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50b3AgPD0gc2Nyb2xsZWQgJiYgdGhpcy5vcHRpb25zLmJvdHRvbSA+PSBzY3JvbGxlZCAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bpbm5lZCcpKSB7XG4gICAgICAgICAgdGhpcy5fcmVtb3ZlUGluQ2xhc3NlcygpO1xuICAgICAgICAgIHRoaXMuZWwuc3R5bGUudG9wID0gdGhpcy5vcHRpb25zLm9mZnNldCArIFwicHhcIjtcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Bpbm5lZCcpO1xuXG4gICAgICAgICAgLy8gb25Qb3NpdGlvbkNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uUG9zaXRpb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uQ2hhbmdlLmNhbGwodGhpcywgJ3Bpbm5lZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBwaW4tdG9wICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGFib3ZlIHRvcClcbiAgICAgICAgaWYgKHNjcm9sbGVkIDwgdGhpcy5vcHRpb25zLnRvcCAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bpbi10b3AnKSkge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVBpbkNsYXNzZXMoKTtcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IDA7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwaW4tdG9wJyk7XG5cbiAgICAgICAgICAvLyBvblBvc2l0aW9uQ2hhbmdlIGNhbGxiYWNrXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25Qb3NpdGlvbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9zaXRpb25DaGFuZ2UuY2FsbCh0aGlzLCAncGluLXRvcCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBwaW4tYm90dG9tICh3aGVuIHNjcm9sbGVkIHBvc2l0aW9uIGlzIGJlbG93IGJvdHRvbSlcbiAgICAgICAgaWYgKHNjcm9sbGVkID4gdGhpcy5vcHRpb25zLmJvdHRvbSAmJiAhdGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bpbi1ib3R0b20nKSkge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVBpbkNsYXNzZXMoKTtcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Bpbi1ib3R0b20nKTtcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRoaXMub3B0aW9ucy5ib3R0b20gLSB0aGlzLm9yaWdpbmFsT2Zmc2V0ICsgXCJweFwiO1xuXG4gICAgICAgICAgLy8gb25Qb3NpdGlvbkNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uUG9zaXRpb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uQ2hhbmdlLmNhbGwodGhpcywgJ3Bpbi1ib3R0b20nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZVBpbkNsYXNzZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlUGluQ2xhc3NlcygpIHtcbiAgICAgICAgLy8gSUUgMTEgYnVnIChjYW4ndCByZW1vdmUgbXVsdGlwbGUgY2xhc3NlcyBpbiBvbmUgbGluZSlcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdwaW4tdG9wJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgncGlubmVkJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgncGluLWJvdHRvbScpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChQdXNocGluLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaHBpbiksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1B1c2hwaW47XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVFbGVtZW50c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVFbGVtZW50cygpIHtcbiAgICAgICAgZm9yICh2YXIgZWxJbmRleCBpbiBQdXNocGluLl9wdXNocGlucykge1xuICAgICAgICAgIHZhciBwSW5zdGFuY2UgPSBQdXNocGluLl9wdXNocGluc1tlbEluZGV4XTtcbiAgICAgICAgICBwSW5zdGFuY2UuX3VwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQdXNocGluO1xuICB9KENvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFB1c2hwaW5cbiAgICovXG5cblxuICBQdXNocGluLl9wdXNocGlucyA9IFtdO1xuXG4gIE0uUHVzaHBpbiA9IFB1c2hwaW47XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihQdXNocGluLCAncHVzaHBpbicsICdNX1B1c2hwaW4nKTtcbiAgfVxufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGRpcmVjdGlvbjogJ3RvcCcsXG4gICAgaG92ZXJFbmFibGVkOiB0cnVlLFxuICAgIHRvb2xiYXJFbmFibGVkOiBmYWxzZVxuICB9O1xuXG4gICQuZm4ucmV2ZXJzZSA9IFtdLnJldmVyc2U7XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgRmxvYXRpbmdBY3Rpb25CdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudDE0KSB7XG4gICAgX2luaGVyaXRzKEZsb2F0aW5nQWN0aW9uQnV0dG9uLCBfQ29tcG9uZW50MTQpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gRmxvYXRpbmdBY3Rpb25CdXR0b24oZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG9hdGluZ0FjdGlvbkJ1dHRvbik7XG5cbiAgICAgIHZhciBfdGhpczQ4ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZsb2F0aW5nQWN0aW9uQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmxvYXRpbmdBY3Rpb25CdXR0b24pKS5jYWxsKHRoaXMsIEZsb2F0aW5nQWN0aW9uQnV0dG9uLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczQ4LmVsLk1fRmxvYXRpbmdBY3Rpb25CdXR0b24gPSBfdGhpczQ4O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBmYWJcbiAgICAgICAqIEBtZW1iZXIgRmxvYXRpbmdBY3Rpb25CdXR0b24jb3B0aW9uc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtkaXJlY3Rpb25dIC0gRGlyZWN0aW9uIGZhYiBtZW51IG9wZW5zXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2hvdmVyRW5hYmxlZD10cnVlXSAtIEVuYWJsZSBob3ZlciB2cyBjbGlja1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFt0b29sYmFyRW5hYmxlZD1mYWxzZV0gLSBFbmFibGUgdG9vbGJhciB0cmFuc2l0aW9uXG4gICAgICAgKi9cbiAgICAgIF90aGlzNDgub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBGbG9hdGluZ0FjdGlvbkJ1dHRvbi5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNDguaXNPcGVuID0gZmFsc2U7XG4gICAgICBfdGhpczQ4LiRhbmNob3IgPSBfdGhpczQ4LiRlbC5jaGlsZHJlbignYScpLmZpcnN0KCk7XG4gICAgICBfdGhpczQ4LiRtZW51ID0gX3RoaXM0OC4kZWwuY2hpbGRyZW4oJ3VsJykuZmlyc3QoKTtcbiAgICAgIF90aGlzNDguJGZsb2F0aW5nQnRucyA9IF90aGlzNDguJGVsLmZpbmQoJ3VsIC5idG4tZmxvYXRpbmcnKTtcbiAgICAgIF90aGlzNDguJGZsb2F0aW5nQnRuc1JldmVyc2UgPSBfdGhpczQ4LiRlbC5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJykucmV2ZXJzZSgpO1xuICAgICAgX3RoaXM0OC5vZmZzZXRZID0gMDtcbiAgICAgIF90aGlzNDgub2Zmc2V0WCA9IDA7XG5cbiAgICAgIF90aGlzNDguJGVsLmFkZENsYXNzKFwiZGlyZWN0aW9uLVwiICsgX3RoaXM0OC5vcHRpb25zLmRpcmVjdGlvbik7XG4gICAgICBpZiAoX3RoaXM0OC5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgX3RoaXM0OC5vZmZzZXRZID0gNDA7XG4gICAgICB9IGVsc2UgaWYgKF90aGlzNDgub3B0aW9ucy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgX3RoaXM0OC5vZmZzZXRYID0gLTQwO1xuICAgICAgfSBlbHNlIGlmIChfdGhpczQ4Lm9wdGlvbnMuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBfdGhpczQ4Lm9mZnNldFkgPSAtNDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczQ4Lm9mZnNldFggPSA0MDtcbiAgICAgIH1cbiAgICAgIF90aGlzNDguX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzNDg7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZsb2F0aW5nQWN0aW9uQnV0dG9uLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fRmxvYXRpbmdBY3Rpb25CdXR0b24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVGQUJDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlRkFCQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbkJvdW5kID0gdGhpcy5vcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlQm91bmQgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlckVuYWJsZWQgJiYgIXRoaXMub3B0aW9ucy50b29sYmFyRW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2hhbmRsZU9wZW5Cb3VuZCk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlQ2xvc2VCb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUZBQkNsaWNrQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhvdmVyRW5hYmxlZCAmJiAhdGhpcy5vcHRpb25zLnRvb2xiYXJFbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5faGFuZGxlT3BlbkJvdW5kKTtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9oYW5kbGVDbG9zZUJvdW5kKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRkFCQ2xpY2tCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRkFCIENsaWNrXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRkFCQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRkFCQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBEb2N1bWVudCBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURvY3VtZW50Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCh0aGlzLiRtZW51KS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIEZBQlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbGJhckVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLl9hbmltYXRlSW5Ub29sYmFyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZUluRkFCKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIEZBQlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9vbGJhckVuYWJsZWQpIHtcbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlQ2xvc2VCb3VuZCwgdHJ1ZSk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCwgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZU91dFRvb2xiYXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9hbmltYXRlT3V0RkFCKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbGFzc2ljIEZBQiBNZW51IG9wZW5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5GQUJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluRkFCKCkge1xuICAgICAgICB2YXIgX3RoaXM0OSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHZhciB0aW1lID0gMDtcbiAgICAgICAgdGhpcy4kZmxvYXRpbmdCdG5zUmV2ZXJzZS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogZWwsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgc2NhbGU6IFswLjQsIDFdLFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogW190aGlzNDkub2Zmc2V0WSwgMF0sXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbX3RoaXM0OS5vZmZzZXRYLCAwXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyNzUsXG4gICAgICAgICAgICBkZWxheTogdGltZSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGltZSArPSA0MDtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xhc3NpYyBGQUIgTWVudSBjbG9zZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRGQUJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dEZBQigpIHtcbiAgICAgICAgdmFyIF90aGlzNTAgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGZsb2F0aW5nQnRuc1JldmVyc2UuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBhbmltLnJlbW92ZShlbCk7XG4gICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICB0YXJnZXRzOiBlbCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBzY2FsZTogMC40LFxuICAgICAgICAgICAgdHJhbnNsYXRlWTogX3RoaXM1MC5vZmZzZXRZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogX3RoaXM1MC5vZmZzZXRYLFxuICAgICAgICAgICAgZHVyYXRpb246IDE3NSxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzNTAuJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVG9vbGJhciB0cmFuc2l0aW9uIE1lbnUgb3BlblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJblRvb2xiYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluVG9vbGJhcigpIHtcbiAgICAgICAgdmFyIF90aGlzNTEgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzY2FsZUZhY3RvciA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBidG5SZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGJhY2tkcm9wID0gJCgnPGRpdiBjbGFzcz1cImZhYi1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgICAgICB2YXIgZmFiQ29sb3IgPSB0aGlzLiRhbmNob3IuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIHRoaXMuJGFuY2hvci5hcHBlbmQoYmFja2Ryb3ApO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IGJ0blJlY3QubGVmdCAtIHdpbmRvd1dpZHRoIC8gMiArIGJ0blJlY3Qud2lkdGggLyAyO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSBidG5SZWN0LmJvdHRvbTtcbiAgICAgICAgc2NhbGVGYWN0b3IgPSB3aW5kb3dXaWR0aCAvIGJhY2tkcm9wWzBdLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmJ0bkJvdHRvbSA9IGJ0blJlY3QuYm90dG9tO1xuICAgICAgICB0aGlzLmJ0bkxlZnQgPSBidG5SZWN0LmxlZnQ7XG4gICAgICAgIHRoaXMuYnRuV2lkdGggPSBidG5SZWN0LndpZHRoO1xuXG4gICAgICAgIC8vIFNldCBpbml0aWFsIHN0YXRlXG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgdGhpcy5vZmZzZXRYICsgJ3B4KScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRhbmNob3IuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKCcgKyAtdGhpcy5vZmZzZXRZICsgJ3B4KScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrZHJvcC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM1MS4kZWwuY3NzKHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDg1LCAwLjY4MCwgMC41MzApLCBiYWNrZ3JvdW5kLWNvbG9yIDBzIGxpbmVhciAuMnMnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXM1MS4kYW5jaG9yLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnJyxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczUxLiRlbC5jc3Moe1xuICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoJyArIHNjYWxlRmFjdG9yICsgJyknLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpczUxLiRtZW51LmNoaWxkcmVuKCdsaScpLmNoaWxkcmVuKCdhJykuY3NzKHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbCB0byBjbG9zZS5cbiAgICAgICAgICAgIF90aGlzNTEuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCA9IF90aGlzNTEuX2hhbmRsZURvY3VtZW50Q2xpY2suYmluZChfdGhpczUxKTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpczUxLl9oYW5kbGVDbG9zZUJvdW5kLCB0cnVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczUxLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQsIHRydWUpO1xuICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRvb2xiYXIgdHJhbnNpdGlvbiBNZW51IGNsb3NlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU91dFRvb2xiYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dFRvb2xiYXIoKSB7XG4gICAgICAgIHZhciBfdGhpczUyID0gdGhpcztcblxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIGJhY2tkcm9wID0gdGhpcy4kZWwuZmluZCgnLmZhYi1iYWNrZHJvcCcpO1xuICAgICAgICB2YXIgZmFiQ29sb3IgPSB0aGlzLiRhbmNob3IuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cbiAgICAgICAgdGhpcy5vZmZzZXRYID0gdGhpcy5idG5MZWZ0IC0gd2luZG93V2lkdGggLyAyICsgdGhpcy5idG5XaWR0aCAvIDI7XG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IHdpbmRvd0hlaWdodCAtIHRoaXMuYnRuQm90dG9tO1xuXG4gICAgICAgIC8vIEhpZGUgYmFja2Ryb3BcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJGFuY2hvci5jc3Moe1xuICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmYWJDb2xvclxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbWVudS5jaGlsZHJlbignbGknKS5jaGlsZHJlbignYScpLmNzcyh7XG4gICAgICAgICAgb3BhY2l0eTogJydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYmFja2Ryb3AucmVtb3ZlKCk7XG5cbiAgICAgICAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZS5cbiAgICAgICAgICBfdGhpczUyLiRlbC5jc3Moe1xuICAgICAgICAgICAgJ3RleHQtYWxpZ24nOiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJyxcbiAgICAgICAgICAgIGJvdHRvbTogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJycsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgLV90aGlzNTIub2Zmc2V0WCArICdweCwwLDApJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzNTIuJGFuY2hvci5jc3Moe1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwnICsgX3RoaXM1Mi5vZmZzZXRZICsgJ3B4LDApJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczUyLiRlbC5jc3Moe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXM1Mi4kYW5jaG9yLmNzcyh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsMCwwKScsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gLjJzIGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCAyMCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KEZsb2F0aW5nQWN0aW9uQnV0dG9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRmxvYXRpbmdBY3Rpb25CdXR0b24pLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9GbG9hdGluZ0FjdGlvbkJ1dHRvbjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGbG9hdGluZ0FjdGlvbkJ1dHRvbjtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uRmxvYXRpbmdBY3Rpb25CdXR0b24gPSBGbG9hdGluZ0FjdGlvbkJ1dHRvbjtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKEZsb2F0aW5nQWN0aW9uQnV0dG9uLCAnZmxvYXRpbmdBY3Rpb25CdXR0b24nLCAnTV9GbG9hdGluZ0FjdGlvbkJ1dHRvbicpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgLy8gQ2xvc2Ugd2hlbiBkYXRlIGlzIHNlbGVjdGVkXG4gICAgYXV0b0Nsb3NlOiBmYWxzZSxcblxuICAgIC8vIHRoZSBkZWZhdWx0IG91dHB1dCBmb3JtYXQgZm9yIHRoZSBpbnB1dCBmaWVsZCB2YWx1ZVxuICAgIGZvcm1hdDogJ21tbSBkZCwgeXl5eScsXG5cbiAgICAvLyBVc2VkIHRvIGNyZWF0ZSBkYXRlIG9iamVjdCBmcm9tIGN1cnJlbnQgaW5wdXQgc3RyaW5nXG4gICAgcGFyc2U6IG51bGwsXG5cbiAgICAvLyBUaGUgaW5pdGlhbCBkYXRlIHRvIHZpZXcgd2hlbiBmaXJzdCBvcGVuZWRcbiAgICBkZWZhdWx0RGF0ZTogbnVsbCxcblxuICAgIC8vIE1ha2UgdGhlIGBkZWZhdWx0RGF0ZWAgdGhlIGluaXRpYWwgc2VsZWN0ZWQgdmFsdWVcbiAgICBzZXREZWZhdWx0RGF0ZTogZmFsc2UsXG5cbiAgICBkaXNhYmxlV2Vla2VuZHM6IGZhbHNlLFxuXG4gICAgZGlzYWJsZURheUZuOiBudWxsLFxuXG4gICAgLy8gRmlyc3QgZGF5IG9mIHdlZWsgKDA6IFN1bmRheSwgMTogTW9uZGF5IGV0YylcbiAgICBmaXJzdERheTogMCxcblxuICAgIC8vIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkXG4gICAgbWluRGF0ZTogbnVsbCxcbiAgICAvLyBUaGVsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgIG1heERhdGU6IG51bGwsXG5cbiAgICAvLyBOdW1iZXIgb2YgeWVhcnMgZWl0aGVyIHNpZGUsIG9yIGFycmF5IG9mIHVwcGVyL2xvd2VyIHJhbmdlXG4gICAgeWVhclJhbmdlOiAxMCxcblxuICAgIC8vIHVzZWQgaW50ZXJuYWxseSAoZG9uJ3QgY29uZmlnIG91dHNpZGUpXG4gICAgbWluWWVhcjogMCxcbiAgICBtYXhZZWFyOiA5OTk5LFxuICAgIG1pbk1vbnRoOiB1bmRlZmluZWQsXG4gICAgbWF4TW9udGg6IHVuZGVmaW5lZCxcblxuICAgIHN0YXJ0UmFuZ2U6IG51bGwsXG4gICAgZW5kUmFuZ2U6IG51bGwsXG5cbiAgICBpc1JUTDogZmFsc2UsXG5cbiAgICAvLyBSZW5kZXIgdGhlIG1vbnRoIGFmdGVyIHllYXIgaW4gdGhlIGNhbGVuZGFyIHRpdGxlXG4gICAgc2hvd01vbnRoQWZ0ZXJZZWFyOiBmYWxzZSxcblxuICAgIC8vIFJlbmRlciBkYXlzIG9mIHRoZSBjYWxlbmRhciBncmlkIHRoYXQgZmFsbCBpbiB0aGUgbmV4dCBvciBwcmV2aW91cyBtb250aFxuICAgIHNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHM6IGZhbHNlLFxuXG4gICAgLy8gU3BlY2lmeSBhIERPTSBlbGVtZW50IHRvIHJlbmRlciB0aGUgY2FsZW5kYXIgaW5cbiAgICBjb250YWluZXI6IG51bGwsXG5cbiAgICAvLyBTaG93IGNsZWFyIGJ1dHRvblxuICAgIHNob3dDbGVhckJ0bjogZmFsc2UsXG5cbiAgICAvLyBpbnRlcm5hdGlvbmFsaXphdGlvblxuICAgIGkxOG46IHtcbiAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgIGRvbmU6ICdPaycsXG4gICAgICBwcmV2aW91c01vbnRoOiAn4oC5JyxcbiAgICAgIG5leHRNb250aDogJ+KAuicsXG4gICAgICBtb250aHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxuICAgICAgbW9udGhzU2hvcnQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgICAgIHdlZWtkYXlzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICB3ZWVrZGF5c1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgd2Vla2RheXNBYmJyZXY6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddXG4gICAgfSxcblxuICAgIC8vIGV2ZW50cyBhcnJheVxuICAgIGV2ZW50czogW10sXG5cbiAgICAvLyBjYWxsYmFjayBmdW5jdGlvblxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uT3BlbjogbnVsbCxcbiAgICBvbkNsb3NlOiBudWxsLFxuICAgIG9uRHJhdzogbnVsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIERhdGVwaWNrZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDE1KSB7XG4gICAgX2luaGVyaXRzKERhdGVwaWNrZXIsIF9Db21wb25lbnQxNSk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgRGF0ZXBpY2tlciBpbnN0YW5jZSBhbmQgc2V0IHVwIG92ZXJsYXlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBEYXRlcGlja2VyKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZXBpY2tlcik7XG5cbiAgICAgIHZhciBfdGhpczUzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERhdGVwaWNrZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEYXRlcGlja2VyKSkuY2FsbCh0aGlzLCBEYXRlcGlja2VyLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczUzLmVsLk1fRGF0ZXBpY2tlciA9IF90aGlzNTM7XG5cbiAgICAgIF90aGlzNTMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBEYXRlcGlja2VyLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLy8gbWFrZSBzdXJlIGkxOG4gZGVmYXVsdHMgYXJlIG5vdCBsb3N0IHdoZW4gb25seSBmZXcgaTE4biBvcHRpb24gcHJvcGVydGllcyBhcmUgcGFzc2VkXG4gICAgICBpZiAoISFvcHRpb25zICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2kxOG4nKSAmJiB0eXBlb2Ygb3B0aW9ucy5pMThuID09PSAnb2JqZWN0Jykge1xuICAgICAgICBfdGhpczUzLm9wdGlvbnMuaTE4biA9ICQuZXh0ZW5kKHt9LCBEYXRlcGlja2VyLmRlZmF1bHRzLmkxOG4sIG9wdGlvbnMuaTE4bik7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSB0aW1lIGNvbXBvbmVudCBmcm9tIG1pbkRhdGUgYW5kIG1heERhdGUgb3B0aW9uc1xuICAgICAgaWYgKF90aGlzNTMub3B0aW9ucy5taW5EYXRlKSBfdGhpczUzLm9wdGlvbnMubWluRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIGlmIChfdGhpczUzLm9wdGlvbnMubWF4RGF0ZSkgX3RoaXM1My5vcHRpb25zLm1heERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICAgIF90aGlzNTMuaWQgPSBNLmd1aWQoKTtcblxuICAgICAgX3RoaXM1My5fc2V0dXBWYXJpYWJsZXMoKTtcbiAgICAgIF90aGlzNTMuX2luc2VydEhUTUxJbnRvRE9NKCk7XG4gICAgICBfdGhpczUzLl9zZXR1cE1vZGFsKCk7XG5cbiAgICAgIF90aGlzNTMuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICBpZiAoIV90aGlzNTMub3B0aW9ucy5kZWZhdWx0RGF0ZSkge1xuICAgICAgICBfdGhpczUzLm9wdGlvbnMuZGVmYXVsdERhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKF90aGlzNTMuZWwudmFsdWUpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRlZkRhdGUgPSBfdGhpczUzLm9wdGlvbnMuZGVmYXVsdERhdGU7XG4gICAgICBpZiAoRGF0ZXBpY2tlci5faXNEYXRlKGRlZkRhdGUpKSB7XG4gICAgICAgIGlmIChfdGhpczUzLm9wdGlvbnMuc2V0RGVmYXVsdERhdGUpIHtcbiAgICAgICAgICBfdGhpczUzLnNldERhdGUoZGVmRGF0ZSwgdHJ1ZSk7XG4gICAgICAgICAgX3RoaXM1My5zZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXM1My5nb3RvRGF0ZShkZWZEYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXM1My5nb3RvRGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgb3Blbi9jbG9zZSBzdGF0ZSBvZiBkYXRlcGlja2VyXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXM1My5pc09wZW4gPSBmYWxzZTtcbiAgICAgIHJldHVybiBfdGhpczUzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEYXRlcGlja2VyLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLm1vZGFsLmRlc3Ryb3koKTtcbiAgICAgICAgJCh0aGlzLm1vZGFsRWwpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmRlc3Ryb3lTZWxlY3RzKCk7XG4gICAgICAgIHRoaXMuZWwuTV9EYXRlcGlja2VyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZXN0cm95U2VsZWN0c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3lTZWxlY3RzKCkge1xuICAgICAgICB2YXIgb2xkWWVhclNlbGVjdCA9IHRoaXMuY2FsZW5kYXJFbC5xdWVyeVNlbGVjdG9yKCcub3JpZy1zZWxlY3QteWVhcicpO1xuICAgICAgICBpZiAob2xkWWVhclNlbGVjdCkge1xuICAgICAgICAgIE0uRm9ybVNlbGVjdC5nZXRJbnN0YW5jZShvbGRZZWFyU2VsZWN0KS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZE1vbnRoU2VsZWN0ID0gdGhpcy5jYWxlbmRhckVsLnF1ZXJ5U2VsZWN0b3IoJy5vcmlnLXNlbGVjdC1tb250aCcpO1xuICAgICAgICBpZiAob2xkTW9udGhTZWxlY3QpIHtcbiAgICAgICAgICBNLkZvcm1TZWxlY3QuZ2V0SW5zdGFuY2Uob2xkTW9udGhTZWxlY3QpLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaW5zZXJ0SFRNTEludG9ET01cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaW5zZXJ0SFRNTEludG9ET00oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0NsZWFyQnRuKSB7XG4gICAgICAgICAgJCh0aGlzLmNsZWFyQnRuKS5jc3MoeyB2aXNpYmlsaXR5OiAnJyB9KTtcbiAgICAgICAgICB0aGlzLmNsZWFyQnRuLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5pMThuLmNsZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kb25lQnRuLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5pMThuLmRvbmU7XG4gICAgICAgIHRoaXMuY2FuY2VsQnRuLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5pMThuLmNhbmNlbDtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRhaW5lcikge1xuICAgICAgICAgIHRoaXMuJG1vZGFsRWwuYXBwZW5kVG8odGhpcy5vcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kbW9kYWxFbC5pbnNlcnRCZWZvcmUodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzNTQgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubW9kYWxFbC5pZCA9ICdtb2RhbC0nICsgdGhpcy5pZDtcbiAgICAgICAgdGhpcy5tb2RhbCA9IE0uTW9kYWwuaW5pdCh0aGlzLm1vZGFsRWwsIHtcbiAgICAgICAgICBvbkNsb3NlRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczU0LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInRvU3RyaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoZm9ybWF0KSB7XG4gICAgICAgIHZhciBfdGhpczU1ID0gdGhpcztcblxuICAgICAgICBmb3JtYXQgPSBmb3JtYXQgfHwgdGhpcy5vcHRpb25zLmZvcm1hdDtcbiAgICAgICAgaWYgKCFEYXRlcGlja2VyLl9pc0RhdGUodGhpcy5kYXRlKSkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmb3JtYXRBcnJheSA9IGZvcm1hdC5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyk7XG4gICAgICAgIHZhciBmb3JtYXR0ZWREYXRlID0gZm9ybWF0QXJyYXkubWFwKGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICAgIGlmIChfdGhpczU1LmZvcm1hdHNbbGFiZWxdKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1NS5mb3JtYXRzW2xhYmVsXSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXREYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCBwcmV2ZW50T25TZWxlY3QpIHtcbiAgICAgICAgaWYgKCFkYXRlKSB7XG4gICAgICAgICAgdGhpcy5kYXRlID0gbnVsbDtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJEYXRlRGlzcGxheSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUucGFyc2UoZGF0ZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghRGF0ZXBpY2tlci5faXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1pbiA9IHRoaXMub3B0aW9ucy5taW5EYXRlLFxuICAgICAgICAgICAgbWF4ID0gdGhpcy5vcHRpb25zLm1heERhdGU7XG5cbiAgICAgICAgaWYgKERhdGVwaWNrZXIuX2lzRGF0ZShtaW4pICYmIGRhdGUgPCBtaW4pIHtcbiAgICAgICAgICBkYXRlID0gbWluO1xuICAgICAgICB9IGVsc2UgaWYgKERhdGVwaWNrZXIuX2lzRGF0ZShtYXgpICYmIGRhdGUgPiBtYXgpIHtcbiAgICAgICAgICBkYXRlID0gbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlckRhdGVEaXNwbGF5KCk7XG5cbiAgICAgICAgRGF0ZXBpY2tlci5fc2V0VG9TdGFydE9mRGF5KHRoaXMuZGF0ZSk7XG4gICAgICAgIHRoaXMuZ290b0RhdGUodGhpcy5kYXRlKTtcblxuICAgICAgICBpZiAoIXByZXZlbnRPblNlbGVjdCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLm9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uU2VsZWN0LmNhbGwodGhpcywgdGhpcy5kYXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRJbnB1dFZhbHVlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy4kZWwudHJpZ2dlcignY2hhbmdlJywgeyBmaXJlZEJ5OiB0aGlzIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVuZGVyRGF0ZURpc3BsYXlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVuZGVyRGF0ZURpc3BsYXkoKSB7XG4gICAgICAgIHZhciBkaXNwbGF5RGF0ZSA9IERhdGVwaWNrZXIuX2lzRGF0ZSh0aGlzLmRhdGUpID8gdGhpcy5kYXRlIDogbmV3IERhdGUoKTtcbiAgICAgICAgdmFyIGkxOG4gPSB0aGlzLm9wdGlvbnMuaTE4bjtcbiAgICAgICAgdmFyIGRheSA9IGkxOG4ud2Vla2RheXNTaG9ydFtkaXNwbGF5RGF0ZS5nZXREYXkoKV07XG4gICAgICAgIHZhciBtb250aCA9IGkxOG4ubW9udGhzU2hvcnRbZGlzcGxheURhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgIHZhciBkYXRlID0gZGlzcGxheURhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICB0aGlzLnllYXJUZXh0RWwuaW5uZXJIVE1MID0gZGlzcGxheURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgdGhpcy5kYXRlVGV4dEVsLmlubmVySFRNTCA9IGRheSArIFwiLCBcIiArIG1vbnRoICsgXCIgXCIgKyBkYXRlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIGNoYW5nZSB2aWV3IHRvIGEgc3BlY2lmaWMgZGF0ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ290b0RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnb3RvRGF0ZShkYXRlKSB7XG4gICAgICAgIHZhciBuZXdDYWxlbmRhciA9IHRydWU7XG5cbiAgICAgICAgaWYgKCFEYXRlcGlja2VyLl9pc0RhdGUoZGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jYWxlbmRhcnMpIHtcbiAgICAgICAgICB2YXIgZmlyc3RWaXNpYmxlRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY2FsZW5kYXJzWzBdLnllYXIsIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoLCAxKSxcbiAgICAgICAgICAgICAgbGFzdFZpc2libGVEYXRlID0gbmV3IERhdGUodGhpcy5jYWxlbmRhcnNbdGhpcy5jYWxlbmRhcnMubGVuZ3RoIC0gMV0ueWVhciwgdGhpcy5jYWxlbmRhcnNbdGhpcy5jYWxlbmRhcnMubGVuZ3RoIC0gMV0ubW9udGgsIDEpLFxuICAgICAgICAgICAgICB2aXNpYmxlRGF0ZSA9IGRhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgIC8vIGdldCB0aGUgZW5kIG9mIHRoZSBtb250aFxuICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZS5zZXRNb250aChsYXN0VmlzaWJsZURhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZS5zZXREYXRlKGxhc3RWaXNpYmxlRGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICBuZXdDYWxlbmRhciA9IHZpc2libGVEYXRlIDwgZmlyc3RWaXNpYmxlRGF0ZS5nZXRUaW1lKCkgfHwgbGFzdFZpc2libGVEYXRlLmdldFRpbWUoKSA8IHZpc2libGVEYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0NhbGVuZGFyKSB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcnMgPSBbe1xuICAgICAgICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgICAgICAgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRqdXN0Q2FsZW5kYXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRqdXN0Q2FsZW5kYXJzKCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyc1swXSA9IHRoaXMuYWRqdXN0Q2FsZW5kYXIodGhpcy5jYWxlbmRhcnNbMF0pO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYWRqdXN0Q2FsZW5kYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGp1c3RDYWxlbmRhcihjYWxlbmRhcikge1xuICAgICAgICBpZiAoY2FsZW5kYXIubW9udGggPCAwKSB7XG4gICAgICAgICAgY2FsZW5kYXIueWVhciAtPSBNYXRoLmNlaWwoTWF0aC5hYnMoY2FsZW5kYXIubW9udGgpIC8gMTIpO1xuICAgICAgICAgIGNhbGVuZGFyLm1vbnRoICs9IDEyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxlbmRhci5tb250aCA+IDExKSB7XG4gICAgICAgICAgY2FsZW5kYXIueWVhciArPSBNYXRoLmZsb29yKE1hdGguYWJzKGNhbGVuZGFyLm1vbnRoKSAvIDEyKTtcbiAgICAgICAgICBjYWxlbmRhci5tb250aCAtPSAxMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsZW5kYXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm5leHRNb250aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5leHRNb250aCgpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGgrKztcbiAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHJldk1vbnRoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJldk1vbnRoKCkge1xuICAgICAgICB0aGlzLmNhbGVuZGFyc1swXS5tb250aC0tO1xuICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoeWVhciwgbW9udGgsIHJhbmRJZCkge1xuICAgICAgICB2YXIgb3B0cyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIG5vdyA9IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBkYXlzID0gRGF0ZXBpY2tlci5fZ2V0RGF5c0luTW9udGgoeWVhciwgbW9udGgpLFxuICAgICAgICAgICAgYmVmb3JlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpLmdldERheSgpLFxuICAgICAgICAgICAgZGF0YSA9IFtdLFxuICAgICAgICAgICAgcm93ID0gW107XG4gICAgICAgIERhdGVwaWNrZXIuX3NldFRvU3RhcnRPZkRheShub3cpO1xuICAgICAgICBpZiAob3B0cy5maXJzdERheSA+IDApIHtcbiAgICAgICAgICBiZWZvcmUgLT0gb3B0cy5maXJzdERheTtcbiAgICAgICAgICBpZiAoYmVmb3JlIDwgMCkge1xuICAgICAgICAgICAgYmVmb3JlICs9IDc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c01vbnRoID0gbW9udGggPT09IDAgPyAxMSA6IG1vbnRoIC0gMSxcbiAgICAgICAgICAgIG5leHRNb250aCA9IG1vbnRoID09PSAxMSA/IDAgOiBtb250aCArIDEsXG4gICAgICAgICAgICB5ZWFyT2ZQcmV2aW91c01vbnRoID0gbW9udGggPT09IDAgPyB5ZWFyIC0gMSA6IHllYXIsXG4gICAgICAgICAgICB5ZWFyT2ZOZXh0TW9udGggPSBtb250aCA9PT0gMTEgPyB5ZWFyICsgMSA6IHllYXIsXG4gICAgICAgICAgICBkYXlzSW5QcmV2aW91c01vbnRoID0gRGF0ZXBpY2tlci5fZ2V0RGF5c0luTW9udGgoeWVhck9mUHJldmlvdXNNb250aCwgcHJldmlvdXNNb250aCk7XG4gICAgICAgIHZhciBjZWxscyA9IGRheXMgKyBiZWZvcmUsXG4gICAgICAgICAgICBhZnRlciA9IGNlbGxzO1xuICAgICAgICB3aGlsZSAoYWZ0ZXIgPiA3KSB7XG4gICAgICAgICAgYWZ0ZXIgLT0gNztcbiAgICAgICAgfVxuICAgICAgICBjZWxscyArPSA3IC0gYWZ0ZXI7XG4gICAgICAgIHZhciBpc1dlZWtTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgciA9IDA7IGkgPCBjZWxsczsgaSsrKSB7XG4gICAgICAgICAgdmFyIGRheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxICsgKGkgLSBiZWZvcmUpKSxcbiAgICAgICAgICAgICAgaXNTZWxlY3RlZCA9IERhdGVwaWNrZXIuX2lzRGF0ZSh0aGlzLmRhdGUpID8gRGF0ZXBpY2tlci5fY29tcGFyZURhdGVzKGRheSwgdGhpcy5kYXRlKSA6IGZhbHNlLFxuICAgICAgICAgICAgICBpc1RvZGF5ID0gRGF0ZXBpY2tlci5fY29tcGFyZURhdGVzKGRheSwgbm93KSxcbiAgICAgICAgICAgICAgaGFzRXZlbnQgPSBvcHRzLmV2ZW50cy5pbmRleE9mKGRheS50b0RhdGVTdHJpbmcoKSkgIT09IC0xID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgICBpc0VtcHR5ID0gaSA8IGJlZm9yZSB8fCBpID49IGRheXMgKyBiZWZvcmUsXG4gICAgICAgICAgICAgIGRheU51bWJlciA9IDEgKyAoaSAtIGJlZm9yZSksXG4gICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gbW9udGgsXG4gICAgICAgICAgICAgIHllYXJOdW1iZXIgPSB5ZWFyLFxuICAgICAgICAgICAgICBpc1N0YXJ0UmFuZ2UgPSBvcHRzLnN0YXJ0UmFuZ2UgJiYgRGF0ZXBpY2tlci5fY29tcGFyZURhdGVzKG9wdHMuc3RhcnRSYW5nZSwgZGF5KSxcbiAgICAgICAgICAgICAgaXNFbmRSYW5nZSA9IG9wdHMuZW5kUmFuZ2UgJiYgRGF0ZXBpY2tlci5fY29tcGFyZURhdGVzKG9wdHMuZW5kUmFuZ2UsIGRheSksXG4gICAgICAgICAgICAgIGlzSW5SYW5nZSA9IG9wdHMuc3RhcnRSYW5nZSAmJiBvcHRzLmVuZFJhbmdlICYmIG9wdHMuc3RhcnRSYW5nZSA8IGRheSAmJiBkYXkgPCBvcHRzLmVuZFJhbmdlLFxuICAgICAgICAgICAgICBpc0Rpc2FibGVkID0gb3B0cy5taW5EYXRlICYmIGRheSA8IG9wdHMubWluRGF0ZSB8fCBvcHRzLm1heERhdGUgJiYgZGF5ID4gb3B0cy5tYXhEYXRlIHx8IG9wdHMuZGlzYWJsZVdlZWtlbmRzICYmIERhdGVwaWNrZXIuX2lzV2Vla2VuZChkYXkpIHx8IG9wdHMuZGlzYWJsZURheUZuICYmIG9wdHMuZGlzYWJsZURheUZuKGRheSk7XG5cbiAgICAgICAgICBpZiAoaXNFbXB0eSkge1xuICAgICAgICAgICAgaWYgKGkgPCBiZWZvcmUpIHtcbiAgICAgICAgICAgICAgZGF5TnVtYmVyID0gZGF5c0luUHJldmlvdXNNb250aCArIGRheU51bWJlcjtcbiAgICAgICAgICAgICAgbW9udGhOdW1iZXIgPSBwcmV2aW91c01vbnRoO1xuICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck9mUHJldmlvdXNNb250aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRheU51bWJlciA9IGRheU51bWJlciAtIGRheXM7XG4gICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gbmV4dE1vbnRoO1xuICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck9mTmV4dE1vbnRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkYXlDb25maWcgPSB7XG4gICAgICAgICAgICBkYXk6IGRheU51bWJlcixcbiAgICAgICAgICAgIG1vbnRoOiBtb250aE51bWJlcixcbiAgICAgICAgICAgIHllYXI6IHllYXJOdW1iZXIsXG4gICAgICAgICAgICBoYXNFdmVudDogaGFzRXZlbnQsXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkLFxuICAgICAgICAgICAgaXNUb2RheTogaXNUb2RheSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG4gICAgICAgICAgICBpc0VtcHR5OiBpc0VtcHR5LFxuICAgICAgICAgICAgaXNTdGFydFJhbmdlOiBpc1N0YXJ0UmFuZ2UsXG4gICAgICAgICAgICBpc0VuZFJhbmdlOiBpc0VuZFJhbmdlLFxuICAgICAgICAgICAgaXNJblJhbmdlOiBpc0luUmFuZ2UsXG4gICAgICAgICAgICBzaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzOiBvcHRzLnNob3dEYXlzSW5OZXh0QW5kUHJldmlvdXNNb250aHNcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcm93LnB1c2godGhpcy5yZW5kZXJEYXkoZGF5Q29uZmlnKSk7XG5cbiAgICAgICAgICBpZiAoKytyID09PSA3KSB7XG4gICAgICAgICAgICBkYXRhLnB1c2godGhpcy5yZW5kZXJSb3cocm93LCBvcHRzLmlzUlRMLCBpc1dlZWtTZWxlY3RlZCkpO1xuICAgICAgICAgICAgcm93ID0gW107XG4gICAgICAgICAgICByID0gMDtcbiAgICAgICAgICAgIGlzV2Vla1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhYmxlKG9wdHMsIGRhdGEsIHJhbmRJZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckRheVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRheShvcHRzKSB7XG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgdmFyIGFyaWFTZWxlY3RlZCA9ICdmYWxzZSc7XG4gICAgICAgIGlmIChvcHRzLmlzRW1wdHkpIHtcbiAgICAgICAgICBpZiAob3B0cy5zaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzKSB7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtb3V0c2lkZS1jdXJyZW50LW1vbnRoJyk7XG4gICAgICAgICAgICBhcnIucHVzaCgnaXMtc2VsZWN0aW9uLWRpc2FibGVkJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnPHRkIGNsYXNzPVwiaXMtZW1wdHlcIj48L3RkPic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICBhcnIucHVzaCgnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzLmlzVG9kYXkpIHtcbiAgICAgICAgICBhcnIucHVzaCgnaXMtdG9kYXknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2lzLXNlbGVjdGVkJyk7XG4gICAgICAgICAgYXJpYVNlbGVjdGVkID0gJ3RydWUnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmhhc0V2ZW50KSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2hhcy1ldmVudCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzSW5SYW5nZSkge1xuICAgICAgICAgIGFyci5wdXNoKCdpcy1pbnJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNTdGFydFJhbmdlKSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2lzLXN0YXJ0cmFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0VuZFJhbmdlKSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2lzLWVuZHJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiPHRkIGRhdGEtZGF5PVxcXCJcIiArIG9wdHMuZGF5ICsgXCJcXFwiIGNsYXNzPVxcXCJcIiArIGFyci5qb2luKCcgJykgKyBcIlxcXCIgYXJpYS1zZWxlY3RlZD1cXFwiXCIgKyBhcmlhU2VsZWN0ZWQgKyBcIlxcXCI+XCIgKyAoXCI8YnV0dG9uIGNsYXNzPVxcXCJkYXRlcGlja2VyLWRheS1idXR0b25cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS15ZWFyPVxcXCJcIiArIG9wdHMueWVhciArIFwiXFxcIiBkYXRhLW1vbnRoPVxcXCJcIiArIG9wdHMubW9udGggKyBcIlxcXCIgZGF0YS1kYXk9XFxcIlwiICsgb3B0cy5kYXkgKyBcIlxcXCI+XCIgKyBvcHRzLmRheSArIFwiPC9idXR0b24+XCIpICsgJzwvdGQ+JztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyUm93XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyUm93KGRheXMsIGlzUlRMLCBpc1Jvd1NlbGVjdGVkKSB7XG4gICAgICAgIHJldHVybiAnPHRyIGNsYXNzPVwiZGF0ZXBpY2tlci1yb3cnICsgKGlzUm93U2VsZWN0ZWQgPyAnIGlzLXNlbGVjdGVkJyA6ICcnKSArICdcIj4nICsgKGlzUlRMID8gZGF5cy5yZXZlcnNlKCkgOiBkYXlzKS5qb2luKCcnKSArICc8L3RyPic7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclRhYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGFibGUob3B0cywgZGF0YSwgcmFuZElkKSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItdGFibGUtd3JhcHBlclwiPjx0YWJsZSBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiBjbGFzcz1cImRhdGVwaWNrZXItdGFibGVcIiByb2xlPVwiZ3JpZFwiIGFyaWEtbGFiZWxsZWRieT1cIicgKyByYW5kSWQgKyAnXCI+JyArIHRoaXMucmVuZGVySGVhZChvcHRzKSArIHRoaXMucmVuZGVyQm9keShkYXRhKSArICc8L3RhYmxlPjwvZGl2Pic7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckhlYWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJIZWFkKG9wdHMpIHtcbiAgICAgICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgICAgICBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgICAgIGFyci5wdXNoKFwiPHRoIHNjb3BlPVxcXCJjb2xcXFwiPjxhYmJyIHRpdGxlPVxcXCJcIiArIHRoaXMucmVuZGVyRGF5TmFtZShvcHRzLCBpKSArIFwiXFxcIj5cIiArIHRoaXMucmVuZGVyRGF5TmFtZShvcHRzLCBpLCB0cnVlKSArIFwiPC9hYmJyPjwvdGg+XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnPHRoZWFkPjx0cj4nICsgKG9wdHMuaXNSVEwgPyBhcnIucmV2ZXJzZSgpIDogYXJyKS5qb2luKCcnKSArICc8L3RyPjwvdGhlYWQ+JztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyQm9keVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckJvZHkocm93cykge1xuICAgICAgICByZXR1cm4gJzx0Ym9keT4nICsgcm93cy5qb2luKCcnKSArICc8L3Rib2R5Pic7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclRpdGxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5zdGFuY2UsIGMsIHllYXIsIG1vbnRoLCByZWZZZWFyLCByYW5kSWQpIHtcbiAgICAgICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgICAgICBqID0gdm9pZCAwLFxuICAgICAgICAgICAgYXJyID0gdm9pZCAwLFxuICAgICAgICAgICAgb3B0cyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIGlzTWluWWVhciA9IHllYXIgPT09IG9wdHMubWluWWVhcixcbiAgICAgICAgICAgIGlzTWF4WWVhciA9IHllYXIgPT09IG9wdHMubWF4WWVhcixcbiAgICAgICAgICAgIGh0bWwgPSAnPGRpdiBpZD1cIicgKyByYW5kSWQgKyAnXCIgY2xhc3M9XCJkYXRlcGlja2VyLWNvbnRyb2xzXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIj4nLFxuICAgICAgICAgICAgbW9udGhIdG1sID0gdm9pZCAwLFxuICAgICAgICAgICAgeWVhckh0bWwgPSB2b2lkIDAsXG4gICAgICAgICAgICBwcmV2ID0gdHJ1ZSxcbiAgICAgICAgICAgIG5leHQgPSB0cnVlO1xuXG4gICAgICAgIGZvciAoYXJyID0gW10sIGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgICAgIGFyci5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArICh5ZWFyID09PSByZWZZZWFyID8gaSAtIGMgOiAxMiArIGkgLSBjKSArICdcIicgKyAoaSA9PT0gbW9udGggPyAnIHNlbGVjdGVkPVwic2VsZWN0ZWRcIicgOiAnJykgKyAoaXNNaW5ZZWFyICYmIGkgPCBvcHRzLm1pbk1vbnRoIHx8IGlzTWF4WWVhciAmJiBpID4gb3B0cy5tYXhNb250aCA/ICdkaXNhYmxlZD1cImRpc2FibGVkXCInIDogJycpICsgJz4nICsgb3B0cy5pMThuLm1vbnRoc1tpXSArICc8L29wdGlvbj4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vbnRoSHRtbCA9ICc8c2VsZWN0IGNsYXNzPVwiZGF0ZXBpY2tlci1zZWxlY3Qgb3JpZy1zZWxlY3QtbW9udGhcIiB0YWJpbmRleD1cIi0xXCI+JyArIGFyci5qb2luKCcnKSArICc8L3NlbGVjdD4nO1xuXG4gICAgICAgIGlmICgkLmlzQXJyYXkob3B0cy55ZWFyUmFuZ2UpKSB7XG4gICAgICAgICAgaSA9IG9wdHMueWVhclJhbmdlWzBdO1xuICAgICAgICAgIGogPSBvcHRzLnllYXJSYW5nZVsxXSArIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSA9IHllYXIgLSBvcHRzLnllYXJSYW5nZTtcbiAgICAgICAgICBqID0gMSArIHllYXIgKyBvcHRzLnllYXJSYW5nZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoYXJyID0gW107IGkgPCBqICYmIGkgPD0gb3B0cy5tYXhZZWFyOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSA+PSBvcHRzLm1pblllYXIpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKFwiPG9wdGlvbiB2YWx1ZT1cXFwiXCIgKyBpICsgXCJcXFwiIFwiICsgKGkgPT09IHllYXIgPyAnc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJyA6ICcnKSArIFwiPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHllYXJIdG1sID0gXCI8c2VsZWN0IGNsYXNzPVxcXCJkYXRlcGlja2VyLXNlbGVjdCBvcmlnLXNlbGVjdC15ZWFyXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlwiICsgYXJyLmpvaW4oJycpICsgXCI8L3NlbGVjdD5cIjtcblxuICAgICAgICB2YXIgbGVmdEFycm93ID0gJzxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNMTUuNDEgMTYuMDlsLTQuNTgtNC41OSA0LjU4LTQuNTlMMTQgNS41bC02IDYgNiA2elwiLz48cGF0aCBkPVwiTTAtLjVoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz4nO1xuICAgICAgICBodG1sICs9IFwiPGJ1dHRvbiBjbGFzcz1cXFwibW9udGgtcHJldlwiICsgKHByZXYgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKSArIFwiXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlwiICsgbGVmdEFycm93ICsgXCI8L2J1dHRvbj5cIjtcblxuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwic2VsZWN0cy1jb250YWluZXJcIj4nO1xuICAgICAgICBpZiAob3B0cy5zaG93TW9udGhBZnRlclllYXIpIHtcbiAgICAgICAgICBodG1sICs9IHllYXJIdG1sICsgbW9udGhIdG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGh0bWwgKz0gbW9udGhIdG1sICsgeWVhckh0bWw7XG4gICAgICAgIH1cbiAgICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgICBpZiAoaXNNaW5ZZWFyICYmIChtb250aCA9PT0gMCB8fCBvcHRzLm1pbk1vbnRoID49IG1vbnRoKSkge1xuICAgICAgICAgIHByZXYgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc01heFllYXIgJiYgKG1vbnRoID09PSAxMSB8fCBvcHRzLm1heE1vbnRoIDw9IG1vbnRoKSkge1xuICAgICAgICAgIG5leHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByaWdodEFycm93ID0gJzxzdmcgZmlsbD1cIiMwMDAwMDBcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnpcIi8+PHBhdGggZD1cIk0wLS4yNWgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjwvc3ZnPic7XG4gICAgICAgIGh0bWwgKz0gXCI8YnV0dG9uIGNsYXNzPVxcXCJtb250aC1uZXh0XCIgKyAobmV4dCA/ICcnIDogJyBpcy1kaXNhYmxlZCcpICsgXCJcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+XCIgKyByaWdodEFycm93ICsgXCI8L2J1dHRvbj5cIjtcblxuICAgICAgICByZXR1cm4gaHRtbCArPSAnPC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiByZWZyZXNoIHRoZSBIVE1MXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkcmF3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZHJhdyhmb3JjZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuICYmICFmb3JjZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3B0cyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICAgIG1pblllYXIgPSBvcHRzLm1pblllYXIsXG4gICAgICAgICAgICBtYXhZZWFyID0gb3B0cy5tYXhZZWFyLFxuICAgICAgICAgICAgbWluTW9udGggPSBvcHRzLm1pbk1vbnRoLFxuICAgICAgICAgICAgbWF4TW9udGggPSBvcHRzLm1heE1vbnRoLFxuICAgICAgICAgICAgaHRtbCA9ICcnLFxuICAgICAgICAgICAgcmFuZElkID0gdm9pZCAwO1xuXG4gICAgICAgIGlmICh0aGlzLl95IDw9IG1pblllYXIpIHtcbiAgICAgICAgICB0aGlzLl95ID0gbWluWWVhcjtcbiAgICAgICAgICBpZiAoIWlzTmFOKG1pbk1vbnRoKSAmJiB0aGlzLl9tIDwgbWluTW9udGgpIHtcbiAgICAgICAgICAgIHRoaXMuX20gPSBtaW5Nb250aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3kgPj0gbWF4WWVhcikge1xuICAgICAgICAgIHRoaXMuX3kgPSBtYXhZZWFyO1xuICAgICAgICAgIGlmICghaXNOYU4obWF4TW9udGgpICYmIHRoaXMuX20gPiBtYXhNb250aCkge1xuICAgICAgICAgICAgdGhpcy5fbSA9IG1heE1vbnRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJhbmRJZCA9ICdkYXRlcGlja2VyLXRpdGxlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKC9bXmEtel0rL2csICcnKS5zdWJzdHIoMCwgMik7XG5cbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAxOyBjKyspIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJEYXRlRGlzcGxheSgpO1xuICAgICAgICAgIGh0bWwgKz0gdGhpcy5yZW5kZXJUaXRsZSh0aGlzLCBjLCB0aGlzLmNhbGVuZGFyc1tjXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1tjXS5tb250aCwgdGhpcy5jYWxlbmRhcnNbMF0ueWVhciwgcmFuZElkKSArIHRoaXMucmVuZGVyKHRoaXMuY2FsZW5kYXJzW2NdLnllYXIsIHRoaXMuY2FsZW5kYXJzW2NdLm1vbnRoLCByYW5kSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cm95U2VsZWN0cygpO1xuXG4gICAgICAgIHRoaXMuY2FsZW5kYXJFbC5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICAgIC8vIEluaXQgTWF0ZXJpYWxpemUgU2VsZWN0XG4gICAgICAgIHZhciB5ZWFyU2VsZWN0ID0gdGhpcy5jYWxlbmRhckVsLnF1ZXJ5U2VsZWN0b3IoJy5vcmlnLXNlbGVjdC15ZWFyJyk7XG4gICAgICAgIHZhciBtb250aFNlbGVjdCA9IHRoaXMuY2FsZW5kYXJFbC5xdWVyeVNlbGVjdG9yKCcub3JpZy1zZWxlY3QtbW9udGgnKTtcbiAgICAgICAgTS5Gb3JtU2VsZWN0LmluaXQoeWVhclNlbGVjdCwge1xuICAgICAgICAgIGNsYXNzZXM6ICdzZWxlY3QteWVhcicsXG4gICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7IGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSwgY29uc3RyYWluV2lkdGg6IGZhbHNlIH1cbiAgICAgICAgfSk7XG4gICAgICAgIE0uRm9ybVNlbGVjdC5pbml0KG1vbnRoU2VsZWN0LCB7XG4gICAgICAgICAgY2xhc3NlczogJ3NlbGVjdC1tb250aCcsXG4gICAgICAgICAgZHJvcGRvd25PcHRpb25zOiB7IGNvbnRhaW5lcjogZG9jdW1lbnQuYm9keSwgY29uc3RyYWluV2lkdGg6IGZhbHNlIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGNoYW5nZSBoYW5kbGVycyBmb3Igc2VsZWN0XG4gICAgICAgIHllYXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlWWVhckNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgbW9udGhTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlTW9udGhDaGFuZ2UuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25EcmF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uRHJhdyh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dENoYW5nZUJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FsZW5kYXJDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlQ2FsZW5kYXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9maW5pc2hTZWxlY3Rpb25Cb3VuZCA9IHRoaXMuX2ZpbmlzaFNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNb250aENoYW5nZSA9IHRoaXMuX2hhbmRsZU1vbnRoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2Nsb3NlQm91bmQgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVJbnB1dENoYW5nZUJvdW5kKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2FsZW5kYXJDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5kb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fZmluaXNoU2VsZWN0aW9uQm91bmQpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2Nsb3NlQm91bmQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0NsZWFyQnRuKSB7XG4gICAgICAgICAgdGhpcy5faGFuZGxlQ2xlYXJDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlQ2xlYXJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgIHRoaXMuY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGVhckNsaWNrQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cFZhcmlhYmxlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cFZhcmlhYmxlcygpIHtcbiAgICAgICAgdmFyIF90aGlzNTYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJG1vZGFsRWwgPSAkKERhdGVwaWNrZXIuX3RlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5tb2RhbEVsID0gdGhpcy4kbW9kYWxFbFswXTtcblxuICAgICAgICB0aGlzLmNhbGVuZGFyRWwgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLmRhdGVwaWNrZXItY2FsZW5kYXInKTtcblxuICAgICAgICB0aGlzLnllYXJUZXh0RWwgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnllYXItdGV4dCcpO1xuICAgICAgICB0aGlzLmRhdGVUZXh0RWwgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLmRhdGUtdGV4dCcpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDbGVhckJ0bikge1xuICAgICAgICAgIHRoaXMuY2xlYXJCdG4gPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLmRhdGVwaWNrZXItY2xlYXInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvbmVCdG4gPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLmRhdGVwaWNrZXItZG9uZScpO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0biA9IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXBpY2tlci1jYW5jZWwnKTtcblxuICAgICAgICB0aGlzLmZvcm1hdHMgPSB7XG4gICAgICAgICAgZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYuZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGQgPSBfdGhpczU2LmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIChkIDwgMTAgPyAnMCcgOiAnJykgKyBkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ni5vcHRpb25zLmkxOG4ud2Vla2RheXNTaG9ydFtfdGhpczU2LmRhdGUuZ2V0RGF5KCldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGRkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYub3B0aW9ucy5pMThuLndlZWtkYXlzW190aGlzNTYuZGF0ZS5nZXREYXkoKV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ni5kYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtID0gX3RoaXM1Ni5kYXRlLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIChtIDwgMTAgPyAnMCcgOiAnJykgKyBtO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW1tOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ni5vcHRpb25zLmkxOG4ubW9udGhzU2hvcnRbX3RoaXM1Ni5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW1tbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYub3B0aW9ucy5pMThuLm1vbnRoc1tfdGhpczU2LmRhdGUuZ2V0TW9udGgoKV07XG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICgnJyArIF90aGlzNTYuZGF0ZS5nZXRGdWxsWWVhcigpKS5zbGljZSgyKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHl5eXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczU2LmRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZUlucHV0Q2hhbmdlQm91bmQpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDYWxlbmRhckNsaWNrQm91bmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dENsaWNrKCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0S2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEtleWRvd24oZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gTS5rZXlzLkVOVEVSKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDYWxlbmRhckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNhbGVuZGFyQ2xpY2soZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKCEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgaWYgKCR0YXJnZXQuaGFzQ2xhc3MoJ2RhdGVwaWNrZXItZGF5LWJ1dHRvbicpICYmICEkdGFyZ2V0Lmhhc0NsYXNzKCdpcy1lbXB0eScpICYmICEkdGFyZ2V0LnBhcmVudCgpLmhhc0NsYXNzKCdpcy1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGUobmV3IERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXllYXInKSwgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW1vbnRoJyksIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1kYXknKSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvQ2xvc2UpIHtcbiAgICAgICAgICAgICAgdGhpcy5fZmluaXNoU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgkdGFyZ2V0LmNsb3Nlc3QoJy5tb250aC1wcmV2JykubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZNb250aCgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoJHRhcmdldC5jbG9zZXN0KCcubW9udGgtbmV4dCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0TW9udGgoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNsZWFyQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2xlYXJDbGljaygpIHtcbiAgICAgICAgdGhpcy5kYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1vbnRoQ2hhbmdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1vbnRoQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5nb3RvTW9udGgoZS50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlWWVhckNoYW5nZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVZZWFyQ2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5nb3RvWWVhcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogY2hhbmdlIHZpZXcgdG8gYSBzcGVjaWZpYyBtb250aCAoemVyby1pbmRleCwgZS5nLiAwOiBKYW51YXJ5KVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ290b01vbnRoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ290b01vbnRoKG1vbnRoKSB7XG4gICAgICAgIGlmICghaXNOYU4obW9udGgpKSB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGggPSBwYXJzZUludChtb250aCwgMTApO1xuICAgICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBjaGFuZ2UgdmlldyB0byBhIHNwZWNpZmljIGZ1bGwgeWVhciAoZS5nLiBcIjIwMTJcIilcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdvdG9ZZWFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ290b1llYXIoeWVhcikge1xuICAgICAgICBpZiAoIWlzTmFOKHllYXIpKSB7XG4gICAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ueWVhciA9IHBhcnNlSW50KHllYXIsIDEwKTtcbiAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dENoYW5nZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgICAgIHZhciBkYXRlID0gdm9pZCAwO1xuXG4gICAgICAgIC8vIFByZXZlbnQgY2hhbmdlIGV2ZW50IGZyb20gYmVpbmcgZmlyZWQgd2hlbiB0cmlnZ2VyZWQgYnkgdGhlIHBsdWdpblxuICAgICAgICBpZiAoZS5maXJlZEJ5ID09PSB0aGlzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucGFyc2UpIHtcbiAgICAgICAgICBkYXRlID0gdGhpcy5vcHRpb25zLnBhcnNlKHRoaXMuZWwudmFsdWUsIHRoaXMub3B0aW9ucy5mb3JtYXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKHRoaXMuZWwudmFsdWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChEYXRlcGlja2VyLl9pc0RhdGUoZGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyRGF5TmFtZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckRheU5hbWUob3B0cywgZGF5LCBhYmJyKSB7XG4gICAgICAgIGRheSArPSBvcHRzLmZpcnN0RGF5O1xuICAgICAgICB3aGlsZSAoZGF5ID49IDcpIHtcbiAgICAgICAgICBkYXkgLT0gNztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWJiciA/IG9wdHMuaTE4bi53ZWVrZGF5c0FiYnJldltkYXldIDogb3B0cy5pMThuLndlZWtkYXlzW2RheV07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IGlucHV0IHZhbHVlIHRvIHRoZSBzZWxlY3RlZCBkYXRlIGFuZCBjbG9zZSBEYXRlcGlja2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZmluaXNoU2VsZWN0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmlzaFNlbGVjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zZXRJbnB1dFZhbHVlKCk7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIERhdGVwaWNrZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW4uY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5vcGVuKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIERhdGVwaWNrZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGFsLmNsb3NlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChEYXRlcGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGF0ZXBpY2tlciksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pc0RhdGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNEYXRlKG9iaikge1xuICAgICAgICByZXR1cm4gKC9EYXRlLy50ZXN0KE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopKSAmJiAhaXNOYU4ob2JqLmdldFRpbWUoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2lzV2Vla2VuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pc1dlZWtlbmQoZGF0ZSkge1xuICAgICAgICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgcmV0dXJuIGRheSA9PT0gMCB8fCBkYXkgPT09IDY7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRUb1N0YXJ0T2ZEYXlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0VG9TdGFydE9mRGF5KGRhdGUpIHtcbiAgICAgICAgaWYgKERhdGVwaWNrZXIuX2lzRGF0ZShkYXRlKSkgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2dldERheXNJbk1vbnRoXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBbMzEsIERhdGVwaWNrZXIuX2lzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9udGhdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaXNMZWFwWWVhclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pc0xlYXBZZWFyKHllYXIpIHtcbiAgICAgICAgLy8gc29sdXRpb24gYnkgTWF0dGkgVmlya2t1bmVuOiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80ODgxOTUxXG4gICAgICAgIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwIHx8IHllYXIgJSA0MDAgPT09IDA7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jb21wYXJlRGF0ZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY29tcGFyZURhdGVzKGEsIGIpIHtcbiAgICAgICAgLy8gd2VhayBkYXRlIGNvbXBhcmlzb24gKHVzZSBzZXRUb1N0YXJ0T2ZEYXkoZGF0ZSkgdG8gZW5zdXJlIGNvcnJlY3QgcmVzdWx0KVxuICAgICAgICByZXR1cm4gYS5nZXRUaW1lKCkgPT09IGIuZ2V0VGltZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0VG9TdGFydE9mRGF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFRvU3RhcnRPZkRheShkYXRlKSB7XG4gICAgICAgIGlmIChEYXRlcGlja2VyLl9pc0RhdGUoZGF0ZSkpIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX0RhdGVwaWNrZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRGF0ZXBpY2tlcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIERhdGVwaWNrZXIuX3RlbXBsYXRlID0gWyc8ZGl2IGNsYXNzPSBcIm1vZGFsIGRhdGVwaWNrZXItbW9kYWxcIj4nLCAnPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgZGF0ZXBpY2tlci1jb250YWluZXJcIj4nLCAnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZGF0ZS1kaXNwbGF5XCI+JywgJzxzcGFuIGNsYXNzPVwieWVhci10ZXh0XCI+PC9zcGFuPicsICc8c3BhbiBjbGFzcz1cImRhdGUtdGV4dFwiPjwvc3Bhbj4nLCAnPC9kaXY+JywgJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWNhbGVuZGFyLWNvbnRhaW5lclwiPicsICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jYWxlbmRhclwiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1mb290ZXJcIj4nLCAnPGJ1dHRvbiBjbGFzcz1cImJ0bi1mbGF0IGRhdGVwaWNrZXItY2xlYXIgd2F2ZXMtZWZmZWN0XCIgc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47XCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPicsICc8ZGl2IGNsYXNzPVwiY29uZmlybWF0aW9uLWJ0bnNcIj4nLCAnPGJ1dHRvbiBjbGFzcz1cImJ0bi1mbGF0IGRhdGVwaWNrZXItY2FuY2VsIHdhdmVzLWVmZmVjdFwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nLCAnPGJ1dHRvbiBjbGFzcz1cImJ0bi1mbGF0IGRhdGVwaWNrZXItZG9uZSB3YXZlcy1lZmZlY3RcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+JywgJzwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+JywgJzwvZGl2PicsICc8L2Rpdj4nXS5qb2luKCcnKTtcblxuICBNLkRhdGVwaWNrZXIgPSBEYXRlcGlja2VyO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoRGF0ZXBpY2tlciwgJ2RhdGVwaWNrZXInLCAnTV9EYXRlcGlja2VyJyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkaWFsUmFkaXVzOiAxMzUsXG4gICAgb3V0ZXJSYWRpdXM6IDEwNSxcbiAgICBpbm5lclJhZGl1czogNzAsXG4gICAgdGlja1JhZGl1czogMjAsXG4gICAgZHVyYXRpb246IDM1MCxcbiAgICBjb250YWluZXI6IG51bGwsXG4gICAgZGVmYXVsdFRpbWU6ICdub3cnLCAvLyBkZWZhdWx0IHRpbWUsICdub3cnIG9yICcxMzoxNCcgZS5nLlxuICAgIGZyb21Ob3c6IDAsIC8vIE1pbGxpc2Vjb25kIG9mZnNldCBmcm9tIHRoZSBkZWZhdWx0VGltZVxuICAgIHNob3dDbGVhckJ0bjogZmFsc2UsXG5cbiAgICAvLyBpbnRlcm5hdGlvbmFsaXphdGlvblxuICAgIGkxOG46IHtcbiAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICBjbGVhcjogJ0NsZWFyJyxcbiAgICAgIGRvbmU6ICdPaydcbiAgICB9LFxuXG4gICAgYXV0b0Nsb3NlOiBmYWxzZSwgLy8gYXV0byBjbG9zZSB3aGVuIG1pbnV0ZSBpcyBzZWxlY3RlZFxuICAgIHR3ZWx2ZUhvdXI6IHRydWUsIC8vIGNoYW5nZSB0byAxMiBob3VyIEFNL1BNIGNsb2NrIGZyb20gMjQgaG91clxuICAgIHZpYnJhdGU6IHRydWUsIC8vIHZpYnJhdGUgdGhlIGRldmljZSB3aGVuIGRyYWdnaW5nIGNsb2NrIGhhbmRcblxuICAgIC8vIENhbGxiYWNrc1xuICAgIG9uT3BlblN0YXJ0OiBudWxsLFxuICAgIG9uT3BlbkVuZDogbnVsbCxcbiAgICBvbkNsb3NlU3RhcnQ6IG51bGwsXG4gICAgb25DbG9zZUVuZDogbnVsbCxcbiAgICBvblNlbGVjdDogbnVsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFRpbWVwaWNrZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDE2KSB7XG4gICAgX2luaGVyaXRzKFRpbWVwaWNrZXIsIF9Db21wb25lbnQxNik7XG5cbiAgICBmdW5jdGlvbiBUaW1lcGlja2VyKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXBpY2tlcik7XG5cbiAgICAgIHZhciBfdGhpczU3ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRpbWVwaWNrZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUaW1lcGlja2VyKSkuY2FsbCh0aGlzLCBUaW1lcGlja2VyLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczU3LmVsLk1fVGltZXBpY2tlciA9IF90aGlzNTc7XG5cbiAgICAgIF90aGlzNTcub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBUaW1lcGlja2VyLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM1Ny5pZCA9IE0uZ3VpZCgpO1xuICAgICAgX3RoaXM1Ny5faW5zZXJ0SFRNTEludG9ET00oKTtcbiAgICAgIF90aGlzNTcuX3NldHVwTW9kYWwoKTtcbiAgICAgIF90aGlzNTcuX3NldHVwVmFyaWFibGVzKCk7XG4gICAgICBfdGhpczU3Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgX3RoaXM1Ny5fY2xvY2tTZXR1cCgpO1xuICAgICAgX3RoaXM1Ny5fcGlja2VyU2V0dXAoKTtcbiAgICAgIHJldHVybiBfdGhpczU3O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUaW1lcGlja2VyLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLm1vZGFsLmRlc3Ryb3koKTtcbiAgICAgICAgJCh0aGlzLm1vZGFsRWwpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmVsLk1fVGltZXBpY2tlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2xvY2tDbGlja1N0YXJ0Qm91bmQgPSB0aGlzLl9oYW5kbGVDbG9ja0NsaWNrU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja01vdmVCb3VuZCA9IHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRCb3VuZCA9IHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgICB0aGlzLnBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZUNsb2NrQ2xpY2tTdGFydEJvdW5kKTtcbiAgICAgICAgdGhpcy5wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5faGFuZGxlQ2xvY2tDbGlja1N0YXJ0Qm91bmQpO1xuXG4gICAgICAgICQodGhpcy5zcGFuSG91cnMpLm9uKCdjbGljaycsIHRoaXMuc2hvd1ZpZXcuYmluZCh0aGlzLCAnaG91cnMnKSk7XG4gICAgICAgICQodGhpcy5zcGFuTWludXRlcykub24oJ2NsaWNrJywgdGhpcy5zaG93Vmlldy5iaW5kKHRoaXMsICdtaW51dGVzJykpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dENsaWNrKCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0S2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEtleWRvd24oZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gTS5rZXlzLkVOVEVSKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDbG9ja0NsaWNrU3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2xvY2tDbGlja1N0YXJ0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgY2xvY2tQbGF0ZUJSID0gdGhpcy5wbGF0ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHsgeDogY2xvY2tQbGF0ZUJSLmxlZnQsIHk6IGNsb2NrUGxhdGVCUi50b3AgfTtcblxuICAgICAgICB0aGlzLngwID0gb2Zmc2V0LnggKyB0aGlzLm9wdGlvbnMuZGlhbFJhZGl1cztcbiAgICAgICAgdGhpcy55MCA9IG9mZnNldC55ICsgdGhpcy5vcHRpb25zLmRpYWxSYWRpdXM7XG4gICAgICAgIHRoaXMubW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNsaWNrUG9zID0gVGltZXBpY2tlci5fUG9zKGUpO1xuICAgICAgICB0aGlzLmR4ID0gY2xpY2tQb3MueCAtIHRoaXMueDA7XG4gICAgICAgIHRoaXMuZHkgPSBjbGlja1Bvcy55IC0gdGhpcy55MDtcblxuICAgICAgICAvLyBTZXQgY2xvY2sgaGFuZHNcbiAgICAgICAgdGhpcy5zZXRIYW5kKHRoaXMuZHgsIHRoaXMuZHksIGZhbHNlKTtcblxuICAgICAgICAvLyBNb3VzZW1vdmUgb24gZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja01vdmVCb3VuZCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlQm91bmQpO1xuXG4gICAgICAgIC8vIE1vdXNldXAgb24gZG9jdW1lbnRcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRCb3VuZCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0VuZEJvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgY2xpY2tQb3MgPSBUaW1lcGlja2VyLl9Qb3MoZSk7XG4gICAgICAgIHZhciB4ID0gY2xpY2tQb3MueCAtIHRoaXMueDA7XG4gICAgICAgIHZhciB5ID0gY2xpY2tQb3MueSAtIHRoaXMueTA7XG4gICAgICAgIHRoaXMubW92ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSwgZmFsc2UsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRG9jdW1lbnRDbGlja0VuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEb2N1bWVudENsaWNrRW5kKGUpIHtcbiAgICAgICAgdmFyIF90aGlzNTggPSB0aGlzO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRCb3VuZCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0VuZEJvdW5kKTtcbiAgICAgICAgdmFyIGNsaWNrUG9zID0gVGltZXBpY2tlci5fUG9zKGUpO1xuICAgICAgICB2YXIgeCA9IGNsaWNrUG9zLnggLSB0aGlzLngwO1xuICAgICAgICB2YXIgeSA9IGNsaWNrUG9zLnkgLSB0aGlzLnkwO1xuICAgICAgICBpZiAodGhpcy5tb3ZlZCAmJiB4ID09PSB0aGlzLmR4ICYmIHkgPT09IHRoaXMuZHkpIHtcbiAgICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmlldyA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgIHRoaXMuc2hvd1ZpZXcoJ21pbnV0ZXMnLCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgJCh0aGlzLm1pbnV0ZXNWaWV3KS5hZGRDbGFzcygndGltZXBpY2tlci1kaWFsLW91dCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM1OC5kb25lKCk7XG4gICAgICAgICAgfSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdC5jYWxsKHRoaXMsIHRoaXMuaG91cnMsIHRoaXMubWludXRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmJpbmQgbW91c2Vtb3ZlIGV2ZW50XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrTW92ZUJvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2luc2VydEhUTUxJbnRvRE9NXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydEhUTUxJbnRvRE9NKCkge1xuICAgICAgICB0aGlzLiRtb2RhbEVsID0gJChUaW1lcGlja2VyLl90ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMubW9kYWxFbCA9IHRoaXMuJG1vZGFsRWxbMF07XG4gICAgICAgIHRoaXMubW9kYWxFbC5pZCA9ICdtb2RhbC0nICsgdGhpcy5pZDtcblxuICAgICAgICAvLyBBcHBlbmQgcG9wb3ZlciB0byBpbnB1dCBieSBkZWZhdWx0XG4gICAgICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb25zLmNvbnRhaW5lcik7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGFpbmVyICYmICEhY29udGFpbmVyRWwpIHtcbiAgICAgICAgICB0aGlzLiRtb2RhbEVsLmFwcGVuZFRvKGNvbnRhaW5lckVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLiRtb2RhbEVsLmluc2VydEJlZm9yZSh0aGlzLmVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBNb2RhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cE1vZGFsKCkge1xuICAgICAgICB2YXIgX3RoaXM1OSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tb2RhbCA9IE0uTW9kYWwuaW5pdCh0aGlzLm1vZGFsRWwsIHtcbiAgICAgICAgICBvbk9wZW5TdGFydDogdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0LFxuICAgICAgICAgIG9uT3BlbkVuZDogdGhpcy5vcHRpb25zLm9uT3BlbkVuZCxcbiAgICAgICAgICBvbkNsb3NlU3RhcnQ6IHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQsXG4gICAgICAgICAgb25DbG9zZUVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczU5Lm9wdGlvbnMub25DbG9zZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczU5Lm9wdGlvbnMub25DbG9zZUVuZC5jYWxsKF90aGlzNTkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXM1OS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBWYXJpYWJsZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBWYXJpYWJsZXMoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZXcgPSAnaG91cnMnO1xuICAgICAgICB0aGlzLnZpYnJhdGUgPSBuYXZpZ2F0b3IudmlicmF0ZSA/ICd2aWJyYXRlJyA6IG5hdmlnYXRvci53ZWJraXRWaWJyYXRlID8gJ3dlYmtpdFZpYnJhdGUnIDogbnVsbDtcblxuICAgICAgICB0aGlzLl9jYW52YXMgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnRpbWVwaWNrZXItY2FudmFzJyk7XG4gICAgICAgIHRoaXMucGxhdGUgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnRpbWVwaWNrZXItcGxhdGUnKTtcblxuICAgICAgICB0aGlzLmhvdXJzVmlldyA9IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcudGltZXBpY2tlci1ob3VycycpO1xuICAgICAgICB0aGlzLm1pbnV0ZXNWaWV3ID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLW1pbnV0ZXMnKTtcbiAgICAgICAgdGhpcy5zcGFuSG91cnMgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnRpbWVwaWNrZXItc3Bhbi1ob3VycycpO1xuICAgICAgICB0aGlzLnNwYW5NaW51dGVzID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLXNwYW4tbWludXRlcycpO1xuICAgICAgICB0aGlzLnNwYW5BbVBtID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLXNwYW4tYW0tcG0nKTtcbiAgICAgICAgdGhpcy5mb290ZXIgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnRpbWVwaWNrZXItZm9vdGVyJyk7XG4gICAgICAgIHRoaXMuYW1PclBtID0gJ1BNJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3BpY2tlclNldHVwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3BpY2tlclNldHVwKCkge1xuICAgICAgICB2YXIgJGNsZWFyQnRuID0gJChcIjxidXR0b24gY2xhc3M9XFxcImJ0bi1mbGF0IHRpbWVwaWNrZXItY2xlYXIgd2F2ZXMtZWZmZWN0XFxcIiBzdHlsZT1cXFwidmlzaWJpbGl0eTogaGlkZGVuO1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiXCIgKyAodGhpcy5vcHRpb25zLnR3ZWx2ZUhvdXIgPyAnMycgOiAnMScpICsgXCJcXFwiPlwiICsgdGhpcy5vcHRpb25zLmkxOG4uY2xlYXIgKyBcIjwvYnV0dG9uPlwiKS5hcHBlbmRUbyh0aGlzLmZvb3Rlcikub24oJ2NsaWNrJywgdGhpcy5jbGVhci5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93Q2xlYXJCdG4pIHtcbiAgICAgICAgICAkY2xlYXJCdG4uY3NzKHsgdmlzaWJpbGl0eTogJycgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29uZmlybWF0aW9uQnRuc0NvbnRhaW5lciA9ICQoJzxkaXYgY2xhc3M9XCJjb25maXJtYXRpb24tYnRuc1wiPjwvZGl2PicpO1xuICAgICAgICAkKCc8YnV0dG9uIGNsYXNzPVwiYnRuLWZsYXQgdGltZXBpY2tlci1jbG9zZSB3YXZlcy1lZmZlY3RcIiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCInICsgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyID8gJzMnIDogJzEnKSArICdcIj4nICsgdGhpcy5vcHRpb25zLmkxOG4uY2FuY2VsICsgJzwvYnV0dG9uPicpLmFwcGVuZFRvKGNvbmZpcm1hdGlvbkJ0bnNDb250YWluZXIpLm9uKCdjbGljaycsIHRoaXMuY2xvc2UuYmluZCh0aGlzKSk7XG4gICAgICAgICQoJzxidXR0b24gY2xhc3M9XCJidG4tZmxhdCB0aW1lcGlja2VyLWNsb3NlIHdhdmVzLWVmZmVjdFwiIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIicgKyAodGhpcy5vcHRpb25zLnR3ZWx2ZUhvdXIgPyAnMycgOiAnMScpICsgJ1wiPicgKyB0aGlzLm9wdGlvbnMuaTE4bi5kb25lICsgJzwvYnV0dG9uPicpLmFwcGVuZFRvKGNvbmZpcm1hdGlvbkJ0bnNDb250YWluZXIpLm9uKCdjbGljaycsIHRoaXMuZG9uZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgY29uZmlybWF0aW9uQnRuc0NvbnRhaW5lci5hcHBlbmRUbyh0aGlzLmZvb3Rlcik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jbG9ja1NldHVwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2Nsb2NrU2V0dXAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgIHRoaXMuJGFtQnRuID0gJCgnPGRpdiBjbGFzcz1cImFtLWJ0blwiPkFNPC9kaXY+Jyk7XG4gICAgICAgICAgdGhpcy4kcG1CdG4gPSAkKCc8ZGl2IGNsYXNzPVwicG0tYnRuXCI+UE08L2Rpdj4nKTtcbiAgICAgICAgICB0aGlzLiRhbUJ0bi5vbignY2xpY2snLCB0aGlzLl9oYW5kbGVBbVBtQ2xpY2suYmluZCh0aGlzKSkuYXBwZW5kVG8odGhpcy5zcGFuQW1QbSk7XG4gICAgICAgICAgdGhpcy4kcG1CdG4ub24oJ2NsaWNrJywgdGhpcy5faGFuZGxlQW1QbUNsaWNrLmJpbmQodGhpcykpLmFwcGVuZFRvKHRoaXMuc3BhbkFtUG0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYnVpbGRIb3Vyc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5fYnVpbGRNaW51dGVzVmlldygpO1xuICAgICAgICB0aGlzLl9idWlsZFNWR0Nsb2NrKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9idWlsZFNWR0Nsb2NrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkU1ZHQ2xvY2soKSB7XG4gICAgICAgIC8vIERyYXcgY2xvY2sgaGFuZHMgYW5kIG90aGVyc1xuICAgICAgICB2YXIgZGlhbFJhZGl1cyA9IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzO1xuICAgICAgICB2YXIgdGlja1JhZGl1cyA9IHRoaXMub3B0aW9ucy50aWNrUmFkaXVzO1xuICAgICAgICB2YXIgZGlhbWV0ZXIgPSBkaWFsUmFkaXVzICogMjtcblxuICAgICAgICB2YXIgc3ZnID0gVGltZXBpY2tlci5fY3JlYXRlU1ZHRWwoJ3N2ZycpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aW1lcGlja2VyLXN2ZycpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIGRpYW1ldGVyKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgZGlhbWV0ZXIpO1xuICAgICAgICB2YXIgZyA9IFRpbWVwaWNrZXIuX2NyZWF0ZVNWR0VsKCdnJyk7XG4gICAgICAgIGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBkaWFsUmFkaXVzICsgJywnICsgZGlhbFJhZGl1cyArICcpJyk7XG4gICAgICAgIHZhciBiZWFyaW5nID0gVGltZXBpY2tlci5fY3JlYXRlU1ZHRWwoJ2NpcmNsZScpO1xuICAgICAgICBiZWFyaW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZXBpY2tlci1jYW52YXMtYmVhcmluZycpO1xuICAgICAgICBiZWFyaW5nLnNldEF0dHJpYnV0ZSgnY3gnLCAwKTtcbiAgICAgICAgYmVhcmluZy5zZXRBdHRyaWJ1dGUoJ2N5JywgMCk7XG4gICAgICAgIGJlYXJpbmcuc2V0QXR0cmlidXRlKCdyJywgNCk7XG4gICAgICAgIHZhciBoYW5kID0gVGltZXBpY2tlci5fY3JlYXRlU1ZHRWwoJ2xpbmUnKTtcbiAgICAgICAgaGFuZC5zZXRBdHRyaWJ1dGUoJ3gxJywgMCk7XG4gICAgICAgIGhhbmQuc2V0QXR0cmlidXRlKCd5MScsIDApO1xuICAgICAgICB2YXIgYmcgPSBUaW1lcGlja2VyLl9jcmVhdGVTVkdFbCgnY2lyY2xlJyk7XG4gICAgICAgIGJnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZXBpY2tlci1jYW52YXMtYmcnKTtcbiAgICAgICAgYmcuc2V0QXR0cmlidXRlKCdyJywgdGlja1JhZGl1cyk7XG4gICAgICAgIGcuYXBwZW5kQ2hpbGQoaGFuZCk7XG4gICAgICAgIGcuYXBwZW5kQ2hpbGQoYmcpO1xuICAgICAgICBnLmFwcGVuZENoaWxkKGJlYXJpbmcpO1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZyk7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgICAgIHRoaXMuaGFuZCA9IGhhbmQ7XG4gICAgICAgIHRoaXMuYmcgPSBiZztcbiAgICAgICAgdGhpcy5iZWFyaW5nID0gYmVhcmluZztcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2J1aWxkSG91cnNWaWV3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkSG91cnNWaWV3KCkge1xuICAgICAgICB2YXIgJHRpY2sgPSAkKCc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci10aWNrXCI+PC9kaXY+Jyk7XG4gICAgICAgIC8vIEhvdXJzIHZpZXdcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCAxMzsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgdGljayA9ICR0aWNrLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xuICAgICAgICAgICAgdmFyIHJhZGl1cyA9IHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cztcbiAgICAgICAgICAgIHRpY2suY3NzKHtcbiAgICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRpb25zLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMgKyAncHgnLFxuICAgICAgICAgICAgICB0b3A6IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMub3B0aW9ucy50aWNrUmFkaXVzICsgJ3B4J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aWNrLmh0bWwoaSA9PT0gMCA/ICcwMCcgOiBpKTtcbiAgICAgICAgICAgIHRoaXMuaG91cnNWaWV3LmFwcGVuZENoaWxkKHRpY2tbMF0pO1xuICAgICAgICAgICAgLy8gdGljay5vbihtb3VzZWRvd25FdmVudCwgbW91c2Vkb3duKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgMjQ7IF9pMiArPSAxKSB7XG4gICAgICAgICAgICB2YXIgX3RpY2sgPSAkdGljay5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIF9yYWRpYW4gPSBfaTIgLyA2ICogTWF0aC5QSTtcbiAgICAgICAgICAgIHZhciBpbm5lciA9IF9pMiA+IDAgJiYgX2kyIDwgMTM7XG4gICAgICAgICAgICB2YXIgX3JhZGl1cyA9IGlubmVyID8gdGhpcy5vcHRpb25zLmlubmVyUmFkaXVzIDogdGhpcy5vcHRpb25zLm91dGVyUmFkaXVzO1xuICAgICAgICAgICAgX3RpY2suY3NzKHtcbiAgICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRpb25zLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihfcmFkaWFuKSAqIF9yYWRpdXMgLSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cyArICdweCcsXG4gICAgICAgICAgICAgIHRvcDogdGhpcy5vcHRpb25zLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhfcmFkaWFuKSAqIF9yYWRpdXMgLSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cyArICdweCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RpY2suaHRtbChfaTIgPT09IDAgPyAnMDAnIDogX2kyKTtcbiAgICAgICAgICAgIHRoaXMuaG91cnNWaWV3LmFwcGVuZENoaWxkKF90aWNrWzBdKTtcbiAgICAgICAgICAgIC8vIHRpY2sub24obW91c2Vkb3duRXZlbnQsIG1vdXNlZG93bik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9idWlsZE1pbnV0ZXNWaWV3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2J1aWxkTWludXRlc1ZpZXcoKSB7XG4gICAgICAgIHZhciAkdGljayA9ICQoJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLXRpY2tcIj48L2Rpdj4nKTtcbiAgICAgICAgLy8gTWludXRlcyB2aWV3XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjA7IGkgKz0gNSkge1xuICAgICAgICAgIHZhciB0aWNrID0gJHRpY2suY2xvbmUoKTtcbiAgICAgICAgICB2YXIgcmFkaWFuID0gaSAvIDMwICogTWF0aC5QSTtcbiAgICAgICAgICB0aWNrLmNzcyh7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLm9wdGlvbnMuZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXMgLSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cyArICdweCcsXG4gICAgICAgICAgICB0b3A6IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cyAtIHRoaXMub3B0aW9ucy50aWNrUmFkaXVzICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRpY2suaHRtbChUaW1lcGlja2VyLl9hZGRMZWFkaW5nWmVybyhpKSk7XG4gICAgICAgICAgdGhpcy5taW51dGVzVmlldy5hcHBlbmRDaGlsZCh0aWNrWzBdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQW1QbUNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUFtUG1DbGljayhlKSB7XG4gICAgICAgIHZhciAkYnRuQ2xpY2tlZCA9ICQoZS50YXJnZXQpO1xuICAgICAgICB0aGlzLmFtT3JQbSA9ICRidG5DbGlja2VkLmhhc0NsYXNzKCdhbS1idG4nKSA/ICdBTScgOiAnUE0nO1xuICAgICAgICB0aGlzLl91cGRhdGVBbVBtVmlldygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlQW1QbVZpZXdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlQW1QbVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgIHRoaXMuJGFtQnRuLnRvZ2dsZUNsYXNzKCd0ZXh0LXByaW1hcnknLCB0aGlzLmFtT3JQbSA9PT0gJ0FNJyk7XG4gICAgICAgICAgdGhpcy4kcG1CdG4udG9nZ2xlQ2xhc3MoJ3RleHQtcHJpbWFyeScsIHRoaXMuYW1PclBtID09PSAnUE0nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlVGltZUZyb21JbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVUaW1lRnJvbUlucHV0KCkge1xuICAgICAgICAvLyBHZXQgdGhlIHRpbWVcbiAgICAgICAgdmFyIHZhbHVlID0gKCh0aGlzLmVsLnZhbHVlIHx8IHRoaXMub3B0aW9ucy5kZWZhdWx0VGltZSB8fCAnJykgKyAnJykuc3BsaXQoJzonKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyICYmICEodHlwZW9mIHZhbHVlWzFdID09PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICBpZiAodmFsdWVbMV0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdBTScpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hbU9yUG0gPSAnQU0nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFtT3JQbSA9ICdQTSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlWzFdID0gdmFsdWVbMV0ucmVwbGFjZSgnQU0nLCAnJykucmVwbGFjZSgnUE0nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlWzBdID09PSAnbm93Jykge1xuICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgrbmV3IERhdGUoKSArIHRoaXMub3B0aW9ucy5mcm9tTm93KTtcbiAgICAgICAgICB2YWx1ZSA9IFtub3cuZ2V0SG91cnMoKSwgbm93LmdldE1pbnV0ZXMoKV07XG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgICB0aGlzLmFtT3JQbSA9IHZhbHVlWzBdID49IDEyICYmIHZhbHVlWzBdIDwgMjQgPyAnUE0nIDogJ0FNJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ob3VycyA9ICt2YWx1ZVswXSB8fCAwO1xuICAgICAgICB0aGlzLm1pbnV0ZXMgPSArdmFsdWVbMV0gfHwgMDtcbiAgICAgICAgdGhpcy5zcGFuSG91cnMuaW5uZXJIVE1MID0gdGhpcy5ob3VycztcbiAgICAgICAgdGhpcy5zcGFuTWludXRlcy5pbm5lckhUTUwgPSBUaW1lcGlja2VyLl9hZGRMZWFkaW5nWmVybyh0aGlzLm1pbnV0ZXMpO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUFtUG1WaWV3KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNob3dWaWV3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1ZpZXcodmlldywgZGVsYXkpIHtcbiAgICAgICAgaWYgKHZpZXcgPT09ICdtaW51dGVzJyAmJiAkKHRoaXMuaG91cnNWaWV3KS5jc3MoJ3Zpc2liaWxpdHknKSA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgLy8gcmFpc2VDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlSG91clNlbGVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzSG91cnMgPSB2aWV3ID09PSAnaG91cnMnLFxuICAgICAgICAgICAgbmV4dFZpZXcgPSBpc0hvdXJzID8gdGhpcy5ob3Vyc1ZpZXcgOiB0aGlzLm1pbnV0ZXNWaWV3LFxuICAgICAgICAgICAgaGlkZVZpZXcgPSBpc0hvdXJzID8gdGhpcy5taW51dGVzVmlldyA6IHRoaXMuaG91cnNWaWV3O1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gdmlldztcblxuICAgICAgICAkKHRoaXMuc3BhbkhvdXJzKS50b2dnbGVDbGFzcygndGV4dC1wcmltYXJ5JywgaXNIb3Vycyk7XG4gICAgICAgICQodGhpcy5zcGFuTWludXRlcykudG9nZ2xlQ2xhc3MoJ3RleHQtcHJpbWFyeScsICFpc0hvdXJzKTtcblxuICAgICAgICAvLyBUcmFuc2l0aW9uIHZpZXdcbiAgICAgICAgaGlkZVZpZXcuY2xhc3NMaXN0LmFkZCgndGltZXBpY2tlci1kaWFsLW91dCcpO1xuICAgICAgICAkKG5leHRWaWV3KS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpLnJlbW92ZUNsYXNzKCd0aW1lcGlja2VyLWRpYWwtb3V0Jyk7XG5cbiAgICAgICAgLy8gUmVzZXQgY2xvY2sgaGFuZFxuICAgICAgICB0aGlzLnJlc2V0Q2xvY2soZGVsYXkpO1xuXG4gICAgICAgIC8vIEFmdGVyIHRyYW5zaXRpb25zIGVuZGVkXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRvZ2dsZVZpZXdUaW1lcik7XG4gICAgICAgIHRoaXMudG9nZ2xlVmlld1RpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJChoaWRlVmlldykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZXNldENsb2NrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXRDbG9jayhkZWxheSkge1xuICAgICAgICB2YXIgdmlldyA9IHRoaXMuY3VycmVudFZpZXcsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXNbdmlld10sXG4gICAgICAgICAgICBpc0hvdXJzID0gdmlldyA9PT0gJ2hvdXJzJyxcbiAgICAgICAgICAgIHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgPyA2IDogMzApLFxuICAgICAgICAgICAgcmFkaWFuID0gdmFsdWUgKiB1bml0LFxuICAgICAgICAgICAgcmFkaXVzID0gaXNIb3VycyAmJiB2YWx1ZSA+IDAgJiYgdmFsdWUgPCAxMyA/IHRoaXMub3B0aW9ucy5pbm5lclJhZGl1cyA6IHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cyxcbiAgICAgICAgICAgIHggPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxuICAgICAgICAgICAgeSA9IC1NYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzLFxuICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGRlbGF5KSB7XG4gICAgICAgICAgJCh0aGlzLmNhbnZhcykuYWRkQ2xhc3MoJ3RpbWVwaWNrZXItY2FudmFzLW91dCcpO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJChzZWxmLmNhbnZhcykucmVtb3ZlQ2xhc3MoJ3RpbWVwaWNrZXItY2FudmFzLW91dCcpO1xuICAgICAgICAgICAgc2VsZi5zZXRIYW5kKHgsIHkpO1xuICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0SGFuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldEhhbmQoeCwgeSwgcm91bmRCeTUpIHtcbiAgICAgICAgdmFyIF90aGlzNjAgPSB0aGlzO1xuXG4gICAgICAgIHZhciByYWRpYW4gPSBNYXRoLmF0YW4yKHgsIC15KSxcbiAgICAgICAgICAgIGlzSG91cnMgPSB0aGlzLmN1cnJlbnRWaWV3ID09PSAnaG91cnMnLFxuICAgICAgICAgICAgdW5pdCA9IE1hdGguUEkgLyAoaXNIb3VycyB8fCByb3VuZEJ5NSA/IDYgOiAzMCksXG4gICAgICAgICAgICB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpLFxuICAgICAgICAgICAgaW5uZXIgPSBpc0hvdXJzICYmIHogPCAodGhpcy5vcHRpb25zLm91dGVyUmFkaXVzICsgdGhpcy5vcHRpb25zLmlubmVyUmFkaXVzKSAvIDIsXG4gICAgICAgICAgICByYWRpdXMgPSBpbm5lciA/IHRoaXMub3B0aW9ucy5pbm5lclJhZGl1cyA6IHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnR3ZWx2ZUhvdXIpIHtcbiAgICAgICAgICByYWRpdXMgPSB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSYWRpYW4gc2hvdWxkIGluIHJhbmdlIFswLCAyUEldXG4gICAgICAgIGlmIChyYWRpYW4gPCAwKSB7XG4gICAgICAgICAgcmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgdGhlIHJvdW5kIHZhbHVlXG4gICAgICAgIHZhciB2YWx1ZSA9IE1hdGgucm91bmQocmFkaWFuIC8gdW5pdCk7XG5cbiAgICAgICAgLy8gR2V0IHRoZSByb3VuZCByYWRpYW5cbiAgICAgICAgcmFkaWFuID0gdmFsdWUgKiB1bml0O1xuXG4gICAgICAgIC8vIENvcnJlY3QgdGhlIGhvdXJzIG9yIG1pbnV0ZXNcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgaWYgKGlzSG91cnMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkgdmFsdWUgPSAxMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJvdW5kQnk1KSB2YWx1ZSAqPSA1O1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA2MCkgdmFsdWUgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoaXNIb3Vycykge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAxMikge1xuICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IGlubmVyID8gdmFsdWUgPT09IDAgPyAxMiA6IHZhbHVlIDogdmFsdWUgPT09IDAgPyAwIDogdmFsdWUgKyAxMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJvdW5kQnk1KSB7XG4gICAgICAgICAgICAgIHZhbHVlICo9IDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDYwKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmNlIGhvdXJzIG9yIG1pbnV0ZXMgY2hhbmdlZCwgdmlicmF0ZSB0aGUgZGV2aWNlXG4gICAgICAgIGlmICh0aGlzW3RoaXMuY3VycmVudFZpZXddICE9PSB2YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLnZpYnJhdGUgJiYgdGhpcy5vcHRpb25zLnZpYnJhdGUpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdCB2aWJyYXRlIHRvbyBmcmVxdWVudGx5XG4gICAgICAgICAgICBpZiAoIXRoaXMudmlicmF0ZVRpbWVyKSB7XG4gICAgICAgICAgICAgIG5hdmlnYXRvclt0aGlzLnZpYnJhdGVdKDEwKTtcbiAgICAgICAgICAgICAgdGhpcy52aWJyYXRlVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpczYwLnZpYnJhdGVUaW1lciA9IG51bGw7XG4gICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1t0aGlzLmN1cnJlbnRWaWV3XSA9IHZhbHVlO1xuICAgICAgICBpZiAoaXNIb3Vycykge1xuICAgICAgICAgIHRoaXNbJ3NwYW5Ib3VycyddLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXNbJ3NwYW5NaW51dGVzJ10uaW5uZXJIVE1MID0gVGltZXBpY2tlci5fYWRkTGVhZGluZ1plcm8odmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGNsb2NrIGhhbmQgYW5kIG90aGVycycgcG9zaXRpb25cbiAgICAgICAgdmFyIGN4MSA9IE1hdGguc2luKHJhZGlhbikgKiAocmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMpLFxuICAgICAgICAgICAgY3kxID0gLU1hdGguY29zKHJhZGlhbikgKiAocmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMpLFxuICAgICAgICAgICAgY3gyID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIGN5MiA9IC1NYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuICAgICAgICB0aGlzLmhhbmQuc2V0QXR0cmlidXRlKCd4MicsIGN4MSk7XG4gICAgICAgIHRoaXMuaGFuZC5zZXRBdHRyaWJ1dGUoJ3kyJywgY3kxKTtcbiAgICAgICAgdGhpcy5iZy5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gyKTtcbiAgICAgICAgdGhpcy5iZy5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kyKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVGltZUZyb21JbnB1dCgpO1xuICAgICAgICB0aGlzLnNob3dWaWV3KCdob3VycycpO1xuXG4gICAgICAgIHRoaXMubW9kYWwub3BlbigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpbmlzaCB0aW1lcGlja2VyIHNlbGVjdGlvbi5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRvbmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkb25lKGUsIGNsZWFyVmFsdWUpIHtcbiAgICAgICAgLy8gU2V0IGlucHV0IHZhbHVlXG4gICAgICAgIHZhciBsYXN0ID0gdGhpcy5lbC52YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlID0gY2xlYXJWYWx1ZSA/ICcnIDogVGltZXBpY2tlci5fYWRkTGVhZGluZ1plcm8odGhpcy5ob3VycykgKyAnOicgKyBUaW1lcGlja2VyLl9hZGRMZWFkaW5nWmVybyh0aGlzLm1pbnV0ZXMpO1xuICAgICAgICB0aGlzLnRpbWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKCFjbGVhclZhbHVlICYmIHRoaXMub3B0aW9ucy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSArIFwiIFwiICsgdGhpcy5hbU9yUG07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbGFzdCkge1xuICAgICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsZWFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuZG9uZShudWxsLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoVGltZXBpY2tlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRpbWVwaWNrZXIpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYWRkTGVhZGluZ1plcm9cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWRkTGVhZGluZ1plcm8obnVtKSB7XG4gICAgICAgIHJldHVybiAobnVtIDwgMTAgPyAnMCcgOiAnJykgKyBudW07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jcmVhdGVTVkdFbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVTVkdFbChuYW1lKSB7XG4gICAgICAgIHZhciBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFBvaW50XG4gICAgICAgKiBAcHJvcGVydHkge251bWJlcn0geCBUaGUgWCBDb29yZGluYXRlXG4gICAgICAgKiBAcHJvcGVydHkge251bWJlcn0geSBUaGUgWSBDb29yZGluYXRlXG4gICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgeCBwb3NpdGlvbiBvZiBtb3VzZSBvciB0b3VjaCBldmVudFxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICogQHJldHVybiB7UG9pbnR9IHggYW5kIHkgbG9jYXRpb25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9Qb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfUG9zKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4geyB4OiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WCwgeTogZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFkgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICByZXR1cm4geyB4OiBlLmNsaWVudFgsIHk6IGUuY2xpZW50WSB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9UaW1lcGlja2VyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRpbWVwaWNrZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBUaW1lcGlja2VyLl90ZW1wbGF0ZSA9IFsnPGRpdiBjbGFzcz0gXCJtb2RhbCB0aW1lcGlja2VyLW1vZGFsXCI+JywgJzxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IHRpbWVwaWNrZXItY29udGFpbmVyXCI+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWRpZ2l0YWwtZGlzcGxheVwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci10ZXh0LWNvbnRhaW5lclwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1kaXNwbGF5LWNvbHVtblwiPicsICc8c3BhbiBjbGFzcz1cInRpbWVwaWNrZXItc3Bhbi1ob3VycyB0ZXh0LXByaW1hcnlcIj48L3NwYW4+JywgJzonLCAnPHNwYW4gY2xhc3M9XCJ0aW1lcGlja2VyLXNwYW4tbWludXRlc1wiPjwvc3Bhbj4nLCAnPC9kaXY+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWRpc3BsYXktY29sdW1uIHRpbWVwaWNrZXItZGlzcGxheS1hbS1wbVwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1zcGFuLWFtLXBtXCI+PC9kaXY+JywgJzwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWFuYWxvZy1kaXNwbGF5XCI+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLXBsYXRlXCI+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWNhbnZhc1wiPjwvZGl2PicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1kaWFsIHRpbWVwaWNrZXItaG91cnNcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItZGlhbCB0aW1lcGlja2VyLW1pbnV0ZXMgdGltZXBpY2tlci1kaWFsLW91dFwiPjwvZGl2PicsICc8L2Rpdj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItZm9vdGVyXCI+PC9kaXY+JywgJzwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+J10uam9pbignJyk7XG5cbiAgTS5UaW1lcGlja2VyID0gVGltZXBpY2tlcjtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKFRpbWVwaWNrZXIsICd0aW1lcGlja2VyJywgJ01fVGltZXBpY2tlcicpO1xuICB9XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7fTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBDaGFyYWN0ZXJDb3VudGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQxNykge1xuICAgIF9pbmhlcml0cyhDaGFyYWN0ZXJDb3VudGVyLCBfQ29tcG9uZW50MTcpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IENoYXJhY3RlckNvdW50ZXIgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDaGFyYWN0ZXJDb3VudGVyKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhcmFjdGVyQ291bnRlcik7XG5cbiAgICAgIHZhciBfdGhpczYxID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENoYXJhY3RlckNvdW50ZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGFyYWN0ZXJDb3VudGVyKSkuY2FsbCh0aGlzLCBDaGFyYWN0ZXJDb3VudGVyLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczYxLmVsLk1fQ2hhcmFjdGVyQ291bnRlciA9IF90aGlzNjE7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIGNoYXJhY3RlciBjb3VudGVyXG4gICAgICAgKi9cbiAgICAgIF90aGlzNjEub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDaGFyYWN0ZXJDb3VudGVyLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM2MS5pc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgIF90aGlzNjEuaXNWYWxpZExlbmd0aCA9IGZhbHNlO1xuICAgICAgX3RoaXM2MS5fc2V0dXBDb3VudGVyKCk7XG4gICAgICBfdGhpczYxLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczYxO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDaGFyYWN0ZXJDb3VudGVyLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLkNoYXJhY3RlckNvdW50ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3JlbW92ZUNvdW50ZXIoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVVwZGF0ZUNvdW50ZXJCb3VuZCA9IHRoaXMudXBkYXRlQ291bnRlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVVcGRhdGVDb3VudGVyQm91bmQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5faGFuZGxlVXBkYXRlQ291bnRlckJvdW5kLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVVcGRhdGVDb3VudGVyQm91bmQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5faGFuZGxlVXBkYXRlQ291bnRlckJvdW5kLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBjb3VudGVyIGVsZW1lbnRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cENvdW50ZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBDb3VudGVyKCkge1xuICAgICAgICB0aGlzLmNvdW50ZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgJCh0aGlzLmNvdW50ZXJFbCkuYWRkQ2xhc3MoJ2NoYXJhY3Rlci1jb3VudGVyJykuY3NzKHtcbiAgICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgICAnZm9udC1zaXplJzogJzEycHgnLFxuICAgICAgICAgIGhlaWdodDogMVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRlbC5wYXJlbnQoKS5hcHBlbmQodGhpcy5jb3VudGVyRWwpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBjb3VudGVyIGVsZW1lbnRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVDb3VudGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUNvdW50ZXIoKSB7XG4gICAgICAgICQodGhpcy5jb3VudGVyRWwpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVwZGF0ZSBjb3VudGVyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ1cGRhdGVDb3VudGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlQ291bnRlcigpIHtcbiAgICAgICAgdmFyIG1heExlbmd0aCA9ICt0aGlzLiRlbC5hdHRyKCdkYXRhLWxlbmd0aCcpLFxuICAgICAgICAgICAgYWN0dWFsTGVuZ3RoID0gdGhpcy5lbC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIHRoaXMuaXNWYWxpZExlbmd0aCA9IGFjdHVhbExlbmd0aCA8PSBtYXhMZW5ndGg7XG4gICAgICAgIHZhciBjb3VudGVyU3RyaW5nID0gYWN0dWFsTGVuZ3RoO1xuXG4gICAgICAgIGlmIChtYXhMZW5ndGgpIHtcbiAgICAgICAgICBjb3VudGVyU3RyaW5nICs9ICcvJyArIG1heExlbmd0aDtcbiAgICAgICAgICB0aGlzLl92YWxpZGF0ZUlucHV0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuY291bnRlckVsKS5odG1sKGNvdW50ZXJTdHJpbmcpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCB2YWxpZGF0aW9uIGNsYXNzZXNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl92YWxpZGF0ZUlucHV0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3ZhbGlkYXRlSW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRMZW5ndGggJiYgdGhpcy5pc0ludmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmlzSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNWYWxpZExlbmd0aCAmJiAhdGhpcy5pc0ludmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmlzSW52YWxpZCA9IHRydWU7XG4gICAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChDaGFyYWN0ZXJDb3VudGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2hhcmFjdGVyQ291bnRlciksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX0NoYXJhY3RlckNvdW50ZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ2hhcmFjdGVyQ291bnRlcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uQ2hhcmFjdGVyQ291bnRlciA9IENoYXJhY3RlckNvdW50ZXI7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihDaGFyYWN0ZXJDb3VudGVyLCAnY2hhcmFjdGVyQ291bnRlcicsICdNX0NoYXJhY3RlckNvdW50ZXInKTtcbiAgfVxufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGR1cmF0aW9uOiAyMDAsIC8vIG1zXG4gICAgZGlzdDogLTEwMCwgLy8gem9vbSBzY2FsZSBUT0RPOiBtYWtlIHRoaXMgbW9yZSBpbnR1aXRpdmUgYXMgYW4gb3B0aW9uXG4gICAgc2hpZnQ6IDAsIC8vIHNwYWNpbmcgZm9yIGNlbnRlciBpbWFnZVxuICAgIHBhZGRpbmc6IDAsIC8vIFBhZGRpbmcgYmV0d2VlbiBub24gY2VudGVyIGl0ZW1zXG4gICAgbnVtVmlzaWJsZTogNSwgLy8gTnVtYmVyIG9mIHZpc2libGUgaXRlbXMgaW4gY2Fyb3VzZWxcbiAgICBmdWxsV2lkdGg6IGZhbHNlLCAvLyBDaGFuZ2UgdG8gZnVsbCB3aWR0aCBzdHlsZXNcbiAgICBpbmRpY2F0b3JzOiBmYWxzZSwgLy8gVG9nZ2xlIGluZGljYXRvcnNcbiAgICBub1dyYXA6IGZhbHNlLCAvLyBEb24ndCB3cmFwIGFyb3VuZCBhbmQgY3ljbGUgdGhyb3VnaCBpdGVtcy5cbiAgICBvbkN5Y2xlVG86IG51bGwgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gYSBuZXcgc2xpZGUgaXMgY3ljbGVkIHRvLlxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIENhcm91c2VsID0gZnVuY3Rpb24gKF9Db21wb25lbnQxOCkge1xuICAgIF9pbmhlcml0cyhDYXJvdXNlbCwgX0NvbXBvbmVudDE4KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBDYXJvdXNlbCBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIENhcm91c2VsKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2Fyb3VzZWwpO1xuXG4gICAgICB2YXIgX3RoaXM2MiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDYXJvdXNlbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhcm91c2VsKSkuY2FsbCh0aGlzLCBDYXJvdXNlbCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM2Mi5lbC5NX0Nhcm91c2VsID0gX3RoaXM2MjtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgY2Fyb3VzZWxcbiAgICAgICAqIEBtZW1iZXIgQ2Fyb3VzZWwjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gZHVyYXRpb25cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGRpc3RcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IHNoaWZ0XG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBwYWRkaW5nXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBudW1WaXNpYmxlXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZnVsbFdpZHRoXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gaW5kaWNhdG9yc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IG5vV3JhcFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkN5Y2xlVG9cbiAgICAgICAqL1xuICAgICAgX3RoaXM2Mi5vcHRpb25zID0gJC5leHRlbmQoe30sIENhcm91c2VsLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLy8gU2V0dXBcbiAgICAgIF90aGlzNjIuaGFzTXVsdGlwbGVTbGlkZXMgPSBfdGhpczYyLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmxlbmd0aCA+IDE7XG4gICAgICBfdGhpczYyLnNob3dJbmRpY2F0b3JzID0gX3RoaXM2Mi5vcHRpb25zLmluZGljYXRvcnMgJiYgX3RoaXM2Mi5oYXNNdWx0aXBsZVNsaWRlcztcbiAgICAgIF90aGlzNjIubm9XcmFwID0gX3RoaXM2Mi5vcHRpb25zLm5vV3JhcCB8fCAhX3RoaXM2Mi5oYXNNdWx0aXBsZVNsaWRlcztcbiAgICAgIF90aGlzNjIucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgX3RoaXM2Mi5kcmFnZ2VkID0gZmFsc2U7XG4gICAgICBfdGhpczYyLm9mZnNldCA9IF90aGlzNjIudGFyZ2V0ID0gMDtcbiAgICAgIF90aGlzNjIuaW1hZ2VzID0gW107XG4gICAgICBfdGhpczYyLml0ZW1XaWR0aCA9IF90aGlzNjIuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICBfdGhpczYyLml0ZW1IZWlnaHQgPSBfdGhpczYyLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJIZWlnaHQoKTtcbiAgICAgIF90aGlzNjIuZGltID0gX3RoaXM2Mi5pdGVtV2lkdGggKiAyICsgX3RoaXM2Mi5vcHRpb25zLnBhZGRpbmcgfHwgMTsgLy8gTWFrZSBzdXJlIGRpbSBpcyBub24gemVybyBmb3IgZGl2aXNpb25zLlxuICAgICAgX3RoaXM2Mi5fYXV0b1Njcm9sbEJvdW5kID0gX3RoaXM2Mi5fYXV0b1Njcm9sbC5iaW5kKF90aGlzNjIpO1xuICAgICAgX3RoaXM2Mi5fdHJhY2tCb3VuZCA9IF90aGlzNjIuX3RyYWNrLmJpbmQoX3RoaXM2Mik7XG5cbiAgICAgIC8vIEZ1bGwgV2lkdGggY2Fyb3VzZWwgc2V0dXBcbiAgICAgIGlmIChfdGhpczYyLm9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgIF90aGlzNjIub3B0aW9ucy5kaXN0ID0gMDtcbiAgICAgICAgX3RoaXM2Mi5fc2V0Q2Fyb3VzZWxIZWlnaHQoKTtcblxuICAgICAgICAvLyBPZmZzZXQgZml4ZWQgaXRlbXMgd2hlbiBpbmRpY2F0b3JzLlxuICAgICAgICBpZiAoX3RoaXM2Mi5zaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgIF90aGlzNjIuJGVsLmZpbmQoJy5jYXJvdXNlbC1maXhlZC1pdGVtJykuYWRkQ2xhc3MoJ3dpdGgtaW5kaWNhdG9ycycpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBzbGlkZXNcbiAgICAgIF90aGlzNjIuJGluZGljYXRvcnMgPSAkKCc8dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+PC91bD4nKTtcbiAgICAgIF90aGlzNjIuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgX3RoaXM2Mi5pbWFnZXMucHVzaChlbCk7XG4gICAgICAgIGlmIChfdGhpczYyLnNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XG5cbiAgICAgICAgICAvLyBBZGQgYWN0aXZlIHRvIGZpcnN0IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICRpbmRpY2F0b3JbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXM2Mi4kaW5kaWNhdG9ycy5hcHBlbmQoJGluZGljYXRvcik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzNjIuc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgX3RoaXM2Mi4kZWwuYXBwZW5kKF90aGlzNjIuJGluZGljYXRvcnMpO1xuICAgICAgfVxuICAgICAgX3RoaXM2Mi5jb3VudCA9IF90aGlzNjIuaW1hZ2VzLmxlbmd0aDtcblxuICAgICAgLy8gQ2FwIG51bVZpc2libGUgYXQgY291bnRcbiAgICAgIF90aGlzNjIub3B0aW9ucy5udW1WaXNpYmxlID0gTWF0aC5taW4oX3RoaXM2Mi5jb3VudCwgX3RoaXM2Mi5vcHRpb25zLm51bVZpc2libGUpO1xuXG4gICAgICAvLyBTZXR1cCBjcm9zcyBicm93c2VyIHN0cmluZ1xuICAgICAgX3RoaXM2Mi54Zm9ybSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgWyd3ZWJraXQnLCAnTW96JywgJ08nLCAnbXMnXS5ldmVyeShmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHZhciBlID0gcHJlZml4ICsgJ1RyYW5zZm9ybSc7XG4gICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuYm9keS5zdHlsZVtlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBfdGhpczYyLnhmb3JtID0gZTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXM2Mi5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICBfdGhpczYyLl9zY3JvbGwoX3RoaXM2Mi5vZmZzZXQpO1xuICAgICAgcmV0dXJuIF90aGlzNjI7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhcm91c2VsLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fQ2Fyb3VzZWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM2MyA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlQ2Fyb3VzZWxUYXBCb3VuZCA9IHRoaXMuX2hhbmRsZUNhcm91c2VsVGFwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcm91c2VsRHJhZ0JvdW5kID0gdGhpcy5faGFuZGxlQ2Fyb3VzZWxEcmFnLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZUJvdW5kID0gdGhpcy5faGFuZGxlQ2Fyb3VzZWxSZWxlYXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcm91c2VsQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNhcm91c2VsQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxUYXBCb3VuZCk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbERyYWdCb3VuZCk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxUYXBCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxEcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNhcm91c2VsQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0luZGljYXRvcnMgJiYgdGhpcy4kaW5kaWNhdG9ycykge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUluZGljYXRvckNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVJbmRpY2F0b3JDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtJykuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM2My5faGFuZGxlSW5kaWNhdG9yQ2xpY2tCb3VuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNpemVcbiAgICAgICAgdmFyIHRocm90dGxlZFJlc2l6ZSA9IE0udGhyb3R0bGUodGhpcy5faGFuZGxlUmVzaXplLCAyMDApO1xuICAgICAgICB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCA9IHRocm90dGxlZFJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM2NCA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZUNhcm91c2VsVGFwQm91bmQpO1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxEcmFnQm91bmQpO1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFRhcEJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbERyYWdCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxDbGlja0JvdW5kKTtcblxuICAgICAgICBpZiAodGhpcy5zaG93SW5kaWNhdG9ycyAmJiB0aGlzLiRpbmRpY2F0b3JzKSB7XG4gICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycy5maW5kKCcuaW5kaWNhdG9yLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczY0Ll9oYW5kbGVJbmRpY2F0b3JDbGlja0JvdW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENhcm91c2VsIFRhcFxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNhcm91c2VsVGFwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNhcm91c2VsVGFwKGUpIHtcbiAgICAgICAgLy8gRml4ZXMgZmlyZWZveCBkcmFnZ2FibGUgaW1hZ2UgYnVnXG4gICAgICAgIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmICQoZS50YXJnZXQpLmlzKCdpbWcnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbERyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSB0aGlzLl94cG9zKGUpO1xuICAgICAgICB0aGlzLnJlZmVyZW5jZVkgPSB0aGlzLl95cG9zKGUpO1xuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLmFtcGxpdHVkZSA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGlja2VyKTtcbiAgICAgICAgdGhpcy50aWNrZXIgPSBzZXRJbnRlcnZhbCh0aGlzLl90cmFja0JvdW5kLCAxMDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDYXJvdXNlbCBEcmFnXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2Fyb3VzZWxEcmFnXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNhcm91c2VsRHJhZyhlKSB7XG4gICAgICAgIHZhciB4ID0gdm9pZCAwLFxuICAgICAgICAgICAgeSA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlbHRhID0gdm9pZCAwLFxuICAgICAgICAgICAgZGVsdGFZID0gdm9pZCAwO1xuICAgICAgICBpZiAodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgICAgeCA9IHRoaXMuX3hwb3MoZSk7XG4gICAgICAgICAgeSA9IHRoaXMuX3lwb3MoZSk7XG4gICAgICAgICAgZGVsdGEgPSB0aGlzLnJlZmVyZW5jZSAtIHg7XG4gICAgICAgICAgZGVsdGFZID0gTWF0aC5hYnModGhpcy5yZWZlcmVuY2VZIC0geSk7XG4gICAgICAgICAgaWYgKGRlbHRhWSA8IDMwICYmICF0aGlzLnZlcnRpY2FsRHJhZ2dlZCkge1xuICAgICAgICAgICAgLy8gSWYgdmVydGljYWwgc2Nyb2xsaW5nIGRvbid0IGFsbG93IGRyYWdnaW5nLlxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMiB8fCBkZWx0YSA8IC0yKSB7XG4gICAgICAgICAgICAgIHRoaXMuZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlID0geDtcbiAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsKHRoaXMub2Zmc2V0ICsgZGVsdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnZ2VkKSB7XG4gICAgICAgICAgICAvLyBJZiBkcmFnZ2luZyBkb24ndCBhbGxvdyB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBWZXJ0aWNhbCBzY3JvbGxpbmcuXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2FsRHJhZ2dlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dlZCkge1xuICAgICAgICAgIC8vIElmIGRyYWdnaW5nIGRvbid0IGFsbG93IHZlcnRpY2FsIHNjcm9sbC5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ2Fyb3VzZWwgUmVsZWFzZVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNhcm91c2VsUmVsZWFzZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDYXJvdXNlbFJlbGVhc2UoZSkge1xuICAgICAgICBpZiAodGhpcy5wcmVzc2VkKSB7XG4gICAgICAgICAgdGhpcy5wcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpY2tlcik7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIGlmICh0aGlzLnZlbG9jaXR5ID4gMTAgfHwgdGhpcy52ZWxvY2l0eSA8IC0xMCkge1xuICAgICAgICAgIHRoaXMuYW1wbGl0dWRlID0gMC45ICogdGhpcy52ZWxvY2l0eTtcbiAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMub2Zmc2V0ICsgdGhpcy5hbXBsaXR1ZGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSBNYXRoLnJvdW5kKHRoaXMudGFyZ2V0IC8gdGhpcy5kaW0pICogdGhpcy5kaW07XG5cbiAgICAgICAgLy8gTm8gd3JhcCBvZiBpdGVtcy5cbiAgICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID49IHRoaXMuZGltICogKHRoaXMuY291bnQgLSAxKSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLmRpbSAqICh0aGlzLmNvdW50IC0gMSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbXBsaXR1ZGUgPSB0aGlzLnRhcmdldCAtIHRoaXMub2Zmc2V0O1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hdXRvU2Nyb2xsQm91bmQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdnZWQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENhcm91c2VsIENMaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2Fyb3VzZWxDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDYXJvdXNlbENsaWNrKGUpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBjbGlja3MgaWYgY2Fyb3VzZWwgd2FzIGRyYWdnZWQuXG4gICAgICAgIGlmICh0aGlzLmRyYWdnZWQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICB2YXIgY2xpY2tlZEluZGV4ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmNhcm91c2VsLWl0ZW0nKS5pbmRleCgpO1xuICAgICAgICAgIHZhciBkaWZmID0gdGhpcy5fd3JhcCh0aGlzLmNlbnRlcikgLSBjbGlja2VkSW5kZXg7XG5cbiAgICAgICAgICAvLyBEaXNhYmxlIGNsaWNrcyBpZiBjYXJvdXNlbCB3YXMgc2hpZnRlZCBieSBjbGlja1xuICAgICAgICAgIGlmIChkaWZmICE9PSAwKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9jeWNsZVRvKGNsaWNrZWRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5kaWNhdG9yIENMaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5kaWNhdG9yQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5kaWNhdG9yQ2xpY2soZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBpbmRpY2F0b3IgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuaW5kaWNhdG9yLWl0ZW0nKTtcbiAgICAgICAgaWYgKGluZGljYXRvci5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9jeWNsZVRvKGluZGljYXRvci5pbmRleCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBUaHJvdHRsZSBSZXNpemVcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmVzaXplKGUpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICB0aGlzLml0ZW1XaWR0aCA9IHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdGhpcy5pbWFnZUhlaWdodCA9IHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpLmhlaWdodCgpO1xuICAgICAgICAgIHRoaXMuZGltID0gdGhpcy5pdGVtV2lkdGggKiAyICsgdGhpcy5vcHRpb25zLnBhZGRpbmc7XG4gICAgICAgICAgdGhpcy5vZmZzZXQgPSB0aGlzLmNlbnRlciAqIDIgKiB0aGlzLml0ZW1XaWR0aDtcbiAgICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICAgIHRoaXMuX3NldENhcm91c2VsSGVpZ2h0KHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3Njcm9sbCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IGNhcm91c2VsIGhlaWdodCBiYXNlZCBvbiBmaXJzdCBzbGlkZVxuICAgICAgICogQHBhcmFtIHtCb29sZWFtfSBpbWFnZU9ubHkgLSB0cnVlIGZvciBpbWFnZSBzbGlkZXNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRDYXJvdXNlbEhlaWdodFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRDYXJvdXNlbEhlaWdodChpbWFnZU9ubHkpIHtcbiAgICAgICAgdmFyIF90aGlzNjUgPSB0aGlzO1xuXG4gICAgICAgIHZhciBmaXJzdFNsaWRlID0gdGhpcy4kZWwuZmluZCgnLmNhcm91c2VsLWl0ZW0uYWN0aXZlJykubGVuZ3RoID8gdGhpcy4kZWwuZmluZCgnLmNhcm91c2VsLWl0ZW0uYWN0aXZlJykuZmlyc3QoKSA6IHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtJykuZmlyc3QoKTtcbiAgICAgICAgdmFyIGZpcnN0SW1hZ2UgPSBmaXJzdFNsaWRlLmZpbmQoJ2ltZycpLmZpcnN0KCk7XG4gICAgICAgIGlmIChmaXJzdEltYWdlLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChmaXJzdEltYWdlWzBdLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAvLyBJZiBpbWFnZSB3b24ndCB0cmlnZ2VyIHRoZSBsb2FkIGV2ZW50XG4gICAgICAgICAgICB2YXIgaW1hZ2VIZWlnaHQgPSBmaXJzdEltYWdlLmhlaWdodCgpO1xuICAgICAgICAgICAgaWYgKGltYWdlSGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLiRlbC5jc3MoJ2hlaWdodCcsIGltYWdlSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJZiBpbWFnZSBzdGlsbCBoYXMgbm8gaGVpZ2h0LCB1c2UgdGhlIG5hdHVyYWwgZGltZW5zaW9ucyB0byBjYWxjdWxhdGVcbiAgICAgICAgICAgICAgdmFyIG5hdHVyYWxXaWR0aCA9IGZpcnN0SW1hZ2VbMF0ubmF0dXJhbFdpZHRoO1xuICAgICAgICAgICAgICB2YXIgbmF0dXJhbEhlaWdodCA9IGZpcnN0SW1hZ2VbMF0ubmF0dXJhbEhlaWdodDtcbiAgICAgICAgICAgICAgdmFyIGFkanVzdGVkSGVpZ2h0ID0gdGhpcy4kZWwud2lkdGgoKSAvIG5hdHVyYWxXaWR0aCAqIG5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgICAgIHRoaXMuJGVsLmNzcygnaGVpZ2h0JywgYWRqdXN0ZWRIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gR2V0IGhlaWdodCB3aGVuIGltYWdlIGlzIGxvYWRlZCBub3JtYWxseVxuICAgICAgICAgICAgZmlyc3RJbWFnZS5vbmUoJ2xvYWQnLCBmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICAgICAgX3RoaXM2NS4kZWwuY3NzKCdoZWlnaHQnLCBlbC5vZmZzZXRIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaW1hZ2VPbmx5KSB7XG4gICAgICAgICAgdmFyIHNsaWRlSGVpZ2h0ID0gZmlyc3RTbGlkZS5oZWlnaHQoKTtcbiAgICAgICAgICB0aGlzLiRlbC5jc3MoJ2hlaWdodCcsIHNsaWRlSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgeCBwb3NpdGlvbiBmcm9tIGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfeHBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF94cG9zKGUpIHtcbiAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICByZXR1cm4gZS5jbGllbnRYO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB5IHBvc2l0aW9uIGZyb20gZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl95cG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3lwb3MoZSkge1xuICAgICAgICAvLyB0b3VjaCBldmVudFxuICAgICAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICAgIHJldHVybiBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vdXNlIGV2ZW50XG4gICAgICAgIHJldHVybiBlLmNsaWVudFk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcCBpbmRleFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl93cmFwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3dyYXAoeCkge1xuICAgICAgICByZXR1cm4geCA+PSB0aGlzLmNvdW50ID8geCAlIHRoaXMuY291bnQgOiB4IDwgMCA/IHRoaXMuX3dyYXAodGhpcy5jb3VudCArIHggJSB0aGlzLmNvdW50KSA6IHg7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVHJhY2tzIHNjcm9sbGluZyBpbmZvcm1hdGlvblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3RyYWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3RyYWNrKCkge1xuICAgICAgICB2YXIgbm93ID0gdm9pZCAwLFxuICAgICAgICAgICAgZWxhcHNlZCA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlbHRhID0gdm9pZCAwLFxuICAgICAgICAgICAgdiA9IHZvaWQgMDtcblxuICAgICAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBlbGFwc2VkID0gbm93IC0gdGhpcy50aW1lc3RhbXA7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gbm93O1xuICAgICAgICBkZWx0YSA9IHRoaXMub2Zmc2V0IC0gdGhpcy5mcmFtZTtcbiAgICAgICAgdGhpcy5mcmFtZSA9IHRoaXMub2Zmc2V0O1xuXG4gICAgICAgIHYgPSAxMDAwICogZGVsdGEgLyAoMSArIGVsYXBzZWQpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMC44ICogdiArIDAuMiAqIHRoaXMudmVsb2NpdHk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQXV0byBzY3JvbGxzIHRvIG5lYXJlc3QgY2Fyb3VzZWwgaXRlbS5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hdXRvU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2F1dG9TY3JvbGwoKSB7XG4gICAgICAgIHZhciBlbGFwc2VkID0gdm9pZCAwLFxuICAgICAgICAgICAgZGVsdGEgPSB2b2lkIDA7XG5cbiAgICAgICAgaWYgKHRoaXMuYW1wbGl0dWRlKSB7XG4gICAgICAgICAgZWxhcHNlZCA9IERhdGUubm93KCkgLSB0aGlzLnRpbWVzdGFtcDtcbiAgICAgICAgICBkZWx0YSA9IHRoaXMuYW1wbGl0dWRlICogTWF0aC5leHAoLWVsYXBzZWQgLyB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsKHRoaXMudGFyZ2V0IC0gZGVsdGEpO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2F1dG9TY3JvbGxCb3VuZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbCh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2Nyb2xsIHRvIHRhcmdldFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zY3JvbGxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2Nyb2xsKHgpIHtcbiAgICAgICAgdmFyIF90aGlzNjYgPSB0aGlzO1xuXG4gICAgICAgIC8vIFRyYWNrIHNjcm9sbGluZyBzdGF0ZVxuICAgICAgICBpZiAoIXRoaXMuJGVsLmhhc0NsYXNzKCdzY3JvbGxpbmcnKSkge1xuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsaW5nVGltZW91dCAhPSBudWxsKSB7XG4gICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnNjcm9sbGluZ1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsaW5nVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczY2LiRlbC5yZW1vdmVDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5kdXJhdGlvbik7XG5cbiAgICAgICAgLy8gU3RhcnQgYWN0dWFsIHNjcm9sbFxuICAgICAgICB2YXIgaSA9IHZvaWQgMCxcbiAgICAgICAgICAgIGhhbGYgPSB2b2lkIDAsXG4gICAgICAgICAgICBkZWx0YSA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRpciA9IHZvaWQgMCxcbiAgICAgICAgICAgIHR3ZWVuID0gdm9pZCAwLFxuICAgICAgICAgICAgZWwgPSB2b2lkIDAsXG4gICAgICAgICAgICBhbGlnbm1lbnQgPSB2b2lkIDAsXG4gICAgICAgICAgICB6VHJhbnNsYXRpb24gPSB2b2lkIDAsXG4gICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IHZvaWQgMCxcbiAgICAgICAgICAgIGNlbnRlclR3ZWVuZWRPcGFjaXR5ID0gdm9pZCAwO1xuICAgICAgICB2YXIgbGFzdENlbnRlciA9IHRoaXMuY2VudGVyO1xuICAgICAgICB2YXIgbnVtVmlzaWJsZU9mZnNldCA9IDEgLyB0aGlzLm9wdGlvbnMubnVtVmlzaWJsZTtcblxuICAgICAgICB0aGlzLm9mZnNldCA9IHR5cGVvZiB4ID09PSAnbnVtYmVyJyA/IHggOiB0aGlzLm9mZnNldDtcbiAgICAgICAgdGhpcy5jZW50ZXIgPSBNYXRoLmZsb29yKCh0aGlzLm9mZnNldCArIHRoaXMuZGltIC8gMikgLyB0aGlzLmRpbSk7XG4gICAgICAgIGRlbHRhID0gdGhpcy5vZmZzZXQgLSB0aGlzLmNlbnRlciAqIHRoaXMuZGltO1xuICAgICAgICBkaXIgPSBkZWx0YSA8IDAgPyAxIDogLTE7XG4gICAgICAgIHR3ZWVuID0gLWRpciAqIGRlbHRhICogMiAvIHRoaXMuZGltO1xuICAgICAgICBoYWxmID0gdGhpcy5jb3VudCA+PiAxO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoMCknO1xuICAgICAgICAgIGNlbnRlclR3ZWVuZWRPcGFjaXR5ID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGlnbm1lbnQgPSAndHJhbnNsYXRlWCgnICsgKHRoaXMuZWwuY2xpZW50V2lkdGggLSB0aGlzLml0ZW1XaWR0aCkgLyAyICsgJ3B4KSAnO1xuICAgICAgICAgIGFsaWdubWVudCArPSAndHJhbnNsYXRlWSgnICsgKHRoaXMuZWwuY2xpZW50SGVpZ2h0IC0gdGhpcy5pdGVtSGVpZ2h0KSAvIDIgKyAncHgpJztcbiAgICAgICAgICBjZW50ZXJUd2VlbmVkT3BhY2l0eSA9IDEgLSBudW1WaXNpYmxlT2Zmc2V0ICogdHdlZW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgaW5kaWNhdG9yIGFjdGl2ZVxuICAgICAgICBpZiAodGhpcy5zaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgIHZhciBkaWZmID0gdGhpcy5jZW50ZXIgJSB0aGlzLmNvdW50O1xuICAgICAgICAgIHZhciBhY3RpdmVJbmRpY2F0b3IgPSB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbS5hY3RpdmUnKTtcbiAgICAgICAgICBpZiAoYWN0aXZlSW5kaWNhdG9yLmluZGV4KCkgIT09IGRpZmYpIHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGljYXRvci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbScpLmVxKGRpZmYpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNlbnRlclxuICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgIGlmICghdGhpcy5ub1dyYXAgfHwgdGhpcy5jZW50ZXIgPj0gMCAmJiB0aGlzLmNlbnRlciA8IHRoaXMuY291bnQpIHtcbiAgICAgICAgICBlbCA9IHRoaXMuaW1hZ2VzW3RoaXMuX3dyYXAodGhpcy5jZW50ZXIpXTtcblxuICAgICAgICAgIC8vIEFkZCBhY3RpdmUgY2xhc3MgdG8gY2VudGVyIGl0ZW0uXG4gICAgICAgICAgaWYgKCEkKGVsKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSBhbGlnbm1lbnQgKyBcIiB0cmFuc2xhdGVYKFwiICsgLWRlbHRhIC8gMiArIFwicHgpIHRyYW5zbGF0ZVgoXCIgKyBkaXIgKiB0aGlzLm9wdGlvbnMuc2hpZnQgKiB0d2VlbiAqIGkgKyBcInB4KSB0cmFuc2xhdGVaKFwiICsgdGhpcy5vcHRpb25zLmRpc3QgKiB0d2VlbiArIFwicHgpXCI7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbVN0eWxlKGVsLCBjZW50ZXJUd2VlbmVkT3BhY2l0eSwgMCwgdHJhbnNmb3JtU3RyaW5nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gaGFsZjsgKytpKSB7XG4gICAgICAgICAgLy8gcmlnaHQgc2lkZVxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgICB6VHJhbnNsYXRpb24gPSB0aGlzLm9wdGlvbnMuZGlzdDtcbiAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gaSA9PT0gaGFsZiAmJiBkZWx0YSA8IDAgPyAxIC0gdHdlZW4gOiAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB6VHJhbnNsYXRpb24gPSB0aGlzLm9wdGlvbnMuZGlzdCAqIChpICogMiArIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICAgIHR3ZWVuZWRPcGFjaXR5ID0gMSAtIG51bVZpc2libGVPZmZzZXQgKiAoaSAqIDIgKyB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgICBpZiAoIXRoaXMubm9XcmFwIHx8IHRoaXMuY2VudGVyICsgaSA8IHRoaXMuY291bnQpIHtcbiAgICAgICAgICAgIGVsID0gdGhpcy5pbWFnZXNbdGhpcy5fd3JhcCh0aGlzLmNlbnRlciArIGkpXTtcbiAgICAgICAgICAgIHZhciBfdHJhbnNmb3JtU3RyaW5nID0gYWxpZ25tZW50ICsgXCIgdHJhbnNsYXRlWChcIiArICh0aGlzLm9wdGlvbnMuc2hpZnQgKyAodGhpcy5kaW0gKiBpIC0gZGVsdGEpIC8gMikgKyBcInB4KSB0cmFuc2xhdGVaKFwiICsgelRyYW5zbGF0aW9uICsgXCJweClcIjtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1TdHlsZShlbCwgdHdlZW5lZE9wYWNpdHksIC1pLCBfdHJhbnNmb3JtU3RyaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBsZWZ0IHNpZGVcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gdGhpcy5vcHRpb25zLmRpc3Q7XG4gICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IGkgPT09IGhhbGYgJiYgZGVsdGEgPiAwID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gdGhpcy5vcHRpb25zLmRpc3QgKiAoaSAqIDIgLSB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IDEgLSBudW1WaXNpYmxlT2Zmc2V0ICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgaWYgKCF0aGlzLm5vV3JhcCB8fCB0aGlzLmNlbnRlciAtIGkgPj0gMCkge1xuICAgICAgICAgICAgZWwgPSB0aGlzLmltYWdlc1t0aGlzLl93cmFwKHRoaXMuY2VudGVyIC0gaSldO1xuICAgICAgICAgICAgdmFyIF90cmFuc2Zvcm1TdHJpbmcyID0gYWxpZ25tZW50ICsgXCIgdHJhbnNsYXRlWChcIiArICgtdGhpcy5vcHRpb25zLnNoaWZ0ICsgKC10aGlzLmRpbSAqIGkgLSBkZWx0YSkgLyAyKSArIFwicHgpIHRyYW5zbGF0ZVooXCIgKyB6VHJhbnNsYXRpb24gKyBcInB4KVwiO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbVN0eWxlKGVsLCB0d2VlbmVkT3BhY2l0eSwgLWksIF90cmFuc2Zvcm1TdHJpbmcyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICBpZiAoIXRoaXMubm9XcmFwIHx8IHRoaXMuY2VudGVyID49IDAgJiYgdGhpcy5jZW50ZXIgPCB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgZWwgPSB0aGlzLmltYWdlc1t0aGlzLl93cmFwKHRoaXMuY2VudGVyKV07XG4gICAgICAgICAgdmFyIF90cmFuc2Zvcm1TdHJpbmczID0gYWxpZ25tZW50ICsgXCIgdHJhbnNsYXRlWChcIiArIC1kZWx0YSAvIDIgKyBcInB4KSB0cmFuc2xhdGVYKFwiICsgZGlyICogdGhpcy5vcHRpb25zLnNoaWZ0ICogdHdlZW4gKyBcInB4KSB0cmFuc2xhdGVaKFwiICsgdGhpcy5vcHRpb25zLmRpc3QgKiB0d2VlbiArIFwicHgpXCI7XG4gICAgICAgICAgdGhpcy5fdXBkYXRlSXRlbVN0eWxlKGVsLCBjZW50ZXJUd2VlbmVkT3BhY2l0eSwgMCwgX3RyYW5zZm9ybVN0cmluZzMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25DeWNsZVRvIGNhbGxiYWNrXG4gICAgICAgIHZhciAkY3Vyckl0ZW0gPSB0aGlzLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmVxKHRoaXMuX3dyYXAodGhpcy5jZW50ZXIpKTtcbiAgICAgICAgaWYgKGxhc3RDZW50ZXIgIT09IHRoaXMuY2VudGVyICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMub25DeWNsZVRvID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ3ljbGVUby5jYWxsKHRoaXMsICRjdXJySXRlbVswXSwgdGhpcy5kcmFnZ2VkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uZSB0aW1lIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbmVUaW1lQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9uZVRpbWVDYWxsYmFjay5jYWxsKHRoaXMsICRjdXJySXRlbVswXSwgdGhpcy5kcmFnZ2VkKTtcbiAgICAgICAgICB0aGlzLm9uZVRpbWVDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDeWNsZSB0byB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcGFjaXR5XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gekluZGV4XG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNmb3JtXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlSXRlbVN0eWxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUl0ZW1TdHlsZShlbCwgb3BhY2l0eSwgekluZGV4LCB0cmFuc2Zvcm0pIHtcbiAgICAgICAgZWwuc3R5bGVbdGhpcy54Zm9ybV0gPSB0cmFuc2Zvcm07XG4gICAgICAgIGVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICAgICAgZWwuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgICAgIGVsLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3ljbGUgdG8gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gblxuICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jeWNsZVRvXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2N5Y2xlVG8obiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGRpZmYgPSB0aGlzLmNlbnRlciAlIHRoaXMuY291bnQgLSBuO1xuXG4gICAgICAgIC8vIEFjY291bnQgZm9yIHdyYXBhcm91bmQuXG4gICAgICAgIGlmICghdGhpcy5ub1dyYXApIHtcbiAgICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmICsgdGhpcy5jb3VudCkgPCBNYXRoLmFicyhkaWZmKSkge1xuICAgICAgICAgICAgICBkaWZmICs9IHRoaXMuY291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGRpZmYgLSB0aGlzLmNvdW50KSA8IGRpZmYpIHtcbiAgICAgICAgICAgICAgZGlmZiAtPSB0aGlzLmNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5kaW0gKiBNYXRoLnJvdW5kKHRoaXMub2Zmc2V0IC8gdGhpcy5kaW0pO1xuICAgICAgICAvLyBOZXh0XG4gICAgICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICAgIHRoaXMudGFyZ2V0ICs9IHRoaXMuZGltICogTWF0aC5hYnMoZGlmZik7XG5cbiAgICAgICAgICAvLyBQcmV2XG4gICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICB0aGlzLnRhcmdldCAtPSB0aGlzLmRpbSAqIGRpZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgb25lIHRpbWUgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub25lVGltZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTY3JvbGxcbiAgICAgICAgaWYgKHRoaXMub2Zmc2V0ICE9PSB0aGlzLnRhcmdldCkge1xuICAgICAgICAgIHRoaXMuYW1wbGl0dWRlID0gdGhpcy50YXJnZXQgLSB0aGlzLm9mZnNldDtcbiAgICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX2F1dG9TY3JvbGxCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDeWNsZSB0byBuZXh0IGl0ZW1cbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbl1cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm5leHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCB8fCBpc05hTihuKSkge1xuICAgICAgICAgIG4gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jZW50ZXIgKyBuO1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5jb3VudCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRleCA9IHRoaXMuX3dyYXAoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2N5Y2xlVG8oaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEN5Y2xlIHRvIHByZXZpb3VzIGl0ZW1cbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbl1cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInByZXZcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmV2KG4pIHtcbiAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCB8fCBpc05hTihuKSkge1xuICAgICAgICAgIG4gPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jZW50ZXIgLSBuO1xuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5jb3VudCB8fCBpbmRleCA8IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5ub1dyYXApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRleCA9IHRoaXMuX3dyYXAoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3ljbGVUbyhpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3ljbGUgdG8gbnRoIGl0ZW1cbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbbl1cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXQobiwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG4gPT09IHVuZGVmaW5lZCB8fCBpc05hTihuKSkge1xuICAgICAgICAgIG4gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG4gPiB0aGlzLmNvdW50IHx8IG4gPCAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbiA9IHRoaXMuX3dyYXAobik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jeWNsZVRvKG4sIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoQ2Fyb3VzZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYXJvdXNlbCksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX0Nhcm91c2VsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENhcm91c2VsO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5DYXJvdXNlbCA9IENhcm91c2VsO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoQ2Fyb3VzZWwsICdjYXJvdXNlbCcsICdNX0Nhcm91c2VsJyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBvbk9wZW46IHVuZGVmaW5lZCxcbiAgICBvbkNsb3NlOiB1bmRlZmluZWRcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBUYXBUYXJnZXQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDE5KSB7XG4gICAgX2luaGVyaXRzKFRhcFRhcmdldCwgX0NvbXBvbmVudDE5KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBUYXBUYXJnZXQgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUYXBUYXJnZXQoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYXBUYXJnZXQpO1xuXG4gICAgICB2YXIgX3RoaXM2NyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUYXBUYXJnZXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYXBUYXJnZXQpKS5jYWxsKHRoaXMsIFRhcFRhcmdldCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM2Ny5lbC5NX1RhcFRhcmdldCA9IF90aGlzNjc7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIHNlbGVjdFxuICAgICAgICogQG1lbWJlciBUYXBUYXJnZXQjb3B0aW9uc1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW4gLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBmZWF0dXJlIGRpc2NvdmVyeSBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZSAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGZlYXR1cmUgZGlzY292ZXJ5IGlzIGNsb3NlZFxuICAgICAgICovXG4gICAgICBfdGhpczY3Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVGFwVGFyZ2V0LmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM2Ny5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgLy8gc2V0dXBcbiAgICAgIF90aGlzNjcuJG9yaWdpbiA9ICQoJyMnICsgX3RoaXM2Ny4kZWwuYXR0cignZGF0YS10YXJnZXQnKSk7XG4gICAgICBfdGhpczY3Ll9zZXR1cCgpO1xuXG4gICAgICBfdGhpczY3Ll9jYWxjdWxhdGVQb3NpdGlvbmluZygpO1xuICAgICAgX3RoaXM2Ny5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXM2NztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGFwVGFyZ2V0LCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLlRhcFRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlVGFyZ2V0Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZVRhcmdldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9yaWdpbkNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVPcmlnaW5DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUYXJnZXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU9yaWdpbkNsaWNrQm91bmQpO1xuXG4gICAgICAgIC8vIFJlc2l6ZVxuICAgICAgICB2YXIgdGhyb3R0bGVkUmVzaXplID0gTS50aHJvdHRsZSh0aGlzLl9oYW5kbGVSZXNpemUsIDIwMCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kID0gdGhyb3R0bGVkUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUYXJnZXRDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU9yaWdpbkNsaWNrQm91bmQpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBUYXJnZXQgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVUYXJnZXRDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVUYXJnZXRDbGljayhlKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBPcmlnaW4gQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVPcmlnaW5DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVPcmlnaW5DbGljayhlKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmVzaXplXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlUmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJlc2l6ZShlKSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFJlc2l6ZVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURvY3VtZW50Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRG9jdW1lbnRDbGljayhlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnRhcC10YXJnZXQtd3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIFRhcCBUYXJnZXRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cCgpIHtcbiAgICAgICAgLy8gQ3JlYXRpbmcgdGFwIHRhcmdldFxuICAgICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLiRlbC5wYXJlbnQoKVswXTtcbiAgICAgICAgdGhpcy53YXZlRWwgPSAkKHRoaXMud3JhcHBlcikuZmluZCgnLnRhcC10YXJnZXQtd2F2ZScpWzBdO1xuICAgICAgICB0aGlzLm9yaWdpbkVsID0gJCh0aGlzLndyYXBwZXIpLmZpbmQoJy50YXAtdGFyZ2V0LW9yaWdpbicpWzBdO1xuICAgICAgICB0aGlzLmNvbnRlbnRFbCA9IHRoaXMuJGVsLmZpbmQoJy50YXAtdGFyZ2V0LWNvbnRlbnQnKVswXTtcblxuICAgICAgICAvLyBDcmVhdGluZyB3cmFwcGVyXG4gICAgICAgIGlmICghJCh0aGlzLndyYXBwZXIpLmhhc0NsYXNzKCcudGFwLXRhcmdldC13cmFwcGVyJykpIHtcbiAgICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFwLXRhcmdldC13cmFwcGVyJyk7XG4gICAgICAgICAgdGhpcy4kZWwuYmVmb3JlKCQodGhpcy53cmFwcGVyKSk7XG4gICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0aW5nIGNvbnRlbnRcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnRFbCkge1xuICAgICAgICAgIHRoaXMuY29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGhpcy5jb250ZW50RWwuY2xhc3NMaXN0LmFkZCgndGFwLXRhcmdldC1jb250ZW50Jyk7XG4gICAgICAgICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuY29udGVudEVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0aW5nIGZvcmVncm91bmQgd2F2ZVxuICAgICAgICBpZiAoIXRoaXMud2F2ZUVsKSB7XG4gICAgICAgICAgdGhpcy53YXZlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0aGlzLndhdmVFbC5jbGFzc0xpc3QuYWRkKCd0YXAtdGFyZ2V0LXdhdmUnKTtcblxuICAgICAgICAgIC8vIENyZWF0aW5nIG9yaWdpblxuICAgICAgICAgIGlmICghdGhpcy5vcmlnaW5FbCkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5FbCA9IHRoaXMuJG9yaWdpbi5jbG9uZSh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luRWwuYWRkQ2xhc3MoJ3RhcC10YXJnZXQtb3JpZ2luJyk7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbkVsLnJlbW92ZUF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbkVsLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbkVsID0gdGhpcy5vcmlnaW5FbFswXTtcbiAgICAgICAgICAgIHRoaXMud2F2ZUVsLmFwcGVuZCh0aGlzLm9yaWdpbkVsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLndyYXBwZXIuYXBwZW5kKHRoaXMud2F2ZUVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENhbGN1bGF0ZSBwb3NpdGlvbmluZ1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NhbGN1bGF0ZVBvc2l0aW9uaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhbGN1bGF0ZVBvc2l0aW9uaW5nKCkge1xuICAgICAgICAvLyBFbGVtZW50IG9yIHBhcmVudCBpcyBmaXhlZCBwb3NpdGlvbj9cbiAgICAgICAgdmFyIGlzRml4ZWQgPSB0aGlzLiRvcmlnaW4uY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnO1xuICAgICAgICBpZiAoIWlzRml4ZWQpIHtcbiAgICAgICAgICB2YXIgcGFyZW50cyA9IHRoaXMuJG9yaWdpbi5wYXJlbnRzKCk7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpc0ZpeGVkID0gJChwYXJlbnRzW2ldKS5jc3MoJ3Bvc2l0aW9uJykgPT0gJ2ZpeGVkJztcbiAgICAgICAgICAgIGlmIChpc0ZpeGVkKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIG9yaWdpblxuICAgICAgICB2YXIgb3JpZ2luV2lkdGggPSB0aGlzLiRvcmlnaW4ub3V0ZXJXaWR0aCgpO1xuICAgICAgICB2YXIgb3JpZ2luSGVpZ2h0ID0gdGhpcy4kb3JpZ2luLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIHZhciBvcmlnaW5Ub3AgPSBpc0ZpeGVkID8gdGhpcy4kb3JpZ2luLm9mZnNldCgpLnRvcCAtIE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKSA6IHRoaXMuJG9yaWdpbi5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZhciBvcmlnaW5MZWZ0ID0gaXNGaXhlZCA/IHRoaXMuJG9yaWdpbi5vZmZzZXQoKS5sZWZ0IC0gTS5nZXREb2N1bWVudFNjcm9sbExlZnQoKSA6IHRoaXMuJG9yaWdpbi5vZmZzZXQoKS5sZWZ0O1xuXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIHNjcmVlblxuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIGNlbnRlclggPSB3aW5kb3dXaWR0aCAvIDI7XG4gICAgICAgIHZhciBjZW50ZXJZID0gd2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIGlzTGVmdCA9IG9yaWdpbkxlZnQgPD0gY2VudGVyWDtcbiAgICAgICAgdmFyIGlzUmlnaHQgPSBvcmlnaW5MZWZ0ID4gY2VudGVyWDtcbiAgICAgICAgdmFyIGlzVG9wID0gb3JpZ2luVG9wIDw9IGNlbnRlclk7XG4gICAgICAgIHZhciBpc0JvdHRvbSA9IG9yaWdpblRvcCA+IGNlbnRlclk7XG4gICAgICAgIHZhciBpc0NlbnRlclggPSBvcmlnaW5MZWZ0ID49IHdpbmRvd1dpZHRoICogMC4yNSAmJiBvcmlnaW5MZWZ0IDw9IHdpbmRvd1dpZHRoICogMC43NTtcblxuICAgICAgICAvLyBDYWxjdWxhdGluZyB0YXAgdGFyZ2V0XG4gICAgICAgIHZhciB0YXBUYXJnZXRXaWR0aCA9IHRoaXMuJGVsLm91dGVyV2lkdGgoKTtcbiAgICAgICAgdmFyIHRhcFRhcmdldEhlaWdodCA9IHRoaXMuJGVsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUb3AgPSBvcmlnaW5Ub3AgKyBvcmlnaW5IZWlnaHQgLyAyIC0gdGFwVGFyZ2V0SGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIHRhcFRhcmdldExlZnQgPSBvcmlnaW5MZWZ0ICsgb3JpZ2luV2lkdGggLyAyIC0gdGFwVGFyZ2V0V2lkdGggLyAyO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0UG9zaXRpb24gPSBpc0ZpeGVkID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZSc7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRpbmcgY29udGVudFxuICAgICAgICB2YXIgdGFwVGFyZ2V0VGV4dFdpZHRoID0gaXNDZW50ZXJYID8gdGFwVGFyZ2V0V2lkdGggOiB0YXBUYXJnZXRXaWR0aCAvIDIgKyBvcmlnaW5XaWR0aDtcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRIZWlnaHQgPSB0YXBUYXJnZXRIZWlnaHQgLyAyO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0VGV4dFRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0SGVpZ2h0IC8gMiA6IDA7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUZXh0Qm90dG9tID0gMDtcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRMZWZ0ID0gaXNMZWZ0ICYmICFpc0NlbnRlclggPyB0YXBUYXJnZXRXaWR0aCAvIDIgLSBvcmlnaW5XaWR0aCA6IDA7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUZXh0UmlnaHQgPSAwO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0VGV4dFBhZGRpbmcgPSBvcmlnaW5XaWR0aDtcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRBbGlnbiA9IGlzQm90dG9tID8gJ2JvdHRvbScgOiAndG9wJztcblxuICAgICAgICAvLyBDYWxjdWxhdGluZyB3YXZlXG4gICAgICAgIHZhciB0YXBUYXJnZXRXYXZlV2lkdGggPSBvcmlnaW5XaWR0aCA+IG9yaWdpbkhlaWdodCA/IG9yaWdpbldpZHRoICogMiA6IG9yaWdpbldpZHRoICogMjtcbiAgICAgICAgdmFyIHRhcFRhcmdldFdhdmVIZWlnaHQgPSB0YXBUYXJnZXRXYXZlV2lkdGg7XG4gICAgICAgIHZhciB0YXBUYXJnZXRXYXZlVG9wID0gdGFwVGFyZ2V0SGVpZ2h0IC8gMiAtIHRhcFRhcmdldFdhdmVIZWlnaHQgLyAyO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0V2F2ZUxlZnQgPSB0YXBUYXJnZXRXaWR0aCAvIDIgLSB0YXBUYXJnZXRXYXZlV2lkdGggLyAyO1xuXG4gICAgICAgIC8vIFNldHRpbmcgdGFwIHRhcmdldFxuICAgICAgICB2YXIgdGFwVGFyZ2V0V3JhcHBlckNzc09iaiA9IHt9O1xuICAgICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnRvcCA9IGlzVG9wID8gdGFwVGFyZ2V0VG9wICsgJ3B4JyA6ICcnO1xuICAgICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnJpZ2h0ID0gaXNSaWdodCA/IHdpbmRvd1dpZHRoIC0gdGFwVGFyZ2V0TGVmdCAtIHRhcFRhcmdldFdpZHRoICsgJ3B4JyA6ICcnO1xuICAgICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmJvdHRvbSA9IGlzQm90dG9tID8gd2luZG93SGVpZ2h0IC0gdGFwVGFyZ2V0VG9wIC0gdGFwVGFyZ2V0SGVpZ2h0ICsgJ3B4JyA6ICcnO1xuICAgICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLmxlZnQgPSBpc0xlZnQgPyB0YXBUYXJnZXRMZWZ0ICsgJ3B4JyA6ICcnO1xuICAgICAgICB0YXBUYXJnZXRXcmFwcGVyQ3NzT2JqLnBvc2l0aW9uID0gdGFwVGFyZ2V0UG9zaXRpb247XG4gICAgICAgICQodGhpcy53cmFwcGVyKS5jc3ModGFwVGFyZ2V0V3JhcHBlckNzc09iaik7XG5cbiAgICAgICAgLy8gU2V0dGluZyBjb250ZW50XG4gICAgICAgICQodGhpcy5jb250ZW50RWwpLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IHRhcFRhcmdldFRleHRXaWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRUZXh0SGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICB0b3A6IHRhcFRhcmdldFRleHRUb3AgKyAncHgnLFxuICAgICAgICAgIHJpZ2h0OiB0YXBUYXJnZXRUZXh0UmlnaHQgKyAncHgnLFxuICAgICAgICAgIGJvdHRvbTogdGFwVGFyZ2V0VGV4dEJvdHRvbSArICdweCcsXG4gICAgICAgICAgbGVmdDogdGFwVGFyZ2V0VGV4dExlZnQgKyAncHgnLFxuICAgICAgICAgIHBhZGRpbmc6IHRhcFRhcmdldFRleHRQYWRkaW5nICsgJ3B4JyxcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiB0YXBUYXJnZXRUZXh0QWxpZ25cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0dGluZyB3YXZlXG4gICAgICAgICQodGhpcy53YXZlRWwpLmNzcyh7XG4gICAgICAgICAgdG9wOiB0YXBUYXJnZXRXYXZlVG9wICsgJ3B4JyxcbiAgICAgICAgICBsZWZ0OiB0YXBUYXJnZXRXYXZlTGVmdCArICdweCcsXG4gICAgICAgICAgd2lkdGg6IHRhcFRhcmdldFdhdmVXaWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiB0YXBUYXJnZXRXYXZlSGVpZ2h0ICsgJ3B4J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIFRhcFRhcmdldFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uT3BlbiBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuLmNhbGwodGhpcywgdGhpcy4kb3JpZ2luWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kLCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2UgVGFwIFRhcmdldFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uQ2xvc2UgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcywgdGhpcy4kb3JpZ2luWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQpO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChUYXBUYXJnZXQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYXBUYXJnZXQpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9UYXBUYXJnZXQ7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFwVGFyZ2V0O1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5UYXBUYXJnZXQgPSBUYXBUYXJnZXQ7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihUYXBUYXJnZXQsICd0YXBUYXJnZXQnLCAnTV9UYXBUYXJnZXQnKTtcbiAgfVxufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGNsYXNzZXM6ICcnLFxuICAgIGRyb3Bkb3duT3B0aW9uczoge31cbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBGb3JtU2VsZWN0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQyMCkge1xuICAgIF9pbmhlcml0cyhGb3JtU2VsZWN0LCBfQ29tcG9uZW50MjApO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IEZvcm1TZWxlY3QgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtU2VsZWN0KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybVNlbGVjdCk7XG5cbiAgICAgIC8vIERvbid0IGluaXQgaWYgYnJvd3NlciBkZWZhdWx0IHZlcnNpb25cbiAgICAgIHZhciBfdGhpczY4ID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZvcm1TZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGb3JtU2VsZWN0KSkuY2FsbCh0aGlzLCBGb3JtU2VsZWN0LCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBpZiAoX3RoaXM2OC4kZWwuaGFzQ2xhc3MoJ2Jyb3dzZXItZGVmYXVsdCcpKSB7XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpczY4KTtcbiAgICAgIH1cblxuICAgICAgX3RoaXM2OC5lbC5NX0Zvcm1TZWxlY3QgPSBfdGhpczY4O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICAgICAqIEBtZW1iZXIgRm9ybVNlbGVjdCNvcHRpb25zXG4gICAgICAgKi9cbiAgICAgIF90aGlzNjgub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBGb3JtU2VsZWN0LmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM2OC5pc011bHRpcGxlID0gX3RoaXM2OC4kZWwucHJvcCgnbXVsdGlwbGUnKTtcblxuICAgICAgLy8gU2V0dXBcbiAgICAgIF90aGlzNjguZWwudGFiSW5kZXggPSAtMTtcbiAgICAgIF90aGlzNjguX2tleXNTZWxlY3RlZCA9IHt9O1xuICAgICAgX3RoaXM2OC5fdmFsdWVEaWN0ID0ge307IC8vIE1hcHMga2V5IHRvIG9yaWdpbmFsIGFuZCBnZW5lcmF0ZWQgb3B0aW9uIGVsZW1lbnQuXG4gICAgICBfdGhpczY4Ll9zZXR1cERyb3Bkb3duKCk7XG5cbiAgICAgIF90aGlzNjguX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzNjg7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZvcm1TZWxlY3QsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuZWwuTV9Gb3JtU2VsZWN0ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNjkgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVNlbGVjdENoYW5nZUJvdW5kID0gdGhpcy5faGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wdGlvbkNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVPcHRpb25DbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM2OS5faGFuZGxlT3B0aW9uQ2xpY2tCb3VuZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZVNlbGVjdENoYW5nZUJvdW5kKTtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM3MCA9IHRoaXM7XG5cbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM3MC5faGFuZGxlT3B0aW9uQ2xpY2tCb3VuZCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZVNlbGVjdENoYW5nZUJvdW5kKTtcbiAgICAgICAgdGhpcy5pbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFNlbGVjdCBDaGFuZ2VcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVTZWxlY3RDaGFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICAgICAgdGhpcy5fc2V0VmFsdWVUb0lucHV0KCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIE9wdGlvbiBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU9wdGlvbkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU9wdGlvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgb3B0aW9uID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKVswXTtcbiAgICAgICAgdmFyIGtleSA9IG9wdGlvbi5pZDtcbiAgICAgICAgaWYgKCEkKG9wdGlvbikuaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQob3B0aW9uKS5oYXNDbGFzcygnb3B0Z3JvdXAnKSAmJiBrZXkubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgIC8vIERlc2VsZWN0IHBsYWNlaG9sZGVyIG9wdGlvbiBpZiBzdGlsbCBzZWxlY3RlZC5cbiAgICAgICAgICAgIHZhciBwbGFjZWhvbGRlck9wdGlvbiA9ICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpLmRpc2FibGVkLnNlbGVjdGVkJyk7XG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXJPcHRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICB0aGlzLl90b2dnbGVFbnRyeUZyb21BcnJheShwbGFjZWhvbGRlck9wdGlvblswXS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZCA9IHRoaXMuX3RvZ2dsZUVudHJ5RnJvbUFycmF5KGtleSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAkKG9wdGlvbikudG9nZ2xlQ2xhc3MoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFNldCBzZWxlY3RlZCBvbiBvcmlnaW5hbCBzZWxlY3Qgb3B0aW9uXG4gICAgICAgICAgLy8gT25seSB0cmlnZ2VyIGlmIHNlbGVjdGVkIHN0YXRlIGNoYW5nZWRcbiAgICAgICAgICB2YXIgcHJldlNlbGVjdGVkID0gJCh0aGlzLl92YWx1ZURpY3Rba2V5XS5lbCkucHJvcCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBpZiAocHJldlNlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgICAgICAgICAgJCh0aGlzLl92YWx1ZURpY3Rba2V5XS5lbCkucHJvcCgnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XG4gICAgICAgICAgICB0aGlzLiRlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBJbnB1dCBDbGlja1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgdGhpcy5kcm9wZG93bi5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLl9zZXRWYWx1ZVRvSW5wdXQoKTtcbiAgICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZFN0YXRlcygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cERyb3Bkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRHJvcGRvd24oKSB7XG4gICAgICAgIHZhciBfdGhpczcxID0gdGhpcztcblxuICAgICAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgJCh0aGlzLndyYXBwZXIpLmFkZENsYXNzKCdzZWxlY3Qtd3JhcHBlciAnICsgdGhpcy5vcHRpb25zLmNsYXNzZXMpO1xuICAgICAgICB0aGlzLiRlbC5iZWZvcmUoJCh0aGlzLndyYXBwZXIpKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgZHJvcGRvd25cbiAgICAgICAgdGhpcy4kc2VsZWN0T3B0aW9ucyA9IHRoaXMuJGVsLmNoaWxkcmVuKCdvcHRpb24sIG9wdGdyb3VwJyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wdGlvbnMuaWQgPSBcInNlbGVjdC1vcHRpb25zLVwiICsgTS5ndWlkKCk7XG4gICAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmFkZENsYXNzKCdkcm9wZG93bi1jb250ZW50IHNlbGVjdC1kcm9wZG93biAnICsgKHRoaXMuaXNNdWx0aXBsZSA/ICdtdWx0aXBsZS1zZWxlY3QtZHJvcGRvd24nIDogJycpKTtcblxuICAgICAgICAvLyBDcmVhdGUgZHJvcGRvd24gc3RydWN0dXJlLlxuICAgICAgICBpZiAodGhpcy4kc2VsZWN0T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLiRzZWxlY3RPcHRpb25zLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICBpZiAoJChlbCkuaXMoJ29wdGlvbicpKSB7XG4gICAgICAgICAgICAgIC8vIERpcmVjdCBkZXNjZW5kYW50IG9wdGlvbi5cbiAgICAgICAgICAgICAgdmFyIG9wdGlvbkVsID0gdm9pZCAwO1xuICAgICAgICAgICAgICBpZiAoX3RoaXM3MS5pc011bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uRWwgPSBfdGhpczcxLl9hcHBlbmRPcHRpb25XaXRoSWNvbihfdGhpczcxLiRlbCwgZWwsICdtdWx0aXBsZScpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9wdGlvbkVsID0gX3RoaXM3MS5fYXBwZW5kT3B0aW9uV2l0aEljb24oX3RoaXM3MS4kZWwsIGVsKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIF90aGlzNzEuX2FkZE9wdGlvblRvVmFsdWVEaWN0KGVsLCBvcHRpb25FbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCQoZWwpLmlzKCdvcHRncm91cCcpKSB7XG4gICAgICAgICAgICAgIC8vIE9wdGdyb3VwLlxuICAgICAgICAgICAgICB2YXIgc2VsZWN0T3B0aW9ucyA9ICQoZWwpLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgJChfdGhpczcxLmRyb3Bkb3duT3B0aW9ucykuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JyArIGVsLmdldEF0dHJpYnV0ZSgnbGFiZWwnKSArICc8L3NwYW4+PC9saT4nKVswXSk7XG5cbiAgICAgICAgICAgICAgc2VsZWN0T3B0aW9ucy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25FbCA9IF90aGlzNzEuX2FwcGVuZE9wdGlvbldpdGhJY29uKF90aGlzNzEuJGVsLCBlbCwgJ29wdGdyb3VwLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgIF90aGlzNzEuX2FkZE9wdGlvblRvVmFsdWVEaWN0KGVsLCBvcHRpb25FbCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwuYWZ0ZXIodGhpcy5kcm9wZG93bk9wdGlvbnMpO1xuXG4gICAgICAgIC8vIEFkZCBpbnB1dCBkcm9wZG93blxuICAgICAgICB0aGlzLmlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgJCh0aGlzLmlucHV0KS5hZGRDbGFzcygnc2VsZWN0LWRyb3Bkb3duIGRyb3Bkb3duLXRyaWdnZXInKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpO1xuICAgICAgICB0aGlzLmlucHV0LnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnLCB0aGlzLmRyb3Bkb3duT3B0aW9ucy5pZCk7XG4gICAgICAgIGlmICh0aGlzLmVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgJCh0aGlzLmlucHV0KS5wcm9wKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbC5iZWZvcmUodGhpcy5pbnB1dCk7XG4gICAgICAgIHRoaXMuX3NldFZhbHVlVG9JbnB1dCgpO1xuXG4gICAgICAgIC8vIEFkZCBjYXJldFxuICAgICAgICB2YXIgZHJvcGRvd25JY29uID0gJCgnPHN2ZyBjbGFzcz1cImNhcmV0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz4nKTtcbiAgICAgICAgdGhpcy4kZWwuYmVmb3JlKGRyb3Bkb3duSWNvblswXSk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkcm9wZG93blxuICAgICAgICBpZiAoIXRoaXMuZWwuZGlzYWJsZWQpIHtcbiAgICAgICAgICB2YXIgZHJvcGRvd25PcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucy5kcm9wZG93bk9wdGlvbnMpO1xuXG4gICAgICAgICAgLy8gQWRkIGNhbGxiYWNrIGZvciBjZW50ZXJpbmcgc2VsZWN0ZWQgb3B0aW9uIHdoZW4gZHJvcGRvd24gY29udGVudCBpcyBzY3JvbGxhYmxlXG4gICAgICAgICAgZHJvcGRvd25PcHRpb25zLm9uT3BlbkVuZCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkT3B0aW9uID0gJChfdGhpczcxLmRyb3Bkb3duT3B0aW9ucykuZmluZCgnLnNlbGVjdGVkJykuZmlyc3QoKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICAvLyBGb2N1cyBzZWxlY3RlZCBvcHRpb24gaW4gZHJvcGRvd25cbiAgICAgICAgICAgICAgTS5rZXlEb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX3RoaXM3MS5kcm9wZG93bi5mb2N1c2VkSW5kZXggPSBzZWxlY3RlZE9wdGlvbi5pbmRleCgpO1xuICAgICAgICAgICAgICBfdGhpczcxLmRyb3Bkb3duLl9mb2N1c0ZvY3VzZWRJdGVtKCk7XG4gICAgICAgICAgICAgIE0ua2V5RG93biA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBzY3JvbGxpbmcgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICAgIGlmIChfdGhpczcxLmRyb3Bkb3duLmlzU2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBzZWxlY3RlZE9wdGlvblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBfdGhpczcxLmRyb3Bkb3duT3B0aW9ucy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7IC8vIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgLT0gX3RoaXM3MS5kcm9wZG93bk9wdGlvbnMuY2xpZW50SGVpZ2h0IC8gMjsgLy8gY2VudGVyIGluIGRyb3Bkb3duXG4gICAgICAgICAgICAgICAgX3RoaXM3MS5kcm9wZG93bk9wdGlvbnMuc2Nyb2xsVG9wID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duT3B0aW9ucy5jbG9zZU9uQ2xpY2sgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5kcm9wZG93biA9IE0uRHJvcGRvd24uaW5pdCh0aGlzLmlucHV0LCBkcm9wZG93bk9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGluaXRpYWwgc2VsZWN0aW9uc1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZFN0YXRlcygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCBvcHRpb24gdG8gdmFsdWUgZGljdFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCAgb3JpZ2luYWwgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3B0aW9uRWwgIGdlbmVyYXRlZCBvcHRpb24gZWxlbWVudFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FkZE9wdGlvblRvVmFsdWVEaWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZE9wdGlvblRvVmFsdWVEaWN0KGVsLCBvcHRpb25FbCkge1xuICAgICAgICB2YXIgaW5kZXggPSBPYmplY3Qua2V5cyh0aGlzLl92YWx1ZURpY3QpLmxlbmd0aDtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZHJvcGRvd25PcHRpb25zLmlkICsgaW5kZXg7XG4gICAgICAgIHZhciBvYmogPSB7fTtcbiAgICAgICAgb3B0aW9uRWwuaWQgPSBrZXk7XG5cbiAgICAgICAgb2JqLmVsID0gZWw7XG4gICAgICAgIG9iai5vcHRpb25FbCA9IG9wdGlvbkVsO1xuICAgICAgICB0aGlzLl92YWx1ZURpY3Rba2V5XSA9IG9iajtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVEcm9wZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVEcm9wZG93bigpIHtcbiAgICAgICAgJCh0aGlzLndyYXBwZXIpLmZpbmQoJy5jYXJldCcpLnJlbW92ZSgpO1xuICAgICAgICAkKHRoaXMuaW5wdXQpLnJlbW92ZSgpO1xuICAgICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5yZW1vdmUoKTtcbiAgICAgICAgJCh0aGlzLndyYXBwZXIpLmJlZm9yZSh0aGlzLiRlbCk7XG4gICAgICAgICQodGhpcy53cmFwcGVyKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBkcm9wZG93blxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBzZWxlY3QgIHNlbGVjdCBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9wdGlvbiAgb3B0aW9uIGVsZW1lbnQgZnJvbSBzZWxlY3RcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gICAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSAgb3B0aW9uIGVsZW1lbnQgYWRkZWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hcHBlbmRPcHRpb25XaXRoSWNvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRPcHRpb25XaXRoSWNvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xuICAgICAgICAvLyBBZGQgZGlzYWJsZWQgYXR0ciBpZiBkaXNhYmxlZFxuICAgICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IG9wdGlvbi5kaXNhYmxlZCA/ICdkaXNhYmxlZCAnIDogJyc7XG4gICAgICAgIHZhciBvcHRncm91cENsYXNzID0gdHlwZSA9PT0gJ29wdGdyb3VwLW9wdGlvbicgPyAnb3B0Z3JvdXAtb3B0aW9uICcgOiAnJztcbiAgICAgICAgdmFyIG11bHRpcGxlQ2hlY2tib3ggPSB0aGlzLmlzTXVsdGlwbGUgPyBcIjxsYWJlbD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiXCIgKyBkaXNhYmxlZENsYXNzICsgXCJcXFwiLz48c3Bhbj5cIiArIG9wdGlvbi5pbm5lckhUTUwgKyBcIjwvc3Bhbj48L2xhYmVsPlwiIDogb3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgdmFyIGxpRWwgPSAkKCc8bGk+PC9saT4nKTtcbiAgICAgICAgdmFyIHNwYW5FbCA9ICQoJzxzcGFuPjwvc3Bhbj4nKTtcbiAgICAgICAgc3BhbkVsLmh0bWwobXVsdGlwbGVDaGVja2JveCk7XG4gICAgICAgIGxpRWwuYWRkQ2xhc3MoZGlzYWJsZWRDbGFzcyArIFwiIFwiICsgb3B0Z3JvdXBDbGFzcyk7XG4gICAgICAgIGxpRWwuYXBwZW5kKHNwYW5FbCk7XG5cbiAgICAgICAgLy8gYWRkIGljb25zXG4gICAgICAgIHZhciBpY29uVXJsID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pY29uJyk7XG4gICAgICAgIGlmICghIWljb25VcmwpIHtcbiAgICAgICAgICB2YXIgaW1nRWwgPSAkKFwiPGltZyBhbHQ9XFxcIlxcXCIgc3JjPVxcXCJcIiArIGljb25VcmwgKyBcIlxcXCI+XCIpO1xuICAgICAgICAgIGxpRWwucHJlcGVuZChpbWdFbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgbXVsdGlwbGUgdHlwZS5cbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykuYXBwZW5kKGxpRWxbMF0pO1xuICAgICAgICByZXR1cm4gbGlFbFswXTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUb2dnbGUgZW50cnkgZnJvbSBvcHRpb25cbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgIE9wdGlvbiBrZXlcbiAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59ICBpZiBlbnRyeSB3YXMgYWRkZWQgb3IgcmVtb3ZlZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3RvZ2dsZUVudHJ5RnJvbUFycmF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3RvZ2dsZUVudHJ5RnJvbUFycmF5KGtleSkge1xuICAgICAgICB2YXIgbm90QWRkZWQgPSAhdGhpcy5fa2V5c1NlbGVjdGVkLmhhc093blByb3BlcnR5KGtleSk7XG4gICAgICAgIHZhciAkb3B0aW9uTGkgPSAkKHRoaXMuX3ZhbHVlRGljdFtrZXldLm9wdGlvbkVsKTtcblxuICAgICAgICBpZiAobm90QWRkZWQpIHtcbiAgICAgICAgICB0aGlzLl9rZXlzU2VsZWN0ZWRba2V5XSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2tleXNTZWxlY3RlZFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgJG9wdGlvbkxpLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZCcsIG5vdEFkZGVkKTtcblxuICAgICAgICAvLyBTZXQgY2hlY2tib3ggY2hlY2tlZCB2YWx1ZVxuICAgICAgICAkb3B0aW9uTGkuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIG5vdEFkZGVkKTtcblxuICAgICAgICAvLyB1c2Ugbm90QWRkZWQgaW5zdGVhZCBvZiB0cnVlICh0byBkZXRlY3QgaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCBvciBub3QpXG4gICAgICAgICRvcHRpb25MaS5wcm9wKCdzZWxlY3RlZCcsIG5vdEFkZGVkKTtcblxuICAgICAgICByZXR1cm4gbm90QWRkZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRleHQgdmFsdWUgdG8gaW5wdXRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRWYWx1ZVRvSW5wdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0VmFsdWVUb0lucHV0KCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIHZhciBvcHRpb25zID0gdGhpcy4kZWwuZmluZCgnb3B0aW9uJyk7XG5cbiAgICAgICAgb3B0aW9ucy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIGlmICgkKGVsKS5wcm9wKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICB2YXIgdGV4dCA9ICQoZWwpLnRleHQoKTtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZpcnN0RGlzYWJsZWQgPSB0aGlzLiRlbC5maW5kKCdvcHRpb246ZGlzYWJsZWQnKS5lcSgwKTtcbiAgICAgICAgICBpZiAoZmlyc3REaXNhYmxlZC5sZW5ndGggJiYgZmlyc3REaXNhYmxlZFswXS52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGZpcnN0RGlzYWJsZWQudGV4dCgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gdmFsdWVzLmpvaW4oJywgJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHNlbGVjdGVkIHN0YXRlIG9mIGRyb3Bkb3duIHRvIG1hdGNoIGFjdHVhbCBzZWxlY3QgZWxlbWVudFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFNlbGVjdGVkU3RhdGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFNlbGVjdGVkU3RhdGVzKCkge1xuICAgICAgICB0aGlzLl9rZXlzU2VsZWN0ZWQgPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fdmFsdWVEaWN0KSB7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IHRoaXMuX3ZhbHVlRGljdFtrZXldO1xuICAgICAgICAgIHZhciBvcHRpb25Jc1NlbGVjdGVkID0gJChvcHRpb24uZWwpLnByb3AoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgJChvcHRpb24ub3B0aW9uRWwpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBvcHRpb25Jc1NlbGVjdGVkKTtcbiAgICAgICAgICBpZiAob3B0aW9uSXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVPcHRpb24oJCh0aGlzLmRyb3Bkb3duT3B0aW9ucyksICQob3B0aW9uLm9wdGlvbkVsKSk7XG4gICAgICAgICAgICB0aGlzLl9rZXlzU2VsZWN0ZWRba2V5XSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQob3B0aW9uLm9wdGlvbkVsKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNYWtlIG9wdGlvbiBhcyBzZWxlY3RlZCBhbmQgc2Nyb2xsIHRvIHNlbGVjdGVkIHBvc2l0aW9uXG4gICAgICAgKiBAcGFyYW0ge2pRdWVyeX0gY29sbGVjdGlvbiAgU2VsZWN0IG9wdGlvbnMgalF1ZXJ5IGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gbmV3T3B0aW9uICBlbGVtZW50IG9mIHRoZSBuZXcgb3B0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYWN0aXZhdGVPcHRpb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYWN0aXZhdGVPcHRpb24oY29sbGVjdGlvbiwgbmV3T3B0aW9uKSB7XG4gICAgICAgIGlmIChuZXdPcHRpb24pIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgY29sbGVjdGlvbi5maW5kKCdsaS5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgb3B0aW9uID0gJChuZXdPcHRpb24pO1xuICAgICAgICAgIG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBTZWxlY3RlZCBWYWx1ZXNcbiAgICAgICAqIEByZXR1cm4ge0FycmF5fSAgQXJyYXkgb2Ygc2VsZWN0ZWQgdmFsdWVzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRTZWxlY3RlZFZhbHVlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNlbGVjdGVkVmFsdWVzKCkge1xuICAgICAgICB2YXIgc2VsZWN0ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX2tleXNTZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdGVkVmFsdWVzLnB1c2godGhpcy5fdmFsdWVEaWN0W2tleV0uZWwudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFZhbHVlcztcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoRm9ybVNlbGVjdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZvcm1TZWxlY3QpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9Gb3JtU2VsZWN0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZvcm1TZWxlY3Q7XG4gIH0oQ29tcG9uZW50KTtcblxuICBNLkZvcm1TZWxlY3QgPSBGb3JtU2VsZWN0O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoRm9ybVNlbGVjdCwgJ2Zvcm1TZWxlY3QnLCAnTV9Gb3JtU2VsZWN0Jyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFJhbmdlID0gZnVuY3Rpb24gKF9Db21wb25lbnQyMSkge1xuICAgIF9pbmhlcml0cyhSYW5nZSwgX0NvbXBvbmVudDIxKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBSYW5nZSBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFJhbmdlKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFuZ2UpO1xuXG4gICAgICB2YXIgX3RoaXM3MiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChSYW5nZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJhbmdlKSkuY2FsbCh0aGlzLCBSYW5nZSwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM3Mi5lbC5NX1JhbmdlID0gX3RoaXM3MjtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgcmFuZ2VcbiAgICAgICAqIEBtZW1iZXIgUmFuZ2Ujb3B0aW9uc1xuICAgICAgICovXG4gICAgICBfdGhpczcyLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgUmFuZ2UuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICBfdGhpczcyLl9tb3VzZWRvd24gPSBmYWxzZTtcblxuICAgICAgLy8gU2V0dXBcbiAgICAgIF90aGlzNzIuX3NldHVwVGh1bWIoKTtcblxuICAgICAgX3RoaXM3Mi5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXM3MjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUmFuZ2UsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZVRodW1iKCk7XG4gICAgICAgIHRoaXMuZWwuTV9SYW5nZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVJhbmdlQ2hhbmdlQm91bmQgPSB0aGlzLl9oYW5kbGVSYW5nZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRCb3VuZCA9IHRoaXMuX2hhbmRsZVJhbmdlTW91c2Vkb3duVG91Y2hzdGFydC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlQm91bmQgPSB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVJhbmdlTW91c2V1cFRvdWNoZW5kQm91bmQgPSB0aGlzLl9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCA9IHRoaXMuX2hhbmRsZVJhbmdlQmx1ck1vdXNlb3V0VG91Y2hsZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlUmFuZ2VDaGFuZ2VCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZVJhbmdlTW91c2Vkb3duVG91Y2hzdGFydEJvdW5kKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVJhbmdlSW5wdXRNb3VzZW1vdmVUb3VjaG1vdmVCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZXVwVG91Y2hlbmRCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZEJvdW5kKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hsZWF2ZScsIHRoaXMuX2hhbmRsZVJhbmdlQmx1ck1vdXNlb3V0VG91Y2hsZWF2ZUJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlUmFuZ2VDaGFuZ2VCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZVJhbmdlTW91c2Vkb3duVG91Y2hzdGFydEJvdW5kKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVJhbmdlSW5wdXRNb3VzZW1vdmVUb3VjaG1vdmVCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZXVwVG91Y2hlbmRCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZEJvdW5kKTtcblxuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hsZWF2ZScsIHRoaXMuX2hhbmRsZVJhbmdlQmx1ck1vdXNlb3V0VG91Y2hsZWF2ZUJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmFuZ2UgQ2hhbmdlXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlUmFuZ2VDaGFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmFuZ2VDaGFuZ2UoKSB7XG4gICAgICAgICQodGhpcy52YWx1ZSkuaHRtbCh0aGlzLiRlbC52YWwoKSk7XG5cbiAgICAgICAgaWYgKCEkKHRoaXMudGh1bWIpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHRoaXMuX3Nob3dSYW5nZUJ1YmJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0aGlzLl9jYWxjUmFuZ2VPZmZzZXQoKTtcbiAgICAgICAgJCh0aGlzLnRodW1iKS5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBSYW5nZSBNb3VzZWRvd24gYW5kIFRvdWNoc3RhcnRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmFuZ2VNb3VzZWRvd25Ub3VjaHN0YXJ0KGUpIHtcbiAgICAgICAgLy8gU2V0IGluZGljYXRvciB2YWx1ZVxuICAgICAgICAkKHRoaXMudmFsdWUpLmh0bWwodGhpcy4kZWwudmFsKCkpO1xuXG4gICAgICAgIHRoaXMuX21vdXNlZG93biA9IHRydWU7XG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICBpZiAoISQodGhpcy50aHVtYikuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgdGhpcy5fc2hvd1JhbmdlQnViYmxlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50eXBlICE9PSAnaW5wdXQnKSB7XG4gICAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0aGlzLl9jYWxjUmFuZ2VPZmZzZXQoKTtcbiAgICAgICAgICAkKHRoaXMudGh1bWIpLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmFuZ2UgSW5wdXQsIE1vdXNlbW92ZSBhbmQgVG91Y2htb3ZlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5fbW91c2Vkb3duKSB7XG4gICAgICAgICAgaWYgKCEkKHRoaXMudGh1bWIpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1JhbmdlQnViYmxlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0aGlzLl9jYWxjUmFuZ2VPZmZzZXQoKTtcbiAgICAgICAgICAkKHRoaXMudGh1bWIpLmFkZENsYXNzKCdhY3RpdmUnKS5jc3MoJ2xlZnQnLCBvZmZzZXRMZWZ0ICsgJ3B4Jyk7XG4gICAgICAgICAgJCh0aGlzLnZhbHVlKS5odG1sKHRoaXMuJGVsLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBSYW5nZSBNb3VzZXVwIGFuZCBUb3VjaGVuZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVJhbmdlTW91c2V1cFRvdWNoZW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJhbmdlTW91c2V1cFRvdWNoZW5kKCkge1xuICAgICAgICB0aGlzLl9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBSYW5nZSBCbHVyLCBNb3VzZW91dCBhbmQgVG91Y2hsZWF2ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVJhbmdlQmx1ck1vdXNlb3V0VG91Y2hsZWF2ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmUoKSB7XG4gICAgICAgIGlmICghdGhpcy5fbW91c2Vkb3duKSB7XG4gICAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQodGhpcy4kZWwuY3NzKCdwYWRkaW5nLWxlZnQnKSk7XG4gICAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSA3ICsgcGFkZGluZ0xlZnQgKyAncHgnO1xuXG4gICAgICAgICAgaWYgKCQodGhpcy50aHVtYikuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBhbmltLnJlbW92ZSh0aGlzLnRodW1iKTtcbiAgICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgICB0YXJnZXRzOiB0aGlzLnRodW1iLFxuICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICB0b3A6IDEwLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IG1hcmdpbkxlZnQsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKHRoaXMudGh1bWIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBUaHVtYlwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cFRodW1iKCkge1xuICAgICAgICB0aGlzLnRodW1iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAkKHRoaXMudGh1bWIpLmFkZENsYXNzKCd0aHVtYicpO1xuICAgICAgICAkKHRoaXMudmFsdWUpLmFkZENsYXNzKCd2YWx1ZScpO1xuICAgICAgICAkKHRoaXMudGh1bWIpLmFwcGVuZCh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy4kZWwuYWZ0ZXIodGhpcy50aHVtYik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlVGh1bWJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGh1bWIoKSB7XG4gICAgICAgICQodGhpcy50aHVtYikucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogbW9ycGggdGh1bWIgaW50byBidWJibGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zaG93UmFuZ2VCdWJibGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2hvd1JhbmdlQnViYmxlKCkge1xuICAgICAgICB2YXIgcGFkZGluZ0xlZnQgPSBwYXJzZUludCgkKHRoaXMudGh1bWIpLnBhcmVudCgpLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgICB2YXIgbWFyZ2luTGVmdCA9IC03ICsgcGFkZGluZ0xlZnQgKyAncHgnOyAvLyBUT0RPOiBmaXggbWFnaWMgbnVtYmVyP1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLnRodW1iKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy50aHVtYixcbiAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgIHdpZHRoOiAzMCxcbiAgICAgICAgICB0b3A6IC0zMCxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0LFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1aW50J1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxjdWxhdGUgdGhlIG9mZnNldCBvZiB0aGUgdGh1bWJcbiAgICAgICAqIEByZXR1cm4ge051bWJlcn0gIG9mZnNldCBpbiBwaXhlbHNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jYWxjUmFuZ2VPZmZzZXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FsY1JhbmdlT2Zmc2V0KCkge1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLiRlbC53aWR0aCgpIC0gMTU7XG4gICAgICAgIHZhciBtYXggPSBwYXJzZUZsb2F0KHRoaXMuJGVsLmF0dHIoJ21heCcpKSB8fCAxMDA7IC8vIFJhbmdlIGRlZmF1bHQgbWF4XG4gICAgICAgIHZhciBtaW4gPSBwYXJzZUZsb2F0KHRoaXMuJGVsLmF0dHIoJ21pbicpKSB8fCAwOyAvLyBSYW5nZSBkZWZhdWx0IG1pblxuICAgICAgICB2YXIgcGVyY2VudCA9IChwYXJzZUZsb2F0KHRoaXMuJGVsLnZhbCgpKSAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICAgICAgcmV0dXJuIHBlcmNlbnQgKiB3aWR0aDtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoUmFuZ2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYW5nZSksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1JhbmdlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJhbmdlO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5SYW5nZSA9IFJhbmdlO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoUmFuZ2UsICdyYW5nZScsICdNX1JhbmdlJyk7XG4gIH1cblxuICBSYW5nZS5pbml0KCQoJ2lucHV0W3R5cGU9cmFuZ2VdJykpO1xufSkoY2FzaCwgTS5hbmltZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==