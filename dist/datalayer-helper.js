/* datalayer-helper (2024-04-24T19:29:36.044Z). Copyright 2024 Toni Arndt. This work is licensed under the terms of the MIT license. For a copy, see <https://github.com/toniarndt/datalayer-helper/blob/main/LICENSE>. */
"use strict";
var d = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    clearDatalayer: () => clearDatalayer,
    cloneDatalayer: () => cloneDatalayer,
    combine: () => combine,
    decodeBase64: () => decodeBase64,
    deleteCookie: () => deleteCookie,
    encodeBase64: () => encodeBase64,
    flattenDatalayer: () => flattenDatalayer,
    fromString: () => fromString,
    getCookie: () => getCookie,
    getCookies: () => getCookies,
    getDatalayer: () => getDatalayer,
    getQueryParameter: () => getQueryParameter,
    getValue: () => getValue,
    log: () => log,
    setCookie: () => setCookie,
    setDebug: () => setDebug,
    setValue: () => setValue,
    toString: () => toString,
    version: () => version
  });

  // src/config/config.ts
  var version = "1.0.0";

  // src/common/clone.ts
  function clone(object) {
    if (object === null || typeof object !== "object") {
      return object;
    }
    if (Array.isArray(object)) {
      const copyArray = object.map((item) => clone(item));
      return copyArray;
    }
    const copyObj = {};
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        copyObj[key] = clone(object[key]);
      }
    }
    return copyObj;
  }

  // src/common/flatten.ts
  function flatten(object, prefix = "") {
    const flattened = {};
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === "object" && object[key] !== null) {
        Object.assign(flattened, flatten(object[key], prefix + key + "_"));
      } else {
        flattened[prefix + key] = object[key];
      }
    });
    return flattened;
  }

  // src/common/encode-base64.ts
  function encodeBase64(value) {
    return btoa(unescape(encodeURIComponent(value)));
  }

  // src/common/decode-base64.ts
  function decodeBase64(value) {
    return decodeURIComponent(escape(atob(value)));
  }

  // src/debug/set-debug.ts
  var debugOn = false;
  function setDebug(debug) {
    if (debugOn == debug)
      return;
    debugOn = debug;
    if (debugOn == true) {
      log({
        message: "The debug mode has been activated",
        functionName: "setDebug",
        level: "log"
      });
    } else {
      log({
        message: "The debug mode has been deactivated",
        functionName: "setDebug",
        level: "log"
      });
    }
  }

  // src/debug/log.ts
  var _PREFIX = "\u26A1 datalayer-helper";
  function log(log2) {
    if (debugOn == true) {
      const orgMethod = console[log2.level];
      let message = `${_PREFIX} @${log2.functionName}`;
      if (log2.message != null)
        message += `: ${log2.message}`;
      orgMethod.apply(console, log2.args == null ? [message] : [message, log2.args]);
    }
  }

  // src/values/set-value.ts
  function setValue(namespace, value) {
    let layer = window._datalayer;
    const parts = namespace.split(".");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i < parts.length - 1) {
        layer[part] = {};
        layer = layer[part];
      } else {
        layer[part] = value;
        log({
          message: `'${namespace}' = '${value}'`,
          functionName: "setValue",
          level: "log"
        });
      }
    }
  }

  // src/values/get-value.ts
  function getValue(namespace) {
    let layer = window._datalayer;
    const parts = namespace.split(".");
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (Object.hasOwn(layer, part) == false)
        break;
      if (typeof layer[part] == "object") {
        layer = layer[part];
      } else {
        log({
          message: `'${namespace}' = '${layer[part]}'`,
          functionName: "getValue",
          level: "log"
        });
        return layer[part];
      }
    }
    log({
      message: `Namespace '${namespace}' is undefined`,
      functionName: "getValue",
      level: "warn"
    });
    return null;
  }

  // src/values/combine.ts
  function combine(array1, array2, separator1 = ",", separator2 = ":") {
    const combinations = [];
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        const a = array1[i].trim().replaceAll(separator2, "\u203A"), b = array2[j].trim().replaceAll(separator2, "\u203A");
        combinations.push(`${a}${separator2}${b}`);
      }
    }
    log({
      message: null,
      functionName: "combination",
      level: "log",
      args: combinations.join(separator1)
    });
    return combinations.join(separator1);
  }

  // src/cookies/set-cookie.ts
  function setCookie(name, value, seconds = 1800, path = "/") {
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime() + seconds * 1e3);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=${path}`;
    log({
      message: `Cookie: '${name}' = '${value}' | Expires: ${seconds}s | Path: ${path}`,
      functionName: "setCookie",
      level: "log"
    });
  }

  // src/cookies/get-cookies.ts
  function getCookies() {
    const cookieObj = Object.assign(
      {},
      ...decodeURI(document.cookie).split(";").map((cookie) => {
        const [key, value] = cookie.split("=");
        if (key.trimStart() == "")
          return null;
        return { [key.trimStart()]: value };
      })
    );
    if (Object.keys(cookieObj).length == 0) {
      log({
        message: "No cookies are set",
        functionName: "getCookies",
        level: "log"
      });
    } else {
      log({
        message: null,
        functionName: "getCookies",
        level: "log",
        args: cookieObj
      });
    }
    return cookieObj;
  }

  // src/cookies/get-cookie.ts
  function getCookie(name) {
    const cookieObj = getCookies();
    if (cookieObj != null && name in cookieObj) {
      log({
        message: `'${name}' = '${cookieObj[name]}'`,
        functionName: "getCookie",
        level: "log"
      });
      return cookieObj[name];
    } else {
      log({
        message: `Cookie '${name}' not found`,
        functionName: "getCookie",
        level: "warn"
      });
      return null;
    }
  }

  // src/cookies/delete-cookie.ts
  function deleteCookie(name) {
    const date = /* @__PURE__ */ new Date();
    date.setTime(date.getTime());
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=;${expires};path=/`;
    log({
      message: `Cookie '${name}' deleted`,
      functionName: "deleteCookie",
      level: "log"
    });
  }

  // src/query/get-query-parameter.ts
  function getQueryParameter(url = document.URL) {
    const arr = [];
    if (url.indexOf("?") != -1) {
      const queryString = url.split("?");
      if (queryString.length >= 1) {
        const parts = queryString[1].split("&");
        for (let i = 0; i < parts.length; i++) {
          const [key, value] = parts[i].split("=");
          const _key = decodeURIComponent(key);
          const _value = typeof value == "undefined" ? "" : decodeURIComponent(value);
          arr.push([_key, _value]);
        }
      }
    }
    if (arr.length == 0) {
      log({
        message: "No query parameters passed",
        functionName: "getQueryParameter",
        level: "warn"
      });
    } else {
      log({
        message: null,
        functionName: "getQueryParameter",
        level: "log",
        args: arr
      });
    }
    return arr;
  }

  // src/datalayer/get-datalayer.ts
  function getDatalayer() {
    log({
      functionName: "getDatalayer",
      message: "Returns the datalayer as an object",
      level: "log"
    });
    return window._datalayer;
  }

  // src/datalayer/clear-datalayer.ts
  function clearDatalayer() {
    for (const prop of Object.getOwnPropertyNames(window._datalayer)) {
      delete window._datalayer[prop];
    }
    log({
      functionName: "clearDatalayer",
      message: "Datalayer object cleared",
      level: "log"
    });
  }

  // src/datalayer/clone-datalayer.ts
  function cloneDatalayer(datalayer) {
    const cloned = clone(datalayer);
    log({
      functionName: "cloneDatalayer",
      message: "Cloned datalayer object was returned",
      level: "log"
    });
    return cloned;
  }

  // src/datalayer/flatten-datalayer.ts
  function flattenDatalayer(datalayer) {
    const cloned = flatten(datalayer);
    log({
      functionName: "flattenDatalayer",
      message: "Flattened datalayer object was returned",
      level: "log"
    });
    return cloned;
  }

  // src/datalayer/from-string.ts
  function fromString(str) {
    try {
      window._datalayer = JSON.parse(str);
      log({
        functionName: "fromString",
        message: "Datalayer created from string",
        level: "log"
      });
    } catch (error) {
      log({
        functionName: "fromString",
        message: "Datalayer object could not be created from the string",
        level: "error"
      });
    }
  }

  // src/datalayer/to-string.ts
  function toString() {
    log({
      functionName: "toString",
      message: "Returns the datalayer as a string",
      level: "log"
    });
    return JSON.stringify(window._datalayer);
  }

  // src/index.ts
  if (!window._datalayer) {
    window._datalayer = {};
  }
  return __toCommonJS(src_exports);
})();
