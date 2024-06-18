// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bb4Jv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _trix = require("trix");
var _trixDefault = parcelHelpers.interopDefault(_trix);
var _featherIcons = require("feather-icons");
var _featherIconsDefault = parcelHelpers.interopDefault(_featherIcons);
// initialize feather icons
(0, _featherIconsDefault.default).replace();

},{"alpinejs":"3tUbS","trix":"kFlnw","feather-icons":"94idb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3tUbS":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
            else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            else ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    // Thanks @stimulus:
    // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
    function domReady() {
        return new Promise((resolve)=>{
            if (document.readyState == "loading") document.addEventListener("DOMContentLoaded", resolve);
            else resolve();
        });
    }
    function arrayUnique(array) {
        var a = array.concat();
        for(var i = 0; i < a.length; ++i){
            for(var j = i + 1; j < a.length; ++j)if (a[i] === a[j]) a.splice(j--, 1);
        }
        return a;
    }
    function isTesting() {
        return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
    }
    function kebabCase(subject) {
        return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
    }
    function walk(el, callback) {
        if (callback(el) === false) return;
        let node = el.firstElementChild;
        while(node){
            walk(node, callback);
            node = node.nextElementSibling;
        }
    }
    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function later() {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    function saferEval(expression, dataContext, additionalHelperVariables = {}) {
        return new Function([
            "$data",
            ...Object.keys(additionalHelperVariables)
        ], `var result; with($data) { result = ${expression} }; return result`)(dataContext, ...Object.values(additionalHelperVariables));
    }
    function saferEvalNoReturn(expression, dataContext, additionalHelperVariables = {}) {
        // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
        // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.
        if (Object.keys(dataContext).includes(expression)) {
            let methodReference = new Function([
                "dataContext",
                ...Object.keys(additionalHelperVariables)
            ], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));
            if (typeof methodReference === "function") return methodReference.call(dataContext, additionalHelperVariables["$event"]);
        }
        return new Function([
            "dataContext",
            ...Object.keys(additionalHelperVariables)
        ], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));
    }
    const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref)\b/;
    function isXAttr(attr) {
        const name = replaceAtAndColonWithStandardSyntax(attr.name);
        return xAttrRE.test(name);
    }
    function getXAttrs(el, type) {
        return Array.from(el.attributes).filter(isXAttr).map((attr)=>{
            const name = replaceAtAndColonWithStandardSyntax(attr.name);
            const typeMatch = name.match(xAttrRE);
            const valueMatch = name.match(/:([a-zA-Z\-:]+)/);
            const modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
            return {
                type: typeMatch ? typeMatch[1] : null,
                value: valueMatch ? valueMatch[1] : null,
                modifiers: modifiers.map((i)=>i.replace(".", "")),
                expression: attr.value
            };
        }).filter((i)=>{
            // If no type is passed in for filtering, bypass filter
            if (!type) return true;
            return i.type === type;
        });
    }
    function isBooleanAttr(attrName) {
        // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
        // Array roughly ordered by estimated usage
        const booleanAttributes = [
            "disabled",
            "checked",
            "required",
            "readonly",
            "hidden",
            "open",
            "selected",
            "autofocus",
            "itemscope",
            "multiple",
            "novalidate",
            "allowfullscreen",
            "allowpaymentrequest",
            "formnovalidate",
            "autoplay",
            "controls",
            "loop",
            "muted",
            "playsinline",
            "default",
            "ismap",
            "reversed",
            "async",
            "defer",
            "nomodule"
        ];
        return booleanAttributes.includes(attrName);
    }
    function replaceAtAndColonWithStandardSyntax(name) {
        if (name.startsWith("@")) return name.replace("@", "x-on:");
        else if (name.startsWith(":")) return name.replace(":", "x-bind:");
        return name;
    }
    function transitionIn(el, show, forceSkip = false) {
        // We don't want to transition on the initial page load.
        if (forceSkip) return show();
        const attrs = getXAttrs(el, "transition");
        const showAttr = getXAttrs(el, "show")[0]; // If this is triggered by a x-show.transition.
        if (showAttr && showAttr.modifiers.includes("transition")) {
            let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.
            if (modifiers.includes("out") && !modifiers.includes("in")) return show();
            const settingBothSidesOfTransition = modifiers.includes("in") && modifiers.includes("out"); // If x-show.transition.in...out... only use "in" related modifiers for this transition.
            modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index)=>index < modifiers.indexOf("out")) : modifiers;
            transitionHelperIn(el, modifiers, show); // Otherwise, we can assume x-transition:enter.
        } else if (attrs.length > 0) transitionClassesIn(el, attrs, show);
        else // If neither, just show that damn thing.
        show();
    }
    function transitionOut(el, hide, forceSkip = false) {
        if (forceSkip) return hide();
        const attrs = getXAttrs(el, "transition");
        const showAttr = getXAttrs(el, "show")[0];
        if (showAttr && showAttr.modifiers.includes("transition")) {
            let modifiers = showAttr.modifiers;
            if (modifiers.includes("in") && !modifiers.includes("out")) return hide();
            const settingBothSidesOfTransition = modifiers.includes("in") && modifiers.includes("out");
            modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index)=>index > modifiers.indexOf("out")) : modifiers;
            transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide);
        } else if (attrs.length > 0) transitionClassesOut(el, attrs, hide);
        else hide();
    }
    function transitionHelperIn(el, modifiers, showCallback) {
        // Default values inspired by: https://material.io/design/motion/speed.html#duration
        const styleValues = {
            duration: modifierValue(modifiers, "duration", 150),
            origin: modifierValue(modifiers, "origin", "center"),
            first: {
                opacity: 0,
                scale: modifierValue(modifiers, "scale", 95)
            },
            second: {
                opacity: 1,
                scale: 100
            }
        };
        transitionHelper(el, modifiers, showCallback, ()=>{}, styleValues);
    }
    function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback) {
        // Make the "out" transition .5x slower than the "in". (Visually better)
        // HOWEVER, if they explicitly set a duration for the "out" transition,
        // use that.
        const duration = settingBothSidesOfTransition ? modifierValue(modifiers, "duration", 150) : modifierValue(modifiers, "duration", 150) / 2;
        const styleValues = {
            duration: duration,
            origin: modifierValue(modifiers, "origin", "center"),
            first: {
                opacity: 1,
                scale: 100
            },
            second: {
                opacity: 0,
                scale: modifierValue(modifiers, "scale", 95)
            }
        };
        transitionHelper(el, modifiers, ()=>{}, hideCallback, styleValues);
    }
    function modifierValue(modifiers, key, fallback) {
        // If the modifier isn't present, use the default.
        if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms
        const rawValue = modifiers[modifiers.indexOf(key) + 1];
        if (!rawValue) return fallback;
        if (key === "scale") {
            // Check if the very next value is NOT a number and return the fallback.
            // If x-show.transition.scale, we'll use the default scale value.
            // That is how a user opts out of the opacity transition.
            if (!isNumeric(rawValue)) return fallback;
        }
        if (key === "duration") {
            // Support x-show.transition.duration.500ms && duration.500
            let match = rawValue.match(/([0-9]+)ms/);
            if (match) return match[1];
        }
        if (key === "origin") {
            // Support chaining origin directions: x-show.transition.top.right
            if ([
                "top",
                "right",
                "left",
                "center",
                "bottom"
            ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
                rawValue,
                modifiers[modifiers.indexOf(key) + 2]
            ].join(" ");
        }
        return rawValue;
    }
    function transitionHelper(el, modifiers, hook1, hook2, styleValues) {
        // If the user set these style values, we'll put them back when we're done with them.
        const opacityCache = el.style.opacity;
        const transformCache = el.style.transform;
        const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.
        const noModifiers = !modifiers.includes("opacity") && !modifiers.includes("scale");
        const transitionOpacity = noModifiers || modifiers.includes("opacity");
        const transitionScale = noModifiers || modifiers.includes("scale"); // These are the explicit stages of a transition (same stages for in and for out).
        // This way you can get a birds eye view of the hooks, and the differences
        // between them.
        const stages = {
            start () {
                if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
                if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
            },
            during () {
                if (transitionScale) el.style.transformOrigin = styleValues.origin;
                el.style.transitionProperty = [
                    transitionOpacity ? `opacity` : ``,
                    transitionScale ? `transform` : ``
                ].join(" ").trim();
                el.style.transitionDuration = `${styleValues.duration / 1000}s`;
                el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
            },
            show () {
                hook1();
            },
            end () {
                if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
                if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
            },
            hide () {
                hook2();
            },
            cleanup () {
                if (transitionOpacity) el.style.opacity = opacityCache;
                if (transitionScale) el.style.transform = transformCache;
                if (transitionScale) el.style.transformOrigin = transformOriginCache;
                el.style.transitionProperty = null;
                el.style.transitionDuration = null;
                el.style.transitionTimingFunction = null;
            }
        };
        transition(el, stages);
    }
    function transitionClassesIn(el, directives, showCallback) {
        const enter = (directives.find((i)=>i.value === "enter") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        const enterStart = (directives.find((i)=>i.value === "enter-start") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        const enterEnd = (directives.find((i)=>i.value === "enter-end") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        transitionClasses(el, enter, enterStart, enterEnd, showCallback, ()=>{});
    }
    function transitionClassesOut(el, directives, hideCallback) {
        const leave = (directives.find((i)=>i.value === "leave") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        const leaveStart = (directives.find((i)=>i.value === "leave-start") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        const leaveEnd = (directives.find((i)=>i.value === "leave-end") || {
            expression: ""
        }).expression.split(" ").filter((i)=>i !== "");
        transitionClasses(el, leave, leaveStart, leaveEnd, ()=>{}, hideCallback);
    }
    function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2) {
        const originalClasses = el.__x_original_classes || [];
        const stages = {
            start () {
                el.classList.add(...classesStart);
            },
            during () {
                el.classList.add(...classesDuring);
            },
            show () {
                hook1();
            },
            end () {
                // Don't remove classes that were in the original class attribute.
                el.classList.remove(...classesStart.filter((i)=>!originalClasses.includes(i)));
                el.classList.add(...classesEnd);
            },
            hide () {
                hook2();
            },
            cleanup () {
                el.classList.remove(...classesDuring.filter((i)=>!originalClasses.includes(i)));
                el.classList.remove(...classesEnd.filter((i)=>!originalClasses.includes(i)));
            }
        };
        transition(el, stages);
    }
    function transition(el, stages) {
        stages.start();
        stages.during();
        requestAnimationFrame(()=>{
            // Note: Safari's transitionDuration property will list out comma separated transition durations
            // for every single transition property. Let's grab the first one and call it a day.
            let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1000;
            stages.show();
            requestAnimationFrame(()=>{
                stages.end();
                setTimeout(()=>{
                    stages.hide(); // Adding an "isConnected" check, in case the callback
                    // removed the element from the DOM.
                    if (el.isConnected) stages.cleanup();
                }, duration);
            });
        });
    }
    function isNumeric(subject) {
        return !isNaN(subject);
    }
    function handleForDirective(component, el, expression, initialUpdate) {
        if (el.tagName.toLowerCase() !== "template") console.warn("Alpine: [x-for] directive should only be added to <template> tags.");
        const { single, bunch, iterator1, iterator2 } = parseFor(expression);
        var items;
        const ifAttr = getXAttrs(el, "if")[0];
        if (ifAttr && !component.evaluateReturnExpression(el, ifAttr.expression)) // If there is an "x-if" attribute in conjunction with an x-for,
        // AND x-if resolves to false, just pretend the x-for is
        // empty, effectively hiding it.
        items = [];
        else items = component.evaluateReturnExpression(el, bunch);
         // As we walk the array, we'll also walk the DOM (updating/creating as we go).
        var previousEl = el;
        items.forEach((i, index, group)=>{
            const currentKey = getThisIterationsKeyFromTemplateTag(component, el, single, iterator1, iterator2, i, index, group);
            let currentEl = previousEl.nextElementSibling; // Let's check and see if the x-for has already generated an element last time it ran.
            if (currentEl && currentEl.__x_for_key !== undefined) {
                // If the the key's don't match.
                if (currentEl.__x_for_key !== currentKey) {
                    // We'll look ahead to see if we can find it further down.
                    var tmpCurrentEl = currentEl;
                    while(tmpCurrentEl){
                        // If we found it later in the DOM.
                        if (tmpCurrentEl.__x_for_key === currentKey) {
                            // Move it to where it's supposed to be in the DOM.
                            el.parentElement.insertBefore(tmpCurrentEl, currentEl); // And set it as the current element as if we just created it.
                            currentEl = tmpCurrentEl;
                            break;
                        }
                        tmpCurrentEl = tmpCurrentEl.nextElementSibling && tmpCurrentEl.nextElementSibling.__x_for_key !== undefined ? tmpCurrentEl.nextElementSibling : false;
                    }
                } // Temporarily remove the key indicator to allow the normal "updateElements" to work
                delete currentEl.__x_for_key;
                let xForVars = {};
                xForVars[single] = i;
                if (iterator1) xForVars[iterator1] = index;
                if (iterator2) xForVars[iterator2] = group;
                currentEl.__x_for = xForVars;
                component.updateElements(currentEl, ()=>{
                    return currentEl.__x_for;
                });
            } else {
                // There are no more .__x_for_key elements, meaning the page is first loading, OR, there are
                // extra items in the array that need to be added as new elements.
                // Let's create a clone from the template.
                const clone = document.importNode(el.content, true);
                if (clone.childElementCount !== 1) console.warn("Alpine: <template> tag with [x-for] encountered with multiple element roots. Make sure <template> only has a single child node."); // Insert it where we are in the DOM.
                el.parentElement.insertBefore(clone, currentEl); // Set it as the current element.
                currentEl = previousEl.nextElementSibling; // And transition it in if it's not the first page load.
                transitionIn(currentEl, ()=>{}, initialUpdate); // Now, let's walk the new DOM node and initialize everything,
                // including new nested components.
                // Note we are resolving the "extraData" alias stuff from the dom element value so that it's
                // always up to date for listener handlers that don't get re-registered.
                let xForVars = {};
                xForVars[single] = i;
                if (iterator1) xForVars[iterator1] = index;
                if (iterator2) xForVars[iterator2] = group;
                currentEl.__x_for = xForVars;
                component.initializeElements(currentEl, ()=>{
                    return currentEl.__x_for;
                });
            }
            currentEl.__x_for_key = currentKey;
            previousEl = currentEl;
        }); // Now that we've added/updated/moved all the elements for the current state of the loop.
        // Anything left over, we can get rid of.
        var nextElementFromOldLoop = previousEl.nextElementSibling && previousEl.nextElementSibling.__x_for_key !== undefined ? previousEl.nextElementSibling : false;
        while(nextElementFromOldLoop){
            const nextElementFromOldLoopImmutable = nextElementFromOldLoop;
            const nextSibling = nextElementFromOldLoop.nextElementSibling;
            transitionOut(nextElementFromOldLoop, ()=>{
                nextElementFromOldLoopImmutable.remove();
            });
            nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
        }
    } // This was taken from VueJS 2.* core. Thanks Vue!
    function parseFor(expression) {
        const forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
        const stripParensRE = /^\(|\)$/g;
        const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
        const inMatch = expression.match(forAliasRE);
        if (!inMatch) return;
        const res = {};
        res.bunch = inMatch[2].trim();
        const single = inMatch[1].trim().replace(stripParensRE, "");
        const iteratorMatch = single.match(forIteratorRE);
        if (iteratorMatch) {
            res.single = single.replace(forIteratorRE, "").trim();
            res.iterator1 = iteratorMatch[1].trim();
            if (iteratorMatch[2]) res.iterator2 = iteratorMatch[2].trim();
        } else res.single = single;
        return res;
    }
    function getThisIterationsKeyFromTemplateTag(component, el, single, iterator1, iterator2, i, index, group) {
        const keyAttr = getXAttrs(el, "bind").filter((attr)=>attr.value === "key")[0];
        let keyAliases = {
            [single]: i
        };
        if (iterator1) keyAliases[iterator1] = index;
        if (iterator2) keyAliases[iterator2] = group;
        return keyAttr ? component.evaluateReturnExpression(el, keyAttr.expression, ()=>keyAliases) : index;
    }
    function handleAttributeBindingDirective(component, el, attrName, expression, extraVars) {
        var value = component.evaluateReturnExpression(el, expression, extraVars);
        if (attrName === "value") {
            // If nested model key is undefined, set the default value to empty string.
            if (value === undefined && expression.match(/\./).length) value = "";
            if (el.type === "radio") el.checked = el.value == value;
            else if (el.type === "checkbox") {
                if (Array.isArray(value)) {
                    // I'm purposely not using Array.includes here because it's
                    // strict, and because of Numeric/String mis-casting, I
                    // want the "includes" to be "fuzzy".
                    let valueFound = false;
                    value.forEach((val)=>{
                        if (val == el.value) valueFound = true;
                    });
                    el.checked = valueFound;
                } else el.checked = !!value;
                 // If we are explicitly binding a string to the :value, set the string,
                // If the value is a boolean, leave it alone, it will be set to "on"
                // automatically.
                if (typeof value === "string") el.value = value;
            } else if (el.tagName === "SELECT") updateSelect(el, value);
            else el.value = value;
        } else if (attrName === "class") {
            if (Array.isArray(value)) {
                const originalClasses = el.__x_original_classes || [];
                el.setAttribute("class", arrayUnique(originalClasses.concat(value)).join(" "));
            } else if (typeof value === "object") Object.keys(value).forEach((classNames)=>{
                if (value[classNames]) classNames.split(" ").forEach((className)=>el.classList.add(className));
                else classNames.split(" ").forEach((className)=>el.classList.remove(className));
            });
            else {
                const originalClasses = el.__x_original_classes || [];
                const newClasses = value.split(" ");
                el.setAttribute("class", arrayUnique(originalClasses.concat(newClasses)).join(" "));
            }
        } else if (isBooleanAttr(attrName)) {
            // Boolean attributes have to be explicitly added and removed, not just set.
            if (!!value) el.setAttribute(attrName, "");
            else el.removeAttribute(attrName);
        } else el.setAttribute(attrName, value);
    }
    function updateSelect(el, value) {
        const arrayWrappedValue = [].concat(value).map((value)=>{
            return value + "";
        });
        Array.from(el.options).forEach((option)=>{
            option.selected = arrayWrappedValue.includes(option.value || option.text);
        });
    }
    function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
        const hide = ()=>{
            el.style.display = "none";
        };
        const show = ()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        };
        if (initialUpdate === true) {
            if (value) show();
            else hide();
            return;
        }
        const handle = (resolve)=>{
            if (!value) {
                if (el.style.display !== "none") transitionOut(el, ()=>{
                    resolve(()=>{
                        hide();
                    });
                });
                else resolve(()=>{});
            } else {
                if (el.style.display !== "") transitionIn(el, ()=>{
                    show();
                });
                 // Resolve immediately, only hold up parent `x-show`s for hidin.
                resolve(()=>{});
            }
        }; // The working of x-show is a bit complex because we need to
        // wait for any child transitions to finish before hiding
        // some element. Also, this has to be done recursively.
        // If x-show.immediate, foregoe the waiting.
        if (modifiers.includes("immediate")) {
            handle((finish)=>finish());
            return;
        } // x-show is encountered during a DOM tree walk. If an element
        // we encounter is NOT a child of another x-show element we
        // can execute the previous x-show stack (if one exists).
        if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) component.executeAndClearRemainingShowDirectiveStack();
         // We'll push the handler onto a stack to be handled later.
        component.showDirectiveStack.push(handle);
        component.showDirectiveLastElement = el;
    }
    function handleIfDirective(el, expressionResult, initialUpdate) {
        if (el.nodeName.toLowerCase() !== "template") console.warn(`Alpine: [x-if] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#x-if`);
        const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;
        if (expressionResult && !elementHasAlreadyBeenAdded) {
            const clone = document.importNode(el.content, true);
            el.parentElement.insertBefore(clone, el.nextElementSibling);
            el.nextElementSibling.__x_inserted_me = true;
            transitionIn(el.nextElementSibling, ()=>{}, initialUpdate);
        } else if (!expressionResult && elementHasAlreadyBeenAdded) transitionOut(el.nextElementSibling, ()=>{
            el.nextElementSibling.remove();
        }, initialUpdate);
    }
    function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
        if (modifiers.includes("away")) {
            const handler = (e)=>{
                // Don't do anything if the click came form the element or within it.
                if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.
                if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
                // is from outside it, let's run the expression.
                runListenerHandler(component, expression, e, extraVars);
                if (modifiers.includes("once")) document.removeEventListener(event, handler);
            }; // Listen for this event at the root level.
            document.addEventListener(event, handler);
        } else {
            const listenerTarget = modifiers.includes("window") ? window : modifiers.includes("document") ? document : el;
            const handler = (e)=>{
                // Remove this global event handler if the element that declared it
                // has been removed. It's now stale.
                if (listenerTarget === window || listenerTarget === document) {
                    if (!document.body.contains(el)) {
                        listenerTarget.removeEventListener(event, handler);
                        return;
                    }
                }
                if (isKeyEvent(event)) {
                    if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
                }
                if (modifiers.includes("prevent")) e.preventDefault();
                if (modifiers.includes("stop")) e.stopPropagation();
                const returnValue = runListenerHandler(component, expression, e, extraVars);
                if (returnValue === false) e.preventDefault();
                else if (modifiers.includes("once")) listenerTarget.removeEventListener(event, handler);
            };
            listenerTarget.addEventListener(event, handler);
        }
    }
    function runListenerHandler(component, expression, e, extraVars) {
        return component.evaluateCommandExpression(e.target, expression, ()=>{
            return _objectSpread2({}, extraVars(), {
                "$event": e
            });
        });
    }
    function isKeyEvent(event) {
        return [
            "keydown",
            "keyup"
        ].includes(event);
    }
    function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
        let keyModifiers = modifiers.filter((i)=>{
            return ![
                "window",
                "document",
                "prevent",
                "stop"
            ].includes(i);
        }); // If no modifier is specified, we'll call it a press.
        if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.
        if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.
        const systemKeyModifiers = [
            "ctrl",
            "shift",
            "alt",
            "meta",
            "cmd",
            "super"
        ];
        const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
        keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
        if (selectedSystemKeyModifiers.length > 0) {
            const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
                // Alias "cmd" and "super" to "meta"
                if (modifier === "cmd" || modifier === "super") modifier = "meta";
                return e[`${modifier}Key`];
            }); // If all the modifiers selected are pressed, ...
            if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
                // AND the remaining key is pressed as well. It's a press.
                if (keyModifiers[0] === keyToModifier(e.key)) return false;
            }
        } // We'll call it NOT a valid keypress.
        return true;
    }
    function keyToModifier(key) {
        switch(key){
            case "/":
                return "slash";
            case " ":
            case "Spacebar":
                return "space";
            default:
                return kebabCase(key);
        }
    }
    function registerModelListener(component, el, modifiers, expression, extraVars) {
        // If the element we are binding to is a select, a radio, or checkbox
        // we'll listen for the change event instead of the "input" event.
        var event = el.tagName.toLowerCase() === "select" || [
            "checkbox",
            "radio"
        ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
        const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
        registerListener(component, el, event, modifiers, listenerExpression, ()=>{
            return _objectSpread2({}, extraVars(), {
                rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
            });
        });
    }
    function generateModelAssignmentFunction(el, modifiers, expression) {
        if (el.type === "radio") // Radio buttons only work properly when they share a name attribute.
        // People might assume we take care of that for them, because
        // they already set a shared "x-model" attribute.
        {
            if (!el.hasAttribute("name")) el.setAttribute("name", expression);
        }
        return (event, currentValue)=>{
            // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
            if (event instanceof CustomEvent && event.detail) return event.detail;
            else if (el.type === "checkbox") {
                // If the data we are binding to is an array, toggle it's value inside the array.
                if (Array.isArray(currentValue)) return event.target.checked ? currentValue.concat([
                    event.target.value
                ]) : currentValue.filter((i)=>i !== event.target.value);
                else return event.target.checked;
            } else if (el.tagName.toLowerCase() === "select" && el.multiple) return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option)=>{
                return parseFloat(option.value || option.text);
            }) : Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
            else return modifiers.includes("number") ? parseFloat(event.target.value) : modifiers.includes("trim") ? event.target.value.trim() : event.target.value;
        };
    }
    /**
   * Copyright (C) 2017 salesforce.com, inc.
   */ const { isArray } = Array;
    const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty } = Object;
    const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap } = Array.prototype;
    function isUndefined(obj) {
        return obj === undefined;
    }
    function isFunction(obj) {
        return typeof obj === "function";
    }
    function isObject(obj) {
        return typeof obj === "object";
    }
    const proxyToValueMap = new WeakMap();
    function registerProxy(proxy, value) {
        proxyToValueMap.set(proxy, value);
    }
    const unwrap = (replicaOrAny)=>proxyToValueMap.get(replicaOrAny) || replicaOrAny;
    function wrapValue(membrane, value) {
        return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
    }
    /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */ function unwrapDescriptor(descriptor) {
        if (hasOwnProperty.call(descriptor, "value")) descriptor.value = unwrap(descriptor.value);
        return descriptor;
    }
    function lockShadowTarget(membrane, shadowTarget, originalTarget) {
        const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
        targetKeys.forEach((key)=>{
            let descriptor = getOwnPropertyDescriptor(originalTarget, key);
            // We do not need to wrap the descriptor if configurable
            // Because we can deal with wrapping it when user goes through
            // Get own property descriptor. There is also a chance that this descriptor
            // could change sometime in the future, so we can defer wrapping
            // until we need to
            if (!descriptor.configurable) descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
            ObjectDefineProperty(shadowTarget, key, descriptor);
        });
        preventExtensions(shadowTarget);
    }
    class ReactiveProxyHandler {
        constructor(membrane, value){
            this.originalTarget = value;
            this.membrane = membrane;
        }
        get(shadowTarget, key) {
            const { originalTarget, membrane } = this;
            const value = originalTarget[key];
            const { valueObserved } = membrane;
            valueObserved(originalTarget, key);
            return membrane.getProxy(value);
        }
        set(shadowTarget, key, value) {
            const { originalTarget, membrane: { valueMutated } } = this;
            const oldValue = originalTarget[key];
            if (oldValue !== value) {
                originalTarget[key] = value;
                valueMutated(originalTarget, key);
            } else if (key === "length" && isArray(originalTarget)) // fix for issue #236: push will add the new index, and by the time length
            // is updated, the internal length is already equal to the new length value
            // therefore, the oldValue is equal to the value. This is the forking logic
            // to support this use case.
            valueMutated(originalTarget, key);
            return true;
        }
        deleteProperty(shadowTarget, key) {
            const { originalTarget, membrane: { valueMutated } } = this;
            delete originalTarget[key];
            valueMutated(originalTarget, key);
            return true;
        }
        apply(shadowTarget, thisArg, argArray) {
        /* No op */ }
        construct(target, argArray, newTarget) {
        /* No op */ }
        has(shadowTarget, key) {
            const { originalTarget, membrane: { valueObserved } } = this;
            valueObserved(originalTarget, key);
            return key in originalTarget;
        }
        ownKeys(shadowTarget) {
            const { originalTarget } = this;
            return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
        }
        isExtensible(shadowTarget) {
            const shadowIsExtensible = isExtensible(shadowTarget);
            if (!shadowIsExtensible) return shadowIsExtensible;
            const { originalTarget, membrane } = this;
            const targetIsExtensible = isExtensible(originalTarget);
            if (!targetIsExtensible) lockShadowTarget(membrane, shadowTarget, originalTarget);
            return targetIsExtensible;
        }
        setPrototypeOf(shadowTarget, prototype) {}
        getPrototypeOf(shadowTarget) {
            const { originalTarget } = this;
            return getPrototypeOf(originalTarget);
        }
        getOwnPropertyDescriptor(shadowTarget, key) {
            const { originalTarget, membrane } = this;
            const { valueObserved } = this.membrane;
            // keys looked up via hasOwnProperty need to be reactive
            valueObserved(originalTarget, key);
            let desc = getOwnPropertyDescriptor(originalTarget, key);
            if (isUndefined(desc)) return desc;
            const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
            if (!isUndefined(shadowDescriptor)) return shadowDescriptor;
            // Note: by accessing the descriptor, the key is marked as observed
            // but access to the value, setter or getter (if available) cannot observe
            // mutations, just like regular methods, in which case we just do nothing.
            desc = wrapDescriptor(membrane, desc, wrapValue);
            if (!desc.configurable) // If descriptor from original target is not configurable,
            // We must copy the wrapped descriptor over to the shadow target.
            // Otherwise, proxy will throw an invariant error.
            // This is our last chance to lock the value.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
            ObjectDefineProperty(shadowTarget, key, desc);
            return desc;
        }
        preventExtensions(shadowTarget) {
            const { originalTarget, membrane } = this;
            lockShadowTarget(membrane, shadowTarget, originalTarget);
            preventExtensions(originalTarget);
            return true;
        }
        defineProperty(shadowTarget, key, descriptor) {
            const { originalTarget, membrane } = this;
            const { valueMutated } = membrane;
            const { configurable } = descriptor;
            // We have to check for value in descriptor
            // because Object.freeze(proxy) calls this method
            // with only { configurable: false, writeable: false }
            // Additionally, method will only be called with writeable:false
            // if the descriptor has a value, as opposed to getter/setter
            // So we can just check if writable is present and then see if
            // value is present. This eliminates getter and setter descriptors
            if (hasOwnProperty.call(descriptor, "writable") && !hasOwnProperty.call(descriptor, "value")) {
                const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
                descriptor.value = originalDescriptor.value;
            }
            ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
            if (configurable === false) ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
            valueMutated(originalTarget, key);
            return true;
        }
    }
    function wrapReadOnlyValue(membrane, value) {
        return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
    }
    class ReadOnlyHandler {
        constructor(membrane, value){
            this.originalTarget = value;
            this.membrane = membrane;
        }
        get(shadowTarget, key) {
            const { membrane, originalTarget } = this;
            const value = originalTarget[key];
            const { valueObserved } = membrane;
            valueObserved(originalTarget, key);
            return membrane.getReadOnlyProxy(value);
        }
        set(shadowTarget, key, value) {
            return false;
        }
        deleteProperty(shadowTarget, key) {
            return false;
        }
        apply(shadowTarget, thisArg, argArray) {
        /* No op */ }
        construct(target, argArray, newTarget) {
        /* No op */ }
        has(shadowTarget, key) {
            const { originalTarget, membrane: { valueObserved } } = this;
            valueObserved(originalTarget, key);
            return key in originalTarget;
        }
        ownKeys(shadowTarget) {
            const { originalTarget } = this;
            return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
        }
        setPrototypeOf(shadowTarget, prototype) {}
        getOwnPropertyDescriptor(shadowTarget, key) {
            const { originalTarget, membrane } = this;
            const { valueObserved } = membrane;
            // keys looked up via hasOwnProperty need to be reactive
            valueObserved(originalTarget, key);
            let desc = getOwnPropertyDescriptor(originalTarget, key);
            if (isUndefined(desc)) return desc;
            const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
            if (!isUndefined(shadowDescriptor)) return shadowDescriptor;
            // Note: by accessing the descriptor, the key is marked as observed
            // but access to the value or getter (if available) cannot be observed,
            // just like regular methods, in which case we just do nothing.
            desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
            if (hasOwnProperty.call(desc, "set")) desc.set = undefined; // readOnly membrane does not allow setters
            if (!desc.configurable) // If descriptor from original target is not configurable,
            // We must copy the wrapped descriptor over to the shadow target.
            // Otherwise, proxy will throw an invariant error.
            // This is our last chance to lock the value.
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
            ObjectDefineProperty(shadowTarget, key, desc);
            return desc;
        }
        preventExtensions(shadowTarget) {
            return false;
        }
        defineProperty(shadowTarget, key, descriptor) {
            return false;
        }
    }
    function createShadowTarget(value) {
        let shadowTarget = undefined;
        if (isArray(value)) shadowTarget = [];
        else if (isObject(value)) shadowTarget = {};
        return shadowTarget;
    }
    const ObjectDotPrototype = Object.prototype;
    function defaultValueIsObservable(value) {
        // intentionally checking for null
        if (value === null) return false;
        // treat all non-object types, including undefined, as non-observable values
        if (typeof value !== "object") return false;
        if (isArray(value)) return true;
        const proto = getPrototypeOf(value);
        return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
    }
    const defaultValueObserved = (obj, key)=>{
    /* do nothing */ };
    const defaultValueMutated = (obj, key)=>{
    /* do nothing */ };
    const defaultValueDistortion = (value)=>value;
    function wrapDescriptor(membrane, descriptor, getValue) {
        const { set, get } = descriptor;
        if (hasOwnProperty.call(descriptor, "value")) descriptor.value = getValue(membrane, descriptor.value);
        else {
            if (!isUndefined(get)) descriptor.get = function() {
                // invoking the original getter with the original target
                return getValue(membrane, get.call(unwrap(this)));
            };
            if (!isUndefined(set)) descriptor.set = function(value) {
                // At this point we don't have a clear indication of whether
                // or not a valid mutation will occur, we don't have the key,
                // and we are not sure why and how they are invoking this setter.
                // Nevertheless we preserve the original semantics by invoking the
                // original setter with the original target and the unwrapped value
                set.call(unwrap(this), membrane.unwrapProxy(value));
            };
        }
        return descriptor;
    }
    class ReactiveMembrane {
        constructor(options){
            this.valueDistortion = defaultValueDistortion;
            this.valueMutated = defaultValueMutated;
            this.valueObserved = defaultValueObserved;
            this.valueIsObservable = defaultValueIsObservable;
            this.objectGraph = new WeakMap();
            if (!isUndefined(options)) {
                const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
                this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
                this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
                this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
                this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
            }
        }
        getProxy(value) {
            const unwrappedValue = unwrap(value);
            const distorted = this.valueDistortion(unwrappedValue);
            if (this.valueIsObservable(distorted)) {
                const o = this.getReactiveState(unwrappedValue, distorted);
                // when trying to extract the writable version of a readonly
                // we return the readonly.
                return o.readOnly === value ? value : o.reactive;
            }
            return distorted;
        }
        getReadOnlyProxy(value) {
            value = unwrap(value);
            const distorted = this.valueDistortion(value);
            if (this.valueIsObservable(distorted)) return this.getReactiveState(value, distorted).readOnly;
            return distorted;
        }
        unwrapProxy(p) {
            return unwrap(p);
        }
        getReactiveState(value, distortedValue) {
            const { objectGraph } = this;
            let reactiveState = objectGraph.get(distortedValue);
            if (reactiveState) return reactiveState;
            const membrane = this;
            reactiveState = {
                get reactive () {
                    const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                    // caching the reactive proxy after the first time it is accessed
                    const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                    registerProxy(proxy, value);
                    ObjectDefineProperty(this, "reactive", {
                        value: proxy
                    });
                    return proxy;
                },
                get readOnly () {
                    const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                    // caching the readOnly proxy after the first time it is accessed
                    const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                    registerProxy(proxy, value);
                    ObjectDefineProperty(this, "readOnly", {
                        value: proxy
                    });
                    return proxy;
                }
            };
            objectGraph.set(distortedValue, reactiveState);
            return reactiveState;
        }
    }
    /** version: 0.26.0 */ class Component {
        constructor(el, seedDataForCloning = null){
            this.$el = el;
            const dataAttr = this.$el.getAttribute("x-data");
            const dataExpression = dataAttr === "" ? "{}" : dataAttr;
            const initExpression = this.$el.getAttribute("x-init");
            this.unobservedData = seedDataForCloning ? seedDataForCloning : saferEval(dataExpression, {});
            // Construct a Proxy-based observable. This will be used to handle reactivity.
            let { membrane, data } = this.wrapDataInObservable(this.unobservedData);
            this.$data = data;
            this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
            // our magic properties to the original data for access.
            this.unobservedData.$el = this.$el;
            this.unobservedData.$refs = this.getRefsProxy();
            this.nextTickStack = [];
            this.unobservedData.$nextTick = (callback)=>{
                this.nextTickStack.push(callback);
            };
            this.watchers = {};
            this.unobservedData.$watch = (property, callback)=>{
                if (!this.watchers[property]) this.watchers[property] = [];
                this.watchers[property].push(callback);
            };
            this.showDirectiveStack = [];
            this.showDirectiveLastElement;
            var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)
            if (initExpression && !seedDataForCloning) {
                // We want to allow data manipulation, but not trigger DOM updates just yet.
                // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
                this.pauseReactivity = true;
                initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
                this.pauseReactivity = false;
            } // Register all our listeners and set all our attribute bindings.
            this.initializeElements(this.$el); // Use mutation observer to detect new elements being added within this component at run-time.
            // Alpine's just so darn flexible amirite?
            this.listenForNewElementsToInitialize();
            if (typeof initReturnedCallback === "function") // Run the callback returned form the "x-init" hook to allow the user to do stuff after
            // Alpine's got it's grubby little paws all over everything.
            initReturnedCallback.call(this.$data);
        }
        getUnobservedData() {
            let unwrappedData = this.membrane.unwrapProxy(this.$data);
            let copy = {};
            Object.keys(unwrappedData).forEach((key)=>{
                if ([
                    "$el",
                    "$refs",
                    "$nextTick",
                    "$watch"
                ].includes(key)) return;
                copy[key] = unwrappedData[key];
            });
            return copy;
        }
        wrapDataInObservable(data) {
            var self = this;
            let membrane = new ReactiveMembrane({
                valueMutated (target, key) {
                    if (self.watchers[key]) self.watchers[key].forEach((callback)=>callback(target[key]));
                     // Don't react to data changes for cases like the `x-created` hook.
                    if (self.pauseReactivity) return;
                    debounce(()=>{
                        self.updateElements(self.$el); // Walk through the $nextTick stack and clear it as we go.
                        while(self.nextTickStack.length > 0)self.nextTickStack.shift()();
                    }, 0)();
                }
            });
            return {
                data: membrane.getProxy(data),
                membrane
            };
        }
        walkAndSkipNestedComponents(el, callback, initializeComponentCallback = ()=>{}) {
            walk(el, (el)=>{
                // We've hit a component.
                if (el.hasAttribute("x-data")) // If it's not the current one.
                {
                    if (!el.isSameNode(this.$el)) {
                        // Initialize it if it's not.
                        if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.
                        return false;
                    }
                }
                return callback(el);
            });
        }
        initializeElements(rootEl, extraVars = ()=>{}) {
            this.walkAndSkipNestedComponents(rootEl, (el)=>{
                // Don't touch spawns from for loop
                if (el.__x_for_key !== undefined) return false;
                this.initializeElement(el, extraVars);
            }, (el)=>{
                el.__x = new Component(el);
            });
            this.executeAndClearRemainingShowDirectiveStack(); // Walk through the $nextTick stack and clear it as we go.
            while(this.nextTickStack.length > 0)this.nextTickStack.shift()();
        }
        initializeElement(el, extraVars) {
            // To support class attribute merging, we have to know what the element's
            // original class attribute looked like for reference.
            if (el.hasAttribute("class") && getXAttrs(el).length > 0) el.__x_original_classes = el.getAttribute("class").split(" ");
            this.registerListeners(el, extraVars);
            this.resolveBoundAttributes(el, true, extraVars);
        }
        updateElements(rootEl, extraVars = ()=>{}) {
            this.walkAndSkipNestedComponents(rootEl, (el)=>{
                // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
                if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
                this.updateElement(el, extraVars);
            }, (el)=>{
                el.__x = new Component(el);
            });
            this.executeAndClearRemainingShowDirectiveStack(); // Walk through the $nextTick stack and clear it as we go.
            while(this.nextTickStack.length > 0)this.nextTickStack.shift()();
        }
        executeAndClearRemainingShowDirectiveStack() {
            // The goal here is to start all the x-show transitions
            // and build a nested promise chain so that elements
            // only hide when the children are finished hiding.
            this.showDirectiveStack.reverse().map((thing)=>{
                return new Promise((resolve)=>{
                    thing((finish)=>{
                        resolve(finish);
                    });
                });
            }).reduce((nestedPromise, promise)=>{
                return nestedPromise.then(()=>{
                    return promise.then((finish)=>finish());
                });
            }, Promise.resolve(()=>{})); // We've processed the handler stack. let's clear it.
            this.showDirectiveStack = [];
            this.showDirectiveLastElement = undefined;
        }
        updateElement(el, extraVars) {
            this.resolveBoundAttributes(el, false, extraVars);
        }
        registerListeners(el, extraVars) {
            getXAttrs(el).forEach(({ type, value, modifiers, expression })=>{
                switch(type){
                    case "on":
                        registerListener(this, el, value, modifiers, expression, extraVars);
                        break;
                    case "model":
                        registerModelListener(this, el, modifiers, expression, extraVars);
                        break;
                }
            });
        }
        resolveBoundAttributes(el, initialUpdate = false, extraVars) {
            let attrs = getXAttrs(el);
            attrs.forEach(({ type, value, modifiers, expression })=>{
                switch(type){
                    case "model":
                        handleAttributeBindingDirective(this, el, "value", expression, extraVars);
                        break;
                    case "bind":
                        // The :key binding on an x-for is special, ignore it.
                        if (el.tagName.toLowerCase() === "template" && value === "key") return;
                        handleAttributeBindingDirective(this, el, value, expression, extraVars);
                        break;
                    case "text":
                        var output = this.evaluateReturnExpression(el, expression, extraVars); // If nested model key is undefined, set the default value to empty string.
                        if (output === undefined && expression.match(/\./).length) output = "";
                        el.innerText = output;
                        break;
                    case "html":
                        el.innerHTML = this.evaluateReturnExpression(el, expression, extraVars);
                        break;
                    case "show":
                        var output = this.evaluateReturnExpression(el, expression, extraVars);
                        handleShowDirective(this, el, output, modifiers, initialUpdate);
                        break;
                    case "if":
                        // If this element also has x-for on it, don't process x-if.
                        // We will let the "x-for" directive handle the "if"ing.
                        if (attrs.filter((i)=>i.type === "for").length > 0) return;
                        var output = this.evaluateReturnExpression(el, expression, extraVars);
                        handleIfDirective(el, output, initialUpdate);
                        break;
                    case "for":
                        handleForDirective(this, el, expression, initialUpdate);
                        break;
                    case "cloak":
                        el.removeAttribute("x-cloak");
                        break;
                }
            });
        }
        evaluateReturnExpression(el, expression, extraVars = ()=>{}) {
            return saferEval(expression, this.$data, _objectSpread2({}, extraVars(), {
                $dispatch: this.getDispatchFunction(el)
            }));
        }
        evaluateCommandExpression(el, expression, extraVars = ()=>{}) {
            return saferEvalNoReturn(expression, this.$data, _objectSpread2({}, extraVars(), {
                $dispatch: this.getDispatchFunction(el)
            }));
        }
        getDispatchFunction(el) {
            return (event, detail = {})=>{
                el.dispatchEvent(new CustomEvent(event, {
                    detail,
                    bubbles: true
                }));
            };
        }
        listenForNewElementsToInitialize() {
            const targetNode = this.$el;
            const observerOptions = {
                childList: true,
                attributes: true,
                subtree: true
            };
            const observer = new MutationObserver((mutations)=>{
                for(let i = 0; i < mutations.length; i++){
                    // Filter out mutations triggered from child components.
                    const closestParentComponent = mutations[i].target.closest("[x-data]");
                    if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) return;
                    if (mutations[i].type === "attributes" && mutations[i].attributeName === "x-data") {
                        const rawData = saferEval(mutations[i].target.getAttribute("x-data"), {});
                        Object.keys(rawData).forEach((key)=>{
                            if (this.$data[key] !== rawData[key]) this.$data[key] = rawData[key];
                        });
                    }
                    if (mutations[i].addedNodes.length > 0) mutations[i].addedNodes.forEach((node)=>{
                        if (node.nodeType !== 1) return;
                        if (node.matches("[x-data]")) {
                            node.__x = new Component(node);
                            return;
                        }
                        this.initializeElements(node);
                    });
                }
            });
            observer.observe(targetNode, observerOptions);
        }
        getRefsProxy() {
            var self = this;
            var refObj = {};
            // One of the goals of this is to not hold elements in memory, but rather re-evaluate
            // the DOM when the system needs something from it. This way, the framework is flexible and
            // friendly to outside DOM changes from libraries like Vue/Livewire.
            // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.
            return new Proxy(refObj, {
                get (object, property) {
                    if (property === "$isAlpineProxy") return true;
                    var ref; // We can't just query the DOM because it's hard to filter out refs in
                    // nested components.
                    self.walkAndSkipNestedComponents(self.$el, (el)=>{
                        if (el.hasAttribute("x-ref") && el.getAttribute("x-ref") === property) ref = el;
                    });
                    return ref;
                }
            });
        }
    }
    const Alpine = {
        start: async function start() {
            if (!isTesting()) await domReady();
            this.discoverComponents((el)=>{
                this.initializeComponent(el);
            }); // It's easier and more performant to just support Turbolinks than listen
            // to MutationObserver mutations at the document level.
            document.addEventListener("turbolinks:load", ()=>{
                this.discoverUninitializedComponents((el)=>{
                    this.initializeComponent(el);
                });
            });
            this.listenForNewUninitializedComponentsAtRunTime((el)=>{
                this.initializeComponent(el);
            });
        },
        discoverComponents: function discoverComponents(callback) {
            const rootEls = document.querySelectorAll("[x-data]");
            rootEls.forEach((rootEl)=>{
                callback(rootEl);
            });
        },
        discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
            const rootEls = (el || document).querySelectorAll("[x-data]");
            Array.from(rootEls).filter((el)=>el.__x === undefined).forEach((rootEl)=>{
                callback(rootEl);
            });
        },
        listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime(callback) {
            const targetNode = document.querySelector("body");
            const observerOptions = {
                childList: true,
                attributes: true,
                subtree: true
            };
            const observer = new MutationObserver((mutations)=>{
                for(let i = 0; i < mutations.length; i++)if (mutations[i].addedNodes.length > 0) mutations[i].addedNodes.forEach((node)=>{
                    // Discard non-element nodes (like line-breaks)
                    if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
                    // They will take care of themselves.
                    if (node.parentElement && node.parentElement.closest("[x-data]")) return;
                    this.discoverUninitializedComponents((el)=>{
                        this.initializeComponent(el);
                    }, node.parentElement);
                });
            });
            observer.observe(targetNode, observerOptions);
        },
        initializeComponent: function initializeComponent(el) {
            if (!el.__x) el.__x = new Component(el);
        },
        clone: function clone(component, newEl) {
            if (!newEl.__x) newEl.__x = new Component(newEl, component.getUnobservedData());
        }
    };
    if (!isTesting()) {
        window.Alpine = Alpine;
        if (window.deferLoadingAlpine) window.deferLoadingAlpine(function() {
            window.Alpine.start();
        });
        else window.Alpine.start();
    }
    return Alpine;
});

},{}],"kFlnw":[function(require,module,exports) {
/*
Trix 1.2.3
Copyright © 2020 Basecamp, LLC
http://trix-editor.org/
 */ (function() {}).call(this), (function() {
    var t;
    null == window.Set && (window.Set = t = function() {
        function t() {
            this.clear();
        }
        return t.prototype.clear = function() {
            return this.values = [];
        }, t.prototype.has = function(t) {
            return -1 !== this.values.indexOf(t);
        }, t.prototype.add = function(t) {
            return this.has(t) || this.values.push(t), this;
        }, t.prototype["delete"] = function(t) {
            var e;
            return -1 === (e = this.values.indexOf(t)) ? !1 : (this.values.splice(e, 1), !0);
        }, t.prototype.forEach = function() {
            var t;
            return (t = this.values).forEach.apply(t, arguments);
        }, t;
    }());
}).call(this), function(t) {
    function e() {}
    function n(t, e) {
        return function() {
            t.apply(e, arguments);
        };
    }
    function i(t) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this);
    }
    function o(t, e) {
        for(; 3 === t._state;)t = t._value;
        return 0 === t._state ? void t._deferreds.push(e) : (t._handled = !0, void h(function() {
            var n = 1 === t._state ? e.onFulfilled : e.onRejected;
            if (null === n) return void (1 === t._state ? r : s)(e.promise, t._value);
            var i;
            try {
                i = n(t._value);
            } catch (o) {
                return void s(e.promise, o);
            }
            r(e.promise, i);
        }));
    }
    function r(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof i) return t._state = 3, t._value = e, void a(t);
                if ("function" == typeof o) return void c(n(o, e), t);
            }
            t._state = 1, t._value = e, a(t);
        } catch (r) {
            s(t, r);
        }
    }
    function s(t, e) {
        t._state = 2, t._value = e, a(t);
    }
    function a(t) {
        2 === t._state && 0 === t._deferreds.length && setTimeout(function() {
            t._handled || p(t._value);
        }, 1);
        for(var e = 0, n = t._deferreds.length; n > e; e++)o(t, t._deferreds[e]);
        t._deferreds = null;
    }
    function u(t, e, n) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n;
    }
    function c(t, e) {
        var n = !1;
        try {
            t(function(t) {
                n || (n = !0, r(e, t));
            }, function(t) {
                n || (n = !0, s(e, t));
            });
        } catch (i) {
            if (n) return;
            n = !0, s(e, i);
        }
    }
    var l = setTimeout, h = "function" == typeof setImmediate && setImmediate || function(t) {
        l(t, 1);
    }, p = function(t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t);
    };
    i.prototype["catch"] = function(t) {
        return this.then(null, t);
    }, i.prototype.then = function(t, n) {
        var r = new i(e);
        return o(this, new u(t, n, r)), r;
    }, i.all = function(t) {
        var e = Array.prototype.slice.call(t);
        return new i(function(t, n) {
            function i(r, s) {
                try {
                    if (s && ("object" == typeof s || "function" == typeof s)) {
                        var a = s.then;
                        if ("function" == typeof a) return void a.call(s, function(t) {
                            i(r, t);
                        }, n);
                    }
                    e[r] = s, 0 === --o && t(e);
                } catch (u) {
                    n(u);
                }
            }
            if (0 === e.length) return t([]);
            for(var o = e.length, r = 0; r < e.length; r++)i(r, e[r]);
        });
    }, i.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
            e(t);
        });
    }, i.reject = function(t) {
        return new i(function(e, n) {
            n(t);
        });
    }, i.race = function(t) {
        return new i(function(e, n) {
            for(var i = 0, o = t.length; o > i; i++)t[i].then(e, n);
        });
    }, i._setImmediateFn = function(t) {
        h = t;
    }, i._setUnhandledRejectionFn = function(t) {
        p = t;
    }, (0, module.exports) ? module.exports = i : t.Promise || (t.Promise = i);
}(this), (function() {
    var t = "object" == typeof window.customElements, e = "function" == typeof document.registerElement, n = t || e;
    n || /**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */ ("undefined" == typeof WeakMap && !function() {
        var t = Object.defineProperty, e = Date.now() % 1e9, n = function() {
            this.name = "__st" + (1e9 * Math.random() >>> 0) + (e++ + "__");
        };
        n.prototype = {
            set: function(e, n) {
                var i = e[this.name];
                return i && i[0] === e ? i[1] = n : t(e, this.name, {
                    value: [
                        e,
                        n
                    ],
                    writable: !0
                }), this;
            },
            get: function(t) {
                var e;
                return (e = t[this.name]) && e[0] === t ? e[1] : void 0;
            },
            "delete": function(t) {
                var e = t[this.name];
                return e && e[0] === t ? (e[0] = e[1] = void 0, !0) : !1;
            },
            has: function(t) {
                var e = t[this.name];
                return e ? e[0] === t : !1;
            }
        }, window.WeakMap = n;
    }(), function(t) {
        function e(t) {
            A.push(t), b || (b = !0, g(i));
        }
        function n(t) {
            return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(t) || t;
        }
        function i() {
            b = !1;
            var t = A;
            A = [], t.sort(function(t, e) {
                return t.uid_ - e.uid_;
            });
            var e = !1;
            t.forEach(function(t) {
                var n = t.takeRecords();
                o(t), n.length && (t.callback_(n, t), e = !0);
            }), e && i();
        }
        function o(t) {
            t.nodes_.forEach(function(e) {
                var n = m.get(e);
                n && n.forEach(function(e) {
                    e.observer === t && e.removeTransientObservers();
                });
            });
        }
        function r(t, e) {
            for(var n = t; n; n = n.parentNode){
                var i = m.get(n);
                if (i) for(var o = 0; o < i.length; o++){
                    var r = i[o], s = r.options;
                    if (n === t || s.subtree) {
                        var a = e(s);
                        a && r.enqueue(a);
                    }
                }
            }
        }
        function s(t) {
            this.callback_ = t, this.nodes_ = [], this.records_ = [], this.uid_ = ++C;
        }
        function a(t, e) {
            this.type = t, this.target = e, this.addedNodes = [], this.removedNodes = [], this.previousSibling = null, this.nextSibling = null, this.attributeName = null, this.attributeNamespace = null, this.oldValue = null;
        }
        function u(t) {
            var e = new a(t.type, t.target);
            return e.addedNodes = t.addedNodes.slice(), e.removedNodes = t.removedNodes.slice(), e.previousSibling = t.previousSibling, e.nextSibling = t.nextSibling, e.attributeName = t.attributeName, e.attributeNamespace = t.attributeNamespace, e.oldValue = t.oldValue, e;
        }
        function c(t, e) {
            return x = new a(t, e);
        }
        function l(t) {
            return w ? w : (w = u(x), w.oldValue = t, w);
        }
        function h() {
            x = w = void 0;
        }
        function p(t) {
            return t === w || t === x;
        }
        function d(t, e) {
            return t === e ? t : w && p(t) ? w : null;
        }
        function f(t, e, n) {
            this.observer = t, this.target = e, this.options = n, this.transientObservedNodes = [];
        }
        if (!t.JsMutationObserver) {
            var g, m = new WeakMap;
            if (/Trident|Edge/.test(navigator.userAgent)) g = setTimeout;
            else if (window.setImmediate) g = window.setImmediate;
            else {
                var v = [], y = String(Math.random());
                window.addEventListener("message", function(t) {
                    if (t.data === y) {
                        var e = v;
                        v = [], e.forEach(function(t) {
                            t();
                        });
                    }
                }), g = function(t) {
                    v.push(t), window.postMessage(y, "*");
                };
            }
            var b = !1, A = [], C = 0;
            s.prototype = {
                observe: function(t, e) {
                    if (t = n(t), !e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData) throw new SyntaxError;
                    var i = m.get(t);
                    i || m.set(t, i = []);
                    for(var o, r = 0; r < i.length; r++)if (i[r].observer === this) {
                        o = i[r], o.removeListeners(), o.options = e;
                        break;
                    }
                    o || (o = new f(this, t, e), i.push(o), this.nodes_.push(t)), o.addListeners();
                },
                disconnect: function() {
                    this.nodes_.forEach(function(t) {
                        for(var e = m.get(t), n = 0; n < e.length; n++){
                            var i = e[n];
                            if (i.observer === this) {
                                i.removeListeners(), e.splice(n, 1);
                                break;
                            }
                        }
                    }, this), this.records_ = [];
                },
                takeRecords: function() {
                    var t = this.records_;
                    return this.records_ = [], t;
                }
            };
            var x, w;
            f.prototype = {
                enqueue: function(t) {
                    var n = this.observer.records_, i = n.length;
                    if (n.length > 0) {
                        var o = n[i - 1], r = d(o, t);
                        if (r) return void (n[i - 1] = r);
                    } else e(this.observer);
                    n[i] = t;
                },
                addListeners: function() {
                    this.addListeners_(this.target);
                },
                addListeners_: function(t) {
                    var e = this.options;
                    e.attributes && t.addEventListener("DOMAttrModified", this, !0), e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0), e.childList && t.addEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0);
                },
                removeListeners: function() {
                    this.removeListeners_(this.target);
                },
                removeListeners_: function(t) {
                    var e = this.options;
                    e.attributes && t.removeEventListener("DOMAttrModified", this, !0), e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0), e.childList && t.removeEventListener("DOMNodeInserted", this, !0), (e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0);
                },
                addTransientObserver: function(t) {
                    if (t !== this.target) {
                        this.addListeners_(t), this.transientObservedNodes.push(t);
                        var e = m.get(t);
                        e || m.set(t, e = []), e.push(this);
                    }
                },
                removeTransientObservers: function() {
                    var t = this.transientObservedNodes;
                    this.transientObservedNodes = [], t.forEach(function(t) {
                        this.removeListeners_(t);
                        for(var e = m.get(t), n = 0; n < e.length; n++)if (e[n] === this) {
                            e.splice(n, 1);
                            break;
                        }
                    }, this);
                },
                handleEvent: function(t) {
                    switch(t.stopImmediatePropagation(), t.type){
                        case "DOMAttrModified":
                            var e = t.attrName, n = t.relatedNode.namespaceURI, i = t.target, o = new c("attributes", i);
                            o.attributeName = e, o.attributeNamespace = n;
                            var s = t.attrChange === MutationEvent.ADDITION ? null : t.prevValue;
                            r(i, function(t) {
                                return !t.attributes || t.attributeFilter && t.attributeFilter.length && -1 === t.attributeFilter.indexOf(e) && -1 === t.attributeFilter.indexOf(n) ? void 0 : t.attributeOldValue ? l(s) : o;
                            });
                            break;
                        case "DOMCharacterDataModified":
                            var i = t.target, o = c("characterData", i), s = t.prevValue;
                            r(i, function(t) {
                                return t.characterData ? t.characterDataOldValue ? l(s) : o : void 0;
                            });
                            break;
                        case "DOMNodeRemoved":
                            this.addTransientObserver(t.target);
                        case "DOMNodeInserted":
                            var a, u, p = t.target;
                            "DOMNodeInserted" === t.type ? (a = [
                                p
                            ], u = []) : (a = [], u = [
                                p
                            ]);
                            var d = p.previousSibling, f = p.nextSibling, o = c("childList", t.target.parentNode);
                            o.addedNodes = a, o.removedNodes = u, o.previousSibling = d, o.nextSibling = f, r(t.relatedNode, function(t) {
                                return t.childList ? o : void 0;
                            });
                    }
                    h();
                }
            }, t.JsMutationObserver = s, t.MutationObserver || (t.MutationObserver = s, s._isPolyfilled = !0);
        }
    }(self), function() {
        "use strict";
        if (!window.performance || !window.performance.now) {
            var t = Date.now();
            window.performance = {
                now: function() {
                    return Date.now() - t;
                }
            };
        }
        window.requestAnimationFrame || (window.requestAnimationFrame = function() {
            var t = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
            return t ? function(e) {
                return t(function() {
                    e(performance.now());
                });
            } : function(t) {
                return window.setTimeout(t, 1e3 / 60);
            };
        }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = function() {
            return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(t) {
                clearTimeout(t);
            };
        }());
        var e = function() {
            var t = document.createEvent("Event");
            return t.initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented;
        }();
        if (!e) {
            var n = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function() {
                this.cancelable && (n.call(this), Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0;
                    },
                    configurable: !0
                }));
            };
        }
        var i = /Trident/.test(navigator.userAgent);
        if ((!window.CustomEvent || i && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(t, e) {
            e = e || {};
            var n = document.createEvent("CustomEvent");
            return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n;
        }, window.CustomEvent.prototype = window.Event.prototype), !window.Event || i && "function" != typeof window.Event) {
            var o = window.Event;
            window.Event = function(t, e) {
                e = e || {};
                var n = document.createEvent("Event");
                return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n;
            }, window.Event.prototype = o.prototype;
        }
    }(window.WebComponents), window.CustomElements = window.CustomElements || {
        flags: {}
    }, function(t) {
        var e = t.flags, n = [], i = function(t) {
            n.push(t);
        }, o = function() {
            n.forEach(function(e) {
                e(t);
            });
        };
        t.addModule = i, t.initializeModules = o, t.hasNative = Boolean(document.registerElement), t.isIE = /Trident/.test(navigator.userAgent), t.useNative = !e.register && t.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
    }(window.CustomElements), window.CustomElements.addModule(function(t) {
        function e(t, e) {
            n(t, function(t) {
                return e(t) ? !0 : void i(t, e);
            }), i(t, e);
        }
        function n(t, e, i) {
            var o = t.firstElementChild;
            if (!o) for(o = t.firstChild; o && o.nodeType !== Node.ELEMENT_NODE;)o = o.nextSibling;
            for(; o;)e(o, i) !== !0 && n(o, e, i), o = o.nextElementSibling;
            return null;
        }
        function i(t, n) {
            for(var i = t.shadowRoot; i;)e(i, n), i = i.olderShadowRoot;
        }
        function o(t, e) {
            r(t, e, []);
        }
        function r(t, e, n) {
            if (t = window.wrap(t), !(n.indexOf(t) >= 0)) {
                n.push(t);
                for(var i, o = t.querySelectorAll("link[rel=" + s + "]"), a = 0, u = o.length; u > a && (i = o[a]); a++)i.import && r(i.import, e, n);
                e(t);
            }
        }
        var s = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
        t.forDocumentTree = o, t.forSubtree = e;
    }), window.CustomElements.addModule(function(t) {
        function e(t, e) {
            return n(t, e) || i(t, e);
        }
        function n(e, n) {
            return t.upgrade(e, n) ? !0 : void (n && s(e));
        }
        function i(t, e) {
            b(t, function(t) {
                return n(t, e) ? !0 : void 0;
            });
        }
        function o(t) {
            w.push(t), x || (x = !0, setTimeout(r));
        }
        function r() {
            x = !1;
            for(var t, e = w, n = 0, i = e.length; i > n && (t = e[n]); n++)t();
            w = [];
        }
        function s(t) {
            C ? o(function() {
                a(t);
            }) : a(t);
        }
        function a(t) {
            t.__upgraded__ && !t.__attached && (t.__attached = !0, t.attachedCallback && t.attachedCallback());
        }
        function u(t) {
            c(t), b(t, function(t) {
                c(t);
            });
        }
        function c(t) {
            C ? o(function() {
                l(t);
            }) : l(t);
        }
        function l(t) {
            t.__upgraded__ && t.__attached && (t.__attached = !1, t.detachedCallback && t.detachedCallback());
        }
        function h(t) {
            for(var e = t, n = window.wrap(document); e;){
                if (e == n) return !0;
                e = e.parentNode || e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host;
            }
        }
        function p(t) {
            if (t.shadowRoot && !t.shadowRoot.__watched) {
                y.dom && console.log("watching shadow-root for: ", t.localName);
                for(var e = t.shadowRoot; e;)g(e), e = e.olderShadowRoot;
            }
        }
        function d(t, n) {
            if (y.dom) {
                var i = n[0];
                if (i && "childList" === i.type && i.addedNodes && i.addedNodes) {
                    for(var o = i.addedNodes[0]; o && o !== document && !o.host;)o = o.parentNode;
                    var r = o && (o.URL || o._URL || o.host && o.host.localName) || "";
                    r = r.split("/?").shift().split("/").pop();
                }
                console.group("mutations (%d) [%s]", n.length, r || "");
            }
            var s = h(t);
            n.forEach(function(t) {
                "childList" === t.type && (E(t.addedNodes, function(t) {
                    t.localName && e(t, s);
                }), E(t.removedNodes, function(t) {
                    t.localName && u(t);
                }));
            }), y.dom && console.groupEnd();
        }
        function f(t) {
            for(t = window.wrap(t), t || (t = window.wrap(document)); t.parentNode;)t = t.parentNode;
            var e = t.__observer;
            e && (d(t, e.takeRecords()), r());
        }
        function g(t) {
            if (!t.__observer) {
                var e = new MutationObserver(d.bind(this, t));
                e.observe(t, {
                    childList: !0,
                    subtree: !0
                }), t.__observer = e;
            }
        }
        function m(t) {
            t = window.wrap(t), y.dom && console.group("upgradeDocument: ", t.baseURI.split("/").pop());
            var n = t === window.wrap(document);
            e(t, n), g(t), y.dom && console.groupEnd();
        }
        function v(t) {
            A(t, m);
        }
        var y = t.flags, b = t.forSubtree, A = t.forDocumentTree, C = window.MutationObserver._isPolyfilled && y["throttle-attached"];
        t.hasPolyfillMutations = C, t.hasThrottledAttached = C;
        var x = !1, w = [], E = Array.prototype.forEach.call.bind(Array.prototype.forEach), S = Element.prototype.createShadowRoot;
        S && (Element.prototype.createShadowRoot = function() {
            var t = S.call(this);
            return window.CustomElements.watchShadow(this), t;
        }), t.watchShadow = p, t.upgradeDocumentTree = v, t.upgradeDocument = m, t.upgradeSubtree = i, t.upgradeAll = e, t.attached = s, t.takeRecords = f;
    }), window.CustomElements.addModule(function(t) {
        function e(e, i) {
            if ("template" === e.localName && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(e), !e.__upgraded__ && e.nodeType === Node.ELEMENT_NODE) {
                var o = e.getAttribute("is"), r = t.getRegisteredDefinition(e.localName) || t.getRegisteredDefinition(o);
                if (r && (o && r.tag == e.localName || !o && !r.extends)) return n(e, r, i);
            }
        }
        function n(e, n, o) {
            return s.upgrade && console.group("upgrade:", e.localName), n.is && e.setAttribute("is", n.is), i(e, n), e.__upgraded__ = !0, r(e), o && t.attached(e), t.upgradeSubtree(e, o), s.upgrade && console.groupEnd(), e;
        }
        function i(t, e) {
            Object.__proto__ ? t.__proto__ = e.prototype : (o(t, e.prototype, e.native), t.__proto__ = e.prototype);
        }
        function o(t, e, n) {
            for(var i = {}, o = e; o !== n && o !== HTMLElement.prototype;){
                for(var r, s = Object.getOwnPropertyNames(o), a = 0; r = s[a]; a++)i[r] || (Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(o, r)), i[r] = 1);
                o = Object.getPrototypeOf(o);
            }
        }
        function r(t) {
            t.createdCallback && t.createdCallback();
        }
        var s = t.flags;
        t.upgrade = e, t.upgradeWithDefinition = n, t.implementPrototype = i;
    }), window.CustomElements.addModule(function(t) {
        function e(e, i) {
            var u = i || {};
            if (!e) throw new Error("document.registerElement: first argument `name` must not be empty");
            if (e.indexOf("-") < 0) throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(e) + "'.");
            if (o(e)) throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(e) + "'. The type name is invalid.");
            if (c(e)) throw new Error("DuplicateDefinitionError: a type with name '" + String(e) + "' is already registered");
            return u.prototype || (u.prototype = Object.create(HTMLElement.prototype)), u.__name = e.toLowerCase(), u.extends && (u.extends = u.extends.toLowerCase()), u.lifecycle = u.lifecycle || {}, u.ancestry = r(u.extends), s(u), a(u), n(u.prototype), l(u.__name, u), u.ctor = h(u), u.ctor.prototype = u.prototype, u.prototype.constructor = u.ctor, t.ready && m(document), u.ctor;
        }
        function n(t) {
            if (!t.setAttribute._polyfilled) {
                var e = t.setAttribute;
                t.setAttribute = function(t, n) {
                    i.call(this, t, n, e);
                };
                var n = t.removeAttribute;
                t.removeAttribute = function(t) {
                    i.call(this, t, null, n);
                }, t.setAttribute._polyfilled = !0;
            }
        }
        function i(t, e, n) {
            t = t.toLowerCase();
            var i = this.getAttribute(t);
            n.apply(this, arguments);
            var o = this.getAttribute(t);
            this.attributeChangedCallback && o !== i && this.attributeChangedCallback(t, i, o);
        }
        function o(t) {
            for(var e = 0; e < C.length; e++)if (t === C[e]) return !0;
        }
        function r(t) {
            var e = c(t);
            return e ? r(e.extends).concat([
                e
            ]) : [];
        }
        function s(t) {
            for(var e, n = t.extends, i = 0; e = t.ancestry[i]; i++)n = e.is && e.tag;
            t.tag = n || t.__name, n && (t.is = t.__name);
        }
        function a(t) {
            if (!Object.__proto__) {
                var e = HTMLElement.prototype;
                if (t.is) {
                    var n = document.createElement(t.tag);
                    e = Object.getPrototypeOf(n);
                }
                for(var i, o = t.prototype, r = !1; o;)o == e && (r = !0), i = Object.getPrototypeOf(o), i && (o.__proto__ = i), o = i;
                r || console.warn(t.tag + " prototype not found in prototype chain for " + t.is), t.native = e;
            }
        }
        function u(t) {
            return y(E(t.tag), t);
        }
        function c(t) {
            return t ? x[t.toLowerCase()] : void 0;
        }
        function l(t, e) {
            x[t] = e;
        }
        function h(t) {
            return function() {
                return u(t);
            };
        }
        function p(t, e, n) {
            return t === w ? d(e, n) : S(t, e);
        }
        function d(t, e) {
            t && (t = t.toLowerCase()), e && (e = e.toLowerCase());
            var n = c(e || t);
            if (n) {
                if (t == n.tag && e == n.is) return new n.ctor;
                if (!e && !n.is) return new n.ctor;
            }
            var i;
            return e ? (i = d(t), i.setAttribute("is", e), i) : (i = E(t), t.indexOf("-") >= 0 && b(i, HTMLElement), i);
        }
        function f(t, e) {
            var n = t[e];
            t[e] = function() {
                var t = n.apply(this, arguments);
                return v(t), t;
            };
        }
        var g, m = (t.isIE, t.upgradeDocumentTree), v = t.upgradeAll, y = t.upgradeWithDefinition, b = t.implementPrototype, A = t.useNative, C = [
            "annotation-xml",
            "color-profile",
            "font-face",
            "font-face-src",
            "font-face-uri",
            "font-face-format",
            "font-face-name",
            "missing-glyph"
        ], x = {}, w = "http://www.w3.org/1999/xhtml", E = document.createElement.bind(document), S = document.createElementNS.bind(document);
        g = Object.__proto__ || A ? function(t, e) {
            return t instanceof e;
        } : function(t, e) {
            if (t instanceof e) return !0;
            for(var n = t; n;){
                if (n === e.prototype) return !0;
                n = n.__proto__;
            }
            return !1;
        }, f(Node.prototype, "cloneNode"), f(document, "importNode"), document.registerElement = e, document.createElement = d, document.createElementNS = p, t.registry = x, t.instanceof = g, t.reservedTagList = C, t.getRegisteredDefinition = c, document.register = document.registerElement;
    }), function(t) {
        function e() {
            r(window.wrap(document)), window.CustomElements.ready = !0;
            var t = window.requestAnimationFrame || function(t) {
                setTimeout(t, 16);
            };
            t(function() {
                setTimeout(function() {
                    window.CustomElements.readyTime = Date.now(), window.HTMLImports && (window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime), document.dispatchEvent(new CustomEvent("WebComponentsReady", {
                        bubbles: !0
                    }));
                });
            });
        }
        var n = t.useNative, i = t.initializeModules;
        if (t.isIE, n) {
            var o = function() {};
            t.watchShadow = o, t.upgrade = o, t.upgradeAll = o, t.upgradeDocumentTree = o, t.upgradeSubtree = o, t.takeRecords = o, t.instanceof = function(t, e) {
                return t instanceof e;
            };
        } else i();
        var r = t.upgradeDocumentTree, s = t.upgradeDocument;
        if (window.wrap || (window.ShadowDOMPolyfill ? (window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded, window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded) : window.wrap = window.unwrap = function(t) {
            return t;
        }), window.HTMLImports && (window.HTMLImports.__importsParsingHook = function(t) {
            t.import && s(wrap(t.import));
        }), "complete" === document.readyState || t.flags.eager) e();
        else if ("interactive" !== document.readyState || window.attachEvent || window.HTMLImports && !window.HTMLImports.ready) {
            var a = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
            window.addEventListener(a, e);
        } else e();
    }(window.CustomElements));
}).call(this), (function() {}).call(this), (function() {
    var t = this;
    (function() {
        (function() {
            this.Trix = {
                VERSION: "1.2.3",
                ZERO_WIDTH_SPACE: "\uFEFF",
                NON_BREAKING_SPACE: "\xa0",
                OBJECT_REPLACEMENT_CHARACTER: "￼",
                browser: {
                    composesExistingText: /Android.*Chrome/.test(navigator.userAgent),
                    forcesObjectResizing: /Trident.*rv:11/.test(navigator.userAgent),
                    supportsInputEvents: function() {
                        var t, e, n, i;
                        if ("undefined" == typeof InputEvent) return !1;
                        for(i = [
                            "data",
                            "getTargetRanges",
                            "inputType"
                        ], t = 0, e = i.length; e > t; t++)if (n = i[t], !(n in InputEvent.prototype)) return !1;
                        return !0;
                    }()
                },
                config: {}
            };
        }).call(this);
    }).call(t);
    var e = t.Trix;
    (function() {
        (function() {
            e.BasicObject = function() {
                function t() {}
                var e, n, i;
                return t.proxyMethod = function(t) {
                    var i, o, r, s, a;
                    return r = n(t), i = r.name, s = r.toMethod, a = r.toProperty, o = r.optional, this.prototype[i] = function() {
                        var t, n;
                        return t = null != s ? o ? "function" == typeof this[s] ? this[s]() : void 0 : this[s]() : null != a ? this[a] : void 0, o ? (n = null != t ? t[i] : void 0, null != n ? e.call(n, t, arguments) : void 0) : (n = t[i], e.call(n, t, arguments));
                    };
                }, n = function(t) {
                    var e, n;
                    if (!(n = t.match(i))) throw new Error("can't parse @proxyMethod expression: " + t);
                    return e = {
                        name: n[4]
                    }, null != n[2] ? e.toMethod = n[1] : e.toProperty = n[1], null != n[3] && (e.optional = !0), e;
                }, e = Function.prototype.apply, i = /^(.+?)(\(\))?(\?)?\.(.+?)$/, t;
            }();
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Object = function(n) {
                function i() {
                    this.id = ++o;
                }
                var o;
                return t(i, n), o = 0, i.fromJSONString = function(t) {
                    return this.fromJSON(JSON.parse(t));
                }, i.prototype.hasSameConstructorAs = function(t) {
                    return this.constructor === (null != t ? t.constructor : void 0);
                }, i.prototype.isEqualTo = function(t) {
                    return this === t;
                }, i.prototype.inspect = function() {
                    var t, e, n;
                    return t = (function() {
                        var t, i, o;
                        i = null != (t = this.contentsForInspection()) ? t : {}, o = [];
                        for(e in i)n = i[e], o.push(e + "=" + n);
                        return o;
                    }).call(this), "#<" + this.constructor.name + ":" + this.id + (t.length ? " " + t.join(", ") : "") + ">";
                }, i.prototype.contentsForInspection = function() {}, i.prototype.toJSONString = function() {
                    return JSON.stringify(this);
                }, i.prototype.toUTF16String = function() {
                    return e.UTF16String.box(this);
                }, i.prototype.getCacheKey = function() {
                    return this.id.toString();
                }, i;
            }(e.BasicObject);
        }).call(this), (function() {
            e.extend = function(t) {
                var e, n;
                for(e in t)n = t[e], this[e] = n;
                return this;
            };
        }).call(this), (function() {
            e.extend({
                defer: function(t) {
                    return setTimeout(t, 1);
                }
            });
        }).call(this), (function() {
            var t, n;
            e.extend({
                normalizeSpaces: function(t) {
                    return t.replace(RegExp("" + e.ZERO_WIDTH_SPACE, "g"), "").replace(RegExp("" + e.NON_BREAKING_SPACE, "g"), " ");
                },
                normalizeNewlines: function(t) {
                    return t.replace(/\r\n/g, "\n");
                },
                breakableWhitespacePattern: RegExp("[^\\S" + e.NON_BREAKING_SPACE + "]"),
                squishBreakableWhitespace: function(t) {
                    return t.replace(RegExp("" + e.breakableWhitespacePattern.source, "g"), " ").replace(/\ {2,}/g, " ");
                },
                escapeHTML: function(t) {
                    var e;
                    return e = document.createElement("div"), e.textContent = t, e.innerHTML;
                },
                summarizeStringChange: function(t, i) {
                    var o, r, s, a;
                    return t = e.UTF16String.box(t), i = e.UTF16String.box(i), i.length < t.length ? (r = n(t, i), a = r[0], o = r[1]) : (s = n(i, t), o = s[0], a = s[1]), {
                        added: o,
                        removed: a
                    };
                }
            }), n = function(n, i) {
                var o, r, s, a, u;
                return n.isEqualTo(i) ? [
                    "",
                    ""
                ] : (r = t(n, i), a = r.utf16String.length, s = a ? (u = r.offset, r, o = n.codepoints.slice(0, u).concat(n.codepoints.slice(u + a)), t(i, e.UTF16String.fromCodepoints(o))) : t(i, n), [
                    r.utf16String.toString(),
                    s.utf16String.toString()
                ]);
            }, t = function(t, e) {
                var n, i, o;
                for(n = 0, i = t.length, o = e.length; i > n && t.charAt(n).isEqualTo(e.charAt(n));)n++;
                for(; i > n + 1 && t.charAt(i - 1).isEqualTo(e.charAt(o - 1));)i--, o--;
                return {
                    utf16String: t.slice(n, i),
                    offset: n
                };
            };
        }).call(this), (function() {
            e.extend({
                copyObject: function(t) {
                    var e, n, i;
                    null == t && (t = {}), n = {};
                    for(e in t)i = t[e], n[e] = i;
                    return n;
                },
                objectsAreEqual: function(t, e) {
                    var n, i;
                    if (null == t && (t = {}), null == e && (e = {}), Object.keys(t).length !== Object.keys(e).length) return !1;
                    for(n in t)if (i = t[n], i !== e[n]) return !1;
                    return !0;
                }
            });
        }).call(this), (function() {
            var t = [].slice;
            e.extend({
                arraysAreEqual: function(t, e) {
                    var n, i, o, r;
                    if (null == t && (t = []), null == e && (e = []), t.length !== e.length) return !1;
                    for(i = n = 0, o = t.length; o > n; i = ++n)if (r = t[i], r !== e[i]) return !1;
                    return !0;
                },
                arrayStartsWith: function(t, n) {
                    return null == t && (t = []), null == n && (n = []), e.arraysAreEqual(t.slice(0, n.length), n);
                },
                spliceArray: function() {
                    var e, n, i;
                    return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], i = n.slice(0), i.splice.apply(i, e), i;
                },
                summarizeArrayChange: function(t, e) {
                    var n, i, o, r, s, a, u, c, l, h, p;
                    for(null == t && (t = []), null == e && (e = []), n = [], h = [], o = new Set, r = 0, u = t.length; u > r; r++)p = t[r], o.add(p);
                    for(i = new Set, s = 0, c = e.length; c > s; s++)p = e[s], i.add(p), o.has(p) || n.push(p);
                    for(a = 0, l = t.length; l > a; a++)p = t[a], i.has(p) || h.push(p);
                    return {
                        added: n,
                        removed: h
                    };
                }
            });
        }).call(this), (function() {
            var t, n, i, o;
            t = null, n = null, o = null, i = null, e.extend({
                getAllAttributeNames: function() {
                    return null != t ? t : t = e.getTextAttributeNames().concat(e.getBlockAttributeNames());
                },
                getBlockConfig: function(t) {
                    return e.config.blockAttributes[t];
                },
                getBlockAttributeNames: function() {
                    return null != n ? n : n = Object.keys(e.config.blockAttributes);
                },
                getTextConfig: function(t) {
                    return e.config.textAttributes[t];
                },
                getTextAttributeNames: function() {
                    return null != o ? o : o = Object.keys(e.config.textAttributes);
                },
                getListAttributeNames: function() {
                    var t, n;
                    return null != i ? i : i = function() {
                        var i, o;
                        i = e.config.blockAttributes, o = [];
                        for(t in i)n = i[t].listAttribute, null != n && o.push(n);
                        return o;
                    }();
                }
            });
        }).call(this), (function() {
            var t, n, i, o, r, s = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = document.documentElement, n = null != (i = null != (o = null != (r = t.matchesSelector) ? r : t.webkitMatchesSelector) ? o : t.msMatchesSelector) ? i : t.mozMatchesSelector, e.extend({
                handleEvent: function(n, i) {
                    var o, r, s, a, u, c, l, h, p, d, f, g;
                    return h = null != i ? i : {}, c = h.onElement, u = h.matchingSelector, g = h.withCallback, a = h.inPhase, l = h.preventDefault, d = h.times, r = null != c ? c : t, p = u, o = g, f = "capturing" === a, s = function(t) {
                        var n;
                        return null != d && 0 === --d && s.destroy(), n = e.findClosestElementFromNode(t.target, {
                            matchingSelector: p
                        }), null != n && (null != g && g.call(n, t, n), l) ? t.preventDefault() : void 0;
                    }, s.destroy = function() {
                        return r.removeEventListener(n, s, f);
                    }, r.addEventListener(n, s, f), s;
                },
                handleEventOnce: function(t, n) {
                    return null == n && (n = {}), n.times = 1, e.handleEvent(t, n);
                },
                triggerEvent: function(n, i) {
                    var o, r, s, a, u, c, l;
                    return l = null != i ? i : {}, c = l.onElement, r = l.bubbles, s = l.cancelable, o = l.attributes, a = null != c ? c : t, r = r !== !1, s = s !== !1, u = document.createEvent("Events"), u.initEvent(n, r, s), null != o && e.extend.call(u, o), a.dispatchEvent(u);
                },
                elementMatchesSelector: function(t, e) {
                    return 1 === (null != t ? t.nodeType : void 0) ? n.call(t, e) : void 0;
                },
                findClosestElementFromNode: function(t, n) {
                    var i, o, r;
                    for(o = null != n ? n : {}, i = o.matchingSelector, r = o.untilNode; null != t && t.nodeType !== Node.ELEMENT_NODE;)t = t.parentNode;
                    if (null != t) {
                        if (null == i) return t;
                        if (t.closest && null == r) return t.closest(i);
                        for(; t && t !== r;){
                            if (e.elementMatchesSelector(t, i)) return t;
                            t = t.parentNode;
                        }
                    }
                },
                findInnerElement: function(t) {
                    for(; null != t ? t.firstElementChild : void 0;)t = t.firstElementChild;
                    return t;
                },
                innerElementIsActive: function(t) {
                    return document.activeElement !== t && e.elementContainsNode(t, document.activeElement);
                },
                elementContainsNode: function(t, e) {
                    if (t && e) for(; e;){
                        if (e === t) return !0;
                        e = e.parentNode;
                    }
                },
                findNodeFromContainerAndOffset: function(t, e) {
                    var n;
                    if (t) return t.nodeType === Node.TEXT_NODE ? t : 0 === e ? null != (n = t.firstChild) ? n : t : t.childNodes.item(e - 1);
                },
                findElementFromContainerAndOffset: function(t, n) {
                    var i;
                    return i = e.findNodeFromContainerAndOffset(t, n), e.findClosestElementFromNode(i);
                },
                findChildIndexOfNode: function(t) {
                    var e;
                    if (null != t ? t.parentNode : void 0) {
                        for(e = 0; t = t.previousSibling;)e++;
                        return e;
                    }
                },
                removeNode: function(t) {
                    var e;
                    return null != t && null != (e = t.parentNode) ? e.removeChild(t) : void 0;
                },
                walkTree: function(t, e) {
                    var n, i, o, r, s;
                    return o = null != e ? e : {}, i = o.onlyNodesOfType, r = o.usingFilter, n = o.expandEntityReferences, s = function() {
                        switch(i){
                            case "element":
                                return NodeFilter.SHOW_ELEMENT;
                            case "text":
                                return NodeFilter.SHOW_TEXT;
                            case "comment":
                                return NodeFilter.SHOW_COMMENT;
                            default:
                                return NodeFilter.SHOW_ALL;
                        }
                    }(), document.createTreeWalker(t, s, null != r ? r : null, n === !0);
                },
                tagName: function(t) {
                    var e;
                    return null != t && null != (e = t.tagName) ? e.toLowerCase() : void 0;
                },
                makeElement: function(t, e) {
                    var n, i, o, r, s, a, u, c, l, h;
                    if (null == e && (e = {}), "object" == typeof t ? (e = t, t = e.tagName) : e = {
                        attributes: e
                    }, i = document.createElement(t), null != e.editable && (null == e.attributes && (e.attributes = {}), e.attributes.contenteditable = e.editable), e.attributes) {
                        a = e.attributes;
                        for(r in a)h = a[r], i.setAttribute(r, h);
                    }
                    if (e.style) {
                        u = e.style;
                        for(r in u)h = u[r], i.style[r] = h;
                    }
                    if (e.data) {
                        c = e.data;
                        for(r in c)h = c[r], i.dataset[r] = h;
                    }
                    if (e.className) for(l = e.className.split(" "), o = 0, s = l.length; s > o; o++)n = l[o], i.classList.add(n);
                    return e.textContent && (i.textContent = e.textContent), i;
                },
                getBlockTagNames: function() {
                    var t, n;
                    return null != e.blockTagNames ? e.blockTagNames : e.blockTagNames = function() {
                        var i, o;
                        i = e.config.blockAttributes, o = [];
                        for(t in i)n = i[t].tagName, n && o.push(n);
                        return o;
                    }();
                },
                nodeIsBlockContainer: function(t) {
                    return e.nodeIsBlockStartComment(null != t ? t.firstChild : void 0);
                },
                nodeProbablyIsBlockContainer: function(t) {
                    var n, i;
                    return n = e.tagName(t), s.call(e.getBlockTagNames(), n) >= 0 && (i = e.tagName(t.firstChild), s.call(e.getBlockTagNames(), i) < 0);
                },
                nodeIsBlockStart: function(t, n) {
                    var i;
                    return i = (null != n ? n : {
                        strict: !0
                    }).strict, i ? e.nodeIsBlockStartComment(t) : e.nodeIsBlockStartComment(t) || !e.nodeIsBlockStartComment(t.firstChild) && e.nodeProbablyIsBlockContainer(t);
                },
                nodeIsBlockStartComment: function(t) {
                    return e.nodeIsCommentNode(t) && "block" === (null != t ? t.data : void 0);
                },
                nodeIsCommentNode: function(t) {
                    return (null != t ? t.nodeType : void 0) === Node.COMMENT_NODE;
                },
                nodeIsCursorTarget: function(t, n) {
                    var i;
                    return i = (null != n ? n : {}).name, t ? e.nodeIsTextNode(t) ? t.data === e.ZERO_WIDTH_SPACE ? i ? t.parentNode.dataset.trixCursorTarget === i : !0 : void 0 : e.nodeIsCursorTarget(t.firstChild) : void 0;
                },
                nodeIsAttachmentElement: function(t) {
                    return e.elementMatchesSelector(t, e.AttachmentView.attachmentSelector);
                },
                nodeIsEmptyTextNode: function(t) {
                    return e.nodeIsTextNode(t) && "" === (null != t ? t.data : void 0);
                },
                nodeIsTextNode: function(t) {
                    return (null != t ? t.nodeType : void 0) === Node.TEXT_NODE;
                }
            });
        }).call(this), (function() {
            var t, n, i, o, r;
            t = e.copyObject, o = e.objectsAreEqual, e.extend({
                normalizeRange: i = function(t) {
                    var e;
                    if (null != t) return Array.isArray(t) || (t = [
                        t,
                        t
                    ]), [
                        n(t[0]),
                        n(null != (e = t[1]) ? e : t[0])
                    ];
                },
                rangeIsCollapsed: function(t) {
                    var e, n, o;
                    if (null != t) return n = i(t), o = n[0], e = n[1], r(o, e);
                },
                rangesAreEqual: function(t, e) {
                    var n, o, s, a, u, c;
                    if (null != t && null != e) return s = i(t), o = s[0], n = s[1], a = i(e), c = a[0], u = a[1], r(o, c) && r(n, u);
                }
            }), n = function(e) {
                return "number" == typeof e ? e : t(e);
            }, r = function(t, e) {
                return "number" == typeof t ? t === e : o(t, e);
            };
        }).call(this), (function() {
            var t, n, i, o, r, s, a;
            e.registerElement = function(t, e) {
                var n, i;
                return null == e && (e = {}), t = t.toLowerCase(), e = a(e), i = s(e), (n = i.defaultCSS) && (delete i.defaultCSS, o(n, t)), r(t, i);
            }, o = function(t, e) {
                var n;
                return n = i(e), n.textContent = t.replace(/%t/g, e);
            }, i = function(e) {
                var n, i;
                return n = document.createElement("style"), n.setAttribute("type", "text/css"), n.setAttribute("data-tag-name", e.toLowerCase()), (i = t()) && n.setAttribute("nonce", i), document.head.insertBefore(n, document.head.firstChild), n;
            }, t = function() {
                var t;
                return (t = n("trix-csp-nonce") || n("csp-nonce")) ? t.getAttribute("content") : void 0;
            }, n = function(t) {
                return document.head.querySelector("meta[name=" + t + "]");
            }, s = function(t) {
                var e, n, i;
                n = {};
                for(e in t)i = t[e], n[e] = "function" == typeof i ? {
                    value: i
                } : i;
                return n;
            }, a = function() {
                var t;
                return t = function(t) {
                    var e, n, i, o, r;
                    for(e = {}, r = [
                        "initialize",
                        "connect",
                        "disconnect"
                    ], n = 0, o = r.length; o > n; n++)i = r[n], e[i] = t[i], delete t[i];
                    return e;
                }, window.customElements ? function(e) {
                    var n, i, o, r, s;
                    return s = t(e), o = s.initialize, n = s.connect, i = s.disconnect, o && (r = n, n = function() {
                        return this.initialized || (this.initialized = !0, o.call(this)), null != r ? r.call(this) : void 0;
                    }), n && (e.connectedCallback = n), i && (e.disconnectedCallback = i), e;
                } : function(e) {
                    var n, i, o, r;
                    return r = t(e), o = r.initialize, n = r.connect, i = r.disconnect, o && (e.createdCallback = o), n && (e.attachedCallback = n), i && (e.detachedCallback = i), e;
                };
            }(), r = function() {
                return window.customElements ? function(t, e) {
                    var n;
                    return n = function() {
                        return "object" == typeof Reflect ? Reflect.construct(HTMLElement, [], n) : HTMLElement.apply(this);
                    }, Object.setPrototypeOf(n.prototype, HTMLElement.prototype), Object.setPrototypeOf(n, HTMLElement), Object.defineProperties(n.prototype, e), window.customElements.define(t, n), n;
                } : function(t, e) {
                    var n, i;
                    return i = Object.create(HTMLElement.prototype, e), n = document.registerElement(t, {
                        prototype: i
                    }), Object.defineProperty(i, "constructor", {
                        value: n
                    }), n;
                };
            }();
        }).call(this), (function() {
            var t, n;
            e.extend({
                getDOMSelection: function() {
                    var t;
                    return t = window.getSelection(), t.rangeCount > 0 ? t : void 0;
                },
                getDOMRange: function() {
                    var n, i;
                    return (n = null != (i = e.getDOMSelection()) ? i.getRangeAt(0) : void 0) && !t(n) ? n : void 0;
                },
                setDOMRange: function(t) {
                    var n;
                    return n = window.getSelection(), n.removeAllRanges(), n.addRange(t), e.selectionChangeObserver.update();
                }
            }), t = function(t) {
                return n(t.startContainer) || n(t.endContainer);
            }, n = function(t) {
                return !Object.getPrototypeOf(t);
            };
        }).call(this), (function() {
            var t;
            t = {
                "application/x-trix-feature-detection": "test"
            }, e.extend({
                dataTransferIsPlainText: function(t) {
                    var e, n, i;
                    return i = t.getData("text/plain"), n = t.getData("text/html"), i && n ? (e = (new DOMParser).parseFromString(n, "text/html").body, e.textContent === i ? !e.querySelector("*") : void 0) : null != i ? i.length : void 0;
                },
                dataTransferIsWritable: function(e) {
                    var n, i;
                    if (null != (null != e ? e.setData : void 0)) {
                        for(n in t)if (i = t[n], !function() {
                            try {
                                return e.setData(n, i), e.getData(n) === i;
                            } catch (t) {}
                        }()) return;
                        return !0;
                    }
                },
                keyEventIsKeyboardCommand: function() {
                    return /Mac|^iP/.test(navigator.platform) ? function(t) {
                        return t.metaKey;
                    } : function(t) {
                        return t.ctrlKey;
                    };
                }()
            });
        }).call(this), (function() {}).call(this), (function() {
            var t, n = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var o in e)i.call(e, o) && (t[o] = e[o]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, i = {}.hasOwnProperty;
            t = e.arraysAreEqual, e.Hash = function(i) {
                function o(t) {
                    null == t && (t = {}), this.values = s(t), o.__super__.constructor.apply(this, arguments);
                }
                var r, s, a, u, c;
                return n(o, i), o.fromCommonAttributesOfObjects = function(t) {
                    var e, n, i, o, s, a;
                    if (null == t && (t = []), !t.length) return new this;
                    for(e = r(t[0]), i = e.getKeys(), a = t.slice(1), n = 0, o = a.length; o > n; n++)s = a[n], i = e.getKeysCommonToHash(r(s)), e = e.slice(i);
                    return e;
                }, o.box = function(t) {
                    return r(t);
                }, o.prototype.add = function(t, e) {
                    return this.merge(u(t, e));
                }, o.prototype.remove = function(t) {
                    return new e.Hash(s(this.values, t));
                }, o.prototype.get = function(t) {
                    return this.values[t];
                }, o.prototype.has = function(t) {
                    return t in this.values;
                }, o.prototype.merge = function(t) {
                    return new e.Hash(a(this.values, c(t)));
                }, o.prototype.slice = function(t) {
                    var n, i, o, r;
                    for(r = {}, n = 0, o = t.length; o > n; n++)i = t[n], this.has(i) && (r[i] = this.values[i]);
                    return new e.Hash(r);
                }, o.prototype.getKeys = function() {
                    return Object.keys(this.values);
                }, o.prototype.getKeysCommonToHash = function(t) {
                    var e, n, i, o, s;
                    for(t = r(t), o = this.getKeys(), s = [], e = 0, i = o.length; i > e; e++)n = o[e], this.values[n] === t.values[n] && s.push(n);
                    return s;
                }, o.prototype.isEqualTo = function(e) {
                    return t(this.toArray(), r(e).toArray());
                }, o.prototype.isEmpty = function() {
                    return 0 === this.getKeys().length;
                }, o.prototype.toArray = function() {
                    var t, e, n;
                    return (null != this.array ? this.array : this.array = (function() {
                        var i;
                        e = [], i = this.values;
                        for(t in i)n = i[t], e.push(t, n);
                        return e;
                    }).call(this)).slice(0);
                }, o.prototype.toObject = function() {
                    return s(this.values);
                }, o.prototype.toJSON = function() {
                    return this.toObject();
                }, o.prototype.contentsForInspection = function() {
                    return {
                        values: JSON.stringify(this.values)
                    };
                }, u = function(t, e) {
                    var n;
                    return n = {}, n[t] = e, n;
                }, a = function(t, e) {
                    var n, i, o;
                    i = s(t);
                    for(n in e)o = e[n], i[n] = o;
                    return i;
                }, s = function(t, e) {
                    var n, i, o, r, s;
                    for(r = {}, s = Object.keys(t).sort(), n = 0, o = s.length; o > n; n++)i = s[n], i !== e && (r[i] = t[i]);
                    return r;
                }, r = function(t) {
                    return t instanceof e.Hash ? t : new e.Hash(t);
                }, c = function(t) {
                    return t instanceof e.Hash ? t.values : t;
                }, o;
            }(e.Object);
        }).call(this), (function() {
            e.ObjectGroup = function() {
                function t(t, e) {
                    var n, i;
                    this.objects = null != t ? t : [], i = e.depth, n = e.asTree, n && (this.depth = i, this.objects = this.constructor.groupObjects(this.objects, {
                        asTree: n,
                        depth: this.depth + 1
                    }));
                }
                return t.groupObjects = function(t, e) {
                    var n, i, o, r, s, a, u, c, l;
                    for(null == t && (t = []), l = null != e ? e : {}, o = l.depth, n = l.asTree, n && null == o && (o = 0), c = [], s = 0, a = t.length; a > s; s++){
                        if (u = t[s], r) {
                            if (("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) && ("function" == typeof (i = r[r.length - 1]).canBeGroupedWith ? i.canBeGroupedWith(u, o) : void 0)) {
                                r.push(u);
                                continue;
                            }
                            c.push(new this(r, {
                                depth: o,
                                asTree: n
                            })), r = null;
                        }
                        ("function" == typeof u.canBeGrouped ? u.canBeGrouped(o) : void 0) ? r = [
                            u
                        ] : c.push(u);
                    }
                    return r && c.push(new this(r, {
                        depth: o,
                        asTree: n
                    })), c;
                }, t.prototype.getObjects = function() {
                    return this.objects;
                }, t.prototype.getDepth = function() {
                    return this.depth;
                }, t.prototype.getCacheKey = function() {
                    var t, e, n, i, o;
                    for(e = [
                        "objectGroup"
                    ], o = this.getObjects(), t = 0, n = o.length; n > t; t++)i = o[t], e.push(i.getCacheKey());
                    return e.join("/");
                }, t;
            }();
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.ObjectMap = function(e) {
                function n(t) {
                    var e, n, i, o, r;
                    for(null == t && (t = []), this.objects = {}, i = 0, o = t.length; o > i; i++)r = t[i], n = JSON.stringify(r), null == (e = this.objects)[n] && (e[n] = r);
                }
                return t(n, e), n.prototype.find = function(t) {
                    var e;
                    return e = JSON.stringify(t), this.objects[e];
                }, n;
            }(e.BasicObject);
        }).call(this), (function() {
            e.ElementStore = function() {
                function t(t) {
                    this.reset(t);
                }
                var e;
                return t.prototype.add = function(t) {
                    var n;
                    return n = e(t), this.elements[n] = t;
                }, t.prototype.remove = function(t) {
                    var n, i;
                    return n = e(t), (i = this.elements[n]) ? (delete this.elements[n], i) : void 0;
                }, t.prototype.reset = function(t) {
                    var e, n, i;
                    for(null == t && (t = []), this.elements = {}, n = 0, i = t.length; i > n; n++)e = t[n], this.add(e);
                    return t;
                }, e = function(t) {
                    return t.dataset.trixStoreKey;
                }, t;
            }();
        }).call(this), (function() {}).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Operation = function(e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments);
                }
                return t(n, e), n.prototype.isPerforming = function() {
                    return this.performing === !0;
                }, n.prototype.hasPerformed = function() {
                    return this.performed === !0;
                }, n.prototype.hasSucceeded = function() {
                    return this.performed && this.succeeded;
                }, n.prototype.hasFailed = function() {
                    return this.performed && !this.succeeded;
                }, n.prototype.getPromise = function() {
                    return null != this.promise ? this.promise : this.promise = new Promise(function(t) {
                        return function(e, n) {
                            return t.performing = !0, t.perform(function(i, o) {
                                return t.succeeded = i, t.performing = !1, t.performed = !0, t.succeeded ? e(o) : n(o);
                            });
                        };
                    }(this));
                }, n.prototype.perform = function(t) {
                    return t(!1);
                }, n.prototype.release = function() {
                    var t;
                    return null != (t = this.promise) && "function" == typeof t.cancel && t.cancel(), this.promise = null, this.performing = null, this.performed = null, this.succeeded = null;
                }, n.proxyMethod("getPromise().then"), n.proxyMethod("getPromise().catch"), n;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r, s = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)a.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, a = {}.hasOwnProperty;
            e.UTF16String = function(t) {
                function e(t, e) {
                    this.ucs2String = t, this.codepoints = e, this.length = this.codepoints.length, this.ucs2Length = this.ucs2String.length;
                }
                return s(e, t), e.box = function(t) {
                    return null == t && (t = ""), t instanceof this ? t : this.fromUCS2String(null != t ? t.toString() : void 0);
                }, e.fromUCS2String = function(t) {
                    return new this(t, o(t));
                }, e.fromCodepoints = function(t) {
                    return new this(r(t), t);
                }, e.prototype.offsetToUCS2Offset = function(t) {
                    return r(this.codepoints.slice(0, Math.max(0, t))).length;
                }, e.prototype.offsetFromUCS2Offset = function(t) {
                    return o(this.ucs2String.slice(0, Math.max(0, t))).length;
                }, e.prototype.slice = function() {
                    var t;
                    return this.constructor.fromCodepoints((t = this.codepoints).slice.apply(t, arguments));
                }, e.prototype.charAt = function(t) {
                    return this.slice(t, t + 1);
                }, e.prototype.isEqualTo = function(t) {
                    return this.constructor.box(t).ucs2String === this.ucs2String;
                }, e.prototype.toJSON = function() {
                    return this.ucs2String;
                }, e.prototype.getCacheKey = function() {
                    return this.ucs2String;
                }, e.prototype.toString = function() {
                    return this.ucs2String;
                }, e;
            }(e.BasicObject), t = 1 === ("function" == typeof Array.from ? Array.from("\ud83d\udc7c").length : void 0), n = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), i = " \ud83d\udc7c" === ("function" == typeof String.fromCodePoint ? String.fromCodePoint(32, 128124) : void 0), o = t && n ? function(t) {
                return Array.from(t).map(function(t) {
                    return t.codePointAt(0);
                });
            } : function(t) {
                var e, n, i, o, r;
                for(o = [], e = 0, i = t.length; i > e;)r = t.charCodeAt(e++), r >= 55296 && 56319 >= r && i > e && (n = t.charCodeAt(e++), 56320 === (64512 & n) ? r = ((1023 & r) << 10) + (1023 & n) + 65536 : e--), o.push(r);
                return o;
            }, r = i ? function(t) {
                return String.fromCodePoint.apply(String, t);
            } : function(t) {
                var e, n, i;
                return e = function() {
                    var e, o, r;
                    for(r = [], e = 0, o = t.length; o > e; e++)i = t[e], n = "", i > 65535 && (i -= 65536, n += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), r.push(n + String.fromCharCode(i));
                    return r;
                }(), e.join("");
            };
        }).call(this), (function() {}).call(this), (function() {}).call(this), (function() {
            e.config.lang = {
                attachFiles: "Attach Files",
                bold: "Bold",
                bullets: "Bullets",
                "byte": "Byte",
                bytes: "Bytes",
                captionPlaceholder: "Add a caption…",
                code: "Code",
                heading1: "Heading",
                indent: "Increase Level",
                italic: "Italic",
                link: "Link",
                numbers: "Numbers",
                outdent: "Decrease Level",
                quote: "Quote",
                redo: "Redo",
                remove: "Remove",
                strike: "Strikethrough",
                undo: "Undo",
                unlink: "Unlink",
                url: "URL",
                urlPlaceholder: "Enter a URL…",
                GB: "GB",
                KB: "KB",
                MB: "MB",
                PB: "PB",
                TB: "TB"
            };
        }).call(this), (function() {
            e.config.css = {
                attachment: "attachment",
                attachmentCaption: "attachment__caption",
                attachmentCaptionEditor: "attachment__caption-editor",
                attachmentMetadata: "attachment__metadata",
                attachmentMetadataContainer: "attachment__metadata-container",
                attachmentName: "attachment__name",
                attachmentProgress: "attachment__progress",
                attachmentSize: "attachment__size",
                attachmentToolbar: "attachment__toolbar",
                attachmentGallery: "attachment-gallery"
            };
        }).call(this), (function() {
            var t;
            e.config.blockAttributes = t = {
                "default": {
                    tagName: "div",
                    parse: !1
                },
                quote: {
                    tagName: "blockquote",
                    nestable: !0
                },
                heading1: {
                    tagName: "h1",
                    terminal: !0,
                    breakOnReturn: !0,
                    group: !1
                },
                code: {
                    tagName: "pre",
                    terminal: !0,
                    text: {
                        plaintext: !0
                    }
                },
                bulletList: {
                    tagName: "ul",
                    parse: !1
                },
                bullet: {
                    tagName: "li",
                    listAttribute: "bulletList",
                    group: !1,
                    nestable: !0,
                    test: function(n) {
                        return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
                    }
                },
                numberList: {
                    tagName: "ol",
                    parse: !1
                },
                number: {
                    tagName: "li",
                    listAttribute: "numberList",
                    group: !1,
                    nestable: !0,
                    test: function(n) {
                        return e.tagName(n.parentNode) === t[this.listAttribute].tagName;
                    }
                },
                attachmentGallery: {
                    tagName: "div",
                    exclusive: !0,
                    terminal: !0,
                    parse: !1,
                    group: !1
                }
            };
        }).call(this), (function() {
            var t, n;
            t = e.config.lang, n = [
                t.bytes,
                t.KB,
                t.MB,
                t.GB,
                t.TB,
                t.PB
            ], e.config.fileSize = {
                prefix: "IEC",
                precision: 2,
                formatter: function(e) {
                    var i, o, r, s, a;
                    switch(e){
                        case 0:
                            return "0 " + t.bytes;
                        case 1:
                            return "1 " + t.byte;
                        default:
                            return i = (function() {
                                switch(this.prefix){
                                    case "SI":
                                        return 1e3;
                                    case "IEC":
                                        return 1024;
                                }
                            }).call(this), o = Math.floor(Math.log(e) / Math.log(i)), r = e / Math.pow(i, o), s = r.toFixed(this.precision), a = s.replace(/0*$/, "").replace(/\.$/, ""), a + " " + n[o];
                    }
                }
            };
        }).call(this), (function() {
            e.config.textAttributes = {
                bold: {
                    tagName: "strong",
                    inheritable: !0,
                    parser: function(t) {
                        var e;
                        return e = window.getComputedStyle(t), "bold" === e.fontWeight || e.fontWeight >= 600;
                    }
                },
                italic: {
                    tagName: "em",
                    inheritable: !0,
                    parser: function(t) {
                        var e;
                        return e = window.getComputedStyle(t), "italic" === e.fontStyle;
                    }
                },
                href: {
                    groupTagName: "a",
                    parser: function(t) {
                        var n, i, o;
                        return n = e.AttachmentView.attachmentSelector, o = "a:not(" + n + ")", (i = e.findClosestElementFromNode(t, {
                            matchingSelector: o
                        })) ? i.getAttribute("href") : void 0;
                    }
                },
                strike: {
                    tagName: "del",
                    inheritable: !0
                },
                frozen: {
                    style: {
                        backgroundColor: "highlight"
                    }
                }
            };
        }).call(this), (function() {
            var t, n, i, o, r;
            r = "[data-trix-serialize=false]", o = [
                "contenteditable",
                "data-trix-id",
                "data-trix-store-key",
                "data-trix-mutable",
                "data-trix-placeholder",
                "tabindex"
            ], n = "data-trix-serialized-attributes", i = "[" + n + "]", t = new RegExp("<!--block-->", "g"), e.extend({
                serializers: {
                    "application/json": function(t) {
                        var n;
                        if (t instanceof e.Document) n = t;
                        else {
                            if (!(t instanceof HTMLElement)) throw new Error("unserializable object");
                            n = e.Document.fromHTML(t.innerHTML);
                        }
                        return n.toSerializableDocument().toJSONString();
                    },
                    "text/html": function(s) {
                        var a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
                        if (s instanceof e.Document) l = e.DocumentView.render(s);
                        else {
                            if (!(s instanceof HTMLElement)) throw new Error("unserializable object");
                            l = s.cloneNode(!0);
                        }
                        for(A = l.querySelectorAll(r), h = 0, g = A.length; g > h; h++)c = A[h], e.removeNode(c);
                        for(p = 0, m = o.length; m > p; p++)for(a = o[p], C = l.querySelectorAll("[" + a + "]"), d = 0, v = C.length; v > d; d++)c = C[d], c.removeAttribute(a);
                        for(x = l.querySelectorAll(i), f = 0, y = x.length; y > f; f++){
                            c = x[f];
                            try {
                                u = JSON.parse(c.getAttribute(n)), c.removeAttribute(n);
                                for(b in u)w = u[b], c.setAttribute(b, w);
                            } catch (E) {}
                        }
                        return l.innerHTML.replace(t, "");
                    }
                },
                deserializers: {
                    "application/json": function(t) {
                        return e.Document.fromJSONString(t);
                    },
                    "text/html": function(t) {
                        return e.Document.fromHTML(t);
                    }
                },
                serializeToContentType: function(t, n) {
                    var i;
                    if (i = e.serializers[n]) return i(t);
                    throw new Error("unknown content type: " + n);
                },
                deserializeFromContentType: function(t, n) {
                    var i;
                    if (i = e.deserializers[n]) return i(t);
                    throw new Error("unknown content type: " + n);
                }
            });
        }).call(this), (function() {
            var t;
            t = e.config.lang, e.config.toolbar = {
                getDefaultHTML: function() {
                    return '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="' + t.bold + '" tabindex="-1">' + t.bold + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="' + t.italic + '" tabindex="-1">' + t.italic + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-strike" data-trix-attribute="strike" title="' + t.strike + '" tabindex="-1">' + t.strike + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-link" data-trix-attribute="href" data-trix-action="link" data-trix-key="k" title="' + t.link + '" tabindex="-1">' + t.link + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--block-tools" data-trix-button-group="block-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-heading-1" data-trix-attribute="heading1" title="' + t.heading1 + '" tabindex="-1">' + t.heading1 + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-quote" data-trix-attribute="quote" title="' + t.quote + '" tabindex="-1">' + t.quote + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="' + t.code + '" tabindex="-1">' + t.code + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="' + t.bullets + '" tabindex="-1">' + t.bullets + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="' + t.numbers + '" tabindex="-1">' + t.numbers + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-decrease-nesting-level" data-trix-action="decreaseNestingLevel" title="' + t.outdent + '" tabindex="-1">' + t.outdent + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-increase-nesting-level" data-trix-action="increaseNestingLevel" title="' + t.indent + '" tabindex="-1">' + t.indent + '</button>\n  </span>\n\n  <span class="trix-button-group trix-button-group--file-tools" data-trix-button-group="file-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-attach" data-trix-action="attachFiles" title="' + t.attachFiles + '" tabindex="-1">' + t.attachFiles + '</button>\n  </span>\n\n  <span class="trix-button-group-spacer"></span>\n\n  <span class="trix-button-group trix-button-group--history-tools" data-trix-button-group="history-tools">\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-undo" data-trix-action="undo" data-trix-key="z" title="' + t.undo + '" tabindex="-1">' + t.undo + '</button>\n    <button type="button" class="trix-button trix-button--icon trix-button--icon-redo" data-trix-action="redo" data-trix-key="shift+z" title="' + t.redo + '" tabindex="-1">' + t.redo + '</button>\n  </span>\n</div>\n\n<div class="trix-dialogs" data-trix-dialogs>\n  <div class="trix-dialog trix-dialog--link" data-trix-dialog="href" data-trix-dialog-attribute="href">\n    <div class="trix-dialog__link-fields">\n      <input type="url" name="href" class="trix-input trix-input--dialog" placeholder="' + t.urlPlaceholder + '" aria-label="' + t.url + '" required data-trix-input>\n      <div class="trix-button-group">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.link + '" data-trix-method="setAttribute">\n        <input type="button" class="trix-button trix-button--dialog" value="' + t.unlink + '" data-trix-method="removeAttribute">\n      </div>\n    </div>\n  </div>\n</div>';
                }
            };
        }).call(this), (function() {
            e.config.undoInterval = 5e3;
        }).call(this), (function() {
            e.config.attachments = {
                preview: {
                    presentation: "gallery",
                    caption: {
                        name: !0,
                        size: !0
                    }
                },
                file: {
                    caption: {
                        size: !0
                    }
                }
            };
        }).call(this), (function() {
            e.config.keyNames = {
                8: "backspace",
                9: "tab",
                13: "return",
                27: "escape",
                37: "left",
                39: "right",
                46: "delete",
                68: "d",
                72: "h",
                79: "o"
            };
        }).call(this), (function() {
            e.config.input = {
                level2Enabled: !0,
                getLevel: function() {
                    return this.level2Enabled && e.browser.supportsInputEvents ? 2 : 0;
                },
                pickFiles: function(t) {
                    var n;
                    return n = e.makeElement("input", {
                        type: "file",
                        multiple: !0,
                        hidden: !0,
                        id: this.fileInputId
                    }), n.addEventListener("change", function() {
                        return t(n.files), e.removeNode(n);
                    }), e.removeNode(document.getElementById(this.fileInputId)), document.body.appendChild(n), n.click();
                },
                fileInputId: "trix-file-input-" + Date.now().toString(16)
            };
        }).call(this), (function() {}).call(this), (function() {
            e.registerElement("trix-toolbar", {
                defaultCSS: "%t {\n  display: block;\n}\n\n%t {\n  white-space: nowrap;\n}\n\n%t [data-trix-dialog] {\n  display: none;\n}\n\n%t [data-trix-dialog][data-trix-active] {\n  display: block;\n}\n\n%t [data-trix-dialog] [data-trix-validate]:invalid {\n  background-color: #ffdddd;\n}",
                initialize: function() {
                    return "" === this.innerHTML ? this.innerHTML = e.config.toolbar.getDefaultHTML() : void 0;
                }
            });
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty, i = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            e.ObjectView = function(n) {
                function o(t, e) {
                    this.object = t, this.options = null != e ? e : {}, this.childViews = [], this.rootView = this;
                }
                return t(o, n), o.prototype.getNodes = function() {
                    var t, e, n, i, o;
                    for(null == this.nodes && (this.nodes = this.createNodes()), i = this.nodes, o = [], t = 0, e = i.length; e > t; t++)n = i[t], o.push(n.cloneNode(!0));
                    return o;
                }, o.prototype.invalidate = function() {
                    var t;
                    return this.nodes = null, this.childViews = [], null != (t = this.parentView) ? t.invalidate() : void 0;
                }, o.prototype.invalidateViewForObject = function(t) {
                    var e;
                    return null != (e = this.findViewForObject(t)) ? e.invalidate() : void 0;
                }, o.prototype.findOrCreateCachedChildView = function(t, e) {
                    var n;
                    return (n = this.getCachedViewForObject(e)) ? this.recordChildView(n) : (n = this.createChildView.apply(this, arguments), this.cacheViewForObject(n, e)), n;
                }, o.prototype.createChildView = function(t, n, i) {
                    var o;
                    return null == i && (i = {}), n instanceof e.ObjectGroup && (i.viewClass = t, t = e.ObjectGroupView), o = new t(n, i), this.recordChildView(o);
                }, o.prototype.recordChildView = function(t) {
                    return t.parentView = this, t.rootView = this.rootView, this.childViews.push(t), t;
                }, o.prototype.getAllChildViews = function() {
                    var t, e, n, i, o;
                    for(o = [], i = this.childViews, e = 0, n = i.length; n > e; e++)t = i[e], o.push(t), o = o.concat(t.getAllChildViews());
                    return o;
                }, o.prototype.findElement = function() {
                    return this.findElementForObject(this.object);
                }, o.prototype.findElementForObject = function(t) {
                    var e;
                    return (e = null != t ? t.id : void 0) ? this.rootView.element.querySelector("[data-trix-id='" + e + "']") : void 0;
                }, o.prototype.findViewForObject = function(t) {
                    var e, n, i, o;
                    for(i = this.getAllChildViews(), e = 0, n = i.length; n > e; e++)if (o = i[e], o.object === t) return o;
                }, o.prototype.getViewCache = function() {
                    return this.rootView !== this ? this.rootView.getViewCache() : this.isViewCachingEnabled() ? null != this.viewCache ? this.viewCache : this.viewCache = {} : void 0;
                }, o.prototype.isViewCachingEnabled = function() {
                    return this.shouldCacheViews !== !1;
                }, o.prototype.enableViewCaching = function() {
                    return this.shouldCacheViews = !0;
                }, o.prototype.disableViewCaching = function() {
                    return this.shouldCacheViews = !1;
                }, o.prototype.getCachedViewForObject = function(t) {
                    var e;
                    return null != (e = this.getViewCache()) ? e[t.getCacheKey()] : void 0;
                }, o.prototype.cacheViewForObject = function(t, e) {
                    var n;
                    return null != (n = this.getViewCache()) ? n[e.getCacheKey()] = t : void 0;
                }, o.prototype.garbageCollectCachedViews = function() {
                    var t, e, n, o, r, s;
                    if (t = this.getViewCache()) {
                        s = this.getAllChildViews().concat(this), n = function() {
                            var t, e, n;
                            for(n = [], t = 0, e = s.length; e > t; t++)r = s[t], n.push(r.object.getCacheKey());
                            return n;
                        }(), o = [];
                        for(e in t)i.call(n, e) < 0 && o.push(delete t[e]);
                        return o;
                    }
                }, o;
            }(e.BasicObject);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.ObjectGroupView = function(e) {
                function n() {
                    n.__super__.constructor.apply(this, arguments), this.objectGroup = this.object, this.viewClass = this.options.viewClass, delete this.options.viewClass;
                }
                return t(n, e), n.prototype.getChildViews = function() {
                    var t, e, n, i;
                    if (!this.childViews.length) for(i = this.objectGroup.getObjects(), t = 0, e = i.length; e > t; t++)n = i[t], this.findOrCreateCachedChildView(this.viewClass, n, this.options);
                    return this.childViews;
                }, n.prototype.createNodes = function() {
                    var t, e, n, i, o, r, s, a, u;
                    for(t = this.createContainerElement(), s = this.getChildViews(), e = 0, i = s.length; i > e; e++)for(u = s[e], a = u.getNodes(), n = 0, o = a.length; o > n; n++)r = a[n], t.appendChild(r);
                    return [
                        t
                    ];
                }, n.prototype.createContainerElement = function(t) {
                    return null == t && (t = this.objectGroup.getDepth()), this.getChildViews()[0].createContainerElement(t);
                }, n;
            }(e.ObjectView);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Controller = function(e) {
                function n() {
                    return n.__super__.constructor.apply(this, arguments);
                }
                return t(n, e), n;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r, s, a = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, u = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)c.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, c = {}.hasOwnProperty, l = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = e.findClosestElementFromNode, i = e.nodeIsEmptyTextNode, n = e.nodeIsBlockStartComment, o = e.normalizeSpaces, r = e.summarizeStringChange, s = e.tagName, e.MutationObserver = function(e) {
                function c(t) {
                    this.element = t, this.didMutate = a(this.didMutate, this), this.observer = new window.MutationObserver(this.didMutate), this.start();
                }
                var h, p, d, f;
                return u(c, e), p = "data-trix-mutable", d = "[" + p + "]", f = {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    subtree: !0
                }, c.prototype.start = function() {
                    return this.reset(), this.observer.observe(this.element, f);
                }, c.prototype.stop = function() {
                    return this.observer.disconnect();
                }, c.prototype.didMutate = function(t) {
                    var e, n;
                    return (e = this.mutations).push.apply(e, this.findSignificantMutations(t)), this.mutations.length ? (null != (n = this.delegate) && "function" == typeof n.elementDidMutate && n.elementDidMutate(this.getMutationSummary()), this.reset()) : void 0;
                }, c.prototype.reset = function() {
                    return this.mutations = [];
                }, c.prototype.findSignificantMutations = function(t) {
                    var e, n, i, o;
                    for(o = [], e = 0, n = t.length; n > e; e++)i = t[e], this.mutationIsSignificant(i) && o.push(i);
                    return o;
                }, c.prototype.mutationIsSignificant = function(t) {
                    var e, n, i, o;
                    if (this.nodeIsMutable(t.target)) return !1;
                    for(o = this.nodesModifiedByMutation(t), e = 0, n = o.length; n > e; e++)if (i = o[e], this.nodeIsSignificant(i)) return !0;
                    return !1;
                }, c.prototype.nodeIsSignificant = function(t) {
                    return t !== this.element && !this.nodeIsMutable(t) && !i(t);
                }, c.prototype.nodeIsMutable = function(e) {
                    return t(e, {
                        matchingSelector: d
                    });
                }, c.prototype.nodesModifiedByMutation = function(t) {
                    var e;
                    switch(e = [], t.type){
                        case "attributes":
                            t.attributeName !== p && e.push(t.target);
                            break;
                        case "characterData":
                            e.push(t.target.parentNode), e.push(t.target);
                            break;
                        case "childList":
                            e.push.apply(e, t.addedNodes), e.push.apply(e, t.removedNodes);
                    }
                    return e;
                }, c.prototype.getMutationSummary = function() {
                    return this.getTextMutationSummary();
                }, c.prototype.getTextMutationSummary = function() {
                    var t, e, n, i, o, r, s, a, u, c, h;
                    for(a = this.getTextChangesFromCharacterData(), n = a.additions, o = a.deletions, h = this.getTextChangesFromChildList(), u = h.additions, r = 0, s = u.length; s > r; r++)e = u[r], l.call(n, e) < 0 && n.push(e);
                    return o.push.apply(o, h.deletions), c = {}, (t = n.join("")) && (c.textAdded = t), (i = o.join("")) && (c.textDeleted = i), c;
                }, c.prototype.getMutationsByType = function(t) {
                    var e, n, i, o, r;
                    for(o = this.mutations, r = [], e = 0, n = o.length; n > e; e++)i = o[e], i.type === t && r.push(i);
                    return r;
                }, c.prototype.getTextChangesFromChildList = function() {
                    var t, e, i, r, s, a, u, c, l, p, d;
                    for(t = [], u = [], a = this.getMutationsByType("childList"), e = 0, r = a.length; r > e; e++)s = a[e], t.push.apply(t, s.addedNodes), u.push.apply(u, s.removedNodes);
                    return c = 0 === t.length && 1 === u.length && n(u[0]), c ? (p = [], d = [
                        "\n"
                    ]) : (p = h(t), d = h(u)), {
                        additions: function() {
                            var t, e, n;
                            for(n = [], i = t = 0, e = p.length; e > t; i = ++t)l = p[i], l !== d[i] && n.push(o(l));
                            return n;
                        }(),
                        deletions: function() {
                            var t, e, n;
                            for(n = [], i = t = 0, e = d.length; e > t; i = ++t)l = d[i], l !== p[i] && n.push(o(l));
                            return n;
                        }()
                    };
                }, c.prototype.getTextChangesFromCharacterData = function() {
                    var t, e, n, i, s, a, u, c;
                    return e = this.getMutationsByType("characterData"), e.length && (c = e[0], n = e[e.length - 1], s = o(c.oldValue), i = o(n.target.data), a = r(s, i), t = a.added, u = a.removed), {
                        additions: t ? [
                            t
                        ] : [],
                        deletions: u ? [
                            u
                        ] : []
                    };
                }, h = function(t) {
                    var e, n, i, o;
                    for(null == t && (t = []), o = [], e = 0, n = t.length; n > e; e++)switch(i = t[e], i.nodeType){
                        case Node.TEXT_NODE:
                            o.push(i.data);
                            break;
                        case Node.ELEMENT_NODE:
                            "br" === s(i) ? o.push("\n") : o.push.apply(o, h(i.childNodes));
                    }
                    return o;
                }, c;
            }(e.BasicObject);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.FileVerificationOperation = function(e) {
                function n(t) {
                    this.file = t;
                }
                return t(n, e), n.prototype.perform = function(t) {
                    var e;
                    return e = new FileReader, e.onerror = function() {
                        return t(!1);
                    }, e.onload = function(n) {
                        return function() {
                            e.onerror = null;
                            try {
                                e.abort();
                            } catch (i) {}
                            return t(!0, n.file);
                        };
                    }(this), e.readAsArrayBuffer(this.file);
                }, n;
            }(e.Operation);
        }).call(this), (function() {
            var t, n, i = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)o.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, o = {}.hasOwnProperty;
            t = e.handleEvent, n = e.innerElementIsActive, e.InputController = function(o) {
                function r(n) {
                    var i;
                    this.element = n, this.mutationObserver = new e.MutationObserver(this.element), this.mutationObserver.delegate = this;
                    for(i in this.events)t(i, {
                        onElement: this.element,
                        withCallback: this.handlerFor(i)
                    });
                }
                return i(r, o), r.prototype.events = {}, r.prototype.elementDidMutate = function() {}, r.prototype.editorWillSyncDocumentView = function() {
                    return this.mutationObserver.stop();
                }, r.prototype.editorDidSyncDocumentView = function() {
                    return this.mutationObserver.start();
                }, r.prototype.requestRender = function() {
                    var t;
                    return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestRender ? t.inputControllerDidRequestRender() : void 0;
                }, r.prototype.requestReparse = function() {
                    var t;
                    return null != (t = this.delegate) && "function" == typeof t.inputControllerDidRequestReparse && t.inputControllerDidRequestReparse(), this.requestRender();
                }, r.prototype.attachFiles = function(t) {
                    var n, i;
                    return i = function() {
                        var i, o, r;
                        for(r = [], i = 0, o = t.length; o > i; i++)n = t[i], r.push(new e.FileVerificationOperation(n));
                        return r;
                    }(), Promise.all(i).then(function(t) {
                        return function(e) {
                            return t.handleInput(function() {
                                var t, n;
                                return null != (t = this.delegate) && t.inputControllerWillAttachFiles(), null != (n = this.responder) && n.insertFiles(e), this.requestRender();
                            });
                        };
                    }(this));
                }, r.prototype.handlerFor = function(t) {
                    return function(e) {
                        return function(i) {
                            return i.defaultPrevented ? void 0 : e.handleInput(function() {
                                return n(this.element) ? void 0 : (this.eventName = t, this.events[t].call(this, i));
                            });
                        };
                    }(this);
                }, r.prototype.handleInput = function(t) {
                    var e, n;
                    try {
                        return null != (e = this.delegate) && e.inputControllerWillHandleInput(), t.call(this);
                    } finally{
                        null != (n = this.delegate) && n.inputControllerDidHandleInput();
                    }
                }, r;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l, h, p, d, f = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)g.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, g = {}.hasOwnProperty, m = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            c = e.makeElement, l = e.objectsAreEqual, d = e.tagName, n = e.browser, a = e.keyEventIsKeyboardCommand, o = e.dataTransferIsWritable, i = e.dataTransferIsPlainText, u = e.config.keyNames, e.Level0InputController = function(n) {
                function s() {
                    s.__super__.constructor.apply(this, arguments), this.resetInputSummary();
                }
                var d;
                return f(s, n), d = 0, s.prototype.setInputSummary = function(t) {
                    var e, n;
                    null == t && (t = {}), this.inputSummary.eventName = this.eventName;
                    for(e in t)n = t[e], this.inputSummary[e] = n;
                    return this.inputSummary;
                }, s.prototype.resetInputSummary = function() {
                    return this.inputSummary = {};
                }, s.prototype.reset = function() {
                    return this.resetInputSummary(), e.selectionChangeObserver.reset();
                }, s.prototype.elementDidMutate = function(t) {
                    var e;
                    return this.isComposing() ? null != (e = this.delegate) && "function" == typeof e.inputControllerDidAllowUnhandledInput ? e.inputControllerDidAllowUnhandledInput() : void 0 : this.handleInput(function() {
                        return this.mutationIsSignificant(t) && (this.mutationIsExpected(t) ? this.requestRender() : this.requestReparse()), this.reset();
                    });
                }, s.prototype.mutationIsExpected = function(t) {
                    var e, n, i, o, r, s, a, u, c, l;
                    return a = t.textAdded, u = t.textDeleted, this.inputSummary.preferDocument ? !0 : (e = null != a ? a === this.inputSummary.textAdded : !this.inputSummary.textAdded, n = null != u ? this.inputSummary.didDelete : !this.inputSummary.didDelete, c = ("\n" === a || " \n" === a) && !e, l = "\n" === u && !n, s = c && !l || l && !c, s && (o = this.getSelectedRange()) && (i = c ? a.replace(/\n$/, "").length || -1 : (null != a ? a.length : void 0) || 1, null != (r = this.responder) ? r.positionIsBlockBreak(o[1] + i) : void 0) ? !0 : e && n);
                }, s.prototype.mutationIsSignificant = function(t) {
                    var e, n, i;
                    return i = Object.keys(t).length > 0, e = "" === (null != (n = this.compositionInput) ? n.getEndData() : void 0), i || !e;
                }, s.prototype.events = {
                    keydown: function(t) {
                        var n, i, o, r, s, c, l, h, p;
                        if (this.isComposing() || this.resetInputSummary(), this.inputSummary.didInput = !0, r = u[t.keyCode]) {
                            for(i = this.keys, h = [
                                "ctrl",
                                "alt",
                                "shift",
                                "meta"
                            ], o = 0, c = h.length; c > o; o++)l = h[o], t[l + "Key"] && ("ctrl" === l && (l = "control"), i = null != i ? i[l] : void 0);
                            null != (null != i ? i[r] : void 0) && (this.setInputSummary({
                                keyName: r
                            }), e.selectionChangeObserver.reset(), i[r].call(this, t));
                        }
                        return a(t) && (n = String.fromCharCode(t.keyCode).toLowerCase()) && (s = function() {
                            var e, n, i, o;
                            for(i = [
                                "alt",
                                "shift"
                            ], o = [], e = 0, n = i.length; n > e; e++)l = i[e], t[l + "Key"] && o.push(l);
                            return o;
                        }(), s.push(n), null != (p = this.delegate) ? p.inputControllerDidReceiveKeyboardCommand(s) : void 0) ? t.preventDefault() : void 0;
                    },
                    keypress: function(t) {
                        var e, n, i;
                        if (null == this.inputSummary.eventName && !t.metaKey && (!t.ctrlKey || t.altKey)) return (i = p(t)) ? (null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString(i), this.setInputSummary({
                            textAdded: i,
                            didDelete: this.selectionIsExpanded()
                        })) : void 0;
                    },
                    textInput: function(t) {
                        var e, n, i, o;
                        return e = t.data, o = this.inputSummary.textAdded, o && o !== e && o.toUpperCase() === e ? (n = this.getSelectedRange(), this.setSelectedRange([
                            n[0],
                            n[1] + o.length
                        ]), null != (i = this.responder) && i.insertString(e), this.setInputSummary({
                            textAdded: e
                        }), this.setSelectedRange(n)) : void 0;
                    },
                    dragenter: function(t) {
                        return t.preventDefault();
                    },
                    dragstart: function(t) {
                        var e, n;
                        return n = t.target, this.serializeSelectionToDataTransfer(t.dataTransfer), this.draggedRange = this.getSelectedRange(), null != (e = this.delegate) && "function" == typeof e.inputControllerDidStartDrag ? e.inputControllerDidStartDrag() : void 0;
                    },
                    dragover: function(t) {
                        var e, n;
                        return !this.draggedRange && !this.canAcceptDataTransfer(t.dataTransfer) || (t.preventDefault(), e = {
                            x: t.clientX,
                            y: t.clientY
                        }, l(e, this.draggingPoint)) ? void 0 : (this.draggingPoint = e, null != (n = this.delegate) && "function" == typeof n.inputControllerDidReceiveDragOverPoint ? n.inputControllerDidReceiveDragOverPoint(this.draggingPoint) : void 0);
                    },
                    dragend: function() {
                        var t;
                        return null != (t = this.delegate) && "function" == typeof t.inputControllerDidCancelDrag && t.inputControllerDidCancelDrag(), this.draggedRange = null, this.draggingPoint = null;
                    },
                    drop: function(t) {
                        var n, i, o, r, s, a, u, c, l;
                        return t.preventDefault(), o = null != (s = t.dataTransfer) ? s.files : void 0, r = {
                            x: t.clientX,
                            y: t.clientY
                        }, null != (a = this.responder) && a.setLocationRangeFromPointRange(r), (null != o ? o.length : void 0) ? this.attachFiles(o) : this.draggedRange ? (null != (u = this.delegate) && u.inputControllerWillMoveText(), null != (c = this.responder) && c.moveTextFromRange(this.draggedRange), this.draggedRange = null, this.requestRender()) : (i = t.dataTransfer.getData("application/x-trix-document")) && (n = e.Document.fromJSONString(i), null != (l = this.responder) && l.insertDocument(n), this.requestRender()), this.draggedRange = null, this.draggingPoint = null;
                    },
                    cut: function(t) {
                        var e, n;
                        return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && (this.serializeSelectionToDataTransfer(t.clipboardData) && t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillCutText(), this.deleteInDirection("backward"), t.defaultPrevented) ? this.requestRender() : void 0;
                    },
                    copy: function(t) {
                        var e;
                        return (null != (e = this.responder) ? e.selectionIsExpanded() : void 0) && this.serializeSelectionToDataTransfer(t.clipboardData) ? t.preventDefault() : void 0;
                    },
                    paste: function(t) {
                        var n, o, s, a, u, c, l, p, f, g, v, y, b, A, C, x, w, E, S, R, k, D;
                        return n = null != (p = t.clipboardData) ? p : t.testClipboardData, l = {
                            clipboard: n
                        }, null == n || h(t) ? void this.getPastedHTMLUsingHiddenElement(function(t) {
                            return function(e) {
                                var n, i, o;
                                return l.type = "text/html", l.html = e, null != (n = t.delegate) && n.inputControllerWillPaste(l), null != (i = t.responder) && i.insertHTML(l.html), t.requestRender(), null != (o = t.delegate) ? o.inputControllerDidPaste(l) : void 0;
                            };
                        }(this)) : ((a = n.getData("URL")) ? (l.type = "URL", l.href = a, l.string = (c = n.getData("public.url-name")) ? e.squishBreakableWhitespace(c).trim() : a, null != (f = this.delegate) && f.inputControllerWillPaste(l), this.setInputSummary({
                            textAdded: l.string,
                            didDelete: this.selectionIsExpanded()
                        }), null != (C = this.responder) && C.insertText(e.Text.textForStringWithAttributes(l.string, {
                            href: l.href
                        })), this.requestRender(), null != (x = this.delegate) && x.inputControllerDidPaste(l)) : i(n) ? (l.type = "text/plain", l.string = n.getData("text/plain"), null != (w = this.delegate) && w.inputControllerWillPaste(l), this.setInputSummary({
                            textAdded: l.string,
                            didDelete: this.selectionIsExpanded()
                        }), null != (E = this.responder) && E.insertString(l.string), this.requestRender(), null != (S = this.delegate) && S.inputControllerDidPaste(l)) : (u = n.getData("text/html")) ? (l.type = "text/html", l.html = u, null != (R = this.delegate) && R.inputControllerWillPaste(l), null != (k = this.responder) && k.insertHTML(l.html), this.requestRender(), null != (D = this.delegate) && D.inputControllerDidPaste(l)) : m.call(n.types, "Files") >= 0 && (s = null != (g = n.items) && null != (v = g[0]) && "function" == typeof v.getAsFile ? v.getAsFile() : void 0) && (!s.name && (o = r(s)) && (s.name = "pasted-file-" + ++d + "." + o), l.type = "File", l.file = s, null != (y = this.delegate) && y.inputControllerWillAttachFiles(), null != (b = this.responder) && b.insertFile(l.file), this.requestRender(), null != (A = this.delegate) && A.inputControllerDidPaste(l)), t.preventDefault());
                    },
                    compositionstart: function(t) {
                        return this.getCompositionInput().start(t.data);
                    },
                    compositionupdate: function(t) {
                        return this.getCompositionInput().update(t.data);
                    },
                    compositionend: function(t) {
                        return this.getCompositionInput().end(t.data);
                    },
                    beforeinput: function() {
                        return this.inputSummary.didInput = !0;
                    },
                    input: function(t) {
                        return this.inputSummary.didInput = !0, t.stopPropagation();
                    }
                }, s.prototype.keys = {
                    backspace: function(t) {
                        var e;
                        return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
                    },
                    "delete": function(t) {
                        var e;
                        return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
                    },
                    "return": function() {
                        var t, e;
                        return this.setInputSummary({
                            preferDocument: !0
                        }), null != (t = this.delegate) && t.inputControllerWillPerformTyping(), null != (e = this.responder) ? e.insertLineBreak() : void 0;
                    },
                    tab: function(t) {
                        var e, n;
                        return (null != (e = this.responder) ? e.canIncreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.increaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
                    },
                    left: function(t) {
                        var e;
                        return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
                    },
                    right: function(t) {
                        var e;
                        return this.selectionIsInCursorTarget() ? (t.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
                    },
                    control: {
                        d: function(t) {
                            var e;
                            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("forward", t);
                        },
                        h: function(t) {
                            var e;
                            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), this.deleteInDirection("backward", t);
                        },
                        o: function(t) {
                            var e, n;
                            return t.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n", {
                                updatePosition: !1
                            }), this.requestRender();
                        }
                    },
                    shift: {
                        "return": function(t) {
                            var e, n;
                            return null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.insertString("\n"), this.requestRender(), t.preventDefault();
                        },
                        tab: function(t) {
                            var e, n;
                            return (null != (e = this.responder) ? e.canDecreaseNestingLevel() : void 0) ? (null != (n = this.responder) && n.decreaseNestingLevel(), this.requestRender(), t.preventDefault()) : void 0;
                        },
                        left: function(t) {
                            return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("backward")) : void 0;
                        },
                        right: function(t) {
                            return this.selectionIsInCursorTarget() ? (t.preventDefault(), this.expandSelectionInDirection("forward")) : void 0;
                        }
                    },
                    alt: {
                        backspace: function() {
                            var t;
                            return this.setInputSummary({
                                preferDocument: !1
                            }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
                        }
                    },
                    meta: {
                        backspace: function() {
                            var t;
                            return this.setInputSummary({
                                preferDocument: !1
                            }), null != (t = this.delegate) ? t.inputControllerWillPerformTyping() : void 0;
                        }
                    }
                }, s.prototype.getCompositionInput = function() {
                    return this.isComposing() ? this.compositionInput : this.compositionInput = new t(this);
                }, s.prototype.isComposing = function() {
                    return null != this.compositionInput && !this.compositionInput.isEnded();
                }, s.prototype.deleteInDirection = function(t, e) {
                    var n;
                    return (null != (n = this.responder) ? n.deleteInDirection(t) : void 0) !== !1 ? this.setInputSummary({
                        didDelete: !0
                    }) : e ? (e.preventDefault(), this.requestRender()) : void 0;
                }, s.prototype.serializeSelectionToDataTransfer = function(t) {
                    var n, i;
                    if (o(t)) return n = null != (i = this.responder) ? i.getSelectedDocument().toSerializableDocument() : void 0, t.setData("application/x-trix-document", JSON.stringify(n)), t.setData("text/html", e.DocumentView.render(n).innerHTML), t.setData("text/plain", n.toString().replace(/\n$/, "")), !0;
                }, s.prototype.canAcceptDataTransfer = function(t) {
                    var e, n, i, o, r, s;
                    for(s = {}, o = null != (i = null != t ? t.types : void 0) ? i : [], e = 0, n = o.length; n > e; e++)r = o[e], s[r] = !0;
                    return s.Files || s["application/x-trix-document"] || s["text/html"] || s["text/plain"];
                }, s.prototype.getPastedHTMLUsingHiddenElement = function(t) {
                    var n, i, o;
                    return i = this.getSelectedRange(), o = {
                        position: "absolute",
                        left: window.pageXOffset + "px",
                        top: window.pageYOffset + "px",
                        opacity: 0
                    }, n = c({
                        style: o,
                        tagName: "div",
                        editable: !0
                    }), document.body.appendChild(n), n.focus(), requestAnimationFrame(function(o) {
                        return function() {
                            var r;
                            return r = n.innerHTML, e.removeNode(n), o.setSelectedRange(i), t(r);
                        };
                    }(this));
                }, s.proxyMethod("responder?.getSelectedRange"), s.proxyMethod("responder?.setSelectedRange"), s.proxyMethod("responder?.expandSelectionInDirection"), s.proxyMethod("responder?.selectionIsInCursorTarget"), s.proxyMethod("responder?.selectionIsExpanded"), s;
            }(e.InputController), r = function(t) {
                var e, n;
                return null != (e = t.type) && null != (n = e.match(/\/(\w+)$/)) ? n[1] : void 0;
            }, s = null != ("function" == typeof " ".codePointAt ? " ".codePointAt(0) : void 0), p = function(t) {
                var n;
                return t.key && s && t.key.codePointAt(0) === t.keyCode ? t.key : (null === t.which ? n = t.keyCode : 0 !== t.which && 0 !== t.charCode && (n = t.charCode), null != n && "escape" !== u[n] ? e.UTF16String.fromCodepoints([
                    n
                ]).toString() : void 0);
            }, h = function(t) {
                var e, n, i, o, r, s, a, u, c, l;
                if (u = t.clipboardData) {
                    if (m.call(u.types, "text/html") >= 0) {
                        for(c = u.types, i = 0, s = c.length; s > i; i++)if (l = c[i], e = /^CorePasteboardFlavorType/.test(l), n = /^dyn\./.test(l) && u.getData(l), a = e || n) return !0;
                        return !1;
                    }
                    return o = m.call(u.types, "com.apple.webarchive") >= 0, r = m.call(u.types, "com.apple.flat-rtfd") >= 0, o || r;
                }
            }, t = function(t) {
                function e(t) {
                    var e;
                    this.inputController = t, e = this.inputController, this.responder = e.responder, this.delegate = e.delegate, this.inputSummary = e.inputSummary, this.data = {};
                }
                return f(e, t), e.prototype.start = function(t) {
                    var e, n;
                    return this.data.start = t, this.isSignificant() ? ("keypress" === this.inputSummary.eventName && this.inputSummary.textAdded && null != (e = this.responder) && e.deleteInDirection("left"), this.selectionIsExpanded() || (this.insertPlaceholder(), this.requestRender()), this.range = null != (n = this.responder) ? n.getSelectedRange() : void 0) : void 0;
                }, e.prototype.update = function(t) {
                    var e;
                    return this.data.update = t, this.isSignificant() && (e = this.selectPlaceholder()) ? (this.forgetPlaceholder(), this.range = e) : void 0;
                }, e.prototype.end = function(t) {
                    var e, n, i, o;
                    return this.data.end = t, this.isSignificant() ? (this.forgetPlaceholder(), this.canApplyToDocument() ? (this.setInputSummary({
                        preferDocument: !0,
                        didInput: !1
                    }), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.setSelectedRange(this.range), null != (i = this.responder) && i.insertString(this.data.end), null != (o = this.responder) ? o.setSelectedRange(this.range[0] + this.data.end.length) : void 0) : null != this.data.start || null != this.data.update ? (this.requestReparse(), this.inputController.reset()) : void 0) : this.inputController.reset();
                }, e.prototype.getEndData = function() {
                    return this.data.end;
                }, e.prototype.isEnded = function() {
                    return null != this.getEndData();
                }, e.prototype.isSignificant = function() {
                    return n.composesExistingText ? this.inputSummary.didInput : !0;
                }, e.prototype.canApplyToDocument = function() {
                    var t, e;
                    return 0 === (null != (t = this.data.start) ? t.length : void 0) && (null != (e = this.data.end) ? e.length : void 0) > 0 && null != this.range;
                }, e.proxyMethod("inputController.setInputSummary"), e.proxyMethod("inputController.requestRender"), e.proxyMethod("inputController.requestReparse"), e.proxyMethod("responder?.selectionIsExpanded"), e.proxyMethod("responder?.insertPlaceholder"), e.proxyMethod("responder?.selectPlaceholder"), e.proxyMethod("responder?.forgetPlaceholder"), e;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, r = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, s = {}.hasOwnProperty, a = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = e.dataTransferIsPlainText, n = e.keyEventIsKeyboardCommand, i = e.objectsAreEqual, e.Level2InputController = function(s) {
                function u() {
                    return this.render = o(this.render, this), u.__super__.constructor.apply(this, arguments);
                }
                var c, l, h, p, d, f;
                return r(u, s), u.prototype.elementDidMutate = function() {
                    var t;
                    return this.scheduledRender ? this.composing && null != (t = this.delegate) && "function" == typeof t.inputControllerDidAllowUnhandledInput ? t.inputControllerDidAllowUnhandledInput() : void 0 : this.reparse();
                }, u.prototype.scheduleRender = function() {
                    return null != this.scheduledRender ? this.scheduledRender : this.scheduledRender = requestAnimationFrame(this.render);
                }, u.prototype.render = function() {
                    var t;
                    return cancelAnimationFrame(this.scheduledRender), this.scheduledRender = null, this.composing || null != (t = this.delegate) && t.render(), "function" == typeof this.afterRender && this.afterRender(), this.afterRender = null;
                }, u.prototype.reparse = function() {
                    var t;
                    return null != (t = this.delegate) ? t.reparse() : void 0;
                }, u.prototype.events = {
                    keydown: function(t) {
                        var e, i, o, r;
                        if (n(t)) {
                            if (e = l(t), null != (r = this.delegate) ? r.inputControllerDidReceiveKeyboardCommand(e) : void 0) return t.preventDefault();
                        } else if (o = t.key, t.altKey && (o += "+Alt"), t.shiftKey && (o += "+Shift"), i = this.keys[o]) return this.withEvent(t, i);
                    },
                    paste: function(t) {
                        var n, i, o, r, s, a, u, c, l;
                        return h(t) ? (t.preventDefault(), this.attachFiles(t.clipboardData.files)) : p(t) ? (t.preventDefault(), i = {
                            type: "text/plain",
                            string: t.clipboardData.getData("text/plain")
                        }, null != (o = this.delegate) && o.inputControllerWillPaste(i), null != (r = this.responder) && r.insertString(i.string), this.render(), null != (s = this.delegate) ? s.inputControllerDidPaste(i) : void 0) : (n = null != (a = t.clipboardData) ? a.getData("URL") : void 0) ? (t.preventDefault(), i = {
                            type: "URL",
                            href: n,
                            string: n
                        }, null != (u = this.delegate) && u.inputControllerWillPaste(i), null != (c = this.responder) && c.insertText(e.Text.textForStringWithAttributes(i.string, {
                            href: i.href
                        })), this.render(), null != (l = this.delegate) ? l.inputControllerDidPaste(i) : void 0) : void 0;
                    },
                    beforeinput: function(t) {
                        var e;
                        return (e = this.inputTypes[t.inputType]) ? (this.withEvent(t, e), this.scheduleRender()) : void 0;
                    },
                    input: function() {
                        return e.selectionChangeObserver.reset();
                    },
                    dragstart: function(t) {
                        var e, n;
                        return (null != (e = this.responder) ? e.selectionContainsAttachments() : void 0) ? (t.dataTransfer.setData("application/x-trix-dragging", !0), this.dragging = {
                            range: null != (n = this.responder) ? n.getSelectedRange() : void 0,
                            point: d(t)
                        }) : void 0;
                    },
                    dragenter: function(t) {
                        return c(t) ? t.preventDefault() : void 0;
                    },
                    dragover: function(t) {
                        var e, n;
                        return this.dragging && (t.preventDefault(), e = d(t), !i(e, this.dragging.point)) ? (this.dragging.point = e, null != (n = this.responder) ? n.setLocationRangeFromPointRange(e) : void 0) : void 0;
                    },
                    drop: function(t) {
                        var e, n, i, o;
                        return this.dragging ? (t.preventDefault(), null != (n = this.delegate) && n.inputControllerWillMoveText(), null != (i = this.responder) && i.moveTextFromRange(this.dragging.range), this.dragging = null, this.scheduleRender()) : c(t) ? (t.preventDefault(), e = d(t), null != (o = this.responder) && o.setLocationRangeFromPointRange(e), this.attachFiles(t.dataTransfer.files)) : void 0;
                    },
                    dragend: function() {
                        var t;
                        return this.dragging ? (null != (t = this.responder) && t.setSelectedRange(this.dragging.range), this.dragging = null) : void 0;
                    },
                    compositionend: function() {
                        return this.composing ? (this.composing = !1, this.scheduleRender()) : void 0;
                    }
                }, u.prototype.keys = {
                    ArrowLeft: function() {
                        var t, e;
                        return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("backward") : void 0) : void 0;
                    },
                    ArrowRight: function() {
                        var t, e;
                        return (null != (t = this.responder) ? t.shouldManageMovingCursorInDirection("forward") : void 0) ? (this.event.preventDefault(), null != (e = this.responder) ? e.moveCursorInDirection("forward") : void 0) : void 0;
                    },
                    Backspace: function() {
                        var t, e, n;
                        return (null != (t = this.responder) ? t.shouldManageDeletingInDirection("backward") : void 0) ? (this.event.preventDefault(), null != (e = this.delegate) && e.inputControllerWillPerformTyping(), null != (n = this.responder) && n.deleteInDirection("backward"), this.render()) : void 0;
                    },
                    Tab: function() {
                        var t, e;
                        return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.increaseNestingLevel(), this.render()) : void 0;
                    },
                    "Tab+Shift": function() {
                        var t, e;
                        return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? (this.event.preventDefault(), null != (e = this.responder) && e.decreaseNestingLevel(), this.render()) : void 0;
                    }
                }, u.prototype.inputTypes = {
                    deleteByComposition: function() {
                        return this.deleteInDirection("backward", {
                            recordUndoEntry: !1
                        });
                    },
                    deleteByCut: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteByDrag: function() {
                        return this.event.preventDefault(), this.withTargetDOMRange(function() {
                            var t;
                            return this.deleteByDragRange = null != (t = this.responder) ? t.getSelectedRange() : void 0;
                        });
                    },
                    deleteCompositionText: function() {
                        return this.deleteInDirection("backward", {
                            recordUndoEntry: !1
                        });
                    },
                    deleteContent: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteContentBackward: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteContentForward: function() {
                        return this.deleteInDirection("forward");
                    },
                    deleteEntireSoftLine: function() {
                        return this.deleteInDirection("forward");
                    },
                    deleteHardLineBackward: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteHardLineForward: function() {
                        return this.deleteInDirection("forward");
                    },
                    deleteSoftLineBackward: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteSoftLineForward: function() {
                        return this.deleteInDirection("forward");
                    },
                    deleteWordBackward: function() {
                        return this.deleteInDirection("backward");
                    },
                    deleteWordForward: function() {
                        return this.deleteInDirection("forward");
                    },
                    formatBackColor: function() {
                        return this.activateAttributeIfSupported("backgroundColor", this.event.data);
                    },
                    formatBold: function() {
                        return this.toggleAttributeIfSupported("bold");
                    },
                    formatFontColor: function() {
                        return this.activateAttributeIfSupported("color", this.event.data);
                    },
                    formatFontName: function() {
                        return this.activateAttributeIfSupported("font", this.event.data);
                    },
                    formatIndent: function() {
                        var t;
                        return (null != (t = this.responder) ? t.canIncreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.increaseNestingLevel() : void 0;
                        }) : void 0;
                    },
                    formatItalic: function() {
                        return this.toggleAttributeIfSupported("italic");
                    },
                    formatJustifyCenter: function() {
                        return this.toggleAttributeIfSupported("justifyCenter");
                    },
                    formatJustifyFull: function() {
                        return this.toggleAttributeIfSupported("justifyFull");
                    },
                    formatJustifyLeft: function() {
                        return this.toggleAttributeIfSupported("justifyLeft");
                    },
                    formatJustifyRight: function() {
                        return this.toggleAttributeIfSupported("justifyRight");
                    },
                    formatOutdent: function() {
                        var t;
                        return (null != (t = this.responder) ? t.canDecreaseNestingLevel() : void 0) ? this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.decreaseNestingLevel() : void 0;
                        }) : void 0;
                    },
                    formatRemove: function() {
                        return this.withTargetDOMRange(function() {
                            var t, e, n, i;
                            i = [];
                            for(t in null != (e = this.responder) ? e.getCurrentAttributes() : void 0)i.push(null != (n = this.responder) ? n.removeCurrentAttribute(t) : void 0);
                            return i;
                        });
                    },
                    formatSetBlockTextDirection: function() {
                        return this.activateAttributeIfSupported("blockDir", this.event.data);
                    },
                    formatSetInlineTextDirection: function() {
                        return this.activateAttributeIfSupported("textDir", this.event.data);
                    },
                    formatStrikeThrough: function() {
                        return this.toggleAttributeIfSupported("strike");
                    },
                    formatSubscript: function() {
                        return this.toggleAttributeIfSupported("sub");
                    },
                    formatSuperscript: function() {
                        return this.toggleAttributeIfSupported("sup");
                    },
                    formatUnderline: function() {
                        return this.toggleAttributeIfSupported("underline");
                    },
                    historyRedo: function() {
                        var t;
                        return null != (t = this.delegate) ? t.inputControllerWillPerformRedo() : void 0;
                    },
                    historyUndo: function() {
                        var t;
                        return null != (t = this.delegate) ? t.inputControllerWillPerformUndo() : void 0;
                    },
                    insertCompositionText: function() {
                        return this.composing = !0, this.insertString(this.event.data);
                    },
                    insertFromComposition: function() {
                        return this.composing = !1, this.insertString(this.event.data);
                    },
                    insertFromDrop: function() {
                        var t, e;
                        return (t = this.deleteByDragRange) ? (this.deleteByDragRange = null, null != (e = this.delegate) && e.inputControllerWillMoveText(), this.withTargetDOMRange(function() {
                            var e;
                            return null != (e = this.responder) ? e.moveTextFromRange(t) : void 0;
                        })) : void 0;
                    },
                    insertFromPaste: function() {
                        var n, i, o, r, s, a, u, c, l, h;
                        return n = this.event.dataTransfer, s = {
                            dataTransfer: n
                        }, (i = n.getData("URL")) ? (s.type = "URL", s.href = i, s.string = (r = n.getData("public.url-name")) ? e.squishBreakableWhitespace(r).trim() : i, null != (a = this.delegate) && a.inputControllerWillPaste(s), this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.insertText(e.Text.textForStringWithAttributes(s.string, {
                                href: s.href
                            })) : void 0;
                        }), this.afterRender = function(t) {
                            return function() {
                                var e;
                                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
                            };
                        }(this)) : t(n) ? (s.type = "text/plain", s.string = n.getData("text/plain"), null != (u = this.delegate) && u.inputControllerWillPaste(s), this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.insertString(s.string) : void 0;
                        }), this.afterRender = function(t) {
                            return function() {
                                var e;
                                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
                            };
                        }(this)) : (o = n.getData("text/html")) ? (s.type = "text/html", s.html = o, null != (c = this.delegate) && c.inputControllerWillPaste(s), this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.insertHTML(s.html) : void 0;
                        }), this.afterRender = function(t) {
                            return function() {
                                var e;
                                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
                            };
                        }(this)) : (null != (l = n.files) ? l.length : void 0) ? (s.type = "File", s.file = n.files[0], null != (h = this.delegate) && h.inputControllerWillPaste(s), this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.insertFile(s.file) : void 0;
                        }), this.afterRender = function(t) {
                            return function() {
                                var e;
                                return null != (e = t.delegate) ? e.inputControllerDidPaste(s) : void 0;
                            };
                        }(this)) : void 0;
                    },
                    insertFromYank: function() {
                        return this.insertString(this.event.data);
                    },
                    insertLineBreak: function() {
                        return this.insertString("\n");
                    },
                    insertLink: function() {
                        return this.activateAttributeIfSupported("href", this.event.data);
                    },
                    insertOrderedList: function() {
                        return this.toggleAttributeIfSupported("number");
                    },
                    insertParagraph: function() {
                        var t;
                        return null != (t = this.delegate) && t.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
                            var t;
                            return null != (t = this.responder) ? t.insertLineBreak() : void 0;
                        });
                    },
                    insertReplacementText: function() {
                        return this.insertString(this.event.dataTransfer.getData("text/plain"), {
                            updatePosition: !1
                        });
                    },
                    insertText: function() {
                        var t, e;
                        return this.insertString(null != (t = this.event.data) ? t : null != (e = this.event.dataTransfer) ? e.getData("text/plain") : void 0);
                    },
                    insertTranspose: function() {
                        return this.insertString(this.event.data);
                    },
                    insertUnorderedList: function() {
                        return this.toggleAttributeIfSupported("bullet");
                    }
                }, u.prototype.insertString = function(t, e) {
                    var n;
                    return null == t && (t = ""), null != (n = this.delegate) && n.inputControllerWillPerformTyping(), this.withTargetDOMRange(function() {
                        var n;
                        return null != (n = this.responder) ? n.insertString(t, e) : void 0;
                    });
                }, u.prototype.toggleAttributeIfSupported = function(t) {
                    var n;
                    return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (n = this.delegate) && n.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function() {
                        var e;
                        return null != (e = this.responder) ? e.toggleCurrentAttribute(t) : void 0;
                    })) : void 0;
                }, u.prototype.activateAttributeIfSupported = function(t, n) {
                    var i;
                    return a.call(e.getAllAttributeNames(), t) >= 0 ? (null != (i = this.delegate) && i.inputControllerWillPerformFormatting(t), this.withTargetDOMRange(function() {
                        var e;
                        return null != (e = this.responder) ? e.setCurrentAttribute(t, n) : void 0;
                    })) : void 0;
                }, u.prototype.deleteInDirection = function(t, e) {
                    var n, i, o, r;
                    return o = (null != e ? e : {
                        recordUndoEntry: !0
                    }).recordUndoEntry, o && null != (r = this.delegate) && r.inputControllerWillPerformTyping(), i = function(e) {
                        return function() {
                            var n;
                            return null != (n = e.responder) ? n.deleteInDirection(t) : void 0;
                        };
                    }(this), (n = this.getTargetDOMRange({
                        minLength: 2
                    })) ? this.withTargetDOMRange(n, i) : i();
                }, u.prototype.withTargetDOMRange = function(t, n) {
                    var i;
                    return "function" == typeof t && (n = t, t = this.getTargetDOMRange()), t ? null != (i = this.responder) ? i.withTargetDOMRange(t, n.bind(this)) : void 0 : (e.selectionChangeObserver.reset(), n.call(this));
                }, u.prototype.getTargetDOMRange = function(t) {
                    var e, n, i, o;
                    return i = (null != t ? t : {
                        minLength: 0
                    }).minLength, (o = "function" == typeof (e = this.event).getTargetRanges ? e.getTargetRanges() : void 0) && o.length && (n = f(o[0]), 0 === i || n.toString().length >= i) ? n : void 0;
                }, f = function(t) {
                    var e;
                    return e = document.createRange(), e.setStart(t.startContainer, t.startOffset), e.setEnd(t.endContainer, t.endOffset), e;
                }, u.prototype.withEvent = function(t, e) {
                    var n;
                    this.event = t;
                    try {
                        n = e.call(this);
                    } finally{
                        this.event = null;
                    }
                    return n;
                }, c = function(t) {
                    var e, n;
                    return a.call(null != (e = null != (n = t.dataTransfer) ? n.types : void 0) ? e : [], "Files") >= 0;
                }, h = function(t) {
                    var e;
                    return (e = t.clipboardData) ? a.call(e.types, "Files") >= 0 && 1 === e.types.length && e.files.length >= 1 : void 0;
                }, p = function(t) {
                    var e;
                    return (e = t.clipboardData) ? a.call(e.types, "text/plain") >= 0 && 1 === e.types.length : void 0;
                }, l = function(t) {
                    var e;
                    return e = [], t.altKey && e.push("alt"), t.shiftKey && e.push("shift"), e.push(t.key), e;
                }, d = function(t) {
                    return {
                        x: t.clientX,
                        y: t.clientY
                    };
                }, u;
            }(e.InputController);
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, h = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)p.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, p = {}.hasOwnProperty;
            n = e.defer, i = e.escapeHTML, o = e.handleEvent, a = e.makeElement, c = e.tagName, u = e.config, s = u.lang, t = u.css, r = u.keyNames, e.AttachmentEditorController = function(u) {
                function p(t, e, n, i) {
                    this.attachmentPiece = t, this.element = e, this.container = n, this.options = null != i ? i : {}, this.didBlurCaption = l(this.didBlurCaption, this), this.didChangeCaption = l(this.didChangeCaption, this), this.didInputCaption = l(this.didInputCaption, this), this.didKeyDownCaption = l(this.didKeyDownCaption, this), this.didClickActionButton = l(this.didClickActionButton, this), this.didClickToolbar = l(this.didClickToolbar, this), this.attachment = this.attachmentPiece.attachment, "a" === c(this.element) && (this.element = this.element.firstChild), this.install();
                }
                var d;
                return h(p, u), d = function(t) {
                    return function() {
                        var e;
                        return e = t.apply(this, arguments), e["do"](), null == this.undos && (this.undos = []), this.undos.push(e.undo);
                    };
                }, p.prototype.install = function() {
                    return this.makeElementMutable(), this.addToolbar(), this.attachment.isPreviewable() ? this.installCaptionEditor() : void 0;
                }, p.prototype.uninstall = function() {
                    var t, e;
                    for(this.savePendingCaption(); e = this.undos.pop();)e();
                    return null != (t = this.delegate) ? t.didUninstallAttachmentEditor(this) : void 0;
                }, p.prototype.savePendingCaption = function() {
                    var t, e, n;
                    return null != this.pendingCaption ? (t = this.pendingCaption, this.pendingCaption = null, t ? null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestUpdatingAttributesForAttachment ? e.attachmentEditorDidRequestUpdatingAttributesForAttachment({
                        caption: t
                    }, this.attachment) : void 0 : null != (n = this.delegate) && "function" == typeof n.attachmentEditorDidRequestRemovingAttributeForAttachment ? n.attachmentEditorDidRequestRemovingAttributeForAttachment("caption", this.attachment) : void 0) : void 0;
                }, p.prototype.makeElementMutable = d(function() {
                    return {
                        "do": function(t) {
                            return function() {
                                return t.element.dataset.trixMutable = !0;
                            };
                        }(this),
                        undo: function(t) {
                            return function() {
                                return delete t.element.dataset.trixMutable;
                            };
                        }(this)
                    };
                }), p.prototype.addToolbar = d(function() {
                    var n, r, u;
                    return n = a({
                        tagName: "div",
                        className: t.attachmentToolbar,
                        data: {
                            trixMutable: !0
                        }
                    }), n.innerHTML = '<div class="trix-button-row">\n  <span class="trix-button-group trix-button-group--actions">\n    <button type="button" data-trix-action="remove" class="trix-button trix-button--remove" title="' + s.remove + '">' + s.remove + "</button>\n  </span>\n</div>", this.attachment.isPreviewable() && (r = i(this.attachment.getFilename()), u = i(this.attachment.getFormattedFilesize()), n.innerHTML += '<div class="' + t.attachmentMetadataContainer + '">\n  <span class="' + t.attachmentMetadata + '">\n    <span class="' + t.attachmentName + '" title="' + r + '">' + r + '</span>\n    <span class="' + t.attachmentSize + '">' + u + "</span>\n  </span>\n</div>"), o("click", {
                        onElement: n,
                        withCallback: this.didClickToolbar
                    }), o("click", {
                        onElement: n,
                        matchingSelector: "[data-trix-action]",
                        withCallback: this.didClickActionButton
                    }), {
                        "do": function(t) {
                            return function() {
                                return t.element.appendChild(n);
                            };
                        }(this),
                        undo: function() {
                            return function() {
                                return e.removeNode(n);
                            };
                        }(this)
                    };
                }), p.prototype.installCaptionEditor = d(function() {
                    var i, r, u, c, l;
                    return c = a({
                        tagName: "textarea",
                        className: t.attachmentCaptionEditor,
                        attributes: {
                            placeholder: s.captionPlaceholder
                        },
                        data: {
                            trixMutable: !0
                        }
                    }), c.value = this.attachmentPiece.getCaption(), l = c.cloneNode(), l.classList.add("trix-autoresize-clone"), l.tabIndex = -1, i = function() {
                        return l.value = c.value, c.style.height = l.scrollHeight + "px";
                    }, o("input", {
                        onElement: c,
                        withCallback: i
                    }), o("input", {
                        onElement: c,
                        withCallback: this.didInputCaption
                    }), o("keydown", {
                        onElement: c,
                        withCallback: this.didKeyDownCaption
                    }), o("change", {
                        onElement: c,
                        withCallback: this.didChangeCaption
                    }), o("blur", {
                        onElement: c,
                        withCallback: this.didBlurCaption
                    }), u = this.element.querySelector("figcaption"), r = u.cloneNode(), {
                        "do": function(e) {
                            return function() {
                                return u.style.display = "none", r.appendChild(c), r.appendChild(l), r.classList.add(t.attachmentCaption + "--editing"), u.parentElement.insertBefore(r, u), i(), e.options.editCaption ? n(function() {
                                    return c.focus();
                                }) : void 0;
                            };
                        }(this),
                        undo: function() {
                            return e.removeNode(r), u.style.display = null;
                        }
                    };
                }), p.prototype.didClickToolbar = function(t) {
                    return t.preventDefault(), t.stopPropagation();
                }, p.prototype.didClickActionButton = function(t) {
                    var e, n;
                    switch(e = t.target.getAttribute("data-trix-action")){
                        case "remove":
                            return null != (n = this.delegate) ? n.attachmentEditorDidRequestRemovalOfAttachment(this.attachment) : void 0;
                    }
                }, p.prototype.didKeyDownCaption = function(t) {
                    var e;
                    return "return" === r[t.keyCode] ? (t.preventDefault(), this.savePendingCaption(), null != (e = this.delegate) && "function" == typeof e.attachmentEditorDidRequestDeselectingAttachment ? e.attachmentEditorDidRequestDeselectingAttachment(this.attachment) : void 0) : void 0;
                }, p.prototype.didInputCaption = function(t) {
                    return this.pendingCaption = t.target.value.replace(/\s/g, " ").trim();
                }, p.prototype.didChangeCaption = function() {
                    return this.savePendingCaption();
                }, p.prototype.didBlurCaption = function() {
                    return this.savePendingCaption();
                }, p;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, r = {}.hasOwnProperty;
            i = e.makeElement, t = e.config.css, e.AttachmentView = function(r) {
                function s() {
                    s.__super__.constructor.apply(this, arguments), this.attachment = this.object, this.attachment.uploadProgressDelegate = this, this.attachmentPiece = this.options.piece;
                }
                var a;
                return o(s, r), s.attachmentSelector = "[data-trix-attachment]", s.prototype.createContentNodes = function() {
                    return [];
                }, s.prototype.createNodes = function() {
                    var e, n, o, r, s, u, c;
                    if (e = r = i({
                        tagName: "figure",
                        className: this.getClassName(),
                        data: this.getData(),
                        editable: !1
                    }), (n = this.getHref()) && (r = i({
                        tagName: "a",
                        editable: !1,
                        attributes: {
                            href: n,
                            tabindex: -1
                        }
                    }), e.appendChild(r)), this.attachment.hasContent()) r.innerHTML = this.attachment.getContent();
                    else for(c = this.createContentNodes(), o = 0, s = c.length; s > o; o++)u = c[o], r.appendChild(u);
                    return r.appendChild(this.createCaptionElement()), this.attachment.isPending() && (this.progressElement = i({
                        tagName: "progress",
                        attributes: {
                            "class": t.attachmentProgress,
                            value: this.attachment.getUploadProgress(),
                            max: 100
                        },
                        data: {
                            trixMutable: !0,
                            trixStoreKey: [
                                "progressElement",
                                this.attachment.id
                            ].join("/")
                        }
                    }), e.appendChild(this.progressElement)), [
                        a("left"),
                        e,
                        a("right")
                    ];
                }, s.prototype.createCaptionElement = function() {
                    var e, n, o, r, s, a, u;
                    return o = i({
                        tagName: "figcaption",
                        className: t.attachmentCaption
                    }), (e = this.attachmentPiece.getCaption()) ? (o.classList.add(t.attachmentCaption + "--edited"), o.textContent = e) : (n = this.getCaptionConfig(), n.name && (r = this.attachment.getFilename()), n.size && (a = this.attachment.getFormattedFilesize()), r && (s = i({
                        tagName: "span",
                        className: t.attachmentName,
                        textContent: r
                    }), o.appendChild(s)), a && (r && o.appendChild(document.createTextNode(" ")), u = i({
                        tagName: "span",
                        className: t.attachmentSize,
                        textContent: a
                    }), o.appendChild(u))), o;
                }, s.prototype.getClassName = function() {
                    var e, n;
                    return n = [
                        t.attachment,
                        t.attachment + "--" + this.attachment.getType()
                    ], (e = this.attachment.getExtension()) && n.push(t.attachment + "--" + e), n.join(" ");
                }, s.prototype.getData = function() {
                    var t, e;
                    return e = {
                        trixAttachment: JSON.stringify(this.attachment),
                        trixContentType: this.attachment.getContentType(),
                        trixId: this.attachment.id
                    }, t = this.attachmentPiece.attributes, t.isEmpty() || (e.trixAttributes = JSON.stringify(t)), this.attachment.isPending() && (e.trixSerialize = !1), e;
                }, s.prototype.getHref = function() {
                    return n(this.attachment.getContent(), "a") ? void 0 : this.attachment.getHref();
                }, s.prototype.getCaptionConfig = function() {
                    var t, n, i;
                    return i = this.attachment.getType(), t = e.copyObject(null != (n = e.config.attachments[i]) ? n.caption : void 0), "file" === i && (t.name = !0), t;
                }, s.prototype.findProgressElement = function() {
                    var t;
                    return null != (t = this.findElement()) ? t.querySelector("progress") : void 0;
                }, a = function(t) {
                    return i({
                        tagName: "span",
                        textContent: e.ZERO_WIDTH_SPACE,
                        data: {
                            trixCursorTarget: t,
                            trixSerialize: !1
                        }
                    });
                }, s.prototype.attachmentDidChangeUploadProgress = function() {
                    var t, e;
                    return e = this.attachment.getUploadProgress(), null != (t = this.findProgressElement()) ? t.value = e : void 0;
                }, s;
            }(e.ObjectView), n = function(t, e) {
                var n;
                return n = i("div"), n.innerHTML = null != t ? t : "", n.querySelector(e);
            };
        }).call(this), (function() {
            var t, n = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var o in e)i.call(e, o) && (t[o] = e[o]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, i = {}.hasOwnProperty;
            t = e.makeElement, e.PreviewableAttachmentView = function(i) {
                function o() {
                    o.__super__.constructor.apply(this, arguments), this.attachment.previewDelegate = this;
                }
                return n(o, i), o.prototype.createContentNodes = function() {
                    return this.image = t({
                        tagName: "img",
                        attributes: {
                            src: ""
                        },
                        data: {
                            trixMutable: !0
                        }
                    }), this.refresh(this.image), [
                        this.image
                    ];
                }, o.prototype.createCaptionElement = function() {
                    var t;
                    return t = o.__super__.createCaptionElement.apply(this, arguments), t.textContent || t.setAttribute("data-trix-placeholder", e.config.lang.captionPlaceholder), t;
                }, o.prototype.refresh = function(t) {
                    var e;
                    return null == t && (t = null != (e = this.findElement()) ? e.querySelector("img") : void 0), t ? this.updateAttributesForImage(t) : void 0;
                }, o.prototype.updateAttributesForImage = function(t) {
                    var e, n, i, o, r, s;
                    return r = this.attachment.getURL(), n = this.attachment.getPreviewURL(), t.src = n || r, n === r ? t.removeAttribute("data-trix-serialized-attributes") : (i = JSON.stringify({
                        src: r
                    }), t.setAttribute("data-trix-serialized-attributes", i)), s = this.attachment.getWidth(), e = this.attachment.getHeight(), null != s && (t.width = s), null != e && (t.height = e), o = [
                        "imageElement",
                        this.attachment.id,
                        t.src,
                        t.width,
                        t.height
                    ].join("/"), t.dataset.trixStoreKey = o;
                }, o.prototype.attachmentDidChangeAttributes = function() {
                    return this.refresh(this.image), this.refresh();
                }, o;
            }(e.AttachmentView);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, r = {}.hasOwnProperty;
            i = e.makeElement, t = e.findInnerElement, n = e.getTextConfig, e.PieceView = function(r) {
                function s() {
                    var t;
                    s.__super__.constructor.apply(this, arguments), this.piece = this.object, this.attributes = this.piece.getAttributes(), t = this.options, this.textConfig = t.textConfig, this.context = t.context, this.piece.attachment ? this.attachment = this.piece.attachment : this.string = this.piece.toString();
                }
                var a;
                return o(s, r), s.prototype.createNodes = function() {
                    var e, n, i, o, r, s;
                    if (s = this.attachment ? this.createAttachmentNodes() : this.createStringNodes(), e = this.createElement()) {
                        for(i = t(e), n = 0, o = s.length; o > n; n++)r = s[n], i.appendChild(r);
                        s = [
                            e
                        ];
                    }
                    return s;
                }, s.prototype.createAttachmentNodes = function() {
                    var t, n;
                    return t = this.attachment.isPreviewable() ? e.PreviewableAttachmentView : e.AttachmentView, n = this.createChildView(t, this.piece.attachment, {
                        piece: this.piece
                    }), n.getNodes();
                }, s.prototype.createStringNodes = function() {
                    var t, e, n, o, r, s, a, u, c, l;
                    if (null != (u = this.textConfig) ? u.plaintext : void 0) return [
                        document.createTextNode(this.string)
                    ];
                    for(a = [], c = this.string.split("\n"), n = e = 0, o = c.length; o > e; n = ++e)l = c[n], n > 0 && (t = i("br"), a.push(t)), (r = l.length) && (s = document.createTextNode(this.preserveSpaces(l)), a.push(s));
                    return a;
                }, s.prototype.createElement = function() {
                    var t, e, o, r, s, a, u, c, l;
                    c = {}, a = this.attributes;
                    for(r in a)if (l = a[r], (t = n(r)) && (t.tagName && (s = i(t.tagName), o ? (o.appendChild(s), o = s) : e = o = s), t.styleProperty && (c[t.styleProperty] = l), t.style)) {
                        u = t.style;
                        for(r in u)l = u[r], c[r] = l;
                    }
                    if (Object.keys(c).length) {
                        null == e && (e = i("span"));
                        for(r in c)l = c[r], e.style[r] = l;
                    }
                    return e;
                }, s.prototype.createContainerElement = function() {
                    var t, e, o, r, s;
                    r = this.attributes;
                    for(o in r)if (s = r[o], (e = n(o)) && e.groupTagName) return t = {}, t[o] = s, i(e.groupTagName, t);
                }, a = e.NON_BREAKING_SPACE, s.prototype.preserveSpaces = function(t) {
                    return this.context.isLast && (t = t.replace(/\ $/, a)), t = t.replace(/(\S)\ {3}(\S)/g, "$1 " + a + " $2").replace(/\ {2}/g, a + " ").replace(/\ {2}/g, " " + a), (this.context.isFirst || this.context.followsWhitespace) && (t = t.replace(/^\ /, a)), t;
                }, s;
            }(e.ObjectView);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.TextView = function(n) {
                function i() {
                    i.__super__.constructor.apply(this, arguments), this.text = this.object, this.textConfig = this.options.textConfig;
                }
                var o;
                return t(i, n), i.prototype.createNodes = function() {
                    var t, n, i, r, s, a, u, c, l, h;
                    for(a = [], c = e.ObjectGroup.groupObjects(this.getPieces()), r = c.length - 1, i = n = 0, s = c.length; s > n; i = ++n)u = c[i], t = {}, 0 === i && (t.isFirst = !0), i === r && (t.isLast = !0), o(l) && (t.followsWhitespace = !0), h = this.findOrCreateCachedChildView(e.PieceView, u, {
                        textConfig: this.textConfig,
                        context: t
                    }), a.push.apply(a, h.getNodes()), l = u;
                    return a;
                }, i.prototype.getPieces = function() {
                    var t, e, n, i, o;
                    for(i = this.text.getPieces(), o = [], t = 0, e = i.length; e > t; t++)n = i[t], n.hasAttribute("blockBreak") || o.push(n);
                    return o;
                }, o = function(t) {
                    return /\s$/.test(null != t ? t.toString() : void 0);
                }, i;
            }(e.ObjectView);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, r = {}.hasOwnProperty;
            i = e.makeElement, n = e.getBlockConfig, t = e.config.css, e.BlockView = function(r) {
                function s() {
                    s.__super__.constructor.apply(this, arguments), this.block = this.object, this.attributes = this.block.getAttributes();
                }
                return o(s, r), s.prototype.createNodes = function() {
                    var t, o, r, s, a, u, c, l, h;
                    if (t = document.createComment("block"), u = [
                        t
                    ], this.block.isEmpty() ? u.push(i("br")) : (l = null != (c = n(this.block.getLastAttribute())) ? c.text : void 0, h = this.findOrCreateCachedChildView(e.TextView, this.block.text, {
                        textConfig: l
                    }), u.push.apply(u, h.getNodes()), this.shouldAddExtraNewlineElement() && u.push(i("br"))), this.attributes.length) return u;
                    for(o = i(e.config.blockAttributes["default"].tagName), r = 0, s = u.length; s > r; r++)a = u[r], o.appendChild(a);
                    return [
                        o
                    ];
                }, s.prototype.createContainerElement = function(e) {
                    var o, r, s, a;
                    return o = this.attributes[e], a = n(o).tagName, r = {
                        tagName: a
                    }, "attachmentGallery" === o && (s = this.block.getBlockBreakPosition(), r.className = t.attachmentGallery + " " + t.attachmentGallery + "--" + s), i(r);
                }, s.prototype.shouldAddExtraNewlineElement = function() {
                    return /\n\n$/.test(this.block.toString());
                }, s;
            }(e.ObjectView);
        }).call(this), (function() {
            var t, n, i = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)o.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, o = {}.hasOwnProperty;
            t = e.defer, n = e.makeElement, e.DocumentView = function(o) {
                function r() {
                    r.__super__.constructor.apply(this, arguments), this.element = this.options.element, this.elementStore = new e.ElementStore, this.setDocument(this.object);
                }
                var s, a, u;
                return i(r, o), r.render = function(t) {
                    var e, i;
                    return e = n("div"), i = new this(t, {
                        element: e
                    }), i.render(), i.sync(), e;
                }, r.prototype.setDocument = function(t) {
                    return t.isEqualTo(this.document) ? void 0 : this.document = this.object = t;
                }, r.prototype.render = function() {
                    var t, i, o, r, s, a, u;
                    if (this.childViews = [], this.shadowElement = n("div"), !this.document.isEmpty()) {
                        for(s = e.ObjectGroup.groupObjects(this.document.getBlocks(), {
                            asTree: !0
                        }), a = [], t = 0, i = s.length; i > t; t++)r = s[t], u = this.findOrCreateCachedChildView(e.BlockView, r), a.push((function() {
                            var t, e, n, i;
                            for(n = u.getNodes(), i = [], t = 0, e = n.length; e > t; t++)o = n[t], i.push(this.shadowElement.appendChild(o));
                            return i;
                        }).call(this));
                        return a;
                    }
                }, r.prototype.isSynced = function() {
                    return s(this.shadowElement, this.element);
                }, r.prototype.sync = function() {
                    var t;
                    for(t = this.createDocumentFragmentForSync(); this.element.lastChild;)this.element.removeChild(this.element.lastChild);
                    return this.element.appendChild(t), this.didSync();
                }, r.prototype.didSync = function() {
                    return this.elementStore.reset(a(this.element)), t(function(t) {
                        return function() {
                            return t.garbageCollectCachedViews();
                        };
                    }(this));
                }, r.prototype.createDocumentFragmentForSync = function() {
                    var t, e, n, i, o, r, s, u, c, l;
                    for(e = document.createDocumentFragment(), u = this.shadowElement.childNodes, n = 0, o = u.length; o > n; n++)s = u[n], e.appendChild(s.cloneNode(!0));
                    for(c = a(e), i = 0, r = c.length; r > i; i++)t = c[i], (l = this.elementStore.remove(t)) && t.parentNode.replaceChild(l, t);
                    return e;
                }, a = function(t) {
                    return t.querySelectorAll("[data-trix-store-key]");
                }, s = function(t, e) {
                    return u(t.innerHTML) === u(e.innerHTML);
                }, u = function(t) {
                    return t.replace(/&nbsp;/g, " ");
                }, r;
            }(e.ObjectView);
        }).call(this), (function() {
            var t, n, i, o, r, s = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, a = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)u.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, u = {}.hasOwnProperty;
            i = e.findClosestElementFromNode, o = e.handleEvent, r = e.innerElementIsActive, n = e.defer, t = e.AttachmentView.attachmentSelector, e.CompositionController = function(u) {
                function c(n, i) {
                    this.element = n, this.composition = i, this.didClickAttachment = s(this.didClickAttachment, this), this.didBlur = s(this.didBlur, this), this.didFocus = s(this.didFocus, this), this.documentView = new e.DocumentView(this.composition.document, {
                        element: this.element
                    }), o("focus", {
                        onElement: this.element,
                        withCallback: this.didFocus
                    }), o("blur", {
                        onElement: this.element,
                        withCallback: this.didBlur
                    }), o("click", {
                        onElement: this.element,
                        matchingSelector: "a[contenteditable=false]",
                        preventDefault: !0
                    }), o("mousedown", {
                        onElement: this.element,
                        matchingSelector: t,
                        withCallback: this.didClickAttachment
                    }), o("click", {
                        onElement: this.element,
                        matchingSelector: "a" + t,
                        preventDefault: !0
                    });
                }
                return a(c, u), c.prototype.didFocus = function() {
                    var t, e, n;
                    return t = function(t) {
                        return function() {
                            var e;
                            return t.focused ? void 0 : (t.focused = !0, null != (e = t.delegate) && "function" == typeof e.compositionControllerDidFocus ? e.compositionControllerDidFocus() : void 0);
                        };
                    }(this), null != (e = null != (n = this.blurPromise) ? n.then(t) : void 0) ? e : t();
                }, c.prototype.didBlur = function() {
                    return this.blurPromise = new Promise(function(t) {
                        return function(e) {
                            return n(function() {
                                var n;
                                return r(t.element) || (t.focused = null, null != (n = t.delegate) && "function" == typeof n.compositionControllerDidBlur && n.compositionControllerDidBlur()), t.blurPromise = null, e();
                            });
                        };
                    }(this));
                }, c.prototype.didClickAttachment = function(t, e) {
                    var n, o, r;
                    return n = this.findAttachmentForElement(e), o = null != i(t.target, {
                        matchingSelector: "figcaption"
                    }), null != (r = this.delegate) && "function" == typeof r.compositionControllerDidSelectAttachment ? r.compositionControllerDidSelectAttachment(n, {
                        editCaption: o
                    }) : void 0;
                }, c.prototype.getSerializableElement = function() {
                    return this.isEditingAttachment() ? this.documentView.shadowElement : this.element;
                }, c.prototype.render = function() {
                    var t, e, n;
                    return this.revision !== this.composition.revision && (this.documentView.setDocument(this.composition.document), this.documentView.render(), this.revision = this.composition.revision), this.canSyncDocumentView() && !this.documentView.isSynced() && (null != (t = this.delegate) && "function" == typeof t.compositionControllerWillSyncDocumentView && t.compositionControllerWillSyncDocumentView(), this.documentView.sync(), null != (e = this.delegate) && "function" == typeof e.compositionControllerDidSyncDocumentView && e.compositionControllerDidSyncDocumentView()), null != (n = this.delegate) && "function" == typeof n.compositionControllerDidRender ? n.compositionControllerDidRender() : void 0;
                }, c.prototype.rerenderViewForObject = function(t) {
                    return this.invalidateViewForObject(t), this.render();
                }, c.prototype.invalidateViewForObject = function(t) {
                    return this.documentView.invalidateViewForObject(t);
                }, c.prototype.isViewCachingEnabled = function() {
                    return this.documentView.isViewCachingEnabled();
                }, c.prototype.enableViewCaching = function() {
                    return this.documentView.enableViewCaching();
                }, c.prototype.disableViewCaching = function() {
                    return this.documentView.disableViewCaching();
                }, c.prototype.refreshViewCache = function() {
                    return this.documentView.garbageCollectCachedViews();
                }, c.prototype.isEditingAttachment = function() {
                    return null != this.attachmentEditor;
                }, c.prototype.installAttachmentEditorForAttachment = function(t, n) {
                    var i, o, r;
                    if ((null != (r = this.attachmentEditor) ? r.attachment : void 0) !== t && (o = this.documentView.findElementForObject(t))) return this.uninstallAttachmentEditor(), i = this.composition.document.getAttachmentPieceForAttachment(t), this.attachmentEditor = new e.AttachmentEditorController(i, o, this.element, n), this.attachmentEditor.delegate = this;
                }, c.prototype.uninstallAttachmentEditor = function() {
                    var t;
                    return null != (t = this.attachmentEditor) ? t.uninstall() : void 0;
                }, c.prototype.didUninstallAttachmentEditor = function() {
                    return this.attachmentEditor = null, this.render();
                }, c.prototype.attachmentEditorDidRequestUpdatingAttributesForAttachment = function(t, e) {
                    var n;
                    return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.updateAttributesForAttachment(t, e);
                }, c.prototype.attachmentEditorDidRequestRemovingAttributeForAttachment = function(t, e) {
                    var n;
                    return null != (n = this.delegate) && "function" == typeof n.compositionControllerWillUpdateAttachment && n.compositionControllerWillUpdateAttachment(e), this.composition.removeAttributeForAttachment(t, e);
                }, c.prototype.attachmentEditorDidRequestRemovalOfAttachment = function(t) {
                    var e;
                    return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestRemovalOfAttachment ? e.compositionControllerDidRequestRemovalOfAttachment(t) : void 0;
                }, c.prototype.attachmentEditorDidRequestDeselectingAttachment = function(t) {
                    var e;
                    return null != (e = this.delegate) && "function" == typeof e.compositionControllerDidRequestDeselectingAttachment ? e.compositionControllerDidRequestDeselectingAttachment(t) : void 0;
                }, c.prototype.canSyncDocumentView = function() {
                    return !this.isEditingAttachment();
                }, c.prototype.findAttachmentForElement = function(t) {
                    return this.composition.document.getAttachmentById(parseInt(t.dataset.trixId, 10));
                }, c;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, r = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, s = {}.hasOwnProperty;
            n = e.handleEvent, i = e.triggerEvent, t = e.findClosestElementFromNode, e.ToolbarController = function(e) {
                function s(t) {
                    this.element = t, this.didKeyDownDialogInput = o(this.didKeyDownDialogInput, this), this.didClickDialogButton = o(this.didClickDialogButton, this), this.didClickAttributeButton = o(this.didClickAttributeButton, this), this.didClickActionButton = o(this.didClickActionButton, this), this.attributes = {}, this.actions = {}, this.resetDialogInputs(), n("mousedown", {
                        onElement: this.element,
                        matchingSelector: a,
                        withCallback: this.didClickActionButton
                    }), n("mousedown", {
                        onElement: this.element,
                        matchingSelector: c,
                        withCallback: this.didClickAttributeButton
                    }), n("click", {
                        onElement: this.element,
                        matchingSelector: v,
                        preventDefault: !0
                    }), n("click", {
                        onElement: this.element,
                        matchingSelector: l,
                        withCallback: this.didClickDialogButton
                    }), n("keydown", {
                        onElement: this.element,
                        matchingSelector: h,
                        withCallback: this.didKeyDownDialogInput
                    });
                }
                var a, u, c, l, h, p, d, f, g, m, v;
                return r(s, e), c = "[data-trix-attribute]", a = "[data-trix-action]", v = c + ", " + a, p = "[data-trix-dialog]", u = p + "[data-trix-active]", l = p + " [data-trix-method]", h = p + " [data-trix-input]", s.prototype.didClickActionButton = function(t, e) {
                    var n, i, o;
                    return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = d(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) ? o.toolbarDidInvokeAction(n) : void 0;
                }, s.prototype.didClickAttributeButton = function(t, e) {
                    var n, i, o;
                    return null != (i = this.delegate) && i.toolbarDidClickButton(), t.preventDefault(), n = f(e), this.getDialog(n) ? this.toggleDialog(n) : null != (o = this.delegate) && o.toolbarDidToggleAttribute(n), this.refreshAttributeButtons();
                }, s.prototype.didClickDialogButton = function(e, n) {
                    var i, o;
                    return i = t(n, {
                        matchingSelector: p
                    }), o = n.getAttribute("data-trix-method"), this[o].call(this, i);
                }, s.prototype.didKeyDownDialogInput = function(t, e) {
                    var n, i;
                    return 13 === t.keyCode && (t.preventDefault(), n = e.getAttribute("name"), i = this.getDialog(n), this.setAttribute(i)), 27 === t.keyCode ? (t.preventDefault(), this.hideDialog()) : void 0;
                }, s.prototype.updateActions = function(t) {
                    return this.actions = t, this.refreshActionButtons();
                }, s.prototype.refreshActionButtons = function() {
                    return this.eachActionButton(function(t) {
                        return function(e, n) {
                            return e.disabled = t.actions[n] === !1;
                        };
                    }(this));
                }, s.prototype.eachActionButton = function(t) {
                    var e, n, i, o, r;
                    for(o = this.element.querySelectorAll(a), r = [], n = 0, i = o.length; i > n; n++)e = o[n], r.push(t(e, d(e)));
                    return r;
                }, s.prototype.updateAttributes = function(t) {
                    return this.attributes = t, this.refreshAttributeButtons();
                }, s.prototype.refreshAttributeButtons = function() {
                    return this.eachAttributeButton(function(t) {
                        return function(e, n) {
                            return e.disabled = t.attributes[n] === !1, t.attributes[n] || t.dialogIsVisible(n) ? (e.setAttribute("data-trix-active", ""), e.classList.add("trix-active")) : (e.removeAttribute("data-trix-active"), e.classList.remove("trix-active"));
                        };
                    }(this));
                }, s.prototype.eachAttributeButton = function(t) {
                    var e, n, i, o, r;
                    for(o = this.element.querySelectorAll(c), r = [], n = 0, i = o.length; i > n; n++)e = o[n], r.push(t(e, f(e)));
                    return r;
                }, s.prototype.applyKeyboardCommand = function(t) {
                    var e, n, o, r, s, a, u;
                    for(s = JSON.stringify(t.sort()), u = this.element.querySelectorAll("[data-trix-key]"), r = 0, a = u.length; a > r; r++)if (e = u[r], o = e.getAttribute("data-trix-key").split("+"), n = JSON.stringify(o.sort()), n === s) return i("mousedown", {
                        onElement: e
                    }), !0;
                    return !1;
                }, s.prototype.dialogIsVisible = function(t) {
                    var e;
                    return (e = this.getDialog(t)) ? e.hasAttribute("data-trix-active") : void 0;
                }, s.prototype.toggleDialog = function(t) {
                    return this.dialogIsVisible(t) ? this.hideDialog() : this.showDialog(t);
                }, s.prototype.showDialog = function(t) {
                    var e, n, i, o, r, s, a, u, c, l;
                    for(this.hideDialog(), null != (a = this.delegate) && a.toolbarWillShowDialog(), i = this.getDialog(t), i.setAttribute("data-trix-active", ""), i.classList.add("trix-active"), u = i.querySelectorAll("input[disabled]"), o = 0, s = u.length; s > o; o++)n = u[o], n.removeAttribute("disabled");
                    return (e = f(i)) && (r = m(i, t)) && (r.value = null != (c = this.attributes[e]) ? c : "", r.select()), null != (l = this.delegate) ? l.toolbarDidShowDialog(t) : void 0;
                }, s.prototype.setAttribute = function(t) {
                    var e, n, i;
                    return e = f(t), n = m(t, e), n.willValidate && !n.checkValidity() ? (n.setAttribute("data-trix-validate", ""), n.classList.add("trix-validate"), n.focus()) : (null != (i = this.delegate) && i.toolbarDidUpdateAttribute(e, n.value), this.hideDialog());
                }, s.prototype.removeAttribute = function(t) {
                    var e, n;
                    return e = f(t), null != (n = this.delegate) && n.toolbarDidRemoveAttribute(e), this.hideDialog();
                }, s.prototype.hideDialog = function() {
                    var t, e;
                    return (t = this.element.querySelector(u)) ? (t.removeAttribute("data-trix-active"), t.classList.remove("trix-active"), this.resetDialogInputs(), null != (e = this.delegate) ? e.toolbarDidHideDialog(g(t)) : void 0) : void 0;
                }, s.prototype.resetDialogInputs = function() {
                    var t, e, n, i, o;
                    for(i = this.element.querySelectorAll(h), o = [], t = 0, n = i.length; n > t; t++)e = i[t], e.setAttribute("disabled", "disabled"), e.removeAttribute("data-trix-validate"), o.push(e.classList.remove("trix-validate"));
                    return o;
                }, s.prototype.getDialog = function(t) {
                    return this.element.querySelector("[data-trix-dialog=" + t + "]");
                }, m = function(t, e) {
                    return null == e && (e = f(t)), t.querySelector("[data-trix-input][name='" + e + "']");
                }, d = function(t) {
                    return t.getAttribute("data-trix-action");
                }, f = function(t) {
                    var e;
                    return null != (e = t.getAttribute("data-trix-attribute")) ? e : t.getAttribute("data-trix-dialog-attribute");
                }, g = function(t) {
                    return t.getAttribute("data-trix-dialog");
                }, s;
            }(e.BasicObject);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.ImagePreloadOperation = function(e) {
                function n(t) {
                    this.url = t;
                }
                return t(n, e), n.prototype.perform = function(t) {
                    var e;
                    return e = new Image, e.onload = function(n) {
                        return function() {
                            return e.width = n.width = e.naturalWidth, e.height = n.height = e.naturalHeight, t(!0, e);
                        };
                    }(this), e.onerror = function() {
                        return t(!1);
                    }, e.src = this.url;
                }, n;
            }(e.Operation);
        }).call(this), (function() {
            var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, n = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var o in e)i.call(e, o) && (t[o] = e[o]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, i = {}.hasOwnProperty;
            e.Attachment = function(i) {
                function o(n) {
                    null == n && (n = {}), this.releaseFile = t(this.releaseFile, this), o.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n), this.didChangeAttributes();
                }
                return n(o, i), o.previewablePattern = /^image(\/(gif|png|jpe?g)|$)/, o.attachmentForFile = function(t) {
                    var e, n;
                    return n = this.attributesForFile(t), e = new this(n), e.setFile(t), e;
                }, o.attributesForFile = function(t) {
                    return new e.Hash({
                        filename: t.name,
                        filesize: t.size,
                        contentType: t.type
                    });
                }, o.fromJSON = function(t) {
                    return new this(t);
                }, o.prototype.getAttribute = function(t) {
                    return this.attributes.get(t);
                }, o.prototype.hasAttribute = function(t) {
                    return this.attributes.has(t);
                }, o.prototype.getAttributes = function() {
                    return this.attributes.toObject();
                }, o.prototype.setAttributes = function(t) {
                    var e, n, i;
                    return null == t && (t = {}), e = this.attributes.merge(t), this.attributes.isEqualTo(e) ? void 0 : (this.attributes = e, this.didChangeAttributes(), null != (n = this.previewDelegate) && "function" == typeof n.attachmentDidChangeAttributes && n.attachmentDidChangeAttributes(this), null != (i = this.delegate) && "function" == typeof i.attachmentDidChangeAttributes ? i.attachmentDidChangeAttributes(this) : void 0);
                }, o.prototype.didChangeAttributes = function() {
                    return this.isPreviewable() ? this.preloadURL() : void 0;
                }, o.prototype.isPending = function() {
                    return null != this.file && !(this.getURL() || this.getHref());
                }, o.prototype.isPreviewable = function() {
                    return this.attributes.has("previewable") ? this.attributes.get("previewable") : this.constructor.previewablePattern.test(this.getContentType());
                }, o.prototype.getType = function() {
                    return this.hasContent() ? "content" : this.isPreviewable() ? "preview" : "file";
                }, o.prototype.getURL = function() {
                    return this.attributes.get("url");
                }, o.prototype.getHref = function() {
                    return this.attributes.get("href");
                }, o.prototype.getFilename = function() {
                    var t;
                    return null != (t = this.attributes.get("filename")) ? t : "";
                }, o.prototype.getFilesize = function() {
                    return this.attributes.get("filesize");
                }, o.prototype.getFormattedFilesize = function() {
                    var t;
                    return t = this.attributes.get("filesize"), "number" == typeof t ? e.config.fileSize.formatter(t) : "";
                }, o.prototype.getExtension = function() {
                    var t;
                    return null != (t = this.getFilename().match(/\.(\w+)$/)) ? t[1].toLowerCase() : void 0;
                }, o.prototype.getContentType = function() {
                    return this.attributes.get("contentType");
                }, o.prototype.hasContent = function() {
                    return this.attributes.has("content");
                }, o.prototype.getContent = function() {
                    return this.attributes.get("content");
                }, o.prototype.getWidth = function() {
                    return this.attributes.get("width");
                }, o.prototype.getHeight = function() {
                    return this.attributes.get("height");
                }, o.prototype.getFile = function() {
                    return this.file;
                }, o.prototype.setFile = function(t) {
                    return this.file = t, this.isPreviewable() ? this.preloadFile() : void 0;
                }, o.prototype.releaseFile = function() {
                    return this.releasePreloadedFile(), this.file = null;
                }, o.prototype.getUploadProgress = function() {
                    var t;
                    return null != (t = this.uploadProgress) ? t : 0;
                }, o.prototype.setUploadProgress = function(t) {
                    var e;
                    return this.uploadProgress !== t ? (this.uploadProgress = t, null != (e = this.uploadProgressDelegate) && "function" == typeof e.attachmentDidChangeUploadProgress ? e.attachmentDidChangeUploadProgress(this) : void 0) : void 0;
                }, o.prototype.toJSON = function() {
                    return this.getAttributes();
                }, o.prototype.getCacheKey = function() {
                    return [
                        o.__super__.getCacheKey.apply(this, arguments),
                        this.attributes.getCacheKey(),
                        this.getPreviewURL()
                    ].join("/");
                }, o.prototype.getPreviewURL = function() {
                    return this.previewURL || this.preloadingURL;
                }, o.prototype.setPreviewURL = function(t) {
                    var e, n;
                    return t !== this.getPreviewURL() ? (this.previewURL = t, null != (e = this.previewDelegate) && "function" == typeof e.attachmentDidChangeAttributes && e.attachmentDidChangeAttributes(this), null != (n = this.delegate) && "function" == typeof n.attachmentDidChangePreviewURL ? n.attachmentDidChangePreviewURL(this) : void 0) : void 0;
                }, o.prototype.preloadURL = function() {
                    return this.preload(this.getURL(), this.releaseFile);
                }, o.prototype.preloadFile = function() {
                    return this.file ? (this.fileObjectURL = URL.createObjectURL(this.file), this.preload(this.fileObjectURL)) : void 0;
                }, o.prototype.releasePreloadedFile = function() {
                    return this.fileObjectURL ? (URL.revokeObjectURL(this.fileObjectURL), this.fileObjectURL = null) : void 0;
                }, o.prototype.preload = function(t, n) {
                    var i;
                    return t && t !== this.getPreviewURL() ? (this.preloadingURL = t, i = new e.ImagePreloadOperation(t), i.then(function(e) {
                        return function(i) {
                            var o, r;
                            return r = i.width, o = i.height, e.getWidth() && e.getHeight() || e.setAttributes({
                                width: r,
                                height: o
                            }), e.preloadingURL = null, e.setPreviewURL(t), "function" == typeof n ? n() : void 0;
                        };
                    }(this))["catch"](function(t) {
                        return function() {
                            return t.preloadingURL = null, "function" == typeof n ? n() : void 0;
                        };
                    }(this))) : void 0;
                }, o;
            }(e.Object);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Piece = function(n) {
                function i(t, n) {
                    null == n && (n = {}), i.__super__.constructor.apply(this, arguments), this.attributes = e.Hash.box(n);
                }
                return t(i, n), i.types = {}, i.registerType = function(t, e) {
                    return e.type = t, this.types[t] = e;
                }, i.fromJSON = function(t) {
                    var e;
                    return (e = this.types[t.type]) ? e.fromJSON(t) : void 0;
                }, i.prototype.copyWithAttributes = function(t) {
                    return new this.constructor(this.getValue(), t);
                }, i.prototype.copyWithAdditionalAttributes = function(t) {
                    return this.copyWithAttributes(this.attributes.merge(t));
                }, i.prototype.copyWithoutAttribute = function(t) {
                    return this.copyWithAttributes(this.attributes.remove(t));
                }, i.prototype.copy = function() {
                    return this.copyWithAttributes(this.attributes);
                }, i.prototype.getAttribute = function(t) {
                    return this.attributes.get(t);
                }, i.prototype.getAttributesHash = function() {
                    return this.attributes;
                }, i.prototype.getAttributes = function() {
                    return this.attributes.toObject();
                }, i.prototype.getCommonAttributes = function() {
                    var t, e, n;
                    return (n = pieceList.getPieceAtIndex(0)) ? (t = n.attributes, e = t.getKeys(), pieceList.eachPiece(function(n) {
                        return e = t.getKeysCommonToHash(n.attributes), t = t.slice(e);
                    }), t.toObject()) : {};
                }, i.prototype.hasAttribute = function(t) {
                    return this.attributes.has(t);
                }, i.prototype.hasSameStringValueAsPiece = function(t) {
                    return null != t && this.toString() === t.toString();
                }, i.prototype.hasSameAttributesAsPiece = function(t) {
                    return null != t && (this.attributes === t.attributes || this.attributes.isEqualTo(t.attributes));
                }, i.prototype.isBlockBreak = function() {
                    return !1;
                }, i.prototype.isEqualTo = function(t) {
                    return i.__super__.isEqualTo.apply(this, arguments) || this.hasSameConstructorAs(t) && this.hasSameStringValueAsPiece(t) && this.hasSameAttributesAsPiece(t);
                }, i.prototype.isEmpty = function() {
                    return 0 === this.length;
                }, i.prototype.isSerializable = function() {
                    return !0;
                }, i.prototype.toJSON = function() {
                    return {
                        type: this.constructor.type,
                        attributes: this.getAttributes()
                    };
                }, i.prototype.contentsForInspection = function() {
                    return {
                        type: this.constructor.type,
                        attributes: this.attributes.inspect()
                    };
                }, i.prototype.canBeGrouped = function() {
                    return this.hasAttribute("href");
                }, i.prototype.canBeGroupedWith = function(t) {
                    return this.getAttribute("href") === t.getAttribute("href");
                }, i.prototype.getLength = function() {
                    return this.length;
                }, i.prototype.canBeConsolidatedWith = function() {
                    return !1;
                }, i;
            }(e.Object);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Piece.registerType("attachment", e.AttachmentPiece = function(n) {
                function i(t) {
                    this.attachment = t, i.__super__.constructor.apply(this, arguments), this.length = 1, this.ensureAttachmentExclusivelyHasAttribute("href"), this.attachment.hasContent() || this.removeProhibitedAttributes();
                }
                return t(i, n), i.fromJSON = function(t) {
                    return new this(e.Attachment.fromJSON(t.attachment), t.attributes);
                }, i.permittedAttributes = [
                    "caption",
                    "presentation"
                ], i.prototype.ensureAttachmentExclusivelyHasAttribute = function(t) {
                    return this.hasAttribute(t) ? (this.attachment.hasAttribute(t) || this.attachment.setAttributes(this.attributes.slice(t)), this.attributes = this.attributes.remove(t)) : void 0;
                }, i.prototype.removeProhibitedAttributes = function() {
                    var t;
                    return t = this.attributes.slice(this.constructor.permittedAttributes), t.isEqualTo(this.attributes) ? void 0 : this.attributes = t;
                }, i.prototype.getValue = function() {
                    return this.attachment;
                }, i.prototype.isSerializable = function() {
                    return !this.attachment.isPending();
                }, i.prototype.getCaption = function() {
                    var t;
                    return null != (t = this.attributes.get("caption")) ? t : "";
                }, i.prototype.isEqualTo = function(t) {
                    var e;
                    return i.__super__.isEqualTo.apply(this, arguments) && this.attachment.id === (null != t && null != (e = t.attachment) ? e.id : void 0);
                }, i.prototype.toString = function() {
                    return e.OBJECT_REPLACEMENT_CHARACTER;
                }, i.prototype.toJSON = function() {
                    var t;
                    return t = i.__super__.toJSON.apply(this, arguments), t.attachment = this.attachment, t;
                }, i.prototype.getCacheKey = function() {
                    return [
                        i.__super__.getCacheKey.apply(this, arguments),
                        this.attachment.getCacheKey()
                    ].join("/");
                }, i.prototype.toConsole = function() {
                    return JSON.stringify(this.toString());
                }, i;
            }(e.Piece));
        }).call(this), (function() {
            var t, n = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var o in e)i.call(e, o) && (t[o] = e[o]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, i = {}.hasOwnProperty;
            t = e.normalizeNewlines, e.Piece.registerType("string", e.StringPiece = function(e) {
                function i(e) {
                    i.__super__.constructor.apply(this, arguments), this.string = t(e), this.length = this.string.length;
                }
                return n(i, e), i.fromJSON = function(t) {
                    return new this(t.string, t.attributes);
                }, i.prototype.getValue = function() {
                    return this.string;
                }, i.prototype.toString = function() {
                    return this.string.toString();
                }, i.prototype.isBlockBreak = function() {
                    return "\n" === this.toString() && this.getAttribute("blockBreak") === !0;
                }, i.prototype.toJSON = function() {
                    var t;
                    return t = i.__super__.toJSON.apply(this, arguments), t.string = this.string, t;
                }, i.prototype.canBeConsolidatedWith = function(t) {
                    return null != t && this.hasSameConstructorAs(t) && this.hasSameAttributesAsPiece(t);
                }, i.prototype.consolidateWith = function(t) {
                    return new this.constructor(this.toString() + t.toString(), this.attributes);
                }, i.prototype.splitAtOffset = function(t) {
                    var e, n;
                    return 0 === t ? (e = null, n = this) : t === this.length ? (e = this, n = null) : (e = new this.constructor(this.string.slice(0, t), this.attributes), n = new this.constructor(this.string.slice(t), this.attributes)), [
                        e,
                        n
                    ];
                }, i.prototype.toConsole = function() {
                    var t;
                    return t = this.string, t.length > 15 && (t = t.slice(0, 14) + "…"), JSON.stringify(t.toString());
                }, i;
            }(e.Piece));
        }).call(this), (function() {
            var t, n = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var o in e)i.call(e, o) && (t[o] = e[o]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, i = {}.hasOwnProperty, o = [].slice;
            t = e.spliceArray, e.SplittableList = function(e) {
                function i(t) {
                    null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.objects = t.slice(0), this.length = this.objects.length;
                }
                var r, s, a;
                return n(i, e), i.box = function(t) {
                    return t instanceof this ? t : new this(t);
                }, i.prototype.indexOf = function(t) {
                    return this.objects.indexOf(t);
                }, i.prototype.splice = function() {
                    var e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [], new this.constructor(t.apply(null, [
                        this.objects
                    ].concat(o.call(e))));
                }, i.prototype.eachObject = function(t) {
                    var e, n, i, o, r, s;
                    for(r = this.objects, s = [], n = e = 0, i = r.length; i > e; n = ++e)o = r[n], s.push(t(o, n));
                    return s;
                }, i.prototype.insertObjectAtIndex = function(t, e) {
                    return this.splice(e, 0, t);
                }, i.prototype.insertSplittableListAtIndex = function(t, e) {
                    return this.splice.apply(this, [
                        e,
                        0
                    ].concat(o.call(t.objects)));
                }, i.prototype.insertSplittableListAtPosition = function(t, e) {
                    var n, i, o;
                    return o = this.splitObjectAtPosition(e), i = o[0], n = o[1], new this.constructor(i).insertSplittableListAtIndex(t, n);
                }, i.prototype.editObjectAtIndex = function(t, e) {
                    return this.replaceObjectAtIndex(e(this.objects[t]), t);
                }, i.prototype.replaceObjectAtIndex = function(t, e) {
                    return this.splice(e, 1, t);
                }, i.prototype.removeObjectAtIndex = function(t) {
                    return this.splice(t, 1);
                }, i.prototype.getObjectAtIndex = function(t) {
                    return this.objects[t];
                }, i.prototype.getSplittableListInRange = function(t) {
                    var e, n, i, o;
                    return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n.slice(e, o + 1));
                }, i.prototype.selectSplittableList = function(t) {
                    var e, n;
                    return n = (function() {
                        var n, i, o, r;
                        for(o = this.objects, r = [], n = 0, i = o.length; i > n; n++)e = o[n], t(e) && r.push(e);
                        return r;
                    }).call(this), new this.constructor(n);
                }, i.prototype.removeObjectsInRange = function(t) {
                    var e, n, i, o;
                    return i = this.splitObjectsAtRange(t), n = i[0], e = i[1], o = i[2], new this.constructor(n).splice(e, o - e + 1);
                }, i.prototype.transformObjectsInRange = function(t, e) {
                    var n, i, o, r, s, a, u;
                    return s = this.splitObjectsAtRange(t), r = s[0], i = s[1], a = s[2], u = function() {
                        var t, s, u;
                        for(u = [], n = t = 0, s = r.length; s > t; n = ++t)o = r[n], u.push(n >= i && a >= n ? e(o) : o);
                        return u;
                    }(), new this.constructor(u);
                }, i.prototype.splitObjectsAtRange = function(t) {
                    var e, n, i, o, s, u;
                    return o = this.splitObjectAtPosition(a(t)), n = o[0], e = o[1], i = o[2], s = new this.constructor(n).splitObjectAtPosition(r(t) + i), n = s[0], u = s[1], [
                        n,
                        e,
                        u - 1
                    ];
                }, i.prototype.getObjectAtPosition = function(t) {
                    var e, n, i;
                    return i = this.findIndexAndOffsetAtPosition(t), e = i.index, n = i.offset, this.objects[e];
                }, i.prototype.splitObjectAtPosition = function(t) {
                    var e, n, i, o, r, s, a, u, c, l;
                    return s = this.findIndexAndOffsetAtPosition(t), e = s.index, r = s.offset, o = this.objects.slice(0), null != e ? 0 === r ? (c = e, l = 0) : (i = this.getObjectAtIndex(e), a = i.splitAtOffset(r), n = a[0], u = a[1], o.splice(e, 1, n, u), c = e + 1, l = n.getLength() - r) : (c = o.length, l = 0), [
                        o,
                        c,
                        l
                    ];
                }, i.prototype.consolidate = function() {
                    var t, e, n, i, o, r;
                    for(i = [], o = this.objects[0], r = this.objects.slice(1), t = 0, e = r.length; e > t; t++)n = r[t], ("function" == typeof o.canBeConsolidatedWith ? o.canBeConsolidatedWith(n) : void 0) ? o = o.consolidateWith(n) : (i.push(o), o = n);
                    return null != o && i.push(o), new this.constructor(i);
                }, i.prototype.consolidateFromIndexToIndex = function(t, e) {
                    var n, i, r;
                    return i = this.objects.slice(0), r = i.slice(t, e + 1), n = new this.constructor(r).consolidate().toArray(), this.splice.apply(this, [
                        t,
                        r.length
                    ].concat(o.call(n)));
                }, i.prototype.findIndexAndOffsetAtPosition = function(t) {
                    var e, n, i, o, r, s, a;
                    for(e = 0, a = this.objects, i = n = 0, o = a.length; o > n; i = ++n){
                        if (s = a[i], r = e + s.getLength(), t >= e && r > t) return {
                            index: i,
                            offset: t - e
                        };
                        e = r;
                    }
                    return {
                        index: null,
                        offset: null
                    };
                }, i.prototype.findPositionAtIndexAndOffset = function(t, e) {
                    var n, i, o, r, s, a;
                    for(s = 0, a = this.objects, n = i = 0, o = a.length; o > i; n = ++i)if (r = a[n], t > n) s += r.getLength();
                    else if (n === t) {
                        s += e;
                        break;
                    }
                    return s;
                }, i.prototype.getEndPosition = function() {
                    var t, e;
                    return null != this.endPosition ? this.endPosition : this.endPosition = (function() {
                        var n, i, o;
                        for(e = 0, o = this.objects, n = 0, i = o.length; i > n; n++)t = o[n], e += t.getLength();
                        return e;
                    }).call(this);
                }, i.prototype.toString = function() {
                    return this.objects.join("");
                }, i.prototype.toArray = function() {
                    return this.objects.slice(0);
                }, i.prototype.toJSON = function() {
                    return this.toArray();
                }, i.prototype.isEqualTo = function(t) {
                    return i.__super__.isEqualTo.apply(this, arguments) || s(this.objects, null != t ? t.objects : void 0);
                }, s = function(t, e) {
                    var n, i, o, r, s;
                    if (null == e && (e = []), t.length !== e.length) return !1;
                    for(s = !0, i = n = 0, o = t.length; o > n; i = ++n)r = t[i], s && !r.isEqualTo(e[i]) && (s = !1);
                    return s;
                }, i.prototype.contentsForInspection = function() {
                    var t;
                    return {
                        objects: "[" + (function() {
                            var e, n, i, o;
                            for(i = this.objects, o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(t.inspect());
                            return o;
                        }).call(this).join(", ") + "]"
                    };
                }, a = function(t) {
                    return t[0];
                }, r = function(t) {
                    return t[1];
                }, i;
            }(e.Object);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.Text = function(n) {
                function i(t) {
                    var n;
                    null == t && (t = []), i.__super__.constructor.apply(this, arguments), this.pieceList = new e.SplittableList(function() {
                        var e, i, o;
                        for(o = [], e = 0, i = t.length; i > e; e++)n = t[e], n.isEmpty() || o.push(n);
                        return o;
                    }());
                }
                return t(i, n), i.textForAttachmentWithAttributes = function(t, n) {
                    var i;
                    return i = new e.AttachmentPiece(t, n), new this([
                        i
                    ]);
                }, i.textForStringWithAttributes = function(t, n) {
                    var i;
                    return i = new e.StringPiece(t, n), new this([
                        i
                    ]);
                }, i.fromJSON = function(t) {
                    var n, i;
                    return i = function() {
                        var i, o, r;
                        for(r = [], i = 0, o = t.length; o > i; i++)n = t[i], r.push(e.Piece.fromJSON(n));
                        return r;
                    }(), new this(i);
                }, i.prototype.copy = function() {
                    return this.copyWithPieceList(this.pieceList);
                }, i.prototype.copyWithPieceList = function(t) {
                    return new this.constructor(t.consolidate().toArray());
                }, i.prototype.copyUsingObjectMap = function(t) {
                    var e, n;
                    return n = (function() {
                        var n, i, o, r, s;
                        for(o = this.getPieces(), s = [], n = 0, i = o.length; i > n; n++)e = o[n], s.push(null != (r = t.find(e)) ? r : e);
                        return s;
                    }).call(this), new this.constructor(n);
                }, i.prototype.appendText = function(t) {
                    return this.insertTextAtPosition(t, this.getLength());
                }, i.prototype.insertTextAtPosition = function(t, e) {
                    return this.copyWithPieceList(this.pieceList.insertSplittableListAtPosition(t.pieceList, e));
                }, i.prototype.removeTextAtRange = function(t) {
                    return this.copyWithPieceList(this.pieceList.removeObjectsInRange(t));
                }, i.prototype.replaceTextAtRange = function(t, e) {
                    return this.removeTextAtRange(e).insertTextAtPosition(t, e[0]);
                }, i.prototype.moveTextFromRangeToPosition = function(t, e) {
                    var n, i;
                    if (!(t[0] <= e && e <= t[1])) return i = this.getTextAtRange(t), n = i.getLength(), t[0] < e && (e -= n), this.removeTextAtRange(t).insertTextAtPosition(i, e);
                }, i.prototype.addAttributeAtRange = function(t, e, n) {
                    var i;
                    return i = {}, i[t] = e, this.addAttributesAtRange(i, n);
                }, i.prototype.addAttributesAtRange = function(t, e) {
                    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function(e) {
                        return e.copyWithAdditionalAttributes(t);
                    }));
                }, i.prototype.removeAttributeAtRange = function(t, e) {
                    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function(e) {
                        return e.copyWithoutAttribute(t);
                    }));
                }, i.prototype.setAttributesAtRange = function(t, e) {
                    return this.copyWithPieceList(this.pieceList.transformObjectsInRange(e, function(e) {
                        return e.copyWithAttributes(t);
                    }));
                }, i.prototype.getAttributesAtPosition = function(t) {
                    var e, n;
                    return null != (e = null != (n = this.pieceList.getObjectAtPosition(t)) ? n.getAttributes() : void 0) ? e : {};
                }, i.prototype.getCommonAttributes = function() {
                    var t, n;
                    return t = (function() {
                        var t, e, i, o;
                        for(i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++)n = i[t], o.push(n.getAttributes());
                        return o;
                    }).call(this), e.Hash.fromCommonAttributesOfObjects(t).toObject();
                }, i.prototype.getCommonAttributesAtRange = function(t) {
                    var e;
                    return null != (e = this.getTextAtRange(t).getCommonAttributes()) ? e : {};
                }, i.prototype.getExpandedRangeForAttributeAtOffset = function(t, e) {
                    var n, i, o;
                    for(n = o = e, i = this.getLength(); n > 0 && this.getCommonAttributesAtRange([
                        n - 1,
                        o
                    ])[t];)n--;
                    for(; i > o && this.getCommonAttributesAtRange([
                        e,
                        o + 1
                    ])[t];)o++;
                    return [
                        n,
                        o
                    ];
                }, i.prototype.getTextAtRange = function(t) {
                    return this.copyWithPieceList(this.pieceList.getSplittableListInRange(t));
                }, i.prototype.getStringAtRange = function(t) {
                    return this.pieceList.getSplittableListInRange(t).toString();
                }, i.prototype.getStringAtPosition = function(t) {
                    return this.getStringAtRange([
                        t,
                        t + 1
                    ]);
                }, i.prototype.startsWithString = function(t) {
                    return this.getStringAtRange([
                        0,
                        t.length
                    ]) === t;
                }, i.prototype.endsWithString = function(t) {
                    var e;
                    return e = this.getLength(), this.getStringAtRange([
                        e - t.length,
                        e
                    ]) === t;
                }, i.prototype.getAttachmentPieces = function() {
                    var t, e, n, i, o;
                    for(i = this.pieceList.toArray(), o = [], t = 0, e = i.length; e > t; t++)n = i[t], null != n.attachment && o.push(n);
                    return o;
                }, i.prototype.getAttachments = function() {
                    var t, e, n, i, o;
                    for(i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++)n = i[t], o.push(n.attachment);
                    return o;
                }, i.prototype.getAttachmentAndPositionById = function(t) {
                    var e, n, i, o, r, s;
                    for(o = 0, r = this.pieceList.toArray(), e = 0, n = r.length; n > e; e++){
                        if (i = r[e], (null != (s = i.attachment) ? s.id : void 0) === t) return {
                            attachment: i.attachment,
                            position: o
                        };
                        o += i.length;
                    }
                    return {
                        attachment: null,
                        position: null
                    };
                }, i.prototype.getAttachmentById = function(t) {
                    var e, n, i;
                    return i = this.getAttachmentAndPositionById(t), e = i.attachment, n = i.position, e;
                }, i.prototype.getRangeOfAttachment = function(t) {
                    var e, n;
                    return n = this.getAttachmentAndPositionById(t.id), t = n.attachment, e = n.position, null != t ? [
                        e,
                        e + 1
                    ] : void 0;
                }, i.prototype.updateAttributesForAttachment = function(t, e) {
                    var n;
                    return (n = this.getRangeOfAttachment(e)) ? this.addAttributesAtRange(t, n) : this;
                }, i.prototype.getLength = function() {
                    return this.pieceList.getEndPosition();
                }, i.prototype.isEmpty = function() {
                    return 0 === this.getLength();
                }, i.prototype.isEqualTo = function(t) {
                    var e;
                    return i.__super__.isEqualTo.apply(this, arguments) || (null != t && null != (e = t.pieceList) ? e.isEqualTo(this.pieceList) : void 0);
                }, i.prototype.isBlockBreak = function() {
                    return 1 === this.getLength() && this.pieceList.getObjectAtIndex(0).isBlockBreak();
                }, i.prototype.eachPiece = function(t) {
                    return this.pieceList.eachObject(t);
                }, i.prototype.getPieces = function() {
                    return this.pieceList.toArray();
                }, i.prototype.getPieceAtPosition = function(t) {
                    return this.pieceList.getObjectAtPosition(t);
                }, i.prototype.contentsForInspection = function() {
                    return {
                        pieceList: this.pieceList.inspect()
                    };
                }, i.prototype.toSerializableText = function() {
                    var t;
                    return t = this.pieceList.selectSplittableList(function(t) {
                        return t.isSerializable();
                    }), this.copyWithPieceList(t);
                }, i.prototype.toString = function() {
                    return this.pieceList.toString();
                }, i.prototype.toJSON = function() {
                    return this.pieceList.toJSON();
                }, i.prototype.toConsole = function() {
                    var t;
                    return JSON.stringify((function() {
                        var e, n, i, o;
                        for(i = this.pieceList.toArray(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(JSON.parse(t.toConsole()));
                        return o;
                    }).call(this));
                }, i;
            }(e.Object);
        }).call(this), (function() {
            var t, n, i, o, r, s = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)a.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, a = {}.hasOwnProperty, u = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            }, c = [].slice;
            t = e.arraysAreEqual, r = e.spliceArray, i = e.getBlockConfig, n = e.getBlockAttributeNames, o = e.getListAttributeNames, e.Block = function(n) {
                function a(t, n) {
                    null == t && (t = new e.Text), null == n && (n = []), a.__super__.constructor.apply(this, arguments), this.text = h(t), this.attributes = n;
                }
                var l, h, p, d, f, g, m, v, y;
                return s(a, n), a.fromJSON = function(t) {
                    var n;
                    return n = e.Text.fromJSON(t.text), new this(n, t.attributes);
                }, a.prototype.isEmpty = function() {
                    return this.text.isBlockBreak();
                }, a.prototype.isEqualTo = function(e) {
                    return a.__super__.isEqualTo.apply(this, arguments) || this.text.isEqualTo(null != e ? e.text : void 0) && t(this.attributes, null != e ? e.attributes : void 0);
                }, a.prototype.copyWithText = function(t) {
                    return new this.constructor(t, this.attributes);
                }, a.prototype.copyWithoutText = function() {
                    return this.copyWithText(null);
                }, a.prototype.copyWithAttributes = function(t) {
                    return new this.constructor(this.text, t);
                }, a.prototype.copyWithoutAttributes = function() {
                    return this.copyWithAttributes(null);
                }, a.prototype.copyUsingObjectMap = function(t) {
                    var e;
                    return this.copyWithText((e = t.find(this.text)) ? e : this.text.copyUsingObjectMap(t));
                }, a.prototype.addAttribute = function(t) {
                    var e;
                    return e = this.attributes.concat(d(t)), this.copyWithAttributes(e);
                }, a.prototype.removeAttribute = function(t) {
                    var e, n;
                    return n = i(t).listAttribute, e = g(g(this.attributes, t), n), this.copyWithAttributes(e);
                }, a.prototype.removeLastAttribute = function() {
                    return this.removeAttribute(this.getLastAttribute());
                }, a.prototype.getLastAttribute = function() {
                    return f(this.attributes);
                }, a.prototype.getAttributes = function() {
                    return this.attributes.slice(0);
                }, a.prototype.getAttributeLevel = function() {
                    return this.attributes.length;
                }, a.prototype.getAttributeAtLevel = function(t) {
                    return this.attributes[t - 1];
                }, a.prototype.hasAttribute = function(t) {
                    return u.call(this.attributes, t) >= 0;
                }, a.prototype.hasAttributes = function() {
                    return this.getAttributeLevel() > 0;
                }, a.prototype.getLastNestableAttribute = function() {
                    return f(this.getNestableAttributes());
                }, a.prototype.getNestableAttributes = function() {
                    var t, e, n, o, r;
                    for(o = this.attributes, r = [], e = 0, n = o.length; n > e; e++)t = o[e], i(t).nestable && r.push(t);
                    return r;
                }, a.prototype.getNestingLevel = function() {
                    return this.getNestableAttributes().length;
                }, a.prototype.decreaseNestingLevel = function() {
                    var t;
                    return (t = this.getLastNestableAttribute()) ? this.removeAttribute(t) : this;
                }, a.prototype.increaseNestingLevel = function() {
                    var t, e, n;
                    return (t = this.getLastNestableAttribute()) ? (n = this.attributes.lastIndexOf(t), e = r.apply(null, [
                        this.attributes,
                        n + 1,
                        0
                    ].concat(c.call(d(t)))), this.copyWithAttributes(e)) : this;
                }, a.prototype.getListItemAttributes = function() {
                    var t, e, n, o, r;
                    for(o = this.attributes, r = [], e = 0, n = o.length; n > e; e++)t = o[e], i(t).listAttribute && r.push(t);
                    return r;
                }, a.prototype.isListItem = function() {
                    var t;
                    return null != (t = i(this.getLastAttribute())) ? t.listAttribute : void 0;
                }, a.prototype.isTerminalBlock = function() {
                    var t;
                    return null != (t = i(this.getLastAttribute())) ? t.terminal : void 0;
                }, a.prototype.breaksOnReturn = function() {
                    var t;
                    return null != (t = i(this.getLastAttribute())) ? t.breakOnReturn : void 0;
                }, a.prototype.findLineBreakInDirectionFromPosition = function(t, e) {
                    var n, i;
                    return i = this.toString(), n = function() {
                        switch(t){
                            case "forward":
                                return i.indexOf("\n", e);
                            case "backward":
                                return i.slice(0, e).lastIndexOf("\n");
                        }
                    }(), -1 !== n ? n : void 0;
                }, a.prototype.contentsForInspection = function() {
                    return {
                        text: this.text.inspect(),
                        attributes: this.attributes
                    };
                }, a.prototype.toString = function() {
                    return this.text.toString();
                }, a.prototype.toJSON = function() {
                    return {
                        text: this.text,
                        attributes: this.attributes
                    };
                }, a.prototype.getLength = function() {
                    return this.text.getLength();
                }, a.prototype.canBeConsolidatedWith = function(t) {
                    return !this.hasAttributes() && !t.hasAttributes();
                }, a.prototype.consolidateWith = function(t) {
                    var n, i;
                    return n = e.Text.textForStringWithAttributes("\n"), i = this.getTextWithoutBlockBreak().appendText(n), this.copyWithText(i.appendText(t.text));
                }, a.prototype.splitAtOffset = function(t) {
                    var e, n;
                    return 0 === t ? (e = null, n = this) : t === this.getLength() ? (e = this, n = null) : (e = this.copyWithText(this.text.getTextAtRange([
                        0,
                        t
                    ])), n = this.copyWithText(this.text.getTextAtRange([
                        t,
                        this.getLength()
                    ]))), [
                        e,
                        n
                    ];
                }, a.prototype.getBlockBreakPosition = function() {
                    return this.text.getLength() - 1;
                }, a.prototype.getTextWithoutBlockBreak = function() {
                    return m(this.text) ? this.text.getTextAtRange([
                        0,
                        this.getBlockBreakPosition()
                    ]) : this.text.copy();
                }, a.prototype.canBeGrouped = function(t) {
                    return this.attributes[t];
                }, a.prototype.canBeGroupedWith = function(t, e) {
                    var n, r, s, a;
                    return s = t.getAttributes(), r = s[e], n = this.attributes[e], n === r && !(i(n).group === !1 && (a = s[e + 1], u.call(o(), a) < 0));
                }, h = function(t) {
                    return t = y(t), t = l(t);
                }, y = function(t) {
                    var n, i, o, r, s, a;
                    return r = !1, a = t.getPieces(), i = 2 <= a.length ? c.call(a, 0, n = a.length - 1) : (n = 0, []), o = a[n++], null == o ? t : (i = function() {
                        var t, e, n;
                        for(n = [], t = 0, e = i.length; e > t; t++)s = i[t], s.isBlockBreak() ? (r = !0, n.push(v(s))) : n.push(s);
                        return n;
                    }(), r ? new e.Text(c.call(i).concat([
                        o
                    ])) : t);
                }, p = e.Text.textForStringWithAttributes("\n", {
                    blockBreak: !0
                }), l = function(t) {
                    return m(t) ? t : t.appendText(p);
                }, m = function(t) {
                    var e, n;
                    return n = t.getLength(), 0 === n ? !1 : (e = t.getTextAtRange([
                        n - 1,
                        n
                    ]), e.isBlockBreak());
                }, v = function(t) {
                    return t.copyWithoutAttribute("blockBreak");
                }, d = function(t) {
                    var e;
                    return e = i(t).listAttribute, null != e ? [
                        e,
                        t
                    ] : [
                        t
                    ];
                }, f = function(t) {
                    return t.slice(-1)[0];
                }, g = function(t, e) {
                    var n;
                    return n = t.lastIndexOf(e), -1 === n ? t : r(t, n, 1);
                }, a;
            }(e.Object);
        }).call(this), (function() {
            var t, n, i, o = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)r.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, r = {}.hasOwnProperty, s = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            }, a = [].slice;
            n = e.tagName, i = e.walkTree, t = e.nodeIsAttachmentElement, e.HTMLSanitizer = function(r) {
                function u(t, e) {
                    var n;
                    n = null != e ? e : {}, this.allowedAttributes = n.allowedAttributes, this.forbiddenProtocols = n.forbiddenProtocols, null == this.allowedAttributes && (this.allowedAttributes = c), null == this.forbiddenProtocols && (this.forbiddenProtocols = l), this.body = h(t);
                }
                var c, l, h, p;
                return o(u, r), c = "style href src width height class".split(" "), l = "javascript:".split(" "), u.sanitize = function(t, e) {
                    var n;
                    return n = new this(t, e), n.sanitize(), n;
                }, u.prototype.sanitize = function() {
                    return this.sanitizeElements(), this.normalizeListElementNesting();
                }, u.prototype.getHTML = function() {
                    return this.body.innerHTML;
                }, u.prototype.getBody = function() {
                    return this.body;
                }, u.prototype.sanitizeElements = function() {
                    var t, n, o, r, s;
                    for(s = i(this.body), r = []; s.nextNode();)switch(o = s.currentNode, o.nodeType){
                        case Node.ELEMENT_NODE:
                            p(o) ? r.push(o) : this.sanitizeElement(o);
                            break;
                        case Node.COMMENT_NODE:
                            r.push(o);
                    }
                    for(t = 0, n = r.length; n > t; t++)o = r[t], e.removeNode(o);
                    return this.body;
                }, u.prototype.sanitizeElement = function(t) {
                    var e, n, i, o, r;
                    for(t.hasAttribute("href") && (o = t.protocol, s.call(this.forbiddenProtocols, o) >= 0 && t.removeAttribute("href")), r = a.call(t.attributes), e = 0, n = r.length; n > e; e++)i = r[e].name, s.call(this.allowedAttributes, i) >= 0 || 0 === i.indexOf("data-trix") || t.removeAttribute(i);
                    return t;
                }, u.prototype.normalizeListElementNesting = function() {
                    var t, e, i, o, r;
                    for(r = a.call(this.body.querySelectorAll("ul,ol")), t = 0, e = r.length; e > t; t++)i = r[t], (o = i.previousElementSibling) && "li" === n(o) && o.appendChild(i);
                    return this.body;
                }, p = function(e) {
                    return (null != e ? e.nodeType : void 0) !== Node.ELEMENT_NODE || t(e) ? void 0 : "script" === n(e) || "false" === e.getAttribute("data-trix-serialize");
                }, h = function(t) {
                    var e, n, i, o, r;
                    for(null == t && (t = ""), t = t.replace(/<\/html[^>]*>[^]*$/i, "</html>"), e = document.implementation.createHTMLDocument(""), e.documentElement.innerHTML = t, r = e.head.querySelectorAll("style"), i = 0, o = r.length; o > i; i++)n = r[i], e.body.appendChild(n);
                    return e.body;
                }, u;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l, h, p = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)d.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, d = {}.hasOwnProperty, f = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = e.arraysAreEqual, s = e.makeElement, l = e.tagName, r = e.getBlockTagNames, h = e.walkTree, o = e.findClosestElementFromNode, i = e.elementContainsNode, a = e.nodeIsAttachmentElement, u = e.normalizeSpaces, n = e.breakableWhitespacePattern, c = e.squishBreakableWhitespace, e.HTMLParser = function(d) {
                function g(t, e) {
                    this.html = t, this.referenceElement = (null != e ? e : {}).referenceElement, this.blocks = [], this.blockElements = [], this.processedElements = [];
                }
                var m, v, y, b, A, C, x, w, E, S, R, k;
                return p(g, d), g.parse = function(t, e) {
                    var n;
                    return n = new this(t, e), n.parse(), n;
                }, g.prototype.getDocument = function() {
                    return e.Document.fromJSON(this.blocks);
                }, g.prototype.parse = function() {
                    var t, n;
                    try {
                        for(this.createHiddenContainer(), t = e.HTMLSanitizer.sanitize(this.html).getHTML(), this.containerElement.innerHTML = t, n = h(this.containerElement, {
                            usingFilter: w
                        }); n.nextNode();)this.processNode(n.currentNode);
                        return this.translateBlockElementMarginsToNewlines();
                    } finally{
                        this.removeHiddenContainer();
                    }
                }, g.prototype.createHiddenContainer = function() {
                    return this.referenceElement ? (this.containerElement = this.referenceElement.cloneNode(!1), this.containerElement.removeAttribute("id"), this.containerElement.setAttribute("data-trix-internal", ""), this.containerElement.style.display = "none", this.referenceElement.parentNode.insertBefore(this.containerElement, this.referenceElement.nextSibling)) : (this.containerElement = s({
                        tagName: "div",
                        style: {
                            display: "none"
                        }
                    }), document.body.appendChild(this.containerElement));
                }, g.prototype.removeHiddenContainer = function() {
                    return e.removeNode(this.containerElement);
                }, w = function(t) {
                    return "style" === l(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                }, g.prototype.processNode = function(t) {
                    switch(t.nodeType){
                        case Node.TEXT_NODE:
                            if (!this.isInsignificantTextNode(t)) return this.appendBlockForTextNode(t), this.processTextNode(t);
                            break;
                        case Node.ELEMENT_NODE:
                            return this.appendBlockForElement(t), this.processElement(t);
                    }
                }, g.prototype.appendBlockForTextNode = function(e) {
                    var n, i, o;
                    return i = e.parentNode, i === this.currentBlockElement || i !== this.containerElement && !this.isBlockElement(i) ? void 0 : (n = this.getBlockAttributes(i), t(n, null != (o = this.currentBlock) ? o.attributes : void 0) ? void 0 : (this.currentBlock = this.appendBlockForAttributesWithElement(n, i), this.currentBlockElement = i));
                }, g.prototype.appendBlockForElement = function(e) {
                    var n, o, r, s;
                    if (r = this.isBlockElement(e), o = i(this.currentBlockElement, e), r && !this.isBlockElement(e.firstChild)) {
                        if (!(this.isInsignificantTextNode(e.firstChild) && this.isBlockElement(e.firstElementChild) || (n = this.getBlockAttributes(e), o && t(n, this.currentBlock.attributes)))) return this.currentBlock = this.appendBlockForAttributesWithElement(n, e), this.currentBlockElement = e;
                    } else if (this.currentBlockElement && !o && !r) return (s = this.findParentBlockElement(e)) ? this.appendBlockForElement(s) : (this.currentBlock = this.appendEmptyBlock(), this.currentBlockElement = null);
                }, g.prototype.findParentBlockElement = function(t) {
                    var e;
                    for(e = t.parentElement; e && e !== this.containerElement;){
                        if (this.isBlockElement(e) && f.call(this.blockElements, e) >= 0) return e;
                        e = e.parentElement;
                    }
                    return null;
                }, g.prototype.processTextNode = function(t) {
                    var e, n;
                    return n = t.data, v(t.parentNode) || (n = c(n), R(null != (e = t.previousSibling) ? e.textContent : void 0) && (n = C(n))), this.appendStringWithAttributes(n, this.getTextAttributes(t.parentNode));
                }, g.prototype.processElement = function(t) {
                    var e, n, i, o, r;
                    if (a(t)) return e = y(t), Object.keys(e).length && (o = this.getTextAttributes(t), this.appendAttachmentWithAttributes(e, o), t.innerHTML = ""), this.processedElements.push(t);
                    switch(l(t)){
                        case "br":
                            return this.isExtraBR(t) || this.isBlockElement(t.nextSibling) || this.appendStringWithAttributes("\n", this.getTextAttributes(t)), this.processedElements.push(t);
                        case "img":
                            e = {
                                url: t.getAttribute("src"),
                                contentType: "image"
                            }, i = A(t);
                            for(n in i)r = i[n], e[n] = r;
                            return this.appendAttachmentWithAttributes(e, this.getTextAttributes(t)), this.processedElements.push(t);
                        case "tr":
                            if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes("\n");
                            break;
                        case "td":
                            if (t.parentNode.firstChild !== t) return this.appendStringWithAttributes(" | ");
                    }
                }, g.prototype.appendBlockForAttributesWithElement = function(t, e) {
                    var n;
                    return this.blockElements.push(e), n = m(t), this.blocks.push(n), n;
                }, g.prototype.appendEmptyBlock = function() {
                    return this.appendBlockForAttributesWithElement([], null);
                }, g.prototype.appendStringWithAttributes = function(t, e) {
                    return this.appendPiece(S(t, e));
                }, g.prototype.appendAttachmentWithAttributes = function(t, e) {
                    return this.appendPiece(E(t, e));
                }, g.prototype.appendPiece = function(t) {
                    return 0 === this.blocks.length && this.appendEmptyBlock(), this.blocks[this.blocks.length - 1].text.push(t);
                }, g.prototype.appendStringToTextAtIndex = function(t, e) {
                    var n, i;
                    return i = this.blocks[e].text, n = i[i.length - 1], "string" === (null != n ? n.type : void 0) ? n.string += t : i.push(S(t));
                }, g.prototype.prependStringToTextAtIndex = function(t, e) {
                    var n, i;
                    return i = this.blocks[e].text, n = i[0], "string" === (null != n ? n.type : void 0) ? n.string = t + n.string : i.unshift(S(t));
                }, S = function(t, e) {
                    var n;
                    return null == e && (e = {}), n = "string", t = u(t), {
                        string: t,
                        attributes: e,
                        type: n
                    };
                }, E = function(t, e) {
                    var n;
                    return null == e && (e = {}), n = "attachment", {
                        attachment: t,
                        attributes: e,
                        type: n
                    };
                }, m = function(t) {
                    var e;
                    return null == t && (t = {}), e = [], {
                        text: e,
                        attributes: t
                    };
                }, g.prototype.getTextAttributes = function(t) {
                    var n, i, r, s, u, c, l, h, p, d, f, g, m;
                    r = {}, d = e.config.textAttributes;
                    for(n in d)if (u = d[n], u.tagName && o(t, {
                        matchingSelector: u.tagName,
                        untilNode: this.containerElement
                    })) r[n] = !0;
                    else if (u.parser) {
                        if (m = u.parser(t)) {
                            for(i = !1, f = this.findBlockElementAncestors(t), c = 0, p = f.length; p > c; c++)if (s = f[c], u.parser(s) === m) {
                                i = !0;
                                break;
                            }
                            i || (r[n] = m);
                        }
                    } else u.styleProperty && (m = t.style[u.styleProperty]) && (r[n] = m);
                    if (a(t) && (l = t.getAttribute("data-trix-attributes"))) {
                        g = JSON.parse(l);
                        for(h in g)m = g[h], r[h] = m;
                    }
                    return r;
                }, g.prototype.getBlockAttributes = function(t) {
                    var n, i, o, r;
                    for(i = []; t && t !== this.containerElement;){
                        r = e.config.blockAttributes;
                        for(n in r)o = r[n], o.parse !== !1 && l(t) === o.tagName && (("function" == typeof o.test ? o.test(t) : void 0) || !o.test) && (i.push(n), o.listAttribute && i.push(o.listAttribute));
                        t = t.parentNode;
                    }
                    return i.reverse();
                }, g.prototype.findBlockElementAncestors = function(t) {
                    var e, n;
                    for(e = []; t && t !== this.containerElement;)n = l(t), f.call(r(), n) >= 0 && e.push(t), t = t.parentNode;
                    return e;
                }, y = function(t) {
                    return JSON.parse(t.getAttribute("data-trix-attachment"));
                }, A = function(t) {
                    var e, n, i;
                    return i = t.getAttribute("width"), n = t.getAttribute("height"), e = {}, i && (e.width = parseInt(i, 10)), n && (e.height = parseInt(n, 10)), e;
                }, g.prototype.isBlockElement = function(t) {
                    var e;
                    if ((null != t ? t.nodeType : void 0) === Node.ELEMENT_NODE && !a(t) && !o(t, {
                        matchingSelector: "td",
                        untilNode: this.containerElement
                    })) return e = l(t), f.call(r(), e) >= 0 || "block" === window.getComputedStyle(t).display;
                }, g.prototype.isInsignificantTextNode = function(t) {
                    var e, n, i;
                    if ((null != t ? t.nodeType : void 0) === Node.TEXT_NODE && k(t.data) && (n = t.parentNode, i = t.previousSibling, e = t.nextSibling, (!x(n.previousSibling) || this.isBlockElement(n.previousSibling)) && !v(n))) return !i || this.isBlockElement(i) || !e || this.isBlockElement(e);
                }, g.prototype.isExtraBR = function(t) {
                    return "br" === l(t) && this.isBlockElement(t.parentNode) && t.parentNode.lastChild === t;
                }, v = function(t) {
                    var e;
                    return e = window.getComputedStyle(t).whiteSpace, "pre" === e || "pre-wrap" === e || "pre-line" === e;
                }, x = function(t) {
                    return t && !R(t.textContent);
                }, g.prototype.translateBlockElementMarginsToNewlines = function() {
                    var t, e, n, i, o, r, s, a;
                    for(e = this.getMarginOfDefaultBlockElement(), s = this.blocks, a = [], i = n = 0, o = s.length; o > n; i = ++n)t = s[i], (r = this.getMarginOfBlockElementAtIndex(i)) && (r.top > 2 * e.top && this.prependStringToTextAtIndex("\n", i), a.push(r.bottom > 2 * e.bottom ? this.appendStringToTextAtIndex("\n", i) : void 0));
                    return a;
                }, g.prototype.getMarginOfBlockElementAtIndex = function(t) {
                    var e, n;
                    return !(e = this.blockElements[t]) || !e.textContent || (n = l(e), f.call(r(), n) >= 0 || f.call(this.processedElements, e) >= 0) ? void 0 : b(e);
                }, g.prototype.getMarginOfDefaultBlockElement = function() {
                    var t;
                    return t = s(e.config.blockAttributes["default"].tagName), this.containerElement.appendChild(t), b(t);
                }, b = function(t) {
                    var e;
                    return e = window.getComputedStyle(t), "block" === e.display ? {
                        top: parseInt(e.marginTop),
                        bottom: parseInt(e.marginBottom)
                    } : void 0;
                }, C = function(t) {
                    return t.replace(RegExp("^" + n.source + "+"), "");
                }, k = function(t) {
                    return RegExp("^" + n.source + "*$").test(t);
                }, R = function(t) {
                    return /\s$/.test(t);
                }, g;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, s = {}.hasOwnProperty, a = [].slice, u = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = e.arraysAreEqual, i = e.normalizeRange, o = e.rangeIsCollapsed, n = e.getBlockConfig, e.Document = function(s) {
                function c(t) {
                    null == t && (t = []), c.__super__.constructor.apply(this, arguments), 0 === t.length && (t = [
                        new e.Block
                    ]), this.blockList = e.SplittableList.box(t);
                }
                var l;
                return r(c, s), c.fromJSON = function(t) {
                    var n, i;
                    return i = function() {
                        var i, o, r;
                        for(r = [], i = 0, o = t.length; o > i; i++)n = t[i], r.push(e.Block.fromJSON(n));
                        return r;
                    }(), new this(i);
                }, c.fromHTML = function(t, n) {
                    return e.HTMLParser.parse(t, n).getDocument();
                }, c.fromString = function(t, n) {
                    var i;
                    return i = e.Text.textForStringWithAttributes(t, n), new this([
                        new e.Block(i)
                    ]);
                }, c.prototype.isEmpty = function() {
                    var t;
                    return 1 === this.blockList.length && (t = this.getBlockAtIndex(0), t.isEmpty() && !t.hasAttributes());
                }, c.prototype.copy = function(t) {
                    var e;
                    return null == t && (t = {}), e = t.consolidateBlocks ? this.blockList.consolidate().toArray() : this.blockList.toArray(), new this.constructor(e);
                }, c.prototype.copyUsingObjectsFromDocument = function(t) {
                    var n;
                    return n = new e.ObjectMap(t.getObjects()), this.copyUsingObjectMap(n);
                }, c.prototype.copyUsingObjectMap = function(t) {
                    var e, n, i;
                    return n = (function() {
                        var n, o, r, s;
                        for(r = this.getBlocks(), s = [], n = 0, o = r.length; o > n; n++)e = r[n], s.push((i = t.find(e)) ? i : e.copyUsingObjectMap(t));
                        return s;
                    }).call(this), new this.constructor(n);
                }, c.prototype.copyWithBaseBlockAttributes = function(t) {
                    var e, n, i;
                    return null == t && (t = []), i = (function() {
                        var i, o, r, s;
                        for(r = this.getBlocks(), s = [], i = 0, o = r.length; o > i; i++)n = r[i], e = t.concat(n.getAttributes()), s.push(n.copyWithAttributes(e));
                        return s;
                    }).call(this), new this.constructor(i);
                }, c.prototype.replaceBlock = function(t, e) {
                    var n;
                    return n = this.blockList.indexOf(t), -1 === n ? this : new this.constructor(this.blockList.replaceObjectAtIndex(e, n));
                }, c.prototype.insertDocumentAtRange = function(t, e) {
                    var n, r, s, a, u, c, l;
                    return r = t.blockList, u = (e = i(e))[0], c = this.locationFromPosition(u), s = c.index, a = c.offset, l = this, n = this.getBlockAtPosition(u), o(e) && n.isEmpty() && !n.hasAttributes() ? l = new this.constructor(l.blockList.removeObjectAtIndex(s)) : n.getBlockBreakPosition() === a && u++, l = l.removeTextAtRange(e), new this.constructor(l.blockList.insertSplittableListAtPosition(r, u));
                }, c.prototype.mergeDocumentAtRange = function(e, n) {
                    var o, r, s, a, u, c, l, h, p, d, f, g;
                    return f = (n = i(n))[0], d = this.locationFromPosition(f), r = this.getBlockAtIndex(d.index).getAttributes(), o = e.getBaseBlockAttributes(), g = r.slice(-o.length), t(o, g) ? (l = r.slice(0, -o.length), c = e.copyWithBaseBlockAttributes(l)) : c = e.copy({
                        consolidateBlocks: !0
                    }).copyWithBaseBlockAttributes(r), s = c.getBlockCount(), a = c.getBlockAtIndex(0), t(r, a.getAttributes()) ? (u = a.getTextWithoutBlockBreak(), p = this.insertTextAtRange(u, n), s > 1 && (c = new this.constructor(c.getBlocks().slice(1)), h = f + u.getLength(), p = p.insertDocumentAtRange(c, h))) : p = this.insertDocumentAtRange(c, n), p;
                }, c.prototype.insertTextAtRange = function(t, e) {
                    var n, o, r, s, a;
                    return a = (e = i(e))[0], s = this.locationFromPosition(a), o = s.index, r = s.offset, n = this.removeTextAtRange(e), new this.constructor(n.blockList.editObjectAtIndex(o, function(e) {
                        return e.copyWithText(e.text.insertTextAtPosition(t, r));
                    }));
                }, c.prototype.removeTextAtRange = function(t) {
                    var e, n, r, s, a, u, c, l, h, p, d, f, g, m, v, y, b, A, C, x, w;
                    return p = t = i(t), l = p[0], A = p[1], o(t) ? this : (d = this.locationRangeFromRange(t), u = d[0], y = d[1], a = u.index, c = u.offset, s = this.getBlockAtIndex(a), v = y.index, b = y.offset, m = this.getBlockAtIndex(v), f = A - l === 1 && s.getBlockBreakPosition() === c && m.getBlockBreakPosition() !== b && "\n" === m.text.getStringAtPosition(b), f ? r = this.blockList.editObjectAtIndex(v, function(t) {
                        return t.copyWithText(t.text.removeTextAtRange([
                            b,
                            b + 1
                        ]));
                    }) : (h = s.text.getTextAtRange([
                        0,
                        c
                    ]), C = m.text.getTextAtRange([
                        b,
                        m.getLength()
                    ]), x = h.appendText(C), g = a !== v && 0 === c, w = g && s.getAttributeLevel() >= m.getAttributeLevel(), n = w ? m.copyWithText(x) : s.copyWithText(x), e = v + 1 - a, r = this.blockList.splice(a, e, n)), new this.constructor(r));
                }, c.prototype.moveTextFromRangeToPosition = function(t, e) {
                    var n, o, r, s, u, c, l, h, p, d;
                    return c = t = i(t), p = c[0], r = c[1], e >= p && r >= e ? this : (o = this.getDocumentAtRange(t), h = this.removeTextAtRange(t), u = e > p, u && (e -= o.getLength()), l = o.getBlocks(), s = l[0], n = 2 <= l.length ? a.call(l, 1) : [], 0 === n.length ? (d = s.getTextWithoutBlockBreak(), u && (e += 1)) : d = s.text, h = h.insertTextAtRange(d, e), 0 === n.length ? h : (o = new this.constructor(n), e += d.getLength(), h.insertDocumentAtRange(o, e)));
                }, c.prototype.addAttributeAtRange = function(t, e, i) {
                    var o;
                    return o = this.blockList, this.eachBlockAtRange(i, function(i, r, s) {
                        return o = o.editObjectAtIndex(s, function() {
                            return n(t) ? i.addAttribute(t, e) : r[0] === r[1] ? i : i.copyWithText(i.text.addAttributeAtRange(t, e, r));
                        });
                    }), new this.constructor(o);
                }, c.prototype.addAttribute = function(t, e) {
                    var n;
                    return n = this.blockList, this.eachBlock(function(i, o) {
                        return n = n.editObjectAtIndex(o, function() {
                            return i.addAttribute(t, e);
                        });
                    }), new this.constructor(n);
                }, c.prototype.removeAttributeAtRange = function(t, e) {
                    var i;
                    return i = this.blockList, this.eachBlockAtRange(e, function(e, o, r) {
                        return n(t) ? i = i.editObjectAtIndex(r, function() {
                            return e.removeAttribute(t);
                        }) : o[0] !== o[1] ? i = i.editObjectAtIndex(r, function() {
                            return e.copyWithText(e.text.removeAttributeAtRange(t, o));
                        }) : void 0;
                    }), new this.constructor(i);
                }, c.prototype.updateAttributesForAttachment = function(t, e) {
                    var n, i, o, r;
                    return o = (i = this.getRangeOfAttachment(e))[0], n = this.locationFromPosition(o).index, r = this.getTextAtIndex(n), new this.constructor(this.blockList.editObjectAtIndex(n, function(n) {
                        return n.copyWithText(r.updateAttributesForAttachment(t, e));
                    }));
                }, c.prototype.removeAttributeForAttachment = function(t, e) {
                    var n;
                    return n = this.getRangeOfAttachment(e), this.removeAttributeAtRange(t, n);
                }, c.prototype.insertBlockBreakAtRange = function(t) {
                    var n, o, r, s;
                    return s = (t = i(t))[0], r = this.locationFromPosition(s).offset, o = this.removeTextAtRange(t), 0 === r && (n = [
                        new e.Block
                    ]), new this.constructor(o.blockList.insertSplittableListAtPosition(new e.SplittableList(n), s));
                }, c.prototype.applyBlockAttributeAtRange = function(t, e, i) {
                    var o, r, s, a;
                    return s = this.expandRangeToLineBreaksAndSplitBlocks(i), r = s.document, i = s.range, o = n(t), o.listAttribute ? (r = r.removeLastListAttributeAtRange(i, {
                        exceptAttributeName: t
                    }), a = r.convertLineBreaksToBlockBreaksInRange(i), r = a.document, i = a.range) : r = o.exclusive ? r.removeBlockAttributesAtRange(i) : o.terminal ? r.removeLastTerminalAttributeAtRange(i) : r.consolidateBlocksAtRange(i), r.addAttributeAtRange(t, e, i);
                }, c.prototype.removeLastListAttributeAtRange = function(t, e) {
                    var i;
                    return null == e && (e = {}), i = this.blockList, this.eachBlockAtRange(t, function(t, o, r) {
                        var s;
                        if ((s = t.getLastAttribute()) && n(s).listAttribute && s !== e.exceptAttributeName) return i = i.editObjectAtIndex(r, function() {
                            return t.removeAttribute(s);
                        });
                    }), new this.constructor(i);
                }, c.prototype.removeLastTerminalAttributeAtRange = function(t) {
                    var e;
                    return e = this.blockList, this.eachBlockAtRange(t, function(t, i, o) {
                        var r;
                        if ((r = t.getLastAttribute()) && n(r).terminal) return e = e.editObjectAtIndex(o, function() {
                            return t.removeAttribute(r);
                        });
                    }), new this.constructor(e);
                }, c.prototype.removeBlockAttributesAtRange = function(t) {
                    var e;
                    return e = this.blockList, this.eachBlockAtRange(t, function(t, n, i) {
                        return t.hasAttributes() ? e = e.editObjectAtIndex(i, function() {
                            return t.copyWithoutAttributes();
                        }) : void 0;
                    }), new this.constructor(e);
                }, c.prototype.expandRangeToLineBreaksAndSplitBlocks = function(t) {
                    var e, n, o, r, s, a, u, c, l;
                    return a = t = i(t), l = a[0], r = a[1], c = this.locationFromPosition(l), o = this.locationFromPosition(r), e = this, u = e.getBlockAtIndex(c.index), null != (c.offset = u.findLineBreakInDirectionFromPosition("backward", c.offset)) && (s = e.positionFromLocation(c), e = e.insertBlockBreakAtRange([
                        s,
                        s + 1
                    ]), o.index += 1, o.offset -= e.getBlockAtIndex(c.index).getLength(), c.index += 1), c.offset = 0, 0 === o.offset && o.index > c.index ? (o.index -= 1, o.offset = e.getBlockAtIndex(o.index).getBlockBreakPosition()) : (n = e.getBlockAtIndex(o.index), "\n" === n.text.getStringAtRange([
                        o.offset - 1,
                        o.offset
                    ]) ? o.offset -= 1 : o.offset = n.findLineBreakInDirectionFromPosition("forward", o.offset), o.offset !== n.getBlockBreakPosition() && (s = e.positionFromLocation(o), e = e.insertBlockBreakAtRange([
                        s,
                        s + 1
                    ]))), l = e.positionFromLocation(c), r = e.positionFromLocation(o), t = i([
                        l,
                        r
                    ]), {
                        document: e,
                        range: t
                    };
                }, c.prototype.convertLineBreaksToBlockBreaksInRange = function(t) {
                    var e, n, o;
                    return n = (t = i(t))[0], o = this.getStringAtRange(t).slice(0, -1), e = this, o.replace(/.*?\n/g, function(t) {
                        return n += t.length, e = e.insertBlockBreakAtRange([
                            n - 1,
                            n
                        ]);
                    }), {
                        document: e,
                        range: t
                    };
                }, c.prototype.consolidateBlocksAtRange = function(t) {
                    var e, n, o, r, s;
                    return o = t = i(t), s = o[0], n = o[1], r = this.locationFromPosition(s).index, e = this.locationFromPosition(n).index, new this.constructor(this.blockList.consolidateFromIndexToIndex(r, e));
                }, c.prototype.getDocumentAtRange = function(t) {
                    var e;
                    return t = i(t), e = this.blockList.getSplittableListInRange(t).toArray(), new this.constructor(e);
                }, c.prototype.getStringAtRange = function(t) {
                    var e, n, o;
                    return o = t = i(t), n = o[o.length - 1], n !== this.getLength() && (e = -1), this.getDocumentAtRange(t).toString().slice(0, e);
                }, c.prototype.getBlockAtIndex = function(t) {
                    return this.blockList.getObjectAtIndex(t);
                }, c.prototype.getBlockAtPosition = function(t) {
                    var e;
                    return e = this.locationFromPosition(t).index, this.getBlockAtIndex(e);
                }, c.prototype.getTextAtIndex = function(t) {
                    var e;
                    return null != (e = this.getBlockAtIndex(t)) ? e.text : void 0;
                }, c.prototype.getTextAtPosition = function(t) {
                    var e;
                    return e = this.locationFromPosition(t).index, this.getTextAtIndex(e);
                }, c.prototype.getPieceAtPosition = function(t) {
                    var e, n, i;
                    return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getPieceAtPosition(n);
                }, c.prototype.getCharacterAtPosition = function(t) {
                    var e, n, i;
                    return i = this.locationFromPosition(t), e = i.index, n = i.offset, this.getTextAtIndex(e).getStringAtRange([
                        n,
                        n + 1
                    ]);
                }, c.prototype.getLength = function() {
                    return this.blockList.getEndPosition();
                }, c.prototype.getBlocks = function() {
                    return this.blockList.toArray();
                }, c.prototype.getBlockCount = function() {
                    return this.blockList.length;
                }, c.prototype.getEditCount = function() {
                    return this.editCount;
                }, c.prototype.eachBlock = function(t) {
                    return this.blockList.eachObject(t);
                }, c.prototype.eachBlockAtRange = function(t, e) {
                    var n, o, r, s, a, u, c, l, h, p, d, f;
                    if (u = t = i(t), d = u[0], r = u[1], p = this.locationFromPosition(d), o = this.locationFromPosition(r), p.index === o.index) return n = this.getBlockAtIndex(p.index), f = [
                        p.offset,
                        o.offset
                    ], e(n, f, p.index);
                    for(h = [], a = s = c = p.index, l = o.index; l >= c ? l >= s : s >= l; a = l >= c ? ++s : --s)(n = this.getBlockAtIndex(a)) ? (f = function() {
                        switch(a){
                            case p.index:
                                return [
                                    p.offset,
                                    n.text.getLength()
                                ];
                            case o.index:
                                return [
                                    0,
                                    o.offset
                                ];
                            default:
                                return [
                                    0,
                                    n.text.getLength()
                                ];
                        }
                    }(), h.push(e(n, f, a))) : h.push(void 0);
                    return h;
                }, c.prototype.getCommonAttributesAtRange = function(t) {
                    var n, r, s;
                    return r = (t = i(t))[0], o(t) ? this.getCommonAttributesAtPosition(r) : (s = [], n = [], this.eachBlockAtRange(t, function(t, e) {
                        return e[0] !== e[1] ? (s.push(t.text.getCommonAttributesAtRange(e)), n.push(l(t))) : void 0;
                    }), e.Hash.fromCommonAttributesOfObjects(s).merge(e.Hash.fromCommonAttributesOfObjects(n)).toObject());
                }, c.prototype.getCommonAttributesAtPosition = function(t) {
                    var n, i, o, r, s, a, c, h, p, d;
                    if (p = this.locationFromPosition(t), s = p.index, h = p.offset, o = this.getBlockAtIndex(s), !o) return {};
                    r = l(o), n = o.text.getAttributesAtPosition(h), i = o.text.getAttributesAtPosition(h - 1), a = function() {
                        var t, n;
                        t = e.config.textAttributes, n = [];
                        for(c in t)d = t[c], d.inheritable && n.push(c);
                        return n;
                    }();
                    for(c in i)d = i[c], (d === n[c] || u.call(a, c) >= 0) && (r[c] = d);
                    return r;
                }, c.prototype.getRangeOfCommonAttributeAtPosition = function(t, e) {
                    var n, o, r, s, a, u, c, l, h;
                    return a = this.locationFromPosition(e), r = a.index, s = a.offset, h = this.getTextAtIndex(r), u = h.getExpandedRangeForAttributeAtOffset(t, s), l = u[0], o = u[1], c = this.positionFromLocation({
                        index: r,
                        offset: l
                    }), n = this.positionFromLocation({
                        index: r,
                        offset: o
                    }), i([
                        c,
                        n
                    ]);
                }, c.prototype.getBaseBlockAttributes = function() {
                    var t, e, n, i, o, r, s;
                    for(t = this.getBlockAtIndex(0).getAttributes(), n = i = 1, s = this.getBlockCount(); s >= 1 ? s > i : i > s; n = s >= 1 ? ++i : --i)e = this.getBlockAtIndex(n).getAttributes(), r = Math.min(t.length, e.length), t = function() {
                        var n, i, s;
                        for(s = [], o = n = 0, i = r; (i >= 0 ? i > n : n > i) && e[o] === t[o]; o = i >= 0 ? ++n : --n)s.push(e[o]);
                        return s;
                    }();
                    return t;
                }, l = function(t) {
                    var e, n;
                    return n = {}, (e = t.getLastAttribute()) && (n[e] = !0), n;
                }, c.prototype.getAttachmentById = function(t) {
                    var e, n, i, o;
                    for(o = this.getAttachments(), n = 0, i = o.length; i > n; n++)if (e = o[n], e.id === t) return e;
                }, c.prototype.getAttachmentPieces = function() {
                    var t;
                    return t = [], this.blockList.eachObject(function(e) {
                        var n;
                        return n = e.text, t = t.concat(n.getAttachmentPieces());
                    }), t;
                }, c.prototype.getAttachments = function() {
                    var t, e, n, i, o;
                    for(i = this.getAttachmentPieces(), o = [], t = 0, e = i.length; e > t; t++)n = i[t], o.push(n.attachment);
                    return o;
                }, c.prototype.getRangeOfAttachment = function(t) {
                    var e, n, o, r, s, a, u;
                    for(r = 0, s = this.blockList.toArray(), n = e = 0, o = s.length; o > e; n = ++e){
                        if (a = s[n].text, u = a.getRangeOfAttachment(t)) return i([
                            r + u[0],
                            r + u[1]
                        ]);
                        r += a.getLength();
                    }
                }, c.prototype.getLocationRangeOfAttachment = function(t) {
                    var e;
                    return e = this.getRangeOfAttachment(t), this.locationRangeFromRange(e);
                }, c.prototype.getAttachmentPieceForAttachment = function(t) {
                    var e, n, i, o;
                    for(o = this.getAttachmentPieces(), e = 0, n = o.length; n > e; e++)if (i = o[e], i.attachment === t) return i;
                }, c.prototype.findRangesForBlockAttribute = function(t) {
                    var e, n, i, o, r, s, a;
                    for(r = 0, s = [], a = this.getBlocks(), n = 0, i = a.length; i > n; n++)e = a[n], o = e.getLength(), e.hasAttribute(t) && s.push([
                        r,
                        r + o
                    ]), r += o;
                    return s;
                }, c.prototype.findRangesForTextAttribute = function(t, e) {
                    var n, i, o, r, s, a, u, c, l, h;
                    for(h = (null != e ? e : {}).withValue, a = 0, u = [], c = [], r = function(e) {
                        return null != h ? e.getAttribute(t) === h : e.hasAttribute(t);
                    }, l = this.getPieces(), n = 0, i = l.length; i > n; n++)s = l[n], o = s.getLength(), r(s) && (u[1] === a ? u[1] = a + o : c.push(u = [
                        a,
                        a + o
                    ])), a += o;
                    return c;
                }, c.prototype.locationFromPosition = function(t) {
                    var e, n;
                    return n = this.blockList.findIndexAndOffsetAtPosition(Math.max(0, t)), null != n.index ? n : (e = this.getBlocks(), {
                        index: e.length - 1,
                        offset: e[e.length - 1].getLength()
                    });
                }, c.prototype.positionFromLocation = function(t) {
                    return this.blockList.findPositionAtIndexAndOffset(t.index, t.offset);
                }, c.prototype.locationRangeFromPosition = function(t) {
                    return i(this.locationFromPosition(t));
                }, c.prototype.locationRangeFromRange = function(t) {
                    var e, n, o, r;
                    if (t = i(t)) return r = t[0], n = t[1], o = this.locationFromPosition(r), e = this.locationFromPosition(n), i([
                        o,
                        e
                    ]);
                }, c.prototype.rangeFromLocationRange = function(t) {
                    var e, n;
                    return t = i(t), e = this.positionFromLocation(t[0]), o(t) || (n = this.positionFromLocation(t[1])), i([
                        e,
                        n
                    ]);
                }, c.prototype.isEqualTo = function(t) {
                    return this.blockList.isEqualTo(null != t ? t.blockList : void 0);
                }, c.prototype.getTexts = function() {
                    var t, e, n, i, o;
                    for(i = this.getBlocks(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(t.text);
                    return o;
                }, c.prototype.getPieces = function() {
                    var t, e, n, i, o;
                    for(n = [], i = this.getTexts(), t = 0, e = i.length; e > t; t++)o = i[t], n.push.apply(n, o.getPieces());
                    return n;
                }, c.prototype.getObjects = function() {
                    return this.getBlocks().concat(this.getTexts()).concat(this.getPieces());
                }, c.prototype.toSerializableDocument = function() {
                    var t;
                    return t = [], this.blockList.eachObject(function(e) {
                        return t.push(e.copyWithText(e.text.toSerializableText()));
                    }), new this.constructor(t);
                }, c.prototype.toString = function() {
                    return this.blockList.toString();
                }, c.prototype.toJSON = function() {
                    return this.blockList.toJSON();
                }, c.prototype.toConsole = function() {
                    var t;
                    return JSON.stringify((function() {
                        var e, n, i, o;
                        for(i = this.blockList.toArray(), o = [], e = 0, n = i.length; n > e; e++)t = i[e], o.push(JSON.parse(t.text.toConsole()));
                        return o;
                    }).call(this));
                }, c;
            }(e.Object);
        }).call(this), (function() {
            e.LineBreakInsertion = function() {
                function t(t) {
                    var e;
                    this.composition = t, this.document = this.composition.document, e = this.composition.getSelectedRange(), this.startPosition = e[0], this.endPosition = e[1], this.startLocation = this.document.locationFromPosition(this.startPosition), this.endLocation = this.document.locationFromPosition(this.endPosition), this.block = this.document.getBlockAtIndex(this.endLocation.index), this.breaksOnReturn = this.block.breaksOnReturn(), this.previousCharacter = this.block.text.getStringAtPosition(this.endLocation.offset - 1), this.nextCharacter = this.block.text.getStringAtPosition(this.endLocation.offset);
                }
                return t.prototype.shouldInsertBlockBreak = function() {
                    return this.block.hasAttributes() && this.block.isListItem() && !this.block.isEmpty() ? 0 !== this.startLocation.offset : this.breaksOnReturn && "\n" !== this.nextCharacter;
                }, t.prototype.shouldBreakFormattedBlock = function() {
                    return this.block.hasAttributes() && !this.block.isListItem() && (this.breaksOnReturn && "\n" === this.nextCharacter || "\n" === this.previousCharacter);
                }, t.prototype.shouldDecreaseListLevel = function() {
                    return this.block.hasAttributes() && this.block.isListItem() && this.block.isEmpty();
                }, t.prototype.shouldPrependListItem = function() {
                    return this.block.isListItem() && 0 === this.startLocation.offset && !this.block.isEmpty();
                }, t.prototype.shouldRemoveLastBlockAttribute = function() {
                    return this.block.hasAttributes() && !this.block.isListItem() && this.block.isEmpty();
                }, t;
            }();
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l, h = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)p.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, p = {}.hasOwnProperty;
            s = e.normalizeRange, c = e.rangesAreEqual, u = e.rangeIsCollapsed, a = e.objectsAreEqual, t = e.arrayStartsWith, l = e.summarizeArrayChange, i = e.getAllAttributeNames, o = e.getBlockConfig, r = e.getTextConfig, n = e.extend, e.Composition = function(p) {
                function d() {
                    this.document = new e.Document, this.attachments = [], this.currentAttributes = {}, this.revision = 0;
                }
                var f;
                return h(d, p), d.prototype.setDocument = function(t) {
                    var e;
                    return t.isEqualTo(this.document) ? void 0 : (this.document = t, this.refreshAttachments(), this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeDocument ? e.compositionDidChangeDocument(t) : void 0);
                }, d.prototype.getSnapshot = function() {
                    return {
                        document: this.document,
                        selectedRange: this.getSelectedRange()
                    };
                }, d.prototype.loadSnapshot = function(t) {
                    var n, i, o, r;
                    return n = t.document, r = t.selectedRange, null != (i = this.delegate) && "function" == typeof i.compositionWillLoadSnapshot && i.compositionWillLoadSnapshot(), this.setDocument(null != n ? n : new e.Document), this.setSelection(null != r ? r : [
                        0,
                        0
                    ]), null != (o = this.delegate) && "function" == typeof o.compositionDidLoadSnapshot ? o.compositionDidLoadSnapshot() : void 0;
                }, d.prototype.insertText = function(t, e) {
                    var n, i, o, r;
                    return r = (null != e ? e : {
                        updatePosition: !0
                    }).updatePosition, i = this.getSelectedRange(), this.setDocument(this.document.insertTextAtRange(t, i)), o = i[0], n = o + t.getLength(), r && this.setSelection(n), this.notifyDelegateOfInsertionAtRange([
                        o,
                        n
                    ]);
                }, d.prototype.insertBlock = function(t) {
                    var n;
                    return null == t && (t = new e.Block), n = new e.Document([
                        t
                    ]), this.insertDocument(n);
                }, d.prototype.insertDocument = function(t) {
                    var n, i, o;
                    return null == t && (t = new e.Document), i = this.getSelectedRange(), this.setDocument(this.document.insertDocumentAtRange(t, i)), o = i[0], n = o + t.getLength(), this.setSelection(n), this.notifyDelegateOfInsertionAtRange([
                        o,
                        n
                    ]);
                }, d.prototype.insertString = function(t, n) {
                    var i, o;
                    return i = this.getCurrentTextAttributes(), o = e.Text.textForStringWithAttributes(t, i), this.insertText(o, n);
                }, d.prototype.insertBlockBreak = function() {
                    var t, e, n;
                    return e = this.getSelectedRange(), this.setDocument(this.document.insertBlockBreakAtRange(e)), n = e[0], t = n + 1, this.setSelection(t), this.notifyDelegateOfInsertionAtRange([
                        n,
                        t
                    ]);
                }, d.prototype.insertLineBreak = function() {
                    var t, n;
                    return n = new e.LineBreakInsertion(this), n.shouldDecreaseListLevel() ? (this.decreaseListLevel(), this.setSelection(n.startPosition)) : n.shouldPrependListItem() ? (t = new e.Document([
                        n.block.copyWithoutText()
                    ]), this.insertDocument(t)) : n.shouldInsertBlockBreak() ? this.insertBlockBreak() : n.shouldRemoveLastBlockAttribute() ? this.removeLastBlockAttribute() : n.shouldBreakFormattedBlock() ? this.breakFormattedBlock(n) : this.insertString("\n");
                }, d.prototype.insertHTML = function(t) {
                    var n, i, o, r;
                    return n = e.Document.fromHTML(t), o = this.getSelectedRange(), this.setDocument(this.document.mergeDocumentAtRange(n, o)), r = o[0], i = r + n.getLength() - 1, this.setSelection(i), this.notifyDelegateOfInsertionAtRange([
                        r,
                        i
                    ]);
                }, d.prototype.replaceHTML = function(t) {
                    var n, i, o;
                    return n = e.Document.fromHTML(t).copyUsingObjectsFromDocument(this.document), i = this.getLocationRange({
                        strict: !1
                    }), o = this.document.rangeFromLocationRange(i), this.setDocument(n), this.setSelection(o);
                }, d.prototype.insertFile = function(t) {
                    return this.insertFiles([
                        t
                    ]);
                }, d.prototype.insertFiles = function(t) {
                    var n, i, o, r, s, a;
                    for(i = [], r = 0, s = t.length; s > r; r++)o = t[r], (null != (a = this.delegate) ? a.compositionShouldAcceptFile(o) : void 0) && (n = e.Attachment.attachmentForFile(o), i.push(n));
                    return this.insertAttachments(i);
                }, d.prototype.insertAttachment = function(t) {
                    return this.insertAttachments([
                        t
                    ]);
                }, d.prototype.insertAttachments = function(t) {
                    var n, i, o, r, s, a, u, c, l;
                    for(c = new e.Text, r = 0, s = t.length; s > r; r++)n = t[r], l = n.getType(), a = null != (u = e.config.attachments[l]) ? u.presentation : void 0, o = this.getCurrentTextAttributes(), a && (o.presentation = a), i = e.Text.textForAttachmentWithAttributes(n, o), c = c.appendText(i);
                    return this.insertText(c);
                }, d.prototype.shouldManageDeletingInDirection = function(t) {
                    var e;
                    if (e = this.getLocationRange(), u(e)) {
                        if ("backward" === t && 0 === e[0].offset) return !0;
                        if (this.shouldManageMovingCursorInDirection(t)) return !0;
                    } else if (e[0].index !== e[1].index) return !0;
                    return !1;
                }, d.prototype.deleteInDirection = function(t, e) {
                    var n, i, o, r, s, a, c, l;
                    return r = (null != e ? e : {}).length, s = this.getLocationRange(), a = this.getSelectedRange(), c = u(a), c ? o = "backward" === t && 0 === s[0].offset : l = s[0].index !== s[1].index, o && this.canDecreaseBlockAttributeLevel() && (i = this.getBlock(), i.isListItem() ? this.decreaseListLevel() : this.decreaseBlockAttributeLevel(), this.setSelection(a[0]), i.isEmpty()) ? !1 : (c && (a = this.getExpandedRangeInDirection(t, {
                        length: r
                    }), "backward" === t && (n = this.getAttachmentAtRange(a))), n ? (this.editAttachment(n), !1) : (this.setDocument(this.document.removeTextAtRange(a)), this.setSelection(a[0]), o || l ? !1 : void 0));
                }, d.prototype.moveTextFromRange = function(t) {
                    var e;
                    return e = this.getSelectedRange()[0], this.setDocument(this.document.moveTextFromRangeToPosition(t, e)), this.setSelection(e);
                }, d.prototype.removeAttachment = function(t) {
                    var e;
                    return (e = this.document.getRangeOfAttachment(t)) ? (this.stopEditingAttachment(), this.setDocument(this.document.removeTextAtRange(e)), this.setSelection(e[0])) : void 0;
                }, d.prototype.removeLastBlockAttribute = function() {
                    var t, e, n, i;
                    return n = this.getSelectedRange(), i = n[0], e = n[1], t = this.document.getBlockAtPosition(e), this.removeCurrentAttribute(t.getLastAttribute()), this.setSelection(i);
                }, f = " ", d.prototype.insertPlaceholder = function() {
                    return this.placeholderPosition = this.getPosition(), this.insertString(f);
                }, d.prototype.selectPlaceholder = function() {
                    return null != this.placeholderPosition ? (this.setSelectedRange([
                        this.placeholderPosition,
                        this.placeholderPosition + f.length
                    ]), this.getSelectedRange()) : void 0;
                }, d.prototype.forgetPlaceholder = function() {
                    return this.placeholderPosition = null;
                }, d.prototype.hasCurrentAttribute = function(t) {
                    var e;
                    return e = this.currentAttributes[t], null != e && e !== !1;
                }, d.prototype.toggleCurrentAttribute = function(t) {
                    var e;
                    return (e = !this.currentAttributes[t]) ? this.setCurrentAttribute(t, e) : this.removeCurrentAttribute(t);
                }, d.prototype.canSetCurrentAttribute = function(t) {
                    return o(t) ? this.canSetCurrentBlockAttribute(t) : this.canSetCurrentTextAttribute(t);
                }, d.prototype.canSetCurrentTextAttribute = function() {
                    var t, e, n, i, o;
                    if (e = this.getSelectedDocument()) {
                        for(o = e.getAttachments(), n = 0, i = o.length; i > n; n++)if (t = o[n], !t.hasContent()) return !1;
                        return !0;
                    }
                }, d.prototype.canSetCurrentBlockAttribute = function() {
                    var t;
                    if (t = this.getBlock()) return !t.isTerminalBlock();
                }, d.prototype.setCurrentAttribute = function(t, e) {
                    return o(t) ? this.setBlockAttribute(t, e) : (this.setTextAttribute(t, e), this.currentAttributes[t] = e, this.notifyDelegateOfCurrentAttributesChange());
                }, d.prototype.setTextAttribute = function(t, n) {
                    var i, o, r, s;
                    if (o = this.getSelectedRange()) return r = o[0], i = o[1], r !== i ? this.setDocument(this.document.addAttributeAtRange(t, n, o)) : "href" === t ? (s = e.Text.textForStringWithAttributes(n, {
                        href: n
                    }), this.insertText(s)) : void 0;
                }, d.prototype.setBlockAttribute = function(t, e) {
                    var n, i;
                    if (i = this.getSelectedRange()) return this.canSetCurrentAttribute(t) ? (n = this.getBlock(), this.setDocument(this.document.applyBlockAttributeAtRange(t, e, i)), this.setSelection(i)) : void 0;
                }, d.prototype.removeCurrentAttribute = function(t) {
                    return o(t) ? (this.removeBlockAttribute(t), this.updateCurrentAttributes()) : (this.removeTextAttribute(t), delete this.currentAttributes[t], this.notifyDelegateOfCurrentAttributesChange());
                }, d.prototype.removeTextAttribute = function(t) {
                    var e;
                    if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
                }, d.prototype.removeBlockAttribute = function(t) {
                    var e;
                    if (e = this.getSelectedRange()) return this.setDocument(this.document.removeAttributeAtRange(t, e));
                }, d.prototype.canDecreaseNestingLevel = function() {
                    var t;
                    return (null != (t = this.getBlock()) ? t.getNestingLevel() : void 0) > 0;
                }, d.prototype.canIncreaseNestingLevel = function() {
                    var e, n, i;
                    if (e = this.getBlock()) return (null != (i = o(e.getLastNestableAttribute())) ? i.listAttribute : 0) ? (n = this.getPreviousBlock()) ? t(n.getListItemAttributes(), e.getListItemAttributes()) : void 0 : e.getNestingLevel() > 0;
                }, d.prototype.decreaseNestingLevel = function() {
                    var t;
                    if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.decreaseNestingLevel()));
                }, d.prototype.increaseNestingLevel = function() {
                    var t;
                    if (t = this.getBlock()) return this.setDocument(this.document.replaceBlock(t, t.increaseNestingLevel()));
                }, d.prototype.canDecreaseBlockAttributeLevel = function() {
                    var t;
                    return (null != (t = this.getBlock()) ? t.getAttributeLevel() : void 0) > 0;
                }, d.prototype.decreaseBlockAttributeLevel = function() {
                    var t, e;
                    return (t = null != (e = this.getBlock()) ? e.getLastAttribute() : void 0) ? this.removeCurrentAttribute(t) : void 0;
                }, d.prototype.decreaseListLevel = function() {
                    var t, e, n, i, o, r;
                    for(r = this.getSelectedRange()[0], o = this.document.locationFromPosition(r).index, n = o, t = this.getBlock().getAttributeLevel(); (e = this.document.getBlockAtIndex(n + 1)) && e.isListItem() && e.getAttributeLevel() > t;)n++;
                    return r = this.document.positionFromLocation({
                        index: o,
                        offset: 0
                    }), i = this.document.positionFromLocation({
                        index: n,
                        offset: 0
                    }), this.setDocument(this.document.removeLastListAttributeAtRange([
                        r,
                        i
                    ]));
                }, d.prototype.updateCurrentAttributes = function() {
                    var t, e, n, o, r, s;
                    if (s = this.getSelectedRange({
                        ignoreLock: !0
                    })) {
                        for(e = this.document.getCommonAttributesAtRange(s), r = i(), n = 0, o = r.length; o > n; n++)t = r[n], e[t] || this.canSetCurrentAttribute(t) || (e[t] = !1);
                        if (!a(e, this.currentAttributes)) return this.currentAttributes = e, this.notifyDelegateOfCurrentAttributesChange();
                    }
                }, d.prototype.getCurrentAttributes = function() {
                    return n.call({}, this.currentAttributes);
                }, d.prototype.getCurrentTextAttributes = function() {
                    var t, e, n, i;
                    t = {}, n = this.currentAttributes;
                    for(e in n)i = n[e], i !== !1 && r(e) && (t[e] = i);
                    return t;
                }, d.prototype.freezeSelection = function() {
                    return this.setCurrentAttribute("frozen", !0);
                }, d.prototype.thawSelection = function() {
                    return this.removeCurrentAttribute("frozen");
                }, d.prototype.hasFrozenSelection = function() {
                    return this.hasCurrentAttribute("frozen");
                }, d.proxyMethod("getSelectionManager().getPointRange"), d.proxyMethod("getSelectionManager().setLocationRangeFromPointRange"), d.proxyMethod("getSelectionManager().createLocationRangeFromDOMRange"), d.proxyMethod("getSelectionManager().locationIsCursorTarget"), d.proxyMethod("getSelectionManager().selectionIsExpanded"), d.proxyMethod("delegate?.getSelectionManager"), d.prototype.setSelection = function(t) {
                    var e, n;
                    return e = this.document.locationRangeFromRange(t), null != (n = this.delegate) ? n.compositionDidRequestChangingSelectionToLocationRange(e) : void 0;
                }, d.prototype.getSelectedRange = function() {
                    var t;
                    return (t = this.getLocationRange()) ? this.document.rangeFromLocationRange(t) : void 0;
                }, d.prototype.setSelectedRange = function(t) {
                    var e;
                    return e = this.document.locationRangeFromRange(t), this.getSelectionManager().setLocationRange(e);
                }, d.prototype.getPosition = function() {
                    var t;
                    return (t = this.getLocationRange()) ? this.document.positionFromLocation(t[0]) : void 0;
                }, d.prototype.getLocationRange = function(t) {
                    var e, n;
                    return null != (e = null != (n = this.targetLocationRange) ? n : this.getSelectionManager().getLocationRange(t)) ? e : s({
                        index: 0,
                        offset: 0
                    });
                }, d.prototype.withTargetLocationRange = function(t, e) {
                    var n;
                    this.targetLocationRange = t;
                    try {
                        n = e();
                    } finally{
                        this.targetLocationRange = null;
                    }
                    return n;
                }, d.prototype.withTargetRange = function(t, e) {
                    var n;
                    return n = this.document.locationRangeFromRange(t), this.withTargetLocationRange(n, e);
                }, d.prototype.withTargetDOMRange = function(t, e) {
                    var n;
                    return n = this.createLocationRangeFromDOMRange(t, {
                        strict: !1
                    }), this.withTargetLocationRange(n, e);
                }, d.prototype.getExpandedRangeInDirection = function(t, e) {
                    var n, i, o, r;
                    return i = (null != e ? e : {}).length, o = this.getSelectedRange(), r = o[0], n = o[1], "backward" === t ? i ? r -= i : r = this.translateUTF16PositionFromOffset(r, -1) : i ? n += i : n = this.translateUTF16PositionFromOffset(n, 1), s([
                        r,
                        n
                    ]);
                }, d.prototype.shouldManageMovingCursorInDirection = function(t) {
                    var e;
                    return this.editingAttachment ? !0 : (e = this.getExpandedRangeInDirection(t), null != this.getAttachmentAtRange(e));
                }, d.prototype.moveCursorInDirection = function(t) {
                    var e, n, i, o;
                    return this.editingAttachment ? i = this.document.getRangeOfAttachment(this.editingAttachment) : (o = this.getSelectedRange(), i = this.getExpandedRangeInDirection(t), n = !c(o, i)), this.setSelectedRange("backward" === t ? i[0] : i[1]), n && (e = this.getAttachmentAtRange(i)) ? this.editAttachment(e) : void 0;
                }, d.prototype.expandSelectionInDirection = function(t, e) {
                    var n, i;
                    return n = (null != e ? e : {}).length, i = this.getExpandedRangeInDirection(t, {
                        length: n
                    }), this.setSelectedRange(i);
                }, d.prototype.expandSelectionForEditing = function() {
                    return this.hasCurrentAttribute("href") ? this.expandSelectionAroundCommonAttribute("href") : void 0;
                }, d.prototype.expandSelectionAroundCommonAttribute = function(t) {
                    var e, n;
                    return e = this.getPosition(), n = this.document.getRangeOfCommonAttributeAtPosition(t, e), this.setSelectedRange(n);
                }, d.prototype.selectionContainsAttachments = function() {
                    var t;
                    return (null != (t = this.getSelectedAttachments()) ? t.length : void 0) > 0;
                }, d.prototype.selectionIsInCursorTarget = function() {
                    return this.editingAttachment || this.positionIsCursorTarget(this.getPosition());
                }, d.prototype.positionIsCursorTarget = function(t) {
                    var e;
                    return (e = this.document.locationFromPosition(t)) ? this.locationIsCursorTarget(e) : void 0;
                }, d.prototype.positionIsBlockBreak = function(t) {
                    var e;
                    return null != (e = this.document.getPieceAtPosition(t)) ? e.isBlockBreak() : void 0;
                }, d.prototype.getSelectedDocument = function() {
                    var t;
                    return (t = this.getSelectedRange()) ? this.document.getDocumentAtRange(t) : void 0;
                }, d.prototype.getSelectedAttachments = function() {
                    var t;
                    return null != (t = this.getSelectedDocument()) ? t.getAttachments() : void 0;
                }, d.prototype.getAttachments = function() {
                    return this.attachments.slice(0);
                }, d.prototype.refreshAttachments = function() {
                    var t, e, n, i, o, r, s, a, u, c, h, p;
                    for(n = this.document.getAttachments(), a = l(this.attachments, n), t = a.added, h = a.removed, this.attachments = n, i = 0, r = h.length; r > i; i++)e = h[i], e.delegate = null, null != (u = this.delegate) && "function" == typeof u.compositionDidRemoveAttachment && u.compositionDidRemoveAttachment(e);
                    for(p = [], o = 0, s = t.length; s > o; o++)e = t[o], e.delegate = this, p.push(null != (c = this.delegate) && "function" == typeof c.compositionDidAddAttachment ? c.compositionDidAddAttachment(e) : void 0);
                    return p;
                }, d.prototype.attachmentDidChangeAttributes = function(t) {
                    var e;
                    return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidEditAttachment ? e.compositionDidEditAttachment(t) : void 0;
                }, d.prototype.attachmentDidChangePreviewURL = function(t) {
                    var e;
                    return this.revision++, null != (e = this.delegate) && "function" == typeof e.compositionDidChangeAttachmentPreviewURL ? e.compositionDidChangeAttachmentPreviewURL(t) : void 0;
                }, d.prototype.editAttachment = function(t, e) {
                    var n;
                    if (t !== this.editingAttachment) return this.stopEditingAttachment(), this.editingAttachment = t, null != (n = this.delegate) && "function" == typeof n.compositionDidStartEditingAttachment ? n.compositionDidStartEditingAttachment(this.editingAttachment, e) : void 0;
                }, d.prototype.stopEditingAttachment = function() {
                    var t;
                    if (this.editingAttachment) return null != (t = this.delegate) && "function" == typeof t.compositionDidStopEditingAttachment && t.compositionDidStopEditingAttachment(this.editingAttachment), this.editingAttachment = null;
                }, d.prototype.updateAttributesForAttachment = function(t, e) {
                    return this.setDocument(this.document.updateAttributesForAttachment(t, e));
                }, d.prototype.removeAttributeForAttachment = function(t, e) {
                    return this.setDocument(this.document.removeAttributeForAttachment(t, e));
                }, d.prototype.breakFormattedBlock = function(t) {
                    var n, i, o, r, s;
                    return i = t.document, n = t.block, r = t.startPosition, s = [
                        r - 1,
                        r
                    ], n.getBlockBreakPosition() === t.startLocation.offset ? (n.breaksOnReturn() && "\n" === t.nextCharacter ? r += 1 : i = i.removeTextAtRange(s), s = [
                        r,
                        r
                    ]) : "\n" === t.nextCharacter ? "\n" === t.previousCharacter ? s = [
                        r - 1,
                        r + 1
                    ] : (s = [
                        r,
                        r + 1
                    ], r += 1) : t.startLocation.offset - 1 !== 0 && (r += 1), o = new e.Document([
                        n.removeLastAttribute().copyWithoutText()
                    ]), this.setDocument(i.insertDocumentAtRange(o, s)), this.setSelection(r);
                }, d.prototype.getPreviousBlock = function() {
                    var t, e;
                    return (e = this.getLocationRange()) && (t = e[0].index, t > 0) ? this.document.getBlockAtIndex(t - 1) : void 0;
                }, d.prototype.getBlock = function() {
                    var t;
                    return (t = this.getLocationRange()) ? this.document.getBlockAtIndex(t[0].index) : void 0;
                }, d.prototype.getAttachmentAtRange = function(t) {
                    var n;
                    return n = this.document.getDocumentAtRange(t), n.toString() === e.OBJECT_REPLACEMENT_CHARACTER + "\n" ? n.getAttachments()[0] : void 0;
                }, d.prototype.notifyDelegateOfCurrentAttributesChange = function() {
                    var t;
                    return null != (t = this.delegate) && "function" == typeof t.compositionDidChangeCurrentAttributes ? t.compositionDidChangeCurrentAttributes(this.currentAttributes) : void 0;
                }, d.prototype.notifyDelegateOfInsertionAtRange = function(t) {
                    var e;
                    return null != (e = this.delegate) && "function" == typeof e.compositionDidPerformInsertionAtRange ? e.compositionDidPerformInsertionAtRange(t) : void 0;
                }, d.prototype.translateUTF16PositionFromOffset = function(t, e) {
                    var n, i;
                    return i = this.document.toUTF16String(), n = i.offsetFromUCS2Offset(t), i.offsetToUCS2Offset(n + e);
                }, d;
            }(e.BasicObject);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.UndoManager = function(e) {
                function n(t) {
                    this.composition = t, this.undoEntries = [], this.redoEntries = [];
                }
                var i;
                return t(n, e), n.prototype.recordUndoEntry = function(t, e) {
                    var n, o, r, s, a;
                    return s = null != e ? e : {}, o = s.context, n = s.consolidatable, r = this.undoEntries.slice(-1)[0], n && i(r, t, o) ? void 0 : (a = this.createEntry({
                        description: t,
                        context: o
                    }), this.undoEntries.push(a), this.redoEntries = []);
                }, n.prototype.undo = function() {
                    var t, e;
                    return (e = this.undoEntries.pop()) ? (t = this.createEntry(e), this.redoEntries.push(t), this.composition.loadSnapshot(e.snapshot)) : void 0;
                }, n.prototype.redo = function() {
                    var t, e;
                    return (t = this.redoEntries.pop()) ? (e = this.createEntry(t), this.undoEntries.push(e), this.composition.loadSnapshot(t.snapshot)) : void 0;
                }, n.prototype.canUndo = function() {
                    return this.undoEntries.length > 0;
                }, n.prototype.canRedo = function() {
                    return this.redoEntries.length > 0;
                }, n.prototype.createEntry = function(t) {
                    var e, n, i;
                    return i = null != t ? t : {}, n = i.description, e = i.context, {
                        description: null != n ? n.toString() : void 0,
                        context: JSON.stringify(e),
                        snapshot: this.composition.getSnapshot()
                    };
                }, i = function(t, e, n) {
                    return (null != t ? t.description : void 0) === (null != e ? e.toString() : void 0) && (null != t ? t.context : void 0) === JSON.stringify(n);
                }, n;
            }(e.BasicObject);
        }).call(this), (function() {
            var t;
            e.attachmentGalleryFilter = function(e) {
                var n;
                return n = new t(e), n.perform(), n.getSnapshot();
            }, t = function() {
                function t(t) {
                    this.document = t.document, this.selectedRange = t.selectedRange;
                }
                var e, n, i;
                return e = "attachmentGallery", n = "presentation", i = "gallery", t.prototype.perform = function() {
                    return this.removeBlockAttribute(), this.applyBlockAttribute();
                }, t.prototype.getSnapshot = function() {
                    return {
                        document: this.document,
                        selectedRange: this.selectedRange
                    };
                }, t.prototype.removeBlockAttribute = function() {
                    var t, n, i, o, r;
                    for(o = this.findRangesOfBlocks(), r = [], t = 0, n = o.length; n > t; t++)i = o[t], r.push(this.document = this.document.removeAttributeAtRange(e, i));
                    return r;
                }, t.prototype.applyBlockAttribute = function() {
                    var t, n, i, o, r, s;
                    for(i = 0, r = this.findRangesOfPieces(), s = [], t = 0, n = r.length; n > t; t++)o = r[t], o[1] - o[0] > 1 && (o[0] += i, o[1] += i, "\n" !== this.document.getCharacterAtPosition(o[1]) && (this.document = this.document.insertBlockBreakAtRange(o[1]), o[1] < this.selectedRange[1] && this.moveSelectedRangeForward(), o[1]++, i++), 0 !== o[0] && "\n" !== this.document.getCharacterAtPosition(o[0] - 1) && (this.document = this.document.insertBlockBreakAtRange(o[0]), o[0] < this.selectedRange[0] && this.moveSelectedRangeForward(), o[0]++, i++), s.push(this.document = this.document.applyBlockAttributeAtRange(e, !0, o)));
                    return s;
                }, t.prototype.findRangesOfBlocks = function() {
                    return this.document.findRangesForBlockAttribute(e);
                }, t.prototype.findRangesOfPieces = function() {
                    return this.document.findRangesForTextAttribute(n, {
                        withValue: i
                    });
                }, t.prototype.moveSelectedRangeForward = function() {
                    return this.selectedRange[0] += 1, this.selectedRange[1] += 1;
                }, t;
            }();
        }).call(this), (function() {
            var t = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            };
            e.Editor = function() {
                function n(n, o, r) {
                    this.composition = n, this.selectionManager = o, this.element = r, this.insertFiles = t(this.insertFiles, this), this.undoManager = new e.UndoManager(this.composition), this.filters = i.slice(0);
                }
                var i;
                return i = [
                    e.attachmentGalleryFilter
                ], n.prototype.loadDocument = function(t) {
                    return this.loadSnapshot({
                        document: t,
                        selectedRange: [
                            0,
                            0
                        ]
                    });
                }, n.prototype.loadHTML = function(t) {
                    return null == t && (t = ""), this.loadDocument(e.Document.fromHTML(t, {
                        referenceElement: this.element
                    }));
                }, n.prototype.loadJSON = function(t) {
                    var n, i;
                    return n = t.document, i = t.selectedRange, n = e.Document.fromJSON(n), this.loadSnapshot({
                        document: n,
                        selectedRange: i
                    });
                }, n.prototype.loadSnapshot = function(t) {
                    return this.undoManager = new e.UndoManager(this.composition), this.composition.loadSnapshot(t);
                }, n.prototype.getDocument = function() {
                    return this.composition.document;
                }, n.prototype.getSelectedDocument = function() {
                    return this.composition.getSelectedDocument();
                }, n.prototype.getSnapshot = function() {
                    return this.composition.getSnapshot();
                }, n.prototype.toJSON = function() {
                    return this.getSnapshot();
                }, n.prototype.deleteInDirection = function(t) {
                    return this.composition.deleteInDirection(t);
                }, n.prototype.insertAttachment = function(t) {
                    return this.composition.insertAttachment(t);
                }, n.prototype.insertAttachments = function(t) {
                    return this.composition.insertAttachments(t);
                }, n.prototype.insertDocument = function(t) {
                    return this.composition.insertDocument(t);
                }, n.prototype.insertFile = function(t) {
                    return this.composition.insertFile(t);
                }, n.prototype.insertFiles = function(t) {
                    return this.composition.insertFiles(t);
                }, n.prototype.insertHTML = function(t) {
                    return this.composition.insertHTML(t);
                }, n.prototype.insertString = function(t) {
                    return this.composition.insertString(t);
                }, n.prototype.insertText = function(t) {
                    return this.composition.insertText(t);
                }, n.prototype.insertLineBreak = function() {
                    return this.composition.insertLineBreak();
                }, n.prototype.getSelectedRange = function() {
                    return this.composition.getSelectedRange();
                }, n.prototype.getPosition = function() {
                    return this.composition.getPosition();
                }, n.prototype.getClientRectAtPosition = function(t) {
                    var e;
                    return e = this.getDocument().locationRangeFromRange([
                        t,
                        t + 1
                    ]), this.selectionManager.getClientRectAtLocationRange(e);
                }, n.prototype.expandSelectionInDirection = function(t) {
                    return this.composition.expandSelectionInDirection(t);
                }, n.prototype.moveCursorInDirection = function(t) {
                    return this.composition.moveCursorInDirection(t);
                }, n.prototype.setSelectedRange = function(t) {
                    return this.composition.setSelectedRange(t);
                }, n.prototype.activateAttribute = function(t, e) {
                    return null == e && (e = !0), this.composition.setCurrentAttribute(t, e);
                }, n.prototype.attributeIsActive = function(t) {
                    return this.composition.hasCurrentAttribute(t);
                }, n.prototype.canActivateAttribute = function(t) {
                    return this.composition.canSetCurrentAttribute(t);
                }, n.prototype.deactivateAttribute = function(t) {
                    return this.composition.removeCurrentAttribute(t);
                }, n.prototype.canDecreaseNestingLevel = function() {
                    return this.composition.canDecreaseNestingLevel();
                }, n.prototype.canIncreaseNestingLevel = function() {
                    return this.composition.canIncreaseNestingLevel();
                }, n.prototype.decreaseNestingLevel = function() {
                    return this.canDecreaseNestingLevel() ? this.composition.decreaseNestingLevel() : void 0;
                }, n.prototype.increaseNestingLevel = function() {
                    return this.canIncreaseNestingLevel() ? this.composition.increaseNestingLevel() : void 0;
                }, n.prototype.canRedo = function() {
                    return this.undoManager.canRedo();
                }, n.prototype.canUndo = function() {
                    return this.undoManager.canUndo();
                }, n.prototype.recordUndoEntry = function(t, e) {
                    var n, i, o;
                    return o = null != e ? e : {}, i = o.context, n = o.consolidatable, this.undoManager.recordUndoEntry(t, {
                        context: i,
                        consolidatable: n
                    });
                }, n.prototype.redo = function() {
                    return this.canRedo() ? this.undoManager.redo() : void 0;
                }, n.prototype.undo = function() {
                    return this.canUndo() ? this.undoManager.undo() : void 0;
                }, n;
            }();
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.ManagedAttachment = function(e) {
                function n(t, e) {
                    var n;
                    this.attachmentManager = t, this.attachment = e, n = this.attachment, this.id = n.id, this.file = n.file;
                }
                return t(n, e), n.prototype.remove = function() {
                    return this.attachmentManager.requestRemovalOfAttachment(this.attachment);
                }, n.proxyMethod("attachment.getAttribute"), n.proxyMethod("attachment.hasAttribute"), n.proxyMethod("attachment.setAttribute"), n.proxyMethod("attachment.getAttributes"), n.proxyMethod("attachment.setAttributes"), n.proxyMethod("attachment.isPending"), n.proxyMethod("attachment.isPreviewable"), n.proxyMethod("attachment.getURL"), n.proxyMethod("attachment.getHref"), n.proxyMethod("attachment.getFilename"), n.proxyMethod("attachment.getFilesize"), n.proxyMethod("attachment.getFormattedFilesize"), n.proxyMethod("attachment.getExtension"), n.proxyMethod("attachment.getContentType"), n.proxyMethod("attachment.getFile"), n.proxyMethod("attachment.setFile"), n.proxyMethod("attachment.releaseFile"), n.proxyMethod("attachment.getUploadProgress"), n.proxyMethod("attachment.setUploadProgress"), n;
            }(e.BasicObject);
        }).call(this), (function() {
            var t = function(t, e) {
                function i() {
                    this.constructor = t;
                }
                for(var o in e)n.call(e, o) && (t[o] = e[o]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t;
            }, n = {}.hasOwnProperty;
            e.AttachmentManager = function(n) {
                function i(t) {
                    var e, n, i;
                    for(null == t && (t = []), this.managedAttachments = {}, n = 0, i = t.length; i > n; n++)e = t[n], this.manageAttachment(e);
                }
                return t(i, n), i.prototype.getAttachments = function() {
                    var t, e, n, i;
                    n = this.managedAttachments, i = [];
                    for(e in n)t = n[e], i.push(t);
                    return i;
                }, i.prototype.manageAttachment = function(t) {
                    var n, i;
                    return null != (n = this.managedAttachments)[i = t.id] ? n[i] : n[i] = new e.ManagedAttachment(this, t);
                }, i.prototype.attachmentIsManaged = function(t) {
                    return t.id in this.managedAttachments;
                }, i.prototype.requestRemovalOfAttachment = function(t) {
                    var e;
                    return this.attachmentIsManaged(t) && null != (e = this.delegate) && "function" == typeof e.attachmentManagerDidRequestRemovalOfAttachment ? e.attachmentManagerDidRequestRemovalOfAttachment(t) : void 0;
                }, i.prototype.unmanageAttachment = function(t) {
                    var e;
                    return e = this.managedAttachments[t.id], delete this.managedAttachments[t.id], e;
                }, i;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l, h;
            t = e.elementContainsNode, n = e.findChildIndexOfNode, r = e.nodeIsBlockStart, s = e.nodeIsBlockStartComment, o = e.nodeIsBlockContainer, a = e.nodeIsCursorTarget, u = e.nodeIsEmptyTextNode, c = e.nodeIsTextNode, i = e.nodeIsAttachmentElement, l = e.tagName, h = e.walkTree, e.LocationMapper = function() {
                function e(t) {
                    this.element = t;
                }
                var p, d, f, g;
                return e.prototype.findLocationFromContainerAndOffset = function(e, i, o) {
                    var s, u, l, p, g, m, v;
                    for(m = (null != o ? o : {
                        strict: !0
                    }).strict, u = 0, l = !1, p = {
                        index: 0,
                        offset: 0
                    }, (s = this.findAttachmentElementParentForNode(e)) && (e = s.parentNode, i = n(s)), v = h(this.element, {
                        usingFilter: f
                    }); v.nextNode();){
                        if (g = v.currentNode, g === e && c(e)) {
                            a(g) || (p.offset += i);
                            break;
                        }
                        if (g.parentNode === e) {
                            if (u++ === i) break;
                        } else if (!t(e, g) && u > 0) break;
                        r(g, {
                            strict: m
                        }) ? (l && p.index++, p.offset = 0, l = !0) : p.offset += d(g);
                    }
                    return p;
                }, e.prototype.findContainerAndOffsetFromLocation = function(t) {
                    var e, i, s, u, l;
                    if (0 === t.index && 0 === t.offset) {
                        for(e = this.element, u = 0; e.firstChild;)if (e = e.firstChild, o(e)) {
                            u = 1;
                            break;
                        }
                        return [
                            e,
                            u
                        ];
                    }
                    if (l = this.findNodeAndOffsetFromLocation(t), i = l[0], s = l[1], i) {
                        if (c(i)) 0 === d(i) ? (e = i.parentNode.parentNode, u = n(i.parentNode), a(i, {
                            name: "right"
                        }) && u++) : (e = i, u = t.offset - s);
                        else {
                            if (e = i.parentNode, !r(i.previousSibling) && !o(e)) for(; i === e.lastChild && (i = e, e = e.parentNode, !o(e)););
                            u = n(i), 0 !== t.offset && u++;
                        }
                        return [
                            e,
                            u
                        ];
                    }
                }, e.prototype.findNodeAndOffsetFromLocation = function(t) {
                    var e, n, i, o, r, s, u, l;
                    for(u = 0, l = this.getSignificantNodesForIndex(t.index), n = 0, i = l.length; i > n; n++){
                        if (e = l[n], o = d(e), t.offset <= u + o) {
                            if (c(e)) {
                                if (r = e, s = u, t.offset === s && a(r)) break;
                            } else r || (r = e, s = u);
                        }
                        if (u += o, u > t.offset) break;
                    }
                    return [
                        r,
                        s
                    ];
                }, e.prototype.findAttachmentElementParentForNode = function(t) {
                    for(; t && t !== this.element;){
                        if (i(t)) return t;
                        t = t.parentNode;
                    }
                }, e.prototype.getSignificantNodesForIndex = function(t) {
                    var e, n, i, o, r;
                    for(i = [], r = h(this.element, {
                        usingFilter: p
                    }), o = !1; r.nextNode();)if (n = r.currentNode, s(n)) {
                        if ("undefined" != typeof e && null !== e ? e++ : e = 0, e === t) o = !0;
                        else if (o) break;
                    } else o && i.push(n);
                    return i;
                }, d = function(t) {
                    var e;
                    return t.nodeType === Node.TEXT_NODE ? a(t) ? 0 : (e = t.textContent, e.length) : "br" === l(t) || i(t) ? 1 : 0;
                }, p = function(t) {
                    return g(t) === NodeFilter.FILTER_ACCEPT ? f(t) : NodeFilter.FILTER_REJECT;
                }, g = function(t) {
                    return u(t) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                }, f = function(t) {
                    return i(t.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                }, e;
            }();
        }).call(this), (function() {
            var t, n, i = [].slice;
            t = e.getDOMRange, n = e.setDOMRange, e.PointMapper = function() {
                function e() {}
                return e.prototype.createDOMRangeFromPoint = function(e) {
                    var i, o, r, s, a, u, c, l;
                    if (c = e.x, l = e.y, document.caretPositionFromPoint) return a = document.caretPositionFromPoint(c, l), r = a.offsetNode, o = a.offset, i = document.createRange(), i.setStart(r, o), i;
                    if (document.caretRangeFromPoint) return document.caretRangeFromPoint(c, l);
                    if (document.body.createTextRange) {
                        s = t();
                        try {
                            u = document.body.createTextRange(), u.moveToPoint(c, l), u.select();
                        } catch (h) {}
                        return i = t(), n(s), i;
                    }
                }, e.prototype.getClientRectsForDOMRange = function(t) {
                    var e, n, o;
                    return n = i.call(t.getClientRects()), o = n[0], e = n[n.length - 1], [
                        o,
                        e
                    ];
                }, e;
            }();
        }).call(this), (function() {
            var t, n = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, i = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)o.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, o = {}.hasOwnProperty, r = [].indexOf || function(t) {
                for(var e = 0, n = this.length; n > e; e++)if (e in this && this[e] === t) return e;
                return -1;
            };
            t = e.getDOMRange, e.SelectionChangeObserver = function(e) {
                function o() {
                    this.run = n(this.run, this), this.update = n(this.update, this), this.selectionManagers = [];
                }
                var s;
                return i(o, e), o.prototype.start = function() {
                    return this.started ? void 0 : (this.started = !0, "onselectionchange" in document ? document.addEventListener("selectionchange", this.update, !0) : this.run());
                }, o.prototype.stop = function() {
                    return this.started ? (this.started = !1, document.removeEventListener("selectionchange", this.update, !0)) : void 0;
                }, o.prototype.registerSelectionManager = function(t) {
                    return r.call(this.selectionManagers, t) < 0 ? (this.selectionManagers.push(t), this.start()) : void 0;
                }, o.prototype.unregisterSelectionManager = function(t) {
                    var e;
                    return this.selectionManagers = (function() {
                        var n, i, o, r;
                        for(o = this.selectionManagers, r = [], n = 0, i = o.length; i > n; n++)e = o[n], e !== t && r.push(e);
                        return r;
                    }).call(this), 0 === this.selectionManagers.length ? this.stop() : void 0;
                }, o.prototype.notifySelectionManagersOfSelectionChange = function() {
                    var t, e, n, i, o;
                    for(n = this.selectionManagers, i = [], t = 0, e = n.length; e > t; t++)o = n[t], i.push(o.selectionDidChange());
                    return i;
                }, o.prototype.update = function() {
                    var e;
                    return e = t(), s(e, this.domRange) ? void 0 : (this.domRange = e, this.notifySelectionManagersOfSelectionChange());
                }, o.prototype.reset = function() {
                    return this.domRange = null, this.update();
                }, o.prototype.run = function() {
                    return this.started ? (this.update(), requestAnimationFrame(this.run)) : void 0;
                }, s = function(t, e) {
                    return (null != t ? t.startContainer : void 0) === (null != e ? e.startContainer : void 0) && (null != t ? t.startOffset : void 0) === (null != e ? e.startOffset : void 0) && (null != t ? t.endContainer : void 0) === (null != e ? e.endContainer : void 0) && (null != t ? t.endOffset : void 0) === (null != e ? e.endOffset : void 0);
                }, o;
            }(e.BasicObject), null == e.selectionChangeObserver && (e.selectionChangeObserver = new e.SelectionChangeObserver);
        }).call(this), (function() {
            var t, n, i, o, r, s, a, u, c, l, h = function(t, e) {
                return function() {
                    return t.apply(e, arguments);
                };
            }, p = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)d.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, d = {}.hasOwnProperty;
            i = e.getDOMSelection, n = e.getDOMRange, l = e.setDOMRange, t = e.elementContainsNode, s = e.nodeIsCursorTarget, r = e.innerElementIsActive, o = e.handleEvent, a = e.normalizeRange, u = e.rangeIsCollapsed, c = e.rangesAreEqual, e.SelectionManager = function(d) {
                function f(t) {
                    this.element = t, this.selectionDidChange = h(this.selectionDidChange, this), this.didMouseDown = h(this.didMouseDown, this), this.locationMapper = new e.LocationMapper(this.element), this.pointMapper = new e.PointMapper, this.lockCount = 0, o("mousedown", {
                        onElement: this.element,
                        withCallback: this.didMouseDown
                    });
                }
                return p(f, d), f.prototype.getLocationRange = function(t) {
                    var e, i;
                    return null == t && (t = {}), e = t.strict === !1 ? this.createLocationRangeFromDOMRange(n(), {
                        strict: !1
                    }) : t.ignoreLock ? this.currentLocationRange : null != (i = this.lockedLocationRange) ? i : this.currentLocationRange;
                }, f.prototype.setLocationRange = function(t) {
                    var e;
                    if (!this.lockedLocationRange) return t = a(t), (e = this.createDOMRangeFromLocationRange(t)) ? (l(e), this.updateCurrentLocationRange(t)) : void 0;
                }, f.prototype.setLocationRangeFromPointRange = function(t) {
                    var e, n;
                    return t = a(t), n = this.getLocationAtPoint(t[0]), e = this.getLocationAtPoint(t[1]), this.setLocationRange([
                        n,
                        e
                    ]);
                }, f.prototype.getClientRectAtLocationRange = function(t) {
                    var e;
                    return (e = this.createDOMRangeFromLocationRange(t)) ? this.getClientRectsForDOMRange(e)[1] : void 0;
                }, f.prototype.locationIsCursorTarget = function(t) {
                    var e, n, i;
                    return i = this.findNodeAndOffsetFromLocation(t), e = i[0], n = i[1], s(e);
                }, f.prototype.lock = function() {
                    return 0 === this.lockCount++ ? (this.updateCurrentLocationRange(), this.lockedLocationRange = this.getLocationRange()) : void 0;
                }, f.prototype.unlock = function() {
                    var t;
                    return 0 === --this.lockCount && (t = this.lockedLocationRange, this.lockedLocationRange = null, null != t) ? this.setLocationRange(t) : void 0;
                }, f.prototype.clearSelection = function() {
                    var t;
                    return null != (t = i()) ? t.removeAllRanges() : void 0;
                }, f.prototype.selectionIsCollapsed = function() {
                    var t;
                    return (null != (t = n()) ? t.collapsed : void 0) === !0;
                }, f.prototype.selectionIsExpanded = function() {
                    return !this.selectionIsCollapsed();
                }, f.prototype.createLocationRangeFromDOMRange = function(t, e) {
                    var n, i;
                    if (null != t && this.domRangeWithinElement(t) && (i = this.findLocationFromContainerAndOffset(t.startContainer, t.startOffset, e))) return t.collapsed || (n = this.findLocationFromContainerAndOffset(t.endContainer, t.endOffset, e)), a([
                        i,
                        n
                    ]);
                }, f.proxyMethod("locationMapper.findLocationFromContainerAndOffset"), f.proxyMethod("locationMapper.findContainerAndOffsetFromLocation"), f.proxyMethod("locationMapper.findNodeAndOffsetFromLocation"), f.proxyMethod("pointMapper.createDOMRangeFromPoint"), f.proxyMethod("pointMapper.getClientRectsForDOMRange"), f.prototype.didMouseDown = function() {
                    return this.pauseTemporarily();
                }, f.prototype.pauseTemporarily = function() {
                    var e, n, i, r;
                    return this.paused = !0, n = function(e) {
                        return function() {
                            var n, o, s;
                            for(e.paused = !1, clearTimeout(r), o = 0, s = i.length; s > o; o++)n = i[o], n.destroy();
                            return t(document, e.element) ? e.selectionDidChange() : void 0;
                        };
                    }(this), r = setTimeout(n, 200), i = function() {
                        var t, i, r, s;
                        for(r = [
                            "mousemove",
                            "keydown"
                        ], s = [], t = 0, i = r.length; i > t; t++)e = r[t], s.push(o(e, {
                            onElement: document,
                            withCallback: n
                        }));
                        return s;
                    }();
                }, f.prototype.selectionDidChange = function() {
                    return this.paused || r(this.element) ? void 0 : this.updateCurrentLocationRange();
                }, f.prototype.updateCurrentLocationRange = function(t) {
                    var e;
                    return (null != t ? t : t = this.createLocationRangeFromDOMRange(n())) && !c(t, this.currentLocationRange) ? (this.currentLocationRange = t, null != (e = this.delegate) && "function" == typeof e.locationRangeDidChange ? e.locationRangeDidChange(this.currentLocationRange.slice(0)) : void 0) : void 0;
                }, f.prototype.createDOMRangeFromLocationRange = function(t) {
                    var e, n, i, o;
                    return i = this.findContainerAndOffsetFromLocation(t[0]), n = u(t) ? i : null != (o = this.findContainerAndOffsetFromLocation(t[1])) ? o : i, null != i && null != n ? (e = document.createRange(), e.setStart.apply(e, i), e.setEnd.apply(e, n), e) : void 0;
                }, f.prototype.getLocationAtPoint = function(t) {
                    var e, n;
                    return (e = this.createDOMRangeFromPoint(t)) && null != (n = this.createLocationRangeFromDOMRange(e)) ? n[0] : void 0;
                }, f.prototype.domRangeWithinElement = function(e) {
                    return e.collapsed ? t(this.element, e.startContainer) : t(this.element, e.startContainer) && t(this.element, e.endContainer);
                }, f;
            }(e.BasicObject);
        }).call(this), (function() {
            var t, n, i, o, r = function(t, e) {
                function n() {
                    this.constructor = t;
                }
                for(var i in e)s.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
            }, s = {}.hasOwnProperty, a = [].slice;
            i = e.rangeIsCollapsed, o = e.rangesAreEqual, n = e.objectsAreEqual, t = e.getBlockConfig, e.EditorController = function(s) {
                function u(t) {
                    var n, i;
                    this.editorElement = t.editorElement, n = t.document, i = t.html, this.selectionManager = new e.SelectionManager(this.editorElement), this.selectionManager.delegate = this, this.composition = new e.Composition, this.composition.delegate = this, this.attachmentManager = new e.AttachmentManager(this.composition.getAttachments()), this.attachmentManager.delegate = this, this.inputController = new e["Level" + e.config.input.getLevel() + "InputController"](this.editorElement), this.inputController.delegate = this, this.inputController.responder = this.composition, this.compositionController = new e.CompositionController(this.editorElement, this.composition), this.compositionController.delegate = this, this.toolbarController = new e.ToolbarController(this.editorElement.toolbarElement), this.toolbarController.delegate = this, this.editor = new e.Editor(this.composition, this.selectionManager, this.editorElement), null != n ? this.editor.loadDocument(n) : this.editor.loadHTML(i);
                }
                var c;
                return r(u, s), u.prototype.registerSelectionManager = function() {
                    return e.selectionChangeObserver.registerSelectionManager(this.selectionManager);
                }, u.prototype.unregisterSelectionManager = function() {
                    return e.selectionChangeObserver.unregisterSelectionManager(this.selectionManager);
                }, u.prototype.render = function() {
                    return this.compositionController.render();
                }, u.prototype.reparse = function() {
                    return this.composition.replaceHTML(this.editorElement.innerHTML);
                }, u.prototype.compositionDidChangeDocument = function() {
                    return this.notifyEditorElement("document-change"), this.handlingInput ? void 0 : this.render();
                }, u.prototype.compositionDidChangeCurrentAttributes = function(t) {
                    return this.currentAttributes = t, this.toolbarController.updateAttributes(this.currentAttributes), this.updateCurrentActions(), this.notifyEditorElement("attributes-change", {
                        attributes: this.currentAttributes
                    });
                }, u.prototype.compositionDidPerformInsertionAtRange = function(t) {
                    return this.pasting ? this.pastedRange = t : void 0;
                }, u.prototype.compositionShouldAcceptFile = function(t) {
                    return this.notifyEditorElement("file-accept", {
                        file: t
                    });
                }, u.prototype.compositionDidAddAttachment = function(t) {
                    var e;
                    return e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-add", {
                        attachment: e
                    });
                }, u.prototype.compositionDidEditAttachment = function(t) {
                    var e;
                    return this.compositionController.rerenderViewForObject(t), e = this.attachmentManager.manageAttachment(t), this.notifyEditorElement("attachment-edit", {
                        attachment: e
                    }), this.notifyEditorElement("change");
                }, u.prototype.compositionDidChangeAttachmentPreviewURL = function(t) {
                    return this.compositionController.invalidateViewForObject(t), this.notifyEditorElement("change");
                }, u.prototype.compositionDidRemoveAttachment = function(t) {
                    var e;
                    return e = this.attachmentManager.unmanageAttachment(t), this.notifyEditorElement("attachment-remove", {
                        attachment: e
                    });
                }, u.prototype.compositionDidStartEditingAttachment = function(t, e) {
                    return this.attachmentLocationRange = this.composition.document.getLocationRangeOfAttachment(t), this.compositionController.installAttachmentEditorForAttachment(t, e), this.selectionManager.setLocationRange(this.attachmentLocationRange);
                }, u.prototype.compositionDidStopEditingAttachment = function() {
                    return this.compositionController.uninstallAttachmentEditor(), this.attachmentLocationRange = null;
                }, u.prototype.compositionDidRequestChangingSelectionToLocationRange = function(t) {
                    return !this.loadingSnapshot || this.isFocused() ? (this.requestedLocationRange = t, this.compositionRevisionWhenLocationRangeRequested = this.composition.revision, this.handlingInput ? void 0 : this.render()) : void 0;
                }, u.prototype.compositionWillLoadSnapshot = function() {
                    return this.loadingSnapshot = !0;
                }, u.prototype.compositionDidLoadSnapshot = function() {
                    return this.compositionController.refreshViewCache(), this.render(), this.loadingSnapshot = !1;
                }, u.prototype.getSelectionManager = function() {
                    return this.selectionManager;
                }, u.proxyMethod("getSelectionManager().setLocationRange"), u.proxyMethod("getSelectionManager().getLocationRange"), u.prototype.attachmentManagerDidRequestRemovalOfAttachment = function(t) {
                    return this.removeAttachment(t);
                }, u.prototype.compositionControllerWillSyncDocumentView = function() {
                    return this.inputController.editorWillSyncDocumentView(), this.selectionManager.lock(), this.selectionManager.clearSelection();
                }, u.prototype.compositionControllerDidSyncDocumentView = function() {
                    return this.inputController.editorDidSyncDocumentView(), this.selectionManager.unlock(), this.updateCurrentActions(), this.notifyEditorElement("sync");
                }, u.prototype.compositionControllerDidRender = function() {
                    return null != this.requestedLocationRange && (this.compositionRevisionWhenLocationRangeRequested === this.composition.revision && this.selectionManager.setLocationRange(this.requestedLocationRange), this.requestedLocationRange = null, this.compositionRevisionWhenLocationRangeRequested = null), this.renderedCompositionRevision !== this.composition.revision && (this.runEditorFilters(), this.composition.updateCurrentAttributes(), this.notifyEditorElement("render")), this.renderedCompositionRevision = this.composition.revision;
                }, u.prototype.compositionControllerDidFocus = function() {
                    return this.toolbarController.hideDialog(), this.notifyEditorElement("focus");
                }, u.prototype.compositionControllerDidBlur = function() {
                    return this.notifyEditorElement("blur");
                }, u.prototype.compositionControllerDidSelectAttachment = function(t, e) {
                    return this.toolbarController.hideDialog(), this.composition.editAttachment(t, e);
                }, u.prototype.compositionControllerDidRequestDeselectingAttachment = function(t) {
                    var e, n;
                    return e = null != (n = this.attachmentLocationRange) ? n : this.composition.document.getLocationRangeOfAttachment(t), this.selectionManager.setLocationRange(e[1]);
                }, u.prototype.compositionControllerWillUpdateAttachment = function(t) {
                    return this.editor.recordUndoEntry("Edit Attachment", {
                        context: t.id,
                        consolidatable: !0
                    });
                }, u.prototype.compositionControllerDidRequestRemovalOfAttachment = function(t) {
                    return this.removeAttachment(t);
                }, u.prototype.inputControllerWillHandleInput = function() {
                    return this.handlingInput = !0, this.requestedRender = !1;
                }, u.prototype.inputControllerDidRequestRender = function() {
                    return this.requestedRender = !0;
                }, u.prototype.inputControllerDidHandleInput = function() {
                    return this.handlingInput = !1, this.requestedRender ? (this.requestedRender = !1, this.render()) : void 0;
                }, u.prototype.inputControllerDidAllowUnhandledInput = function() {
                    return this.notifyEditorElement("change");
                }, u.prototype.inputControllerDidRequestReparse = function() {
                    return this.reparse();
                }, u.prototype.inputControllerWillPerformTyping = function() {
                    return this.recordTypingUndoEntry();
                }, u.prototype.inputControllerWillPerformFormatting = function(t) {
                    return this.recordFormattingUndoEntry(t);
                }, u.prototype.inputControllerWillCutText = function() {
                    return this.editor.recordUndoEntry("Cut");
                }, u.prototype.inputControllerWillPaste = function(t) {
                    return this.editor.recordUndoEntry("Paste"), this.pasting = !0, this.notifyEditorElement("before-paste", {
                        paste: t
                    });
                }, u.prototype.inputControllerDidPaste = function(t) {
                    return t.range = this.pastedRange, this.pastedRange = null, this.pasting = null, this.notifyEditorElement("paste", {
                        paste: t
                    });
                }, u.prototype.inputControllerWillMoveText = function() {
                    return this.editor.recordUndoEntry("Move");
                }, u.prototype.inputControllerWillAttachFiles = function() {
                    return this.editor.recordUndoEntry("Drop Files");
                }, u.prototype.inputControllerWillPerformUndo = function() {
                    return this.editor.undo();
                }, u.prototype.inputControllerWillPerformRedo = function() {
                    return this.editor.redo();
                }, u.prototype.inputControllerDidReceiveKeyboardCommand = function(t) {
                    return this.toolbarController.applyKeyboardCommand(t);
                }, u.prototype.inputControllerDidStartDrag = function() {
                    return this.locationRangeBeforeDrag = this.selectionManager.getLocationRange();
                }, u.prototype.inputControllerDidReceiveDragOverPoint = function(t) {
                    return this.selectionManager.setLocationRangeFromPointRange(t);
                }, u.prototype.inputControllerDidCancelDrag = function() {
                    return this.selectionManager.setLocationRange(this.locationRangeBeforeDrag), this.locationRangeBeforeDrag = null;
                }, u.prototype.locationRangeDidChange = function(t) {
                    return this.composition.updateCurrentAttributes(), this.updateCurrentActions(), this.attachmentLocationRange && !o(this.attachmentLocationRange, t) && this.composition.stopEditingAttachment(), this.notifyEditorElement("selection-change");
                }, u.prototype.toolbarDidClickButton = function() {
                    return this.getLocationRange() ? void 0 : this.setLocationRange({
                        index: 0,
                        offset: 0
                    });
                }, u.prototype.toolbarDidInvokeAction = function(t) {
                    return this.invokeAction(t);
                }, u.prototype.toolbarDidToggleAttribute = function(t) {
                    return this.recordFormattingUndoEntry(t), this.composition.toggleCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
                }, u.prototype.toolbarDidUpdateAttribute = function(t, e) {
                    return this.recordFormattingUndoEntry(t), this.composition.setCurrentAttribute(t, e), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
                }, u.prototype.toolbarDidRemoveAttribute = function(t) {
                    return this.recordFormattingUndoEntry(t), this.composition.removeCurrentAttribute(t), this.render(), this.selectionFrozen ? void 0 : this.editorElement.focus();
                }, u.prototype.toolbarWillShowDialog = function() {
                    return this.composition.expandSelectionForEditing(), this.freezeSelection();
                }, u.prototype.toolbarDidShowDialog = function(t) {
                    return this.notifyEditorElement("toolbar-dialog-show", {
                        dialogName: t
                    });
                }, u.prototype.toolbarDidHideDialog = function(t) {
                    return this.thawSelection(), this.editorElement.focus(), this.notifyEditorElement("toolbar-dialog-hide", {
                        dialogName: t
                    });
                }, u.prototype.freezeSelection = function() {
                    return this.selectionFrozen ? void 0 : (this.selectionManager.lock(), this.composition.freezeSelection(), this.selectionFrozen = !0, this.render());
                }, u.prototype.thawSelection = function() {
                    return this.selectionFrozen ? (this.composition.thawSelection(), this.selectionManager.unlock(), this.selectionFrozen = !1, this.render()) : void 0;
                }, u.prototype.actions = {
                    undo: {
                        test: function() {
                            return this.editor.canUndo();
                        },
                        perform: function() {
                            return this.editor.undo();
                        }
                    },
                    redo: {
                        test: function() {
                            return this.editor.canRedo();
                        },
                        perform: function() {
                            return this.editor.redo();
                        }
                    },
                    link: {
                        test: function() {
                            return this.editor.canActivateAttribute("href");
                        }
                    },
                    increaseNestingLevel: {
                        test: function() {
                            return this.editor.canIncreaseNestingLevel();
                        },
                        perform: function() {
                            return this.editor.increaseNestingLevel() && this.render();
                        }
                    },
                    decreaseNestingLevel: {
                        test: function() {
                            return this.editor.canDecreaseNestingLevel();
                        },
                        perform: function() {
                            return this.editor.decreaseNestingLevel() && this.render();
                        }
                    },
                    attachFiles: {
                        test: function() {
                            return !0;
                        },
                        perform: function() {
                            return e.config.input.pickFiles(this.editor.insertFiles);
                        }
                    }
                }, u.prototype.canInvokeAction = function(t) {
                    var e, n;
                    return this.actionIsExternal(t) ? !0 : !!(null != (e = this.actions[t]) && null != (n = e.test) ? n.call(this) : void 0);
                }, u.prototype.invokeAction = function(t) {
                    var e, n;
                    return this.actionIsExternal(t) ? this.notifyEditorElement("action-invoke", {
                        actionName: t
                    }) : null != (e = this.actions[t]) && null != (n = e.perform) ? n.call(this) : void 0;
                }, u.prototype.actionIsExternal = function(t) {
                    return /^x-./.test(t);
                }, u.prototype.getCurrentActions = function() {
                    var t, e;
                    e = {};
                    for(t in this.actions)e[t] = this.canInvokeAction(t);
                    return e;
                }, u.prototype.updateCurrentActions = function() {
                    var t;
                    return t = this.getCurrentActions(), n(t, this.currentActions) ? void 0 : (this.currentActions = t, this.toolbarController.updateActions(this.currentActions), this.notifyEditorElement("actions-change", {
                        actions: this.currentActions
                    }));
                }, u.prototype.runEditorFilters = function() {
                    var t, e, n, i, o, r, s, a;
                    for(a = this.composition.getSnapshot(), o = this.editor.filters, n = 0, i = o.length; i > n; n++)e = o[n], t = a.document, s = a.selectedRange, a = null != (r = e.call(this.editor, a)) ? r : {}, null == a.document && (a.document = t), null == a.selectedRange && (a.selectedRange = s);
                    return c(a, this.composition.getSnapshot()) ? void 0 : this.composition.loadSnapshot(a);
                }, c = function(t, e) {
                    return o(t.selectedRange, e.selectedRange) && t.document.isEqualTo(e.document);
                }, u.prototype.updateInputElement = function() {
                    var t, n;
                    return t = this.compositionController.getSerializableElement(), n = e.serializeToContentType(t, "text/html"), this.editorElement.setInputElementValue(n);
                }, u.prototype.notifyEditorElement = function(t, e) {
                    switch(t){
                        case "document-change":
                            this.documentChangedSinceLastRender = !0;
                            break;
                        case "render":
                            this.documentChangedSinceLastRender && (this.documentChangedSinceLastRender = !1, this.notifyEditorElement("change"));
                            break;
                        case "change":
                        case "attachment-add":
                        case "attachment-edit":
                        case "attachment-remove":
                            this.updateInputElement();
                    }
                    return this.editorElement.notify(t, e);
                }, u.prototype.removeAttachment = function(t) {
                    return this.editor.recordUndoEntry("Delete Attachment"), this.composition.removeAttachment(t), this.render();
                }, u.prototype.recordFormattingUndoEntry = function(e) {
                    var n, o;
                    return n = t(e), o = this.selectionManager.getLocationRange(), n || !i(o) ? this.editor.recordUndoEntry("Formatting", {
                        context: this.getUndoContext(),
                        consolidatable: !0
                    }) : void 0;
                }, u.prototype.recordTypingUndoEntry = function() {
                    return this.editor.recordUndoEntry("Typing", {
                        context: this.getUndoContext(this.currentAttributes),
                        consolidatable: !0
                    });
                }, u.prototype.getUndoContext = function() {
                    var t;
                    return t = 1 <= arguments.length ? a.call(arguments, 0) : [], [
                        this.getLocationContext(),
                        this.getTimeContext()
                    ].concat(a.call(t));
                }, u.prototype.getLocationContext = function() {
                    var t;
                    return t = this.selectionManager.getLocationRange(), i(t) ? t[0].index : t;
                }, u.prototype.getTimeContext = function() {
                    return e.config.undoInterval > 0 ? Math.floor((new Date).getTime() / e.config.undoInterval) : 0;
                }, u.prototype.isFocused = function() {
                    var t;
                    return this.editorElement === (null != (t = this.editorElement.ownerDocument) ? t.activeElement : void 0);
                }, u;
            }(e.Controller);
        }).call(this), (function() {
            var t, n, i, o, r, s;
            n = e.browser, r = e.makeElement, s = e.triggerEvent, i = e.handleEvent, o = e.handleEventOnce, t = e.AttachmentView.attachmentSelector, e.registerElement("trix-editor", function() {
                var a, u, c, l, h, p, d, f;
                return p = 0, u = function(t) {
                    return !document.querySelector(":focus") && t.hasAttribute("autofocus") && document.querySelector("[autofocus]") === t ? t.focus() : void 0;
                }, d = function(t) {
                    return t.hasAttribute("contenteditable") ? void 0 : (t.setAttribute("contenteditable", ""), o("focus", {
                        onElement: t,
                        withCallback: function() {
                            return c(t);
                        }
                    }));
                }, a = function(t) {
                    return t.hasAttribute("role") ? void 0 : t.setAttribute("role", "textbox");
                }, c = function(t) {
                    return h(t), f(t);
                }, h = function(t) {
                    return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("enableObjectResizing") : void 0) ? (document.execCommand("enableObjectResizing", !1, !1), i("mscontrolselect", {
                        onElement: t,
                        preventDefault: !0
                    })) : void 0;
                }, f = function() {
                    var t;
                    return ("function" == typeof document.queryCommandSupported ? document.queryCommandSupported("DefaultParagraphSeparator") : void 0) && (t = e.config.blockAttributes["default"].tagName, "div" === t || "p" === t) ? document.execCommand("DefaultParagraphSeparator", !1, t) : void 0;
                }, l = function() {
                    return n.forcesObjectResizing ? {
                        display: "inline",
                        width: "auto"
                    } : {
                        display: "inline-block",
                        width: "1px"
                    };
                }(), {
                    defaultCSS: "%t {\n  display: block;\n}\n\n%t:empty:not(:focus)::before {\n  content: attr(placeholder);\n  color: graytext;\n  cursor: text;\n}\n\n%t a[contenteditable=false] {\n  cursor: text;\n}\n\n%t img {\n  max-width: 100%;\n  height: auto;\n}\n\n%t " + t + " figcaption textarea {\n  resize: none;\n}\n\n%t " + t + " figcaption textarea.trix-autoresize-clone {\n  position: absolute;\n  left: -9999px;\n  max-height: 0px;\n}\n\n%t " + t + " figcaption[data-trix-placeholder]:empty::before {\n  content: attr(data-trix-placeholder);\n  color: graytext;\n}\n\n%t [data-trix-cursor-target] {\n  display: " + l.display + " !important;\n  width: " + l.width + " !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  border: none !important;\n}\n\n%t [data-trix-cursor-target=left] {\n  vertical-align: top !important;\n  margin-left: -1px !important;\n}\n\n%t [data-trix-cursor-target=right] {\n  vertical-align: bottom !important;\n  margin-right: -1px !important;\n}",
                    trixId: {
                        get: function() {
                            return this.hasAttribute("trix-id") ? this.getAttribute("trix-id") : (this.setAttribute("trix-id", ++p), this.trixId);
                        }
                    },
                    toolbarElement: {
                        get: function() {
                            var t, e, n;
                            return this.hasAttribute("toolbar") ? null != (e = this.ownerDocument) ? e.getElementById(this.getAttribute("toolbar")) : void 0 : this.parentNode ? (n = "trix-toolbar-" + this.trixId, this.setAttribute("toolbar", n), t = r("trix-toolbar", {
                                id: n
                            }), this.parentNode.insertBefore(t, this), t) : void 0;
                        }
                    },
                    inputElement: {
                        get: function() {
                            var t, e, n;
                            return this.hasAttribute("input") ? null != (n = this.ownerDocument) ? n.getElementById(this.getAttribute("input")) : void 0 : this.parentNode ? (e = "trix-input-" + this.trixId, this.setAttribute("input", e), t = r("input", {
                                type: "hidden",
                                id: e
                            }), this.parentNode.insertBefore(t, this.nextElementSibling), t) : void 0;
                        }
                    },
                    editor: {
                        get: function() {
                            var t;
                            return null != (t = this.editorController) ? t.editor : void 0;
                        }
                    },
                    name: {
                        get: function() {
                            var t;
                            return null != (t = this.inputElement) ? t.name : void 0;
                        }
                    },
                    value: {
                        get: function() {
                            var t;
                            return null != (t = this.inputElement) ? t.value : void 0;
                        },
                        set: function(t) {
                            var e;
                            return this.defaultValue = t, null != (e = this.editor) ? e.loadHTML(this.defaultValue) : void 0;
                        }
                    },
                    notify: function(t, e) {
                        return this.editorController ? s("trix-" + t, {
                            onElement: this,
                            attributes: e
                        }) : void 0;
                    },
                    setInputElementValue: function(t) {
                        var e;
                        return null != (e = this.inputElement) ? e.value = t : void 0;
                    },
                    initialize: function() {
                        return d(this), a(this);
                    },
                    connect: function() {
                        return this.hasAttribute("data-trix-internal") ? void 0 : (this.editorController || (s("trix-before-initialize", {
                            onElement: this
                        }), this.editorController = new e.EditorController({
                            editorElement: this,
                            html: this.defaultValue = this.value
                        }), requestAnimationFrame(function(t) {
                            return function() {
                                return s("trix-initialize", {
                                    onElement: t
                                });
                            };
                        }(this))), this.editorController.registerSelectionManager(), this.registerResetListener(), u(this));
                    },
                    disconnect: function() {
                        var t;
                        return null != (t = this.editorController) && t.unregisterSelectionManager(), this.unregisterResetListener();
                    },
                    registerResetListener: function() {
                        return this.resetListener = this.resetBubbled.bind(this), window.addEventListener("reset", this.resetListener, !1);
                    },
                    unregisterResetListener: function() {
                        return window.removeEventListener("reset", this.resetListener, !1);
                    },
                    resetBubbled: function(t) {
                        var e;
                        return t.target !== (null != (e = this.inputElement) ? e.form : void 0) || t.defaultPrevented ? void 0 : this.reset();
                    },
                    reset: function() {
                        return this.value = this.defaultValue;
                    }
                };
            }());
        }).call(this), (function() {}).call(this);
    }).call(this), (0, module.exports) ? module.exports = e : "function" == typeof define && define.amd && define(e);
}).call(this);

},{}],"94idb":[function(require,module,exports) {
(function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(typeof self !== "undefined" ? self : this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                /******/ configurable: false,
                /******/ enumerable: true,
                /******/ get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 0);
    /******/ }({
        /***/ "./dist/icons.json": /*!*************************!*\
  !*** ./dist/icons.json ***!
  \*************************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, download-cloud, download, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                "check": '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                "circle": '<circle cx="12" cy="12" r="10"></circle>',
                "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>',
                "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
                "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
            };
        /***/ },
        /***/ "./node_modules/classnames/dedupe.js": /*!*******************************************!*\
  !*** ./node_modules/classnames/dedupe.js ***!
  \*******************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ 
            /* global define */ (function() {
                "use strict";
                var classNames = function() {
                    // don't inherit from Object so we can skip hasOwnProperty check later
                    // http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
                    function StorageObject() {}
                    StorageObject.prototype = Object.create(null);
                    function _parseArray(resultSet, array) {
                        var length = array.length;
                        for(var i = 0; i < length; ++i)_parse(resultSet, array[i]);
                    }
                    var hasOwn = {}.hasOwnProperty;
                    function _parseNumber(resultSet, num) {
                        resultSet[num] = true;
                    }
                    function _parseObject(resultSet, object) {
                        for(var k in object)if (hasOwn.call(object, k)) // set value to false instead of deleting it to avoid changing object structure
                        // https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
                        resultSet[k] = !!object[k];
                    }
                    var SPACE = /\s+/;
                    function _parseString(resultSet, str) {
                        var array = str.split(SPACE);
                        var length = array.length;
                        for(var i = 0; i < length; ++i)resultSet[array[i]] = true;
                    }
                    function _parse(resultSet, arg) {
                        if (!arg) return;
                        var argType = typeof arg;
                        // 'foo bar'
                        if (argType === "string") _parseString(resultSet, arg);
                        else if (Array.isArray(arg)) _parseArray(resultSet, arg);
                        else if (argType === "object") _parseObject(resultSet, arg);
                        else if (argType === "number") _parseNumber(resultSet, arg);
                    }
                    function _classNames() {
                        // don't leak arguments
                        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
                        var len = arguments.length;
                        var args = Array(len);
                        for(var i = 0; i < len; i++)args[i] = arguments[i];
                        var classSet = new StorageObject();
                        _parseArray(classSet, args);
                        var list = [];
                        for(var k in classSet)if (classSet[k]) list.push(k);
                        return list.join(" ");
                    }
                    return _classNames;
                }();
                if (typeof module1 !== "undefined" && module1.exports) module1.exports = classNames;
                else __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                    return classNames;
                }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            })();
        /***/ },
        /***/ "./node_modules/core-js/es/array/from.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/es/array/from.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! ../../modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
            __webpack_require__(/*! ../../modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
            var path = __webpack_require__(/*! ../../internals/path */ "./node_modules/core-js/internals/path.js");
            module1.exports = path.Array.from;
        /***/ },
        /***/ "./node_modules/core-js/internals/a-function.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                if (typeof it != "function") throw TypeError(String(it) + " is not a function");
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/an-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            module1.exports = function(it) {
                if (!isObject(it)) throw TypeError(String(it) + " is not an object");
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-from.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
            var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
            var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            module1.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == "function" ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length, result, step, iterator;
                if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
                // if the target is not iterable or it's an array with the default iterator - use a simple case
                if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                    iterator = iteratorMethod.call(O);
                    result = new C();
                    for(; !(step = iterator.next()).done; index++)createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [
                        step.value,
                        index
                    ], true) : step.value);
                } else {
                    length = toLength(O.length);
                    result = new C(length);
                    for(; length > index; index++)createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                }
                result.length = index;
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/array-includes.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
            var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
            // `Array.prototype.{ indexOf, includes }` methods implementation
            // false -> Array#indexOf
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            // true  -> Array#includes
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            module1.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                    var O = toIndexedObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while(length > index){
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                    // Array#indexOf ignores holes, Array#includes - not
                    }
                    else for(; length > index; index++)if (IS_INCLUDES || index in O) {
                        if (O[index] === el) return IS_INCLUDES || index || 0;
                    }
                    return !IS_INCLUDES && -1;
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/bind-context.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
            // optional / simple context binding
            module1.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch(length){
                    case 0:
                        return function() {
                            return fn.call(that);
                        };
                    case 1:
                        return function(a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function(a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function(a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function() {
                    return fn.apply(that, arguments);
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            // call something on iterator step with safe closing on error
            module1.exports = function(iterator, fn, value, ENTRIES) {
                try {
                    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
                } catch (error) {
                    var returnMethod = iterator["return"];
                    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
                    throw error;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/check-correctness-of-iteration.js": /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var SAFE_CLOSING = false;
            try {
                var called = 0;
                var iteratorWithReturn = {
                    next: function() {
                        return {
                            done: !!called++
                        };
                    },
                    "return": function() {
                        SAFE_CLOSING = true;
                    }
                };
                iteratorWithReturn[ITERATOR] = function() {
                    return this;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(iteratorWithReturn, function() {
                    throw 2;
                });
            } catch (error) {}
            module1.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
                var ITERATION_SUPPORT = false;
                try {
                    var object = {};
                    object[ITERATOR] = function() {
                        return {
                            next: function() {
                                return {
                                    done: ITERATION_SUPPORT = true
                                };
                            }
                        };
                    };
                    exec(object);
                } catch (error) {}
                return ITERATION_SUPPORT;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof-raw.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var toString = {}.toString;
            module1.exports = function(it) {
                return toString.call(it).slice(8, -1);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/classof.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            // ES3 wrong here
            var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
            }()) == "Arguments";
            // fallback for IE11 Script Access Denied error
            var tryGet = function(it, key) {
                try {
                    return it[key];
                } catch (error) {}
            };
            // getting tag from ES6+ `Object.prototype.toString`
            module1.exports = function(it) {
                var O, tag, result;
                return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/copy-constructor-properties.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
            var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            module1.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/correct-prototype-getter.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !fails(function() {
                function F() {}
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/create-iterator-constructor.js": /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
            var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var returnThis = function() {
                return this;
            };
            module1.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, {
                    next: createPropertyDescriptor(1, next)
                });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property-descriptor.js": /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/create-property.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = function(object, key, value) {
                var propertyKey = toPrimitive(key);
                if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else object[propertyKey] = value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/define-iterator.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
            var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");
            var IteratorPrototype = IteratorsCore.IteratorPrototype;
            var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
            var ITERATOR = wellKnownSymbol("iterator");
            var KEYS = "keys";
            var VALUES = "values";
            var ENTRIES = "entries";
            var returnThis = function() {
                return this;
            };
            module1.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
                    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
                    switch(KIND){
                        case KEYS:
                            return function keys() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case VALUES:
                            return function values() {
                                return new IteratorConstructor(this, KIND);
                            };
                        case ENTRIES:
                            return function entries() {
                                return new IteratorConstructor(this, KIND);
                            };
                    }
                    return function() {
                        return new IteratorConstructor(this);
                    };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                // fix native
                if (anyNativeIterator) {
                    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                        if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                            if (setPrototypeOf) setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                            else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                        }
                        // Set @@toStringTag to native iterators
                        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                        if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                    INCORRECT_VALUES_NAME = true;
                    defaultIterator = function values() {
                        return nativeIterator.call(this);
                    };
                }
                // define iterator
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) hide(IterablePrototype, ITERATOR, defaultIterator);
                Iterators[NAME] = defaultIterator;
                // export additional methods
                if (DEFAULT) {
                    methods = {
                        values: getIterationMethod(VALUES),
                        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                        entries: getIterationMethod(ENTRIES)
                    };
                    if (FORCED) {
                        for(KEY in methods)if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) redefine(IterablePrototype, KEY, methods[KEY]);
                    } else $({
                        target: NAME,
                        proto: true,
                        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
                    }, methods);
                }
                return methods;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/descriptors.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !fails(function() {
                return Object.defineProperty({}, "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/document-create-element.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var document1 = global.document;
            // typeof document.createElement is 'object' in old IE
            var exist = isObject(document1) && isObject(document1.createElement);
            module1.exports = function(it) {
                return exist ? document1.createElement(it) : {};
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/enum-bug-keys.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // IE8- don't enum bug keys
            module1.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
            ];
        /***/ },
        /***/ "./node_modules/core-js/internals/export.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
            var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
            /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/ module1.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) target = global;
                else if (STATIC) target = global[TARGET] || setGlobal(TARGET, {});
                else target = (global[TARGET] || {}).prototype;
                if (target) for(key in source){
                    sourceProperty = source[key];
                    if (options.noTargetGet) {
                        descriptor = getOwnPropertyDescriptor(target, key);
                        targetProperty = descriptor && descriptor.value;
                    } else targetProperty = target[key];
                    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
                    // contained in target
                    if (!FORCED && targetProperty !== undefined) {
                        if (typeof sourceProperty === typeof targetProperty) continue;
                        copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    // add a flag to not completely full polyfills
                    if (options.sham || targetProperty && targetProperty.sham) hide(sourceProperty, "sham", true);
                    // extend global
                    redefine(target, key, sourceProperty, options);
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/fails.js": /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(exec) {
                try {
                    return !!exec();
                } catch (error) {
                    return true;
                }
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/function-to-string.js": /*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            module1.exports = shared("native-function-to-string", Function.toString);
        /***/ },
        /***/ "./node_modules/core-js/internals/get-iterator-method.js": /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var ITERATOR = wellKnownSymbol("iterator");
            module1.exports = function(it) {
                if (it != undefined) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/global.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            /* WEBPACK VAR INJECTION */ (function(global) {
                var O = "object";
                var check = function(it) {
                    return it && it.Math == Math && it;
                };
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                module1.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
                Function("return this")();
            /* WEBPACK VAR INJECTION */ }).call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"));
        /***/ },
        /***/ "./node_modules/core-js/internals/has.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var hasOwnProperty = {}.hasOwnProperty;
            module1.exports = function(it, key) {
                return hasOwnProperty.call(it, key);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/hidden-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/hide.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            module1.exports = DESCRIPTORS ? function(object, key, value) {
                return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
            } : function(object, key, value) {
                object[key] = value;
                return object;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/html.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var document1 = global.document;
            module1.exports = document1 && document1.documentElement;
        /***/ },
        /***/ "./node_modules/core-js/internals/ie8-dom-define.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            // Thank's IE8 for his funny defineProperty
            module1.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement("div"), "a", {
                    get: function() {
                        return 7;
                    }
                }).a != 7;
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/indexed-object.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
            var split = "".split;
            module1.exports = fails(function() {
                // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
                // eslint-disable-next-line no-prototype-builtins
                return !Object("z").propertyIsEnumerable(0);
            }) ? function(it) {
                return classof(it) == "String" ? split.call(it, "") : Object(it);
            } : Object;
        /***/ },
        /***/ "./node_modules/core-js/internals/internal-state.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var WeakMap = global.WeakMap;
            var set, get, has;
            var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
            };
            var getterFor = function(TYPE) {
                return function(it) {
                    var state;
                    if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
                    return state;
                };
            };
            if (NATIVE_WEAK_MAP) {
                var store = new WeakMap();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                    wmset.call(store, it, metadata);
                    return metadata;
                };
                get = function(it) {
                    return wmget.call(store, it) || {};
                };
                has = function(it) {
                    return wmhas.call(store, it);
                };
            } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                    hide(it, STATE, metadata);
                    return metadata;
                };
                get = function(it) {
                    return objectHas(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                    return objectHas(it, STATE);
                };
            }
            module1.exports = {
                set: set,
                get: get,
                has: has,
                enforce: enforce,
                getterFor: getterFor
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-array-iterator-method.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var ArrayPrototype = Array.prototype;
            // check on default Array iterator
            module1.exports = function(it) {
                return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-forced.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            var replacement = /#|\.prototype\./;
            var isForced = function(feature, detection) {
                var value = data[normalize(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
            };
            var normalize = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
            };
            var data = isForced.data = {};
            var NATIVE = isForced.NATIVE = "N";
            var POLYFILL = isForced.POLYFILL = "P";
            module1.exports = isForced;
        /***/ },
        /***/ "./node_modules/core-js/internals/is-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/is-pure.js": /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = false;
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators-core.js": /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var ITERATOR = wellKnownSymbol("iterator");
            var BUGGY_SAFARI_ITERATORS = false;
            var returnThis = function() {
                return this;
            };
            // `%IteratorPrototype%` object
            // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
            var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
            if ([].keys) {
                arrayIterator = [].keys();
                // Safari 8 has buggy iterators w/o `next`
                if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
                else {
                    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
            }
            if (IteratorPrototype == undefined) IteratorPrototype = {};
            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
            module1.exports = {
                IteratorPrototype: IteratorPrototype,
                BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/iterators.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            module1.exports = {};
        /***/ },
        /***/ "./node_modules/core-js/internals/native-symbol.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
            module1.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                // Chrome 38 Symbol has incorrect toString conversion
                // eslint-disable-next-line no-undef
                return !String(Symbol());
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/native-weak-map.js": /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var WeakMap = global.WeakMap;
            module1.exports = typeof WeakMap === "function" && /native code/.test(nativeFunctionToString.call(WeakMap));
        /***/ },
        /***/ "./node_modules/core-js/internals/object-create.js": /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
            var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var IE_PROTO = sharedKey("IE_PROTO");
            var PROTOTYPE = "prototype";
            var Empty = function() {};
            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var createDict = function() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = documentCreateElement("iframe");
                var length = enumBugKeys.length;
                var lt = "<";
                var script = "script";
                var gt = ">";
                var js = "java" + script + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while(length--)delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
            };
            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            module1.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = createDict();
                return Properties === undefined ? result : defineProperties(result, Properties);
            };
            hiddenKeys[IE_PROTO] = true;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-properties.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
            module1.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key;
                while(length > i)definePropertyModule.f(O, key = keys[i++], Properties[key]);
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-define-property.js": /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var nativeDefineProperty = Object.defineProperty;
            exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return nativeDefineProperty(O, P, Attributes);
                } catch (error) {}
                if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported");
                if ("value" in Attributes) O[P] = Attributes.value;
                return O;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js": /*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
            var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
            var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
            var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE) try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {}
                if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-names.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            var hiddenKeys = enumBugKeys.concat("length", "prototype");
            exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js": /*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            exports.f = Object.getOwnPropertySymbols;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-get-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
            var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
            var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");
            var IE_PROTO = sharedKey("IE_PROTO");
            var ObjectPrototype = Object.prototype;
            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            module1.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) return O.constructor.prototype;
                return O instanceof Object ? ObjectPrototype : null;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys-internal.js": /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
            var arrayIncludes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js");
            var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
            var arrayIndexOf = arrayIncludes(false);
            module1.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key;
                for(key in O)!has(hiddenKeys, key) && has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
                while(names.length > i)if (has(O, key = names[i++])) ~arrayIndexOf(result, key) || result.push(key);
                return result;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-keys.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
            var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            module1.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/object-property-is-enumerable.js": /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
            var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            // Nashorn ~ JDK8 bug
            var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
                1: 2
            }, 1);
            exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
            } : nativePropertyIsEnumerable;
        /***/ },
        /***/ "./node_modules/core-js/internals/object-set-prototype-of.js": /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var validateSetPrototypeOfArguments = __webpack_require__(/*! ../internals/validate-set-prototype-of-arguments */ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");
            // Works with __proto__ only. Old v8 can't work with null proto objects.
            /* eslint-disable no-proto */ module1.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                    setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                    setter.call(test, []);
                    correctSetter = test instanceof Array;
                } catch (error) {}
                return function setPrototypeOf(O, proto) {
                    validateSetPrototypeOfArguments(O, proto);
                    if (correctSetter) setter.call(O, proto);
                    else O.__proto__ = proto;
                    return O;
                };
            }() : undefined);
        /***/ },
        /***/ "./node_modules/core-js/internals/own-keys.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
            var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            var Reflect = global.Reflect;
            // all object keys, includes non-enumerable and symbols
            module1.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/path.js": /*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            module1.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
        /***/ },
        /***/ "./node_modules/core-js/internals/redefine.js": /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var getInternalState = InternalStateModule.get;
            var enforceInternalState = InternalStateModule.enforce;
            var TEMPLATE = String(nativeFunctionToString).split("toString");
            shared("inspectSource", function(it) {
                return nativeFunctionToString.call(it);
            });
            (module1.exports = function(O, key, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == "function") {
                    if (typeof key == "string" && !has(value, "name")) hide(value, "name", key);
                    enforceInternalState(value).source = TEMPLATE.join(typeof key == "string" ? key : "");
                }
                if (O === global) {
                    if (simple) O[key] = value;
                    else setGlobal(key, value);
                    return;
                } else if (!unsafe) delete O[key];
                else if (!noTargetGet && O[key]) simple = true;
                if (simple) O[key] = value;
                else hide(O, key, value);
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, "toString", function toString() {
                return typeof this == "function" && getInternalState(this).source || nativeFunctionToString.call(this);
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/require-object-coercible.js": /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            // `RequireObjectCoercible` abstract operation
            // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
            module1.exports = function(it) {
                if (it == undefined) throw TypeError("Can't call method on " + it);
                return it;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-global.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
            module1.exports = function(key, value) {
                try {
                    hide(global, key, value);
                } catch (error) {
                    global[key] = value;
                }
                return value;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/set-to-string-tag.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
            var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
            var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
            var TO_STRING_TAG = wellKnownSymbol("toStringTag");
            module1.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) defineProperty(it, TO_STRING_TAG, {
                    configurable: true,
                    value: TAG
                });
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared-key.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var keys = shared("keys");
            module1.exports = function(key) {
                return keys[key] || (keys[key] = uid(key));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/shared.js": /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
            var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
            var SHARED = "__core-js_shared__";
            var store = global[SHARED] || setGlobal(SHARED, {});
            (module1.exports = function(key, value) {
                return store[key] || (store[key] = value !== undefined ? value : {});
            })("versions", []).push({
                version: "3.1.3",
                mode: IS_PURE ? "pure" : "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
            });
        /***/ },
        /***/ "./node_modules/core-js/internals/string-at.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/string-at.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // CONVERT_TO_STRING: true  -> String#at
            // CONVERT_TO_STRING: false -> String#codePointAt
            module1.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S.length;
                var first, second;
                if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
                first = S.charCodeAt(position);
                return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-absolute-index.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var max = Math.max;
            var min = Math.min;
            // Helper for a popular repeating case of the spec:
            // Let integer be ? ToInteger(index).
            // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
            module1.exports = function(index, length) {
                var integer = toInteger(index);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-indexed-object.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            // toObject with fallback for non-array-like ES3 strings
            var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            module1.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-integer.js": /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var ceil = Math.ceil;
            var floor = Math.floor;
            // `ToInteger` abstract operation
            // https://tc39.github.io/ecma262/#sec-tointeger
            module1.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-length.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
            var min = Math.min;
            // `ToLength` abstract operation
            // https://tc39.github.io/ecma262/#sec-tolength
            module1.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-object.js": /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
            // `ToObject` abstract operation
            // https://tc39.github.io/ecma262/#sec-toobject
            module1.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/to-primitive.js": /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            // 7.1.1 ToPrimitive(input [, PreferredType])
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module1.exports = function(it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/uid.js": /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var id = 0;
            var postfix = Math.random();
            module1.exports = function(key) {
                return "Symbol(".concat(key === undefined ? "" : key, ")_", (++id + postfix).toString(36));
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
  \*******************************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
            var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
            module1.exports = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) throw TypeError("Can't set " + String(proto) + " as a prototype");
            };
        /***/ },
        /***/ "./node_modules/core-js/internals/well-known-symbol.js": /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
            var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
            var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
            var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
            var Symbol1 = global.Symbol;
            var store = shared("wks");
            module1.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol1[name] || (NATIVE_SYMBOL ? Symbol1 : uid)("Symbol." + name));
            };
        /***/ },
        /***/ "./node_modules/core-js/modules/es.array.from.js": /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
            var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
            var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
            var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
            });
            // `Array.from` method
            // https://tc39.github.io/ecma262/#sec-array.from
            $({
                target: "Array",
                stat: true,
                forced: INCORRECT_ITERATION
            }, {
                from: from
            });
        /***/ },
        /***/ "./node_modules/core-js/modules/es.string.iterator.js": /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var codePointAt = __webpack_require__(/*! ../internals/string-at */ "./node_modules/core-js/internals/string-at.js");
            var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
            var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");
            var STRING_ITERATOR = "String Iterator";
            var setInternalState = InternalStateModule.set;
            var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
            // `String.prototype[@@iterator]` method
            // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
            defineIterator(String, "String", function(iterated) {
                setInternalState(this, {
                    type: STRING_ITERATOR,
                    string: String(iterated),
                    index: 0
                });
            // `%StringIteratorPrototype%.next` method
            // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
            }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index = state.index;
                var point;
                if (index >= string.length) return {
                    value: undefined,
                    done: true
                };
                point = codePointAt(string, index, true);
                state.index += point.length;
                return {
                    value: point,
                    done: false
                };
            });
        /***/ },
        /***/ "./node_modules/webpack/buildin/global.js": /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/ /*! no static exports found */ /***/ function(module1, exports) {
            var g;
            // This works in non-strict mode
            g = function() {
                return this;
            }();
            try {
                // This works if eval is allowed (see CSP)
                g = g || Function("return this")() || (0, eval)("this");
            } catch (e) {
                // This works if the window reference is available
                if (typeof window === "object") g = window;
            }
            // g can still be undefined, but nothing to do about it...
            // We return undefined, instead of nothing here, so it's
            // easier to handle this case. if(!global) { ...}
            module1.exports = g;
        /***/ },
        /***/ "./src/default-attrs.json": /*!********************************!*\
  !*** ./src/default-attrs.json ***!
  \********************************/ /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */ /***/ function(module1) {
            module1.exports = {
                "xmlns": "http://www.w3.org/2000/svg",
                "width": 24,
                "height": 24,
                "viewBox": "0 0 24 24",
                "fill": "none",
                "stroke": "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            };
        /***/ },
        /***/ "./src/icon.js": /*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            var _createClass = function() {
                function defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                return function(Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _defaultAttrs = __webpack_require__(/*! ./default-attrs.json */ "./src/default-attrs.json");
            var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }
            var Icon = function() {
                function Icon(name, contents) {
                    var tags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
                    _classCallCheck(this, Icon);
                    this.name = name;
                    this.contents = contents;
                    this.tags = tags;
                    this.attrs = _extends({}, _defaultAttrs2.default, {
                        class: "feather feather-" + name
                    });
                }
                /**
   * Create an SVG string.
   * @param {Object} attrs
   * @returns {string}
   */ _createClass(Icon, [
                    {
                        key: "toSvg",
                        value: function toSvg() {
                            var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                            var combinedAttrs = _extends({}, this.attrs, attrs, {
                                class: (0, _dedupe2.default)(this.attrs.class, attrs.class)
                            });
                            return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
                        }
                    },
                    {
                        key: "toString",
                        value: function toString() {
                            return this.contents;
                        }
                    }
                ]);
                return Icon;
            }();
            /**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attrs
 * @returns {string}
 */ function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key) {
                    return key + '="' + attrs[key] + '"';
                }).join(" ");
            }
            exports.default = Icon;
        /***/ },
        /***/ "./src/icons.js": /*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icon = __webpack_require__(/*! ./icon */ "./src/icon.js");
            var _icon2 = _interopRequireDefault(_icon);
            var _icons = __webpack_require__(/*! ../dist/icons.json */ "./dist/icons.json");
            var _icons2 = _interopRequireDefault(_icons);
            var _tags = __webpack_require__(/*! ./tags.json */ "./src/tags.json");
            var _tags2 = _interopRequireDefault(_tags);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            exports.default = Object.keys(_icons2.default).map(function(key) {
                return new _icon2.default(key, _icons2.default[key], _tags2.default[key]);
            }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
            }, {});
        /***/ },
        /***/ "./src/index.js": /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            var _toSvg = __webpack_require__(/*! ./to-svg */ "./src/to-svg.js");
            var _toSvg2 = _interopRequireDefault(_toSvg);
            var _replace = __webpack_require__(/*! ./replace */ "./src/replace.js");
            var _replace2 = _interopRequireDefault(_replace);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            module1.exports = {
                icons: _icons2.default,
                toSvg: _toSvg2.default,
                replace: _replace2.default
            };
        /***/ },
        /***/ "./src/replace.js": /*!************************!*\
  !*** ./src/replace.js ***!
  \************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _extends = Object.assign || function(target) {
                for(var i = 1; i < arguments.length; i++){
                    var source = arguments[i];
                    for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            }; /* eslint-env browser */ 
            var _dedupe = __webpack_require__(/*! classnames/dedupe */ "./node_modules/classnames/dedupe.js");
            var _dedupe2 = _interopRequireDefault(_dedupe);
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Replace all HTML elements that have a `data-feather` attribute with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {Object} attrs
 */ function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (typeof document === "undefined") throw new Error("`feather.replace()` only works in a browser environment.");
                var elementsToReplace = document.querySelectorAll("[data-feather]");
                Array.from(elementsToReplace).forEach(function(element) {
                    return replaceElement(element, attrs);
                });
            }
            /**
 * Replace a single HTML element with SVG markup
 * corresponding to the element's `data-feather` attribute value.
 * @param {HTMLElement} element
 * @param {Object} attrs
 */ function replaceElement(element) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var elementAttrs = getAttrs(element);
                var name = elementAttrs["data-feather"];
                delete elementAttrs["data-feather"];
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, {
                    class: (0, _dedupe2.default)(attrs.class, elementAttrs.class)
                }));
                var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
                var svgElement = svgDocument.querySelector("svg");
                element.parentNode.replaceChild(svgElement, element);
            }
            /**
 * Get the attributes of an HTML element.
 * @param {HTMLElement} element
 * @returns {Object}
 */ function getAttrs(element) {
                return Array.from(element.attributes).reduce(function(attrs, attr) {
                    attrs[attr.name] = attr.value;
                    return attrs;
                }, {});
            }
            exports.default = replace;
        /***/ },
        /***/ "./src/tags.json": /*!***********************!*\
  !*** ./src/tags.json ***!
  \***********************/ /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */ /***/ function(module1) {
            module1.exports = {
                "activity": [
                    "pulse",
                    "health",
                    "action",
                    "motion"
                ],
                "airplay": [
                    "stream",
                    "cast",
                    "mirroring"
                ],
                "alert-circle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-octagon": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "alert-triangle": [
                    "warning",
                    "alert",
                    "danger"
                ],
                "align-center": [
                    "text alignment",
                    "center"
                ],
                "align-justify": [
                    "text alignment",
                    "justified"
                ],
                "align-left": [
                    "text alignment",
                    "left"
                ],
                "align-right": [
                    "text alignment",
                    "right"
                ],
                "anchor": [],
                "archive": [
                    "index",
                    "box"
                ],
                "at-sign": [
                    "mention",
                    "at",
                    "email",
                    "message"
                ],
                "award": [
                    "achievement",
                    "badge"
                ],
                "aperture": [
                    "camera",
                    "photo"
                ],
                "bar-chart": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "bar-chart-2": [
                    "statistics",
                    "diagram",
                    "graph"
                ],
                "battery": [
                    "power",
                    "electricity"
                ],
                "battery-charging": [
                    "power",
                    "electricity"
                ],
                "bell": [
                    "alarm",
                    "notification",
                    "sound"
                ],
                "bell-off": [
                    "alarm",
                    "notification",
                    "silent"
                ],
                "bluetooth": [
                    "wireless"
                ],
                "book-open": [
                    "read",
                    "library"
                ],
                "book": [
                    "read",
                    "dictionary",
                    "booklet",
                    "magazine",
                    "library"
                ],
                "bookmark": [
                    "read",
                    "clip",
                    "marker",
                    "tag"
                ],
                "box": [
                    "cube"
                ],
                "briefcase": [
                    "work",
                    "bag",
                    "baggage",
                    "folder"
                ],
                "calendar": [
                    "date"
                ],
                "camera": [
                    "photo"
                ],
                "cast": [
                    "chromecast",
                    "airplay"
                ],
                "circle": [
                    "off",
                    "zero",
                    "record"
                ],
                "clipboard": [
                    "copy"
                ],
                "clock": [
                    "time",
                    "watch",
                    "alarm"
                ],
                "cloud-drizzle": [
                    "weather",
                    "shower"
                ],
                "cloud-lightning": [
                    "weather",
                    "bolt"
                ],
                "cloud-rain": [
                    "weather"
                ],
                "cloud-snow": [
                    "weather",
                    "blizzard"
                ],
                "cloud": [
                    "weather"
                ],
                "codepen": [
                    "logo"
                ],
                "codesandbox": [
                    "logo"
                ],
                "code": [
                    "source",
                    "programming"
                ],
                "coffee": [
                    "drink",
                    "cup",
                    "mug",
                    "tea",
                    "cafe",
                    "hot",
                    "beverage"
                ],
                "columns": [
                    "layout"
                ],
                "command": [
                    "keyboard",
                    "cmd",
                    "terminal",
                    "prompt"
                ],
                "compass": [
                    "navigation",
                    "safari",
                    "travel",
                    "direction"
                ],
                "copy": [
                    "clone",
                    "duplicate"
                ],
                "corner-down-left": [
                    "arrow",
                    "return"
                ],
                "corner-down-right": [
                    "arrow"
                ],
                "corner-left-down": [
                    "arrow"
                ],
                "corner-left-up": [
                    "arrow"
                ],
                "corner-right-down": [
                    "arrow"
                ],
                "corner-right-up": [
                    "arrow"
                ],
                "corner-up-left": [
                    "arrow"
                ],
                "corner-up-right": [
                    "arrow"
                ],
                "cpu": [
                    "processor",
                    "technology"
                ],
                "credit-card": [
                    "purchase",
                    "payment",
                    "cc"
                ],
                "crop": [
                    "photo",
                    "image"
                ],
                "crosshair": [
                    "aim",
                    "target"
                ],
                "database": [
                    "storage",
                    "memory"
                ],
                "delete": [
                    "remove"
                ],
                "disc": [
                    "album",
                    "cd",
                    "dvd",
                    "music"
                ],
                "dollar-sign": [
                    "currency",
                    "money",
                    "payment"
                ],
                "droplet": [
                    "water"
                ],
                "edit": [
                    "pencil",
                    "change"
                ],
                "edit-2": [
                    "pencil",
                    "change"
                ],
                "edit-3": [
                    "pencil",
                    "change"
                ],
                "eye": [
                    "view",
                    "watch"
                ],
                "eye-off": [
                    "view",
                    "watch",
                    "hide",
                    "hidden"
                ],
                "external-link": [
                    "outbound"
                ],
                "facebook": [
                    "logo",
                    "social"
                ],
                "fast-forward": [
                    "music"
                ],
                "figma": [
                    "logo",
                    "design",
                    "tool"
                ],
                "file-minus": [
                    "delete",
                    "remove",
                    "erase"
                ],
                "file-plus": [
                    "add",
                    "create",
                    "new"
                ],
                "file-text": [
                    "data",
                    "txt",
                    "pdf"
                ],
                "film": [
                    "movie",
                    "video"
                ],
                "filter": [
                    "funnel",
                    "hopper"
                ],
                "flag": [
                    "report"
                ],
                "folder-minus": [
                    "directory"
                ],
                "folder-plus": [
                    "directory"
                ],
                "folder": [
                    "directory"
                ],
                "framer": [
                    "logo",
                    "design",
                    "tool"
                ],
                "frown": [
                    "emoji",
                    "face",
                    "bad",
                    "sad",
                    "emotion"
                ],
                "gift": [
                    "present",
                    "box",
                    "birthday",
                    "party"
                ],
                "git-branch": [
                    "code",
                    "version control"
                ],
                "git-commit": [
                    "code",
                    "version control"
                ],
                "git-merge": [
                    "code",
                    "version control"
                ],
                "git-pull-request": [
                    "code",
                    "version control"
                ],
                "github": [
                    "logo",
                    "version control"
                ],
                "gitlab": [
                    "logo",
                    "version control"
                ],
                "globe": [
                    "world",
                    "browser",
                    "language",
                    "translate"
                ],
                "hard-drive": [
                    "computer",
                    "server",
                    "memory",
                    "data"
                ],
                "hash": [
                    "hashtag",
                    "number",
                    "pound"
                ],
                "headphones": [
                    "music",
                    "audio",
                    "sound"
                ],
                "heart": [
                    "like",
                    "love",
                    "emotion"
                ],
                "help-circle": [
                    "question mark"
                ],
                "hexagon": [
                    "shape",
                    "node.js",
                    "logo"
                ],
                "home": [
                    "house",
                    "living"
                ],
                "image": [
                    "picture"
                ],
                "inbox": [
                    "email"
                ],
                "instagram": [
                    "logo",
                    "camera"
                ],
                "key": [
                    "password",
                    "login",
                    "authentication",
                    "secure"
                ],
                "layers": [
                    "stack"
                ],
                "layout": [
                    "window",
                    "webpage"
                ],
                "life-bouy": [
                    "help",
                    "life ring",
                    "support"
                ],
                "link": [
                    "chain",
                    "url"
                ],
                "link-2": [
                    "chain",
                    "url"
                ],
                "linkedin": [
                    "logo",
                    "social media"
                ],
                "list": [
                    "options"
                ],
                "lock": [
                    "security",
                    "password",
                    "secure"
                ],
                "log-in": [
                    "sign in",
                    "arrow",
                    "enter"
                ],
                "log-out": [
                    "sign out",
                    "arrow",
                    "exit"
                ],
                "mail": [
                    "email",
                    "message"
                ],
                "map-pin": [
                    "location",
                    "navigation",
                    "travel",
                    "marker"
                ],
                "map": [
                    "location",
                    "navigation",
                    "travel"
                ],
                "maximize": [
                    "fullscreen"
                ],
                "maximize-2": [
                    "fullscreen",
                    "arrows",
                    "expand"
                ],
                "meh": [
                    "emoji",
                    "face",
                    "neutral",
                    "emotion"
                ],
                "menu": [
                    "bars",
                    "navigation",
                    "hamburger"
                ],
                "message-circle": [
                    "comment",
                    "chat"
                ],
                "message-square": [
                    "comment",
                    "chat"
                ],
                "mic-off": [
                    "record",
                    "sound",
                    "mute"
                ],
                "mic": [
                    "record",
                    "sound",
                    "listen"
                ],
                "minimize": [
                    "exit fullscreen",
                    "close"
                ],
                "minimize-2": [
                    "exit fullscreen",
                    "arrows",
                    "close"
                ],
                "minus": [
                    "subtract"
                ],
                "monitor": [
                    "tv",
                    "screen",
                    "display"
                ],
                "moon": [
                    "dark",
                    "night"
                ],
                "more-horizontal": [
                    "ellipsis"
                ],
                "more-vertical": [
                    "ellipsis"
                ],
                "mouse-pointer": [
                    "arrow",
                    "cursor"
                ],
                "move": [
                    "arrows"
                ],
                "music": [
                    "note"
                ],
                "navigation": [
                    "location",
                    "travel"
                ],
                "navigation-2": [
                    "location",
                    "travel"
                ],
                "octagon": [
                    "stop"
                ],
                "package": [
                    "box",
                    "container"
                ],
                "paperclip": [
                    "attachment"
                ],
                "pause": [
                    "music",
                    "stop"
                ],
                "pause-circle": [
                    "music",
                    "audio",
                    "stop"
                ],
                "pen-tool": [
                    "vector",
                    "drawing"
                ],
                "percent": [
                    "discount"
                ],
                "phone-call": [
                    "ring"
                ],
                "phone-forwarded": [
                    "call"
                ],
                "phone-incoming": [
                    "call"
                ],
                "phone-missed": [
                    "call"
                ],
                "phone-off": [
                    "call",
                    "mute"
                ],
                "phone-outgoing": [
                    "call"
                ],
                "phone": [
                    "call"
                ],
                "play": [
                    "music",
                    "start"
                ],
                "pie-chart": [
                    "statistics",
                    "diagram"
                ],
                "play-circle": [
                    "music",
                    "start"
                ],
                "plus": [
                    "add",
                    "new"
                ],
                "plus-circle": [
                    "add",
                    "new"
                ],
                "plus-square": [
                    "add",
                    "new"
                ],
                "pocket": [
                    "logo",
                    "save"
                ],
                "power": [
                    "on",
                    "off"
                ],
                "printer": [
                    "fax",
                    "office",
                    "device"
                ],
                "radio": [
                    "signal"
                ],
                "refresh-cw": [
                    "synchronise",
                    "arrows"
                ],
                "refresh-ccw": [
                    "arrows"
                ],
                "repeat": [
                    "loop",
                    "arrows"
                ],
                "rewind": [
                    "music"
                ],
                "rotate-ccw": [
                    "arrow"
                ],
                "rotate-cw": [
                    "arrow"
                ],
                "rss": [
                    "feed",
                    "subscribe"
                ],
                "save": [
                    "floppy disk"
                ],
                "scissors": [
                    "cut"
                ],
                "search": [
                    "find",
                    "magnifier",
                    "magnifying glass"
                ],
                "send": [
                    "message",
                    "mail",
                    "email",
                    "paper airplane",
                    "paper aeroplane"
                ],
                "settings": [
                    "cog",
                    "edit",
                    "gear",
                    "preferences"
                ],
                "share-2": [
                    "network",
                    "connections"
                ],
                "shield": [
                    "security",
                    "secure"
                ],
                "shield-off": [
                    "security",
                    "insecure"
                ],
                "shopping-bag": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shopping-cart": [
                    "ecommerce",
                    "cart",
                    "purchase",
                    "store"
                ],
                "shuffle": [
                    "music"
                ],
                "skip-back": [
                    "music"
                ],
                "skip-forward": [
                    "music"
                ],
                "slack": [
                    "logo"
                ],
                "slash": [
                    "ban",
                    "no"
                ],
                "sliders": [
                    "settings",
                    "controls"
                ],
                "smartphone": [
                    "cellphone",
                    "device"
                ],
                "smile": [
                    "emoji",
                    "face",
                    "happy",
                    "good",
                    "emotion"
                ],
                "speaker": [
                    "audio",
                    "music"
                ],
                "star": [
                    "bookmark",
                    "favorite",
                    "like"
                ],
                "stop-circle": [
                    "media",
                    "music"
                ],
                "sun": [
                    "brightness",
                    "weather",
                    "light"
                ],
                "sunrise": [
                    "weather",
                    "time",
                    "morning",
                    "day"
                ],
                "sunset": [
                    "weather",
                    "time",
                    "evening",
                    "night"
                ],
                "tablet": [
                    "device"
                ],
                "tag": [
                    "label"
                ],
                "target": [
                    "logo",
                    "bullseye"
                ],
                "terminal": [
                    "code",
                    "command line",
                    "prompt"
                ],
                "thermometer": [
                    "temperature",
                    "celsius",
                    "fahrenheit",
                    "weather"
                ],
                "thumbs-down": [
                    "dislike",
                    "bad",
                    "emotion"
                ],
                "thumbs-up": [
                    "like",
                    "good",
                    "emotion"
                ],
                "toggle-left": [
                    "on",
                    "off",
                    "switch"
                ],
                "toggle-right": [
                    "on",
                    "off",
                    "switch"
                ],
                "tool": [
                    "settings",
                    "spanner"
                ],
                "trash": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "trash-2": [
                    "garbage",
                    "delete",
                    "remove",
                    "bin"
                ],
                "triangle": [
                    "delta"
                ],
                "truck": [
                    "delivery",
                    "van",
                    "shipping",
                    "transport",
                    "lorry"
                ],
                "tv": [
                    "television",
                    "stream"
                ],
                "twitch": [
                    "logo"
                ],
                "twitter": [
                    "logo",
                    "social"
                ],
                "type": [
                    "text"
                ],
                "umbrella": [
                    "rain",
                    "weather"
                ],
                "unlock": [
                    "security"
                ],
                "user-check": [
                    "followed",
                    "subscribed"
                ],
                "user-minus": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe"
                ],
                "user-plus": [
                    "new",
                    "add",
                    "create",
                    "follow",
                    "subscribe"
                ],
                "user-x": [
                    "delete",
                    "remove",
                    "unfollow",
                    "unsubscribe",
                    "unavailable"
                ],
                "user": [
                    "person",
                    "account"
                ],
                "users": [
                    "group"
                ],
                "video-off": [
                    "camera",
                    "movie",
                    "film"
                ],
                "video": [
                    "camera",
                    "movie",
                    "film"
                ],
                "voicemail": [
                    "phone"
                ],
                "volume": [
                    "music",
                    "sound",
                    "mute"
                ],
                "volume-1": [
                    "music",
                    "sound"
                ],
                "volume-2": [
                    "music",
                    "sound"
                ],
                "volume-x": [
                    "music",
                    "sound",
                    "mute"
                ],
                "watch": [
                    "clock",
                    "time"
                ],
                "wifi-off": [
                    "disabled"
                ],
                "wifi": [
                    "connection",
                    "signal",
                    "wireless"
                ],
                "wind": [
                    "weather",
                    "air"
                ],
                "x-circle": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x-octagon": [
                    "delete",
                    "stop",
                    "alert",
                    "warning",
                    "times",
                    "clear"
                ],
                "x-square": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "x": [
                    "cancel",
                    "close",
                    "delete",
                    "remove",
                    "times",
                    "clear"
                ],
                "youtube": [
                    "logo",
                    "video",
                    "play"
                ],
                "zap-off": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zap": [
                    "flash",
                    "camera",
                    "lightning"
                ],
                "zoom-in": [
                    "magnifying glass"
                ],
                "zoom-out": [
                    "magnifying glass"
                ]
            };
        /***/ },
        /***/ "./src/to-svg.js": /*!***********************!*\
  !*** ./src/to-svg.js ***!
  \***********************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _icons = __webpack_require__(/*! ./icons */ "./src/icons.js");
            var _icons2 = _interopRequireDefault(_icons);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {
                    default: obj
                };
            }
            /**
 * Create an SVG string.
 * @deprecated
 * @param {string} name
 * @param {Object} attrs
 * @returns {string}
 */ function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");
                if (!name) throw new Error("The required `key` (icon name) parameter is missing.");
                if (!_icons2.default[name]) throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
                return _icons2.default[name].toSvg(attrs);
            }
            exports.default = toSvg;
        /***/ },
        /***/ 0: /*!**************************************************!*\
  !*** multi core-js/es/array/from ./src/index.js ***!
  \**************************************************/ /*! no static exports found */ /***/ function(module1, exports, __webpack_require__) {
            __webpack_require__(/*! core-js/es/array/from */ "./node_modules/core-js/es/array/from.js");
            module1.exports = __webpack_require__(/*! /home/travis/build/feathericons/feather/src/index.js */ "./src/index.js");
        /***/ }
    });
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["bb4Jv"], "bb4Jv", "parcelRequire0aca")

//# sourceMappingURL=main.js.map
