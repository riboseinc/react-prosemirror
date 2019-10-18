module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-tables");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prosemirrorModel = __webpack_require__(12);

var _nodes = __webpack_require__(13);

var _nodes2 = _interopRequireDefault(_nodes);

var _marks = __webpack_require__(14);

var _marks2 = _interopRequireDefault(_marks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _prosemirrorModel.Schema({ nodes: _nodes2.default, marks: _marks2.default });

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(25);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-history");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-schema-list");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-commands");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-schema-basic");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@aeaton/prosemirror-footnotes");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-inputrules");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = exports.options = undefined;

var _menu = __webpack_require__(11);

Object.defineProperty(exports, 'menu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menu).default;
  }
});

var _schema = __webpack_require__(1);

var _schema2 = _interopRequireDefault(_schema);

var _plugins = __webpack_require__(19);

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// An example setup, adapted from prosemirror-example-setup

var options = exports.options = {
  plugins: _plugins2.default,
  schema: _schema2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prosemirrorCommands = __webpack_require__(6);

var _prosemirrorHistory = __webpack_require__(4);

var _prosemirrorSchemaList = __webpack_require__(5);

var _prosemirrorTables = __webpack_require__(0);

var _schema = __webpack_require__(1);

var _schema2 = _interopRequireDefault(_schema);

var _icons = __webpack_require__(15);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var markActive = function markActive(type) {
  return function (state) {
    var _state$selection = state.selection,
        from = _state$selection.from,
        $from = _state$selection.$from,
        to = _state$selection.to,
        empty = _state$selection.empty;


    return empty ? type.isInSet(state.storedMarks || $from.marks()) : state.doc.rangeHasMark(from, to, type);
  };
};

var blockActive = function blockActive(type) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (state) {
    var _state$selection2 = state.selection,
        $from = _state$selection2.$from,
        to = _state$selection2.to,
        node = _state$selection2.node;


    if (node) {
      return node.hasMarkup(type, attrs);
    }

    return to <= $from.end() && $from.parent.hasMarkup(type, attrs);
  };
};

var canInsert = function canInsert(type) {
  return function (state) {
    var $from = state.selection.$from;


    for (var d = $from.depth; d >= 0; d--) {
      var index = $from.index(d);

      if ($from.node(d).canReplaceWith(index, index, type)) {
        return true;
      }
    }

    return false;
  };
};

var promptForURL = function promptForURL() {
  var url = 'https://example.com';

  if (url && !/^https?:\/\//i.test(url)) {
    url = 'http://' + url;
  }

  return url;
};

exports.default = {
  marks: {
    em: {
      title: 'Toggle emphasis',
      content: _icons2.default.em,
      active: markActive(_schema2.default.marks.em),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.em)
    },
    strong: {
      title: 'Toggle strong',
      content: _icons2.default.strong,
      active: markActive(_schema2.default.marks.strong),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.strong)
    },
    code: {
      title: 'Toggle code',
      content: _icons2.default.code,
      active: markActive(_schema2.default.marks.code),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.code)
    },
    subscript: {
      title: 'Toggle subscript',
      content: _icons2.default.subscript,
      active: markActive(_schema2.default.marks.subscript),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.subscript)
    },
    superscript: {
      title: 'Toggle superscript',
      content: _icons2.default.superscript,
      active: markActive(_schema2.default.marks.superscript),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.superscript)
    },
    underline: {
      title: 'Toggle underline',
      content: _icons2.default.underline,
      active: markActive(_schema2.default.marks.underline),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.underline)
    },
    strikethrough: {
      title: 'Toggle strikethrough',
      content: _icons2.default.strikethrough,
      active: markActive(_schema2.default.marks.strikethrough),
      run: (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.strikethrough)
    },
    link: {
      title: 'Add or remove link',
      content: _icons2.default.link,
      active: markActive(_schema2.default.marks.link),
      enable: function enable(state) {
        return !state.selection.empty;
      },
      run: function run(state, dispatch) {
        if (markActive(_schema2.default.marks.link)(state)) {
          (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.link)(state, dispatch);
          return true;
        }

        var href = promptForURL();
        if (!href) return false;

        (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.link, { href: href })(state, dispatch);
        // view.focus()
      }
    }
  },
  blocks: {
    plain: {
      title: 'Change to paragraph',
      content: _icons2.default.paragraph,
      active: blockActive(_schema2.default.nodes.paragraph),
      enable: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.paragraph),
      run: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.paragraph)
    },
    code_block: {
      title: 'Change to code block',
      content: _icons2.default.code_block,
      active: blockActive(_schema2.default.nodes.code_block),
      enable: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.code_block),
      run: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.code_block)
    },
    h1: {
      title: 'Change to heading level 1',
      content: _icons2.default.heading,
      active: blockActive(_schema2.default.nodes.heading, { level: 1 }),
      enable: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 1 }),
      run: (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 1 })
    },
    // h2: {
    //   title: 'Change to heading level 2',
    //   content: 'H2',
    //   active: blockActive(schema.nodes.heading, { level: 2 }),
    //   enable: setBlockType(schema.nodes.heading, { level: 2 }),
    //   run: setBlockType(schema.nodes.heading, { level: 2 })
    // },
    blockquote: {
      title: 'Wrap in block quote',
      content: _icons2.default.blockquote,
      active: blockActive(_schema2.default.nodes.blockquote),
      enable: (0, _prosemirrorCommands.wrapIn)(_schema2.default.nodes.blockquote),
      run: (0, _prosemirrorCommands.wrapIn)(_schema2.default.nodes.blockquote)
    },
    bullet_list: {
      title: 'Wrap in bullet list',
      content: _icons2.default.bullet_list,
      active: blockActive(_schema2.default.nodes.bullet_list),
      enable: (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.bullet_list),
      run: (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.bullet_list)
    },
    ordered_list: {
      title: 'Wrap in ordered list',
      content: _icons2.default.ordered_list,
      active: blockActive(_schema2.default.nodes.ordered_list),
      enable: (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.ordered_list),
      run: (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.ordered_list)
    },
    lift: {
      title: 'Lift out of enclosing block',
      content: _icons2.default.lift,
      enable: _prosemirrorCommands.lift,
      run: _prosemirrorCommands.lift
    },
    join_up: {
      title: 'Join with above block',
      content: _icons2.default.join_up,
      enable: _prosemirrorCommands.joinUp,
      run: _prosemirrorCommands.joinUp
    }
  },
  insert: {
    image: {
      title: 'Insert image',
      content: _icons2.default.image,
      enable: canInsert(_schema2.default.nodes.image),
      run: function run(state, dispatch) {
        var src = promptForURL();
        if (!src) return false;

        var img = _schema2.default.nodes.image.createAndFill({ src: src });
        dispatch(state.tr.replaceSelectionWith(img));
      }
    },
    footnote: {
      title: 'Insert footnote',
      content: _icons2.default.footnote,
      enable: canInsert(_schema2.default.nodes.footnote),
      run: function run(state, dispatch) {
        var footnote = _schema2.default.nodes.footnote.create();
        dispatch(state.tr.replaceSelectionWith(footnote));
      }
    },
    // hr: {
    //   title: 'Insert horizontal rule',
    //   content: 'HR',
    //   enable: canInsert(schema.nodes.horizontal_rule),
    //   run: (state, dispatch) => {
    //     const hr = schema.nodes.horizontal_rule.create()
    //     dispatch(state.tr.replaceSelectionWith(hr))
    //   }
    // },
    table: {
      title: 'Insert table',
      content: _icons2.default.table,
      enable: canInsert(_schema2.default.nodes.table),
      run: function run(state, dispatch) {
        // const { from } = state.selection
        var rowCount = 1;
        var colCount = 1;

        var cells = [];
        while (colCount--) {
          cells.push(_schema2.default.nodes.table_cell.createAndFill());
        }

        var rows = [];
        while (rowCount--) {
          rows.push(_schema2.default.nodes.table_row.createAndFill(null, cells));
        }

        var table = _schema2.default.nodes.table.createAndFill(null, rows);
        dispatch(state.tr.replaceSelectionWith(table));

        // const tr = state.tr.replaceSelectionWith(table)
        // tr.setSelection(Selection.near(tr.doc.resolve(from)))
        // dispatch(tr.scrollIntoView())
        // view.focus()
      }
    }
  },
  history: {
    undo: {
      title: 'Undo last change',
      content: _icons2.default.undo,
      enable: _prosemirrorHistory.undo,
      run: _prosemirrorHistory.undo
    },
    redo: {
      title: 'Redo last undone change',
      content: _icons2.default.redo,
      enable: _prosemirrorHistory.redo,
      run: _prosemirrorHistory.redo
    }
  },
  table: {
    addColumnBefore: {
      title: 'Insert column before',
      content: _icons2.default.after,
      active: _prosemirrorTables.addColumnBefore, // TOOD: active -> select
      run: _prosemirrorTables.addColumnBefore
    },
    addColumnAfter: {
      title: 'Insert column before',
      content: _icons2.default.before,
      active: _prosemirrorTables.addColumnAfter, // TOOD: active -> select
      run: _prosemirrorTables.addColumnAfter
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-model");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prosemirrorSchemaBasic = __webpack_require__(7);

var _prosemirrorSchemaList = __webpack_require__(5);

var _prosemirrorTables = __webpack_require__(0);

var _prosemirrorFootnotes = __webpack_require__(8);

var listNodes = {
  ordered_list: _extends({}, _prosemirrorSchemaList.orderedList, {
    content: 'list_item+',
    group: 'block'
  }),
  bullet_list: _extends({}, _prosemirrorSchemaList.bulletList, {
    content: 'list_item+',
    group: 'block'
  }),
  list_item: _extends({}, _prosemirrorSchemaList.listItem, {
    content: 'paragraph block*'
  })
};

exports.default = _extends({}, _prosemirrorSchemaBasic.nodes, listNodes, (0, _prosemirrorTables.tableNodes)({
  tableGroup: 'block',
  cellContent: 'block+'
}), _prosemirrorFootnotes.footnoteNodes);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _prosemirrorSchemaBasic = __webpack_require__(7);

var subscript = {
  excludes: 'superscript',
  parseDOM: [{ tag: 'sub' }, { style: 'vertical-align=sub' }],
  toDOM: function toDOM() {
    return ['sub'];
  }
};

var superscript = {
  excludes: 'subscript',
  parseDOM: [{ tag: 'sup' }, { style: 'vertical-align=super' }],
  toDOM: function toDOM() {
    return ['sup'];
  }
};

var strikethrough = {
  parseDOM: [{ tag: 'strike' }, { style: 'text-decoration=line-through' }, { style: 'text-decoration-line=line-through' }],
  toDOM: function toDOM() {
    return ['span', {
      style: 'text-decoration-line:line-through'
    }];
  }
};

var underline = {
  parseDOM: [{ tag: 'u' }, { style: 'text-decoration=underline' }],
  toDOM: function toDOM() {
    return ['span', {
      style: 'text-decoration:underline'
    }];
  }
};

exports.default = _extends({}, _prosemirrorSchemaBasic.marks, {
  subscript: subscript,
  superscript: superscript,
  strikethrough: strikethrough,
  underline: underline
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(17);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _fontawesomeFreeSolid = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  em: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faItalic }),
  italic: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faItalic }),
  strong: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faBold }),
  bold: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faBold }),
  code: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faCode }),
  subscript: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faSubscript }),
  superscript: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faSuperscript }),
  underline: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faUnderline }),
  strikethrough: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faStrikethrough }),
  link: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faLink }),
  paragraph: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faParagraph }),
  heading: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faHeading }),
  blockquote: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faQuoteLeft }),
  code_block: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faCode }),
  ordered_list: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faListOl }),
  bullet_list: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faListUl }),
  image: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faImage }),
  table: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faTable }),
  footnote: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faAsterisk }),
  undo: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faUndo }),
  redo: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faRedo }),
  lift: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faOutdent }),
  join_up: _react2.default.createElement(_reactFontawesome2.default, { icon: _fontawesomeFreeSolid.faAngleUp })
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prosemirrorHistory = __webpack_require__(4);

var _prosemirrorDropcursor = __webpack_require__(20);

var _prosemirrorGapcursor = __webpack_require__(21);

var _prosemirrorTables = __webpack_require__(0);

var _prosemirrorPlaceholder = __webpack_require__(22);

var _prosemirrorFootnotes = __webpack_require__(8);

__webpack_require__(23);

__webpack_require__(26);

__webpack_require__(28);

__webpack_require__(30);

var _keys = __webpack_require__(32);

var _keys2 = _interopRequireDefault(_keys);

var _rules = __webpack_require__(34);

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_rules2.default, _keys2.default, (0, _prosemirrorPlaceholder.placeholder)(), (0, _prosemirrorFootnotes.footnotes)(), (0, _prosemirrorDropcursor.dropCursor)(), (0, _prosemirrorGapcursor.gapCursor)(), (0, _prosemirrorHistory.history)(), (0, _prosemirrorTables.columnResizing)(), (0, _prosemirrorTables.tableEditing)()];

// for tables

document.execCommand('enableObjectResizing', false, false);
document.execCommand('enableInlineTableEditing', false, false);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-dropcursor");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-gapcursor");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@aeaton/prosemirror-placeholder");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(24);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../css-loader/index.js!./tables.css", function() {
		var newContent = require("!!../../css-loader/index.js!./tables.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".ProseMirror .tableWrapper {\n  overflow-x: auto;\n}\n.ProseMirror table {\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 100%;\n  overflow: hidden;\n}\n.ProseMirror td, .ProseMirror th {\n  vertical-align: top;\n  box-sizing: border-box;\n  position: relative;\n}\n.ProseMirror .column-resize-handle {\n  position: absolute;\n  right: -2px; top: 0; bottom: 0;\n  width: 4px;\n  z-index: 20;\n  background-color: #adf;\n  pointer-events: none;\n}\n.ProseMirror.resize-cursor {\n  cursor: ew-resize;\n  cursor: col-resize;\n}\n/* Give selected cells a blue overlay */\n.ProseMirror .selectedCell:after {\n  z-index: 2;\n  position: absolute;\n  content: \"\";\n  left: 0; right: 0; top: 0; bottom: 0;\n  background: rgba(200, 200, 255, 0.4);\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../css-loader/index.js!./gapcursor.css", function() {
		var newContent = require("!!../../css-loader/index.js!./gapcursor.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".ProseMirror-gapcursor {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n}\n\n.ProseMirror-gapcursor:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: -2px;\n  width: 20px;\n  border-top: 1px solid black;\n  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;\n}\n\n@keyframes ProseMirror-cursor-blink {\n  to {\n    visibility: hidden;\n  }\n}\n\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(29);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./footnotes.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./footnotes.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".ProseMirror {\n  counter-reset: prosemirror-footnote;\n}\n\n.ProseMirror prosemirror-footnote {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n}\n\n.ProseMirror prosemirror-footnote::after {\n  content: counter(prosemirror-footnote);\n  vertical-align: super;\n  font-size: 75%;\n  counter-increment: prosemirror-footnote;\n}\n\n.ProseMirror-hideselection .footnote-tooltip *::selection {\n  background-color: transparent;\n}\n\n.ProseMirror-hideselection .footnote-tooltip *::-moz-selection {\n  background-color: transparent;\n}\n\n.ProseMirror .footnote-tooltip {\n  cursor: auto;\n  position: absolute;\n  left: -30px;\n  top: calc(100% + 10px);\n  background: silver;\n  padding: 3px;\n  border-radius: 2px;\n  width: 500px;\n}\n\n.ProseMirror .footnote-tooltip::before {\n  border: 5px solid silver;\n  border-top-width: 0;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  position: absolute;\n  top: -5px;\n  left: 27px;\n  content: \" \";\n  height: 0;\n  width: 0;\n}\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(31);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(3)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./placeholder.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./placeholder.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ".ProseMirror .empty-node::before {\n  float: left;\n  color: #aaa;\n  pointer-events: none;\n  height: 0;\n  font-style: italic;\n}\n\n.ProseMirror p.empty-node:first-child::before {\n  content: 'Start typing\\2026';\n}\n", ""]);

// exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prosemirrorKeymap = __webpack_require__(33);

var _prosemirrorInputrules = __webpack_require__(9);

var _prosemirrorHistory = __webpack_require__(4);

var _prosemirrorSchemaList = __webpack_require__(5);

var _prosemirrorTables = __webpack_require__(0);

var _prosemirrorCommands = __webpack_require__(6);

var _schema = __webpack_require__(1);

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var insertBreak = function insertBreak(state, dispatch) {
  var br = _schema2.default.nodes.hard_break.create();
  dispatch(state.tr.replaceSelectionWith(br).scrollIntoView());
  return true;
};

var insertRule = function insertRule(state, dispatch) {
  var hr = _schema2.default.nodes.horizontal_rule.create();
  dispatch(state.tr.replaceSelectionWith(hr).scrollIntoView());
  return true;
};

var keys = {
  'Mod-z': _prosemirrorHistory.undo,
  'Shift-Mod-z': _prosemirrorHistory.redo,
  'Backspace': _prosemirrorInputrules.undoInputRule,
  'Mod-y': _prosemirrorHistory.redo,
  'Alt-ArrowUp': _prosemirrorCommands.joinUp,
  'Alt-ArrowDown': _prosemirrorCommands.joinDown,
  'Mod-BracketLeft': _prosemirrorCommands.lift,
  'Escape': _prosemirrorCommands.selectParentNode,
  'Mod-b': (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.strong),
  'Mod-i': (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.em),
  'Mod-u': (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.underline),
  'Mod-`': (0, _prosemirrorCommands.toggleMark)(_schema2.default.marks.code),
  'Shift-Ctrl-8': (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.bullet_list),
  'Shift-Ctrl-9': (0, _prosemirrorSchemaList.wrapInList)(_schema2.default.nodes.ordered_list),
  'Ctrl->': (0, _prosemirrorCommands.wrapIn)(_schema2.default.nodes.blockquote),
  'Mod-Enter': (0, _prosemirrorCommands.chainCommands)(_prosemirrorCommands.exitCode, insertBreak),
  'Shift-Enter': (0, _prosemirrorCommands.chainCommands)(_prosemirrorCommands.exitCode, insertBreak),
  'Ctrl-Enter': (0, _prosemirrorCommands.chainCommands)(_prosemirrorCommands.exitCode, insertBreak), // mac-only?
  'Enter': (0, _prosemirrorSchemaList.splitListItem)(_schema2.default.nodes.list_item),
  'Mod-[': (0, _prosemirrorSchemaList.liftListItem)(_schema2.default.nodes.list_item),
  'Mod-]': (0, _prosemirrorSchemaList.sinkListItem)(_schema2.default.nodes.list_item),
  'Shift-Ctrl-0': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.paragraph),
  'Shift-Ctrl-\\': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.code_block),
  'Shift-Ctrl-1': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 1 }),
  'Shift-Ctrl-2': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 2 }),
  'Shift-Ctrl-3': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 3 }),
  'Shift-Ctrl-4': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 4 }),
  'Shift-Ctrl-5': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 5 }),
  'Shift-Ctrl-6': (0, _prosemirrorCommands.setBlockType)(_schema2.default.nodes.heading, { level: 6 }),
  'Mod-_': insertRule,
  'Tab': (0, _prosemirrorTables.goToNextCell)(1),
  'Shift-Tab': (0, _prosemirrorTables.goToNextCell)(-1)
};

Object.keys(_prosemirrorCommands.baseKeymap).forEach(function (key) {
  if (keys[key]) {
    keys[key] = (0, _prosemirrorCommands.chainCommands)(keys[key], _prosemirrorCommands.baseKeymap[key]);
  } else {
    keys[key] = _prosemirrorCommands.baseKeymap[key];
  }
});

exports.default = (0, _prosemirrorKeymap.keymap)(keys);

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("prosemirror-keymap");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prosemirrorInputrules = __webpack_require__(9);

var _schema = __webpack_require__(1);

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = (0, _prosemirrorInputrules.inputRules)({
  rules: [].concat(_toConsumableArray(_prosemirrorInputrules.smartQuotes), [_prosemirrorInputrules.ellipsis, _prosemirrorInputrules.emDash,

  // > blockquote
  (0, _prosemirrorInputrules.wrappingInputRule)(/^\s*>\s$/, _schema2.default.nodes.blockquote),

  // 1. ordered list
  (0, _prosemirrorInputrules.wrappingInputRule)(/^(\d+)\.\s$/, _schema2.default.nodes.ordered_list, function (match) {
    return { order: +match[1] };
  }, function (match, node) {
    return node.childCount + node.attrs.order === +match[1];
  }),

  // * bullet list
  (0, _prosemirrorInputrules.wrappingInputRule)(/^\s*([-+*])\s$/, _schema2.default.nodes.bullet_list),

  // ``` code block
  (0, _prosemirrorInputrules.textblockTypeInputRule)(/^```$/, _schema2.default.nodes.code_block),

  // # heading
  (0, _prosemirrorInputrules.textblockTypeInputRule)(new RegExp('^(#{1,6})\\s$'), _schema2.default.nodes.heading, function (match) {
    return { level: match[1].length };
  })])
});

/***/ })
/******/ ]);