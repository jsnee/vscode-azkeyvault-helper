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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/extension.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ExtensionCommands.ts":
/*!**********************************!*\
  !*** ./src/ExtensionCommands.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
var ExtensionCommands;
(function (ExtensionCommands) {
    function showSecret(item) {
        return __awaiter(this, void 0, void 0, function* () {
            if (item && item.getSecretValue) {
                const progOpts = {
                    location: vscode_1.ProgressLocation.Notification,
                    // cancellable: true,
                    title: `Retrieving Secret`
                };
                console.log("here");
                yield vscode_1.window.withProgress(progOpts, (progress, token) => __awaiter(this, void 0, void 0, function* () {
                    progress.report({
                        message: item.getTreeItemName()
                    });
                    const doc = yield vscode_1.workspace.openTextDocument({
                        content: item.getSecretValue()
                    });
                    yield vscode_1.window.showTextDocument(doc, vscode_1.ViewColumn.Active);
                }));
            }
        });
    }
    ExtensionCommands.showSecret = showSecret;
})(ExtensionCommands = exports.ExtensionCommands || (exports.ExtensionCommands = {}));


/***/ }),

/***/ "./src/ExtensionSettings.ts":
/*!**********************************!*\
  !*** ./src/ExtensionSettings.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
class Settings {
    get keyvaults() {
        return vscode_1.workspace.getConfiguration('azkeyvaulthelper').get('keyvaults');
    }
    set keyvaults(val) {
        vscode_1.workspace.getConfiguration('azkeyvaulthelper').update('keyvaults', val);
    }
    updateKeyvaults(val) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield vscode_1.workspace.getConfiguration('azkeyvaulthelper').update('keyvaults', val);
        });
    }
}
exports.ExtensionSettings = new Settings();


/***/ }),

/***/ "./src/KeyVaultHelper.ts":
/*!*******************************!*\
  !*** ./src/KeyVaultHelper.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __webpack_require__(/*! child_process */ "child_process");
var KeyVaultHelper;
(function (KeyVaultHelper) {
    function listSecrets(vaultName) {
        let results = [];
        let buf = child_process_1.execSync(`az keyvault secret list --vault-name "${vaultName}"`);
        console.log(buf.toString());
        let secretsStr = buf.toString();
        if (secretsStr) {
            let secrets = JSON.parse(secretsStr);
            if (secrets.length) {
                for (let secret of secrets) {
                    results.push(secret);
                }
            }
        }
        return results;
    }
    KeyVaultHelper.listSecrets = listSecrets;
    function getSecret(vaultName, secretName) {
        let buf = child_process_1.execSync(`az keyvault secret show --vault-name "${vaultName}" --name "${secretName}"`);
        let secretsStr = buf.toString();
        if (secretsStr) {
            return JSON.parse(secretsStr);
        }
    }
    KeyVaultHelper.getSecret = getSecret;
    function parseKeyValueSecret(value) {
        let matches = value.match(/^['"]((?:[^\s=]+=[^\s]+ )*[^\s=]+=[^\s]+)['"]$/);
        if (matches && matches.length) {
            let val = matches[1];
            let resultMatches = val.match(/([^\s=]+)=([^\s]+)/g);
            if (resultMatches) {
                let result = {};
                for (let each of resultMatches) {
                    let eachMatches = each.match(/^([^\s=]+)=([^\s]+)$/);
                    if (eachMatches) {
                        result[eachMatches[1]] = eachMatches[2];
                    }
                }
                return JSON.stringify(result, null, 4);
            }
        }
        return value;
    }
    KeyVaultHelper.parseKeyValueSecret = parseKeyValueSecret;
})(KeyVaultHelper = exports.KeyVaultHelper || (exports.KeyVaultHelper = {}));


/***/ }),

/***/ "./src/extension.ts":
/*!**************************!*\
  !*** ./src/extension.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ExtensionCommands_1 = __webpack_require__(/*! ./ExtensionCommands */ "./src/ExtensionCommands.ts");
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const secretExplorerProvider_1 = __webpack_require__(/*! ./ui/secretExplorerProvider */ "./src/ui/secretExplorerProvider.ts");
function activate(context) {
    vscode_1.window.createTreeView('azkeyvaulthelper', { treeDataProvider: secretExplorerProvider_1.secretExplorerProvider });
    let refreshDisposable = vscode_1.commands.registerCommand("azkeyvaulthelper.refresh", secretExplorerProvider_1.secretExplorerProvider.refresh, secretExplorerProvider_1.secretExplorerProvider);
    context.subscriptions.push(refreshDisposable);
    let showSecretDisposable = vscode_1.commands.registerCommand("azkeyvaulthelper.showSecret", ExtensionCommands_1.ExtensionCommands.showSecret);
    context.subscriptions.push(showSecretDisposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;


/***/ }),

/***/ "./src/ui/KeyVaultSecretTreeItem.ts":
/*!******************************************!*\
  !*** ./src/ui/KeyVaultSecretTreeItem.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const KeyVaultHelper_1 = __webpack_require__(/*! ../KeyVaultHelper */ "./src/KeyVaultHelper.ts");
class KeyVaultSecretTreeItem {
    constructor(vaultName, secretAttributes) {
        if (secretAttributes.id && !secretAttributes.name) {
            let matches = secretAttributes.id.match(/secrets\/(.*)$/);
            if (matches) {
                this._name = matches[1];
            }
            else {
                this._name = secretAttributes.name;
            }
        }
        else {
            this._name = secretAttributes.name;
        }
        this._vaultName = vaultName;
    }
    getTreeItemName() {
        return this._name;
    }
    getContextValue() {
        return "KeyVaultSecret";
    }
    getTreeItem() {
        return new vscode_1.TreeItem(this._name);
    }
    getSecretValue() {
        let secret = KeyVaultHelper_1.KeyVaultHelper.getSecret(this._vaultName, this._name);
        if (secret) {
            return secret.value;
        }
        return "";
    }
}
exports.KeyVaultSecretTreeItem = KeyVaultSecretTreeItem;


/***/ }),

/***/ "./src/ui/KeyVaultTreeItem.ts":
/*!************************************!*\
  !*** ./src/ui/KeyVaultTreeItem.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const KeyVaultSecretTreeItem_1 = __webpack_require__(/*! ./KeyVaultSecretTreeItem */ "./src/ui/KeyVaultSecretTreeItem.ts");
const KeyVaultHelper_1 = __webpack_require__(/*! ../KeyVaultHelper */ "./src/KeyVaultHelper.ts");
class KeyVaultTreeItem {
    constructor(vaultName) {
        this._vaultName = vaultName;
    }
    getContextValue() {
        return "KeyVault";
    }
    getTreeItemName() {
        return this._vaultName;
    }
    getTreeItem() {
        return new vscode_1.TreeItem(this._vaultName, vscode_1.TreeItemCollapsibleState.Collapsed);
    }
    getChildren() {
        let results = [];
        for (let secret of KeyVaultHelper_1.KeyVaultHelper.listSecrets(this._vaultName)) {
            results.push(new KeyVaultSecretTreeItem_1.KeyVaultSecretTreeItem(this._vaultName, secret));
        }
        return results;
    }
}
exports.KeyVaultTreeItem = KeyVaultTreeItem;


/***/ }),

/***/ "./src/ui/secretExplorerProvider.ts":
/*!******************************************!*\
  !*** ./src/ui/secretExplorerProvider.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = __webpack_require__(/*! vscode */ "vscode");
const ExtensionSettings_1 = __webpack_require__(/*! ../ExtensionSettings */ "./src/ExtensionSettings.ts");
const KeyVaultTreeItem_1 = __webpack_require__(/*! ./KeyVaultTreeItem */ "./src/ui/KeyVaultTreeItem.ts");
class SecretExplorerProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode_1.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.refresh();
    }
    getTreeItem(element) {
        return Promise.resolve(element.getTreeItem()).then(item => {
            item.contextValue = element.getContextValue();
            return item;
        });
    }
    getChildren(element) {
        return __awaiter(this, void 0, void 0, function* () {
            if (element === undefined) {
                const keyVaults = ExtensionSettings_1.ExtensionSettings.keyvaults;
                if (keyVaults && keyVaults.length) {
                    let results = [];
                    for (let vault of keyVaults) {
                        results.push(new KeyVaultTreeItem_1.KeyVaultTreeItem(vault));
                    }
                    return results;
                }
            }
            else {
                return element.getChildren && element.getChildren();
            }
        });
    }
    refresh(item) {
        this._onDidChangeTreeData.fire(item);
    }
}
exports.secretExplorerProvider = new SecretExplorerProvider();


/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "vscode":
/*!*************************!*\
  !*** external "vscode" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode");

/***/ })

/******/ });
//# sourceMappingURL=extension.js.map