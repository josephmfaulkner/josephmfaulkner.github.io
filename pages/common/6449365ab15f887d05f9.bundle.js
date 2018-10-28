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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9jb21tb24uc2Nzcz8wMmQ1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXRlcmlhbGl6ZS1jc3MvZGlzdC9qcy9tYXRlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2Qjs7Ozs7OztBQ0E3Qix1Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxrREFBa0QsOERBQThELDBCQUEwQiw0Q0FBNEMsdUJBQXVCLGtCQUFrQixFQUFFLE9BQU8sd0NBQXdDLEVBQUUsRUFBRSw0QkFBNEIsbUJBQW1CLEVBQUUsT0FBTyx1QkFBdUIsNEJBQTRCLGtCQUFrQixFQUFFLDhCQUE4QixFQUFFOztBQUV4ZSxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsaURBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywwQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWSxZQUFZO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNENBQTRDLGNBQWM7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVUsWUFBWTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksU0FBUztBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0ZBQW9GO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkIsYUFBYSw0QkFBNEI7QUFDekMsYUFBYSxPQUFPO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxJQUFJLElBQTBDO0FBQzlDLEVBQUUsaUNBQVksRUFBRSxtQ0FBRTtBQUNsQjtBQUNBLEdBQUc7QUFBQSxvR0FBQzs7QUFFSjtBQUNBLENBQUMsTUFBTSxFQUtOOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGVBQWU7QUFDcEI7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVUsR0FBRztBQUM1Qix1RkFBdUY7QUFDdkYsRUFBRTtBQUNGO0FBQ0EsRUFBRSx5Q0FBeUM7QUFDM0M7QUFDQSxzQ0FBc0M7QUFDdEMsRUFBRSwyQkFBMkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVDQUF1Qyw4RUFBOEUsdUZBQXVGO0FBQ25PO0FBQ0EsS0FBSyxFQUFFLEVBQUU7QUFDVCxFQUFFO0FBQ0YsWUFBWTtBQUNaLDJCQUEyQiwwQkFBMEIsSUFBSTtBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLCtCQUErQixLQUFLLFdBQVc7QUFDL0M7QUFDQSxJQUFJO0FBQ0osRUFBRSxvQ0FBb0M7QUFDdEMsK0JBQStCLGlDQUFpQztBQUNoRSxXQUFXO0FBQ1g7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixPQUFPO0FBQ1AsZ0JBQWdCO0FBQ2hCLFFBQVE7QUFDUixLQUFLLEdBQUc7QUFDUjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCLFdBQVcsa0JBQWtCO0FBQ3JFLG1CQUFtQixvQkFBb0IsRUFBRTtBQUN6QyxLQUFLLG9CQUFvQixTQUFTLFNBQVMscURBQXFELDJDQUEyQztBQUMzSTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDLHFCQUFxQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsNEZBQTRGLE9BQU87QUFDbkc7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDO0FBQ2hDLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLFVBQVU7QUFDVjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN0RCwyQkFBMkI7QUFDM0IsK0JBQStCO0FBQy9CLEdBQUc7QUFDSDtBQUNBLHdCQUF3QixhQUFhO0FBQ3JDLEtBQUssNEhBQTRILHlCQUF5QjtBQUMxSjtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsd0VBQXdFO0FBQ3hFLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxnREFBZ0QsNEVBQTRFLDJEQUEyRDtBQUN2TCxHQUFHO0FBQ0g7QUFDQSxnREFBZ0Qsc0JBQXNCLGlCQUFpQix1REFBdUQsZUFBZTtBQUM3SjtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssRUFBRTtBQUNQLEdBQUc7QUFDSCxzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QixrQ0FBa0M7QUFDbEMsR0FBRztBQUNILG9DQUFvQyxpQkFBaUIsa0JBQWtCLGtCQUFrQixvQ0FBb0Msa0JBQWtCO0FBQy9JLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsaUJBQWlCLHlCQUF5QixxQkFBcUI7QUFDL0QsMkJBQTJCLHdCQUF3QjtBQUNuRCxLQUFLO0FBQ0wsR0FBRztBQUNILG9EQUFvRCxrQ0FBa0M7QUFDdEYsaURBQWlEO0FBQ2pELDBFQUEwRTtBQUMxRSxrQkFBa0IsbURBQW1ELEdBQUcsbURBQW1ELEVBQUU7QUFDN0gsb0JBQW9CO0FBQ3BCLHlCQUF5QjtBQUN6QixHQUFHO0FBQ0g7QUFDQSwrQkFBK0I7QUFDL0IsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QyxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsVUFBVSxpQ0FBaUM7QUFDM0M7QUFDQSwwREFBMEQ7QUFDMUQsT0FBTztBQUNQLEtBQUssaUdBQWlHLFFBQVEsUUFBUTtBQUN0SCxHQUFHO0FBQ0gsK0NBQStDO0FBQy9DO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxpQkFBaUI7QUFDakIsY0FBYztBQUNkLEtBQUs7QUFDTCxHQUFHO0FBQ0gsaUJBQWlCO0FBQ2pCLHVCQUF1QixtRkFBbUY7QUFDMUcsS0FBSztBQUNMLDBCQUEwQixpQ0FBaUMsWUFBWSxnQ0FBZ0M7QUFDdkcsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxjQUFjO0FBQ2QsVUFBVTtBQUNWLHlCQUF5QjtBQUN6QjtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDLEtBQUssb0NBQW9DLDhCQUE4QjtBQUN2RSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsVUFBVTtBQUNWLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpQkFBaUIsZUFBZSwrQkFBK0IsdUNBQXVDLHdCQUF3QixzRUFBc0Usb0JBQW9CLG1DQUFtQywyQkFBMkI7QUFDelQsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQixLQUFLO0FBQ2hDLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILDBCQUEwQjtBQUMxQjtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVix3REFBd0QsaURBQWlEO0FBQ3pHLEtBQUssYUFBYSxhQUFhLDRHQUE0RztBQUMzSSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCw0QkFBNEIsaUNBQWlDLE9BQU87QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxTQUFTLFdBQVcsb05BQW9OLE9BQU87QUFDL087QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHlEQUF5RDtBQUMxSCxTQUFTLHVDQUF1QyxPQUFPO0FBQ3ZEO0FBQ0EsU0FBUyxlQUFlLDZDQUE2QyxtQkFBbUI7QUFDeEYsT0FBTywwQ0FBMEMsT0FBTztBQUN4RDtBQUNBLE9BQU8sa0JBQWtCO0FBQ3pCLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBLFNBQVMsWUFBWSxLQUFLO0FBQzFCO0FBQ0E7QUFDQSxPQUFPLGtFQUFrRSx5QkFBeUIsd0ZBQXdGLFlBQVk7QUFDdE0sS0FBSyxxQkFBcUIsS0FBSztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHFCQUFxQixrQkFBa0IsZUFBZSxjQUFjLGFBQWEsaUJBQWlCLDZCQUE2QixtREFBbUQsS0FBSywyQkFBMkIsS0FBSztBQUN2TjtBQUNBO0FBQ0EsTUFBTTtBQUNOLFlBQVksYUFBYTtBQUN6QixNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ04sMkJBQTJCLHlCQUF5QjtBQUNwRCxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ04sK0JBQStCLE1BQU07QUFDckMsTUFBTTtBQUNOO0FBQ0EsZ0JBQWdCO0FBQ2hCLE1BQU0sZUFBZSxVQUFVLHVCQUF1QjtBQUN0RCxHQUFHLFVBQVUsc0hBQXNIO0FBQ25JLFdBQVcsK0VBQStFO0FBQzFGO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCwyQkFBMkIsRUFBRSxlQUFlLEVBQUU7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUNBQXFDLHVDQUF1QyxRQUFRO0FBQ3BGO0FBQ0EsU0FBUztBQUNULDJDQUEyQyxzQkFBc0Isc0JBQXNCLHNCQUFzQix1QkFBdUI7QUFDcEk7QUFDQSxXQUFXLElBQUk7QUFDZixvRkFBb0Y7QUFDcEYsdUJBQXVCLE9BQU87QUFDOUIsb0ZBQW9GLG1CQUFtQjtBQUN2RztBQUNBLGFBQWE7QUFDYixXQUFXLHlCQUF5QjtBQUNwQztBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsYUFBYSx3Q0FBd0M7QUFDckQsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYTtBQUNiO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxHQUFHO0FBQ1YsYUFBYSxnQ0FBZ0M7QUFDN0MsY0FBYztBQUNkLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sV0FBVztBQUNsQixLQUFLO0FBQ0wsR0FBRztBQUNILFlBQVk7QUFDWjtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCwwQkFBMEI7QUFDMUIsS0FBSyxFQUFFO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUI7QUFDdkIsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHLEdBQUcsb0JBQW9CLFlBQVksY0FBYztBQUNwRCxhQUFhLHNCQUFzQixLQUFLO0FBQ3hDLHdEQUF3RCxLQUFLO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLElBQUksZUFBZTtBQUNuQjtBQUNBLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2Q7QUFDQSxJQUFJO0FBQ0osaUJBQWlCLHNDQUFzQztBQUN2RCxJQUFJLGFBQWEsY0FBYztBQUMvQixpQkFBaUIsVUFBVSxlQUFlO0FBQzFDO0FBQ0EscUJBQXFCO0FBQ3JCLE9BQU8sRUFBRTtBQUNULGlDQUFpQyxHQUFHLG1DQUFtQyxlQUFlLGlCQUFpQixnQkFBZ0IsMEJBQTBCLGtDQUFrQyxhQUFhLGlCQUFpQixpQkFBaUIsU0FBUyxhQUFhLGlCQUFpQiw0Q0FBNEM7QUFDclQsT0FBTyxFQUFFLFVBQVUsVUFBVSwwQkFBMEI7QUFDdkQsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSixDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0Esa0NBQWtDOztBQUVsQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixRQUFRO0FBQ3hCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixPQUFPO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9CQUFvQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSztBQUN0Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsbUNBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDLE9BQU87QUFDUDtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2Qjs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLE9BQU87QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNM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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLDRCQUE0QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVILCtiQUErYjs7QUFFL2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSwrR0FBK0c7QUFDL0c7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJCQUEyQixVQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFT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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztB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RUw7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7O0FDcmxZRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoicGFnZXMvY29tbW9uLzY0NDkzNjVhYjE1Zjg4N2QwNWY5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9jb21tb24uc2Nzcyc7XG5pbXBvcnQgJ21hdGVyaWFsaXplLWNzcy9kaXN0L2pzL21hdGVyaWFsaXplJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKiFcbiAqIE1hdGVyaWFsaXplIHYxLjAuMCAoaHR0cDovL21hdGVyaWFsaXplY3NzLmNvbSlcbiAqIENvcHlyaWdodCAyMDE0LTIwMTcgTWF0ZXJpYWxpemVcbiAqIE1JVCBMaWNlbnNlIChodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vRG9nZmFsby9tYXRlcmlhbGl6ZS9tYXN0ZXIvTElDRU5TRSlcbiAqL1xudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IHJldHVybiBnZXQocGFyZW50LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpOyB9IH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qISBjYXNoLWRvbSAxLjMuNSwgaHR0cHM6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvY2FzaCBAbGljZW5zZSBNSVQgKi9cbihmdW5jdGlvbiAoZmFjdG9yeSkge1xuICB3aW5kb3cuY2FzaCA9IGZhY3RvcnkoKTtcbn0pKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgd2luID0gd2luZG93LFxuICAgICAgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICAgIHNsaWNlID0gQXJyYXlQcm90by5zbGljZSxcbiAgICAgIGZpbHRlciA9IEFycmF5UHJvdG8uZmlsdGVyLFxuICAgICAgcHVzaCA9IEFycmF5UHJvdG8ucHVzaDtcblxuICB2YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgLy8gQHNlZSBodHRwczovL2NyYnVnLmNvbS81Njg0NDhcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09IHR5cGVvZiBub29wICYmIGl0ZW0uY2FsbDtcbiAgfSxcbiAgICAgIGlzU3RyaW5nID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIGl0ZW0gPT09IHR5cGVvZiBcIlwiO1xuICB9O1xuXG4gIHZhciBpZE1hdGNoID0gL14jW1xcdy1dKiQvLFxuICAgICAgY2xhc3NNYXRjaCA9IC9eXFwuW1xcdy1dKiQvLFxuICAgICAgaHRtbE1hdGNoID0gLzwuKz4vLFxuICAgICAgc2luZ2xldCA9IC9eXFx3KyQvO1xuXG4gIGZ1bmN0aW9uIGZpbmQoc2VsZWN0b3IsIGNvbnRleHQpIHtcbiAgICBjb250ZXh0ID0gY29udGV4dCB8fCBkb2M7XG4gICAgdmFyIGVsZW1zID0gY2xhc3NNYXRjaC50ZXN0KHNlbGVjdG9yKSA/IGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWxlY3Rvci5zbGljZSgxKSkgOiBzaW5nbGV0LnRlc3Qoc2VsZWN0b3IpID8gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikgOiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHJldHVybiBlbGVtcztcbiAgfVxuXG4gIHZhciBmcmFnO1xuICBmdW5jdGlvbiBwYXJzZUhUTUwoc3RyKSB7XG4gICAgaWYgKCFmcmFnKSB7XG4gICAgICBmcmFnID0gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChudWxsKTtcbiAgICAgIHZhciBiYXNlID0gZnJhZy5jcmVhdGVFbGVtZW50KFwiYmFzZVwiKTtcbiAgICAgIGJhc2UuaHJlZiA9IGRvYy5sb2NhdGlvbi5ocmVmO1xuICAgICAgZnJhZy5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO1xuICAgIH1cblxuICAgIGZyYWcuYm9keS5pbm5lckhUTUwgPSBzdHI7XG5cbiAgICByZXR1cm4gZnJhZy5ib2R5LmNoaWxkTm9kZXM7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlYWR5KGZuKSB7XG4gICAgaWYgKGRvYy5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIikge1xuICAgICAgZm4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZuKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBJbml0KHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgYWxyZWFkeSBhIGNhc2ggY29sbGVjdGlvbiwgZG9uJ3QgZG8gYW55IGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICAgIGlmIChzZWxlY3Rvci5jYXNoICYmIHNlbGVjdG9yICE9PSB3aW4pIHtcbiAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG5cbiAgICB2YXIgZWxlbXMgPSBzZWxlY3RvcixcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxlbmd0aDtcblxuICAgIGlmIChpc1N0cmluZyhzZWxlY3RvcikpIHtcbiAgICAgIGVsZW1zID0gaWRNYXRjaC50ZXN0KHNlbGVjdG9yKSA/XG4gICAgICAvLyBJZiBhbiBJRCB1c2UgdGhlIGZhc3RlciBnZXRFbGVtZW50QnlJZCBjaGVja1xuICAgICAgZG9jLmdldEVsZW1lbnRCeUlkKHNlbGVjdG9yLnNsaWNlKDEpKSA6IGh0bWxNYXRjaC50ZXN0KHNlbGVjdG9yKSA/XG4gICAgICAvLyBJZiBIVE1MLCBwYXJzZSBpdCBpbnRvIHJlYWwgZWxlbWVudHNcbiAgICAgIHBhcnNlSFRNTChzZWxlY3RvcikgOlxuICAgICAgLy8gZWxzZSB1c2UgYGZpbmRgXG4gICAgICBmaW5kKHNlbGVjdG9yLCBjb250ZXh0KTtcblxuICAgICAgLy8gSWYgZnVuY3Rpb24sIHVzZSBhcyBzaG9ydGN1dCBmb3IgRE9NIHJlYWR5XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgb25SZWFkeShzZWxlY3Rvcik7cmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtcykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gSWYgYSBzaW5nbGUgRE9NIGVsZW1lbnQgaXMgcGFzc2VkIGluIG9yIHJlY2VpdmVkIHZpYSBJRCwgcmV0dXJuIHRoZSBzaW5nbGUgZWxlbWVudFxuICAgIGlmIChlbGVtcy5ub2RlVHlwZSB8fCBlbGVtcyA9PT0gd2luKSB7XG4gICAgICB0aGlzWzBdID0gZWxlbXM7XG4gICAgICB0aGlzLmxlbmd0aCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyZWF0IGxpa2UgYW4gYXJyYXkgYW5kIGxvb3AgdGhyb3VnaCBlYWNoIGl0ZW0uXG4gICAgICBsZW5ndGggPSB0aGlzLmxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpc1tpXSA9IGVsZW1zW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FzaChzZWxlY3RvciwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgSW5pdChzZWxlY3RvciwgY29udGV4dCk7XG4gIH1cblxuICB2YXIgZm4gPSBjYXNoLmZuID0gY2FzaC5wcm90b3R5cGUgPSBJbml0LnByb3RvdHlwZSA9IHsgLy8ganNoaW50IGlnbm9yZTpsaW5lXG4gICAgY2FzaDogdHJ1ZSxcbiAgICBsZW5ndGg6IDAsXG4gICAgcHVzaDogcHVzaCxcbiAgICBzcGxpY2U6IEFycmF5UHJvdG8uc3BsaWNlLFxuICAgIG1hcDogQXJyYXlQcm90by5tYXAsXG4gICAgaW5pdDogSW5pdFxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgXCJjb25zdHJ1Y3RvclwiLCB7IHZhbHVlOiBjYXNoIH0pO1xuXG4gIGNhc2gucGFyc2VIVE1MID0gcGFyc2VIVE1MO1xuICBjYXNoLm5vb3AgPSBub29wO1xuICBjYXNoLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuICBjYXNoLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbiAgY2FzaC5leHRlbmQgPSBmbi5leHRlbmQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHt9O1xuXG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgIGxlbmd0aCA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICBpID0gMTtcblxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICAgIGkgPSAwO1xuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghYXJnc1tpXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBhcmdzW2ldKSB7XG4gICAgICAgIGlmIChhcmdzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IGFyZ3NbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gZWFjaChjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuICAgIHZhciBsID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChjYWxsYmFjay5jYWxsKGNvbGxlY3Rpb25baV0sIGNvbGxlY3Rpb25baV0sIGksIGNvbGxlY3Rpb24pID09PSBmYWxzZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaGVzKGVsLCBzZWxlY3Rvcikge1xuICAgIHZhciBtID0gZWwgJiYgKGVsLm1hdGNoZXMgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yKTtcbiAgICByZXR1cm4gISFtICYmIG0uY2FsbChlbCwgc2VsZWN0b3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qIFVzZSBicm93c2VyJ3MgYG1hdGNoZXNgIGZ1bmN0aW9uIGlmIHN0cmluZyAqL1xuICAgICAgaXNTdHJpbmcoc2VsZWN0b3IpID8gbWF0Y2hlcyA6XG4gICAgICAvKiBNYXRjaCBhIGNhc2ggZWxlbWVudCAqL1xuICAgICAgc2VsZWN0b3IuY2FzaCA/IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0b3IuaXMoZWwpO1xuICAgICAgfSA6XG4gICAgICAvKiBEaXJlY3QgY29tcGFyaXNvbiAqL1xuICAgICAgZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gZWwgPT09IHNlbGVjdG9yO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmlxdWUoY29sbGVjdGlvbikge1xuICAgIHJldHVybiBjYXNoKHNsaWNlLmNhbGwoY29sbGVjdGlvbikuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCwgc2VsZikge1xuICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gaW5kZXg7XG4gICAgfSkpO1xuICB9XG5cbiAgY2FzaC5leHRlbmQoe1xuICAgIG1lcmdlOiBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgICAgdmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuICAgICAgICAgIGkgPSBmaXJzdC5sZW5ndGgsXG4gICAgICAgICAgaiA9IDA7XG5cbiAgICAgIGZvciAoOyBqIDwgbGVuOyBpKyssIGorKykge1xuICAgICAgICBmaXJzdFtpXSA9IHNlY29uZFtqXTtcbiAgICAgIH1cblxuICAgICAgZmlyc3QubGVuZ3RoID0gaTtcbiAgICAgIHJldHVybiBmaXJzdDtcbiAgICB9LFxuXG4gICAgZWFjaDogZWFjaCxcbiAgICBtYXRjaGVzOiBtYXRjaGVzLFxuICAgIHVuaXF1ZTogdW5pcXVlLFxuICAgIGlzQXJyYXk6IEFycmF5LmlzQXJyYXksXG4gICAgaXNOdW1lcmljOiBmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIHVpZCA9IGNhc2gudWlkID0gXCJfY2FzaFwiICsgRGF0ZS5ub3coKTtcblxuICBmdW5jdGlvbiBnZXREYXRhQ2FjaGUobm9kZSkge1xuICAgIHJldHVybiBub2RlW3VpZF0gPSBub2RlW3VpZF0gfHwge307XG4gIH1cblxuICBmdW5jdGlvbiBzZXREYXRhKG5vZGUsIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gZ2V0RGF0YUNhY2hlKG5vZGUpW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERhdGEobm9kZSwga2V5KSB7XG4gICAgdmFyIGMgPSBnZXREYXRhQ2FjaGUobm9kZSk7XG4gICAgaWYgKGNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjW2tleV0gPSBub2RlLmRhdGFzZXQgPyBub2RlLmRhdGFzZXRba2V5XSA6IGNhc2gobm9kZSkuYXR0cihcImRhdGEtXCIgKyBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gY1trZXldO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRGF0YShub2RlLCBrZXkpIHtcbiAgICB2YXIgYyA9IGdldERhdGFDYWNoZShub2RlKTtcbiAgICBpZiAoYykge1xuICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICB9IGVsc2UgaWYgKG5vZGUuZGF0YXNldCkge1xuICAgICAgZGVsZXRlIG5vZGUuZGF0YXNldFtrZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXNoKG5vZGUpLnJlbW92ZUF0dHIoXCJkYXRhLVwiICsgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBkYXRhOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmIChpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IGdldERhdGEodGhpc1swXSwgbmFtZSkgOiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gc2V0RGF0YSh2LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gbmFtZSkge1xuICAgICAgICB0aGlzLmRhdGEoa2V5LCBuYW1lW2tleV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlRGF0YTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gcmVtb3ZlRGF0YSh2LCBrZXkpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBub3RXaGl0ZU1hdGNoID0gL1xcUysvZztcblxuICBmdW5jdGlvbiBnZXRDbGFzc2VzKGMpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoYykgJiYgYy5tYXRjaChub3RXaGl0ZU1hdGNoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKHYsIGMpIHtcbiAgICByZXR1cm4gdi5jbGFzc0xpc3QgPyB2LmNsYXNzTGlzdC5jb250YWlucyhjKSA6IG5ldyBSZWdFeHAoXCIoXnwgKVwiICsgYyArIFwiKCB8JClcIiwgXCJnaVwiKS50ZXN0KHYuY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKHYsIGMsIHNwYWNlZE5hbWUpIHtcbiAgICBpZiAodi5jbGFzc0xpc3QpIHtcbiAgICAgIHYuY2xhc3NMaXN0LmFkZChjKTtcbiAgICB9IGVsc2UgaWYgKHNwYWNlZE5hbWUuaW5kZXhPZihcIiBcIiArIGMgKyBcIiBcIikpIHtcbiAgICAgIHYuY2xhc3NOYW1lICs9IFwiIFwiICsgYztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyh2LCBjKSB7XG4gICAgaWYgKHYuY2xhc3NMaXN0KSB7XG4gICAgICB2LmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHYuY2xhc3NOYW1lID0gdi5jbGFzc05hbWUucmVwbGFjZShjLCBcIlwiKTtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoYykge1xuICAgICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuXG4gICAgICByZXR1cm4gY2xhc3NlcyA/IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgc3BhY2VkTmFtZSA9IFwiIFwiICsgdi5jbGFzc05hbWUgKyBcIiBcIjtcbiAgICAgICAgZWFjaChjbGFzc2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIGFkZENsYXNzKHYsIGMsIHNwYWNlZE5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pIDogdGhpcztcbiAgICB9LFxuXG4gICAgYXR0cjogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RyaW5nKG5hbWUpKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmdldEF0dHJpYnV0ZSA/IHRoaXNbMF0uZ2V0QXR0cmlidXRlKG5hbWUpIDogdGhpc1swXVtuYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBpZiAodi5zZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHYuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdltuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSB7XG4gICAgICAgIHRoaXMuYXR0cihrZXksIG5hbWVba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBoYXNDbGFzczogZnVuY3Rpb24gKGMpIHtcbiAgICAgIHZhciBjaGVjayA9IGZhbHNlLFxuICAgICAgICAgIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuICAgICAgaWYgKGNsYXNzZXMgJiYgY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgY2hlY2sgPSBoYXNDbGFzcyh2LCBjbGFzc2VzWzBdKTtcbiAgICAgICAgICByZXR1cm4gIWNoZWNrO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9LFxuXG4gICAgcHJvcDogZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgICBpZiAoaXNTdHJpbmcobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzWzBdW25hbWVdIDogdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdltuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIga2V5IGluIG5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9wKGtleSwgbmFtZVtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICh2LnJlbW92ZUF0dHJpYnV0ZSkge1xuICAgICAgICAgIHYucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB2W25hbWVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChjKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgICAgfVxuICAgICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuICAgICAgcmV0dXJuIGNsYXNzZXMgPyB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZWFjaChjbGFzc2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHYsIGMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pIDogdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlUHJvcDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgZGVsZXRlIHZbbmFtZV07XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uIChjLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbc3RhdGUgPyBcImFkZENsYXNzXCIgOiBcInJlbW92ZUNsYXNzXCJdKGMpO1xuICAgICAgfVxuICAgICAgdmFyIGNsYXNzZXMgPSBnZXRDbGFzc2VzKGMpO1xuICAgICAgcmV0dXJuIGNsYXNzZXMgPyB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIHNwYWNlZE5hbWUgPSBcIiBcIiArIHYuY2xhc3NOYW1lICsgXCIgXCI7XG4gICAgICAgIGVhY2goY2xhc3NlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICBpZiAoaGFzQ2xhc3ModiwgYykpIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKHYsIGMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRDbGFzcyh2LCBjLCBzcGFjZWROYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSkgOiB0aGlzO1xuICAgIH0gfSk7XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBhZGQ6IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHVuaXF1ZShjYXNoLm1lcmdlKHRoaXMsIGNhc2goc2VsZWN0b3IsIGNvbnRleHQpKSk7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgZWFjaCh0aGlzLCBjYWxsYmFjayk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZXE6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpcy5nZXQoaW5kZXgpKTtcbiAgICB9LFxuXG4gICAgZmlsdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wYXJhdG9yID0gaXNGdW5jdGlvbihzZWxlY3RvcikgPyBzZWxlY3RvciA6IGdldENvbXBhcmVGdW5jdGlvbihzZWxlY3Rvcik7XG5cbiAgICAgIHJldHVybiBjYXNoKGZpbHRlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBjb21wYXJhdG9yKGUsIHNlbGVjdG9yKTtcbiAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVxKDApO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gaW5kZXggPCAwID8gdGhpc1tpbmRleCArIHRoaXMubGVuZ3RoXSA6IHRoaXNbaW5kZXhdO1xuICAgIH0sXG5cbiAgICBpbmRleDogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIHZhciBjaGlsZCA9IGVsZW0gPyBjYXNoKGVsZW0pWzBdIDogdGhpc1swXSxcbiAgICAgICAgICBjb2xsZWN0aW9uID0gZWxlbSA/IHRoaXMgOiBjYXNoKGNoaWxkKS5wYXJlbnQoKS5jaGlsZHJlbigpO1xuICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoY29sbGVjdGlvbikuaW5kZXhPZihjaGlsZCk7XG4gICAgfSxcblxuICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVxKC0xKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgdmFyIGNhbWVsQ2FzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FtZWxSZWdleCA9IC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZyxcbiAgICAgICAgd2hpdGVTcGFjZSA9IC9bXFxzLV9dKy9nO1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxSZWdleCwgZnVuY3Rpb24gKGxldHRlciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIGxldHRlcltpbmRleCA9PT0gMCA/IFwidG9Mb3dlckNhc2VcIiA6IFwidG9VcHBlckNhc2VcIl0oKTtcbiAgICAgIH0pLnJlcGxhY2Uod2hpdGVTcGFjZSwgXCJcIik7XG4gICAgfTtcbiAgfSgpO1xuXG4gIHZhciBnZXRQcmVmaXhlZFByb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhY2hlID0ge30sXG4gICAgICAgIGRvYyA9IGRvY3VtZW50LFxuICAgICAgICBkaXYgPSBkb2MuY3JlYXRlRWxlbWVudChcImRpdlwiKSxcbiAgICAgICAgc3R5bGUgPSBkaXYuc3R5bGU7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHByb3AgPSBjYW1lbENhc2UocHJvcCk7XG4gICAgICBpZiAoY2FjaGVbcHJvcF0pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgICAgfVxuXG4gICAgICB2YXIgdWNQcm9wID0gcHJvcC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3Auc2xpY2UoMSksXG4gICAgICAgICAgcHJlZml4ZXMgPSBbXCJ3ZWJraXRcIiwgXCJtb3pcIiwgXCJtc1wiLCBcIm9cIl0sXG4gICAgICAgICAgcHJvcHMgPSAocHJvcCArIFwiIFwiICsgcHJlZml4ZXMuam9pbih1Y1Byb3AgKyBcIiBcIikgKyB1Y1Byb3ApLnNwbGl0KFwiIFwiKTtcblxuICAgICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKHApIHtcbiAgICAgICAgaWYgKHAgaW4gc3R5bGUpIHtcbiAgICAgICAgICBjYWNoZVtwXSA9IHByb3AgPSBjYWNoZVtwcm9wXSA9IHA7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICAgIH07XG4gIH0oKTtcblxuICBjYXNoLnByZWZpeGVkUHJvcCA9IGdldFByZWZpeGVkUHJvcDtcbiAgY2FzaC5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBjc3M6IGZ1bmN0aW9uIChwcm9wLCB2YWx1ZSkge1xuICAgICAgaWYgKGlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIHByb3AgPSBnZXRQcmVmaXhlZFByb3AocHJvcCk7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgIH0pIDogd2luLmdldENvbXB1dGVkU3R5bGUodGhpc1swXSlbcHJvcF07XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wKSB7XG4gICAgICAgIHRoaXMuY3NzKGtleSwgcHJvcFtrZXldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNvbXB1dGUoZWwsIHByb3ApIHtcbiAgICByZXR1cm4gcGFyc2VJbnQod2luLmdldENvbXB1dGVkU3R5bGUoZWxbMF0sIG51bGwpW3Byb3BdLCAxMCkgfHwgMDtcbiAgfVxuXG4gIGVhY2goW1wiV2lkdGhcIiwgXCJIZWlnaHRcIl0sIGZ1bmN0aW9uICh2KSB7XG4gICAgdmFyIGxvd2VyID0gdi50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZm5bbG93ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbbG93ZXJdO1xuICAgIH07XG5cbiAgICBmbltcImlubmVyXCIgKyB2XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzWzBdW1wiY2xpZW50XCIgKyB2XTtcbiAgICB9O1xuXG4gICAgZm5bXCJvdXRlclwiICsgdl0gPSBmdW5jdGlvbiAobWFyZ2lucykge1xuICAgICAgcmV0dXJuIHRoaXNbMF1bXCJvZmZzZXRcIiArIHZdICsgKG1hcmdpbnMgPyBjb21wdXRlKHRoaXMsIFwibWFyZ2luXCIgKyAodiA9PT0gXCJXaWR0aFwiID8gXCJMZWZ0XCIgOiBcIlRvcFwiKSkgKyBjb21wdXRlKHRoaXMsIFwibWFyZ2luXCIgKyAodiA9PT0gXCJXaWR0aFwiID8gXCJSaWdodFwiIDogXCJCb3R0b21cIikpIDogMCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJFdmVudChub2RlLCBldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGV2ZW50Q2FjaGUgPSBnZXREYXRhKG5vZGUsIFwiX2Nhc2hFdmVudHNcIikgfHwgc2V0RGF0YShub2RlLCBcIl9jYXNoRXZlbnRzXCIsIHt9KTtcbiAgICBldmVudENhY2hlW2V2ZW50TmFtZV0gPSBldmVudENhY2hlW2V2ZW50TmFtZV0gfHwgW107XG4gICAgZXZlbnRDYWNoZVtldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZXZlbnRzID0gZ2V0RGF0YShub2RlLCBcIl9jYXNoRXZlbnRzXCIpLFxuICAgICAgICBldmVudENhY2hlID0gZXZlbnRzICYmIGV2ZW50c1tldmVudE5hbWVdLFxuICAgICAgICBpbmRleDtcblxuICAgIGlmICghZXZlbnRDYWNoZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgaW5kZXggPSBldmVudENhY2hlLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgZXZlbnRDYWNoZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlYWNoKGV2ZW50Q2FjaGUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCk7XG4gICAgICB9KTtcbiAgICAgIGV2ZW50Q2FjaGUgPSBbXTtcbiAgICB9XG4gIH1cblxuICBmbi5leHRlbmQoe1xuICAgIG9mZjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZUV2ZW50KHYsIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkZWxlZ2F0ZSwgY2FsbGJhY2ssIHJ1bk9uY2UpIHtcbiAgICAgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuICAgICAgdmFyIG9yaWdpbmFsQ2FsbGJhY2s7XG4gICAgICBpZiAoIWlzU3RyaW5nKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGV2ZW50TmFtZSkge1xuICAgICAgICAgIHRoaXMub24oa2V5LCBkZWxlZ2F0ZSwgZXZlbnROYW1lW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNGdW5jdGlvbihkZWxlZ2F0ZSkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBkZWxlZ2F0ZTtcbiAgICAgICAgZGVsZWdhdGUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnROYW1lID09PSBcInJlYWR5XCIpIHtcbiAgICAgICAgb25SZWFkeShjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlLnRhcmdldDtcbiAgICAgICAgICB3aGlsZSAoIW1hdGNoZXModCwgZGVsZWdhdGUpKSB7XG4gICAgICAgICAgICBpZiAodCA9PT0gdGhpcyB8fCB0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHQgPSB0LnBhcmVudE5vZGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHQpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsQ2FsbGJhY2suY2FsbCh0LCBlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdmFyIGZpbmFsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgaWYgKHJ1bk9uY2UpIHtcbiAgICAgICAgICBmaW5hbENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJlbW92ZUV2ZW50KHYsIGV2ZW50TmFtZSwgZmluYWxDYWxsYmFjayk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZWdpc3RlckV2ZW50KHYsIGV2ZW50TmFtZSwgZmluYWxDYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgb25lOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBkZWxlZ2F0ZSwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLm9uKGV2ZW50TmFtZSwgZGVsZWdhdGUsIGNhbGxiYWNrLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVhZHk6IG9uUmVhZHksXG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllZFxuICAgICAqIFRyaWdnZXJzIGJyb3dzZXIgZXZlbnRcbiAgICAgKiBAcGFyYW0gU3RyaW5nIGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSBPYmplY3QgZGF0YSAtIEFkZCBwcm9wZXJ0aWVzIHRvIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xuICAgICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKTtcbiAgICAgICAgZXZ0LmluaXRFdmVudChldmVudE5hbWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgZXZ0ID0gdGhpcy5leHRlbmQoZXZ0LCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGVuY29kZShuYW1lLCB2YWx1ZSkge1xuICAgIHJldHVybiBcIiZcIiArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC8lMjAvZywgXCIrXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2VsZWN0TXVsdGlwbGVfKGVsKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGVhY2goZWwub3B0aW9ucywgZnVuY3Rpb24gKG8pIHtcbiAgICAgIGlmIChvLnNlbGVjdGVkKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKG8udmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzIDogbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNlbGVjdFNpbmdsZV8oZWwpIHtcbiAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IGVsLnNlbGVjdGVkSW5kZXg7XG4gICAgcmV0dXJuIHNlbGVjdGVkSW5kZXggPj0gMCA/IGVsLm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0udmFsdWUgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFsdWUoZWwpIHtcbiAgICB2YXIgdHlwZSA9IGVsLnR5cGU7XG4gICAgaWYgKCF0eXBlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGNhc2UgXCJzZWxlY3Qtb25lXCI6XG4gICAgICAgIHJldHVybiBnZXRTZWxlY3RTaW5nbGVfKGVsKTtcbiAgICAgIGNhc2UgXCJzZWxlY3QtbXVsdGlwbGVcIjpcbiAgICAgICAgcmV0dXJuIGdldFNlbGVjdE11bHRpcGxlXyhlbCk7XG4gICAgICBjYXNlIFwicmFkaW9cIjpcbiAgICAgICAgcmV0dXJuIGVsLmNoZWNrZWQgPyBlbC52YWx1ZSA6IG51bGw7XG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgcmV0dXJuIGVsLmNoZWNrZWQgPyBlbC52YWx1ZSA6IG51bGw7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZWwudmFsdWUgPyBlbC52YWx1ZSA6IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBxdWVyeSA9IFwiXCI7XG5cbiAgICAgIGVhY2godGhpc1swXS5lbGVtZW50cyB8fCB0aGlzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmRpc2FibGVkIHx8IGVsLnRhZ05hbWUgPT09IFwiRklFTERTRVRcIikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZSA9IGVsLm5hbWU7XG4gICAgICAgIHN3aXRjaCAoZWwudHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgY2FzZSBcImZpbGVcIjpcbiAgICAgICAgICBjYXNlIFwicmVzZXRcIjpcbiAgICAgICAgICBjYXNlIFwic3VibWl0XCI6XG4gICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInNlbGVjdC1tdWx0aXBsZVwiOlxuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IGdldFZhbHVlKGVsKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGVuY29kZShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKGVsKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBxdWVyeSArPSBlbmNvZGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5LnN1YnN0cigxKTtcbiAgICB9LFxuXG4gICAgdmFsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBnZXRWYWx1ZSh0aGlzWzBdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGluc2VydEVsZW1lbnQoZWwsIGNoaWxkLCBwcmVwZW5kKSB7XG4gICAgaWYgKHByZXBlbmQpIHtcbiAgICAgIHZhciBmaXJzdCA9IGVsLmNoaWxkTm9kZXNbMF07XG4gICAgICBlbC5pbnNlcnRCZWZvcmUoY2hpbGQsIGZpcnN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydENvbnRlbnQocGFyZW50LCBjaGlsZCwgcHJlcGVuZCkge1xuICAgIHZhciBzdHIgPSBpc1N0cmluZyhjaGlsZCk7XG5cbiAgICBpZiAoIXN0ciAmJiBjaGlsZC5sZW5ndGgpIHtcbiAgICAgIGVhY2goY2hpbGQsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBpbnNlcnRDb250ZW50KHBhcmVudCwgdiwgcHJlcGVuZCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlYWNoKHBhcmVudCwgc3RyID8gZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2Lmluc2VydEFkamFjZW50SFRNTChwcmVwZW5kID8gXCJhZnRlcmJlZ2luXCIgOiBcImJlZm9yZWVuZFwiLCBjaGlsZCk7XG4gICAgfSA6IGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICByZXR1cm4gaW5zZXJ0RWxlbWVudCh2LCBpID09PSAwID8gY2hpbGQgOiBjaGlsZC5jbG9uZU5vZGUodHJ1ZSksIHByZXBlbmQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBhZnRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBjYXNoKHNlbGVjdG9yKS5pbnNlcnRBZnRlcih0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBhcHBlbmQ6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KHRoaXMsIGNvbnRlbnQpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGFwcGVuZFRvOiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KGNhc2gocGFyZW50KSwgdGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgYmVmb3JlOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGNhc2goc2VsZWN0b3IpLmluc2VydEJlZm9yZSh0aGlzKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfSkpO1xuICAgIH0sXG5cbiAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5odG1sKFwiXCIpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGh0bWw6IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICBpZiAoY29udGVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzWzBdLmlubmVySFRNTDtcbiAgICAgIH1cbiAgICAgIHZhciBzb3VyY2UgPSBjb250ZW50Lm5vZGVUeXBlID8gY29udGVudFswXS5vdXRlckhUTUwgOiBjb250ZW50O1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5pbm5lckhUTUwgPSBzb3VyY2U7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgaW5zZXJ0QWZ0ZXI6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgY2FzaChzZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBzaWJsaW5nID0gZWwubmV4dFNpYmxpbmc7XG4gICAgICAgIF90aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGkgPT09IDAgPyB2IDogdi5jbG9uZU5vZGUodHJ1ZSksIHNpYmxpbmcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgY2FzaChzZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICAgIF90aGlzMi5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShpID09PSAwID8gdiA6IHYuY2xvbmVOb2RlKHRydWUpLCBlbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcHJlcGVuZDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIGluc2VydENvbnRlbnQodGhpcywgY29udGVudCwgdHJ1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcHJlcGVuZFRvOiBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICBpbnNlcnRDb250ZW50KGNhc2gocGFyZW50KSwgdGhpcywgdHJ1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmICghIXYucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHJldHVybiB2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0ZXh0OiBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgaWYgKGNvbnRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpc1swXS50ZXh0Q29udGVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHZhciBkb2NFbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgZm4uZXh0ZW5kKHtcbiAgICBwb3NpdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gdGhpc1swXTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGVsLm9mZnNldExlZnQsXG4gICAgICAgIHRvcDogZWwub2Zmc2V0VG9wXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBvZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZWN0ID0gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbC5jbGllbnRUb3AsXG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY0VsLmNsaWVudExlZnRcbiAgICAgIH07XG4gICAgfSxcblxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhc2godGhpc1swXS5vZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICB9KTtcblxuICBmbi5leHRlbmQoe1xuICAgIGNoaWxkcmVuOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBlbGVtcyA9IFtdO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBwdXNoLmFwcGx5KGVsZW1zLCBlbC5jaGlsZHJlbik7XG4gICAgICB9KTtcbiAgICAgIGVsZW1zID0gdW5pcXVlKGVsZW1zKTtcblxuICAgICAgcmV0dXJuICFzZWxlY3RvciA/IGVsZW1zIDogZWxlbXMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBtYXRjaGVzKHYsIHNlbGVjdG9yKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjbG9zZXN0OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IgfHwgdGhpcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybiBjYXNoKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCgpLmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH0sXG5cbiAgICBpczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIG1hdGNoID0gZmFsc2UsXG4gICAgICAgICAgY29tcGFyYXRvciA9IGdldENvbXBhcmVGdW5jdGlvbihzZWxlY3Rvcik7XG5cbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgbWF0Y2ggPSBjb21wYXJhdG9yKGVsLCBzZWxlY3Rvcik7XG4gICAgICAgIHJldHVybiAhbWF0Y2g7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0sXG5cbiAgICBmaW5kOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3Iubm9kZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGNhc2goc2VsZWN0b3IgJiYgdGhpcy5oYXMoc2VsZWN0b3IpLmxlbmd0aCA/IHNlbGVjdG9yIDogbnVsbCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBlbGVtcyA9IFtdO1xuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBwdXNoLmFwcGx5KGVsZW1zLCBmaW5kKHNlbGVjdG9yLCBlbCkpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB1bmlxdWUoZWxlbXMpO1xuICAgIH0sXG5cbiAgICBoYXM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGNvbXBhcmF0b3IgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgcmV0dXJuIGZpbmQoc2VsZWN0b3IsIGVsKS5sZW5ndGggIT09IDA7XG4gICAgICB9IDogZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHJldHVybiBlbC5jb250YWlucyhzZWxlY3Rvcik7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoY29tcGFyYXRvcik7XG4gICAgfSxcblxuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYXNoKHRoaXNbMF0ubmV4dEVsZW1lbnRTaWJsaW5nKTtcbiAgICB9LFxuXG4gICAgbm90OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb21wYXJhdG9yID0gZ2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gIWNvbXBhcmF0b3IoZWwsIHNlbGVjdG9yKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBwYXJlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0ucGFyZW50Tm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdW5pcXVlKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIHBhcmVudHM6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgdmFyIGxhc3QsXG4gICAgICAgICAgcmVzdWx0ID0gW107XG5cbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBsYXN0ID0gaXRlbTtcblxuICAgICAgICB3aGlsZSAobGFzdCAmJiBsYXN0LnBhcmVudE5vZGUgJiYgbGFzdCAhPT0gZG9jLmJvZHkucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGxhc3QgPSBsYXN0LnBhcmVudE5vZGU7XG5cbiAgICAgICAgICBpZiAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yICYmIG1hdGNoZXMobGFzdCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChsYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdW5pcXVlKHJlc3VsdCk7XG4gICAgfSxcblxuICAgIHByZXY6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjYXNoKHRoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZyk7XG4gICAgfSxcblxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgIHZhciBjb2xsZWN0aW9uID0gdGhpcy5wYXJlbnQoKS5jaGlsZHJlbihzZWxlY3RvciksXG4gICAgICAgICAgZWwgPSB0aGlzWzBdO1xuXG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIGkgIT09IGVsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH0pO1xuXG4gIHJldHVybiBjYXNoO1xufSk7XG47XG52YXIgQ29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogR2VuZXJpYyBjb25zdHJ1Y3RvciBmb3IgYWxsIGNvbXBvbmVudHNcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICovXG4gIGZ1bmN0aW9uIENvbXBvbmVudChjbGFzc0RlZiwgZWwsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50KTtcblxuICAgIC8vIERpc3BsYXkgZXJyb3IgaWYgZWwgaXMgdmFsaWQgSFRNTCBFbGVtZW50XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihFcnJvcihlbCArICcgaXMgbm90IGFuIEhUTUwgRWxlbWVudCcpKTtcbiAgICB9XG5cbiAgICAvLyBJZiBleGlzdHMsIGRlc3Ryb3kgYW5kIHJlaW5pdGlhbGl6ZSBpbiBjaGlsZFxuICAgIHZhciBpbnMgPSBjbGFzc0RlZi5nZXRJbnN0YW5jZShlbCk7XG4gICAgaWYgKCEhaW5zKSB7XG4gICAgICBpbnMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuZWwgPSBlbDtcbiAgICB0aGlzLiRlbCA9IGNhc2goZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtjbGFzc30gY2xhc3NEZWZcbiAgICogQHBhcmFtIHtFbGVtZW50IHwgTm9kZUxpc3QgfCBqUXVlcnl9IGVsc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhDb21wb25lbnQsIG51bGwsIFt7XG4gICAga2V5OiBcImluaXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChjbGFzc0RlZiwgZWxzLCBvcHRpb25zKSB7XG4gICAgICB2YXIgaW5zdGFuY2VzID0gbnVsbDtcbiAgICAgIGlmIChlbHMgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICAgIGluc3RhbmNlcyA9IG5ldyBjbGFzc0RlZihlbHMsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmICghIWVscyAmJiAoZWxzLmpxdWVyeSB8fCBlbHMuY2FzaCB8fCBlbHMgaW5zdGFuY2VvZiBOb2RlTGlzdCkpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlc0FyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGluc3RhbmNlc0Fyci5wdXNoKG5ldyBjbGFzc0RlZihlbHNbaV0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZXMgPSBpbnN0YW5jZXNBcnI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn0oKTtcblxuOyAvLyBSZXF1aXJlZCBmb3IgTWV0ZW9yIHBhY2thZ2UsIHRoZSB1c2Ugb2Ygd2luZG93IHByZXZlbnRzIGV4cG9ydCBieSBNZXRlb3JcbihmdW5jdGlvbiAod2luZG93KSB7XG4gIGlmICh3aW5kb3cuUGFja2FnZSkge1xuICAgIE0gPSB7fTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuTSA9IHt9O1xuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIGpRdWVyeVxuICBNLmpRdWVyeUxvYWRlZCA9ICEhd2luZG93LmpRdWVyeTtcbn0pKHdpbmRvdyk7XG5cbi8vIEFNRFxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoJ00nLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBNO1xuICB9KTtcblxuICAvLyBDb21tb24gSlNcbn0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnICYmICFleHBvcnRzLm5vZGVUeXBlKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gTTtcbiAgfVxuICBleHBvcnRzLmRlZmF1bHQgPSBNO1xufVxuXG5NLnZlcnNpb24gPSAnMS4wLjAnO1xuXG5NLmtleXMgPSB7XG4gIFRBQjogOSxcbiAgRU5URVI6IDEzLFxuICBFU0M6IDI3LFxuICBBUlJPV19VUDogMzgsXG4gIEFSUk9XX0RPV046IDQwXG59O1xuXG4vKipcbiAqIFRhYlByZXNzIEtleWRvd24gaGFuZGxlclxuICovXG5NLnRhYlByZXNzZWQgPSBmYWxzZTtcbk0ua2V5RG93biA9IGZhbHNlO1xudmFyIGRvY0hhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICBNLmtleURvd24gPSB0cnVlO1xuICBpZiAoZS53aGljaCA9PT0gTS5rZXlzLlRBQiB8fCBlLndoaWNoID09PSBNLmtleXMuQVJST1dfRE9XTiB8fCBlLndoaWNoID09PSBNLmtleXMuQVJST1dfVVApIHtcbiAgICBNLnRhYlByZXNzZWQgPSB0cnVlO1xuICB9XG59O1xudmFyIGRvY0hhbmRsZUtleXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgTS5rZXlEb3duID0gZmFsc2U7XG4gIGlmIChlLndoaWNoID09PSBNLmtleXMuVEFCIHx8IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19ET1dOIHx8IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19VUCkge1xuICAgIE0udGFiUHJlc3NlZCA9IGZhbHNlO1xuICB9XG59O1xudmFyIGRvY0hhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKE0ua2V5RG93bikge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQtZm9jdXNlZCcpO1xuICB9XG59O1xudmFyIGRvY0hhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2tleWJvYXJkLWZvY3VzZWQnKTtcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZG9jSGFuZGxlS2V5ZG93biwgdHJ1ZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGRvY0hhbmRsZUtleXVwLCB0cnVlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZG9jSGFuZGxlRm9jdXMsIHRydWUpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGRvY0hhbmRsZUJsdXIsIHRydWUpO1xuXG4vKipcbiAqIEluaXRpYWxpemUgalF1ZXJ5IHdyYXBwZXIgZm9yIHBsdWdpblxuICogQHBhcmFtIHtDbGFzc30gcGx1Z2luICBqYXZhc2NyaXB0IGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGx1Z2luTmFtZSAgalF1ZXJ5IHBsdWdpbiBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NSZWYgIENsYXNzIHJlZmVyZW5jZSBuYW1lXG4gKi9cbk0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIgPSBmdW5jdGlvbiAocGx1Z2luLCBwbHVnaW5OYW1lLCBjbGFzc1JlZikge1xuICBqUXVlcnkuZm5bcGx1Z2luTmFtZV0gPSBmdW5jdGlvbiAobWV0aG9kT3JPcHRpb25zKSB7XG4gICAgLy8gQ2FsbCBwbHVnaW4gbWV0aG9kIGlmIHZhbGlkIG1ldGhvZCBuYW1lIGlzIHBhc3NlZCBpblxuICAgIGlmIChwbHVnaW4ucHJvdG90eXBlW21ldGhvZE9yT3B0aW9uc10pIHtcbiAgICAgIHZhciBwYXJhbXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgICAvLyBHZXR0ZXIgbWV0aG9kc1xuICAgICAgaWYgKG1ldGhvZE9yT3B0aW9ucy5zbGljZSgwLCAzKSA9PT0gJ2dldCcpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5maXJzdCgpWzBdW2NsYXNzUmVmXTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW21ldGhvZE9yT3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZvaWQgbWV0aG9kc1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXNbY2xhc3NSZWZdO1xuICAgICAgICBpbnN0YW5jZVttZXRob2RPck9wdGlvbnNdLmFwcGx5KGluc3RhbmNlLCBwYXJhbXMpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIEluaXRpYWxpemUgcGx1Z2luIGlmIG9wdGlvbnMgb3Igbm8gYXJndW1lbnQgaXMgcGFzc2VkIGluXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kT3JPcHRpb25zKSB7XG4gICAgICBwbHVnaW4uaW5pdCh0aGlzLCBhcmd1bWVudHNbMF0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGVycm9yIGlmIGFuIHVucmVjb2duaXplZCAgbWV0aG9kIG5hbWUgaXMgcGFzc2VkIGluXG4gICAgalF1ZXJ5LmVycm9yKFwiTWV0aG9kIFwiICsgbWV0aG9kT3JPcHRpb25zICsgXCIgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LlwiICsgcGx1Z2luTmFtZSk7XG4gIH07XG59O1xuXG4vKipcbiAqIEF1dG9tYXRpY2FsbHkgaW5pdGlhbGl6ZSBjb21wb25lbnRzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHQgIERPTSBFbGVtZW50IHRvIHNlYXJjaCB3aXRoaW4gZm9yIGNvbXBvbmVudHNcbiAqL1xuTS5BdXRvSW5pdCA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIC8vIFVzZSBkb2N1bWVudC5ib2R5IGlmIG5vIGNvbnRleHQgaXMgZ2l2ZW5cbiAgdmFyIHJvb3QgPSAhIWNvbnRleHQgPyBjb250ZXh0IDogZG9jdW1lbnQuYm9keTtcblxuICB2YXIgcmVnaXN0cnkgPSB7XG4gICAgQXV0b2NvbXBsZXRlOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdXRvY29tcGxldGU6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBDYXJvdXNlbDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWw6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBDaGlwczogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hpcHM6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBDb2xsYXBzaWJsZTogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGFwc2libGU6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBEYXRlcGlja2VyOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYXRlcGlja2VyOm5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgRHJvcGRvd246IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLXRyaWdnZXI6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBNYXRlcmlhbGJveDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcubWF0ZXJpYWxib3hlZDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIE1vZGFsOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFBhcmFsbGF4OiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJhbGxheDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFB1c2hwaW46IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnB1c2hwaW46bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBTY3JvbGxTcHk6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnNjcm9sbHNweTpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIEZvcm1TZWxlY3Q6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Om5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgU2lkZW5hdjogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZW5hdjpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIFRhYnM6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhYnM6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBUYXBUYXJnZXQ6IHJvb3QucXVlcnlTZWxlY3RvckFsbCgnLnRhcC10YXJnZXQ6bm90KC5uby1hdXRvaW5pdCknKSxcbiAgICBUaW1lcGlja2VyOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aW1lcGlja2VyOm5vdCgubm8tYXV0b2luaXQpJyksXG4gICAgVG9vbHRpcDogcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcudG9vbHRpcHBlZDpub3QoLm5vLWF1dG9pbml0KScpLFxuICAgIEZsb2F0aW5nQWN0aW9uQnV0dG9uOiByb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXhlZC1hY3Rpb24tYnRuOm5vdCgubm8tYXV0b2luaXQpJylcbiAgfTtcblxuICBmb3IgKHZhciBwbHVnaW5OYW1lIGluIHJlZ2lzdHJ5KSB7XG4gICAgdmFyIHBsdWdpbiA9IE1bcGx1Z2luTmFtZV07XG4gICAgcGx1Z2luLmluaXQocmVnaXN0cnlbcGx1Z2luTmFtZV0pO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGFwcHJveGltYXRlZCBzZWxlY3RvciBzdHJpbmcgZm9yIGEgalF1ZXJ5IG9iamVjdFxuICogQHBhcmFtIHtqUXVlcnl9IG9iaiAgalF1ZXJ5IG9iamVjdCB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk0ub2JqZWN0U2VsZWN0b3JTdHJpbmcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciB0YWdTdHIgPSBvYmoucHJvcCgndGFnTmFtZScpIHx8ICcnO1xuICB2YXIgaWRTdHIgPSBvYmouYXR0cignaWQnKSB8fCAnJztcbiAgdmFyIGNsYXNzU3RyID0gb2JqLmF0dHIoJ2NsYXNzJykgfHwgJyc7XG4gIHJldHVybiAodGFnU3RyICsgaWRTdHIgKyBjbGFzc1N0cikucmVwbGFjZSgvXFxzL2csICcnKTtcbn07XG5cbi8vIFVuaXF1ZSBSYW5kb20gSURcbk0uZ3VpZCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gczQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgczQoKSArIHM0KCk7XG4gIH07XG59KCk7XG5cbi8qKlxuICogRXNjYXBlcyBoYXNoIGZyb20gc3BlY2lhbCBjaGFyYWN0ZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gaGFzaCAgU3RyaW5nIHJldHVybmVkIGZyb20gdGhpcy5oYXNoXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5NLmVzY2FwZUhhc2ggPSBmdW5jdGlvbiAoaGFzaCkge1xuICByZXR1cm4gaGFzaC5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD18XFwvKS9nLCAnXFxcXCQxJyk7XG59O1xuXG5NLmVsZW1lbnRPclBhcmVudElzRml4ZWQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICB2YXIgJGNoZWNrRWxlbWVudHMgPSAkZWxlbWVudC5hZGQoJGVsZW1lbnQucGFyZW50cygpKTtcbiAgdmFyIGlzRml4ZWQgPSBmYWxzZTtcbiAgJGNoZWNrRWxlbWVudHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCQodGhpcykuY3NzKCdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XG4gICAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNGaXhlZDtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRWRnZXNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdG9wICBJZiB0aGUgdG9wIGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHJpZ2h0ICBJZiB0aGUgcmlnaHQgZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYm90dG9tICBJZiB0aGUgYm90dG9tIGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGxlZnQgIElmIHRoZSBsZWZ0IGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZGluZ1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnQgIGxlZnQgb2Zmc2V0IGNvb3JkaW5hdGVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3AgIHRvcCBvZmZzZXQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXG4gKiBAcHJvcGVydHkge051bWJlcn0gaGVpZ2h0XG4gKi9cblxuLyoqXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyICBDb250YWluZXIgZWxlbWVudCB0aGF0IGFjdHMgYXMgdGhlIGJvdW5kYXJ5XG4gKiBAcGFyYW0ge0JvdW5kaW5nfSBib3VuZGluZyAgZWxlbWVudCBib3VuZGluZyB0aGF0IGlzIGJlaW5nIGNoZWNrZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgIG9mZnNldCBmcm9tIGVkZ2UgdGhhdCBjb3VudHMgYXMgZXhjZWVkaW5nXG4gKiBAcmV0dXJucyB7RWRnZXN9XG4gKi9cbk0uY2hlY2tXaXRoaW5Db250YWluZXIgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBib3VuZGluZywgb2Zmc2V0KSB7XG4gIHZhciBlZGdlcyA9IHtcbiAgICB0b3A6IGZhbHNlLFxuICAgIHJpZ2h0OiBmYWxzZSxcbiAgICBib3R0b206IGZhbHNlLFxuICAgIGxlZnQ6IGZhbHNlXG4gIH07XG5cbiAgdmFyIGNvbnRhaW5lclJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIC8vIElmIGJvZHkgZWxlbWVudCBpcyBzbWFsbGVyIHRoYW4gdmlld3BvcnQsIHVzZSB2aWV3cG9ydCBoZWlnaHQgaW5zdGVhZC5cbiAgdmFyIGNvbnRhaW5lckJvdHRvbSA9IGNvbnRhaW5lciA9PT0gZG9jdW1lbnQuYm9keSA/IE1hdGgubWF4KGNvbnRhaW5lclJlY3QuYm90dG9tLCB3aW5kb3cuaW5uZXJIZWlnaHQpIDogY29udGFpbmVyUmVjdC5ib3R0b207XG5cbiAgdmFyIHNjcm9sbExlZnQgPSBjb250YWluZXIuc2Nyb2xsTGVmdDtcbiAgdmFyIHNjcm9sbFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3A7XG5cbiAgdmFyIHNjcm9sbGVkWCA9IGJvdW5kaW5nLmxlZnQgLSBzY3JvbGxMZWZ0O1xuICB2YXIgc2Nyb2xsZWRZID0gYm91bmRpbmcudG9wIC0gc2Nyb2xsVG9wO1xuXG4gIC8vIENoZWNrIGZvciBjb250YWluZXIgYW5kIHZpZXdwb3J0IGZvciBlYWNoIGVkZ2VcbiAgaWYgKHNjcm9sbGVkWCA8IGNvbnRhaW5lclJlY3QubGVmdCArIG9mZnNldCB8fCBzY3JvbGxlZFggPCBvZmZzZXQpIHtcbiAgICBlZGdlcy5sZWZ0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzY3JvbGxlZFggKyBib3VuZGluZy53aWR0aCA+IGNvbnRhaW5lclJlY3QucmlnaHQgLSBvZmZzZXQgfHwgc2Nyb2xsZWRYICsgYm91bmRpbmcud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCAtIG9mZnNldCkge1xuICAgIGVkZ2VzLnJpZ2h0ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzY3JvbGxlZFkgPCBjb250YWluZXJSZWN0LnRvcCArIG9mZnNldCB8fCBzY3JvbGxlZFkgPCBvZmZzZXQpIHtcbiAgICBlZGdlcy50b3AgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHNjcm9sbGVkWSArIGJvdW5kaW5nLmhlaWdodCA+IGNvbnRhaW5lckJvdHRvbSAtIG9mZnNldCB8fCBzY3JvbGxlZFkgKyBib3VuZGluZy5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBvZmZzZXQpIHtcbiAgICBlZGdlcy5ib3R0b20gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGVkZ2VzO1xufTtcblxuTS5jaGVja1Bvc3NpYmxlQWxpZ25tZW50cyA9IGZ1bmN0aW9uIChlbCwgY29udGFpbmVyLCBib3VuZGluZywgb2Zmc2V0KSB7XG4gIHZhciBjYW5BbGlnbiA9IHtcbiAgICB0b3A6IHRydWUsXG4gICAgcmlnaHQ6IHRydWUsXG4gICAgYm90dG9tOiB0cnVlLFxuICAgIGxlZnQ6IHRydWUsXG4gICAgc3BhY2VPblRvcDogbnVsbCxcbiAgICBzcGFjZU9uUmlnaHQ6IG51bGwsXG4gICAgc3BhY2VPbkJvdHRvbTogbnVsbCxcbiAgICBzcGFjZU9uTGVmdDogbnVsbFxuICB9O1xuXG4gIHZhciBjb250YWluZXJBbGxvd3NPdmVyZmxvdyA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKS5vdmVyZmxvdyA9PT0gJ3Zpc2libGUnO1xuICB2YXIgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IE1hdGgubWluKGNvbnRhaW5lclJlY3QuaGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB2YXIgY29udGFpbmVyV2lkdGggPSBNYXRoLm1pbihjb250YWluZXJSZWN0LndpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIHZhciBlbE9mZnNldFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICB2YXIgc2Nyb2xsTGVmdCA9IGNvbnRhaW5lci5zY3JvbGxMZWZ0O1xuICB2YXIgc2Nyb2xsVG9wID0gY29udGFpbmVyLnNjcm9sbFRvcDtcblxuICB2YXIgc2Nyb2xsZWRYID0gYm91bmRpbmcubGVmdCAtIHNjcm9sbExlZnQ7XG4gIHZhciBzY3JvbGxlZFlUb3BFZGdlID0gYm91bmRpbmcudG9wIC0gc2Nyb2xsVG9wO1xuICB2YXIgc2Nyb2xsZWRZQm90dG9tRWRnZSA9IGJvdW5kaW5nLnRvcCArIGVsT2Zmc2V0UmVjdC5oZWlnaHQgLSBzY3JvbGxUb3A7XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbnRhaW5lciBhbmQgdmlld3BvcnQgZm9yIGxlZnRcbiAgY2FuQWxpZ24uc3BhY2VPblJpZ2h0ID0gIWNvbnRhaW5lckFsbG93c092ZXJmbG93ID8gY29udGFpbmVyV2lkdGggLSAoc2Nyb2xsZWRYICsgYm91bmRpbmcud2lkdGgpIDogd2luZG93LmlubmVyV2lkdGggLSAoZWxPZmZzZXRSZWN0LmxlZnQgKyBib3VuZGluZy53aWR0aCk7XG4gIGlmIChjYW5BbGlnbi5zcGFjZU9uUmlnaHQgPCAwKSB7XG4gICAgY2FuQWxpZ24ubGVmdCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbnRhaW5lciBhbmQgdmlld3BvcnQgZm9yIFJpZ2h0XG4gIGNhbkFsaWduLnNwYWNlT25MZWZ0ID0gIWNvbnRhaW5lckFsbG93c092ZXJmbG93ID8gc2Nyb2xsZWRYIC0gYm91bmRpbmcud2lkdGggKyBlbE9mZnNldFJlY3Qud2lkdGggOiBlbE9mZnNldFJlY3QucmlnaHQgLSBib3VuZGluZy53aWR0aDtcbiAgaWYgKGNhbkFsaWduLnNwYWNlT25MZWZ0IDwgMCkge1xuICAgIGNhbkFsaWduLnJpZ2h0ID0gZmFsc2U7XG4gIH1cblxuICAvLyBDaGVjayBmb3IgY29udGFpbmVyIGFuZCB2aWV3cG9ydCBmb3IgVG9wXG4gIGNhbkFsaWduLnNwYWNlT25Cb3R0b20gPSAhY29udGFpbmVyQWxsb3dzT3ZlcmZsb3cgPyBjb250YWluZXJIZWlnaHQgLSAoc2Nyb2xsZWRZVG9wRWRnZSArIGJvdW5kaW5nLmhlaWdodCArIG9mZnNldCkgOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZWxPZmZzZXRSZWN0LnRvcCArIGJvdW5kaW5nLmhlaWdodCArIG9mZnNldCk7XG4gIGlmIChjYW5BbGlnbi5zcGFjZU9uQm90dG9tIDwgMCkge1xuICAgIGNhbkFsaWduLnRvcCA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIGNvbnRhaW5lciBhbmQgdmlld3BvcnQgZm9yIEJvdHRvbVxuICBjYW5BbGlnbi5zcGFjZU9uVG9wID0gIWNvbnRhaW5lckFsbG93c092ZXJmbG93ID8gc2Nyb2xsZWRZQm90dG9tRWRnZSAtIChib3VuZGluZy5oZWlnaHQgLSBvZmZzZXQpIDogZWxPZmZzZXRSZWN0LmJvdHRvbSAtIChib3VuZGluZy5oZWlnaHQgKyBvZmZzZXQpO1xuICBpZiAoY2FuQWxpZ24uc3BhY2VPblRvcCA8IDApIHtcbiAgICBjYW5BbGlnbi5ib3R0b20gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjYW5BbGlnbjtcbn07XG5cbk0uZ2V0T3ZlcmZsb3dQYXJlbnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLm92ZXJmbG93ICE9PSAndmlzaWJsZScpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBNLmdldE92ZXJmbG93UGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59O1xuXG4vKipcbiAqIEdldHMgaWQgb2YgY29tcG9uZW50IGZyb20gYSB0cmlnZ2VyXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRyaWdnZXIgIHRyaWdnZXJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk0uZ2V0SWRGcm9tVHJpZ2dlciA9IGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gIHZhciBpZCA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICBpZiAoIWlkKSB7XG4gICAgaWQgPSB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmIChpZCkge1xuICAgICAgaWQgPSBpZC5zbGljZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSAnJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkO1xufTtcblxuLyoqXG4gKiBNdWx0aSBicm93c2VyIHN1cHBvcnQgZm9yIGRvY3VtZW50IHNjcm9sbCB0b3BcbiAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gKi9cbk0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwO1xufTtcblxuLyoqXG4gKiBNdWx0aSBicm93c2VyIHN1cHBvcnQgZm9yIGRvY3VtZW50IHNjcm9sbCBsZWZ0XG4gKiBAcmV0dXJucyB7TnVtYmVyfVxuICovXG5NLmdldERvY3VtZW50U2Nyb2xsTGVmdCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMDtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gRWRnZXNcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gdG9wICBJZiB0aGUgdG9wIGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHJpZ2h0ICBJZiB0aGUgcmlnaHQgZWRnZSB3YXMgZXhjZWVkZWRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gYm90dG9tICBJZiB0aGUgYm90dG9tIGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGxlZnQgIElmIHRoZSBsZWZ0IGVkZ2Ugd2FzIGV4Y2VlZGVkXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBCb3VuZGluZ1xuICogQHByb3BlcnR5IHtOdW1iZXJ9IGxlZnQgIGxlZnQgb2Zmc2V0IGNvb3JkaW5hdGVcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB0b3AgIHRvcCBvZmZzZXQgY29vcmRpbmF0ZVxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHdpZHRoXG4gKiBAcHJvcGVydHkge051bWJlcn0gaGVpZ2h0XG4gKi9cblxuLyoqXG4gKiBHZXQgdGltZSBpbiBtc1xuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHR5cGUge2Z1bmN0aW9ufVxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgZ2V0VGltZSA9IERhdGUubm93IHx8IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIHdoZW4gaW52b2tlZCwgd2lsbCBvbmx5IGJlIHRyaWdnZXJlZCBhdCBtb3N0IG9uY2VcbiAqIGR1cmluZyBhIGdpdmVuIHdpbmRvdyBvZiB0aW1lLiBOb3JtYWxseSwgdGhlIHRocm90dGxlZCBmdW5jdGlvbiB3aWxsIHJ1blxuICogYXMgbXVjaCBhcyBpdCBjYW4sIHdpdGhvdXQgZXZlciBnb2luZyBtb3JlIHRoYW4gb25jZSBwZXIgYHdhaXRgIGR1cmF0aW9uO1xuICogYnV0IGlmIHlvdSdkIGxpa2UgdG8gZGlzYWJsZSB0aGUgZXhlY3V0aW9uIG9uIHRoZSBsZWFkaW5nIGVkZ2UsIHBhc3NcbiAqIGB7bGVhZGluZzogZmFsc2V9YC4gVG8gZGlzYWJsZSBleGVjdXRpb24gb24gdGhlIHRyYWlsaW5nIGVkZ2UsIGRpdHRvLlxuICogQGxpY2Vuc2UgaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9tYXN0ZXIvTElDRU5TRVxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtudW1iZXJ9IHdhaXRcbiAqIEBwYXJhbSB7T2JqZWN0PX0gb3B0aW9uc1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5NLnRocm90dGxlID0gZnVuY3Rpb24gKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGNvbnRleHQgPSB2b2lkIDAsXG4gICAgICBhcmdzID0gdm9pZCAwLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuICB2YXIgdGltZW91dCA9IG51bGw7XG4gIHZhciBwcmV2aW91cyA9IDA7XG4gIG9wdGlvbnMgfHwgKG9wdGlvbnMgPSB7fSk7XG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogZ2V0VGltZSgpO1xuICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBub3cgPSBnZXRUaW1lKCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICB2YXIgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAocmVtYWluaW5nIDw9IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbjsgLypcbiAgdjIuMi4wXG4gIDIwMTcgSnVsaWFuIEdhcm5pZXJcbiAgUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gICovXG52YXIgJGpzY29tcCA9IHsgc2NvcGU6IHt9IH07JGpzY29tcC5kZWZpbmVQcm9wZXJ0eSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiAoZSwgciwgcCkge1xuICBpZiAocC5nZXQgfHwgcC5zZXQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFUzMgZG9lcyBub3Qgc3VwcG9ydCBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlwiKTtlICE9IEFycmF5LnByb3RvdHlwZSAmJiBlICE9IE9iamVjdC5wcm90b3R5cGUgJiYgKGVbcl0gPSBwLnZhbHVlKTtcbn07JGpzY29tcC5nZXRHbG9iYWwgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ICYmIHdpbmRvdyA9PT0gZSA/IGUgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBnbG9iYWwgJiYgbnVsbCAhPSBnbG9iYWwgPyBnbG9iYWwgOiBlO1xufTskanNjb21wLmdsb2JhbCA9ICRqc2NvbXAuZ2V0R2xvYmFsKHRoaXMpOyRqc2NvbXAuU1lNQk9MX1BSRUZJWCA9IFwianNjb21wX3N5bWJvbF9cIjtcbiRqc2NvbXAuaW5pdFN5bWJvbCA9IGZ1bmN0aW9uICgpIHtcbiAgJGpzY29tcC5pbml0U3ltYm9sID0gZnVuY3Rpb24gKCkge307JGpzY29tcC5nbG9iYWwuU3ltYm9sIHx8ICgkanNjb21wLmdsb2JhbC5TeW1ib2wgPSAkanNjb21wLlN5bWJvbCk7XG59OyRqc2NvbXAuc3ltYm9sQ291bnRlcl8gPSAwOyRqc2NvbXAuU3ltYm9sID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuICRqc2NvbXAuU1lNQk9MX1BSRUZJWCArIChlIHx8IFwiXCIpICsgJGpzY29tcC5zeW1ib2xDb3VudGVyXysrO1xufTtcbiRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICAkanNjb21wLmluaXRTeW1ib2woKTt2YXIgZSA9ICRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcjtlIHx8IChlID0gJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yID0gJGpzY29tcC5nbG9iYWwuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiAhPSB0eXBlb2YgQXJyYXkucHJvdG90eXBlW2VdICYmICRqc2NvbXAuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCBlLCB7IGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAkanNjb21wLmFycmF5SXRlcmF0b3IodGhpcyk7XG4gICAgfSB9KTskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvciA9IGZ1bmN0aW9uICgpIHt9O1xufTskanNjb21wLmFycmF5SXRlcmF0b3IgPSBmdW5jdGlvbiAoZSkge1xuICB2YXIgciA9IDA7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByIDwgZS5sZW5ndGggPyB7IGRvbmU6ICExLCB2YWx1ZTogZVtyKytdIH0gOiB7IGRvbmU6ICEwIH07XG4gIH0pO1xufTtcbiRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUgPSBmdW5jdGlvbiAoZSkge1xuICAkanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2UgPSB7IG5leHQ6IGUgfTtlWyRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07cmV0dXJuIGU7XG59OyRqc2NvbXAuYXJyYXkgPSAkanNjb21wLmFycmF5IHx8IHt9OyRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXkgPSBmdW5jdGlvbiAoZSwgcikge1xuICAkanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2UgaW5zdGFuY2VvZiBTdHJpbmcgJiYgKGUgKz0gXCJcIik7dmFyIHAgPSAwLFxuICAgICAgbSA9IHsgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHAgPCBlLmxlbmd0aCkge1xuICAgICAgICB2YXIgdSA9IHArKztyZXR1cm4geyB2YWx1ZTogcih1LCBlW3VdKSwgZG9uZTogITEgfTtcbiAgICAgIH1tLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGRvbmU6ICEwLCB2YWx1ZTogdm9pZCAwIH07XG4gICAgICB9O3JldHVybiBtLm5leHQoKTtcbiAgICB9IH07bVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtO1xuICB9O3JldHVybiBtO1xufTtcbiRqc2NvbXAucG9seWZpbGwgPSBmdW5jdGlvbiAoZSwgciwgcCwgbSkge1xuICBpZiAocikge1xuICAgIHAgPSAkanNjb21wLmdsb2JhbDtlID0gZS5zcGxpdChcIi5cIik7Zm9yIChtID0gMDsgbSA8IGUubGVuZ3RoIC0gMTsgbSsrKSB7XG4gICAgICB2YXIgdSA9IGVbbV07dSBpbiBwIHx8IChwW3VdID0ge30pO3AgPSBwW3VdO1xuICAgIH1lID0gZVtlLmxlbmd0aCAtIDFdO20gPSBwW2VdO3IgPSByKG0pO3IgIT0gbSAmJiBudWxsICE9IHIgJiYgJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShwLCBlLCB7IGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCwgdmFsdWU6IHIgfSk7XG4gIH1cbn07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsIGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlID8gZSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJGpzY29tcC5pdGVyYXRvckZyb21BcnJheSh0aGlzLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGU7XG4gICAgfSk7XG4gIH07XG59LCBcImVzNi1pbXBsXCIsIFwiZXMzXCIpO3ZhciAkanNjb21wJHRoaXMgPSB0aGlzO1xuKGZ1bmN0aW9uIChyKSB7XG4gIE0uYW5pbWUgPSByKCk7XG59KShmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGUoYSkge1xuICAgIGlmICghaC5jb2woYSkpIHRyeSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKTtcbiAgICB9IGNhdGNoIChjKSB7fVxuICB9ZnVuY3Rpb24gcihhLCBjKSB7XG4gICAgZm9yICh2YXIgZCA9IGEubGVuZ3RoLCBiID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gYXJndW1lbnRzWzFdIDogdm9pZCAwLCBmID0gW10sIG4gPSAwOyBuIDwgZDsgbisrKSB7XG4gICAgICBpZiAobiBpbiBhKSB7XG4gICAgICAgIHZhciBrID0gYVtuXTtjLmNhbGwoYiwgaywgbiwgYSkgJiYgZi5wdXNoKGspO1xuICAgICAgfVxuICAgIH1yZXR1cm4gZjtcbiAgfWZ1bmN0aW9uIHAoYSkge1xuICAgIHJldHVybiBhLnJlZHVjZShmdW5jdGlvbiAoYSwgZCkge1xuICAgICAgcmV0dXJuIGEuY29uY2F0KGguYXJyKGQpID8gcChkKSA6IGQpO1xuICAgIH0sIFtdKTtcbiAgfWZ1bmN0aW9uIG0oYSkge1xuICAgIGlmIChoLmFycihhKSkgcmV0dXJuIGE7XG4gICAgaC5zdHIoYSkgJiYgKGEgPSBlKGEpIHx8IGEpO3JldHVybiBhIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgYSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uID8gW10uc2xpY2UuY2FsbChhKSA6IFthXTtcbiAgfWZ1bmN0aW9uIHUoYSwgYykge1xuICAgIHJldHVybiBhLnNvbWUoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBhID09PSBjO1xuICAgIH0pO1xuICB9ZnVuY3Rpb24gQyhhKSB7XG4gICAgdmFyIGMgPSB7fSxcbiAgICAgICAgZDtmb3IgKGQgaW4gYSkge1xuICAgICAgY1tkXSA9IGFbZF07XG4gICAgfXJldHVybiBjO1xuICB9ZnVuY3Rpb24gRChhLCBjKSB7XG4gICAgdmFyIGQgPSBDKGEpLFxuICAgICAgICBiO2ZvciAoYiBpbiBhKSB7XG4gICAgICBkW2JdID0gYy5oYXNPd25Qcm9wZXJ0eShiKSA/IGNbYl0gOiBhW2JdO1xuICAgIH1yZXR1cm4gZDtcbiAgfWZ1bmN0aW9uIHooYSwgYykge1xuICAgIHZhciBkID0gQyhhKSxcbiAgICAgICAgYjtmb3IgKGIgaW4gYykge1xuICAgICAgZFtiXSA9IGgudW5kKGFbYl0pID8gY1tiXSA6IGFbYl07XG4gICAgfXJldHVybiBkO1xuICB9ZnVuY3Rpb24gVChhKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLCBmdW5jdGlvbiAoYSwgYywgZCwgaykge1xuICAgICAgcmV0dXJuIGMgKyBjICsgZCArIGQgKyBrICsgaztcbiAgICB9KTt2YXIgYyA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhhKTtcbiAgICBhID0gcGFyc2VJbnQoY1sxXSwgMTYpO3ZhciBkID0gcGFyc2VJbnQoY1syXSwgMTYpLFxuICAgICAgICBjID0gcGFyc2VJbnQoY1szXSwgMTYpO3JldHVybiBcInJnYmEoXCIgKyBhICsgXCIsXCIgKyBkICsgXCIsXCIgKyBjICsgXCIsMSlcIjtcbiAgfWZ1bmN0aW9uIFUoYSkge1xuICAgIGZ1bmN0aW9uIGMoYSwgYywgYikge1xuICAgICAgMCA+IGIgJiYgKGIgKz0gMSk7MSA8IGIgJiYgLS1iO3JldHVybiBiIDwgMSAvIDYgPyBhICsgNiAqIChjIC0gYSkgKiBiIDogLjUgPiBiID8gYyA6IGIgPCAyIC8gMyA/IGEgKyAoYyAtIGEpICogKDIgLyAzIC0gYikgKiA2IDogYTtcbiAgICB9dmFyIGQgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhhKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhhKTthID0gcGFyc2VJbnQoZFsxXSkgLyAzNjA7dmFyIGIgPSBwYXJzZUludChkWzJdKSAvIDEwMCxcbiAgICAgICAgZiA9IHBhcnNlSW50KGRbM10pIC8gMTAwLFxuICAgICAgICBkID0gZFs0XSB8fCAxO2lmICgwID09IGIpIGYgPSBiID0gYSA9IGY7ZWxzZSB7XG4gICAgICB2YXIgbiA9IC41ID4gZiA/IGYgKiAoMSArIGIpIDogZiArIGIgLSBmICogYixcbiAgICAgICAgICBrID0gMiAqIGYgLSBuLFxuICAgICAgICAgIGYgPSBjKGssIG4sIGEgKyAxIC8gMyksXG4gICAgICAgICAgYiA9IGMoaywgbiwgYSk7YSA9IGMoaywgbiwgYSAtIDEgLyAzKTtcbiAgICB9cmV0dXJuIFwicmdiYShcIiArIDI1NSAqIGYgKyBcIixcIiArIDI1NSAqIGIgKyBcIixcIiArIDI1NSAqIGEgKyBcIixcIiArIGQgKyBcIilcIjtcbiAgfWZ1bmN0aW9uIHkoYSkge1xuICAgIGlmIChhID0gLyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKGEpKSByZXR1cm4gYVsyXTtcbiAgfWZ1bmN0aW9uIFYoYSkge1xuICAgIGlmICgtMSA8IGEuaW5kZXhPZihcInRyYW5zbGF0ZVwiKSB8fCBcInBlcnNwZWN0aXZlXCIgPT09IGEpIHJldHVybiBcInB4XCI7aWYgKC0xIDwgYS5pbmRleE9mKFwicm90YXRlXCIpIHx8IC0xIDwgYS5pbmRleE9mKFwic2tld1wiKSkgcmV0dXJuIFwiZGVnXCI7XG4gIH1mdW5jdGlvbiBJKGEsIGMpIHtcbiAgICByZXR1cm4gaC5mbmMoYSkgPyBhKGMudGFyZ2V0LCBjLmlkLCBjLnRvdGFsKSA6IGE7XG4gIH1mdW5jdGlvbiBFKGEsIGMpIHtcbiAgICBpZiAoYyBpbiBhLnN0eWxlKSByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpKSB8fCBcIjBcIjtcbiAgfWZ1bmN0aW9uIEooYSwgYykge1xuICAgIGlmIChoLmRvbShhKSAmJiB1KFcsIGMpKSByZXR1cm4gXCJ0cmFuc2Zvcm1cIjtpZiAoaC5kb20oYSkgJiYgKGEuZ2V0QXR0cmlidXRlKGMpIHx8IGguc3ZnKGEpICYmIGFbY10pKSByZXR1cm4gXCJhdHRyaWJ1dGVcIjtpZiAoaC5kb20oYSkgJiYgXCJ0cmFuc2Zvcm1cIiAhPT0gYyAmJiBFKGEsIGMpKSByZXR1cm4gXCJjc3NcIjtpZiAobnVsbCAhPSBhW2NdKSByZXR1cm4gXCJvYmplY3RcIjtcbiAgfWZ1bmN0aW9uIFgoYSwgYykge1xuICAgIHZhciBkID0gVihjKSxcbiAgICAgICAgZCA9IC0xIDwgYy5pbmRleE9mKFwic2NhbGVcIikgPyAxIDogMCArIGQ7YSA9IGEuc3R5bGUudHJhbnNmb3JtO2lmICghYSkgcmV0dXJuIGQ7Zm9yICh2YXIgYiA9IFtdLCBmID0gW10sIG4gPSBbXSwgayA9IC8oXFx3KylcXCgoLis/KVxcKS9nOyBiID0gay5leGVjKGEpOykge1xuICAgICAgZi5wdXNoKGJbMV0pLCBuLnB1c2goYlsyXSk7XG4gICAgfWEgPSByKG4sIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZltiXSA9PT0gYztcbiAgICB9KTtyZXR1cm4gYS5sZW5ndGggPyBhWzBdIDogZDtcbiAgfWZ1bmN0aW9uIEsoYSwgYykge1xuICAgIHN3aXRjaCAoSihhLCBjKSkge2Nhc2UgXCJ0cmFuc2Zvcm1cIjpcbiAgICAgICAgcmV0dXJuIFgoYSwgYyk7Y2FzZSBcImNzc1wiOlxuICAgICAgICByZXR1cm4gRShhLCBjKTtjYXNlIFwiYXR0cmlidXRlXCI6XG4gICAgICAgIHJldHVybiBhLmdldEF0dHJpYnV0ZShjKTt9cmV0dXJuIGFbY10gfHwgMDtcbiAgfWZ1bmN0aW9uIEwoYSwgYykge1xuICAgIHZhciBkID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyhhKTtpZiAoIWQpIHJldHVybiBhO3ZhciBiID0geShhKSB8fCAwO2MgPSBwYXJzZUZsb2F0KGMpO2EgPSBwYXJzZUZsb2F0KGEucmVwbGFjZShkWzBdLCBcIlwiKSk7c3dpdGNoIChkWzBdWzBdKSB7Y2FzZSBcIitcIjpcbiAgICAgICAgcmV0dXJuIGMgKyBhICsgYjtjYXNlIFwiLVwiOlxuICAgICAgICByZXR1cm4gYyAtIGEgKyBiO2Nhc2UgXCIqXCI6XG4gICAgICAgIHJldHVybiBjICogYSArIGI7fVxuICB9ZnVuY3Rpb24gRihhLCBjKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhjLnggLSBhLngsIDIpICsgTWF0aC5wb3coYy55IC0gYS55LCAyKSk7XG4gIH1mdW5jdGlvbiBNKGEpIHtcbiAgICBhID0gYS5wb2ludHM7Zm9yICh2YXIgYyA9IDAsIGQsIGIgPSAwOyBiIDwgYS5udW1iZXJPZkl0ZW1zOyBiKyspIHtcbiAgICAgIHZhciBmID0gYS5nZXRJdGVtKGIpOzAgPCBiICYmIChjICs9IEYoZCwgZikpO2QgPSBmO1xuICAgIH1yZXR1cm4gYztcbiAgfWZ1bmN0aW9uIE4oYSkge1xuICAgIGlmIChhLmdldFRvdGFsTGVuZ3RoKSByZXR1cm4gYS5nZXRUb3RhbExlbmd0aCgpO3N3aXRjaCAoYS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtjYXNlIFwiY2lyY2xlXCI6XG4gICAgICAgIHJldHVybiAyICogTWF0aC5QSSAqIGEuZ2V0QXR0cmlidXRlKFwiclwiKTtjYXNlIFwicmVjdFwiOlxuICAgICAgICByZXR1cm4gMiAqIGEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgKyAyICogYS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7Y2FzZSBcImxpbmVcIjpcbiAgICAgICAgcmV0dXJuIEYoeyB4OiBhLmdldEF0dHJpYnV0ZShcIngxXCIpLCB5OiBhLmdldEF0dHJpYnV0ZShcInkxXCIpIH0sIHsgeDogYS5nZXRBdHRyaWJ1dGUoXCJ4MlwiKSwgeTogYS5nZXRBdHRyaWJ1dGUoXCJ5MlwiKSB9KTtjYXNlIFwicG9seWxpbmVcIjpcbiAgICAgICAgcmV0dXJuIE0oYSk7Y2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgdmFyIGMgPSBhLnBvaW50cztyZXR1cm4gTShhKSArIEYoYy5nZXRJdGVtKGMubnVtYmVyT2ZJdGVtcyAtIDEpLCBjLmdldEl0ZW0oMCkpO31cbiAgfWZ1bmN0aW9uIFkoYSwgYykge1xuICAgIGZ1bmN0aW9uIGQoYikge1xuICAgICAgYiA9IHZvaWQgMCA9PT0gYiA/IDAgOiBiO3JldHVybiBhLmVsLmdldFBvaW50QXRMZW5ndGgoMSA8PSBjICsgYiA/IGMgKyBiIDogMCk7XG4gICAgfXZhciBiID0gZCgpLFxuICAgICAgICBmID0gZCgtMSksXG4gICAgICAgIG4gPSBkKDEpO3N3aXRjaCAoYS5wcm9wZXJ0eSkge2Nhc2UgXCJ4XCI6XG4gICAgICAgIHJldHVybiBiLng7Y2FzZSBcInlcIjpcbiAgICAgICAgcmV0dXJuIGIueTtcbiAgICAgIGNhc2UgXCJhbmdsZVwiOlxuICAgICAgICByZXR1cm4gMTgwICogTWF0aC5hdGFuMihuLnkgLSBmLnksIG4ueCAtIGYueCkgLyBNYXRoLlBJO31cbiAgfWZ1bmN0aW9uIE8oYSwgYykge1xuICAgIHZhciBkID0gLy0/XFxkKlxcLj9cXGQrL2csXG4gICAgICAgIGI7YiA9IGgucHRoKGEpID8gYS50b3RhbExlbmd0aCA6IGE7aWYgKGguY29sKGIpKSB7XG4gICAgICBpZiAoaC5yZ2IoYikpIHtcbiAgICAgICAgdmFyIGYgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMoYik7YiA9IGYgPyBcInJnYmEoXCIgKyBmWzFdICsgXCIsMSlcIiA6IGI7XG4gICAgICB9IGVsc2UgYiA9IGguaGV4KGIpID8gVChiKSA6IGguaHNsKGIpID8gVShiKSA6IHZvaWQgMDtcbiAgICB9IGVsc2UgZiA9IChmID0geShiKSkgPyBiLnN1YnN0cigwLCBiLmxlbmd0aCAtIGYubGVuZ3RoKSA6IGIsIGIgPSBjICYmICEvXFxzL2cudGVzdChiKSA/IGYgKyBjIDogZjtiICs9IFwiXCI7cmV0dXJuIHsgb3JpZ2luYWw6IGIsIG51bWJlcnM6IGIubWF0Y2goZCkgPyBiLm1hdGNoKGQpLm1hcChOdW1iZXIpIDogWzBdLCBzdHJpbmdzOiBoLnN0cihhKSB8fCBjID8gYi5zcGxpdChkKSA6IFtdIH07XG4gIH1mdW5jdGlvbiBQKGEpIHtcbiAgICBhID0gYSA/IHAoaC5hcnIoYSkgPyBhLm1hcChtKSA6IG0oYSkpIDogW107cmV0dXJuIHIoYSwgZnVuY3Rpb24gKGEsIGQsIGIpIHtcbiAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPT09IGQ7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBaKGEpIHtcbiAgICB2YXIgYyA9IFAoYSk7cmV0dXJuIGMubWFwKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4geyB0YXJnZXQ6IGEsIGlkOiBiLCB0b3RhbDogYy5sZW5ndGggfTtcbiAgICB9KTtcbiAgfWZ1bmN0aW9uIGFhKGEsIGMpIHtcbiAgICB2YXIgZCA9IEMoYyk7aWYgKGguYXJyKGEpKSB7XG4gICAgICB2YXIgYiA9IGEubGVuZ3RoOzIgIT09IGIgfHwgaC5vYmooYVswXSkgPyBoLmZuYyhjLmR1cmF0aW9uKSB8fCAoZC5kdXJhdGlvbiA9IGMuZHVyYXRpb24gLyBiKSA6IGEgPSB7IHZhbHVlOiBhIH07XG4gICAgfXJldHVybiBtKGEpLm1hcChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgYiA9IGIgPyAwIDogYy5kZWxheTthID0gaC5vYmooYSkgJiYgIWgucHRoKGEpID8gYSA6IHsgdmFsdWU6IGEgfTtoLnVuZChhLmRlbGF5KSAmJiAoYS5kZWxheSA9IGIpO3JldHVybiBhO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHooYSwgZCk7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBiYShhLCBjKSB7XG4gICAgdmFyIGQgPSB7fSxcbiAgICAgICAgYjtmb3IgKGIgaW4gYSkge1xuICAgICAgdmFyIGYgPSBJKGFbYl0sIGMpO2guYXJyKGYpICYmIChmID0gZi5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIEkoYSwgYyk7XG4gICAgICB9KSwgMSA9PT0gZi5sZW5ndGggJiYgKGYgPSBmWzBdKSk7ZFtiXSA9IGY7XG4gICAgfWQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KGQuZHVyYXRpb24pO2QuZGVsYXkgPSBwYXJzZUZsb2F0KGQuZGVsYXkpO3JldHVybiBkO1xuICB9ZnVuY3Rpb24gY2EoYSkge1xuICAgIHJldHVybiBoLmFycihhKSA/IEEuYXBwbHkodGhpcywgYSkgOiBRW2FdO1xuICB9ZnVuY3Rpb24gZGEoYSwgYykge1xuICAgIHZhciBkO3JldHVybiBhLnR3ZWVucy5tYXAoZnVuY3Rpb24gKGIpIHtcbiAgICAgIGIgPSBiYShiLCBjKTt2YXIgZiA9IGIudmFsdWUsXG4gICAgICAgICAgZSA9IEsoYy50YXJnZXQsIGEubmFtZSksXG4gICAgICAgICAgayA9IGQgPyBkLnRvLm9yaWdpbmFsIDogZSxcbiAgICAgICAgICBrID0gaC5hcnIoZikgPyBmWzBdIDogayxcbiAgICAgICAgICB3ID0gTChoLmFycihmKSA/IGZbMV0gOiBmLCBrKSxcbiAgICAgICAgICBlID0geSh3KSB8fCB5KGspIHx8IHkoZSk7Yi5mcm9tID0gTyhrLCBlKTtiLnRvID0gTyh3LCBlKTtiLnN0YXJ0ID0gZCA/IGQuZW5kIDogYS5vZmZzZXQ7Yi5lbmQgPSBiLnN0YXJ0ICsgYi5kZWxheSArIGIuZHVyYXRpb247Yi5lYXNpbmcgPSBjYShiLmVhc2luZyk7Yi5lbGFzdGljaXR5ID0gKDFFMyAtIE1hdGgubWluKE1hdGgubWF4KGIuZWxhc3RpY2l0eSwgMSksIDk5OSkpIC8gMUUzO2IuaXNQYXRoID0gaC5wdGgoZik7Yi5pc0NvbG9yID0gaC5jb2woYi5mcm9tLm9yaWdpbmFsKTtiLmlzQ29sb3IgJiYgKGIucm91bmQgPSAxKTtyZXR1cm4gZCA9IGI7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBlYShhLCBjKSB7XG4gICAgcmV0dXJuIHIocChhLm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGMubWFwKGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHZhciBjID0gSihhLnRhcmdldCwgYi5uYW1lKTtpZiAoYykge1xuICAgICAgICAgIHZhciBkID0gZGEoYiwgYSk7YiA9IHsgdHlwZTogYywgcHJvcGVydHk6IGIubmFtZSwgYW5pbWF0YWJsZTogYSwgdHdlZW5zOiBkLCBkdXJhdGlvbjogZFtkLmxlbmd0aCAtIDFdLmVuZCwgZGVsYXk6IGRbMF0uZGVsYXkgfTtcbiAgICAgICAgfSBlbHNlIGIgPSB2b2lkIDA7cmV0dXJuIGI7XG4gICAgICB9KTtcbiAgICB9KSksIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gIWgudW5kKGEpO1xuICAgIH0pO1xuICB9ZnVuY3Rpb24gUihhLCBjLCBkLCBiKSB7XG4gICAgdmFyIGYgPSBcImRlbGF5XCIgPT09IGE7cmV0dXJuIGMubGVuZ3RoID8gKGYgPyBNYXRoLm1pbiA6IE1hdGgubWF4KS5hcHBseShNYXRoLCBjLm1hcChmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGJbYV07XG4gICAgfSkpIDogZiA/IGIuZGVsYXkgOiBkLm9mZnNldCArIGIuZGVsYXkgKyBiLmR1cmF0aW9uO1xuICB9ZnVuY3Rpb24gZmEoYSkge1xuICAgIHZhciBjID0gRChnYSwgYSksXG4gICAgICAgIGQgPSBEKFMsIGEpLFxuICAgICAgICBiID0gWihhLnRhcmdldHMpLFxuICAgICAgICBmID0gW10sXG4gICAgICAgIGUgPSB6KGMsIGQpLFxuICAgICAgICBrO2ZvciAoayBpbiBhKSB7XG4gICAgICBlLmhhc093blByb3BlcnR5KGspIHx8IFwidGFyZ2V0c1wiID09PSBrIHx8IGYucHVzaCh7IG5hbWU6IGssIG9mZnNldDogZS5vZmZzZXQsIHR3ZWVuczogYWEoYVtrXSwgZCkgfSk7XG4gICAgfWEgPSBlYShiLCBmKTtyZXR1cm4geihjLCB7IGNoaWxkcmVuOiBbXSwgYW5pbWF0YWJsZXM6IGIsIGFuaW1hdGlvbnM6IGEsIGR1cmF0aW9uOiBSKFwiZHVyYXRpb25cIiwgYSwgYywgZCksIGRlbGF5OiBSKFwiZGVsYXlcIiwgYSwgYywgZCkgfSk7XG4gIH1mdW5jdGlvbiBxKGEpIHtcbiAgICBmdW5jdGlvbiBjKCkge1xuICAgICAgcmV0dXJuIHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBwID0gYTtcbiAgICAgIH0pO1xuICAgIH1mdW5jdGlvbiBkKGEpIHtcbiAgICAgIHJldHVybiBnLnJldmVyc2VkID8gZy5kdXJhdGlvbiAtIGEgOiBhO1xuICAgIH1mdW5jdGlvbiBiKGEpIHtcbiAgICAgIGZvciAodmFyIGIgPSAwLCBjID0ge30sIGQgPSBnLmFuaW1hdGlvbnMsIGYgPSBkLmxlbmd0aDsgYiA8IGY7KSB7XG4gICAgICAgIHZhciBlID0gZFtiXSxcbiAgICAgICAgICAgIGsgPSBlLmFuaW1hdGFibGUsXG4gICAgICAgICAgICBoID0gZS50d2VlbnMsXG4gICAgICAgICAgICBuID0gaC5sZW5ndGggLSAxLFxuICAgICAgICAgICAgbCA9IGhbbl07biAmJiAobCA9IHIoaCwgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICByZXR1cm4gYSA8IGIuZW5kO1xuICAgICAgICB9KVswXSB8fCBsKTtmb3IgKHZhciBoID0gTWF0aC5taW4oTWF0aC5tYXgoYSAtIGwuc3RhcnQgLSBsLmRlbGF5LCAwKSwgbC5kdXJhdGlvbikgLyBsLmR1cmF0aW9uLCB3ID0gaXNOYU4oaCkgPyAxIDogbC5lYXNpbmcoaCwgbC5lbGFzdGljaXR5KSwgaCA9IGwudG8uc3RyaW5ncywgcCA9IGwucm91bmQsIG4gPSBbXSwgbSA9IHZvaWQgMCwgbSA9IGwudG8ubnVtYmVycy5sZW5ndGgsIHQgPSAwOyB0IDwgbTsgdCsrKSB7XG4gICAgICAgICAgdmFyIHggPSB2b2lkIDAsXG4gICAgICAgICAgICAgIHggPSBsLnRvLm51bWJlcnNbdF0sXG4gICAgICAgICAgICAgIHEgPSBsLmZyb20ubnVtYmVyc1t0XSxcbiAgICAgICAgICAgICAgeCA9IGwuaXNQYXRoID8gWShsLnZhbHVlLCB3ICogeCkgOiBxICsgdyAqICh4IC0gcSk7cCAmJiAobC5pc0NvbG9yICYmIDIgPCB0IHx8ICh4ID0gTWF0aC5yb3VuZCh4ICogcCkgLyBwKSk7bi5wdXNoKHgpO1xuICAgICAgICB9aWYgKGwgPSBoLmxlbmd0aCkgZm9yIChtID0gaFswXSwgdyA9IDA7IHcgPCBsOyB3KyspIHtcbiAgICAgICAgICBwID0gaFt3ICsgMV0sIHQgPSBuW3ddLCBpc05hTih0KSB8fCAobSA9IHAgPyBtICsgKHQgKyBwKSA6IG0gKyAodCArIFwiIFwiKSk7XG4gICAgICAgIH0gZWxzZSBtID0gblswXTtoYVtlLnR5cGVdKGsudGFyZ2V0LCBlLnByb3BlcnR5LCBtLCBjLCBrLmlkKTtlLmN1cnJlbnRWYWx1ZSA9IG07YisrO1xuICAgICAgfWlmIChiID0gT2JqZWN0LmtleXMoYykubGVuZ3RoKSBmb3IgKGQgPSAwOyBkIDwgYjsgZCsrKSB7XG4gICAgICAgIEggfHwgKEggPSBFKGRvY3VtZW50LmJvZHksIFwidHJhbnNmb3JtXCIpID8gXCJ0cmFuc2Zvcm1cIiA6IFwiLXdlYmtpdC10cmFuc2Zvcm1cIiksIGcuYW5pbWF0YWJsZXNbZF0udGFyZ2V0LnN0eWxlW0hdID0gY1tkXS5qb2luKFwiIFwiKTtcbiAgICAgIH1nLmN1cnJlbnRUaW1lID0gYTtnLnByb2dyZXNzID0gYSAvIGcuZHVyYXRpb24gKiAxMDA7XG4gICAgfWZ1bmN0aW9uIGYoYSkge1xuICAgICAgaWYgKGdbYV0pIGdbYV0oZyk7XG4gICAgfWZ1bmN0aW9uIGUoKSB7XG4gICAgICBnLnJlbWFpbmluZyAmJiAhMCAhPT0gZy5yZW1haW5pbmcgJiYgZy5yZW1haW5pbmctLTtcbiAgICB9ZnVuY3Rpb24gayhhKSB7XG4gICAgICB2YXIgayA9IGcuZHVyYXRpb24sXG4gICAgICAgICAgbiA9IGcub2Zmc2V0LFxuICAgICAgICAgIHcgPSBuICsgZy5kZWxheSxcbiAgICAgICAgICByID0gZy5jdXJyZW50VGltZSxcbiAgICAgICAgICB4ID0gZy5yZXZlcnNlZCxcbiAgICAgICAgICBxID0gZChhKTtpZiAoZy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHUgPSBnLmNoaWxkcmVuLFxuICAgICAgICAgICAgdiA9IHUubGVuZ3RoO1xuICAgICAgICBpZiAocSA+PSBnLmN1cnJlbnRUaW1lKSBmb3IgKHZhciBHID0gMDsgRyA8IHY7IEcrKykge1xuICAgICAgICAgIHVbR10uc2VlayhxKTtcbiAgICAgICAgfSBlbHNlIGZvciAoOyB2LS07KSB7XG4gICAgICAgICAgdVt2XS5zZWVrKHEpO1xuICAgICAgICB9XG4gICAgICB9aWYgKHEgPj0gdyB8fCAhaykgZy5iZWdhbiB8fCAoZy5iZWdhbiA9ICEwLCBmKFwiYmVnaW5cIikpLCBmKFwicnVuXCIpO2lmIChxID4gbiAmJiBxIDwgaykgYihxKTtlbHNlIGlmIChxIDw9IG4gJiYgMCAhPT0gciAmJiAoYigwKSwgeCAmJiBlKCkpLCBxID49IGsgJiYgciAhPT0gayB8fCAhaykgYihrKSwgeCB8fCBlKCk7ZihcInVwZGF0ZVwiKTthID49IGsgJiYgKGcucmVtYWluaW5nID8gKHQgPSBoLCBcImFsdGVybmF0ZVwiID09PSBnLmRpcmVjdGlvbiAmJiAoZy5yZXZlcnNlZCA9ICFnLnJldmVyc2VkKSkgOiAoZy5wYXVzZSgpLCBnLmNvbXBsZXRlZCB8fCAoZy5jb21wbGV0ZWQgPSAhMCwgZihcImNvbXBsZXRlXCIpLCBcIlByb21pc2VcIiBpbiB3aW5kb3cgJiYgKHAoKSwgbSA9IGMoKSkpKSwgbCA9IDApO1xuICAgIH1hID0gdm9pZCAwID09PSBhID8ge30gOiBhO3ZhciBoLFxuICAgICAgICB0LFxuICAgICAgICBsID0gMCxcbiAgICAgICAgcCA9IG51bGwsXG4gICAgICAgIG0gPSBjKCksXG4gICAgICAgIGcgPSBmYShhKTtnLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSBnLmRpcmVjdGlvbixcbiAgICAgICAgICBjID0gZy5sb29wO2cuY3VycmVudFRpbWUgPSAwO2cucHJvZ3Jlc3MgPSAwO2cucGF1c2VkID0gITA7Zy5iZWdhbiA9ICExO2cuY29tcGxldGVkID0gITE7Zy5yZXZlcnNlZCA9IFwicmV2ZXJzZVwiID09PSBhO2cucmVtYWluaW5nID0gXCJhbHRlcm5hdGVcIiA9PT0gYSAmJiAxID09PSBjID8gMiA6IGM7YigwKTtmb3IgKGEgPSBnLmNoaWxkcmVuLmxlbmd0aDsgYS0tOykge1xuICAgICAgICBnLmNoaWxkcmVuW2FdLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfTtnLnRpY2sgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgaCA9IGE7dCB8fCAodCA9IGgpO2soKGwgKyBoIC0gdCkgKiBxLnNwZWVkKTtcbiAgICB9O2cuc2VlayA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICBrKGQoYSkpO1xuICAgIH07Zy5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhID0gdi5pbmRleE9mKGcpOy0xIDwgYSAmJiB2LnNwbGljZShhLCAxKTtnLnBhdXNlZCA9ICEwO1xuICAgIH07Zy5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZy5wYXVzZWQgJiYgKGcucGF1c2VkID0gITEsIHQgPSAwLCBsID0gZChnLmN1cnJlbnRUaW1lKSwgdi5wdXNoKGcpLCBCIHx8IGlhKCkpO1xuICAgIH07Zy5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgZy5yZXZlcnNlZCA9ICFnLnJldmVyc2VkO3QgPSAwO2wgPSBkKGcuY3VycmVudFRpbWUpO1xuICAgIH07Zy5yZXN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZy5wYXVzZSgpO1xuICAgICAgZy5yZXNldCgpO2cucGxheSgpO1xuICAgIH07Zy5maW5pc2hlZCA9IG07Zy5yZXNldCgpO2cuYXV0b3BsYXkgJiYgZy5wbGF5KCk7cmV0dXJuIGc7XG4gIH12YXIgZ2EgPSB7IHVwZGF0ZTogdm9pZCAwLCBiZWdpbjogdm9pZCAwLCBydW46IHZvaWQgMCwgY29tcGxldGU6IHZvaWQgMCwgbG9vcDogMSwgZGlyZWN0aW9uOiBcIm5vcm1hbFwiLCBhdXRvcGxheTogITAsIG9mZnNldDogMCB9LFxuICAgICAgUyA9IHsgZHVyYXRpb246IDFFMywgZGVsYXk6IDAsIGVhc2luZzogXCJlYXNlT3V0RWxhc3RpY1wiLCBlbGFzdGljaXR5OiA1MDAsIHJvdW5kOiAwIH0sXG4gICAgICBXID0gXCJ0cmFuc2xhdGVYIHRyYW5zbGF0ZVkgdHJhbnNsYXRlWiByb3RhdGUgcm90YXRlWCByb3RhdGVZIHJvdGF0ZVogc2NhbGUgc2NhbGVYIHNjYWxlWSBzY2FsZVogc2tld1ggc2tld1kgcGVyc3BlY3RpdmVcIi5zcGxpdChcIiBcIiksXG4gICAgICBILFxuICAgICAgaCA9IHsgYXJyOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7XG4gICAgfSwgb2JqOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIC0xIDwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJPYmplY3RcIik7XG4gICAgfSxcbiAgICBwdGg6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gaC5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eShcInRvdGFsTGVuZ3RoXCIpO1xuICAgIH0sIHN2ZzogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcbiAgICB9LCBkb206IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gYS5ub2RlVHlwZSB8fCBoLnN2ZyhhKTtcbiAgICB9LCBzdHI6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PT0gdHlwZW9mIGE7XG4gICAgfSwgZm5jOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGE7XG4gICAgfSwgdW5kOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiBhO1xuICAgIH0sIGhleDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiAoLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSlcbiAgICAgICk7XG4gICAgfSwgcmdiOiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuICgvXnJnYi8udGVzdChhKVxuICAgICAgKTtcbiAgICB9LCBoc2w6IGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gKC9eaHNsLy50ZXN0KGEpXG4gICAgICApO1xuICAgIH0sIGNvbDogZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBoLmhleChhKSB8fCBoLnJnYihhKSB8fCBoLmhzbChhKTtcbiAgICB9IH0sXG4gICAgICBBID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGEoYSwgZCwgYikge1xuICAgICAgcmV0dXJuICgoKDEgLSAzICogYiArIDMgKiBkKSAqIGEgKyAoMyAqIGIgLSA2ICogZCkpICogYSArIDMgKiBkKSAqIGE7XG4gICAgfXJldHVybiBmdW5jdGlvbiAoYywgZCwgYiwgZikge1xuICAgICAgaWYgKDAgPD0gYyAmJiAxID49IGMgJiYgMCA8PSBiICYmIDEgPj0gYikge1xuICAgICAgICB2YXIgZSA9IG5ldyBGbG9hdDMyQXJyYXkoMTEpO2lmIChjICE9PSBkIHx8IGIgIT09IGYpIGZvciAodmFyIGsgPSAwOyAxMSA+IGs7ICsraykge1xuICAgICAgICAgIGVba10gPSBhKC4xICogaywgYywgYik7XG4gICAgICAgIH1yZXR1cm4gZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICBpZiAoYyA9PT0gZCAmJiBiID09PSBmKSByZXR1cm4gaztpZiAoMCA9PT0gaykgcmV0dXJuIDA7aWYgKDEgPT09IGspIHJldHVybiAxO2ZvciAodmFyIGggPSAwLCBsID0gMTsgMTAgIT09IGwgJiYgZVtsXSA8PSBrOyArK2wpIHtcbiAgICAgICAgICAgIGggKz0gLjE7XG4gICAgICAgICAgfS0tbDt2YXIgbCA9IGggKyAoayAtIGVbbF0pIC8gKGVbbCArIDFdIC0gZVtsXSkgKiAuMSxcbiAgICAgICAgICAgICAgbiA9IDMgKiAoMSAtIDMgKiBiICsgMyAqIGMpICogbCAqIGwgKyAyICogKDMgKiBiIC0gNiAqIGMpICogbCArIDMgKiBjO2lmICguMDAxIDw9IG4pIHtcbiAgICAgICAgICAgIGZvciAoaCA9IDA7IDQgPiBoOyArK2gpIHtcbiAgICAgICAgICAgICAgbiA9IDMgKiAoMSAtIDMgKiBiICsgMyAqIGMpICogbCAqIGwgKyAyICogKDMgKiBiIC0gNiAqIGMpICogbCArIDMgKiBjO2lmICgwID09PSBuKSBicmVhazt2YXIgbSA9IGEobCwgYywgYikgLSBrLFxuICAgICAgICAgICAgICAgICAgbCA9IGwgLSBtIC8gbjtcbiAgICAgICAgICAgIH1rID0gbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKDAgPT09IG4pIGsgPSBsO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIGwgPSBoLFxuICAgICAgICAgICAgICAgIGggPSBoICsgLjEsXG4gICAgICAgICAgICAgICAgZyA9IDA7ZG8ge1xuICAgICAgICAgICAgICBtID0gbCArIChoIC0gbCkgLyAyLCBuID0gYShtLCBjLCBiKSAtIGssIDAgPCBuID8gaCA9IG0gOiBsID0gbTtcbiAgICAgICAgICAgIH0gd2hpbGUgKDFlLTcgPCBNYXRoLmFicyhuKSAmJiAxMCA+ICsrZyk7ayA9IG07XG4gICAgICAgICAgfXJldHVybiBhKGssIGQsIGYpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH0oKSxcbiAgICAgIFEgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gYShhLCBiKSB7XG4gICAgICByZXR1cm4gMCA9PT0gYSB8fCAxID09PSBhID8gYSA6IC1NYXRoLnBvdygyLCAxMCAqIChhIC0gMSkpICogTWF0aC5zaW4oMiAqIChhIC0gMSAtIGIgLyAoMiAqIE1hdGguUEkpICogTWF0aC5hc2luKDEpKSAqIE1hdGguUEkgLyBiKTtcbiAgICB9dmFyIGMgPSBcIlF1YWQgQ3ViaWMgUXVhcnQgUXVpbnQgU2luZSBFeHBvIENpcmMgQmFjayBFbGFzdGljXCIuc3BsaXQoXCIgXCIpLFxuICAgICAgICBkID0geyBJbjogW1suNTUsIC4wODUsIC42OCwgLjUzXSwgWy41NSwgLjA1NSwgLjY3NSwgLjE5XSwgWy44OTUsIC4wMywgLjY4NSwgLjIyXSwgWy43NTUsIC4wNSwgLjg1NSwgLjA2XSwgWy40NywgMCwgLjc0NSwgLjcxNV0sIFsuOTUsIC4wNSwgLjc5NSwgLjAzNV0sIFsuNiwgLjA0LCAuOTgsIC4zMzVdLCBbLjYsIC0uMjgsIC43MzUsIC4wNDVdLCBhXSwgT3V0OiBbWy4yNSwgLjQ2LCAuNDUsIC45NF0sIFsuMjE1LCAuNjEsIC4zNTUsIDFdLCBbLjE2NSwgLjg0LCAuNDQsIDFdLCBbLjIzLCAxLCAuMzIsIDFdLCBbLjM5LCAuNTc1LCAuNTY1LCAxXSwgWy4xOSwgMSwgLjIyLCAxXSwgWy4wNzUsIC44MiwgLjE2NSwgMV0sIFsuMTc1LCAuODg1LCAuMzIsIDEuMjc1XSwgZnVuY3Rpb24gKGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBhKDEgLSBiLCBjKTtcbiAgICAgIH1dLCBJbk91dDogW1suNDU1LCAuMDMsIC41MTUsIC45NTVdLCBbLjY0NSwgLjA0NSwgLjM1NSwgMV0sIFsuNzcsIDAsIC4xNzUsIDFdLCBbLjg2LCAwLCAuMDcsIDFdLCBbLjQ0NSwgLjA1LCAuNTUsIC45NV0sIFsxLCAwLCAwLCAxXSwgWy43ODUsIC4xMzUsIC4xNSwgLjg2XSwgWy42OCwgLS41NSwgLjI2NSwgMS41NV0sIGZ1bmN0aW9uIChiLCBjKSB7XG4gICAgICAgIHJldHVybiAuNSA+IGIgPyBhKDIgKiBiLCBjKSAvIDIgOiAxIC0gYSgtMiAqIGIgKyAyLCBjKSAvIDI7XG4gICAgICB9XSB9LFxuICAgICAgICBiID0geyBsaW5lYXI6IEEoLjI1LCAuMjUsIC43NSwgLjc1KSB9LFxuICAgICAgICBmID0ge30sXG4gICAgICAgIGU7Zm9yIChlIGluIGQpIHtcbiAgICAgIGYudHlwZSA9IGUsIGRbZi50eXBlXS5mb3JFYWNoKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZCwgZikge1xuICAgICAgICAgIGJbXCJlYXNlXCIgKyBhLnR5cGUgKyBjW2ZdXSA9IGguZm5jKGQpID8gZCA6IEEuYXBwbHkoJGpzY29tcCR0aGlzLCBkKTtcbiAgICAgICAgfTtcbiAgICAgIH0oZikpLCBmID0geyB0eXBlOiBmLnR5cGUgfTtcbiAgICB9cmV0dXJuIGI7XG4gIH0oKSxcbiAgICAgIGhhID0geyBjc3M6IGZ1bmN0aW9uIChhLCBjLCBkKSB7XG4gICAgICByZXR1cm4gYS5zdHlsZVtjXSA9IGQ7XG4gICAgfSwgYXR0cmlidXRlOiBmdW5jdGlvbiAoYSwgYywgZCkge1xuICAgICAgcmV0dXJuIGEuc2V0QXR0cmlidXRlKGMsIGQpO1xuICAgIH0sIG9iamVjdDogZnVuY3Rpb24gKGEsIGMsIGQpIHtcbiAgICAgIHJldHVybiBhW2NdID0gZDtcbiAgICB9LCB0cmFuc2Zvcm06IGZ1bmN0aW9uIChhLCBjLCBkLCBiLCBmKSB7XG4gICAgICBiW2ZdIHx8IChiW2ZdID0gW10pO2JbZl0ucHVzaChjICsgXCIoXCIgKyBkICsgXCIpXCIpO1xuICAgIH0gfSxcbiAgICAgIHYgPSBbXSxcbiAgICAgIEIgPSAwLFxuICAgICAgaWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gYSgpIHtcbiAgICAgIEIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyk7XG4gICAgfWZ1bmN0aW9uIGMoYykge1xuICAgICAgdmFyIGIgPSB2Lmxlbmd0aDtpZiAoYikge1xuICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGI7KSB7XG4gICAgICAgICAgdltkXSAmJiB2W2RdLnRpY2soYyksIGQrKztcbiAgICAgICAgfWEoKTtcbiAgICAgIH0gZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZShCKSwgQiA9IDA7XG4gICAgfXJldHVybiBhO1xuICB9KCk7cS52ZXJzaW9uID0gXCIyLjIuMFwiO3Euc3BlZWQgPSAxO3EucnVubmluZyA9IHY7cS5yZW1vdmUgPSBmdW5jdGlvbiAoYSkge1xuICAgIGEgPSBQKGEpO2ZvciAodmFyIGMgPSB2Lmxlbmd0aDsgYy0tOykge1xuICAgICAgZm9yICh2YXIgZCA9IHZbY10sIGIgPSBkLmFuaW1hdGlvbnMsIGYgPSBiLmxlbmd0aDsgZi0tOykge1xuICAgICAgICB1KGEsIGJbZl0uYW5pbWF0YWJsZS50YXJnZXQpICYmIChiLnNwbGljZShmLCAxKSwgYi5sZW5ndGggfHwgZC5wYXVzZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07cS5nZXRWYWx1ZSA9IEs7cS5wYXRoID0gZnVuY3Rpb24gKGEsIGMpIHtcbiAgICB2YXIgZCA9IGguc3RyKGEpID8gZShhKVswXSA6IGEsXG4gICAgICAgIGIgPSBjIHx8IDEwMDtyZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB7IGVsOiBkLCBwcm9wZXJ0eTogYSwgdG90YWxMZW5ndGg6IE4oZCkgKiAoYiAvIDEwMCkgfTtcbiAgICB9O1xuICB9O3Euc2V0RGFzaG9mZnNldCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGMgPSBOKGEpO2Euc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBjKTtyZXR1cm4gYztcbiAgfTtxLmJlemllciA9IEE7cS5lYXNpbmdzID0gUTtxLnRpbWVsaW5lID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYyA9IHEoYSk7Yy5wYXVzZSgpO2MuZHVyYXRpb24gPSAwO2MuYWRkID0gZnVuY3Rpb24gKGQpIHtcbiAgICAgIGMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoYSkge1xuICAgICAgICBhLmJlZ2FuID0gITA7YS5jb21wbGV0ZWQgPSAhMDtcbiAgICAgIH0pO20oZCkuZm9yRWFjaChmdW5jdGlvbiAoYikge1xuICAgICAgICB2YXIgZCA9IHooYiwgRChTLCBhIHx8IHt9KSk7ZC50YXJnZXRzID0gZC50YXJnZXRzIHx8IGEudGFyZ2V0cztiID0gYy5kdXJhdGlvbjt2YXIgZSA9IGQub2Zmc2V0O2QuYXV0b3BsYXkgPSAhMTtkLmRpcmVjdGlvbiA9IGMuZGlyZWN0aW9uO2Qub2Zmc2V0ID0gaC51bmQoZSkgPyBiIDogTChlLCBiKTtjLmJlZ2FuID0gITA7Yy5jb21wbGV0ZWQgPSAhMDtjLnNlZWsoZC5vZmZzZXQpO2QgPSBxKGQpO2QuYmVnYW4gPSAhMDtkLmNvbXBsZXRlZCA9ICEwO2QuZHVyYXRpb24gPiBiICYmIChjLmR1cmF0aW9uID0gZC5kdXJhdGlvbik7Yy5jaGlsZHJlbi5wdXNoKGQpO1xuICAgICAgfSk7Yy5zZWVrKDApO2MucmVzZXQoKTtjLmF1dG9wbGF5ICYmIGMucmVzdGFydCgpO3JldHVybiBjO1xuICAgIH07cmV0dXJuIGM7XG4gIH07cS5yYW5kb20gPSBmdW5jdGlvbiAoYSwgYykge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYyAtIGEgKyAxKSkgKyBhO1xuICB9O3JldHVybiBxO1xufSk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGFjY29yZGlvbjogdHJ1ZSxcbiAgICBvbk9wZW5TdGFydDogdW5kZWZpbmVkLFxuICAgIG9uT3BlbkVuZDogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2VTdGFydDogdW5kZWZpbmVkLFxuICAgIG9uQ2xvc2VFbmQ6IHVuZGVmaW5lZCxcbiAgICBpbkR1cmF0aW9uOiAzMDAsXG4gICAgb3V0RHVyYXRpb246IDMwMFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIENvbGxhcHNpYmxlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ29sbGFwc2libGUsIF9Db21wb25lbnQpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IENvbGxhcHNpYmxlIGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29sbGFwc2libGUoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xsYXBzaWJsZSk7XG5cbiAgICAgIHZhciBfdGhpczMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sbGFwc2libGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb2xsYXBzaWJsZSkpLmNhbGwodGhpcywgQ29sbGFwc2libGUsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMy5lbC5NX0NvbGxhcHNpYmxlID0gX3RoaXMzO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBjb2xsYXBzaWJsZVxuICAgICAgICogQG1lbWJlciBDb2xsYXBzaWJsZSNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2FjY29yZGlvbj1mYWxzZV0gLSBUeXBlIG9mIHRoZSBjb2xsYXBzaWJsZVxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgY29sbGFwc2libGUgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBjb2xsYXBzaWJsZSBpcyBvcGVuZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIGJlZm9yZSBjb2xsYXBzaWJsZSBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZUVuZCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBhZnRlciBjb2xsYXBzaWJsZSBpcyBjbG9zZWRcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGluRHVyYXRpb24gLSBUcmFuc2l0aW9uIGluIGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IG91dER1cmF0aW9uIC0gVHJhbnNpdGlvbiBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMuXG4gICAgICAgKi9cbiAgICAgIF90aGlzMy5vcHRpb25zID0gJC5leHRlbmQoe30sIENvbGxhcHNpYmxlLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLy8gU2V0dXAgdGFiIGluZGljZXNcbiAgICAgIF90aGlzMy4kaGVhZGVycyA9IF90aGlzMy4kZWwuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1oZWFkZXInKTtcbiAgICAgIF90aGlzMy4kaGVhZGVycy5hdHRyKCd0YWJpbmRleCcsIDApO1xuXG4gICAgICBfdGhpczMuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAvLyBPcGVuIGZpcnN0IGFjdGl2ZVxuICAgICAgdmFyICRhY3RpdmVCb2RpZXMgPSBfdGhpczMuJGVsLmNoaWxkcmVuKCdsaS5hY3RpdmUnKS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKTtcbiAgICAgIGlmIChfdGhpczMub3B0aW9ucy5hY2NvcmRpb24pIHtcbiAgICAgICAgLy8gSGFuZGxlIEFjY29yZGlvblxuICAgICAgICAkYWN0aXZlQm9kaWVzLmZpcnN0KCkuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgRXhwYW5kYWJsZXNcbiAgICAgICAgJGFjdGl2ZUJvZGllcy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGhpczM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbGxhcHNpYmxlLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fQ29sbGFwc2libGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlQ29sbGFwc2libGVLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrQm91bmQpO1xuICAgICAgICB0aGlzLiRoZWFkZXJzLmVhY2goZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgX3RoaXM0Ll9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd25Cb3VuZCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuJGhlYWRlcnMuZWFjaChmdW5jdGlvbiAoaGVhZGVyKSB7XG4gICAgICAgICAgaGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBfdGhpczUuX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93bkJvdW5kKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENvbGxhcHNpYmxlIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ29sbGFwc2libGVDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDb2xsYXBzaWJsZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyICRoZWFkZXIgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY29sbGFwc2libGUtaGVhZGVyJyk7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiAkaGVhZGVyLmxlbmd0aCkge1xuICAgICAgICAgIHZhciAkY29sbGFwc2libGUgPSAkaGVhZGVyLmNsb3Nlc3QoJy5jb2xsYXBzaWJsZScpO1xuICAgICAgICAgIGlmICgkY29sbGFwc2libGVbMF0gPT09IHRoaXMuZWwpIHtcbiAgICAgICAgICAgIHZhciAkY29sbGFwc2libGVMaSA9ICRoZWFkZXIuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgICAgIHZhciAkY29sbGFwc2libGVMaXMgPSAkY29sbGFwc2libGUuY2hpbGRyZW4oJ2xpJyk7XG4gICAgICAgICAgICB2YXIgaXNBY3RpdmUgPSAkY29sbGFwc2libGVMaVswXS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gJGNvbGxhcHNpYmxlTGlzLmluZGV4KCRjb2xsYXBzaWJsZUxpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoaW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ29sbGFwc2libGUgS2V5ZG93blxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNvbGxhcHNpYmxlS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDb2xsYXBzaWJsZUtleWRvd24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUNvbGxhcHNpYmxlQ2xpY2tCb3VuZChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgaW4gY29sbGFwc2libGUgc2xpZGVcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIDB0aCBpbmRleCBvZiBzbGlkZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlSW4oaW5kZXgpIHtcbiAgICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgICAgdmFyICRjb2xsYXBzaWJsZUxpID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJykuZXEoaW5kZXgpO1xuICAgICAgICBpZiAoJGNvbGxhcHNpYmxlTGkubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyICRib2R5ID0gJGNvbGxhcHNpYmxlTGkuY2hpbGRyZW4oJy5jb2xsYXBzaWJsZS1ib2R5Jyk7XG5cbiAgICAgICAgICBhbmltLnJlbW92ZSgkYm9keVswXSk7XG4gICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBwYWRkaW5nVG9wOiAnJyxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcnXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgcFRvcCA9ICRib2R5LmNzcygncGFkZGluZy10b3AnKTtcbiAgICAgICAgICB2YXIgcEJvdHRvbSA9ICRib2R5LmNzcygncGFkZGluZy1ib3R0b20nKTtcbiAgICAgICAgICB2YXIgZmluYWxIZWlnaHQgPSAkYm9keVswXS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiAwXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6ICRib2R5WzBdLFxuICAgICAgICAgICAgaGVpZ2h0OiBmaW5hbEhlaWdodCxcbiAgICAgICAgICAgIHBhZGRpbmdUb3A6IHBUb3AsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBwQm90dG9tLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgICAgICAgICRib2R5LmNzcyh7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6ICcnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206ICcnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJydcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgLy8gb25PcGVuRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXM2Lm9wdGlvbnMub25PcGVuRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM2Lm9wdGlvbnMub25PcGVuRW5kLmNhbGwoX3RoaXM2LCAkY29sbGFwc2libGVMaVswXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFuaW1hdGUgb3V0IGNvbGxhcHNpYmxlIHNsaWRlXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggLSAwdGggaW5kZXggb2Ygc2xpZGUgdG8gb3BlblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICB2YXIgJGNvbGxhcHNpYmxlTGkgPSB0aGlzLiRlbC5jaGlsZHJlbignbGknKS5lcShpbmRleCk7XG4gICAgICAgIGlmICgkY29sbGFwc2libGVMaS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgJGJvZHkgPSAkY29sbGFwc2libGVMaS5jaGlsZHJlbignLmNvbGxhcHNpYmxlLWJvZHknKTtcbiAgICAgICAgICBhbmltLnJlbW92ZSgkYm9keVswXSk7XG4gICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6ICRib2R5WzBdLFxuICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgcGFkZGluZ1RvcDogMCxcbiAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgJGJvZHkuY3NzKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnJ1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAvLyBvbkNsb3NlRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXM3Lm9wdGlvbnMub25DbG9zZUVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIF90aGlzNy5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczcsICRjb2xsYXBzaWJsZUxpWzBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBDb2xsYXBzaWJsZVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gMHRoIGluZGV4IG9mIHNsaWRlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbihpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgICB2YXIgJGNvbGxhcHNpYmxlTGkgPSB0aGlzLiRlbC5jaGlsZHJlbignbGknKS5lcShpbmRleCk7XG4gICAgICAgIGlmICgkY29sbGFwc2libGVMaS5sZW5ndGggJiYgISRjb2xsYXBzaWJsZUxpWzBdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAvLyBvbk9wZW5TdGFydCBjYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQuY2FsbCh0aGlzLCAkY29sbGFwc2libGVMaVswXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSGFuZGxlIGFjY29yZGlvbiBiZWhhdmlvclxuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uKSB7XG4gICAgICAgICAgICB2YXIgJGNvbGxhcHNpYmxlTGlzID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpJyk7XG4gICAgICAgICAgICB2YXIgJGFjdGl2ZUxpcyA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaS5hY3RpdmUnKTtcbiAgICAgICAgICAgICRhY3RpdmVMaXMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgdmFyIGluZGV4ID0gJGNvbGxhcHNpYmxlTGlzLmluZGV4KCQoZWwpKTtcbiAgICAgICAgICAgICAgX3RoaXM4LmNsb3NlKGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEFuaW1hdGUgaW5cbiAgICAgICAgICAkY29sbGFwc2libGVMaVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICB0aGlzLl9hbmltYXRlSW4oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2UgQ29sbGFwc2libGVcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIDB0aCBpbmRleCBvZiBzbGlkZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZShpbmRleCkge1xuICAgICAgICB2YXIgJGNvbGxhcHNpYmxlTGkgPSB0aGlzLiRlbC5jaGlsZHJlbignbGknKS5lcShpbmRleCk7XG4gICAgICAgIGlmICgkY29sbGFwc2libGVMaS5sZW5ndGggJiYgJGNvbGxhcHNpYmxlTGlbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgIC8vIG9uQ2xvc2VTdGFydCBjYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydC5jYWxsKHRoaXMsICRjb2xsYXBzaWJsZUxpWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBbmltYXRlIG91dFxuICAgICAgICAgICRjb2xsYXBzaWJsZUxpWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGVPdXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KENvbGxhcHNpYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sbGFwc2libGUpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9Db2xsYXBzaWJsZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDb2xsYXBzaWJsZTtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uQ29sbGFwc2libGUgPSBDb2xsYXBzaWJsZTtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKENvbGxhcHNpYmxlLCAnY29sbGFwc2libGUnLCAnTV9Db2xsYXBzaWJsZScpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgYWxpZ25tZW50OiAnbGVmdCcsXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxuICAgIGNvbnN0cmFpbldpZHRoOiB0cnVlLFxuICAgIGNvbnRhaW5lcjogbnVsbCxcbiAgICBjb3ZlclRyaWdnZXI6IHRydWUsXG4gICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgIGhvdmVyOiBmYWxzZSxcbiAgICBpbkR1cmF0aW9uOiAxNTAsXG4gICAgb3V0RHVyYXRpb246IDI1MCxcbiAgICBvbk9wZW5TdGFydDogbnVsbCxcbiAgICBvbk9wZW5FbmQ6IG51bGwsXG4gICAgb25DbG9zZVN0YXJ0OiBudWxsLFxuICAgIG9uQ2xvc2VFbmQ6IG51bGwsXG4gICAgb25JdGVtQ2xpY2s6IG51bGxcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqL1xuXG4gIHZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgIF9pbmhlcml0cyhEcm9wZG93biwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gRHJvcGRvd24oZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICAgIHZhciBfdGhpczkgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJvcGRvd24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikpLmNhbGwodGhpcywgRHJvcGRvd24sIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzOS5lbC5NX0Ryb3Bkb3duID0gX3RoaXM5O1xuICAgICAgRHJvcGRvd24uX2Ryb3Bkb3ducy5wdXNoKF90aGlzOSk7XG5cbiAgICAgIF90aGlzOS5pZCA9IE0uZ2V0SWRGcm9tVHJpZ2dlcihlbCk7XG4gICAgICBfdGhpczkuZHJvcGRvd25FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF90aGlzOS5pZCk7XG4gICAgICBfdGhpczkuJGRyb3Bkb3duRWwgPSAkKF90aGlzOS5kcm9wZG93bkVsKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgZHJvcGRvd25cbiAgICAgICAqIEBtZW1iZXIgRHJvcGRvd24jb3B0aW9uc1xuICAgICAgICogQHByb3Age1N0cmluZ30gW2FsaWdubWVudD0nbGVmdCddIC0gRWRnZSB3aGljaCB0aGUgZHJvcGRvd24gaXMgYWxpZ25lZCB0b1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFthdXRvRm9jdXM9dHJ1ZV0gLSBBdXRvbWF0aWNhbGx5IGZvY3VzIGRyb3Bkb3duIGVsIGZvciBrZXlib2FyZFxuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtjb25zdHJhaW5XaWR0aD10cnVlXSAtIENvbnN0cmFpbiB3aWR0aCB0byB3aWR0aCBvZiB0aGUgYnV0dG9uXG4gICAgICAgKiBAcHJvcCB7RWxlbWVudH0gY29udGFpbmVyIC0gQ29udGFpbmVyIGVsZW1lbnQgdG8gYXR0YWNoIGRyb3Bkb3duIHRvIChvcHRpb25hbClcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbY292ZXJUcmlnZ2VyPXRydWVdIC0gUGxhY2UgZHJvcGRvd24gb3ZlciB0cmlnZ2VyXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2Nsb3NlT25DbGljaz10cnVlXSAtIENsb3NlIG9uIGNsaWNrIG9mIGRyb3Bkb3duIGl0ZW1cbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbaG92ZXI9ZmFsc2VdIC0gT3BlbiBkcm9wZG93biBvbiBob3ZlclxuICAgICAgICogQHByb3Age051bWJlcn0gW2luRHVyYXRpb249MTUwXSAtIER1cmF0aW9uIG9mIG9wZW4gYW5pbWF0aW9uIGluIG1zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbb3V0RHVyYXRpb249MjUwXSAtIER1cmF0aW9uIG9mIGNsb3NlIGFuaW1hdGlvbiBpbiBtc1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGRyb3Bkb3duIHN0YXJ0cyBvcGVuaW5nXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGRyb3Bkb3duIGZpbmlzaGVzIG9wZW5pbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gZHJvcGRvd24gc3RhcnRzIGNsb3NpbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZUVuZCAtIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGRyb3Bkb3duIGZpbmlzaGVzIGNsb3NpbmdcbiAgICAgICAqL1xuICAgICAgX3RoaXM5Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRHJvcGRvd24uZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBvcGVuL2Nsb3NlIHN0YXRlIG9mIGRyb3Bkb3duXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXM5LmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBpZiBkcm9wZG93biBjb250ZW50IGlzIHNjcm9sbGFibGVcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczkuaXNTY3JvbGxhYmxlID0gZmFsc2U7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIGlmIHRvdWNoIG1vdmluZyBvbiBkcm9wZG93biBjb250ZW50XG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXM5LmlzVG91Y2hNb3ZpbmcgPSBmYWxzZTtcblxuICAgICAgX3RoaXM5LmZvY3VzZWRJbmRleCA9IC0xO1xuICAgICAgX3RoaXM5LmZpbHRlclF1ZXJ5ID0gW107XG5cbiAgICAgIC8vIE1vdmUgZHJvcGRvd24tY29udGVudCBhZnRlciBkcm9wZG93bi10cmlnZ2VyXG4gICAgICBpZiAoISFfdGhpczkub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgJChfdGhpczkub3B0aW9ucy5jb250YWluZXIpLmFwcGVuZChfdGhpczkuZHJvcGRvd25FbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczkuJGVsLmFmdGVyKF90aGlzOS5kcm9wZG93bkVsKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXM5Ll9tYWtlRHJvcGRvd25Gb2N1c2FibGUoKTtcbiAgICAgIF90aGlzOS5fcmVzZXRGaWx0ZXJRdWVyeUJvdW5kID0gX3RoaXM5Ll9yZXNldEZpbHRlclF1ZXJ5LmJpbmQoX3RoaXM5KTtcbiAgICAgIF90aGlzOS5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kID0gX3RoaXM5Ll9oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX3RoaXM5KTtcbiAgICAgIF90aGlzOS5faGFuZGxlRG9jdW1lbnRUb3VjaG1vdmVCb3VuZCA9IF90aGlzOS5faGFuZGxlRG9jdW1lbnRUb3VjaG1vdmUuYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9oYW5kbGVEcm9wZG93bkNsaWNrQm91bmQgPSBfdGhpczkuX2hhbmRsZURyb3Bkb3duQ2xpY2suYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9oYW5kbGVEcm9wZG93bktleWRvd25Cb3VuZCA9IF90aGlzOS5faGFuZGxlRHJvcGRvd25LZXlkb3duLmJpbmQoX3RoaXM5KTtcbiAgICAgIF90aGlzOS5faGFuZGxlVHJpZ2dlcktleWRvd25Cb3VuZCA9IF90aGlzOS5faGFuZGxlVHJpZ2dlcktleWRvd24uYmluZChfdGhpczkpO1xuICAgICAgX3RoaXM5Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVzZXREcm9wZG93blN0eWxlcygpO1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIERyb3Bkb3duLl9kcm9wZG93bnMuc3BsaWNlKERyb3Bkb3duLl9kcm9wZG93bnMuaW5kZXhPZih0aGlzKSwgMSk7XG4gICAgICAgIHRoaXMuZWwuTV9Ecm9wZG93biA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIC8vIFRyaWdnZXIga2V5ZG93biBoYW5kbGVyXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZVRyaWdnZXJLZXlkb3duQm91bmQpO1xuXG4gICAgICAgIC8vIEl0ZW0gY2xpY2sgaGFuZGxlclxuICAgICAgICB0aGlzLmRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEcm9wZG93bkNsaWNrQm91bmQpO1xuXG4gICAgICAgIC8vIEhvdmVyIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG92ZXIpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZUVudGVyQm91bmQgPSB0aGlzLl9oYW5kbGVNb3VzZUVudGVyLmJpbmQodGhpcyk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5faGFuZGxlTW91c2VFbnRlckJvdW5kKTtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlQm91bmQgPSB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZU1vdXNlTGVhdmVCb3VuZCk7XG5cbiAgICAgICAgICAvLyBDbGljayBldmVudCBoYW5kbGVyc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDbGlja0JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlVHJpZ2dlcktleWRvd25Cb3VuZCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURyb3Bkb3duQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3Zlcikge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2hhbmRsZU1vdXNlRW50ZXJCb3VuZCk7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZU1vdXNlTGVhdmVCb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsaWNrQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cFRlbXBvcmFyeUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBUZW1wb3JhcnlFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICAvLyBVc2UgY2FwdHVyZSBwaGFzZSBldmVudCBoYW5kbGVyIHRvIHByZXZlbnQgY2xpY2tcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZURvY3VtZW50VG91Y2htb3ZlQm91bmQpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZURyb3Bkb3duS2V5ZG93bkJvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZVRlbXBvcmFyeUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlVGVtcG9yYXJ5RXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgLy8gVXNlIGNhcHR1cmUgcGhhc2UgZXZlbnQgaGFuZGxlciB0byBwcmV2ZW50IGNsaWNrXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVEb2N1bWVudFRvdWNobW92ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVEcm9wZG93bktleWRvd25Cb3VuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVNb3VzZUVudGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlTW91c2VMZWF2ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb3VzZUxlYXZlKGUpIHtcbiAgICAgICAgdmFyIHRvRWwgPSBlLnRvRWxlbWVudCB8fCBlLnJlbGF0ZWRUYXJnZXQ7XG4gICAgICAgIHZhciBsZWF2ZVRvRHJvcGRvd25Db250ZW50ID0gISEkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoO1xuICAgICAgICB2YXIgbGVhdmVUb0FjdGl2ZURyb3Bkb3duVHJpZ2dlciA9IGZhbHNlO1xuXG4gICAgICAgIHZhciAkY2xvc2VzdFRyaWdnZXIgPSAkKHRvRWwpLmNsb3Nlc3QoJy5kcm9wZG93bi10cmlnZ2VyJyk7XG4gICAgICAgIGlmICgkY2xvc2VzdFRyaWdnZXIubGVuZ3RoICYmICEhJGNsb3Nlc3RUcmlnZ2VyWzBdLk1fRHJvcGRvd24gJiYgJGNsb3Nlc3RUcmlnZ2VyWzBdLk1fRHJvcGRvd24uaXNPcGVuKSB7XG4gICAgICAgICAgbGVhdmVUb0FjdGl2ZURyb3Bkb3duVHJpZ2dlciA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbG9zZSBob3ZlciBkcm9wZG93biBpZiBtb3VzZSBkaWQgbm90IGxlYXZlIHRvIGVpdGhlciBhY3RpdmUgZHJvcGRvd24tdHJpZ2dlciBvciBkcm9wZG93bi1jb250ZW50XG4gICAgICAgIGlmICghbGVhdmVUb0FjdGl2ZURyb3Bkb3duVHJpZ2dlciAmJiAhbGVhdmVUb0Ryb3Bkb3duQ29udGVudCkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRG9jdW1lbnRDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEb2N1bWVudENsaWNrKGUpIHtcbiAgICAgICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VPbkNsaWNrICYmICR0YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGggJiYgIXRoaXMuaXNUb3VjaE1vdmluZykge1xuICAgICAgICAgIC8vIGlzVG91Y2hNb3ZpbmcgdG8gY2hlY2sgaWYgc2Nyb2xsaW5nIG9uIG1vYmlsZS5cbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMTAuY2xvc2UoKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSBlbHNlIGlmICgkdGFyZ2V0LmNsb3Nlc3QoJy5kcm9wZG93bi10cmlnZ2VyJykubGVuZ3RoIHx8ICEkdGFyZ2V0LmNsb3Nlc3QoJy5kcm9wZG93bi1jb250ZW50JykubGVuZ3RoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczEwLmNsb3NlKCk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1RvdWNoTW92aW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVUcmlnZ2VyS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVUcmlnZ2VyS2V5ZG93bihlKSB7XG4gICAgICAgIC8vIEFSUk9XIERPV04gT1IgRU5URVIgV0hFTiBTRUxFQ1QgSVMgQ0xPU0VEIC0gb3BlbiBEcm9wZG93blxuICAgICAgICBpZiAoKGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19ET1dOIHx8IGUud2hpY2ggPT09IE0ua2V5cy5FTlRFUikgJiYgIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIERvY3VtZW50IFRvdWNobW92ZVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURvY3VtZW50VG91Y2htb3ZlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvY3VtZW50VG91Y2htb3ZlKGUpIHtcbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgaWYgKCR0YXJnZXQuY2xvc2VzdCgnLmRyb3Bkb3duLWNvbnRlbnQnKS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmlzVG91Y2hNb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIERyb3Bkb3duIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlRHJvcGRvd25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEcm9wZG93bkNsaWNrKGUpIHtcbiAgICAgICAgLy8gb25JdGVtQ2xpY2sgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25JdGVtQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgaXRlbUVsID0gJChlLnRhcmdldCkuY2xvc2VzdCgnbGknKVswXTtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25JdGVtQ2xpY2suY2FsbCh0aGlzLCBpdGVtRWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIERyb3Bkb3duIEtleWRvd25cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEcm9wZG93bktleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRHJvcGRvd25LZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5UQUIpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAgICAgLy8gTmF2aWdhdGUgZG93biBkcm9wZG93biBsaXN0XG4gICAgICAgIH0gZWxzZSBpZiAoKGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19ET1dOIHx8IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19VUCkgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUud2hpY2ggPT09IE0ua2V5cy5BUlJPV19ET1dOID8gMSA6IC0xO1xuICAgICAgICAgIHZhciBuZXdGb2N1c2VkSW5kZXggPSB0aGlzLmZvY3VzZWRJbmRleDtcbiAgICAgICAgICB2YXIgZm91bmROZXdJbmRleCA9IGZhbHNlO1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIG5ld0ZvY3VzZWRJbmRleCA9IG5ld0ZvY3VzZWRJbmRleCArIGRpcmVjdGlvbjtcblxuICAgICAgICAgICAgaWYgKCEhdGhpcy5kcm9wZG93bkVsLmNoaWxkcmVuW25ld0ZvY3VzZWRJbmRleF0gJiYgdGhpcy5kcm9wZG93bkVsLmNoaWxkcmVuW25ld0ZvY3VzZWRJbmRleF0udGFiSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIGZvdW5kTmV3SW5kZXggPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IHdoaWxlIChuZXdGb2N1c2VkSW5kZXggPCB0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW4ubGVuZ3RoICYmIG5ld0ZvY3VzZWRJbmRleCA+PSAwKTtcblxuICAgICAgICAgIGlmIChmb3VuZE5ld0luZGV4KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRJbmRleCA9IG5ld0ZvY3VzZWRJbmRleDtcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzRm9jdXNlZEl0ZW0oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBFTlRFUiBzZWxlY3RzIGNob2ljZSBvbiBmb2N1c2VkIGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBNLmtleXMuRU5URVIgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAvLyBTZWFyY2ggZm9yIDxhPiBhbmQgPGJ1dHRvbj5cbiAgICAgICAgICB2YXIgZm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRyb3Bkb3duRWwuY2hpbGRyZW5bdGhpcy5mb2N1c2VkSW5kZXhdO1xuICAgICAgICAgIHZhciAkYWN0aXZhdGFibGVFbGVtZW50ID0gJChmb2N1c2VkRWxlbWVudCkuZmluZCgnYSwgYnV0dG9uJykuZmlyc3QoKTtcblxuICAgICAgICAgIC8vIENsaWNrIGEgb3IgYnV0dG9uIHRhZyBpZiBleGlzdHMsIG90aGVyd2lzZSBjbGljayBsaSB0YWdcbiAgICAgICAgICBpZiAoISEkYWN0aXZhdGFibGVFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgJGFjdGl2YXRhYmxlRWxlbWVudFswXS5jbGljaygpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoISFmb2N1c2VkRWxlbWVudCkge1xuICAgICAgICAgICAgZm9jdXNlZEVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDbG9zZSBkcm9wZG93biBvbiBFU0NcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBNLmtleXMuRVNDICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENBU0UgV0hFTiBVU0VSIFRZUEUgTEVUVEVSU1xuICAgICAgICB2YXIgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgbm9uTGV0dGVycyA9IFs5LCAxMywgMjcsIDM4LCA0MF07XG4gICAgICAgIGlmIChsZXR0ZXIgJiYgbm9uTGV0dGVycy5pbmRleE9mKGUud2hpY2gpID09PSAtMSkge1xuICAgICAgICAgIHRoaXMuZmlsdGVyUXVlcnkucHVzaChsZXR0ZXIpO1xuXG4gICAgICAgICAgdmFyIHN0cmluZyA9IHRoaXMuZmlsdGVyUXVlcnkuam9pbignJyksXG4gICAgICAgICAgICAgIG5ld09wdGlvbkVsID0gJCh0aGlzLmRyb3Bkb3duRWwpLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuICQoZWwpLnRleHQoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc3RyaW5nKSA9PT0gMDtcbiAgICAgICAgICB9KVswXTtcblxuICAgICAgICAgIGlmIChuZXdPcHRpb25FbCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c2VkSW5kZXggPSAkKG5ld09wdGlvbkVsKS5pbmRleCgpO1xuICAgICAgICAgICAgdGhpcy5fZm9jdXNGb2N1c2VkSXRlbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlsdGVyVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fcmVzZXRGaWx0ZXJRdWVyeUJvdW5kLCAxMDAwKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc2V0RmlsdGVyUXVlcnlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzZXRGaWx0ZXJRdWVyeSgpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJRdWVyeSA9IFtdO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVzZXREcm9wZG93blN0eWxlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXNldERyb3Bkb3duU3R5bGVzKCkge1xuICAgICAgICB0aGlzLiRkcm9wZG93bkVsLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgIGhlaWdodDogJycsXG4gICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICAndHJhbnNmb3JtLW9yaWdpbic6ICcnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgb3BhY2l0eTogJydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9tYWtlRHJvcGRvd25Gb2N1c2FibGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZURyb3Bkb3duRm9jdXNhYmxlKCkge1xuICAgICAgICAvLyBOZWVkZWQgZm9yIGFycm93IGtleSBuYXZpZ2F0aW9uXG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC50YWJJbmRleCA9IDA7XG5cbiAgICAgICAgLy8gT25seSBzZXQgdGFiaW5kZXggaWYgaXQgaGFzbid0IGJlZW4gc2V0IGJ5IHVzZXJcbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duRWwpLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBpZiAoIWVsLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9mb2N1c0ZvY3VzZWRJdGVtXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZvY3VzRm9jdXNlZEl0ZW0oKSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWRJbmRleCA+PSAwICYmIHRoaXMuZm9jdXNlZEluZGV4IDwgdGhpcy5kcm9wZG93bkVsLmNoaWxkcmVuLmxlbmd0aCAmJiB0aGlzLm9wdGlvbnMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5kcm9wZG93bkVsLmNoaWxkcmVuW3RoaXMuZm9jdXNlZEluZGV4XS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXREcm9wZG93blBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2dldERyb3Bkb3duUG9zaXRpb24oKSB7XG4gICAgICAgIHZhciBvZmZzZXRQYXJlbnRCUmVjdCA9IHRoaXMuZWwub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgdHJpZ2dlckJSZWN0ID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGRyb3Bkb3duQlJlY3QgPSB0aGlzLmRyb3Bkb3duRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgdmFyIGlkZWFsSGVpZ2h0ID0gZHJvcGRvd25CUmVjdC5oZWlnaHQ7XG4gICAgICAgIHZhciBpZGVhbFdpZHRoID0gZHJvcGRvd25CUmVjdC53aWR0aDtcbiAgICAgICAgdmFyIGlkZWFsWFBvcyA9IHRyaWdnZXJCUmVjdC5sZWZ0IC0gZHJvcGRvd25CUmVjdC5sZWZ0O1xuICAgICAgICB2YXIgaWRlYWxZUG9zID0gdHJpZ2dlckJSZWN0LnRvcCAtIGRyb3Bkb3duQlJlY3QudG9wO1xuXG4gICAgICAgIHZhciBkcm9wZG93bkJvdW5kcyA9IHtcbiAgICAgICAgICBsZWZ0OiBpZGVhbFhQb3MsXG4gICAgICAgICAgdG9wOiBpZGVhbFlQb3MsXG4gICAgICAgICAgaGVpZ2h0OiBpZGVhbEhlaWdodCxcbiAgICAgICAgICB3aWR0aDogaWRlYWxXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENvdW50YWluZXIgaGVyZSB3aWxsIGJlIGNsb3Nlc3QgYW5jZXN0b3Igd2l0aCBvdmVyZmxvdzogaGlkZGVuXG4gICAgICAgIHZhciBjbG9zZXN0T3ZlcmZsb3dQYXJlbnQgPSAhIXRoaXMuZHJvcGRvd25FbC5vZmZzZXRQYXJlbnQgPyB0aGlzLmRyb3Bkb3duRWwub2Zmc2V0UGFyZW50IDogdGhpcy5kcm9wZG93bkVsLnBhcmVudE5vZGU7XG5cbiAgICAgICAgdmFyIGFsaWdubWVudHMgPSBNLmNoZWNrUG9zc2libGVBbGlnbm1lbnRzKHRoaXMuZWwsIGNsb3Nlc3RPdmVyZmxvd1BhcmVudCwgZHJvcGRvd25Cb3VuZHMsIHRoaXMub3B0aW9ucy5jb3ZlclRyaWdnZXIgPyAwIDogdHJpZ2dlckJSZWN0LmhlaWdodCk7XG5cbiAgICAgICAgdmFyIHZlcnRpY2FsQWxpZ25tZW50ID0gJ3RvcCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5vcHRpb25zLmFsaWdubWVudDtcbiAgICAgICAgaWRlYWxZUG9zICs9IHRoaXMub3B0aW9ucy5jb3ZlclRyaWdnZXIgPyAwIDogdHJpZ2dlckJSZWN0LmhlaWdodDtcblxuICAgICAgICAvLyBSZXNldCBpc1Njcm9sbGFibGVcbiAgICAgICAgdGhpcy5pc1Njcm9sbGFibGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIWFsaWdubWVudHMudG9wKSB7XG4gICAgICAgICAgaWYgKGFsaWdubWVudHMuYm90dG9tKSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudCA9ICdib3R0b20nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSB3aGljaCBzaWRlIGhhcyBtb3N0IHNwYWNlIGFuZCBjdXRvZmYgYXQgY29ycmVjdCBoZWlnaHRcbiAgICAgICAgICAgIGlmIChhbGlnbm1lbnRzLnNwYWNlT25Ub3AgPiBhbGlnbm1lbnRzLnNwYWNlT25Cb3R0b20pIHtcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQgPSAnYm90dG9tJztcbiAgICAgICAgICAgICAgaWRlYWxIZWlnaHQgKz0gYWxpZ25tZW50cy5zcGFjZU9uVG9wO1xuICAgICAgICAgICAgICBpZGVhbFlQb3MgLT0gYWxpZ25tZW50cy5zcGFjZU9uVG9wO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWRlYWxIZWlnaHQgKz0gYWxpZ25tZW50cy5zcGFjZU9uQm90dG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHByZWZlcnJlZCBob3Jpem9udGFsIGFsaWdubWVudCBpcyBwb3NzaWJsZVxuICAgICAgICBpZiAoIWFsaWdubWVudHNbaG9yaXpvbnRhbEFsaWdubWVudF0pIHtcbiAgICAgICAgICB2YXIgb3Bwb3NpdGVBbGlnbm1lbnQgPSBob3Jpem9udGFsQWxpZ25tZW50ID09PSAnbGVmdCcgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICAgIGlmIChhbGlnbm1lbnRzW29wcG9zaXRlQWxpZ25tZW50XSkge1xuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9IG9wcG9zaXRlQWxpZ25tZW50O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggc2lkZSBoYXMgbW9zdCBzcGFjZSBhbmQgY3V0b2ZmIGF0IGNvcnJlY3QgaGVpZ2h0XG4gICAgICAgICAgICBpZiAoYWxpZ25tZW50cy5zcGFjZU9uTGVmdCA+IGFsaWdubWVudHMuc3BhY2VPblJpZ2h0KSB7XG4gICAgICAgICAgICAgIGhvcml6b250YWxBbGlnbm1lbnQgPSAncmlnaHQnO1xuICAgICAgICAgICAgICBpZGVhbFdpZHRoICs9IGFsaWdubWVudHMuc3BhY2VPbkxlZnQ7XG4gICAgICAgICAgICAgIGlkZWFsWFBvcyAtPSBhbGlnbm1lbnRzLnNwYWNlT25MZWZ0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdsZWZ0JztcbiAgICAgICAgICAgICAgaWRlYWxXaWR0aCArPSBhbGlnbm1lbnRzLnNwYWNlT25SaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVydGljYWxBbGlnbm1lbnQgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgaWRlYWxZUG9zID0gaWRlYWxZUG9zIC0gZHJvcGRvd25CUmVjdC5oZWlnaHQgKyAodGhpcy5vcHRpb25zLmNvdmVyVHJpZ2dlciA/IHRyaWdnZXJCUmVjdC5oZWlnaHQgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9yaXpvbnRhbEFsaWdubWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGlkZWFsWFBvcyA9IGlkZWFsWFBvcyAtIGRyb3Bkb3duQlJlY3Qud2lkdGggKyB0cmlnZ2VyQlJlY3Qud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBpZGVhbFhQb3MsXG4gICAgICAgICAgeTogaWRlYWxZUG9zLFxuICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiB2ZXJ0aWNhbEFsaWdubWVudCxcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50OiBob3Jpem9udGFsQWxpZ25tZW50LFxuICAgICAgICAgIGhlaWdodDogaWRlYWxIZWlnaHQsXG4gICAgICAgICAgd2lkdGg6IGlkZWFsV2lkdGhcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGluIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbigpIHtcbiAgICAgICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuZHJvcGRvd25FbCk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZHJvcGRvd25FbCxcbiAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICB2YWx1ZTogWzAsIDFdLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY2FsZVg6IFswLjMsIDFdLFxuICAgICAgICAgIHNjYWxlWTogWzAuMywgMV0sXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWludCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMxMS5vcHRpb25zLmF1dG9Gb2N1cykge1xuICAgICAgICAgICAgICBfdGhpczExLmRyb3Bkb3duRWwuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25PcGVuRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMTEub3B0aW9ucy5vbk9wZW5FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxMS5vcHRpb25zLm9uT3BlbkVuZC5jYWxsKF90aGlzMTEsIF90aGlzMTEuZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0ZSBvdXQgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlT3V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVPdXQoKSB7XG4gICAgICAgIHZhciBfdGhpczEyID0gdGhpcztcblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmRyb3Bkb3duRWwpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLmRyb3Bkb3duRWwsXG4gICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVpbnQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY2FsZVg6IDAuMyxcbiAgICAgICAgICBzY2FsZVk6IDAuMyxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWludCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChhbmltKSB7XG4gICAgICAgICAgICBfdGhpczEyLl9yZXNldERyb3Bkb3duU3R5bGVzKCk7XG5cbiAgICAgICAgICAgIC8vIG9uQ2xvc2VFbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMxMi5vcHRpb25zLm9uQ2xvc2VFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxMi5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczEyLCBfdGhpczEyLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFBsYWNlIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcGxhY2VEcm9wZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wbGFjZURyb3Bkb3duKCkge1xuICAgICAgICAvLyBTZXQgd2lkdGggYmVmb3JlIGNhbGN1bGF0aW5nIHBvc2l0aW9uSW5mb1xuICAgICAgICB2YXIgaWRlYWxXaWR0aCA9IHRoaXMub3B0aW9ucy5jb25zdHJhaW5XaWR0aCA/IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggOiB0aGlzLmRyb3Bkb3duRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS53aWR0aCA9IGlkZWFsV2lkdGggKyAncHgnO1xuXG4gICAgICAgIHZhciBwb3NpdGlvbkluZm8gPSB0aGlzLl9nZXREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS5sZWZ0ID0gcG9zaXRpb25JbmZvLnggKyAncHgnO1xuICAgICAgICB0aGlzLmRyb3Bkb3duRWwuc3R5bGUudG9wID0gcG9zaXRpb25JbmZvLnkgKyAncHgnO1xuICAgICAgICB0aGlzLmRyb3Bkb3duRWwuc3R5bGUuaGVpZ2h0ID0gcG9zaXRpb25JbmZvLmhlaWdodCArICdweCc7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS53aWR0aCA9IHBvc2l0aW9uSW5mby53aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuZHJvcGRvd25FbC5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSAocG9zaXRpb25JbmZvLmhvcml6b250YWxBbGlnbm1lbnQgPT09ICdsZWZ0JyA/ICcwJyA6ICcxMDAlJykgKyBcIiBcIiArIChwb3NpdGlvbkluZm8udmVydGljYWxBbGlnbm1lbnQgPT09ICd0b3AnID8gJzAnIDogJzEwMCUnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBPcGVuIERyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgICAvLyBvbk9wZW5TdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgc3R5bGVzXG4gICAgICAgIHRoaXMuX3Jlc2V0RHJvcGRvd25TdHlsZXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIHRoaXMuX3BsYWNlRHJvcGRvd24oKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZUluKCk7XG4gICAgICAgIHRoaXMuX3NldHVwVGVtcG9yYXJ5RXZlbnRIYW5kbGVycygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIERyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZm9jdXNlZEluZGV4ID0gLTE7XG5cbiAgICAgICAgLy8gb25DbG9zZVN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FuaW1hdGVPdXQoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlVGVtcG9yYXJ5RXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVjYWxjdWxhdGUgZGltZW5zaW9uc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVjYWxjdWxhdGVEaW1lbnNpb25zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVjYWxjdWxhdGVEaW1lbnNpb25zKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLiRkcm9wZG93bkVsLmNzcyh7XG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICB0b3A6ICcnLFxuICAgICAgICAgICAgJ3RyYW5zZm9ybS1vcmlnaW4nOiAnJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX3BsYWNlRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChEcm9wZG93bi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fRHJvcGRvd247XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJvcGRvd247XG4gIH0oQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgRHJvcGRvd25cbiAgICovXG5cblxuICBEcm9wZG93bi5fZHJvcGRvd25zID0gW107XG5cbiAgTS5Ecm9wZG93biA9IERyb3Bkb3duO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoRHJvcGRvd24sICdkcm9wZG93bicsICdNX0Ryb3Bkb3duJyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgaW5EdXJhdGlvbjogMjUwLFxuICAgIG91dER1cmF0aW9uOiAyNTAsXG4gICAgb25PcGVuU3RhcnQ6IG51bGwsXG4gICAgb25PcGVuRW5kOiBudWxsLFxuICAgIG9uQ2xvc2VTdGFydDogbnVsbCxcbiAgICBvbkNsb3NlRW5kOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxpbmc6IHRydWUsXG4gICAgZGlzbWlzc2libGU6IHRydWUsXG4gICAgc3RhcnRpbmdUb3A6ICc0JScsXG4gICAgZW5kaW5nVG9wOiAnMTAlJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIE1vZGFsID0gZnVuY3Rpb24gKF9Db21wb25lbnQzKSB7XG4gICAgX2luaGVyaXRzKE1vZGFsLCBfQ29tcG9uZW50Myk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgTW9kYWwgaW5zdGFuY2UgYW5kIHNldCB1cCBvdmVybGF5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gTW9kYWwoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgIHZhciBfdGhpczEzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5jYWxsKHRoaXMsIE1vZGFsLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczEzLmVsLk1fTW9kYWwgPSBfdGhpczEzO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBtb2RhbFxuICAgICAgICogQG1lbWJlciBNb2RhbCNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbb3BhY2l0eT0wLjVdIC0gT3BhY2l0eSBvZiB0aGUgbW9kYWwgb3ZlcmxheVxuICAgICAgICogQHByb3Age051bWJlcn0gW2luRHVyYXRpb249MjUwXSAtIExlbmd0aCBpbiBtcyBvZiBlbnRlciB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbb3V0RHVyYXRpb249MjUwXSAtIExlbmd0aCBpbiBtcyBvZiBleGl0IHRyYW5zaXRpb25cbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuU3RhcnQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYmVmb3JlIG1vZGFsIGlzIG9wZW5lZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5FbmQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgbW9kYWwgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2VTdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbW9kYWwgaXMgY2xvc2VkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2VFbmQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgbW9kYWwgaXMgY2xvc2VkXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gW2Rpc21pc3NpYmxlPXRydWVdIC0gQWxsb3cgbW9kYWwgdG8gYmUgZGlzbWlzc2VkIGJ5IGtleWJvYXJkIG9yIG92ZXJsYXkgY2xpY2tcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IFtzdGFydGluZ1RvcD0nNCUnXSAtIHN0YXJ0aW5nVG9wXG4gICAgICAgKiBAcHJvcCB7U3RyaW5nfSBbZW5kaW5nVG9wPScxMCUnXSAtIGVuZGluZ1RvcFxuICAgICAgICovXG4gICAgICBfdGhpczEzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTW9kYWwuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvKipcbiAgICAgICAqIERlc2NyaWJlcyBvcGVuL2Nsb3NlIHN0YXRlIG9mIG1vZGFsXG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXMxMy5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgX3RoaXMxMy5pZCA9IF90aGlzMTMuJGVsLmF0dHIoJ2lkJyk7XG4gICAgICBfdGhpczEzLl9vcGVuaW5nVHJpZ2dlciA9IHVuZGVmaW5lZDtcbiAgICAgIF90aGlzMTMuJG92ZXJsYXkgPSAkKCc8ZGl2IGNsYXNzPVwibW9kYWwtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgX3RoaXMxMy5lbC50YWJJbmRleCA9IDA7XG4gICAgICBfdGhpczEzLl9udGhNb2RhbE9wZW5lZCA9IDA7XG5cbiAgICAgIE1vZGFsLl9jb3VudCsrO1xuICAgICAgX3RoaXMxMy5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXMxMztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoTW9kYWwsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBNb2RhbC5fY291bnQtLTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5lbC5NX01vZGFsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlTW9kYWxDbG9zZUNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVNb2RhbENsb3NlQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAoTW9kYWwuX2NvdW50ID09PSAxKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRyaWdnZXJDbGljayk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kb3ZlcmxheVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbGlja0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU1vZGFsQ2xvc2VDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGlmIChNb2RhbC5fY291bnQgPT09IDApIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRvdmVybGF5WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsaWNrQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlTW9kYWxDbG9zZUNsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBUcmlnZ2VyIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlVHJpZ2dlckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICAgIHZhciAkdHJpZ2dlciA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbC10cmlnZ2VyJyk7XG4gICAgICAgIGlmICgkdHJpZ2dlci5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgbW9kYWxJZCA9IE0uZ2V0SWRGcm9tVHJpZ2dlcigkdHJpZ2dlclswXSk7XG4gICAgICAgICAgdmFyIG1vZGFsSW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtb2RhbElkKS5NX01vZGFsO1xuICAgICAgICAgIGlmIChtb2RhbEluc3RhbmNlKSB7XG4gICAgICAgICAgICBtb2RhbEluc3RhbmNlLm9wZW4oJHRyaWdnZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgT3ZlcmxheSBDbGlja1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU92ZXJsYXlDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVPdmVybGF5Q2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgTW9kYWwgQ2xvc2UgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVNb2RhbENsb3NlQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTW9kYWxDbG9zZUNsaWNrKGUpIHtcbiAgICAgICAgdmFyICRjbG9zZVRyaWdnZXIgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcubW9kYWwtY2xvc2UnKTtcbiAgICAgICAgaWYgKCRjbG9zZVRyaWdnZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIEtleWRvd25cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUtleWRvd24oZSkge1xuICAgICAgICAvLyBFU0Mga2V5XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBGb2N1c1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUZvY3VzKGUpIHtcbiAgICAgICAgLy8gT25seSB0cmFwIGZvY3VzIGlmIHRoaXMgbW9kYWwgaXMgdGhlIGxhc3QgbW9kZWwgb3BlbmVkIChwcmV2ZW50cyBsb29wcyBpbiBuZXN0ZWQgbW9kYWxzKS5cbiAgICAgICAgaWYgKCF0aGlzLmVsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiB0aGlzLl9udGhNb2RhbE9wZW5lZCA9PT0gTW9kYWwuX21vZGFsc09wZW4pIHtcbiAgICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGluIG1vZGFsXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbigpIHtcbiAgICAgICAgdmFyIF90aGlzMTQgPSB0aGlzO1xuXG4gICAgICAgIC8vIFNldCBpbml0aWFsIHN0eWxlc1xuICAgICAgICAkLmV4dGVuZCh0aGlzLmVsLnN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pO1xuICAgICAgICAkLmV4dGVuZCh0aGlzLiRvdmVybGF5WzBdLnN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgb3ZlcmxheVxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRvdmVybGF5WzBdLFxuICAgICAgICAgIG9wYWNpdHk6IHRoaXMub3B0aW9ucy5vcGFjaXR5LFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVmaW5lIG1vZGFsIGFuaW1hdGlvbiBvcHRpb25zXG4gICAgICAgIHZhciBlbnRlckFuaW1PcHRpb25zID0ge1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIG9uT3BlbkVuZCBjYWxsYmFja1xuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMTQub3B0aW9ucy5vbk9wZW5FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxNC5vcHRpb25zLm9uT3BlbkVuZC5jYWxsKF90aGlzMTQsIF90aGlzMTQuZWwsIF90aGlzMTQuX29wZW5pbmdUcmlnZ2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQm90dG9tIHNoZWV0IGFuaW1hdGlvblxuICAgICAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgJC5leHRlbmQoZW50ZXJBbmltT3B0aW9ucywge1xuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFuaW0oZW50ZXJBbmltT3B0aW9ucyk7XG5cbiAgICAgICAgICAvLyBOb3JtYWwgbW9kYWwgYW5pbWF0aW9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJC5leHRlbmQoZW50ZXJBbmltT3B0aW9ucywge1xuICAgICAgICAgICAgdG9wOiBbdGhpcy5vcHRpb25zLnN0YXJ0aW5nVG9wLCB0aGlzLm9wdGlvbnMuZW5kaW5nVG9wXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBzY2FsZVg6IFswLjgsIDFdLFxuICAgICAgICAgICAgc2NhbGVZOiBbMC44LCAxXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFuaW0oZW50ZXJBbmltT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIG91dCBtb2RhbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgdmFyIF90aGlzMTUgPSB0aGlzO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgb3ZlcmxheVxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRvdmVybGF5WzBdLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhcnQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIERlZmluZSBtb2RhbCBhbmltYXRpb24gb3B0aW9uc1xuICAgICAgICB2YXIgZXhpdEFuaW1PcHRpb25zID0ge1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgIC8vIEhhbmRsZSBtb2RhbCByZWFkeSBjYWxsYmFja1xuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpczE1LmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBfdGhpczE1LiRvdmVybGF5LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBDYWxsIG9uQ2xvc2VFbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMxNS5vcHRpb25zLm9uQ2xvc2VFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMxNS5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczE1LCBfdGhpczE1LmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQm90dG9tIHNoZWV0IGFuaW1hdGlvblxuICAgICAgICBpZiAodGhpcy5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgJC5leHRlbmQoZXhpdEFuaW1PcHRpb25zLCB7XG4gICAgICAgICAgICBib3R0b206ICctMTAwJScsXG4gICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYW5pbShleGl0QW5pbU9wdGlvbnMpO1xuXG4gICAgICAgICAgLy8gTm9ybWFsIG1vZGFsIGFuaW1hdGlvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQuZXh0ZW5kKGV4aXRBbmltT3B0aW9ucywge1xuICAgICAgICAgICAgdG9wOiBbdGhpcy5vcHRpb25zLmVuZGluZ1RvcCwgdGhpcy5vcHRpb25zLnN0YXJ0aW5nVG9wXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBzY2FsZVg6IDAuOCxcbiAgICAgICAgICAgIHNjYWxlWTogMC44XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYW5pbShleGl0QW5pbU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBNb2RhbFxuICAgICAgICogQHBhcmFtIHtjYXNofSBbJHRyaWdnZXJdXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigkdHJpZ2dlcikge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIE1vZGFsLl9tb2RhbHNPcGVuKys7XG4gICAgICAgIHRoaXMuX250aE1vZGFsT3BlbmVkID0gTW9kYWwuX21vZGFsc09wZW47XG5cbiAgICAgICAgLy8gU2V0IFotSW5kZXggYmFzZWQgb24gbnVtYmVyIG9mIGN1cnJlbnRseSBvcGVuIG1vZGFsc1xuICAgICAgICB0aGlzLiRvdmVybGF5WzBdLnN0eWxlLnpJbmRleCA9IDEwMDAgKyBNb2RhbC5fbW9kYWxzT3BlbiAqIDI7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUuekluZGV4ID0gMTAwMCArIE1vZGFsLl9tb2RhbHNPcGVuICogMiArIDE7XG5cbiAgICAgICAgLy8gU2V0IG9wZW5pbmcgdHJpZ2dlciwgdW5kZWZpbmVkIGluZGljYXRlcyBtb2RhbCB3YXMgb3BlbmVkIGJ5IGphdmFzY3JpcHRcbiAgICAgICAgdGhpcy5fb3BlbmluZ1RyaWdnZXIgPSAhISR0cmlnZ2VyID8gJHRyaWdnZXJbMF0gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gb25PcGVuU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsLCB0aGlzLl9vcGVuaW5nVHJpZ2dlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnByZXZlbnRTY3JvbGxpbmcpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5lbC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgdGhpcy4kb3ZlcmxheVswXSk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5kaXNtaXNzaWJsZSkge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUtleWRvd25Cb3VuZCA9IHRoaXMuX2hhbmRsZUtleWRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVGb2N1c0JvdW5kID0gdGhpcy5faGFuZGxlRm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bkJvdW5kKTtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5lbCk7XG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJG92ZXJsYXlbMF0pO1xuICAgICAgICB0aGlzLl9hbmltYXRlSW4oKTtcblxuICAgICAgICAvLyBGb2N1cyBtb2RhbFxuICAgICAgICB0aGlzLmVsLmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2UgTW9kYWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICBNb2RhbC5fbW9kYWxzT3Blbi0tO1xuICAgICAgICB0aGlzLl9udGhNb2RhbE9wZW5lZCA9IDA7XG5cbiAgICAgICAgLy8gQ2FsbCBvbkNsb3NlU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG5cbiAgICAgICAgLy8gRW5hYmxlIGJvZHkgc2Nyb2xsaW5nIG9ubHkgaWYgdGhlcmUgYXJlIG5vIG1vcmUgbW9kYWxzIG9wZW4uXG4gICAgICAgIGlmIChNb2RhbC5fbW9kYWxzT3BlbiA9PT0gMCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlS2V5ZG93bkJvdW5kKTtcbiAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5lbCk7XG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJG92ZXJsYXlbMF0pO1xuICAgICAgICB0aGlzLl9hbmltYXRlT3V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChNb2RhbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1vZGFsKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fTW9kYWw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTW9kYWw7XG4gIH0oQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgTW9kYWxcbiAgICovXG5cblxuICBNb2RhbC5fbW9kYWxzT3BlbiA9IDA7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIE1vZGFsXG4gICAqL1xuICBNb2RhbC5fY291bnQgPSAwO1xuXG4gIE0uTW9kYWwgPSBNb2RhbDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKE1vZGFsLCAnbW9kYWwnLCAnTV9Nb2RhbCcpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgaW5EdXJhdGlvbjogMjc1LFxuICAgIG91dER1cmF0aW9uOiAyMDAsXG4gICAgb25PcGVuU3RhcnQ6IG51bGwsXG4gICAgb25PcGVuRW5kOiBudWxsLFxuICAgIG9uQ2xvc2VTdGFydDogbnVsbCxcbiAgICBvbkNsb3NlRW5kOiBudWxsXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgTWF0ZXJpYWxib3ggPSBmdW5jdGlvbiAoX0NvbXBvbmVudDQpIHtcbiAgICBfaW5oZXJpdHMoTWF0ZXJpYWxib3gsIF9Db21wb25lbnQ0KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBNYXRlcmlhbGJveCBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1hdGVyaWFsYm94KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWF0ZXJpYWxib3gpO1xuXG4gICAgICB2YXIgX3RoaXMxNiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNYXRlcmlhbGJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1hdGVyaWFsYm94KSkuY2FsbCh0aGlzLCBNYXRlcmlhbGJveCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMxNi5lbC5NX01hdGVyaWFsYm94ID0gX3RoaXMxNjtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgTWF0ZXJpYWxib3gjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gW2luRHVyYXRpb249Mjc1XSAtIExlbmd0aCBpbiBtcyBvZiBlbnRlciB0cmFuc2l0aW9uXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbb3V0RHVyYXRpb249MjAwXSAtIExlbmd0aCBpbiBtcyBvZiBleGl0IHRyYW5zaXRpb25cbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuU3RhcnQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYmVmb3JlIG1hdGVyaWFsYm94IGlzIG9wZW5lZFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5FbmQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgbWF0ZXJpYWxib3ggaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2VTdGFydCAtIENhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCBiZWZvcmUgbWF0ZXJpYWxib3ggaXMgY2xvc2VkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2VFbmQgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgYWZ0ZXIgbWF0ZXJpYWxib3ggaXMgY2xvc2VkXG4gICAgICAgKi9cbiAgICAgIF90aGlzMTYub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNYXRlcmlhbGJveC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzMTYub3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgX3RoaXMxNi5kb25lQW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIF90aGlzMTYucGxhY2Vob2xkZXIgPSAkKCc8ZGl2PjwvZGl2PicpLmFkZENsYXNzKCdtYXRlcmlhbC1wbGFjZWhvbGRlcicpO1xuICAgICAgX3RoaXMxNi5vcmlnaW5hbFdpZHRoID0gMDtcbiAgICAgIF90aGlzMTYub3JpZ2luYWxIZWlnaHQgPSAwO1xuICAgICAgX3RoaXMxNi5vcmlnaW5JbmxpbmVTdHlsZXMgPSBfdGhpczE2LiRlbC5hdHRyKCdzdHlsZScpO1xuICAgICAgX3RoaXMxNi5jYXB0aW9uID0gX3RoaXMxNi5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FwdGlvbicpIHx8ICcnO1xuXG4gICAgICAvLyBXcmFwXG4gICAgICBfdGhpczE2LiRlbC5iZWZvcmUoX3RoaXMxNi5wbGFjZWhvbGRlcik7XG4gICAgICBfdGhpczE2LnBsYWNlaG9sZGVyLmFwcGVuZChfdGhpczE2LiRlbCk7XG5cbiAgICAgIF90aGlzMTYuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzMTY7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1hdGVyaWFsYm94LCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fTWF0ZXJpYWxib3ggPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gVW53cmFwIGltYWdlXG4gICAgICAgICQodGhpcy5wbGFjZWhvbGRlcikuYWZ0ZXIodGhpcy5lbCkucmVtb3ZlKCk7XG5cbiAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlTWF0ZXJpYWxib3hDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgTWF0ZXJpYWxib3ggQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVNYXRlcmlhbGJveENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZU1hdGVyaWFsYm94Q2xpY2soZSkge1xuICAgICAgICAvLyBJZiBhbHJlYWR5IG1vZGFsLCByZXR1cm4gdG8gb3JpZ2luYWxcbiAgICAgICAgaWYgKHRoaXMuZG9uZUFuaW1hdGluZyA9PT0gZmFsc2UgfHwgdGhpcy5vdmVybGF5QWN0aXZlICYmIHRoaXMuZG9uZUFuaW1hdGluZykge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBXaW5kb3cgU2Nyb2xsXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlV2luZG93U2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVdpbmRvd1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBXaW5kb3cgUmVzaXplXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlV2luZG93UmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBXaW5kb3cgUmVzaXplXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlV2luZG93RXNjYXBlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVdpbmRvd0VzY2FwZShlKSB7XG4gICAgICAgIC8vIEVTQyBrZXlcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5kb25lQW5pbWF0aW5nICYmIHRoaXMub3ZlcmxheUFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEZpbmQgYW5jZXN0b3JzIHdpdGggb3ZlcmZsb3c6IGhpZGRlbjsgYW5kIG1ha2UgdmlzaWJsZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX21ha2VBbmNlc3RvcnNPdmVyZmxvd1Zpc2libGVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFrZUFuY2VzdG9yc092ZXJmbG93VmlzaWJsZSgpIHtcbiAgICAgICAgdGhpcy5hbmNlc3RvcnNDaGFuZ2VkID0gJCgpO1xuICAgICAgICB2YXIgYW5jZXN0b3IgPSB0aGlzLnBsYWNlaG9sZGVyWzBdLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChhbmNlc3RvciAhPT0gbnVsbCAmJiAhJChhbmNlc3RvcikuaXMoZG9jdW1lbnQpKSB7XG4gICAgICAgICAgdmFyIGN1cnIgPSAkKGFuY2VzdG9yKTtcbiAgICAgICAgICBpZiAoY3Vyci5jc3MoJ292ZXJmbG93JykgIT09ICd2aXNpYmxlJykge1xuICAgICAgICAgICAgY3Vyci5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmFuY2VzdG9yc0NoYW5nZWQgPSBjdXJyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5hbmNlc3RvcnNDaGFuZ2VkID0gdGhpcy5hbmNlc3RvcnNDaGFuZ2VkLmFkZChjdXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYW5jZXN0b3IgPSBhbmNlc3Rvci5wYXJlbnROb2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0ZSBpbWFnZSBpblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJbWFnZUluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbWFnZUluKCkge1xuICAgICAgICB2YXIgX3RoaXMxNyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGFuaW1PcHRpb25zID0ge1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgaGVpZ2h0OiBbdGhpcy5vcmlnaW5hbEhlaWdodCwgdGhpcy5uZXdIZWlnaHRdLFxuICAgICAgICAgIHdpZHRoOiBbdGhpcy5vcmlnaW5hbFdpZHRoLCB0aGlzLm5ld1dpZHRoXSxcbiAgICAgICAgICBsZWZ0OiBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpICsgdGhpcy53aW5kb3dXaWR0aCAvIDIgLSB0aGlzLnBsYWNlaG9sZGVyLm9mZnNldCgpLmxlZnQgLSB0aGlzLm5ld1dpZHRoIC8gMixcbiAgICAgICAgICB0b3A6IE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKSArIHRoaXMud2luZG93SGVpZ2h0IC8gMiAtIHRoaXMucGxhY2Vob2xkZXIub2Zmc2V0KCkudG9wIC0gdGhpcy5uZXdIZWlnaHQgLyAyLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMTcuZG9uZUFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIG9uT3BlbkVuZCBjYWxsYmFja1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpczE3Lm9wdGlvbnMub25PcGVuRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIF90aGlzMTcub3B0aW9ucy5vbk9wZW5FbmQuY2FsbChfdGhpczE3LCBfdGhpczE3LmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgbWF4LXdpZHRoIG9yIG1heC1oZWlnaHQgaWYgbmVlZGVkXG4gICAgICAgIHRoaXMubWF4V2lkdGggPSB0aGlzLiRlbC5jc3MoJ21heC13aWR0aCcpO1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9IHRoaXMuJGVsLmNzcygnbWF4LWhlaWdodCcpO1xuICAgICAgICBpZiAodGhpcy5tYXhXaWR0aCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgYW5pbU9wdGlvbnMubWF4V2lkdGggPSB0aGlzLm5ld1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heEhlaWdodCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgYW5pbU9wdGlvbnMubWF4SGVpZ2h0ID0gdGhpcy5uZXdIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltKGFuaW1PcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGltYWdlIG91dFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVJbWFnZU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlSW1hZ2VPdXQoKSB7XG4gICAgICAgIHZhciBfdGhpczE4ID0gdGhpcztcblxuICAgICAgICB2YXIgYW5pbU9wdGlvbnMgPSB7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICB3aWR0aDogdGhpcy5vcmlnaW5hbFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy5vcmlnaW5hbEhlaWdodCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMxOC5wbGFjZWhvbGRlci5jc3Moe1xuICAgICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgICAgICAgbGVmdDogJydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZXZlcnQgdG8gd2lkdGggb3IgaGVpZ2h0IGF0dHJpYnV0ZVxuICAgICAgICAgICAgaWYgKF90aGlzMTguYXR0cldpZHRoKSB7XG4gICAgICAgICAgICAgIF90aGlzMTguJGVsLmF0dHIoJ3dpZHRoJywgX3RoaXMxOC5hdHRyV2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF90aGlzMTguYXR0ckhlaWdodCkge1xuICAgICAgICAgICAgICBfdGhpczE4LiRlbC5hdHRyKCdoZWlnaHQnLCBfdGhpczE4LmF0dHJIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpczE4LiRlbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgX3RoaXMxOC5vcmlnaW5JbmxpbmVTdHlsZXMgJiYgX3RoaXMxOC4kZWwuYXR0cignc3R5bGUnLCBfdGhpczE4Lm9yaWdpbklubGluZVN0eWxlcyk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBjbGFzc1xuICAgICAgICAgICAgX3RoaXMxOC4kZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgX3RoaXMxOC5kb25lQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIG92ZXJmbG93IG92ZXJyaWRlcyBvbiBhbmNlc3RvcnNcbiAgICAgICAgICAgIGlmIChfdGhpczE4LmFuY2VzdG9yc0NoYW5nZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIF90aGlzMTguYW5jZXN0b3JzQ2hhbmdlZC5jc3MoJ292ZXJmbG93JywgJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbkNsb3NlRW5kIGNhbGxiYWNrXG4gICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMTgub3B0aW9ucy5vbkNsb3NlRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIF90aGlzMTgub3B0aW9ucy5vbkNsb3NlRW5kLmNhbGwoX3RoaXMxOCwgX3RoaXMxOC5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFuaW0oYW5pbU9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFVwZGF0ZSBvcGVuIGFuZCBjbG9zZSB2YXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlVmFyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVWYXJzKCkge1xuICAgICAgICB0aGlzLndpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB0aGlzLmNhcHRpb24gPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXB0aW9uJykgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBNYXRlcmlhbGJveFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwib3BlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgICAgIHZhciBfdGhpczE5ID0gdGhpcztcblxuICAgICAgICB0aGlzLl91cGRhdGVWYXJzKCk7XG4gICAgICAgIHRoaXMub3JpZ2luYWxXaWR0aCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICAvLyBTZXQgc3RhdGVzXG4gICAgICAgIHRoaXMuZG9uZUFuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMub3ZlcmxheUFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gb25PcGVuU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuU3RhcnQuY2FsbCh0aGlzLCB0aGlzLmVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBwb3NpdGlvbmluZyBmb3IgcGxhY2Vob2xkZXJcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlci5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB0aGlzLnBsYWNlaG9sZGVyWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICsgJ3B4JyxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMucGxhY2Vob2xkZXJbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl9tYWtlQW5jZXN0b3JzT3ZlcmZsb3dWaXNpYmxlKCk7XG5cbiAgICAgICAgLy8gU2V0IGNzcyBvbiBvcmlnaW5cbiAgICAgICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAnei1pbmRleCc6IDEwMDAsXG4gICAgICAgICAgJ3dpbGwtY2hhbmdlJzogJ2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIGZyb20gd2lkdGggb3IgaGVpZ2h0IGF0dHJpYnV0ZSB0byBjc3NcbiAgICAgICAgdGhpcy5hdHRyV2lkdGggPSB0aGlzLiRlbC5hdHRyKCd3aWR0aCcpO1xuICAgICAgICB0aGlzLmF0dHJIZWlnaHQgPSB0aGlzLiRlbC5hdHRyKCdoZWlnaHQnKTtcbiAgICAgICAgaWYgKHRoaXMuYXR0cldpZHRoKSB7XG4gICAgICAgICAgdGhpcy4kZWwuY3NzKCd3aWR0aCcsIHRoaXMuYXR0cldpZHRoICsgJ3B4Jyk7XG4gICAgICAgICAgdGhpcy4kZWwucmVtb3ZlQXR0cignd2lkdGgnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdHRySGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy4kZWwuY3NzKCd3aWR0aCcsIHRoaXMuYXR0ckhlaWdodCArICdweCcpO1xuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUF0dHIoJ2hlaWdodCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIG92ZXJsYXlcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJtYXRlcmlhbGJveC1vdmVybGF5XCI+PC9kaXY+JykuY3NzKHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0pLm9uZSgnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMTkuZG9uZUFuaW1hdGluZykge1xuICAgICAgICAgICAgX3RoaXMxOS5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHV0IGJlZm9yZSBpbiBvcmlnaW4gaW1hZ2UgdG8gcHJlc2VydmUgei1pbmRleCBsYXllcmluZy5cbiAgICAgICAgdGhpcy4kZWwuYmVmb3JlKHRoaXMuJG92ZXJsYXkpO1xuXG4gICAgICAgIC8vIFNldCBkaW1lbnNpb25zIGlmIG5lZWRlZFxuICAgICAgICB2YXIgb3ZlcmxheU9mZnNldCA9IHRoaXMuJG92ZXJsYXlbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkuY3NzKHtcbiAgICAgICAgICB3aWR0aDogdGhpcy53aW5kb3dXaWR0aCArICdweCcsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLndpbmRvd0hlaWdodCArICdweCcsXG4gICAgICAgICAgbGVmdDogLTEgKiBvdmVybGF5T2Zmc2V0LmxlZnQgKyAncHgnLFxuICAgICAgICAgIHRvcDogLTEgKiBvdmVybGF5T2Zmc2V0LnRvcCArICdweCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5lbCk7XG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuJG92ZXJsYXlbMF0pO1xuXG4gICAgICAgIC8vIEFuaW1hdGUgT3ZlcmxheVxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRvdmVybGF5WzBdLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgYW5kIGFuaW1hdGUgY2FwdGlvbiBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKHRoaXMuY2FwdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICBpZiAodGhpcy4kcGhvdG9jYXB0aW9uKSB7XG4gICAgICAgICAgICBhbmltLnJlbW92ZSh0aGlzLiRwaG90b0NhcHRpb25bMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLiRwaG90b0NhcHRpb24gPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWxib3gtY2FwdGlvblwiPjwvZGl2PicpO1xuICAgICAgICAgIHRoaXMuJHBob3RvQ2FwdGlvbi50ZXh0KHRoaXMuY2FwdGlvbik7XG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0aGlzLiRwaG90b0NhcHRpb24pO1xuICAgICAgICAgIHRoaXMuJHBob3RvQ2FwdGlvbi5jc3MoeyBkaXNwbGF5OiAnaW5saW5lJyB9KTtcblxuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy4kcGhvdG9DYXB0aW9uWzBdLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzaXplIEltYWdlXG4gICAgICAgIHZhciByYXRpbyA9IDA7XG4gICAgICAgIHZhciB3aWR0aFBlcmNlbnQgPSB0aGlzLm9yaWdpbmFsV2lkdGggLyB0aGlzLndpbmRvd1dpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0UGVyY2VudCA9IHRoaXMub3JpZ2luYWxIZWlnaHQgLyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgdGhpcy5uZXdXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMubmV3SGVpZ2h0ID0gMDtcblxuICAgICAgICBpZiAod2lkdGhQZXJjZW50ID4gaGVpZ2h0UGVyY2VudCkge1xuICAgICAgICAgIHJhdGlvID0gdGhpcy5vcmlnaW5hbEhlaWdodCAvIHRoaXMub3JpZ2luYWxXaWR0aDtcbiAgICAgICAgICB0aGlzLm5ld1dpZHRoID0gdGhpcy53aW5kb3dXaWR0aCAqIDAuOTtcbiAgICAgICAgICB0aGlzLm5ld0hlaWdodCA9IHRoaXMud2luZG93V2lkdGggKiAwLjkgKiByYXRpbztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByYXRpbyA9IHRoaXMub3JpZ2luYWxXaWR0aCAvIHRoaXMub3JpZ2luYWxIZWlnaHQ7XG4gICAgICAgICAgdGhpcy5uZXdXaWR0aCA9IHRoaXMud2luZG93SGVpZ2h0ICogMC45ICogcmF0aW87XG4gICAgICAgICAgdGhpcy5uZXdIZWlnaHQgPSB0aGlzLndpbmRvd0hlaWdodCAqIDAuOTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbWFnZUluKCk7XG5cbiAgICAgICAgLy8gSGFuZGxlIEV4aXQgdHJpZ2dlcnNcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsQm91bmQgPSB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQgPSB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlV2luZG93RXNjYXBlQm91bmQgPSB0aGlzLl9oYW5kbGVXaW5kb3dFc2NhcGUuYmluZCh0aGlzKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsQm91bmQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVXaW5kb3dFc2NhcGVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xvc2UgTWF0ZXJpYWxib3hcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHZhciBfdGhpczIwID0gdGhpcztcblxuICAgICAgICB0aGlzLl91cGRhdGVWYXJzKCk7XG4gICAgICAgIHRoaXMuZG9uZUFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIG9uQ2xvc2VTdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNsb3NlU3RhcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0LmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy4kb3ZlcmxheVswXSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FwdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICBhbmltLnJlbW92ZSh0aGlzLiRwaG90b0NhcHRpb25bMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzYWJsZSBleGl0IGhhbmRsZXJzXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2hhbmRsZVdpbmRvd0VzY2FwZUJvdW5kKTtcblxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRvdmVybGF5WzBdLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMjAub3ZlcmxheUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgX3RoaXMyMC4kb3ZlcmxheS5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbWFnZU91dCgpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBDYXB0aW9uICsgcmVzZXQgY3NzIHNldHRpbmdzIG9uIGltYWdlXG4gICAgICAgIGlmICh0aGlzLmNhcHRpb24gIT09ICcnKSB7XG4gICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRwaG90b0NhcHRpb25bMF0sXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzMjAuJHBob3RvQ2FwdGlvbi5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChNYXRlcmlhbGJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE1hdGVyaWFsYm94KSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fTWF0ZXJpYWxib3g7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWF0ZXJpYWxib3g7XG4gIH0oQ29tcG9uZW50KTtcblxuICBNLk1hdGVyaWFsYm94ID0gTWF0ZXJpYWxib3g7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihNYXRlcmlhbGJveCwgJ21hdGVyaWFsYm94JywgJ01fTWF0ZXJpYWxib3gnKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IDAgLy8gYnJlYWtwb2ludCBmb3Igc3dpcGVhYmxlXG4gIH07XG5cbiAgdmFyIFBhcmFsbGF4ID0gZnVuY3Rpb24gKF9Db21wb25lbnQ1KSB7XG4gICAgX2luaGVyaXRzKFBhcmFsbGF4LCBfQ29tcG9uZW50NSk7XG5cbiAgICBmdW5jdGlvbiBQYXJhbGxheChlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhcmFsbGF4KTtcblxuICAgICAgdmFyIF90aGlzMjEgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUGFyYWxsYXguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQYXJhbGxheCkpLmNhbGwodGhpcywgUGFyYWxsYXgsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMjEuZWwuTV9QYXJhbGxheCA9IF90aGlzMjE7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIFBhcmFsbGF4XG4gICAgICAgKiBAbWVtYmVyIFBhcmFsbGF4I29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IHJlc3BvbnNpdmVUaHJlc2hvbGRcbiAgICAgICAqL1xuICAgICAgX3RoaXMyMS5vcHRpb25zID0gJC5leHRlbmQoe30sIFBhcmFsbGF4LmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgIF90aGlzMjEuX2VuYWJsZWQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IF90aGlzMjEub3B0aW9ucy5yZXNwb25zaXZlVGhyZXNob2xkO1xuXG4gICAgICBfdGhpczIxLiRpbWcgPSBfdGhpczIxLiRlbC5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgICAgX3RoaXMyMS4kaW1nLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgICBpZiAoZWwuY29tcGxldGUpICQoZWwpLnRyaWdnZXIoJ2xvYWQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczIxLl91cGRhdGVQYXJhbGxheCgpO1xuICAgICAgX3RoaXMyMS5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICBfdGhpczIxLl9zZXR1cFN0eWxlcygpO1xuXG4gICAgICBQYXJhbGxheC5fcGFyYWxsYXhlcy5wdXNoKF90aGlzMjEpO1xuICAgICAgcmV0dXJuIF90aGlzMjE7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhcmFsbGF4LCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgUGFyYWxsYXguX3BhcmFsbGF4ZXMuc3BsaWNlKFBhcmFsbGF4Ll9wYXJhbGxheGVzLmluZGV4T2YodGhpcyksIDEpO1xuICAgICAgICB0aGlzLiRpbWdbMF0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgICB0aGlzLiRlbFswXS5NX1BhcmFsbGF4ID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlSW1hZ2VMb2FkQm91bmQgPSB0aGlzLl9oYW5kbGVJbWFnZUxvYWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy4kaW1nWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLl9oYW5kbGVJbWFnZUxvYWRCb3VuZCk7XG5cbiAgICAgICAgaWYgKFBhcmFsbGF4Ll9wYXJhbGxheGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIFBhcmFsbGF4Ll9oYW5kbGVTY3JvbGxUaHJvdHRsZWQgPSBNLnRocm90dGxlKFBhcmFsbGF4Ll9oYW5kbGVTY3JvbGwsIDUpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBQYXJhbGxheC5faGFuZGxlU2Nyb2xsVGhyb3R0bGVkKTtcblxuICAgICAgICAgIFBhcmFsbGF4Ll9oYW5kbGVXaW5kb3dSZXNpemVUaHJvdHRsZWQgPSBNLnRocm90dGxlKFBhcmFsbGF4Ll9oYW5kbGVXaW5kb3dSZXNpemUsIDUpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBQYXJhbGxheC5faGFuZGxlV2luZG93UmVzaXplVGhyb3R0bGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLiRpbWdbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMuX2hhbmRsZUltYWdlTG9hZEJvdW5kKTtcblxuICAgICAgICBpZiAoUGFyYWxsYXguX3BhcmFsbGF4ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFBhcmFsbGF4Ll9oYW5kbGVTY3JvbGxUaHJvdHRsZWQpO1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBQYXJhbGxheC5faGFuZGxlV2luZG93UmVzaXplVGhyb3R0bGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBTdHlsZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBTdHlsZXMoKSB7XG4gICAgICAgIHRoaXMuJGltZ1swXS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUltYWdlTG9hZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbWFnZUxvYWQoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVBhcmFsbGF4KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVQYXJhbGxheFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVQYXJhbGxheCgpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHRoaXMuJGVsLmhlaWdodCgpID4gMCA/IHRoaXMuZWwucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQgOiA1MDA7XG4gICAgICAgIHZhciBpbWdIZWlnaHQgPSB0aGlzLiRpbWdbMF0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB2YXIgcGFyYWxsYXhEaXN0ID0gaW1nSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB2YXIgYm90dG9tID0gdGhpcy4kZWwub2Zmc2V0KCkudG9wICsgY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB2YXIgdG9wID0gdGhpcy4kZWwub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgd2luZG93Qm90dG9tID0gc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0O1xuICAgICAgICB2YXIgcGVyY2VudFNjcm9sbGVkID0gKHdpbmRvd0JvdHRvbSAtIHRvcCkgLyAoY29udGFpbmVySGVpZ2h0ICsgd2luZG93SGVpZ2h0KTtcbiAgICAgICAgdmFyIHBhcmFsbGF4ID0gcGFyYWxsYXhEaXN0ICogcGVyY2VudFNjcm9sbGVkO1xuXG4gICAgICAgIGlmICghdGhpcy5fZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuJGltZ1swXS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChib3R0b20gPiBzY3JvbGxUb3AgJiYgdG9wIDwgc2Nyb2xsVG9wICsgd2luZG93SGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy4kaW1nWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM0QoLTUwJSwgXCIgKyBwYXJhbGxheCArIFwicHgsIDApXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoUGFyYWxsYXguX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQYXJhbGxheCksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1BhcmFsbGF4O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlU2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBQYXJhbGxheC5fcGFyYWxsYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwYXJhbGxheEluc3RhbmNlID0gUGFyYWxsYXguX3BhcmFsbGF4ZXNbaV07XG4gICAgICAgICAgcGFyYWxsYXhJbnN0YW5jZS5fdXBkYXRlUGFyYWxsYXguY2FsbChwYXJhbGxheEluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlV2luZG93UmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBQYXJhbGxheC5fcGFyYWxsYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwYXJhbGxheEluc3RhbmNlID0gUGFyYWxsYXguX3BhcmFsbGF4ZXNbaV07XG4gICAgICAgICAgcGFyYWxsYXhJbnN0YW5jZS5fZW5hYmxlZCA9IHdpbmRvdy5pbm5lcldpZHRoID4gcGFyYWxsYXhJbnN0YW5jZS5vcHRpb25zLnJlc3BvbnNpdmVUaHJlc2hvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYXJhbGxheDtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBQYXJhbGxheFxuICAgKi9cblxuXG4gIFBhcmFsbGF4Ll9wYXJhbGxheGVzID0gW107XG5cbiAgTS5QYXJhbGxheCA9IFBhcmFsbGF4O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoUGFyYWxsYXgsICdwYXJhbGxheCcsICdNX1BhcmFsbGF4Jyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkdXJhdGlvbjogMzAwLFxuICAgIG9uU2hvdzogbnVsbCxcbiAgICBzd2lwZWFibGU6IGZhbHNlLFxuICAgIHJlc3BvbnNpdmVUaHJlc2hvbGQ6IEluZmluaXR5IC8vIGJyZWFrcG9pbnQgZm9yIHN3aXBlYWJsZVxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFRhYnMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDYpIHtcbiAgICBfaW5oZXJpdHMoVGFicywgX0NvbXBvbmVudDYpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IFRhYnMgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUYWJzKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFicyk7XG5cbiAgICAgIHZhciBfdGhpczIyID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRhYnMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJzKSkuY2FsbCh0aGlzLCBUYWJzLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczIyLmVsLk1fVGFicyA9IF90aGlzMjI7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIFRhYnNcbiAgICAgICAqIEBtZW1iZXIgVGFicyNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBkdXJhdGlvblxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvblNob3dcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBzd2lwZWFibGVcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IHJlc3BvbnNpdmVUaHJlc2hvbGRcbiAgICAgICAqL1xuICAgICAgX3RoaXMyMi5vcHRpb25zID0gJC5leHRlbmQoe30sIFRhYnMuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBTZXR1cFxuICAgICAgX3RoaXMyMi4kdGFiTGlua3MgPSBfdGhpczIyLiRlbC5jaGlsZHJlbignbGkudGFiJykuY2hpbGRyZW4oJ2EnKTtcbiAgICAgIF90aGlzMjIuaW5kZXggPSAwO1xuICAgICAgX3RoaXMyMi5fc2V0dXBBY3RpdmVUYWJMaW5rKCk7XG5cbiAgICAgIC8vIFNldHVwIHRhYnMgY29udGVudFxuICAgICAgaWYgKF90aGlzMjIub3B0aW9ucy5zd2lwZWFibGUpIHtcbiAgICAgICAgX3RoaXMyMi5fc2V0dXBTd2lwZWFibGVUYWJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczIyLl9zZXR1cE5vcm1hbFRhYnMoKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgdGFicyBpbmRpY2F0b3IgYWZ0ZXIgY29udGVudCB0byBlbnN1cmUgYWNjdXJhdGUgd2lkdGhzXG4gICAgICBfdGhpczIyLl9zZXRUYWJzQW5kVGFiV2lkdGgoKTtcbiAgICAgIF90aGlzMjIuX2NyZWF0ZUluZGljYXRvcigpO1xuXG4gICAgICBfdGhpczIyLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczIyO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYWJzLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLl9pbmRpY2F0b3IucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9pbmRpY2F0b3IpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3dpcGVhYmxlKSB7XG4gICAgICAgICAgdGhpcy5fdGVhcmRvd25Td2lwZWFibGVUYWJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fdGVhcmRvd25Ob3JtYWxUYWJzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbFswXS5NX1RhYnMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQpO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZVRhYkNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVUYWJDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVGFiQ2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlV2luZG93UmVzaXplQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVGFiQ2xpY2tCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIHdpbmRvdyBSZXNpemVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dSZXNpemVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93UmVzaXplKCkge1xuICAgICAgICB0aGlzLl9zZXRUYWJzQW5kVGFiV2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy50YWJXaWR0aCAhPT0gMCAmJiB0aGlzLnRhYnNXaWR0aCAhPT0gMCkge1xuICAgICAgICAgIHRoaXMuX2luZGljYXRvci5zdHlsZS5sZWZ0ID0gdGhpcy5fY2FsY0xlZnRQb3ModGhpcy4kYWN0aXZlVGFiTGluaykgKyAncHgnO1xuICAgICAgICAgIHRoaXMuX2luZGljYXRvci5zdHlsZS5yaWdodCA9IHRoaXMuX2NhbGNSaWdodFBvcyh0aGlzLiRhY3RpdmVUYWJMaW5rKSArICdweCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgdGFiIGNsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlVGFiQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlVGFiQ2xpY2soZSkge1xuICAgICAgICB2YXIgX3RoaXMyMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhYiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpLnRhYicpO1xuICAgICAgICB2YXIgdGFiTGluayA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2EnKTtcblxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgb24gdGFiIGxpbmsgb25seVxuICAgICAgICBpZiAoIXRhYkxpbmsubGVuZ3RoIHx8ICF0YWJMaW5rLnBhcmVudCgpLmhhc0NsYXNzKCd0YWInKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YWIuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWN0IGFzIHJlZ3VsYXIgbGluayBpZiB0YXJnZXQgYXR0cmlidXRlIGlzIHNwZWNpZmllZC5cbiAgICAgICAgaWYgKCEhdGFiTGluay5hdHRyKCd0YXJnZXQnKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2UgdGhlIG9sZCB0YWIgaW5hY3RpdmUuXG4gICAgICAgIHRoaXMuJGFjdGl2ZVRhYkxpbmsucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB2YXIgJG9sZENvbnRlbnQgPSB0aGlzLiRjb250ZW50O1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdmFyaWFibGVzIHdpdGggdGhlIG5ldyBsaW5rIGFuZCBjb250ZW50XG4gICAgICAgIHRoaXMuJGFjdGl2ZVRhYkxpbmsgPSB0YWJMaW5rO1xuICAgICAgICB0aGlzLiRjb250ZW50ID0gJChNLmVzY2FwZUhhc2godGFiTGlua1swXS5oYXNoKSk7XG4gICAgICAgIHRoaXMuJHRhYkxpbmtzID0gdGhpcy4kZWwuY2hpbGRyZW4oJ2xpLnRhYicpLmNoaWxkcmVuKCdhJyk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgdGFiIGFjdGl2ZS5cbiAgICAgICAgdGhpcy4kYWN0aXZlVGFiTGluay5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ID0gTWF0aC5tYXgodGhpcy4kdGFiTGlua3MuaW5kZXgodGFiTGluayksIDApO1xuXG4gICAgICAgIC8vIFN3YXAgY29udGVudFxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN3aXBlYWJsZSkge1xuICAgICAgICAgIGlmICh0aGlzLl90YWJzQ2Fyb3VzZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhYnNDYXJvdXNlbC5zZXQodGhpcy5pbmRleCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzMjMub3B0aW9ucy5vblNob3cgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIzLm9wdGlvbnMub25TaG93LmNhbGwoX3RoaXMyMywgX3RoaXMyMy4kY29udGVudFswXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy4kY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbnRlbnRbMF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB0aGlzLiRjb250ZW50LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uU2hvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMub25TaG93LmNhbGwodGhpcywgdGhpcy4kY29udGVudFswXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkb2xkQ29udGVudC5sZW5ndGggJiYgISRvbGRDb250ZW50LmlzKHRoaXMuJGNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICRvbGRDb250ZW50WzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICRvbGRDb250ZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgd2lkdGhzIGFmdGVyIGNvbnRlbnQgaXMgc3dhcHBlZCAoc2Nyb2xsYmFyIGJ1Z2ZpeClcbiAgICAgICAgdGhpcy5fc2V0VGFic0FuZFRhYldpZHRoKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvclxuICAgICAgICB0aGlzLl9hbmltYXRlSW5kaWNhdG9yKHByZXZJbmRleCk7XG5cbiAgICAgICAgLy8gUHJldmVudCB0aGUgYW5jaG9yJ3MgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdlbmVyYXRlIGVsZW1lbnRzIGZvciB0YWIgaW5kaWNhdG9yLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NyZWF0ZUluZGljYXRvclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVJbmRpY2F0b3IoKSB7XG4gICAgICAgIHZhciBfdGhpczI0ID0gdGhpcztcblxuICAgICAgICB2YXIgaW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoaW5kaWNhdG9yKTtcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yID0gaW5kaWNhdG9yO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMjQuX2luZGljYXRvci5zdHlsZS5sZWZ0ID0gX3RoaXMyNC5fY2FsY0xlZnRQb3MoX3RoaXMyNC4kYWN0aXZlVGFiTGluaykgKyAncHgnO1xuICAgICAgICAgIF90aGlzMjQuX2luZGljYXRvci5zdHlsZS5yaWdodCA9IF90aGlzMjQuX2NhbGNSaWdodFBvcyhfdGhpczI0LiRhY3RpdmVUYWJMaW5rKSArICdweCc7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIGZpcnN0IGFjdGl2ZSB0YWIgbGluay5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEFjdGl2ZVRhYkxpbmtcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBBY3RpdmVUYWJMaW5rKCkge1xuICAgICAgICAvLyBJZiB0aGUgbG9jYXRpb24uaGFzaCBtYXRjaGVzIG9uZSBvZiB0aGUgbGlua3MsIHVzZSB0aGF0IGFzIHRoZSBhY3RpdmUgdGFiLlxuICAgICAgICB0aGlzLiRhY3RpdmVUYWJMaW5rID0gJCh0aGlzLiR0YWJMaW5rcy5maWx0ZXIoJ1tocmVmPVwiJyArIGxvY2F0aW9uLmhhc2ggKyAnXCJdJykpO1xuXG4gICAgICAgIC8vIElmIG5vIG1hdGNoIGlzIGZvdW5kLCB1c2UgdGhlIGZpcnN0IGxpbmsgb3IgYW55IHdpdGggY2xhc3MgJ2FjdGl2ZScgYXMgdGhlIGluaXRpYWwgYWN0aXZlIHRhYi5cbiAgICAgICAgaWYgKHRoaXMuJGFjdGl2ZVRhYkxpbmsubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy4kYWN0aXZlVGFiTGluayA9IHRoaXMuJGVsLmNoaWxkcmVuKCdsaS50YWInKS5jaGlsZHJlbignYS5hY3RpdmUnKS5maXJzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiRhY3RpdmVUYWJMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuJGFjdGl2ZVRhYkxpbmsgPSB0aGlzLiRlbC5jaGlsZHJlbignbGkudGFiJykuY2hpbGRyZW4oJ2EnKS5maXJzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kdGFiTGlua3MucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLiRhY3RpdmVUYWJMaW5rWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHRoaXMuaW5kZXggPSBNYXRoLm1heCh0aGlzLiR0YWJMaW5rcy5pbmRleCh0aGlzLiRhY3RpdmVUYWJMaW5rKSwgMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuJGFjdGl2ZVRhYkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kY29udGVudCA9ICQoTS5lc2NhcGVIYXNoKHRoaXMuJGFjdGl2ZVRhYkxpbmtbMF0uaGFzaCkpO1xuICAgICAgICAgIHRoaXMuJGNvbnRlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgc3dpcGVhYmxlIHRhYnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cFN3aXBlYWJsZVRhYnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBTd2lwZWFibGVUYWJzKCkge1xuICAgICAgICB2YXIgX3RoaXMyNSA9IHRoaXM7XG5cbiAgICAgICAgLy8gQ2hhbmdlIHN3aXBlYWJsZSBhY2NvcmRpbmcgdG8gcmVzcG9uc2l2ZSB0aHJlc2hvbGRcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVUaHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3dpcGVhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgJHRhYnNDb250ZW50ID0gJCgpO1xuICAgICAgICB0aGlzLiR0YWJMaW5rcy5lYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgICAgdmFyICRjdXJyQ29udGVudCA9ICQoTS5lc2NhcGVIYXNoKGxpbmsuaGFzaCkpO1xuICAgICAgICAgICRjdXJyQ29udGVudC5hZGRDbGFzcygnY2Fyb3VzZWwtaXRlbScpO1xuICAgICAgICAgICR0YWJzQ29udGVudCA9ICR0YWJzQ29udGVudC5hZGQoJGN1cnJDb250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyICR0YWJzV3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJ0YWJzLWNvbnRlbnQgY2Fyb3VzZWwgY2Fyb3VzZWwtc2xpZGVyXCI+PC9kaXY+Jyk7XG4gICAgICAgICR0YWJzQ29udGVudC5maXJzdCgpLmJlZm9yZSgkdGFic1dyYXBwZXIpO1xuICAgICAgICAkdGFic1dyYXBwZXIuYXBwZW5kKCR0YWJzQ29udGVudCk7XG4gICAgICAgICR0YWJzQ29udGVudFswXS5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgLy8gS2VlcCBhY3RpdmUgdGFiIGluZGV4IHRvIHNldCBpbml0aWFsIGNhcm91c2VsIHNsaWRlXG4gICAgICAgIHZhciBhY3RpdmVUYWJJbmRleCA9IHRoaXMuJGFjdGl2ZVRhYkxpbmsuY2xvc2VzdCgnLnRhYicpLmluZGV4KCk7XG5cbiAgICAgICAgdGhpcy5fdGFic0Nhcm91c2VsID0gTS5DYXJvdXNlbC5pbml0KCR0YWJzV3JhcHBlclswXSwge1xuICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgb25DeWNsZVRvOiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHByZXZJbmRleCA9IF90aGlzMjUuaW5kZXg7XG4gICAgICAgICAgICBfdGhpczI1LmluZGV4ID0gJChpdGVtKS5pbmRleCgpO1xuICAgICAgICAgICAgX3RoaXMyNS4kYWN0aXZlVGFiTGluay5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICBfdGhpczI1LiRhY3RpdmVUYWJMaW5rID0gX3RoaXMyNS4kdGFiTGlua3MuZXEoX3RoaXMyNS5pbmRleCk7XG4gICAgICAgICAgICBfdGhpczI1LiRhY3RpdmVUYWJMaW5rLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIF90aGlzMjUuX2FuaW1hdGVJbmRpY2F0b3IocHJldkluZGV4KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMyNS5vcHRpb25zLm9uU2hvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczI1Lm9wdGlvbnMub25TaG93LmNhbGwoX3RoaXMyNSwgX3RoaXMyNS4kY29udGVudFswXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBjYXJvdXNlbCBzbGlkZSB0byBhY3RpdmUgdGFiXG4gICAgICAgIHRoaXMuX3RhYnNDYXJvdXNlbC5zZXQoYWN0aXZlVGFiSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIG5vcm1hbCB0YWJzLlxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3RlYXJkb3duU3dpcGVhYmxlVGFic1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90ZWFyZG93blN3aXBlYWJsZVRhYnMoKSB7XG4gICAgICAgIHZhciAkdGFic1dyYXBwZXIgPSB0aGlzLl90YWJzQ2Fyb3VzZWwuJGVsO1xuICAgICAgICB0aGlzLl90YWJzQ2Fyb3VzZWwuZGVzdHJveSgpO1xuXG4gICAgICAgIC8vIFVud3JhcFxuICAgICAgICAkdGFic1dyYXBwZXIuYWZ0ZXIoJHRhYnNXcmFwcGVyLmNoaWxkcmVuKCkpO1xuICAgICAgICAkdGFic1dyYXBwZXIucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgbm9ybWFsIHRhYnMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBOb3JtYWxUYWJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwTm9ybWFsVGFicygpIHtcbiAgICAgICAgLy8gSGlkZSBUYWJzIENvbnRlbnRcbiAgICAgICAgdGhpcy4kdGFiTGlua3Mubm90KHRoaXMuJGFjdGl2ZVRhYkxpbmspLmVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICBpZiAoISFsaW5rLmhhc2gpIHtcbiAgICAgICAgICAgIHZhciAkY3VyckNvbnRlbnQgPSAkKE0uZXNjYXBlSGFzaChsaW5rLmhhc2gpKTtcbiAgICAgICAgICAgIGlmICgkY3VyckNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICRjdXJyQ29udGVudFswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gbm9ybWFsIHRhYnMuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdGVhcmRvd25Ob3JtYWxUYWJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3RlYXJkb3duTm9ybWFsVGFicygpIHtcbiAgICAgICAgLy8gc2hvdyBUYWJzIENvbnRlbnRcbiAgICAgICAgdGhpcy4kdGFiTGlua3MuZWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgICAgIGlmICghIWxpbmsuaGFzaCkge1xuICAgICAgICAgICAgdmFyICRjdXJyQ29udGVudCA9ICQoTS5lc2NhcGVIYXNoKGxpbmsuaGFzaCkpO1xuICAgICAgICAgICAgaWYgKCRjdXJyQ29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgJGN1cnJDb250ZW50WzBdLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIHNldCB0YWJzIGFuZCB0YWIgd2lkdGhcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRUYWJzQW5kVGFiV2lkdGhcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0VGFic0FuZFRhYldpZHRoKCkge1xuICAgICAgICB0aGlzLnRhYnNXaWR0aCA9IHRoaXMuJGVsLndpZHRoKCk7XG4gICAgICAgIHRoaXMudGFiV2lkdGggPSBNYXRoLm1heCh0aGlzLnRhYnNXaWR0aCwgdGhpcy5lbC5zY3JvbGxXaWR0aCkgLyB0aGlzLiR0YWJMaW5rcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmluZHMgcmlnaHQgYXR0cmlidXRlIGZvciBpbmRpY2F0b3IgYmFzZWQgb24gYWN0aXZlIHRhYi5cbiAgICAgICAqIEBwYXJhbSB7Y2FzaH0gZWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jYWxjUmlnaHRQb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY2FsY1JpZ2h0UG9zKGVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy50YWJzV2lkdGggLSBlbC5wb3NpdGlvbigpLmxlZnQgLSBlbFswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmluZHMgbGVmdCBhdHRyaWJ1dGUgZm9yIGluZGljYXRvciBiYXNlZCBvbiBhY3RpdmUgdGFiLlxuICAgICAgICogQHBhcmFtIHtjYXNofSBlbFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NhbGNMZWZ0UG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhbGNMZWZ0UG9zKGVsKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKGVsLnBvc2l0aW9uKCkubGVmdCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZVRhYkluZGljYXRvclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVRhYkluZGljYXRvcigpIHtcbiAgICAgICAgdGhpcy5fc2V0VGFic0FuZFRhYldpZHRoKCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVJbmRpY2F0b3IodGhpcy5pbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQW5pbWF0ZXMgSW5kaWNhdG9yIHRvIGFjdGl2ZSB0YWIuXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gcHJldkluZGV4XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluZGljYXRvclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlSW5kaWNhdG9yKHByZXZJbmRleCkge1xuICAgICAgICB2YXIgbGVmdERlbGF5ID0gMCxcbiAgICAgICAgICAgIHJpZ2h0RGVsYXkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmluZGV4IC0gcHJldkluZGV4ID49IDApIHtcbiAgICAgICAgICBsZWZ0RGVsYXkgPSA5MDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByaWdodERlbGF5ID0gOTA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbmltYXRlXG4gICAgICAgIHZhciBhbmltT3B0aW9ucyA9IHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLl9pbmRpY2F0b3IsXG4gICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuX2NhbGNMZWZ0UG9zKHRoaXMuJGFjdGl2ZVRhYkxpbmspLFxuICAgICAgICAgICAgZGVsYXk6IGxlZnREZWxheVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLl9jYWxjUmlnaHRQb3ModGhpcy4kYWN0aXZlVGFiTGluayksXG4gICAgICAgICAgICBkZWxheTogcmlnaHREZWxheVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgfTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5faW5kaWNhdG9yKTtcbiAgICAgICAgYW5pbShhbmltT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VsZWN0IHRhYi5cbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0YWJJZFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2VsZWN0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KHRhYklkKSB7XG4gICAgICAgIHZhciB0YWIgPSB0aGlzLiR0YWJMaW5rcy5maWx0ZXIoJ1tocmVmPVwiIycgKyB0YWJJZCArICdcIl0nKTtcbiAgICAgICAgaWYgKHRhYi5sZW5ndGgpIHtcbiAgICAgICAgICB0YWIudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChUYWJzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFicyksIFwiaW5pdFwiLCB0aGlzKS5jYWxsKHRoaXMsIHRoaXMsIGVscywgb3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IEluc3RhbmNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnZXRJbnN0YW5jZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1RhYnM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFicztcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uVGFicyA9IFRhYnM7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihUYWJzLCAndGFicycsICdNX1RhYnMnKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkLCBhbmltKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIGV4aXREZWxheTogMjAwLFxuICAgIGVudGVyRGVsYXk6IDAsXG4gICAgaHRtbDogbnVsbCxcbiAgICBtYXJnaW46IDUsXG4gICAgaW5EdXJhdGlvbjogMjUwLFxuICAgIG91dER1cmF0aW9uOiAyMDAsXG4gICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgIHRyYW5zaXRpb25Nb3ZlbWVudDogMTBcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBUb29sdGlwID0gZnVuY3Rpb24gKF9Db21wb25lbnQ3KSB7XG4gICAgX2luaGVyaXRzKFRvb2x0aXAsIF9Db21wb25lbnQ3KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBUb29sdGlwIGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gVG9vbHRpcChlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRvb2x0aXApO1xuXG4gICAgICB2YXIgX3RoaXMyNiA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUb29sdGlwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVG9vbHRpcCkpLmNhbGwodGhpcywgVG9vbHRpcCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMyNi5lbC5NX1Rvb2x0aXAgPSBfdGhpczI2O1xuICAgICAgX3RoaXMyNi5vcHRpb25zID0gJC5leHRlbmQoe30sIFRvb2x0aXAuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICBfdGhpczI2LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgX3RoaXMyNi5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzMjYuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICBfdGhpczI2Ll9hcHBlbmRUb29sdGlwRWwoKTtcbiAgICAgIF90aGlzMjYuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzMjY7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRvb2x0aXAsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAkKHRoaXMudG9vbHRpcEVsKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmVsLk1fVG9vbHRpcCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FwcGVuZFRvb2x0aXBFbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hcHBlbmRUb29sdGlwRWwoKSB7XG4gICAgICAgIHZhciB0b29sdGlwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9vbHRpcEVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXRvb2x0aXAnKTtcbiAgICAgICAgdGhpcy50b29sdGlwRWwgPSB0b29sdGlwRWw7XG5cbiAgICAgICAgdmFyIHRvb2x0aXBDb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9vbHRpcENvbnRlbnRFbC5jbGFzc0xpc3QuYWRkKCd0b29sdGlwLWNvbnRlbnQnKTtcbiAgICAgICAgdG9vbHRpcENvbnRlbnRFbC5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaHRtbDtcbiAgICAgICAgdG9vbHRpcEVsLmFwcGVuZENoaWxkKHRvb2x0aXBDb250ZW50RWwpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXBFbCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl91cGRhdGVUb29sdGlwQ29udGVudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVUb29sdGlwQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy50b29sdGlwRWwucXVlcnlTZWxlY3RvcignLnRvb2x0aXAtY29udGVudCcpLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5odG1sO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlTW91c2VFbnRlckJvdW5kID0gdGhpcy5faGFuZGxlTW91c2VFbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlQm91bmQgPSB0aGlzLl9oYW5kbGVNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQgPSB0aGlzLl9oYW5kbGVGb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVCbHVyQm91bmQgPSB0aGlzLl9oYW5kbGVCbHVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2hhbmRsZU1vdXNlRW50ZXJCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZU1vdXNlTGVhdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVGb2N1c0JvdW5kLCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlQmx1ckJvdW5kLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5faGFuZGxlTW91c2VFbnRlckJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlTW91c2VMZWF2ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2hhbmRsZUZvY3VzQm91bmQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVCbHVyQm91bmQsIHRydWUpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3Blbihpc01hbnVhbCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaXNNYW51YWwgPSBpc01hbnVhbCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHVuZGVmaW5lZDsgLy8gRGVmYXVsdCB2YWx1ZSB0cnVlXG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgLy8gVXBkYXRlIHRvb2x0aXAgY29udGVudCB3aXRoIEhUTUwgYXR0cmlidXRlIG9wdGlvbnNcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgdGhpcy5fZ2V0QXR0cmlidXRlT3B0aW9ucygpKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlVG9vbHRpcENvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5fc2V0RW50ZXJEZWxheVRpbWVvdXQoaXNNYW51YWwpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc2V0RXhpdERlbGF5VGltZW91dCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSB0aW1lb3V0IHdoaWNoIGRlbGF5cyB3aGVuIHRoZSB0b29sdGlwIGNsb3Nlc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldEV4aXREZWxheVRpbWVvdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0RXhpdERlbGF5VGltZW91dCgpIHtcbiAgICAgICAgdmFyIF90aGlzMjcgPSB0aGlzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9leGl0RGVsYXlUaW1lb3V0KTtcblxuICAgICAgICB0aGlzLl9leGl0RGVsYXlUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzMjcuaXNIb3ZlcmVkIHx8IF90aGlzMjcuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMyNy5fYW5pbWF0ZU91dCgpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZXhpdERlbGF5KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGUgdGltZW91dCB3aGljaCBkZWxheXMgd2hlbiB0aGUgdG9hc3QgY2xvc2VzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0RW50ZXJEZWxheVRpbWVvdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0RW50ZXJEZWxheVRpbWVvdXQoaXNNYW51YWwpIHtcbiAgICAgICAgdmFyIF90aGlzMjggPSB0aGlzO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9lbnRlckRlbGF5VGltZW91dCk7XG5cbiAgICAgICAgdGhpcy5fZW50ZXJEZWxheVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIV90aGlzMjguaXNIb3ZlcmVkICYmICFfdGhpczI4LmlzRm9jdXNlZCAmJiAhaXNNYW51YWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczI4Ll9hbmltYXRlSW4oKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmVudGVyRGVsYXkpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcG9zaXRpb25Ub29sdGlwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Bvc2l0aW9uVG9vbHRpcCgpIHtcbiAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuZWwsXG4gICAgICAgICAgICB0b29sdGlwID0gdGhpcy50b29sdGlwRWwsXG4gICAgICAgICAgICBvcmlnaW5IZWlnaHQgPSBvcmlnaW4ub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgb3JpZ2luV2lkdGggPSBvcmlnaW4ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICB0b29sdGlwSGVpZ2h0ID0gdG9vbHRpcC5vZmZzZXRIZWlnaHQsXG4gICAgICAgICAgICB0b29sdGlwV2lkdGggPSB0b29sdGlwLm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSB2b2lkIDAsXG4gICAgICAgICAgICBtYXJnaW4gPSB0aGlzLm9wdGlvbnMubWFyZ2luLFxuICAgICAgICAgICAgdGFyZ2V0VG9wID0gdm9pZCAwLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHZvaWQgMDtcblxuICAgICAgICB0aGlzLnhNb3ZlbWVudCA9IDAsIHRoaXMueU1vdmVtZW50ID0gMDtcblxuICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgdGFyZ2V0VG9wICs9IC10b29sdGlwSGVpZ2h0IC0gbWFyZ2luO1xuICAgICAgICAgIHRhcmdldExlZnQgKz0gb3JpZ2luV2lkdGggLyAyIC0gdG9vbHRpcFdpZHRoIC8gMjtcbiAgICAgICAgICB0aGlzLnlNb3ZlbWVudCA9IC10aGlzLm9wdGlvbnMudHJhbnNpdGlvbk1vdmVtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIHRhcmdldFRvcCArPSBvcmlnaW5IZWlnaHQgLyAyIC0gdG9vbHRpcEhlaWdodCAvIDI7XG4gICAgICAgICAgdGFyZ2V0TGVmdCArPSBvcmlnaW5XaWR0aCArIG1hcmdpbjtcbiAgICAgICAgICB0aGlzLnhNb3ZlbWVudCA9IHRoaXMub3B0aW9ucy50cmFuc2l0aW9uTW92ZW1lbnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICB0YXJnZXRUb3AgKz0gb3JpZ2luSGVpZ2h0IC8gMiAtIHRvb2x0aXBIZWlnaHQgLyAyO1xuICAgICAgICAgIHRhcmdldExlZnQgKz0gLXRvb2x0aXBXaWR0aCAtIG1hcmdpbjtcbiAgICAgICAgICB0aGlzLnhNb3ZlbWVudCA9IC10aGlzLm9wdGlvbnMudHJhbnNpdGlvbk1vdmVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldFRvcCArPSBvcmlnaW5IZWlnaHQgKyBtYXJnaW47XG4gICAgICAgICAgdGFyZ2V0TGVmdCArPSBvcmlnaW5XaWR0aCAvIDIgLSB0b29sdGlwV2lkdGggLyAyO1xuICAgICAgICAgIHRoaXMueU1vdmVtZW50ID0gdGhpcy5vcHRpb25zLnRyYW5zaXRpb25Nb3ZlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0Nvb3JkaW5hdGVzID0gdGhpcy5fcmVwb3NpdGlvbldpdGhpblNjcmVlbih0YXJnZXRMZWZ0LCB0YXJnZXRUb3AsIHRvb2x0aXBXaWR0aCwgdG9vbHRpcEhlaWdodCk7XG4gICAgICAgICQodG9vbHRpcCkuY3NzKHtcbiAgICAgICAgICB0b3A6IG5ld0Nvb3JkaW5hdGVzLnkgKyAncHgnLFxuICAgICAgICAgIGxlZnQ6IG5ld0Nvb3JkaW5hdGVzLnggKyAncHgnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVwb3NpdGlvbldpdGhpblNjcmVlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZXBvc2l0aW9uV2l0aGluU2NyZWVuKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBNLmdldERvY3VtZW50U2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gTS5nZXREb2N1bWVudFNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgbmV3WCA9IHggLSBzY3JvbGxMZWZ0O1xuICAgICAgICB2YXIgbmV3WSA9IHkgLSBzY3JvbGxUb3A7XG5cbiAgICAgICAgdmFyIGJvdW5kaW5nID0ge1xuICAgICAgICAgIGxlZnQ6IG5ld1gsXG4gICAgICAgICAgdG9wOiBuZXdZLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9wdGlvbnMubWFyZ2luICsgdGhpcy5vcHRpb25zLnRyYW5zaXRpb25Nb3ZlbWVudDtcbiAgICAgICAgdmFyIGVkZ2VzID0gTS5jaGVja1dpdGhpbkNvbnRhaW5lcihkb2N1bWVudC5ib2R5LCBib3VuZGluZywgb2Zmc2V0KTtcblxuICAgICAgICBpZiAoZWRnZXMubGVmdCkge1xuICAgICAgICAgIG5ld1ggPSBvZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZWRnZXMucmlnaHQpIHtcbiAgICAgICAgICBuZXdYIC09IG5ld1ggKyB3aWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVkZ2VzLnRvcCkge1xuICAgICAgICAgIG5ld1kgPSBvZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZWRnZXMuYm90dG9tKSB7XG4gICAgICAgICAgbmV3WSAtPSBuZXdZICsgaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB4OiBuZXdYICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgICB5OiBuZXdZICsgc2Nyb2xsVG9wXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluKCkge1xuICAgICAgICB0aGlzLl9wb3NpdGlvblRvb2x0aXAoKTtcbiAgICAgICAgdGhpcy50b29sdGlwRWwuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy50b29sdGlwRWwpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLnRvb2x0aXBFbCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zbGF0ZVg6IHRoaXMueE1vdmVtZW50LFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IHRoaXMueU1vdmVtZW50LFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU91dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlT3V0KCkge1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLnRvb2x0aXBFbCk7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMudG9vbHRpcEVsLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dEN1YmljJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1vdXNlRW50ZXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlOyAvLyBBbGxvd3MgY2xvc2Ugb2YgdG9vbHRpcCB3aGVuIG9wZW5lZCBieSBmb2N1cy5cbiAgICAgICAgdGhpcy5vcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZU1vdXNlTGVhdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5pc0hvdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTsgLy8gQWxsb3dzIGNsb3NlIG9mIHRvb2x0aXAgd2hlbiBvcGVuZWQgYnkgZm9jdXMuXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUZvY3VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUZvY3VzKCkge1xuICAgICAgICBpZiAoTS50YWJQcmVzc2VkKSB7XG4gICAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMub3BlbihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQmx1cigpIHtcbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfZ2V0QXR0cmlidXRlT3B0aW9uc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRBdHRyaWJ1dGVPcHRpb25zKCkge1xuICAgICAgICB2YXIgYXR0cmlidXRlT3B0aW9ucyA9IHt9O1xuICAgICAgICB2YXIgdG9vbHRpcFRleHRPcHRpb24gPSB0aGlzLmVsLmdldEF0dHJpYnV0ZSgnZGF0YS10b29sdGlwJyk7XG4gICAgICAgIHZhciBwb3NpdGlvbk9wdGlvbiA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJyk7XG5cbiAgICAgICAgaWYgKHRvb2x0aXBUZXh0T3B0aW9uKSB7XG4gICAgICAgICAgYXR0cmlidXRlT3B0aW9ucy5odG1sID0gdG9vbHRpcFRleHRPcHRpb247XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb25PcHRpb24pIHtcbiAgICAgICAgICBhdHRyaWJ1dGVPcHRpb25zLnBvc2l0aW9uID0gcG9zaXRpb25PcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZU9wdGlvbnM7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KFRvb2x0aXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUb29sdGlwKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fVG9vbHRpcDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUb29sdGlwO1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5Ub29sdGlwID0gVG9vbHRpcDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKFRvb2x0aXAsICd0b29sdGlwJywgJ01fVG9vbHRpcCcpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsgLyohXG4gICogV2F2ZXMgdjAuNi40XG4gICogaHR0cDovL2ZpYW4ubXkuaWQvV2F2ZXNcbiAgKlxuICAqIENvcHlyaWdodCAyMDE0IEFsZmlhbmEgRS4gU2lidWVhIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAgKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmlhbnMvV2F2ZXMvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAqL1xuXG47KGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBXYXZlcyA9IFdhdmVzIHx8IHt9O1xuICB2YXIgJCQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsLmJpbmQoZG9jdW1lbnQpO1xuXG4gIC8vIEZpbmQgZXhhY3QgcG9zaXRpb24gb2YgZWxlbWVudFxuICBmdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtKSB7XG4gICAgcmV0dXJuIGlzV2luZG93KGVsZW0pID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0VmlldztcbiAgfVxuXG4gIGZ1bmN0aW9uIG9mZnNldChlbGVtKSB7XG4gICAgdmFyIGRvY0VsZW0sXG4gICAgICAgIHdpbixcbiAgICAgICAgYm94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcbiAgICAgICAgZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cbiAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmICh0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHR5cGVvZiB1bmRlZmluZWQpIHtcbiAgICAgIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICAgIHdpbiA9IGdldFdpbmRvdyhkb2MpO1xuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgIGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRTdHlsZShvYmopIHtcbiAgICB2YXIgc3R5bGUgPSAnJztcblxuICAgIGZvciAodmFyIGEgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgIHN0eWxlICs9IGEgKyAnOicgKyBvYmpbYV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgdmFyIEVmZmVjdCA9IHtcblxuICAgIC8vIEVmZmVjdCBkZWxheVxuICAgIGR1cmF0aW9uOiA3NTAsXG5cbiAgICBzaG93OiBmdW5jdGlvbiAoZSwgZWxlbWVudCkge1xuXG4gICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZWwgPSBlbGVtZW50IHx8IHRoaXM7XG5cbiAgICAgIC8vIENyZWF0ZSByaXBwbGVcbiAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSAnd2F2ZXMtcmlwcGxlJztcbiAgICAgIGVsLmFwcGVuZENoaWxkKHJpcHBsZSk7XG5cbiAgICAgIC8vIEdldCBjbGljayBjb29yZGluYXRlIGFuZCBlbGVtZW50IHdpdGRoXG4gICAgICB2YXIgcG9zID0gb2Zmc2V0KGVsKTtcbiAgICAgIHZhciByZWxhdGl2ZVkgPSBlLnBhZ2VZIC0gcG9zLnRvcDtcbiAgICAgIHZhciByZWxhdGl2ZVggPSBlLnBhZ2VYIC0gcG9zLmxlZnQ7XG4gICAgICB2YXIgc2NhbGUgPSAnc2NhbGUoJyArIGVsLmNsaWVudFdpZHRoIC8gMTAwICogMTAgKyAnKSc7XG5cbiAgICAgIC8vIFN1cHBvcnQgZm9yIHRvdWNoIGRldmljZXNcbiAgICAgIGlmICgndG91Y2hlcycgaW4gZSkge1xuICAgICAgICByZWxhdGl2ZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVkgLSBwb3MudG9wO1xuICAgICAgICByZWxhdGl2ZVggPSBlLnRvdWNoZXNbMF0ucGFnZVggLSBwb3MubGVmdDtcbiAgICAgIH1cblxuICAgICAgLy8gQXR0YWNoIGRhdGEgdG8gZWxlbWVudFxuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJywgRGF0ZS5ub3coKSk7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJywgc2NhbGUpO1xuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgcmVsYXRpdmVYKTtcbiAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHJlbGF0aXZlWSk7XG5cbiAgICAgIC8vIFNldCByaXBwbGUgcG9zaXRpb25cbiAgICAgIHZhciByaXBwbGVTdHlsZSA9IHtcbiAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSArICdweCcsXG4gICAgICAgICdsZWZ0JzogcmVsYXRpdmVYICsgJ3B4J1xuICAgICAgfTtcblxuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUgKyAnIHdhdmVzLW5vdHJhbnNpdGlvbic7XG4gICAgICByaXBwbGUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGNvbnZlcnRTdHlsZShyaXBwbGVTdHlsZSkpO1xuICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUucmVwbGFjZSgnd2F2ZXMtbm90cmFuc2l0aW9uJywgJycpO1xuXG4gICAgICAvLyBTY2FsZSB0aGUgcmlwcGxlXG4gICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2Zvcm0nXSA9IHNjYWxlO1xuICAgICAgcmlwcGxlU3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICByaXBwbGVTdHlsZS5vcGFjaXR5ID0gJzEnO1xuXG4gICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgIHJpcHBsZVN0eWxlWyctby10cmFuc2l0aW9uLWR1cmF0aW9uJ10gPSBFZmZlY3QuZHVyYXRpb24gKyAnbXMnO1xuICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSA9IEVmZmVjdC5kdXJhdGlvbiArICdtcyc7XG5cbiAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSAnY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSc7XG4gICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSA9ICdjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApJztcblxuICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUocmlwcGxlU3R5bGUpKTtcbiAgICB9LFxuXG4gICAgaGlkZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xuXG4gICAgICB2YXIgZWwgPSB0aGlzO1xuICAgICAgdmFyIHdpZHRoID0gZWwuY2xpZW50V2lkdGggKiAxLjQ7XG5cbiAgICAgIC8vIEdldCBmaXJzdCByaXBwbGVcbiAgICAgIHZhciByaXBwbGUgPSBudWxsO1xuICAgICAgdmFyIHJpcHBsZXMgPSBlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlcy1yaXBwbGUnKTtcbiAgICAgIGlmIChyaXBwbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmlwcGxlID0gcmlwcGxlc1tyaXBwbGVzLmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVsYXRpdmVYID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS14Jyk7XG4gICAgICB2YXIgcmVsYXRpdmVZID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS15Jyk7XG4gICAgICB2YXIgc2NhbGUgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXNjYWxlJyk7XG5cbiAgICAgIC8vIEdldCBkZWxheSBiZWV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNlIGxlYXZlXG4gICAgICB2YXIgZGlmZiA9IERhdGUubm93KCkgLSBOdW1iZXIocmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJykpO1xuICAgICAgdmFyIGRlbGF5ID0gMzUwIC0gZGlmZjtcblxuICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICBkZWxheSA9IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIEZhZGUgb3V0IHJpcHBsZSBhZnRlciBkZWxheVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAndG9wJzogcmVsYXRpdmVZICsgJ3B4JyxcbiAgICAgICAgICAnbGVmdCc6IHJlbGF0aXZlWCArICdweCcsXG4gICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG5cbiAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICctby10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6IHNjYWxlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUoc3R5bGUpKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBFZmZlY3QuZHVyYXRpb24pO1xuICAgICAgfSwgZGVsYXkpO1xuICAgIH0sXG5cbiAgICAvLyBMaXR0bGUgaGFjayB0byBtYWtlIDxpbnB1dD4gY2FuIHBlcmZvcm0gd2F2ZXMgZWZmZWN0XG4gICAgd3JhcElucHV0OiBmdW5jdGlvbiAoZWxlbWVudHMpIHtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgZWxlbWVudHMubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgdmFyIGVsID0gZWxlbWVudHNbYV07XG5cbiAgICAgICAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgIHZhciBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgLy8gSWYgaW5wdXQgYWxyZWFkeSBoYXZlIHBhcmVudCBqdXN0IHBhc3MgdGhyb3VnaFxuICAgICAgICAgIGlmIChwYXJlbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaScgJiYgcGFyZW50LmNsYXNzTmFtZS5pbmRleE9mKCd3YXZlcy1lZmZlY3QnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGNsYXNzIGFuZCBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHBhcmVudFxuICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyB3YXZlcy1pbnB1dC13cmFwcGVyJztcblxuICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICBpZiAoIWVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgZWxlbWVudFN0eWxlID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgZWxlbWVudFN0eWxlKTtcblxuICAgICAgICAgIGVsLmNsYXNzTmFtZSA9ICd3YXZlcy1idXR0b24taW5wdXQnO1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGFzIGNoaWxkXG4gICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCBlbCk7XG4gICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc2FibGUgbW91c2Vkb3duIGV2ZW50IGZvciA1MDBtcyBkdXJpbmcgYW5kIGFmdGVyIHRvdWNoXG4gICAqL1xuICB2YXIgVG91Y2hIYW5kbGVyID0ge1xuICAgIC8qIHVzZXMgYW4gaW50ZWdlciByYXRoZXIgdGhhbiBib29sIHNvIHRoZXJlJ3Mgbm8gaXNzdWVzIHdpdGhcbiAgICAgKiBuZWVkaW5nIHRvIGNsZWFyIHRpbWVvdXRzIGlmIGFub3RoZXIgdG91Y2ggZXZlbnQgb2NjdXJyZWRcbiAgICAgKiB3aXRoaW4gdGhlIDUwMG1zLiBDYW5ub3QgbW91c2V1cCBiZXR3ZWVuIHRvdWNoc3RhcnQgYW5kXG4gICAgICogdG91Y2hlbmQsIG5vciBpbiB0aGUgNTAwbXMgYWZ0ZXIgdG91Y2hlbmQuICovXG4gICAgdG91Y2hlczogMCxcbiAgICBhbGxvd0V2ZW50OiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGFsbG93ID0gdHJ1ZTtcblxuICAgICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzICs9IDE7IC8vcHVzaFxuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICd0b3VjaGVuZCcgfHwgZS50eXBlID09PSAndG91Y2hjYW5jZWwnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChUb3VjaEhhbmRsZXIudG91Y2hlcyA+IDApIHtcbiAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzIC09IDE7IC8vcG9wIGFmdGVyIDUwMG1zXG4gICAgICAgICAgfVxuICAgICAgICB9LCA1MDApO1xuICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICBhbGxvdyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxsb3c7XG4gICAgfSxcbiAgICB0b3VjaHVwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgVG91Y2hIYW5kbGVyLmFsbG93RXZlbnQoZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlciBmb3IgLndhdmVzLWVmZmVjdCBlbGVtZW50LlxuICAgKiByZXR1cm5zIG51bGwgd2hlbiAud2F2ZXMtZWZmZWN0IGVsZW1lbnQgbm90IGluIFwiY2xpY2sgdHJlZVwiXG4gICAqL1xuICBmdW5jdGlvbiBnZXRXYXZlc0VmZmVjdEVsZW1lbnQoZSkge1xuICAgIGlmIChUb3VjaEhhbmRsZXIuYWxsb3dFdmVudChlKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0gbnVsbDtcbiAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG4gICAgd2hpbGUgKHRhcmdldC5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJiB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBCdWJibGUgdGhlIGNsaWNrIGFuZCBzaG93IGVmZmVjdCBpZiAud2F2ZXMtZWZmZWN0IGVsZW0gd2FzIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcblxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBFZmZlY3Quc2hvdyhlLCBlbGVtZW50KTtcblxuICAgICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgRWZmZWN0LmhpZGUsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBXYXZlcy5kaXNwbGF5RWZmZWN0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmICgnZHVyYXRpb24nIGluIG9wdGlvbnMpIHtcbiAgICAgIEVmZmVjdC5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgfVxuXG4gICAgLy9XcmFwIGlucHV0IGluc2lkZSA8aT4gdGFnXG4gICAgRWZmZWN0LndyYXBJbnB1dCgkJCgnLndhdmVzLWVmZmVjdCcpKTtcblxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgfTtcblxuICAvKipcbiAgICogQXR0YWNoIFdhdmVzIHRvIGFuIGlucHV0IGVsZW1lbnQgKG9yIGFueSBlbGVtZW50IHdoaWNoIGRvZXNuJ3RcbiAgICogYnViYmxlIG1vdXNldXAvbW91c2Vkb3duIGV2ZW50cykuXG4gICAqICAgSW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIGR5bmFtaWNhbGx5IGxvYWRlZCBmb3Jtcy9pbnB1dHMsIG9yXG4gICAqIHdoZXJlIHRoZSB1c2VyIGRvZXNuJ3Qgd2FudCBhIGRlbGVnYXRlZCBjbGljayBoYW5kbGVyLlxuICAgKi9cbiAgV2F2ZXMuYXR0YWNoID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvL0ZVVFVSRTogYXV0b21hdGljYWxseSBhZGQgd2F2ZXMgY2xhc3NlcyBhbmQgYWxsb3cgdXNlcnNcbiAgICAvLyB0byBzcGVjaWZ5IHRoZW0gd2l0aCBhbiBvcHRpb25zIHBhcmFtPyBFZy4gbGlnaHQvY2xhc3NpYy9idXR0b25cbiAgICBpZiAoZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgIEVmZmVjdC53cmFwSW5wdXQoW2VsZW1lbnRdKTtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2hvd0VmZmVjdCwgZmFsc2UpO1xuICB9O1xuXG4gIHdpbmRvdy5XYXZlcyA9IFdhdmVzO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgV2F2ZXMuZGlzcGxheUVmZmVjdCgpO1xuICB9LCBmYWxzZSk7XG59KSh3aW5kb3cpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBodG1sOiAnJyxcbiAgICBkaXNwbGF5TGVuZ3RoOiA0MDAwLFxuICAgIGluRHVyYXRpb246IDMwMCxcbiAgICBvdXREdXJhdGlvbjogMzc1LFxuICAgIGNsYXNzZXM6ICcnLFxuICAgIGNvbXBsZXRlQ2FsbGJhY2s6IG51bGwsXG4gICAgYWN0aXZhdGlvblBlcmNlbnQ6IDAuOFxuICB9O1xuXG4gIHZhciBUb2FzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUb2FzdChvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG9hc3QpO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSB0b2FzdFxuICAgICAgICogQG1lbWJlciBUb2FzdCNvcHRpb25zXG4gICAgICAgKi9cbiAgICAgIHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBUb2FzdC5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm9wdGlvbnMuaHRtbDtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgY3VycmVudCBwYW4gc3RhdGUgdG9hc3RcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICB0aGlzLnBhbm5pbmcgPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBUaW1lIHJlbWFpbmluZyB1bnRpbCB0b2FzdCBpcyByZW1vdmVkXG4gICAgICAgKi9cbiAgICAgIHRoaXMudGltZVJlbWFpbmluZyA9IHRoaXMub3B0aW9ucy5kaXNwbGF5TGVuZ3RoO1xuXG4gICAgICBpZiAoVG9hc3QuX3RvYXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgVG9hc3QuX2NyZWF0ZUNvbnRhaW5lcigpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgbmV3IHRvYXN0XG4gICAgICBUb2FzdC5fdG9hc3RzLnB1c2godGhpcyk7XG4gICAgICB2YXIgdG9hc3RFbGVtZW50ID0gdGhpcy5fY3JlYXRlVG9hc3QoKTtcbiAgICAgIHRvYXN0RWxlbWVudC5NX1RvYXN0ID0gdGhpcztcbiAgICAgIHRoaXMuZWwgPSB0b2FzdEVsZW1lbnQ7XG4gICAgICB0aGlzLiRlbCA9ICQodG9hc3RFbGVtZW50KTtcbiAgICAgIHRoaXMuX2FuaW1hdGVJbigpO1xuICAgICAgdGhpcy5fc2V0VGltZXIoKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVG9hc3QsIFt7XG4gICAgICBrZXk6IFwiX2NyZWF0ZVRvYXN0XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGUgdG9hc3QgYW5kIGFwcGVuZCBpdCB0byB0b2FzdCBjb250YWluZXJcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVUb2FzdCgpIHtcbiAgICAgICAgdmFyIHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvYXN0LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG5cbiAgICAgICAgLy8gQWRkIGN1c3RvbSBjbGFzc2VzIG9udG8gdG9hc3RcbiAgICAgICAgaWYgKCEhdGhpcy5vcHRpb25zLmNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0b2FzdCkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGNvbnRlbnRcbiAgICAgICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ29iamVjdCcgPyB0aGlzLm1lc3NhZ2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA6IHRoaXMubWVzc2FnZSAmJiB0eXBlb2YgdGhpcy5tZXNzYWdlID09PSAnb2JqZWN0JyAmJiB0aGlzLm1lc3NhZ2UgIT09IG51bGwgJiYgdGhpcy5tZXNzYWdlLm5vZGVUeXBlID09PSAxICYmIHR5cGVvZiB0aGlzLm1lc3NhZ2Uubm9kZU5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlKTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIGl0IGlzIGpRdWVyeSBvYmplY3RcbiAgICAgICAgfSBlbHNlIGlmICghIXRoaXMubWVzc2FnZS5qcXVlcnkpIHtcbiAgICAgICAgICAkKHRvYXN0KS5hcHBlbmQodGhpcy5tZXNzYWdlWzBdKTtcblxuICAgICAgICAgIC8vIEluc2VydCBhcyBodG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0LmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGVuZCB0b2FzZnRcbiAgICAgICAgVG9hc3QuX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2FzdCk7XG4gICAgICAgIHJldHVybiB0b2FzdDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGluIHRvYXN0XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbigpIHtcbiAgICAgICAgLy8gQW5pbWF0ZSB0b2FzdCBpblxuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZSBzZXRJbnRlcnZhbCB3aGljaCBhdXRvbWF0aWNhbGx5IHJlbW92ZXMgdG9hc3Qgd2hlbiB0aW1lUmVtYWluaW5nID49IDBcbiAgICAgICAqIGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRUaW1lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRUaW1lcigpIHtcbiAgICAgICAgdmFyIF90aGlzMjkgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLnRpbWVSZW1haW5pbmcgIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgdGhpcy5jb3VudGVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBJZiB0b2FzdCBpcyBub3QgYmVpbmcgZHJhZ2dlZCwgZGVjcmVhc2UgaXRzIHRpbWUgcmVtYWluaW5nXG4gICAgICAgICAgICBpZiAoIV90aGlzMjkucGFubmluZykge1xuICAgICAgICAgICAgICBfdGhpczI5LnRpbWVSZW1haW5pbmcgLT0gMjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFuaW1hdGUgdG9hc3Qgb3V0XG4gICAgICAgICAgICBpZiAoX3RoaXMyOS50aW1lUmVtYWluaW5nIDw9IDApIHtcbiAgICAgICAgICAgICAgX3RoaXMyOS5kaXNtaXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGlzbWlzcyB0b2FzdCB3aXRoIGFuaW1hdGlvblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGlzbWlzc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc21pc3MoKSB7XG4gICAgICAgIHZhciBfdGhpczMwID0gdGhpcztcblxuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmNvdW50ZXJJbnRlcnZhbCk7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uRGlzdGFuY2UgPSB0aGlzLmVsLm9mZnNldFdpZHRoICogdGhpcy5vcHRpb25zLmFjdGl2YXRpb25QZXJjZW50O1xuXG4gICAgICAgIGlmICh0aGlzLndhc1N3aXBlZCkge1xuICAgICAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjA1cywgb3BhY2l0eSAuMDVzJztcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIGFjdGl2YXRpb25EaXN0YW5jZSArIFwicHgpXCI7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWwsXG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBtYXJnaW5Ub3A6IC00MCxcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLm91dER1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgb3B0aW9uYWwgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMzMC5vcHRpb25zLmNvbXBsZXRlQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMzMC5vcHRpb25zLmNvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgX3RoaXMzMC4kZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICBUb2FzdC5fdG9hc3RzLnNwbGljZShUb2FzdC5fdG9hc3RzLmluZGV4T2YoX3RoaXMzMCksIDEpO1xuICAgICAgICAgICAgaWYgKFRvYXN0Ll90b2FzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIFRvYXN0Ll9yZW1vdmVDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluc3RhbmNlKGVsKSB7XG4gICAgICAgIHZhciBkb21FbGVtID0gISFlbC5qcXVlcnkgPyBlbFswXSA6IGVsO1xuICAgICAgICByZXR1cm4gZG9tRWxlbS5NX1RvYXN0O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFwcGVuZCB0b2FzdCBjb250YWluZXIgYW5kIGFkZCBldmVudCBoYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NyZWF0ZUNvbnRhaW5lclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGVDb250YWluZXIoKSB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9hc3QtY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gQWRkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBUb2FzdC5fb25EcmFnU3RhcnQpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBUb2FzdC5fb25EcmFnRW5kKTtcblxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgVG9hc3QuX29uRHJhZ1N0YXJ0KTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgVG9hc3QuX29uRHJhZ0VuZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICBUb2FzdC5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSB0b2FzdCBjb250YWluZXIgYW5kIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlQ29udGFpbmVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUNvbnRhaW5lcigpIHtcbiAgICAgICAgLy8gQWRkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgVG9hc3QuX29uRHJhZ01vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgVG9hc3QuX29uRHJhZ0VuZCk7XG5cbiAgICAgICAgJChUb2FzdC5fY29udGFpbmVyKS5yZW1vdmUoKTtcbiAgICAgICAgVG9hc3QuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQmVnaW4gZHJhZyBoYW5kbGVyXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfb25EcmFnU3RhcnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25EcmFnU3RhcnQoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgJiYgJChlLnRhcmdldCkuY2xvc2VzdCgnLnRvYXN0JykubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyICR0b2FzdCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy50b2FzdCcpO1xuICAgICAgICAgIHZhciB0b2FzdCA9ICR0b2FzdFswXS5NX1RvYXN0O1xuICAgICAgICAgIHRvYXN0LnBhbm5pbmcgPSB0cnVlO1xuICAgICAgICAgIFRvYXN0Ll9kcmFnZ2VkVG9hc3QgPSB0b2FzdDtcbiAgICAgICAgICB0b2FzdC5lbC5jbGFzc0xpc3QuYWRkKCdwYW5uaW5nJyk7XG4gICAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xuICAgICAgICAgIHRvYXN0LnN0YXJ0aW5nWFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgICAgIHRvYXN0LnRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHRvYXN0LnhQb3MgPSBUb2FzdC5feFBvcyhlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIERyYWcgbW92ZSBoYW5kbGVyXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfb25EcmFnTW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyYWdNb3ZlKGUpIHtcbiAgICAgICAgaWYgKCEhVG9hc3QuX2RyYWdnZWRUb2FzdCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgdG9hc3QgPSBUb2FzdC5fZHJhZ2dlZFRvYXN0O1xuICAgICAgICAgIHRvYXN0LmRlbHRhWCA9IE1hdGguYWJzKHRvYXN0LnhQb3MgLSBUb2FzdC5feFBvcyhlKSk7XG4gICAgICAgICAgdG9hc3QueFBvcyA9IFRvYXN0Ll94UG9zKGUpO1xuICAgICAgICAgIHRvYXN0LnZlbG9jaXR5WCA9IHRvYXN0LmRlbHRhWCAvIChEYXRlLm5vdygpIC0gdG9hc3QudGltZSk7XG4gICAgICAgICAgdG9hc3QudGltZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICB2YXIgdG90YWxEZWx0YVggPSB0b2FzdC54UG9zIC0gdG9hc3Quc3RhcnRpbmdYUG9zO1xuICAgICAgICAgIHZhciBhY3RpdmF0aW9uRGlzdGFuY2UgPSB0b2FzdC5lbC5vZmZzZXRXaWR0aCAqIHRvYXN0Lm9wdGlvbnMuYWN0aXZhdGlvblBlcmNlbnQ7XG4gICAgICAgICAgdG9hc3QuZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgdG90YWxEZWx0YVggKyBcInB4KVwiO1xuICAgICAgICAgIHRvYXN0LmVsLnN0eWxlLm9wYWNpdHkgPSAxIC0gTWF0aC5hYnModG90YWxEZWx0YVggLyBhY3RpdmF0aW9uRGlzdGFuY2UpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRW5kIGRyYWcgaGFuZGxlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX29uRHJhZ0VuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9vbkRyYWdFbmQoKSB7XG4gICAgICAgIGlmICghIVRvYXN0Ll9kcmFnZ2VkVG9hc3QpIHtcbiAgICAgICAgICB2YXIgdG9hc3QgPSBUb2FzdC5fZHJhZ2dlZFRvYXN0O1xuICAgICAgICAgIHRvYXN0LnBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICB0b2FzdC5lbC5jbGFzc0xpc3QucmVtb3ZlKCdwYW5uaW5nJyk7XG5cbiAgICAgICAgICB2YXIgdG90YWxEZWx0YVggPSB0b2FzdC54UG9zIC0gdG9hc3Quc3RhcnRpbmdYUG9zO1xuICAgICAgICAgIHZhciBhY3RpdmF0aW9uRGlzdGFuY2UgPSB0b2FzdC5lbC5vZmZzZXRXaWR0aCAqIHRvYXN0Lm9wdGlvbnMuYWN0aXZhdGlvblBlcmNlbnQ7XG4gICAgICAgICAgdmFyIHNob3VsZEJlRGlzbWlzc2VkID0gTWF0aC5hYnModG90YWxEZWx0YVgpID4gYWN0aXZhdGlvbkRpc3RhbmNlIHx8IHRvYXN0LnZlbG9jaXR5WCA+IDE7XG5cbiAgICAgICAgICAvLyBSZW1vdmUgdG9hc3RcbiAgICAgICAgICBpZiAoc2hvdWxkQmVEaXNtaXNzZWQpIHtcbiAgICAgICAgICAgIHRvYXN0Lndhc1N3aXBlZCA9IHRydWU7XG4gICAgICAgICAgICB0b2FzdC5kaXNtaXNzKCk7XG5cbiAgICAgICAgICAgIC8vIEFuaW1hdGUgdG9hc3QgYmFjayB0byBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2FzdC5lbC5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAuMnMsIG9wYWNpdHkgLjJzJztcbiAgICAgICAgICAgIHRvYXN0LmVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgdG9hc3QuZWwuc3R5bGUub3BhY2l0eSA9ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBUb2FzdC5fZHJhZ2dlZFRvYXN0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCB4IHBvc2l0aW9uIG9mIG1vdXNlIG9yIHRvdWNoIGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfeFBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF94UG9zKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgcmV0dXJuIGUuY2xpZW50WDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgYWxsIHRvYXN0c1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGlzbWlzc0FsbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc21pc3NBbGwoKSB7XG4gICAgICAgIGZvciAodmFyIHRvYXN0SW5kZXggaW4gVG9hc3QuX3RvYXN0cykge1xuICAgICAgICAgIFRvYXN0Ll90b2FzdHNbdG9hc3RJbmRleF0uZGlzbWlzcygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVG9hc3Q7XG4gIH0oKTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgVG9hc3RcbiAgICogQHR5cGUge0FycmF5LjxUb2FzdD59XG4gICAqL1xuXG5cbiAgVG9hc3QuX3RvYXN0cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBUb2FzdFxuICAgKi9cbiAgVG9hc3QuX2NvbnRhaW5lciA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFRvYXN0XG4gICAqIEB0eXBlIHtUb2FzdH1cbiAgICovXG4gIFRvYXN0Ll9kcmFnZ2VkVG9hc3QgPSBudWxsO1xuXG4gIE0uVG9hc3QgPSBUb2FzdDtcbiAgTS50b2FzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBUb2FzdChvcHRpb25zKTtcbiAgfTtcbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBlZGdlOiAnbGVmdCcsXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgIGluRHVyYXRpb246IDI1MCxcbiAgICBvdXREdXJhdGlvbjogMjAwLFxuICAgIG9uT3BlblN0YXJ0OiBudWxsLFxuICAgIG9uT3BlbkVuZDogbnVsbCxcbiAgICBvbkNsb3NlU3RhcnQ6IG51bGwsXG4gICAgb25DbG9zZUVuZDogbnVsbCxcbiAgICBwcmV2ZW50U2Nyb2xsaW5nOiB0cnVlXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKi9cblxuICB2YXIgU2lkZW5hdiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50OCkge1xuICAgIF9pbmhlcml0cyhTaWRlbmF2LCBfQ29tcG9uZW50OCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgU2lkZW5hdiBpbnN0YW5jZSBhbmQgc2V0IHVwIG92ZXJsYXlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWRlbmF2KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2lkZW5hdik7XG5cbiAgICAgIHZhciBfdGhpczMxID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNpZGVuYXYuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTaWRlbmF2KSkuY2FsbCh0aGlzLCBTaWRlbmF2LCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczMxLmVsLk1fU2lkZW5hdiA9IF90aGlzMzE7XG4gICAgICBfdGhpczMxLmlkID0gX3RoaXMzMS4kZWwuYXR0cignaWQnKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgU2lkZW5hdlxuICAgICAgICogQG1lbWJlciBTaWRlbmF2I29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IFtlZGdlPSdsZWZ0J10gLSBTaWRlIG9mIHNjcmVlbiBvbiB3aGljaCBTaWRlbmF2IGFwcGVhcnNcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbZHJhZ2dhYmxlPXRydWVdIC0gQWxsb3cgc3dpcGUgZ2VzdHVyZXMgdG8gb3Blbi9jbG9zZSBTaWRlbmF2XG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbaW5EdXJhdGlvbj0yNTBdIC0gTGVuZ3RoIGluIG1zIG9mIGVudGVyIHRyYW5zaXRpb25cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IFtvdXREdXJhdGlvbj0yMDBdIC0gTGVuZ3RoIGluIG1zIG9mIGV4aXQgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbk9wZW5TdGFydCAtIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNpZGVuYXYgc3RhcnRzIGVudGVyaW5nXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uT3BlbkVuZCAtIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHNpZGVuYXYgZmluaXNoZXMgZW50ZXJpbmdcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DbG9zZVN0YXJ0IC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gc2lkZW5hdiBzdGFydHMgZXhpdGluZ1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkNsb3NlRW5kIC0gRnVuY3Rpb24gY2FsbGVkIHdoZW4gc2lkZW5hdiBmaW5pc2hlcyBleGl0aW5nXG4gICAgICAgKi9cbiAgICAgIF90aGlzMzEub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBTaWRlbmF2LmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgb3Blbi9jbG9zZSBzdGF0ZSBvZiBTaWRlbmF2XG4gICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAqL1xuICAgICAgX3RoaXMzMS5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgLyoqXG4gICAgICAgKiBEZXNjcmliZXMgaWYgU2lkZW5hdiBpcyBmaXhlZFxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIF90aGlzMzEuaXNGaXhlZCA9IF90aGlzMzEuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlbmF2LWZpeGVkJyk7XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIGlmIFNpZGVuYXYgaXMgYmVpbmcgZHJhZ2dlZWRcbiAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICovXG4gICAgICBfdGhpczMxLmlzRHJhZ2dlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBXaW5kb3cgc2l6ZSB2YXJpYWJsZXMgZm9yIHdpbmRvdyByZXNpemUgY2hlY2tzXG4gICAgICBfdGhpczMxLmxhc3RXaW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgX3RoaXMzMS5sYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICBfdGhpczMxLl9jcmVhdGVPdmVybGF5KCk7XG4gICAgICBfdGhpczMxLl9jcmVhdGVEcmFnVGFyZ2V0KCk7XG4gICAgICBfdGhpczMxLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIF90aGlzMzEuX3NldHVwQ2xhc3NlcygpO1xuICAgICAgX3RoaXMzMS5fc2V0dXBGaXhlZCgpO1xuXG4gICAgICBTaWRlbmF2Ll9zaWRlbmF2cy5wdXNoKF90aGlzMzEpO1xuICAgICAgcmV0dXJuIF90aGlzMzE7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFNpZGVuYXYsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuX2VuYWJsZUJvZHlTY3JvbGxpbmcoKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX292ZXJsYXkpO1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRyYWdUYXJnZXQpO1xuICAgICAgICB0aGlzLmVsLk1fU2lkZW5hdiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICB2YXIgaW5kZXggPSBTaWRlbmF2Ll9zaWRlbmF2cy5pbmRleE9mKHRoaXMpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgIFNpZGVuYXYuX3NpZGVuYXZzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2NyZWF0ZU92ZXJsYXlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlT3ZlcmxheSgpIHtcbiAgICAgICAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fY2xvc2VCb3VuZCA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdzaWRlbmF2LW92ZXJsYXknKTtcblxuICAgICAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fY2xvc2VCb3VuZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheSA9IG92ZXJsYXk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBpZiAoU2lkZW5hdi5fc2lkZW5hdnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZVRyaWdnZXJDbGljayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0RHJhZ0JvdW5kID0gdGhpcy5faGFuZGxlRHJhZ1RhcmdldERyYWcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlRHJhZ1RhcmdldFJlbGVhc2VCb3VuZCA9IHRoaXMuX2hhbmRsZURyYWdUYXJnZXRSZWxlYXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlRHJhZ0JvdW5kID0gdGhpcy5faGFuZGxlQ2xvc2VEcmFnLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlUmVsZWFzZUJvdW5kID0gdGhpcy5faGFuZGxlQ2xvc2VSZWxlYXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb3NlVHJpZ2dlckNsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDbG9zZVRyaWdnZXJDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZHJhZ1RhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0RHJhZ0JvdW5kKTtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlRHJhZ1RhcmdldFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlQ2xvc2VEcmFnQm91bmQpO1xuICAgICAgICB0aGlzLl9vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ2xvc2VSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUNsb3NlRHJhZ0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZUNsb3NlUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNsb3NlVHJpZ2dlckNsaWNrQm91bmQpO1xuXG4gICAgICAgIC8vIEFkZCByZXNpemUgZm9yIHNpZGUgbmF2IGZpeGVkXG4gICAgICAgIGlmICh0aGlzLmlzRml4ZWQpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCA9IHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgaWYgKFNpZGVuYXYuX3NpZGVuYXZzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZURyYWdUYXJnZXREcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmRyYWdUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEcmFnVGFyZ2V0UmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVDbG9zZURyYWdCb3VuZCk7XG4gICAgICAgIHRoaXMuX292ZXJsYXkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDbG9zZVJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlQ2xvc2VEcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ2xvc2VSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xvc2VUcmlnZ2VyQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHJlc2l6ZSBmb3Igc2lkZSBuYXYgZml4ZWRcbiAgICAgICAgaWYgKHRoaXMuaXNGaXhlZCkge1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVXaW5kb3dSZXNpemVCb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgVHJpZ2dlciBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVRyaWdnZXJDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVUcmlnZ2VyQ2xpY2soZSkge1xuICAgICAgICB2YXIgJHRyaWdnZXIgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lkZW5hdi10cmlnZ2VyJyk7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiAkdHJpZ2dlci5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgc2lkZW5hdklkID0gTS5nZXRJZEZyb21UcmlnZ2VyKCR0cmlnZ2VyWzBdKTtcblxuICAgICAgICAgIHZhciBzaWRlbmF2SW5zdGFuY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaWRlbmF2SWQpLk1fU2lkZW5hdjtcbiAgICAgICAgICBpZiAoc2lkZW5hdkluc3RhbmNlKSB7XG4gICAgICAgICAgICBzaWRlbmF2SW5zdGFuY2Uub3BlbigkdHJpZ2dlcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB2YXJpYWJsZXMgbmVlZGVkIGF0IHRoZSBiZWdnaW5pbmcgb2YgZHJhZ1xuICAgICAgICogYW5kIHN0b3AgYW55IGN1cnJlbnQgdHJhbnNpdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zdGFydERyYWdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc3RhcnREcmFnKGUpIHtcbiAgICAgICAgdmFyIGNsaWVudFggPSBlLnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdGhpcy5pc0RyYWdnZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zdGFydGluZ1hwb3MgPSBjbGllbnRYO1xuICAgICAgICB0aGlzLl94UG9zID0gdGhpcy5fc3RhcnRpbmdYcG9zO1xuICAgICAgICB0aGlzLl90aW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0aGlzLl9pbml0aWFsU2Nyb2xsVG9wID0gdGhpcy5pc09wZW4gPyB0aGlzLmVsLnNjcm9sbFRvcCA6IE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKTtcbiAgICAgICAgdGhpcy5fdmVydGljYWxseVNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5fb3ZlcmxheSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHZhcmlhYmxlcyBuZWVkZWQgYXQgZWFjaCBkcmFnIG1vdmUgdXBkYXRlIHRpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9kcmFnTW92ZVVwZGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9kcmFnTW92ZVVwZGF0ZShlKSB7XG4gICAgICAgIHZhciBjbGllbnRYID0gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsVG9wID0gdGhpcy5pc09wZW4gPyB0aGlzLmVsLnNjcm9sbFRvcCA6IE0uZ2V0RG9jdW1lbnRTY3JvbGxUb3AoKTtcbiAgICAgICAgdGhpcy5kZWx0YVggPSBNYXRoLmFicyh0aGlzLl94UG9zIC0gY2xpZW50WCk7XG4gICAgICAgIHRoaXMuX3hQb3MgPSBjbGllbnRYO1xuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IHRoaXMuZGVsdGFYIC8gKERhdGUubm93KCkgLSB0aGlzLl90aW1lKTtcbiAgICAgICAgdGhpcy5fdGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICh0aGlzLl9pbml0aWFsU2Nyb2xsVG9wICE9PSBjdXJyZW50U2Nyb2xsVG9wKSB7XG4gICAgICAgICAgdGhpcy5fdmVydGljYWxseVNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIERyYWdnaW5nIG9mIFNpZGVuYXZcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEcmFnVGFyZ2V0RHJhZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEcmFnVGFyZ2V0RHJhZyhlKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIGRyYWdnYWJsZVxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kcmFnZ2FibGUgfHwgdGhpcy5faXNDdXJyZW50bHlGaXhlZCgpIHx8IHRoaXMuX3ZlcnRpY2FsbHlTY3JvbGxpbmcpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBub3QgYmVpbmcgZHJhZ2dlZCwgc2V0IGluaXRpYWwgZHJhZyBzdGFydCB2YXJpYWJsZXNcbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dlZCkge1xuICAgICAgICAgIHRoaXMuX3N0YXJ0RHJhZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biB0b3VjaG1vdmUgdXBkYXRlc1xuICAgICAgICB0aGlzLl9kcmFnTW92ZVVwZGF0ZShlKTtcblxuICAgICAgICAvLyBDYWxjdWxhdGUgcmF3IGRlbHRhWFxuICAgICAgICB2YXIgdG90YWxEZWx0YVggPSB0aGlzLl94UG9zIC0gdGhpcy5fc3RhcnRpbmdYcG9zO1xuXG4gICAgICAgIC8vIGRyYWdEaXJlY3Rpb24gaXMgdGhlIGF0dGVtcHRlZCB1c2VyIGRyYWcgZGlyZWN0aW9uXG4gICAgICAgIHZhciBkcmFnRGlyZWN0aW9uID0gdG90YWxEZWx0YVggPiAwID8gJ3JpZ2h0JyA6ICdsZWZ0JztcblxuICAgICAgICAvLyBEb24ndCBhbGxvdyB0b3RhbERlbHRhWCB0byBleGNlZWQgU2lkZW5hdiB3aWR0aCBvciBiZSBkcmFnZ2VkIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cbiAgICAgICAgdG90YWxEZWx0YVggPSBNYXRoLm1pbih0aGlzLl93aWR0aCwgTWF0aC5hYnModG90YWxEZWx0YVgpKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lZGdlID09PSBkcmFnRGlyZWN0aW9uKSB7XG4gICAgICAgICAgdG90YWxEZWx0YVggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRyYW5zZm9ybVggaXMgdGhlIGRyYWcgZGlzcGxhY2VtZW50XG4gICAgICAgICAqIHRyYW5zZm9ybVByZWZpeCBpcyB0aGUgaW5pdGlhbCB0cmFuc2Zvcm0gcGxhY2VtZW50XG4gICAgICAgICAqIEludmVydCB2YWx1ZXMgaWYgU2lkZW5hdiBpcyByaWdodCBlZGdlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdHJhbnNmb3JtWCA9IHRvdGFsRGVsdGFYO1xuICAgICAgICB2YXIgdHJhbnNmb3JtUHJlZml4ID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lZGdlID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdHJhbnNmb3JtUHJlZml4ID0gJ3RyYW5zbGF0ZVgoMTAwJSknO1xuICAgICAgICAgIHRyYW5zZm9ybVggPSAtdHJhbnNmb3JtWDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGN1bGF0ZSBvcGVuL2Nsb3NlIHBlcmNlbnRhZ2Ugb2Ygc2lkZW5hdiwgd2l0aCBvcGVuID0gMSBhbmQgY2xvc2UgPSAwXG4gICAgICAgIHRoaXMucGVyY2VudE9wZW4gPSBNYXRoLm1pbigxLCB0b3RhbERlbHRhWCAvIHRoaXMuX3dpZHRoKTtcblxuICAgICAgICAvLyBTZXQgdHJhbnNmb3JtIGFuZCBvcGFjaXR5IHN0eWxlc1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVByZWZpeCArIFwiIHRyYW5zbGF0ZVgoXCIgKyB0cmFuc2Zvcm1YICsgXCJweClcIjtcbiAgICAgICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5wZXJjZW50T3BlbjtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRHJhZyBUYXJnZXQgUmVsZWFzZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURyYWdUYXJnZXRSZWxlYXNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURyYWdUYXJnZXRSZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wZXJjZW50T3BlbiA+IDAuMikge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVPdXQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmlzRHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuX3ZlcnRpY2FsbHlTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDbG9zZSBEcmFnXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2xvc2VEcmFnXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsb3NlRHJhZyhlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIC8vIENoZWNrIGlmIGRyYWdnYWJsZVxuICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmRyYWdnYWJsZSB8fCB0aGlzLl9pc0N1cnJlbnRseUZpeGVkKCkgfHwgdGhpcy5fdmVydGljYWxseVNjcm9sbGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIG5vdCBiZWluZyBkcmFnZ2VkLCBzZXQgaW5pdGlhbCBkcmFnIHN0YXJ0IHZhcmlhYmxlc1xuICAgICAgICAgIGlmICghdGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0RHJhZyhlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSdW4gdG91Y2htb3ZlIHVwZGF0ZXNcbiAgICAgICAgICB0aGlzLl9kcmFnTW92ZVVwZGF0ZShlKTtcblxuICAgICAgICAgIC8vIENhbGN1bGF0ZSByYXcgZGVsdGFYXG4gICAgICAgICAgdmFyIHRvdGFsRGVsdGFYID0gdGhpcy5feFBvcyAtIHRoaXMuX3N0YXJ0aW5nWHBvcztcblxuICAgICAgICAgIC8vIGRyYWdEaXJlY3Rpb24gaXMgdGhlIGF0dGVtcHRlZCB1c2VyIGRyYWcgZGlyZWN0aW9uXG4gICAgICAgICAgdmFyIGRyYWdEaXJlY3Rpb24gPSB0b3RhbERlbHRhWCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnO1xuXG4gICAgICAgICAgLy8gRG9uJ3QgYWxsb3cgdG90YWxEZWx0YVggdG8gZXhjZWVkIFNpZGVuYXYgd2lkdGggb3IgYmUgZHJhZ2dlZCBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXG4gICAgICAgICAgdG90YWxEZWx0YVggPSBNYXRoLm1pbih0aGlzLl93aWR0aCwgTWF0aC5hYnModG90YWxEZWx0YVgpKTtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVkZ2UgIT09IGRyYWdEaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRvdGFsRGVsdGFYID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdHJhbnNmb3JtWCA9IC10b3RhbERlbHRhWDtcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVkZ2UgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVggPSAtdHJhbnNmb3JtWDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxjdWxhdGUgb3Blbi9jbG9zZSBwZXJjZW50YWdlIG9mIHNpZGVuYXYsIHdpdGggb3BlbiA9IDEgYW5kIGNsb3NlID0gMFxuICAgICAgICAgIHRoaXMucGVyY2VudE9wZW4gPSBNYXRoLm1pbigxLCAxIC0gdG90YWxEZWx0YVggLyB0aGlzLl93aWR0aCk7XG5cbiAgICAgICAgICAvLyBTZXQgdHJhbnNmb3JtIGFuZCBvcGFjaXR5IHN0eWxlc1xuICAgICAgICAgIHRoaXMuZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVYKFwiICsgdHJhbnNmb3JtWCArIFwicHgpXCI7XG4gICAgICAgICAgdGhpcy5fb3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5wZXJjZW50T3BlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDbG9zZSBSZWxlYXNlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2xvc2VSZWxlYXNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsb3NlUmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuICYmIHRoaXMuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgaWYgKHRoaXMucGVyY2VudE9wZW4gPiAwLjgpIHtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVJbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5pc0RyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl92ZXJ0aWNhbGx5U2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGVzIGNsb3Npbmcgb2YgU2lkZW5hdiB3aGVuIGVsZW1lbnQgd2l0aCBjbGFzcyAuc2lkZW5hdi1jbG9zZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNsb3NlVHJpZ2dlckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsb3NlVHJpZ2dlckNsaWNrKGUpIHtcbiAgICAgICAgdmFyICRjbG9zZVRyaWdnZXIgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc2lkZW5hdi1jbG9zZScpO1xuICAgICAgICBpZiAoJGNsb3NlVHJpZ2dlci5sZW5ndGggJiYgIXRoaXMuX2lzQ3VycmVudGx5Rml4ZWQoKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBXaW5kb3cgUmVzaXplXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlV2luZG93UmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVdpbmRvd1Jlc2l6ZSgpIHtcbiAgICAgICAgLy8gT25seSBoYW5kbGUgaG9yaXpvbnRhbCByZXNpemVzXG4gICAgICAgIGlmICh0aGlzLmxhc3RXaW5kb3dXaWR0aCAhPT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTIpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0V2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5sYXN0V2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBDbGFzc2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwQ2xhc3NlcygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lZGdlID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdyaWdodC1hbGlnbmVkJyk7XG4gICAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlQ2xhc3Nlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVDbGFzc2VzKCkge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRml4ZWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBGaXhlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzQ3VycmVudGx5Rml4ZWQoKSkge1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pc0N1cnJlbnRseUZpeGVkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ3VycmVudGx5Rml4ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRml4ZWQgJiYgd2luZG93LmlubmVyV2lkdGggPiA5OTI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jcmVhdGVEcmFnVGFyZ2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NyZWF0ZURyYWdUYXJnZXQoKSB7XG4gICAgICAgIHZhciBkcmFnVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRyYWdUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZHJhZy10YXJnZXQnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkcmFnVGFyZ2V0KTtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0ID0gZHJhZ1RhcmdldDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3ByZXZlbnRCb2R5U2Nyb2xsaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByZXZlbnRCb2R5U2Nyb2xsaW5nKCkge1xuICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2VuYWJsZUJvZHlTY3JvbGxpbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZW5hYmxlQm9keVNjcm9sbGluZygpIHtcbiAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgICAgLy8gUnVuIG9uT3BlblN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uT3BlblN0YXJ0LmNhbGwodGhpcywgdGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIYW5kbGUgZml4ZWQgU2lkZW5hdlxuICAgICAgICBpZiAodGhpcy5faXNDdXJyZW50bHlGaXhlZCgpKSB7XG4gICAgICAgICAgYW5pbS5yZW1vdmUodGhpcy5lbCk7XG4gICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLmVsLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fZW5hYmxlQm9keVNjcm9sbGluZygpO1xuICAgICAgICAgIHRoaXMuX292ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgIC8vIEhhbmRsZSBub24tZml4ZWQgU2lkZW5hdlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmVudFNjcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5fcHJldmVudEJvZHlTY3JvbGxpbmcoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2VkIHx8IHRoaXMucGVyY2VudE9wZW4gIT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZUluKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFJ1biBvbkNsb3NlU3RhcnQgY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xvc2VTdGFydC5jYWxsKHRoaXMsIHRoaXMuZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGZpeGVkIFNpZGVuYXZcbiAgICAgICAgaWYgKHRoaXMuX2lzQ3VycmVudGx5Rml4ZWQoKSkge1xuICAgICAgICAgIHZhciB0cmFuc2Zvcm1YID0gdGhpcy5vcHRpb25zLmVkZ2UgPT09ICdsZWZ0JyA/ICctMTA1JScgOiAnMTA1JSc7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyB0cmFuc2Zvcm1YICsgXCIpXCI7XG5cbiAgICAgICAgICAvLyBIYW5kbGUgbm9uLWZpeGVkIFNpZGVuYXZcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9lbmFibGVCb2R5U2Nyb2xsaW5nKCk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2VkIHx8IHRoaXMucGVyY2VudE9wZW4gIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZU91dCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZUluKCkge1xuICAgICAgICB0aGlzLl9hbmltYXRlU2lkZW5hdkluKCk7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVPdmVybGF5SW4oKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVTaWRlbmF2SW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZVNpZGVuYXZJbigpIHtcbiAgICAgICAgdmFyIF90aGlzMzIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzbGlkZU91dFBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnZWQpIHtcbiAgICAgICAgICBzbGlkZU91dFBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnID8gc2xpZGVPdXRQZXJjZW50ICsgdGhpcy5wZXJjZW50T3BlbiA6IHNsaWRlT3V0UGVyY2VudCAtIHRoaXMucGVyY2VudE9wZW47XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICB0cmFuc2xhdGVYOiBbc2xpZGVPdXRQZXJjZW50ICogMTAwICsgXCIlXCIsIDBdLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMuaW5EdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJ1biBvbk9wZW5FbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMzMi5vcHRpb25zLm9uT3BlbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBfdGhpczMyLm9wdGlvbnMub25PcGVuRW5kLmNhbGwoX3RoaXMzMiwgX3RoaXMzMi5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdmVybGF5SW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU92ZXJsYXlJbigpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgc3RhcnQgPSB0aGlzLnBlcmNlbnRPcGVuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICQodGhpcy5fb3ZlcmxheSkuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW0ucmVtb3ZlKHRoaXMuX292ZXJsYXkpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLl9vdmVybGF5LFxuICAgICAgICAgIG9wYWNpdHk6IFtzdGFydCwgMV0sXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5pbkR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU91dCgpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZVNpZGVuYXZPdXQoKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZU92ZXJsYXlPdXQoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVTaWRlbmF2T3V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVTaWRlbmF2T3V0KCkge1xuICAgICAgICB2YXIgX3RoaXMzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGVuZFBlcmNlbnQgPSB0aGlzLm9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnID8gLTEgOiAxO1xuICAgICAgICB2YXIgc2xpZGVPdXRQZXJjZW50ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2VkKSB7XG4gICAgICAgICAgc2xpZGVPdXRQZXJjZW50ID0gdGhpcy5vcHRpb25zLmVkZ2UgPT09ICdsZWZ0JyA/IGVuZFBlcmNlbnQgKyB0aGlzLnBlcmNlbnRPcGVuIDogZW5kUGVyY2VudCAtIHRoaXMucGVyY2VudE9wZW47XG4gICAgICAgIH1cblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLmVsKTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5lbCxcbiAgICAgICAgICB0cmFuc2xhdGVYOiBbc2xpZGVPdXRQZXJjZW50ICogMTAwICsgXCIlXCIsIGVuZFBlcmNlbnQgKiAxMDUgKyBcIiVcIl0sXG4gICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5vdXREdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJ1biBvbk9wZW5FbmQgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMzMy5vcHRpb25zLm9uQ2xvc2VFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXMzMy5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczMzLCBfdGhpczMzLmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZU92ZXJsYXlPdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYW5pbWF0ZU92ZXJsYXlPdXQoKSB7XG4gICAgICAgIHZhciBfdGhpczM0ID0gdGhpcztcblxuICAgICAgICBhbmltLnJlbW92ZSh0aGlzLl9vdmVybGF5KTtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogdGhpcy5fb3ZlcmxheSxcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGR1cmF0aW9uOiB0aGlzLm9wdGlvbnMub3V0RHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKF90aGlzMzQuX292ZXJsYXkpLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoU2lkZW5hdi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNpZGVuYXYpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9TaWRlbmF2O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNpZGVuYXY7XG4gIH0oQ29tcG9uZW50KTtcblxuICAvKipcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyb2YgU2lkZW5hdlxuICAgKiBAdHlwZSB7QXJyYXkuPFNpZGVuYXY+fVxuICAgKi9cblxuXG4gIFNpZGVuYXYuX3NpZGVuYXZzID0gW107XG5cbiAgTS5TaWRlbmF2ID0gU2lkZW5hdjtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKFNpZGVuYXYsICdzaWRlbmF2JywgJ01fU2lkZW5hdicpO1xuICB9XG59KShjYXNoLCBNLmFuaW1lKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgdGhyb3R0bGU6IDEwMCxcbiAgICBzY3JvbGxPZmZzZXQ6IDIwMCwgLy8gb2Zmc2V0IC0gMjAwIGFsbG93cyBlbGVtZW50cyBuZWFyIGJvdHRvbSBvZiBwYWdlIHRvIHNjcm9sbFxuICAgIGFjdGl2ZUNsYXNzOiAnYWN0aXZlJyxcbiAgICBnZXRBY3RpdmVFbGVtZW50OiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHJldHVybiAnYVtocmVmPVwiIycgKyBpZCArICdcIl0nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBTY3JvbGxTcHkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDkpIHtcbiAgICBfaW5oZXJpdHMoU2Nyb2xsU3B5LCBfQ29tcG9uZW50OSk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgU2Nyb2xsU3B5IGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2Nyb2xsU3B5KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2Nyb2xsU3B5KTtcblxuICAgICAgdmFyIF90aGlzMzUgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2Nyb2xsU3B5Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2Nyb2xsU3B5KSkuY2FsbCh0aGlzLCBTY3JvbGxTcHksIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzMzUuZWwuTV9TY3JvbGxTcHkgPSBfdGhpczM1O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBtb2RhbFxuICAgICAgICogQG1lbWJlciBNb2RhbCNvcHRpb25zXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbdGhyb3R0bGU9MTAwXSAtIFRocm90dGxlIG9mIHNjcm9sbCBoYW5kbGVyXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBbc2Nyb2xsT2Zmc2V0PTIwMF0gLSBPZmZzZXQgZm9yIGNlbnRlcmluZyBlbGVtZW50IHdoZW4gc2Nyb2xsZWQgdG9cbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IFthY3RpdmVDbGFzcz0nYWN0aXZlJ10gLSBDbGFzcyBhcHBsaWVkIHRvIGFjdGl2ZSBlbGVtZW50c1xuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBbZ2V0QWN0aXZlRWxlbWVudF0gLSBVc2VkIHRvIGZpbmQgYWN0aXZlIGVsZW1lbnRcbiAgICAgICAqL1xuICAgICAgX3RoaXMzNS5vcHRpb25zID0gJC5leHRlbmQoe30sIFNjcm9sbFNweS5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgICBTY3JvbGxTcHkuX2VsZW1lbnRzLnB1c2goX3RoaXMzNSk7XG4gICAgICBTY3JvbGxTcHkuX2NvdW50Kys7XG4gICAgICBTY3JvbGxTcHkuX2luY3JlbWVudCsrO1xuICAgICAgX3RoaXMzNS50aWNrSWQgPSAtMTtcbiAgICAgIF90aGlzMzUuaWQgPSBTY3JvbGxTcHkuX2luY3JlbWVudDtcbiAgICAgIF90aGlzMzUuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgX3RoaXMzNS5faGFuZGxlV2luZG93U2Nyb2xsKCk7XG4gICAgICByZXR1cm4gX3RoaXMzNTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2Nyb2xsU3B5LCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgU2Nyb2xsU3B5Ll9lbGVtZW50cy5zcGxpY2UoU2Nyb2xsU3B5Ll9lbGVtZW50cy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldy5zcGxpY2UoU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldy5pbmRleE9mKHRoaXMpLCAxKTtcbiAgICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuc3BsaWNlKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLmluZGV4T2YodGhpcy4kZWwpLCAxKTtcbiAgICAgICAgU2Nyb2xsU3B5Ll9jb3VudC0tO1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQodGhpcy4kZWwuYXR0cignaWQnKSkpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICAgIHRoaXMuZWwuTV9TY3JvbGxTcHkgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB2YXIgdGhyb3R0bGVkUmVzaXplID0gTS50aHJvdHRsZSh0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGwsIDIwMCk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kID0gdGhyb3R0bGVkUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kID0gdGhpcy5faGFuZGxlV2luZG93U2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgICAgIGlmIChTY3JvbGxTcHkuX2NvdW50ID09PSAxKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hhbmRsZVdpbmRvd1Njcm9sbEJvdW5kKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVUcmlnZ2VyQ2xpY2spO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBpZiAoU2Nyb2xsU3B5Ll9jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9oYW5kbGVXaW5kb3dTY3JvbGxCb3VuZCk7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVHJpZ2dlckNsaWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBUcmlnZ2VyIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlVHJpZ2dlckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVRyaWdnZXJDbGljayhlKSB7XG4gICAgICAgIHZhciAkdHJpZ2dlciA9ICQoZS50YXJnZXQpO1xuICAgICAgICBmb3IgKHZhciBpID0gU2Nyb2xsU3B5Ll9lbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHZhciBzY3JvbGxzcHkgPSBTY3JvbGxTcHkuX2VsZW1lbnRzW2ldO1xuICAgICAgICAgIGlmICgkdHJpZ2dlci5pcygnYVtocmVmPVwiIycgKyBzY3JvbGxzcHkuJGVsLmF0dHIoJ2lkJykgKyAnXCJdJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBzY3JvbGxzcHkuJGVsLm9mZnNldCgpLnRvcCArIDE7XG5cbiAgICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgICB0YXJnZXRzOiBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSxcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXQgLSBzY3JvbGxzcHkub3B0aW9ucy5zY3JvbGxPZmZzZXQsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYydcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFdpbmRvdyBTY3JvbGxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVXaW5kb3dTY3JvbGxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlV2luZG93U2Nyb2xsKCkge1xuICAgICAgICAvLyB1bmlxdWUgdGljayBpZFxuICAgICAgICBTY3JvbGxTcHkuX3RpY2tzKys7XG5cbiAgICAgICAgLy8gdmlld3BvcnQgcmVjdGFuZ2xlXG4gICAgICAgIHZhciB0b3AgPSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCksXG4gICAgICAgICAgICBsZWZ0ID0gTS5nZXREb2N1bWVudFNjcm9sbExlZnQoKSxcbiAgICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgYm90dG9tID0gdG9wICsgd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgICAgIC8vIGRldGVybWluZSB3aGljaCBlbGVtZW50cyBhcmUgaW4gdmlld1xuICAgICAgICB2YXIgaW50ZXJzZWN0aW9ucyA9IFNjcm9sbFNweS5fZmluZEVsZW1lbnRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW50ZXJzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBzY3JvbGxzcHkgPSBpbnRlcnNlY3Rpb25zW2ldO1xuICAgICAgICAgIHZhciBsYXN0VGljayA9IHNjcm9sbHNweS50aWNrSWQ7XG4gICAgICAgICAgaWYgKGxhc3RUaWNrIDwgMCkge1xuICAgICAgICAgICAgLy8gZW50ZXJlZCBpbnRvIHZpZXdcbiAgICAgICAgICAgIHNjcm9sbHNweS5fZW50ZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB1cGRhdGUgdGljayBpZFxuICAgICAgICAgIHNjcm9sbHNweS50aWNrSWQgPSBTY3JvbGxTcHkuX3RpY2tzO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IFNjcm9sbFNweS5fZWxlbWVudHNJblZpZXcubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIF9zY3JvbGxzcHkgPSBTY3JvbGxTcHkuX2VsZW1lbnRzSW5WaWV3W19pXTtcbiAgICAgICAgICB2YXIgX2xhc3RUaWNrID0gX3Njcm9sbHNweS50aWNrSWQ7XG4gICAgICAgICAgaWYgKF9sYXN0VGljayA+PSAwICYmIF9sYXN0VGljayAhPT0gU2Nyb2xsU3B5Ll90aWNrcykge1xuICAgICAgICAgICAgLy8gZXhpdGVkIGZyb20gdmlld1xuICAgICAgICAgICAgX3Njcm9sbHNweS5fZXhpdCgpO1xuICAgICAgICAgICAgX3Njcm9sbHNweS50aWNrSWQgPSAtMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1lbWJlciBlbGVtZW50cyBpbiB2aWV3IGZvciBuZXh0IHRpY2tcbiAgICAgICAgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldyA9IGludGVyc2VjdGlvbnM7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRmluZCBlbGVtZW50cyB0aGF0IGFyZSB3aXRoaW4gdGhlIGJvdW5kYXJ5XG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gdG9wXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gcmlnaHRcbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b21cbiAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsZWZ0XG4gICAgICAgKiBAcmV0dXJuIHtBcnJheS48U2Nyb2xsU3B5Pn0gICBBIGNvbGxlY3Rpb24gb2YgZWxlbWVudHNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9lbnRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9lbnRlcigpIHtcbiAgICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMgPSBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmhlaWdodCgpICE9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXSkge1xuICAgICAgICAgICQodGhpcy5vcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0uYXR0cignaWQnKSkpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICAgICAgaWYgKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdWzBdLk1fU2Nyb2xsU3B5ICYmIHRoaXMuaWQgPCBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXVswXS5NX1Njcm9sbFNweS5pZCkge1xuICAgICAgICAgICAgU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMudW5zaGlmdCh0aGlzLiRlbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLnB1c2godGhpcy4kZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cy5wdXNoKHRoaXMuJGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5vcHRpb25zLmdldEFjdGl2ZUVsZW1lbnQoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0uYXR0cignaWQnKSkpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5hY3RpdmVDbGFzcyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9leGl0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2V4aXQoKSB7XG4gICAgICAgIHZhciBfdGhpczM2ID0gdGhpcztcblxuICAgICAgICBTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50cyA9IFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUuaGVpZ2h0KCkgIT0gMDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdKSB7XG4gICAgICAgICAgJCh0aGlzLm9wdGlvbnMuZ2V0QWN0aXZlRWxlbWVudChTY3JvbGxTcHkuX3Zpc2libGVFbGVtZW50c1swXS5hdHRyKCdpZCcpKSkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcblxuICAgICAgICAgIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsLmF0dHIoJ2lkJykgIT0gX3RoaXMzNi4kZWwuYXR0cignaWQnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoU2Nyb2xsU3B5Ll92aXNpYmxlRWxlbWVudHNbMF0pIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGVtcHR5XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5nZXRBY3RpdmVFbGVtZW50KFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzWzBdLmF0dHIoJ2lkJykpKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuYWN0aXZlQ2xhc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChTY3JvbGxTcHkuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTY3JvbGxTcHkpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9TY3JvbGxTcHk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9maW5kRWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluZEVsZW1lbnRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xuICAgICAgICB2YXIgaGl0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFNjcm9sbFNweS5fZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsc3B5ID0gU2Nyb2xsU3B5Ll9lbGVtZW50c1tpXTtcbiAgICAgICAgICB2YXIgY3VyclRvcCA9IHRvcCArIHNjcm9sbHNweS5vcHRpb25zLnNjcm9sbE9mZnNldCB8fCAyMDA7XG5cbiAgICAgICAgICBpZiAoc2Nyb2xsc3B5LiRlbC5oZWlnaHQoKSA+IDApIHtcbiAgICAgICAgICAgIHZhciBlbFRvcCA9IHNjcm9sbHNweS4kZWwub2Zmc2V0KCkudG9wLFxuICAgICAgICAgICAgICAgIGVsTGVmdCA9IHNjcm9sbHNweS4kZWwub2Zmc2V0KCkubGVmdCxcbiAgICAgICAgICAgICAgICBlbFJpZ2h0ID0gZWxMZWZ0ICsgc2Nyb2xsc3B5LiRlbC53aWR0aCgpLFxuICAgICAgICAgICAgICAgIGVsQm90dG9tID0gZWxUb3AgKyBzY3JvbGxzcHkuJGVsLmhlaWdodCgpO1xuXG4gICAgICAgICAgICB2YXIgaXNJbnRlcnNlY3QgPSAhKGVsTGVmdCA+IHJpZ2h0IHx8IGVsUmlnaHQgPCBsZWZ0IHx8IGVsVG9wID4gYm90dG9tIHx8IGVsQm90dG9tIDwgY3VyclRvcCk7XG5cbiAgICAgICAgICAgIGlmIChpc0ludGVyc2VjdCkge1xuICAgICAgICAgICAgICBoaXRzLnB1c2goc2Nyb2xsc3B5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2Nyb2xsU3B5O1xuICB9KENvbXBvbmVudCk7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKiBAdHlwZSB7QXJyYXkuPFNjcm9sbFNweT59XG4gICAqL1xuXG5cbiAgU2Nyb2xsU3B5Ll9lbGVtZW50cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICogQHR5cGUge0FycmF5LjxTY3JvbGxTcHk+fVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9lbGVtZW50c0luVmlldyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICogQHR5cGUge0FycmF5LjxjYXNoPn1cbiAgICovXG4gIFNjcm9sbFNweS5fdmlzaWJsZUVsZW1lbnRzID0gW107XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9jb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlcm9mIFNjcm9sbFNweVxuICAgKi9cbiAgU2Nyb2xsU3B5Ll9pbmNyZW1lbnQgPSAwO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBTY3JvbGxTcHlcbiAgICovXG4gIFNjcm9sbFNweS5fdGlja3MgPSAwO1xuXG4gIE0uU2Nyb2xsU3B5ID0gU2Nyb2xsU3B5O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoU2Nyb2xsU3B5LCAnc2Nyb2xsU3B5JywgJ01fU2Nyb2xsU3B5Jyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkYXRhOiB7fSwgLy8gQXV0b2NvbXBsZXRlIGRhdGEgc2V0XG4gICAgbGltaXQ6IEluZmluaXR5LCAvLyBMaW1pdCBvZiByZXN1bHRzIHRoZSBhdXRvY29tcGxldGUgc2hvd3NcbiAgICBvbkF1dG9jb21wbGV0ZTogbnVsbCwgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gYXV0b2NvbXBsZXRlZFxuICAgIG1pbkxlbmd0aDogMSwgLy8gTWluIGNoYXJhY3RlcnMgYmVmb3JlIGF1dG9jb21wbGV0ZSBzdGFydHNcbiAgICBzb3J0RnVuY3Rpb246IGZ1bmN0aW9uIChhLCBiLCBpbnB1dFN0cmluZykge1xuICAgICAgLy8gU29ydCBmdW5jdGlvbiBmb3Igc29ydGluZyBhdXRvY29tcGxldGUgcmVzdWx0c1xuICAgICAgcmV0dXJuIGEuaW5kZXhPZihpbnB1dFN0cmluZykgLSBiLmluZGV4T2YoaW5wdXRTdHJpbmcpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBBdXRvY29tcGxldGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudDEwKSB7XG4gICAgX2luaGVyaXRzKEF1dG9jb21wbGV0ZSwgX0NvbXBvbmVudDEwKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBBdXRvY29tcGxldGUgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBdXRvY29tcGxldGUoZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdXRvY29tcGxldGUpO1xuXG4gICAgICB2YXIgX3RoaXMzNyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBdXRvY29tcGxldGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBdXRvY29tcGxldGUpKS5jYWxsKHRoaXMsIEF1dG9jb21wbGV0ZSwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXMzNy5lbC5NX0F1dG9jb21wbGV0ZSA9IF90aGlzMzc7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAgICogQG1lbWJlciBBdXRvY29tcGxldGUjb3B0aW9uc1xuICAgICAgICogQHByb3Age051bWJlcn0gZHVyYXRpb25cbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGRpc3RcbiAgICAgICAqIEBwcm9wIHtudW1iZXJ9IHNoaWZ0XG4gICAgICAgKiBAcHJvcCB7bnVtYmVyfSBwYWRkaW5nXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZnVsbFdpZHRoXG4gICAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gaW5kaWNhdG9yc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IG5vV3JhcFxuICAgICAgICogQHByb3Age0Z1bmN0aW9ufSBvbkN5Y2xlVG9cbiAgICAgICAqL1xuICAgICAgX3RoaXMzNy5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9jb21wbGV0ZS5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICBfdGhpczM3LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgX3RoaXMzNy5jb3VudCA9IDA7XG4gICAgICBfdGhpczM3LmFjdGl2ZUluZGV4ID0gLTE7XG4gICAgICBfdGhpczM3Lm9sZFZhbDtcbiAgICAgIF90aGlzMzcuJGlucHV0RmllbGQgPSBfdGhpczM3LiRlbC5jbG9zZXN0KCcuaW5wdXQtZmllbGQnKTtcbiAgICAgIF90aGlzMzcuJGFjdGl2ZSA9ICQoKTtcbiAgICAgIF90aGlzMzcuX21vdXNlZG93biA9IGZhbHNlO1xuICAgICAgX3RoaXMzNy5fc2V0dXBEcm9wZG93bigpO1xuXG4gICAgICBfdGhpczM3Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczM3O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBdXRvY29tcGxldGUsIFt7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogVGVhcmRvd24gY29tcG9uZW50XG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9yZW1vdmVFdmVudEhhbmRsZXJzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuZWwuTV9BdXRvY29tcGxldGUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dEJsdXJCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Qmx1ci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXNCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd25Cb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnRCb3VuZCA9IHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2V1cEFuZFRvdWNoZW5kQm91bmQgPSB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVJbnB1dEJsdXJCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXNCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXNCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRCb3VuZCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZWRvd25BbmRUb3VjaHN0YXJ0Qm91bmQpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2V1cEFuZFRvdWNoZW5kQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9oYW5kbGVJbnB1dEJsdXJCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXNCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXNCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZUNvbnRhaW5lck1vdXNlZG93bkFuZFRvdWNoc3RhcnRCb3VuZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZXVwQW5kVG91Y2hlbmRCb3VuZCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVDb250YWluZXJNb3VzZWRvd25BbmRUb3VjaHN0YXJ0Qm91bmQpO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ29udGFpbmVyTW91c2V1cEFuZFRvdWNoZW5kQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cERyb3Bkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRHJvcGRvd24oKSB7XG4gICAgICAgIHZhciBfdGhpczM4ID0gdGhpcztcblxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlkID0gXCJhdXRvY29tcGxldGUtb3B0aW9ucy1cIiArIE0uZ3VpZCgpO1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5hZGRDbGFzcygnYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudCcpO1xuICAgICAgICB0aGlzLiRpbnB1dEZpZWxkLmFwcGVuZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcsIHRoaXMuY29udGFpbmVyLmlkKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duID0gTS5Ecm9wZG93bi5pbml0KHRoaXMuZWwsIHtcbiAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgIGNsb3NlT25DbGljazogZmFsc2UsXG4gICAgICAgICAgY292ZXJUcmlnZ2VyOiBmYWxzZSxcbiAgICAgICAgICBvbkl0ZW1DbGljazogZnVuY3Rpb24gKGl0ZW1FbCkge1xuICAgICAgICAgICAgX3RoaXMzOC5zZWxlY3RPcHRpb24oJChpdGVtRWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNrZXRjaHkgcmVtb3ZhbCBvZiBkcm9wZG93biBjbGljayBoYW5kbGVyXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRyb3Bkb3duLl9oYW5kbGVDbGlja0JvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgZHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVEcm9wZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVEcm9wZG93bigpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IEJsdXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRCbHVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlZG93bikge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLl9yZXNldEF1dG9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IEtleXVwIGFuZCBGb2N1c1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0S2V5dXBBbmRGb2N1c1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEtleXVwQW5kRm9jdXMoZSkge1xuICAgICAgICBpZiAoZS50eXBlID09PSAna2V5dXAnKSB7XG4gICAgICAgICAgQXV0b2NvbXBsZXRlLl9rZXlkb3duID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuZWwudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyBEb24ndCBjYXB0dXJlIGVudGVyIG9yIGFycm93IGtleSB1c2FnZS5cbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGlucHV0IGlzbid0IGVtcHR5XG4gICAgICAgIC8vIENoZWNrIGlmIGZvY3VzIHRyaWdnZXJlZCBieSB0YWJcbiAgICAgICAgaWYgKHRoaXMub2xkVmFsICE9PSB2YWwgJiYgKE0udGFiUHJlc3NlZCB8fCBlLnR5cGUgIT09ICdmb2N1cycpKSB7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgb2xkVmFsXG4gICAgICAgIHRoaXMub2xkVmFsID0gdmFsO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBJbnB1dCBLZXlkb3duXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRLZXlkb3duXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUlucHV0S2V5ZG93bihlKSB7XG4gICAgICAgIEF1dG9jb21wbGV0ZS5fa2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgLy8gQXJyb3cga2V5cyBhbmQgZW50ZXIga2V5IHVzYWdlXG4gICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlLFxuICAgICAgICAgICAgbGlFbGVtZW50ID0gdm9pZCAwLFxuICAgICAgICAgICAgbnVtSXRlbXMgPSAkKHRoaXMuY29udGFpbmVyKS5jaGlsZHJlbignbGknKS5sZW5ndGg7XG5cbiAgICAgICAgLy8gc2VsZWN0IGVsZW1lbnQgb24gRW50ZXJcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IE0ua2V5cy5FTlRFUiAmJiB0aGlzLmFjdGl2ZUluZGV4ID49IDApIHtcbiAgICAgICAgICBsaUVsZW1lbnQgPSAkKHRoaXMuY29udGFpbmVyKS5jaGlsZHJlbignbGknKS5lcSh0aGlzLmFjdGl2ZUluZGV4KTtcbiAgICAgICAgICBpZiAobGlFbGVtZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24obGlFbGVtZW50KTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FwdHVyZSB1cCBhbmQgZG93biBrZXlcbiAgICAgICAgaWYgKGtleUNvZGUgPT09IE0ua2V5cy5BUlJPV19VUCB8fCBrZXlDb2RlID09PSBNLmtleXMuQVJST1dfRE9XTikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmIChrZXlDb2RlID09PSBNLmtleXMuQVJST1dfVVAgJiYgdGhpcy5hY3RpdmVJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXgtLTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gTS5rZXlzLkFSUk9XX0RPV04gJiYgdGhpcy5hY3RpdmVJbmRleCA8IG51bUl0ZW1zIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy4kYWN0aXZlID0gJCh0aGlzLmNvbnRhaW5lcikuY2hpbGRyZW4oJ2xpJykuZXEodGhpcy5hY3RpdmVJbmRleCk7XG4gICAgICAgICAgICB0aGlzLiRhY3RpdmUuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBJbnB1dCBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRDbGljayhlKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDb250YWluZXIgTW91c2Vkb3duIGFuZCBUb3VjaHN0YXJ0XG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duQW5kVG91Y2hzdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDb250YWluZXJNb3VzZWRvd25BbmRUb3VjaHN0YXJ0KGUpIHtcbiAgICAgICAgdGhpcy5fbW91c2Vkb3duID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ29udGFpbmVyIE1vdXNldXAgYW5kIFRvdWNoZW5kXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ29udGFpbmVyTW91c2V1cEFuZFRvdWNoZW5kXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNvbnRhaW5lck1vdXNldXBBbmRUb3VjaGVuZChlKSB7XG4gICAgICAgIHRoaXMuX21vdXNlZG93biA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhpZ2hsaWdodCBwYXJ0aWFsIG1hdGNoXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGlnaGxpZ2h0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hpZ2hsaWdodChzdHJpbmcsICRlbCkge1xuICAgICAgICB2YXIgaW1nID0gJGVsLmZpbmQoJ2ltZycpO1xuICAgICAgICB2YXIgbWF0Y2hTdGFydCA9ICRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcnICsgc3RyaW5nLnRvTG93ZXJDYXNlKCkgKyAnJyksXG4gICAgICAgICAgICBtYXRjaEVuZCA9IG1hdGNoU3RhcnQgKyBzdHJpbmcubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgIGJlZm9yZU1hdGNoID0gJGVsLnRleHQoKS5zbGljZSgwLCBtYXRjaFN0YXJ0KSxcbiAgICAgICAgICAgIG1hdGNoVGV4dCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hTdGFydCwgbWF0Y2hFbmQgKyAxKSxcbiAgICAgICAgICAgIGFmdGVyTWF0Y2ggPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoRW5kICsgMSk7XG4gICAgICAgICRlbC5odG1sKFwiPHNwYW4+XCIgKyBiZWZvcmVNYXRjaCArIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIgKyBtYXRjaFRleHQgKyBcIjwvc3Bhbj5cIiArIGFmdGVyTWF0Y2ggKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgIGlmIChpbWcubGVuZ3RoKSB7XG4gICAgICAgICAgJGVsLnByZXBlbmQoaW1nKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IGN1cnJlbnQgZWxlbWVudCBwb3NpdGlvblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc2V0Q3VycmVudEVsZW1lbnRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVzZXRDdXJyZW50RWxlbWVudCgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLiRhY3RpdmUucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlc2V0IGF1dG9jb21wbGV0ZSBlbGVtZW50c1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3Jlc2V0QXV0b2NvbXBsZXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Jlc2V0QXV0b2NvbXBsZXRlKCkge1xuICAgICAgICAkKHRoaXMuY29udGFpbmVyKS5lbXB0eSgpO1xuICAgICAgICB0aGlzLl9yZXNldEN1cnJlbnRFbGVtZW50KCk7XG4gICAgICAgIHRoaXMub2xkVmFsID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VsZWN0IGF1dG9jb21wbGV0ZSBvcHRpb25cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgIEF1dG9jb21wbGV0ZSBvcHRpb24gbGlzdCBpdGVtIGVsZW1lbnRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNlbGVjdE9wdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNlbGVjdE9wdGlvbihlbCkge1xuICAgICAgICB2YXIgdGV4dCA9IGVsLnRleHQoKS50cmltKCk7XG4gICAgICAgIHRoaXMuZWwudmFsdWUgPSB0ZXh0O1xuICAgICAgICB0aGlzLiRlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgdGhpcy5fcmVzZXRBdXRvY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBvbkF1dG9jb21wbGV0ZSBjYWxsYmFjay5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25BdXRvY29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25BdXRvY29tcGxldGUuY2FsbCh0aGlzLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbmRlciBkcm9wZG93biBjb250ZW50XG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAgZGF0YSBzZXRcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWwgIGN1cnJlbnQgaW5wdXQgdmFsdWVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW5kZXJEcm9wZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJEcm9wZG93bihkYXRhLCB2YWwpIHtcbiAgICAgICAgdmFyIF90aGlzMzkgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0QXV0b2NvbXBsZXRlKCk7XG5cbiAgICAgICAgdmFyIG1hdGNoaW5nRGF0YSA9IFtdO1xuXG4gICAgICAgIC8vIEdhdGhlciBhbGwgbWF0Y2hpbmcgZGF0YVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgICAgICAgLy8gQnJlYWsgaWYgcGFzdCBsaW1pdFxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnQgPj0gdGhpcy5vcHRpb25zLmxpbWl0KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZW50cnkgPSB7XG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFba2V5XSxcbiAgICAgICAgICAgICAga2V5OiBrZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBtYXRjaGluZ0RhdGEucHVzaChlbnRyeSk7XG5cbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb3J0XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc29ydEZ1bmN0aW9uKSB7XG4gICAgICAgICAgdmFyIHNvcnRGdW5jdGlvbkJvdW5kID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczM5Lm9wdGlvbnMuc29ydEZ1bmN0aW9uKGEua2V5LnRvTG93ZXJDYXNlKCksIGIua2V5LnRvTG93ZXJDYXNlKCksIHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIG1hdGNoaW5nRGF0YS5zb3J0KHNvcnRGdW5jdGlvbkJvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hdGNoaW5nRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBfZW50cnkgPSBtYXRjaGluZ0RhdGFbaV07XG4gICAgICAgICAgdmFyICRhdXRvY29tcGxldGVPcHRpb24gPSAkKCc8bGk+PC9saT4nKTtcbiAgICAgICAgICBpZiAoISFfZW50cnkuZGF0YSkge1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoXCI8aW1nIHNyYz1cXFwiXCIgKyBfZW50cnkuZGF0YSArIFwiXFxcIiBjbGFzcz1cXFwicmlnaHQgY2lyY2xlXFxcIj48c3Bhbj5cIiArIF9lbnRyeS5rZXkgKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8c3Bhbj4nICsgX2VudHJ5LmtleSArICc8L3NwYW4+Jyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJCh0aGlzLmNvbnRhaW5lcikuYXBwZW5kKCRhdXRvY29tcGxldGVPcHRpb24pO1xuICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodCh2YWwsICRhdXRvY29tcGxldGVPcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBBdXRvY29tcGxldGUgRHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5lbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuX3Jlc2V0QXV0b2NvbXBsZXRlKCk7XG5cbiAgICAgICAgaWYgKHZhbC5sZW5ndGggPj0gdGhpcy5vcHRpb25zLm1pbkxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJEcm9wZG93bih0aGlzLm9wdGlvbnMuZGF0YSwgdmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9wZW4gZHJvcGRvd25cbiAgICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMuZHJvcGRvd24ub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlY2FsY3VsYXRlIGRyb3Bkb3duIHdoZW4gaXRzIGFscmVhZHkgb3BlblxuICAgICAgICAgIHRoaXMuZHJvcGRvd24ucmVjYWxjdWxhdGVEaW1lbnNpb25zKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBBdXRvY29tcGxldGUgRHJvcGRvd25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGRhdGUgRGF0YVxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInVwZGF0ZURhdGFcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIHZhbCA9IHRoaXMuZWwudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zLmRhdGEgPSBkYXRhO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHRoaXMuX3JlbmRlckRyb3Bkb3duKGRhdGEsIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoQXV0b2NvbXBsZXRlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQXV0b2NvbXBsZXRlKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fQXV0b2NvbXBsZXRlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEF1dG9jb21wbGV0ZTtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBBdXRvY29tcGxldGVcbiAgICovXG5cblxuICBBdXRvY29tcGxldGUuX2tleWRvd24gPSBmYWxzZTtcblxuICBNLkF1dG9jb21wbGV0ZSA9IEF1dG9jb21wbGV0ZTtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKEF1dG9jb21wbGV0ZSwgJ2F1dG9jb21wbGV0ZScsICdNX0F1dG9jb21wbGV0ZScpO1xuICB9XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGxhYmVscyBvZiB0ZXh0IGZpZWxkc1xuICBNLnVwZGF0ZVRleHRGaWVsZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGlucHV0X3NlbGVjdG9yID0gJ2lucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT11cmxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSwgaW5wdXRbdHlwZT1zZWFyY2hdLCBpbnB1dFt0eXBlPWRhdGVdLCBpbnB1dFt0eXBlPXRpbWVdLCB0ZXh0YXJlYSc7XG4gICAgJChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICBpZiAoZWxlbWVudC52YWx1ZS5sZW5ndGggPiAwIHx8ICQoZWxlbWVudCkuaXMoJzpmb2N1cycpIHx8IGVsZW1lbnQuYXV0b2ZvY3VzIHx8ICR0aGlzLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IG51bGwpIHtcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnZhbGlkaXR5KSB7XG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnLCBlbGVtZW50LnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBNLnZhbGlkYXRlX2ZpZWxkID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHZhciBoYXNMZW5ndGggPSBvYmplY3QuYXR0cignZGF0YS1sZW5ndGgnKSAhPT0gbnVsbDtcbiAgICB2YXIgbGVuQXR0ciA9IHBhcnNlSW50KG9iamVjdC5hdHRyKCdkYXRhLWxlbmd0aCcpKTtcbiAgICB2YXIgbGVuID0gb2JqZWN0WzBdLnZhbHVlLmxlbmd0aDtcblxuICAgIGlmIChsZW4gPT09IDAgJiYgb2JqZWN0WzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSBmYWxzZSAmJiAhb2JqZWN0LmlzKCc6cmVxdWlyZWQnKSkge1xuICAgICAgaWYgKG9iamVjdC5oYXNDbGFzcygndmFsaWRhdGUnKSkge1xuICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgIC8vIENoZWNrIGZvciBjaGFyYWN0ZXIgY291bnRlciBhdHRyaWJ1dGVzXG4gICAgICAgIGlmIChvYmplY3QuaXMoJzp2YWxpZCcpICYmIGhhc0xlbmd0aCAmJiBsZW4gPD0gbGVuQXR0ciB8fCBvYmplY3QuaXMoJzp2YWxpZCcpICYmICFoYXNMZW5ndGgpIHtcbiAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICBvYmplY3QuYWRkQ2xhc3MoJ3ZhbGlkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIE0udGV4dGFyZWFBdXRvUmVzaXplID0gZnVuY3Rpb24gKCR0ZXh0YXJlYSkge1xuICAgIC8vIFdyYXAgaWYgbmF0aXZlIGVsZW1lbnRcbiAgICBpZiAoJHRleHRhcmVhIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgJHRleHRhcmVhID0gJCgkdGV4dGFyZWEpO1xuICAgIH1cblxuICAgIGlmICghJHRleHRhcmVhLmxlbmd0aCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gdGV4dGFyZWEgZWxlbWVudCBmb3VuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRleHRhcmVhIEF1dG8gUmVzaXplXG4gICAgdmFyIGhpZGRlbkRpdiA9ICQoJy5oaWRkZW5kaXYnKS5maXJzdCgpO1xuICAgIGlmICghaGlkZGVuRGl2Lmxlbmd0aCkge1xuICAgICAgaGlkZGVuRGl2ID0gJCgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKTtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgZm9udCBwcm9wZXJ0aWVzIG9mIGhpZGRlbkRpdlxuICAgIHZhciBmb250RmFtaWx5ID0gJHRleHRhcmVhLmNzcygnZm9udC1mYW1pbHknKTtcbiAgICB2YXIgZm9udFNpemUgPSAkdGV4dGFyZWEuY3NzKCdmb250LXNpemUnKTtcbiAgICB2YXIgbGluZUhlaWdodCA9ICR0ZXh0YXJlYS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XG5cbiAgICAvLyBGaXJlZm94IGNhbid0IGhhbmRsZSBwYWRkaW5nIHNob3J0aGFuZC5cbiAgICB2YXIgcGFkZGluZ1RvcCA9ICR0ZXh0YXJlYS5jc3MoJ3BhZGRpbmctdG9wJyk7XG4gICAgdmFyIHBhZGRpbmdSaWdodCA9ICR0ZXh0YXJlYS5jc3MoJ3BhZGRpbmctcmlnaHQnKTtcbiAgICB2YXIgcGFkZGluZ0JvdHRvbSA9ICR0ZXh0YXJlYS5jc3MoJ3BhZGRpbmctYm90dG9tJyk7XG4gICAgdmFyIHBhZGRpbmdMZWZ0ID0gJHRleHRhcmVhLmNzcygncGFkZGluZy1sZWZ0Jyk7XG5cbiAgICBpZiAoZm9udFNpemUpIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKTtcbiAgICB9XG4gICAgaWYgKGZvbnRGYW1pbHkpIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSk7XG4gICAgfVxuICAgIGlmIChsaW5lSGVpZ2h0KSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCdsaW5lLWhlaWdodCcsIGxpbmVIZWlnaHQpO1xuICAgIH1cbiAgICBpZiAocGFkZGluZ1RvcCkge1xuICAgICAgaGlkZGVuRGl2LmNzcygncGFkZGluZy10b3AnLCBwYWRkaW5nVG9wKTtcbiAgICB9XG4gICAgaWYgKHBhZGRpbmdSaWdodCkge1xuICAgICAgaGlkZGVuRGl2LmNzcygncGFkZGluZy1yaWdodCcsIHBhZGRpbmdSaWdodCk7XG4gICAgfVxuICAgIGlmIChwYWRkaW5nQm90dG9tKSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCdwYWRkaW5nLWJvdHRvbScsIHBhZGRpbmdCb3R0b20pO1xuICAgIH1cbiAgICBpZiAocGFkZGluZ0xlZnQpIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ3BhZGRpbmctbGVmdCcsIHBhZGRpbmdMZWZ0KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgb3JpZ2luYWwtaGVpZ2h0LCBpZiBub25lXG4gICAgaWYgKCEkdGV4dGFyZWEuZGF0YSgnb3JpZ2luYWwtaGVpZ2h0JykpIHtcbiAgICAgICR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnLCAkdGV4dGFyZWEuaGVpZ2h0KCkpO1xuICAgIH1cblxuICAgIGlmICgkdGV4dGFyZWEuYXR0cignd3JhcCcpID09PSAnb2ZmJykge1xuICAgICAgaGlkZGVuRGl2LmNzcygnb3ZlcmZsb3ctd3JhcCcsICdub3JtYWwnKS5jc3MoJ3doaXRlLXNwYWNlJywgJ3ByZScpO1xuICAgIH1cblxuICAgIGhpZGRlbkRpdi50ZXh0KCR0ZXh0YXJlYVswXS52YWx1ZSArICdcXG4nKTtcbiAgICB2YXIgY29udGVudCA9IGhpZGRlbkRpdi5odG1sKCkucmVwbGFjZSgvXFxuL2csICc8YnI+Jyk7XG4gICAgaGlkZGVuRGl2Lmh0bWwoY29udGVudCk7XG5cbiAgICAvLyBXaGVuIHRleHRhcmVhIGlzIGhpZGRlbiwgd2lkdGggZ29lcyBjcmF6eS5cbiAgICAvLyBBcHByb3hpbWF0ZSB3aXRoIGhhbGYgb2Ygd2luZG93IHNpemVcblxuICAgIGlmICgkdGV4dGFyZWFbMF0ub2Zmc2V0V2lkdGggPiAwICYmICR0ZXh0YXJlYVswXS5vZmZzZXRIZWlnaHQgPiAwKSB7XG4gICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICR0ZXh0YXJlYS53aWR0aCgpICsgJ3B4Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGRlbkRpdi5jc3MoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGggLyAyICsgJ3B4Jyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzaXplIGlmIHRoZSBuZXcgaGVpZ2h0IGlzIGdyZWF0ZXIgdGhhbiB0aGVcbiAgICAgKiBvcmlnaW5hbCBoZWlnaHQgb2YgdGhlIHRleHRhcmVhXG4gICAgICovXG4gICAgaWYgKCR0ZXh0YXJlYS5kYXRhKCdvcmlnaW5hbC1oZWlnaHQnKSA8PSBoaWRkZW5EaXYuaW5uZXJIZWlnaHQoKSkge1xuICAgICAgJHRleHRhcmVhLmNzcygnaGVpZ2h0JywgaGlkZGVuRGl2LmlubmVySGVpZ2h0KCkgKyAncHgnKTtcbiAgICB9IGVsc2UgaWYgKCR0ZXh0YXJlYVswXS52YWx1ZS5sZW5ndGggPCAkdGV4dGFyZWEuZGF0YSgncHJldmlvdXMtbGVuZ3RoJykpIHtcbiAgICAgIC8qKlxuICAgICAgICogSW4gY2FzZSB0aGUgbmV3IGhlaWdodCBpcyBsZXNzIHRoYW4gb3JpZ2luYWwgaGVpZ2h0LCBpdFxuICAgICAgICogbWVhbnMgdGhlIHRleHRhcmVhIGhhcyBsZXNzIHRleHQgdGhhbiBiZWZvcmVcbiAgICAgICAqIFNvIHdlIHNldCB0aGUgaGVpZ2h0IHRvIHRoZSBvcmlnaW5hbCBvbmVcbiAgICAgICAqL1xuICAgICAgJHRleHRhcmVhLmNzcygnaGVpZ2h0JywgJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcpICsgJ3B4Jyk7XG4gICAgfVxuICAgICR0ZXh0YXJlYS5kYXRhKCdwcmV2aW91cy1sZW5ndGgnLCAkdGV4dGFyZWFbMF0udmFsdWUubGVuZ3RoKTtcbiAgfTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGV4dCBiYXNlZCBpbnB1dHNcbiAgICB2YXIgaW5wdXRfc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXVybF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLCBpbnB1dFt0eXBlPXNlYXJjaF0sIGlucHV0W3R5cGU9ZGF0ZV0sIGlucHV0W3R5cGU9dGltZV0sIHRleHRhcmVhJztcblxuICAgIC8vIEFkZCBhY3RpdmUgaWYgZm9ybSBhdXRvIGNvbXBsZXRlXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggIT09IDAgfHwgJCh0aGlzKS5hdHRyKCdwbGFjZWhvbGRlcicpICE9PSBudWxsKSB7XG4gICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgICAgTS52YWxpZGF0ZV9maWVsZCgkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIC8vIEFkZCBhY3RpdmUgaWYgaW5wdXQgZWxlbWVudCBoYXMgYmVlbiBwcmUtcG9wdWxhdGVkIG9uIGRvY3VtZW50IHJlYWR5XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgTS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBIVE1MIERPTSBGT1JNIFJFU0VUIGhhbmRsaW5nXG4gICAgJChkb2N1bWVudCkub24oJ3Jlc2V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBmb3JtUmVzZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgIGlmIChmb3JtUmVzZXQuaXMoJ2Zvcm0nKSkge1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgc2VsZWN0IChhZnRlciBuYXRpdmUgcmVzZXQpXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvcm1SZXNldC5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGluaXRpYWxpemVkXG4gICAgICAgICAgICBpZiAodGhpcy5NX0Zvcm1TZWxlY3QpIHtcbiAgICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYWN0aXZlIHdoZW4gZWxlbWVudCBoYXMgZm9jdXNcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKGlucHV0X3NlbGVjdG9yKSkge1xuICAgICAgICAkKGUudGFyZ2V0KS5zaWJsaW5ncygnbGFiZWwsIC5wcmVmaXgnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWN0aXZlIHdoZW4gZWxlbWVudCBpcyBibHVycmVkXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyICRpbnB1dEVsZW1lbnQgPSAkKGUudGFyZ2V0KTtcbiAgICAgIGlmICgkaW5wdXRFbGVtZW50LmlzKGlucHV0X3NlbGVjdG9yKSkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSAnLnByZWZpeCc7XG5cbiAgICAgICAgaWYgKCRpbnB1dEVsZW1lbnRbMF0udmFsdWUubGVuZ3RoID09PSAwICYmICRpbnB1dEVsZW1lbnRbMF0udmFsaWRpdHkuYmFkSW5wdXQgIT09IHRydWUgJiYgJGlucHV0RWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpID09PSBudWxsKSB7XG4gICAgICAgICAgc2VsZWN0b3IgKz0gJywgbGFiZWwnO1xuICAgICAgICB9XG4gICAgICAgICRpbnB1dEVsZW1lbnQuc2libGluZ3Moc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgTS52YWxpZGF0ZV9maWVsZCgkaW5wdXRFbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LCB0cnVlKTtcblxuICAgIC8vIFJhZGlvIGFuZCBDaGVja2JveCBmb2N1cyBjbGFzc1xuICAgIHZhciByYWRpb19jaGVja2JveCA9ICdpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0nO1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHJhZGlvX2NoZWNrYm94LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gVEFCLCBjaGVjayBpZiB0YWJiaW5nIHRvIHJhZGlvIG9yIGNoZWNrYm94LlxuICAgICAgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5UQUIpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGFiYmVkJyk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLm9uZSgnYmx1cicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGFiYmVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdGV4dF9hcmVhX3NlbGVjdG9yID0gJy5tYXRlcmlhbGl6ZS10ZXh0YXJlYSc7XG4gICAgJCh0ZXh0X2FyZWFfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0ZXh0YXJlYSA9ICQodGhpcyk7XG4gICAgICAvKipcbiAgICAgICAqIFJlc2l6ZSB0ZXh0YXJlYSBvbiBkb2N1bWVudCBsb2FkIGFmdGVyIHN0b3JpbmdcbiAgICAgICAqIHRoZSBvcmlnaW5hbCBoZWlnaHQgYW5kIHRoZSBvcmlnaW5hbCBsZW5ndGhcbiAgICAgICAqL1xuICAgICAgJHRleHRhcmVhLmRhdGEoJ29yaWdpbmFsLWhlaWdodCcsICR0ZXh0YXJlYS5oZWlnaHQoKSk7XG4gICAgICAkdGV4dGFyZWEuZGF0YSgncHJldmlvdXMtbGVuZ3RoJywgdGhpcy52YWx1ZS5sZW5ndGgpO1xuICAgICAgTS50ZXh0YXJlYUF1dG9SZXNpemUoJHRleHRhcmVhKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRleHRfYXJlYV9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgTS50ZXh0YXJlYUF1dG9SZXNpemUoJCh0aGlzKSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkub24oJ2tleWRvd24nLCB0ZXh0X2FyZWFfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIE0udGV4dGFyZWFBdXRvUmVzaXplKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gRmlsZSBJbnB1dCBQYXRoXG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcuZmlsZS1maWVsZCBpbnB1dFt0eXBlPVwiZmlsZVwiXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmaWxlX2ZpZWxkID0gJCh0aGlzKS5jbG9zZXN0KCcuZmlsZS1maWVsZCcpO1xuICAgICAgdmFyIHBhdGhfaW5wdXQgPSBmaWxlX2ZpZWxkLmZpbmQoJ2lucHV0LmZpbGUtcGF0aCcpO1xuICAgICAgdmFyIGZpbGVzID0gJCh0aGlzKVswXS5maWxlcztcbiAgICAgIHZhciBmaWxlX25hbWVzID0gW107XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVfbmFtZXMucHVzaChmaWxlc1tpXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIHBhdGhfaW5wdXRbMF0udmFsdWUgPSBmaWxlX25hbWVzLmpvaW4oJywgJyk7XG4gICAgICBwYXRoX2lucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH0pO1xuICB9KTsgLy8gRW5kIG9mICQoZG9jdW1lbnQpLnJlYWR5XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgaW5kaWNhdG9yczogdHJ1ZSxcbiAgICBoZWlnaHQ6IDQwMCxcbiAgICBkdXJhdGlvbjogNTAwLFxuICAgIGludGVydmFsOiA2MDAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgU2xpZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQxMSkge1xuICAgIF9pbmhlcml0cyhTbGlkZXIsIF9Db21wb25lbnQxMSk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgU2xpZGVyIGluc3RhbmNlIGFuZCBzZXQgdXAgb3ZlcmxheVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNsaWRlcihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNsaWRlcik7XG5cbiAgICAgIHZhciBfdGhpczQwID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNsaWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNsaWRlcikpLmNhbGwodGhpcywgU2xpZGVyLCBlbCwgb3B0aW9ucykpO1xuXG4gICAgICBfdGhpczQwLmVsLk1fU2xpZGVyID0gX3RoaXM0MDtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgU2xpZGVyI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbaW5kaWNhdG9ycz10cnVlXSAtIFNob3cgaW5kaWNhdG9yc1xuICAgICAgICogQHByb3Age051bWJlcn0gW2hlaWdodD00MDBdIC0gaGVpZ2h0IG9mIHNsaWRlclxuICAgICAgICogQHByb3Age051bWJlcn0gW2R1cmF0aW9uPTUwMF0gLSBMZW5ndGggaW4gbXMgb2Ygc2xpZGUgdHJhbnNpdGlvblxuICAgICAgICogQHByb3Age051bWJlcn0gW2ludGVydmFsPTYwMDBdIC0gTGVuZ3RoIGluIG1zIG9mIHNsaWRlIGludGVydmFsXG4gICAgICAgKi9cbiAgICAgIF90aGlzNDAub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBTbGlkZXIuZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAvLyBzZXR1cFxuICAgICAgX3RoaXM0MC4kc2xpZGVyID0gX3RoaXM0MC4kZWwuZmluZCgnLnNsaWRlcycpO1xuICAgICAgX3RoaXM0MC4kc2xpZGVzID0gX3RoaXM0MC4kc2xpZGVyLmNoaWxkcmVuKCdsaScpO1xuICAgICAgX3RoaXM0MC5hY3RpdmVJbmRleCA9IF90aGlzNDAuJHNsaWRlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICQoaXRlbSkuaGFzQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSkuZmlyc3QoKS5pbmRleCgpO1xuICAgICAgaWYgKF90aGlzNDAuYWN0aXZlSW5kZXggIT0gLTEpIHtcbiAgICAgICAgX3RoaXM0MC4kYWN0aXZlID0gX3RoaXM0MC4kc2xpZGVzLmVxKF90aGlzNDAuYWN0aXZlSW5kZXgpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczQwLl9zZXRTbGlkZXJIZWlnaHQoKTtcblxuICAgICAgLy8gU2V0IGluaXRpYWwgcG9zaXRpb25zIG9mIGNhcHRpb25zXG4gICAgICBfdGhpczQwLiRzbGlkZXMuZmluZCgnLmNhcHRpb24nKS5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBfdGhpczQwLl9hbmltYXRlQ2FwdGlvbkluKGVsLCAwKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBNb3ZlIGltZyBzcmMgaW50byBiYWNrZ3JvdW5kLWltYWdlXG4gICAgICBfdGhpczQwLiRzbGlkZXMuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIHBsYWNlaG9sZGVyQmFzZTY0ID0gJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFCQVAvLy93QUFBQ0g1QkFFS0FBRUFMQUFBQUFBQkFBRUFBQUlDVEFFQU93PT0nO1xuICAgICAgICBpZiAoJChlbCkuYXR0cignc3JjJykgIT09IHBsYWNlaG9sZGVyQmFzZTY0KSB7XG4gICAgICAgICAgJChlbCkuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybChcIicgKyAkKGVsKS5hdHRyKCdzcmMnKSArICdcIiknKTtcbiAgICAgICAgICAkKGVsKS5hdHRyKCdzcmMnLCBwbGFjZWhvbGRlckJhc2U2NCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfdGhpczQwLl9zZXR1cEluZGljYXRvcnMoKTtcblxuICAgICAgLy8gU2hvdyBhY3RpdmUgc2xpZGVcbiAgICAgIGlmIChfdGhpczQwLiRhY3RpdmUpIHtcbiAgICAgICAgX3RoaXM0MC4kYWN0aXZlLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXM0MC4kc2xpZGVzLmZpcnN0KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiBfdGhpczQwLiRzbGlkZXMuZmlyc3QoKVswXSxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiBfdGhpczQwLm9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzNDAuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgICBfdGhpczQwLiRhY3RpdmUgPSBfdGhpczQwLiRzbGlkZXMuZXEoX3RoaXM0MC5hY3RpdmVJbmRleCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGluZGljYXRvcnNcbiAgICAgICAgaWYgKF90aGlzNDAub3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgX3RoaXM0MC4kaW5kaWNhdG9ycy5lcShfdGhpczQwLmFjdGl2ZUluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRqdXN0IGhlaWdodCB0byBjdXJyZW50IHNsaWRlXG4gICAgICBfdGhpczQwLiRhY3RpdmUuZmluZCgnaW1nJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgYW5pbSh7XG4gICAgICAgICAgdGFyZ2V0czogX3RoaXM0MC4kYWN0aXZlLmZpbmQoJy5jYXB0aW9uJylbMF0sXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IF90aGlzNDAub3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgX3RoaXM0MC5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIC8vIGF1dG8gc2Nyb2xsXG4gICAgICBfdGhpczQwLnN0YXJ0KCk7XG4gICAgICByZXR1cm4gX3RoaXM0MDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB0aGlzLl9yZW1vdmVJbmRpY2F0b3JzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5lbC5NX1NsaWRlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczQxID0gdGhpcztcblxuICAgICAgICB0aGlzLl9oYW5kbGVJbnRlcnZhbEJvdW5kID0gdGhpcy5faGFuZGxlSW50ZXJ2YWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5kaWNhdG9yQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUluZGljYXRvckNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfdGhpczQxLl9oYW5kbGVJbmRpY2F0b3JDbGlja0JvdW5kKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNDIgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM0Mi5faGFuZGxlSW5kaWNhdG9yQ2xpY2tCb3VuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgaW5kaWNhdG9yIGNsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5kaWNhdG9yQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5kaWNhdG9yQ2xpY2soZSkge1xuICAgICAgICB2YXIgY3VyckluZGV4ID0gJChlLnRhcmdldCkuaW5kZXgoKTtcbiAgICAgICAgdGhpcy5zZXQoY3VyckluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW50ZXJ2YWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnRlcnZhbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnRlcnZhbCgpIHtcbiAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gdGhpcy4kc2xpZGVyLmZpbmQoJy5hY3RpdmUnKS5pbmRleCgpO1xuICAgICAgICBpZiAodGhpcy4kc2xpZGVzLmxlbmd0aCA9PT0gbmV3QWN0aXZlSW5kZXggKyAxKSBuZXdBY3RpdmVJbmRleCA9IDA7XG4gICAgICAgIC8vIGxvb3AgdG8gc3RhcnRcbiAgICAgICAgZWxzZSBuZXdBY3RpdmVJbmRleCArPSAxO1xuXG4gICAgICAgIHRoaXMuc2V0KG5ld0FjdGl2ZUluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBbmltYXRlIGluIGNhcHRpb25cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gY2FwdGlvblxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUNhcHRpb25JblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hbmltYXRlQ2FwdGlvbkluKGNhcHRpb24sIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBhbmltT3B0aW9ucyA9IHtcbiAgICAgICAgICB0YXJnZXRzOiBjYXB0aW9uLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkKGNhcHRpb24pLmhhc0NsYXNzKCdjZW50ZXItYWxpZ24nKSkge1xuICAgICAgICAgIGFuaW1PcHRpb25zLnRyYW5zbGF0ZVkgPSAtMTAwO1xuICAgICAgICB9IGVsc2UgaWYgKCQoY2FwdGlvbikuaGFzQ2xhc3MoJ3JpZ2h0LWFsaWduJykpIHtcbiAgICAgICAgICBhbmltT3B0aW9ucy50cmFuc2xhdGVYID0gMTAwO1xuICAgICAgICB9IGVsc2UgaWYgKCQoY2FwdGlvbikuaGFzQ2xhc3MoJ2xlZnQtYWxpZ24nKSkge1xuICAgICAgICAgIGFuaW1PcHRpb25zLnRyYW5zbGF0ZVggPSAtMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbShhbmltT3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IGhlaWdodCBvZiBzbGlkZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRTbGlkZXJIZWlnaHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0U2xpZGVySGVpZ2h0KCkge1xuICAgICAgICAvLyBJZiBmdWxsc2NyZWVuLCBkbyBub3RoaW5nXG4gICAgICAgIGlmICghdGhpcy4kZWwuaGFzQ2xhc3MoJ2Z1bGxzY3JlZW4nKSkge1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycykge1xuICAgICAgICAgICAgLy8gQWRkIGhlaWdodCBpZiBpbmRpY2F0b3JzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICB0aGlzLiRlbC5jc3MoJ2hlaWdodCcsIHRoaXMub3B0aW9ucy5oZWlnaHQgKyA0MCArICdweCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5jc3MoJ2hlaWdodCcsIHRoaXMub3B0aW9ucy5oZWlnaHQgKyAncHgnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy4kc2xpZGVyLmNzcygnaGVpZ2h0JywgdGhpcy5vcHRpb25zLmhlaWdodCArICdweCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgaW5kaWNhdG9yc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwSW5kaWNhdG9yc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEluZGljYXRvcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczQzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluZGljYXRvcnMpIHtcbiAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzID0gJCgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyk7XG4gICAgICAgICAgdGhpcy4kc2xpZGVzLmVhY2goZnVuY3Rpb24gKGVsLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyICRpbmRpY2F0b3IgPSAkKCc8bGkgY2xhc3M9XCJpbmRpY2F0b3ItaXRlbVwiPjwvbGk+Jyk7XG4gICAgICAgICAgICBfdGhpczQzLiRpbmRpY2F0b3JzLmFwcGVuZCgkaW5kaWNhdG9yWzBdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kaW5kaWNhdG9yc1swXSk7XG4gICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycyA9IHRoaXMuJGluZGljYXRvcnMuY2hpbGRyZW4oJ2xpLmluZGljYXRvci1pdGVtJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgaW5kaWNhdG9yc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUluZGljYXRvcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlSW5kaWNhdG9ycygpIHtcbiAgICAgICAgdGhpcy4kZWwuZmluZCgndWwuaW5kaWNhdG9ycycpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEN5Y2xlIHRvIG50aCBpdGVtXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInNldFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXM0NCA9IHRoaXM7XG5cbiAgICAgICAgLy8gV3JhcCBhcm91bmQgaW5kaWNlcy5cbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuJHNsaWRlcy5sZW5ndGgpIGluZGV4ID0gMDtlbHNlIGlmIChpbmRleCA8IDApIGluZGV4ID0gdGhpcy4kc2xpZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgLy8gT25seSBkbyBpZiBpbmRleCBjaGFuZ2VzXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ICE9IGluZGV4KSB7XG4gICAgICAgICAgdGhpcy4kYWN0aXZlID0gdGhpcy4kc2xpZGVzLmVxKHRoaXMuYWN0aXZlSW5kZXgpO1xuICAgICAgICAgIHZhciAkY2FwdGlvbiA9IHRoaXMuJGFjdGl2ZS5maW5kKCcuY2FwdGlvbicpO1xuICAgICAgICAgIHRoaXMuJGFjdGl2ZS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuJGFjdGl2ZVswXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXM0NC4kc2xpZGVzLm5vdCgnLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRzOiBlbCxcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiAwLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZUNhcHRpb25JbigkY2FwdGlvblswXSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKTtcblxuICAgICAgICAgIC8vIFVwZGF0ZSBpbmRpY2F0b3JzXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzLmVxKHRoaXMuYWN0aXZlSW5kZXgpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMuZXEoaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuJHNsaWRlcy5lcShpbmRleClbMF0sXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IHRoaXMub3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYW5pbSh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLiRzbGlkZXMuZXEoaW5kZXgpLmZpbmQoJy5jYXB0aW9uJylbMF0sXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogMCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5vcHRpb25zLmR1cmF0aW9uLFxuICAgICAgICAgICAgZGVsYXk6IHRoaXMub3B0aW9ucy5kdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFkJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy4kc2xpZGVzLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xuXG4gICAgICAgICAgLy8gUmVzZXQgaW50ZXJ2YWxcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBQYXVzZSBzbGlkZXIgaW50ZXJ2YWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcInBhdXNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU3RhcnQgc2xpZGVyIGludGVydmFsXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5faGFuZGxlSW50ZXJ2YWxCb3VuZCwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICsgdGhpcy5vcHRpb25zLmludGVydmFsKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNb3ZlIHRvIG5leHQgc2xpZGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm5leHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICB2YXIgbmV3SW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcblxuICAgICAgICAvLyBXcmFwIGFyb3VuZCBpbmRpY2VzLlxuICAgICAgICBpZiAobmV3SW5kZXggPj0gdGhpcy4kc2xpZGVzLmxlbmd0aCkgbmV3SW5kZXggPSAwO2Vsc2UgaWYgKG5ld0luZGV4IDwgMCkgbmV3SW5kZXggPSB0aGlzLiRzbGlkZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLnNldChuZXdJbmRleCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTW92ZSB0byBwcmV2aW91cyBzbGlkZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicHJldlwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXYoKSB7XG4gICAgICAgIHZhciBuZXdJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggLSAxO1xuXG4gICAgICAgIC8vIFdyYXAgYXJvdW5kIGluZGljZXMuXG4gICAgICAgIGlmIChuZXdJbmRleCA+PSB0aGlzLiRzbGlkZXMubGVuZ3RoKSBuZXdJbmRleCA9IDA7ZWxzZSBpZiAobmV3SW5kZXggPCAwKSBuZXdJbmRleCA9IHRoaXMuJHNsaWRlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuc2V0KG5ld0luZGV4KTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVyKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fU2xpZGVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNsaWRlcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uU2xpZGVyID0gU2xpZGVyO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoU2xpZGVyLCAnc2xpZGVyJywgJ01fU2xpZGVyJyk7XG4gIH1cbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmNhcmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICgkKHRoaXMpLmNoaWxkcmVuKCcuY2FyZC1yZXZlYWwnKS5sZW5ndGgpIHtcbiAgICAgIHZhciAkY2FyZCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXJkJyk7XG4gICAgICBpZiAoJGNhcmQuZGF0YSgnaW5pdGlhbE92ZXJmbG93JykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkY2FyZC5kYXRhKCdpbml0aWFsT3ZlcmZsb3cnLCAkY2FyZC5jc3MoJ292ZXJmbG93JykgPT09IHVuZGVmaW5lZCA/ICcnIDogJGNhcmQuY3NzKCdvdmVyZmxvdycpKTtcbiAgICAgIH1cbiAgICAgIHZhciAkY2FyZFJldmVhbCA9ICQodGhpcykuZmluZCgnLmNhcmQtcmV2ZWFsJyk7XG4gICAgICBpZiAoJChlLnRhcmdldCkuaXMoJCgnLmNhcmQtcmV2ZWFsIC5jYXJkLXRpdGxlJykpIHx8ICQoZS50YXJnZXQpLmlzKCQoJy5jYXJkLXJldmVhbCAuY2FyZC10aXRsZSBpJykpKSB7XG4gICAgICAgIC8vIE1ha2UgUmV2ZWFsIGFuaW1hdGUgZG93biBhbmQgZGlzcGxheSBub25lXG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6ICRjYXJkUmV2ZWFsWzBdLFxuICAgICAgICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDIyNSxcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGFuaW0pIHtcbiAgICAgICAgICAgIHZhciBlbCA9IGFuaW0uYW5pbWF0YWJsZXNbMF0udGFyZ2V0O1xuICAgICAgICAgICAgJChlbCkuY3NzKHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgICAgICAgICAgJGNhcmQuY3NzKCdvdmVyZmxvdycsICRjYXJkLmRhdGEoJ2luaXRpYWxPdmVyZmxvdycpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5pcygkKCcuY2FyZCAuYWN0aXZhdG9yJykpIHx8ICQoZS50YXJnZXQpLmlzKCQoJy5jYXJkIC5hY3RpdmF0b3IgaScpKSkge1xuICAgICAgICAkY2FyZC5jc3MoJ292ZXJmbG93JywgJ2hpZGRlbicpO1xuICAgICAgICAkY2FyZFJldmVhbC5jc3MoeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICAgICAgICBhbmltKHtcbiAgICAgICAgICB0YXJnZXRzOiAkY2FyZFJldmVhbFswXSxcbiAgICAgICAgICB0cmFuc2xhdGVZOiAnLTEwMCUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0UXVhZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKGNhc2gsIE0uYW5pbWUpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkYXRhOiBbXSxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgc2Vjb25kYXJ5UGxhY2Vob2xkZXI6ICcnLFxuICAgIGF1dG9jb21wbGV0ZU9wdGlvbnM6IHt9LFxuICAgIGxpbWl0OiBJbmZpbml0eSxcbiAgICBvbkNoaXBBZGQ6IG51bGwsXG4gICAgb25DaGlwU2VsZWN0OiBudWxsLFxuICAgIG9uQ2hpcERlbGV0ZTogbnVsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBjaGlwXG4gICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0YWcgIGNoaXAgdGFnIHN0cmluZ1xuICAgKiBAcHJvcGVydHkge1N0cmluZ30gW2ltYWdlXSAgY2hpcCBhdmF0YXIgaW1hZ2Ugc3RyaW5nXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIENoaXBzID0gZnVuY3Rpb24gKF9Db21wb25lbnQxMikge1xuICAgIF9pbmhlcml0cyhDaGlwcywgX0NvbXBvbmVudDEyKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBDaGlwcyBpbnN0YW5jZSBhbmQgc2V0IHVwIG92ZXJsYXlcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDaGlwcyhlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoaXBzKTtcblxuICAgICAgdmFyIF90aGlzNDUgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2hpcHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDaGlwcykpLmNhbGwodGhpcywgQ2hpcHMsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNDUuZWwuTV9DaGlwcyA9IF90aGlzNDU7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIG1vZGFsXG4gICAgICAgKiBAbWVtYmVyIENoaXBzI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtBcnJheX0gZGF0YVxuICAgICAgICogQHByb3Age1N0cmluZ30gcGxhY2Vob2xkZXJcbiAgICAgICAqIEBwcm9wIHtTdHJpbmd9IHNlY29uZGFyeVBsYWNlaG9sZGVyXG4gICAgICAgKiBAcHJvcCB7T2JqZWN0fSBhdXRvY29tcGxldGVPcHRpb25zXG4gICAgICAgKi9cbiAgICAgIF90aGlzNDUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDaGlwcy5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNDUuJGVsLmFkZENsYXNzKCdjaGlwcyBpbnB1dC1maWVsZCcpO1xuICAgICAgX3RoaXM0NS5jaGlwc0RhdGEgPSBbXTtcbiAgICAgIF90aGlzNDUuJGNoaXBzID0gJCgpO1xuICAgICAgX3RoaXM0NS5fc2V0dXBJbnB1dCgpO1xuICAgICAgX3RoaXM0NS5oYXNBdXRvY29tcGxldGUgPSBPYmplY3Qua2V5cyhfdGhpczQ1Lm9wdGlvbnMuYXV0b2NvbXBsZXRlT3B0aW9ucykubGVuZ3RoID4gMDtcblxuICAgICAgLy8gU2V0IGlucHV0IGlkXG4gICAgICBpZiAoIV90aGlzNDUuJGlucHV0LmF0dHIoJ2lkJykpIHtcbiAgICAgICAgX3RoaXM0NS4kaW5wdXQuYXR0cignaWQnLCBNLmd1aWQoKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbmRlciBpbml0aWFsIGNoaXBzXG4gICAgICBpZiAoX3RoaXM0NS5vcHRpb25zLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIF90aGlzNDUuY2hpcHNEYXRhID0gX3RoaXM0NS5vcHRpb25zLmRhdGE7XG4gICAgICAgIF90aGlzNDUuX3JlbmRlckNoaXBzKF90aGlzNDUuY2hpcHNEYXRhKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgYXV0b2NvbXBsZXRlIGlmIG5lZWRlZFxuICAgICAgaWYgKF90aGlzNDUuaGFzQXV0b2NvbXBsZXRlKSB7XG4gICAgICAgIF90aGlzNDUuX3NldHVwQXV0b2NvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzNDUuX3NldFBsYWNlaG9sZGVyKCk7XG4gICAgICBfdGhpczQ1Ll9zZXR1cExhYmVsKCk7XG4gICAgICBfdGhpczQ1Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczQ1O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDaGlwcywgW3tcbiAgICAgIGtleTogXCJnZXREYXRhXCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgQ2hpcHMgRGF0YVxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpcHNEYXRhO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVzdHJveVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy4kY2hpcHMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuZWwuTV9DaGlwcyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNoaXBDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlQ2hpcENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0Rm9jdXNCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Rm9jdXMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRCbHVyQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dEJsdXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2hpcENsaWNrQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgQ2hpcHMuX2hhbmRsZUNoaXBzS2V5ZG93bik7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgQ2hpcHMuX2hhbmRsZUNoaXBzS2V5dXApO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBDaGlwcy5faGFuZGxlQ2hpcHNCbHVyLCB0cnVlKTtcbiAgICAgICAgdGhpcy4kaW5wdXRbMF0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9oYW5kbGVJbnB1dEZvY3VzQm91bmQpO1xuICAgICAgICB0aGlzLiRpbnB1dFswXS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlSW5wdXRCbHVyQm91bmQpO1xuICAgICAgICB0aGlzLiRpbnB1dFswXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNoaXBDbGlja0JvdW5kKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIENoaXBzLl9oYW5kbGVDaGlwc0tleWRvd24pO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIENoaXBzLl9oYW5kbGVDaGlwc0tleXVwKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgQ2hpcHMuX2hhbmRsZUNoaXBzQmx1ciwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuJGlucHV0WzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlSW5wdXRGb2N1c0JvdW5kKTtcbiAgICAgICAgdGhpcy4kaW5wdXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2hhbmRsZUlucHV0Qmx1ckJvdW5kKTtcbiAgICAgICAgdGhpcy4kaW5wdXRbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ2hpcCBDbGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNoaXBDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDaGlwQ2xpY2soZSkge1xuICAgICAgICB2YXIgJGNoaXAgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2hpcCcpO1xuICAgICAgICB2YXIgY2xpY2tlZENsb3NlID0gJChlLnRhcmdldCkuaXMoJy5jbG9zZScpO1xuICAgICAgICBpZiAoJGNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gJGNoaXAuaW5kZXgoKTtcbiAgICAgICAgICBpZiAoY2xpY2tlZENsb3NlKSB7XG4gICAgICAgICAgICAvLyBkZWxldGUgY2hpcFxuICAgICAgICAgICAgdGhpcy5kZWxldGVDaGlwKGluZGV4KTtcbiAgICAgICAgICAgIHRoaXMuJGlucHV0WzBdLmZvY3VzKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNlbGVjdCBjaGlwXG4gICAgICAgICAgICB0aGlzLnNlbGVjdENoaXAoaW5kZXgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlZmF1bHQgaGFuZGxlIGNsaWNrIHRvIGZvY3VzIG9uIGlucHV0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kaW5wdXRbMF0uZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDaGlwcyBLZXlkb3duXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRGb2N1c1wiLFxuXG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IEZvY3VzXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRGb2N1cygpIHtcbiAgICAgICAgdGhpcy4kZWwuYWRkQ2xhc3MoJ2ZvY3VzJyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIElucHV0IEJsdXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEJsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRCbHVyKCkge1xuICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnZm9jdXMnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgS2V5ZG93blxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0S2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVJbnB1dEtleWRvd24oZSkge1xuICAgICAgICBDaGlwcy5fa2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgLy8gZW50ZXJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAvLyBPdmVycmlkZSBlbnRlciBpZiBhdXRvY29tcGxldGluZy5cbiAgICAgICAgICBpZiAodGhpcy5oYXNBdXRvY29tcGxldGUgJiYgdGhpcy5hdXRvY29tcGxldGUgJiYgdGhpcy5hdXRvY29tcGxldGUuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuYWRkQ2hpcCh7XG4gICAgICAgICAgICB0YWc6IHRoaXMuJGlucHV0WzBdLnZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy4kaW5wdXRbMF0udmFsdWUgPSAnJztcblxuICAgICAgICAgIC8vIGRlbGV0ZSBvciBsZWZ0XG4gICAgICAgIH0gZWxzZSBpZiAoKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDM3KSAmJiB0aGlzLiRpbnB1dFswXS52YWx1ZSA9PT0gJycgJiYgdGhpcy5jaGlwc0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hpcCh0aGlzLmNoaXBzRGF0YS5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbmRlciBDaGlwXG4gICAgICAgKiBAcGFyYW0ge2NoaXB9IGNoaXBcbiAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVuZGVyQ2hpcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJDaGlwKGNoaXApIHtcbiAgICAgICAgaWYgKCFjaGlwLnRhZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZW5kZXJlZENoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgcmVuZGVyZWRDaGlwLmNsYXNzTGlzdC5hZGQoJ2NoaXAnKTtcbiAgICAgICAgcmVuZGVyZWRDaGlwLnRleHRDb250ZW50ID0gY2hpcC50YWc7XG4gICAgICAgIHJlbmRlcmVkQ2hpcC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgICAgICQoY2xvc2VJY29uKS5hZGRDbGFzcygnbWF0ZXJpYWwtaWNvbnMgY2xvc2UnKTtcbiAgICAgICAgY2xvc2VJY29uLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcblxuICAgICAgICAvLyBhdHRhY2ggaW1hZ2UgaWYgbmVlZGVkXG4gICAgICAgIGlmIChjaGlwLmltYWdlKSB7XG4gICAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNoaXAuaW1hZ2UpO1xuICAgICAgICAgIHJlbmRlcmVkQ2hpcC5pbnNlcnRCZWZvcmUoaW1nLCByZW5kZXJlZENoaXAuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJlZENoaXAuYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpcDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW5kZXIgQ2hpcHNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW5kZXJDaGlwc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJDaGlwcygpIHtcbiAgICAgICAgdGhpcy4kY2hpcHMucmVtb3ZlKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlwc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2hpcEVsID0gdGhpcy5fcmVuZGVyQ2hpcCh0aGlzLmNoaXBzRGF0YVtpXSk7XG4gICAgICAgICAgdGhpcy4kZWwuYXBwZW5kKGNoaXBFbCk7XG4gICAgICAgICAgdGhpcy4kY2hpcHMuYWRkKGNoaXBFbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3ZlIGlucHV0IHRvIGVuZFxuICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kaW5wdXRbMF0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEF1dG9jb21wbGV0ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwQXV0b2NvbXBsZXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwQXV0b2NvbXBsZXRlKCkge1xuICAgICAgICB2YXIgX3RoaXM0NiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMub25BdXRvY29tcGxldGUgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgX3RoaXM0Ni5hZGRDaGlwKHtcbiAgICAgICAgICAgIHRhZzogdmFsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgX3RoaXM0Ni4kaW5wdXRbMF0udmFsdWUgPSAnJztcbiAgICAgICAgICBfdGhpczQ2LiRpbnB1dFswXS5mb2N1cygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gTS5BdXRvY29tcGxldGUuaW5pdCh0aGlzLiRpbnB1dFswXSwgdGhpcy5vcHRpb25zLmF1dG9jb21wbGV0ZU9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIElucHV0XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBJbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cElucHV0KCkge1xuICAgICAgICB0aGlzLiRpbnB1dCA9IHRoaXMuJGVsLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgIGlmICghdGhpcy4kaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kaW5wdXQgPSAkKCc8aW5wdXQ+PC9pbnB1dD4nKTtcbiAgICAgICAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kaW5wdXQuYWRkQ2xhc3MoJ2lucHV0Jyk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgTGFiZWxcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cExhYmVsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwTGFiZWwoKSB7XG4gICAgICAgIHRoaXMuJGxhYmVsID0gdGhpcy4kZWwuZmluZCgnbGFiZWwnKTtcbiAgICAgICAgaWYgKHRoaXMuJGxhYmVsLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuJGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy4kaW5wdXQuYXR0cignaWQnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgcGxhY2Vob2xkZXJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRQbGFjZWhvbGRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRQbGFjZWhvbGRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNEYXRhICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuY2hpcHNEYXRhLmxlbmd0aCAmJiB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAkKHRoaXMuJGlucHV0KS5wcm9wKCdwbGFjZWhvbGRlcicsIHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoKHRoaXMuY2hpcHNEYXRhID09PSB1bmRlZmluZWQgfHwgISF0aGlzLmNoaXBzRGF0YS5sZW5ndGgpICYmIHRoaXMub3B0aW9ucy5zZWNvbmRhcnlQbGFjZWhvbGRlcikge1xuICAgICAgICAgICQodGhpcy4kaW5wdXQpLnByb3AoJ3BsYWNlaG9sZGVyJywgdGhpcy5vcHRpb25zLnNlY29uZGFyeVBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENoZWNrIGlmIGNoaXAgaXMgdmFsaWRcbiAgICAgICAqIEBwYXJhbSB7Y2hpcH0gY2hpcFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2lzVmFsaWRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNWYWxpZChjaGlwKSB7XG4gICAgICAgIGlmIChjaGlwLmhhc093blByb3BlcnR5KCd0YWcnKSAmJiBjaGlwLnRhZyAhPT0gJycpIHtcbiAgICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaXBzRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hpcHNEYXRhW2ldLnRhZyA9PT0gY2hpcC50YWcpIHtcbiAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAhZXhpc3RzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEFkZCBjaGlwXG4gICAgICAgKiBAcGFyYW0ge2NoaXB9IGNoaXBcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImFkZENoaXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRDaGlwKGNoaXApIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkKGNoaXApIHx8IHRoaXMuY2hpcHNEYXRhLmxlbmd0aCA+PSB0aGlzLm9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVuZGVyZWRDaGlwID0gdGhpcy5fcmVuZGVyQ2hpcChjaGlwKTtcbiAgICAgICAgdGhpcy4kY2hpcHMuYWRkKHJlbmRlcmVkQ2hpcCk7XG4gICAgICAgIHRoaXMuY2hpcHNEYXRhLnB1c2goY2hpcCk7XG4gICAgICAgICQodGhpcy4kaW5wdXQpLmJlZm9yZShyZW5kZXJlZENoaXApO1xuICAgICAgICB0aGlzLl9zZXRQbGFjZWhvbGRlcigpO1xuXG4gICAgICAgIC8vIGZpcmUgY2hpcEFkZCBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbkNoaXBBZGQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25DaGlwQWRkLmNhbGwodGhpcywgdGhpcy4kZWwsIHJlbmRlcmVkQ2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBEZWxldGUgY2hpcFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGNoaXBcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImRlbGV0ZUNoaXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWxldGVDaGlwKGNoaXBJbmRleCkge1xuICAgICAgICB2YXIgJGNoaXAgPSB0aGlzLiRjaGlwcy5lcShjaGlwSW5kZXgpO1xuICAgICAgICB0aGlzLiRjaGlwcy5lcShjaGlwSW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLiRjaGlwcyA9IHRoaXMuJGNoaXBzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICByZXR1cm4gJChlbCkuaW5kZXgoKSA+PSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlwc0RhdGEuc3BsaWNlKGNoaXBJbmRleCwgMSk7XG4gICAgICAgIHRoaXMuX3NldFBsYWNlaG9sZGVyKCk7XG5cbiAgICAgICAgLy8gZmlyZSBjaGlwRGVsZXRlIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2hpcERlbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNoaXBEZWxldGUuY2FsbCh0aGlzLCB0aGlzLiRlbCwgJGNoaXBbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2VsZWN0IGNoaXBcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjaGlwXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzZWxlY3RDaGlwXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0Q2hpcChjaGlwSW5kZXgpIHtcbiAgICAgICAgdmFyICRjaGlwID0gdGhpcy4kY2hpcHMuZXEoY2hpcEluZGV4KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRDaGlwID0gJGNoaXA7XG4gICAgICAgICRjaGlwWzBdLmZvY3VzKCk7XG5cbiAgICAgICAgLy8gZmlyZSBjaGlwU2VsZWN0IGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2hpcFNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNoaXBTZWxlY3QuY2FsbCh0aGlzLCB0aGlzLiRlbCwgJGNoaXBbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KENoaXBzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2hpcHMpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9DaGlwcztcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNoaXBzS2V5ZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDaGlwc0tleWRvd24oZSkge1xuICAgICAgICBDaGlwcy5fa2V5ZG93biA9IHRydWU7XG5cbiAgICAgICAgdmFyICRjaGlwcyA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jaGlwcycpO1xuICAgICAgICB2YXIgY2hpcHNLZXlkb3duID0gZS50YXJnZXQgJiYgJGNoaXBzLmxlbmd0aDtcblxuICAgICAgICAvLyBEb24ndCBoYW5kbGUga2V5ZG93biBpbnB1dHMgb24gaW5wdXQgYW5kIHRleHRhcmVhXG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnaW5wdXQsIHRleHRhcmVhJykgfHwgIWNoaXBzS2V5ZG93bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyQ2hpcHMgPSAkY2hpcHNbMF0uTV9DaGlwcztcblxuICAgICAgICAvLyBiYWNrc3BhY2UgYW5kIGRlbGV0ZVxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA4IHx8IGUua2V5Q29kZSA9PT0gNDYpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICB2YXIgc2VsZWN0SW5kZXggPSBjdXJyQ2hpcHMuY2hpcHNEYXRhLmxlbmd0aDtcbiAgICAgICAgICBpZiAoY3VyckNoaXBzLl9zZWxlY3RlZENoaXApIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGN1cnJDaGlwcy5fc2VsZWN0ZWRDaGlwLmluZGV4KCk7XG4gICAgICAgICAgICBjdXJyQ2hpcHMuZGVsZXRlQ2hpcChpbmRleCk7XG4gICAgICAgICAgICBjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBzZWxlY3RJbmRleCBkb2Vzbid0IGdvIG5lZ2F0aXZlXG4gICAgICAgICAgICBzZWxlY3RJbmRleCA9IE1hdGgubWF4KGluZGV4IC0gMSwgMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGN1cnJDaGlwcy5jaGlwc0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjdXJyQ2hpcHMuc2VsZWN0Q2hpcChzZWxlY3RJbmRleCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGVmdCBhcnJvdyBrZXlcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgaWYgKGN1cnJDaGlwcy5fc2VsZWN0ZWRDaGlwKSB7XG4gICAgICAgICAgICB2YXIgX3NlbGVjdEluZGV4ID0gY3VyckNoaXBzLl9zZWxlY3RlZENoaXAuaW5kZXgoKSAtIDE7XG4gICAgICAgICAgICBpZiAoX3NlbGVjdEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyQ2hpcHMuc2VsZWN0Q2hpcChfc2VsZWN0SW5kZXgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHJpZ2h0IGFycm93IGtleVxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICBpZiAoY3VyckNoaXBzLl9zZWxlY3RlZENoaXApIHtcbiAgICAgICAgICAgIHZhciBfc2VsZWN0SW5kZXgyID0gY3VyckNoaXBzLl9zZWxlY3RlZENoaXAuaW5kZXgoKSArIDE7XG5cbiAgICAgICAgICAgIGlmIChfc2VsZWN0SW5kZXgyID49IGN1cnJDaGlwcy5jaGlwc0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGN1cnJDaGlwcy4kaW5wdXRbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGN1cnJDaGlwcy5zZWxlY3RDaGlwKF9zZWxlY3RJbmRleDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDaGlwcyBLZXl1cFxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNoaXBzS2V5dXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2hpcHNLZXl1cChlKSB7XG4gICAgICAgIENoaXBzLl9rZXlkb3duID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENoaXBzIEJsdXJcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDaGlwc0JsdXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2hpcHNCbHVyKGUpIHtcbiAgICAgICAgaWYgKCFDaGlwcy5fa2V5ZG93bikge1xuICAgICAgICAgIHZhciAkY2hpcHMgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuY2hpcHMnKTtcbiAgICAgICAgICB2YXIgY3VyckNoaXBzID0gJGNoaXBzWzBdLk1fQ2hpcHM7XG5cbiAgICAgICAgICBjdXJyQ2hpcHMuX3NlbGVjdGVkQ2hpcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDaGlwcztcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBDaGlwc1xuICAgKi9cblxuXG4gIENoaXBzLl9rZXlkb3duID0gZmFsc2U7XG5cbiAgTS5DaGlwcyA9IENoaXBzO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoQ2hpcHMsICdjaGlwcycsICdNX0NoaXBzJyk7XG4gIH1cblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgLy8gSGFuZGxlIHJlbW92YWwgb2Ygc3RhdGljIGNoaXBzLlxuICAgICQoZG9jdW1lbnQuYm9keSkub24oJ2NsaWNrJywgJy5jaGlwIC5jbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkY2hpcHMgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jaGlwcycpO1xuICAgICAgaWYgKCRjaGlwcy5sZW5ndGggJiYgJGNoaXBzWzBdLk1fQ2hpcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuY2hpcCcpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9KTtcbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiBJbmZpbml0eSxcbiAgICBvZmZzZXQ6IDAsXG4gICAgb25Qb3NpdGlvbkNoYW5nZTogbnVsbFxuICB9O1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIFB1c2hwaW4gPSBmdW5jdGlvbiAoX0NvbXBvbmVudDEzKSB7XG4gICAgX2luaGVyaXRzKFB1c2hwaW4sIF9Db21wb25lbnQxMyk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgUHVzaHBpbiBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIFB1c2hwaW4oZWwsIG9wdGlvbnMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNocGluKTtcblxuICAgICAgdmFyIF90aGlzNDcgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaHBpbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hwaW4pKS5jYWxsKHRoaXMsIFB1c2hwaW4sIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNDcuZWwuTV9QdXNocGluID0gX3RoaXM0NztcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgbW9kYWxcbiAgICAgICAqIEBtZW1iZXIgUHVzaHBpbiNvcHRpb25zXG4gICAgICAgKi9cbiAgICAgIF90aGlzNDcub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBQdXNocGluLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM0Ny5vcmlnaW5hbE9mZnNldCA9IF90aGlzNDcuZWwub2Zmc2V0VG9wO1xuICAgICAgUHVzaHBpbi5fcHVzaHBpbnMucHVzaChfdGhpczQ3KTtcbiAgICAgIF90aGlzNDcuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgX3RoaXM0Ny5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHJldHVybiBfdGhpczQ3O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQdXNocGluLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZW1vdmVQaW5DbGFzc2VzKCk7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgICAvLyBSZW1vdmUgcHVzaHBpbiBJbnN0XG4gICAgICAgIHZhciBpbmRleCA9IFB1c2hwaW4uX3B1c2hwaW5zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIFB1c2hwaW4uX3B1c2hwaW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBQdXNocGluLl91cGRhdGVFbGVtZW50cyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIFB1c2hwaW4uX3VwZGF0ZUVsZW1lbnRzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVBvc2l0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZVBvc2l0aW9uKCkge1xuICAgICAgICB2YXIgc2Nyb2xsZWQgPSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCkgKyB0aGlzLm9wdGlvbnMub2Zmc2V0O1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudG9wIDw9IHNjcm9sbGVkICYmIHRoaXMub3B0aW9ucy5ib3R0b20gPj0gc2Nyb2xsZWQgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaW5uZWQnKSkge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZVBpbkNsYXNzZXMoKTtcbiAgICAgICAgICB0aGlzLmVsLnN0eWxlLnRvcCA9IHRoaXMub3B0aW9ucy5vZmZzZXQgKyBcInB4XCI7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwaW5uZWQnKTtcblxuICAgICAgICAgIC8vIG9uUG9zaXRpb25DaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3NpdGlvbkNoYW5nZS5jYWxsKHRoaXMsICdwaW5uZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgcGluLXRvcCAod2hlbiBzY3JvbGxlZCBwb3NpdGlvbiBpcyBhYm92ZSB0b3ApXG4gICAgICAgIGlmIChzY3JvbGxlZCA8IHRoaXMub3B0aW9ucy50b3AgJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaW4tdG9wJykpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVQaW5DbGFzc2VzKCk7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSAwO1xuICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgncGluLXRvcCcpO1xuXG4gICAgICAgICAgLy8gb25Qb3NpdGlvbkNoYW5nZSBjYWxsYmFja1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uUG9zaXRpb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uQ2hhbmdlLmNhbGwodGhpcywgJ3Bpbi10b3AnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgcGluLWJvdHRvbSAod2hlbiBzY3JvbGxlZCBwb3NpdGlvbiBpcyBiZWxvdyBib3R0b20pXG4gICAgICAgIGlmIChzY3JvbGxlZCA+IHRoaXMub3B0aW9ucy5ib3R0b20gJiYgIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaW4tYm90dG9tJykpIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVQaW5DbGFzc2VzKCk7XG4gICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdwaW4tYm90dG9tJyk7XG4gICAgICAgICAgdGhpcy5lbC5zdHlsZS50b3AgPSB0aGlzLm9wdGlvbnMuYm90dG9tIC0gdGhpcy5vcmlnaW5hbE9mZnNldCArIFwicHhcIjtcblxuICAgICAgICAgIC8vIG9uUG9zaXRpb25DaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vblBvc2l0aW9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3NpdGlvbkNoYW5nZS5jYWxsKHRoaXMsICdwaW4tYm90dG9tJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9yZW1vdmVQaW5DbGFzc2VzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZVBpbkNsYXNzZXMoKSB7XG4gICAgICAgIC8vIElFIDExIGJ1ZyAoY2FuJ3QgcmVtb3ZlIG11bHRpcGxlIGNsYXNzZXMgaW4gb25lIGxpbmUpXG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgncGluLXRvcCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bpbm5lZCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3Bpbi1ib3R0b20nKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoUHVzaHBpbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hwaW4pLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9QdXNocGluO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdXBkYXRlRWxlbWVudHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIGZvciAodmFyIGVsSW5kZXggaW4gUHVzaHBpbi5fcHVzaHBpbnMpIHtcbiAgICAgICAgICB2YXIgcEluc3RhbmNlID0gUHVzaHBpbi5fcHVzaHBpbnNbZWxJbmRleF07XG4gICAgICAgICAgcEluc3RhbmNlLl91cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHVzaHBpbjtcbiAgfShDb21wb25lbnQpO1xuXG4gIC8qKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJvZiBQdXNocGluXG4gICAqL1xuXG5cbiAgUHVzaHBpbi5fcHVzaHBpbnMgPSBbXTtcblxuICBNLlB1c2hwaW4gPSBQdXNocGluO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoUHVzaHBpbiwgJ3B1c2hwaW4nLCAnTV9QdXNocGluJyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCwgYW5pbSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkaXJlY3Rpb246ICd0b3AnLFxuICAgIGhvdmVyRW5hYmxlZDogdHJ1ZSxcbiAgICB0b29sYmFyRW5hYmxlZDogZmFsc2VcbiAgfTtcblxuICAkLmZuLnJldmVyc2UgPSBbXS5yZXZlcnNlO1xuXG4gIC8qKlxuICAgKiBAY2xhc3NcbiAgICpcbiAgICovXG5cbiAgdmFyIEZsb2F0aW5nQWN0aW9uQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQxNCkge1xuICAgIF9pbmhlcml0cyhGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgX0NvbXBvbmVudDE0KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBpbnN0YW5jZVxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIEZsb2F0aW5nQWN0aW9uQnV0dG9uKGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmxvYXRpbmdBY3Rpb25CdXR0b24pO1xuXG4gICAgICB2YXIgX3RoaXM0OCA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGbG9hdGluZ0FjdGlvbkJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZsb2F0aW5nQWN0aW9uQnV0dG9uKSkuY2FsbCh0aGlzLCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM0OC5lbC5NX0Zsb2F0aW5nQWN0aW9uQnV0dG9uID0gX3RoaXM0ODtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgZmFiXG4gICAgICAgKiBAbWVtYmVyIEZsb2F0aW5nQWN0aW9uQnV0dG9uI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbZGlyZWN0aW9uXSAtIERpcmVjdGlvbiBmYWIgbWVudSBvcGVuc1xuICAgICAgICogQHByb3Age0Jvb2xlYW59IFtob3ZlckVuYWJsZWQ9dHJ1ZV0gLSBFbmFibGUgaG92ZXIgdnMgY2xpY2tcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBbdG9vbGJhckVuYWJsZWQ9ZmFsc2VdIC0gRW5hYmxlIHRvb2xiYXIgdHJhbnNpdGlvblxuICAgICAgICovXG4gICAgICBfdGhpczQ4Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRmxvYXRpbmdBY3Rpb25CdXR0b24uZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICBfdGhpczQ4LmlzT3BlbiA9IGZhbHNlO1xuICAgICAgX3RoaXM0OC4kYW5jaG9yID0gX3RoaXM0OC4kZWwuY2hpbGRyZW4oJ2EnKS5maXJzdCgpO1xuICAgICAgX3RoaXM0OC4kbWVudSA9IF90aGlzNDguJGVsLmNoaWxkcmVuKCd1bCcpLmZpcnN0KCk7XG4gICAgICBfdGhpczQ4LiRmbG9hdGluZ0J0bnMgPSBfdGhpczQ4LiRlbC5maW5kKCd1bCAuYnRuLWZsb2F0aW5nJyk7XG4gICAgICBfdGhpczQ4LiRmbG9hdGluZ0J0bnNSZXZlcnNlID0gX3RoaXM0OC4kZWwuZmluZCgndWwgLmJ0bi1mbG9hdGluZycpLnJldmVyc2UoKTtcbiAgICAgIF90aGlzNDgub2Zmc2V0WSA9IDA7XG4gICAgICBfdGhpczQ4Lm9mZnNldFggPSAwO1xuXG4gICAgICBfdGhpczQ4LiRlbC5hZGRDbGFzcyhcImRpcmVjdGlvbi1cIiArIF90aGlzNDgub3B0aW9ucy5kaXJlY3Rpb24pO1xuICAgICAgaWYgKF90aGlzNDgub3B0aW9ucy5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG4gICAgICAgIF90aGlzNDgub2Zmc2V0WSA9IDQwO1xuICAgICAgfSBlbHNlIGlmIChfdGhpczQ4Lm9wdGlvbnMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIF90aGlzNDgub2Zmc2V0WCA9IC00MDtcbiAgICAgIH0gZWxzZSBpZiAoX3RoaXM0OC5vcHRpb25zLmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgX3RoaXM0OC5vZmZzZXRZID0gLTQwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXM0OC5vZmZzZXRYID0gNDA7XG4gICAgICB9XG4gICAgICBfdGhpczQ4Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczQ4O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5lbC5NX0Zsb2F0aW5nQWN0aW9uQnV0dG9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlRkFCQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUZBQkNsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wZW5Cb3VuZCA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDbG9zZUJvdW5kID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaG92ZXJFbmFibGVkICYmICF0aGlzLm9wdGlvbnMudG9vbGJhckVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLl9oYW5kbGVPcGVuQm91bmQpO1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZUNsb3NlQm91bmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVGQUJDbGlja0JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5ob3ZlckVuYWJsZWQgJiYgIXRoaXMub3B0aW9ucy50b29sYmFyRW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuX2hhbmRsZU9wZW5Cb3VuZCk7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5faGFuZGxlQ2xvc2VCb3VuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUZBQkNsaWNrQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIEZBQiBDbGlja1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUZBQkNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUZBQkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgRG9jdW1lbnQgQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEb2N1bWVudENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QodGhpcy4kbWVudSkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBGQUJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2xiYXJFbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZUluVG9vbGJhcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGVJbkZBQigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBGQUJcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRvb2xiYXJFbmFibGVkKSB7XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2hhbmRsZUNsb3NlQm91bmQsIHRydWUpO1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQsIHRydWUpO1xuICAgICAgICAgIHRoaXMuX2FuaW1hdGVPdXRUb29sYmFyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYW5pbWF0ZU91dEZBQigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2xhc3NpYyBGQUIgTWVudSBvcGVuXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYW5pbWF0ZUluRkFCXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJbkZBQigpIHtcbiAgICAgICAgdmFyIF90aGlzNDkgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICB2YXIgdGltZSA9IDA7XG4gICAgICAgIHRoaXMuJGZsb2F0aW5nQnRuc1JldmVyc2UuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgIHRhcmdldHM6IGVsLFxuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHNjYWxlOiBbMC40LCAxXSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFtfdGhpczQ5Lm9mZnNldFksIDBdLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogW190aGlzNDkub2Zmc2V0WCwgMF0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjc1LFxuICAgICAgICAgICAgZGVsYXk6IHRpbWUsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRpbWUgKz0gNDA7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsYXNzaWMgRkFCIE1lbnUgY2xvc2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlT3V0RkFCXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVPdXRGQUIoKSB7XG4gICAgICAgIHZhciBfdGhpczUwID0gdGhpcztcblxuICAgICAgICB0aGlzLiRmbG9hdGluZ0J0bnNSZXZlcnNlLmVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgYW5pbS5yZW1vdmUoZWwpO1xuICAgICAgICAgIGFuaW0oe1xuICAgICAgICAgICAgdGFyZ2V0czogZWwsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgc2NhbGU6IDAuNCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IF90aGlzNTAub2Zmc2V0WSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IF90aGlzNTAub2Zmc2V0WCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNzUsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBfdGhpczUwLiRlbC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRvb2xiYXIgdHJhbnNpdGlvbiBNZW51IG9wZW5cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hbmltYXRlSW5Ub29sYmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVJblRvb2xiYXIoKSB7XG4gICAgICAgIHZhciBfdGhpczUxID0gdGhpcztcblxuICAgICAgICB2YXIgc2NhbGVGYWN0b3IgPSB2b2lkIDA7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICB2YXIgYnRuUmVjdCA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJmYWItYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgdmFyIGZhYkNvbG9yID0gdGhpcy4kYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgICAgICB0aGlzLiRhbmNob3IuYXBwZW5kKGJhY2tkcm9wKTtcblxuICAgICAgICB0aGlzLm9mZnNldFggPSBidG5SZWN0LmxlZnQgLSB3aW5kb3dXaWR0aCAvIDIgKyBidG5SZWN0LndpZHRoIC8gMjtcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gd2luZG93SGVpZ2h0IC0gYnRuUmVjdC5ib3R0b207XG4gICAgICAgIHNjYWxlRmFjdG9yID0gd2luZG93V2lkdGggLyBiYWNrZHJvcFswXS5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5idG5Cb3R0b20gPSBidG5SZWN0LmJvdHRvbTtcbiAgICAgICAgdGhpcy5idG5MZWZ0ID0gYnRuUmVjdC5sZWZ0O1xuICAgICAgICB0aGlzLmJ0bldpZHRoID0gYnRuUmVjdC53aWR0aDtcblxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZVxuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuJGVsLmNzcyh7XG4gICAgICAgICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIHRoaXMub2Zmc2V0WCArICdweCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kYW5jaG9yLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgnICsgLXRoaXMub2Zmc2V0WSArICdweCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICdub25lJ1xuICAgICAgICB9KTtcbiAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzNTEuJGVsLmNzcyh7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA4NSwgMC42ODAsIDAuNTMwKSwgYmFja2dyb3VuZC1jb2xvciAwcyBsaW5lYXIgLjJzJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIF90aGlzNTEuJGFuY2hvci5jc3Moe1xuICAgICAgICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM1MS4kZWwuY3NzKHtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZhYkNvbG9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKCcgKyBzY2FsZUZhY3RvciArICcpJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMgY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3RoaXM1MS4kbWVudS5jaGlsZHJlbignbGknKS5jaGlsZHJlbignYScpLmNzcyh7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBTY3JvbGwgdG8gY2xvc2UuXG4gICAgICAgICAgICBfdGhpczUxLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQgPSBfdGhpczUxLl9oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQoX3RoaXM1MSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgX3RoaXM1MS5faGFuZGxlQ2xvc2VCb3VuZCwgdHJ1ZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM1MS5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kLCB0cnVlKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUb29sYmFyIHRyYW5zaXRpb24gTWVudSBjbG9zZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FuaW1hdGVPdXRUb29sYmFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FuaW1hdGVPdXRUb29sYmFyKCkge1xuICAgICAgICB2YXIgX3RoaXM1MiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBiYWNrZHJvcCA9IHRoaXMuJGVsLmZpbmQoJy5mYWItYmFja2Ryb3AnKTtcbiAgICAgICAgdmFyIGZhYkNvbG9yID0gdGhpcy4kYW5jaG9yLmNzcygnYmFja2dyb3VuZC1jb2xvcicpO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IHRoaXMuYnRuTGVmdCAtIHdpbmRvd1dpZHRoIC8gMiArIHRoaXMuYnRuV2lkdGggLyAyO1xuICAgICAgICB0aGlzLm9mZnNldFkgPSB3aW5kb3dIZWlnaHQgLSB0aGlzLmJ0bkJvdHRvbTtcblxuICAgICAgICAvLyBIaWRlIGJhY2tkcm9wXG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLiRhbmNob3IuY3NzKHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnbm9uZSdcbiAgICAgICAgfSk7XG4gICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmFiQ29sb3JcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG1lbnUuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJ2EnKS5jc3Moe1xuICAgICAgICAgIG9wYWNpdHk6ICcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGJhY2tkcm9wLnJlbW92ZSgpO1xuXG4gICAgICAgICAgLy8gU2V0IGluaXRpYWwgc3RhdGUuXG4gICAgICAgICAgX3RoaXM1Mi4kZWwuY3NzKHtcbiAgICAgICAgICAgICd0ZXh0LWFsaWduJzogJycsXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBib3R0b206ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArIC1fdGhpczUyLm9mZnNldFggKyAncHgsMCwwKSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBfdGhpczUyLiRhbmNob3IuY3NzKHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsJyArIF90aGlzNTIub2Zmc2V0WSArICdweCwwKSdcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM1Mi4kZWwuY3NzKHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwwLDApJyxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAuMnMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzNTIuJGFuY2hvci5jc3Moe1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLDAsMCknLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIC4ycyBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICB9LCAyMDApO1xuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcImluaXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KGVscywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gX2dldChGbG9hdGluZ0FjdGlvbkJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEZsb2F0aW5nQWN0aW9uQnV0dG9uKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fRmxvYXRpbmdBY3Rpb25CdXR0b247XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImRlZmF1bHRzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0cztcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRmxvYXRpbmdBY3Rpb25CdXR0b247XG4gIH0oQ29tcG9uZW50KTtcblxuICBNLkZsb2F0aW5nQWN0aW9uQnV0dG9uID0gRmxvYXRpbmdBY3Rpb25CdXR0b247XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgJ2Zsb2F0aW5nQWN0aW9uQnV0dG9uJywgJ01fRmxvYXRpbmdBY3Rpb25CdXR0b24nKTtcbiAgfVxufSkoY2FzaCwgTS5hbmltZSk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge1xuICAgIC8vIENsb3NlIHdoZW4gZGF0ZSBpcyBzZWxlY3RlZFxuICAgIGF1dG9DbG9zZTogZmFsc2UsXG5cbiAgICAvLyB0aGUgZGVmYXVsdCBvdXRwdXQgZm9ybWF0IGZvciB0aGUgaW5wdXQgZmllbGQgdmFsdWVcbiAgICBmb3JtYXQ6ICdtbW0gZGQsIHl5eXknLFxuXG4gICAgLy8gVXNlZCB0byBjcmVhdGUgZGF0ZSBvYmplY3QgZnJvbSBjdXJyZW50IGlucHV0IHN0cmluZ1xuICAgIHBhcnNlOiBudWxsLFxuXG4gICAgLy8gVGhlIGluaXRpYWwgZGF0ZSB0byB2aWV3IHdoZW4gZmlyc3Qgb3BlbmVkXG4gICAgZGVmYXVsdERhdGU6IG51bGwsXG5cbiAgICAvLyBNYWtlIHRoZSBgZGVmYXVsdERhdGVgIHRoZSBpbml0aWFsIHNlbGVjdGVkIHZhbHVlXG4gICAgc2V0RGVmYXVsdERhdGU6IGZhbHNlLFxuXG4gICAgZGlzYWJsZVdlZWtlbmRzOiBmYWxzZSxcblxuICAgIGRpc2FibGVEYXlGbjogbnVsbCxcblxuICAgIC8vIEZpcnN0IGRheSBvZiB3ZWVrICgwOiBTdW5kYXksIDE6IE1vbmRheSBldGMpXG4gICAgZmlyc3REYXk6IDAsXG5cbiAgICAvLyBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZFxuICAgIG1pbkRhdGU6IG51bGwsXG4gICAgLy8gVGhlbGF0ZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWRcbiAgICBtYXhEYXRlOiBudWxsLFxuXG4gICAgLy8gTnVtYmVyIG9mIHllYXJzIGVpdGhlciBzaWRlLCBvciBhcnJheSBvZiB1cHBlci9sb3dlciByYW5nZVxuICAgIHllYXJSYW5nZTogMTAsXG5cbiAgICAvLyB1c2VkIGludGVybmFsbHkgKGRvbid0IGNvbmZpZyBvdXRzaWRlKVxuICAgIG1pblllYXI6IDAsXG4gICAgbWF4WWVhcjogOTk5OSxcbiAgICBtaW5Nb250aDogdW5kZWZpbmVkLFxuICAgIG1heE1vbnRoOiB1bmRlZmluZWQsXG5cbiAgICBzdGFydFJhbmdlOiBudWxsLFxuICAgIGVuZFJhbmdlOiBudWxsLFxuXG4gICAgaXNSVEw6IGZhbHNlLFxuXG4gICAgLy8gUmVuZGVyIHRoZSBtb250aCBhZnRlciB5ZWFyIGluIHRoZSBjYWxlbmRhciB0aXRsZVxuICAgIHNob3dNb250aEFmdGVyWWVhcjogZmFsc2UsXG5cbiAgICAvLyBSZW5kZXIgZGF5cyBvZiB0aGUgY2FsZW5kYXIgZ3JpZCB0aGF0IGZhbGwgaW4gdGhlIG5leHQgb3IgcHJldmlvdXMgbW9udGhcbiAgICBzaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzOiBmYWxzZSxcblxuICAgIC8vIFNwZWNpZnkgYSBET00gZWxlbWVudCB0byByZW5kZXIgdGhlIGNhbGVuZGFyIGluXG4gICAgY29udGFpbmVyOiBudWxsLFxuXG4gICAgLy8gU2hvdyBjbGVhciBidXR0b25cbiAgICBzaG93Q2xlYXJCdG46IGZhbHNlLFxuXG4gICAgLy8gaW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICBpMThuOiB7XG4gICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICBkb25lOiAnT2snLFxuICAgICAgcHJldmlvdXNNb250aDogJ+KAuScsXG4gICAgICBuZXh0TW9udGg6ICfigLonLFxuICAgICAgbW9udGhzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcbiAgICAgIG1vbnRoc1Nob3J0OiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gICAgICB3ZWVrZGF5czogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddLFxuICAgICAgd2Vla2RheXNTaG9ydDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgICAgIHdlZWtkYXlzQWJicmV2OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXVxuICAgIH0sXG5cbiAgICAvLyBldmVudHMgYXJyYXlcbiAgICBldmVudHM6IFtdLFxuXG4gICAgLy8gY2FsbGJhY2sgZnVuY3Rpb25cbiAgICBvblNlbGVjdDogbnVsbCxcbiAgICBvbk9wZW46IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkRyYXc6IG51bGxcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBEYXRlcGlja2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQxNSkge1xuICAgIF9pbmhlcml0cyhEYXRlcGlja2VyLCBfQ29tcG9uZW50MTUpO1xuXG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IERhdGVwaWNrZXIgaW5zdGFuY2UgYW5kIHNldCB1cCBvdmVybGF5XG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gRGF0ZXBpY2tlcihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhdGVwaWNrZXIpO1xuXG4gICAgICB2YXIgX3RoaXM1MyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEYXRlcGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRGF0ZXBpY2tlcikpLmNhbGwodGhpcywgRGF0ZXBpY2tlciwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM1My5lbC5NX0RhdGVwaWNrZXIgPSBfdGhpczUzO1xuXG4gICAgICBfdGhpczUzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRGF0ZXBpY2tlci5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSBpMThuIGRlZmF1bHRzIGFyZSBub3QgbG9zdCB3aGVuIG9ubHkgZmV3IGkxOG4gb3B0aW9uIHByb3BlcnRpZXMgYXJlIHBhc3NlZFxuICAgICAgaWYgKCEhb3B0aW9ucyAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KCdpMThuJykgJiYgdHlwZW9mIG9wdGlvbnMuaTE4biA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX3RoaXM1My5vcHRpb25zLmkxOG4gPSAkLmV4dGVuZCh7fSwgRGF0ZXBpY2tlci5kZWZhdWx0cy5pMThuLCBvcHRpb25zLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgdGltZSBjb21wb25lbnQgZnJvbSBtaW5EYXRlIGFuZCBtYXhEYXRlIG9wdGlvbnNcbiAgICAgIGlmIChfdGhpczUzLm9wdGlvbnMubWluRGF0ZSkgX3RoaXM1My5vcHRpb25zLm1pbkRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICBpZiAoX3RoaXM1My5vcHRpb25zLm1heERhdGUpIF90aGlzNTMub3B0aW9ucy5tYXhEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgICBfdGhpczUzLmlkID0gTS5ndWlkKCk7XG5cbiAgICAgIF90aGlzNTMuX3NldHVwVmFyaWFibGVzKCk7XG4gICAgICBfdGhpczUzLl9pbnNlcnRIVE1MSW50b0RPTSgpO1xuICAgICAgX3RoaXM1My5fc2V0dXBNb2RhbCgpO1xuXG4gICAgICBfdGhpczUzLl9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcblxuICAgICAgaWYgKCFfdGhpczUzLm9wdGlvbnMuZGVmYXVsdERhdGUpIHtcbiAgICAgICAgX3RoaXM1My5vcHRpb25zLmRlZmF1bHREYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZShfdGhpczUzLmVsLnZhbHVlKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWZEYXRlID0gX3RoaXM1My5vcHRpb25zLmRlZmF1bHREYXRlO1xuICAgICAgaWYgKERhdGVwaWNrZXIuX2lzRGF0ZShkZWZEYXRlKSkge1xuICAgICAgICBpZiAoX3RoaXM1My5vcHRpb25zLnNldERlZmF1bHREYXRlKSB7XG4gICAgICAgICAgX3RoaXM1My5zZXREYXRlKGRlZkRhdGUsIHRydWUpO1xuICAgICAgICAgIF90aGlzNTMuc2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzNTMuZ290b0RhdGUoZGVmRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzNTMuZ290b0RhdGUobmV3IERhdGUoKSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogRGVzY3JpYmVzIG9wZW4vY2xvc2Ugc3RhdGUgb2YgZGF0ZXBpY2tlclxuICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgKi9cbiAgICAgIF90aGlzNTMuaXNPcGVuID0gZmFsc2U7XG4gICAgICByZXR1cm4gX3RoaXM1MztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRGF0ZXBpY2tlciwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5kZXN0cm95KCk7XG4gICAgICAgICQodGhpcy5tb2RhbEVsKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95U2VsZWN0cygpO1xuICAgICAgICB0aGlzLmVsLk1fRGF0ZXBpY2tlciA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVzdHJveVNlbGVjdHNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95U2VsZWN0cygpIHtcbiAgICAgICAgdmFyIG9sZFllYXJTZWxlY3QgPSB0aGlzLmNhbGVuZGFyRWwucXVlcnlTZWxlY3RvcignLm9yaWctc2VsZWN0LXllYXInKTtcbiAgICAgICAgaWYgKG9sZFllYXJTZWxlY3QpIHtcbiAgICAgICAgICBNLkZvcm1TZWxlY3QuZ2V0SW5zdGFuY2Uob2xkWWVhclNlbGVjdCkuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvbGRNb250aFNlbGVjdCA9IHRoaXMuY2FsZW5kYXJFbC5xdWVyeVNlbGVjdG9yKCcub3JpZy1zZWxlY3QtbW9udGgnKTtcbiAgICAgICAgaWYgKG9sZE1vbnRoU2VsZWN0KSB7XG4gICAgICAgICAgTS5Gb3JtU2VsZWN0LmdldEluc3RhbmNlKG9sZE1vbnRoU2VsZWN0KS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2luc2VydEhUTUxJbnRvRE9NXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2luc2VydEhUTUxJbnRvRE9NKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDbGVhckJ0bikge1xuICAgICAgICAgICQodGhpcy5jbGVhckJ0bikuY3NzKHsgdmlzaWJpbGl0eTogJycgfSk7XG4gICAgICAgICAgdGhpcy5jbGVhckJ0bi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaTE4bi5jbGVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9uZUJ0bi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaTE4bi5kb25lO1xuICAgICAgICB0aGlzLmNhbmNlbEJ0bi5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuaTE4bi5jYW5jZWw7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcbiAgICAgICAgICB0aGlzLiRtb2RhbEVsLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJG1vZGFsRWwuaW5zZXJ0QmVmb3JlKHRoaXMuZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cE1vZGFsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwTW9kYWwoKSB7XG4gICAgICAgIHZhciBfdGhpczU0ID0gdGhpcztcblxuICAgICAgICB0aGlzLm1vZGFsRWwuaWQgPSAnbW9kYWwtJyArIHRoaXMuaWQ7XG4gICAgICAgIHRoaXMubW9kYWwgPSBNLk1vZGFsLmluaXQodGhpcy5tb2RhbEVsLCB7XG4gICAgICAgICAgb25DbG9zZUVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM1NC5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKGZvcm1hdCkge1xuICAgICAgICB2YXIgX3RoaXM1NSA9IHRoaXM7XG5cbiAgICAgICAgZm9ybWF0ID0gZm9ybWF0IHx8IHRoaXMub3B0aW9ucy5mb3JtYXQ7XG4gICAgICAgIGlmICghRGF0ZXBpY2tlci5faXNEYXRlKHRoaXMuZGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0QXJyYXkgPSBmb3JtYXQuc3BsaXQoLyhkezEsNH18bXsxLDR9fHl7NH18eXl8IS4pL2cpO1xuICAgICAgICB2YXIgZm9ybWF0dGVkRGF0ZSA9IGZvcm1hdEFycmF5Lm1hcChmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgICBpZiAoX3RoaXM1NS5mb3JtYXRzW2xhYmVsXSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTUuZm9ybWF0c1tsYWJlbF0oKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0RGF0ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldERhdGUoZGF0ZSwgcHJldmVudE9uU2VsZWN0KSB7XG4gICAgICAgIGlmICghZGF0ZSkge1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyRGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5kcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLnBhcnNlKGRhdGUpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIURhdGVwaWNrZXIuX2lzRGF0ZShkYXRlKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm9wdGlvbnMubWluRGF0ZSxcbiAgICAgICAgICAgIG1heCA9IHRoaXMub3B0aW9ucy5tYXhEYXRlO1xuXG4gICAgICAgIGlmIChEYXRlcGlja2VyLl9pc0RhdGUobWluKSAmJiBkYXRlIDwgbWluKSB7XG4gICAgICAgICAgZGF0ZSA9IG1pbjtcbiAgICAgICAgfSBlbHNlIGlmIChEYXRlcGlja2VyLl9pc0RhdGUobWF4KSAmJiBkYXRlID4gbWF4KSB7XG4gICAgICAgICAgZGF0ZSA9IG1heDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJEYXRlRGlzcGxheSgpO1xuXG4gICAgICAgIERhdGVwaWNrZXIuX3NldFRvU3RhcnRPZkRheSh0aGlzLmRhdGUpO1xuICAgICAgICB0aGlzLmdvdG9EYXRlKHRoaXMuZGF0ZSk7XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T25TZWxlY3QgJiYgdHlwZW9mIHRoaXMub3B0aW9ucy5vblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdC5jYWxsKHRoaXMsIHRoaXMuZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0SW5wdXRWYWx1ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldElucHV0VmFsdWUoKSB7XG4gICAgICAgIHRoaXMuZWwudmFsdWUgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ2NoYW5nZScsIHsgZmlyZWRCeTogdGhpcyB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbmRlckRhdGVEaXNwbGF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlckRhdGVEaXNwbGF5KCkge1xuICAgICAgICB2YXIgZGlzcGxheURhdGUgPSBEYXRlcGlja2VyLl9pc0RhdGUodGhpcy5kYXRlKSA/IHRoaXMuZGF0ZSA6IG5ldyBEYXRlKCk7XG4gICAgICAgIHZhciBpMThuID0gdGhpcy5vcHRpb25zLmkxOG47XG4gICAgICAgIHZhciBkYXkgPSBpMThuLndlZWtkYXlzU2hvcnRbZGlzcGxheURhdGUuZ2V0RGF5KCldO1xuICAgICAgICB2YXIgbW9udGggPSBpMThuLm1vbnRoc1Nob3J0W2Rpc3BsYXlEYXRlLmdldE1vbnRoKCldO1xuICAgICAgICB2YXIgZGF0ZSA9IGRpc3BsYXlEYXRlLmdldERhdGUoKTtcbiAgICAgICAgdGhpcy55ZWFyVGV4dEVsLmlubmVySFRNTCA9IGRpc3BsYXlEYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMuZGF0ZVRleHRFbC5pbm5lckhUTUwgPSBkYXkgKyBcIiwgXCIgKyBtb250aCArIFwiIFwiICsgZGF0ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBjaGFuZ2UgdmlldyB0byBhIHNwZWNpZmljIGRhdGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdvdG9EYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ290b0RhdGUoZGF0ZSkge1xuICAgICAgICB2YXIgbmV3Q2FsZW5kYXIgPSB0cnVlO1xuXG4gICAgICAgIGlmICghRGF0ZXBpY2tlci5faXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2FsZW5kYXJzKSB7XG4gICAgICAgICAgdmFyIGZpcnN0VmlzaWJsZURhdGUgPSBuZXcgRGF0ZSh0aGlzLmNhbGVuZGFyc1swXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1swXS5tb250aCwgMSksXG4gICAgICAgICAgICAgIGxhc3RWaXNpYmxlRGF0ZSA9IG5ldyBEYXRlKHRoaXMuY2FsZW5kYXJzW3RoaXMuY2FsZW5kYXJzLmxlbmd0aCAtIDFdLnllYXIsIHRoaXMuY2FsZW5kYXJzW3RoaXMuY2FsZW5kYXJzLmxlbmd0aCAtIDFdLm1vbnRoLCAxKSxcbiAgICAgICAgICAgICAgdmlzaWJsZURhdGUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAvLyBnZXQgdGhlIGVuZCBvZiB0aGUgbW9udGhcbiAgICAgICAgICBsYXN0VmlzaWJsZURhdGUuc2V0TW9udGgobGFzdFZpc2libGVEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICBsYXN0VmlzaWJsZURhdGUuc2V0RGF0ZShsYXN0VmlzaWJsZURhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgICAgbmV3Q2FsZW5kYXIgPSB2aXNpYmxlRGF0ZSA8IGZpcnN0VmlzaWJsZURhdGUuZ2V0VGltZSgpIHx8IGxhc3RWaXNpYmxlRGF0ZS5nZXRUaW1lKCkgPCB2aXNpYmxlRGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdDYWxlbmRhcikge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJzID0gW3tcbiAgICAgICAgICAgIG1vbnRoOiBkYXRlLmdldE1vbnRoKCksXG4gICAgICAgICAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkanVzdENhbGVuZGFyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkanVzdENhbGVuZGFycygpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0gPSB0aGlzLmFkanVzdENhbGVuZGFyKHRoaXMuY2FsZW5kYXJzWzBdKTtcbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImFkanVzdENhbGVuZGFyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYWRqdXN0Q2FsZW5kYXIoY2FsZW5kYXIpIHtcbiAgICAgICAgaWYgKGNhbGVuZGFyLm1vbnRoIDwgMCkge1xuICAgICAgICAgIGNhbGVuZGFyLnllYXIgLT0gTWF0aC5jZWlsKE1hdGguYWJzKGNhbGVuZGFyLm1vbnRoKSAvIDEyKTtcbiAgICAgICAgICBjYWxlbmRhci5tb250aCArPSAxMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsZW5kYXIubW9udGggPiAxMSkge1xuICAgICAgICAgIGNhbGVuZGFyLnllYXIgKz0gTWF0aC5mbG9vcihNYXRoLmFicyhjYWxlbmRhci5tb250aCkgLyAxMik7XG4gICAgICAgICAgY2FsZW5kYXIubW9udGggLT0gMTI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGVuZGFyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJuZXh0TW9udGhcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBuZXh0TW9udGgoKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoKys7XG4gICAgICAgIHRoaXMuYWRqdXN0Q2FsZW5kYXJzKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInByZXZNb250aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXZNb250aCgpIHtcbiAgICAgICAgdGhpcy5jYWxlbmRhcnNbMF0ubW9udGgtLTtcbiAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKHllYXIsIG1vbnRoLCByYW5kSWQpIHtcbiAgICAgICAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgZGF5cyA9IERhdGVwaWNrZXIuX2dldERheXNJbk1vbnRoKHllYXIsIG1vbnRoKSxcbiAgICAgICAgICAgIGJlZm9yZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKS5nZXREYXkoKSxcbiAgICAgICAgICAgIGRhdGEgPSBbXSxcbiAgICAgICAgICAgIHJvdyA9IFtdO1xuICAgICAgICBEYXRlcGlja2VyLl9zZXRUb1N0YXJ0T2ZEYXkobm93KTtcbiAgICAgICAgaWYgKG9wdHMuZmlyc3REYXkgPiAwKSB7XG4gICAgICAgICAgYmVmb3JlIC09IG9wdHMuZmlyc3REYXk7XG4gICAgICAgICAgaWYgKGJlZm9yZSA8IDApIHtcbiAgICAgICAgICAgIGJlZm9yZSArPSA3O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJldmlvdXNNb250aCA9IG1vbnRoID09PSAwID8gMTEgOiBtb250aCAtIDEsXG4gICAgICAgICAgICBuZXh0TW9udGggPSBtb250aCA9PT0gMTEgPyAwIDogbW9udGggKyAxLFxuICAgICAgICAgICAgeWVhck9mUHJldmlvdXNNb250aCA9IG1vbnRoID09PSAwID8geWVhciAtIDEgOiB5ZWFyLFxuICAgICAgICAgICAgeWVhck9mTmV4dE1vbnRoID0gbW9udGggPT09IDExID8geWVhciArIDEgOiB5ZWFyLFxuICAgICAgICAgICAgZGF5c0luUHJldmlvdXNNb250aCA9IERhdGVwaWNrZXIuX2dldERheXNJbk1vbnRoKHllYXJPZlByZXZpb3VzTW9udGgsIHByZXZpb3VzTW9udGgpO1xuICAgICAgICB2YXIgY2VsbHMgPSBkYXlzICsgYmVmb3JlLFxuICAgICAgICAgICAgYWZ0ZXIgPSBjZWxscztcbiAgICAgICAgd2hpbGUgKGFmdGVyID4gNykge1xuICAgICAgICAgIGFmdGVyIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgY2VsbHMgKz0gNyAtIGFmdGVyO1xuICAgICAgICB2YXIgaXNXZWVrU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHIgPSAwOyBpIDwgY2VsbHM7IGkrKykge1xuICAgICAgICAgIHZhciBkYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSArIChpIC0gYmVmb3JlKSksXG4gICAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSBEYXRlcGlja2VyLl9pc0RhdGUodGhpcy5kYXRlKSA/IERhdGVwaWNrZXIuX2NvbXBhcmVEYXRlcyhkYXksIHRoaXMuZGF0ZSkgOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNUb2RheSA9IERhdGVwaWNrZXIuX2NvbXBhcmVEYXRlcyhkYXksIG5vdyksXG4gICAgICAgICAgICAgIGhhc0V2ZW50ID0gb3B0cy5ldmVudHMuaW5kZXhPZihkYXkudG9EYXRlU3RyaW5nKCkpICE9PSAtMSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNFbXB0eSA9IGkgPCBiZWZvcmUgfHwgaSA+PSBkYXlzICsgYmVmb3JlLFxuICAgICAgICAgICAgICBkYXlOdW1iZXIgPSAxICsgKGkgLSBiZWZvcmUpLFxuICAgICAgICAgICAgICBtb250aE51bWJlciA9IG1vbnRoLFxuICAgICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhcixcbiAgICAgICAgICAgICAgaXNTdGFydFJhbmdlID0gb3B0cy5zdGFydFJhbmdlICYmIERhdGVwaWNrZXIuX2NvbXBhcmVEYXRlcyhvcHRzLnN0YXJ0UmFuZ2UsIGRheSksXG4gICAgICAgICAgICAgIGlzRW5kUmFuZ2UgPSBvcHRzLmVuZFJhbmdlICYmIERhdGVwaWNrZXIuX2NvbXBhcmVEYXRlcyhvcHRzLmVuZFJhbmdlLCBkYXkpLFxuICAgICAgICAgICAgICBpc0luUmFuZ2UgPSBvcHRzLnN0YXJ0UmFuZ2UgJiYgb3B0cy5lbmRSYW5nZSAmJiBvcHRzLnN0YXJ0UmFuZ2UgPCBkYXkgJiYgZGF5IDwgb3B0cy5lbmRSYW5nZSxcbiAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IG9wdHMubWluRGF0ZSAmJiBkYXkgPCBvcHRzLm1pbkRhdGUgfHwgb3B0cy5tYXhEYXRlICYmIGRheSA+IG9wdHMubWF4RGF0ZSB8fCBvcHRzLmRpc2FibGVXZWVrZW5kcyAmJiBEYXRlcGlja2VyLl9pc1dlZWtlbmQoZGF5KSB8fCBvcHRzLmRpc2FibGVEYXlGbiAmJiBvcHRzLmRpc2FibGVEYXlGbihkYXkpO1xuXG4gICAgICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgICAgIGlmIChpIDwgYmVmb3JlKSB7XG4gICAgICAgICAgICAgIGRheU51bWJlciA9IGRheXNJblByZXZpb3VzTW9udGggKyBkYXlOdW1iZXI7XG4gICAgICAgICAgICAgIG1vbnRoTnVtYmVyID0gcHJldmlvdXNNb250aDtcbiAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJPZlByZXZpb3VzTW9udGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXlOdW1iZXIgPSBkYXlOdW1iZXIgLSBkYXlzO1xuICAgICAgICAgICAgICBtb250aE51bWJlciA9IG5leHRNb250aDtcbiAgICAgICAgICAgICAgeWVhck51bWJlciA9IHllYXJPZk5leHRNb250aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGF5Q29uZmlnID0ge1xuICAgICAgICAgICAgZGF5OiBkYXlOdW1iZXIsXG4gICAgICAgICAgICBtb250aDogbW9udGhOdW1iZXIsXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyTnVtYmVyLFxuICAgICAgICAgICAgaGFzRXZlbnQ6IGhhc0V2ZW50LFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIGlzVG9kYXk6IGlzVG9kYXksXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgaXNFbXB0eTogaXNFbXB0eSxcbiAgICAgICAgICAgIGlzU3RhcnRSYW5nZTogaXNTdGFydFJhbmdlLFxuICAgICAgICAgICAgaXNFbmRSYW5nZTogaXNFbmRSYW5nZSxcbiAgICAgICAgICAgIGlzSW5SYW5nZTogaXNJblJhbmdlLFxuICAgICAgICAgICAgc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRoczogb3B0cy5zaG93RGF5c0luTmV4dEFuZFByZXZpb3VzTW9udGhzXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHJvdy5wdXNoKHRoaXMucmVuZGVyRGF5KGRheUNvbmZpZykpO1xuXG4gICAgICAgICAgaWYgKCsrciA9PT0gNykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKHRoaXMucmVuZGVyUm93KHJvdywgb3B0cy5pc1JUTCwgaXNXZWVrU2VsZWN0ZWQpKTtcbiAgICAgICAgICAgIHJvdyA9IFtdO1xuICAgICAgICAgICAgciA9IDA7XG4gICAgICAgICAgICBpc1dlZWtTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWJsZShvcHRzLCBkYXRhLCByYW5kSWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJEYXlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEYXkob3B0cykge1xuICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgIHZhciBhcmlhU2VsZWN0ZWQgPSAnZmFsc2UnO1xuICAgICAgICBpZiAob3B0cy5pc0VtcHR5KSB7XG4gICAgICAgICAgaWYgKG9wdHMuc2hvd0RheXNJbk5leHRBbmRQcmV2aW91c01vbnRocykge1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLW91dHNpZGUtY3VycmVudC1tb250aCcpO1xuICAgICAgICAgICAgYXJyLnB1c2goJ2lzLXNlbGVjdGlvbi1kaXNhYmxlZCcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJzx0ZCBjbGFzcz1cImlzLWVtcHR5XCI+PC90ZD4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy5pc1RvZGF5KSB7XG4gICAgICAgICAgYXJyLnB1c2goJ2lzLXRvZGF5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgIGFyci5wdXNoKCdpcy1zZWxlY3RlZCcpO1xuICAgICAgICAgIGFyaWFTZWxlY3RlZCA9ICd0cnVlJztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5oYXNFdmVudCkge1xuICAgICAgICAgIGFyci5wdXNoKCdoYXMtZXZlbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0cy5pc0luUmFuZ2UpIHtcbiAgICAgICAgICBhcnIucHVzaCgnaXMtaW5yYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRzLmlzU3RhcnRSYW5nZSkge1xuICAgICAgICAgIGFyci5wdXNoKCdpcy1zdGFydHJhbmdlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdHMuaXNFbmRSYW5nZSkge1xuICAgICAgICAgIGFyci5wdXNoKCdpcy1lbmRyYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIjx0ZCBkYXRhLWRheT1cXFwiXCIgKyBvcHRzLmRheSArIFwiXFxcIiBjbGFzcz1cXFwiXCIgKyBhcnIuam9pbignICcpICsgXCJcXFwiIGFyaWEtc2VsZWN0ZWQ9XFxcIlwiICsgYXJpYVNlbGVjdGVkICsgXCJcXFwiPlwiICsgKFwiPGJ1dHRvbiBjbGFzcz1cXFwiZGF0ZXBpY2tlci1kYXktYnV0dG9uXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEteWVhcj1cXFwiXCIgKyBvcHRzLnllYXIgKyBcIlxcXCIgZGF0YS1tb250aD1cXFwiXCIgKyBvcHRzLm1vbnRoICsgXCJcXFwiIGRhdGEtZGF5PVxcXCJcIiArIG9wdHMuZGF5ICsgXCJcXFwiPlwiICsgb3B0cy5kYXkgKyBcIjwvYnV0dG9uPlwiKSArICc8L3RkPic7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlclJvd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJvdyhkYXlzLCBpc1JUTCwgaXNSb3dTZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gJzx0ciBjbGFzcz1cImRhdGVwaWNrZXItcm93JyArIChpc1Jvd1NlbGVjdGVkID8gJyBpcy1zZWxlY3RlZCcgOiAnJykgKyAnXCI+JyArIChpc1JUTCA/IGRheXMucmV2ZXJzZSgpIDogZGF5cykuam9pbignJykgKyAnPC90cj4nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJUYWJsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRhYmxlKG9wdHMsIGRhdGEsIHJhbmRJZCkge1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLXRhYmxlLXdyYXBwZXJcIj48dGFibGUgY2VsbHBhZGRpbmc9XCIwXCIgY2VsbHNwYWNpbmc9XCIwXCIgY2xhc3M9XCJkYXRlcGlja2VyLXRhYmxlXCIgcm9sZT1cImdyaWRcIiBhcmlhLWxhYmVsbGVkYnk9XCInICsgcmFuZElkICsgJ1wiPicgKyB0aGlzLnJlbmRlckhlYWQob3B0cykgKyB0aGlzLnJlbmRlckJvZHkoZGF0YSkgKyAnPC90YWJsZT48L2Rpdj4nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJIZWFkXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySGVhZChvcHRzKSB7XG4gICAgICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICAgICAgYXJyID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICBhcnIucHVzaChcIjx0aCBzY29wZT1cXFwiY29sXFxcIj48YWJiciB0aXRsZT1cXFwiXCIgKyB0aGlzLnJlbmRlckRheU5hbWUob3B0cywgaSkgKyBcIlxcXCI+XCIgKyB0aGlzLnJlbmRlckRheU5hbWUob3B0cywgaSwgdHJ1ZSkgKyBcIjwvYWJicj48L3RoPlwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJzx0aGVhZD48dHI+JyArIChvcHRzLmlzUlRMID8gYXJyLnJldmVyc2UoKSA6IGFycikuam9pbignJykgKyAnPC90cj48L3RoZWFkPic7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckJvZHlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJCb2R5KHJvd3MpIHtcbiAgICAgICAgcmV0dXJuICc8dGJvZHk+JyArIHJvd3Muam9pbignJykgKyAnPC90Ym9keT4nO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJyZW5kZXJUaXRsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGluc3RhbmNlLCBjLCB5ZWFyLCBtb250aCwgcmVmWWVhciwgcmFuZElkKSB7XG4gICAgICAgIHZhciBpID0gdm9pZCAwLFxuICAgICAgICAgICAgaiA9IHZvaWQgMCxcbiAgICAgICAgICAgIGFyciA9IHZvaWQgMCxcbiAgICAgICAgICAgIG9wdHMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBpc01pblllYXIgPSB5ZWFyID09PSBvcHRzLm1pblllYXIsXG4gICAgICAgICAgICBpc01heFllYXIgPSB5ZWFyID09PSBvcHRzLm1heFllYXIsXG4gICAgICAgICAgICBodG1sID0gJzxkaXYgaWQ9XCInICsgcmFuZElkICsgJ1wiIGNsYXNzPVwiZGF0ZXBpY2tlci1jb250cm9sc1wiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCI+JyxcbiAgICAgICAgICAgIG1vbnRoSHRtbCA9IHZvaWQgMCxcbiAgICAgICAgICAgIHllYXJIdG1sID0gdm9pZCAwLFxuICAgICAgICAgICAgcHJldiA9IHRydWUsXG4gICAgICAgICAgICBuZXh0ID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGFyciA9IFtdLCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgICAgICBhcnIucHVzaCgnPG9wdGlvbiB2YWx1ZT1cIicgKyAoeWVhciA9PT0gcmVmWWVhciA/IGkgLSBjIDogMTIgKyBpIC0gYykgKyAnXCInICsgKGkgPT09IG1vbnRoID8gJyBzZWxlY3RlZD1cInNlbGVjdGVkXCInIDogJycpICsgKGlzTWluWWVhciAmJiBpIDwgb3B0cy5taW5Nb250aCB8fCBpc01heFllYXIgJiYgaSA+IG9wdHMubWF4TW9udGggPyAnZGlzYWJsZWQ9XCJkaXNhYmxlZFwiJyA6ICcnKSArICc+JyArIG9wdHMuaTE4bi5tb250aHNbaV0gKyAnPC9vcHRpb24+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBtb250aEh0bWwgPSAnPHNlbGVjdCBjbGFzcz1cImRhdGVwaWNrZXItc2VsZWN0IG9yaWctc2VsZWN0LW1vbnRoXCIgdGFiaW5kZXg9XCItMVwiPicgKyBhcnIuam9pbignJykgKyAnPC9zZWxlY3Q+JztcblxuICAgICAgICBpZiAoJC5pc0FycmF5KG9wdHMueWVhclJhbmdlKSkge1xuICAgICAgICAgIGkgPSBvcHRzLnllYXJSYW5nZVswXTtcbiAgICAgICAgICBqID0gb3B0cy55ZWFyUmFuZ2VbMV0gKyAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkgPSB5ZWFyIC0gb3B0cy55ZWFyUmFuZ2U7XG4gICAgICAgICAgaiA9IDEgKyB5ZWFyICsgb3B0cy55ZWFyUmFuZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGFyciA9IFtdOyBpIDwgaiAmJiBpIDw9IG9wdHMubWF4WWVhcjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGkgPj0gb3B0cy5taW5ZZWFyKSB7XG4gICAgICAgICAgICBhcnIucHVzaChcIjxvcHRpb24gdmFsdWU9XFxcIlwiICsgaSArIFwiXFxcIiBcIiArIChpID09PSB5ZWFyID8gJ3NlbGVjdGVkPVwic2VsZWN0ZWRcIicgOiAnJykgKyBcIj5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5ZWFySHRtbCA9IFwiPHNlbGVjdCBjbGFzcz1cXFwiZGF0ZXBpY2tlci1zZWxlY3Qgb3JpZy1zZWxlY3QteWVhclxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cIiArIGFyci5qb2luKCcnKSArIFwiPC9zZWxlY3Q+XCI7XG5cbiAgICAgICAgdmFyIGxlZnRBcnJvdyA9ICc8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTE1LjQxIDE2LjA5bC00LjU4LTQuNTkgNC41OC00LjU5TDE0IDUuNWwtNiA2IDYgNnpcIi8+PHBhdGggZD1cIk0wLS41aDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PC9zdmc+JztcbiAgICAgICAgaHRtbCArPSBcIjxidXR0b24gY2xhc3M9XFxcIm1vbnRoLXByZXZcIiArIChwcmV2ID8gJycgOiAnIGlzLWRpc2FibGVkJykgKyBcIlxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj5cIiArIGxlZnRBcnJvdyArIFwiPC9idXR0b24+XCI7XG5cbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cInNlbGVjdHMtY29udGFpbmVyXCI+JztcbiAgICAgICAgaWYgKG9wdHMuc2hvd01vbnRoQWZ0ZXJZZWFyKSB7XG4gICAgICAgICAgaHRtbCArPSB5ZWFySHRtbCArIG1vbnRoSHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sICs9IG1vbnRoSHRtbCArIHllYXJIdG1sO1xuICAgICAgICB9XG4gICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgICAgaWYgKGlzTWluWWVhciAmJiAobW9udGggPT09IDAgfHwgb3B0cy5taW5Nb250aCA+PSBtb250aCkpIHtcbiAgICAgICAgICBwcmV2ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNNYXhZZWFyICYmIChtb250aCA9PT0gMTEgfHwgb3B0cy5tYXhNb250aCA8PSBtb250aCkpIHtcbiAgICAgICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmlnaHRBcnJvdyA9ICc8c3ZnIGZpbGw9XCIjMDAwMDAwXCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwiTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6XCIvPjxwYXRoIGQ9XCJNMC0uMjVoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48L3N2Zz4nO1xuICAgICAgICBodG1sICs9IFwiPGJ1dHRvbiBjbGFzcz1cXFwibW9udGgtbmV4dFwiICsgKG5leHQgPyAnJyA6ICcgaXMtZGlzYWJsZWQnKSArIFwiXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPlwiICsgcmlnaHRBcnJvdyArIFwiPC9idXR0b24+XCI7XG5cbiAgICAgICAgcmV0dXJuIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogcmVmcmVzaCB0aGUgSFRNTFxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZHJhd1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRyYXcoZm9yY2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiAmJiAhZm9yY2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBtaW5ZZWFyID0gb3B0cy5taW5ZZWFyLFxuICAgICAgICAgICAgbWF4WWVhciA9IG9wdHMubWF4WWVhcixcbiAgICAgICAgICAgIG1pbk1vbnRoID0gb3B0cy5taW5Nb250aCxcbiAgICAgICAgICAgIG1heE1vbnRoID0gb3B0cy5tYXhNb250aCxcbiAgICAgICAgICAgIGh0bWwgPSAnJyxcbiAgICAgICAgICAgIHJhbmRJZCA9IHZvaWQgMDtcblxuICAgICAgICBpZiAodGhpcy5feSA8PSBtaW5ZZWFyKSB7XG4gICAgICAgICAgdGhpcy5feSA9IG1pblllYXI7XG4gICAgICAgICAgaWYgKCFpc05hTihtaW5Nb250aCkgJiYgdGhpcy5fbSA8IG1pbk1vbnRoKSB7XG4gICAgICAgICAgICB0aGlzLl9tID0gbWluTW9udGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl95ID49IG1heFllYXIpIHtcbiAgICAgICAgICB0aGlzLl95ID0gbWF4WWVhcjtcbiAgICAgICAgICBpZiAoIWlzTmFOKG1heE1vbnRoKSAmJiB0aGlzLl9tID4gbWF4TW9udGgpIHtcbiAgICAgICAgICAgIHRoaXMuX20gPSBtYXhNb250aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByYW5kSWQgPSAnZGF0ZXBpY2tlci10aXRsZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJykuc3Vic3RyKDAsIDIpO1xuXG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMTsgYysrKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyRGF0ZURpc3BsYXkoKTtcbiAgICAgICAgICBodG1sICs9IHRoaXMucmVuZGVyVGl0bGUodGhpcywgYywgdGhpcy5jYWxlbmRhcnNbY10ueWVhciwgdGhpcy5jYWxlbmRhcnNbY10ubW9udGgsIHRoaXMuY2FsZW5kYXJzWzBdLnllYXIsIHJhbmRJZCkgKyB0aGlzLnJlbmRlcih0aGlzLmNhbGVuZGFyc1tjXS55ZWFyLCB0aGlzLmNhbGVuZGFyc1tjXS5tb250aCwgcmFuZElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVzdHJveVNlbGVjdHMoKTtcblxuICAgICAgICB0aGlzLmNhbGVuZGFyRWwuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgICAvLyBJbml0IE1hdGVyaWFsaXplIFNlbGVjdFxuICAgICAgICB2YXIgeWVhclNlbGVjdCA9IHRoaXMuY2FsZW5kYXJFbC5xdWVyeVNlbGVjdG9yKCcub3JpZy1zZWxlY3QteWVhcicpO1xuICAgICAgICB2YXIgbW9udGhTZWxlY3QgPSB0aGlzLmNhbGVuZGFyRWwucXVlcnlTZWxlY3RvcignLm9yaWctc2VsZWN0LW1vbnRoJyk7XG4gICAgICAgIE0uRm9ybVNlbGVjdC5pbml0KHllYXJTZWxlY3QsIHtcbiAgICAgICAgICBjbGFzc2VzOiAnc2VsZWN0LXllYXInLFxuICAgICAgICAgIGRyb3Bkb3duT3B0aW9uczogeyBjb250YWluZXI6IGRvY3VtZW50LmJvZHksIGNvbnN0cmFpbldpZHRoOiBmYWxzZSB9XG4gICAgICAgIH0pO1xuICAgICAgICBNLkZvcm1TZWxlY3QuaW5pdChtb250aFNlbGVjdCwge1xuICAgICAgICAgIGNsYXNzZXM6ICdzZWxlY3QtbW9udGgnLFxuICAgICAgICAgIGRyb3Bkb3duT3B0aW9uczogeyBjb250YWluZXI6IGRvY3VtZW50LmJvZHksIGNvbnN0cmFpbldpZHRoOiBmYWxzZSB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFkZCBjaGFuZ2UgaGFuZGxlcnMgZm9yIHNlbGVjdFxuICAgICAgICB5ZWFyU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZVllYXJDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIG1vbnRoU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZU1vbnRoQ2hhbmdlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uRHJhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkRyYXcodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRLZXlkb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRDaGFuZ2VCb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhbGVuZGFyQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNhbGVuZGFyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5fZmluaXNoU2VsZWN0aW9uQm91bmQgPSB0aGlzLl9maW5pc2hTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlTW9udGhDaGFuZ2UgPSB0aGlzLl9oYW5kbGVNb250aENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jbG9zZUJvdW5kID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd25Cb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5faGFuZGxlSW5wdXRDaGFuZ2VCb3VuZCk7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNhbGVuZGFyQ2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2ZpbmlzaFNlbGVjdGlvbkJvdW5kKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9jbG9zZUJvdW5kKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dDbGVhckJ0bikge1xuICAgICAgICAgIHRoaXMuX2hhbmRsZUNsZWFyQ2xpY2tCb3VuZCA9IHRoaXMuX2hhbmRsZUNsZWFyQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLmNsZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2xlYXJDbGlja0JvdW5kKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBWYXJpYWJsZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBWYXJpYWJsZXMoKSB7XG4gICAgICAgIHZhciBfdGhpczU2ID0gdGhpcztcblxuICAgICAgICB0aGlzLiRtb2RhbEVsID0gJChEYXRlcGlja2VyLl90ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMubW9kYWxFbCA9IHRoaXMuJG1vZGFsRWxbMF07XG5cbiAgICAgICAgdGhpcy5jYWxlbmRhckVsID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlcGlja2VyLWNhbGVuZGFyJyk7XG5cbiAgICAgICAgdGhpcy55ZWFyVGV4dEVsID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy55ZWFyLXRleHQnKTtcbiAgICAgICAgdGhpcy5kYXRlVGV4dEVsID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXRleHQnKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93Q2xlYXJCdG4pIHtcbiAgICAgICAgICB0aGlzLmNsZWFyQnRuID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlcGlja2VyLWNsZWFyJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb25lQnRuID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlcGlja2VyLWRvbmUnKTtcbiAgICAgICAgdGhpcy5jYW5jZWxCdG4gPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLmRhdGVwaWNrZXItY2FuY2VsJyk7XG5cbiAgICAgICAgdGhpcy5mb3JtYXRzID0ge1xuICAgICAgICAgIGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczU2LmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkID0gX3RoaXM1Ni5kYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiAoZCA8IDEwID8gJzAnIDogJycpICsgZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYub3B0aW9ucy5pMThuLndlZWtkYXlzU2hvcnRbX3RoaXM1Ni5kYXRlLmdldERheSgpXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRkZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczU2Lm9wdGlvbnMuaTE4bi53ZWVrZGF5c1tfdGhpczU2LmRhdGUuZ2V0RGF5KCldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYuZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1tOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbSA9IF90aGlzNTYuZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgICAgIHJldHVybiAobSA8IDEwID8gJzAnIDogJycpICsgbTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1tbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzNTYub3B0aW9ucy5pMThuLm1vbnRoc1Nob3J0W190aGlzNTYuZGF0ZS5nZXRNb250aCgpXTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1tbW06IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczU2Lm9wdGlvbnMuaTE4bi5tb250aHNbX3RoaXM1Ni5kYXRlLmdldE1vbnRoKCldO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoJycgKyBfdGhpczU2LmRhdGUuZ2V0RnVsbFllYXIoKSkuc2xpY2UoMik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB5eXl5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM1Ni5kYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVJbnB1dENoYW5nZUJvdW5kKTtcbiAgICAgICAgdGhpcy5jYWxlbmRhckVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlQ2FsZW5kYXJDbGlja0JvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEtleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRLZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5FTlRFUikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2FsZW5kYXJDbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDYWxlbmRhckNsaWNrKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciAkdGFyZ2V0ID0gJChlLnRhcmdldCk7XG4gICAgICAgIGlmICghJHRhcmdldC5oYXNDbGFzcygnaXMtZGlzYWJsZWQnKSkge1xuICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdkYXRlcGlja2VyLWRheS1idXR0b24nKSAmJiAhJHRhcmdldC5oYXNDbGFzcygnaXMtZW1wdHknKSAmJiAhJHRhcmdldC5wYXJlbnQoKS5oYXNDbGFzcygnaXMtZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRlKG5ldyBEYXRlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15ZWFyJyksIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1tb250aCcpLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGF5JykpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b0Nsb3NlKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2ZpbmlzaFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoJHRhcmdldC5jbG9zZXN0KCcubW9udGgtcHJldicpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2TW9udGgoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCR0YXJnZXQuY2xvc2VzdCgnLm1vbnRoLW5leHQnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dE1vbnRoKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDbGVhckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsZWFyQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVNb250aENoYW5nZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVNb250aENoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuZ290b01vbnRoKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVllYXJDaGFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlWWVhckNoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuZ290b1llYXIoZS50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIGNoYW5nZSB2aWV3IHRvIGEgc3BlY2lmaWMgbW9udGggKHplcm8taW5kZXgsIGUuZy4gMDogSmFudWFyeSlcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdvdG9Nb250aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdvdG9Nb250aChtb250aCkge1xuICAgICAgICBpZiAoIWlzTmFOKG1vbnRoKSkge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLm1vbnRoID0gcGFyc2VJbnQobW9udGgsIDEwKTtcbiAgICAgICAgICB0aGlzLmFkanVzdENhbGVuZGFycygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogY2hhbmdlIHZpZXcgdG8gYSBzcGVjaWZpYyBmdWxsIHllYXIgKGUuZy4gXCIyMDEyXCIpXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJnb3RvWWVhclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdvdG9ZZWFyKHllYXIpIHtcbiAgICAgICAgaWYgKCFpc05hTih5ZWFyKSkge1xuICAgICAgICAgIHRoaXMuY2FsZW5kYXJzWzBdLnllYXIgPSBwYXJzZUludCh5ZWFyLCAxMCk7XG4gICAgICAgICAgdGhpcy5hZGp1c3RDYWxlbmRhcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlSW5wdXRDaGFuZ2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgICAgICB2YXIgZGF0ZSA9IHZvaWQgMDtcblxuICAgICAgICAvLyBQcmV2ZW50IGNoYW5nZSBldmVudCBmcm9tIGJlaW5nIGZpcmVkIHdoZW4gdHJpZ2dlcmVkIGJ5IHRoZSBwbHVnaW5cbiAgICAgICAgaWYgKGUuZmlyZWRCeSA9PT0gdGhpcykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBhcnNlKSB7XG4gICAgICAgICAgZGF0ZSA9IHRoaXMub3B0aW9ucy5wYXJzZSh0aGlzLmVsLnZhbHVlLCB0aGlzLm9wdGlvbnMuZm9ybWF0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5wYXJzZSh0aGlzLmVsLnZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRGF0ZXBpY2tlci5faXNEYXRlKGRhdGUpKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRlKGRhdGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInJlbmRlckRheU5hbWVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJEYXlOYW1lKG9wdHMsIGRheSwgYWJicikge1xuICAgICAgICBkYXkgKz0gb3B0cy5maXJzdERheTtcbiAgICAgICAgd2hpbGUgKGRheSA+PSA3KSB7XG4gICAgICAgICAgZGF5IC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFiYnIgPyBvcHRzLmkxOG4ud2Vla2RheXNBYmJyZXZbZGF5XSA6IG9wdHMuaTE4bi53ZWVrZGF5c1tkYXldO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBpbnB1dCB2YWx1ZSB0byB0aGUgc2VsZWN0ZWQgZGF0ZSBhbmQgY2xvc2UgRGF0ZXBpY2tlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2ZpbmlzaFNlbGVjdGlvblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9maW5pc2hTZWxlY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBEYXRlcGlja2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJvcGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25PcGVuLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgIHRoaXMubW9kYWwub3BlbigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDbG9zZSBEYXRlcGlja2VyXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbG9zZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkNsb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoRGF0ZXBpY2tlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERhdGVwaWNrZXIpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaXNEYXRlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2lzRGF0ZShvYmopIHtcbiAgICAgICAgcmV0dXJuICgvRGF0ZS8udGVzdChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgJiYgIWlzTmFOKG9iai5nZXRUaW1lKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pc1dlZWtlbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNXZWVrZW5kKGRhdGUpIHtcbiAgICAgICAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBkYXkgPT09IDAgfHwgZGF5ID09PSA2O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0VG9TdGFydE9mRGF5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFRvU3RhcnRPZkRheShkYXRlKSB7XG4gICAgICAgIGlmIChEYXRlcGlja2VyLl9pc0RhdGUoZGF0ZSkpIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9nZXREYXlzSW5Nb250aFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXREYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICAgICAgICByZXR1cm4gWzMxLCBEYXRlcGlja2VyLl9pc0xlYXBZZWFyKHllYXIpID8gMjkgOiAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdW21vbnRoXTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2lzTGVhcFllYXJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNMZWFwWWVhcih5ZWFyKSB7XG4gICAgICAgIC8vIHNvbHV0aW9uIGJ5IE1hdHRpIFZpcmtrdW5lbjogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDg4MTk1MVxuICAgICAgICByZXR1cm4geWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY29tcGFyZURhdGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NvbXBhcmVEYXRlcyhhLCBiKSB7XG4gICAgICAgIC8vIHdlYWsgZGF0ZSBjb21wYXJpc29uICh1c2Ugc2V0VG9TdGFydE9mRGF5KGRhdGUpIHRvIGVuc3VyZSBjb3JyZWN0IHJlc3VsdClcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldFRvU3RhcnRPZkRheVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRUb1N0YXJ0T2ZEYXkoZGF0ZSkge1xuICAgICAgICBpZiAoRGF0ZXBpY2tlci5faXNEYXRlKGRhdGUpKSBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9EYXRlcGlja2VyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERhdGVwaWNrZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBEYXRlcGlja2VyLl90ZW1wbGF0ZSA9IFsnPGRpdiBjbGFzcz0gXCJtb2RhbCBkYXRlcGlja2VyLW1vZGFsXCI+JywgJzxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGRhdGVwaWNrZXItY29udGFpbmVyXCI+JywgJzxkaXYgY2xhc3M9XCJkYXRlcGlja2VyLWRhdGUtZGlzcGxheVwiPicsICc8c3BhbiBjbGFzcz1cInllYXItdGV4dFwiPjwvc3Bhbj4nLCAnPHNwYW4gY2xhc3M9XCJkYXRlLXRleHRcIj48L3NwYW4+JywgJzwvZGl2PicsICc8ZGl2IGNsYXNzPVwiZGF0ZXBpY2tlci1jYWxlbmRhci1jb250YWluZXJcIj4nLCAnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItY2FsZW5kYXJcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cImRhdGVwaWNrZXItZm9vdGVyXCI+JywgJzxidXR0b24gY2xhc3M9XCJidG4tZmxhdCBkYXRlcGlja2VyLWNsZWFyIHdhdmVzLWVmZmVjdFwiIHN0eWxlPVwidmlzaWJpbGl0eTogaGlkZGVuO1wiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nLCAnPGRpdiBjbGFzcz1cImNvbmZpcm1hdGlvbi1idG5zXCI+JywgJzxidXR0b24gY2xhc3M9XCJidG4tZmxhdCBkYXRlcGlja2VyLWNhbmNlbCB3YXZlcy1lZmZlY3RcIiB0eXBlPVwiYnV0dG9uXCI+PC9idXR0b24+JywgJzxidXR0b24gY2xhc3M9XCJidG4tZmxhdCBkYXRlcGlja2VyLWRvbmUgd2F2ZXMtZWZmZWN0XCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPicsICc8L2Rpdj4nLCAnPC9kaXY+JywgJzwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+J10uam9pbignJyk7XG5cbiAgTS5EYXRlcGlja2VyID0gRGF0ZXBpY2tlcjtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKERhdGVwaWNrZXIsICdkYXRlcGlja2VyJywgJ01fRGF0ZXBpY2tlcicpO1xuICB9XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgZGlhbFJhZGl1czogMTM1LFxuICAgIG91dGVyUmFkaXVzOiAxMDUsXG4gICAgaW5uZXJSYWRpdXM6IDcwLFxuICAgIHRpY2tSYWRpdXM6IDIwLFxuICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgY29udGFpbmVyOiBudWxsLFxuICAgIGRlZmF1bHRUaW1lOiAnbm93JywgLy8gZGVmYXVsdCB0aW1lLCAnbm93JyBvciAnMTM6MTQnIGUuZy5cbiAgICBmcm9tTm93OiAwLCAvLyBNaWxsaXNlY29uZCBvZmZzZXQgZnJvbSB0aGUgZGVmYXVsdFRpbWVcbiAgICBzaG93Q2xlYXJCdG46IGZhbHNlLFxuXG4gICAgLy8gaW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICBpMThuOiB7XG4gICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICBkb25lOiAnT2snXG4gICAgfSxcblxuICAgIGF1dG9DbG9zZTogZmFsc2UsIC8vIGF1dG8gY2xvc2Ugd2hlbiBtaW51dGUgaXMgc2VsZWN0ZWRcbiAgICB0d2VsdmVIb3VyOiB0cnVlLCAvLyBjaGFuZ2UgdG8gMTIgaG91ciBBTS9QTSBjbG9jayBmcm9tIDI0IGhvdXJcbiAgICB2aWJyYXRlOiB0cnVlLCAvLyB2aWJyYXRlIHRoZSBkZXZpY2Ugd2hlbiBkcmFnZ2luZyBjbG9jayBoYW5kXG5cbiAgICAvLyBDYWxsYmFja3NcbiAgICBvbk9wZW5TdGFydDogbnVsbCxcbiAgICBvbk9wZW5FbmQ6IG51bGwsXG4gICAgb25DbG9zZVN0YXJ0OiBudWxsLFxuICAgIG9uQ2xvc2VFbmQ6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGxcbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBUaW1lcGlja2VyID0gZnVuY3Rpb24gKF9Db21wb25lbnQxNikge1xuICAgIF9pbmhlcml0cyhUaW1lcGlja2VyLCBfQ29tcG9uZW50MTYpO1xuXG4gICAgZnVuY3Rpb24gVGltZXBpY2tlcihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVwaWNrZXIpO1xuXG4gICAgICB2YXIgX3RoaXM1NyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChUaW1lcGlja2VyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGltZXBpY2tlcikpLmNhbGwodGhpcywgVGltZXBpY2tlciwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM1Ny5lbC5NX1RpbWVwaWNrZXIgPSBfdGhpczU3O1xuXG4gICAgICBfdGhpczU3Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVGltZXBpY2tlci5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNTcuaWQgPSBNLmd1aWQoKTtcbiAgICAgIF90aGlzNTcuX2luc2VydEhUTUxJbnRvRE9NKCk7XG4gICAgICBfdGhpczU3Ll9zZXR1cE1vZGFsKCk7XG4gICAgICBfdGhpczU3Ll9zZXR1cFZhcmlhYmxlcygpO1xuICAgICAgX3RoaXM1Ny5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG5cbiAgICAgIF90aGlzNTcuX2Nsb2NrU2V0dXAoKTtcbiAgICAgIF90aGlzNTcuX3BpY2tlclNldHVwKCk7XG4gICAgICByZXR1cm4gX3RoaXM1NztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVGltZXBpY2tlciwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5kZXN0cm95KCk7XG4gICAgICAgICQodGhpcy5tb2RhbEVsKS5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5lbC5NX1RpbWVwaWNrZXIgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dEtleWRvd25Cb3VuZCA9IHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVJbnB1dENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNsb2NrQ2xpY2tTdGFydEJvdW5kID0gdGhpcy5faGFuZGxlQ2xvY2tDbGlja1N0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlQm91bmQgPSB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrTW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrRW5kQm91bmQgPSB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrRW5kLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgICAgdGhpcy5wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVDbG9ja0NsaWNrU3RhcnRCb3VuZCk7XG4gICAgICAgIHRoaXMucGxhdGUuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZUNsb2NrQ2xpY2tTdGFydEJvdW5kKTtcblxuICAgICAgICAkKHRoaXMuc3BhbkhvdXJzKS5vbignY2xpY2snLCB0aGlzLnNob3dWaWV3LmJpbmQodGhpcywgJ2hvdXJzJykpO1xuICAgICAgICAkKHRoaXMuc3Bhbk1pbnV0ZXMpLm9uKCdjbGljaycsIHRoaXMuc2hvd1ZpZXcuYmluZCh0aGlzLCAnbWludXRlcycpKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUlucHV0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUlucHV0S2V5ZG93bkJvdW5kKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUlucHV0Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRDbGljaygpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dEtleWRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlSW5wdXRLZXlkb3duKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IE0ua2V5cy5FTlRFUikge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlQ2xvY2tDbGlja1N0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUNsb2NrQ2xpY2tTdGFydChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNsb2NrUGxhdGVCUiA9IHRoaXMucGxhdGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBvZmZzZXQgPSB7IHg6IGNsb2NrUGxhdGVCUi5sZWZ0LCB5OiBjbG9ja1BsYXRlQlIudG9wIH07XG5cbiAgICAgICAgdGhpcy54MCA9IG9mZnNldC54ICsgdGhpcy5vcHRpb25zLmRpYWxSYWRpdXM7XG4gICAgICAgIHRoaXMueTAgPSBvZmZzZXQueSArIHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzO1xuICAgICAgICB0aGlzLm1vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjbGlja1BvcyA9IFRpbWVwaWNrZXIuX1BvcyhlKTtcbiAgICAgICAgdGhpcy5keCA9IGNsaWNrUG9zLnggLSB0aGlzLngwO1xuICAgICAgICB0aGlzLmR5ID0gY2xpY2tQb3MueSAtIHRoaXMueTA7XG5cbiAgICAgICAgLy8gU2V0IGNsb2NrIGhhbmRzXG4gICAgICAgIHRoaXMuc2V0SGFuZCh0aGlzLmR4LCB0aGlzLmR5LCBmYWxzZSk7XG5cbiAgICAgICAgLy8gTW91c2Vtb3ZlIG9uIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tNb3ZlQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrTW92ZUJvdW5kKTtcblxuICAgICAgICAvLyBNb3VzZXVwIG9uIGRvY3VtZW50XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrRW5kQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRCb3VuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEb2N1bWVudENsaWNrTW92ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVEb2N1bWVudENsaWNrTW92ZShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNsaWNrUG9zID0gVGltZXBpY2tlci5fUG9zKGUpO1xuICAgICAgICB2YXIgeCA9IGNsaWNrUG9zLnggLSB0aGlzLngwO1xuICAgICAgICB2YXIgeSA9IGNsaWNrUG9zLnkgLSB0aGlzLnkwO1xuICAgICAgICB0aGlzLm1vdmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRIYW5kKHgsIHksIGZhbHNlLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlRG9jdW1lbnRDbGlja0VuZChlKSB7XG4gICAgICAgIHZhciBfdGhpczU4ID0gdGhpcztcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrRW5kQm91bmQpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tFbmRCb3VuZCk7XG4gICAgICAgIHZhciBjbGlja1BvcyA9IFRpbWVwaWNrZXIuX1BvcyhlKTtcbiAgICAgICAgdmFyIHggPSBjbGlja1Bvcy54IC0gdGhpcy54MDtcbiAgICAgICAgdmFyIHkgPSBjbGlja1Bvcy55IC0gdGhpcy55MDtcbiAgICAgICAgaWYgKHRoaXMubW92ZWQgJiYgeCA9PT0gdGhpcy5keCAmJiB5ID09PSB0aGlzLmR5KSB7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kKHgsIHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZpZXcgPT09ICdob3VycycpIHtcbiAgICAgICAgICB0aGlzLnNob3dWaWV3KCdtaW51dGVzJywgdGhpcy5vcHRpb25zLmR1cmF0aW9uIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmF1dG9DbG9zZSkge1xuICAgICAgICAgICQodGhpcy5taW51dGVzVmlldykuYWRkQ2xhc3MoJ3RpbWVwaWNrZXItZGlhbC1vdXQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzNTguZG9uZSgpO1xuICAgICAgICAgIH0sIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25TZWxlY3QuY2FsbCh0aGlzLCB0aGlzLmhvdXJzLCB0aGlzLm1pbnV0ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIG1vdXNlbW92ZSBldmVudFxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrTW92ZUJvdW5kKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja01vdmVCb3VuZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9pbnNlcnRIVE1MSW50b0RPTVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9pbnNlcnRIVE1MSW50b0RPTSgpIHtcbiAgICAgICAgdGhpcy4kbW9kYWxFbCA9ICQoVGltZXBpY2tlci5fdGVtcGxhdGUpO1xuICAgICAgICB0aGlzLm1vZGFsRWwgPSB0aGlzLiRtb2RhbEVsWzBdO1xuICAgICAgICB0aGlzLm1vZGFsRWwuaWQgPSAnbW9kYWwtJyArIHRoaXMuaWQ7XG5cbiAgICAgICAgLy8gQXBwZW5kIHBvcG92ZXIgdG8gaW5wdXQgYnkgZGVmYXVsdFxuICAgICAgICB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbnRhaW5lciAmJiAhIWNvbnRhaW5lckVsKSB7XG4gICAgICAgICAgdGhpcy4kbW9kYWxFbC5hcHBlbmRUbyhjb250YWluZXJFbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kbW9kYWxFbC5pbnNlcnRCZWZvcmUodGhpcy5lbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwTW9kYWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBNb2RhbCgpIHtcbiAgICAgICAgdmFyIF90aGlzNTkgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubW9kYWwgPSBNLk1vZGFsLmluaXQodGhpcy5tb2RhbEVsLCB7XG4gICAgICAgICAgb25PcGVuU3RhcnQ6IHRoaXMub3B0aW9ucy5vbk9wZW5TdGFydCxcbiAgICAgICAgICBvbk9wZW5FbmQ6IHRoaXMub3B0aW9ucy5vbk9wZW5FbmQsXG4gICAgICAgICAgb25DbG9zZVN0YXJ0OiB0aGlzLm9wdGlvbnMub25DbG9zZVN0YXJ0LFxuICAgICAgICAgIG9uQ2xvc2VFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXM1OS5vcHRpb25zLm9uQ2xvc2VFbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgX3RoaXM1OS5vcHRpb25zLm9uQ2xvc2VFbmQuY2FsbChfdGhpczU5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzNTkuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwVmFyaWFibGVzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwVmFyaWFibGVzKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWV3ID0gJ2hvdXJzJztcbiAgICAgICAgdGhpcy52aWJyYXRlID0gbmF2aWdhdG9yLnZpYnJhdGUgPyAndmlicmF0ZScgOiBuYXZpZ2F0b3Iud2Via2l0VmlicmF0ZSA/ICd3ZWJraXRWaWJyYXRlJyA6IG51bGw7XG5cbiAgICAgICAgdGhpcy5fY2FudmFzID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLWNhbnZhcycpO1xuICAgICAgICB0aGlzLnBsYXRlID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLXBsYXRlJyk7XG5cbiAgICAgICAgdGhpcy5ob3Vyc1ZpZXcgPSB0aGlzLm1vZGFsRWwucXVlcnlTZWxlY3RvcignLnRpbWVwaWNrZXItaG91cnMnKTtcbiAgICAgICAgdGhpcy5taW51dGVzVmlldyA9IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcudGltZXBpY2tlci1taW51dGVzJyk7XG4gICAgICAgIHRoaXMuc3BhbkhvdXJzID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLXNwYW4taG91cnMnKTtcbiAgICAgICAgdGhpcy5zcGFuTWludXRlcyA9IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcudGltZXBpY2tlci1zcGFuLW1pbnV0ZXMnKTtcbiAgICAgICAgdGhpcy5zcGFuQW1QbSA9IHRoaXMubW9kYWxFbC5xdWVyeVNlbGVjdG9yKCcudGltZXBpY2tlci1zcGFuLWFtLXBtJyk7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gdGhpcy5tb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lcGlja2VyLWZvb3RlcicpO1xuICAgICAgICB0aGlzLmFtT3JQbSA9ICdQTSc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9waWNrZXJTZXR1cFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9waWNrZXJTZXR1cCgpIHtcbiAgICAgICAgdmFyICRjbGVhckJ0biA9ICQoXCI8YnV0dG9uIGNsYXNzPVxcXCJidG4tZmxhdCB0aW1lcGlja2VyLWNsZWFyIHdhdmVzLWVmZmVjdFxcXCIgc3R5bGU9XFxcInZpc2liaWxpdHk6IGhpZGRlbjtcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIlwiICsgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyID8gJzMnIDogJzEnKSArIFwiXFxcIj5cIiArIHRoaXMub3B0aW9ucy5pMThuLmNsZWFyICsgXCI8L2J1dHRvbj5cIikuYXBwZW5kVG8odGhpcy5mb290ZXIpLm9uKCdjbGljaycsIHRoaXMuY2xlYXIuYmluZCh0aGlzKSk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2hvd0NsZWFyQnRuKSB7XG4gICAgICAgICAgJGNsZWFyQnRuLmNzcyh7IHZpc2liaWxpdHk6ICcnIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbmZpcm1hdGlvbkJ0bnNDb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiY29uZmlybWF0aW9uLWJ0bnNcIj48L2Rpdj4nKTtcbiAgICAgICAgJCgnPGJ1dHRvbiBjbGFzcz1cImJ0bi1mbGF0IHRpbWVwaWNrZXItY2xvc2Ugd2F2ZXMtZWZmZWN0XCIgdHlwZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiJyArICh0aGlzLm9wdGlvbnMudHdlbHZlSG91ciA/ICczJyA6ICcxJykgKyAnXCI+JyArIHRoaXMub3B0aW9ucy5pMThuLmNhbmNlbCArICc8L2J1dHRvbj4nKS5hcHBlbmRUbyhjb25maXJtYXRpb25CdG5zQ29udGFpbmVyKS5vbignY2xpY2snLCB0aGlzLmNsb3NlLmJpbmQodGhpcykpO1xuICAgICAgICAkKCc8YnV0dG9uIGNsYXNzPVwiYnRuLWZsYXQgdGltZXBpY2tlci1jbG9zZSB3YXZlcy1lZmZlY3RcIiB0eXBlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCInICsgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyID8gJzMnIDogJzEnKSArICdcIj4nICsgdGhpcy5vcHRpb25zLmkxOG4uZG9uZSArICc8L2J1dHRvbj4nKS5hcHBlbmRUbyhjb25maXJtYXRpb25CdG5zQ29udGFpbmVyKS5vbignY2xpY2snLCB0aGlzLmRvbmUuYmluZCh0aGlzKSk7XG4gICAgICAgIGNvbmZpcm1hdGlvbkJ0bnNDb250YWluZXIuYXBwZW5kVG8odGhpcy5mb290ZXIpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY2xvY2tTZXR1cFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jbG9ja1NldHVwKCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnR3ZWx2ZUhvdXIpIHtcbiAgICAgICAgICB0aGlzLiRhbUJ0biA9ICQoJzxkaXYgY2xhc3M9XCJhbS1idG5cIj5BTTwvZGl2PicpO1xuICAgICAgICAgIHRoaXMuJHBtQnRuID0gJCgnPGRpdiBjbGFzcz1cInBtLWJ0blwiPlBNPC9kaXY+Jyk7XG4gICAgICAgICAgdGhpcy4kYW1CdG4ub24oJ2NsaWNrJywgdGhpcy5faGFuZGxlQW1QbUNsaWNrLmJpbmQodGhpcykpLmFwcGVuZFRvKHRoaXMuc3BhbkFtUG0pO1xuICAgICAgICAgIHRoaXMuJHBtQnRuLm9uKCdjbGljaycsIHRoaXMuX2hhbmRsZUFtUG1DbGljay5iaW5kKHRoaXMpKS5hcHBlbmRUbyh0aGlzLnNwYW5BbVBtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2J1aWxkSG91cnNWaWV3KCk7XG4gICAgICAgIHRoaXMuX2J1aWxkTWludXRlc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5fYnVpbGRTVkdDbG9jaygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYnVpbGRTVkdDbG9ja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZFNWR0Nsb2NrKCkge1xuICAgICAgICAvLyBEcmF3IGNsb2NrIGhhbmRzIGFuZCBvdGhlcnNcbiAgICAgICAgdmFyIGRpYWxSYWRpdXMgPSB0aGlzLm9wdGlvbnMuZGlhbFJhZGl1cztcbiAgICAgICAgdmFyIHRpY2tSYWRpdXMgPSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cztcbiAgICAgICAgdmFyIGRpYW1ldGVyID0gZGlhbFJhZGl1cyAqIDI7XG5cbiAgICAgICAgdmFyIHN2ZyA9IFRpbWVwaWNrZXIuX2NyZWF0ZVNWR0VsKCdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGltZXBpY2tlci1zdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBkaWFtZXRlcik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGRpYW1ldGVyKTtcbiAgICAgICAgdmFyIGcgPSBUaW1lcGlja2VyLl9jcmVhdGVTVkdFbCgnZycpO1xuICAgICAgICBnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgZGlhbFJhZGl1cyArICcsJyArIGRpYWxSYWRpdXMgKyAnKScpO1xuICAgICAgICB2YXIgYmVhcmluZyA9IFRpbWVwaWNrZXIuX2NyZWF0ZVNWR0VsKCdjaXJjbGUnKTtcbiAgICAgICAgYmVhcmluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbWVwaWNrZXItY2FudmFzLWJlYXJpbmcnKTtcbiAgICAgICAgYmVhcmluZy5zZXRBdHRyaWJ1dGUoJ2N4JywgMCk7XG4gICAgICAgIGJlYXJpbmcuc2V0QXR0cmlidXRlKCdjeScsIDApO1xuICAgICAgICBiZWFyaW5nLnNldEF0dHJpYnV0ZSgncicsIDQpO1xuICAgICAgICB2YXIgaGFuZCA9IFRpbWVwaWNrZXIuX2NyZWF0ZVNWR0VsKCdsaW5lJyk7XG4gICAgICAgIGhhbmQuc2V0QXR0cmlidXRlKCd4MScsIDApO1xuICAgICAgICBoYW5kLnNldEF0dHJpYnV0ZSgneTEnLCAwKTtcbiAgICAgICAgdmFyIGJnID0gVGltZXBpY2tlci5fY3JlYXRlU1ZHRWwoJ2NpcmNsZScpO1xuICAgICAgICBiZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbWVwaWNrZXItY2FudmFzLWJnJyk7XG4gICAgICAgIGJnLnNldEF0dHJpYnV0ZSgncicsIHRpY2tSYWRpdXMpO1xuICAgICAgICBnLmFwcGVuZENoaWxkKGhhbmQpO1xuICAgICAgICBnLmFwcGVuZENoaWxkKGJnKTtcbiAgICAgICAgZy5hcHBlbmRDaGlsZChiZWFyaW5nKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGcpO1xuICAgICAgICB0aGlzLl9jYW52YXMuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICB0aGlzLmhhbmQgPSBoYW5kO1xuICAgICAgICB0aGlzLmJnID0gYmc7XG4gICAgICAgIHRoaXMuYmVhcmluZyA9IGJlYXJpbmc7XG4gICAgICAgIHRoaXMuZyA9IGc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIl9idWlsZEhvdXJzVmlld1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZEhvdXJzVmlldygpIHtcbiAgICAgICAgdmFyICR0aWNrID0gJCgnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItdGlja1wiPjwvZGl2PicpO1xuICAgICAgICAvLyBIb3VycyB2aWV3XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMTM7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIHRpY2sgPSAkdGljay5jbG9uZSgpO1xuICAgICAgICAgICAgdmFyIHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcbiAgICAgICAgICAgIHZhciByYWRpdXMgPSB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXM7XG4gICAgICAgICAgICB0aWNrLmNzcyh7XG4gICAgICAgICAgICAgIGxlZnQ6IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMub3B0aW9ucy50aWNrUmFkaXVzICsgJ3B4JyxcbiAgICAgICAgICAgICAgdG9wOiB0aGlzLm9wdGlvbnMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cyArICdweCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGljay5odG1sKGkgPT09IDAgPyAnMDAnIDogaSk7XG4gICAgICAgICAgICB0aGlzLmhvdXJzVmlldy5hcHBlbmRDaGlsZCh0aWNrWzBdKTtcbiAgICAgICAgICAgIC8vIHRpY2sub24obW91c2Vkb3duRXZlbnQsIG1vdXNlZG93bik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IDI0OyBfaTIgKz0gMSkge1xuICAgICAgICAgICAgdmFyIF90aWNrID0gJHRpY2suY2xvbmUoKTtcbiAgICAgICAgICAgIHZhciBfcmFkaWFuID0gX2kyIC8gNiAqIE1hdGguUEk7XG4gICAgICAgICAgICB2YXIgaW5uZXIgPSBfaTIgPiAwICYmIF9pMiA8IDEzO1xuICAgICAgICAgICAgdmFyIF9yYWRpdXMgPSBpbm5lciA/IHRoaXMub3B0aW9ucy5pbm5lclJhZGl1cyA6IHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cztcbiAgICAgICAgICAgIF90aWNrLmNzcyh7XG4gICAgICAgICAgICAgIGxlZnQ6IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzICsgTWF0aC5zaW4oX3JhZGlhbikgKiBfcmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMgKyAncHgnLFxuICAgICAgICAgICAgICB0b3A6IHRoaXMub3B0aW9ucy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MoX3JhZGlhbikgKiBfcmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMgKyAncHgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aWNrLmh0bWwoX2kyID09PSAwID8gJzAwJyA6IF9pMik7XG4gICAgICAgICAgICB0aGlzLmhvdXJzVmlldy5hcHBlbmRDaGlsZChfdGlja1swXSk7XG4gICAgICAgICAgICAvLyB0aWNrLm9uKG1vdXNlZG93bkV2ZW50LCBtb3VzZWRvd24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYnVpbGRNaW51dGVzVmlld1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9idWlsZE1pbnV0ZXNWaWV3KCkge1xuICAgICAgICB2YXIgJHRpY2sgPSAkKCc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci10aWNrXCI+PC9kaXY+Jyk7XG4gICAgICAgIC8vIE1pbnV0ZXMgdmlld1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDYwOyBpICs9IDUpIHtcbiAgICAgICAgICB2YXIgdGljayA9ICR0aWNrLmNsb25lKCk7XG4gICAgICAgICAgdmFyIHJhZGlhbiA9IGkgLyAzMCAqIE1hdGguUEk7XG4gICAgICAgICAgdGljay5jc3Moe1xuICAgICAgICAgICAgbGVmdDogdGhpcy5vcHRpb25zLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5vcHRpb25zLm91dGVyUmFkaXVzIC0gdGhpcy5vcHRpb25zLnRpY2tSYWRpdXMgKyAncHgnLFxuICAgICAgICAgICAgdG9wOiB0aGlzLm9wdGlvbnMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXMgLSB0aGlzLm9wdGlvbnMudGlja1JhZGl1cyArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aWNrLmh0bWwoVGltZXBpY2tlci5fYWRkTGVhZGluZ1plcm8oaSkpO1xuICAgICAgICAgIHRoaXMubWludXRlc1ZpZXcuYXBwZW5kQ2hpbGQodGlja1swXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUFtUG1DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVBbVBtQ2xpY2soZSkge1xuICAgICAgICB2YXIgJGJ0bkNsaWNrZWQgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgdGhpcy5hbU9yUG0gPSAkYnRuQ2xpY2tlZC5oYXNDbGFzcygnYW0tYnRuJykgPyAnQU0nIDogJ1BNJztcbiAgICAgICAgdGhpcy5fdXBkYXRlQW1QbVZpZXcoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZUFtUG1WaWV3XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3VwZGF0ZUFtUG1WaWV3KCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnR3ZWx2ZUhvdXIpIHtcbiAgICAgICAgICB0aGlzLiRhbUJ0bi50b2dnbGVDbGFzcygndGV4dC1wcmltYXJ5JywgdGhpcy5hbU9yUG0gPT09ICdBTScpO1xuICAgICAgICAgIHRoaXMuJHBtQnRuLnRvZ2dsZUNsYXNzKCd0ZXh0LXByaW1hcnknLCB0aGlzLmFtT3JQbSA9PT0gJ1BNJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZVRpbWVGcm9tSW5wdXRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfdXBkYXRlVGltZUZyb21JbnB1dCgpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB0aW1lXG4gICAgICAgIHZhciB2YWx1ZSA9ICgodGhpcy5lbC52YWx1ZSB8fCB0aGlzLm9wdGlvbnMuZGVmYXVsdFRpbWUgfHwgJycpICsgJycpLnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91ciAmJiAhKHR5cGVvZiB2YWx1ZVsxXSA9PT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgICAgICAgaWYgKHZhbHVlWzFdLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignQU0nKSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYW1PclBtID0gJ0FNJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbU9yUG0gPSAnUE0nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZVsxXSA9IHZhbHVlWzFdLnJlcGxhY2UoJ0FNJywgJycpLnJlcGxhY2UoJ1BNJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZVswXSA9PT0gJ25vdycpIHtcbiAgICAgICAgICB2YXIgbm93ID0gbmV3IERhdGUoK25ldyBEYXRlKCkgKyB0aGlzLm9wdGlvbnMuZnJvbU5vdyk7XG4gICAgICAgICAgdmFsdWUgPSBbbm93LmdldEhvdXJzKCksIG5vdy5nZXRNaW51dGVzKCldO1xuICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgICAgdGhpcy5hbU9yUG0gPSB2YWx1ZVswXSA+PSAxMiAmJiB2YWx1ZVswXSA8IDI0ID8gJ1BNJyA6ICdBTSc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaG91cnMgPSArdmFsdWVbMF0gfHwgMDtcbiAgICAgICAgdGhpcy5taW51dGVzID0gK3ZhbHVlWzFdIHx8IDA7XG4gICAgICAgIHRoaXMuc3BhbkhvdXJzLmlubmVySFRNTCA9IHRoaXMuaG91cnM7XG4gICAgICAgIHRoaXMuc3Bhbk1pbnV0ZXMuaW5uZXJIVE1MID0gVGltZXBpY2tlci5fYWRkTGVhZGluZ1plcm8odGhpcy5taW51dGVzKTtcblxuICAgICAgICB0aGlzLl91cGRhdGVBbVBtVmlldygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJzaG93Vmlld1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dWaWV3KHZpZXcsIGRlbGF5KSB7XG4gICAgICAgIGlmICh2aWV3ID09PSAnbWludXRlcycgJiYgJCh0aGlzLmhvdXJzVmlldykuY3NzKCd2aXNpYmlsaXR5JykgPT09ICd2aXNpYmxlJykge1xuICAgICAgICAgIC8vIHJhaXNlQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUhvdXJTZWxlY3QpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0hvdXJzID0gdmlldyA9PT0gJ2hvdXJzJyxcbiAgICAgICAgICAgIG5leHRWaWV3ID0gaXNIb3VycyA/IHRoaXMuaG91cnNWaWV3IDogdGhpcy5taW51dGVzVmlldyxcbiAgICAgICAgICAgIGhpZGVWaWV3ID0gaXNIb3VycyA/IHRoaXMubWludXRlc1ZpZXcgOiB0aGlzLmhvdXJzVmlldztcbiAgICAgICAgdGhpcy5jdXJyZW50VmlldyA9IHZpZXc7XG5cbiAgICAgICAgJCh0aGlzLnNwYW5Ib3VycykudG9nZ2xlQ2xhc3MoJ3RleHQtcHJpbWFyeScsIGlzSG91cnMpO1xuICAgICAgICAkKHRoaXMuc3Bhbk1pbnV0ZXMpLnRvZ2dsZUNsYXNzKCd0ZXh0LXByaW1hcnknLCAhaXNIb3Vycyk7XG5cbiAgICAgICAgLy8gVHJhbnNpdGlvbiB2aWV3XG4gICAgICAgIGhpZGVWaWV3LmNsYXNzTGlzdC5hZGQoJ3RpbWVwaWNrZXItZGlhbC1vdXQnKTtcbiAgICAgICAgJChuZXh0VmlldykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKS5yZW1vdmVDbGFzcygndGltZXBpY2tlci1kaWFsLW91dCcpO1xuXG4gICAgICAgIC8vIFJlc2V0IGNsb2NrIGhhbmRcbiAgICAgICAgdGhpcy5yZXNldENsb2NrKGRlbGF5KTtcblxuICAgICAgICAvLyBBZnRlciB0cmFuc2l0aW9ucyBlbmRlZFxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b2dnbGVWaWV3VGltZXIpO1xuICAgICAgICB0aGlzLnRvZ2dsZVZpZXdUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICQoaGlkZVZpZXcpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVzZXRDbG9ja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0Q2xvY2soZGVsYXkpIHtcbiAgICAgICAgdmFyIHZpZXcgPSB0aGlzLmN1cnJlbnRWaWV3LFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzW3ZpZXddLFxuICAgICAgICAgICAgaXNIb3VycyA9IHZpZXcgPT09ICdob3VycycsXG4gICAgICAgICAgICB1bml0ID0gTWF0aC5QSSAvIChpc0hvdXJzID8gNiA6IDMwKSxcbiAgICAgICAgICAgIHJhZGlhbiA9IHZhbHVlICogdW5pdCxcbiAgICAgICAgICAgIHJhZGl1cyA9IGlzSG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyB0aGlzLm9wdGlvbnMuaW5uZXJSYWRpdXMgOiB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXMsXG4gICAgICAgICAgICB4ID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIHkgPSAtTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyxcbiAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICQodGhpcy5jYW52YXMpLmFkZENsYXNzKCd0aW1lcGlja2VyLWNhbnZhcy1vdXQnKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoc2VsZi5jYW52YXMpLnJlbW92ZUNsYXNzKCd0aW1lcGlja2VyLWNhbnZhcy1vdXQnKTtcbiAgICAgICAgICAgIHNlbGYuc2V0SGFuZCh4LCB5KTtcbiAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRIYW5kKHgsIHkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcInNldEhhbmRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRIYW5kKHgsIHksIHJvdW5kQnk1KSB7XG4gICAgICAgIHZhciBfdGhpczYwID0gdGhpcztcblxuICAgICAgICB2YXIgcmFkaWFuID0gTWF0aC5hdGFuMih4LCAteSksXG4gICAgICAgICAgICBpc0hvdXJzID0gdGhpcy5jdXJyZW50VmlldyA9PT0gJ2hvdXJzJyxcbiAgICAgICAgICAgIHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgfHwgcm91bmRCeTUgPyA2IDogMzApLFxuICAgICAgICAgICAgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSxcbiAgICAgICAgICAgIGlubmVyID0gaXNIb3VycyAmJiB6IDwgKHRoaXMub3B0aW9ucy5vdXRlclJhZGl1cyArIHRoaXMub3B0aW9ucy5pbm5lclJhZGl1cykgLyAyLFxuICAgICAgICAgICAgcmFkaXVzID0gaW5uZXIgPyB0aGlzLm9wdGlvbnMuaW5uZXJSYWRpdXMgOiB0aGlzLm9wdGlvbnMub3V0ZXJSYWRpdXM7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgcmFkaXVzID0gdGhpcy5vcHRpb25zLm91dGVyUmFkaXVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmFkaWFuIHNob3VsZCBpbiByYW5nZSBbMCwgMlBJXVxuICAgICAgICBpZiAocmFkaWFuIDwgMCkge1xuICAgICAgICAgIHJhZGlhbiA9IE1hdGguUEkgKiAyICsgcmFkaWFuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IHRoZSByb3VuZCB2YWx1ZVxuICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgcm91bmQgcmFkaWFuXG4gICAgICAgIHJhZGlhbiA9IHZhbHVlICogdW5pdDtcblxuICAgICAgICAvLyBDb3JyZWN0IHRoZSBob3VycyBvciBtaW51dGVzXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgIGlmIChpc0hvdXJzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHZhbHVlID0gMTI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyb3VuZEJ5NSkgdmFsdWUgKj0gNTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNjApIHZhbHVlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGlzSG91cnMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBpbm5lciA/IHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZSA6IHZhbHVlID09PSAwID8gMCA6IHZhbHVlICsgMTI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyb3VuZEJ5NSkge1xuICAgICAgICAgICAgICB2YWx1ZSAqPSA1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xuICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25jZSBob3VycyBvciBtaW51dGVzIGNoYW5nZWQsIHZpYnJhdGUgdGhlIGRldmljZVxuICAgICAgICBpZiAodGhpc1t0aGlzLmN1cnJlbnRWaWV3XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBpZiAodGhpcy52aWJyYXRlICYmIHRoaXMub3B0aW9ucy52aWJyYXRlKSB7XG4gICAgICAgICAgICAvLyBEbyBub3QgdmlicmF0ZSB0b28gZnJlcXVlbnRseVxuICAgICAgICAgICAgaWYgKCF0aGlzLnZpYnJhdGVUaW1lcikge1xuICAgICAgICAgICAgICBuYXZpZ2F0b3JbdGhpcy52aWJyYXRlXSgxMCk7XG4gICAgICAgICAgICAgIHRoaXMudmlicmF0ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXM2MC52aWJyYXRlVGltZXIgPSBudWxsO1xuICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdGhpcy5jdXJyZW50Vmlld10gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGlzSG91cnMpIHtcbiAgICAgICAgICB0aGlzWydzcGFuSG91cnMnXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWydzcGFuTWludXRlcyddLmlubmVySFRNTCA9IFRpbWVwaWNrZXIuX2FkZExlYWRpbmdaZXJvKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBjbG9jayBoYW5kIGFuZCBvdGhlcnMnIHBvc2l0aW9uXG4gICAgICAgIHZhciBjeDEgPSBNYXRoLnNpbihyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMub3B0aW9ucy50aWNrUmFkaXVzKSxcbiAgICAgICAgICAgIGN5MSA9IC1NYXRoLmNvcyhyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMub3B0aW9ucy50aWNrUmFkaXVzKSxcbiAgICAgICAgICAgIGN4MiA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMsXG4gICAgICAgICAgICBjeTIgPSAtTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcbiAgICAgICAgdGhpcy5oYW5kLnNldEF0dHJpYnV0ZSgneDInLCBjeDEpO1xuICAgICAgICB0aGlzLmhhbmQuc2V0QXR0cmlidXRlKCd5MicsIGN5MSk7XG4gICAgICAgIHRoaXMuYmcuc2V0QXR0cmlidXRlKCdjeCcsIGN4Mik7XG4gICAgICAgIHRoaXMuYmcuc2V0QXR0cmlidXRlKCdjeScsIGN5Mik7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRpbWVGcm9tSW5wdXQoKTtcbiAgICAgICAgdGhpcy5zaG93VmlldygnaG91cnMnKTtcblxuICAgICAgICB0aGlzLm1vZGFsLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiY2xvc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBGaW5pc2ggdGltZXBpY2tlciBzZWxlY3Rpb24uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkb25lXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZG9uZShlLCBjbGVhclZhbHVlKSB7XG4gICAgICAgIC8vIFNldCBpbnB1dCB2YWx1ZVxuICAgICAgICB2YXIgbGFzdCA9IHRoaXMuZWwudmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNsZWFyVmFsdWUgPyAnJyA6IFRpbWVwaWNrZXIuX2FkZExlYWRpbmdaZXJvKHRoaXMuaG91cnMpICsgJzonICsgVGltZXBpY2tlci5fYWRkTGVhZGluZ1plcm8odGhpcy5taW51dGVzKTtcbiAgICAgICAgdGhpcy50aW1lID0gdmFsdWU7XG4gICAgICAgIGlmICghY2xlYXJWYWx1ZSAmJiB0aGlzLm9wdGlvbnMudHdlbHZlSG91cikge1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUgKyBcIiBcIiArIHRoaXMuYW1PclBtO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuICAgICAgICBpZiAodmFsdWUgIT09IGxhc3QpIHtcbiAgICAgICAgICB0aGlzLiRlbC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5lbC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJjbGVhclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmRvbmUobnVsbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KFRpbWVwaWNrZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUaW1lcGlja2VyKSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FkZExlYWRpbmdaZXJvXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FkZExlYWRpbmdaZXJvKG51bSkge1xuICAgICAgICByZXR1cm4gKG51bSA8IDEwID8gJzAnIDogJycpICsgbnVtO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY3JlYXRlU1ZHRWxcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfY3JlYXRlU1ZHRWwobmFtZSkge1xuICAgICAgICB2YXIgc3ZnTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBQb2ludFxuICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHggVGhlIFggQ29vcmRpbmF0ZVxuICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHkgVGhlIFkgQ29vcmRpbmF0ZVxuICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHggcG9zaXRpb24gb2YgbW91c2Ugb3IgdG91Y2ggZXZlbnRcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqIEByZXR1cm4ge1BvaW50fSB4IGFuZCB5IGxvY2F0aW9uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfUG9zXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX1BvcyhlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIHsgeDogZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFgsIHk6IGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRZIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgcmV0dXJuIHsgeDogZS5jbGllbnRYLCB5OiBlLmNsaWVudFkgfTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fVGltZXBpY2tlcjtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBUaW1lcGlja2VyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgVGltZXBpY2tlci5fdGVtcGxhdGUgPSBbJzxkaXYgY2xhc3M9IFwibW9kYWwgdGltZXBpY2tlci1tb2RhbFwiPicsICc8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCB0aW1lcGlja2VyLWNvbnRhaW5lclwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1kaWdpdGFsLWRpc3BsYXlcIj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItdGV4dC1jb250YWluZXJcIj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItZGlzcGxheS1jb2x1bW5cIj4nLCAnPHNwYW4gY2xhc3M9XCJ0aW1lcGlja2VyLXNwYW4taG91cnMgdGV4dC1wcmltYXJ5XCI+PC9zcGFuPicsICc6JywgJzxzcGFuIGNsYXNzPVwidGltZXBpY2tlci1zcGFuLW1pbnV0ZXNcIj48L3NwYW4+JywgJzwvZGl2PicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1kaXNwbGF5LWNvbHVtbiB0aW1lcGlja2VyLWRpc3BsYXktYW0tcG1cIj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItc3Bhbi1hbS1wbVwiPjwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+JywgJzwvZGl2PicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1hbmFsb2ctZGlzcGxheVwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1wbGF0ZVwiPicsICc8ZGl2IGNsYXNzPVwidGltZXBpY2tlci1jYW52YXNcIj48L2Rpdj4nLCAnPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItZGlhbCB0aW1lcGlja2VyLWhvdXJzXCI+PC9kaXY+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWRpYWwgdGltZXBpY2tlci1taW51dGVzIHRpbWVwaWNrZXItZGlhbC1vdXRcIj48L2Rpdj4nLCAnPC9kaXY+JywgJzxkaXYgY2xhc3M9XCJ0aW1lcGlja2VyLWZvb3RlclwiPjwvZGl2PicsICc8L2Rpdj4nLCAnPC9kaXY+JywgJzwvZGl2PiddLmpvaW4oJycpO1xuXG4gIE0uVGltZXBpY2tlciA9IFRpbWVwaWNrZXI7XG5cbiAgaWYgKE0ualF1ZXJ5TG9hZGVkKSB7XG4gICAgTS5pbml0aWFsaXplSnF1ZXJ5V3JhcHBlcihUaW1lcGlja2VyLCAndGltZXBpY2tlcicsICdNX1RpbWVwaWNrZXInKTtcbiAgfVxufSkoY2FzaCk7XG47KGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgX2RlZmF1bHRzID0ge307XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgQ2hhcmFjdGVyQ291bnRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MTcpIHtcbiAgICBfaW5oZXJpdHMoQ2hhcmFjdGVyQ291bnRlciwgX0NvbXBvbmVudDE3KTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBDaGFyYWN0ZXJDb3VudGVyIGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2hhcmFjdGVyQ291bnRlcihlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENoYXJhY3RlckNvdW50ZXIpO1xuXG4gICAgICB2YXIgX3RoaXM2MSA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDaGFyYWN0ZXJDb3VudGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2hhcmFjdGVyQ291bnRlcikpLmNhbGwodGhpcywgQ2hhcmFjdGVyQ291bnRlciwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgX3RoaXM2MS5lbC5NX0NoYXJhY3RlckNvdW50ZXIgPSBfdGhpczYxO1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBjaGFyYWN0ZXIgY291bnRlclxuICAgICAgICovXG4gICAgICBfdGhpczYxLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ2hhcmFjdGVyQ291bnRlci5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNjEuaXNJbnZhbGlkID0gZmFsc2U7XG4gICAgICBfdGhpczYxLmlzVmFsaWRMZW5ndGggPSBmYWxzZTtcbiAgICAgIF90aGlzNjEuX3NldHVwQ291bnRlcigpO1xuICAgICAgX3RoaXM2MS5fc2V0dXBFdmVudEhhbmRsZXJzKCk7XG4gICAgICByZXR1cm4gX3RoaXM2MTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2hhcmFjdGVyQ291bnRlciwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5lbC5DaGFyYWN0ZXJDb3VudGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9yZW1vdmVDb3VudGVyKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVVcGRhdGVDb3VudGVyQm91bmQgPSB0aGlzLnVwZGF0ZUNvdW50ZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlVXBkYXRlQ291bnRlckJvdW5kLCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZVVwZGF0ZUNvdW50ZXJCb3VuZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5faGFuZGxlVXBkYXRlQ291bnRlckJvdW5kLCB0cnVlKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZVVwZGF0ZUNvdW50ZXJCb3VuZCwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgY291bnRlciBlbGVtZW50XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBDb3VudGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwQ291bnRlcigpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICQodGhpcy5jb3VudGVyRWwpLmFkZENsYXNzKCdjaGFyYWN0ZXItY291bnRlcicpLmNzcyh7XG4gICAgICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgICAgJ2ZvbnQtc2l6ZSc6ICcxMnB4JyxcbiAgICAgICAgICBoZWlnaHQ6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kZWwucGFyZW50KCkuYXBwZW5kKHRoaXMuY291bnRlckVsKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZW1vdmUgY291bnRlciBlbGVtZW50XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlQ291bnRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVDb3VudGVyKCkge1xuICAgICAgICAkKHRoaXMuY291bnRlckVsKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBVcGRhdGUgY291bnRlclxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwidXBkYXRlQ291bnRlclwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXIoKSB7XG4gICAgICAgIHZhciBtYXhMZW5ndGggPSArdGhpcy4kZWwuYXR0cignZGF0YS1sZW5ndGgnKSxcbiAgICAgICAgICAgIGFjdHVhbExlbmd0aCA9IHRoaXMuZWwudmFsdWUubGVuZ3RoO1xuICAgICAgICB0aGlzLmlzVmFsaWRMZW5ndGggPSBhY3R1YWxMZW5ndGggPD0gbWF4TGVuZ3RoO1xuICAgICAgICB2YXIgY291bnRlclN0cmluZyA9IGFjdHVhbExlbmd0aDtcblxuICAgICAgICBpZiAobWF4TGVuZ3RoKSB7XG4gICAgICAgICAgY291bnRlclN0cmluZyArPSAnLycgKyBtYXhMZW5ndGg7XG4gICAgICAgICAgdGhpcy5fdmFsaWRhdGVJbnB1dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmNvdW50ZXJFbCkuaHRtbChjb3VudGVyU3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgdmFsaWRhdGlvbiBjbGFzc2VzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfdmFsaWRhdGVJbnB1dFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF92YWxpZGF0ZUlucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkTGVuZ3RoICYmIHRoaXMuaXNJbnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5pc0ludmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLiRlbC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzVmFsaWRMZW5ndGggJiYgIXRoaXMuaXNJbnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5pc0ludmFsaWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgIHRoaXMuJGVsLmFkZENsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoQ2hhcmFjdGVyQ291bnRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENoYXJhY3RlckNvdW50ZXIpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9DaGFyYWN0ZXJDb3VudGVyO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENoYXJhY3RlckNvdW50ZXI7XG4gIH0oQ29tcG9uZW50KTtcblxuICBNLkNoYXJhY3RlckNvdW50ZXIgPSBDaGFyYWN0ZXJDb3VudGVyO1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoQ2hhcmFjdGVyQ291bnRlciwgJ2NoYXJhY3RlckNvdW50ZXInLCAnTV9DaGFyYWN0ZXJDb3VudGVyJyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBkdXJhdGlvbjogMjAwLCAvLyBtc1xuICAgIGRpc3Q6IC0xMDAsIC8vIHpvb20gc2NhbGUgVE9ETzogbWFrZSB0aGlzIG1vcmUgaW50dWl0aXZlIGFzIGFuIG9wdGlvblxuICAgIHNoaWZ0OiAwLCAvLyBzcGFjaW5nIGZvciBjZW50ZXIgaW1hZ2VcbiAgICBwYWRkaW5nOiAwLCAvLyBQYWRkaW5nIGJldHdlZW4gbm9uIGNlbnRlciBpdGVtc1xuICAgIG51bVZpc2libGU6IDUsIC8vIE51bWJlciBvZiB2aXNpYmxlIGl0ZW1zIGluIGNhcm91c2VsXG4gICAgZnVsbFdpZHRoOiBmYWxzZSwgLy8gQ2hhbmdlIHRvIGZ1bGwgd2lkdGggc3R5bGVzXG4gICAgaW5kaWNhdG9yczogZmFsc2UsIC8vIFRvZ2dsZSBpbmRpY2F0b3JzXG4gICAgbm9XcmFwOiBmYWxzZSwgLy8gRG9uJ3Qgd3JhcCBhcm91bmQgYW5kIGN5Y2xlIHRocm91Z2ggaXRlbXMuXG4gICAgb25DeWNsZVRvOiBudWxsIC8vIENhbGxiYWNrIGZvciB3aGVuIGEgbmV3IHNsaWRlIGlzIGN5Y2xlZCB0by5cbiAgfTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBDYXJvdXNlbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MTgpIHtcbiAgICBfaW5oZXJpdHMoQ2Fyb3VzZWwsIF9Db21wb25lbnQxOCk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgQ2Fyb3VzZWwgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDYXJvdXNlbChlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhcm91c2VsKTtcblxuICAgICAgdmFyIF90aGlzNjIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ2Fyb3VzZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYXJvdXNlbCkpLmNhbGwodGhpcywgQ2Fyb3VzZWwsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNjIuZWwuTV9DYXJvdXNlbCA9IF90aGlzNjI7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIGNhcm91c2VsXG4gICAgICAgKiBAbWVtYmVyIENhcm91c2VsI29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtOdW1iZXJ9IGR1cmF0aW9uXG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBkaXN0XG4gICAgICAgKiBAcHJvcCB7TnVtYmVyfSBzaGlmdFxuICAgICAgICogQHByb3Age051bWJlcn0gcGFkZGluZ1xuICAgICAgICogQHByb3Age051bWJlcn0gbnVtVmlzaWJsZVxuICAgICAgICogQHByb3Age0Jvb2xlYW59IGZ1bGxXaWR0aFxuICAgICAgICogQHByb3Age0Jvb2xlYW59IGluZGljYXRvcnNcbiAgICAgICAqIEBwcm9wIHtCb29sZWFufSBub1dyYXBcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25DeWNsZVRvXG4gICAgICAgKi9cbiAgICAgIF90aGlzNjIub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBDYXJvdXNlbC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICBfdGhpczYyLmhhc011bHRpcGxlU2xpZGVzID0gX3RoaXM2Mi4kZWwuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5sZW5ndGggPiAxO1xuICAgICAgX3RoaXM2Mi5zaG93SW5kaWNhdG9ycyA9IF90aGlzNjIub3B0aW9ucy5pbmRpY2F0b3JzICYmIF90aGlzNjIuaGFzTXVsdGlwbGVTbGlkZXM7XG4gICAgICBfdGhpczYyLm5vV3JhcCA9IF90aGlzNjIub3B0aW9ucy5ub1dyYXAgfHwgIV90aGlzNjIuaGFzTXVsdGlwbGVTbGlkZXM7XG4gICAgICBfdGhpczYyLnByZXNzZWQgPSBmYWxzZTtcbiAgICAgIF90aGlzNjIuZHJhZ2dlZCA9IGZhbHNlO1xuICAgICAgX3RoaXM2Mi5vZmZzZXQgPSBfdGhpczYyLnRhcmdldCA9IDA7XG4gICAgICBfdGhpczYyLmltYWdlcyA9IFtdO1xuICAgICAgX3RoaXM2Mi5pdGVtV2lkdGggPSBfdGhpczYyLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJXaWR0aCgpO1xuICAgICAgX3RoaXM2Mi5pdGVtSGVpZ2h0ID0gX3RoaXM2Mi4kZWwuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5maXJzdCgpLmlubmVySGVpZ2h0KCk7XG4gICAgICBfdGhpczYyLmRpbSA9IF90aGlzNjIuaXRlbVdpZHRoICogMiArIF90aGlzNjIub3B0aW9ucy5wYWRkaW5nIHx8IDE7IC8vIE1ha2Ugc3VyZSBkaW0gaXMgbm9uIHplcm8gZm9yIGRpdmlzaW9ucy5cbiAgICAgIF90aGlzNjIuX2F1dG9TY3JvbGxCb3VuZCA9IF90aGlzNjIuX2F1dG9TY3JvbGwuYmluZChfdGhpczYyKTtcbiAgICAgIF90aGlzNjIuX3RyYWNrQm91bmQgPSBfdGhpczYyLl90cmFjay5iaW5kKF90aGlzNjIpO1xuXG4gICAgICAvLyBGdWxsIFdpZHRoIGNhcm91c2VsIHNldHVwXG4gICAgICBpZiAoX3RoaXM2Mi5vcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICBfdGhpczYyLm9wdGlvbnMuZGlzdCA9IDA7XG4gICAgICAgIF90aGlzNjIuX3NldENhcm91c2VsSGVpZ2h0KCk7XG5cbiAgICAgICAgLy8gT2Zmc2V0IGZpeGVkIGl0ZW1zIHdoZW4gaW5kaWNhdG9ycy5cbiAgICAgICAgaWYgKF90aGlzNjIuc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICBfdGhpczYyLiRlbC5maW5kKCcuY2Fyb3VzZWwtZml4ZWQtaXRlbScpLmFkZENsYXNzKCd3aXRoLWluZGljYXRvcnMnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBJdGVyYXRlIHRocm91Z2ggc2xpZGVzXG4gICAgICBfdGhpczYyLiRpbmRpY2F0b3JzID0gJCgnPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPjwvdWw+Jyk7XG4gICAgICBfdGhpczYyLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICAgIF90aGlzNjIuaW1hZ2VzLnB1c2goZWwpO1xuICAgICAgICBpZiAoX3RoaXM2Mi5zaG93SW5kaWNhdG9ycykge1xuICAgICAgICAgIHZhciAkaW5kaWNhdG9yID0gJCgnPGxpIGNsYXNzPVwiaW5kaWNhdG9yLWl0ZW1cIj48L2xpPicpO1xuXG4gICAgICAgICAgLy8gQWRkIGFjdGl2ZSB0byBmaXJzdCBieSBkZWZhdWx0LlxuICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAkaW5kaWNhdG9yWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzNjIuJGluZGljYXRvcnMuYXBwZW5kKCRpbmRpY2F0b3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpczYyLnNob3dJbmRpY2F0b3JzKSB7XG4gICAgICAgIF90aGlzNjIuJGVsLmFwcGVuZChfdGhpczYyLiRpbmRpY2F0b3JzKTtcbiAgICAgIH1cbiAgICAgIF90aGlzNjIuY291bnQgPSBfdGhpczYyLmltYWdlcy5sZW5ndGg7XG5cbiAgICAgIC8vIENhcCBudW1WaXNpYmxlIGF0IGNvdW50XG4gICAgICBfdGhpczYyLm9wdGlvbnMubnVtVmlzaWJsZSA9IE1hdGgubWluKF90aGlzNjIuY291bnQsIF90aGlzNjIub3B0aW9ucy5udW1WaXNpYmxlKTtcblxuICAgICAgLy8gU2V0dXAgY3Jvc3MgYnJvd3NlciBzdHJpbmdcbiAgICAgIF90aGlzNjIueGZvcm0gPSAndHJhbnNmb3JtJztcbiAgICAgIFsnd2Via2l0JywgJ01veicsICdPJywgJ21zJ10uZXZlcnkoZnVuY3Rpb24gKHByZWZpeCkge1xuICAgICAgICB2YXIgZSA9IHByZWZpeCArICdUcmFuc2Zvcm0nO1xuICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbZV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgX3RoaXM2Mi54Zm9ybSA9IGU7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzNjIuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgX3RoaXM2Mi5fc2Nyb2xsKF90aGlzNjIub2Zmc2V0KTtcbiAgICAgIHJldHVybiBfdGhpczYyO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDYXJvdXNlbCwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5lbC5NX0Nhcm91c2VsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBFdmVudEhhbmRsZXJzXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldHVwRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNjMgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcm91c2VsVGFwQm91bmQgPSB0aGlzLl9oYW5kbGVDYXJvdXNlbFRhcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJvdXNlbERyYWdCb3VuZCA9IHRoaXMuX2hhbmRsZUNhcm91c2VsRHJhZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCA9IHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVDYXJvdXNlbENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVDYXJvdXNlbENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cub250b3VjaHN0YXJ0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX2hhbmRsZUNhcm91c2VsVGFwQm91bmQpO1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxEcmFnQm91bmQpO1xuICAgICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZUNhcm91c2VsVGFwQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2hhbmRsZUNhcm91c2VsRHJhZ0JvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxSZWxlYXNlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVDYXJvdXNlbENsaWNrQm91bmQpO1xuXG4gICAgICAgIGlmICh0aGlzLnNob3dJbmRpY2F0b3JzICYmIHRoaXMuJGluZGljYXRvcnMpIHtcbiAgICAgICAgICB0aGlzLl9oYW5kbGVJbmRpY2F0b3JDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlSW5kaWNhdG9yQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgICB0aGlzLiRpbmRpY2F0b3JzLmZpbmQoJy5pbmRpY2F0b3ItaXRlbScpLmVhY2goZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNjMuX2hhbmRsZUluZGljYXRvckNsaWNrQm91bmQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzaXplXG4gICAgICAgIHZhciB0aHJvdHRsZWRSZXNpemUgPSBNLnRocm90dGxlKHRoaXMuX2hhbmRsZVJlc2l6ZSwgMjAwKTtcbiAgICAgICAgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQgPSB0aHJvdHRsZWRSZXNpemUuYmluZCh0aGlzKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNjQgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lm9udG91Y2hzdGFydCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFRhcEJvdW5kKTtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZUNhcm91c2VsRHJhZ0JvdW5kKTtcbiAgICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxSZWxlYXNlQm91bmQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxUYXBCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlQ2Fyb3VzZWxEcmFnQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuX2hhbmRsZUNhcm91c2VsUmVsZWFzZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZUNhcm91c2VsQ2xpY2tCb3VuZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd0luZGljYXRvcnMgJiYgdGhpcy4kaW5kaWNhdG9ycykge1xuICAgICAgICAgIHRoaXMuJGluZGljYXRvcnMuZmluZCgnLmluZGljYXRvci1pdGVtJykuZWFjaChmdW5jdGlvbiAoZWwsIGkpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3RoaXM2NC5faGFuZGxlSW5kaWNhdG9yQ2xpY2tCb3VuZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5faGFuZGxlVGhyb3R0bGVkUmVzaXplQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDYXJvdXNlbCBUYXBcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDYXJvdXNlbFRhcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDYXJvdXNlbFRhcChlKSB7XG4gICAgICAgIC8vIEZpeGVzIGZpcmVmb3ggZHJhZ2dhYmxlIGltYWdlIGJ1Z1xuICAgICAgICBpZiAoZS50eXBlID09PSAnbW91c2Vkb3duJyAmJiAkKGUudGFyZ2V0KS5pcygnaW1nJykpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudmVydGljYWxEcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gdGhpcy5feHBvcyhlKTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VZID0gdGhpcy5feXBvcyhlKTtcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy5hbXBsaXR1ZGUgPSAwO1xuICAgICAgICB0aGlzLmZyYW1lID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpY2tlcik7XG4gICAgICAgIHRoaXMudGlja2VyID0gc2V0SW50ZXJ2YWwodGhpcy5fdHJhY2tCb3VuZCwgMTAwKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgQ2Fyb3VzZWwgRHJhZ1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNhcm91c2VsRHJhZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVDYXJvdXNlbERyYWcoZSkge1xuICAgICAgICB2YXIgeCA9IHZvaWQgMCxcbiAgICAgICAgICAgIHkgPSB2b2lkIDAsXG4gICAgICAgICAgICBkZWx0YSA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlbHRhWSA9IHZvaWQgMDtcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZCkge1xuICAgICAgICAgIHggPSB0aGlzLl94cG9zKGUpO1xuICAgICAgICAgIHkgPSB0aGlzLl95cG9zKGUpO1xuICAgICAgICAgIGRlbHRhID0gdGhpcy5yZWZlcmVuY2UgLSB4O1xuICAgICAgICAgIGRlbHRhWSA9IE1hdGguYWJzKHRoaXMucmVmZXJlbmNlWSAtIHkpO1xuICAgICAgICAgIGlmIChkZWx0YVkgPCAzMCAmJiAhdGhpcy52ZXJ0aWNhbERyYWdnZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHZlcnRpY2FsIHNjcm9sbGluZyBkb24ndCBhbGxvdyBkcmFnZ2luZy5cbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDIgfHwgZGVsdGEgPCAtMikge1xuICAgICAgICAgICAgICB0aGlzLmRyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHg7XG4gICAgICAgICAgICAgIHRoaXMuX3Njcm9sbCh0aGlzLm9mZnNldCArIGRlbHRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJhZ2dlZCkge1xuICAgICAgICAgICAgLy8gSWYgZHJhZ2dpbmcgZG9uJ3QgYWxsb3cgdmVydGljYWwgc2Nyb2xsLlxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVmVydGljYWwgc2Nyb2xsaW5nLlxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbERyYWdnZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRyYWdnZWQpIHtcbiAgICAgICAgICAvLyBJZiBkcmFnZ2luZyBkb24ndCBhbGxvdyB2ZXJ0aWNhbCBzY3JvbGwuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIENhcm91c2VsIFJlbGVhc2VcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVDYXJvdXNlbFJlbGVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2Fyb3VzZWxSZWxlYXNlKGUpIHtcbiAgICAgICAgaWYgKHRoaXMucHJlc3NlZCkge1xuICAgICAgICAgIHRoaXMucHJlc3NlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aWNrZXIpO1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMub2Zmc2V0O1xuICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSA+IDEwIHx8IHRoaXMudmVsb2NpdHkgPCAtMTApIHtcbiAgICAgICAgICB0aGlzLmFtcGxpdHVkZSA9IDAuOSAqIHRoaXMudmVsb2NpdHk7XG4gICAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLm9mZnNldCArIHRoaXMuYW1wbGl0dWRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gTWF0aC5yb3VuZCh0aGlzLnRhcmdldCAvIHRoaXMuZGltKSAqIHRoaXMuZGltO1xuXG4gICAgICAgIC8vIE5vIHdyYXAgb2YgaXRlbXMuXG4gICAgICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA+PSB0aGlzLmRpbSAqICh0aGlzLmNvdW50IC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5kaW0gKiAodGhpcy5jb3VudCAtIDEpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50YXJnZXQgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW1wbGl0dWRlID0gdGhpcy50YXJnZXQgLSB0aGlzLm9mZnNldDtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYXV0b1Njcm9sbEJvdW5kKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnZ2VkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBDYXJvdXNlbCBDTGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUNhcm91c2VsQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlQ2Fyb3VzZWxDbGljayhlKSB7XG4gICAgICAgIC8vIERpc2FibGUgY2xpY2tzIGlmIGNhcm91c2VsIHdhcyBkcmFnZ2VkLlxuICAgICAgICBpZiAodGhpcy5kcmFnZ2VkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5jYXJvdXNlbC1pdGVtJykuaW5kZXgoKTtcbiAgICAgICAgICB2YXIgZGlmZiA9IHRoaXMuX3dyYXAodGhpcy5jZW50ZXIpIC0gY2xpY2tlZEluZGV4O1xuXG4gICAgICAgICAgLy8gRGlzYWJsZSBjbGlja3MgaWYgY2Fyb3VzZWwgd2FzIHNoaWZ0ZWQgYnkgY2xpY2tcbiAgICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY3ljbGVUbyhjbGlja2VkSW5kZXgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIEluZGljYXRvciBDTGlja1xuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZUluZGljYXRvckNsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUluZGljYXRvckNsaWNrKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgaW5kaWNhdG9yID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLmluZGljYXRvci1pdGVtJyk7XG4gICAgICAgIGlmIChpbmRpY2F0b3IubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fY3ljbGVUbyhpbmRpY2F0b3IuaW5kZXgoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgVGhyb3R0bGUgUmVzaXplXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlUmVzaXplXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJlc2l6ZShlKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZnVsbFdpZHRoKSB7XG4gICAgICAgICAgdGhpcy5pdGVtV2lkdGggPSB0aGlzLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHRoaXMuaW1hZ2VIZWlnaHQgPSB0aGlzLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbS5hY3RpdmUnKS5oZWlnaHQoKTtcbiAgICAgICAgICB0aGlzLmRpbSA9IHRoaXMuaXRlbVdpZHRoICogMiArIHRoaXMub3B0aW9ucy5wYWRkaW5nO1xuICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdGhpcy5jZW50ZXIgKiAyICogdGhpcy5pdGVtV2lkdGg7XG4gICAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgICB0aGlzLl9zZXRDYXJvdXNlbEhlaWdodCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9zY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBjYXJvdXNlbCBoZWlnaHQgYmFzZWQgb24gZmlyc3Qgc2xpZGVcbiAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbX0gaW1hZ2VPbmx5IC0gdHJ1ZSBmb3IgaW1hZ2Ugc2xpZGVzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0Q2Fyb3VzZWxIZWlnaHRcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0Q2Fyb3VzZWxIZWlnaHQoaW1hZ2VPbmx5KSB7XG4gICAgICAgIHZhciBfdGhpczY1ID0gdGhpcztcblxuICAgICAgICB2YXIgZmlyc3RTbGlkZSA9IHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpLmxlbmd0aCA/IHRoaXMuJGVsLmZpbmQoJy5jYXJvdXNlbC1pdGVtLmFjdGl2ZScpLmZpcnN0KCkgOiB0aGlzLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLmZpcnN0KCk7XG4gICAgICAgIHZhciBmaXJzdEltYWdlID0gZmlyc3RTbGlkZS5maW5kKCdpbWcnKS5maXJzdCgpO1xuICAgICAgICBpZiAoZmlyc3RJbWFnZS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAoZmlyc3RJbWFnZVswXS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gSWYgaW1hZ2Ugd29uJ3QgdHJpZ2dlciB0aGUgbG9hZCBldmVudFxuICAgICAgICAgICAgdmFyIGltYWdlSGVpZ2h0ID0gZmlyc3RJbWFnZS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGlmIChpbWFnZUhlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy4kZWwuY3NzKCdoZWlnaHQnLCBpbWFnZUhlaWdodCArICdweCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gSWYgaW1hZ2Ugc3RpbGwgaGFzIG5vIGhlaWdodCwgdXNlIHRoZSBuYXR1cmFsIGRpbWVuc2lvbnMgdG8gY2FsY3VsYXRlXG4gICAgICAgICAgICAgIHZhciBuYXR1cmFsV2lkdGggPSBmaXJzdEltYWdlWzBdLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgICAgICAgdmFyIG5hdHVyYWxIZWlnaHQgPSBmaXJzdEltYWdlWzBdLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgICAgICAgIHZhciBhZGp1c3RlZEhlaWdodCA9IHRoaXMuJGVsLndpZHRoKCkgLyBuYXR1cmFsV2lkdGggKiBuYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgICAgICB0aGlzLiRlbC5jc3MoJ2hlaWdodCcsIGFkanVzdGVkSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEdldCBoZWlnaHQgd2hlbiBpbWFnZSBpcyBsb2FkZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIGZpcnN0SW1hZ2Uub25lKCdsb2FkJywgZnVuY3Rpb24gKGVsLCBpKSB7XG4gICAgICAgICAgICAgIF90aGlzNjUuJGVsLmNzcygnaGVpZ2h0JywgZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWltYWdlT25seSkge1xuICAgICAgICAgIHZhciBzbGlkZUhlaWdodCA9IGZpcnN0U2xpZGUuaGVpZ2h0KCk7XG4gICAgICAgICAgdGhpcy4kZWwuY3NzKCdoZWlnaHQnLCBzbGlkZUhlaWdodCArICdweCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogR2V0IHggcG9zaXRpb24gZnJvbSBldmVudFxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3hwb3NcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfeHBvcyhlKSB7XG4gICAgICAgIC8vIHRvdWNoIGV2ZW50XG4gICAgICAgIGlmIChlLnRhcmdldFRvdWNoZXMgJiYgZS50YXJnZXRUb3VjaGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbW91c2UgZXZlbnRcbiAgICAgICAgcmV0dXJuIGUuY2xpZW50WDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgeSBwb3NpdGlvbiBmcm9tIGV2ZW50XG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfeXBvc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF95cG9zKGUpIHtcbiAgICAgICAgLy8gdG91Y2ggZXZlbnRcbiAgICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtb3VzZSBldmVudFxuICAgICAgICByZXR1cm4gZS5jbGllbnRZO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXAgaW5kZXhcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfd3JhcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF93cmFwKHgpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gdGhpcy5jb3VudCA/IHggJSB0aGlzLmNvdW50IDogeCA8IDAgPyB0aGlzLl93cmFwKHRoaXMuY291bnQgKyB4ICUgdGhpcy5jb3VudCkgOiB4O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRyYWNrcyBzY3JvbGxpbmcgaW5mb3JtYXRpb25cbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl90cmFja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90cmFjaygpIHtcbiAgICAgICAgdmFyIG5vdyA9IHZvaWQgMCxcbiAgICAgICAgICAgIGVsYXBzZWQgPSB2b2lkIDAsXG4gICAgICAgICAgICBkZWx0YSA9IHZvaWQgMCxcbiAgICAgICAgICAgIHYgPSB2b2lkIDA7XG5cbiAgICAgICAgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgZWxhcHNlZCA9IG5vdyAtIHRoaXMudGltZXN0YW1wO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IG5vdztcbiAgICAgICAgZGVsdGEgPSB0aGlzLm9mZnNldCAtIHRoaXMuZnJhbWU7XG4gICAgICAgIHRoaXMuZnJhbWUgPSB0aGlzLm9mZnNldDtcblxuICAgICAgICB2ID0gMTAwMCAqIGRlbHRhIC8gKDEgKyBlbGFwc2VkKTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDAuOCAqIHYgKyAwLjIgKiB0aGlzLnZlbG9jaXR5O1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEF1dG8gc2Nyb2xscyB0byBuZWFyZXN0IGNhcm91c2VsIGl0ZW0uXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXV0b1Njcm9sbFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hdXRvU2Nyb2xsKCkge1xuICAgICAgICB2YXIgZWxhcHNlZCA9IHZvaWQgMCxcbiAgICAgICAgICAgIGRlbHRhID0gdm9pZCAwO1xuXG4gICAgICAgIGlmICh0aGlzLmFtcGxpdHVkZSkge1xuICAgICAgICAgIGVsYXBzZWQgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXA7XG4gICAgICAgICAgZGVsdGEgPSB0aGlzLmFtcGxpdHVkZSAqIE1hdGguZXhwKC1lbGFwc2VkIC8gdGhpcy5vcHRpb25zLmR1cmF0aW9uKTtcbiAgICAgICAgICBpZiAoZGVsdGEgPiAyIHx8IGRlbHRhIDwgLTIpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbCh0aGlzLnRhcmdldCAtIGRlbHRhKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hdXRvU2Nyb2xsQm91bmQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGwodGhpcy50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNjcm9sbCB0byB0YXJnZXRcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2Nyb2xsXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Njcm9sbCh4KSB7XG4gICAgICAgIHZhciBfdGhpczY2ID0gdGhpcztcblxuICAgICAgICAvLyBUcmFjayBzY3JvbGxpbmcgc3RhdGVcbiAgICAgICAgaWYgKCF0aGlzLiRlbC5oYXNDbGFzcygnc2Nyb2xsaW5nJykpIHtcbiAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcm9sbGluZ1RpbWVvdXQgIT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5zY3JvbGxpbmdUaW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbGluZ1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM2Ni4kZWwucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24pO1xuXG4gICAgICAgIC8vIFN0YXJ0IGFjdHVhbCBzY3JvbGxcbiAgICAgICAgdmFyIGkgPSB2b2lkIDAsXG4gICAgICAgICAgICBoYWxmID0gdm9pZCAwLFxuICAgICAgICAgICAgZGVsdGEgPSB2b2lkIDAsXG4gICAgICAgICAgICBkaXIgPSB2b2lkIDAsXG4gICAgICAgICAgICB0d2VlbiA9IHZvaWQgMCxcbiAgICAgICAgICAgIGVsID0gdm9pZCAwLFxuICAgICAgICAgICAgYWxpZ25tZW50ID0gdm9pZCAwLFxuICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gdm9pZCAwLFxuICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSB2b2lkIDAsXG4gICAgICAgICAgICBjZW50ZXJUd2VlbmVkT3BhY2l0eSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIGxhc3RDZW50ZXIgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgdmFyIG51bVZpc2libGVPZmZzZXQgPSAxIC8gdGhpcy5vcHRpb25zLm51bVZpc2libGU7XG5cbiAgICAgICAgdGhpcy5vZmZzZXQgPSB0eXBlb2YgeCA9PT0gJ251bWJlcicgPyB4IDogdGhpcy5vZmZzZXQ7XG4gICAgICAgIHRoaXMuY2VudGVyID0gTWF0aC5mbG9vcigodGhpcy5vZmZzZXQgKyB0aGlzLmRpbSAvIDIpIC8gdGhpcy5kaW0pO1xuICAgICAgICBkZWx0YSA9IHRoaXMub2Zmc2V0IC0gdGhpcy5jZW50ZXIgKiB0aGlzLmRpbTtcbiAgICAgICAgZGlyID0gZGVsdGEgPCAwID8gMSA6IC0xO1xuICAgICAgICB0d2VlbiA9IC1kaXIgKiBkZWx0YSAqIDIgLyB0aGlzLmRpbTtcbiAgICAgICAgaGFsZiA9IHRoaXMuY291bnQgPj4gMTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgIGFsaWdubWVudCA9ICd0cmFuc2xhdGVYKDApJztcbiAgICAgICAgICBjZW50ZXJUd2VlbmVkT3BhY2l0eSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxpZ25tZW50ID0gJ3RyYW5zbGF0ZVgoJyArICh0aGlzLmVsLmNsaWVudFdpZHRoIC0gdGhpcy5pdGVtV2lkdGgpIC8gMiArICdweCkgJztcbiAgICAgICAgICBhbGlnbm1lbnQgKz0gJ3RyYW5zbGF0ZVkoJyArICh0aGlzLmVsLmNsaWVudEhlaWdodCAtIHRoaXMuaXRlbUhlaWdodCkgLyAyICsgJ3B4KSc7XG4gICAgICAgICAgY2VudGVyVHdlZW5lZE9wYWNpdHkgPSAxIC0gbnVtVmlzaWJsZU9mZnNldCAqIHR3ZWVuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IGluZGljYXRvciBhY3RpdmVcbiAgICAgICAgaWYgKHRoaXMuc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgICB2YXIgZGlmZiA9IHRoaXMuY2VudGVyICUgdGhpcy5jb3VudDtcbiAgICAgICAgICB2YXIgYWN0aXZlSW5kaWNhdG9yID0gdGhpcy4kaW5kaWNhdG9ycy5maW5kKCcuaW5kaWNhdG9yLWl0ZW0uYWN0aXZlJyk7XG4gICAgICAgICAgaWYgKGFjdGl2ZUluZGljYXRvci5pbmRleCgpICE9PSBkaWZmKSB7XG4gICAgICAgICAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy4kaW5kaWNhdG9ycy5maW5kKCcuaW5kaWNhdG9yLWl0ZW0nKS5lcShkaWZmKVswXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjZW50ZXJcbiAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICBpZiAoIXRoaXMubm9XcmFwIHx8IHRoaXMuY2VudGVyID49IDAgJiYgdGhpcy5jZW50ZXIgPCB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgZWwgPSB0aGlzLmltYWdlc1t0aGlzLl93cmFwKHRoaXMuY2VudGVyKV07XG5cbiAgICAgICAgICAvLyBBZGQgYWN0aXZlIGNsYXNzIHRvIGNlbnRlciBpdGVtLlxuICAgICAgICAgIGlmICghJChlbCkuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5maW5kKCcuY2Fyb3VzZWwtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gYWxpZ25tZW50ICsgXCIgdHJhbnNsYXRlWChcIiArIC1kZWx0YSAvIDIgKyBcInB4KSB0cmFuc2xhdGVYKFwiICsgZGlyICogdGhpcy5vcHRpb25zLnNoaWZ0ICogdHdlZW4gKiBpICsgXCJweCkgdHJhbnNsYXRlWihcIiArIHRoaXMub3B0aW9ucy5kaXN0ICogdHdlZW4gKyBcInB4KVwiO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1TdHlsZShlbCwgY2VudGVyVHdlZW5lZE9wYWNpdHksIDAsIHRyYW5zZm9ybVN0cmluZyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IGhhbGY7ICsraSkge1xuICAgICAgICAgIC8vIHJpZ2h0IHNpZGVcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmZ1bGxXaWR0aCkge1xuICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gdGhpcy5vcHRpb25zLmRpc3Q7XG4gICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IGkgPT09IGhhbGYgJiYgZGVsdGEgPCAwID8gMSAtIHR3ZWVuIDogMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgelRyYW5zbGF0aW9uID0gdGhpcy5vcHRpb25zLmRpc3QgKiAoaSAqIDIgKyB0d2VlbiAqIGRpcik7XG4gICAgICAgICAgICB0d2VlbmVkT3BhY2l0eSA9IDEgLSBudW1WaXNpYmxlT2Zmc2V0ICogKGkgKiAyICsgdHdlZW4gKiBkaXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBEb24ndCBzaG93IHdyYXBwZWQgaXRlbXMuXG4gICAgICAgICAgaWYgKCF0aGlzLm5vV3JhcCB8fCB0aGlzLmNlbnRlciArIGkgPCB0aGlzLmNvdW50KSB7XG4gICAgICAgICAgICBlbCA9IHRoaXMuaW1hZ2VzW3RoaXMuX3dyYXAodGhpcy5jZW50ZXIgKyBpKV07XG4gICAgICAgICAgICB2YXIgX3RyYW5zZm9ybVN0cmluZyA9IGFsaWdubWVudCArIFwiIHRyYW5zbGF0ZVgoXCIgKyAodGhpcy5vcHRpb25zLnNoaWZ0ICsgKHRoaXMuZGltICogaSAtIGRlbHRhKSAvIDIpICsgXCJweCkgdHJhbnNsYXRlWihcIiArIHpUcmFuc2xhdGlvbiArIFwicHgpXCI7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVJdGVtU3R5bGUoZWwsIHR3ZWVuZWRPcGFjaXR5LCAtaSwgX3RyYW5zZm9ybVN0cmluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gbGVmdCBzaWRlXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5mdWxsV2lkdGgpIHtcbiAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IHRoaXMub3B0aW9ucy5kaXN0O1xuICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSBpID09PSBoYWxmICYmIGRlbHRhID4gMCA/IDEgLSB0d2VlbiA6IDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHpUcmFuc2xhdGlvbiA9IHRoaXMub3B0aW9ucy5kaXN0ICogKGkgKiAyIC0gdHdlZW4gKiBkaXIpO1xuICAgICAgICAgICAgdHdlZW5lZE9wYWNpdHkgPSAxIC0gbnVtVmlzaWJsZU9mZnNldCAqIChpICogMiAtIHR3ZWVuICogZGlyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB3cmFwcGVkIGl0ZW1zLlxuICAgICAgICAgIGlmICghdGhpcy5ub1dyYXAgfHwgdGhpcy5jZW50ZXIgLSBpID49IDApIHtcbiAgICAgICAgICAgIGVsID0gdGhpcy5pbWFnZXNbdGhpcy5fd3JhcCh0aGlzLmNlbnRlciAtIGkpXTtcbiAgICAgICAgICAgIHZhciBfdHJhbnNmb3JtU3RyaW5nMiA9IGFsaWdubWVudCArIFwiIHRyYW5zbGF0ZVgoXCIgKyAoLXRoaXMub3B0aW9ucy5zaGlmdCArICgtdGhpcy5kaW0gKiBpIC0gZGVsdGEpIC8gMikgKyBcInB4KSB0cmFuc2xhdGVaKFwiICsgelRyYW5zbGF0aW9uICsgXCJweClcIjtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1TdHlsZShlbCwgdHdlZW5lZE9wYWNpdHksIC1pLCBfdHJhbnNmb3JtU3RyaW5nMik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2VudGVyXG4gICAgICAgIC8vIERvbid0IHNob3cgd3JhcHBlZCBpdGVtcy5cbiAgICAgICAgaWYgKCF0aGlzLm5vV3JhcCB8fCB0aGlzLmNlbnRlciA+PSAwICYmIHRoaXMuY2VudGVyIDwgdGhpcy5jb3VudCkge1xuICAgICAgICAgIGVsID0gdGhpcy5pbWFnZXNbdGhpcy5fd3JhcCh0aGlzLmNlbnRlcildO1xuICAgICAgICAgIHZhciBfdHJhbnNmb3JtU3RyaW5nMyA9IGFsaWdubWVudCArIFwiIHRyYW5zbGF0ZVgoXCIgKyAtZGVsdGEgLyAyICsgXCJweCkgdHJhbnNsYXRlWChcIiArIGRpciAqIHRoaXMub3B0aW9ucy5zaGlmdCAqIHR3ZWVuICsgXCJweCkgdHJhbnNsYXRlWihcIiArIHRoaXMub3B0aW9ucy5kaXN0ICogdHdlZW4gKyBcInB4KVwiO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1TdHlsZShlbCwgY2VudGVyVHdlZW5lZE9wYWNpdHksIDAsIF90cmFuc2Zvcm1TdHJpbmczKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG9uQ3ljbGVUbyBjYWxsYmFja1xuICAgICAgICB2YXIgJGN1cnJJdGVtID0gdGhpcy4kZWwuZmluZCgnLmNhcm91c2VsLWl0ZW0nKS5lcSh0aGlzLl93cmFwKHRoaXMuY2VudGVyKSk7XG4gICAgICAgIGlmIChsYXN0Q2VudGVyICE9PSB0aGlzLmNlbnRlciAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ3ljbGVUbyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkN5Y2xlVG8uY2FsbCh0aGlzLCAkY3Vyckl0ZW1bMF0sIHRoaXMuZHJhZ2dlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmUgdGltZSBjYWxsYmFja1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25lVGltZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vbmVUaW1lQ2FsbGJhY2suY2FsbCh0aGlzLCAkY3Vyckl0ZW1bMF0sIHRoaXMuZHJhZ2dlZCk7XG4gICAgICAgICAgdGhpcy5vbmVUaW1lQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3ljbGUgdG8gdGFyZ2V0XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gb3BhY2l0eVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHpJbmRleFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zZm9ybVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3VwZGF0ZUl0ZW1TdHlsZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVJdGVtU3R5bGUoZWwsIG9wYWNpdHksIHpJbmRleCwgdHJhbnNmb3JtKSB7XG4gICAgICAgIGVsLnN0eWxlW3RoaXMueGZvcm1dID0gdHJhbnNmb3JtO1xuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSB6SW5kZXg7XG4gICAgICAgIGVsLnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgICAgICBlbC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEN5Y2xlIHRvIHRhcmdldFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY3ljbGVUb1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jeWNsZVRvKG4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkaWZmID0gdGhpcy5jZW50ZXIgJSB0aGlzLmNvdW50IC0gbjtcblxuICAgICAgICAvLyBBY2NvdW50IGZvciB3cmFwYXJvdW5kLlxuICAgICAgICBpZiAoIXRoaXMubm9XcmFwKSB7XG4gICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlmZiArIHRoaXMuY291bnQpIDwgTWF0aC5hYnMoZGlmZikpIHtcbiAgICAgICAgICAgICAgZGlmZiArPSB0aGlzLmNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaWZmIC0gdGhpcy5jb3VudCkgPCBkaWZmKSB7XG4gICAgICAgICAgICAgIGRpZmYgLT0gdGhpcy5jb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuZGltICogTWF0aC5yb3VuZCh0aGlzLm9mZnNldCAvIHRoaXMuZGltKTtcbiAgICAgICAgLy8gTmV4dFxuICAgICAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgICB0aGlzLnRhcmdldCArPSB0aGlzLmRpbSAqIE1hdGguYWJzKGRpZmYpO1xuXG4gICAgICAgICAgLy8gUHJldlxuICAgICAgICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXQgLT0gdGhpcy5kaW0gKiBkaWZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IG9uZSB0aW1lIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9uZVRpbWVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2Nyb2xsXG4gICAgICAgIGlmICh0aGlzLm9mZnNldCAhPT0gdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICB0aGlzLmFtcGxpdHVkZSA9IHRoaXMudGFyZ2V0IC0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9hdXRvU2Nyb2xsQm91bmQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3ljbGUgdG8gbmV4dCBpdGVtXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gW25dXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJuZXh0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gbmV4dChuKSB7XG4gICAgICAgIGlmIChuID09PSB1bmRlZmluZWQgfHwgaXNOYU4obikpIHtcbiAgICAgICAgICBuID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2VudGVyICsgbjtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuY291bnQgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZXggPSB0aGlzLl93cmFwKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jeWNsZVRvKGluZGV4KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDeWNsZSB0byBwcmV2aW91cyBpdGVtXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gW25dXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJwcmV2XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcHJldihuKSB7XG4gICAgICAgIGlmIChuID09PSB1bmRlZmluZWQgfHwgaXNOYU4obikpIHtcbiAgICAgICAgICBuID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2VudGVyIC0gbjtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuY291bnQgfHwgaW5kZXggPCAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9XcmFwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5kZXggPSB0aGlzLl93cmFwKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2N5Y2xlVG8oaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEN5Y2xlIHRvIG50aCBpdGVtXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0gW25dXG4gICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0KG4sIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChuID09PSB1bmRlZmluZWQgfHwgaXNOYU4obikpIHtcbiAgICAgICAgICBuID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuID4gdGhpcy5jb3VudCB8fCBuIDwgMCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vV3JhcCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG4gPSB0aGlzLl93cmFwKG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY3ljbGVUbyhuLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KENhcm91c2VsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2Fyb3VzZWwpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9DYXJvdXNlbDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYXJvdXNlbDtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uQ2Fyb3VzZWwgPSBDYXJvdXNlbDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKENhcm91c2VsLCAnY2Fyb3VzZWwnLCAnTV9DYXJvdXNlbCcpO1xuICB9XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7XG4gICAgb25PcGVuOiB1bmRlZmluZWQsXG4gICAgb25DbG9zZTogdW5kZWZpbmVkXG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgVGFwVGFyZ2V0ID0gZnVuY3Rpb24gKF9Db21wb25lbnQxOSkge1xuICAgIF9pbmhlcml0cyhUYXBUYXJnZXQsIF9Db21wb25lbnQxOSk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgVGFwVGFyZ2V0IGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gVGFwVGFyZ2V0KGVsLCBvcHRpb25zKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFwVGFyZ2V0KTtcblxuICAgICAgdmFyIF90aGlzNjcgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFwVGFyZ2V0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFwVGFyZ2V0KSkuY2FsbCh0aGlzLCBUYXBUYXJnZXQsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNjcuZWwuTV9UYXBUYXJnZXQgPSBfdGhpczY3O1xuXG4gICAgICAvKipcbiAgICAgICAqIE9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICAgICAqIEBtZW1iZXIgVGFwVGFyZ2V0I29wdGlvbnNcbiAgICAgICAqIEBwcm9wIHtGdW5jdGlvbn0gb25PcGVuIC0gQ2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gZmVhdHVyZSBkaXNjb3ZlcnkgaXMgb3BlbmVkXG4gICAgICAgKiBAcHJvcCB7RnVuY3Rpb259IG9uQ2xvc2UgLSBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiBmZWF0dXJlIGRpc2NvdmVyeSBpcyBjbG9zZWRcbiAgICAgICAqL1xuICAgICAgX3RoaXM2Ny5vcHRpb25zID0gJC5leHRlbmQoe30sIFRhcFRhcmdldC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNjcuaXNPcGVuID0gZmFsc2U7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgICBfdGhpczY3LiRvcmlnaW4gPSAkKCcjJyArIF90aGlzNjcuJGVsLmF0dHIoJ2RhdGEtdGFyZ2V0JykpO1xuICAgICAgX3RoaXM2Ny5fc2V0dXAoKTtcblxuICAgICAgX3RoaXM2Ny5fY2FsY3VsYXRlUG9zaXRpb25pbmcoKTtcbiAgICAgIF90aGlzNjcuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzNjc7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRhcFRhcmdldCwgW3tcbiAgICAgIGtleTogXCJkZXN0cm95XCIsXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUZWFyZG93biBjb21wb25lbnRcbiAgICAgICAqL1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgdGhpcy5lbC5UYXBUYXJnZXQgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVRhcmdldENsaWNrQm91bmQgPSB0aGlzLl9oYW5kbGVUYXJnZXRDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVPcmlnaW5DbGlja0JvdW5kID0gdGhpcy5faGFuZGxlT3JpZ2luQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVGFyZ2V0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMub3JpZ2luRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPcmlnaW5DbGlja0JvdW5kKTtcblxuICAgICAgICAvLyBSZXNpemVcbiAgICAgICAgdmFyIHRocm90dGxlZFJlc2l6ZSA9IE0udGhyb3R0bGUodGhpcy5faGFuZGxlUmVzaXplLCAyMDApO1xuICAgICAgICB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCA9IHRocm90dGxlZFJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVUaHJvdHRsZWRSZXNpemVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlVGFyZ2V0Q2xpY2tCb3VuZCk7XG4gICAgICAgIHRoaXMub3JpZ2luRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVPcmlnaW5DbGlja0JvdW5kKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVRocm90dGxlZFJlc2l6ZUJvdW5kKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgVGFyZ2V0IENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlVGFyZ2V0Q2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlVGFyZ2V0Q2xpY2soZSkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgT3JpZ2luIENsaWNrXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlT3JpZ2luQ2xpY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlT3JpZ2luQ2xpY2soZSkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFJlc2l6ZVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVJlc2l6ZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVSZXNpemUoZSkge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVQb3NpdGlvbmluZygpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBSZXNpemVcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVEb2N1bWVudENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZURvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy50YXAtdGFyZ2V0LXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBUYXAgVGFyZ2V0XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXAoKSB7XG4gICAgICAgIC8vIENyZWF0aW5nIHRhcCB0YXJnZXRcbiAgICAgICAgdGhpcy53cmFwcGVyID0gdGhpcy4kZWwucGFyZW50KClbMF07XG4gICAgICAgIHRoaXMud2F2ZUVsID0gJCh0aGlzLndyYXBwZXIpLmZpbmQoJy50YXAtdGFyZ2V0LXdhdmUnKVswXTtcbiAgICAgICAgdGhpcy5vcmlnaW5FbCA9ICQodGhpcy53cmFwcGVyKS5maW5kKCcudGFwLXRhcmdldC1vcmlnaW4nKVswXTtcbiAgICAgICAgdGhpcy5jb250ZW50RWwgPSB0aGlzLiRlbC5maW5kKCcudGFwLXRhcmdldC1jb250ZW50JylbMF07XG5cbiAgICAgICAgLy8gQ3JlYXRpbmcgd3JhcHBlclxuICAgICAgICBpZiAoISQodGhpcy53cmFwcGVyKS5oYXNDbGFzcygnLnRhcC10YXJnZXQtd3JhcHBlcicpKSB7XG4gICAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RhcC10YXJnZXQtd3JhcHBlcicpO1xuICAgICAgICAgIHRoaXMuJGVsLmJlZm9yZSgkKHRoaXMud3JhcHBlcikpO1xuICAgICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmQodGhpcy5lbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyBjb250ZW50XG4gICAgICAgIGlmICghdGhpcy5jb250ZW50RWwpIHtcbiAgICAgICAgICB0aGlzLmNvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIHRoaXMuY29udGVudEVsLmNsYXNzTGlzdC5hZGQoJ3RhcC10YXJnZXQtY29udGVudCcpO1xuICAgICAgICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLmNvbnRlbnRFbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGluZyBmb3JlZ3JvdW5kIHdhdmVcbiAgICAgICAgaWYgKCF0aGlzLndhdmVFbCkge1xuICAgICAgICAgIHRoaXMud2F2ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgdGhpcy53YXZlRWwuY2xhc3NMaXN0LmFkZCgndGFwLXRhcmdldC13YXZlJyk7XG5cbiAgICAgICAgICAvLyBDcmVhdGluZyBvcmlnaW5cbiAgICAgICAgICBpZiAoIXRoaXMub3JpZ2luRWwpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luRWwgPSB0aGlzLiRvcmlnaW4uY2xvbmUodHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbkVsLmFkZENsYXNzKCd0YXAtdGFyZ2V0LW9yaWdpbicpO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5FbC5yZW1vdmVBdHRyKCdpZCcpO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5FbC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5FbCA9IHRoaXMub3JpZ2luRWxbMF07XG4gICAgICAgICAgICB0aGlzLndhdmVFbC5hcHBlbmQodGhpcy5vcmlnaW5FbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZCh0aGlzLndhdmVFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxjdWxhdGUgcG9zaXRpb25pbmdcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9jYWxjdWxhdGVQb3NpdGlvbmluZ1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9jYWxjdWxhdGVQb3NpdGlvbmluZygpIHtcbiAgICAgICAgLy8gRWxlbWVudCBvciBwYXJlbnQgaXMgZml4ZWQgcG9zaXRpb24/XG4gICAgICAgIHZhciBpc0ZpeGVkID0gdGhpcy4kb3JpZ2luLmNzcygncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJztcbiAgICAgICAgaWYgKCFpc0ZpeGVkKSB7XG4gICAgICAgICAgdmFyIHBhcmVudHMgPSB0aGlzLiRvcmlnaW4ucGFyZW50cygpO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXNGaXhlZCA9ICQocGFyZW50c1tpXSkuY3NzKCdwb3NpdGlvbicpID09ICdmaXhlZCc7XG4gICAgICAgICAgICBpZiAoaXNGaXhlZCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGluZyBvcmlnaW5cbiAgICAgICAgdmFyIG9yaWdpbldpZHRoID0gdGhpcy4kb3JpZ2luLm91dGVyV2lkdGgoKTtcbiAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IHRoaXMuJG9yaWdpbi5vdXRlckhlaWdodCgpO1xuICAgICAgICB2YXIgb3JpZ2luVG9wID0gaXNGaXhlZCA/IHRoaXMuJG9yaWdpbi5vZmZzZXQoKS50b3AgLSBNLmdldERvY3VtZW50U2Nyb2xsVG9wKCkgOiB0aGlzLiRvcmlnaW4ub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgb3JpZ2luTGVmdCA9IGlzRml4ZWQgPyB0aGlzLiRvcmlnaW4ub2Zmc2V0KCkubGVmdCAtIE0uZ2V0RG9jdW1lbnRTY3JvbGxMZWZ0KCkgOiB0aGlzLiRvcmlnaW4ub2Zmc2V0KCkubGVmdDtcblxuICAgICAgICAvLyBDYWxjdWxhdGluZyBzY3JlZW5cbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHZhciBjZW50ZXJYID0gd2luZG93V2lkdGggLyAyO1xuICAgICAgICB2YXIgY2VudGVyWSA9IHdpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHZhciBpc0xlZnQgPSBvcmlnaW5MZWZ0IDw9IGNlbnRlclg7XG4gICAgICAgIHZhciBpc1JpZ2h0ID0gb3JpZ2luTGVmdCA+IGNlbnRlclg7XG4gICAgICAgIHZhciBpc1RvcCA9IG9yaWdpblRvcCA8PSBjZW50ZXJZO1xuICAgICAgICB2YXIgaXNCb3R0b20gPSBvcmlnaW5Ub3AgPiBjZW50ZXJZO1xuICAgICAgICB2YXIgaXNDZW50ZXJYID0gb3JpZ2luTGVmdCA+PSB3aW5kb3dXaWR0aCAqIDAuMjUgJiYgb3JpZ2luTGVmdCA8PSB3aW5kb3dXaWR0aCAqIDAuNzU7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRpbmcgdGFwIHRhcmdldFxuICAgICAgICB2YXIgdGFwVGFyZ2V0V2lkdGggPSB0aGlzLiRlbC5vdXRlcldpZHRoKCk7XG4gICAgICAgIHZhciB0YXBUYXJnZXRIZWlnaHQgPSB0aGlzLiRlbC5vdXRlckhlaWdodCgpO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0VG9wID0gb3JpZ2luVG9wICsgb3JpZ2luSGVpZ2h0IC8gMiAtIHRhcFRhcmdldEhlaWdodCAvIDI7XG4gICAgICAgIHZhciB0YXBUYXJnZXRMZWZ0ID0gb3JpZ2luTGVmdCArIG9yaWdpbldpZHRoIC8gMiAtIHRhcFRhcmdldFdpZHRoIC8gMjtcbiAgICAgICAgdmFyIHRhcFRhcmdldFBvc2l0aW9uID0gaXNGaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gICAgICAgIC8vIENhbGN1bGF0aW5nIGNvbnRlbnRcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRXaWR0aCA9IGlzQ2VudGVyWCA/IHRhcFRhcmdldFdpZHRoIDogdGFwVGFyZ2V0V2lkdGggLyAyICsgb3JpZ2luV2lkdGg7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUZXh0SGVpZ2h0ID0gdGFwVGFyZ2V0SGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRUb3AgPSBpc1RvcCA/IHRhcFRhcmdldEhlaWdodCAvIDIgOiAwO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0VGV4dEJvdHRvbSA9IDA7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUZXh0TGVmdCA9IGlzTGVmdCAmJiAhaXNDZW50ZXJYID8gdGFwVGFyZ2V0V2lkdGggLyAyIC0gb3JpZ2luV2lkdGggOiAwO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0VGV4dFJpZ2h0ID0gMDtcbiAgICAgICAgdmFyIHRhcFRhcmdldFRleHRQYWRkaW5nID0gb3JpZ2luV2lkdGg7XG4gICAgICAgIHZhciB0YXBUYXJnZXRUZXh0QWxpZ24gPSBpc0JvdHRvbSA/ICdib3R0b20nIDogJ3RvcCc7XG5cbiAgICAgICAgLy8gQ2FsY3VsYXRpbmcgd2F2ZVxuICAgICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVdpZHRoID0gb3JpZ2luV2lkdGggPiBvcmlnaW5IZWlnaHQgPyBvcmlnaW5XaWR0aCAqIDIgOiBvcmlnaW5XaWR0aCAqIDI7XG4gICAgICAgIHZhciB0YXBUYXJnZXRXYXZlSGVpZ2h0ID0gdGFwVGFyZ2V0V2F2ZVdpZHRoO1xuICAgICAgICB2YXIgdGFwVGFyZ2V0V2F2ZVRvcCA9IHRhcFRhcmdldEhlaWdodCAvIDIgLSB0YXBUYXJnZXRXYXZlSGVpZ2h0IC8gMjtcbiAgICAgICAgdmFyIHRhcFRhcmdldFdhdmVMZWZ0ID0gdGFwVGFyZ2V0V2lkdGggLyAyIC0gdGFwVGFyZ2V0V2F2ZVdpZHRoIC8gMjtcblxuICAgICAgICAvLyBTZXR0aW5nIHRhcCB0YXJnZXRcbiAgICAgICAgdmFyIHRhcFRhcmdldFdyYXBwZXJDc3NPYmogPSB7fTtcbiAgICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai50b3AgPSBpc1RvcCA/IHRhcFRhcmdldFRvcCArICdweCcgOiAnJztcbiAgICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5yaWdodCA9IGlzUmlnaHQgPyB3aW5kb3dXaWR0aCAtIHRhcFRhcmdldExlZnQgLSB0YXBUYXJnZXRXaWR0aCArICdweCcgOiAnJztcbiAgICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5ib3R0b20gPSBpc0JvdHRvbSA/IHdpbmRvd0hlaWdodCAtIHRhcFRhcmdldFRvcCAtIHRhcFRhcmdldEhlaWdodCArICdweCcgOiAnJztcbiAgICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5sZWZ0ID0gaXNMZWZ0ID8gdGFwVGFyZ2V0TGVmdCArICdweCcgOiAnJztcbiAgICAgICAgdGFwVGFyZ2V0V3JhcHBlckNzc09iai5wb3NpdGlvbiA9IHRhcFRhcmdldFBvc2l0aW9uO1xuICAgICAgICAkKHRoaXMud3JhcHBlcikuY3NzKHRhcFRhcmdldFdyYXBwZXJDc3NPYmopO1xuXG4gICAgICAgIC8vIFNldHRpbmcgY29udGVudFxuICAgICAgICAkKHRoaXMuY29udGVudEVsKS5jc3Moe1xuICAgICAgICAgIHdpZHRoOiB0YXBUYXJnZXRUZXh0V2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogdGFwVGFyZ2V0VGV4dEhlaWdodCArICdweCcsXG4gICAgICAgICAgdG9wOiB0YXBUYXJnZXRUZXh0VG9wICsgJ3B4JyxcbiAgICAgICAgICByaWdodDogdGFwVGFyZ2V0VGV4dFJpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICBib3R0b206IHRhcFRhcmdldFRleHRCb3R0b20gKyAncHgnLFxuICAgICAgICAgIGxlZnQ6IHRhcFRhcmdldFRleHRMZWZ0ICsgJ3B4JyxcbiAgICAgICAgICBwYWRkaW5nOiB0YXBUYXJnZXRUZXh0UGFkZGluZyArICdweCcsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogdGFwVGFyZ2V0VGV4dEFsaWduXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldHRpbmcgd2F2ZVxuICAgICAgICAkKHRoaXMud2F2ZUVsKS5jc3Moe1xuICAgICAgICAgIHRvcDogdGFwVGFyZ2V0V2F2ZVRvcCArICdweCcsXG4gICAgICAgICAgbGVmdDogdGFwVGFyZ2V0V2F2ZUxlZnQgKyAncHgnLFxuICAgICAgICAgIHdpZHRoOiB0YXBUYXJnZXRXYXZlV2lkdGggKyAncHgnLFxuICAgICAgICAgIGhlaWdodDogdGFwVGFyZ2V0V2F2ZUhlaWdodCArICdweCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogT3BlbiBUYXBUYXJnZXRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIm9wZW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbk9wZW4gY2FsbGJhY2tcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMub25PcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uT3Blbi5jYWxsKHRoaXMsIHRoaXMuJG9yaWdpblswXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZURvY3VtZW50Q2xpY2tCb3VuZCwgdHJ1ZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIENsb3NlIFRhcCBUYXJnZXRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImNsb3NlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBvbkNsb3NlIGNhbGxiYWNrXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25DbG9zZS5jYWxsKHRoaXMsIHRoaXMuJG9yaWdpblswXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVEb2N1bWVudENsaWNrQm91bmQsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlRG9jdW1lbnRDbGlja0JvdW5kKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogXCJpbml0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdChlbHMsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoVGFwVGFyZ2V0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFwVGFyZ2V0KSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fVGFwVGFyZ2V0O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZGVmYXVsdHM7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhcFRhcmdldDtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uVGFwVGFyZ2V0ID0gVGFwVGFyZ2V0O1xuXG4gIGlmIChNLmpRdWVyeUxvYWRlZCkge1xuICAgIE0uaW5pdGlhbGl6ZUpxdWVyeVdyYXBwZXIoVGFwVGFyZ2V0LCAndGFwVGFyZ2V0JywgJ01fVGFwVGFyZ2V0Jyk7XG4gIH1cbn0pKGNhc2gpO1xuOyhmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIF9kZWZhdWx0cyA9IHtcbiAgICBjbGFzc2VzOiAnJyxcbiAgICBkcm9wZG93bk9wdGlvbnM6IHt9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBjbGFzc1xuICAgKlxuICAgKi9cblxuICB2YXIgRm9ybVNlbGVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MjApIHtcbiAgICBfaW5oZXJpdHMoRm9ybVNlbGVjdCwgX0NvbXBvbmVudDIwKTtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBGb3JtU2VsZWN0IGluc3RhbmNlXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gRm9ybVNlbGVjdChlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZvcm1TZWxlY3QpO1xuXG4gICAgICAvLyBEb24ndCBpbml0IGlmIGJyb3dzZXIgZGVmYXVsdCB2ZXJzaW9uXG4gICAgICB2YXIgX3RoaXM2OCA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGb3JtU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRm9ybVNlbGVjdCkpLmNhbGwodGhpcywgRm9ybVNlbGVjdCwgZWwsIG9wdGlvbnMpKTtcblxuICAgICAgaWYgKF90aGlzNjguJGVsLmhhc0NsYXNzKCdicm93c2VyLWRlZmF1bHQnKSkge1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXM2OCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzNjguZWwuTV9Gb3JtU2VsZWN0ID0gX3RoaXM2ODtcblxuICAgICAgLyoqXG4gICAgICAgKiBPcHRpb25zIGZvciB0aGUgc2VsZWN0XG4gICAgICAgKiBAbWVtYmVyIEZvcm1TZWxlY3Qjb3B0aW9uc1xuICAgICAgICovXG4gICAgICBfdGhpczY4Lm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgRm9ybVNlbGVjdC5kZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIF90aGlzNjguaXNNdWx0aXBsZSA9IF90aGlzNjguJGVsLnByb3AoJ211bHRpcGxlJyk7XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICBfdGhpczY4LmVsLnRhYkluZGV4ID0gLTE7XG4gICAgICBfdGhpczY4Ll9rZXlzU2VsZWN0ZWQgPSB7fTtcbiAgICAgIF90aGlzNjguX3ZhbHVlRGljdCA9IHt9OyAvLyBNYXBzIGtleSB0byBvcmlnaW5hbCBhbmQgZ2VuZXJhdGVkIG9wdGlvbiBlbGVtZW50LlxuICAgICAgX3RoaXM2OC5fc2V0dXBEcm9wZG93bigpO1xuXG4gICAgICBfdGhpczY4Ll9zZXR1cEV2ZW50SGFuZGxlcnMoKTtcbiAgICAgIHJldHVybiBfdGhpczY4O1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhGb3JtU2VsZWN0LCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLl9yZW1vdmVEcm9wZG93bigpO1xuICAgICAgICB0aGlzLmVsLk1fRm9ybVNlbGVjdCA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cEV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczY5ID0gdGhpcztcblxuICAgICAgICB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCA9IHRoaXMuX2hhbmRsZVNlbGVjdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVPcHRpb25DbGlja0JvdW5kID0gdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlSW5wdXRDbGlja0JvdW5kID0gdGhpcy5faGFuZGxlSW5wdXRDbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNjkuX2hhbmRsZU9wdGlvbkNsaWNrQm91bmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCk7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBFdmVudCBIYW5kbGVyc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZUV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRXZlbnRIYW5kbGVycygpIHtcbiAgICAgICAgdmFyIF90aGlzNzAgPSB0aGlzO1xuXG4gICAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJ2xpOm5vdCgub3B0Z3JvdXApJykuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzNzAuX2hhbmRsZU9wdGlvbkNsaWNrQm91bmQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9oYW5kbGVTZWxlY3RDaGFuZ2VCb3VuZCk7XG4gICAgICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9oYW5kbGVJbnB1dENsaWNrQm91bmQpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBTZWxlY3QgQ2hhbmdlXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlU2VsZWN0Q2hhbmdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVNlbGVjdENoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuX3NldFZhbHVlVG9JbnB1dCgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEhhbmRsZSBPcHRpb24gQ2xpY2tcbiAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVPcHRpb25DbGlja1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVPcHRpb25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG9wdGlvbiA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJylbMF07XG4gICAgICAgIHZhciBrZXkgPSBvcHRpb24uaWQ7XG4gICAgICAgIGlmICghJChvcHRpb24pLmhhc0NsYXNzKCdkaXNhYmxlZCcpICYmICEkKG9wdGlvbikuaGFzQ2xhc3MoJ29wdGdyb3VwJykgJiYga2V5Lmxlbmd0aCkge1xuICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgICAvLyBEZXNlbGVjdCBwbGFjZWhvbGRlciBvcHRpb24gaWYgc3RpbGwgc2VsZWN0ZWQuXG4gICAgICAgICAgICB2YXIgcGxhY2Vob2xkZXJPcHRpb24gPSAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5maW5kKCdsaS5kaXNhYmxlZC5zZWxlY3RlZCcpO1xuICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyT3B0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24uZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlRW50cnlGcm9tQXJyYXkocGxhY2Vob2xkZXJPcHRpb25bMF0uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWQgPSB0aGlzLl90b2dnbGVFbnRyeUZyb21BcnJheShrZXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5maW5kKCdsaScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgJChvcHRpb24pLnRvZ2dsZUNsYXNzKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZXQgc2VsZWN0ZWQgb24gb3JpZ2luYWwgc2VsZWN0IG9wdGlvblxuICAgICAgICAgIC8vIE9ubHkgdHJpZ2dlciBpZiBzZWxlY3RlZCBzdGF0ZSBjaGFuZ2VkXG4gICAgICAgICAgdmFyIHByZXZTZWxlY3RlZCA9ICQodGhpcy5fdmFsdWVEaWN0W2tleV0uZWwpLnByb3AoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgaWYgKHByZXZTZWxlY3RlZCAhPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICQodGhpcy5fdmFsdWVEaWN0W2tleV0uZWwpLnByb3AoJ3NlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICAgICAgICAgICAgdGhpcy4kZWwudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgSW5wdXQgQ2xpY2tcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVJbnB1dENsaWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZUlucHV0Q2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duICYmIHRoaXMuZHJvcGRvd24uaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VmFsdWVUb0lucHV0KCk7XG4gICAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRTdGF0ZXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHVwIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0dXBEcm9wZG93blwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXR1cERyb3Bkb3duKCkge1xuICAgICAgICB2YXIgX3RoaXM3MSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICQodGhpcy53cmFwcGVyKS5hZGRDbGFzcygnc2VsZWN0LXdyYXBwZXIgJyArIHRoaXMub3B0aW9ucy5jbGFzc2VzKTtcbiAgICAgICAgdGhpcy4kZWwuYmVmb3JlKCQodGhpcy53cmFwcGVyKSk7XG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcblxuICAgICAgICBpZiAodGhpcy5lbC5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRyb3Bkb3duXG4gICAgICAgIHRoaXMuJHNlbGVjdE9wdGlvbnMgPSB0aGlzLiRlbC5jaGlsZHJlbignb3B0aW9uLCBvcHRncm91cCcpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcHRpb25zLmlkID0gXCJzZWxlY3Qtb3B0aW9ucy1cIiArIE0uZ3VpZCgpO1xuICAgICAgICAkKHRoaXMuZHJvcGRvd25PcHRpb25zKS5hZGRDbGFzcygnZHJvcGRvd24tY29udGVudCBzZWxlY3QtZHJvcGRvd24gJyArICh0aGlzLmlzTXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRyb3Bkb3duIHN0cnVjdHVyZS5cbiAgICAgICAgaWYgKHRoaXMuJHNlbGVjdE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kc2VsZWN0T3B0aW9ucy5lYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgaWYgKCQoZWwpLmlzKCdvcHRpb24nKSkge1xuICAgICAgICAgICAgICAvLyBEaXJlY3QgZGVzY2VuZGFudCBvcHRpb24uXG4gICAgICAgICAgICAgIHZhciBvcHRpb25FbCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgaWYgKF90aGlzNzEuaXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbkVsID0gX3RoaXM3MS5fYXBwZW5kT3B0aW9uV2l0aEljb24oX3RoaXM3MS4kZWwsIGVsLCAnbXVsdGlwbGUnKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25FbCA9IF90aGlzNzEuX2FwcGVuZE9wdGlvbldpdGhJY29uKF90aGlzNzEuJGVsLCBlbCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBfdGhpczcxLl9hZGRPcHRpb25Ub1ZhbHVlRGljdChlbCwgb3B0aW9uRWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgkKGVsKS5pcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICAgICAgICAvLyBPcHRncm91cC5cbiAgICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSAkKGVsKS5jaGlsZHJlbignb3B0aW9uJyk7XG4gICAgICAgICAgICAgICQoX3RoaXM3MS5kcm9wZG93bk9wdGlvbnMpLmFwcGVuZCgkKCc8bGkgY2xhc3M9XCJvcHRncm91cFwiPjxzcGFuPicgKyBlbC5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykgKyAnPC9zcGFuPjwvbGk+JylbMF0pO1xuXG4gICAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uRWwgPSBfdGhpczcxLl9hcHBlbmRPcHRpb25XaXRoSWNvbihfdGhpczcxLiRlbCwgZWwsICdvcHRncm91cC1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICBfdGhpczcxLl9hZGRPcHRpb25Ub1ZhbHVlRGljdChlbCwgb3B0aW9uRWwpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsLmFmdGVyKHRoaXMuZHJvcGRvd25PcHRpb25zKTtcblxuICAgICAgICAvLyBBZGQgaW5wdXQgZHJvcGRvd25cbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICQodGhpcy5pbnB1dCkuYWRkQ2xhc3MoJ3NlbGVjdC1kcm9wZG93biBkcm9wZG93bi10cmlnZ2VyJyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JywgdGhpcy5kcm9wZG93bk9wdGlvbnMuaWQpO1xuICAgICAgICBpZiAodGhpcy5lbC5kaXNhYmxlZCkge1xuICAgICAgICAgICQodGhpcy5pbnB1dCkucHJvcCgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwuYmVmb3JlKHRoaXMuaW5wdXQpO1xuICAgICAgICB0aGlzLl9zZXRWYWx1ZVRvSW5wdXQoKTtcblxuICAgICAgICAvLyBBZGQgY2FyZXRcbiAgICAgICAgdmFyIGRyb3Bkb3duSWNvbiA9ICQoJzxzdmcgY2xhc3M9XCJjYXJldFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIk03IDEwbDUgNSA1LTV6XCIvPjxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+PC9zdmc+Jyk7XG4gICAgICAgIHRoaXMuJGVsLmJlZm9yZShkcm9wZG93bkljb25bMF0pO1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgZHJvcGRvd25cbiAgICAgICAgaWYgKCF0aGlzLmVsLmRpc2FibGVkKSB7XG4gICAgICAgICAgdmFyIGRyb3Bkb3duT3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMuZHJvcGRvd25PcHRpb25zKTtcblxuICAgICAgICAgIC8vIEFkZCBjYWxsYmFjayBmb3IgY2VudGVyaW5nIHNlbGVjdGVkIG9wdGlvbiB3aGVuIGRyb3Bkb3duIGNvbnRlbnQgaXMgc2Nyb2xsYWJsZVxuICAgICAgICAgIGRyb3Bkb3duT3B0aW9ucy5vbk9wZW5FbmQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZE9wdGlvbiA9ICQoX3RoaXM3MS5kcm9wZG93bk9wdGlvbnMpLmZpbmQoJy5zZWxlY3RlZCcpLmZpcnN0KCk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgLy8gRm9jdXMgc2VsZWN0ZWQgb3B0aW9uIGluIGRyb3Bkb3duXG4gICAgICAgICAgICAgIE0ua2V5RG93biA9IHRydWU7XG4gICAgICAgICAgICAgIF90aGlzNzEuZHJvcGRvd24uZm9jdXNlZEluZGV4ID0gc2VsZWN0ZWRPcHRpb24uaW5kZXgoKTtcbiAgICAgICAgICAgICAgX3RoaXM3MS5kcm9wZG93bi5fZm9jdXNGb2N1c2VkSXRlbSgpO1xuICAgICAgICAgICAgICBNLmtleURvd24gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAvLyBIYW5kbGUgc2Nyb2xsaW5nIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgICAgICAgICAgICBpZiAoX3RoaXM3MS5kcm9wZG93bi5pc1Njcm9sbGFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gc2VsZWN0ZWRPcHRpb25bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gX3RoaXM3MS5kcm9wZG93bk9wdGlvbnMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wOyAvLyBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgICAgICAgICAgICAgc2Nyb2xsT2Zmc2V0IC09IF90aGlzNzEuZHJvcGRvd25PcHRpb25zLmNsaWVudEhlaWdodCAvIDI7IC8vIGNlbnRlciBpbiBkcm9wZG93blxuICAgICAgICAgICAgICAgIF90aGlzNzEuZHJvcGRvd25PcHRpb25zLnNjcm9sbFRvcCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgICAgICBkcm9wZG93bk9wdGlvbnMuY2xvc2VPbkNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZHJvcGRvd24gPSBNLkRyb3Bkb3duLmluaXQodGhpcy5pbnB1dCwgZHJvcGRvd25PcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBpbml0aWFsIHNlbGVjdGlvbnNcbiAgICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRTdGF0ZXMoKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBZGQgb3B0aW9uIHRvIHZhbHVlIGRpY3RcbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWwgIG9yaWdpbmFsIG9wdGlvbiBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9wdGlvbkVsICBnZW5lcmF0ZWQgb3B0aW9uIGVsZW1lbnRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9hZGRPcHRpb25Ub1ZhbHVlRGljdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9hZGRPcHRpb25Ub1ZhbHVlRGljdChlbCwgb3B0aW9uRWwpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gT2JqZWN0LmtleXModGhpcy5fdmFsdWVEaWN0KS5sZW5ndGg7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmRyb3Bkb3duT3B0aW9ucy5pZCArIGluZGV4O1xuICAgICAgICB2YXIgb2JqID0ge307XG4gICAgICAgIG9wdGlvbkVsLmlkID0ga2V5O1xuXG4gICAgICAgIG9iai5lbCA9IGVsO1xuICAgICAgICBvYmoub3B0aW9uRWwgPSBvcHRpb25FbDtcbiAgICAgICAgdGhpcy5fdmFsdWVEaWN0W2tleV0gPSBvYmo7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIGRyb3Bkb3duXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRHJvcGRvd25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfcmVtb3ZlRHJvcGRvd24oKSB7XG4gICAgICAgICQodGhpcy53cmFwcGVyKS5maW5kKCcuY2FyZXQnKS5yZW1vdmUoKTtcbiAgICAgICAgJCh0aGlzLmlucHV0KS5yZW1vdmUoKTtcbiAgICAgICAgJCh0aGlzLmRyb3Bkb3duT3B0aW9ucykucmVtb3ZlKCk7XG4gICAgICAgICQodGhpcy53cmFwcGVyKS5iZWZvcmUodGhpcy4kZWwpO1xuICAgICAgICAkKHRoaXMud3JhcHBlcikucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgZHJvcGRvd25cbiAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gc2VsZWN0ICBzZWxlY3QgZWxlbWVudFxuICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBvcHRpb24gIG9wdGlvbiBlbGVtZW50IGZyb20gc2VsZWN0XG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAgICogQHJldHVybiB7RWxlbWVudH0gIG9wdGlvbiBlbGVtZW50IGFkZGVkXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfYXBwZW5kT3B0aW9uV2l0aEljb25cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwZW5kT3B0aW9uV2l0aEljb24oc2VsZWN0LCBvcHRpb24sIHR5cGUpIHtcbiAgICAgICAgLy8gQWRkIGRpc2FibGVkIGF0dHIgaWYgZGlzYWJsZWRcbiAgICAgICAgdmFyIGRpc2FibGVkQ2xhc3MgPSBvcHRpb24uZGlzYWJsZWQgPyAnZGlzYWJsZWQgJyA6ICcnO1xuICAgICAgICB2YXIgb3B0Z3JvdXBDbGFzcyA9IHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nID8gJ29wdGdyb3VwLW9wdGlvbiAnIDogJyc7XG4gICAgICAgIHZhciBtdWx0aXBsZUNoZWNrYm94ID0gdGhpcy5pc011bHRpcGxlID8gXCI8bGFiZWw+PGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlwiICsgZGlzYWJsZWRDbGFzcyArIFwiXFxcIi8+PHNwYW4+XCIgKyBvcHRpb24uaW5uZXJIVE1MICsgXCI8L3NwYW4+PC9sYWJlbD5cIiA6IG9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgIHZhciBsaUVsID0gJCgnPGxpPjwvbGk+Jyk7XG4gICAgICAgIHZhciBzcGFuRWwgPSAkKCc8c3Bhbj48L3NwYW4+Jyk7XG4gICAgICAgIHNwYW5FbC5odG1sKG11bHRpcGxlQ2hlY2tib3gpO1xuICAgICAgICBsaUVsLmFkZENsYXNzKGRpc2FibGVkQ2xhc3MgKyBcIiBcIiArIG9wdGdyb3VwQ2xhc3MpO1xuICAgICAgICBsaUVsLmFwcGVuZChzcGFuRWwpO1xuXG4gICAgICAgIC8vIGFkZCBpY29uc1xuICAgICAgICB2YXIgaWNvblVybCA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICAgICAgICBpZiAoISFpY29uVXJsKSB7XG4gICAgICAgICAgdmFyIGltZ0VsID0gJChcIjxpbWcgYWx0PVxcXCJcXFwiIHNyYz1cXFwiXCIgKyBpY29uVXJsICsgXCJcXFwiPlwiKTtcbiAgICAgICAgICBsaUVsLnByZXBlbmQoaW1nRWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXG4gICAgICAgICQodGhpcy5kcm9wZG93bk9wdGlvbnMpLmFwcGVuZChsaUVsWzBdKTtcbiAgICAgICAgcmV0dXJuIGxpRWxbMF07XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVG9nZ2xlIGVudHJ5IGZyb20gb3B0aW9uXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5ICBPcHRpb24ga2V5XG4gICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAgaWYgZW50cnkgd2FzIGFkZGVkIG9yIHJlbW92ZWRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl90b2dnbGVFbnRyeUZyb21BcnJheVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF90b2dnbGVFbnRyeUZyb21BcnJheShrZXkpIHtcbiAgICAgICAgdmFyIG5vdEFkZGVkID0gIXRoaXMuX2tleXNTZWxlY3RlZC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICAgICAgICB2YXIgJG9wdGlvbkxpID0gJCh0aGlzLl92YWx1ZURpY3Rba2V5XS5vcHRpb25FbCk7XG5cbiAgICAgICAgaWYgKG5vdEFkZGVkKSB7XG4gICAgICAgICAgdGhpcy5fa2V5c1NlbGVjdGVkW2tleV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9rZXlzU2VsZWN0ZWRba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgICRvcHRpb25MaS50b2dnbGVDbGFzcygnc2VsZWN0ZWQnLCBub3RBZGRlZCk7XG5cbiAgICAgICAgLy8gU2V0IGNoZWNrYm94IGNoZWNrZWQgdmFsdWVcbiAgICAgICAgJG9wdGlvbkxpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLnByb3AoJ2NoZWNrZWQnLCBub3RBZGRlZCk7XG5cbiAgICAgICAgLy8gdXNlIG5vdEFkZGVkIGluc3RlYWQgb2YgdHJ1ZSAodG8gZGV0ZWN0IGlmIHRoZSBvcHRpb24gaXMgc2VsZWN0ZWQgb3Igbm90KVxuICAgICAgICAkb3B0aW9uTGkucHJvcCgnc2VsZWN0ZWQnLCBub3RBZGRlZCk7XG5cbiAgICAgICAgcmV0dXJuIG5vdEFkZGVkO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0ZXh0IHZhbHVlIHRvIGlucHV0XG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2V0VmFsdWVUb0lucHV0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFZhbHVlVG9JbnB1dCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHRoaXMuJGVsLmZpbmQoJ29wdGlvbicpO1xuXG4gICAgICAgIG9wdGlvbnMuZWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICBpZiAoJChlbCkucHJvcCgnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgdmFyIHRleHQgPSAkKGVsKS50ZXh0KCk7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBmaXJzdERpc2FibGVkID0gdGhpcy4kZWwuZmluZCgnb3B0aW9uOmRpc2FibGVkJykuZXEoMCk7XG4gICAgICAgICAgaWYgKGZpcnN0RGlzYWJsZWQubGVuZ3RoICYmIGZpcnN0RGlzYWJsZWRbMF0udmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB2YWx1ZXMucHVzaChmaXJzdERpc2FibGVkLnRleHQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHZhbHVlcy5qb2luKCcsICcpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCBzZWxlY3RlZCBzdGF0ZSBvZiBkcm9wZG93biB0byBtYXRjaCBhY3R1YWwgc2VsZWN0IGVsZW1lbnRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXRTZWxlY3RlZFN0YXRlc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9zZXRTZWxlY3RlZFN0YXRlcygpIHtcbiAgICAgICAgdGhpcy5fa2V5c1NlbGVjdGVkID0ge307XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3ZhbHVlRGljdCkge1xuICAgICAgICAgIHZhciBvcHRpb24gPSB0aGlzLl92YWx1ZURpY3Rba2V5XTtcbiAgICAgICAgICB2YXIgb3B0aW9uSXNTZWxlY3RlZCA9ICQob3B0aW9uLmVsKS5wcm9wKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICQob3B0aW9uLm9wdGlvbkVsKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgb3B0aW9uSXNTZWxlY3RlZCk7XG4gICAgICAgICAgaWYgKG9wdGlvbklzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlT3B0aW9uKCQodGhpcy5kcm9wZG93bk9wdGlvbnMpLCAkKG9wdGlvbi5vcHRpb25FbCkpO1xuICAgICAgICAgICAgdGhpcy5fa2V5c1NlbGVjdGVkW2tleV0gPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKG9wdGlvbi5vcHRpb25FbCkucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFrZSBvcHRpb24gYXMgc2VsZWN0ZWQgYW5kIHNjcm9sbCB0byBzZWxlY3RlZCBwb3NpdGlvblxuICAgICAgICogQHBhcmFtIHtqUXVlcnl9IGNvbGxlY3Rpb24gIFNlbGVjdCBvcHRpb25zIGpRdWVyeSBlbGVtZW50XG4gICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG5ld09wdGlvbiAgZWxlbWVudCBvZiB0aGUgbmV3IG9wdGlvblxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2FjdGl2YXRlT3B0aW9uXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2FjdGl2YXRlT3B0aW9uKGNvbGxlY3Rpb24sIG5ld09wdGlvbikge1xuICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGNvbGxlY3Rpb24uZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIG9wdGlvbiA9ICQobmV3T3B0aW9uKTtcbiAgICAgICAgICBvcHRpb24uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgU2VsZWN0ZWQgVmFsdWVzXG4gICAgICAgKiBAcmV0dXJuIHtBcnJheX0gIEFycmF5IG9mIHNlbGVjdGVkIHZhbHVlc1xuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0U2VsZWN0ZWRWYWx1ZXNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZFZhbHVlcygpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl9rZXlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlcy5wdXNoKHRoaXMuX3ZhbHVlRGljdFtrZXldLmVsLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZXM7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KEZvcm1TZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGb3JtU2VsZWN0KSwgXCJpbml0XCIsIHRoaXMpLmNhbGwodGhpcywgdGhpcywgZWxzLCBvcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBHZXQgSW5zdGFuY2VcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldEluc3RhbmNlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5zdGFuY2UoZWwpIHtcbiAgICAgICAgdmFyIGRvbUVsZW0gPSAhIWVsLmpxdWVyeSA/IGVsWzBdIDogZWw7XG4gICAgICAgIHJldHVybiBkb21FbGVtLk1fRm9ybVNlbGVjdDtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBGb3JtU2VsZWN0O1xuICB9KENvbXBvbmVudCk7XG5cbiAgTS5Gb3JtU2VsZWN0ID0gRm9ybVNlbGVjdDtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKEZvcm1TZWxlY3QsICdmb3JtU2VsZWN0JywgJ01fRm9ybVNlbGVjdCcpO1xuICB9XG59KShjYXNoKTtcbjsoZnVuY3Rpb24gKCQsIGFuaW0pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBfZGVmYXVsdHMgPSB7fTtcblxuICAvKipcbiAgICogQGNsYXNzXG4gICAqXG4gICAqL1xuXG4gIHZhciBSYW5nZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50MjEpIHtcbiAgICBfaW5oZXJpdHMoUmFuZ2UsIF9Db21wb25lbnQyMSk7XG5cbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgUmFuZ2UgaW5zdGFuY2VcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBSYW5nZShlbCwgb3B0aW9ucykge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhbmdlKTtcblxuICAgICAgdmFyIF90aGlzNzIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFuZ2UuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYW5nZSkpLmNhbGwodGhpcywgUmFuZ2UsIGVsLCBvcHRpb25zKSk7XG5cbiAgICAgIF90aGlzNzIuZWwuTV9SYW5nZSA9IF90aGlzNzI7XG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9ucyBmb3IgdGhlIHJhbmdlXG4gICAgICAgKiBAbWVtYmVyIFJhbmdlI29wdGlvbnNcbiAgICAgICAqL1xuICAgICAgX3RoaXM3Mi5vcHRpb25zID0gJC5leHRlbmQoe30sIFJhbmdlLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgX3RoaXM3Mi5fbW91c2Vkb3duID0gZmFsc2U7XG5cbiAgICAgIC8vIFNldHVwXG4gICAgICBfdGhpczcyLl9zZXR1cFRodW1iKCk7XG5cbiAgICAgIF90aGlzNzIuX3NldHVwRXZlbnRIYW5kbGVycygpO1xuICAgICAgcmV0dXJuIF90aGlzNzI7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJhbmdlLCBbe1xuICAgICAga2V5OiBcImRlc3Ryb3lcIixcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRlYXJkb3duIGNvbXBvbmVudFxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRIYW5kbGVycygpO1xuICAgICAgICB0aGlzLl9yZW1vdmVUaHVtYigpO1xuICAgICAgICB0aGlzLmVsLk1fUmFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0dXAgRXZlbnQgSGFuZGxlcnNcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9zZXR1cEV2ZW50SGFuZGxlcnNcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVSYW5nZUNoYW5nZUJvdW5kID0gdGhpcy5faGFuZGxlUmFuZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZWRvd25Ub3VjaHN0YXJ0Qm91bmQgPSB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZUJvdW5kID0gdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZEJvdW5kID0gdGhpcy5faGFuZGxlUmFuZ2VNb3VzZXVwVG91Y2hlbmQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlQm91bmQgPSB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZVJhbmdlQ2hhbmdlQm91bmQpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZWRvd25Ub3VjaHN0YXJ0Qm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZVJhbmdlSW5wdXRNb3VzZW1vdmVUb3VjaG1vdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlQm91bmQpO1xuXG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZVJhbmdlTW91c2V1cFRvdWNoZW5kQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZXVwVG91Y2hlbmRCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5faGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobGVhdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmVtb3ZlIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfcmVtb3ZlRXZlbnRIYW5kbGVyc1wiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW1vdmVFdmVudEhhbmRsZXJzKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2hhbmRsZVJhbmdlQ2hhbmdlQm91bmQpO1xuXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZWRvd25Ub3VjaHN0YXJ0Qm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9oYW5kbGVSYW5nZU1vdXNlZG93blRvdWNoc3RhcnRCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2hhbmRsZVJhbmdlSW5wdXRNb3VzZW1vdmVUb3VjaG1vdmVCb3VuZCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5faGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZUJvdW5kKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUlucHV0TW91c2Vtb3ZlVG91Y2htb3ZlQm91bmQpO1xuXG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2hhbmRsZVJhbmdlTW91c2V1cFRvdWNoZW5kQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5faGFuZGxlUmFuZ2VNb3VzZXVwVG91Y2hlbmRCb3VuZCk7XG5cbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5faGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgdGhpcy5faGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlQm91bmQpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobGVhdmUnLCB0aGlzLl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVCb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFJhbmdlIENoYW5nZVxuICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVJhbmdlQ2hhbmdlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJhbmdlQ2hhbmdlKCkge1xuICAgICAgICAkKHRoaXMudmFsdWUpLmh0bWwodGhpcy4kZWwudmFsKCkpO1xuXG4gICAgICAgIGlmICghJCh0aGlzLnRodW1iKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICB0aGlzLl9zaG93UmFuZ2VCdWJibGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGhpcy5fY2FsY1JhbmdlT2Zmc2V0KCk7XG4gICAgICAgICQodGhpcy50aHVtYikuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIG9mZnNldExlZnQgKyAncHgnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmFuZ2UgTW91c2Vkb3duIGFuZCBUb3VjaHN0YXJ0XG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfaGFuZGxlUmFuZ2VNb3VzZWRvd25Ub3VjaHN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2hhbmRsZVJhbmdlTW91c2Vkb3duVG91Y2hzdGFydChlKSB7XG4gICAgICAgIC8vIFNldCBpbmRpY2F0b3IgdmFsdWVcbiAgICAgICAgJCh0aGlzLnZhbHVlKS5odG1sKHRoaXMuJGVsLnZhbCgpKTtcblxuICAgICAgICB0aGlzLl9tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICB0aGlzLiRlbC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgaWYgKCEkKHRoaXMudGh1bWIpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgIHRoaXMuX3Nob3dSYW5nZUJ1YmJsZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudHlwZSAhPT0gJ2lucHV0Jykge1xuICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGhpcy5fY2FsY1JhbmdlT2Zmc2V0KCk7XG4gICAgICAgICAgJCh0aGlzLnRodW1iKS5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCArICdweCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogSGFuZGxlIFJhbmdlIElucHV0LCBNb3VzZW1vdmUgYW5kIFRvdWNobW92ZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX2hhbmRsZVJhbmdlSW5wdXRNb3VzZW1vdmVUb3VjaG1vdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmFuZ2VJbnB1dE1vdXNlbW92ZVRvdWNobW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX21vdXNlZG93bikge1xuICAgICAgICAgIGlmICghJCh0aGlzLnRodW1iKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3dSYW5nZUJ1YmJsZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGhpcy5fY2FsY1JhbmdlT2Zmc2V0KCk7XG4gICAgICAgICAgJCh0aGlzLnRodW1iKS5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0Jywgb2Zmc2V0TGVmdCArICdweCcpO1xuICAgICAgICAgICQodGhpcy52YWx1ZSkuaHRtbCh0aGlzLiRlbC52YWwoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmFuZ2UgTW91c2V1cCBhbmQgVG91Y2hlbmRcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9oYW5kbGVSYW5nZU1vdXNldXBUb3VjaGVuZCgpIHtcbiAgICAgICAgdGhpcy5fbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJGVsLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBIYW5kbGUgUmFuZ2UgQmx1ciwgTW91c2VvdXQgYW5kIFRvdWNobGVhdmVcbiAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAga2V5OiBcIl9oYW5kbGVSYW5nZUJsdXJNb3VzZW91dFRvdWNobGVhdmVcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlUmFuZ2VCbHVyTW91c2VvdXRUb3VjaGxlYXZlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX21vdXNlZG93bikge1xuICAgICAgICAgIHZhciBwYWRkaW5nTGVmdCA9IHBhcnNlSW50KHRoaXMuJGVsLmNzcygncGFkZGluZy1sZWZ0JykpO1xuICAgICAgICAgIHZhciBtYXJnaW5MZWZ0ID0gNyArIHBhZGRpbmdMZWZ0ICsgJ3B4JztcblxuICAgICAgICAgIGlmICgkKHRoaXMudGh1bWIpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgYW5pbS5yZW1vdmUodGhpcy50aHVtYik7XG4gICAgICAgICAgICBhbmltKHtcbiAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy50aHVtYixcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YWQnLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBtYXJnaW5MZWZ0LFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJCh0aGlzLnRodW1iKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBTZXR1cCBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3NldHVwVGh1bWJcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfc2V0dXBUaHVtYigpIHtcbiAgICAgICAgdGhpcy50aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgJCh0aGlzLnRodW1iKS5hZGRDbGFzcygndGh1bWInKTtcbiAgICAgICAgJCh0aGlzLnZhbHVlKS5hZGRDbGFzcygndmFsdWUnKTtcbiAgICAgICAgJCh0aGlzLnRodW1iKS5hcHBlbmQodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuJGVsLmFmdGVyKHRoaXMudGh1bWIpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFJlbW92ZSBkcm9wZG93blxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiX3JlbW92ZVRodW1iXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbW92ZVRodW1iKCkge1xuICAgICAgICAkKHRoaXMudGh1bWIpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIG1vcnBoIHRodW1iIGludG8gYnViYmxlXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfc2hvd1JhbmdlQnViYmxlXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3Nob3dSYW5nZUJ1YmJsZSgpIHtcbiAgICAgICAgdmFyIHBhZGRpbmdMZWZ0ID0gcGFyc2VJbnQoJCh0aGlzLnRodW1iKS5wYXJlbnQoKS5jc3MoJ3BhZGRpbmctbGVmdCcpKTtcbiAgICAgICAgdmFyIG1hcmdpbkxlZnQgPSAtNyArIHBhZGRpbmdMZWZ0ICsgJ3B4JzsgLy8gVE9ETzogZml4IG1hZ2ljIG51bWJlcj9cbiAgICAgICAgYW5pbS5yZW1vdmUodGhpcy50aHVtYik7XG4gICAgICAgIGFuaW0oe1xuICAgICAgICAgIHRhcmdldHM6IHRoaXMudGh1bWIsXG4gICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICB3aWR0aDogMzAsXG4gICAgICAgICAgdG9wOiAtMzAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogbWFyZ2luTGVmdCxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWludCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsY3VsYXRlIHRoZSBvZmZzZXQgb2YgdGhlIHRodW1iXG4gICAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICBvZmZzZXQgaW4gcGl4ZWxzXG4gICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgIGtleTogXCJfY2FsY1JhbmdlT2Zmc2V0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2NhbGNSYW5nZU9mZnNldCgpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy4kZWwud2lkdGgoKSAtIDE1O1xuICAgICAgICB2YXIgbWF4ID0gcGFyc2VGbG9hdCh0aGlzLiRlbC5hdHRyKCdtYXgnKSkgfHwgMTAwOyAvLyBSYW5nZSBkZWZhdWx0IG1heFxuICAgICAgICB2YXIgbWluID0gcGFyc2VGbG9hdCh0aGlzLiRlbC5hdHRyKCdtaW4nKSkgfHwgMDsgLy8gUmFuZ2UgZGVmYXVsdCBtaW5cbiAgICAgICAgdmFyIHBlcmNlbnQgPSAocGFyc2VGbG9hdCh0aGlzLiRlbC52YWwoKSkgLSBtaW4pIC8gKG1heCAtIG1pbik7XG4gICAgICAgIHJldHVybiBwZXJjZW50ICogd2lkdGg7XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwiaW5pdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXQoZWxzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBfZ2V0KFJhbmdlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmFuZ2UpLCBcImluaXRcIiwgdGhpcykuY2FsbCh0aGlzLCB0aGlzLCBlbHMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEdldCBJbnN0YW5jZVxuICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0SW5zdGFuY2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnN0YW5jZShlbCkge1xuICAgICAgICB2YXIgZG9tRWxlbSA9ICEhZWwuanF1ZXJ5ID8gZWxbMF0gOiBlbDtcbiAgICAgICAgcmV0dXJuIGRvbUVsZW0uTV9SYW5nZTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZGVmYXVsdHNcIixcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX2RlZmF1bHRzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYW5nZTtcbiAgfShDb21wb25lbnQpO1xuXG4gIE0uUmFuZ2UgPSBSYW5nZTtcblxuICBpZiAoTS5qUXVlcnlMb2FkZWQpIHtcbiAgICBNLmluaXRpYWxpemVKcXVlcnlXcmFwcGVyKFJhbmdlLCAncmFuZ2UnLCAnTV9SYW5nZScpO1xuICB9XG5cbiAgUmFuZ2UuaW5pdCgkKCdpbnB1dFt0eXBlPXJhbmdlXScpKTtcbn0pKGNhc2gsIE0uYW5pbWUpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=