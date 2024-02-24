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
})({"gRY1p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameContainer", ()=>gameContainer);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "formSelect", ()=>formSelect);
parcelHelpers.export(exports, "currentGame", ()=>currentGame);
var _gameJs = require("./game.js");
var _gameJsDefault = parcelHelpers.interopDefault(_gameJs);
const gameContainer = document.getElementById("game-container");
const canvas = document.getElementById("canvas");
const formSelect = document.getElementById("difficulty");
const currentGame = new (0, _gameJsDefault.default)();
currentGame.initiate();
let ChangeBtn = document.getElementById("change");
ChangeBtn.addEventListener("click", ()=>{
    if (formSelect.value != currentGame.gridOrder) {
        currentGame.context.clearRect(0, 0, gameContainer.offsetWidth, gameContainer.offsetWidth // for square container
        );
        currentGame.setOrder(formSelect.value);
        currentGame.unListenMoves();
        currentGame.initiate();
    }
});

},{"./game.js":"9hTyP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9hTyP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _eventHandlersJs = require("./eventHandlers.js");
var _indexJs = require("./index.js");
var _mazeContainerJs = require("./mazeContainer.js");
var _mazeContainerJsDefault = parcelHelpers.interopDefault(_mazeContainerJs);
let completionBox = document.querySelector(".game-complete");
let restartButton = document.getElementById("restart");
class Game {
    static context;
    #gridOrder;
    maze;
    player;
    constructor(){
        this.gridOrder = (0, _indexJs.formSelect).value;
        this.context = (0, _indexJs.canvas).getContext("2d");
    }
    set gridOrder(value) {
        this.#gridOrder = parseInt(value);
    }
    get gridOrder() {
        return this.#gridOrder;
    }
    setOrder(value) {
        this.gridOrder = value;
    }
    initiate() {
        this.maze = new (0, _mazeContainerJsDefault.default)(this.context);
        this.maze.setup();
        this.player = this.maze.player;
        this.listenMoves();
    }
    listenMoves() {
        window.addEventListener("keydown", (0, _eventHandlersJs.handleKeyDown));
        (0, _indexJs.canvas).addEventListener("touchstart", (0, _eventHandlersJs.handleGestureStart));
        (0, _indexJs.canvas).addEventListener("mousedown", (0, _eventHandlersJs.handleGestureStart));
    }
    unListenMoves() {
        window.removeEventListener("keydown", (0, _eventHandlersJs.handleKeyDown));
        (0, _indexJs.canvas).removeEventListener("touchstart", (0, _eventHandlersJs.handleGestureStart));
        (0, _indexJs.canvas).removeEventListener("mousedown", (0, _eventHandlersJs.handleGestureStart));
    }
    checkCompletion() {
        let reachedCol = this.player.colNum === this.maze.goal.colNum;
        let reachedRow = this.player.rowNum === this.maze.goal.rowNum;
        if (reachedRow && reachedCol) {
            this.unListenMoves();
            this.gameComplete();
        }
    }
    gameComplete() {
        document.querySelector(".game-complete .steps-count").innerText = String(this.player.stepCount);
        completionBox.classList.add("show");
        restartButton.addEventListener("click", this.restart.bind(this));
    }
    restart() {
        completionBox.classList.remove("show");
        this.initiate();
        document.querySelector(".game-complete h2").innerText = "";
        restartButton.removeEventListener("click", this.restart);
    }
    getLevelName() {
        return (0, _indexJs.formSelect).options[(0, _indexJs.formSelect).options.selectedIndex].innerText;
    }
}
exports.default = Game;

},{"./eventHandlers.js":"bn3ci","./index.js":"ebWYT","./mazeContainer.js":"1UbbF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bn3ci":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleKeyDown", ()=>handleKeyDown);
parcelHelpers.export(exports, "handleGestureStart", ()=>handleGestureStart);
var _indexJs = require("./index.js");
let GestureStartX, GestureStartY;
let GestureEndX, GestureEndY;
function handleKeyDown(evt) {
    (0, _indexJs.currentGame).player.move({
        keyCode: evt.keyCode
    });
}
function handleGestureStart(evt) {
    evt.preventDefault();
    /* 	Handle TouchStart */ if (evt.type === "touchstart") {
        if (evt.touches && evt.touches.length > 1) return; // exit function if multi-touch occurred
        GestureStartX = evt.targetTouches[0].pageX - (0, _indexJs.gameContainer).offsetLeft;
        GestureStartY = evt.targetTouches[0].pageY - (0, _indexJs.gameContainer).offsetTop;
        (0, _indexJs.canvas).addEventListener("touchend", handleGestureEnd);
    } else {
        /* Handle MouseDown */ GestureStartX = evt.pageX - (0, _indexJs.gameContainer).offsetLeft;
        GestureStartY = evt.pageY - (0, _indexJs.gameContainer).offsetTop;
        (0, _indexJs.canvas).addEventListener("mouseup", handleGestureEnd);
    }
}
function handleGestureEnd(evt) {
    /* Handle TouchEnd */ if (evt.type === "touchend") {
        GestureEndX = evt.changedTouches[0].pageX - (0, _indexJs.gameContainer).offsetLeft;
        GestureEndY = evt.changedTouches[0].pageY - (0, _indexJs.gameContainer).offsetTop;
    } else {
        /* Handle MouseUp */ GestureEndX = evt.pageX - (0, _indexJs.gameContainer).offsetLeft;
        GestureEndY = evt.pageY - (0, _indexJs.gameContainer).offsetTop;
    }
    let player = (0, _indexJs.currentGame).player;
    // Cell Range
    let playerRangeX = player.xCord + player.cellWidth;
    let playerRangeY = player.yCord + player.cellHeight;
    // Check gesture occurred on player cell
    let isplayerCol = GestureStartX >= player.xCord && GestureStartX <= playerRangeX;
    let isplayerRow = GestureStartY >= player.yCord && GestureStartY <= playerRangeY;
    let gestureOnplayer = isplayerCol && isplayerRow;
    if (gestureOnplayer) {
        let maze = (0, _indexJs.currentGame).maze;
        // Check if target is either of player's neighbor
        let targetColumn = Math.floor(GestureEndX / maze.cellWidth);
        let targetRow = Math.floor(GestureEndY / maze.cellHeight);
        let possibleTargets = {
            left: player.colNum !== 0 ? maze.grid[player.rowNum][player.colNum - 1] : undefined,
            top: player.rowNum !== 0 ? maze.grid[player.rowNum - 1][player.colNum] : undefined,
            right: player.colNum !== maze.gridLastColumn ? maze.grid[player.rowNum][player.colNum + 1] : undefined,
            bottom: player.rowNum !== maze.gridLastRow ? maze.grid[player.rowNum + 1][player.colNum] : undefined
        };
        player.move(possibleTargets, maze.grid[targetRow][targetColumn]);
    }
}

},{"./index.js":"ebWYT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"1UbbF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cellJs = require("./cell.js");
var _cellJsDefault = parcelHelpers.interopDefault(_cellJs);
var _indexJs = require("./index.js");
var _playerJs = require("./player.js");
var _playerJsDefault = parcelHelpers.interopDefault(_playerJs);
const preparingGrid = document.querySelector(".preparing-grid");
class Maze {
    #mapRefreshRate;
    constructor(ctx){
        this.ctx = ctx;
        const boundingRect = (0, _indexJs.gameContainer).getBoundingClientRect();
        this.width = Math.floor(boundingRect.width);
        this.height = Math.floor(boundingRect.height);
        this.rows = (0, _indexJs.currentGame).gridOrder;
        this.columns = this.rows;
        this.cellWidth = this.width / this.columns;
        this.cellHeight = this.height / this.rows;
        this.grid = []; // to store individual cells
        this.stack = []; // to push each visited cell for tracking previous steps
        this.#mapRefreshRate = this.#getMapRefreshRate();
    }
    #getMapRefreshRate() {
        switch((0, _indexJs.currentGame).getLevelName()){
            case "hard":
                return 0.01;
            case "extreme":
                return 0.0001;
            default:
                return 0.1;
        }
    }
    //define grid
    setup() {
        for(let rowNum = 0; rowNum < this.rows; rowNum++){
            let row = [];
            for(let colNum = 0; colNum < this.columns; colNum++){
                let cell = new (0, _cellJsDefault.default)(this.ctx, rowNum, colNum, this.cellWidth, this.cellHeight);
                row.push(cell);
            }
            this.grid.push(row);
        }
        // will be used to place player diagonally opposite to goal
        this.gridLastRow = this.grid.length - 1;
        this.gridLastColumn = this.grid[0].length - 1;
        this.player = new (0, _playerJsDefault.default)(this);
        // show preparing-stuff
        preparingGrid.classList.add("show");
        //set random starting point
        this.currentCell = this.startPoint();
        this.drawMap();
    }
    drawMap() {
        (0, _indexJs.canvas).width = this.width;
        (0, _indexJs.canvas).height = this.height;
        this.currentCell.visited = true;
        this.grid.forEach((row)=>row.forEach((col)=>col.drawCell()));
        let nextCell = this.currentCell.next(this.grid);
        if (nextCell) {
            nextCell.visited = true;
            this.stack.push(this.currentCell);
            this.currentCell.removeWalls(nextCell);
            this.currentCell = nextCell;
        } else if (this.stack.length > 0) this.currentCell = this.stack.pop();
        // if can't go back, set goal & player
        if (this.stack.length === 0) {
            this.goal = this.currentCell;
            this.drawGoal();
            // set player
            this.player.setPlayer();
            // remove Preparing Screen
            preparingGrid.classList.remove("show");
            return;
        }
        window.setTimeout(()=>this.drawMap(), this.#mapRefreshRate);
    }
    // point to start drawing cell (either of four corners)
    startPoint() {
        let corners = [
            this.grid[0][0],
            this.grid[this.gridLastRow][0],
            this.grid[0][this.gridLastColumn],
            this.grid[this.gridLastRow][this.gridLastColumn]
        ];
        return corners[Math.floor(Math.random() * 4)];
    }
    drawGoal() {
        let cheese = new Image();
        this.setImageNetSize(cheese, 2);
        this.setImagePosInsideCell(cheese, this.goal.xCord, this.goal.yCord);
        cheese.onload = ()=>this.ctx.drawImage(cheese, cheese.xPos, cheese.yPos, cheese.width, cheese.height);
        cheese.src = "./assets/cheese.png";
    }
    setImageNetSize(image, cellWallOffset) {
        const netHeight = this.cellHeight - cellWallOffset;
        const netWidth = this.cellWidth - cellWallOffset;
        // restrict size to the max of smaller cell dimension
        if (netWidth >= netHeight) {
            image.height = netHeight;
            image.width = netWidth * (netHeight / netWidth);
        } else {
            image.width = netWidth;
            image.height = netHeight * (netWidth / netHeight);
        }
    }
    setImagePosInsideCell(image, xCord, yCord) {
        image.xPos = xCord + this.cellWidth / 2 - image.width / 2;
        image.yPos = yCord + this.cellHeight / 2 - image.height / 2;
    }
}
exports.default = Maze;

},{"./cell.js":"ECCoV","./index.js":"ebWYT","./player.js":"2k4ca","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ECCoV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Cell {
    constructor(ctx, rowNum, colNum, width, height){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.rowNum = rowNum;
        this.colNum = colNum;
        this.xCord = this.colNum * this.width;
        this.yCord = this.rowNum * this.height;
        this.visited = false;
        this.walls = {
            topWall: true,
            bottomWall: true,
            leftWall: true,
            rightWall: true
        };
    }
    drawCell() {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        if (this.walls.topWall) this.drawTopWall(this.xCord, this.yCord);
        if (this.walls.bottomWall) this.drawBottomWall(this.xCord, this.yCord);
        if (this.walls.leftWall) this.drawLeftWall(this.xCord, this.yCord);
        if (this.walls.rightWall) this.drawRightWall(this.xCord, this.yCord);
    }
    drawTopWall() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xCord, this.yCord);
        this.ctx.lineTo(this.xCord + this.width, this.yCord);
        this.ctx.stroke();
    }
    drawBottomWall() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xCord, this.yCord + this.height);
        this.ctx.lineTo(this.xCord + this.width, this.yCord + this.height);
        this.ctx.stroke();
    }
    drawLeftWall() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xCord, this.yCord);
        this.ctx.lineTo(this.xCord, this.yCord + this.height);
        this.ctx.stroke();
    }
    drawRightWall() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.xCord + this.width, this.yCord);
        this.ctx.lineTo(this.xCord + this.width, this.yCord + this.height);
        this.ctx.stroke();
    }
    removeWalls(nextCell) {
        let columnDiff = nextCell.colNum - this.colNum;
        let rowDiff = nextCell.rowNum - this.rowNum;
        switch(columnDiff){
            case 1:
                this.walls.rightWall = false;
                nextCell.walls.leftWall = false;
                break;
            case -1:
                this.walls.leftWall = false;
                nextCell.walls.rightWall = false;
        }
        switch(rowDiff){
            case 1:
                this.walls.bottomWall = false;
                nextCell.walls.topWall = false;
                break;
            case -1:
                this.walls.topWall = false;
                nextCell.walls.bottomWall = false;
        }
    }
    // choose next cell to visit
    next(grid) {
        let topNeighbor = this.rowNum !== 0 ? grid[this.rowNum - 1][this.colNum] : undefined;
        let bottomNeighbor = this.rowNum !== grid.length - 1 ? grid[this.rowNum + 1][this.colNum] : undefined;
        let leftNeighbor = this.colNum !== 0 ? grid[this.rowNum][this.colNum - 1] : undefined;
        let rightNeighbor = this.colNum !== grid[0].length - 1 ? grid[this.rowNum][this.colNum + 1] : undefined;
        let unVisited = [];
        if (topNeighbor && !topNeighbor.visited) unVisited.push(topNeighbor);
        if (bottomNeighbor && !bottomNeighbor.visited) unVisited.push(bottomNeighbor);
        if (leftNeighbor && !leftNeighbor.visited) unVisited.push(leftNeighbor);
        if (rightNeighbor && !rightNeighbor.visited) unVisited.push(rightNeighbor);
        if (unVisited.length !== 0) return unVisited[Math.floor(Math.random() * unVisited.length)];
        else return undefined;
    }
}
exports.default = Cell;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2k4ca":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _indexJs = require("./index.js");
class Player {
    #stepCount;
    constructor(maze){
        this.maze = maze;
        this.ctx = maze.ctx;
        this.cellWidth = maze.cellWidth;
        this.cellHeight = maze.cellHeight;
        this.HeaderSpan = document.querySelector(".header .steps-count");
        this.stepCount = 0;
    }
    get stepCount() {
        return this.#stepCount;
    }
    set stepCount(value) {
        this.#stepCount = value;
        this.HeaderSpan.innerText = String(value);
    }
    setPlayer() {
        // set player to diagonally opposite cell
        this.colNum = this.maze.goal.colNum === 0 ? this.maze.gridLastColumn : 0;
        this.rowNum = this.maze.goal.rowNum === 0 ? this.maze.gridLastRow : 0;
        this.imgSrc = this.colNum === 0 ? `./assets/mouse.png` : "./assets/mouse-reverse.png";
        this.drawPlayer(true);
    }
    drawPlayer(isInitialDraw) {
        //update Coordinates of player
        this.xCord = this.colNum * this.cellWidth;
        this.yCord = this.rowNum * this.cellHeight;
        let mouse = new Image();
        this.maze.setImageNetSize(mouse, 2);
        this.maze.setImagePosInsideCell(mouse, this.xCord, this.yCord);
        mouse.onload = ()=>this.ctx.drawImage(mouse, mouse.xPos, mouse.yPos, mouse.width, mouse.height);
        mouse.src = this.imgSrc;
        if (!isInitialDraw) this.stepCount += 1;
    }
    move(data, gestureTarget) {
        let current = this.maze.grid[this.rowNum][this.colNum];
        let walls = current.walls;
        let changeOccurred = false;
        // run test for keyboard inputs
        if (gestureTarget == undefined) // if gestureTarget isn't passed in i.e. it's a keyboard move
        changeOccurred = this.testCases(data.keyCode, 37, 38, 39, 40, walls);
        else changeOccurred = this.testCases(gestureTarget, data.left, data.top, data.right, data.bottom, walls);
        if (changeOccurred) {
            this.ctx.clearRect(current.xCord, current.yCord, current.width, current.height);
            current.drawCell();
            this.drawPlayer();
            (0, _indexJs.currentGame).checkCompletion();
        }
    }
    testCases(test, case1, case2, case3, case4, walls) {
        switch(test){
            case case1:
                if (!walls.leftWall) {
                    this.colNum -= 1;
                    return true;
                }
                break;
            case case2:
                if (!walls.topWall) {
                    this.rowNum -= 1;
                    return true;
                }
                break;
            case case3:
                if (!walls.rightWall) {
                    this.colNum += 1;
                    return true;
                }
                break;
            case case4:
                if (!walls.bottomWall) {
                    this.rowNum += 1;
                    return true;
                }
                break;
            default:
                return undefined;
        }
    }
}
exports.default = Player;

},{"./index.js":"ebWYT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gRY1p","ebWYT"], "ebWYT", "parcelRequired107")

//# sourceMappingURL=index.739bf03c.js.map
