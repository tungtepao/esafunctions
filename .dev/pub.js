var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// dist/index.js
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require2 = /* @__PURE__ */ ((x) => typeof __require !== "undefined" ? __require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof __require !== "undefined" ? __require : a)[b]
}) : x)(function(x) {
  if (typeof __require !== "undefined") return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_interface = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayProcessTypeEnum = exports.ObjectLifeCycleEvent = exports.ServerlessTriggerType = exports.MidwayFrameworkType = exports.FrameworkType = exports.MSListenerType = exports.MSProviderType = exports.InjectModeEnum = exports.ScopeEnum = void 0;
    var ScopeEnum;
    (function(ScopeEnum2) {
      ScopeEnum2["Singleton"] = "Singleton";
      ScopeEnum2["Request"] = "Request";
      ScopeEnum2["Prototype"] = "Prototype";
    })(ScopeEnum = exports.ScopeEnum || (exports.ScopeEnum = {}));
    var InjectModeEnum;
    (function(InjectModeEnum2) {
      InjectModeEnum2["Identifier"] = "Identifier";
      InjectModeEnum2["Class"] = "Class";
      InjectModeEnum2["PropertyName"] = "PropertyName";
    })(InjectModeEnum = exports.InjectModeEnum || (exports.InjectModeEnum = {}));
    var MSProviderType;
    (function(MSProviderType2) {
      MSProviderType2["DUBBO"] = "dubbo";
      MSProviderType2["GRPC"] = "gRPC";
    })(MSProviderType = exports.MSProviderType || (exports.MSProviderType = {}));
    var MSListenerType;
    (function(MSListenerType2) {
      MSListenerType2["RABBITMQ"] = "rabbitmq";
      MSListenerType2["MQTT"] = "mqtt";
      MSListenerType2["KAFKA"] = "kafka";
      MSListenerType2["REDIS"] = "redis";
    })(MSListenerType = exports.MSListenerType || (exports.MSListenerType = {}));
    var FrameworkType = class {
    };
    exports.FrameworkType = FrameworkType;
    var MidwayFrameworkType = class extends FrameworkType {
      constructor(name) {
        super();
        this.name = name;
      }
    };
    exports.MidwayFrameworkType = MidwayFrameworkType;
    MidwayFrameworkType.WEB = new MidwayFrameworkType("@midwayjs/web");
    MidwayFrameworkType.WEB_KOA = new MidwayFrameworkType("@midwayjs/web-koa");
    MidwayFrameworkType.WEB_EXPRESS = new MidwayFrameworkType("@midwayjs/express");
    MidwayFrameworkType.FAAS = new MidwayFrameworkType("@midwayjs/faas");
    MidwayFrameworkType.MS_GRPC = new MidwayFrameworkType("@midwayjs/grpc");
    MidwayFrameworkType.MS_RABBITMQ = new MidwayFrameworkType("@midwayjs/rabbitmq");
    MidwayFrameworkType.MS_KAFKA = new MidwayFrameworkType("@midwayjs/kafka");
    MidwayFrameworkType.WS_IO = new MidwayFrameworkType("@midwayjs/socketio");
    MidwayFrameworkType.WS = new MidwayFrameworkType("@midwayjs/ws");
    MidwayFrameworkType.SERVERLESS_APP = new MidwayFrameworkType("@midwayjs/serverless-app");
    MidwayFrameworkType.CUSTOM = new MidwayFrameworkType("");
    MidwayFrameworkType.EMPTY = new MidwayFrameworkType("empty");
    MidwayFrameworkType.LIGHT = new MidwayFrameworkType("light");
    MidwayFrameworkType.TASK = new MidwayFrameworkType("@midwayjs/task");
    var ServerlessTriggerType;
    (function(ServerlessTriggerType2) {
      ServerlessTriggerType2["EVENT"] = "event";
      ServerlessTriggerType2["HTTP"] = "http";
      ServerlessTriggerType2["API_GATEWAY"] = "apigw";
      ServerlessTriggerType2["OS"] = "os";
      ServerlessTriggerType2["CDN"] = "cdn";
      ServerlessTriggerType2["LOG"] = "log";
      ServerlessTriggerType2["TIMER"] = "timer";
      ServerlessTriggerType2["MQ"] = "mq";
      ServerlessTriggerType2["KAFKA"] = "kafka";
      ServerlessTriggerType2["HSF"] = "hsf";
      ServerlessTriggerType2["MTOP"] = "mtop";
      ServerlessTriggerType2["SSR"] = "ssr";
    })(ServerlessTriggerType = exports.ServerlessTriggerType || (exports.ServerlessTriggerType = {}));
    var ObjectLifeCycleEvent;
    (function(ObjectLifeCycleEvent2) {
      ObjectLifeCycleEvent2["BEFORE_BIND"] = "beforeBind";
      ObjectLifeCycleEvent2["BEFORE_CREATED"] = "beforeObjectCreated";
      ObjectLifeCycleEvent2["AFTER_CREATED"] = "afterObjectCreated";
      ObjectLifeCycleEvent2["AFTER_INIT"] = "afterObjectInit";
      ObjectLifeCycleEvent2["BEFORE_DESTROY"] = "beforeObjectDestroy";
    })(ObjectLifeCycleEvent = exports.ObjectLifeCycleEvent || (exports.ObjectLifeCycleEvent = {}));
    var MidwayProcessTypeEnum;
    (function(MidwayProcessTypeEnum2) {
      MidwayProcessTypeEnum2["APPLICATION"] = "APPLICATION";
      MidwayProcessTypeEnum2["AGENT"] = "AGENT";
    })(MidwayProcessTypeEnum = exports.MidwayProcessTypeEnum || (exports.MidwayProcessTypeEnum = {}));
  }
});
var require_Reflect = __commonJS({
  "node_modules/.pnpm/reflect-metadata@0.2.2/node_modules/reflect-metadata/Reflect.js"() {
    var Reflect2;
    (function(Reflect3) {
      (function(factory) {
        var root = typeof globalThis === "object" ? globalThis : typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
        var exporter = makeExporter(Reflect3);
        if (typeof root.Reflect !== "undefined") {
          exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter, root);
        if (typeof root.Reflect === "undefined") {
          root.Reflect = Reflect3;
        }
        function makeExporter(target, previous) {
          return function(key, value) {
            Object.defineProperty(target, key, { configurable: true, writable: true, value });
            if (previous)
              previous(key, value);
          };
        }
        function functionThis() {
          try {
            return Function("return this;")();
          } catch (_) {
          }
        }
        function indirectEvalThis() {
          try {
            return (void 0, eval)("(function() { return this; })()");
          } catch (_) {
          }
        }
        function sloppyModeThis() {
          return functionThis() || indirectEvalThis();
        }
      })(function(exporter, root) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function";
        var supportsProto = { __proto__: [] } instanceof Array;
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
          // create an object in dictionary mode (a.k.a. "slow" mode in v8)
          create: supportsCreate ? function() {
            return MakeDictionary(/* @__PURE__ */ Object.create(null));
          } : supportsProto ? function() {
            return MakeDictionary({ __proto__: null });
          } : function() {
            return MakeDictionary({});
          },
          has: downLevel ? function(map, key) {
            return hasOwn.call(map, key);
          } : function(map, key) {
            return key in map;
          },
          get: downLevel ? function(map, key) {
            return hasOwn.call(map, key) ? map[key] : void 0;
          } : function(map, key) {
            return map[key];
          }
        };
        var functionPrototype = Object.getPrototypeOf(Function);
        var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
        var metadataRegistry = GetOrCreateMetadataRegistry();
        var metadataProvider = CreateMetadataProvider(metadataRegistry);
        function decorate(decorators, target, propertyKey, attributes) {
          if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsObject(target))
              throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
              throw new TypeError();
            if (IsNull(attributes))
              attributes = void 0;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
          } else {
            if (!IsArray(decorators))
              throw new TypeError();
            if (!IsConstructor(target))
              throw new TypeError();
            return DecorateConstructor(decorators, target);
          }
        }
        exporter("decorate", decorate);
        function metadata(metadataKey, metadataValue) {
          function decorator(target, propertyKey) {
            if (!IsObject(target))
              throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
              throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
          }
          return decorator;
        }
        exporter("metadata", metadata);
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        function hasMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        function hasOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        function getMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        function getOwnMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        function getMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        function getOwnMetadataKeys(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        function deleteMetadata(metadataKey, target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
          var provider = GetMetadataProvider(
            target,
            propertyKey,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsConstructor(decorated))
                throw new TypeError();
              target = decorated;
            }
          }
          return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
              if (!IsObject(decorated))
                throw new TypeError();
              descriptor = decorated;
            }
          }
          return descriptor;
        }
        function OrdinaryHasMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return true;
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
          return false;
        }
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return false;
          return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
        }
        function OrdinaryGetMetadata(MetadataKey, O, P) {
          var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn2)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
          return void 0;
        }
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(provider))
            return;
          return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*Create*/
            true
          );
          provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
        }
        function OrdinaryMetadataKeys(O, P) {
          var ownKeys = OrdinaryOwnMetadataKeys(O, P);
          var parent = OrdinaryGetPrototypeOf(O);
          if (parent === null)
            return ownKeys;
          var parentKeys = OrdinaryMetadataKeys(parent, P);
          if (parentKeys.length <= 0)
            return ownKeys;
          if (ownKeys.length <= 0)
            return parentKeys;
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          return keys;
        }
        function OrdinaryOwnMetadataKeys(O, P) {
          var provider = GetMetadataProvider(
            O,
            P,
            /*create*/
            false
          );
          if (!provider) {
            return [];
          }
          return provider.OrdinaryOwnMetadataKeys(O, P);
        }
        function Type(x) {
          if (x === null)
            return 1;
          switch (typeof x) {
            case "undefined":
              return 0;
            case "boolean":
              return 2;
            case "string":
              return 3;
            case "symbol":
              return 4;
            case "number":
              return 5;
            case "object":
              return x === null ? 1 : 6;
            default:
              return 6;
          }
        }
        function IsUndefined(x) {
          return x === void 0;
        }
        function IsNull(x) {
          return x === null;
        }
        function IsSymbol(x) {
          return typeof x === "symbol";
        }
        function IsObject(x) {
          return typeof x === "object" ? x !== null : typeof x === "function";
        }
        function ToPrimitive(input, PreferredType) {
          switch (Type(input)) {
            case 0:
              return input;
            case 1:
              return input;
            case 2:
              return input;
            case 3:
              return input;
            case 4:
              return input;
            case 5:
              return input;
          }
          var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
          var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
          if (exoticToPrim !== void 0) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
              throw new TypeError();
            return result;
          }
          return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        function OrdinaryToPrimitive(O, hint) {
          if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
              var result = toString_1.call(O);
              if (!IsObject(result))
                return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
          } else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
              var result = valueOf.call(O);
              if (!IsObject(result))
                return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
              var result = toString_2.call(O);
              if (!IsObject(result))
                return result;
            }
          }
          throw new TypeError();
        }
        function ToBoolean(argument) {
          return !!argument;
        }
        function ToString(argument) {
          return "" + argument;
        }
        function ToPropertyKey(argument) {
          var key = ToPrimitive(
            argument,
            3
            /* String */
          );
          if (IsSymbol(key))
            return key;
          return ToString(key);
        }
        function IsArray(argument) {
          return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
        }
        function IsCallable(argument) {
          return typeof argument === "function";
        }
        function IsConstructor(argument) {
          return typeof argument === "function";
        }
        function IsPropertyKey(argument) {
          switch (Type(argument)) {
            case 3:
              return true;
            case 4:
              return true;
            default:
              return false;
          }
        }
        function SameValueZero(x, y) {
          return x === y || x !== x && y !== y;
        }
        function GetMethod(V, P) {
          var func = V[P];
          if (func === void 0 || func === null)
            return void 0;
          if (!IsCallable(func))
            throw new TypeError();
          return func;
        }
        function GetIterator(obj) {
          var method = GetMethod(obj, iteratorSymbol);
          if (!IsCallable(method))
            throw new TypeError();
          var iterator = method.call(obj);
          if (!IsObject(iterator))
            throw new TypeError();
          return iterator;
        }
        function IteratorValue(iterResult) {
          return iterResult.value;
        }
        function IteratorStep(iterator) {
          var result = iterator.next();
          return result.done ? false : result;
        }
        function IteratorClose(iterator) {
          var f = iterator["return"];
          if (f)
            f.call(iterator);
        }
        function OrdinaryGetPrototypeOf(O) {
          var proto = Object.getPrototypeOf(O);
          if (typeof O !== "function" || O === functionPrototype)
            return proto;
          if (proto !== functionPrototype)
            return proto;
          var prototype = O.prototype;
          var prototypeProto = prototype && Object.getPrototypeOf(prototype);
          if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
          var constructor = prototypeProto.constructor;
          if (typeof constructor !== "function")
            return proto;
          if (constructor === O)
            return proto;
          return constructor;
        }
        function CreateMetadataRegistry() {
          var fallback;
          if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
            fallback = CreateFallbackProvider(root.Reflect);
          }
          var first;
          var second;
          var rest;
          var targetProviderMap = new _WeakMap();
          var registry = {
            registerProvider,
            getProvider,
            setProvider
          };
          return registry;
          function registerProvider(provider) {
            if (!Object.isExtensible(registry)) {
              throw new Error("Cannot add provider to a frozen registry.");
            }
            switch (true) {
              case fallback === provider:
                break;
              case IsUndefined(first):
                first = provider;
                break;
              case first === provider:
                break;
              case IsUndefined(second):
                second = provider;
                break;
              case second === provider:
                break;
              default:
                if (rest === void 0)
                  rest = new _Set();
                rest.add(provider);
                break;
            }
          }
          function getProviderNoCache(O, P) {
            if (!IsUndefined(first)) {
              if (first.isProviderFor(O, P))
                return first;
              if (!IsUndefined(second)) {
                if (second.isProviderFor(O, P))
                  return first;
                if (!IsUndefined(rest)) {
                  var iterator = GetIterator(rest);
                  while (true) {
                    var next = IteratorStep(iterator);
                    if (!next) {
                      return void 0;
                    }
                    var provider = IteratorValue(next);
                    if (provider.isProviderFor(O, P)) {
                      IteratorClose(iterator);
                      return provider;
                    }
                  }
                }
              }
            }
            if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
              return fallback;
            }
            return void 0;
          }
          function getProvider(O, P) {
            var providerMap = targetProviderMap.get(O);
            var provider;
            if (!IsUndefined(providerMap)) {
              provider = providerMap.get(P);
            }
            if (!IsUndefined(provider)) {
              return provider;
            }
            provider = getProviderNoCache(O, P);
            if (!IsUndefined(provider)) {
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return provider;
          }
          function hasProvider(provider) {
            if (IsUndefined(provider))
              throw new TypeError();
            return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
          }
          function setProvider(O, P, provider) {
            if (!hasProvider(provider)) {
              throw new Error("Metadata provider not registered.");
            }
            var existingProvider = getProvider(O, P);
            if (existingProvider !== provider) {
              if (!IsUndefined(existingProvider)) {
                return false;
              }
              var providerMap = targetProviderMap.get(O);
              if (IsUndefined(providerMap)) {
                providerMap = new _Map();
                targetProviderMap.set(O, providerMap);
              }
              providerMap.set(P, provider);
            }
            return true;
          }
        }
        function GetOrCreateMetadataRegistry() {
          var metadataRegistry2;
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            metadataRegistry2 = root.Reflect[registrySymbol];
          }
          if (IsUndefined(metadataRegistry2)) {
            metadataRegistry2 = CreateMetadataRegistry();
          }
          if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
            Object.defineProperty(root.Reflect, registrySymbol, {
              enumerable: false,
              configurable: false,
              writable: false,
              value: metadataRegistry2
            });
          }
          return metadataRegistry2;
        }
        function CreateMetadataProvider(registry) {
          var metadata2 = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var targetMetadata = metadata2.get(O);
              if (IsUndefined(targetMetadata))
                return false;
              return targetMetadata.has(P);
            },
            OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
            OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
            OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
            OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
            OrdinaryDeleteMetadata
          };
          metadataRegistry.registerProvider(provider);
          return provider;
          function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = metadata2.get(O);
            var createdTargetMetadata = false;
            if (IsUndefined(targetMetadata)) {
              if (!Create)
                return void 0;
              targetMetadata = new _Map();
              metadata2.set(O, targetMetadata);
              createdTargetMetadata = true;
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
              if (!Create)
                return void 0;
              metadataMap = new _Map();
              targetMetadata.set(P, metadataMap);
              if (!registry.setProvider(O, P, provider)) {
                targetMetadata.delete(P);
                if (createdTargetMetadata) {
                  metadata2.delete(O);
                }
                throw new Error("Wrong provider for target.");
              }
            }
            return metadataMap;
          }
          function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            return ToBoolean(metadataMap.has(MetadataKey));
          }
          function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return void 0;
            return metadataMap.get(MetadataKey);
          }
          function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              true
            );
            metadataMap.set(MetadataKey, MetadataValue);
          }
          function OrdinaryOwnMetadataKeys2(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
              var next = IteratorStep(iterator);
              if (!next) {
                keys.length = k;
                return keys;
              }
              var nextValue = IteratorValue(next);
              try {
                keys[k] = nextValue;
              } catch (e) {
                try {
                  IteratorClose(iterator);
                } finally {
                  throw e;
                }
              }
              k++;
            }
          }
          function OrdinaryDeleteMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(
              O,
              P,
              /*Create*/
              false
            );
            if (IsUndefined(metadataMap))
              return false;
            if (!metadataMap.delete(MetadataKey))
              return false;
            if (metadataMap.size === 0) {
              var targetMetadata = metadata2.get(O);
              if (!IsUndefined(targetMetadata)) {
                targetMetadata.delete(P);
                if (targetMetadata.size === 0) {
                  metadata2.delete(targetMetadata);
                }
              }
            }
            return true;
          }
        }
        function CreateFallbackProvider(reflect) {
          var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
          var metadataOwner = new _WeakMap();
          var provider = {
            isProviderFor: function(O, P) {
              var metadataPropertySet = metadataOwner.get(O);
              if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
                return true;
              }
              if (getOwnMetadataKeys2(O, P).length) {
                if (IsUndefined(metadataPropertySet)) {
                  metadataPropertySet = new _Set();
                  metadataOwner.set(O, metadataPropertySet);
                }
                metadataPropertySet.add(P);
                return true;
              }
              return false;
            },
            OrdinaryDefineOwnMetadata: defineMetadata2,
            OrdinaryHasOwnMetadata: hasOwnMetadata2,
            OrdinaryGetOwnMetadata: getOwnMetadata2,
            OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
            OrdinaryDeleteMetadata: deleteMetadata2
          };
          return provider;
        }
        function GetMetadataProvider(O, P, Create) {
          var registeredProvider = metadataRegistry.getProvider(O, P);
          if (!IsUndefined(registeredProvider)) {
            return registeredProvider;
          }
          if (Create) {
            if (metadataRegistry.setProvider(O, P, metadataProvider)) {
              return metadataProvider;
            }
            throw new Error("Illegal state.");
          }
          return void 0;
        }
        function CreateMapPolyfill() {
          var cacheSentinel = {};
          var arraySentinel = [];
          var MapIterator = (
            /** @class */
            function() {
              function MapIterator2(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
              }
              MapIterator2.prototype["@@iterator"] = function() {
                return this;
              };
              MapIterator2.prototype[iteratorSymbol] = function() {
                return this;
              };
              MapIterator2.prototype.next = function() {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                  var result = this._selector(this._keys[index], this._values[index]);
                  if (index + 1 >= this._keys.length) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                  } else {
                    this._index++;
                  }
                  return { value: result, done: false };
                }
                return { value: void 0, done: true };
              };
              MapIterator2.prototype.throw = function(error) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                throw error;
              };
              MapIterator2.prototype.return = function(value) {
                if (this._index >= 0) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                }
                return { value, done: true };
              };
              return MapIterator2;
            }()
          );
          var Map2 = (
            /** @class */
            function() {
              function Map3() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              Object.defineProperty(Map3.prototype, "size", {
                get: function() {
                  return this._keys.length;
                },
                enumerable: true,
                configurable: true
              });
              Map3.prototype.has = function(key) {
                return this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0;
              };
              Map3.prototype.get = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                return index >= 0 ? this._values[index] : void 0;
              };
              Map3.prototype.set = function(key, value) {
                var index = this._find(
                  key,
                  /*insert*/
                  true
                );
                this._values[index] = value;
                return this;
              };
              Map3.prototype.delete = function(key) {
                var index = this._find(
                  key,
                  /*insert*/
                  false
                );
                if (index >= 0) {
                  var size = this._keys.length;
                  for (var i = index + 1; i < size; i++) {
                    this._keys[i - 1] = this._keys[i];
                    this._values[i - 1] = this._values[i];
                  }
                  this._keys.length--;
                  this._values.length--;
                  if (SameValueZero(key, this._cacheKey)) {
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                  }
                  return true;
                }
                return false;
              };
              Map3.prototype.clear = function() {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              };
              Map3.prototype.keys = function() {
                return new MapIterator(this._keys, this._values, getKey);
              };
              Map3.prototype.values = function() {
                return new MapIterator(this._keys, this._values, getValue);
              };
              Map3.prototype.entries = function() {
                return new MapIterator(this._keys, this._values, getEntry);
              };
              Map3.prototype["@@iterator"] = function() {
                return this.entries();
              };
              Map3.prototype[iteratorSymbol] = function() {
                return this.entries();
              };
              Map3.prototype._find = function(key, insert) {
                if (!SameValueZero(this._cacheKey, key)) {
                  this._cacheIndex = -1;
                  for (var i = 0; i < this._keys.length; i++) {
                    if (SameValueZero(this._keys[i], key)) {
                      this._cacheIndex = i;
                      break;
                    }
                  }
                }
                if (this._cacheIndex < 0 && insert) {
                  this._cacheIndex = this._keys.length;
                  this._keys.push(key);
                  this._values.push(void 0);
                }
                return this._cacheIndex;
              };
              return Map3;
            }()
          );
          return Map2;
          function getKey(key, _) {
            return key;
          }
          function getValue(_, value) {
            return value;
          }
          function getEntry(key, value) {
            return [key, value];
          }
        }
        function CreateSetPolyfill() {
          var Set2 = (
            /** @class */
            function() {
              function Set3() {
                this._map = new _Map();
              }
              Object.defineProperty(Set3.prototype, "size", {
                get: function() {
                  return this._map.size;
                },
                enumerable: true,
                configurable: true
              });
              Set3.prototype.has = function(value) {
                return this._map.has(value);
              };
              Set3.prototype.add = function(value) {
                return this._map.set(value, value), this;
              };
              Set3.prototype.delete = function(value) {
                return this._map.delete(value);
              };
              Set3.prototype.clear = function() {
                this._map.clear();
              };
              Set3.prototype.keys = function() {
                return this._map.keys();
              };
              Set3.prototype.values = function() {
                return this._map.keys();
              };
              Set3.prototype.entries = function() {
                return this._map.entries();
              };
              Set3.prototype["@@iterator"] = function() {
                return this.keys();
              };
              Set3.prototype[iteratorSymbol] = function() {
                return this.keys();
              };
              return Set3;
            }()
          );
          return Set2;
        }
        function CreateWeakMapPolyfill() {
          var UUID_SIZE = 16;
          var keys = HashMap.create();
          var rootKey = CreateUniqueKey();
          return (
            /** @class */
            function() {
              function WeakMap2() {
                this._key = CreateUniqueKey();
              }
              WeakMap2.prototype.has = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.has(table, this._key) : false;
              };
              WeakMap2.prototype.get = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? HashMap.get(table, this._key) : void 0;
              };
              WeakMap2.prototype.set = function(target, value) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  true
                );
                table[this._key] = value;
                return this;
              };
              WeakMap2.prototype.delete = function(target) {
                var table = GetOrCreateWeakMapTable(
                  target,
                  /*create*/
                  false
                );
                return table !== void 0 ? delete table[this._key] : false;
              };
              WeakMap2.prototype.clear = function() {
                this._key = CreateUniqueKey();
              };
              return WeakMap2;
            }()
          );
          function CreateUniqueKey() {
            var key;
            do
              key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
          }
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create)
                return void 0;
              Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = Math.random() * 255 | 0;
            return buffer;
          }
          function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
              var array = new Uint8Array(size);
              if (typeof crypto !== "undefined") {
                crypto.getRandomValues(array);
              } else if (typeof msCrypto !== "undefined") {
                msCrypto.getRandomValues(array);
              } else {
                FillRandomBytes(array, size);
              }
              return array;
            }
            return FillRandomBytes(new Array(size), size);
          }
          function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            data[6] = data[6] & 79 | 64;
            data[8] = data[8] & 191 | 128;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
              var byte = data[offset];
              if (offset === 4 || offset === 6 || offset === 8)
                result += "-";
              if (byte < 16)
                result += "0";
              result += byte.toString(16).toLowerCase();
            }
            return result;
          }
        }
        function MakeDictionary(obj) {
          obj.__ = void 0;
          delete obj.__;
          return obj;
        }
      });
    })(Reflect2 || (Reflect2 = {}));
  }
});
var require_constant = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TAGGED_CLS = exports.INJECT_CUSTOM_PARAM = exports.INJECT_CUSTOM_METHOD = exports.INJECT_CUSTOM_PROPERTY = exports.INJECT_TAG = exports.NAMED_TAG = exports.CLASS_KEY_CONSTRUCTOR = exports.APPLICATION_CONTEXT_KEY = exports.APPLICATION_KEY = exports.LOGGER_KEY = exports.PLUGIN_KEY = exports.CONFIG_KEY = exports.MS_HSF_METHOD_KEY = exports.MS_DUBBO_METHOD_KEY = exports.MS_GRPC_METHOD_KEY = exports.MS_PROVIDER_KEY = exports.MS_PRODUCER_KEY = exports.MS_CONSUMER_KEY = exports.RPC_DUBBO_KEY = exports.RPC_GRPC_KEY = exports.HSF_KEY = exports.WS_EVENT_KEY = exports.WS_CONTROLLER_KEY = exports.MODULE_TASK_QUEUE_OPTIONS = exports.MODULE_TASK_QUEUE_KEY = exports.MODULE_TASK_TASK_LOCAL_OPTIONS = exports.MODULE_TASK_TASK_LOCAL_KEY = exports.MODULE_TASK_METADATA = exports.MODULE_TASK_KEY = exports.WEB_RESPONSE_RENDER = exports.WEB_RESPONSE_CONTENT_TYPE = exports.WEB_RESPONSE_HEADER = exports.WEB_RESPONSE_REDIRECT = exports.WEB_RESPONSE_HTTP_CODE = exports.WEB_RESPONSE_KEY = exports.WEB_ROUTER_PARAM_KEY = exports.WEB_ROUTER_KEY = exports.CONTROLLER_KEY = exports.SERVERLESS_FUNC_KEY = exports.FUNC_KEY = exports.FACTORY_SERVICE_CLIENT_KEY = exports.MOCK_KEY = exports.GUARD_KEY = exports.MATCH_KEY = exports.CATCH_KEY = exports.ASPECT_KEY = exports.FRAMEWORK_KEY = exports.CONFIGURATION_KEY = exports.SCHEDULE_KEY = exports.ALL = void 0;
    exports.PRIVATE_META_DATA_KEY = exports.MAIN_MODULE_KEY = exports.LIFECYCLE_IDENTIFIER_PREFIX = exports.PIPELINE_IDENTIFIER = exports.OBJ_DEF_CLS = exports.TAGGED_FUN = void 0;
    exports.ALL = "common:all_value_key";
    exports.SCHEDULE_KEY = "common:schedule";
    exports.CONFIGURATION_KEY = "common:configuration";
    exports.FRAMEWORK_KEY = "common:framework";
    exports.ASPECT_KEY = "common:aspect";
    exports.CATCH_KEY = "common:catch";
    exports.MATCH_KEY = "common:match";
    exports.GUARD_KEY = "common:guard";
    exports.MOCK_KEY = "common:mock";
    exports.FACTORY_SERVICE_CLIENT_KEY = "common:service_factory:client";
    exports.FUNC_KEY = "faas:func";
    exports.SERVERLESS_FUNC_KEY = "faas:serverless:function";
    exports.CONTROLLER_KEY = "web:controller";
    exports.WEB_ROUTER_KEY = "web:router";
    exports.WEB_ROUTER_PARAM_KEY = "web:router_param";
    exports.WEB_RESPONSE_KEY = "web:response";
    exports.WEB_RESPONSE_HTTP_CODE = "web:response_http_code";
    exports.WEB_RESPONSE_REDIRECT = "web:response_redirect";
    exports.WEB_RESPONSE_HEADER = "web:response_header";
    exports.WEB_RESPONSE_CONTENT_TYPE = "web:response_content_type";
    exports.WEB_RESPONSE_RENDER = "web:response_render";
    exports.MODULE_TASK_KEY = "task:task";
    exports.MODULE_TASK_METADATA = "task:task:options";
    exports.MODULE_TASK_TASK_LOCAL_KEY = "task:task:task_local";
    exports.MODULE_TASK_TASK_LOCAL_OPTIONS = "task:task:task_local:options";
    exports.MODULE_TASK_QUEUE_KEY = "task:task:queue";
    exports.MODULE_TASK_QUEUE_OPTIONS = "task:task:queue:options";
    exports.WS_CONTROLLER_KEY = "ws:controller";
    exports.WS_EVENT_KEY = "ws:event";
    exports.HSF_KEY = "rpc:hsf";
    exports.RPC_GRPC_KEY = "rpc:grpc";
    exports.RPC_DUBBO_KEY = "rpc:dubbo";
    exports.MS_CONSUMER_KEY = "ms:consumer";
    exports.MS_PRODUCER_KEY = "ms:producer";
    exports.MS_PROVIDER_KEY = "ms:provider";
    exports.MS_GRPC_METHOD_KEY = "ms:grpc:method";
    exports.MS_DUBBO_METHOD_KEY = "ms:dubbo:method";
    exports.MS_HSF_METHOD_KEY = "ms:hsf:method";
    exports.CONFIG_KEY = "config";
    exports.PLUGIN_KEY = "plugin";
    exports.LOGGER_KEY = "logger";
    exports.APPLICATION_KEY = "__midway_framework_app__";
    exports.APPLICATION_CONTEXT_KEY = "__midway_application_context__";
    exports.CLASS_KEY_CONSTRUCTOR = "midway:class_key_constructor";
    exports.NAMED_TAG = "named";
    exports.INJECT_TAG = "inject";
    exports.INJECT_CUSTOM_PROPERTY = "inject_custom_property";
    exports.INJECT_CUSTOM_METHOD = "inject_custom_method";
    exports.INJECT_CUSTOM_PARAM = "inject_custom_param";
    exports.TAGGED_CLS = "injection:tagged_class";
    exports.TAGGED_FUN = "injection:tagged_function";
    exports.OBJ_DEF_CLS = "injection:object_definition_class";
    exports.PIPELINE_IDENTIFIER = "__pipeline_identifier__";
    exports.LIFECYCLE_IDENTIFIER_PREFIX = "__lifecycle__";
    exports.MAIN_MODULE_KEY = "__main__";
    exports.PRIVATE_META_DATA_KEY = "__midway_private_meta_data__";
  }
});
var require_types = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Types = exports.isNullOrUndefined = exports.isNull = exports.isUndefined = exports.isRegExp = exports.isSet = exports.isMap = exports.isProxy = exports.isNumber = exports.isPlainObject = exports.isObject = exports.isFunction = exports.isPromise = exports.isGeneratorFunction = exports.isAsyncFunction = exports.isClass = exports.isString = void 0;
    var util = __require2("util");
    var ToString = Function.prototype.toString;
    var hasOwn = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    function isString(value) {
      return typeof value === "string";
    }
    exports.isString = isString;
    function isClass(fn) {
      if (typeof fn !== "function") {
        return false;
      }
      if (/^class[\s{]/.test(ToString.call(fn))) {
        return true;
      }
    }
    exports.isClass = isClass;
    function isAsyncFunction(value) {
      return util.types.isAsyncFunction(value);
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isGeneratorFunction(value) {
      return util.types.isGeneratorFunction(value);
    }
    exports.isGeneratorFunction = isGeneratorFunction;
    function isPromise(value) {
      return util.types.isPromise(value);
    }
    exports.isPromise = isPromise;
    function isFunction(value) {
      return typeof value === "function";
    }
    exports.isFunction = isFunction;
    function isObject(value) {
      return value !== null && typeof value === "object";
    }
    exports.isObject = isObject;
    function isPlainObject(obj) {
      if (!obj || toStr.call(obj) !== "[object Object]") {
        return false;
      }
      const hasOwnConstructor = hasOwn.call(obj, "constructor");
      const hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
      if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
        return false;
      }
      let key;
      for (key in obj) {
      }
      return typeof key === "undefined" || hasOwn.call(obj, key);
    }
    exports.isPlainObject = isPlainObject;
    function isNumber(value) {
      return typeof value === "number";
    }
    exports.isNumber = isNumber;
    function isProxy(value) {
      return util.types.isProxy(value);
    }
    exports.isProxy = isProxy;
    function isMap(value) {
      return util.types.isMap(value);
    }
    exports.isMap = isMap;
    function isSet(value) {
      return util.types.isSet(value);
    }
    exports.isSet = isSet;
    function isRegExp(value) {
      return util.types.isRegExp(value);
    }
    exports.isRegExp = isRegExp;
    function isUndefined(value) {
      return value === void 0;
    }
    exports.isUndefined = isUndefined;
    function isNull(value) {
      return value === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(value) {
      return isUndefined(value) || isNull(value);
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.Types = {
      isClass,
      isAsyncFunction,
      isGeneratorFunction,
      isString,
      isPromise,
      isFunction,
      isObject,
      isPlainObject,
      isNumber,
      isProxy,
      isMap,
      isSet,
      isRegExp,
      isUndefined,
      isNull,
      isNullOrUndefined
    };
  }
});
var require_camelCase = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/camelCase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pascalCase = exports.camelCase = void 0;
    var UPPERCASE = /[\p{Lu}]/u;
    var LOWERCASE = /[\p{Ll}]/u;
    var IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
    var SEPARATORS = /[_.\- ]+/;
    var LEADING_SEPARATORS = new RegExp("^" + SEPARATORS.source);
    var SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, "gu");
    var NUMBERS_AND_IDENTIFIER = new RegExp("\\d+" + IDENTIFIER.source, "gu");
    var preserveCamelCase = (string, toLowerCase, toUpperCase) => {
      let isLastCharLower = false;
      let isLastCharUpper = false;
      let isLastLastCharUpper = false;
      for (let index = 0; index < string.length; index++) {
        const character = string[index];
        if (isLastCharLower && UPPERCASE.test(character)) {
          string = string.slice(0, index) + "-" + string.slice(index);
          isLastCharLower = false;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = true;
          index++;
        } else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
          string = string.slice(0, index - 1) + "-" + string.slice(index - 1);
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = false;
          isLastCharLower = true;
        } else {
          isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
          isLastLastCharUpper = isLastCharUpper;
          isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
        }
      }
      return string;
    };
    var postProcess = (input, toUpperCase) => {
      SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
      NUMBERS_AND_IDENTIFIER.lastIndex = 0;
      return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier)).replace(NUMBERS_AND_IDENTIFIER, (m) => toUpperCase(m));
    };
    function camelCaseOrigin(input, options) {
      options = {
        pascalCase: false,
        ...options
      };
      input = input.trim();
      if (input.length === 0) {
        return "";
      }
      const toLowerCase = (string) => string.toLowerCase();
      const toUpperCase = (string) => string.toUpperCase();
      if (input.length === 1) {
        if (SEPARATORS.test(input)) {
          return "";
        }
        return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
      }
      const hasUpperCase = input !== toLowerCase(input);
      if (hasUpperCase) {
        input = preserveCamelCase(input, toLowerCase, toUpperCase);
      }
      input = input.replace(LEADING_SEPARATORS, "");
      input = toLowerCase(input);
      if (options.pascalCase) {
        input = toUpperCase(input.charAt(0)) + input.slice(1);
      }
      return postProcess(input, toUpperCase);
    }
    function camelCase(input) {
      return camelCaseOrigin(input, {
        pascalCase: false
      });
    }
    exports.camelCase = camelCase;
    function pascalCase(input) {
      return camelCaseOrigin(input, {
        pascalCase: true
      });
    }
    exports.pascalCase = pascalCase;
  }
});
var require_transformation_type_enum = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/transformation-type.enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformationType = void 0;
    var TransformationType;
    (function(TransformationType2) {
      TransformationType2[TransformationType2["PLAIN_TO_CLASS"] = 0] = "PLAIN_TO_CLASS";
      TransformationType2[TransformationType2["CLASS_TO_PLAIN"] = 1] = "CLASS_TO_PLAIN";
      TransformationType2[TransformationType2["CLASS_TO_CLASS"] = 2] = "CLASS_TO_CLASS";
    })(TransformationType = exports.TransformationType || (exports.TransformationType = {}));
  }
});
var require_enums = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/enums/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_transformation_type_enum(), exports);
  }
});
var require_MetadataStorage = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/MetadataStorage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetadataStorage = void 0;
    var enums_1 = require_enums();
    var MetadataStorage = class {
      constructor() {
        this._typeMetadatas = /* @__PURE__ */ new Map();
        this._transformMetadatas = /* @__PURE__ */ new Map();
        this._exposeMetadatas = /* @__PURE__ */ new Map();
        this._excludeMetadatas = /* @__PURE__ */ new Map();
        this._ancestorsMap = /* @__PURE__ */ new Map();
      }
      // -------------------------------------------------------------------------
      // Adder Methods
      // -------------------------------------------------------------------------
      addTypeMetadata(metadata) {
        if (!this._typeMetadatas.has(metadata.target)) {
          this._typeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
        }
        this._typeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
      }
      addTransformMetadata(metadata) {
        if (!this._transformMetadatas.has(metadata.target)) {
          this._transformMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
        }
        if (!this._transformMetadatas.get(metadata.target).has(metadata.propertyName)) {
          this._transformMetadatas.get(metadata.target).set(metadata.propertyName, []);
        }
        this._transformMetadatas.get(metadata.target).get(metadata.propertyName).push(metadata);
      }
      addExposeMetadata(metadata) {
        if (!this._exposeMetadatas.has(metadata.target)) {
          this._exposeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
        }
        this._exposeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
      }
      addExcludeMetadata(metadata) {
        if (!this._excludeMetadatas.has(metadata.target)) {
          this._excludeMetadatas.set(metadata.target, /* @__PURE__ */ new Map());
        }
        this._excludeMetadatas.get(metadata.target).set(metadata.propertyName, metadata);
      }
      // -------------------------------------------------------------------------
      // Public Methods
      // -------------------------------------------------------------------------
      findTransformMetadatas(target, propertyName, transformationType) {
        return this.findMetadatas(this._transformMetadatas, target, propertyName).filter((metadata) => {
          if (!metadata.options)
            return true;
          if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
            return true;
          if (metadata.options.toClassOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
          }
          if (metadata.options.toPlainOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
          }
          return true;
        });
      }
      findExcludeMetadata(target, propertyName) {
        return this.findMetadata(this._excludeMetadatas, target, propertyName);
      }
      findExposeMetadata(target, propertyName) {
        return this.findMetadata(this._exposeMetadatas, target, propertyName);
      }
      findExposeMetadataByCustomName(target, name) {
        return this.getExposedMetadatas(target).find((metadata) => {
          return metadata.options && metadata.options.name === name;
        });
      }
      findTypeMetadata(target, propertyName) {
        return this.findMetadata(this._typeMetadatas, target, propertyName);
      }
      getStrategy(target) {
        const excludeMap = this._excludeMetadatas.get(target);
        const exclude = excludeMap && excludeMap.get(void 0);
        const exposeMap = this._exposeMetadatas.get(target);
        const expose = exposeMap && exposeMap.get(void 0);
        if (exclude && expose || !exclude && !expose)
          return "none";
        return exclude ? "excludeAll" : "exposeAll";
      }
      getExposedMetadatas(target) {
        return this.getMetadata(this._exposeMetadatas, target);
      }
      getExcludedMetadatas(target) {
        return this.getMetadata(this._excludeMetadatas, target);
      }
      getExposedProperties(target, transformationType) {
        return this.getExposedMetadatas(target).filter((metadata) => {
          if (!metadata.options)
            return true;
          if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
            return true;
          if (metadata.options.toClassOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
          }
          if (metadata.options.toPlainOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
          }
          return true;
        }).map((metadata) => metadata.propertyName);
      }
      getExcludedProperties(target, transformationType) {
        return this.getExcludedMetadatas(target).filter((metadata) => {
          if (!metadata.options)
            return true;
          if (metadata.options.toClassOnly === true && metadata.options.toPlainOnly === true)
            return true;
          if (metadata.options.toClassOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_CLASS || transformationType === enums_1.TransformationType.PLAIN_TO_CLASS;
          }
          if (metadata.options.toPlainOnly === true) {
            return transformationType === enums_1.TransformationType.CLASS_TO_PLAIN;
          }
          return true;
        }).map((metadata) => metadata.propertyName);
      }
      clear() {
        this._typeMetadatas.clear();
        this._exposeMetadatas.clear();
        this._excludeMetadatas.clear();
        this._ancestorsMap.clear();
      }
      // -------------------------------------------------------------------------
      // Private Methods
      // -------------------------------------------------------------------------
      getMetadata(metadatas, target) {
        const metadataFromTargetMap = metadatas.get(target);
        let metadataFromTarget;
        if (metadataFromTargetMap) {
          metadataFromTarget = Array.from(metadataFromTargetMap.values()).filter((meta) => meta.propertyName !== void 0);
        }
        const metadataFromAncestors = [];
        for (const ancestor of this.getAncestors(target)) {
          const ancestorMetadataMap = metadatas.get(ancestor);
          if (ancestorMetadataMap) {
            const metadataFromAncestor = Array.from(ancestorMetadataMap.values()).filter((meta) => meta.propertyName !== void 0);
            metadataFromAncestors.push(...metadataFromAncestor);
          }
        }
        return metadataFromAncestors.concat(metadataFromTarget || []);
      }
      findMetadata(metadatas, target, propertyName) {
        const metadataFromTargetMap = metadatas.get(target);
        if (metadataFromTargetMap) {
          const metadataFromTarget = metadataFromTargetMap.get(propertyName);
          if (metadataFromTarget) {
            return metadataFromTarget;
          }
        }
        for (const ancestor of this.getAncestors(target)) {
          const ancestorMetadataMap = metadatas.get(ancestor);
          if (ancestorMetadataMap) {
            const ancestorResult = ancestorMetadataMap.get(propertyName);
            if (ancestorResult) {
              return ancestorResult;
            }
          }
        }
        return void 0;
      }
      findMetadatas(metadatas, target, propertyName) {
        const metadataFromTargetMap = metadatas.get(target);
        let metadataFromTarget;
        if (metadataFromTargetMap) {
          metadataFromTarget = metadataFromTargetMap.get(propertyName);
        }
        const metadataFromAncestorsTarget = [];
        for (const ancestor of this.getAncestors(target)) {
          const ancestorMetadataMap = metadatas.get(ancestor);
          if (ancestorMetadataMap) {
            if (ancestorMetadataMap.has(propertyName)) {
              metadataFromAncestorsTarget.push(...ancestorMetadataMap.get(propertyName));
            }
          }
        }
        return metadataFromAncestorsTarget.slice().reverse().concat((metadataFromTarget || []).slice().reverse());
      }
      getAncestors(target) {
        if (!target)
          return [];
        if (!this._ancestorsMap.has(target)) {
          const ancestors = [];
          for (let baseClass = Object.getPrototypeOf(target.prototype.constructor); typeof baseClass.prototype !== "undefined"; baseClass = Object.getPrototypeOf(baseClass.prototype.constructor)) {
            ancestors.push(baseClass);
          }
          this._ancestorsMap.set(target, ancestors);
        }
        return this._ancestorsMap.get(target);
      }
    };
    exports.MetadataStorage = MetadataStorage;
  }
});
var require_storage = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/storage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultMetadataStorage = void 0;
    var MetadataStorage_1 = require_MetadataStorage();
    exports.defaultMetadataStorage = new MetadataStorage_1.MetadataStorage();
  }
});
var require_get_global_util = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/get-global.util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobal = void 0;
    function getGlobal() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof self !== "undefined") {
        return self;
      }
    }
    exports.getGlobal = getGlobal;
  }
});
var require_is_promise_util = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/is-promise.util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromise = void 0;
    function isPromise(p) {
      return p !== null && typeof p === "object" && typeof p.then === "function";
    }
    exports.isPromise = isPromise;
  }
});
var require_utils = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/utils/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_get_global_util(), exports);
    __exportStar(require_is_promise_util(), exports);
  }
});
var require_TransformOperationExecutor = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/TransformOperationExecutor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformOperationExecutor = void 0;
    var storage_1 = require_storage();
    var enums_1 = require_enums();
    var utils_1 = require_utils();
    function instantiateArrayType(arrayType) {
      const array = new arrayType();
      if (!(array instanceof Set) && !("push" in array)) {
        return [];
      }
      return array;
    }
    var TransformOperationExecutor = class {
      // -------------------------------------------------------------------------
      // Constructor
      // -------------------------------------------------------------------------
      constructor(transformationType, options) {
        this.transformationType = transformationType;
        this.options = options;
        this.recursionStack = /* @__PURE__ */ new Set();
      }
      // -------------------------------------------------------------------------
      // Public Methods
      // -------------------------------------------------------------------------
      transform(source, value, targetType, arrayType, isMap, level = 0) {
        if (Array.isArray(value) || value instanceof Set) {
          const newValue = arrayType && this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? instantiateArrayType(arrayType) : [];
          value.forEach((subValue, index) => {
            const subSource = source ? source[index] : void 0;
            if (!this.options.enableCircularCheck || !this.isCircular(subValue)) {
              let realTargetType;
              if (typeof targetType !== "function" && targetType && targetType.options && targetType.options.discriminator && targetType.options.discriminator.property && targetType.options.discriminator.subTypes) {
                if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                  realTargetType = targetType.options.discriminator.subTypes.find((subType) => subType.name === subValue[targetType.options.discriminator.property]);
                  const options = { newObject: newValue, object: subValue, property: void 0 };
                  const newType = targetType.typeFunction(options);
                  realTargetType === void 0 ? realTargetType = newType : realTargetType = realTargetType.value;
                  if (!targetType.options.keepDiscriminatorProperty)
                    delete subValue[targetType.options.discriminator.property];
                }
                if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                  realTargetType = subValue.constructor;
                }
                if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                  subValue[targetType.options.discriminator.property] = targetType.options.discriminator.subTypes.find((subType) => subType.value === subValue.constructor).name;
                }
              } else {
                realTargetType = targetType;
              }
              const value2 = this.transform(subSource, subValue, realTargetType, void 0, subValue instanceof Map, level + 1);
              if (newValue instanceof Set) {
                newValue.add(value2);
              } else {
                newValue.push(value2);
              }
            } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
              if (newValue instanceof Set) {
                newValue.add(subValue);
              } else {
                newValue.push(subValue);
              }
            }
          });
          return newValue;
        } else if (targetType === String && !isMap) {
          if (value === null || value === void 0)
            return value;
          return String(value);
        } else if (targetType === Number && !isMap) {
          if (value === null || value === void 0)
            return value;
          return Number(value);
        } else if (targetType === Boolean && !isMap) {
          if (value === null || value === void 0)
            return value;
          return Boolean(value);
        } else if ((targetType === Date || value instanceof Date) && !isMap) {
          if (value instanceof Date) {
            return new Date(value.valueOf());
          }
          if (value === null || value === void 0)
            return value;
          return new Date(value);
        } else if (!!(0, utils_1.getGlobal)().Buffer && (targetType === Buffer || value instanceof Buffer) && !isMap) {
          if (value === null || value === void 0)
            return value;
          return Buffer.from(value);
        } else if ((0, utils_1.isPromise)(value) && !isMap) {
          return new Promise((resolve, reject) => {
            value.then((data) => resolve(this.transform(void 0, data, targetType, void 0, void 0, level + 1)), reject);
          });
        } else if (!isMap && value !== null && typeof value === "object" && typeof value.then === "function") {
          return value;
        } else if (typeof value === "object" && value !== null) {
          if (!targetType && value.constructor !== Object)
            if (!Array.isArray(value) && value.constructor === Array) {
            } else {
              targetType = value.constructor;
            }
          if (!targetType && source)
            targetType = source.constructor;
          if (this.options.enableCircularCheck) {
            this.recursionStack.add(value);
          }
          const keys = this.getKeys(targetType, value, isMap);
          let newValue = source ? source : {};
          if (!source && (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS)) {
            if (isMap) {
              newValue = /* @__PURE__ */ new Map();
            } else if (targetType) {
              newValue = new targetType();
            } else {
              newValue = {};
            }
          }
          for (const key of keys) {
            if (key === "__proto__" || key === "constructor") {
              continue;
            }
            const valueKey = key;
            let newValueKey = key, propertyName = key;
            if (!this.options.ignoreDecorators && targetType) {
              if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadataByCustomName(targetType, key);
                if (exposeMetadata) {
                  propertyName = exposeMetadata.propertyName;
                  newValueKey = exposeMetadata.propertyName;
                }
              } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(targetType, key);
                if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                  newValueKey = exposeMetadata.options.name;
                }
              }
            }
            let subValue = void 0;
            if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
              subValue = value[valueKey];
            } else {
              if (value instanceof Map) {
                subValue = value.get(valueKey);
              } else if (value[valueKey] instanceof Function) {
                subValue = value[valueKey]();
              } else {
                subValue = value[valueKey];
              }
            }
            let type = void 0, isSubValueMap = subValue instanceof Map;
            if (targetType && isMap) {
              type = targetType;
            } else if (targetType) {
              const metadata = storage_1.defaultMetadataStorage.findTypeMetadata(targetType, propertyName);
              if (metadata) {
                const options = { newObject: newValue, object: value, property: propertyName };
                const newType = metadata.typeFunction ? metadata.typeFunction(options) : metadata.reflectedType;
                if (metadata.options && metadata.options.discriminator && metadata.options.discriminator.property && metadata.options.discriminator.subTypes) {
                  if (!(value[valueKey] instanceof Array)) {
                    if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                      type = metadata.options.discriminator.subTypes.find((subType) => {
                        if (subValue && subValue instanceof Object && metadata.options.discriminator.property in subValue) {
                          return subType.name === subValue[metadata.options.discriminator.property];
                        }
                      });
                      type === void 0 ? type = newType : type = type.value;
                      if (!metadata.options.keepDiscriminatorProperty) {
                        if (subValue && subValue instanceof Object && metadata.options.discriminator.property in subValue) {
                          delete subValue[metadata.options.discriminator.property];
                        }
                      }
                    }
                    if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
                      type = subValue.constructor;
                    }
                    if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                      if (subValue) {
                        subValue[metadata.options.discriminator.property] = metadata.options.discriminator.subTypes.find((subType) => subType.value === subValue.constructor).name;
                      }
                    }
                  } else {
                    type = metadata;
                  }
                } else {
                  type = newType;
                }
                isSubValueMap = isSubValueMap || metadata.reflectedType === Map;
              } else if (this.options.targetMaps) {
                this.options.targetMaps.filter((map) => map.target === targetType && !!map.properties[propertyName]).forEach((map) => type = map.properties[propertyName]);
              } else if (this.options.enableImplicitConversion && this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
                const reflectedType = Reflect.getMetadata("design:type", targetType.prototype, propertyName);
                if (reflectedType) {
                  type = reflectedType;
                }
              }
            }
            const arrayType2 = Array.isArray(value[valueKey]) ? this.getReflectedType(targetType, propertyName) : void 0;
            const subSource = source ? source[valueKey] : void 0;
            if (newValue.constructor.prototype) {
              const descriptor = Object.getOwnPropertyDescriptor(newValue.constructor.prototype, newValueKey);
              if ((this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS || this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) && // eslint-disable-next-line @typescript-eslint/unbound-method
              (descriptor && !descriptor.set || newValue[newValueKey] instanceof Function))
                continue;
            }
            if (!this.options.enableCircularCheck || !this.isCircular(subValue)) {
              const transformKey = this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS ? newValueKey : key;
              let finalValue;
              if (this.transformationType === enums_1.TransformationType.CLASS_TO_PLAIN) {
                finalValue = value[transformKey];
                finalValue = this.applyCustomTransformations(finalValue, targetType, transformKey, value, this.transformationType);
                finalValue = value[transformKey] === finalValue ? subValue : finalValue;
                finalValue = this.transform(subSource, finalValue, type, arrayType2, isSubValueMap, level + 1);
              } else {
                if (subValue === void 0 && this.options.exposeDefaultValues) {
                  finalValue = newValue[newValueKey];
                } else {
                  finalValue = this.transform(subSource, subValue, type, arrayType2, isSubValueMap, level + 1);
                  finalValue = this.applyCustomTransformations(finalValue, targetType, transformKey, value, this.transformationType);
                }
              }
              if (finalValue !== void 0 || this.options.exposeUnsetFields) {
                if (newValue instanceof Map) {
                  newValue.set(newValueKey, finalValue);
                } else {
                  newValue[newValueKey] = finalValue;
                }
              }
            } else if (this.transformationType === enums_1.TransformationType.CLASS_TO_CLASS) {
              let finalValue = subValue;
              finalValue = this.applyCustomTransformations(finalValue, targetType, key, value, this.transformationType);
              if (finalValue !== void 0 || this.options.exposeUnsetFields) {
                if (newValue instanceof Map) {
                  newValue.set(newValueKey, finalValue);
                } else {
                  newValue[newValueKey] = finalValue;
                }
              }
            }
          }
          if (this.options.enableCircularCheck) {
            this.recursionStack.delete(value);
          }
          return newValue;
        } else {
          return value;
        }
      }
      applyCustomTransformations(value, target, key, obj, transformationType) {
        let metadatas = storage_1.defaultMetadataStorage.findTransformMetadatas(target, key, this.transformationType);
        if (this.options.version !== void 0) {
          metadatas = metadatas.filter((metadata) => {
            if (!metadata.options)
              return true;
            return this.checkVersion(metadata.options.since, metadata.options.until);
          });
        }
        if (this.options.groups && this.options.groups.length) {
          metadatas = metadatas.filter((metadata) => {
            if (!metadata.options)
              return true;
            return this.checkGroups(metadata.options.groups);
          });
        } else {
          metadatas = metadatas.filter((metadata) => {
            return !metadata.options || !metadata.options.groups || !metadata.options.groups.length;
          });
        }
        metadatas.forEach((metadata) => {
          value = metadata.transformFn({ value, key, obj, type: transformationType, options: this.options });
        });
        return value;
      }
      // preventing circular references
      isCircular(object) {
        return this.recursionStack.has(object);
      }
      getReflectedType(target, propertyName) {
        if (!target)
          return void 0;
        const meta = storage_1.defaultMetadataStorage.findTypeMetadata(target, propertyName);
        return meta ? meta.reflectedType : void 0;
      }
      getKeys(target, object, isMap) {
        let strategy = storage_1.defaultMetadataStorage.getStrategy(target);
        if (strategy === "none")
          strategy = this.options.strategy || "exposeAll";
        let keys = [];
        if (strategy === "exposeAll" || isMap) {
          if (object instanceof Map) {
            keys = Array.from(object.keys());
          } else {
            keys = Object.keys(object);
          }
        }
        if (isMap) {
          return keys;
        }
        if (this.options.ignoreDecorators && this.options.excludeExtraneousValues && target) {
          const exposedProperties = storage_1.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
          const excludedProperties = storage_1.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
          keys = [...exposedProperties, ...excludedProperties];
        }
        if (!this.options.ignoreDecorators && target) {
          let exposedProperties = storage_1.defaultMetadataStorage.getExposedProperties(target, this.transformationType);
          if (this.transformationType === enums_1.TransformationType.PLAIN_TO_CLASS) {
            exposedProperties = exposedProperties.map((key) => {
              const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
              if (exposeMetadata && exposeMetadata.options && exposeMetadata.options.name) {
                return exposeMetadata.options.name;
              }
              return key;
            });
          }
          if (this.options.excludeExtraneousValues) {
            keys = exposedProperties;
          } else {
            keys = keys.concat(exposedProperties);
          }
          const excludedProperties = storage_1.defaultMetadataStorage.getExcludedProperties(target, this.transformationType);
          if (excludedProperties.length > 0) {
            keys = keys.filter((key) => {
              return !excludedProperties.includes(key);
            });
          }
          if (this.options.version !== void 0) {
            keys = keys.filter((key) => {
              const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
              if (!exposeMetadata || !exposeMetadata.options)
                return true;
              return this.checkVersion(exposeMetadata.options.since, exposeMetadata.options.until);
            });
          }
          if (this.options.groups && this.options.groups.length) {
            keys = keys.filter((key) => {
              const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
              if (!exposeMetadata || !exposeMetadata.options)
                return true;
              return this.checkGroups(exposeMetadata.options.groups);
            });
          } else {
            keys = keys.filter((key) => {
              const exposeMetadata = storage_1.defaultMetadataStorage.findExposeMetadata(target, key);
              return !exposeMetadata || !exposeMetadata.options || !exposeMetadata.options.groups || !exposeMetadata.options.groups.length;
            });
          }
        }
        if (this.options.excludePrefixes && this.options.excludePrefixes.length) {
          keys = keys.filter((key) => this.options.excludePrefixes.every((prefix) => {
            return key.substr(0, prefix.length) !== prefix;
          }));
        }
        keys = keys.filter((key, index, self2) => {
          return self2.indexOf(key) === index;
        });
        return keys;
      }
      checkVersion(since, until) {
        let decision = true;
        if (decision && since)
          decision = this.options.version >= since;
        if (decision && until)
          decision = this.options.version < until;
        return decision;
      }
      checkGroups(groups) {
        if (!groups)
          return true;
        return this.options.groups.some((optionGroup) => groups.includes(optionGroup));
      }
    };
    exports.TransformOperationExecutor = TransformOperationExecutor;
  }
});
var require_default_options_constant = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/constants/default-options.constant.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultOptions = void 0;
    exports.defaultOptions = {
      enableCircularCheck: false,
      enableImplicitConversion: false,
      excludeExtraneousValues: false,
      excludePrefixes: void 0,
      exposeDefaultValues: false,
      exposeUnsetFields: true,
      groups: void 0,
      ignoreDecorators: false,
      strategy: void 0,
      targetMaps: void 0,
      version: void 0
    };
  }
});
var require_ClassTransformer = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/ClassTransformer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClassTransformer = void 0;
    var TransformOperationExecutor_1 = require_TransformOperationExecutor();
    var enums_1 = require_enums();
    var default_options_constant_1 = require_default_options_constant();
    var ClassTransformer = class {
      instanceToPlain(object, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(void 0, object, void 0, void 0, void 0, void 0);
      }
      classToPlainFromExist(object, plainObject, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_PLAIN, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(plainObject, object, void 0, void 0, void 0, void 0);
      }
      plainToInstance(cls, plain, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(void 0, plain, cls, void 0, void 0, void 0);
      }
      plainToClassFromExist(clsObject, plain, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.PLAIN_TO_CLASS, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(clsObject, plain, void 0, void 0, void 0, void 0);
      }
      instanceToInstance(object, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(void 0, object, void 0, void 0, void 0, void 0);
      }
      classToClassFromExist(object, fromObject, options) {
        const executor = new TransformOperationExecutor_1.TransformOperationExecutor(enums_1.TransformationType.CLASS_TO_CLASS, {
          ...default_options_constant_1.defaultOptions,
          ...options
        });
        return executor.transform(fromObject, object, void 0, void 0, void 0, void 0);
      }
      serialize(object, options) {
        return JSON.stringify(this.instanceToPlain(object, options));
      }
      /**
       * Deserializes given JSON string to a object of the given class.
       */
      deserialize(cls, json, options) {
        const jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
      }
      /**
       * Deserializes given JSON string to an array of objects of the given class.
       */
      deserializeArray(cls, json, options) {
        const jsonObject = JSON.parse(json);
        return this.plainToInstance(cls, jsonObject, options);
      }
    };
    exports.ClassTransformer = ClassTransformer;
  }
});
var require_exclude_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/exclude.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Exclude = void 0;
    var storage_1 = require_storage();
    function Exclude(options = {}) {
      return function(object, propertyName) {
        storage_1.defaultMetadataStorage.addExcludeMetadata({
          target: object instanceof Function ? object : object.constructor,
          propertyName,
          options
        });
      };
    }
    exports.Exclude = Exclude;
  }
});
var require_expose_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/expose.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Expose = void 0;
    var storage_1 = require_storage();
    function Expose(options = {}) {
      return function(object, propertyName) {
        storage_1.defaultMetadataStorage.addExposeMetadata({
          target: object instanceof Function ? object : object.constructor,
          propertyName,
          options
        });
      };
    }
    exports.Expose = Expose;
  }
});
var require_transform_instance_to_instance_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-instance.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformInstanceToInstance = void 0;
    var ClassTransformer_1 = require_ClassTransformer();
    function TransformInstanceToInstance(params) {
      return function(target, propertyKey, descriptor) {
        const classTransformer = new ClassTransformer_1.ClassTransformer();
        const originalMethod = descriptor.value;
        descriptor.value = function(...args) {
          const result = originalMethod.apply(this, args);
          const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
          return isPromise ? result.then((data) => classTransformer.instanceToInstance(data, params)) : classTransformer.instanceToInstance(result, params);
        };
      };
    }
    exports.TransformInstanceToInstance = TransformInstanceToInstance;
  }
});
var require_transform_instance_to_plain_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-instance-to-plain.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformInstanceToPlain = void 0;
    var ClassTransformer_1 = require_ClassTransformer();
    function TransformInstanceToPlain(params) {
      return function(target, propertyKey, descriptor) {
        const classTransformer = new ClassTransformer_1.ClassTransformer();
        const originalMethod = descriptor.value;
        descriptor.value = function(...args) {
          const result = originalMethod.apply(this, args);
          const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
          return isPromise ? result.then((data) => classTransformer.instanceToPlain(data, params)) : classTransformer.instanceToPlain(result, params);
        };
      };
    }
    exports.TransformInstanceToPlain = TransformInstanceToPlain;
  }
});
var require_transform_plain_to_instance_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform-plain-to-instance.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformPlainToInstance = void 0;
    var ClassTransformer_1 = require_ClassTransformer();
    function TransformPlainToInstance(classType, params) {
      return function(target, propertyKey, descriptor) {
        const classTransformer = new ClassTransformer_1.ClassTransformer();
        const originalMethod = descriptor.value;
        descriptor.value = function(...args) {
          const result = originalMethod.apply(this, args);
          const isPromise = !!result && (typeof result === "object" || typeof result === "function") && typeof result.then === "function";
          return isPromise ? result.then((data) => classTransformer.plainToInstance(classType, data, params)) : classTransformer.plainToInstance(classType, result, params);
        };
      };
    }
    exports.TransformPlainToInstance = TransformPlainToInstance;
  }
});
var require_transform_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/transform.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transform = void 0;
    var storage_1 = require_storage();
    function Transform(transformFn, options = {}) {
      return function(target, propertyName) {
        storage_1.defaultMetadataStorage.addTransformMetadata({
          target: target.constructor,
          propertyName,
          transformFn,
          options
        });
      };
    }
    exports.Transform = Transform;
  }
});
var require_type_decorator = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/type.decorator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = void 0;
    var storage_1 = require_storage();
    function Type(typeFunction, options = {}) {
      return function(target, propertyName) {
        const reflectedType = Reflect.getMetadata("design:type", target, propertyName);
        storage_1.defaultMetadataStorage.addTypeMetadata({
          target: target.constructor,
          propertyName,
          reflectedType,
          typeFunction,
          options
        });
      };
    }
    exports.Type = Type;
  }
});
var require_decorators = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/decorators/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_exclude_decorator(), exports);
    __exportStar(require_expose_decorator(), exports);
    __exportStar(require_transform_instance_to_instance_decorator(), exports);
    __exportStar(require_transform_instance_to_plain_decorator(), exports);
    __exportStar(require_transform_plain_to_instance_decorator(), exports);
    __exportStar(require_transform_decorator(), exports);
    __exportStar(require_type_decorator(), exports);
  }
});
var require_expose_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/expose-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_exclude_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/exclude-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_transform_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/transform-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_type_discriminator_descriptor_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-discriminator-descriptor.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_type_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/decorator-options/type-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_exclude_metadata_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/exclude-metadata.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_expose_metadata_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/expose-metadata.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_transform_metadata_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-metadata.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_transform_fn_params_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/transform-fn-params.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_type_metadata_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/metadata/type-metadata.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_class_constructor_type = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-constructor.type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_class_transformer_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/class-transformer-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_target_map_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/target-map.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_type_help_options_interface = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/type-help-options.interface.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});
var require_interfaces = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/interfaces/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_expose_options_interface(), exports);
    __exportStar(require_exclude_options_interface(), exports);
    __exportStar(require_transform_options_interface(), exports);
    __exportStar(require_type_discriminator_descriptor_interface(), exports);
    __exportStar(require_type_options_interface(), exports);
    __exportStar(require_exclude_metadata_interface(), exports);
    __exportStar(require_expose_metadata_interface(), exports);
    __exportStar(require_transform_metadata_interface(), exports);
    __exportStar(require_transform_fn_params_interface(), exports);
    __exportStar(require_type_metadata_interface(), exports);
    __exportStar(require_class_constructor_type(), exports);
    __exportStar(require_class_transformer_options_interface(), exports);
    __exportStar(require_target_map_interface(), exports);
    __exportStar(require_type_help_options_interface(), exports);
  }
});
var require_cjs = __commonJS({
  "node_modules/.pnpm/class-transformer@0.5.1/node_modules/class-transformer/cjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.deserializeArray = exports.deserialize = exports.serialize = exports.classToClassFromExist = exports.instanceToInstance = exports.plainToClassFromExist = exports.plainToInstance = exports.plainToClass = exports.classToPlainFromExist = exports.instanceToPlain = exports.classToPlain = exports.ClassTransformer = void 0;
    var ClassTransformer_1 = require_ClassTransformer();
    var ClassTransformer_2 = require_ClassTransformer();
    Object.defineProperty(exports, "ClassTransformer", { enumerable: true, get: function() {
      return ClassTransformer_2.ClassTransformer;
    } });
    __exportStar(require_decorators(), exports);
    __exportStar(require_interfaces(), exports);
    __exportStar(require_enums(), exports);
    var classTransformer = new ClassTransformer_1.ClassTransformer();
    function classToPlain(object, options) {
      return classTransformer.instanceToPlain(object, options);
    }
    exports.classToPlain = classToPlain;
    function instanceToPlain(object, options) {
      return classTransformer.instanceToPlain(object, options);
    }
    exports.instanceToPlain = instanceToPlain;
    function classToPlainFromExist(object, plainObject, options) {
      return classTransformer.classToPlainFromExist(object, plainObject, options);
    }
    exports.classToPlainFromExist = classToPlainFromExist;
    function plainToClass(cls, plain, options) {
      return classTransformer.plainToInstance(cls, plain, options);
    }
    exports.plainToClass = plainToClass;
    function plainToInstance(cls, plain, options) {
      return classTransformer.plainToInstance(cls, plain, options);
    }
    exports.plainToInstance = plainToInstance;
    function plainToClassFromExist(clsObject, plain, options) {
      return classTransformer.plainToClassFromExist(clsObject, plain, options);
    }
    exports.plainToClassFromExist = plainToClassFromExist;
    function instanceToInstance(object, options) {
      return classTransformer.instanceToInstance(object, options);
    }
    exports.instanceToInstance = instanceToInstance;
    function classToClassFromExist(object, fromObject, options) {
      return classTransformer.classToClassFromExist(object, fromObject, options);
    }
    exports.classToClassFromExist = classToClassFromExist;
    function serialize(object, options) {
      return classTransformer.serialize(object, options);
    }
    exports.serialize = serialize;
    function deserialize(cls, json, options) {
      return classTransformer.deserialize(cls, json, options);
    }
    exports.deserialize = deserialize;
    function deserializeArray(cls, json, options) {
      return classTransformer.deserializeArray(cls, json, options);
    }
    exports.deserializeArray = deserializeArray;
  }
});
var require_pathToRegexp = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/pathToRegexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PathToRegexpUtil = void 0;
    function lexer(str) {
      const tokens = [];
      let i = 0;
      while (i < str.length) {
        const char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          let name = "";
          let j = i + 1;
          while (j < str.length) {
            const code = str.charCodeAt(j);
            if (
              // `0-9`
              code >= 48 && code <= 57 || // `A-Z`
              code >= 65 && code <= 90 || // `a-z`
              code >= 97 && code <= 122 || // `_`
              code === 95
            ) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError(`Missing parameter name at ${i}`);
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          let count = 1;
          let pattern = "";
          let j = i + 1;
          if (str[j] === "?") {
            throw new TypeError(`Pattern cannot start with "?" at ${j}`);
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError(`Capturing groups are not allowed at ${j}`);
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError(`Unbalanced pattern at ${i}`);
          if (!pattern)
            throw new TypeError(`Missing pattern at ${i}`);
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options = {}) {
      const tokens = lexer(str);
      const { prefixes = "./" } = options;
      const defaultPattern = `[^${escapeString(options.delimiter || "/#?")}]+?`;
      const result = [];
      let key = 0;
      let i = 0;
      let path = "";
      const tryConsume = (type) => {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      const mustConsume = (type) => {
        const value = tryConsume(type);
        if (value !== void 0)
          return value;
        const { type: nextType, index } = tokens[i];
        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}`);
      };
      const consumeText = () => {
        let result2 = "";
        let value;
        while (value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value;
        }
        return result2;
      };
      while (i < tokens.length) {
        const char = tryConsume("CHAR");
        const name = tryConsume("NAME");
        const pattern = tryConsume("PATTERN");
        if (name || pattern) {
          let prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        const value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        const open = tryConsume("OPEN");
        if (open) {
          const prefix = consumeText();
          const name2 = tryConsume("NAME") || "";
          const pattern2 = tryConsume("PATTERN") || "";
          const suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name2 || (pattern2 ? key++ : ""),
            pattern: name2 && !pattern2 ? defaultPattern : pattern2,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    function tokensToFunction(tokens, options = {}) {
      const reFlags = flags(options);
      const { encode = (x) => x, validate = true } = options;
      const matches = tokens.map((token) => {
        if (typeof token === "object") {
          return new RegExp(`^(?:${token.pattern})$`, reFlags);
        }
      });
      return (data) => {
        let path = "";
        for (let i = 0; i < tokens.length; i++) {
          const token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          const value = data ? data[token.name] : void 0;
          const optional = token.modifier === "?" || token.modifier === "*";
          const repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError(`Expected "${token.name}" to not repeat, but got an array`);
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError(`Expected "${token.name}" to not be empty`);
            }
            for (let j = 0; j < value.length; j++) {
              const segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}", but got "${segment}"`);
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            const segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          const typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError(`Expected "${token.name}" to be ${typeOfMessage}`);
        }
        return path;
      };
    }
    function match(str, options) {
      const keys = [];
      const re = toRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    function regexpToFunction(re, keys, options = {}) {
      const { decode = (x) => x } = options;
      return function(pathname) {
        const m = re.exec(pathname);
        if (!m)
          return false;
        const { 0: path, index } = m;
        const params = /* @__PURE__ */ Object.create(null);
        for (let i = 1; i < m.length; i++) {
          if (m[i] === void 0)
            continue;
          const key = keys[i - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i].split(key.prefix + key.suffix).map((value) => {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i], key);
          }
        }
        return { path, index, params };
      };
    }
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      const groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
      let index = 0;
      let execResult = groupsRegex.exec(path.source);
      while (execResult) {
        keys.push({
          // Use parenthesized substring match if available, index otherwise
          name: execResult[1] || index++,
          prefix: "",
          suffix: "",
          modifier: "",
          pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      const parts = paths.map((path) => toRegexp(path, keys, options).source);
      return new RegExp(`(?:${parts.join("|")})`, flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options = {}) {
      const { strict = false, start = true, end = true, encode = (x) => x, delimiter = "/#?", endsWith = "" } = options;
      const endsWithRe = `[${escapeString(endsWith)}]|$`;
      const delimiterRe = `[${escapeString(delimiter)}]`;
      let route = start ? "^" : "";
      for (const token of tokens) {
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          const prefix = escapeString(encode(token.prefix));
          const suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                const mod = token.modifier === "*" ? "?" : "";
                route += `(?:${prefix}((?:${token.pattern})(?:${suffix}${prefix}(?:${token.pattern}))*)${suffix})${mod}`;
              } else {
                route += `(?:${prefix}(${token.pattern})${suffix})${token.modifier}`;
              }
            } else {
              if (token.modifier === "+" || token.modifier === "*") {
                route += `((?:${token.pattern})${token.modifier})`;
              } else {
                route += `(${token.pattern})${token.modifier}`;
              }
            }
          } else {
            route += `(?:${prefix}${suffix})${token.modifier}`;
          }
        }
      }
      if (end) {
        if (!strict)
          route += `${delimiterRe}?`;
        route += !options.endsWith ? "$" : `(?=${endsWithRe})`;
      } else {
        const endToken = tokens[tokens.length - 1];
        const isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += `(?:${delimiterRe}(?=${endsWithRe}))?`;
        }
        if (!isEndDelimited) {
          route += `(?=${delimiterRe}|${endsWithRe})`;
        }
      }
      return new RegExp(route, flags(options));
    }
    function toRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.PathToRegexpUtil = {
      toRegexp,
      compile,
      parse,
      match
    };
  }
});
var require_base = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/error/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayHttpError = exports.MidwayError = exports.registerErrorCode = void 0;
    var http_1 = __require2("http");
    var codeGroup = /* @__PURE__ */ new Set();
    function registerErrorCode(errorGroup, errorCodeMapping) {
      if (codeGroup.has(errorGroup)) {
        throw new MidwayError(`Error group ${errorGroup} is duplicated, please check before adding.`);
      } else {
        codeGroup.add(errorGroup);
      }
      const newCodeEnum = {};
      for (const errKey in errorCodeMapping) {
        newCodeEnum[errKey] = errorGroup.toUpperCase() + "_" + String(errorCodeMapping[errKey]).toUpperCase();
      }
      return newCodeEnum;
    }
    exports.registerErrorCode = registerErrorCode;
    var MidwayError = class extends Error {
      constructor(message, code, options) {
        super(message);
        if (!code || typeof code === "object") {
          options = code;
          code = "MIDWAY_10000";
        }
        this.name = this.constructor.name;
        this.code = code;
        this.cause = options === null || options === void 0 ? void 0 : options.cause;
      }
    };
    exports.MidwayError = MidwayError;
    var MidwayHttpError = class extends MidwayError {
      constructor(resOrMessage, status, code, options) {
        super(resOrMessage ? typeof resOrMessage === "string" ? resOrMessage : resOrMessage.message : http_1.STATUS_CODES[status], code !== null && code !== void 0 ? code : String(status), options);
        if (resOrMessage && resOrMessage["stack"]) {
          this.stack = resOrMessage["stack"];
        }
        this.status = status;
      }
    };
    exports.MidwayHttpError = MidwayHttpError;
  }
});
var require_http = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/error/http.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.httpError = exports.GatewayTimeoutError = exports.ServiceUnavailableError = exports.BadGatewayError = exports.NotImplementedError = exports.InternalServerErrorError = exports.TooManyRequestsError = exports.UnprocessableEntityError = exports.UnsupportedMediaTypeError = exports.PayloadTooLargeError = exports.GoneError = exports.ConflictError = exports.RequestTimeoutError = exports.NotAcceptableError = exports.ForbiddenError = exports.NotFoundError = exports.UnauthorizedError = exports.BadRequestError = exports.HttpStatus = void 0;
    var base_1 = require_base();
    var HttpStatus;
    (function(HttpStatus2) {
      HttpStatus2[HttpStatus2["CONTINUE"] = 100] = "CONTINUE";
      HttpStatus2[HttpStatus2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
      HttpStatus2[HttpStatus2["PROCESSING"] = 102] = "PROCESSING";
      HttpStatus2[HttpStatus2["EARLYHINTS"] = 103] = "EARLYHINTS";
      HttpStatus2[HttpStatus2["OK"] = 200] = "OK";
      HttpStatus2[HttpStatus2["CREATED"] = 201] = "CREATED";
      HttpStatus2[HttpStatus2["ACCEPTED"] = 202] = "ACCEPTED";
      HttpStatus2[HttpStatus2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
      HttpStatus2[HttpStatus2["NO_CONTENT"] = 204] = "NO_CONTENT";
      HttpStatus2[HttpStatus2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
      HttpStatus2[HttpStatus2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
      HttpStatus2[HttpStatus2["AMBIGUOUS"] = 300] = "AMBIGUOUS";
      HttpStatus2[HttpStatus2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
      HttpStatus2[HttpStatus2["FOUND"] = 302] = "FOUND";
      HttpStatus2[HttpStatus2["SEE_OTHER"] = 303] = "SEE_OTHER";
      HttpStatus2[HttpStatus2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
      HttpStatus2[HttpStatus2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
      HttpStatus2[HttpStatus2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
      HttpStatus2[HttpStatus2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
      HttpStatus2[HttpStatus2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
      HttpStatus2[HttpStatus2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
      HttpStatus2[HttpStatus2["FORBIDDEN"] = 403] = "FORBIDDEN";
      HttpStatus2[HttpStatus2["NOT_FOUND"] = 404] = "NOT_FOUND";
      HttpStatus2[HttpStatus2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
      HttpStatus2[HttpStatus2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
      HttpStatus2[HttpStatus2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
      HttpStatus2[HttpStatus2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
      HttpStatus2[HttpStatus2["CONFLICT"] = 409] = "CONFLICT";
      HttpStatus2[HttpStatus2["GONE"] = 410] = "GONE";
      HttpStatus2[HttpStatus2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
      HttpStatus2[HttpStatus2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
      HttpStatus2[HttpStatus2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
      HttpStatus2[HttpStatus2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
      HttpStatus2[HttpStatus2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
      HttpStatus2[HttpStatus2["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
      HttpStatus2[HttpStatus2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
      HttpStatus2[HttpStatus2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
      HttpStatus2[HttpStatus2["MISDIRECTED"] = 421] = "MISDIRECTED";
      HttpStatus2[HttpStatus2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
      HttpStatus2[HttpStatus2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
      HttpStatus2[HttpStatus2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
      HttpStatus2[HttpStatus2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
      HttpStatus2[HttpStatus2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
      HttpStatus2[HttpStatus2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
      HttpStatus2[HttpStatus2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
      HttpStatus2[HttpStatus2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
      HttpStatus2[HttpStatus2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
      HttpStatus2[HttpStatus2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    })(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));
    var BadRequestError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.BAD_REQUEST);
      }
    };
    exports.BadRequestError = BadRequestError;
    var UnauthorizedError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.UNAUTHORIZED);
      }
    };
    exports.UnauthorizedError = UnauthorizedError;
    var NotFoundError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.NOT_FOUND);
      }
    };
    exports.NotFoundError = NotFoundError;
    var ForbiddenError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.FORBIDDEN);
      }
    };
    exports.ForbiddenError = ForbiddenError;
    var NotAcceptableError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.NOT_ACCEPTABLE);
      }
    };
    exports.NotAcceptableError = NotAcceptableError;
    var RequestTimeoutError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.REQUEST_TIMEOUT);
      }
    };
    exports.RequestTimeoutError = RequestTimeoutError;
    var ConflictError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.CONFLICT);
      }
    };
    exports.ConflictError = ConflictError;
    var GoneError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.GONE);
      }
    };
    exports.GoneError = GoneError;
    var PayloadTooLargeError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.PAYLOAD_TOO_LARGE);
      }
    };
    exports.PayloadTooLargeError = PayloadTooLargeError;
    var UnsupportedMediaTypeError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
      }
    };
    exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
    var UnprocessableEntityError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.UNPROCESSABLE_ENTITY);
      }
    };
    exports.UnprocessableEntityError = UnprocessableEntityError;
    var TooManyRequestsError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.TOO_MANY_REQUESTS);
      }
    };
    exports.TooManyRequestsError = TooManyRequestsError;
    var InternalServerErrorError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.INTERNAL_SERVER_ERROR);
      }
    };
    exports.InternalServerErrorError = InternalServerErrorError;
    var NotImplementedError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.NOT_IMPLEMENTED);
      }
    };
    exports.NotImplementedError = NotImplementedError;
    var BadGatewayError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.BAD_GATEWAY);
      }
    };
    exports.BadGatewayError = BadGatewayError;
    var ServiceUnavailableError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.SERVICE_UNAVAILABLE);
      }
    };
    exports.ServiceUnavailableError = ServiceUnavailableError;
    var GatewayTimeoutError = class extends base_1.MidwayHttpError {
      constructor(resOrMessage) {
        super(resOrMessage, HttpStatus.GATEWAY_TIMEOUT);
      }
    };
    exports.GatewayTimeoutError = GatewayTimeoutError;
    exports.httpError = {
      BadRequestError,
      UnauthorizedError,
      NotFoundError,
      ForbiddenError,
      NotAcceptableError,
      RequestTimeoutError,
      ConflictError,
      GoneError,
      PayloadTooLargeError,
      UnsupportedMediaTypeError,
      UnprocessableEntityError,
      TooManyRequestsError,
      InternalServerErrorError,
      NotImplementedError,
      BadGatewayError,
      ServiceUnavailableError,
      GatewayTimeoutError
    };
  }
});
var require_framework = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/error/framework.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayEmptyValueError = exports.MidwayInvalidConfigPropertyError = exports.MidwayMainFrameworkMissingError = exports.MidwayCodeInvokeTimeoutError = exports.MidwayInvokeForbiddenError = exports.MidwayRetryExceededMaxTimesError = exports.MidwayDuplicateControllerOptionsError = exports.MidwayDuplicateClassNameError = exports.MidwayInconsistentVersionError = exports.MidwayUtilHttpClientTimeoutError = exports.MidwayMissingImportComponentError = exports.MidwaySingletonInjectRequestError = exports.MidwayUseWrongMethodError = exports.MidwayDuplicateRouteError = exports.MidwayResolverMissingError = exports.MidwayInvalidConfigError = exports.MidwayConfigMissingError = exports.MidwayFeatureNotImplementedError = exports.MidwayFeatureNoLongerSupportedError = exports.MidwayDefinitionNotFoundError = exports.MidwayParameterError = exports.MidwayCommonError = exports.FrameworkErrorEnum = void 0;
    var base_1 = require_base();
    exports.FrameworkErrorEnum = (0, base_1.registerErrorCode)("midway", {
      UNKNOWN: 1e4,
      COMMON: 10001,
      PARAM_TYPE: 10002,
      DEFINITION_NOT_FOUND: 10003,
      FEATURE_NO_LONGER_SUPPORTED: 10004,
      FEATURE_NOT_IMPLEMENTED: 10004,
      MISSING_CONFIG: 10006,
      MISSING_RESOLVER: 10007,
      DUPLICATE_ROUTER: 10008,
      USE_WRONG_METHOD: 10009,
      SINGLETON_INJECT_REQUEST: 10010,
      MISSING_IMPORTS: 10011,
      UTIL_HTTP_TIMEOUT: 10012,
      INCONSISTENT_VERSION: 10013,
      INVALID_CONFIG: 10014,
      DUPLICATE_CLASS_NAME: 10015,
      DUPLICATE_CONTROLLER_PREFIX_OPTIONS: 10016,
      RETRY_OVER_MAX_TIME: 10017,
      INVOKE_METHOD_FORBIDDEN: 10018,
      CODE_INVOKE_TIMEOUT: 10019,
      MAIN_FRAMEWORK_MISSING: 10020,
      INVALID_CONFIG_PROPERTY: 10021,
      EMPTY_VALUE: 10022
    });
    var MidwayCommonError = class extends base_1.MidwayError {
      constructor(message) {
        super(message, exports.FrameworkErrorEnum.COMMON);
      }
    };
    exports.MidwayCommonError = MidwayCommonError;
    var MidwayParameterError = class extends base_1.MidwayError {
      constructor(message) {
        super(message !== null && message !== void 0 ? message : "Parameter type not match", exports.FrameworkErrorEnum.PARAM_TYPE);
      }
    };
    exports.MidwayParameterError = MidwayParameterError;
    var MidwayDefinitionNotFoundError = class _MidwayDefinitionNotFoundError extends base_1.MidwayError {
      static isClosePrototypeOf(ins) {
        return ins ? ins[_MidwayDefinitionNotFoundError.type] === _MidwayDefinitionNotFoundError.type : false;
      }
      constructor(identifier) {
        super(`${identifier} is not valid in current context`, exports.FrameworkErrorEnum.DEFINITION_NOT_FOUND);
        this[_MidwayDefinitionNotFoundError.type] = _MidwayDefinitionNotFoundError.type;
      }
      updateErrorMsg(className) {
        const identifier = this.message.split(" is not valid in current context")[0];
        this.message = `${identifier} in class ${className} is not valid in current context`;
      }
    };
    exports.MidwayDefinitionNotFoundError = MidwayDefinitionNotFoundError;
    MidwayDefinitionNotFoundError.type = Symbol.for("#NotFoundError");
    var MidwayFeatureNoLongerSupportedError = class extends base_1.MidwayError {
      constructor(message) {
        super("This feature no longer supported \n" + message, exports.FrameworkErrorEnum.FEATURE_NO_LONGER_SUPPORTED);
      }
    };
    exports.MidwayFeatureNoLongerSupportedError = MidwayFeatureNoLongerSupportedError;
    var MidwayFeatureNotImplementedError = class extends base_1.MidwayError {
      constructor(message) {
        super("This feature not implemented \n" + message, exports.FrameworkErrorEnum.FEATURE_NOT_IMPLEMENTED);
      }
    };
    exports.MidwayFeatureNotImplementedError = MidwayFeatureNotImplementedError;
    var MidwayConfigMissingError = class extends base_1.MidwayError {
      constructor(configKey) {
        super(`Can't found config key "${configKey}" in your config, please set it first`, exports.FrameworkErrorEnum.MISSING_CONFIG);
      }
    };
    exports.MidwayConfigMissingError = MidwayConfigMissingError;
    var MidwayInvalidConfigError = class extends base_1.MidwayError {
      constructor(message) {
        super("Invalid config file \n" + message, exports.FrameworkErrorEnum.INVALID_CONFIG);
      }
    };
    exports.MidwayInvalidConfigError = MidwayInvalidConfigError;
    var MidwayResolverMissingError = class extends base_1.MidwayError {
      constructor(type) {
        super(`Resolver "${type}" is missing.`, exports.FrameworkErrorEnum.MISSING_RESOLVER);
      }
    };
    exports.MidwayResolverMissingError = MidwayResolverMissingError;
    var MidwayDuplicateRouteError = class extends base_1.MidwayError {
      constructor(routerUrl, existPos, existPosOther) {
        super(`Duplicate router "${routerUrl}" at "${existPos}" and "${existPosOther}"`, exports.FrameworkErrorEnum.DUPLICATE_ROUTER);
      }
    };
    exports.MidwayDuplicateRouteError = MidwayDuplicateRouteError;
    var MidwayUseWrongMethodError = class extends base_1.MidwayError {
      constructor(wrongMethod, replacedMethod, describeKey) {
        const text = describeKey ? `${describeKey} not valid by ${wrongMethod}, Use ${replacedMethod} instead!` : `You should not invoked by ${wrongMethod}, Use ${replacedMethod} instead!`;
        super(text, exports.FrameworkErrorEnum.USE_WRONG_METHOD);
      }
    };
    exports.MidwayUseWrongMethodError = MidwayUseWrongMethodError;
    var MidwaySingletonInjectRequestError = class extends base_1.MidwayError {
      constructor(singletonScopeName, requestScopeName) {
        const text = `${singletonScopeName} with singleton scope can't implicitly inject ${requestScopeName} with request scope directly, please add "@Scope(ScopeEnum.Request, { allowDowngrade: true })" in ${requestScopeName} or use "ctx.requestContext.getAsync(${requestScopeName})".`;
        super(text, exports.FrameworkErrorEnum.SINGLETON_INJECT_REQUEST);
      }
    };
    exports.MidwaySingletonInjectRequestError = MidwaySingletonInjectRequestError;
    var MidwayMissingImportComponentError = class extends base_1.MidwayError {
      constructor(originName) {
        const text = `"${originName}" can't inject and maybe forgot add "{imports: [***]}" in @Configuration.`;
        super(text, exports.FrameworkErrorEnum.MISSING_IMPORTS);
      }
    };
    exports.MidwayMissingImportComponentError = MidwayMissingImportComponentError;
    var MidwayUtilHttpClientTimeoutError = class extends base_1.MidwayError {
      constructor(message) {
        super(message, exports.FrameworkErrorEnum.UTIL_HTTP_TIMEOUT);
      }
    };
    exports.MidwayUtilHttpClientTimeoutError = MidwayUtilHttpClientTimeoutError;
    var MidwayInconsistentVersionError = class extends base_1.MidwayError {
      constructor() {
        const text = 'We find a latest dependency package installed, please remove the lock file and use "npm update" to upgrade all dependencies first.';
        super(text, exports.FrameworkErrorEnum.INCONSISTENT_VERSION);
      }
    };
    exports.MidwayInconsistentVersionError = MidwayInconsistentVersionError;
    var MidwayDuplicateClassNameError = class extends base_1.MidwayError {
      constructor(className, existPath, existPathOther) {
        super(`"${className}" duplicated between "${existPath}" and "${existPathOther}"`, exports.FrameworkErrorEnum.DUPLICATE_CLASS_NAME);
      }
    };
    exports.MidwayDuplicateClassNameError = MidwayDuplicateClassNameError;
    var MidwayDuplicateControllerOptionsError = class extends base_1.MidwayError {
      constructor(prefix, existController, existControllerOther) {
        super(`"Prefix ${prefix}" with duplicated controller options between "${existController}" and "${existControllerOther}"`, exports.FrameworkErrorEnum.DUPLICATE_CONTROLLER_PREFIX_OPTIONS);
      }
    };
    exports.MidwayDuplicateControllerOptionsError = MidwayDuplicateControllerOptionsError;
    var MidwayRetryExceededMaxTimesError = class extends base_1.MidwayError {
      constructor(methodName, times, err) {
        super(`Invoke "${methodName}" retries exceeded the maximum number of times(${times}), error: ${err.message}`, exports.FrameworkErrorEnum.RETRY_OVER_MAX_TIME, {
          cause: err
        });
      }
    };
    exports.MidwayRetryExceededMaxTimesError = MidwayRetryExceededMaxTimesError;
    var MidwayInvokeForbiddenError = class extends base_1.MidwayError {
      constructor(methodName, module2) {
        super(`Invoke "${module2 ? module2.name : "unknown"}.${methodName}" is forbidden.`, exports.FrameworkErrorEnum.INVOKE_METHOD_FORBIDDEN);
      }
    };
    exports.MidwayInvokeForbiddenError = MidwayInvokeForbiddenError;
    var MidwayCodeInvokeTimeoutError = class extends base_1.MidwayError {
      constructor(methodName, timeout) {
        super(`Invoke "${methodName}" running timeout(${timeout}ms)`, exports.FrameworkErrorEnum.CODE_INVOKE_TIMEOUT);
      }
    };
    exports.MidwayCodeInvokeTimeoutError = MidwayCodeInvokeTimeoutError;
    var MidwayMainFrameworkMissingError = class extends base_1.MidwayError {
      constructor() {
        super("Main framework missing, please check your configuration.", exports.FrameworkErrorEnum.MAIN_FRAMEWORK_MISSING);
      }
    };
    exports.MidwayMainFrameworkMissingError = MidwayMainFrameworkMissingError;
    var MidwayInvalidConfigPropertyError = class extends base_1.MidwayError {
      constructor(propertyName, allowTypes) {
        super(`Invalid config property "${propertyName}", ${allowTypes ? `only ${allowTypes.join(",")} can be set` : "please check your configuration"}.`, exports.FrameworkErrorEnum.INVALID_CONFIG_PROPERTY);
      }
    };
    exports.MidwayInvalidConfigPropertyError = MidwayInvalidConfigPropertyError;
    var MidwayEmptyValueError = class extends base_1.MidwayError {
      constructor(msg) {
        super(msg !== null && msg !== void 0 ? msg : "There is an empty value got and it is not allowed.", exports.FrameworkErrorEnum.EMPTY_VALUE);
      }
    };
    exports.MidwayEmptyValueError = MidwayEmptyValueError;
  }
});
var require_error = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/error/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.httpError = exports.HttpStatus = void 0;
    __exportStar(require_base(), exports);
    var http_1 = require_http();
    Object.defineProperty(exports, "HttpStatus", { enumerable: true, get: function() {
      return http_1.HttpStatus;
    } });
    Object.defineProperty(exports, "httpError", { enumerable: true, get: function() {
      return http_1.httpError;
    } });
    __exportStar(require_framework(), exports);
  }
});
var require_uuid = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomUUID = void 0;
    var crypto2 = __require2("crypto");
    var rnds8Pool = new Uint8Array(256);
    var poolPtr = rnds8Pool.length;
    function rng() {
      if (poolPtr > rnds8Pool.length - 16) {
        crypto2.randomFillSync(rnds8Pool);
        poolPtr = 0;
      }
      return rnds8Pool.slice(poolPtr, poolPtr += 16);
    }
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function unsafeStringify(arr, offset = 0) {
      return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    }
    function randomUUID(force) {
      if (!force && crypto2["randomUUID"]) {
        return crypto2["randomUUID"]();
      }
      const rnds = rng();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      return unsafeStringify(rnds);
    }
    exports.randomUUID = randomUUID;
  }
});
var require_flatted = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/flatted.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.safeStringify = exports.safeParse = void 0;
    var { parse: $parse, stringify: $stringify } = JSON;
    var { keys } = Object;
    var Primitive = String;
    var primitive = "string";
    var ignore = {};
    var object = "object";
    var noop = (_, value) => value;
    var primitives = (value) => value instanceof Primitive ? Primitive(value) : value;
    var Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
    var revive = (input, parsed, output, $) => {
      const lazy = [];
      for (let ke = keys(output), { length } = ke, y = 0; y < length; y++) {
        const k = ke[y];
        const value = output[k];
        if (value instanceof Primitive) {
          const tmp = input[value];
          if (typeof tmp === object && !parsed.has(tmp)) {
            parsed.add(tmp);
            output[k] = ignore;
            lazy.push({ k, a: [input, parsed, tmp, $] });
          } else
            output[k] = $.call(output, k, tmp);
        } else if (output[k] !== ignore)
          output[k] = $.call(output, k, value);
      }
      for (let { length } = lazy, i = 0; i < length; i++) {
        const { k, a } = lazy[i];
        output[k] = $.call(output, k, revive.apply(null, a));
      }
      return output;
    };
    var set = (known, input, value) => {
      const index = Primitive(input.push(value) - 1);
      known.set(value, index);
      return index;
    };
    function safeParse(text, reviver) {
      const input = $parse(text, Primitives).map(primitives);
      const value = input[0];
      const $ = reviver || noop;
      const tmp = typeof value === object && value ? revive(input, /* @__PURE__ */ new Set(), value, $) : value;
      return $.call({ "": tmp }, "", tmp);
    }
    exports.safeParse = safeParse;
    function safeStringify(value, replacer, space) {
      const $ = replacer && typeof replacer === object ? (k, v) => k === "" || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
      const known = /* @__PURE__ */ new Map();
      const input = [];
      const output = [];
      let i = +set(known, input, $.call({ "": value }, "", value));
      let firstRun = !i;
      while (i < input.length) {
        firstRun = true;
        output[i] = $stringify(input[i++], replace, space);
      }
      return "[" + output.join(",") + "]";
      function replace(key, value2) {
        if (firstRun) {
          firstRun = !firstRun;
          return value2;
        }
        const after = $.call(this, key, value2);
        switch (typeof after) {
          case object:
            if (after === null)
              return after;
          case primitive:
            return known.get(after) || set(known, input, after);
        }
        return after;
      }
    }
    exports.safeStringify = safeStringify;
  }
});
var require_util = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = exports.createPromiseTimeoutInvokeChain = exports.isTypeScriptEnvironment = exports.toAsyncFunction = exports.merge = exports.generateRandomId = exports.getParamNames = exports.sleep = exports.wrapAsync = exports.isIncludeProperty = exports.wrapMiddleware = exports.pathMatching = exports.toPathMatch = exports.transformRequestObjectByType = exports.deprecatedOutput = exports.getCurrentDateString = exports.delegateTargetProperties = exports.delegateTargetMethod = exports.delegateTargetAllPrototypeMethod = exports.delegateTargetPrototypeMethod = exports.joinURLPath = exports.getUserHome = exports.parsePrefix = exports.safelyGet = exports.loadModule = exports.safeRequire = exports.getCurrentEnvironment = exports.isDevelopmentEnvironment = void 0;
    var path_1 = __require2("path");
    var fs_1 = __require2("fs");
    var util_1 = __require2("util");
    var transformer = require_cjs();
    var pathToRegexp_1 = require_pathToRegexp();
    var error_1 = require_error();
    var camelCase_1 = require_camelCase();
    var uuid_1 = require_uuid();
    var flatted_1 = require_flatted();
    var crypto2 = __require2("crypto");
    var types_1 = require_types();
    var url_1 = __require2("url");
    var debug = (0, util_1.debuglog)("midway:debug");
    var isDevelopmentEnvironment = (env) => {
      return ["local", "test", "unittest"].includes(env);
    };
    exports.isDevelopmentEnvironment = isDevelopmentEnvironment;
    var getCurrentEnvironment = () => {
      return process.env["MIDWAY_SERVER_ENV"] || "development";
    };
    exports.getCurrentEnvironment = getCurrentEnvironment;
    var safeRequire = (p, enabledCache = true) => {
      if (p.startsWith(`.${path_1.sep}`) || p.startsWith(`..${path_1.sep}`)) {
        p = (0, path_1.resolve)((0, path_1.dirname)(module.parent.filename), p);
      }
      try {
        if (enabledCache) {
          return __require2(p);
        } else {
          const content = (0, fs_1.readFileSync)(p, {
            encoding: "utf-8"
          });
          return JSON.parse(content);
        }
      } catch (err) {
        debug(`[core]: SafeRequire Warning

${err.message}
`);
        return void 0;
      }
    };
    exports.safeRequire = safeRequire;
    var innerLoadModuleCache = {};
    var loadModule = async (p, options = {}) => {
      var _a, _b, _c;
      options.enableCache = (_a = options.enableCache) !== null && _a !== void 0 ? _a : true;
      options.safeLoad = (_b = options.safeLoad) !== null && _b !== void 0 ? _b : false;
      options.loadMode = (_c = options.loadMode) !== null && _c !== void 0 ? _c : "commonjs";
      if (p.startsWith(`.${path_1.sep}`) || p.startsWith(`..${path_1.sep}`)) {
        p = (0, path_1.resolve)((0, path_1.dirname)(module.parent.filename), p);
      }
      debug(`[core]: load module ${p}, cache: ${options.enableCache}, mode: ${options.loadMode}, safeLoad: ${options.safeLoad}`);
      try {
        if (options.enableCache) {
          if (options.loadMode === "commonjs") {
            return __require2(p);
          } else {
            if (p.endsWith(".json")) {
              if (!innerLoadModuleCache[p]) {
                const content = (0, fs_1.readFileSync)(p, {
                  encoding: "utf-8"
                });
                innerLoadModuleCache[p] = JSON.parse(content);
              }
              return innerLoadModuleCache[p];
            } else {
              return await import((0, url_1.pathToFileURL)(p).href);
            }
          }
        } else {
          const content = (0, fs_1.readFileSync)(p, {
            encoding: "utf-8"
          });
          return JSON.parse(content);
        }
      } catch (err) {
        if (!options.safeLoad) {
          throw err;
        } else {
          debug(`[core]: SafeLoadModule Warning

${err.message}
`);
          return void 0;
        }
      }
    };
    exports.loadModule = loadModule;
    function safelyGet(list, obj) {
      if (arguments.length === 1) {
        return (_obj) => safelyGet(list, _obj);
      }
      if (typeof obj === "undefined" || typeof obj !== "object" || obj === null) {
        return void 0;
      }
      const pathArrValue = typeof list === "string" ? list.split(".") : list;
      let willReturn = obj;
      for (const key of pathArrValue) {
        if (typeof willReturn === "undefined" || willReturn === null) {
          return void 0;
        } else if (typeof willReturn !== "object") {
          return void 0;
        }
        willReturn = willReturn[key];
      }
      return willReturn;
    }
    exports.safelyGet = safelyGet;
    function parsePrefix(provideId) {
      if (provideId.includes("@")) {
        return provideId.slice(1);
      }
      return provideId;
    }
    exports.parsePrefix = parsePrefix;
    function getUserHome() {
      return process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];
    }
    exports.getUserHome = getUserHome;
    function joinURLPath(...strArray) {
      strArray = strArray.filter((item) => !!item);
      if (strArray.length === 0) {
        return "";
      }
      let p = path_1.posix.join(...strArray);
      p = p.replace(/\/+$/, "");
      if (!/^\//.test(p)) {
        p = "/" + p;
      }
      return p;
    }
    exports.joinURLPath = joinURLPath;
    function delegateTargetPrototypeMethod(derivedCtor, constructors, otherMethods) {
      constructors.forEach((baseCtor) => {
        if (baseCtor.prototype) {
          Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            if (name !== "constructor" && !/^_/.test(name) && !derivedCtor.prototype[name]) {
              derivedCtor.prototype[name] = function(...args) {
                return this.instance[name](...args);
              };
            }
          });
        }
      });
      if (otherMethods) {
        delegateTargetMethod(derivedCtor, otherMethods);
      }
    }
    exports.delegateTargetPrototypeMethod = delegateTargetPrototypeMethod;
    function delegateTargetAllPrototypeMethod(derivedCtor, constructor) {
      do {
        delegateTargetPrototypeMethod(derivedCtor, [constructor]);
        constructor = Object.getPrototypeOf(constructor);
      } while (constructor);
    }
    exports.delegateTargetAllPrototypeMethod = delegateTargetAllPrototypeMethod;
    function delegateTargetMethod(derivedCtor, methods) {
      methods.forEach((name) => {
        derivedCtor.prototype[name] = function(...args) {
          return this.instance[name](...args);
        };
      });
    }
    exports.delegateTargetMethod = delegateTargetMethod;
    function delegateTargetProperties(derivedCtor, properties) {
      properties.forEach((name) => {
        Object.defineProperty(derivedCtor.prototype, name, {
          get() {
            return this.instance[name];
          }
        });
      });
    }
    exports.delegateTargetProperties = delegateTargetProperties;
    var getCurrentDateString = (timestamp = Date.now()) => {
      const d = new Date(timestamp);
      return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    };
    exports.getCurrentDateString = getCurrentDateString;
    var deprecatedOutput = (message) => {
      console.warn("DeprecationWarning: " + message);
    };
    exports.deprecatedOutput = deprecatedOutput;
    var transformRequestObjectByType = (originValue, targetType) => {
      if (targetType === void 0 || targetType === null || targetType === Object || typeof originValue === "undefined") {
        return originValue;
      }
      switch (targetType) {
        case Number:
          return Number(originValue);
        case String:
          return String(originValue);
        case Boolean:
          if (originValue === "0" || originValue === "false") {
            return false;
          }
          return Boolean(originValue);
        default:
          if (originValue instanceof targetType) {
            return originValue;
          } else {
            const transformToInstance = transformer["plainToClass"] || transformer["plainToInstance"];
            return transformToInstance(targetType, originValue);
          }
      }
    };
    exports.transformRequestObjectByType = transformRequestObjectByType;
    function toPathMatch(pattern) {
      if (typeof pattern === "boolean") {
        return (ctx) => pattern;
      }
      if (typeof pattern === "string") {
        const reg = pathToRegexp_1.PathToRegexpUtil.toRegexp(pattern.replace("*", "(.*)"));
        if (reg.global)
          reg.lastIndex = 0;
        return (ctx) => reg.test(ctx.path);
      }
      if (pattern instanceof RegExp) {
        return (ctx) => {
          if (pattern.global)
            pattern.lastIndex = 0;
          return pattern.test(ctx.path);
        };
      }
      if (typeof pattern === "function")
        return pattern;
      if (Array.isArray(pattern)) {
        const matchs = pattern.map((item) => toPathMatch(item));
        return (ctx) => matchs.some((match) => match(ctx));
      }
      throw new error_1.MidwayCommonError("match/ignore pattern must be RegExp, Array or String, but got " + pattern);
    }
    exports.toPathMatch = toPathMatch;
    function pathMatching(options) {
      options = options || {};
      if (options.match && options.ignore)
        throw new error_1.MidwayCommonError("options.match and options.ignore can not both present");
      if (!options.match && !options.ignore)
        return () => true;
      if (options.match && !Array.isArray(options.match)) {
        options.match = [options.match];
      }
      if (options.ignore && !Array.isArray(options.ignore)) {
        options.ignore = [options.ignore];
      }
      const createMatch = (ignoreMatcherArr) => {
        const matchedArr = ignoreMatcherArr.map((item) => {
          if (options.thisResolver) {
            return toPathMatch(item).bind(options.thisResolver);
          }
          return toPathMatch(item);
        });
        return (ctx) => {
          for (let i = 0; i < matchedArr.length; i++) {
            const matched = matchedArr[i](ctx);
            if (matched) {
              return true;
            }
          }
          return false;
        };
      };
      const matchFn = options.match ? createMatch(options.match) : createMatch(options.ignore);
      return function pathMatch(ctx) {
        const matched = matchFn(ctx);
        return options.match ? matched : !matched;
      };
    }
    exports.pathMatching = pathMatching;
    function wrapMiddleware(mw, options) {
      if (options.enable === false)
        return null;
      if (!options.match && !options.ignore)
        return mw;
      const match = pathMatching(options);
      const fn = (ctx, next) => {
        if (!match(ctx))
          return next();
        return mw(ctx, next);
      };
      fn._name = mw._name + "middlewareWrapper";
      return fn;
    }
    exports.wrapMiddleware = wrapMiddleware;
    function isOwnPropertyWritable(obj, prop) {
      if (obj == null)
        return false;
      const type = typeof obj;
      if (type !== "object" && type !== "function")
        return false;
      return !!Object.getOwnPropertyDescriptor(obj, prop);
    }
    function isIncludeProperty(obj, prop) {
      while (obj) {
        if (isOwnPropertyWritable(obj, prop))
          return true;
        obj = Object.getPrototypeOf(obj);
      }
      return false;
    }
    exports.isIncludeProperty = isIncludeProperty;
    function wrapAsync(handler) {
      return (...args) => {
        if (typeof args[args.length - 1] === "function") {
          const callback = args.pop();
          if (handler.constructor.name !== "AsyncFunction") {
            const err = new TypeError("Must be an AsyncFunction");
            return callback(err);
          }
          return handler.apply(handler, args).then((result) => {
            callback(null, result);
          }, (err) => {
            callback(err);
          });
        } else {
          return handler.apply(handler, args);
        }
      };
    }
    exports.wrapAsync = wrapAsync;
    function sleep(sleepTime = 1e3) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, sleepTime);
      });
    }
    exports.sleep = sleep;
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    function getParamNames(func) {
      const fnStr = func.toString().replace(STRIP_COMMENTS, "");
      let result = fnStr.slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")")).split(",").map((content) => {
        return content.trim().replace(/\s?=.*$/, "");
      });
      if (result.length === 1 && result[0] === "") {
        result = [];
      }
      return result;
    }
    exports.getParamNames = getParamNames;
    function generateRandomId() {
      return crypto2.randomBytes(16).toString("hex");
    }
    exports.generateRandomId = generateRandomId;
    function merge(target, src) {
      if (!target) {
        target = src;
        src = null;
      }
      if (!target) {
        return null;
      }
      if (Array.isArray(target)) {
        return target.concat(src || []);
      }
      if (typeof target === "object") {
        return Object.assign({}, target, src);
      }
      throw new Error("can not merge meta that type of " + typeof target);
    }
    exports.merge = merge;
    function toAsyncFunction(method) {
      if (types_1.Types.isAsyncFunction(method)) {
        return method;
      } else {
        return async function(...args) {
          return Promise.resolve(method.call(this, ...args));
        };
      }
    }
    exports.toAsyncFunction = toAsyncFunction;
    function isTypeScriptEnvironment() {
      const TS_MODE_PROCESS_FLAG = process.env.MIDWAY_TS_MODE;
      if ("false" === TS_MODE_PROCESS_FLAG) {
        return false;
      }
      return TS_MODE_PROCESS_FLAG === "true" || !!__require2.extensions[".ts"];
    }
    exports.isTypeScriptEnvironment = isTypeScriptEnvironment;
    async function createPromiseTimeoutInvokeChain(options) {
      var _a;
      if (!options.onSuccess) {
        options.onSuccess = async (result) => {
          return result;
        };
      }
      options.isConcurrent = (_a = options.isConcurrent) !== null && _a !== void 0 ? _a : true;
      options.promiseItems = options.promiseItems.map((item) => {
        if (item instanceof Promise) {
          return { item };
        } else {
          return item;
        }
      });
      options.promiseItems = options.promiseItems.filter((item) => {
        return item["item"] instanceof Promise;
      });
      if (options.isConcurrent) {
        const checkPromises = options.promiseItems.map((item) => {
          const timeoutPromise = new Promise((_, reject) => {
            var _a2;
            setTimeout(() => {
              var _a3;
              return reject(new error_1.MidwayCodeInvokeTimeoutError(options.methodName, (_a3 = item["timeout"]) !== null && _a3 !== void 0 ? _a3 : options.timeout));
            }, (_a2 = item["timeout"]) !== null && _a2 !== void 0 ? _a2 : options.timeout);
          });
          return Promise.race([item["item"], timeoutPromise]).then((re) => {
            return options.onSuccess(re, item["meta"]);
          }).catch((err) => {
            return options.onFail(err, item["meta"]);
          });
        });
        return Promise.all(checkPromises);
      } else {
        const results = [];
        for (const item of options.promiseItems) {
          const timeoutPromise = new Promise((_, reject) => {
            var _a2;
            setTimeout(() => {
              var _a3;
              return reject(new error_1.MidwayCodeInvokeTimeoutError(options.methodName, (_a3 = item["timeout"]) !== null && _a3 !== void 0 ? _a3 : options.timeout));
            }, (_a2 = item["timeout"]) !== null && _a2 !== void 0 ? _a2 : options.timeout);
          });
          try {
            const result = await Promise.race([item["item"], timeoutPromise]).then((re) => {
              return options.onSuccess(re, item["meta"]);
            });
            results.push(result);
          } catch (error) {
            results.push(options.onFail(error, item["meta"]));
            break;
          }
        }
        return results;
      }
    }
    exports.createPromiseTimeoutInvokeChain = createPromiseTimeoutInvokeChain;
    exports.Utils = {
      sleep,
      getParamNames,
      camelCase: camelCase_1.camelCase,
      pascalCase: camelCase_1.pascalCase,
      randomUUID: uuid_1.randomUUID,
      generateRandomId,
      toAsyncFunction,
      safeStringify: flatted_1.safeStringify,
      safeParse: flatted_1.safeParse,
      isTypeScriptEnvironment
    };
  }
});
var require_pathFileUtil = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/pathFileUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getModuleRequirePathList = exports.PathFileUtil = exports.getFileContentSync = exports.isPathEqual = exports.isPath = void 0;
    var path_1 = __require2("path");
    var fs_1 = __require2("fs");
    function isPath(p) {
      if (/(^[\.\/])|:|\\/.test(p)) {
        return true;
      }
      return false;
    }
    exports.isPath = isPath;
    function isPathEqual(one, two) {
      if (!one || !two) {
        return false;
      }
      const ext = (0, path_1.extname)(one);
      return one.replace(ext, "") === two;
    }
    exports.isPathEqual = isPathEqual;
    function getFileContentSync(filePath, encoding) {
      return typeof filePath === "string" ? (0, fs_1.readFileSync)(filePath, {
        encoding
      }) : filePath;
    }
    exports.getFileContentSync = getFileContentSync;
    exports.PathFileUtil = {
      isPath,
      isPathEqual,
      getFileContentSync
    };
    function getModuleRequirePathList(moduleName) {
      const moduleNameList = [moduleName, moduleName.replace(/\//g, "_")];
      let moduleNameMap = {};
      const modulePathList = [];
      Object.keys(__require2.cache || {}).forEach((moduleName2) => {
        let moduleIndex = -1;
        for (const moduleName3 of moduleNameList) {
          const index = moduleName3.indexOf(moduleName3);
          if (index !== -1) {
            moduleIndex = index;
            break;
          }
        }
        if (moduleIndex === -1) {
          return;
        }
        const modulePath = moduleName2.slice(0, moduleIndex);
        if (moduleNameMap[modulePath]) {
          return;
        }
        moduleNameMap[modulePath] = true;
        modulePathList.push(modulePath);
      });
      moduleNameMap = void 0;
      return modulePathList;
    }
    exports.getModuleRequirePathList = getModuleRequirePathList;
  }
});
var require_decoratorManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/decoratorManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCustomParamDecorator = exports.createCustomMethodDecorator = exports.createCustomPropertyDecorator = exports.getMethodReturnTypes = exports.getPropertyType = exports.getMethodParamTypes = exports.BaseType = exports.isProvide = exports.getProviderUUId = exports.getProviderName = exports.getProviderId = exports.saveProviderId = exports.getObjectDefinition = exports.saveObjectDefinition = exports.getPropertyInject = exports.savePropertyInject = exports.transformTypeFromTSDesign = exports.clearAllModule = exports.resetModule = exports.listModule = exports.clearBindContainer = exports.bindContainer = exports.saveModule = exports.listPreloadModule = exports.savePreloadModule = exports.getPropertyMetadata = exports.attachPropertyMetadata = exports.savePropertyMetadata = exports.listPropertyDataFromClass = exports.getPropertyDataFromClass = exports.attachPropertyDataToClass = exports.savePropertyDataToClass = exports.getClassMetadata = exports.getClassExtendedMetadata = exports.attachClassMetadata = exports.saveClassMetadata = exports.DecoratorManager = exports.INJECT_CLASS_KEY_PREFIX = exports.PRELOAD_MODULE_KEY = void 0;
    require_Reflect();
    var interface_1 = require_interface();
    var constant_1 = require_constant();
    var types_1 = require_types();
    var camelCase_1 = require_camelCase();
    var util_1 = require_util();
    var pathFileUtil_1 = require_pathFileUtil();
    var debug = __require2("util").debuglog("midway:core");
    exports.PRELOAD_MODULE_KEY = "INJECTION_PRELOAD_MODULE_KEY";
    exports.INJECT_CLASS_KEY_PREFIX = "INJECTION_CLASS_META_DATA";
    var DecoratorManager = class _DecoratorManager extends Map {
      constructor() {
        super(...arguments);
        this.injectClassKeyPrefix = exports.INJECT_CLASS_KEY_PREFIX;
        this.injectClassMethodKeyPrefix = "INJECTION_CLASS_METHOD_META_DATA";
        this.injectMethodKeyPrefix = "INJECTION_METHOD_META_DATA";
      }
      saveModule(key, module2) {
        if (this.container) {
          return this.container.saveModule(key, module2);
        }
        if (!this.has(key)) {
          this.set(key, /* @__PURE__ */ new Set());
        }
        this.get(key).add(module2);
      }
      listModule(key) {
        if (this.container) {
          return this.container.listModule(key);
        }
        return Array.from(this.get(key) || {});
      }
      resetModule(key) {
        this.set(key, /* @__PURE__ */ new Set());
      }
      bindContainer(container) {
        this.container = container;
        this.container.transformModule(this);
      }
      static getDecoratorClassKey(decoratorNameKey) {
        return decoratorNameKey.toString() + "_CLS";
      }
      static removeDecoratorClassKeySuffix(decoratorNameKey) {
        return decoratorNameKey.toString().replace("_CLS", "");
      }
      static getDecoratorMethodKey(decoratorNameKey) {
        return decoratorNameKey.toString() + "_METHOD";
      }
      static getDecoratorClsExtendedKey(decoratorNameKey) {
        return decoratorNameKey.toString() + "_EXT";
      }
      static getDecoratorClsMethodPrefix(decoratorNameKey) {
        return decoratorNameKey.toString() + "_CLS_METHOD";
      }
      static getDecoratorClsMethodKey(decoratorNameKey, methodKey) {
        return _DecoratorManager.getDecoratorClsMethodPrefix(decoratorNameKey) + ":" + methodKey.toString();
      }
      static getDecoratorMethod(decoratorNameKey, methodKey) {
        return _DecoratorManager.getDecoratorMethodKey(decoratorNameKey) + "_" + methodKey.toString();
      }
      static saveMetadata(metaKey, target, dataKey, data) {
        if (typeof target === "object" && target.constructor) {
          target = target.constructor;
        }
        let m;
        if (Reflect.hasOwnMetadata(metaKey, target)) {
          m = Reflect.getMetadata(metaKey, target);
        } else {
          m = /* @__PURE__ */ new Map();
        }
        m.set(dataKey, data);
        Reflect.defineMetadata(metaKey, m, target);
      }
      static attachMetadata(metaKey, target, dataKey, data, groupBy, groupMode = "one") {
        if (typeof target === "object" && target.constructor) {
          target = target.constructor;
        }
        let m;
        if (Reflect.hasOwnMetadata(metaKey, target)) {
          m = Reflect.getMetadata(metaKey, target);
        } else {
          m = /* @__PURE__ */ new Map();
        }
        if (!m.has(dataKey)) {
          if (groupBy) {
            m.set(dataKey, {});
          } else {
            m.set(dataKey, []);
          }
        }
        if (groupBy) {
          if (groupMode === "one") {
            m.get(dataKey)[groupBy] = data;
          } else {
            if (m.get(dataKey)[groupBy]) {
              m.get(dataKey)[groupBy].push(data);
            } else {
              m.get(dataKey)[groupBy] = [data];
            }
          }
        } else {
          m.get(dataKey).push(data);
        }
        Reflect.defineMetadata(metaKey, m, target);
      }
      static getMetadata(metaKey, target, dataKey) {
        if (typeof target === "object" && target.constructor) {
          target = target.constructor;
        }
        let m;
        if (!Reflect.hasOwnMetadata(metaKey, target)) {
          m = /* @__PURE__ */ new Map();
          Reflect.defineMetadata(metaKey, m, target);
        } else {
          m = Reflect.getMetadata(metaKey, target);
        }
        if (!dataKey) {
          return m;
        }
        return m.get(dataKey);
      }
      /**
       * save meta data to class or property
       * @param decoratorNameKey the alias name for decorator
       * @param data the data you want to store
       * @param target target class
       * @param propertyName
       */
      saveMetadata(decoratorNameKey, data, target, propertyName) {
        if (propertyName) {
          const dataKey = _DecoratorManager.getDecoratorMethod(decoratorNameKey, propertyName);
          _DecoratorManager.saveMetadata(this.injectMethodKeyPrefix, target, dataKey, data);
        } else {
          const dataKey = _DecoratorManager.getDecoratorClassKey(decoratorNameKey);
          _DecoratorManager.saveMetadata(this.injectClassKeyPrefix, target, dataKey, data);
        }
      }
      /**
       * attach data to class or property
       * @param decoratorNameKey
       * @param data
       * @param target
       * @param propertyName
       * @param groupBy
       */
      attachMetadata(decoratorNameKey, data, target, propertyName, groupBy, groupMode) {
        if (propertyName) {
          const dataKey = _DecoratorManager.getDecoratorMethod(decoratorNameKey, propertyName);
          _DecoratorManager.attachMetadata(this.injectMethodKeyPrefix, target, dataKey, data, groupBy, groupMode);
        } else {
          const dataKey = _DecoratorManager.getDecoratorClassKey(decoratorNameKey);
          _DecoratorManager.attachMetadata(this.injectClassKeyPrefix, target, dataKey, data, groupBy, groupMode);
        }
      }
      /**
       * get single data from class or property
       * @param decoratorNameKey
       * @param target
       * @param propertyName
       */
      getMetadata(decoratorNameKey, target, propertyName) {
        if (propertyName) {
          const dataKey = _DecoratorManager.getDecoratorMethod(decoratorNameKey, propertyName);
          return _DecoratorManager.getMetadata(this.injectMethodKeyPrefix, target, dataKey);
        } else {
          const dataKey = `${_DecoratorManager.getDecoratorClassKey(decoratorNameKey)}`;
          return _DecoratorManager.getMetadata(this.injectClassKeyPrefix, target, dataKey);
        }
      }
      /**
       * save property data to class
       * @param decoratorNameKey
       * @param data
       * @param target
       * @param propertyName
       */
      savePropertyDataToClass(decoratorNameKey, data, target, propertyName) {
        const dataKey = _DecoratorManager.getDecoratorClsMethodKey(decoratorNameKey, propertyName);
        _DecoratorManager.saveMetadata(this.injectClassMethodKeyPrefix, target, dataKey, data);
      }
      /**
       * attach property data to class
       * @param decoratorNameKey
       * @param data
       * @param target
       * @param propertyName
       * @param groupBy
       */
      attachPropertyDataToClass(decoratorNameKey, data, target, propertyName, groupBy) {
        const dataKey = _DecoratorManager.getDecoratorClsMethodKey(decoratorNameKey, propertyName);
        _DecoratorManager.attachMetadata(this.injectClassMethodKeyPrefix, target, dataKey, data, groupBy);
      }
      /**
       * get property data from class
       * @param decoratorNameKey
       * @param target
       * @param propertyName
       */
      getPropertyDataFromClass(decoratorNameKey, target, propertyName) {
        const dataKey = _DecoratorManager.getDecoratorClsMethodKey(decoratorNameKey, propertyName);
        return _DecoratorManager.getMetadata(this.injectClassMethodKeyPrefix, target, dataKey);
      }
      /**
       * list property data from class
       * @param decoratorNameKey
       * @param target
       */
      listPropertyDataFromClass(decoratorNameKey, target) {
        const originMap = _DecoratorManager.getMetadata(this.injectClassMethodKeyPrefix, target);
        const res = [];
        for (const [key, value] of originMap) {
          if (key.indexOf(_DecoratorManager.getDecoratorClsMethodPrefix(decoratorNameKey)) !== -1) {
            res.push(value);
          }
        }
        return res;
      }
    };
    exports.DecoratorManager = DecoratorManager;
    var manager = new DecoratorManager();
    if (typeof global === "object") {
      if (global["MIDWAY_GLOBAL_DECORATOR_MANAGER"]) {
        console.warn('DecoratorManager not singleton and please check @midwayjs/core version by "npm ls @midwayjs/core"');
        const coreModulePathList = (0, pathFileUtil_1.getModuleRequirePathList)("@midwayjs/core");
        if (coreModulePathList.length) {
          console.info("The module may be located in:");
          coreModulePathList.forEach((path, index) => {
            console.info(`${index + 1}. ${path}`);
          });
        }
        manager = global["MIDWAY_GLOBAL_DECORATOR_MANAGER"];
      } else {
        global["MIDWAY_GLOBAL_DECORATOR_MANAGER"] = manager;
      }
    }
    function saveClassMetadata(decoratorNameKey, data, target, mergeIfExist) {
      if (mergeIfExist && typeof data === "object") {
        const originData = manager.getMetadata(decoratorNameKey, target);
        if (!originData) {
          return manager.saveMetadata(decoratorNameKey, data, target);
        }
        if (Array.isArray(originData)) {
          return manager.saveMetadata(decoratorNameKey, originData.concat(data), target);
        } else {
          return manager.saveMetadata(decoratorNameKey, Object.assign(originData, data), target);
        }
      } else {
        return manager.saveMetadata(decoratorNameKey, data, target);
      }
    }
    exports.saveClassMetadata = saveClassMetadata;
    function attachClassMetadata(decoratorNameKey, data, target, groupBy, groupMode) {
      return manager.attachMetadata(decoratorNameKey, data, target, void 0, groupBy, groupMode);
    }
    exports.attachClassMetadata = attachClassMetadata;
    function getClassExtendedMetadata(decoratorNameKey, target, propertyName, useCache) {
      if (useCache === void 0) {
        useCache = true;
      }
      const extKey = DecoratorManager.getDecoratorClsExtendedKey(decoratorNameKey);
      let metadata = manager.getMetadata(extKey, target, propertyName);
      if (useCache && metadata !== void 0) {
        return metadata;
      }
      const father = Reflect.getPrototypeOf(target);
      if (father && father.constructor !== Object) {
        metadata = (0, util_1.merge)(getClassExtendedMetadata(decoratorNameKey, father, propertyName, useCache), manager.getMetadata(decoratorNameKey, target, propertyName));
      }
      manager.saveMetadata(extKey, metadata || null, target, propertyName);
      return metadata;
    }
    exports.getClassExtendedMetadata = getClassExtendedMetadata;
    function getClassMetadata(decoratorNameKey, target) {
      return manager.getMetadata(decoratorNameKey, target);
    }
    exports.getClassMetadata = getClassMetadata;
    function savePropertyDataToClass(decoratorNameKey, data, target, propertyName) {
      return manager.savePropertyDataToClass(decoratorNameKey, data, target, propertyName);
    }
    exports.savePropertyDataToClass = savePropertyDataToClass;
    function attachPropertyDataToClass(decoratorNameKey, data, target, propertyName, groupBy) {
      return manager.attachPropertyDataToClass(decoratorNameKey, data, target, propertyName, groupBy);
    }
    exports.attachPropertyDataToClass = attachPropertyDataToClass;
    function getPropertyDataFromClass(decoratorNameKey, target, propertyName) {
      return manager.getPropertyDataFromClass(decoratorNameKey, target, propertyName);
    }
    exports.getPropertyDataFromClass = getPropertyDataFromClass;
    function listPropertyDataFromClass(decoratorNameKey, target) {
      return manager.listPropertyDataFromClass(decoratorNameKey, target);
    }
    exports.listPropertyDataFromClass = listPropertyDataFromClass;
    function savePropertyMetadata(decoratorNameKey, data, target, propertyName) {
      return manager.saveMetadata(decoratorNameKey, data, target, propertyName);
    }
    exports.savePropertyMetadata = savePropertyMetadata;
    function attachPropertyMetadata(decoratorNameKey, data, target, propertyName) {
      return manager.attachMetadata(decoratorNameKey, data, target, propertyName);
    }
    exports.attachPropertyMetadata = attachPropertyMetadata;
    function getPropertyMetadata(decoratorNameKey, target, propertyName) {
      return manager.getMetadata(decoratorNameKey, target, propertyName);
    }
    exports.getPropertyMetadata = getPropertyMetadata;
    function savePreloadModule(target) {
      return saveModule(exports.PRELOAD_MODULE_KEY, target);
    }
    exports.savePreloadModule = savePreloadModule;
    function listPreloadModule() {
      return listModule(exports.PRELOAD_MODULE_KEY);
    }
    exports.listPreloadModule = listPreloadModule;
    function saveModule(decoratorNameKey, target) {
      if ((0, types_1.isClass)(target)) {
        saveProviderId(void 0, target);
      }
      return manager.saveModule(decoratorNameKey, target);
    }
    exports.saveModule = saveModule;
    function bindContainer(container) {
      return manager.bindContainer(container);
    }
    exports.bindContainer = bindContainer;
    function clearBindContainer() {
      return manager.container = null;
    }
    exports.clearBindContainer = clearBindContainer;
    function listModule(decoratorNameKey, filter) {
      const modules = manager.listModule(decoratorNameKey);
      if (filter) {
        return modules.filter(filter);
      } else {
        return modules;
      }
    }
    exports.listModule = listModule;
    function resetModule(decoratorNameKey) {
      return manager.resetModule(decoratorNameKey);
    }
    exports.resetModule = resetModule;
    function clearAllModule() {
      debug("--- clear all module here ---");
      return manager.clear();
    }
    exports.clearAllModule = clearAllModule;
    function transformTypeFromTSDesign(designFn) {
      if ((0, types_1.isNullOrUndefined)(designFn)) {
        return { name: "undefined", isBaseType: true, originDesign: designFn };
      }
      switch (designFn.name) {
        case "String":
          return { name: "string", isBaseType: true, originDesign: designFn };
        case "Number":
          return { name: "number", isBaseType: true, originDesign: designFn };
        case "Boolean":
          return { name: "boolean", isBaseType: true, originDesign: designFn };
        case "Symbol":
          return { name: "symbol", isBaseType: true, originDesign: designFn };
        case "Object":
          return { name: "object", isBaseType: true, originDesign: designFn };
        case "Function":
          return { name: "function", isBaseType: true, originDesign: designFn };
        default:
          return {
            name: designFn.name,
            isBaseType: false,
            originDesign: designFn
          };
      }
    }
    exports.transformTypeFromTSDesign = transformTypeFromTSDesign;
    function savePropertyInject(opts) {
      let identifier = opts.identifier;
      let injectMode = interface_1.InjectModeEnum.Identifier;
      if (!identifier) {
        const type = getPropertyType(opts.target, opts.targetKey);
        if (!type.isBaseType && (0, types_1.isClass)(type.originDesign) && isProvide(type.originDesign)) {
          identifier = getProviderUUId(type.originDesign);
          injectMode = interface_1.InjectModeEnum.Class;
        }
        if (!identifier) {
          identifier = opts.targetKey;
          injectMode = interface_1.InjectModeEnum.PropertyName;
        }
      }
      attachClassMetadata(constant_1.INJECT_TAG, {
        targetKey: opts.targetKey,
        value: identifier,
        args: opts.args,
        injectMode
      }, opts.target, opts.targetKey);
    }
    exports.savePropertyInject = savePropertyInject;
    function getPropertyInject(target, useCache) {
      return getClassExtendedMetadata(constant_1.INJECT_TAG, target, void 0, useCache);
    }
    exports.getPropertyInject = getPropertyInject;
    function saveObjectDefinition(target, props = {}) {
      saveClassMetadata(constant_1.OBJ_DEF_CLS, props, target, true);
      return target;
    }
    exports.saveObjectDefinition = saveObjectDefinition;
    function getObjectDefinition(target) {
      return getClassExtendedMetadata(constant_1.OBJ_DEF_CLS, target);
    }
    exports.getObjectDefinition = getObjectDefinition;
    function saveProviderId(identifier, target) {
      if (isProvide(target)) {
        if (identifier) {
          const meta = getClassMetadata(constant_1.TAGGED_CLS, target);
          if (meta.id !== identifier) {
            meta.id = identifier;
            saveClassMetadata(constant_1.TAGGED_CLS, meta, target);
            debug(`update provide: ${target.name} -> ${meta.uuid}`);
          }
        }
      } else {
        const uuid = (0, util_1.generateRandomId)();
        saveClassMetadata(constant_1.TAGGED_CLS, {
          id: identifier,
          originName: target.name,
          uuid,
          name: (0, camelCase_1.camelCase)(target.name)
        }, target);
        debug(`save provide: ${target.name} -> ${uuid}`);
      }
      return target;
    }
    exports.saveProviderId = saveProviderId;
    function getProviderId(module2) {
      const metaData = getClassMetadata(constant_1.TAGGED_CLS, module2);
      if (metaData && metaData.id) {
        return metaData.id;
      }
    }
    exports.getProviderId = getProviderId;
    function getProviderName(module2) {
      const metaData = getClassMetadata(constant_1.TAGGED_CLS, module2);
      if (metaData && metaData.name) {
        return metaData.name;
      }
    }
    exports.getProviderName = getProviderName;
    function getProviderUUId(module2) {
      const metaData = getClassMetadata(constant_1.TAGGED_CLS, module2);
      if (metaData && metaData.uuid) {
        return metaData.uuid;
      }
    }
    exports.getProviderUUId = getProviderUUId;
    function isProvide(target) {
      return !!getClassMetadata(constant_1.TAGGED_CLS, target);
    }
    exports.isProvide = isProvide;
    var BaseType;
    (function(BaseType2) {
      BaseType2["Boolean"] = "boolean";
      BaseType2["Number"] = "number";
      BaseType2["String"] = "string";
    })(BaseType = exports.BaseType || (exports.BaseType = {}));
    function getMethodParamTypes(target, methodName) {
      if ((0, types_1.isClass)(target)) {
        target = target.prototype;
      }
      return Reflect.getMetadata("design:paramtypes", target, methodName);
    }
    exports.getMethodParamTypes = getMethodParamTypes;
    function getPropertyType(target, methodName) {
      return transformTypeFromTSDesign(Reflect.getMetadata("design:type", target, methodName));
    }
    exports.getPropertyType = getPropertyType;
    function getMethodReturnTypes(target, methodName) {
      if ((0, types_1.isClass)(target)) {
        target = target.prototype;
      }
      return Reflect.getMetadata("design:returntype", target, methodName);
    }
    exports.getMethodReturnTypes = getMethodReturnTypes;
    function createCustomPropertyDecorator(decoratorKey, metadata, impl = true) {
      return function(target, propertyName) {
        attachClassMetadata(constant_1.INJECT_CUSTOM_PROPERTY, {
          propertyName,
          key: decoratorKey,
          metadata,
          impl
        }, target, propertyName);
      };
    }
    exports.createCustomPropertyDecorator = createCustomPropertyDecorator;
    function createCustomMethodDecorator(decoratorKey, metadata, implOrOptions = { impl: true }) {
      if (typeof implOrOptions === "boolean") {
        implOrOptions = { impl: implOrOptions };
      }
      if (implOrOptions.impl === void 0) {
        implOrOptions.impl = true;
      }
      return function(target, propertyName, descriptor) {
        attachClassMetadata(constant_1.INJECT_CUSTOM_METHOD, {
          propertyName,
          key: decoratorKey,
          metadata,
          options: implOrOptions
        }, target);
      };
    }
    exports.createCustomMethodDecorator = createCustomMethodDecorator;
    function createCustomParamDecorator(decoratorKey, metadata, implOrOptions = { impl: true }) {
      if (typeof implOrOptions === "boolean") {
        implOrOptions = { impl: implOrOptions };
      }
      if (implOrOptions.impl === void 0) {
        implOrOptions.impl = true;
      }
      return function(target, propertyName, parameterIndex) {
        attachClassMetadata(constant_1.INJECT_CUSTOM_PARAM, {
          key: decoratorKey,
          parameterIndex,
          propertyName,
          metadata,
          options: implOrOptions
        }, target, propertyName, "multi");
      };
    }
    exports.createCustomParamDecorator = createCustomParamDecorator;
  }
});
var require_provide = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/provide.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Provide = void 0;
    var decoratorManager_1 = require_decoratorManager();
    function Provide(identifier) {
      return function(target) {
        return (0, decoratorManager_1.saveProviderId)(identifier, target);
      };
    }
    exports.Provide = Provide;
  }
});
var require_inject = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/inject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InjectClient = exports.Inject = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var constant_1 = require_constant();
    function Inject(identifier) {
      return function(target, targetKey) {
        (0, decoratorManager_1.savePropertyInject)({ target, targetKey, identifier });
      };
    }
    exports.Inject = Inject;
    function InjectClient(serviceFactoryClz, clientName) {
      return (0, decoratorManager_1.createCustomPropertyDecorator)(constant_1.FACTORY_SERVICE_CLIENT_KEY, {
        serviceFactoryClz,
        clientName
      });
    }
    exports.InjectClient = InjectClient;
  }
});
var require_pipeline = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/pipeline.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pipeline = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var constant_1 = require_constant();
    function Pipeline(valves) {
      return (0, decoratorManager_1.createCustomPropertyDecorator)(constant_1.PIPELINE_IDENTIFIER, {
        valves
      });
    }
    exports.Pipeline = Pipeline;
  }
});
var require_objectDef = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/objectDef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Singleton = exports.Scope = exports.Destroy = exports.Init = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var provide_1 = require_provide();
    var interface_1 = require_interface();
    function Init() {
      return function(target, propertyKey) {
        (0, decoratorManager_1.saveObjectDefinition)(target, { initMethod: propertyKey });
      };
    }
    exports.Init = Init;
    function Destroy() {
      return function(target, propertyKey) {
        (0, decoratorManager_1.saveObjectDefinition)(target, {
          destroyMethod: propertyKey
        });
      };
    }
    exports.Destroy = Destroy;
    function Scope(scope, scopeOptions) {
      return function(target) {
        (0, decoratorManager_1.saveObjectDefinition)(target, { scope, ...scopeOptions });
      };
    }
    exports.Scope = Scope;
    function Singleton() {
      return function(target) {
        Scope(interface_1.ScopeEnum.Singleton)(target);
        (0, provide_1.Provide)()(target);
      };
    }
    exports.Singleton = Singleton;
  }
});
var require_aspect = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/aspect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Aspect = void 0;
    var __1 = require_decorator();
    var objectDef_1 = require_objectDef();
    var interface_1 = require_interface();
    function Aspect(aspectTarget, match, priority) {
      return function(target) {
        (0, __1.saveModule)(__1.ASPECT_KEY, target);
        const aspectTargets = [].concat(aspectTarget);
        for (const aspectTarget2 of aspectTargets) {
          (0, __1.attachClassMetadata)(__1.ASPECT_KEY, {
            aspectTarget: aspectTarget2,
            match,
            priority
          }, target);
        }
        (0, objectDef_1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Aspect = Aspect;
  }
});
var require_autoload = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/autoload.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Autoload = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var provide_1 = require_provide();
    function Autoload() {
      return function(target) {
        (0, decoratorManager_1.savePreloadModule)(target);
        (0, provide_1.Provide)()(target);
      };
    }
    exports.Autoload = Autoload;
  }
});
var require_configuration = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configuration = void 0;
    var __1 = require_decorator();
    function Configuration(options = {}) {
      return (target) => {
        (0, __1.saveClassMetadata)(__1.CONFIGURATION_KEY, options, target);
      };
    }
    exports.Configuration = Configuration;
  }
});
var require_framework2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/framework.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationContext = exports.Logger = exports.App = exports.Config = exports.Plugin = exports.Framework = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Framework() {
      return (target) => {
        (0, __1.saveModule)(__1.FRAMEWORK_KEY, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Framework = Framework;
    function Plugin(identifier) {
      return (0, __1.createCustomPropertyDecorator)(__1.PLUGIN_KEY, {
        identifier
      });
    }
    exports.Plugin = Plugin;
    function Config(identifier) {
      return (0, __1.createCustomPropertyDecorator)(__1.CONFIG_KEY, {
        identifier
      });
    }
    exports.Config = Config;
    function App(typeOrNamespace) {
      return (0, __1.createCustomPropertyDecorator)(__1.APPLICATION_KEY, {
        type: typeOrNamespace
      });
    }
    exports.App = App;
    function Logger(identifier) {
      return (0, __1.createCustomPropertyDecorator)(__1.LOGGER_KEY, {
        identifier
      });
    }
    exports.Logger = Logger;
    function ApplicationContext() {
      return (0, __1.createCustomPropertyDecorator)(__1.APPLICATION_CONTEXT_KEY, {});
    }
    exports.ApplicationContext = ApplicationContext;
  }
});
var require_filter = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/filter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Match = exports.Catch = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var constant_1 = require_constant();
    var objectDef_1 = require_objectDef();
    var provide_1 = require_provide();
    var interface_1 = require_interface();
    function Catch(catchTarget, options = {}) {
      return function(target) {
        const catchTargets = catchTarget ? [].concat(catchTarget) : void 0;
        (0, decoratorManager_1.saveClassMetadata)(constant_1.CATCH_KEY, {
          catchTargets,
          catchOptions: options
        }, target);
        (0, objectDef_1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, provide_1.Provide)()(target);
      };
    }
    exports.Catch = Catch;
    function Match(matchPattern = true) {
      return function(target) {
        (0, decoratorManager_1.saveClassMetadata)(constant_1.MATCH_KEY, {
          matchPattern
        }, target);
        (0, objectDef_1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, provide_1.Provide)()(target);
      };
    }
    exports.Match = Match;
  }
});
var require_middleware = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/middleware.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Middleware = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Middleware() {
      return (target) => {
        (0, __1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Middleware = Middleware;
  }
});
var require_guard = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/guard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Guard = exports.UseGuard = void 0;
    var decoratorManager_1 = require_decoratorManager();
    var interface_1 = require_interface();
    var constant_1 = require_constant();
    var provide_1 = require_provide();
    var objectDef_1 = require_objectDef();
    function UseGuard(guardOrArr) {
      return (target, propertyKey, descriptor) => {
        if (!Array.isArray(guardOrArr)) {
          guardOrArr = [guardOrArr];
        }
        if (propertyKey) {
          (0, decoratorManager_1.savePropertyMetadata)(constant_1.GUARD_KEY, guardOrArr, target, propertyKey);
        } else {
          (0, decoratorManager_1.saveClassMetadata)(constant_1.GUARD_KEY, guardOrArr, target);
        }
      };
    }
    exports.UseGuard = UseGuard;
    function Guard() {
      return (target) => {
        (0, provide_1.Provide)()(target);
        (0, objectDef_1.Scope)(interface_1.ScopeEnum.Singleton)(target);
      };
    }
    exports.Guard = Guard;
  }
});
var require_pipe = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pipe = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Pipe() {
      return (target) => {
        (0, __1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Pipe = Pipe;
  }
});
var require_mock = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/common/mock.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mock = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Mock() {
      return (target) => {
        (0, __1.saveModule)(__1.MOCK_KEY, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Singleton)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Mock = Mock;
  }
});
var require_serverlessTrigger = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/faas/serverlessTrigger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerlessTrigger = exports.ServerlessFunction = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function ServerlessFunction(options) {
      return (target, key, descriptor) => {
        (0, __1.savePropertyMetadata)(__1.SERVERLESS_FUNC_KEY, options, target, key);
      };
    }
    exports.ServerlessFunction = ServerlessFunction;
    function ServerlessTrigger(type, metadata = {}) {
      return (target, functionName, descriptor) => {
        var _a;
        if (type === interface_1.ServerlessTriggerType.HTTP || type === interface_1.ServerlessTriggerType.API_GATEWAY) {
          metadata["method"] = (_a = metadata["method"]) !== null && _a !== void 0 ? _a : "get";
        }
        (0, __1.saveModule)(__1.FUNC_KEY, target.constructor);
        metadata = metadata || {};
        (0, __1.attachClassMetadata)(__1.FUNC_KEY, {
          type,
          methodName: functionName,
          metadata
        }, target);
      };
    }
    exports.ServerlessTrigger = ServerlessTrigger;
  }
});
var require_controller = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/web/controller.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Controller = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Controller(prefix = "/", routerOptions = { middleware: [], sensitive: true }) {
      return (target) => {
        (0, __1.saveModule)(__1.CONTROLLER_KEY, target);
        if (prefix)
          (0, __1.saveClassMetadata)(__1.CONTROLLER_KEY, {
            prefix,
            routerOptions
          }, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Controller = Controller;
  }
});
var require_paramMapping = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/web/paramMapping.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Fields = exports.Queries = exports.RequestIP = exports.RequestPath = exports.Files = exports.File = exports.Headers = exports.Param = exports.Query = exports.Body = exports.Session = exports.createRequestParamDecorator = exports.RouteParamTypes = void 0;
    var __1 = require_decorator();
    var RouteParamTypes;
    (function(RouteParamTypes2) {
      RouteParamTypes2["QUERY"] = "query";
      RouteParamTypes2["BODY"] = "body";
      RouteParamTypes2["PARAM"] = "param";
      RouteParamTypes2["HEADERS"] = "headers";
      RouteParamTypes2["SESSION"] = "session";
      RouteParamTypes2["FILESTREAM"] = "file_stream";
      RouteParamTypes2["FILESSTREAM"] = "files_stream";
      RouteParamTypes2["NEXT"] = "next";
      RouteParamTypes2["REQUEST_PATH"] = "request_path";
      RouteParamTypes2["REQUEST_IP"] = "request_ip";
      RouteParamTypes2["QUERIES"] = "queries";
      RouteParamTypes2["FIELDS"] = "fields";
      RouteParamTypes2["CUSTOM"] = "custom";
    })(RouteParamTypes = exports.RouteParamTypes || (exports.RouteParamTypes = {}));
    var createParamMapping = function(type) {
      return (propertyOrPipes, options = {}) => {
        let propertyData = propertyOrPipes;
        if (Array.isArray(propertyOrPipes) && options.pipes === void 0) {
          options.pipes = propertyOrPipes;
          propertyData = void 0;
        }
        return (0, __1.createCustomParamDecorator)(__1.WEB_ROUTER_PARAM_KEY, {
          type,
          propertyData
        }, options);
      };
    };
    var createRequestParamDecorator = function(transform, pipesOrOptions) {
      pipesOrOptions = pipesOrOptions || {};
      if (Array.isArray(pipesOrOptions)) {
        pipesOrOptions = {
          pipes: pipesOrOptions
        };
      }
      return createParamMapping(RouteParamTypes.CUSTOM)(transform, pipesOrOptions);
    };
    exports.createRequestParamDecorator = createRequestParamDecorator;
    var Session = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.SESSION)(propertyOrPipes, { pipes });
    exports.Session = Session;
    var Body = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.BODY)(propertyOrPipes, { pipes });
    exports.Body = Body;
    var Query = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.QUERY)(propertyOrPipes, { pipes });
    exports.Query = Query;
    var Param = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.PARAM)(propertyOrPipes, { pipes });
    exports.Param = Param;
    var Headers = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.HEADERS)(propertyOrPipes, { pipes });
    exports.Headers = Headers;
    var File = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.FILESTREAM)(propertyOrPipes, { pipes });
    exports.File = File;
    var Files = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.FILESSTREAM)(propertyOrPipes, { pipes });
    exports.Files = Files;
    var RequestPath = (pipes) => createParamMapping(RouteParamTypes.REQUEST_PATH)(void 0, { pipes });
    exports.RequestPath = RequestPath;
    var RequestIP = (pipes) => createParamMapping(RouteParamTypes.REQUEST_IP)(void 0, { pipes });
    exports.RequestIP = RequestIP;
    var Queries = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.QUERIES)(propertyOrPipes, { pipes });
    exports.Queries = Queries;
    var Fields = (propertyOrPipes, pipes) => createParamMapping(RouteParamTypes.FIELDS)(propertyOrPipes, { pipes });
    exports.Fields = Fields;
  }
});
var require_requestMapping = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/web/requestMapping.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.All = exports.Head = exports.Options = exports.Patch = exports.Put = exports.Del = exports.Get = exports.Post = exports.RequestMapping = exports.RequestMethod = void 0;
    var __1 = require_decorator();
    exports.RequestMethod = {
      GET: "get",
      POST: "post",
      PUT: "put",
      DELETE: "delete",
      PATCH: "patch",
      ALL: "all",
      OPTIONS: "options",
      HEAD: "head"
    };
    var defaultMetadata = {
      path: "/",
      requestMethod: exports.RequestMethod.GET,
      routerName: null,
      middleware: []
    };
    var RequestMapping = (metadata = defaultMetadata) => {
      const path = metadata.path || "/";
      const requestMethod = metadata.requestMethod || exports.RequestMethod.GET;
      const routerName = metadata.routerName;
      const middleware = metadata.middleware;
      return (target, key, descriptor) => {
        var _a;
        (0, __1.attachClassMetadata)(__1.WEB_ROUTER_KEY, {
          path,
          requestMethod,
          routerName,
          method: key,
          middleware,
          summary: (metadata === null || metadata === void 0 ? void 0 : metadata.summary) || "",
          description: (metadata === null || metadata === void 0 ? void 0 : metadata.description) || "",
          ignoreGlobalPrefix: (_a = metadata === null || metadata === void 0 ? void 0 : metadata.ignoreGlobalPrefix) !== null && _a !== void 0 ? _a : false
        }, target);
        return descriptor;
      };
    };
    exports.RequestMapping = RequestMapping;
    var createMappingDecorator = (method) => (path, routerOptions = { middleware: [] }) => {
      return (0, exports.RequestMapping)(Object.assign(routerOptions, {
        requestMethod: method,
        path
      }));
    };
    exports.Post = createMappingDecorator(exports.RequestMethod.POST);
    exports.Get = createMappingDecorator(exports.RequestMethod.GET);
    exports.Del = createMappingDecorator(exports.RequestMethod.DELETE);
    exports.Put = createMappingDecorator(exports.RequestMethod.PUT);
    exports.Patch = createMappingDecorator(exports.RequestMethod.PATCH);
    exports.Options = createMappingDecorator(exports.RequestMethod.OPTIONS);
    exports.Head = createMappingDecorator(exports.RequestMethod.HEAD);
    exports.All = createMappingDecorator(exports.RequestMethod.ALL);
  }
});
var require_response = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/web/response.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createRender = exports.ContentType = exports.SetHeader = exports.HttpCode = exports.Redirect = void 0;
    var __1 = require_decorator();
    function Redirect(url, code = 302) {
      return (target, key, descriptor) => {
        (0, __1.attachPropertyMetadata)(__1.WEB_RESPONSE_KEY, {
          type: __1.WEB_RESPONSE_REDIRECT,
          url,
          code
        }, target, key);
        return descriptor;
      };
    }
    exports.Redirect = Redirect;
    function HttpCode(code) {
      return (target, key, descriptor) => {
        (0, __1.attachPropertyMetadata)(__1.WEB_RESPONSE_KEY, {
          type: __1.WEB_RESPONSE_HTTP_CODE,
          code
        }, target, key);
        return descriptor;
      };
    }
    exports.HttpCode = HttpCode;
    function SetHeader(headerKey, value) {
      return (target, key, descriptor) => {
        let headerObject = {};
        if (value) {
          headerObject[headerKey] = value;
        } else {
          headerObject = headerKey;
        }
        (0, __1.attachPropertyMetadata)(__1.WEB_RESPONSE_KEY, {
          type: __1.WEB_RESPONSE_HEADER,
          setHeaders: headerObject
        }, target, key);
        return descriptor;
      };
    }
    exports.SetHeader = SetHeader;
    function ContentType(contentType) {
      return (target, key, descriptor) => {
        (0, __1.attachPropertyMetadata)(__1.WEB_RESPONSE_KEY, {
          type: __1.WEB_RESPONSE_CONTENT_TYPE,
          contentType
        }, target, key);
        return descriptor;
      };
    }
    exports.ContentType = ContentType;
    function createRender(RenderEngine) {
      return (templateName) => {
        return (target, key, descriptor) => {
          (0, __1.attachPropertyMetadata)(__1.WEB_RESPONSE_KEY, {
            type: __1.WEB_RESPONSE_RENDER,
            templateName
          }, target, key);
          return descriptor;
        };
      };
    }
    exports.createRender = createRender;
  }
});
var require_consumer = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/microservice/consumer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Consumer = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Consumer(type, options = {}) {
      return (target) => {
        (0, __1.saveModule)(__1.MS_CONSUMER_KEY, target);
        (0, __1.saveClassMetadata)(__1.MS_CONSUMER_KEY, {
          type,
          metadata: options
        }, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Consumer = Consumer;
  }
});
var require_provider = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/microservice/provider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DubboMethod = exports.GrpcMethod = exports.GrpcStreamTypeEnum = exports.Provider = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Provider(type, metadata = {}) {
      return (target) => {
        (0, __1.saveModule)(__1.MS_PROVIDER_KEY, target);
        (0, __1.saveClassMetadata)(__1.MS_PROVIDER_KEY, {
          type,
          metadata
        }, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Provider = Provider;
    var GrpcStreamTypeEnum;
    (function(GrpcStreamTypeEnum2) {
      GrpcStreamTypeEnum2["BASE"] = "base";
      GrpcStreamTypeEnum2["DUPLEX"] = "ServerDuplexStream";
      GrpcStreamTypeEnum2["READABLE"] = "ServerReadableStream";
      GrpcStreamTypeEnum2["WRITEABLE"] = "ServerWritableStream";
    })(GrpcStreamTypeEnum = exports.GrpcStreamTypeEnum || (exports.GrpcStreamTypeEnum = {}));
    function GrpcMethod(methodOptions = {}) {
      return (target, propertyName, descriptor) => {
        if (!methodOptions.type) {
          methodOptions.type = GrpcStreamTypeEnum.BASE;
        }
        (0, __1.savePropertyMetadata)(__1.MS_GRPC_METHOD_KEY, {
          methodName: methodOptions.methodName || propertyName,
          type: methodOptions.type,
          onEnd: methodOptions.onEnd
        }, target, propertyName);
        return descriptor;
      };
    }
    exports.GrpcMethod = GrpcMethod;
    function DubboMethod(methodName) {
      return (target, propertyName, descriptor) => {
        (0, __1.attachClassMetadata)(__1.MS_DUBBO_METHOD_KEY, {
          methodName: methodName || propertyName
        }, target);
        return descriptor;
      };
    }
    exports.DubboMethod = DubboMethod;
  }
});
var require_rabbitmqListener = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/microservice/rabbitmqListener.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RabbitMQListener = void 0;
    var __1 = require_decorator();
    function RabbitMQListener(queueName, options = {}) {
      return (target, propertyKey) => {
        options.queueName = queueName;
        options.propertyKey = propertyKey;
        (0, __1.attachPropertyDataToClass)(__1.MS_CONSUMER_KEY, options, target, propertyKey);
      };
    }
    exports.RabbitMQListener = RabbitMQListener;
  }
});
var require_kafkaListener = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/microservice/kafkaListener.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KafkaListener = void 0;
    var __1 = require_decorator();
    function KafkaListener(topic, options = {}) {
      return (target, propertyKey) => {
        options.topic = topic;
        options.propertyKey = propertyKey;
        (0, __1.attachPropertyDataToClass)(__1.MS_CONSUMER_KEY, options, target, propertyKey);
      };
    }
    exports.KafkaListener = KafkaListener;
  }
});
var require_hsf = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/rpc/hsf.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HSF = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function HSF(hsfOption = {}) {
      return (target) => {
        (0, __1.saveModule)(__1.HSF_KEY, target);
        (0, __1.saveClassMetadata)(__1.HSF_KEY, hsfOption, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.HSF = HSF;
  }
});
var require_queue = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/task/queue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Queue = void 0;
    var __1 = require_decorator();
    var constant_1 = require_constant();
    function Queue(options) {
      return function(target) {
        (0, __1.saveModule)(constant_1.MODULE_TASK_QUEUE_KEY, target);
        (0, __1.saveClassMetadata)(constant_1.MODULE_TASK_QUEUE_OPTIONS, {
          options,
          name: target.name
        }, target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Queue = Queue;
  }
});
var require_task = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/task/task.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Task = void 0;
    var __1 = require_decorator();
    var constant_1 = require_constant();
    function Task(options) {
      return function(target, propertyKey, descriptor) {
        (0, __1.saveModule)(constant_1.MODULE_TASK_KEY, target.constructor);
        (0, __1.attachClassMetadata)(constant_1.MODULE_TASK_METADATA, {
          options,
          propertyKey,
          value: descriptor.value,
          name: target.constructor.name
        }, target);
      };
    }
    exports.Task = Task;
  }
});
var require_taskLocal = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/task/taskLocal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TaskLocal = void 0;
    var __1 = require_decorator();
    var constant_1 = require_constant();
    function TaskLocal(options) {
      return function(target, propertyKey, descriptor) {
        (0, __1.saveModule)(constant_1.MODULE_TASK_TASK_LOCAL_KEY, target.constructor);
        (0, __1.attachClassMetadata)(constant_1.MODULE_TASK_TASK_LOCAL_OPTIONS, {
          options,
          propertyKey,
          value: descriptor.value
        }, target);
      };
    }
    exports.TaskLocal = TaskLocal;
  }
});
var require_schedule = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/task/schedule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Schedule = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function Schedule(scheduleOpts) {
      return function(target) {
        (0, __1.saveModule)(__1.SCHEDULE_KEY, target);
        (0, __1.saveClassMetadata)(__1.SCHEDULE_KEY, scheduleOpts, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.Schedule = Schedule;
  }
});
var require_webSocketController = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/ws/webSocketController.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WSController = void 0;
    var __1 = require_decorator();
    var interface_1 = require_interface();
    function WSController(namespace = "/", routerOptions = {
      middleware: [],
      connectionMiddleware: []
    }) {
      return (target) => {
        (0, __1.saveModule)(__1.WS_CONTROLLER_KEY, target);
        (0, __1.saveClassMetadata)(__1.WS_CONTROLLER_KEY, {
          namespace,
          routerOptions
        }, target);
        (0, __1.Scope)(interface_1.ScopeEnum.Request)(target);
        (0, __1.Provide)()(target);
      };
    }
    exports.WSController = WSController;
  }
});
var require_webSocketEvent = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/ws/webSocketEvent.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OnConnection = exports.OnDisConnection = exports.Emit = exports.OnMessage = exports.WSBroadCast = exports.WSEmit = exports.OnWSMessage = exports.OnWSDisConnection = exports.OnWSConnection = exports.WSEventTypeEnum = void 0;
    var __1 = require_decorator();
    var WSEventTypeEnum;
    (function(WSEventTypeEnum2) {
      WSEventTypeEnum2["ON_CONNECTION"] = "ws:onConnection";
      WSEventTypeEnum2["ON_DISCONNECTION"] = "ws:onDisconnection";
      WSEventTypeEnum2["ON_MESSAGE"] = "ws:onMessage";
      WSEventTypeEnum2["ON_SOCKET_ERROR"] = "ws:onSocketError";
      WSEventTypeEnum2["EMIT"] = "ws:Emit";
      WSEventTypeEnum2["BROADCAST"] = "ws:broadcast";
    })(WSEventTypeEnum = exports.WSEventTypeEnum || (exports.WSEventTypeEnum = {}));
    function OnWSConnection(eventOptions = {}) {
      return (target, propertyKey, descriptor) => {
        (0, __1.attachClassMetadata)(__1.WS_EVENT_KEY, {
          eventType: WSEventTypeEnum.ON_CONNECTION,
          propertyName: propertyKey,
          eventOptions,
          descriptor
        }, target.constructor);
      };
    }
    exports.OnWSConnection = OnWSConnection;
    function OnWSDisConnection() {
      return (target, propertyKey, descriptor) => {
        (0, __1.attachClassMetadata)(__1.WS_EVENT_KEY, {
          eventType: WSEventTypeEnum.ON_DISCONNECTION,
          propertyName: propertyKey,
          descriptor
        }, target.constructor);
      };
    }
    exports.OnWSDisConnection = OnWSDisConnection;
    function OnWSMessage(eventName, eventOptions = {}) {
      return (target, propertyKey, descriptor) => {
        (0, __1.attachClassMetadata)(__1.WS_EVENT_KEY, {
          eventType: WSEventTypeEnum.ON_MESSAGE,
          messageEventName: eventName,
          propertyName: propertyKey,
          eventOptions,
          descriptor
        }, target.constructor);
      };
    }
    exports.OnWSMessage = OnWSMessage;
    function WSEmit(messageName, roomName = []) {
      return (target, propertyKey, descriptor) => {
        (0, __1.attachClassMetadata)(__1.WS_EVENT_KEY, {
          eventType: WSEventTypeEnum.EMIT,
          propertyName: propertyKey,
          messageEventName: messageName,
          roomName: [].concat(roomName),
          descriptor
        }, target.constructor);
      };
    }
    exports.WSEmit = WSEmit;
    function WSBroadCast(messageName = "", roomName = []) {
      return (target, propertyKey, descriptor) => {
        (0, __1.attachClassMetadata)(__1.WS_EVENT_KEY, {
          eventType: WSEventTypeEnum.BROADCAST,
          propertyName: propertyKey,
          messageEventName: messageName,
          roomName: [].concat(roomName),
          descriptor
        }, target.constructor);
      };
    }
    exports.WSBroadCast = WSBroadCast;
    exports.OnMessage = OnWSMessage;
    exports.Emit = WSEmit;
    exports.OnDisConnection = OnWSDisConnection;
    exports.OnConnection = OnWSConnection;
  }
});
var require_decorator = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/decorator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_provide(), exports);
    __exportStar(require_inject(), exports);
    __exportStar(require_pipeline(), exports);
    __exportStar(require_aspect(), exports);
    __exportStar(require_autoload(), exports);
    __exportStar(require_configuration(), exports);
    __exportStar(require_objectDef(), exports);
    __exportStar(require_framework2(), exports);
    __exportStar(require_filter(), exports);
    __exportStar(require_middleware(), exports);
    __exportStar(require_guard(), exports);
    __exportStar(require_pipe(), exports);
    __exportStar(require_mock(), exports);
    __exportStar(require_serverlessTrigger(), exports);
    __exportStar(require_controller(), exports);
    __exportStar(require_paramMapping(), exports);
    __exportStar(require_requestMapping(), exports);
    __exportStar(require_response(), exports);
    __exportStar(require_constant(), exports);
    __exportStar(require_decoratorManager(), exports);
    __exportStar(require_consumer(), exports);
    __exportStar(require_provider(), exports);
    __exportStar(require_rabbitmqListener(), exports);
    __exportStar(require_kafkaListener(), exports);
    __exportStar(require_hsf(), exports);
    __exportStar(require_queue(), exports);
    __exportStar(require_task(), exports);
    __exportStar(require_taskLocal(), exports);
    __exportStar(require_schedule(), exports);
    __exportStar(require_webSocketController(), exports);
    __exportStar(require_webSocketEvent(), exports);
  }
});
var require_configuration2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/functional/configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createConfiguration = exports.FunctionalConfiguration = void 0;
    var FunctionalConfiguration = class {
      constructor(options) {
        this.options = options;
        this.readyHandler = () => {
        };
        this.stopHandler = () => {
        };
        this.configLoadHandler = () => {
        };
        this.serverReadyHandler = () => {
        };
      }
      onConfigLoad(configLoadHandler, app2) {
        if (typeof configLoadHandler === "function") {
          this.configLoadHandler = configLoadHandler;
        } else {
          return this.configLoadHandler(configLoadHandler, app2);
        }
        return this;
      }
      onReady(readyHandler, app2) {
        if (typeof readyHandler === "function") {
          this.readyHandler = readyHandler;
        } else {
          return this.readyHandler(readyHandler, app2);
        }
        return this;
      }
      onServerReady(serverReadyHandler, app2) {
        if (typeof serverReadyHandler === "function") {
          this.serverReadyHandler = serverReadyHandler;
        } else {
          return this.serverReadyHandler(serverReadyHandler, app2);
        }
        return this;
      }
      onStop(stopHandler, app2) {
        if (typeof stopHandler === "function") {
          this.stopHandler = stopHandler;
        } else {
          return this.stopHandler(stopHandler, app2);
        }
        return this;
      }
      getConfigurationOptions() {
        return this.options;
      }
    };
    exports.FunctionalConfiguration = FunctionalConfiguration;
    var createConfiguration = (options) => {
      return new FunctionalConfiguration(options);
    };
    exports.createConfiguration = createConfiguration;
  }
});
var require_definitionRegistry = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/context/definitionRegistry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectDefinitionRegistry = void 0;
    var decorator_1 = require_decorator();
    var PREFIX = "_id_default_";
    var LegacyIdentifierRelation = class extends Map {
      saveClassRelation(module2, namespace) {
        const providerId = (0, decorator_1.getProviderUUId)(module2);
        this.set(providerId, providerId);
        if (providerId) {
          const aliasId = (0, decorator_1.getProviderId)(module2);
          if (aliasId) {
            this.set(aliasId, providerId);
          }
          this.set((0, decorator_1.getProviderName)(module2), providerId);
          if (namespace) {
            this.set(namespace + ":" + (0, decorator_1.getProviderName)(module2), providerId);
          }
        }
      }
      saveFunctionRelation(id, uuid) {
        this.set(uuid, uuid);
        this.set(id, uuid);
      }
      hasRelation(id) {
        return this.has(id);
      }
      getRelation(id) {
        return this.get(id);
      }
    };
    var ObjectDefinitionRegistry = class extends Map {
      constructor() {
        super(...arguments);
        this.singletonIds = [];
        this._identifierRelation = new LegacyIdentifierRelation();
      }
      get identifierRelation() {
        if (!this._identifierRelation) {
          this._identifierRelation = new LegacyIdentifierRelation();
        }
        return this._identifierRelation;
      }
      set identifierRelation(identifierRelation) {
        this._identifierRelation = identifierRelation;
      }
      get identifiers() {
        const ids = [];
        for (const key of this.keys()) {
          if (key.indexOf(PREFIX) === -1) {
            ids.push(key);
          }
        }
        return ids;
      }
      get count() {
        return this.size;
      }
      getSingletonDefinitionIds() {
        return this.singletonIds;
      }
      getDefinitionByName(name) {
        const definitions = [];
        for (const v of this.values()) {
          const definition = v;
          if (definition.name === name) {
            definitions.push(definition);
          }
        }
        return definitions;
      }
      registerDefinition(identifier, definition) {
        if (definition.isSingletonScope()) {
          this.singletonIds.push(identifier);
        }
        this.set(identifier, definition);
      }
      getDefinition(identifier) {
        var _a;
        identifier = (_a = this.identifierRelation.getRelation(identifier)) !== null && _a !== void 0 ? _a : identifier;
        return this.get(identifier);
      }
      removeDefinition(identifier) {
        this.delete(identifier);
      }
      hasDefinition(identifier) {
        var _a;
        identifier = (_a = this.identifierRelation.getRelation(identifier)) !== null && _a !== void 0 ? _a : identifier;
        return this.has(identifier);
      }
      clearAll() {
        this.singletonIds = [];
        this.clear();
      }
      hasObject(identifier) {
        var _a;
        identifier = (_a = this.identifierRelation.getRelation(identifier)) !== null && _a !== void 0 ? _a : identifier;
        return this.has(PREFIX + identifier);
      }
      registerObject(identifier, target) {
        this.set(PREFIX + identifier, target);
      }
      getObject(identifier) {
        var _a;
        identifier = (_a = this.identifierRelation.getRelation(identifier)) !== null && _a !== void 0 ? _a : identifier;
        return this.get(PREFIX + identifier);
      }
      getIdentifierRelation() {
        return this.identifierRelation;
      }
      setIdentifierRelation(identifierRelation) {
        this.identifierRelation = identifierRelation;
      }
    };
    exports.ObjectDefinitionRegistry = ObjectDefinitionRegistry;
  }
});
var require_constants = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SINGLETON_CONTAINER_CTX = exports.IGNORE_PATTERN = exports.DEFAULT_PATTERN = exports.ASYNC_CONTEXT_MANAGER_KEY = exports.ASYNC_CONTEXT_KEY = exports.REQUEST_CTX_LOGGER_CACHE_KEY = exports.HTTP_SERVER_KEY = exports.CONTAINER_OBJ_SCOPE = exports.REQUEST_OBJ_CTX_KEY = exports.REQUEST_CTX_KEY = exports.MIDWAY_LOGGER_WRITEABLE_DIR = exports.FUNCTION_INJECT_KEY = exports.KEYS = void 0;
    exports.KEYS = {
      OBJECTS_ELEMENT: "objects",
      OBJECT_ELEMENT: "object",
      IMPORT_ELEMENT: "import",
      PROPERTY_ELEMENT: "property",
      LIST_ELEMENT: "list",
      MAP_ELEMENT: "map",
      ENTRY_ELEMENT: "entry",
      VALUE_ELEMENT: "value",
      PROPS_ELEMENT: "props",
      PROP_ELEMENT: "prop",
      SET_ELEMENT: "set",
      CONSTRUCTOR_ARG_ELEMENT: "constructor-arg",
      REF_ELEMENT: "ref",
      JSON_ELEMENT: "json",
      CONFIGURATION_ELEMENT: "configuration",
      ID_ATTRIBUTE: "id",
      PATH_ATTRIBUTE: "path",
      DIRECT_ATTRIBUTE: "direct",
      AUTOWIRE_ATTRIBUTE: "autowire",
      ASYNC_ATTRIBUTE: "async",
      NAME_ATTRIBUTE: "name",
      REF_ATTRIBUTE: "ref",
      KEY_ATTRIBUTE: "key",
      VALUE_ATTRIBUTE: "value",
      TYPE_ATTRIBUTE: "type",
      EXTERNAL_ATTRIBUTE: "external",
      OBJECT_ATTRIBUTE: "object",
      RESOURCE_ATTRIBUTE: "resource",
      SCOPE_ATTRIBUTE: "scope",
      ASPECT_ELEMENT: "aspect",
      AROUND_ELEMENT: "around",
      EXPRESSION_ATTRIBUTE: "expression",
      EXECUTE_ATTRIBUTE: "execute"
    };
    exports.FUNCTION_INJECT_KEY = "midway:function_inject_key";
    exports.MIDWAY_LOGGER_WRITEABLE_DIR = "MIDWAY_LOGGER_WRITEABLE_DIR";
    exports.REQUEST_CTX_KEY = "ctx";
    exports.REQUEST_OBJ_CTX_KEY = "_req_ctx";
    exports.CONTAINER_OBJ_SCOPE = "_obj_scope";
    exports.HTTP_SERVER_KEY = "_midway_http_server";
    exports.REQUEST_CTX_LOGGER_CACHE_KEY = "_midway_ctx_logger_cache";
    exports.ASYNC_CONTEXT_KEY = Symbol("ASYNC_CONTEXT_KEY");
    exports.ASYNC_CONTEXT_MANAGER_KEY = "MIDWAY_ASYNC_CONTEXT_MANAGER_KEY";
    exports.DEFAULT_PATTERN = [
      "**/**.ts",
      "**/**.js",
      "**/**.mts",
      "**/**.mjs",
      "**/**.cts",
      "**/**.cjs"
    ];
    exports.IGNORE_PATTERN = ["**/**.d.ts", "**/**.d.mts", "**/**.d.cts"];
    exports.SINGLETON_CONTAINER_CTX = { _MAIN_CTX_: true };
  }
});
var require_properties = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/definitions/properties.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectProperties = void 0;
    var ObjectProperties = class extends Map {
      propertyKeys() {
        return Array.from(this.keys());
      }
      getProperty(key, defaultValue) {
        if (this.has(key)) {
          return this.get(key);
        }
        return defaultValue;
      }
      setProperty(key, value) {
        return this.set(key, value);
      }
    };
    exports.ObjectProperties = ObjectProperties;
  }
});
var require_objectCreator = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/definitions/objectCreator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectCreator = void 0;
    var error_1 = require_error();
    var types_1 = require_types();
    var ObjectCreator = class {
      constructor(definition) {
        this.definition = definition;
      }
      /**
       * 加载对象class
       * @returns {class} Clzz对象的Class
       */
      load() {
        let Clzz = null;
        if (typeof this.definition.path === "string") {
          if (!this.definition.path) {
            return Clzz;
          }
          const path = this.definition.path;
          if (this.definition.export) {
            Clzz = __require2(path)[this.definition.export];
          } else {
            Clzz = __require2(path);
          }
        } else {
          Clzz = this.definition.path;
        }
        return Clzz;
      }
      /**
       * 构建对象实例
       * @param Clzz 对象class，通过load加载
       * @param args 对象初始化参数
       * @returns {any} 返回创建的对象实例
       */
      doConstruct(Clzz, args) {
        if (!Clzz) {
          return /* @__PURE__ */ Object.create(null);
        }
        let inst;
        if (this.definition.constructMethod) {
          inst = Clzz[this.definition.constructMethod].apply(Clzz, args);
        } else {
          inst = Reflect.construct(Clzz, args);
        }
        return inst;
      }
      /**
       * 异步构造对象
       * @param Clzz 对象class，通过load加载
       * @param args 对象初始化参数
       * @returns {any} 返回创建的对象实例
       */
      async doConstructAsync(Clzz, args) {
        if (!Clzz) {
          return /* @__PURE__ */ Object.create(null);
        }
        let inst;
        if (this.definition.constructMethod) {
          const fn = Clzz[this.definition.constructMethod];
          if (types_1.Types.isAsyncFunction(fn)) {
            inst = await fn.apply(Clzz, args);
          } else {
            inst = fn.apply(Clzz, args);
          }
        } else {
          inst = Reflect.construct(Clzz, args);
        }
        return inst;
      }
      /**
       * 调用对象初始化方法进行初始化
       * @param obj 对象，由doConstruct返回
       * @returns {void}
       */
      doInit(obj) {
        const inst = obj;
        if (this.definition.initMethod && inst[this.definition.initMethod]) {
          if (types_1.Types.isGeneratorFunction(inst[this.definition.initMethod]) || types_1.Types.isAsyncFunction(inst[this.definition.initMethod])) {
            throw new error_1.MidwayUseWrongMethodError("context.get", "context.getAsync", this.definition.id);
          } else {
            const rt = inst[this.definition.initMethod].call(inst);
            if (types_1.Types.isPromise(rt)) {
              throw new error_1.MidwayUseWrongMethodError("context.get", "context.getAsync", this.definition.id);
            }
          }
        }
      }
      /**
       * 调用对象初始化方法进行初始化
       * @param obj 对象，由doConstructAsync返回
       * @returns {void}
       */
      async doInitAsync(obj) {
        const inst = obj;
        if (this.definition.initMethod && inst[this.definition.initMethod]) {
          const initFn = inst[this.definition.initMethod];
          if (types_1.Types.isAsyncFunction(initFn)) {
            await initFn.call(inst);
          } else {
            if (initFn.length === 1) {
              await new Promise((resolve) => {
                initFn.call(inst, resolve);
              });
            } else {
              initFn.call(inst);
            }
          }
        }
      }
      /**
       * 对象销毁
       * @param obj 对象，由doConstruct返回
       * @returns {void}
       */
      doDestroy(obj) {
        if (this.definition.destroyMethod && obj[this.definition.destroyMethod]) {
          obj[this.definition.destroyMethod].call(obj);
        }
      }
      /**
       * 对象销毁
       * @param obj 对象，由doConstructAsync返回
       * @returns {void}
       */
      async doDestroyAsync(obj) {
        if (this.definition.destroyMethod && obj[this.definition.destroyMethod]) {
          const fn = obj[this.definition.destroyMethod];
          if (types_1.Types.isAsyncFunction(fn)) {
            await fn.call(obj);
          } else {
            if (fn.length === 1) {
              await new Promise((resolve) => {
                fn.call(obj, resolve);
              });
            } else {
              fn.call(obj);
            }
          }
        }
      }
    };
    exports.ObjectCreator = ObjectCreator;
  }
});
var require_objectDefinition = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/definitions/objectDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectDefinition = void 0;
    var interface_1 = require_interface();
    var properties_1 = require_properties();
    var objectCreator_1 = require_objectCreator();
    var ObjectDefinition = class {
      constructor() {
        this._attrs = /* @__PURE__ */ new Map();
        this._asynchronous = false;
        this.scope = interface_1.ScopeEnum.Singleton;
        this.creator = null;
        this.id = null;
        this.name = null;
        this.initMethod = null;
        this.destroyMethod = null;
        this.constructMethod = null;
        this.constructorArgs = [];
        this.path = null;
        this.export = null;
        this.dependsOn = [];
        this.properties = new properties_1.ObjectProperties();
        this.namespace = "";
        this.handlerProps = [];
        this.allowDowngrade = false;
        this.creator = new objectCreator_1.ObjectCreator(this);
      }
      set asynchronous(asynchronous) {
        this._asynchronous = asynchronous;
      }
      isAsync() {
        return this._asynchronous;
      }
      isSingletonScope() {
        return this.scope === interface_1.ScopeEnum.Singleton;
      }
      isRequestScope() {
        return this.scope === interface_1.ScopeEnum.Request;
      }
      hasDependsOn() {
        return this.dependsOn.length > 0;
      }
      hasConstructorArgs() {
        return this.constructorArgs.length > 0;
      }
      getAttr(key) {
        return this._attrs.get(key);
      }
      hasAttr(key) {
        return this._attrs.has(key);
      }
      setAttr(key, value) {
        this._attrs.set(key, value);
      }
    };
    exports.ObjectDefinition = ObjectDefinition;
  }
});
var require_functionDefinition = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/definitions/functionDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionDefinition = void 0;
    var interface_1 = require_interface();
    var objectCreator_1 = require_objectCreator();
    var FunctionWrapperCreator = class extends objectCreator_1.ObjectCreator {
      doConstruct(Clzz, args, context) {
        if (!Clzz) {
          return null;
        }
        return Clzz(context, args);
      }
      async doConstructAsync(Clzz, args, context) {
        if (!Clzz) {
          return null;
        }
        return Clzz(context, args);
      }
    };
    var FunctionDefinition = class {
      constructor() {
        this.constructorArgs = [];
        this.namespace = "";
        this.asynchronous = true;
        this.handlerProps = [];
        this.allowDowngrade = false;
        this.innerAutowire = false;
        this.innerScope = interface_1.ScopeEnum.Singleton;
        this.creator = new FunctionWrapperCreator(this);
      }
      getAttr(key) {
      }
      hasAttr(key) {
        return false;
      }
      hasConstructorArgs() {
        return false;
      }
      hasDependsOn() {
        return false;
      }
      isAsync() {
        return this.asynchronous;
      }
      isDirect() {
        return false;
      }
      isExternal() {
        return false;
      }
      set scope(scope) {
        this.innerScope = scope;
      }
      isSingletonScope() {
        return this.innerScope === interface_1.ScopeEnum.Singleton;
      }
      isRequestScope() {
        return this.innerScope === interface_1.ScopeEnum.Request;
      }
      setAttr(key, value) {
      }
    };
    exports.FunctionDefinition = FunctionDefinition;
  }
});
var require_managedResolverFactory = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/context/managedResolverFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ManagedResolverFactory = exports.ManagedReference = void 0;
    var constants_1 = require_constants();
    var interface_1 = require_interface();
    var util = __require2("util");
    var error_1 = require_error();
    var debug = util.debuglog("midway:managedresolver");
    var debugLog = util.debuglog("midway:debug");
    var ManagedReference = class {
      constructor() {
        this.type = constants_1.KEYS.REF_ELEMENT;
      }
    };
    exports.ManagedReference = ManagedReference;
    var RefResolver = class {
      constructor(factory) {
        this.factory = factory;
      }
      get type() {
        return constants_1.KEYS.REF_ELEMENT;
      }
      resolve(managed, originName) {
        var _a;
        const mr = managed;
        if (mr.injectMode === interface_1.InjectModeEnum.Class && !((_a = this.factory.context.parent) !== null && _a !== void 0 ? _a : this.factory.context).hasDefinition(mr.name)) {
          if (originName === "loggerService") {
            throw new error_1.MidwayInconsistentVersionError();
          } else {
            throw new error_1.MidwayMissingImportComponentError(originName);
          }
        }
        return this.factory.context.get(mr.name, mr.args, {
          originName
        });
      }
      async resolveAsync(managed, originName) {
        var _a;
        const mr = managed;
        if (mr.injectMode === interface_1.InjectModeEnum.Class && !((_a = this.factory.context.parent) !== null && _a !== void 0 ? _a : this.factory.context).hasDefinition(mr.name)) {
          if (originName === "loggerService") {
            throw new error_1.MidwayInconsistentVersionError();
          } else {
            throw new error_1.MidwayMissingImportComponentError(originName);
          }
        }
        return this.factory.context.getAsync(mr.name, mr.args, {
          originName
        });
      }
    };
    var ManagedResolverFactory = class {
      constructor(context) {
        this.resolvers = {};
        this.creating = /* @__PURE__ */ new Map();
        this.singletonCache = /* @__PURE__ */ new Map();
        this.context = context;
        this.resolvers = {
          ref: new RefResolver(this)
        };
      }
      registerResolver(resolver) {
        this.resolvers[resolver.type] = resolver;
      }
      resolveManaged(managed, originPropertyName) {
        const resolver = this.resolvers[managed.type];
        if (!resolver || resolver.type !== managed.type) {
          throw new error_1.MidwayResolverMissingError(managed.type);
        }
        return resolver.resolve(managed, originPropertyName);
      }
      async resolveManagedAsync(managed, originPropertyName) {
        const resolver = this.resolvers[managed.type];
        if (!resolver || resolver.type !== managed.type) {
          throw new error_1.MidwayResolverMissingError(managed.type);
        }
        return resolver.resolveAsync(managed, originPropertyName);
      }
      /**
       * 同步创建对象
       * @param opt
       */
      create(opt) {
        const { definition, args } = opt;
        if (definition.isSingletonScope() && this.singletonCache.has(definition.id)) {
          return this.singletonCache.get(definition.id);
        }
        let inst = this.createProxyReference(definition);
        if (inst) {
          return inst;
        }
        this.compareAndSetCreateStatus(definition);
        if (definition.hasDependsOn()) {
          for (const dep of definition.dependsOn) {
            this.context.get(dep, args);
          }
        }
        debugLog(`[core]: Create id = "${definition.name}" ${definition.id}.`);
        const Clzz = definition.creator.load();
        let constructorArgs = [];
        if (args && Array.isArray(args) && args.length > 0) {
          constructorArgs = args;
        }
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.BEFORE_CREATED, Clzz, {
          constructorArgs,
          definition,
          context: this.context
        });
        inst = definition.creator.doConstruct(Clzz, constructorArgs, this.context);
        if (definition.isRequestScope() && definition.constructor.name === "ObjectDefinition") {
          Object.defineProperty(inst, constants_1.REQUEST_OBJ_CTX_KEY, {
            value: this.context.get(constants_1.REQUEST_CTX_KEY),
            writable: false,
            enumerable: false
          });
        }
        if (definition.properties) {
          const keys = definition.properties.propertyKeys();
          for (const key of keys) {
            this.checkSingletonInvokeRequest(definition, key);
            try {
              inst[key] = this.resolveManaged(definition.properties.get(key), key);
            } catch (error) {
              if (error_1.MidwayDefinitionNotFoundError.isClosePrototypeOf(error)) {
                const className = definition.path.name;
                error.updateErrorMsg(className);
              }
              this.removeCreateStatus(definition, true);
              throw error;
            }
          }
        }
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.AFTER_CREATED, inst, {
          context: this.context,
          definition,
          replaceCallback: (ins) => {
            inst = ins;
          }
        });
        definition.creator.doInit(inst);
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.AFTER_INIT, inst, {
          context: this.context,
          definition
        });
        if (definition.id) {
          if (definition.isSingletonScope()) {
            this.singletonCache.set(definition.id, inst);
            this.setInstanceScope(inst, interface_1.ScopeEnum.Singleton);
          } else if (definition.isRequestScope()) {
            this.context.registerObject(definition.id, inst);
            this.setInstanceScope(inst, interface_1.ScopeEnum.Request);
          } else {
            this.setInstanceScope(inst, interface_1.ScopeEnum.Prototype);
          }
        }
        this.removeCreateStatus(definition, true);
        return inst;
      }
      /**
       * 异步创建对象
       * @param opt
       */
      async createAsync(opt) {
        const { definition, args } = opt;
        if (definition.isSingletonScope() && this.singletonCache.has(definition.id)) {
          debug(`id = ${definition.id}(${definition.name}) get from singleton cache.`);
          return this.singletonCache.get(definition.id);
        }
        let inst = this.createProxyReference(definition);
        if (inst) {
          debug(`id = ${definition.id}(${definition.name}) from proxy reference.`);
          return inst;
        }
        this.compareAndSetCreateStatus(definition);
        if (definition.hasDependsOn()) {
          for (const dep of definition.dependsOn) {
            debug("id = %s init depend %s.", definition.id, dep);
            await this.context.getAsync(dep, args);
          }
        }
        debugLog(`[core]: Create id = "${definition.name}" ${definition.id}.`);
        const Clzz = definition.creator.load();
        let constructorArgs = [];
        if (args && Array.isArray(args) && args.length > 0) {
          constructorArgs = args;
        }
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.BEFORE_CREATED, Clzz, {
          constructorArgs,
          context: this.context
        });
        inst = await definition.creator.doConstructAsync(Clzz, constructorArgs, this.context);
        if (!inst) {
          this.removeCreateStatus(definition, false);
          throw new error_1.MidwayCommonError(`${definition.id} construct return undefined`);
        }
        if (definition.isRequestScope() && definition.constructor.name === "ObjectDefinition") {
          debug("id = %s inject ctx", definition.id);
          Object.defineProperty(inst, constants_1.REQUEST_OBJ_CTX_KEY, {
            value: this.context.get(constants_1.REQUEST_CTX_KEY),
            writable: false,
            enumerable: false
          });
        }
        if (definition.properties) {
          const keys = definition.properties.propertyKeys();
          for (const key of keys) {
            this.checkSingletonInvokeRequest(definition, key);
            try {
              inst[key] = await this.resolveManagedAsync(definition.properties.get(key), key);
            } catch (error) {
              if (error_1.MidwayDefinitionNotFoundError.isClosePrototypeOf(error)) {
                const className = definition.path.name;
                error.updateErrorMsg(className);
              }
              this.removeCreateStatus(definition, false);
              throw error;
            }
          }
        }
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.AFTER_CREATED, inst, {
          context: this.context,
          definition,
          replaceCallback: (ins) => {
            inst = ins;
          }
        });
        await definition.creator.doInitAsync(inst);
        this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.AFTER_INIT, inst, {
          context: this.context,
          definition
        });
        if (definition.id) {
          if (definition.isSingletonScope()) {
            debug(`id = ${definition.id}(${definition.name}) set to singleton cache`);
            this.singletonCache.set(definition.id, inst);
            this.setInstanceScope(inst, interface_1.ScopeEnum.Singleton);
          } else if (definition.isRequestScope()) {
            debug(`id = ${definition.id}(${definition.name}) set to register object`);
            this.context.registerObject(definition.id, inst);
            this.setInstanceScope(inst, interface_1.ScopeEnum.Request);
          } else {
            this.setInstanceScope(inst, interface_1.ScopeEnum.Prototype);
          }
        }
        this.removeCreateStatus(definition, true);
        return inst;
      }
      async destroyCache() {
        for (const key of this.singletonCache.keys()) {
          const definition = this.context.registry.getDefinition(key);
          if (definition.creator) {
            const inst = this.singletonCache.get(key);
            this.getObjectEventTarget().emit(interface_1.ObjectLifeCycleEvent.BEFORE_DESTROY, inst, {
              context: this.context,
              definition
            });
            await definition.creator.doDestroyAsync(inst);
          }
        }
        this.singletonCache.clear();
        this.creating.clear();
      }
      /**
       * 触发单例初始化结束事件
       * @param definition 单例定义
       * @param success 成功 or 失败
       */
      removeCreateStatus(definition, success) {
        if (this.creating.has(definition.id)) {
          this.creating.set(definition.id, false);
        }
        return true;
      }
      isCreating(definition) {
        return this.creating.has(definition.id) && this.creating.get(definition.id);
      }
      compareAndSetCreateStatus(definition) {
        if (!this.creating.has(definition.id) || !this.creating.get(definition.id)) {
          this.creating.set(definition.id, true);
        }
      }
      /**
       * 创建对象定义的代理访问逻辑
       * @param definition 对象定义
       */
      createProxyReference(definition) {
        if (this.isCreating(definition)) {
          debug("create proxy for %s.", definition.id);
          if (!this.depthFirstSearch(definition.id, definition)) {
            debug("id = %s after dfs return null", definition.id);
            return null;
          }
          return new Proxy({ __is_proxy__: true, __target_id__: definition.id }, {
            get: (obj, prop) => {
              let target;
              if (definition.isRequestScope()) {
                target = this.context.registry.getObject(definition.id);
              } else if (definition.isSingletonScope()) {
                target = this.singletonCache.get(definition.id);
              } else {
                target = this.context.get(definition.id);
              }
              if (target) {
                if (typeof target[prop] === "function") {
                  return target[prop].bind(target);
                }
                return target[prop];
              }
              return void 0;
            }
          });
        }
        return null;
      }
      /**
       * 遍历依赖树判断是否循环依赖
       * @param identifier 目标id
       * @param definition 定义描述
       * @param depth
       */
      depthFirstSearch(identifier, definition, depth) {
        var _a;
        if (definition) {
          debug("dfs for %s == %s start.", identifier, definition.id);
          if (definition.properties) {
            const keys = definition.properties.propertyKeys();
            if (keys.indexOf(identifier) > -1) {
              debug("dfs exist in properties %s == %s.", identifier, definition.id);
              return true;
            }
            for (const key of keys) {
              if (!Array.isArray(depth)) {
                depth = [identifier];
              }
              let iden = key;
              const ref = definition.properties.get(key);
              if (ref && ref.name) {
                iden = (_a = this.context.identifierMapping.getRelation(ref.name)) !== null && _a !== void 0 ? _a : ref.name;
              }
              if (iden === identifier) {
                debug("dfs exist in properties key %s == %s.", identifier, definition.id);
                return true;
              }
              if (depth.indexOf(iden) > -1) {
                debug("dfs depth circular %s == %s, %s, %j.", identifier, definition.id, iden, depth);
                continue;
              } else {
                depth.push(iden);
                debug("dfs depth push %s == %s, %j.", identifier, iden, depth);
              }
              let subDefinition = this.context.registry.getDefinition(iden);
              if (!subDefinition && this.context.parent) {
                subDefinition = this.context.parent.registry.getDefinition(iden);
              }
              if (this.depthFirstSearch(identifier, subDefinition, depth)) {
                debug("dfs exist in sub tree %s == %s subId = %s.", identifier, definition.id, subDefinition.id);
                return true;
              }
            }
          }
          debug("dfs for %s == %s end.", identifier, definition.id);
        }
        return false;
      }
      getObjectEventTarget() {
        if (this.context.parent) {
          return this.context.parent.objectCreateEventTarget;
        }
        return this.context.objectCreateEventTarget;
      }
      checkSingletonInvokeRequest(definition, key) {
        if (definition.isSingletonScope()) {
          const managedRef = definition.properties.get(key);
          if (this.context.hasDefinition(managedRef === null || managedRef === void 0 ? void 0 : managedRef.name)) {
            const propertyDefinition = this.context.registry.getDefinition(managedRef.name);
            if (propertyDefinition.isRequestScope() && !propertyDefinition.allowDowngrade) {
              throw new error_1.MidwaySingletonInjectRequestError(definition.path.name, propertyDefinition.path.name);
            }
          }
        }
        return true;
      }
      setInstanceScope(inst, scope) {
        if (typeof inst === "object") {
          if (scope === interface_1.ScopeEnum.Request && inst[constants_1.REQUEST_OBJ_CTX_KEY] === constants_1.SINGLETON_CONTAINER_CTX) {
            scope = interface_1.ScopeEnum.Singleton;
          }
          Object.defineProperty(inst, constants_1.CONTAINER_OBJ_SCOPE, {
            value: scope,
            writable: false,
            enumerable: false,
            configurable: false
          });
        }
      }
    };
    exports.ManagedResolverFactory = ManagedResolverFactory;
  }
});
var require_environmentService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/environmentService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayEnvironmentService = void 0;
    var interface_1 = require_interface();
    var util_1 = require_util();
    var decorator_1 = require_decorator();
    var MidwayEnvironmentService = class MidwayEnvironmentService {
      constructor() {
        this.moduleLoadType = "commonjs";
      }
      getCurrentEnvironment() {
        if (!this.environment) {
          this.environment = (0, util_1.getCurrentEnvironment)();
        }
        return this.environment;
      }
      setCurrentEnvironment(environment) {
        this.environment = environment;
      }
      isDevelopmentEnvironment() {
        return (0, util_1.isDevelopmentEnvironment)(this.environment);
      }
      setModuleLoadType(moduleLoadType) {
        this.moduleLoadType = moduleLoadType;
      }
      getModuleLoadType() {
        return this.moduleLoadType;
      }
      isPkgEnvironment() {
        return typeof process["pkg"] !== "undefined";
      }
    };
    MidwayEnvironmentService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayEnvironmentService);
    exports.MidwayEnvironmentService = MidwayEnvironmentService;
  }
});
var require_informationService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/informationService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayInformationService = void 0;
    var interface_1 = require_interface();
    var util_1 = require_util();
    var path_1 = __require2("path");
    var decorator_1 = require_decorator();
    var fs_1 = __require2("fs");
    var MidwayInformationService = class MidwayInformationService {
      init() {
        if (this.baseDir) {
          if (!this.appDir) {
            this.appDir = (0, path_1.dirname)(this.baseDir);
          }
          const pkgPath = (0, path_1.join)(this.appDir, "package.json");
          if ((0, fs_1.existsSync)(pkgPath)) {
            const content = (0, fs_1.readFileSync)(pkgPath, {
              encoding: "utf-8"
            });
            this.pkg = JSON.parse(content);
          } else {
            this.pkg = {};
          }
        } else {
          this.pkg = {};
        }
      }
      getAppDir() {
        return this.appDir;
      }
      getBaseDir() {
        return this.baseDir;
      }
      getHome() {
        return (0, util_1.getUserHome)();
      }
      getPkg() {
        return this.pkg;
      }
      getProjectName() {
        var _a;
        return ((_a = this.pkg) === null || _a === void 0 ? void 0 : _a["name"]) || "";
      }
      getRoot() {
        const isDevelopmentEnv = (0, util_1.isDevelopmentEnvironment)((0, util_1.getCurrentEnvironment)());
        return isDevelopmentEnv ? this.getAppDir() : this.getHome();
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", String)
    ], MidwayInformationService.prototype, "appDir", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", String)
    ], MidwayInformationService.prototype, "baseDir", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", void 0)
    ], MidwayInformationService.prototype, "init", null);
    MidwayInformationService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayInformationService);
    exports.MidwayInformationService = MidwayInformationService;
  }
});
var require_extend = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/extend.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extend = void 0;
    var types_1 = require_types();
    function extend(...args) {
      let options, name, src, copy, clone;
      let target = args[0];
      let i = 1;
      const length = args.length;
      let deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = args[1] || {};
        i = 2;
      } else if (typeof target !== "object" && typeof target !== "function" || target == null) {
        target = {};
      }
      for (; i < length; ++i) {
        options = args[i];
        if (options == null)
          continue;
        for (name in options) {
          if (name === "__proto__")
            continue;
          src = target[name];
          copy = options[name];
          if (target === copy)
            continue;
          if (deep && copy && types_1.Types.isPlainObject(copy)) {
            clone = src && types_1.Types.isPlainObject(src) ? src : {};
            target[name] = extend(deep, clone, copy);
          } else if (typeof copy !== "undefined") {
            target[name] = copy;
          }
        }
      }
      return target;
    }
    exports.extend = extend;
  }
});
var require_configService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/configService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayConfigService = void 0;
    var path_1 = __require2("path");
    var interface_1 = require_interface();
    var util_1 = require_util();
    var fs_1 = __require2("fs");
    var util = __require2("util");
    var environmentService_1 = require_environmentService();
    var informationService_1 = require_informationService();
    var extend_1 = require_extend();
    var error_1 = require_error();
    var decorator_1 = require_decorator();
    var types_1 = require_types();
    var debug = util.debuglog("midway:debug");
    var MidwayConfigService = class MidwayConfigService {
      constructor() {
        this.envDirMap = /* @__PURE__ */ new Map();
        this.aliasMap = {
          prod: "production",
          unittest: "test"
        };
        this.configMergeOrder = [];
        this.configuration = {};
        this.isReady = false;
        this.externalObject = [];
        this.configFilterList = [];
      }
      init() {
        this.appInfo = {
          pkg: this.informationService.getPkg(),
          name: this.informationService.getProjectName(),
          baseDir: this.informationService.getBaseDir(),
          appDir: this.informationService.getAppDir(),
          HOME: this.informationService.getHome(),
          root: this.informationService.getRoot(),
          env: this.environmentService.getCurrentEnvironment()
        };
      }
      add(configFilePaths) {
        for (const dir of configFilePaths) {
          if (typeof dir === "string") {
            if (/\.\w+$/.test(dir)) {
              const env = this.getConfigEnv(dir);
              const envSet = this.getEnvSet(env);
              envSet.add(dir);
              if (this.aliasMap[env]) {
                this.getEnvSet(this.aliasMap[env]).add(dir);
              }
            } else {
              const fileStat = (0, fs_1.statSync)(dir);
              if (fileStat.isDirectory()) {
                const files = (0, fs_1.readdirSync)(dir);
                this.add(files.map((file) => {
                  return (0, path_1.join)(dir, file);
                }));
              }
            }
          } else {
            for (const env in dir) {
              this.getEnvSet(env).add(dir[env]);
              if (this.aliasMap[env]) {
                this.getEnvSet(this.aliasMap[env]).add(dir[env]);
              }
            }
          }
        }
      }
      addObject(obj, reverse = false) {
        if (this.isReady) {
          obj = this.runWithFilter(obj);
          if (!obj) {
            debug("[config]: Filter config and got undefined will be drop it");
            return;
          }
          this.configMergeOrder.push({
            env: "default",
            extraPath: "",
            value: obj
          });
          if (reverse) {
            this.configuration = (0, extend_1.extend)(true, obj, this.configuration);
          } else {
            (0, extend_1.extend)(true, this.configuration, obj);
          }
        } else {
          this.externalObject.push(obj);
        }
      }
      getEnvSet(env) {
        if (!this.envDirMap.has(env)) {
          this.envDirMap.set(env, /* @__PURE__ */ new Set());
        }
        return this.envDirMap.get(env);
      }
      getConfigEnv(configFilePath) {
        const configFileBaseName = (0, path_1.basename)(configFilePath);
        const splits = configFileBaseName.split(".");
        const suffix = splits.pop();
        if (suffix !== "js" && suffix !== "ts") {
          return suffix;
        }
        return splits.pop();
      }
      load() {
        if (this.isReady)
          return;
        const defaultSet = this.getEnvSet("default");
        const currentEnvSet = this.getEnvSet(this.environmentService.getCurrentEnvironment());
        const target = {};
        const defaultSetLength = defaultSet.size;
        for (const [idx, filename] of [...defaultSet, ...currentEnvSet].entries()) {
          let config = this.loadConfig(filename);
          if (types_1.Types.isFunction(config)) {
            config = config.apply(null, [this.appInfo, target]);
          }
          if (!config) {
            continue;
          }
          config = this.runWithFilter(config);
          if (!config) {
            debug("[config]: Filter config and got undefined will be drop it");
            continue;
          }
          if (typeof filename === "string") {
            debug("[config]: Loaded config %s, %j", filename, config);
          } else {
            debug("[config]: Loaded config %j", config);
          }
          this.configMergeOrder.push({
            env: idx < defaultSetLength ? "default" : this.environmentService.getCurrentEnvironment(),
            extraPath: filename,
            value: config
          });
          (0, extend_1.extend)(true, target, config);
        }
        if (this.externalObject.length) {
          for (let externalObject of this.externalObject) {
            if (externalObject) {
              externalObject = this.runWithFilter(externalObject);
              if (!externalObject) {
                debug("[config]: Filter config and got undefined will be drop it");
                continue;
              }
              debug("[config]: Loaded external object %j", externalObject);
              (0, extend_1.extend)(true, target, externalObject);
              this.configMergeOrder.push({
                env: "default",
                extraPath: "",
                value: externalObject
              });
            }
          }
        }
        this.configuration = target;
        this.isReady = true;
      }
      getConfiguration(configKey) {
        if (configKey) {
          return (0, util_1.safelyGet)(configKey, this.configuration);
        }
        return this.configuration;
      }
      getConfigMergeOrder() {
        return this.configMergeOrder;
      }
      loadConfig(configFilename) {
        let exports2 = typeof configFilename === "string" ? __require2(configFilename) : configFilename;
        if (exports2 && exports2.__esModule) {
          if (exports2 && exports2.default) {
            if (Object.keys(exports2).length > 1) {
              throw new error_1.MidwayInvalidConfigError(`${configFilename} should not have both a default export and named export`);
            }
            exports2 = exports2.default;
          }
        }
        return exports2;
      }
      clearAllConfig() {
        this.configuration = {};
      }
      clearConfigMergeOrder() {
        this.configMergeOrder.length = 0;
      }
      /**
       * add a config filter
       * @param filter
       */
      addFilter(filter) {
        this.configFilterList.push(filter);
      }
      runWithFilter(config) {
        for (const filter of this.configFilterList) {
          debug(`[config]: Filter config by filter = "${filter.name || "anonymous filter"}"`);
          config = filter(config);
          debug("[config]: Filter config result = %j", config);
        }
        return config;
      }
      getAppInfo() {
        return this.appInfo;
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", environmentService_1.MidwayEnvironmentService)
    ], MidwayConfigService.prototype, "environmentService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", informationService_1.MidwayInformationService)
    ], MidwayConfigService.prototype, "informationService", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", void 0)
    ], MidwayConfigService.prototype, "init", null);
    MidwayConfigService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayConfigService);
    exports.MidwayConfigService = MidwayConfigService;
  }
});
var require_container = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/context/container.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayContainer = void 0;
    var decorator_1 = require_decorator();
    var configuration_1 = require_configuration2();
    var util = __require2("util");
    var definitionRegistry_1 = require_definitionRegistry();
    var interface_1 = require_interface();
    var constants_1 = require_constants();
    var objectDefinition_1 = require_objectDefinition();
    var functionDefinition_1 = require_functionDefinition();
    var managedResolverFactory_1 = require_managedResolverFactory();
    var environmentService_1 = require_environmentService();
    var configService_1 = require_configService();
    var EventEmitter = __require2("events");
    var error_1 = require_error();
    var types_1 = require_types();
    var util_1 = require_util();
    var debug = util.debuglog("midway:debug");
    var debugBind = util.debuglog("midway:bind");
    var debugSpaceLength = 9;
    var ContainerConfiguration = class {
      constructor(container) {
        this.container = container;
        this.loadedMap = /* @__PURE__ */ new WeakMap();
        this.namespaceList = [];
        this.configurationOptionsList = [];
      }
      load(module2) {
        let namespace = decorator_1.MAIN_MODULE_KEY;
        const configurationExports = this.getConfigurationExport(module2);
        if (!configurationExports.length)
          return;
        for (let i = 0; i < configurationExports.length; i++) {
          const configurationExport = configurationExports[i];
          if (this.loadedMap.get(configurationExport)) {
            continue;
          }
          let configurationOptions;
          if (configurationExport instanceof configuration_1.FunctionalConfiguration) {
            configurationOptions = configurationExport.getConfigurationOptions();
          } else {
            configurationOptions = (0, decorator_1.getClassMetadata)(decorator_1.CONFIGURATION_KEY, configurationExport);
          }
          this.loadedMap.set(configurationExport, true);
          if (configurationOptions) {
            if (configurationOptions.namespace !== void 0) {
              namespace = configurationOptions.namespace;
              this.namespaceList.push(namespace);
            }
            this.configurationOptionsList.push(configurationOptions);
            debug(`[core]: load configuration in namespace="${namespace}"`);
            this.addImports(configurationOptions.imports);
            this.addImportObjects(configurationOptions.importObjects);
            this.addImportConfigs(configurationOptions.importConfigs);
            this.addImportConfigFilter(configurationOptions.importConfigFilter);
            this.bindConfigurationClass(configurationExport, namespace);
          }
        }
        this.container.bindClass(module2, {
          namespace
        });
      }
      addImportConfigs(importConfigs) {
        if (importConfigs) {
          if (Array.isArray(importConfigs)) {
            this.container.get(configService_1.MidwayConfigService).add(importConfigs);
          } else {
            this.container.get(configService_1.MidwayConfigService).addObject(importConfigs);
          }
        }
      }
      addImportConfigFilter(importConfigFilter) {
        if (importConfigFilter) {
          this.container.get(configService_1.MidwayConfigService).addFilter(importConfigFilter);
        }
      }
      addImports(imports = []) {
        var _a;
        for (let importPackage of imports) {
          if (!importPackage)
            continue;
          if (typeof importPackage === "string") {
            importPackage = __require2(importPackage);
          }
          if ("Configuration" in importPackage) {
            this.load(importPackage);
          } else if ("component" in importPackage) {
            if (importPackage === null || importPackage === void 0 ? void 0 : importPackage.enabledEnvironment) {
              if ((_a = importPackage === null || importPackage === void 0 ? void 0 : importPackage.enabledEnvironment) === null || _a === void 0 ? void 0 : _a.includes(this.container.get(environmentService_1.MidwayEnvironmentService).getCurrentEnvironment())) {
                this.load(importPackage.component);
              }
            } else {
              this.load(importPackage.component);
            }
          } else {
            this.load(importPackage);
          }
        }
      }
      /**
       * 注册 importObjects
       * @param objs configuration 中的 importObjects
       */
      addImportObjects(objs) {
        if (objs) {
          const keys = Object.keys(objs);
          for (const key of keys) {
            if (typeof objs[key] !== void 0) {
              this.container.registerObject(key, objs[key]);
            }
          }
        }
      }
      bindConfigurationClass(clzz, namespace) {
        if (clzz instanceof configuration_1.FunctionalConfiguration) {
        } else {
          (0, decorator_1.saveProviderId)(void 0, clzz);
          const id = (0, decorator_1.getProviderUUId)(clzz);
          this.container.bind(id, clzz, {
            namespace,
            scope: interface_1.ScopeEnum.Singleton
          });
        }
        const configurationMods = (0, decorator_1.listModule)(decorator_1.CONFIGURATION_KEY);
        const exists = configurationMods.find((mod) => {
          return mod.target === clzz;
        });
        if (!exists) {
          (0, decorator_1.saveModule)(decorator_1.CONFIGURATION_KEY, {
            target: clzz,
            namespace
          });
        }
      }
      getConfigurationExport(exports2) {
        const mods = [];
        if (types_1.Types.isClass(exports2) || types_1.Types.isFunction(exports2) || exports2 instanceof configuration_1.FunctionalConfiguration) {
          mods.push(exports2);
        } else {
          for (const m in exports2) {
            const module2 = exports2[m];
            if (types_1.Types.isClass(module2) || types_1.Types.isFunction(module2) || module2 instanceof configuration_1.FunctionalConfiguration) {
              mods.push(module2);
            }
          }
        }
        return mods;
      }
      getNamespaceList() {
        return this.namespaceList;
      }
      getConfigurationOptionsList() {
        return this.configurationOptionsList;
      }
    };
    var MidwayContainer = class _MidwayContainer {
      constructor(parent) {
        this._resolverFactory = null;
        this._registry = null;
        this._identifierMapping = null;
        this.moduleMap = null;
        this.parent = null;
        this.ctx = constants_1.SINGLETON_CONTAINER_CTX;
        this.attrMap = /* @__PURE__ */ new Map();
        this._namespaceSet = null;
        this.parent = parent;
        this.init();
      }
      init() {
        this.registerObject(constants_1.REQUEST_CTX_KEY, this.ctx);
      }
      get objectCreateEventTarget() {
        if (!this._objectCreateEventTarget) {
          this._objectCreateEventTarget = new EventEmitter();
        }
        return this._objectCreateEventTarget;
      }
      get registry() {
        if (!this._registry) {
          this._registry = new definitionRegistry_1.ObjectDefinitionRegistry();
        }
        return this._registry;
      }
      set registry(registry) {
        this._registry = registry;
      }
      get managedResolverFactory() {
        if (!this._resolverFactory) {
          this._resolverFactory = new managedResolverFactory_1.ManagedResolverFactory(this);
        }
        return this._resolverFactory;
      }
      get identifierMapping() {
        if (!this._identifierMapping) {
          this._identifierMapping = this.registry.getIdentifierRelation();
        }
        return this._identifierMapping;
      }
      get namespaceSet() {
        if (!this._namespaceSet) {
          this._namespaceSet = /* @__PURE__ */ new Set();
        }
        return this._namespaceSet;
      }
      load(module2) {
        var _a, _b, _c;
        if (!Array.isArray(module2)) {
          module2 = [module2];
        }
        const configuration = new ContainerConfiguration(this);
        for (const mod of module2) {
          if (mod) {
            configuration.load(mod);
          }
        }
        for (const ns of configuration.getNamespaceList()) {
          this.namespaceSet.add(ns);
          debug(`[core]: load configuration in namespace="${ns}" complete`);
        }
        const configurationOptionsList = (_a = configuration.getConfigurationOptionsList()) !== null && _a !== void 0 ? _a : [];
        const userCodeConfiguration = (_b = configurationOptionsList.find((options) => !options.namespace)) !== null && _b !== void 0 ? _b : {};
        this.fileDetector = (_c = userCodeConfiguration.detector) !== null && _c !== void 0 ? _c : this.fileDetector;
        if (this.fileDetector) {
          this.fileDetector.setExtraDetectorOptions({
            conflictCheck: userCodeConfiguration.conflictCheck,
            ...userCodeConfiguration.detectorOptions
          });
        }
      }
      loadDefinitions() {
        if (this.fileDetector) {
          return this.fileDetector.run(this);
        }
      }
      bindClass(exports2, options) {
        if (types_1.Types.isClass(exports2) || types_1.Types.isFunction(exports2)) {
          this.bindModule(exports2, options);
        } else {
          for (const m in exports2) {
            const module2 = exports2[m];
            if (types_1.Types.isClass(module2) || types_1.Types.isFunction(module2)) {
              this.bindModule(module2, options);
            }
          }
        }
      }
      bind(identifier, target, options) {
        var _a;
        if (types_1.Types.isClass(identifier) || types_1.Types.isFunction(identifier)) {
          return this.bindModule(identifier, target);
        }
        if (this.registry.hasDefinition(identifier)) {
          return;
        }
        if (options === null || options === void 0 ? void 0 : options.bindHook) {
          options.bindHook(target, options);
        }
        let definition;
        if (types_1.Types.isClass(target)) {
          definition = new objectDefinition_1.ObjectDefinition();
          definition.name = (0, decorator_1.getProviderName)(target);
        } else {
          definition = new functionDefinition_1.FunctionDefinition();
          if (!types_1.Types.isAsyncFunction(target)) {
            definition.asynchronous = false;
          }
          definition.name = definition.id;
        }
        definition.path = target;
        definition.id = identifier;
        definition.srcPath = (options === null || options === void 0 ? void 0 : options.srcPath) || null;
        definition.namespace = (options === null || options === void 0 ? void 0 : options.namespace) || "";
        definition.scope = (options === null || options === void 0 ? void 0 : options.scope) || interface_1.ScopeEnum.Request;
        definition.createFrom = options === null || options === void 0 ? void 0 : options.createFrom;
        if (definition.srcPath) {
          debug(`[core]: bind id "${definition.name} (${definition.srcPath}) ${identifier}"`);
        } else {
          debug(`[core]: bind id "${definition.name}" ${identifier}`);
        }
        const props = (0, decorator_1.getPropertyInject)(target);
        for (const p in props) {
          const propertyMeta = props[p];
          debugBind(`${" ".repeat(debugSpaceLength)}inject properties => [${JSON.stringify(propertyMeta)}]`);
          const refManaged = new managedResolverFactory_1.ManagedReference();
          refManaged.args = propertyMeta.args;
          refManaged.name = propertyMeta.value;
          refManaged.injectMode = propertyMeta["injectMode"];
          definition.properties.set(propertyMeta["targetKey"], refManaged);
        }
        const customProps = (0, decorator_1.getClassExtendedMetadata)(decorator_1.INJECT_CUSTOM_PROPERTY, target);
        for (const p in customProps) {
          const propertyMeta = customProps[p];
          definition.handlerProps.push(propertyMeta);
        }
        const objDefOptions = (_a = (0, decorator_1.getObjectDefinition)(target)) !== null && _a !== void 0 ? _a : {};
        if (objDefOptions.initMethod) {
          debugBind(`${" ".repeat(debugSpaceLength)}register initMethod = ${objDefOptions.initMethod}`);
          definition.initMethod = objDefOptions.initMethod;
        }
        if (objDefOptions.destroyMethod) {
          debugBind(`${" ".repeat(debugSpaceLength)}register destroyMethod = ${objDefOptions.destroyMethod}`);
          definition.destroyMethod = objDefOptions.destroyMethod;
        }
        if (objDefOptions.scope) {
          debugBind(`${" ".repeat(debugSpaceLength)}register scope = ${objDefOptions.scope}`);
          definition.scope = objDefOptions.scope;
        }
        if (objDefOptions.allowDowngrade) {
          debugBind(`${" ".repeat(debugSpaceLength)}register allowDowngrade = ${objDefOptions.allowDowngrade}`);
          definition.allowDowngrade = objDefOptions.allowDowngrade;
        }
        this.objectCreateEventTarget.emit(interface_1.ObjectLifeCycleEvent.BEFORE_BIND, target, {
          context: this,
          definition,
          replaceCallback: (newDefinition) => {
            definition = newDefinition;
          }
        });
        if (definition) {
          this.registry.registerDefinition(definition.id, definition);
        }
      }
      bindModule(module2, options) {
        if (types_1.Types.isClass(module2)) {
          const providerId = (0, decorator_1.getProviderUUId)(module2);
          if (providerId) {
            this.identifierMapping.saveClassRelation(module2, options === null || options === void 0 ? void 0 : options.namespace);
            this.bind(providerId, module2, options);
          } else {
          }
        } else {
          const info = module2[constants_1.FUNCTION_INJECT_KEY];
          if (info && info.id) {
            if (!info.scope) {
              info.scope = interface_1.ScopeEnum.Request;
            }
            const uuid = util_1.Utils.generateRandomId();
            this.identifierMapping.saveFunctionRelation(info.id, uuid);
            this.bind(uuid, module2, {
              scope: info.scope,
              namespace: options.namespace,
              srcPath: options.srcPath,
              createFrom: options.createFrom
            });
          }
        }
      }
      setFileDetector(fileDetector) {
        this.fileDetector = fileDetector;
      }
      createChild() {
        return new _MidwayContainer(this);
      }
      setAttr(key, value) {
        this.attrMap.set(key, value);
      }
      getAttr(key) {
        return this.attrMap.get(key);
      }
      getIdentifier(target) {
        return (0, decorator_1.getProviderUUId)(target);
      }
      getManagedResolverFactory() {
        if (!this._resolverFactory) {
          this._resolverFactory = new managedResolverFactory_1.ManagedResolverFactory(this);
        }
        return this._resolverFactory;
      }
      async stop() {
        await this.getManagedResolverFactory().destroyCache();
        this.registry.clearAll();
      }
      ready() {
        return this.loadDefinitions();
      }
      get(identifier, args, objectContext) {
        var _a;
        args = args !== null && args !== void 0 ? args : [];
        objectContext = objectContext !== null && objectContext !== void 0 ? objectContext : { originName: identifier };
        if (typeof identifier !== "string") {
          objectContext.originName = identifier.name;
          identifier = this.getIdentifier(identifier);
        }
        if (this.registry.hasObject(identifier)) {
          return this.registry.getObject(identifier);
        }
        const definition = this.registry.getDefinition(identifier);
        if (!definition && this.parent) {
          return this.parent.get(identifier, args);
        }
        if (!definition) {
          throw new error_1.MidwayDefinitionNotFoundError((_a = objectContext === null || objectContext === void 0 ? void 0 : objectContext.originName) !== null && _a !== void 0 ? _a : identifier);
        }
        return this.getManagedResolverFactory().create({ definition, args });
      }
      async getAsync(identifier, args, objectContext) {
        var _a;
        args = args !== null && args !== void 0 ? args : [];
        objectContext = objectContext !== null && objectContext !== void 0 ? objectContext : { originName: identifier };
        if (typeof identifier !== "string") {
          objectContext.originName = identifier.name;
          identifier = this.getIdentifier(identifier);
        }
        if (this.registry.hasObject(identifier)) {
          return this.registry.getObject(identifier);
        }
        const definition = this.registry.getDefinition(identifier);
        if (!definition && this.parent) {
          return this.parent.getAsync(identifier, args);
        }
        if (!definition) {
          throw new error_1.MidwayDefinitionNotFoundError((_a = objectContext === null || objectContext === void 0 ? void 0 : objectContext.originName) !== null && _a !== void 0 ? _a : identifier);
        }
        return this.getManagedResolverFactory().createAsync({ definition, args });
      }
      /**
       * proxy registry.registerObject
       * @param {ObjectIdentifier} identifier
       * @param target
       */
      registerObject(identifier, target) {
        this.registry.registerObject(identifier, target);
      }
      onBeforeBind(fn) {
        this.objectCreateEventTarget.on(interface_1.ObjectLifeCycleEvent.BEFORE_BIND, fn);
      }
      onBeforeObjectCreated(fn) {
        this.objectCreateEventTarget.on(interface_1.ObjectLifeCycleEvent.BEFORE_CREATED, fn);
      }
      onObjectCreated(fn) {
        this.objectCreateEventTarget.on(interface_1.ObjectLifeCycleEvent.AFTER_CREATED, fn);
      }
      onObjectInit(fn) {
        this.objectCreateEventTarget.on(interface_1.ObjectLifeCycleEvent.AFTER_INIT, fn);
      }
      onBeforeObjectDestroy(fn) {
        this.objectCreateEventTarget.on(interface_1.ObjectLifeCycleEvent.BEFORE_DESTROY, fn);
      }
      saveModule(key, module2) {
        if (!this.moduleMap.has(key)) {
          this.moduleMap.set(key, /* @__PURE__ */ new Set());
        }
        this.moduleMap.get(key).add(module2);
      }
      listModule(key) {
        return Array.from(this.moduleMap.get(key) || {});
      }
      transformModule(moduleMap) {
        this.moduleMap = new Map(moduleMap);
      }
      hasNamespace(ns) {
        return this.namespaceSet.has(ns);
      }
      getNamespaceList() {
        return Array.from(this.namespaceSet);
      }
      hasDefinition(identifier) {
        return this.registry.hasDefinition(identifier);
      }
      hasObject(identifier) {
        return this.registry.hasObject(identifier);
      }
      getInstanceScope(instance) {
        if (instance[constants_1.CONTAINER_OBJ_SCOPE]) {
          return instance[constants_1.CONTAINER_OBJ_SCOPE];
        }
        return void 0;
      }
    };
    exports.MidwayContainer = MidwayContainer;
  }
});
var require_requestContainer = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/context/requestContainer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayRequestContainer = void 0;
    var container_1 = require_container();
    var decorator_1 = require_decorator();
    var constants_1 = require_constants();
    var MidwayRequestContainer = class extends container_1.MidwayContainer {
      constructor(ctx, applicationContext) {
        super(applicationContext);
        this.applicationContext = applicationContext;
        this.registry.setIdentifierRelation(this.applicationContext.registry.getIdentifierRelation());
        this.ctx = ctx;
        this.registerObject(constants_1.REQUEST_CTX_KEY, ctx);
        this.registerObject("res", {});
        if (ctx.logger) {
          this.registerObject("logger", ctx.logger);
        }
      }
      init() {
      }
      get(identifier, args) {
        if (typeof identifier !== "string") {
          identifier = this.getIdentifier(identifier);
        }
        if (this.registry.hasObject(identifier)) {
          return this.registry.getObject(identifier);
        }
        const definition = this.applicationContext.registry.getDefinition(identifier);
        if (definition) {
          if (definition.isRequestScope() || definition.id === decorator_1.PIPELINE_IDENTIFIER) {
            return this.getManagedResolverFactory().create({
              definition,
              args
            });
          }
        }
        if (this.parent) {
          return this.parent.get(identifier, args);
        }
      }
      async getAsync(identifier, args) {
        if (typeof identifier !== "string") {
          identifier = this.getIdentifier(identifier);
        }
        if (this.registry.hasObject(identifier)) {
          return this.registry.getObject(identifier);
        }
        const definition = this.applicationContext.registry.getDefinition(identifier);
        if (definition) {
          if (definition.isRequestScope() || definition.id === decorator_1.PIPELINE_IDENTIFIER) {
            return this.getManagedResolverFactory().createAsync({
              definition,
              args
            });
          }
        }
        if (this.parent) {
          return this.parent.getAsync(identifier, args);
        }
      }
      async ready() {
      }
      getContext() {
        return this.ctx;
      }
    };
    exports.MidwayRequestContainer = MidwayRequestContainer;
  }
});
var require_priorityManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/priorityManager.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayPriorityManager = exports.DEFAULT_PRIORITY = void 0;
    var decorator_1 = require_decorator();
    var interface_1 = require_interface();
    exports.DEFAULT_PRIORITY = {
      L1: "High",
      L2: "Medium",
      L3: "Low"
    };
    var MidwayPriorityManager = class MidwayPriorityManager {
      constructor() {
        this.priorityList = exports.DEFAULT_PRIORITY;
        this.defaultPriority = exports.DEFAULT_PRIORITY.L2;
      }
      getCurrentPriorityList() {
        return this.priorityList;
      }
      getDefaultPriority() {
        return this.defaultPriority;
      }
      isHighPriority(priority = exports.DEFAULT_PRIORITY.L2) {
        return priority === exports.DEFAULT_PRIORITY.L1;
      }
      isMediumPriority(priority = exports.DEFAULT_PRIORITY.L2) {
        return priority === exports.DEFAULT_PRIORITY.L2;
      }
      isLowPriority(priority = exports.DEFAULT_PRIORITY.L2) {
        return priority === exports.DEFAULT_PRIORITY.L3;
      }
      getPriority(priority) {
        return priority || this.getDefaultPriority();
      }
    };
    MidwayPriorityManager = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayPriorityManager);
    exports.MidwayPriorityManager = MidwayPriorityManager;
  }
});
var require_serviceFactory = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/serviceFactory.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceFactory = void 0;
    var extend_1 = require_extend();
    var priorityManager_1 = require_priorityManager();
    var decorator_1 = require_decorator();
    var ServiceFactory = class {
      constructor() {
        this.clients = /* @__PURE__ */ new Map();
        this.options = {};
      }
      async initClients(options = {}) {
        this.options = options;
        if (options.client) {
          options.clients = options.clients || {};
          options.clients["default"] = options.clients["default"] || {};
          (0, extend_1.extend)(true, options.clients["default"], options.client);
        }
        if (options.clients) {
          for (const id of Object.keys(options.clients)) {
            await this.createInstance(options.clients[id], id);
          }
        }
        this.clientPriority = options.priority || {};
      }
      get(id = "default") {
        return this.clients.get(id);
      }
      has(id) {
        return this.clients.has(id);
      }
      async createInstance(config, clientName) {
        config = (0, extend_1.extend)(true, {}, this.options["default"], config);
        const client = await this.createClient(config, clientName);
        if (client) {
          if (clientName) {
            this.clients.set(clientName, client);
          }
          return client;
        }
      }
      async destroyClient(client, clientName) {
      }
      async stop() {
        for (const [name, value] of this.clients.entries()) {
          await this.destroyClient(value, name);
        }
      }
      getDefaultClientName() {
        return this.options["defaultClientName"];
      }
      getClients() {
        return this.clients;
      }
      getClientKeys() {
        return Array.from(this.clients.keys());
      }
      getClientPriority(name) {
        return this.priorityManager.getPriority(this.clientPriority[name]);
      }
      isHighPriority(name) {
        return this.priorityManager.isHighPriority(this.clientPriority[name]);
      }
      isMediumPriority(name) {
        return this.priorityManager.isMediumPriority(this.clientPriority[name]);
      }
      isLowPriority(name) {
        return this.priorityManager.isLowPriority(this.clientPriority[name]);
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", priorityManager_1.MidwayPriorityManager)
    ], ServiceFactory.prototype, "priorityManager", void 0);
    exports.ServiceFactory = ServiceFactory;
  }
});
var require_loggerFactory = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/loggerFactory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultConsoleLoggerFactory = exports.LoggerFactory = void 0;
    var LoggerFactory = class {
    };
    exports.LoggerFactory = LoggerFactory;
    var DefaultConsoleLoggerFactory = class {
      constructor() {
        this.instance = /* @__PURE__ */ new Map();
      }
      createLogger(name, options) {
        this.instance.set(name, console);
        return console;
      }
      getLogger(loggerName) {
        return this.instance.get(loggerName);
      }
      close(loggerName) {
      }
      removeLogger(loggerName) {
      }
      getDefaultMidwayLoggerConfig() {
        return {
          midwayLogger: {
            default: {},
            clients: {
              coreLogger: {},
              appLogger: {}
            }
          }
        };
      }
      createContextLogger(ctx, appLogger, contextOptions) {
        return appLogger;
      }
      getClients() {
        return this.instance;
      }
      getClientKeys() {
        return Array.from(this.instance.keys());
      }
    };
    exports.DefaultConsoleLoggerFactory = DefaultConsoleLoggerFactory;
  }
});
var require_loggerService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/loggerService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayLoggerService = void 0;
    var decorator_1 = require_decorator();
    var configService_1 = require_configService();
    var serviceFactory_1 = require_serviceFactory();
    var interface_1 = require_interface();
    var loggerFactory_1 = require_loggerFactory();
    var error_1 = require_error();
    var MidwayLoggerService = class MidwayLoggerService extends serviceFactory_1.ServiceFactory {
      constructor(applicationContext, globalOptions = {}) {
        super();
        this.applicationContext = applicationContext;
        this.globalOptions = globalOptions;
        this.lazyLoggerConfigMap = /* @__PURE__ */ new Map();
        this.aliasLoggerMap = /* @__PURE__ */ new Map();
      }
      init() {
        var _a;
        const loggerFactory = this.configService.getConfiguration("loggerFactory");
        this.loggerFactory = loggerFactory || this.globalOptions["loggerFactory"] || new loggerFactory_1.DefaultConsoleLoggerFactory();
        if (!this.loggerFactory.getDefaultMidwayLoggerConfig) {
          throw new error_1.MidwayFeatureNoLongerSupportedError("please upgrade your @midwayjs/logger to latest version");
        }
        const defaultLoggerConfig = this.loggerFactory.getDefaultMidwayLoggerConfig(this.configService.getAppInfo());
        this.configService.addObject(defaultLoggerConfig, true);
        this.initClients(this.configService.getConfiguration("midwayLogger"));
        (_a = this.applicationContext) === null || _a === void 0 ? void 0 : _a.registerObject("logger", this.getLogger("appLogger"));
      }
      createClient(config, name) {
        if (config.aliasName) {
          this.aliasLoggerMap.set(config.aliasName, name);
        }
        if (!config.lazyLoad) {
          this.loggerFactory.createLogger(name, config);
        } else {
          delete config["lazyLoad"];
          this.lazyLoggerConfigMap.set(name, config);
        }
      }
      getName() {
        return "logger";
      }
      createLogger(name, config) {
        delete config["aliasName"];
        return this.loggerFactory.createLogger(name, config);
      }
      getLogger(name) {
        if (this.aliasLoggerMap.has(name)) {
          name = this.aliasLoggerMap.get(name);
        }
        const logger = this.loggerFactory.getLogger(name);
        if (logger) {
          return logger;
        }
        if (this.lazyLoggerConfigMap.has(name)) {
          this.createClient(this.lazyLoggerConfigMap.get(name), name);
          this.lazyLoggerConfigMap.delete(name);
        }
        return this.loggerFactory.getLogger(name);
      }
      getCurrentLoggerFactory() {
        return this.loggerFactory;
      }
      createContextLogger(ctx, appLogger, contextOptions) {
        return this.loggerFactory.createContextLogger(ctx, appLogger, contextOptions);
      }
      getClients() {
        return this.clients;
      }
      getClientKeys() {
        return Array.from(this.clients.keys());
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", configService_1.MidwayConfigService)
    ], MidwayLoggerService.prototype, "configService", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", void 0)
    ], MidwayLoggerService.prototype, "init", null);
    MidwayLoggerService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object, Object])
    ], MidwayLoggerService);
    exports.MidwayLoggerService = MidwayLoggerService;
  }
});
var require_middlewareManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/middlewareManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMiddleware = exports.ContextMiddlewareManager = void 0;
    var ContextMiddlewareManager = class extends Array {
      /**
       * insert a middleware or middleware array to first
       * @param middleware
       */
      insertFirst(middleware) {
        if (Array.isArray(middleware)) {
          this.unshift(...middleware);
        } else {
          this.unshift(middleware);
        }
      }
      /**
       * insert a middleware or middleware array to last
       * @param middleware
       */
      insertLast(middleware) {
        if (Array.isArray(middleware)) {
          this.push(...middleware);
        } else {
          this.push(middleware);
        }
      }
      /**
       * insert a middleware or middleware array to after another middleware
       * @param middleware
       * @param idxOrBeforeMiddleware
       */
      insertBefore(middleware, idxOrBeforeMiddleware) {
        if (typeof idxOrBeforeMiddleware !== "number") {
          idxOrBeforeMiddleware = this.findItemIndex(idxOrBeforeMiddleware);
        }
        if (Array.isArray(middleware)) {
          this.splice(idxOrBeforeMiddleware, 0, ...middleware);
        } else {
          this.splice(idxOrBeforeMiddleware, 0, middleware);
        }
      }
      /**
       * insert a middleware or middleware array to after another middleware
       * @param middleware
       * @param idxOrAfterMiddleware
       */
      insertAfter(middleware, idxOrAfterMiddleware) {
        if (typeof idxOrAfterMiddleware !== "number") {
          idxOrAfterMiddleware = this.findItemIndex(idxOrAfterMiddleware);
        }
        if (Array.isArray(middleware)) {
          this.splice(idxOrAfterMiddleware + 1, 0, ...middleware);
        } else {
          this.splice(idxOrAfterMiddleware + 1, 0, middleware);
        }
      }
      /**
       * move a middleware after another middleware
       * @param middlewareOrName
       * @param afterMiddleware
       */
      findAndInsertAfter(middlewareOrName, afterMiddleware) {
        middlewareOrName = this.findItem(middlewareOrName);
        afterMiddleware = this.findItem(afterMiddleware);
        if (!middlewareOrName || !afterMiddleware || middlewareOrName === afterMiddleware) {
          return;
        }
        if (afterMiddleware) {
          const mw = this.remove(middlewareOrName);
          if (mw) {
            this.insertAfter(mw, afterMiddleware);
          }
        }
      }
      /**
       * move a middleware before another middleware
       * @param middlewareOrName
       * @param beforeMiddleware
       */
      findAndInsertBefore(middlewareOrName, beforeMiddleware) {
        middlewareOrName = this.findItem(middlewareOrName);
        beforeMiddleware = this.findItem(beforeMiddleware);
        if (!middlewareOrName || !beforeMiddleware || middlewareOrName === beforeMiddleware) {
          return;
        }
        if (beforeMiddleware) {
          const mw = this.remove(middlewareOrName);
          if (mw) {
            this.insertBefore(mw, beforeMiddleware);
          }
        }
      }
      /**
       * find middleware and move to first
       * @param middlewareOrName
       */
      findAndInsertFirst(middlewareOrName) {
        const mw = this.remove(middlewareOrName);
        if (mw) {
          this.insertFirst(mw);
        }
      }
      /**
       * find middleware and move to last
       * @param middlewareOrName
       */
      findAndInsertLast(middlewareOrName) {
        const mw = this.remove(middlewareOrName);
        if (mw) {
          this.insertLast(mw);
        }
      }
      /**
       * find a middleware and return index
       * @param middlewareOrName
       */
      findItemIndex(middlewareOrName) {
        if (typeof middlewareOrName === "number") {
          return middlewareOrName;
        } else if (typeof middlewareOrName === "string") {
          return this.findIndex((item) => this.getMiddlewareName(item) === middlewareOrName);
        } else {
          return this.findIndex((item) => item === middlewareOrName);
        }
      }
      findItem(middlewareOrName) {
        if (typeof middlewareOrName === "number") {
          if (middlewareOrName >= 0 && middlewareOrName <= this.length - 1) {
            return this[middlewareOrName];
          }
        } else if (typeof middlewareOrName === "string") {
          return this.find((item) => this.getMiddlewareName(item) === middlewareOrName);
        } else {
          return middlewareOrName;
        }
      }
      /**
       * get name from middleware
       * @param middleware
       */
      getMiddlewareName(middleware) {
        var _a, _b, _c;
        if (middleware["middleware"]) {
          return (_a = middleware.name) !== null && _a !== void 0 ? _a : this.getMiddlewareName(middleware["middleware"]);
        }
        return (_c = (_b = middleware.getName && middleware.getName()) !== null && _b !== void 0 ? _b : middleware._name) !== null && _c !== void 0 ? _c : middleware.name;
      }
      /**
       * remove a middleware
       * @param middlewareOrNameOrIdx
       */
      remove(middlewareOrNameOrIdx) {
        if (typeof middlewareOrNameOrIdx === "number" && middlewareOrNameOrIdx !== -1) {
          return this.splice(middlewareOrNameOrIdx, 1)[0];
        } else {
          const idx = this.findItemIndex(middlewareOrNameOrIdx);
          if (idx !== -1) {
            return this.splice(idx, 1)[0];
          }
        }
      }
      push(...items) {
        items.forEach((item) => {
          if (typeof item !== "string" && !this.getMiddlewareName(item)) {
            item._name = "anonymous";
          }
        });
        return super.push(...items);
      }
      unshift(...items) {
        items.forEach((item) => {
          if (typeof item !== "string" && !this.getMiddlewareName(item)) {
            item._name = "anonymous";
          }
        });
        return super.unshift(...items);
      }
      /**
       * get middleware name list
       */
      getNames() {
        return this.map((item) => {
          return this.getMiddlewareName(item);
        });
      }
    };
    exports.ContextMiddlewareManager = ContextMiddlewareManager;
    function createMiddleware(middleware, options, name) {
      return {
        middleware,
        options,
        name
      };
    }
    exports.createMiddleware = createMiddleware;
  }
});
var require_middlewareService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/middlewareService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayMiddlewareService = void 0;
    var decorator_1 = require_decorator();
    var interface_1 = require_interface();
    var error_1 = require_error();
    var util_1 = require_util();
    var types_1 = require_types();
    var util_2 = __require2("util");
    var debug = (0, util_2.debuglog)("midway:debug");
    var MidwayMiddlewareService = class MidwayMiddlewareService {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
      }
      async compose(middleware, app2, name) {
        var _a;
        if (!Array.isArray(middleware)) {
          throw new error_1.MidwayParameterError("Middleware stack must be an array");
        }
        const newMiddlewareArr = [];
        for (let fn of middleware) {
          if (types_1.Types.isClass(fn) || typeof fn === "string" || (fn === null || fn === void 0 ? void 0 : fn["middleware"])) {
            let mw = (_a = fn === null || fn === void 0 ? void 0 : fn["middleware"]) !== null && _a !== void 0 ? _a : fn;
            const mwConfig = fn === null || fn === void 0 ? void 0 : fn["options"];
            let mwName = fn === null || fn === void 0 ? void 0 : fn["name"];
            if (typeof mw === "string" && !this.applicationContext.hasDefinition(mw)) {
              throw new error_1.MidwayCommonError(`Middleware definition of "${mw}" not found in midway container`);
            }
            const classMiddleware = await this.applicationContext.getAsync(mw);
            if (classMiddleware) {
              mwName = mwName !== null && mwName !== void 0 ? mwName : classMiddleware.constructor.name;
              mw = await classMiddleware.resolve(app2, mwConfig);
              if (!mw) {
                continue;
              }
              if (!classMiddleware.match && !classMiddleware.ignore) {
                if (!mw.name) {
                  mw._name = mwName;
                }
                newMiddlewareArr.push(mw);
              } else {
                const match = (0, util_1.pathMatching)({
                  match: classMiddleware.match,
                  ignore: classMiddleware.ignore,
                  thisResolver: classMiddleware
                });
                fn = (ctx, next, options) => {
                  if (!match(ctx))
                    return next();
                  return mw(ctx, next, options);
                };
                fn._name = mwName;
                newMiddlewareArr.push(fn);
              }
            } else {
              throw new error_1.MidwayCommonError("Middleware must have resolve method!");
            }
          } else {
            newMiddlewareArr.push(fn);
          }
        }
        const composeFn = (context, next) => {
          const supportBody = (0, util_1.isIncludeProperty)(context, "body");
          let index = -1;
          return dispatch(0);
          function dispatch(i) {
            if (i <= index)
              return Promise.reject(new error_1.MidwayCommonError("next() called multiple times"));
            index = i;
            let fn = newMiddlewareArr[i];
            if (i === newMiddlewareArr.length)
              fn = next;
            if (!fn)
              return Promise.resolve();
            const middlewareName = `${name ? `${name}.` : ""}${index} ${fn._name || fn.name || "anonymous"}`;
            const startTime = Date.now();
            debug(`[middleware]: in ${middlewareName} +0`);
            try {
              if (supportBody) {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1), {
                  index
                })).then((result) => {
                  if (result !== void 0) {
                    context["body"] = result;
                  } else if (context["body"] !== void 0) {
                    result = context["body"];
                  }
                  debug(`[middleware]: out ${middlewareName} +${Date.now() - startTime} with body`);
                  return result;
                });
              } else {
                return Promise.resolve(fn(context, dispatch.bind(null, i + 1), {
                  index
                })).then((result) => {
                  debug(`[middleware]: out ${middlewareName} +${Date.now() - startTime}`);
                  return result;
                });
              }
            } catch (err) {
              debug(`[middleware]: out ${middlewareName} +${Date.now() - startTime} with err ${err.message}`);
              return Promise.reject(err);
            }
          }
        };
        if (name) {
          composeFn._name = name;
        }
        return composeFn;
      }
    };
    MidwayMiddlewareService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayMiddlewareService);
    exports.MidwayMiddlewareService = MidwayMiddlewareService;
  }
});
var require_filterManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/filterManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FilterManager = void 0;
    var decorator_1 = require_decorator();
    var util_1 = require_util();
    var FilterManager = class {
      constructor() {
        this.errFilterList = [];
        this.successFilterList = [];
        this.exceptionMap = /* @__PURE__ */ new WeakMap();
        this.defaultErrFilter = void 0;
        this.matchFnList = [];
        this.protoMatchList = [];
      }
      useFilter(Filters) {
        if (!Array.isArray(Filters)) {
          Filters = [Filters];
        }
        for (const Filter of Filters) {
          if ((0, decorator_1.getClassMetadata)(decorator_1.CATCH_KEY, Filter)) {
            this.errFilterList.push(Filter);
          }
          if ((0, decorator_1.getClassMetadata)(decorator_1.MATCH_KEY, Filter)) {
            this.successFilterList.push(Filter);
          }
        }
      }
      async init(applicationContext) {
        for (const FilterClass of this.errFilterList) {
          const filter = await applicationContext.getAsync(FilterClass);
          const exceptionMetadata = (0, decorator_1.getClassMetadata)(decorator_1.CATCH_KEY, FilterClass);
          if (exceptionMetadata && exceptionMetadata.catchTargets) {
            exceptionMetadata.catchOptions = exceptionMetadata.catchOptions || {};
            for (const Exception of exceptionMetadata.catchTargets) {
              this.exceptionMap.set(Exception, {
                filter,
                catchOptions: exceptionMetadata.catchOptions
              });
              if (exceptionMetadata.catchOptions["matchPrototype"]) {
                this.protoMatchList.push((err) => {
                  if (err instanceof Exception) {
                    return Exception;
                  } else {
                    return false;
                  }
                });
              }
            }
          } else {
            this.defaultErrFilter = filter;
          }
        }
        for (const FilterClass of this.successFilterList) {
          const filter = await applicationContext.getAsync(FilterClass);
          const matchMetadata = (0, decorator_1.getClassMetadata)(decorator_1.MATCH_KEY, FilterClass);
          if (matchMetadata && matchMetadata.matchPattern) {
            this.matchFnList.push({
              matchFn: (0, util_1.toPathMatch)(matchMetadata.matchPattern),
              target: filter
            });
          }
        }
      }
      async runErrorFilter(err, ctx, res, next) {
        let result, error;
        let matched = false;
        if (err && this.exceptionMap.has(err.constructor)) {
          matched = true;
          const filterData = this.exceptionMap.get(err.constructor);
          result = await filterData.filter.catch(err, ctx, res, next);
        }
        if (!matched && this.protoMatchList.length) {
          let protoException;
          for (const matchPattern of this.protoMatchList) {
            protoException = matchPattern(err);
            if (protoException) {
              break;
            }
          }
          if (protoException) {
            matched = true;
            const filterData = this.exceptionMap.get(protoException);
            result = await filterData.filter.catch(err, ctx, res, next);
          }
        }
        if (!matched && this.defaultErrFilter) {
          matched = true;
          result = await this.defaultErrFilter.catch(err, ctx, res, next);
        }
        if (!matched) {
          error = err;
        }
        return {
          result,
          error
        };
      }
      async runResultFilter(result, ctx, res, next) {
        let returnValue = result;
        for (const matchData of this.matchFnList) {
          if (matchData.matchFn(ctx, res)) {
            returnValue = await matchData.target.match(returnValue, ctx, res, next);
          }
        }
        return {
          result: returnValue,
          error: void 0
        };
      }
    };
    exports.FilterManager = FilterManager;
  }
});
var require_mockService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/mockService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var MidwayMockService_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayMockService = void 0;
    var interface_1 = require_interface();
    var decorator_1 = require_decorator();
    var types_1 = require_types();
    var MidwayMockService = MidwayMockService_1 = class MidwayMockService {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
        this.mocks = /* @__PURE__ */ new Map();
        this.contextMocks = /* @__PURE__ */ new Map();
        this.cache = /* @__PURE__ */ new Map();
        this.simulatorList = [];
      }
      async init() {
        if (MidwayMockService_1.prepareMocks.length > 0) {
          for (const item of MidwayMockService_1.prepareMocks) {
            this.mockProperty(item.obj, item.key, item.value, item.group);
          }
          MidwayMockService_1.prepareMocks = [];
        }
      }
      static mockClassProperty(clzz, propertyName, value, group = "default") {
        this.mockProperty(clzz.prototype, propertyName, value, group);
      }
      static mockProperty(obj, key, value, group = "default") {
        this.prepareMocks.push({
          obj,
          key,
          value,
          group
        });
      }
      mockClassProperty(clzz, propertyName, value, group = "default") {
        return this.mockProperty(clzz.prototype, propertyName, value, group);
      }
      mockProperty(obj, key, value, group = "default") {
        const hasOwnProperty = obj.hasOwnProperty(key);
        const mockItem = {
          obj,
          key,
          descriptor: Object.getOwnPropertyDescriptor(obj, key),
          // Make sure the key exists on object not the prototype
          hasOwnProperty
        };
        if (!this.mocks.has(group)) {
          this.mocks.set(group, []);
        }
        this.mocks.get(group).push(mockItem);
        if (hasOwnProperty) {
          delete obj[key];
        }
        let groupCache = this.cache.get(group);
        if (!groupCache) {
          groupCache = /* @__PURE__ */ new Map();
          this.cache.set(group, groupCache);
        }
        let flag = groupCache.get(obj);
        if (!flag) {
          flag = /* @__PURE__ */ new Set();
          groupCache.set(obj, flag);
        }
        flag.add(key);
        const descriptor = this.overridePropertyDescriptor(value);
        Object.defineProperty(obj, key, descriptor);
      }
      mockContext(app2, key, value, group = "default") {
        if (!this.contextMocks.has(group)) {
          this.contextMocks.set(group, []);
        }
        this.contextMocks.get(group).push({
          app: app2,
          key,
          value
        });
      }
      restore(group = "default") {
        this.restoreGroup(group);
      }
      restoreAll() {
        const groups = /* @__PURE__ */ new Set([
          ...this.mocks.keys(),
          ...this.contextMocks.keys(),
          ...this.cache.keys()
        ]);
        for (const group of groups) {
          this.restoreGroup(group);
        }
        this.simulatorList = [];
      }
      restoreGroup(group) {
        const groupMocks = this.mocks.get(group) || [];
        for (let i = groupMocks.length - 1; i >= 0; i--) {
          const m = groupMocks[i];
          if (!m.hasOwnProperty) {
            delete m.obj[m.key];
          } else {
            Object.defineProperty(m.obj, m.key, m.descriptor);
          }
        }
        this.mocks.delete(group);
        this.contextMocks.delete(group);
        this.cache.delete(group);
        this.simulatorList = this.simulatorList.filter((sim) => sim["group"] !== group);
      }
      isMocked(obj, key, group = "default") {
        if ((0, types_1.isClass)(obj)) {
          obj = obj.prototype;
        }
        const groupCache = this.cache.get(group);
        const flag = groupCache ? groupCache.get(obj) : void 0;
        return flag ? flag.has(key) : false;
      }
      applyContextMocks(app2, ctx) {
        for (const [, groupMocks] of this.contextMocks) {
          for (const mockItem of groupMocks) {
            if (mockItem.app === app2) {
              const descriptor = this.overridePropertyDescriptor(mockItem.value);
              if (typeof mockItem.key === "string") {
                Object.defineProperty(ctx, mockItem.key, descriptor);
              } else {
                mockItem.key(ctx);
              }
            }
          }
        }
      }
      getContextMocksSize() {
        return Array.from(this.contextMocks.values()).reduce((sum, group) => sum + group.length, 0);
      }
      overridePropertyDescriptor(value) {
        const descriptor = {
          configurable: true,
          enumerable: true
        };
        if (value && (value.get || value.set)) {
          descriptor.get = value.get;
          descriptor.set = value.set;
        } else {
          descriptor.value = value;
          descriptor.writable = true;
        }
        return descriptor;
      }
      async initSimulation(group = "default") {
        const simulationModule = (0, decorator_1.listModule)(decorator_1.MOCK_KEY);
        for (const module2 of simulationModule) {
          const instance = await this.applicationContext.getAsync(module2);
          if (await instance.enableCondition()) {
            instance["group"] = group;
            this.simulatorList.push(instance);
          }
        }
      }
      async runSimulatorSetup() {
        var _a;
        for (const simulator of this.simulatorList) {
          await ((_a = simulator.setup) === null || _a === void 0 ? void 0 : _a.call(simulator));
        }
      }
      async runSimulatorTearDown() {
        var _a;
        for (let i = this.simulatorList.length - 1; i >= 0; i--) {
          const simulator = this.simulatorList[i];
          await ((_a = simulator.tearDown) === null || _a === void 0 ? void 0 : _a.call(simulator));
        }
      }
      async runSimulatorAppSetup(app2) {
        var _a;
        for (const simulator of this.simulatorList) {
          await ((_a = simulator.appSetup) === null || _a === void 0 ? void 0 : _a.call(simulator, app2));
        }
      }
      async runSimulatorAppTearDown(app2) {
        var _a;
        for (let i = this.simulatorList.length - 1; i >= 0; i--) {
          const simulator = this.simulatorList[i];
          await ((_a = simulator.appTearDown) === null || _a === void 0 ? void 0 : _a.call(simulator, app2));
        }
      }
      async runSimulatorContextSetup(ctx, app2) {
        var _a;
        for (const simulator of this.simulatorList) {
          await ((_a = simulator.contextSetup) === null || _a === void 0 ? void 0 : _a.call(simulator, ctx, app2));
        }
      }
      async runSimulatorContextTearDown(ctx, app2) {
        var _a;
        for (let i = this.simulatorList.length - 1; i >= 0; i--) {
          const simulator = this.simulatorList[i];
          await ((_a = simulator === null || simulator === void 0 ? void 0 : simulator.contextTearDown) === null || _a === void 0 ? void 0 : _a.call(simulator, ctx, app2));
        }
      }
    };
    MidwayMockService.prepareMocks = [];
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], MidwayMockService.prototype, "init", null);
    __decorate([
      (0, decorator_1.Destroy)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", void 0)
    ], MidwayMockService.prototype, "restoreAll", null);
    MidwayMockService = MidwayMockService_1 = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayMockService);
    exports.MidwayMockService = MidwayMockService;
  }
});
var require_asyncContextManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/asyncContextManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopContextManager = exports.ASYNC_ROOT_CONTEXT = void 0;
    var AsyncBaseContext = class _AsyncBaseContext {
      /**
       * Construct a new context which inherits values from an optional parent context.
       *
       * @param parentContext a context from which to inherit values
       */
      constructor(parentContext) {
        const self2 = this;
        self2._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
        self2.getValue = (key) => self2._currentContext.get(key);
        self2.setValue = (key, value) => {
          const context = new _AsyncBaseContext(self2._currentContext);
          context._currentContext.set(key, value);
          return context;
        };
        self2.deleteValue = (key) => {
          const context = new _AsyncBaseContext(self2._currentContext);
          context._currentContext.delete(key);
          return context;
        };
      }
    };
    exports.ASYNC_ROOT_CONTEXT = new AsyncBaseContext();
    var NoopContextManager = class {
      active() {
        return exports.ASYNC_ROOT_CONTEXT;
      }
      with(_context, fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      bind(_context, target) {
        return target;
      }
      enable() {
        return this;
      }
      disable() {
        return this;
      }
    };
    exports.NoopContextManager = NoopContextManager;
  }
});
var require_guardManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/guardManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GuardManager = void 0;
    var decorator_1 = require_decorator();
    var GuardManager = class extends Array {
      addGlobalGuard(guards) {
        if (!Array.isArray(guards)) {
          this.push(guards);
        } else {
          this.push(...guards);
        }
      }
      async runGuard(ctx, supplierClz, methodName) {
        for (const Guard of this) {
          const guard = await ctx.requestContext.getAsync(Guard);
          const isPassed = await guard.canActivate(ctx, supplierClz, methodName);
          if (!isPassed) {
            return false;
          }
        }
        const classGuardList = (0, decorator_1.getClassMetadata)(decorator_1.GUARD_KEY, supplierClz);
        if (classGuardList) {
          for (const Guard of classGuardList) {
            const guard = await ctx.requestContext.getAsync(Guard);
            const isPassed = await guard.canActivate(ctx, supplierClz, methodName);
            if (!isPassed) {
              return false;
            }
          }
        }
        const methodGuardList = (0, decorator_1.getPropertyMetadata)(decorator_1.GUARD_KEY, supplierClz, methodName);
        if (methodGuardList) {
          for (const Guard of methodGuardList) {
            const guard = await ctx.requestContext.getAsync(Guard);
            const isPassed = await guard.canActivate(ctx, supplierClz, methodName);
            if (!isPassed) {
              return false;
            }
          }
        }
        return true;
      }
    };
    exports.GuardManager = GuardManager;
  }
});
var require_baseFramework = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/baseFramework.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseFramework = void 0;
    var interface_1 = require_interface();
    var constants_1 = require_constants();
    var decorator_1 = require_decorator();
    var requestContainer_1 = require_requestContainer();
    var environmentService_1 = require_environmentService();
    var configService_1 = require_configService();
    var informationService_1 = require_informationService();
    var loggerService_1 = require_loggerService();
    var middlewareManager_1 = require_middlewareManager();
    var middlewareService_1 = require_middlewareService();
    var filterManager_1 = require_filterManager();
    var mockService_1 = require_mockService();
    var util = __require2("util");
    var asyncContextManager_1 = require_asyncContextManager();
    var guardManager_1 = require_guardManager();
    var debug = util.debuglog("midway:debug");
    var BaseFramework = class {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
        this.defaultContext = {};
        this.middlewareManager = this.createMiddlewareManager();
        this.filterManager = this.createFilterManager();
        this.guardManager = this.createGuardManager();
        this.composeMiddleware = null;
      }
      async init() {
        var _a, _b;
        this.configurationOptions = (_a = this.configure()) !== null && _a !== void 0 ? _a : {};
        this.contextLoggerApplyLogger = (_b = this.configurationOptions.contextLoggerApplyLogger) !== null && _b !== void 0 ? _b : "appLogger";
        this.contextLoggerFormat = this.configurationOptions.contextLoggerFormat;
        this.logger = this.loggerService.getLogger("coreLogger");
        this.appLogger = this.loggerService.getLogger("appLogger");
        return this;
      }
      isEnable() {
        return true;
      }
      async initialize(options) {
        this.bootstrapOptions = options;
        await this.beforeContainerInitialize(options);
        await this.containerInitialize(options);
        await this.afterContainerInitialize(options);
        await this.containerDirectoryLoad(options);
        await this.afterContainerDirectoryLoad(options);
        await this.applicationInitialize(options);
        await this.containerReady(options);
        await this.afterContainerReady(options);
        await this.mockService.runSimulatorAppSetup(this.app);
      }
      /**
       * @deprecated
       */
      async containerInitialize(options) {
      }
      /**
       * @deprecated
       */
      async containerDirectoryLoad(options) {
      }
      /**
       * @deprecated
       */
      async containerReady(options) {
        if (!this.app.getApplicationContext) {
          this.defineApplicationProperties();
        }
      }
      getApplicationContext() {
        return this.applicationContext;
      }
      getConfiguration(key) {
        return this.configService.getConfiguration(key);
      }
      getCurrentEnvironment() {
        return this.environmentService.getCurrentEnvironment();
      }
      getApplication() {
        return this.app;
      }
      createContextLogger(ctx, name) {
        if (name && name !== "appLogger") {
          const appLogger = this.getLogger(name);
          let ctxLoggerCache = ctx.getAttr(constants_1.REQUEST_CTX_LOGGER_CACHE_KEY);
          if (!ctxLoggerCache) {
            ctxLoggerCache = /* @__PURE__ */ new Map();
            ctx.setAttr(constants_1.REQUEST_CTX_LOGGER_CACHE_KEY, ctxLoggerCache);
          }
          if (ctxLoggerCache.has(name)) {
            return ctxLoggerCache.get(name);
          }
          const ctxLogger = this.loggerService.createContextLogger(ctx, appLogger);
          ctxLoggerCache.set(name, ctxLogger);
          return ctxLogger;
        } else {
          const appLogger = this.getLogger(name !== null && name !== void 0 ? name : this.contextLoggerApplyLogger);
          if (ctx["_logger"]) {
            return ctx["_logger"];
          }
          ctx["_logger"] = this.loggerService.createContextLogger(ctx, appLogger, {
            contextFormat: this.contextLoggerFormat
          });
          return ctx["_logger"];
        }
      }
      async stop() {
        await this.mockService.runSimulatorAppTearDown(this.app);
        await this.beforeStop();
      }
      getAppDir() {
        return this.informationService.getAppDir();
      }
      getBaseDir() {
        return this.informationService.getBaseDir();
      }
      defineApplicationProperties(applicationProperties = {}, whiteList = []) {
        const defaultApplicationProperties = {
          getBaseDir: () => {
            return this.getBaseDir();
          },
          getAppDir: () => {
            return this.getAppDir();
          },
          getEnv: () => {
            return this.getCurrentEnvironment();
          },
          getApplicationContext: () => {
            return this.getApplicationContext();
          },
          getConfig: (key) => {
            return this.getConfiguration(key);
          },
          getFrameworkType: () => {
            if (this["getFrameworkType"]) {
              return this["getFrameworkType"]();
            }
          },
          getProcessType: () => {
            return interface_1.MidwayProcessTypeEnum.APPLICATION;
          },
          getCoreLogger: () => {
            return this.getCoreLogger();
          },
          getLogger: (name) => {
            return this.getLogger(name);
          },
          createLogger: (name, options = {}) => {
            return this.createLogger(name, options);
          },
          getFramework: () => {
            return this;
          },
          getProjectName: () => {
            return this.getProjectName();
          },
          createAnonymousContext: (extendCtx) => {
            const ctx = extendCtx || Object.create(this.defaultContext);
            if (!ctx.startTime) {
              ctx.startTime = Date.now();
            }
            if (!ctx.logger) {
              ctx.logger = this.createContextLogger(ctx);
            }
            if (!ctx.requestContext) {
              ctx.requestContext = new requestContainer_1.MidwayRequestContainer(ctx, this.getApplicationContext());
              ctx.requestContext.ready();
            }
            if (!ctx.getLogger) {
              ctx.getLogger = (name) => {
                return this.createContextLogger(ctx, name);
              };
            }
            ctx.setAttr = (key, value) => {
              ctx.requestContext.setAttr(key, value);
            };
            ctx.getAttr = (key) => {
              return ctx.requestContext.getAttr(key);
            };
            ctx.getApp = () => {
              return this.getApplication();
            };
            return ctx;
          },
          addConfigObject: (obj) => {
            this.configService.addObject(obj);
          },
          setAttr: (key, value) => {
            this.getApplicationContext().setAttr(key, value);
          },
          getAttr: (key) => {
            return this.getApplicationContext().getAttr(key);
          },
          useMiddleware: (middleware) => {
            return this.useMiddleware(middleware);
          },
          getMiddleware: () => {
            return this.getMiddleware();
          },
          useFilter: (Filter) => {
            return this.useFilter(Filter);
          },
          useGuard: (guard) => {
            return this.useGuard(guard);
          },
          getNamespace: () => {
            return this.getNamespace();
          }
        };
        for (const method of whiteList) {
          delete defaultApplicationProperties[method];
        }
        Object.assign(this.app, defaultApplicationProperties, applicationProperties);
      }
      async beforeStop() {
      }
      /**
       * @deprecated
       */
      async beforeContainerInitialize(options) {
      }
      /**
       * @deprecated
       */
      async afterContainerInitialize(options) {
      }
      /**
       * @deprecated
       */
      async afterContainerDirectoryLoad(options) {
      }
      /**
       * @deprecated
       */
      async afterContainerReady(options) {
      }
      async applyMiddleware(lastMiddleware) {
        var _a;
        if (!this.composeMiddleware) {
          if (!this.applicationContext.hasObject(constants_1.ASYNC_CONTEXT_MANAGER_KEY)) {
            const asyncContextManagerEnabled = this.configService.getConfiguration("asyncContextManager.enable") || false;
            const contextManager = asyncContextManagerEnabled ? ((_a = this.bootstrapOptions) === null || _a === void 0 ? void 0 : _a.asyncContextManager) || new asyncContextManager_1.NoopContextManager() : new asyncContextManager_1.NoopContextManager();
            if (asyncContextManagerEnabled) {
              contextManager.enable();
            }
            this.applicationContext.registerObject(constants_1.ASYNC_CONTEXT_MANAGER_KEY, contextManager);
          }
          this.middlewareManager.insertFirst(async (ctx, next) => {
            const rootContext = asyncContextManager_1.ASYNC_ROOT_CONTEXT.setValue(constants_1.ASYNC_CONTEXT_KEY, ctx);
            const contextManager = this.applicationContext.get(constants_1.ASYNC_CONTEXT_MANAGER_KEY);
            return await contextManager.with(rootContext, async () => {
              await this.mockService.runSimulatorContextSetup(ctx, this.app);
              this.mockService.applyContextMocks(this.app, ctx);
              let returnResult = void 0;
              try {
                const result = await next();
                returnResult = await this.filterManager.runResultFilter(result, ctx);
              } catch (err) {
                returnResult = await this.filterManager.runErrorFilter(err, ctx);
              } finally {
                await this.mockService.runSimulatorContextTearDown(ctx, this.app);
              }
              if (returnResult.error) {
                throw returnResult.error;
              }
              return returnResult.result;
            });
          });
          debug(`[core]: Compose middleware = [${this.middlewareManager.getNames()}]`);
          this.composeMiddleware = await this.middlewareService.compose(this.middlewareManager, this.app);
          await this.filterManager.init(this.applicationContext);
        }
        if (lastMiddleware) {
          lastMiddleware = Array.isArray(lastMiddleware) ? lastMiddleware : [lastMiddleware];
          return await this.middlewareService.compose([this.composeMiddleware, ...lastMiddleware], this.app);
        }
        return this.composeMiddleware;
      }
      getLogger(name) {
        var _a;
        return (_a = this.loggerService.getLogger(name)) !== null && _a !== void 0 ? _a : this.appLogger;
      }
      getCoreLogger() {
        return this.logger;
      }
      createLogger(name, option = {}) {
        return this.loggerService.createLogger(name, option);
      }
      getProjectName() {
        return this.informationService.getProjectName();
      }
      getFrameworkName() {
        return this.constructor.name;
      }
      useMiddleware(middleware) {
        this.middlewareManager.insertLast(middleware);
      }
      getMiddleware() {
        return this.middlewareManager;
      }
      useFilter(filter) {
        return this.filterManager.useFilter(filter);
      }
      useGuard(guards) {
        return this.guardManager.addGlobalGuard(guards);
      }
      async runGuard(ctx, supplierClz, methodName) {
        return this.guardManager.runGuard(ctx, supplierClz, methodName);
      }
      createMiddlewareManager() {
        return new middlewareManager_1.ContextMiddlewareManager();
      }
      createFilterManager() {
        return new filterManager_1.FilterManager();
      }
      createGuardManager() {
        return new guardManager_1.GuardManager();
      }
      setNamespace(namespace) {
        this.namespace = namespace;
      }
      getNamespace() {
        return this.namespace;
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", loggerService_1.MidwayLoggerService)
    ], BaseFramework.prototype, "loggerService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", environmentService_1.MidwayEnvironmentService)
    ], BaseFramework.prototype, "environmentService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", configService_1.MidwayConfigService)
    ], BaseFramework.prototype, "configService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", informationService_1.MidwayInformationService)
    ], BaseFramework.prototype, "informationService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", middlewareService_1.MidwayMiddlewareService)
    ], BaseFramework.prototype, "middlewareService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", mockService_1.MidwayMockService)
    ], BaseFramework.prototype, "mockService", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], BaseFramework.prototype, "init", null);
    exports.BaseFramework = BaseFramework;
  }
});
var require_providerWrapper = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/context/providerWrapper.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.providerWrapper = void 0;
    var constants_1 = require_constants();
    function providerWrapper(wrapperInfo) {
      for (const info of wrapperInfo) {
        Object.defineProperty(info.provider, constants_1.FUNCTION_INJECT_KEY, {
          value: info,
          writable: false
        });
      }
    }
    exports.providerWrapper = providerWrapper;
  }
});
var require_pipelineService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/pipelineService.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayPipelineService = exports.PipelineContext = void 0;
    var decorator_1 = require_decorator();
    var PipelineContext = class {
      constructor(args) {
        this.info = { current: null, currentName: null };
        this.data = /* @__PURE__ */ new Map();
        this.args = args;
      }
      get(key) {
        return this.data.get(key);
      }
      set(key, val) {
        this.data.set(key, val);
      }
      keys() {
        const keys = [];
        const iter = this.data.keys();
        for (const k of iter) {
          keys.push(k);
        }
        return keys;
      }
    };
    exports.PipelineContext = PipelineContext;
    var MidwayPipelineService = class {
      // 默认的 valves (@Pipeline(['test1', 'test2']))
      constructor(applicationContext, valves) {
        this.applicationContext = applicationContext;
        this.valves = valves;
      }
      /**
       * 并行执行，使用 Promise.all
       * @param opts 执行参数
       */
      async parallel(opts) {
        const valves = this.prepareParallelValves(opts);
        const res = await Promise.all(valves);
        return this.packResult(res, false);
      }
      /**
       * 并行执行，最终 result 为数组
       * @param opts 执行参数
       */
      async concat(opts) {
        const valves = this.prepareParallelValves(opts);
        const res = await Promise.all(valves);
        return this.packResult(res, true);
      }
      /**
       * 串行执行，使用 foreach await
       * @param opts 执行参数
       */
      async series(opts) {
        const valves = this.mergeValves(opts.valves);
        const ctx = new PipelineContext(opts.args);
        const result = { success: true, result: null };
        const data = {};
        const info = {
          prevValue: null,
          current: null,
          currentName: null,
          prev: null,
          prevName: null,
          next: null,
          nextName: null
        };
        let nextIdx = 1;
        for (const v of valves) {
          info.prev = info.current;
          info.prevName = getName(info.prev);
          info.current = v;
          info.currentName = getName(info.current);
          if (nextIdx < valves.length) {
            info.next = valves[nextIdx];
            info.nextName = getName(info.next);
          } else {
            info.next = void 0;
            info.nextName = void 0;
          }
          nextIdx += 1;
          ctx.info = info;
          try {
            const inst = await this.applicationContext.getAsync(v);
            const tmpValue = await inst.invoke(ctx);
            let key = v;
            if (inst.alias) {
              key = inst.alias;
            }
            data[key] = tmpValue;
            info.prevValue = tmpValue;
          } catch (e) {
            result.success = false;
            result.error = {
              valveName: typeof v === "string" ? v : v.name,
              message: e.message,
              error: e
            };
            return result;
          }
        }
        result.result = data;
        return result;
      }
      /**
       * 串行执行，使用 foreach await，最终 result 为数组
       * @param opts 执行参数
       */
      async concatSeries(opts) {
        const valves = this.mergeValves(opts.valves);
        const ctx = new PipelineContext(opts.args);
        const result = { success: true, result: null };
        const data = [];
        const info = {
          prevValue: null,
          current: null,
          currentName: null,
          prev: null,
          prevName: null,
          next: null,
          nextName: null
        };
        let nextIdx = 1;
        for (const v of valves) {
          info.prev = info.current;
          info.prevName = getName(info.prev);
          info.current = v;
          info.currentName = getName(info.current);
          if (nextIdx < valves.length) {
            info.next = valves[nextIdx];
            info.nextName = getName(info.next);
          } else {
            info.next = void 0;
            info.nextName = void 0;
          }
          nextIdx += 1;
          ctx.info = info;
          try {
            const inst = await this.applicationContext.getAsync(v);
            const tmpValue = await inst.invoke(ctx);
            data.push(tmpValue);
            info.prevValue = tmpValue;
          } catch (e) {
            result.success = false;
            result.error = {
              valveName: typeof v === "string" ? v : v.name,
              message: e.message,
              error: e
            };
            return result;
          }
        }
        result.result = data;
        return result;
      }
      /**
       * 串行执行，但是会把前者执行结果当成入参，传入到下一个执行中去，最后一个执行的 valve 结果会被返回
       * @param opts 执行参数
       */
      async waterfall(opts) {
        const result = await this.concatSeries(opts);
        if (result.success) {
          const data = result.result;
          result.result = data[data.length - 1];
        }
        return result;
      }
      mergeValves(valves) {
        let items = [];
        if (this.valves && this.valves.length > 0) {
          items = this.valves;
        }
        let newItems = [];
        if (valves) {
          for (const v of valves) {
            if (items.includes(v)) {
              newItems.push(v);
            }
          }
        } else {
          newItems = items;
        }
        return newItems;
      }
      prepareParallelValves(opts) {
        const valves = this.mergeValves(opts.valves);
        const ctx = new PipelineContext(opts.args);
        return valves.map(async (v) => {
          const rt = { valveName: v, dataKey: v, data: null };
          try {
            const inst = await this.applicationContext.getAsync(v);
            if (inst.alias) {
              rt.dataKey = inst.alias;
            }
            rt.data = await inst.invoke(ctx);
          } catch (e) {
            rt.error = e;
          }
          return rt;
        });
      }
      packResult(res, resultIsArray = false) {
        const result = { success: true, result: null };
        let data;
        if (resultIsArray) {
          data = [];
        } else {
          data = {};
        }
        for (const r of res) {
          if (r.error) {
            result.success = false;
            result.error = {
              valveName: typeof r.valveName === "string" ? r.valveName : r.valveName.name,
              message: r.error.message,
              error: r.error
            };
            return result;
          } else {
            if (resultIsArray) {
              data.push(r.data);
            } else {
              data[r.dataKey] = r.data;
            }
          }
        }
        result.result = data;
        return result;
      }
    };
    exports.MidwayPipelineService = MidwayPipelineService;
    function getName(target) {
      if (target) {
        if (typeof target === "string") {
          return target;
        } else {
          return (0, decorator_1.getProviderName)(target);
        }
      }
      return null;
    }
  }
});
var require_constants2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/constants.js"(exports, module) {
    "use strict";
    var path = __require2("path");
    var WIN_SLASH = "\\\\/";
    var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
    var DOT_LITERAL = "\\.";
    var PLUS_LITERAL = "\\+";
    var QMARK_LITERAL = "\\?";
    var SLASH_LITERAL = "\\/";
    var ONE_CHAR = "(?=.)";
    var QMARK = "[^/]";
    var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
    var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
    var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
    var NO_DOT = `(?!${DOT_LITERAL})`;
    var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
    var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
    var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
    var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
    var STAR = `${QMARK}*?`;
    var POSIX_CHARS = {
      DOT_LITERAL,
      PLUS_LITERAL,
      QMARK_LITERAL,
      SLASH_LITERAL,
      ONE_CHAR,
      QMARK,
      END_ANCHOR,
      DOTS_SLASH,
      NO_DOT,
      NO_DOTS,
      NO_DOT_SLASH,
      NO_DOTS_SLASH,
      QMARK_NO_DOT,
      STAR,
      START_ANCHOR
    };
    var WINDOWS_CHARS = {
      ...POSIX_CHARS,
      SLASH_LITERAL: `[${WIN_SLASH}]`,
      QMARK: WIN_NO_SLASH,
      STAR: `${WIN_NO_SLASH}*?`,
      DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
      NO_DOT: `(?!${DOT_LITERAL})`,
      NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
      NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
      QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
      START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
      END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
    };
    var POSIX_REGEX_SOURCE = {
      alnum: "a-zA-Z0-9",
      alpha: "a-zA-Z",
      ascii: "\\x00-\\x7F",
      blank: " \\t",
      cntrl: "\\x00-\\x1F\\x7F",
      digit: "0-9",
      graph: "\\x21-\\x7E",
      lower: "a-z",
      print: "\\x20-\\x7E ",
      punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
      space: " \\t\\r\\n\\v\\f",
      upper: "A-Z",
      word: "A-Za-z0-9_",
      xdigit: "A-Fa-f0-9"
    };
    module.exports = {
      MAX_LENGTH: 1024 * 64,
      POSIX_REGEX_SOURCE,
      // regular expressions
      REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
      REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
      REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
      REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
      REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
      REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
      // Replace globs with equivalent patterns to reduce parsing time.
      REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
      },
      // Digits
      CHAR_0: 48,
      /* 0 */
      CHAR_9: 57,
      /* 9 */
      // Alphabet chars.
      CHAR_UPPERCASE_A: 65,
      /* A */
      CHAR_LOWERCASE_A: 97,
      /* a */
      CHAR_UPPERCASE_Z: 90,
      /* Z */
      CHAR_LOWERCASE_Z: 122,
      /* z */
      CHAR_LEFT_PARENTHESES: 40,
      /* ( */
      CHAR_RIGHT_PARENTHESES: 41,
      /* ) */
      CHAR_ASTERISK: 42,
      /* * */
      // Non-alphabetic chars.
      CHAR_AMPERSAND: 38,
      /* & */
      CHAR_AT: 64,
      /* @ */
      CHAR_BACKWARD_SLASH: 92,
      /* \ */
      CHAR_CARRIAGE_RETURN: 13,
      /* \r */
      CHAR_CIRCUMFLEX_ACCENT: 94,
      /* ^ */
      CHAR_COLON: 58,
      /* : */
      CHAR_COMMA: 44,
      /* , */
      CHAR_DOT: 46,
      /* . */
      CHAR_DOUBLE_QUOTE: 34,
      /* " */
      CHAR_EQUAL: 61,
      /* = */
      CHAR_EXCLAMATION_MARK: 33,
      /* ! */
      CHAR_FORM_FEED: 12,
      /* \f */
      CHAR_FORWARD_SLASH: 47,
      /* / */
      CHAR_GRAVE_ACCENT: 96,
      /* ` */
      CHAR_HASH: 35,
      /* # */
      CHAR_HYPHEN_MINUS: 45,
      /* - */
      CHAR_LEFT_ANGLE_BRACKET: 60,
      /* < */
      CHAR_LEFT_CURLY_BRACE: 123,
      /* { */
      CHAR_LEFT_SQUARE_BRACKET: 91,
      /* [ */
      CHAR_LINE_FEED: 10,
      /* \n */
      CHAR_NO_BREAK_SPACE: 160,
      /* \u00A0 */
      CHAR_PERCENT: 37,
      /* % */
      CHAR_PLUS: 43,
      /* + */
      CHAR_QUESTION_MARK: 63,
      /* ? */
      CHAR_RIGHT_ANGLE_BRACKET: 62,
      /* > */
      CHAR_RIGHT_CURLY_BRACE: 125,
      /* } */
      CHAR_RIGHT_SQUARE_BRACKET: 93,
      /* ] */
      CHAR_SEMICOLON: 59,
      /* ; */
      CHAR_SINGLE_QUOTE: 39,
      /* ' */
      CHAR_SPACE: 32,
      /*   */
      CHAR_TAB: 9,
      /* \t */
      CHAR_UNDERSCORE: 95,
      /* _ */
      CHAR_VERTICAL_LINE: 124,
      /* | */
      CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
      /* \uFEFF */
      SEP: path.sep,
      /**
       * Create EXTGLOB_CHARS
       */
      extglobChars(chars) {
        return {
          "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
          "?": { type: "qmark", open: "(?:", close: ")?" },
          "+": { type: "plus", open: "(?:", close: ")+" },
          "*": { type: "star", open: "(?:", close: ")*" },
          "@": { type: "at", open: "(?:", close: ")" }
        };
      },
      /**
       * Create GLOB_CHARS
       */
      globChars(win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
      }
    };
  }
});
var require_utils2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/utils.js"(exports) {
    "use strict";
    var path = __require2("path");
    var win32 = process.platform === "win32";
    var {
      REGEX_BACKSLASH,
      REGEX_REMOVE_BACKSLASH,
      REGEX_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_GLOBAL
    } = require_constants2();
    exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
    exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
    exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
    exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
    exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
    exports.removeBackslashes = (str) => {
      return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
        return match === "\\" ? "" : match;
      });
    };
    exports.supportsLookbehinds = () => {
      const segs = process.version.slice(1).split(".").map(Number);
      if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
      }
      return false;
    };
    exports.isWindows = (options) => {
      if (options && typeof options.windows === "boolean") {
        return options.windows;
      }
      return win32 === true || path.sep === "\\";
    };
    exports.escapeLast = (input, char, lastIdx) => {
      const idx = input.lastIndexOf(char, lastIdx);
      if (idx === -1) return input;
      if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
      return `${input.slice(0, idx)}\\${input.slice(idx)}`;
    };
    exports.removePrefix = (input, state = {}) => {
      let output = input;
      if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
      }
      return output;
    };
    exports.wrapOutput = (input, state = {}, options = {}) => {
      const prepend = options.contains ? "" : "^";
      const append = options.contains ? "" : "$";
      let output = `${prepend}(?:${input})${append}`;
      if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
      }
      return output;
    };
  }
});
var require_scan = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/scan.js"(exports, module) {
    "use strict";
    var utils = require_utils2();
    var {
      CHAR_ASTERISK,
      /* * */
      CHAR_AT,
      /* @ */
      CHAR_BACKWARD_SLASH,
      /* \ */
      CHAR_COMMA,
      /* , */
      CHAR_DOT,
      /* . */
      CHAR_EXCLAMATION_MARK,
      /* ! */
      CHAR_FORWARD_SLASH,
      /* / */
      CHAR_LEFT_CURLY_BRACE,
      /* { */
      CHAR_LEFT_PARENTHESES,
      /* ( */
      CHAR_LEFT_SQUARE_BRACKET,
      /* [ */
      CHAR_PLUS,
      /* + */
      CHAR_QUESTION_MARK,
      /* ? */
      CHAR_RIGHT_CURLY_BRACE,
      /* } */
      CHAR_RIGHT_PARENTHESES,
      /* ) */
      CHAR_RIGHT_SQUARE_BRACKET
      /* ] */
    } = require_constants2();
    var isPathSeparator = (code) => {
      return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
    };
    var depth = (token) => {
      if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
      }
    };
    var scan = (input, options) => {
      const opts = options || {};
      const length = input.length - 1;
      const scanToEnd = opts.parts === true || opts.scanToEnd === true;
      const slashes = [];
      const tokens = [];
      const parts = [];
      let str = input;
      let index = -1;
      let start = 0;
      let lastIndex = 0;
      let isBrace = false;
      let isBracket = false;
      let isGlob = false;
      let isExtglob = false;
      let isGlobstar = false;
      let braceEscaped = false;
      let backslashes = false;
      let negated = false;
      let negatedExtglob = false;
      let finished = false;
      let braces = 0;
      let prev;
      let code;
      let token = { value: "", depth: 0, isGlob: false };
      const eos = () => index >= length;
      const peek = () => str.charCodeAt(index + 1);
      const advance = () => {
        prev = code;
        return str.charCodeAt(++index);
      };
      while (index < length) {
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
          backslashes = token.backslashes = true;
          code = advance();
          if (code === CHAR_LEFT_CURLY_BRACE) {
            braceEscaped = true;
          }
          continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
          braces++;
          while (eos() !== true && (code = advance())) {
            if (code === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braces++;
              continue;
            }
            if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (braceEscaped !== true && code === CHAR_COMMA) {
              isBrace = token.isBrace = true;
              isGlob = token.isGlob = true;
              finished = true;
              if (scanToEnd === true) {
                continue;
              }
              break;
            }
            if (code === CHAR_RIGHT_CURLY_BRACE) {
              braces--;
              if (braces === 0) {
                braceEscaped = false;
                isBrace = token.isBrace = true;
                finished = true;
                break;
              }
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_FORWARD_SLASH) {
          slashes.push(index);
          tokens.push(token);
          token = { value: "", depth: 0, isGlob: false };
          if (finished === true) continue;
          if (prev === CHAR_DOT && index === start + 1) {
            start += 2;
            continue;
          }
          lastIndex = index + 1;
          continue;
        }
        if (opts.noext !== true) {
          const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
          if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            isExtglob = token.isExtglob = true;
            finished = true;
            if (code === CHAR_EXCLAMATION_MARK && index === start) {
              negatedExtglob = true;
            }
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_BACKWARD_SLASH) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  isGlob = token.isGlob = true;
                  finished = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
        }
        if (code === CHAR_ASTERISK) {
          if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_QUESTION_MARK) {
          isGlob = token.isGlob = true;
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
          while (eos() !== true && (next = advance())) {
            if (next === CHAR_BACKWARD_SLASH) {
              backslashes = token.backslashes = true;
              advance();
              continue;
            }
            if (next === CHAR_RIGHT_SQUARE_BRACKET) {
              isBracket = token.isBracket = true;
              isGlob = token.isGlob = true;
              finished = true;
              break;
            }
          }
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
          negated = token.negated = true;
          start++;
          continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
          isGlob = token.isGlob = true;
          if (scanToEnd === true) {
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_LEFT_PARENTHESES) {
                backslashes = token.backslashes = true;
                code = advance();
                continue;
              }
              if (code === CHAR_RIGHT_PARENTHESES) {
                finished = true;
                break;
              }
            }
            continue;
          }
          break;
        }
        if (isGlob === true) {
          finished = true;
          if (scanToEnd === true) {
            continue;
          }
          break;
        }
      }
      if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
      }
      let base = str;
      let prefix = "";
      let glob = "";
      if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
      }
      if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
      } else if (isGlob === true) {
        base = "";
        glob = str;
      } else {
        base = str;
      }
      if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
          base = base.slice(0, -1);
        }
      }
      if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
          base = utils.removeBackslashes(base);
        }
      }
      const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
      };
      if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
          tokens.push(token);
        }
        state.tokens = tokens;
      }
      if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for (let idx = 0; idx < slashes.length; idx++) {
          const n = prevIndex ? prevIndex + 1 : start;
          const i = slashes[idx];
          const value = input.slice(n, i);
          if (opts.tokens) {
            if (idx === 0 && start !== 0) {
              tokens[idx].isPrefix = true;
              tokens[idx].value = prefix;
            } else {
              tokens[idx].value = value;
            }
            depth(tokens[idx]);
            state.maxDepth += tokens[idx].depth;
          }
          if (idx !== 0 || value !== "") {
            parts.push(value);
          }
          prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
          const value = input.slice(prevIndex + 1);
          parts.push(value);
          if (opts.tokens) {
            tokens[tokens.length - 1].value = value;
            depth(tokens[tokens.length - 1]);
            state.maxDepth += tokens[tokens.length - 1].depth;
          }
        }
        state.slashes = slashes;
        state.parts = parts;
      }
      return state;
    };
    module.exports = scan;
  }
});
var require_parse = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/parse.js"(exports, module) {
    "use strict";
    var constants = require_constants2();
    var utils = require_utils2();
    var {
      MAX_LENGTH,
      POSIX_REGEX_SOURCE,
      REGEX_NON_SPECIAL_CHARS,
      REGEX_SPECIAL_CHARS_BACKREF,
      REPLACEMENTS
    } = constants;
    var expandRange = (args, options) => {
      if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
      }
      args.sort();
      const value = `[${args.join("-")}]`;
      try {
        new RegExp(value);
      } catch (ex) {
        return args.map((v) => utils.escapeRegex(v)).join("..");
      }
      return value;
    };
    var syntaxError = (type, char) => {
      return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
    };
    var parse = (input, options) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected a string");
      }
      input = REPLACEMENTS[input] || input;
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      let len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      const bos = { type: "bos", value: "", output: opts.prepend || "" };
      const tokens = [bos];
      const capture = opts.capture ? "" : "?:";
      const win32 = utils.isWindows(options);
      const PLATFORM_CHARS = constants.globChars(win32);
      const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
      const {
        DOT_LITERAL,
        PLUS_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      } = PLATFORM_CHARS;
      const globstar = (opts2) => {
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const nodot = opts.dot ? "" : NO_DOT;
      const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
      let star = opts.bash === true ? globstar(opts) : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
      }
      const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
      };
      input = utils.removePrefix(input, state);
      len = input.length;
      const extglobs = [];
      const braces = [];
      const stack = [];
      let prev = bos;
      let value;
      const eos = () => state.index === len - 1;
      const peek = state.peek = (n = 1) => input[state.index + n];
      const advance = state.advance = () => input[++state.index] || "";
      const remaining = () => input.slice(state.index + 1);
      const consume = (value2 = "", num = 0) => {
        state.consumed += value2;
        state.index += num;
      };
      const append = (token) => {
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
      };
      const negate = () => {
        let count = 1;
        while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
          advance();
          state.start++;
          count++;
        }
        if (count % 2 === 0) {
          return false;
        }
        state.negated = true;
        state.start++;
        return true;
      };
      const increment = (type) => {
        state[type]++;
        stack.push(type);
      };
      const decrement = (type) => {
        state[type]--;
        stack.pop();
      };
      const push = (tok) => {
        if (prev.type === "globstar") {
          const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
          const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
          if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "star";
            prev.value = "*";
            prev.output = star;
            state.output += prev.output;
          }
        }
        if (extglobs.length && tok.type !== "paren") {
          extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
          prev.value += tok.value;
          prev.output = (prev.output || "") + tok.value;
          return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
      };
      const extglobOpen = (type, value2) => {
        const token = { ...EXTGLOB_CHARS[value2], conditions: 1, inner: "" };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
        push({ type: "paren", extglob: true, value: advance(), output });
        extglobs.push(token);
      };
      const extglobClose = (token) => {
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
          let extglobStar = star;
          if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
            extglobStar = globstar(opts);
          }
          if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
            output = token.close = `)$))${extglobStar}`;
          }
          if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
            const expression = parse(rest, { ...options, fastpaths: false }).output;
            output = token.close = `)${expression})${extglobStar})`;
          }
          if (token.prev.type === "bos") {
            state.negatedExtglob = true;
          }
        }
        push({ type: "paren", extglob: true, value, output });
        decrement("parens");
      };
      if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
          if (first === "\\") {
            backslashes = true;
            return m;
          }
          if (first === "?") {
            if (esc) {
              return esc + first + (rest ? QMARK.repeat(rest.length) : "");
            }
            if (index === 0) {
              return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
            }
            return QMARK.repeat(chars.length);
          }
          if (first === ".") {
            return DOT_LITERAL.repeat(chars.length);
          }
          if (first === "*") {
            if (esc) {
              return esc + first + (rest ? star : "");
            }
            return star;
          }
          return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
          if (opts.unescape === true) {
            output = output.replace(/\\/g, "");
          } else {
            output = output.replace(/\\+/g, (m) => {
              return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
            });
          }
        }
        if (output === input && opts.contains === true) {
          state.output = input;
          return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
      }
      while (!eos()) {
        value = advance();
        if (value === "\0") {
          continue;
        }
        if (value === "\\") {
          const next = peek();
          if (next === "/" && opts.bash !== true) {
            continue;
          }
          if (next === "." || next === ";") {
            continue;
          }
          if (!next) {
            value += "\\";
            push({ type: "text", value });
            continue;
          }
          const match = /^\\+/.exec(remaining());
          let slashes = 0;
          if (match && match[0].length > 2) {
            slashes = match[0].length;
            state.index += slashes;
            if (slashes % 2 !== 0) {
              value += "\\";
            }
          }
          if (opts.unescape === true) {
            value = advance();
          } else {
            value += advance();
          }
          if (state.brackets === 0) {
            push({ type: "text", value });
            continue;
          }
        }
        if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
          if (opts.posix !== false && value === ":") {
            const inner = prev.value.slice(1);
            if (inner.includes("[")) {
              prev.posix = true;
              if (inner.includes(":")) {
                const idx = prev.value.lastIndexOf("[");
                const pre = prev.value.slice(0, idx);
                const rest2 = prev.value.slice(idx + 2);
                const posix = POSIX_REGEX_SOURCE[rest2];
                if (posix) {
                  prev.value = pre + posix;
                  state.backtrack = true;
                  advance();
                  if (!bos.output && tokens.indexOf(prev) === 1) {
                    bos.output = ONE_CHAR;
                  }
                  continue;
                }
              }
            }
          }
          if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
            value = `\\${value}`;
          }
          if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
            value = `\\${value}`;
          }
          if (opts.posix === true && value === "!" && prev.value === "[") {
            value = "^";
          }
          prev.value += value;
          append({ value });
          continue;
        }
        if (state.quotes === 1 && value !== '"') {
          value = utils.escapeRegex(value);
          prev.value += value;
          append({ value });
          continue;
        }
        if (value === '"') {
          state.quotes = state.quotes === 1 ? 0 : 1;
          if (opts.keepQuotes === true) {
            push({ type: "text", value });
          }
          continue;
        }
        if (value === "(") {
          increment("parens");
          push({ type: "paren", value });
          continue;
        }
        if (value === ")") {
          if (state.parens === 0 && opts.strictBrackets === true) {
            throw new SyntaxError(syntaxError("opening", "("));
          }
          const extglob = extglobs[extglobs.length - 1];
          if (extglob && state.parens === extglob.parens + 1) {
            extglobClose(extglobs.pop());
            continue;
          }
          push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
          decrement("parens");
          continue;
        }
        if (value === "[") {
          if (opts.nobracket === true || !remaining().includes("]")) {
            if (opts.nobracket !== true && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("closing", "]"));
            }
            value = `\\${value}`;
          } else {
            increment("brackets");
          }
          push({ type: "bracket", value });
          continue;
        }
        if (value === "]") {
          if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          if (state.brackets === 0) {
            if (opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "["));
            }
            push({ type: "text", value, output: `\\${value}` });
            continue;
          }
          decrement("brackets");
          const prevValue = prev.value.slice(1);
          if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
            value = `/${value}`;
          }
          prev.value += value;
          append({ value });
          if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
            continue;
          }
          const escaped = utils.escapeRegex(prev.value);
          state.output = state.output.slice(0, -prev.value.length);
          if (opts.literalBrackets === true) {
            state.output += escaped;
            prev.value = escaped;
            continue;
          }
          prev.value = `(${capture}${escaped}|${prev.value})`;
          state.output += prev.value;
          continue;
        }
        if (value === "{" && opts.nobrace !== true) {
          increment("braces");
          const open = {
            type: "brace",
            value,
            output: "(",
            outputIndex: state.output.length,
            tokensIndex: state.tokens.length
          };
          braces.push(open);
          push(open);
          continue;
        }
        if (value === "}") {
          const brace = braces[braces.length - 1];
          if (opts.nobrace === true || !brace) {
            push({ type: "text", value, output: value });
            continue;
          }
          let output = ")";
          if (brace.dots === true) {
            const arr = tokens.slice();
            const range = [];
            for (let i = arr.length - 1; i >= 0; i--) {
              tokens.pop();
              if (arr[i].type === "brace") {
                break;
              }
              if (arr[i].type !== "dots") {
                range.unshift(arr[i].value);
              }
            }
            output = expandRange(range, opts);
            state.backtrack = true;
          }
          if (brace.comma !== true && brace.dots !== true) {
            const out = state.output.slice(0, brace.outputIndex);
            const toks = state.tokens.slice(brace.tokensIndex);
            brace.value = brace.output = "\\{";
            value = output = "\\}";
            state.output = out;
            for (const t of toks) {
              state.output += t.output || t.value;
            }
          }
          push({ type: "brace", value, output });
          decrement("braces");
          braces.pop();
          continue;
        }
        if (value === "|") {
          if (extglobs.length > 0) {
            extglobs[extglobs.length - 1].conditions++;
          }
          push({ type: "text", value });
          continue;
        }
        if (value === ",") {
          let output = value;
          const brace = braces[braces.length - 1];
          if (brace && stack[stack.length - 1] === "braces") {
            brace.comma = true;
            output = "|";
          }
          push({ type: "comma", value, output });
          continue;
        }
        if (value === "/") {
          if (prev.type === "dot" && state.index === state.start + 1) {
            state.start = state.index + 1;
            state.consumed = "";
            state.output = "";
            tokens.pop();
            prev = bos;
            continue;
          }
          push({ type: "slash", value, output: SLASH_LITERAL });
          continue;
        }
        if (value === ".") {
          if (state.braces > 0 && prev.type === "dot") {
            if (prev.value === ".") prev.output = DOT_LITERAL;
            const brace = braces[braces.length - 1];
            prev.type = "dots";
            prev.output += value;
            prev.value += value;
            brace.dots = true;
            continue;
          }
          if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
            push({ type: "text", value, output: DOT_LITERAL });
            continue;
          }
          push({ type: "dot", value, output: DOT_LITERAL });
          continue;
        }
        if (value === "?") {
          const isGroup = prev && prev.value === "(";
          if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("qmark", value);
            continue;
          }
          if (prev && prev.type === "paren") {
            const next = peek();
            let output = value;
            if (next === "<" && !utils.supportsLookbehinds()) {
              throw new Error("Node.js v10 or higher is required for regex lookbehinds");
            }
            if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
              output = `\\${value}`;
            }
            push({ type: "text", value, output });
            continue;
          }
          if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
            push({ type: "qmark", value, output: QMARK_NO_DOT });
            continue;
          }
          push({ type: "qmark", value, output: QMARK });
          continue;
        }
        if (value === "!") {
          if (opts.noextglob !== true && peek() === "(") {
            if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
              extglobOpen("negate", value);
              continue;
            }
          }
          if (opts.nonegate !== true && state.index === 0) {
            negate();
            continue;
          }
        }
        if (value === "+") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            extglobOpen("plus", value);
            continue;
          }
          if (prev && prev.value === "(" || opts.regex === false) {
            push({ type: "plus", value, output: PLUS_LITERAL });
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
            push({ type: "plus", value });
            continue;
          }
          push({ type: "plus", value: PLUS_LITERAL });
          continue;
        }
        if (value === "@") {
          if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
            push({ type: "at", extglob: true, value, output: "" });
            continue;
          }
          push({ type: "text", value });
          continue;
        }
        if (value !== "*") {
          if (value === "$" || value === "^") {
            value = `\\${value}`;
          }
          const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
          if (match) {
            value += match[0];
            state.index += match[0].length;
          }
          push({ type: "text", value });
          continue;
        }
        if (prev && (prev.type === "globstar" || prev.star === true)) {
          prev.type = "star";
          prev.star = true;
          prev.value += value;
          prev.output = star;
          state.backtrack = true;
          state.globstar = true;
          consume(value);
          continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
          extglobOpen("star", value);
          continue;
        }
        if (prev.type === "star") {
          if (opts.noglobstar === true) {
            consume(value);
            continue;
          }
          const prior = prev.prev;
          const before = prior.prev;
          const isStart = prior.type === "slash" || prior.type === "bos";
          const afterStar = before && (before.type === "star" || before.type === "globstar");
          if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
            push({ type: "star", value, output: "" });
            continue;
          }
          const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
          const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
          if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
            push({ type: "star", value, output: "" });
            continue;
          }
          while (rest.slice(0, 3) === "/**") {
            const after = input[state.index + 4];
            if (after && after !== "/") {
              break;
            }
            rest = rest.slice(3);
            consume("/**", 3);
          }
          if (prior.type === "bos" && eos()) {
            prev.type = "globstar";
            prev.value += value;
            prev.output = globstar(opts);
            state.output = prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
            prev.value += value;
            state.globstar = true;
            state.output += prior.output + prev.output;
            consume(value);
            continue;
          }
          if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
            const end = rest[1] !== void 0 ? "|$" : "";
            state.output = state.output.slice(0, -(prior.output + prev.output).length);
            prior.output = `(?:${prior.output}`;
            prev.type = "globstar";
            prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
            prev.value += value;
            state.output += prior.output + prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          if (prior.type === "bos" && rest[0] === "/") {
            prev.type = "globstar";
            prev.value += value;
            prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
            state.output = prev.output;
            state.globstar = true;
            consume(value + advance());
            push({ type: "slash", value: "/", output: "" });
            continue;
          }
          state.output = state.output.slice(0, -prev.output.length);
          prev.type = "globstar";
          prev.output = globstar(opts);
          prev.value += value;
          state.output += prev.output;
          state.globstar = true;
          consume(value);
          continue;
        }
        const token = { type: "star", value, output: star };
        if (opts.bash === true) {
          token.output = ".*?";
          if (prev.type === "bos" || prev.type === "slash") {
            token.output = nodot + token.output;
          }
          push(token);
          continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
          token.output = value;
          push(token);
          continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
          if (prev.type === "dot") {
            state.output += NO_DOT_SLASH;
            prev.output += NO_DOT_SLASH;
          } else if (opts.dot === true) {
            state.output += NO_DOTS_SLASH;
            prev.output += NO_DOTS_SLASH;
          } else {
            state.output += nodot;
            prev.output += nodot;
          }
          if (peek() !== "*") {
            state.output += ONE_CHAR;
            prev.output += ONE_CHAR;
          }
        }
        push(token);
      }
      while (state.brackets > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
      }
      while (state.parens > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
      }
      while (state.braces > 0) {
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
      }
      if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
      }
      if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens) {
          state.output += token.output != null ? token.output : token.value;
          if (token.suffix) {
            state.output += token.suffix;
          }
        }
      }
      return state;
    };
    parse.fastpaths = (input, options) => {
      const opts = { ...options };
      const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
      const len = input.length;
      if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
      }
      input = REPLACEMENTS[input] || input;
      const win32 = utils.isWindows(options);
      const {
        DOT_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOTS_SLASH,
        STAR,
        START_ANCHOR
      } = constants.globChars(win32);
      const nodot = opts.dot ? NO_DOTS : NO_DOT;
      const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
      const capture = opts.capture ? "" : "?:";
      const state = { negated: false, prefix: "" };
      let star = opts.bash === true ? ".*?" : STAR;
      if (opts.capture) {
        star = `(${star})`;
      }
      const globstar = (opts2) => {
        if (opts2.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
      };
      const create = (str) => {
        switch (str) {
          case "*":
            return `${nodot}${ONE_CHAR}${star}`;
          case ".*":
            return `${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*.*":
            return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "*/*":
            return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
          case "**":
            return nodot + globstar(opts);
          case "**/*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
          case "**/*.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
          case "**/.*":
            return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
          default: {
            const match = /^(.*?)\.(\w+)$/.exec(str);
            if (!match) return;
            const source2 = create(match[1]);
            if (!source2) return;
            return source2 + DOT_LITERAL + match[2];
          }
        }
      };
      const output = utils.removePrefix(input, state);
      let source = create(output);
      if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
      }
      return source;
    };
    module.exports = parse;
  }
});
var require_picomatch = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/lib/picomatch.js"(exports, module) {
    "use strict";
    var path = __require2("path");
    var scan = require_scan();
    var parse = require_parse();
    var utils = require_utils2();
    var constants = require_constants2();
    var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
    var picomatch = (glob, options, returnState = false) => {
      if (Array.isArray(glob)) {
        const fns = glob.map((input) => picomatch(input, options, returnState));
        const arrayMatcher = (str) => {
          for (const isMatch of fns) {
            const state2 = isMatch(str);
            if (state2) return state2;
          }
          return false;
        };
        return arrayMatcher;
      }
      const isState = isObject(glob) && glob.tokens && glob.input;
      if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
      }
      const opts = options || {};
      const posix = utils.isWindows(options);
      const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
      const state = regex.state;
      delete regex.state;
      let isIgnored = () => false;
      if (opts.ignore) {
        const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
      }
      const matcher = (input, returnObject = false) => {
        const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
        const result = { glob, state, regex, posix, input, output, match, isMatch };
        if (typeof opts.onResult === "function") {
          opts.onResult(result);
        }
        if (isMatch === false) {
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (isIgnored(input)) {
          if (typeof opts.onIgnore === "function") {
            opts.onIgnore(result);
          }
          result.isMatch = false;
          return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
          opts.onMatch(result);
        }
        return returnObject ? result : true;
      };
      if (returnState) {
        matcher.state = state;
      }
      return matcher;
    };
    picomatch.test = (input, regex, options, { glob, posix } = {}) => {
      if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
      }
      if (input === "") {
        return { isMatch: false, output: "" };
      }
      const opts = options || {};
      const format = opts.format || (posix ? utils.toPosixSlashes : null);
      let match = input === glob;
      let output = match && format ? format(input) : input;
      if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
      }
      if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
          match = picomatch.matchBase(input, regex, options, posix);
        } else {
          match = regex.exec(output);
        }
      }
      return { isMatch: Boolean(match), match, output };
    };
    picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options)) => {
      const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
      return regex.test(path.basename(input));
    };
    picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
    picomatch.parse = (pattern, options) => {
      if (Array.isArray(pattern)) return pattern.map((p) => picomatch.parse(p, options));
      return parse(pattern, { ...options, fastpaths: false });
    };
    picomatch.scan = (input, options) => scan(input, options);
    picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
      if (returnOutput === true) {
        return state.output;
      }
      const opts = options || {};
      const prepend = opts.contains ? "" : "^";
      const append = opts.contains ? "" : "$";
      let source = `${prepend}(?:${state.output})${append}`;
      if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
      }
      const regex = picomatch.toRegex(source, options);
      if (returnState === true) {
        regex.state = state;
      }
      return regex;
    };
    picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
      if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
      }
      let parsed = { negated: false, fastpaths: true };
      if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
      }
      if (!parsed.output) {
        parsed = parse(input, options);
      }
      return picomatch.compileRe(parsed, options, returnOutput, returnState);
    };
    picomatch.toRegex = (source, options) => {
      try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
      } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
      }
    };
    picomatch.constants = constants;
    module.exports = picomatch;
  }
});
var require_picomatch2 = __commonJS({
  "node_modules/.pnpm/picomatch@2.3.1/node_modules/picomatch/index.js"(exports, module) {
    "use strict";
    module.exports = require_picomatch();
  }
});
var require_aspectService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/aspectService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayAspectService = void 0;
    var pm = require_picomatch2();
    var interface_1 = require_interface();
    var decorator_1 = require_decorator();
    var types_1 = require_types();
    var MidwayAspectService = class MidwayAspectService {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
      }
      /**
       * load aspect method for container
       */
      async loadAspect() {
        const aspectModules = (0, decorator_1.listModule)(decorator_1.ASPECT_KEY);
        let aspectDataList = [];
        for (const module2 of aspectModules) {
          const data = (0, decorator_1.getClassMetadata)(decorator_1.ASPECT_KEY, module2);
          aspectDataList = aspectDataList.concat(data.map((el) => {
            el.aspectModule = module2;
            return el;
          }));
        }
        aspectDataList.sort((pre, next) => {
          return (next.priority || 0) - (pre.priority || 0);
        });
        for (const aspectData of aspectDataList) {
          const aspectIns = await this.applicationContext.getAsync(aspectData.aspectModule);
          await this.addAspect(aspectIns, aspectData);
        }
      }
      async addAspect(aspectIns, aspectData) {
        const module2 = aspectData.aspectTarget;
        const names = Object.getOwnPropertyNames(module2.prototype);
        const isMatch = aspectData.match ? pm(aspectData.match) : () => true;
        for (const name of names) {
          if (name === "constructor" || !isMatch(name)) {
            continue;
          }
          const descriptor = Object.getOwnPropertyDescriptor(module2.prototype, name);
          if (!descriptor || descriptor.writable === false) {
            continue;
          }
          this.interceptPrototypeMethod(module2, name, aspectIns);
        }
      }
      /**
       * intercept class method in prototype
       * @param Clz class you want to intercept
       * @param methodName method name you want to intercept
       * @param aspectObject aspect object, before, round, etc.
       */
      interceptPrototypeMethod(Clz, methodName, aspectObject) {
        const originMethod = Clz.prototype[methodName];
        if (types_1.Types.isAsyncFunction(Clz.prototype[methodName])) {
          Clz.prototype[methodName] = async function(...args) {
            var _a, _b, _c;
            let error, result;
            const newProceed = (...args2) => {
              return originMethod.apply(this, args2);
            };
            const joinPoint = {
              methodName,
              target: this,
              args,
              proceed: newProceed,
              proceedIsAsyncFunction: true
            };
            if (typeof aspectObject === "function") {
              aspectObject = aspectObject();
            }
            try {
              await ((_a = aspectObject.before) === null || _a === void 0 ? void 0 : _a.call(aspectObject, joinPoint));
              if (aspectObject.around) {
                result = await aspectObject.around(joinPoint);
              } else {
                result = await originMethod.call(this, ...joinPoint.args);
              }
              joinPoint.proceed = void 0;
              const resultTemp = await ((_b = aspectObject.afterReturn) === null || _b === void 0 ? void 0 : _b.call(aspectObject, joinPoint, result));
              result = typeof resultTemp === "undefined" ? result : resultTemp;
              return result;
            } catch (err) {
              joinPoint.proceed = void 0;
              error = err;
              if (aspectObject.afterThrow) {
                await aspectObject.afterThrow(joinPoint, error);
              } else {
                throw err;
              }
            } finally {
              await ((_c = aspectObject.after) === null || _c === void 0 ? void 0 : _c.call(aspectObject, joinPoint, result, error));
            }
          };
        } else {
          Clz.prototype[methodName] = function(...args) {
            var _a, _b, _c;
            let error, result;
            const newProceed = (...args2) => {
              return originMethod.apply(this, args2);
            };
            const joinPoint = {
              methodName,
              target: this,
              args,
              proceed: newProceed,
              proceedIsAsyncFunction: false
            };
            if (typeof aspectObject === "function") {
              aspectObject = aspectObject();
            }
            try {
              (_a = aspectObject.before) === null || _a === void 0 ? void 0 : _a.call(aspectObject, joinPoint);
              if (aspectObject.around) {
                result = aspectObject.around(joinPoint);
              } else {
                result = originMethod.call(this, ...joinPoint.args);
              }
              joinPoint.proceed = void 0;
              const resultTemp = (_b = aspectObject.afterReturn) === null || _b === void 0 ? void 0 : _b.call(aspectObject, joinPoint, result);
              result = typeof resultTemp === "undefined" ? result : resultTemp;
              return result;
            } catch (err) {
              joinPoint.proceed = void 0;
              error = err;
              if (aspectObject.afterThrow) {
                aspectObject.afterThrow(joinPoint, error);
              } else {
                throw err;
              }
            } finally {
              (_c = aspectObject.after) === null || _c === void 0 ? void 0 : _c.call(aspectObject, joinPoint, result, error);
            }
          };
        }
      }
    };
    MidwayAspectService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayAspectService);
    exports.MidwayAspectService = MidwayAspectService;
  }
});
var require_decoratorService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/decoratorService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayDecoratorService = void 0;
    var decorator_1 = require_decorator();
    var interface_1 = require_interface();
    var aspectService_1 = require_aspectService();
    var error_1 = require_error();
    var util = __require2("util");
    var types_1 = require_types();
    var debug = util.debuglog("midway:debug");
    var MidwayDecoratorService = class MidwayDecoratorService {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
        this.propertyHandlerMap = /* @__PURE__ */ new Map();
        this.methodDecoratorMap = /* @__PURE__ */ new Map();
        this.parameterDecoratorMap = /* @__PURE__ */ new Map();
        this.parameterDecoratorPipes = /* @__PURE__ */ new Map();
      }
      init() {
        this.applicationContext.onBeforeBind((Clzz) => {
          const methodDecoratorMetadataList = (0, decorator_1.getClassMetadata)(decorator_1.INJECT_CUSTOM_METHOD, Clzz);
          if (methodDecoratorMetadataList) {
            for (const meta of methodDecoratorMetadataList) {
              const { propertyName, key, metadata, options } = meta;
              if (!options || !options.impl) {
                continue;
              }
              this.aspectService.interceptPrototypeMethod(Clzz, propertyName, () => {
                const methodDecoratorHandler = this.methodDecoratorMap.get(key);
                if (!methodDecoratorHandler) {
                  throw new error_1.MidwayCommonError(`Method Decorator "${key}" handler not found, please register first.`);
                }
                return methodDecoratorHandler({
                  target: Clzz,
                  propertyName,
                  metadata
                });
              });
            }
          }
          const parameterDecoratorMetadata = (0, decorator_1.getClassMetadata)(decorator_1.INJECT_CUSTOM_PARAM, Clzz);
          if (parameterDecoratorMetadata) {
            for (const methodName of Object.keys(parameterDecoratorMetadata)) {
              this.aspectService.interceptPrototypeMethod(Clzz, methodName, () => {
                return {
                  before: async (joinPoint) => {
                    const newArgs = [...joinPoint.args];
                    for (const meta of parameterDecoratorMetadata[methodName]) {
                      const { propertyName, key, metadata, parameterIndex, options } = meta;
                      let parameterDecoratorHandler;
                      if (options && options.impl) {
                        parameterDecoratorHandler = this.parameterDecoratorMap.get(key);
                        if (!parameterDecoratorHandler) {
                          throw new error_1.MidwayCommonError(`Parameter Decorator "${key}" handler not found, please register first.`);
                        }
                      } else {
                        parameterDecoratorHandler = async ({ parameterIndex: parameterIndex2, originArgs }) => {
                          return originArgs[parameterIndex2];
                        };
                      }
                      const paramTypes = (0, decorator_1.getMethodParamTypes)(Clzz, propertyName);
                      let skipPipes = false;
                      try {
                        newArgs[parameterIndex] = await parameterDecoratorHandler({
                          metadata,
                          propertyName,
                          parameterIndex,
                          target: Clzz,
                          originArgs: newArgs,
                          originParamType: paramTypes[parameterIndex],
                          instance: joinPoint.target
                        });
                      } catch (err) {
                        skipPipes = true;
                        if ((options === null || options === void 0 ? void 0 : options.throwError) === true) {
                          throw err;
                        } else {
                          debug(`[core]: Parameter decorator throw error and use origin args, ${err.stack}`);
                        }
                      }
                      if (skipPipes) {
                        continue;
                      }
                      const pipes = [
                        ...this.parameterDecoratorPipes.get(key) || [],
                        ...(options === null || options === void 0 ? void 0 : options.pipes) || []
                      ];
                      for (const pipe of pipes) {
                        let transform;
                        if ("transform" in pipe) {
                          transform = pipe["transform"].bind(pipe);
                        } else if ((0, types_1.isClass)(pipe)) {
                          const ins = await this.applicationContext.getAsync(pipe);
                          transform = ins.transform.bind(ins);
                        } else if (typeof pipe === "function") {
                          transform = pipe;
                        } else {
                          throw new error_1.MidwayParameterError("Pipe must be a function or implement PipeTransform interface");
                        }
                        newArgs[parameterIndex] = await transform(newArgs[parameterIndex], {
                          metaType: (0, decorator_1.transformTypeFromTSDesign)(paramTypes[parameterIndex]),
                          metadata,
                          target: joinPoint.target,
                          methodName: joinPoint.methodName
                        });
                      }
                    }
                    joinPoint.args = newArgs;
                  }
                };
              });
            }
          }
        });
        this.applicationContext.onObjectCreated((instance, options) => {
          if (this.propertyHandlerMap.size > 0 && Array.isArray(options.definition.handlerProps)) {
            for (const item of options.definition.handlerProps) {
              this.defineGetterPropertyValue(item, instance, this.getHandler(item.key));
            }
          }
        });
        this.registerPropertyHandler(decorator_1.APPLICATION_CONTEXT_KEY, (propertyName, mete) => {
          return this.applicationContext;
        });
      }
      registerPropertyHandler(decoratorKey, fn) {
        debug(`[core]: Register property decorator key="${decoratorKey}"`);
        this.propertyHandlerMap.set(decoratorKey, fn);
      }
      registerMethodHandler(decoratorKey, fn) {
        debug(`[core]: Register method decorator key="${decoratorKey}"`);
        this.methodDecoratorMap.set(decoratorKey, fn);
      }
      registerParameterHandler(decoratorKey, fn) {
        debug(`[core]: Register parameter decorator key="${decoratorKey}"`);
        this.parameterDecoratorMap.set(decoratorKey, fn);
      }
      registerParameterPipes(decoratorKey, pipes) {
        if (!this.parameterDecoratorPipes.has(decoratorKey)) {
          this.parameterDecoratorPipes.set(decoratorKey, []);
        }
        this.parameterDecoratorPipes.set(decoratorKey, this.parameterDecoratorPipes.get(decoratorKey).concat(pipes));
      }
      /**
       * binding getter method for decorator
       *
       * @param prop
       * @param instance
       * @param getterHandler
       */
      defineGetterPropertyValue(prop, instance, getterHandler) {
        if (prop && getterHandler) {
          if (prop.propertyName) {
            Object.defineProperty(instance, prop.propertyName, {
              get: () => {
                var _a;
                return getterHandler(prop.propertyName, (_a = prop.metadata) !== null && _a !== void 0 ? _a : {}, instance);
              },
              configurable: true,
              enumerable: true
            });
          }
        }
      }
      getHandler(key) {
        if (this.propertyHandlerMap.has(key)) {
          return this.propertyHandlerMap.get(key);
        }
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", aspectService_1.MidwayAspectService)
    ], MidwayDecoratorService.prototype, "aspectService", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", void 0)
    ], MidwayDecoratorService.prototype, "init", null);
    MidwayDecoratorService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayDecoratorService);
    exports.MidwayDecoratorService = MidwayDecoratorService;
  }
});
var require_applicationManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/applicationManager.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayApplicationManager = void 0;
    var interface_1 = require_interface();
    var decorator_1 = require_decorator();
    var MidwayApplicationManager = class MidwayApplicationManager {
      constructor() {
        this.globalFrameworkMap = /* @__PURE__ */ new Map();
        this.globalFrameworkTypeMap = /* @__PURE__ */ new WeakMap();
      }
      addFramework(namespace, framework) {
        this.globalFrameworkMap.set(namespace, framework);
        if (framework["getFrameworkType"]) {
          this.globalFrameworkTypeMap.set(framework["getFrameworkType"](), framework);
        }
      }
      getFramework(namespaceOrFrameworkType) {
        if (typeof namespaceOrFrameworkType === "string") {
          if (this.globalFrameworkMap.has(namespaceOrFrameworkType)) {
            return this.globalFrameworkMap.get(namespaceOrFrameworkType);
          }
        } else {
          if (this.globalFrameworkTypeMap.has(namespaceOrFrameworkType)) {
            return this.globalFrameworkTypeMap.get(namespaceOrFrameworkType);
          }
        }
      }
      getApplication(namespaceOrFrameworkType) {
        if (typeof namespaceOrFrameworkType === "string") {
          if (this.globalFrameworkMap.has(namespaceOrFrameworkType)) {
            return this.globalFrameworkMap.get(namespaceOrFrameworkType).getApplication();
          }
        } else {
          if (this.globalFrameworkTypeMap.has(namespaceOrFrameworkType)) {
            return this.globalFrameworkTypeMap.get(namespaceOrFrameworkType).getApplication();
          }
        }
      }
      getApplications(namespaces) {
        if (!namespaces) {
          return Array.from(this.globalFrameworkMap.values()).map((framework) => {
            return framework.getApplication();
          }).filter((app2) => {
            return !!app2;
          });
        } else {
          return namespaces.map((namespace) => {
            return this.getApplication(namespace);
          }).filter((app2) => {
            return !!app2;
          });
        }
      }
    };
    MidwayApplicationManager = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayApplicationManager);
    exports.MidwayApplicationManager = MidwayApplicationManager;
  }
});
var require_performanceManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/performanceManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayInitializerPerformanceManager = exports.MidwayPerformanceManager = void 0;
    var perf_hooks_1 = __require2("perf_hooks");
    var MidwayPerformanceManager = class _MidwayPerformanceManager {
      constructor(group) {
        this.group = group;
        this.observer = null;
        this.marks = /* @__PURE__ */ new Set();
        this.measures = /* @__PURE__ */ new Set();
      }
      static getInstance(group) {
        if (!this.instances.has(group)) {
          this.instances.set(group, new _MidwayPerformanceManager(group));
        }
        return this.instances.get(group);
      }
      formatKey(key, step) {
        return `${this.group}:${key}-${step}`;
      }
      markStart(key) {
        const markKey = this.formatKey(key, "start");
        perf_hooks_1.performance.mark(markKey);
        this.marks.add(markKey);
      }
      markEnd(key) {
        const startKey = this.formatKey(key, "start");
        const endKey = this.formatKey(key, "end");
        const measureKey = `${this.group}:${key}`;
        perf_hooks_1.performance.mark(endKey);
        this.marks.add(endKey);
        perf_hooks_1.performance.measure(measureKey, startKey, endKey);
        this.measures.add(measureKey);
      }
      observeMeasure(callback) {
        if (this.observer) {
          return;
        }
        this.observer = new perf_hooks_1.PerformanceObserver((list) => {
          const filteredEntries = list.getEntries().filter((entry) => entry.name.startsWith(`${this.group}:`));
          if (filteredEntries.length > 0) {
            callback({
              getEntries: () => filteredEntries
            });
          }
        });
        this.observer.observe({ entryTypes: ["measure"] });
        return this.observer;
      }
      disconnect() {
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
      }
      clean() {
        this.marks.forEach((mark) => {
          try {
            perf_hooks_1.performance.clearMarks(mark);
          } catch (error) {
            console.warn(`Failed to clear mark ${mark}: ${error}`);
          }
        });
        this.marks.clear();
        this.measures.forEach((measure) => {
          try {
            perf_hooks_1.performance.clearMeasures(measure);
          } catch (error) {
            console.warn(`Failed to clear measure ${measure}: ${error}`);
          }
        });
        this.measures.clear();
        this.disconnect();
      }
      static cleanAll() {
        this.instances.forEach((instance) => instance.clean());
        this.instances.clear();
      }
      static getInitialPerformanceEntries() {
        const entries = [];
        perf_hooks_1.performance === null || perf_hooks_1.performance === void 0 ? void 0 : perf_hooks_1.performance.getEntries().forEach((entry) => {
          if (entry.name.startsWith(this.DEFAULT_GROUP.INITIALIZE)) {
            entries.push(entry.toJSON());
          }
        });
        return entries;
      }
    };
    exports.MidwayPerformanceManager = MidwayPerformanceManager;
    MidwayPerformanceManager.instances = /* @__PURE__ */ new Map();
    MidwayPerformanceManager.DEFAULT_GROUP = {
      INITIALIZE: "MidwayInitialize"
    };
    var MidwayInitializerPerformanceManager = class {
      static markStart(key) {
        const manager = MidwayPerformanceManager.getInstance(MidwayPerformanceManager.DEFAULT_GROUP.INITIALIZE);
        manager.markStart(key);
      }
      static markEnd(key) {
        const manager = MidwayPerformanceManager.getInstance(MidwayPerformanceManager.DEFAULT_GROUP.INITIALIZE);
        manager.markEnd(key);
      }
      static frameworkInitializeStart(frameworkName) {
        this.markStart(`${this.MEASURE_KEYS.FRAMEWORK_INITIALIZE}:${frameworkName}`);
      }
      static frameworkInitializeEnd(frameworkName) {
        this.markEnd(`${this.MEASURE_KEYS.FRAMEWORK_INITIALIZE}:${frameworkName}`);
      }
      static frameworkRunStart(frameworkName) {
        this.markStart(`${this.MEASURE_KEYS.FRAMEWORK_RUN}:${frameworkName}`);
      }
      static frameworkRunEnd(frameworkName) {
        this.markEnd(`${this.MEASURE_KEYS.FRAMEWORK_RUN}:${frameworkName}`);
      }
      static lifecycleStart(namespace, lifecycleName) {
        this.markStart(`${this.MEASURE_KEYS.LIFECYCLE_PREPARE}:${namespace}:${lifecycleName}`);
      }
      static lifecycleEnd(namespace, lifecycleName) {
        this.markEnd(`${this.MEASURE_KEYS.LIFECYCLE_PREPARE}:${namespace}:${lifecycleName}`);
      }
    };
    exports.MidwayInitializerPerformanceManager = MidwayInitializerPerformanceManager;
    MidwayInitializerPerformanceManager.MEASURE_KEYS = {
      INITIALIZE: "Initialize",
      METADATA_PREPARE: "MetadataPrepare",
      DETECTOR_PREPARE: "DetectorPrepare",
      DEFINITION_PREPARE: "DefinitionPrepare",
      CONFIG_LOAD: "ConfigLoad",
      LOGGER_PREPARE: "LoggerPrepare",
      FRAMEWORK_PREPARE: "FrameworkPrepare",
      FRAMEWORK_INITIALIZE: "FrameworkInitialize",
      FRAMEWORK_RUN: "FrameworkRun",
      LIFECYCLE_PREPARE: "LifecyclePrepare",
      PRELOAD_MODULE_PREPARE: "PreloadModulePrepare"
    };
  }
});
var require_frameworkService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/frameworkService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayFrameworkService = void 0;
    var decorator_1 = require_decorator();
    var interface_1 = require_interface();
    var configService_1 = require_configService();
    var loggerService_1 = require_loggerService();
    var baseFramework_1 = require_baseFramework();
    var pipelineService_1 = require_pipelineService();
    var decoratorService_1 = require_decoratorService();
    var aspectService_1 = require_aspectService();
    var applicationManager_1 = require_applicationManager();
    var util = __require2("util");
    var error_1 = require_error();
    var constants_1 = require_constants();
    var performanceManager_1 = require_performanceManager();
    var debug = util.debuglog("midway:debug");
    var MidwayFrameworkService = class MidwayFrameworkService {
      constructor(applicationContext, globalOptions) {
        this.applicationContext = applicationContext;
        this.globalOptions = globalOptions;
        this.globalFrameworkList = [];
      }
      async init() {
        var _a, _b;
        this.decoratorService.registerPropertyHandler(decorator_1.CONFIG_KEY, (propertyName, meta) => {
          var _a2;
          if (meta.identifier === decorator_1.ALL) {
            return this.configService.getConfiguration();
          } else {
            return this.configService.getConfiguration((_a2 = meta.identifier) !== null && _a2 !== void 0 ? _a2 : propertyName);
          }
        });
        this.decoratorService.registerPropertyHandler(decorator_1.LOGGER_KEY, (propertyName, meta) => {
          var _a2;
          return this.loggerService.getLogger((_a2 = meta.identifier) !== null && _a2 !== void 0 ? _a2 : propertyName);
        });
        this.decoratorService.registerPropertyHandler(decorator_1.PIPELINE_IDENTIFIER, (key, meta, instance) => {
          var _a2, _b2;
          return new pipelineService_1.MidwayPipelineService((_b2 = (_a2 = instance[constants_1.REQUEST_OBJ_CTX_KEY]) === null || _a2 === void 0 ? void 0 : _a2.requestContext) !== null && _b2 !== void 0 ? _b2 : this.applicationContext, meta.valves);
        });
        this.decoratorService.registerPropertyHandler(decorator_1.APPLICATION_KEY, (propertyName, meta) => {
          if (meta.type) {
            const framework = this.applicationManager.getApplication(meta.type);
            if (!framework) {
              throw new error_1.MidwayCommonError(`Framework ${meta.type} not Found`);
            }
            return framework;
          } else {
            return this.getMainApp();
          }
        });
        this.decoratorService.registerPropertyHandler(decorator_1.PLUGIN_KEY, (propertyName, meta) => {
          var _a2;
          return this.getMainApp()[(_a2 = meta.identifier) !== null && _a2 !== void 0 ? _a2 : propertyName];
        });
        this.decoratorService.registerPropertyHandler(decorator_1.FACTORY_SERVICE_CLIENT_KEY, (propertyName, meta) => {
          const factory = this.applicationContext.get(meta.serviceFactoryClz);
          const clientName = meta.clientName || factory.getDefaultClientName();
          if (clientName && factory.has(clientName)) {
            return factory.get(clientName);
          } else {
            if (!clientName) {
              throw new error_1.MidwayParameterError(`Please set clientName or options.defaultClientName for ${meta.serviceFactoryClz.name}).`);
            } else {
              throw new error_1.MidwayParameterError(`ClientName(${clientName} not found in ${meta.serviceFactoryClz.name}).`);
            }
          }
        });
        let frameworks = (0, decorator_1.listModule)(decorator_1.FRAMEWORK_KEY);
        frameworks = filterProtoFramework(frameworks);
        debug(`[core]: Found Framework length = ${frameworks.length}`);
        if (frameworks.length) {
          for (const frameworkClz of frameworks) {
            if (!this.applicationContext.hasDefinition((0, decorator_1.getProviderUUId)(frameworkClz))) {
              debug(`[core]: Found Framework "${frameworkClz.name}" but missing definition, skip initialize.`);
              continue;
            }
            const frameworkInstance = await this.applicationContext.getAsync(frameworkClz, [this.applicationContext]);
            if (frameworkInstance.isEnable()) {
              performanceManager_1.MidwayInitializerPerformanceManager.frameworkInitializeStart(frameworkInstance.getFrameworkName());
              await frameworkInstance.initialize({
                applicationContext: this.applicationContext,
                namespace: frameworkInstance.getNamespace(),
                ...this.globalOptions
              });
              performanceManager_1.MidwayInitializerPerformanceManager.frameworkInitializeEnd(frameworkInstance.getFrameworkName());
              debug(`[core]: Found Framework "${frameworkInstance.getFrameworkName()}" and initialize.`);
            } else {
              debug(`[core]: Found Framework "${frameworkInstance.getFrameworkName()}" and delay initialize.`);
            }
            const definition = this.applicationContext.registry.getDefinition((0, decorator_1.getProviderUUId)(frameworkClz));
            frameworkInstance.setNamespace(definition === null || definition === void 0 ? void 0 : definition.namespace);
            this.applicationManager.addFramework((_a = definition === null || definition === void 0 ? void 0 : definition.namespace) !== null && _a !== void 0 ? _a : frameworkInstance.getFrameworkName(), frameworkInstance);
            this.globalFrameworkList.push(frameworkInstance);
          }
          let mainNs;
          const namespaceList = this.applicationContext.getNamespaceList();
          for (const namespace of namespaceList) {
            const framework = this.applicationManager.getApplication(namespace);
            if (framework) {
              mainNs = namespace;
              break;
            }
          }
          global["MIDWAY_MAIN_FRAMEWORK"] = this.mainFramework = (_b = this.applicationManager.getFramework(mainNs)) !== null && _b !== void 0 ? _b : this.globalFrameworkList[0];
          debug(`[core]: Current main Framework is "${mainNs}".`);
        }
        await this.aspectService.loadAspect();
      }
      getMainApp() {
        var _a;
        return (_a = this.mainFramework) === null || _a === void 0 ? void 0 : _a.getApplication();
      }
      getMainFramework() {
        return this.mainFramework;
      }
      getFramework(namespaceOrFrameworkType) {
        return this.applicationManager.getFramework(namespaceOrFrameworkType);
      }
      async runFramework() {
        const namespaceList = this.applicationContext.getNamespaceList();
        this.globalFrameworkList = this.globalFrameworkList.sort((a, b) => {
          return namespaceList.indexOf(a.getNamespace()) - namespaceList.indexOf(b.getNamespace());
        });
        for (const frameworkInstance of this.globalFrameworkList) {
          if (frameworkInstance.isEnable()) {
            performanceManager_1.MidwayInitializerPerformanceManager.frameworkRunStart(frameworkInstance.getFrameworkName());
            await frameworkInstance.run();
            debug(`[core]: Found Framework "${frameworkInstance.getFrameworkName()}" and run.`);
            performanceManager_1.MidwayInitializerPerformanceManager.frameworkRunEnd(frameworkInstance.getFrameworkName());
          }
        }
      }
      async stopFramework() {
        await Promise.all(Array.from(this.globalFrameworkList).map((frameworkInstance) => {
          return frameworkInstance.stop();
        }));
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", configService_1.MidwayConfigService)
    ], MidwayFrameworkService.prototype, "configService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", loggerService_1.MidwayLoggerService)
    ], MidwayFrameworkService.prototype, "loggerService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", aspectService_1.MidwayAspectService)
    ], MidwayFrameworkService.prototype, "aspectService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", decoratorService_1.MidwayDecoratorService)
    ], MidwayFrameworkService.prototype, "decoratorService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", applicationManager_1.MidwayApplicationManager)
    ], MidwayFrameworkService.prototype, "applicationManager", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], MidwayFrameworkService.prototype, "init", null);
    MidwayFrameworkService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object, Object])
    ], MidwayFrameworkService);
    exports.MidwayFrameworkService = MidwayFrameworkService;
    function filterProtoFramework(frameworks) {
      const frameworkProtoArr = [];
      for (const framework of frameworks) {
        let proto = Object.getPrototypeOf(framework);
        while (proto.name && proto.name !== baseFramework_1.BaseFramework.name) {
          frameworkProtoArr.push(proto);
          proto = Object.getPrototypeOf(proto);
        }
      }
      return frameworks.filter((framework) => {
        return !frameworkProtoArr.includes(framework);
      });
    }
  }
});
var require_healthService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/healthService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayHealthService = void 0;
    var decorator_1 = require_decorator();
    var interface_1 = require_interface();
    var configService_1 = require_configService();
    var util_1 = require_util();
    var MidwayHealthService = class MidwayHealthService {
      constructor() {
        this.healthCheckTimeout = 1e3;
        this.healthCheckMethods = [];
      }
      async init(lifeCycleInstanceList) {
        const healthCheckTimeout = this.configService.getConfiguration("core.healthCheckTimeout") || 1e3;
        this.setCheckTimeout(healthCheckTimeout);
        for (const lifecycleInstance of lifeCycleInstanceList) {
          if (lifecycleInstance.instance && lifecycleInstance.instance["onHealthCheck"]) {
            this.healthCheckMethods.push({
              item: lifecycleInstance.instance["onHealthCheck"].bind(lifecycleInstance.instance),
              meta: {
                namespace: lifecycleInstance.namespace
              }
            });
          }
        }
      }
      async getStatus() {
        const checkResult = await (0, util_1.createPromiseTimeoutInvokeChain)({
          promiseItems: this.healthCheckMethods.map((item) => {
            return {
              item: item.item(this.applicationContext),
              meta: item.meta
            };
          }),
          timeout: this.healthCheckTimeout,
          methodName: "configuration.onHealthCheck",
          onSuccess: (result, meta) => {
            if (result["status"] !== void 0) {
              return {
                namespace: meta.namespace,
                ...result
              };
            } else {
              return {
                status: false,
                namespace: meta.namespace,
                reason: "configuration.onHealthCheck return value must be object and contain status field"
              };
            }
          },
          onFail: (err, meta) => {
            return {
              status: false,
              namespace: meta.namespace,
              reason: err.message
            };
          }
        });
        const failedResult = checkResult.find((item) => !item.status);
        return {
          status: !failedResult,
          namespace: failedResult === null || failedResult === void 0 ? void 0 : failedResult.namespace,
          reason: failedResult === null || failedResult === void 0 ? void 0 : failedResult.reason,
          results: checkResult
        };
      }
      setCheckTimeout(timeout) {
        this.healthCheckTimeout = timeout;
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", configService_1.MidwayConfigService)
    ], MidwayHealthService.prototype, "configService", void 0);
    __decorate([
      (0, decorator_1.ApplicationContext)(),
      __metadata("design:type", Object)
    ], MidwayHealthService.prototype, "applicationContext", void 0);
    MidwayHealthService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton)
    ], MidwayHealthService);
    exports.MidwayHealthService = MidwayHealthService;
  }
});
var require_lifeCycleService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/lifeCycleService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayLifeCycleService = void 0;
    var interface_1 = require_interface();
    var decorator_1 = require_decorator();
    var configuration_1 = require_configuration2();
    var frameworkService_1 = require_frameworkService();
    var configService_1 = require_configService();
    var util_1 = __require2("util");
    var mockService_1 = require_mockService();
    var healthService_1 = require_healthService();
    var performanceManager_1 = require_performanceManager();
    var debug = (0, util_1.debuglog)("midway:debug");
    var MidwayLifeCycleService = class MidwayLifeCycleService {
      constructor(applicationContext) {
        this.applicationContext = applicationContext;
        this.lifecycleInstanceList = [];
      }
      async init() {
        await this.mockService.initSimulation();
        const cycles = (0, decorator_1.listModule)(decorator_1.CONFIGURATION_KEY);
        debug(`[core]: Found Configuration length = ${cycles.length}`);
        for (const cycle of cycles) {
          if (cycle.target instanceof configuration_1.FunctionalConfiguration) {
            cycle.instance = cycle.target;
          } else {
            debug(`[core]: Lifecycle run ${cycle.namespace} init`);
            cycle.instance = await this.applicationContext.getAsync(cycle.target);
          }
          cycle.instance && this.lifecycleInstanceList.push(cycle);
        }
        await this.healthService.init(this.lifecycleInstanceList);
        await Promise.all([
          this.runObjectLifeCycle(this.lifecycleInstanceList, "onBeforeObjectCreated"),
          this.runObjectLifeCycle(this.lifecycleInstanceList, "onObjectCreated"),
          this.runObjectLifeCycle(this.lifecycleInstanceList, "onObjectInit"),
          this.runObjectLifeCycle(this.lifecycleInstanceList, "onBeforeObjectDestroy")
        ]);
        await this.runContainerLifeCycle(this.lifecycleInstanceList, "onConfigLoad", (configData) => {
          if (configData) {
            this.configService.addObject(configData);
          }
        });
        await this.mockService.runSimulatorSetup();
        await this.runContainerLifeCycle(this.lifecycleInstanceList, "onReady");
        await this.frameworkService.runFramework();
        await this.runContainerLifeCycle(this.lifecycleInstanceList, "onServerReady");
        if (!this.configService.getConfiguration("debug.recordConfigMergeOrder")) {
          this.configService.clearConfigMergeOrder();
        }
      }
      async stop() {
        await this.mockService.runSimulatorTearDown();
        const cycles = (0, decorator_1.listModule)(decorator_1.CONFIGURATION_KEY) || [];
        for (const cycle of cycles.reverse()) {
          let inst;
          if (cycle.target instanceof configuration_1.FunctionalConfiguration) {
            inst = cycle.target;
          } else {
            inst = await this.applicationContext.getAsync(cycle.target);
          }
          await this.runContainerLifeCycle(inst, "onStop");
        }
        await this.frameworkService.stopFramework();
      }
      /**
       * run some lifecycle in configuration
       * @param lifecycleInstanceOrList
       * @param lifecycle
       * @param resultHandler
       */
      async runContainerLifeCycle(lifecycleInstanceOrList, lifecycle, resultHandler) {
        if (Array.isArray(lifecycleInstanceOrList)) {
          for (const cycle of lifecycleInstanceOrList) {
            if (typeof cycle.instance[lifecycle] === "function") {
              debug(`[core]: Lifecycle run ${cycle.instance.constructor.name} ${lifecycle}`);
              performanceManager_1.MidwayInitializerPerformanceManager.lifecycleStart(cycle.namespace, lifecycle);
              const result = await cycle.instance[lifecycle](this.applicationContext, this.frameworkService.getMainApp());
              if (resultHandler) {
                resultHandler(result);
              }
              performanceManager_1.MidwayInitializerPerformanceManager.lifecycleEnd(cycle.namespace, lifecycle);
            }
          }
        } else {
          if (typeof lifecycleInstanceOrList[lifecycle] === "function") {
            const name = lifecycleInstanceOrList.constructor.name;
            debug(`[core]: Lifecycle run ${name} ${lifecycle}`);
            performanceManager_1.MidwayInitializerPerformanceManager.lifecycleStart(name, lifecycle);
            const result = await lifecycleInstanceOrList[lifecycle](this.applicationContext, this.frameworkService.getMainApp());
            if (resultHandler) {
              resultHandler(result);
            }
            performanceManager_1.MidwayInitializerPerformanceManager.lifecycleEnd(name, lifecycle);
          }
        }
      }
      /**
       * run object lifecycle
       * @param lifecycleInstanceList
       * @param lifecycle
       */
      async runObjectLifeCycle(lifecycleInstanceList, lifecycle) {
        for (const cycle of lifecycleInstanceList) {
          if (typeof cycle.instance[lifecycle] === "function") {
            debug(`[core]: Lifecycle run ${cycle.instance.constructor.name} ${lifecycle}`);
            return await this.applicationContext[lifecycle](cycle.instance[lifecycle].bind(cycle.instance));
          }
        }
      }
      getLifecycleInstanceList() {
        return this.lifecycleInstanceList;
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", frameworkService_1.MidwayFrameworkService)
    ], MidwayLifeCycleService.prototype, "frameworkService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", configService_1.MidwayConfigService)
    ], MidwayLifeCycleService.prototype, "configService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", mockService_1.MidwayMockService)
    ], MidwayLifeCycleService.prototype, "mockService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", healthService_1.MidwayHealthService)
    ], MidwayLifeCycleService.prototype, "healthService", void 0);
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], MidwayLifeCycleService.prototype, "init", null);
    MidwayLifeCycleService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayLifeCycleService);
    exports.MidwayLifeCycleService = MidwayLifeCycleService;
  }
});
var require_webRouterService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/webRouterService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayWebRouterService = void 0;
    var decorator_1 = require_decorator();
    var util_1 = require_util();
    var error_1 = require_error();
    var util = __require2("util");
    var pathToRegexp_1 = require_pathToRegexp();
    var types_1 = require_types();
    var interface_1 = require_interface();
    var debug = util.debuglog("midway:debug");
    var MidwayWebRouterService = class MidwayWebRouterService {
      constructor(options = {}) {
        this.options = options;
        this.isReady = false;
        this.routes = /* @__PURE__ */ new Map();
        this.routesPriority = [];
      }
      async analyze() {
        this.analyzeController();
        this.sortPrefixAndRouter();
      }
      analyzeController() {
        const controllerModules = (0, decorator_1.listModule)(decorator_1.CONTROLLER_KEY);
        for (const module2 of controllerModules) {
          const controllerOption = (0, decorator_1.getClassMetadata)(decorator_1.CONTROLLER_KEY, module2);
          this.addController(module2, controllerOption, this.options.includeFunctionRouter);
        }
      }
      sortPrefixAndRouter() {
        this.routesPriority = this.routesPriority.filter((item) => {
          const prefixList = this.routes.get(item.prefix);
          if (prefixList.length > 0) {
            return true;
          } else {
            this.routes.delete(item.prefix);
            return false;
          }
        });
        for (const prefix of this.routes.keys()) {
          const routerInfo = this.routes.get(prefix);
          this.routes.set(prefix, this.sortRouter(routerInfo));
        }
        this.routesPriority = this.routesPriority.sort((routeA, routeB) => {
          return routeB.prefix.length - routeA.prefix.length;
        });
      }
      addController(controllerClz, controllerOption, resourceOptions = {}, functionMeta = false) {
        var _a;
        if (resourceOptions && typeof resourceOptions === "boolean") {
          functionMeta = resourceOptions;
          resourceOptions = void 0;
        }
        if (!resourceOptions) {
          resourceOptions = {};
        }
        const controllerId = (0, decorator_1.getProviderName)(controllerClz);
        debug(`[core]: Found Controller ${controllerId}.`);
        const id = (0, decorator_1.getProviderUUId)(controllerClz);
        controllerOption.routerOptions = controllerOption.routerOptions || {};
        let priority;
        const middleware = controllerOption.routerOptions.middleware;
        const controllerIgnoreGlobalPrefix = !!((_a = controllerOption.routerOptions) === null || _a === void 0 ? void 0 : _a.ignoreGlobalPrefix);
        let prefix = (0, util_1.joinURLPath)(this.options.globalPrefix, controllerOption.prefix || "/");
        const ignorePrefix = controllerOption.prefix || "/";
        if (controllerIgnoreGlobalPrefix) {
          prefix = ignorePrefix;
        }
        if (/\*/.test(prefix)) {
          throw new error_1.MidwayCommonError(`Router prefix ${prefix} can't set string with *`);
        }
        if (!this.routes.has(prefix)) {
          this.routes.set(prefix, []);
          this.routesPriority.push({
            prefix,
            priority: prefix === "/" && priority === void 0 ? -999 : 0,
            middleware,
            routerOptions: controllerOption.routerOptions,
            controllerId,
            routerModule: controllerClz
          });
        } else {
          if (middleware && middleware.length > 0) {
            const originRoute = this.routesPriority.filter((el) => {
              return el.prefix === prefix;
            })[0];
            throw new error_1.MidwayDuplicateControllerOptionsError(prefix, controllerId, originRoute.controllerId);
          }
        }
        if (!this.routes.has(ignorePrefix)) {
          this.routes.set(ignorePrefix, []);
          this.routesPriority.push({
            prefix: ignorePrefix,
            priority: ignorePrefix === "/" && priority === void 0 ? -999 : 0,
            middleware,
            routerOptions: controllerOption.routerOptions,
            controllerId,
            routerModule: controllerClz
          });
        }
        const webRouterInfo = (0, decorator_1.getClassMetadata)(decorator_1.WEB_ROUTER_KEY, controllerClz);
        if (webRouterInfo && typeof webRouterInfo[Symbol.iterator] === "function") {
          for (const webRouter of webRouterInfo) {
            const routeArgsInfo = (0, decorator_1.getPropertyDataFromClass)(decorator_1.WEB_ROUTER_PARAM_KEY, controllerClz, webRouter.method) || [];
            const routerResponseData = (0, decorator_1.getPropertyMetadata)(decorator_1.WEB_RESPONSE_KEY, controllerClz, webRouter.method) || [];
            const data = {
              id,
              prefix: webRouter.ignoreGlobalPrefix ? ignorePrefix : prefix,
              routerName: webRouter.routerName || "",
              url: webRouter.path,
              requestMethod: webRouter.requestMethod,
              method: webRouter.method,
              description: webRouter.description || "",
              summary: webRouter.summary || "",
              handlerName: `${controllerId}.${webRouter.method}`,
              funcHandlerName: `${controllerId}.${webRouter.method}`,
              controllerId,
              controllerClz,
              middleware: webRouter.middleware || [],
              controllerMiddleware: middleware || [],
              requestMetadata: routeArgsInfo,
              responseMetadata: routerResponseData
            };
            if (functionMeta) {
              data.functionName = controllerId + "-" + webRouter.method;
              data.functionTriggerName = interface_1.ServerlessTriggerType.HTTP;
              data.functionTriggerMetadata = {
                path: (0, util_1.joinURLPath)(prefix, webRouter.path.toString()),
                method: webRouter.requestMethod
              };
              data.functionMetadata = {
                functionName: data.functionName
              };
            }
            if (resourceOptions.resourceFilter && !resourceOptions.resourceFilter(data)) {
              continue;
            }
            this.checkDuplicateAndPush(data.prefix, data);
          }
        }
      }
      /**
       * dynamically add a route to root prefix
       * @param routerFunction
       * @param routerInfoOption
       */
      addRouter(routerFunction, routerInfoOption) {
        const prefix = routerInfoOption.prefix || "";
        routerInfoOption.requestMethod = (routerInfoOption.requestMethod || "GET").toUpperCase();
        if (!this.routes.has(prefix)) {
          this.routes.set(prefix, []);
          this.routesPriority.push({
            prefix,
            priority: 0,
            middleware: [],
            routerOptions: {},
            controllerId: void 0,
            routerModule: void 0
          });
        }
        this.checkDuplicateAndPush(prefix, Object.assign(routerInfoOption, {
          method: routerFunction
        }));
        this.sortPrefixAndRouter();
      }
      sortRouter(urlMatchList) {
        return urlMatchList.map((item) => {
          const urlString = item.url.toString();
          const weightArr = types_1.Types.isRegExp(item.url) ? urlString.split("\\/") : urlString.split("/");
          let weight = 0;
          for (const fragment of weightArr) {
            if (fragment === "" || fragment.includes(":") || fragment.includes("*")) {
              weight += 0;
            } else {
              weight += 1;
            }
          }
          let category = 2;
          const paramString = urlString.includes(":") ? urlString.replace(/:.+$/, "") : "";
          if (paramString) {
            category = 1;
          }
          if (urlString.includes("*")) {
            category = 0;
          }
          return {
            ...item,
            _pureRouter: urlString.replace(/\**$/, "").replace(/:\w+/, "123"),
            _level: urlString.split("/").length - 1,
            _paramString: paramString,
            _category: category,
            _weight: weight
          };
        }).sort((handlerA, handlerB) => {
          if (handlerA._category !== handlerB._category) {
            return handlerB._category - handlerA._category;
          }
          if (handlerA._weight !== handlerB._weight) {
            return handlerB._weight - handlerA._weight;
          }
          if (handlerA._level === handlerB._level) {
            if (handlerB._pureRouter === handlerA._pureRouter) {
              return handlerA.url.toString().length - handlerB.url.toString().length;
            }
            return handlerB._pureRouter.length - handlerA._pureRouter.length;
          }
          return handlerB._level - handlerA._level;
        });
      }
      async getRoutePriorityList() {
        if (!this.isReady) {
          await this.analyze();
          this.isReady = true;
        }
        return this.routesPriority;
      }
      async getRouterTable() {
        if (!this.isReady) {
          await this.analyze();
          this.isReady = true;
        }
        return this.routes;
      }
      async getFlattenRouterTable(options = {}) {
        if (!this.isReady) {
          await this.analyze();
          this.isReady = true;
        }
        let routeArr = [];
        for (const routerPriority of this.routesPriority) {
          routeArr = routeArr.concat(this.routes.get(routerPriority.prefix));
        }
        if (options.compileUrlPattern) {
          for (const item of routeArr) {
            if (item.fullUrlFlattenString) {
              item.fullUrlCompiledRegexp = pathToRegexp_1.PathToRegexpUtil.toRegexp(item.fullUrlFlattenString);
            }
          }
        }
        return routeArr;
      }
      async getMatchedRouterInfo(routerUrl, method) {
        const routes = await this.getFlattenRouterTable({
          compileUrlPattern: true
        });
        let matchedRouterInfo;
        for (const item of routes) {
          if (item.fullUrlCompiledRegexp) {
            const itemRequestMethod = item["requestMethod"].toUpperCase();
            if (("ALL" === itemRequestMethod || method.toUpperCase() === itemRequestMethod) && item.fullUrlCompiledRegexp.test(routerUrl)) {
              matchedRouterInfo = item;
              break;
            }
          }
        }
        return matchedRouterInfo;
      }
      checkDuplicateAndPush(prefix, routerInfo) {
        const prefixList = this.routes.get(prefix);
        const matched = prefixList.filter((item) => {
          return routerInfo.url && routerInfo.requestMethod && item.url === routerInfo.url && item.requestMethod === routerInfo.requestMethod;
        });
        if (matched && matched.length) {
          throw new error_1.MidwayDuplicateRouteError(`${routerInfo.requestMethod} ${routerInfo.url}`, `${matched[0].handlerName}`, `${routerInfo.handlerName}`);
        }
        if (!routerInfo.fullUrlFlattenString && routerInfo.url && typeof routerInfo.url === "string") {
          routerInfo.fullUrl = (0, util_1.joinURLPath)(prefix, routerInfo.url);
          if (/\*$/.test(routerInfo.fullUrl)) {
            routerInfo.fullUrlFlattenString = routerInfo.fullUrl.replace("*", "(.*)");
          } else {
            routerInfo.fullUrlFlattenString = routerInfo.fullUrl;
          }
        }
        prefixList.push(routerInfo);
      }
    };
    MidwayWebRouterService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayWebRouterService);
    exports.MidwayWebRouterService = MidwayWebRouterService;
  }
});
var require_dist = __commonJS({
  "node_modules/.pnpm/@midwayjs+glob@1.1.1/node_modules/@midwayjs/glob/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.run = void 0;
    var fs_1 = __require2("fs");
    var path_1 = __require2("path");
    var pm = require_picomatch2();
    var util_1 = __require2("util");
    var os = __require2("os");
    var log = (0, util_1.debuglog)("midway:glob");
    function formatWindowsPath(paths) {
      if (os.platform() === "win32" && paths) {
        return paths.map((p) => p.split(path_1.sep).join(path_1.posix.sep));
      }
      return paths;
    }
    var run = (pattern, options = { cwd: process.cwd(), ignore: [] }) => {
      log(`midway glob pattern = ${pattern}, options = ${JSON.stringify(options)}`);
      const startTime = Date.now();
      const entryDir = options.cwd;
      pattern = formatWindowsPath(pattern) || [];
      log(`after format pattern = ${pattern}`);
      const isMatch = pm(pattern, {
        ignore: formatWindowsPath(options.ignore) || []
      });
      const ignoreMatch = pm("**", {
        ignore: formatWindowsPath(options.ignore) || []
      });
      function globDirectory(dirname, isMatch2, ignoreDirMatch, options2) {
        if (!(0, fs_1.existsSync)(dirname)) {
          return [];
        }
        const list = (0, fs_1.readdirSync)(dirname);
        const result2 = [];
        for (let file of list) {
          const resolvePath = (0, path_1.resolve)(dirname, file);
          log(`resolvePath = ${resolvePath}`);
          const fileStat = (0, fs_1.statSync)(resolvePath);
          if (fileStat.isDirectory() && ignoreDirMatch(resolvePath.replace(entryDir, ""))) {
            const childs = globDirectory(resolvePath, isMatch2, ignoreDirMatch, options2);
            result2.push(...childs);
          } else if (fileStat.isFile() && isMatch2(resolvePath.replace(entryDir, ""))) {
            result2.push(resolvePath);
          }
        }
        return result2;
      }
      const result = globDirectory(entryDir, isMatch, ignoreMatch, options);
      log(`midway glob timing ${Date.now() - startTime}ms`);
      return result;
    };
    exports.run = run;
  }
});
var require_fileDetector = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/fileDetector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CustomModuleDetector = exports.ESModuleFileDetector = exports.CommonJSFileDetector = exports.AbstractFileDetector = void 0;
    var types_1 = require_types();
    var glob_1 = require_dist();
    var error_1 = require_error();
    var constants_1 = require_constants();
    var decorator_1 = require_decorator();
    var util_1 = require_util();
    var AbstractFileDetector = class {
      constructor(options) {
        this.options = options;
        this.extraDetectorOptions = {};
      }
      setExtraDetectorOptions(detectorOptions) {
        this.extraDetectorOptions = detectorOptions;
      }
    };
    exports.AbstractFileDetector = AbstractFileDetector;
    var DEFAULT_GLOB_PATTERN = ["**/**.tsx"].concat(constants_1.DEFAULT_PATTERN);
    var DEFAULT_IGNORE_PATTERN = [
      "**/logs/**",
      "**/run/**",
      "**/public/**",
      "**/app/view/**",
      "**/app/views/**",
      "**/app/extend/**",
      "**/node_modules/**",
      "**/**.test.ts",
      "**/**.test.js",
      "**/__test__/**"
    ].concat(constants_1.IGNORE_PATTERN);
    var CommonJSFileDetector = class extends AbstractFileDetector {
      constructor() {
        super(...arguments);
        this.duplicateModuleCheckSet = /* @__PURE__ */ new Map();
      }
      run(container) {
        if (this.getType() === "commonjs") {
          return this.loadSync(container);
        } else {
          return this.loadAsync(container);
        }
      }
      loadSync(container) {
        var _a;
        this.options = this.options || {};
        const loadDirs = [].concat((_a = this.options.loadDir) !== null && _a !== void 0 ? _a : container.get("baseDir"));
        for (const dir of loadDirs) {
          const fileResults = (0, glob_1.run)(DEFAULT_GLOB_PATTERN.concat(this.options.pattern || []).concat(this.extraDetectorOptions.pattern || []), {
            cwd: dir,
            ignore: DEFAULT_IGNORE_PATTERN.concat(this.options.ignore || []).concat(this.extraDetectorOptions.ignore || [])
          });
          const checkDuplicatedHandler = (module2, options) => {
            if ((this.options.conflictCheck || this.extraDetectorOptions.conflictCheck) && types_1.Types.isClass(module2)) {
              const name = (0, decorator_1.getProviderName)(module2);
              if (name) {
                if (this.duplicateModuleCheckSet.has(name)) {
                  throw new error_1.MidwayDuplicateClassNameError(name, options.srcPath, this.duplicateModuleCheckSet.get(name));
                } else {
                  this.duplicateModuleCheckSet.set(name, options.srcPath);
                }
              }
            }
          };
          for (const file of fileResults) {
            const exports2 = __require2(file);
            container.bindClass(exports2, {
              namespace: this.options.namespace,
              srcPath: file,
              createFrom: "file",
              bindHook: checkDuplicatedHandler
            });
          }
        }
        this.duplicateModuleCheckSet.clear();
      }
      async loadAsync(container) {
        var _a;
        this.options = this.options || {};
        const loadDirs = [].concat((_a = this.options.loadDir) !== null && _a !== void 0 ? _a : container.get("baseDir"));
        for (const dir of loadDirs) {
          const fileResults = (0, glob_1.run)(DEFAULT_GLOB_PATTERN.concat(this.options.pattern || []).concat(this.extraDetectorOptions.pattern || []), {
            cwd: dir,
            ignore: DEFAULT_IGNORE_PATTERN.concat(this.options.ignore || []).concat(this.extraDetectorOptions.ignore || [])
          });
          const checkDuplicatedHandler = (module2, options) => {
            if ((this.options.conflictCheck || this.extraDetectorOptions.conflictCheck) && types_1.Types.isClass(module2)) {
              const name = (0, decorator_1.getProviderName)(module2);
              if (name) {
                if (this.duplicateModuleCheckSet.has(name)) {
                  throw new error_1.MidwayDuplicateClassNameError(name, options.srcPath, this.duplicateModuleCheckSet.get(name));
                } else {
                  this.duplicateModuleCheckSet.set(name, options.srcPath);
                }
              }
            }
          };
          for (const file of fileResults) {
            const exports2 = await (0, util_1.loadModule)(file, {
              loadMode: "esm"
            });
            container.bindClass(exports2, {
              namespace: this.options.namespace,
              srcPath: file,
              createFrom: "file",
              bindHook: checkDuplicatedHandler
            });
          }
        }
        this.duplicateModuleCheckSet.clear();
      }
      getType() {
        return "commonjs";
      }
    };
    exports.CommonJSFileDetector = CommonJSFileDetector;
    var ESModuleFileDetector = class extends CommonJSFileDetector {
      getType() {
        return "module";
      }
    };
    exports.ESModuleFileDetector = ESModuleFileDetector;
    var CustomModuleDetector = class extends AbstractFileDetector {
      async run(container) {
        for (const module2 of this.options.modules) {
          container.bindClass(module2, {
            namespace: this.options.namespace,
            createFrom: "module"
          });
        }
      }
    };
    exports.CustomModuleDetector = CustomModuleDetector;
  }
});
var require_contextUtil = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/contextUtil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCurrentAsyncContextManager = exports.getCurrentMainApp = exports.getCurrentMainFramework = exports.getCurrentApplicationContext = void 0;
    var constants_1 = require_constants();
    var getCurrentApplicationContext = () => {
      return global["MIDWAY_APPLICATION_CONTEXT"];
    };
    exports.getCurrentApplicationContext = getCurrentApplicationContext;
    var getCurrentMainFramework = () => {
      return global["MIDWAY_MAIN_FRAMEWORK"];
    };
    exports.getCurrentMainFramework = getCurrentMainFramework;
    var getCurrentMainApp = () => {
      const framework = (0, exports.getCurrentMainFramework)();
      if (framework) {
        return framework.getApplication();
      }
      return void 0;
    };
    exports.getCurrentMainApp = getCurrentMainApp;
    var getCurrentAsyncContextManager = () => {
      return (0, exports.getCurrentApplicationContext)().get(constants_1.ASYNC_CONTEXT_MANAGER_KEY);
    };
    exports.getCurrentAsyncContextManager = getCurrentAsyncContextManager;
  }
});
var require_slsFunctionService = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/service/slsFunctionService.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebRouterCollector = exports.MidwayServerlessFunctionService = void 0;
    var decorator_1 = require_decorator();
    var webRouterService_1 = require_webRouterService();
    var container_1 = require_container();
    var fileDetector_1 = require_fileDetector();
    var contextUtil_1 = require_contextUtil();
    var interface_1 = require_interface();
    var MidwayServerlessFunctionService = class MidwayServerlessFunctionService extends webRouterService_1.MidwayWebRouterService {
      constructor(options = {}) {
        super(Object.assign({}, options, {
          includeFunctionRouter: true
        }));
        this.options = options;
      }
      async analyze() {
        this.analyzeController();
        this.analyzeFunction();
        this.sortPrefixAndRouter();
        for (const routerInfo of this.routes.values()) {
          for (const info of routerInfo) {
            if (info.requestMethod === "all") {
              info.functionTriggerMetadata = info.functionTriggerMetadata || {};
              info.functionTriggerMetadata.method = [
                "get",
                "post",
                "put",
                "delete",
                "head",
                "patch",
                "options"
              ];
            }
          }
        }
      }
      analyzeFunction() {
        const fnModules = (0, decorator_1.listModule)(decorator_1.FUNC_KEY);
        for (const module2 of fnModules) {
          this.collectFunctionRoute(module2);
        }
      }
      collectFunctionRoute(module2) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        const webRouterInfo = (0, decorator_1.getClassMetadata)(decorator_1.FUNC_KEY, module2);
        const controllerId = (0, decorator_1.getProviderName)(module2);
        const id = (0, decorator_1.getProviderUUId)(module2);
        const prefix = "/";
        if (!this.routes.has(prefix)) {
          this.routes.set(prefix, []);
          this.routesPriority.push({
            prefix,
            priority: -999,
            middleware: [],
            routerOptions: {},
            controllerId,
            routerModule: module2
          });
        }
        for (const webRouter of webRouterInfo) {
          if ((_a = webRouter["metadata"]) === null || _a === void 0 ? void 0 : _a["path"]) {
            const routeArgsInfo = (0, decorator_1.getPropertyDataFromClass)(decorator_1.WEB_ROUTER_PARAM_KEY, module2, webRouter["methodName"]) || [];
            const routerResponseData = (0, decorator_1.getPropertyMetadata)(decorator_1.WEB_RESPONSE_KEY, module2, webRouter["methodName"]) || [];
            const data = {
              id,
              prefix,
              routerName: "",
              url: webRouter["metadata"]["path"],
              requestMethod: (_c = (_b = webRouter["metadata"]) === null || _b === void 0 ? void 0 : _b["method"]) !== null && _c !== void 0 ? _c : "get",
              method: webRouter["methodName"],
              description: "",
              summary: "",
              handlerName: `${controllerId}.${webRouter["methodName"]}`,
              funcHandlerName: `${controllerId}.${webRouter["methodName"]}`,
              controllerId,
              middleware: ((_d = webRouter["metadata"]) === null || _d === void 0 ? void 0 : _d["middleware"]) || [],
              controllerMiddleware: [],
              requestMetadata: routeArgsInfo,
              responseMetadata: routerResponseData
            };
            const functionMeta = (0, decorator_1.getPropertyMetadata)(decorator_1.SERVERLESS_FUNC_KEY, module2, webRouter["methodName"]) || {};
            const functionName = (_g = (_e = functionMeta["functionName"]) !== null && _e !== void 0 ? _e : (_f = webRouter === null || webRouter === void 0 ? void 0 : webRouter["metadata"]) === null || _f === void 0 ? void 0 : _f["functionName"]) !== null && _g !== void 0 ? _g : createFunctionName(module2, webRouter["methodName"]);
            const funcHandlerName = (_k = (_h = functionMeta["handlerName"]) !== null && _h !== void 0 ? _h : (_j = webRouter === null || webRouter === void 0 ? void 0 : webRouter["metadata"]) === null || _j === void 0 ? void 0 : _j["handlerName"]) !== null && _k !== void 0 ? _k : data.funcHandlerName;
            data.functionName = functionName;
            data.funcHandlerName = funcHandlerName;
            data.functionTriggerName = webRouter["type"];
            data.functionTriggerMetadata = webRouter["metadata"];
            data.functionMetadata = {
              functionName,
              ...functionMeta
            };
            this.checkDuplicateAndPush(prefix, data);
          } else {
            const functionMeta = (0, decorator_1.getPropertyMetadata)(decorator_1.SERVERLESS_FUNC_KEY, module2, webRouter["methodName"]) || {};
            const functionName = (_o = (_l = functionMeta["functionName"]) !== null && _l !== void 0 ? _l : (_m = webRouter === null || webRouter === void 0 ? void 0 : webRouter["metadata"]) === null || _m === void 0 ? void 0 : _m["functionName"]) !== null && _o !== void 0 ? _o : createFunctionName(module2, webRouter["methodName"]);
            const funcHandlerName = (_r = (_p = functionMeta["handlerName"]) !== null && _p !== void 0 ? _p : (_q = webRouter === null || webRouter === void 0 ? void 0 : webRouter["metadata"]) === null || _q === void 0 ? void 0 : _q["handlerName"]) !== null && _r !== void 0 ? _r : `${controllerId}.${webRouter["methodName"]}`;
            this.checkDuplicateAndPush(prefix, {
              id,
              prefix,
              routerName: "",
              url: "",
              requestMethod: "",
              method: webRouter["methodName"],
              description: "",
              summary: "",
              handlerName: `${controllerId}.${webRouter["methodName"]}`,
              funcHandlerName,
              controllerId,
              middleware: ((_s = webRouter["metadata"]) === null || _s === void 0 ? void 0 : _s["middleware"]) || [],
              controllerMiddleware: [],
              requestMetadata: [],
              responseMetadata: [],
              functionName,
              functionTriggerName: webRouter["type"],
              functionTriggerMetadata: webRouter["metadata"],
              functionMetadata: {
                functionName,
                ...functionMeta
              }
            });
          }
        }
      }
      async getFunctionList() {
        return this.getFlattenRouterTable({
          compileUrlPattern: true
        });
      }
      addServerlessFunction(func, triggerOptions, functionOptions = {}) {
        var _a, _b;
        const prefix = "";
        if (!this.routes.has(prefix)) {
          this.routes.set(prefix, []);
          this.routesPriority.push({
            prefix,
            priority: 0,
            middleware: [],
            routerOptions: {},
            controllerId: void 0,
            routerModule: void 0
          });
        }
        const functionName = (_a = triggerOptions.functionName) !== null && _a !== void 0 ? _a : functionOptions.functionName;
        this.checkDuplicateAndPush(prefix, {
          id: null,
          method: func,
          url: triggerOptions.metadata["path"] || "",
          requestMethod: triggerOptions.metadata["method"] || "",
          description: "",
          summary: "",
          handlerName: "",
          funcHandlerName: triggerOptions.handlerName || functionOptions.handlerName,
          controllerId: "",
          middleware: ((_b = triggerOptions.metadata) === null || _b === void 0 ? void 0 : _b.middleware) || [],
          controllerMiddleware: [],
          requestMetadata: [],
          responseMetadata: [],
          functionName,
          functionTriggerName: triggerOptions.metadata.name,
          functionTriggerMetadata: triggerOptions.metadata,
          functionMetadata: {
            functionName,
            ...functionOptions
          }
        });
      }
    };
    MidwayServerlessFunctionService = __decorate([
      (0, decorator_1.Provide)(),
      (0, decorator_1.Scope)(interface_1.ScopeEnum.Singleton),
      __metadata("design:paramtypes", [Object])
    ], MidwayServerlessFunctionService);
    exports.MidwayServerlessFunctionService = MidwayServerlessFunctionService;
    function createFunctionName(target, functionName) {
      return (0, decorator_1.getProviderName)(target).replace(/[:#]/g, "-") + "-" + functionName;
    }
    var WebRouterCollector = class {
      constructor(baseDir = "", options = {}) {
        this.baseDir = baseDir;
        this.options = options;
      }
      async init() {
        if (!this.proxy) {
          if (this.baseDir) {
            const container = new container_1.MidwayContainer();
            (0, decorator_1.bindContainer)(container);
            container.setFileDetector(new fileDetector_1.CommonJSFileDetector({
              loadDir: this.baseDir
            }));
            await container.ready();
          }
          if (this.options.includeFunctionRouter) {
            if ((0, contextUtil_1.getCurrentMainFramework)()) {
              this.proxy = await (0, contextUtil_1.getCurrentMainFramework)().getApplicationContext().getAsync(MidwayServerlessFunctionService, [this.options]);
            } else {
              this.proxy = new MidwayServerlessFunctionService(this.options);
            }
          } else {
            if ((0, contextUtil_1.getCurrentMainFramework)()) {
              this.proxy = await (0, contextUtil_1.getCurrentMainFramework)().getApplicationContext().getAsync(webRouterService_1.MidwayWebRouterService, [this.options]);
            } else {
              this.proxy = new webRouterService_1.MidwayWebRouterService(this.options);
            }
          }
        }
      }
      async getRoutePriorityList() {
        await this.init();
        return this.proxy.getRoutePriorityList();
      }
      async getRouterTable() {
        await this.init();
        return this.proxy.getRouterTable();
      }
      async getFlattenRouterTable() {
        await this.init();
        return this.proxy.getFlattenRouterTable();
      }
    };
    exports.WebRouterCollector = WebRouterCollector;
  }
});
var require_dataSourceManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/dataSourceManager.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globModels = exports.formatGlobString = exports.DataSourceManager = void 0;
    var extend_1 = require_extend();
    var error_1 = require_error();
    var glob_1 = require_dist();
    var path_1 = __require2("path");
    var types_1 = require_types();
    var constants_1 = require_constants();
    var util_1 = __require2("util");
    var util_2 = require_util();
    var decorator_1 = require_decorator();
    var environmentService_1 = require_environmentService();
    var priorityManager_1 = require_priorityManager();
    var debug = (0, util_1.debuglog)("midway:debug");
    var DataSourceManager = class {
      constructor() {
        this.dataSource = /* @__PURE__ */ new Map();
        this.options = {};
        this.modelMapping = /* @__PURE__ */ new WeakMap();
        this.dataSourcePriority = {};
      }
      async initDataSource(dataSourceConfig, baseDirOrOptions) {
        var _a;
        this.options = dataSourceConfig;
        if (!this.options.dataSource) {
          throw new error_1.MidwayParameterError("[DataSourceManager] must set options.dataSource.");
        }
        if (typeof baseDirOrOptions === "string") {
          baseDirOrOptions = {
            baseDir: baseDirOrOptions,
            entitiesConfigKey: "entities"
          };
        }
        for (const dataSourceName in dataSourceConfig.dataSource) {
          const dataSourceOptions = dataSourceConfig.dataSource[dataSourceName];
          const userEntities = dataSourceOptions[baseDirOrOptions.entitiesConfigKey];
          if (userEntities) {
            const entities = /* @__PURE__ */ new Set();
            for (const entity of userEntities) {
              if (typeof entity === "string") {
                const models = await globModels(entity, baseDirOrOptions.baseDir, (_a = this.environmentService) === null || _a === void 0 ? void 0 : _a.getModuleLoadType());
                for (const model of models) {
                  entities.add(model);
                  this.modelMapping.set(model, dataSourceName);
                }
              } else {
                entities.add(entity);
                this.modelMapping.set(entity, dataSourceName);
              }
            }
            dataSourceOptions[baseDirOrOptions.entitiesConfigKey] = Array.from(entities);
            debug(`[core]: DataManager load ${dataSourceOptions[baseDirOrOptions.entitiesConfigKey].length} models from ${dataSourceName}.`);
          }
          const opts = {
            cacheInstance: dataSourceConfig.cacheInstance,
            validateConnection: dataSourceConfig.validateConnection
          };
          await this.createInstance(dataSourceOptions, dataSourceName, opts);
        }
      }
      /**
       * get a data source instance
       * @param dataSourceName
       */
      getDataSource(dataSourceName) {
        return this.dataSource.get(dataSourceName);
      }
      /**
       * check data source has exists
       * @param dataSourceName
       */
      hasDataSource(dataSourceName) {
        return this.dataSource.has(dataSourceName);
      }
      getDataSourceNames() {
        return Array.from(this.dataSource.keys());
      }
      getAllDataSources() {
        return this.dataSource;
      }
      /**
       * check the data source is connected
       * @param dataSourceName
       */
      async isConnected(dataSourceName) {
        const inst = this.getDataSource(dataSourceName);
        return inst ? this.checkConnected(inst) : false;
      }
      async createInstance(config, clientName, options) {
        const cache = options && typeof options.cacheInstance === "boolean" ? options.cacheInstance : true;
        const validateConnection = options && options.validateConnection || false;
        const configNow = (0, extend_1.extend)(true, {}, this.options["default"], config);
        const client = await this.createDataSource(configNow, clientName);
        if (cache && clientName && client) {
          this.dataSource.set(clientName, client);
        }
        if (validateConnection) {
          if (!client) {
            throw new error_1.MidwayCommonError(`[DataSourceManager] ${clientName} initialization failed.`);
          }
          const connected = await this.checkConnected(client);
          if (!connected) {
            throw new error_1.MidwayCommonError(`[DataSourceManager] ${clientName} is not connected.`);
          }
        }
        return client;
      }
      /**
       * get data source name by model or repository
       * @param modelOrRepository
       */
      getDataSourceNameByModel(modelOrRepository) {
        return this.modelMapping.get(modelOrRepository);
      }
      /**
       * Call destroyDataSource() on all data sources
       */
      async stop() {
        const arr = Array.from(this.dataSource.values());
        await Promise.all(arr.map((dbh) => {
          return this.destroyDataSource(dbh);
        }));
        this.dataSource.clear();
      }
      getDefaultDataSourceName() {
        if (this.innerDefaultDataSourceName === void 0) {
          if (this.options["defaultDataSourceName"]) {
            this.innerDefaultDataSourceName = this.options["defaultDataSourceName"];
          } else if (this.dataSource.size === 1) {
            this.innerDefaultDataSourceName = Array.from(this.dataSource.keys())[0];
          } else {
            this.innerDefaultDataSourceName = "";
          }
        }
        return this.innerDefaultDataSourceName;
      }
      getDataSourcePriority(name) {
        return this.priorityManager.getPriority(this.dataSourcePriority[name]);
      }
      isHighPriority(name) {
        return this.priorityManager.isHighPriority(this.dataSourcePriority[name]);
      }
      isMediumPriority(name) {
        return this.priorityManager.isMediumPriority(this.dataSourcePriority[name]);
      }
      isLowPriority(name) {
        return this.priorityManager.isLowPriority(this.dataSourcePriority[name]);
      }
    };
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", String)
    ], DataSourceManager.prototype, "appDir", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", environmentService_1.MidwayEnvironmentService)
    ], DataSourceManager.prototype, "environmentService", void 0);
    __decorate([
      (0, decorator_1.Inject)(),
      __metadata("design:type", priorityManager_1.MidwayPriorityManager)
    ], DataSourceManager.prototype, "priorityManager", void 0);
    exports.DataSourceManager = DataSourceManager;
    function formatGlobString(globString) {
      let pattern;
      if (!/^\*/.test(globString)) {
        globString = "/" + globString;
      }
      const parsePattern = (0, path_1.parse)(globString);
      if (parsePattern.base && (/\*/.test(parsePattern.base) || parsePattern.ext)) {
        pattern = [globString];
      } else {
        pattern = [...constants_1.DEFAULT_PATTERN.map((p) => (0, path_1.join)(globString, p))];
      }
      return pattern;
    }
    exports.formatGlobString = formatGlobString;
    async function globModels(globString, appDir, loadMode) {
      const pattern = formatGlobString(globString);
      const models = [];
      const files = (0, glob_1.run)(pattern, {
        cwd: appDir,
        ignore: constants_1.IGNORE_PATTERN
      });
      for (const file of files) {
        const exports2 = await (0, util_2.loadModule)(file, {
          loadMode
        });
        if (types_1.Types.isClass(exports2)) {
          models.push(exports2);
        } else {
          for (const m in exports2) {
            const module2 = exports2[m];
            if (types_1.Types.isClass(module2)) {
              models.push(module2);
            }
          }
        }
      }
      return models;
    }
    exports.globModels = globModels;
  }
});
var require_dataListener = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/dataListener.js"(exports) {
    "use strict";
    var __decorate = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = exports && exports.__metadata || function(k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataListener = void 0;
    var decorator_1 = require_decorator();
    var DataListener = class {
      async init() {
        this.innerData = await this.initData();
        await this.onData(this.setData.bind(this));
      }
      setData(data) {
        this.innerData = data;
      }
      getData() {
        return this.innerData;
      }
      async stop() {
        await this.destroyListener();
      }
      async destroyListener() {
      }
    };
    __decorate([
      (0, decorator_1.Init)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], DataListener.prototype, "init", null);
    __decorate([
      (0, decorator_1.Destroy)(),
      __metadata("design:type", Function),
      __metadata("design:paramtypes", []),
      __metadata("design:returntype", Promise)
    ], DataListener.prototype, "stop", null);
    exports.DataListener = DataListener;
  }
});
var require_webGenerator = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/webGenerator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebControllerGenerator = void 0;
    var decorator_1 = require_decorator();
    var util = __require2("util");
    var interface_1 = require_interface();
    var error_1 = require_error();
    var middlewareService_1 = require_middlewareService();
    var debug = util.debuglog("midway:debug");
    var WebControllerGenerator = class {
      constructor(app2, midwayWebRouterService) {
        this.app = app2;
        this.midwayWebRouterService = midwayWebRouterService;
      }
      /**
       * wrap controller string to middleware function
       * @param routeInfo
       */
      generateKoaController(routeInfo) {
        return async (ctx, next) => {
          if (routeInfo.controllerClz && typeof routeInfo.method === "string") {
            const isPassed = await this.app.getFramework().runGuard(ctx, routeInfo.controllerClz, routeInfo.method);
            if (!isPassed) {
              throw new error_1.httpError.ForbiddenError();
            }
          }
          const args = [ctx, next];
          let result;
          if (typeof routeInfo.method !== "string") {
            result = await routeInfo.method(ctx, next);
          } else {
            const controller = await ctx.requestContext.getAsync(routeInfo.id);
            result = await controller[routeInfo.method].apply(controller, args);
          }
          if (result !== void 0) {
            if (result === null) {
              ctx.response._body = null;
              ctx.response._midwayControllerNullBody = true;
            } else {
              ctx.body = result;
            }
          }
          if (Array.isArray(routeInfo.responseMetadata) && routeInfo.responseMetadata.length) {
            for (const routerRes of routeInfo.responseMetadata) {
              switch (routerRes.type) {
                case decorator_1.WEB_RESPONSE_HTTP_CODE:
                  ctx.status = routerRes.code;
                  break;
                case decorator_1.WEB_RESPONSE_HEADER:
                  for (const key in (routerRes === null || routerRes === void 0 ? void 0 : routerRes.setHeaders) || {}) {
                    ctx.set(key, routerRes.setHeaders[key]);
                  }
                  break;
                case decorator_1.WEB_RESPONSE_CONTENT_TYPE:
                  ctx.type = routerRes.contentType;
                  break;
                case decorator_1.WEB_RESPONSE_REDIRECT:
                  ctx.status = routerRes.code;
                  ctx.redirect(routerRes.url);
                  return;
              }
            }
          }
        };
      }
      async loadMidwayController(routerHandler) {
        var _a, _b;
        const routerTable = await this.midwayWebRouterService.getRouterTable();
        const routerList = await this.midwayWebRouterService.getRoutePriorityList();
        const applicationContext = this.app.getApplicationContext();
        const logger = this.app.getCoreLogger();
        const middlewareService = applicationContext.get(middlewareService_1.MidwayMiddlewareService);
        for (const routerInfo of routerList) {
          applicationContext.bindClass(routerInfo.routerModule);
          logger.debug(`Load Controller "${routerInfo.controllerId}", prefix=${routerInfo.prefix}`);
          debug(`[core]: Load Controller "${routerInfo.controllerId}", prefix=${routerInfo.prefix}`);
          const newRouter = this.createRouter({
            prefix: routerInfo.prefix,
            ...routerInfo.routerOptions
          });
          routerInfo.middleware = (_a = routerInfo.middleware) !== null && _a !== void 0 ? _a : [];
          if (routerInfo.middleware.length) {
            const routerMiddlewareFn = await middlewareService.compose(routerInfo.middleware, this.app);
            newRouter.use(routerMiddlewareFn);
          }
          const routes = routerTable.get(routerInfo.prefix);
          for (const routeInfo of routes) {
            const methodMiddlewares = [];
            routeInfo.middleware = (_b = routeInfo.middleware) !== null && _b !== void 0 ? _b : [];
            if (routeInfo.middleware.length) {
              const routeMiddlewareFn = await middlewareService.compose(routeInfo.middleware, this.app);
              methodMiddlewares.push(routeMiddlewareFn);
            }
            if (this.app.getFrameworkType() === interface_1.MidwayFrameworkType.WEB_KOA) {
              if (typeof routeInfo.url === "string" && /\*$/.test(routeInfo.url)) {
                routeInfo.url = routeInfo.url.replace("*", "(.*)");
              }
            }
            const routerArgs = [
              routeInfo.routerName,
              routeInfo.url,
              ...methodMiddlewares,
              this.generateController(routeInfo)
            ];
            logger.debug(`Load Router "${routeInfo.requestMethod.toUpperCase()} ${routeInfo.url}"`);
            debug(`[core]: Load Router "${routeInfo.requestMethod.toUpperCase()} ${routeInfo.url}"`);
            newRouter[routeInfo.requestMethod.toLowerCase()].apply(newRouter, routerArgs);
          }
          routerHandler && routerHandler(newRouter);
        }
      }
    };
    exports.WebControllerGenerator = WebControllerGenerator;
  }
});
var require_config_default = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/config/config.default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require_util();
    exports.default = (appInfo) => {
      const isDevelopment = (0, util_1.isDevelopmentEnvironment)((0, util_1.getCurrentEnvironment)());
      return {
        core: {
          healthCheckTimeout: 1e3
        },
        asyncContextManager: {
          enable: false
        },
        midwayLogger: {
          default: {
            level: "info"
          },
          clients: {
            coreLogger: {
              level: isDevelopment ? "info" : "warn"
            },
            appLogger: {
              aliasName: "logger"
            }
          }
        },
        debug: {
          recordConfigMergeOrder: isDevelopment
        }
      };
    };
  }
});
var require_setup = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/setup.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prepareGlobalApplicationContext = exports.prepareGlobalApplicationContextAsync = exports.destroyGlobalApplicationContext = exports.initializeGlobalApplicationContext = void 0;
    var _1 = require_dist2();
    var config_default_1 = require_config_default();
    var decorator_1 = require_decorator();
    var util = __require2("util");
    var slsFunctionService_1 = require_slsFunctionService();
    var path_1 = __require2("path");
    var healthService_1 = require_healthService();
    var performanceManager_1 = require_performanceManager();
    var debug = util.debuglog("midway:debug");
    var stepIdx = 1;
    function printStepDebugInfo(stepInfo) {
      debug(`

Step ${stepIdx++}: ${stepInfo}
`);
    }
    async function initializeGlobalApplicationContext(globalOptions) {
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.INITIALIZE);
      const applicationContext = await prepareGlobalApplicationContextAsync(globalOptions);
      printStepDebugInfo("Init logger");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.LOGGER_PREPARE);
      const loggerService = await applicationContext.getAsync(_1.MidwayLoggerService, [
        applicationContext,
        globalOptions
      ]);
      if (loggerService.getLogger("appLogger")) {
        applicationContext.registerObject("logger", loggerService.getLogger("appLogger"));
      }
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.LOGGER_PREPARE);
      printStepDebugInfo("Init MidwayMockService");
      await applicationContext.getAsync(_1.MidwayMockService, [applicationContext]);
      printStepDebugInfo("Init framework");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.FRAMEWORK_PREPARE);
      await applicationContext.getAsync(_1.MidwayFrameworkService, [
        applicationContext,
        globalOptions
      ]);
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.FRAMEWORK_PREPARE);
      printStepDebugInfo("Init lifecycle");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.LIFECYCLE_PREPARE);
      await applicationContext.getAsync(_1.MidwayLifeCycleService, [
        applicationContext
      ]);
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.LIFECYCLE_PREPARE);
      printStepDebugInfo("Init preload modules");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.PRELOAD_MODULE_PREPARE);
      const modules = (0, decorator_1.listPreloadModule)();
      for (const module2 of modules) {
        await applicationContext.getAsync(module2);
      }
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.PRELOAD_MODULE_PREPARE);
      printStepDebugInfo("End of initialize and start");
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.INITIALIZE);
      return applicationContext;
    }
    exports.initializeGlobalApplicationContext = initializeGlobalApplicationContext;
    async function destroyGlobalApplicationContext(applicationContext) {
      const loggerService = await applicationContext.getAsync(_1.MidwayLoggerService);
      const loggerFactory = loggerService.getCurrentLoggerFactory();
      const lifecycleService = await applicationContext.getAsync(_1.MidwayLifeCycleService);
      await lifecycleService.stop();
      await applicationContext.stop();
      (0, decorator_1.clearBindContainer)();
      loggerFactory.close();
      performanceManager_1.MidwayPerformanceManager.cleanAll();
      global["MIDWAY_APPLICATION_CONTEXT"] = void 0;
      global["MIDWAY_MAIN_FRAMEWORK"] = void 0;
    }
    exports.destroyGlobalApplicationContext = destroyGlobalApplicationContext;
    async function prepareGlobalApplicationContextAsync(globalOptions) {
      var _a, _b, _c, _d, _e;
      printStepDebugInfo("Ready to create applicationContext");
      debug('[core]: start "initializeGlobalApplicationContext"');
      debug(`[core]: bootstrap options = ${util.inspect(globalOptions)}`);
      const appDir = (_a = globalOptions.appDir) !== null && _a !== void 0 ? _a : "";
      const baseDir = (_b = globalOptions.baseDir) !== null && _b !== void 0 ? _b : "";
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.METADATA_PREPARE);
      const applicationContext = (_c = globalOptions.applicationContext) !== null && _c !== void 0 ? _c : new _1.MidwayContainer();
      debug("[core]: delegate module map from decoratorManager");
      (0, decorator_1.bindContainer)(applicationContext);
      global["MIDWAY_APPLICATION_CONTEXT"] = applicationContext;
      applicationContext.registerObject("baseDir", baseDir);
      applicationContext.registerObject("appDir", appDir);
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.METADATA_PREPARE);
      debug("[core]: set default file detector");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DETECTOR_PREPARE);
      printStepDebugInfo("Ready module detector");
      if (!globalOptions.moduleLoadType) {
        globalOptions.moduleLoadType = "commonjs";
      }
      if (globalOptions.moduleDetector !== false) {
        debug("[core]: set module load type = %s", globalOptions.moduleLoadType);
        if (!globalOptions.imports) {
          globalOptions.imports = [
            await (0, _1.loadModule)((0, path_1.join)(baseDir, `configuration${(0, _1.isTypeScriptEnvironment)() ? ".ts" : ".js"}`), {
              loadMode: globalOptions.moduleLoadType,
              safeLoad: true
            })
          ];
        }
        if (globalOptions.moduleDetector === void 0) {
          if (globalOptions.moduleLoadType === "esm") {
            applicationContext.setFileDetector(new _1.ESModuleFileDetector({
              loadDir: baseDir,
              ignore: (_d = globalOptions.ignore) !== null && _d !== void 0 ? _d : []
            }));
            globalOptions.moduleLoadType = "esm";
          } else {
            applicationContext.setFileDetector(new _1.CommonJSFileDetector({
              loadDir: baseDir,
              ignore: (_e = globalOptions.ignore) !== null && _e !== void 0 ? _e : []
            }));
          }
        }
      }
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DETECTOR_PREPARE);
      printStepDebugInfo("Binding inner service");
      applicationContext.bindClass(_1.MidwayEnvironmentService);
      applicationContext.bindClass(_1.MidwayInformationService);
      applicationContext.bindClass(_1.MidwayAspectService);
      applicationContext.bindClass(_1.MidwayDecoratorService);
      applicationContext.bindClass(_1.MidwayConfigService);
      applicationContext.bindClass(_1.MidwayLoggerService);
      applicationContext.bindClass(_1.MidwayApplicationManager);
      applicationContext.bindClass(_1.MidwayFrameworkService);
      applicationContext.bindClass(_1.MidwayMiddlewareService);
      applicationContext.bindClass(_1.MidwayLifeCycleService);
      applicationContext.bindClass(_1.MidwayMockService);
      applicationContext.bindClass(_1.MidwayWebRouterService);
      applicationContext.bindClass(slsFunctionService_1.MidwayServerlessFunctionService);
      applicationContext.bindClass(healthService_1.MidwayHealthService);
      applicationContext.bindClass(_1.MidwayPriorityManager);
      printStepDebugInfo("Binding preload module");
      if (globalOptions.preloadModules && globalOptions.preloadModules.length) {
        for (const preloadModule of globalOptions.preloadModules) {
          applicationContext.bindClass(preloadModule);
        }
      }
      printStepDebugInfo("Init MidwayConfigService, MidwayAspectService and MidwayDecoratorService");
      const environmentService = applicationContext.get(_1.MidwayEnvironmentService);
      environmentService.setModuleLoadType(globalOptions.moduleLoadType);
      const configService = applicationContext.get(_1.MidwayConfigService);
      configService.add([
        {
          default: config_default_1.default
        }
      ]);
      applicationContext.get(_1.MidwayAspectService, [applicationContext]);
      applicationContext.get(_1.MidwayDecoratorService, [applicationContext]);
      printStepDebugInfo("Load imports(component) and user code configuration module");
      applicationContext.load([].concat(globalOptions.imports).concat(globalOptions.configurationModule));
      printStepDebugInfo("Run applicationContext ready method");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DEFINITION_PREPARE);
      await applicationContext.ready();
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DEFINITION_PREPARE);
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.CONFIG_LOAD);
      if (globalOptions.globalConfig) {
        if (Array.isArray(globalOptions.globalConfig)) {
          configService.add(globalOptions.globalConfig);
        } else {
          configService.addObject(globalOptions.globalConfig);
        }
      }
      printStepDebugInfo("Load config file");
      configService.load();
      debug("[core]: Current config = %j", configService.getConfiguration());
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.CONFIG_LOAD);
      applicationContext.get(_1.MidwayMiddlewareService, [applicationContext]);
      return applicationContext;
    }
    exports.prepareGlobalApplicationContextAsync = prepareGlobalApplicationContextAsync;
    function prepareGlobalApplicationContext(globalOptions) {
      var _a, _b, _c, _d;
      printStepDebugInfo("Ready to create applicationContext");
      debug('[core]: start "initializeGlobalApplicationContext"');
      debug(`[core]: bootstrap options = ${util.inspect(globalOptions)}`);
      const appDir = (_a = globalOptions.appDir) !== null && _a !== void 0 ? _a : "";
      const baseDir = (_b = globalOptions.baseDir) !== null && _b !== void 0 ? _b : "";
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.METADATA_PREPARE);
      const applicationContext = (_c = globalOptions.applicationContext) !== null && _c !== void 0 ? _c : new _1.MidwayContainer();
      debug("[core]: delegate module map from decoratorManager");
      (0, decorator_1.bindContainer)(applicationContext);
      global["MIDWAY_APPLICATION_CONTEXT"] = applicationContext;
      applicationContext.registerObject("baseDir", baseDir);
      applicationContext.registerObject("appDir", appDir);
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.METADATA_PREPARE);
      printStepDebugInfo("Ready module detector");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DETECTOR_PREPARE);
      if (!globalOptions.moduleLoadType) {
        globalOptions.moduleLoadType = "commonjs";
      }
      if (globalOptions.moduleDetector !== false) {
        if (globalOptions.moduleDetector === void 0) {
          applicationContext.setFileDetector(new _1.CommonJSFileDetector({
            ignore: (_d = globalOptions.ignore) !== null && _d !== void 0 ? _d : []
          }));
        } else if (globalOptions.moduleDetector) {
          applicationContext.setFileDetector(globalOptions.moduleDetector);
        }
      }
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DETECTOR_PREPARE);
      printStepDebugInfo("Binding inner service");
      applicationContext.bindClass(_1.MidwayEnvironmentService);
      applicationContext.bindClass(_1.MidwayInformationService);
      applicationContext.bindClass(_1.MidwayAspectService);
      applicationContext.bindClass(_1.MidwayDecoratorService);
      applicationContext.bindClass(_1.MidwayConfigService);
      applicationContext.bindClass(_1.MidwayLoggerService);
      applicationContext.bindClass(_1.MidwayApplicationManager);
      applicationContext.bindClass(_1.MidwayFrameworkService);
      applicationContext.bindClass(_1.MidwayMiddlewareService);
      applicationContext.bindClass(_1.MidwayLifeCycleService);
      applicationContext.bindClass(_1.MidwayMockService);
      applicationContext.bindClass(_1.MidwayWebRouterService);
      applicationContext.bindClass(slsFunctionService_1.MidwayServerlessFunctionService);
      applicationContext.bindClass(healthService_1.MidwayHealthService);
      applicationContext.bindClass(_1.MidwayPriorityManager);
      printStepDebugInfo("Binding preload module");
      if (globalOptions.preloadModules && globalOptions.preloadModules.length) {
        for (const preloadModule of globalOptions.preloadModules) {
          applicationContext.bindClass(preloadModule);
        }
      }
      printStepDebugInfo("Init MidwayConfigService, MidwayAspectService and MidwayDecoratorService");
      const environmentService = applicationContext.get(_1.MidwayEnvironmentService);
      environmentService.setModuleLoadType(globalOptions.moduleLoadType);
      const configService = applicationContext.get(_1.MidwayConfigService);
      configService.add([
        {
          default: config_default_1.default
        }
      ]);
      applicationContext.get(_1.MidwayAspectService, [applicationContext]);
      applicationContext.get(_1.MidwayDecoratorService, [applicationContext]);
      printStepDebugInfo("Load imports(component) and user code configuration module");
      if (!globalOptions.imports) {
        globalOptions.imports = [
          (0, _1.safeRequire)((0, path_1.join)(globalOptions.baseDir, "configuration"))
        ];
      }
      applicationContext.load([].concat(globalOptions.imports).concat(globalOptions.configurationModule));
      printStepDebugInfo("Run applicationContext ready method");
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DEFINITION_PREPARE);
      applicationContext.ready();
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.DEFINITION_PREPARE);
      performanceManager_1.MidwayInitializerPerformanceManager.markStart(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.CONFIG_LOAD);
      if (globalOptions.globalConfig) {
        if (Array.isArray(globalOptions.globalConfig)) {
          configService.add(globalOptions.globalConfig);
        } else {
          configService.addObject(globalOptions.globalConfig);
        }
      }
      printStepDebugInfo("Load config file");
      configService.load();
      debug("[core]: Current config = %j", configService.getConfiguration());
      performanceManager_1.MidwayInitializerPerformanceManager.markEnd(performanceManager_1.MidwayInitializerPerformanceManager.MEASURE_KEYS.CONFIG_LOAD);
      applicationContext.get(_1.MidwayMiddlewareService, [applicationContext]);
      return applicationContext;
    }
    exports.prepareGlobalApplicationContext = prepareGlobalApplicationContext;
  }
});
var require_webRouterParam = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/webRouterParam.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.extractExpressLikeValue = exports.extractKoaLikeValue = void 0;
    var decorator_1 = require_decorator();
    var index_1 = require_util();
    var extractKoaLikeValue = (key, data, paramType) => {
      if (decorator_1.ALL === data) {
        data = void 0;
      }
      return function(ctx, next) {
        switch (key) {
          case decorator_1.RouteParamTypes.NEXT:
            return next;
          case decorator_1.RouteParamTypes.BODY:
            return (0, index_1.transformRequestObjectByType)(data && ctx.request.body ? ctx.request.body[data] : ctx.request.body, paramType);
          case decorator_1.RouteParamTypes.PARAM:
            return (0, index_1.transformRequestObjectByType)(data ? ctx.params[data] : ctx.params, paramType);
          case decorator_1.RouteParamTypes.QUERY:
            return (0, index_1.transformRequestObjectByType)(data ? ctx.query[data] : ctx.query, paramType);
          case decorator_1.RouteParamTypes.HEADERS:
            return (0, index_1.transformRequestObjectByType)(data ? ctx.get(data) : ctx.headers, paramType);
          case decorator_1.RouteParamTypes.SESSION:
            return (0, index_1.transformRequestObjectByType)(data ? ctx.session[data] : ctx.session, paramType);
          case decorator_1.RouteParamTypes.FILESTREAM:
            if (ctx.getFileStream) {
              return ctx.getFileStream(data);
            } else if (ctx.files) {
              if (Array.isArray(ctx.files)) {
                return ctx.files[0];
              } else {
                return ctx.files;
              }
            } else {
              return void 0;
            }
          case decorator_1.RouteParamTypes.FILESSTREAM:
            if (ctx.multipart) {
              return ctx.multipart(data);
            } else if (ctx.files) {
              return ctx.files;
            } else {
              return void 0;
            }
          case decorator_1.RouteParamTypes.REQUEST_PATH:
            return ctx["path"];
          case decorator_1.RouteParamTypes.REQUEST_IP:
            return ctx["ip"];
          case decorator_1.RouteParamTypes.QUERIES:
            if (ctx.queries) {
              return (0, index_1.transformRequestObjectByType)(data ? ctx.queries[data] : ctx.queries, paramType);
            } else {
              return (0, index_1.transformRequestObjectByType)(data ? ctx.query[data] : ctx.query, paramType);
            }
          case decorator_1.RouteParamTypes.FIELDS:
            return data ? ctx.fields[data] : ctx.fields;
          case decorator_1.RouteParamTypes.CUSTOM:
            return data ? data(ctx) : void 0;
          default:
            return null;
        }
      };
    };
    exports.extractKoaLikeValue = extractKoaLikeValue;
    var extractExpressLikeValue = (key, data, paramType) => {
      if (decorator_1.ALL === data) {
        data = void 0;
      }
      return function(req, res, next) {
        switch (key) {
          case decorator_1.RouteParamTypes.NEXT:
            return next;
          case decorator_1.RouteParamTypes.BODY:
            return (0, index_1.transformRequestObjectByType)(data && req.body ? req.body[data] : req.body, paramType);
          case decorator_1.RouteParamTypes.PARAM:
            return (0, index_1.transformRequestObjectByType)(data ? req.params[data] : req.params, paramType);
          case decorator_1.RouteParamTypes.QUERY:
            return (0, index_1.transformRequestObjectByType)(data ? req.query[data] : req.query, paramType);
          case decorator_1.RouteParamTypes.HEADERS:
            return (0, index_1.transformRequestObjectByType)(data ? req.get(data) : req.headers, paramType);
          case decorator_1.RouteParamTypes.SESSION:
            return (0, index_1.transformRequestObjectByType)(data ? req.session[data] : req.session, paramType);
          case decorator_1.RouteParamTypes.FILESTREAM:
            return req.files ? req.files[0] : void 0;
          case decorator_1.RouteParamTypes.FILESSTREAM:
            return req.files;
          case decorator_1.RouteParamTypes.REQUEST_PATH:
            return req["baseUrl"];
          case decorator_1.RouteParamTypes.REQUEST_IP:
            return req["ip"];
          case decorator_1.RouteParamTypes.QUERIES:
            if (req.queries) {
              return (0, index_1.transformRequestObjectByType)(data ? req.queries[data] : req.queries, paramType);
            } else {
              return (0, index_1.transformRequestObjectByType)(data ? req.query[data] : req.query, paramType);
            }
          case decorator_1.RouteParamTypes.FIELDS:
            return data ? req.fields[data] : req.fields;
          case decorator_1.RouteParamTypes.CUSTOM:
            return data ? data(req, res) : void 0;
          default:
            return null;
        }
      };
    };
    exports.extractExpressLikeValue = extractExpressLikeValue;
  }
});
var require_httpclient = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/httpclient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClient = exports.makeHttpRequest = void 0;
    var http = __require2("http");
    var https = __require2("https");
    var url = __require2("url");
    var util_1 = __require2("util");
    var error_1 = require_error();
    var debug = (0, util_1.debuglog)("request-client");
    var URL2 = url.URL;
    var mimeMap = {
      text: "application/text",
      json: "application/json",
      octet: "application/octet-stream"
    };
    function isHeaderExists(headers, headerKey) {
      return headers[headerKey] || headers[headerKey.toLowerCase()] || headers[headerKey.toUpperCase()];
    }
    async function makeHttpRequest(url2, options = {}) {
      debug(`request '${url2}'`);
      const whatwgUrl = new URL2(url2);
      const client = whatwgUrl.protocol === "https:" ? https : http;
      options.method = (options.method || "GET").toUpperCase();
      const { contentType, dataType, method, timeout = 5e3, headers: customHeaders, ...otherOptions } = options;
      const headers = {
        Accept: mimeMap[dataType] || mimeMap.octet,
        ...customHeaders
      };
      let data;
      if (method === "GET" && options.data) {
        for (const key of Object.keys(options.data)) {
          whatwgUrl.searchParams.set(key, options.data[key]);
        }
        headers["Content-Length"] = 0;
      } else if (options.data) {
        data = Buffer.from(JSON.stringify(options.data));
        if (!isHeaderExists(headers, "Content-Type")) {
          headers["Content-Type"] = mimeMap[contentType] || mimeMap.octet;
        }
        if (!isHeaderExists(headers, "Content-Length")) {
          headers["Content-Length"] = data.byteLength;
        }
      }
      return new Promise((resolve, reject) => {
        const req = client.request(whatwgUrl.toString(), {
          method,
          headers,
          ...otherOptions
        }, (res) => {
          res.setTimeout(timeout, () => {
            res.destroy(new Error("Response Timeout"));
          });
          res.on("error", (error) => {
            reject(error);
          });
          const chunks = [];
          res.on("data", (chunk) => {
            chunks.push(chunk);
          });
          res.on("end", () => {
            let data2 = Buffer.concat(chunks);
            if (dataType === "text" || dataType === "json") {
              data2 = data2.toString("utf8");
            }
            if (dataType === "json") {
              try {
                data2 = JSON.parse(data2);
              } catch (e) {
                return reject(new Error("[httpclient] Unable to parse response data"));
              }
            }
            Object.assign(res, {
              status: res.statusCode,
              data: data2
            });
            debug(`request '${url2}' resolved with status ${res.statusCode}`);
            resolve(res);
          });
        });
        req.setTimeout(timeout, () => {
          req.destroy(new error_1.MidwayUtilHttpClientTimeoutError("Request Timeout"));
        });
        req.on("error", (error) => {
          reject(error);
        });
        if (method !== "GET") {
          req.end(data);
        } else {
          req.end();
        }
      });
    }
    exports.makeHttpRequest = makeHttpRequest;
    var HttpClient = class {
      constructor(defaultOptions = {}) {
        this.defaultOptions = defaultOptions;
      }
      async request(url2, options) {
        return makeHttpRequest(url2, Object.assign({}, this.defaultOptions, options));
      }
    };
    exports.HttpClient = HttpClient;
  }
});
var require_retry = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryWith = exports.retryWithAsync = void 0;
    var _1 = require_util();
    var error_1 = require_error();
    function retryWithAsync(retryFn, retryTimes = 1, options = {}) {
      let defaultRetry = retryTimes;
      let error;
      return async (...args) => {
        do {
          try {
            return await retryFn.bind(options.receiver || this)(...args);
          } catch (err) {
            error = err;
          }
          if (options.retryInterval >= 0) {
            await (0, _1.sleep)(options.retryInterval);
          }
        } while (defaultRetry-- > 0);
        if (options.throwOriginError) {
          throw error;
        } else {
          throw new error_1.MidwayRetryExceededMaxTimesError(retryFn.name || "anonymous", retryTimes, error);
        }
      };
    }
    exports.retryWithAsync = retryWithAsync;
    function retryWith(retryFn, retryTimes = 1, options = {}) {
      let defaultRetry = retryTimes;
      let error;
      return (...args) => {
        do {
          try {
            return retryFn.bind(options.receiver || this)(...args);
          } catch (err) {
            error = err;
          }
        } while (defaultRetry-- > 0);
        if (options.throwOriginError) {
          throw error;
        } else {
          throw new error_1.MidwayRetryExceededMaxTimesError(retryFn.name || "anonymous", retryTimes, error);
        }
      };
    }
    exports.retryWith = retryWith;
  }
});
var require_fs = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/fs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileUtils = exports.exists = void 0;
    var fs_1 = __require2("fs");
    async function exists(p) {
      return fs_1.promises.access(p, fs_1.constants.F_OK).then(() => true).catch(() => false);
    }
    exports.exists = exists;
    exports.FileUtils = {
      exists
    };
  }
});
var require_format = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/util/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FORMAT = void 0;
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    var MS = {
      ONE_SECOND: s,
      ONE_MINUTE: m,
      ONE_HOUR: h,
      ONE_DAY: d,
      ONE_WEEK: w,
      ONE_YEAR: y
    };
    var CRONTAB = {
      EVERY_SECOND: "* * * * * *",
      EVERY_MINUTE: "0 * * * * *",
      EVERY_HOUR: "0 0 * * * *",
      EVERY_DAY: "0 0 0 * * *",
      EVERY_DAY_ZERO_FIFTEEN: "0 15 0 * * *",
      EVERY_DAY_ONE_FIFTEEN: "0 15 1 * * *",
      EVERY_PER_5_SECOND: "*/5 * * * * *",
      EVERY_PER_10_SECOND: "*/10 * * * * *",
      EVERY_PER_30_SECOND: "*/30 * * * * *",
      EVERY_PER_5_MINUTE: "0 */5 * * * *",
      EVERY_PER_10_MINUTE: "0 */10 * * * *",
      EVERY_PER_30_MINUTE: "0 */30 * * * *"
    };
    exports.FORMAT = {
      MS,
      CRONTAB
    };
  }
});
var require_base2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/response/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerResponse = void 0;
    var ServerResponse = class {
      constructor(ctx) {
        this.isSuccess = true;
        this.ctx = ctx;
      }
      json(data) {
        return Object.getPrototypeOf(this).constructor.JSON_TPL(data, this.isSuccess, this.ctx);
      }
      text(data) {
        return Object.getPrototypeOf(this).constructor.TEXT_TPL(data, this.isSuccess, this.ctx);
      }
      blob(data) {
        return Object.getPrototypeOf(this).constructor.BLOB_TPL(data, this.isSuccess, this.ctx);
      }
      success() {
        this.isSuccess = true;
        return this;
      }
      fail() {
        this.isSuccess = false;
        return this;
      }
    };
    exports.ServerResponse = ServerResponse;
    ServerResponse.TEXT_TPL = (data, isSuccess, ctx) => {
      return data;
    };
    ServerResponse.JSON_TPL = (data, isSuccess, ctx) => {
      if (isSuccess) {
        return {
          success: "true",
          data
        };
      } else {
        return {
          success: "false",
          message: data || "fail"
        };
      }
    };
    ServerResponse.BLOB_TPL = (data, isSuccess, ctx) => {
      return data;
    };
  }
});
var require_sse = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/response/sse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerSendEventStream = void 0;
    var stream_1 = __require2("stream");
    var ServerSendEventStream = class extends stream_1.Transform {
      constructor(ctx, options = {}) {
        super({
          objectMode: true,
          ...options
        });
        this.isActive = false;
        this.ctx = ctx;
        this.closeEvent = options.closeEvent || "close";
        this.options = options;
        this.ctx.req.on("close", this.handleClose.bind(this));
      }
      _transform(chunk, encoding, callback) {
        try {
          let dataLines, prefix = "data: ";
          const commentReg = /^\s*:\s*/;
          const res = [];
          if (!this.isActive) {
            this.isActive = true;
            const defaultHeader = {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
              "X-Accel-Buffering": "no"
            };
            for (const key in defaultHeader) {
              this.ctx.res.setHeader(key, defaultHeader[key]);
            }
            this.ctx.req.socket.setTimeout(0);
            this.ctx.req.socket.setNoDelay(true);
            this.ctx.req.socket.setKeepAlive(true);
            res.push(": ok");
          }
          const senderObject = chunk;
          if (senderObject.event)
            res.push("event: " + senderObject.event);
          if (senderObject.retry)
            res.push("retry: " + senderObject.retry);
          if (senderObject.id)
            res.push("id: " + senderObject.id);
          if (typeof senderObject.data === "object") {
            dataLines = JSON.stringify(senderObject.data);
            res.push(prefix + dataLines);
          } else if (typeof senderObject.data === "undefined") {
            res.push(prefix);
          } else {
            senderObject.data = String(senderObject.data);
            if (senderObject.data.search(commentReg) !== -1) {
              senderObject.data = senderObject.data.replace(commentReg, "");
              prefix = ": ";
            }
            senderObject.data = senderObject.data.replace(/(\r\n|\r|\n)/g, "\n");
            dataLines = senderObject.data.split(/\n/);
            for (let i = 0, l = dataLines.length; i < l; ++i) {
              const line = dataLines[i];
              if (i + 1 === l) {
                res.push(prefix + line);
              } else {
                res.push(prefix + line);
              }
            }
          }
          this.push(res.join("\n") + "\n\n");
          callback();
        } catch (err) {
          this.ctx.logger.error(err);
          this.sendError(err);
          this.end();
          callback(err);
        }
      }
      sendError(error) {
        this.send({
          event: "error",
          data: error.message || "An error occurred"
        });
      }
      sendEnd(message) {
        message.event = this.closeEvent;
        this.send(message);
      }
      send(message) {
        super.write(this.options.tpl(message, this.ctx));
      }
      handleClose() {
        this.end();
      }
    };
    exports.ServerSendEventStream = ServerSendEventStream;
  }
});
var require_stream = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/response/stream.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpStreamResponse = void 0;
    var stream_1 = __require2("stream");
    var HttpStreamResponse = class extends stream_1.Transform {
      constructor(ctx, options = {}) {
        super({
          objectMode: true,
          ...options
        });
        this.isActive = false;
        this.ctx = ctx;
        this.options = options;
      }
      _transform(chunk, encoding, callback) {
        try {
          if (!this.isActive) {
            this.isActive = true;
            this.ctx.res.statusCode = 200;
            this.ctx.res.setHeader("Transfer-Encoding", "chunked");
            this.ctx.res.setHeader("Cache-Control", "no-cache");
            this.ctx.req.socket.setTimeout(0);
          }
          if (typeof chunk === "string") {
            this.ctx.res.write(chunk);
          } else {
            this.ctx.res.write(JSON.stringify(chunk));
          }
          callback();
        } catch (err) {
          this.ctx.logger.error(err);
          this.end();
          this.ctx.res.end();
          callback(err);
        }
      }
      send(data) {
        if (!this.writable) {
          return;
        }
        this.write(this.options.tpl(data, this.ctx));
      }
      sendError(error) {
        this.ctx.logger.error(error);
        this.end();
        this.ctx.res.end();
      }
      _flush(callback) {
        this.ctx.res.end();
        callback();
      }
    };
    exports.HttpStreamResponse = HttpStreamResponse;
  }
});
var require_http2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/response/http.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpServerResponse = void 0;
    var fs_1 = __require2("fs");
    var base_1 = require_base2();
    var sse_1 = require_sse();
    var stream_1 = require_stream();
    var path_1 = __require2("path");
    var HttpServerResponse = class extends base_1.ServerResponse {
      constructor(ctx) {
        super(ctx);
      }
      status(code) {
        this.ctx.res.statusCode = code;
        return this;
      }
      header(key, value) {
        this.ctx.res.setHeader(key, value);
        return this;
      }
      headers(headers) {
        if (this.ctx.res.setHeaders) {
          this.ctx.res.setHeaders(new Map(Object.entries(headers)));
        } else {
          for (const key in headers) {
            this.header(key, headers[key]);
          }
        }
        return this;
      }
      json(data) {
        this.header("Content-Type", "application/json");
        return Object.getPrototypeOf(this).constructor.JSON_TPL(data, this.isSuccess, this.ctx);
      }
      text(data) {
        this.header("Content-Type", "text/plain");
        return Object.getPrototypeOf(this).constructor.TEXT_TPL(data, this.isSuccess, this.ctx);
      }
      file(filePath, mimeType) {
        this.header("Content-Type", mimeType || "application/octet-stream");
        this.header("Content-Disposition", `attachment; filename=${(0, path_1.basename)(filePath)}`);
        return Object.getPrototypeOf(this).constructor.FILE_TPL(typeof filePath === "string" ? (0, fs_1.createReadStream)(filePath) : filePath, this.isSuccess, this.ctx);
      }
      blob(data, mimeType) {
        this.header("Content-Type", mimeType || "application/octet-stream");
        return Object.getPrototypeOf(this).constructor.BLOB_TPL(data, this.isSuccess, this.ctx);
      }
      html(data) {
        this.header("Content-Type", "text/html");
        return Object.getPrototypeOf(this).constructor.HTML_TPL(data, this.isSuccess, this.ctx);
      }
      redirect(url, status = 302) {
        this.status(status);
        if (this.ctx.redirect) {
          return this.ctx.redirect(url);
        } else if (this.ctx.res.redirect) {
          return this.ctx.res.redirect(url);
        } else {
          this.header("Location", url);
        }
      }
      sse(options = {}) {
        return new sse_1.ServerSendEventStream(this.ctx, {
          tpl: Object.getPrototypeOf(this).constructor.SSE_TPL,
          ...options
        });
      }
      stream(options = {}) {
        return new stream_1.HttpStreamResponse(this.ctx, {
          tpl: Object.getPrototypeOf(this).constructor.STREAM_TPL,
          ...options
        });
      }
    };
    exports.HttpServerResponse = HttpServerResponse;
    HttpServerResponse.FILE_TPL = (data, isSuccess, ctx) => {
      return data;
    };
    HttpServerResponse.SSE_TPL = (data, ctx) => {
      return data;
    };
    HttpServerResponse.STREAM_TPL = (data, ctx) => {
      return data;
    };
    HttpServerResponse.HTML_TPL = (data, isSuccess, ctx) => {
      return data;
    };
  }
});
var require_response2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/response/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpServerResponse = exports.ServerResponse = void 0;
    var base_1 = require_base2();
    Object.defineProperty(exports, "ServerResponse", { enumerable: true, get: function() {
      return base_1.ServerResponse;
    } });
    var http_1 = require_http2();
    Object.defineProperty(exports, "HttpServerResponse", { enumerable: true, get: function() {
      return http_1.HttpServerResponse;
    } });
  }
});
var require_typedResourceManager = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/common/typedResourceManager.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypedResourceManager = void 0;
    var TypedResourceManager = class {
      constructor(typedResourceInitializerOptions) {
        this.typedResourceInitializerOptions = typedResourceInitializerOptions;
        this.resourceMap = /* @__PURE__ */ new Map();
        this.resourceBindingMap = /* @__PURE__ */ new Map();
      }
      async createResource(resourceName, resourceInitializeConfig) {
        const resource = await this.typedResourceInitializerOptions.resourceInitialize(resourceInitializeConfig, resourceName);
        this.resourceMap.set(resourceName, resource);
        return resource;
      }
      async init() {
        for (const resourceName of Object.keys(this.typedResourceInitializerOptions.initializeValue)) {
          const resourceInitializeConfig = this.typedResourceInitializerOptions.initializeValue[resourceName];
          const ClzProvider = this.typedResourceInitializerOptions.initializeClzProvider[resourceName];
          const resource = await this.createResource(resourceName, resourceInitializeConfig);
          const bindingResult = await this.typedResourceInitializerOptions.resourceBinding(ClzProvider, resourceInitializeConfig, resource, resourceName);
          if (bindingResult) {
            this.resourceBindingMap.set(resourceName, bindingResult);
          }
        }
      }
      async startParallel() {
        const startPromises = [];
        for (const [resourceName, resource] of this.resourceMap.entries()) {
          startPromises.push(this.typedResourceInitializerOptions.resourceStart(resource, this.typedResourceInitializerOptions.initializeValue[resourceName], this.resourceBindingMap.get(resourceName)));
        }
        await Promise.all(startPromises);
      }
      async start() {
        for (const [resourceName, resource] of this.resourceMap.entries()) {
          await this.typedResourceInitializerOptions.resourceStart(resource, this.typedResourceInitializerOptions.initializeValue[resourceName], this.resourceBindingMap.get(resourceName));
        }
      }
      async destroyParallel() {
        const destroyPromises = [];
        for (const [resourceName, resource] of this.resourceMap.entries()) {
          destroyPromises.push(this.typedResourceInitializerOptions.resourceDestroy(resource, this.typedResourceInitializerOptions.initializeValue[resourceName]));
        }
        await Promise.all(destroyPromises);
      }
      async destroy() {
        for (const [resourceName, resource] of this.resourceMap.entries()) {
          await this.typedResourceInitializerOptions.resourceDestroy(resource, this.typedResourceInitializerOptions.initializeValue[resourceName]);
        }
        this.resourceMap.clear();
        this.resourceBindingMap.clear();
      }
      getResource(resourceName) {
        return this.resourceMap.get(resourceName);
      }
    };
    exports.TypedResourceManager = TypedResourceManager;
  }
});
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@midwayjs+core@3.20.19/node_modules/@midwayjs/core/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MidwayPerformanceManager = exports.TypedResourceManager = exports.HttpServerResponse = exports.ServerResponse = exports.FORMAT = exports.FileUtils = exports.PathFileUtil = exports.Types = exports.retryWith = exports.retryWithAsync = exports.extend = exports.Utils = exports.sleep = exports.isTypeScriptEnvironment = exports.wrapAsync = exports.wrapMiddleware = exports.pathMatching = exports.transformRequestObjectByType = exports.deprecatedOutput = exports.delegateTargetAllPrototypeMethod = exports.delegateTargetProperties = exports.delegateTargetMethod = exports.delegateTargetPrototypeMethod = exports.loadModule = exports.safeRequire = exports.safelyGet = exports.ASYNC_ROOT_CONTEXT = exports.MidwayPriorityManager = exports.DEFAULT_PRIORITY = exports.DataSourceManager = exports.WebRouterCollector = exports.MidwayServerlessFunctionService = exports.MidwayWebRouterService = exports.MidwayHealthService = exports.MidwayMockService = exports.MidwayDecoratorService = exports.MidwayMiddlewareService = exports.MidwayLifeCycleService = exports.MidwayAspectService = exports.MidwayFrameworkService = exports.MidwayLoggerService = exports.MidwayInformationService = exports.MidwayEnvironmentService = exports.MidwayConfigService = exports.FunctionalConfiguration = exports.createConfiguration = exports.BaseFramework = exports.MidwayRequestContainer = void 0;
    __exportStar(require_interface(), exports);
    __exportStar(require_container(), exports);
    var requestContainer_1 = require_requestContainer();
    Object.defineProperty(exports, "MidwayRequestContainer", { enumerable: true, get: function() {
      return requestContainer_1.MidwayRequestContainer;
    } });
    var baseFramework_1 = require_baseFramework();
    Object.defineProperty(exports, "BaseFramework", { enumerable: true, get: function() {
      return baseFramework_1.BaseFramework;
    } });
    __exportStar(require_providerWrapper(), exports);
    __exportStar(require_constants(), exports);
    var configuration_1 = require_configuration2();
    Object.defineProperty(exports, "createConfiguration", { enumerable: true, get: function() {
      return configuration_1.createConfiguration;
    } });
    Object.defineProperty(exports, "FunctionalConfiguration", { enumerable: true, get: function() {
      return configuration_1.FunctionalConfiguration;
    } });
    var configService_1 = require_configService();
    Object.defineProperty(exports, "MidwayConfigService", { enumerable: true, get: function() {
      return configService_1.MidwayConfigService;
    } });
    var environmentService_1 = require_environmentService();
    Object.defineProperty(exports, "MidwayEnvironmentService", { enumerable: true, get: function() {
      return environmentService_1.MidwayEnvironmentService;
    } });
    var informationService_1 = require_informationService();
    Object.defineProperty(exports, "MidwayInformationService", { enumerable: true, get: function() {
      return informationService_1.MidwayInformationService;
    } });
    var loggerService_1 = require_loggerService();
    Object.defineProperty(exports, "MidwayLoggerService", { enumerable: true, get: function() {
      return loggerService_1.MidwayLoggerService;
    } });
    var frameworkService_1 = require_frameworkService();
    Object.defineProperty(exports, "MidwayFrameworkService", { enumerable: true, get: function() {
      return frameworkService_1.MidwayFrameworkService;
    } });
    var aspectService_1 = require_aspectService();
    Object.defineProperty(exports, "MidwayAspectService", { enumerable: true, get: function() {
      return aspectService_1.MidwayAspectService;
    } });
    var lifeCycleService_1 = require_lifeCycleService();
    Object.defineProperty(exports, "MidwayLifeCycleService", { enumerable: true, get: function() {
      return lifeCycleService_1.MidwayLifeCycleService;
    } });
    var middlewareService_1 = require_middlewareService();
    Object.defineProperty(exports, "MidwayMiddlewareService", { enumerable: true, get: function() {
      return middlewareService_1.MidwayMiddlewareService;
    } });
    var decoratorService_1 = require_decoratorService();
    Object.defineProperty(exports, "MidwayDecoratorService", { enumerable: true, get: function() {
      return decoratorService_1.MidwayDecoratorService;
    } });
    var mockService_1 = require_mockService();
    Object.defineProperty(exports, "MidwayMockService", { enumerable: true, get: function() {
      return mockService_1.MidwayMockService;
    } });
    var healthService_1 = require_healthService();
    Object.defineProperty(exports, "MidwayHealthService", { enumerable: true, get: function() {
      return healthService_1.MidwayHealthService;
    } });
    var webRouterService_1 = require_webRouterService();
    Object.defineProperty(exports, "MidwayWebRouterService", { enumerable: true, get: function() {
      return webRouterService_1.MidwayWebRouterService;
    } });
    var slsFunctionService_1 = require_slsFunctionService();
    Object.defineProperty(exports, "MidwayServerlessFunctionService", { enumerable: true, get: function() {
      return slsFunctionService_1.MidwayServerlessFunctionService;
    } });
    Object.defineProperty(exports, "WebRouterCollector", { enumerable: true, get: function() {
      return slsFunctionService_1.WebRouterCollector;
    } });
    var dataSourceManager_1 = require_dataSourceManager();
    Object.defineProperty(exports, "DataSourceManager", { enumerable: true, get: function() {
      return dataSourceManager_1.DataSourceManager;
    } });
    var priorityManager_1 = require_priorityManager();
    Object.defineProperty(exports, "DEFAULT_PRIORITY", { enumerable: true, get: function() {
      return priorityManager_1.DEFAULT_PRIORITY;
    } });
    Object.defineProperty(exports, "MidwayPriorityManager", { enumerable: true, get: function() {
      return priorityManager_1.MidwayPriorityManager;
    } });
    __exportStar(require_pipelineService(), exports);
    __exportStar(require_loggerFactory(), exports);
    __exportStar(require_serviceFactory(), exports);
    __exportStar(require_dataListener(), exports);
    __exportStar(require_fileDetector(), exports);
    __exportStar(require_webGenerator(), exports);
    __exportStar(require_middlewareManager(), exports);
    __exportStar(require_filterManager(), exports);
    __exportStar(require_applicationManager(), exports);
    __exportStar(require_setup(), exports);
    __exportStar(require_error(), exports);
    var asyncContextManager_1 = require_asyncContextManager();
    Object.defineProperty(exports, "ASYNC_ROOT_CONTEXT", { enumerable: true, get: function() {
      return asyncContextManager_1.ASYNC_ROOT_CONTEXT;
    } });
    __exportStar(require_decorator(), exports);
    __exportStar(require_decoratorManager(), exports);
    __exportStar(require_constant(), exports);
    var util_1 = require_util();
    Object.defineProperty(exports, "safelyGet", { enumerable: true, get: function() {
      return util_1.safelyGet;
    } });
    Object.defineProperty(exports, "safeRequire", { enumerable: true, get: function() {
      return util_1.safeRequire;
    } });
    Object.defineProperty(exports, "loadModule", { enumerable: true, get: function() {
      return util_1.loadModule;
    } });
    Object.defineProperty(exports, "delegateTargetPrototypeMethod", { enumerable: true, get: function() {
      return util_1.delegateTargetPrototypeMethod;
    } });
    Object.defineProperty(exports, "delegateTargetMethod", { enumerable: true, get: function() {
      return util_1.delegateTargetMethod;
    } });
    Object.defineProperty(exports, "delegateTargetProperties", { enumerable: true, get: function() {
      return util_1.delegateTargetProperties;
    } });
    Object.defineProperty(exports, "delegateTargetAllPrototypeMethod", { enumerable: true, get: function() {
      return util_1.delegateTargetAllPrototypeMethod;
    } });
    Object.defineProperty(exports, "deprecatedOutput", { enumerable: true, get: function() {
      return util_1.deprecatedOutput;
    } });
    Object.defineProperty(exports, "transformRequestObjectByType", { enumerable: true, get: function() {
      return util_1.transformRequestObjectByType;
    } });
    Object.defineProperty(exports, "pathMatching", { enumerable: true, get: function() {
      return util_1.pathMatching;
    } });
    Object.defineProperty(exports, "wrapMiddleware", { enumerable: true, get: function() {
      return util_1.wrapMiddleware;
    } });
    Object.defineProperty(exports, "wrapAsync", { enumerable: true, get: function() {
      return util_1.wrapAsync;
    } });
    Object.defineProperty(exports, "isTypeScriptEnvironment", { enumerable: true, get: function() {
      return util_1.isTypeScriptEnvironment;
    } });
    Object.defineProperty(exports, "sleep", { enumerable: true, get: function() {
      return util_1.sleep;
    } });
    Object.defineProperty(exports, "Utils", { enumerable: true, get: function() {
      return util_1.Utils;
    } });
    var extend_1 = require_extend();
    Object.defineProperty(exports, "extend", { enumerable: true, get: function() {
      return extend_1.extend;
    } });
    __exportStar(require_webRouterParam(), exports);
    __exportStar(require_contextUtil(), exports);
    __exportStar(require_pathToRegexp(), exports);
    __exportStar(require_httpclient(), exports);
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retryWithAsync", { enumerable: true, get: function() {
      return retry_1.retryWithAsync;
    } });
    Object.defineProperty(exports, "retryWith", { enumerable: true, get: function() {
      return retry_1.retryWith;
    } });
    var types_1 = require_types();
    Object.defineProperty(exports, "Types", { enumerable: true, get: function() {
      return types_1.Types;
    } });
    var pathFileUtil_1 = require_pathFileUtil();
    Object.defineProperty(exports, "PathFileUtil", { enumerable: true, get: function() {
      return pathFileUtil_1.PathFileUtil;
    } });
    var fs_1 = require_fs();
    Object.defineProperty(exports, "FileUtils", { enumerable: true, get: function() {
      return fs_1.FileUtils;
    } });
    var format_1 = require_format();
    Object.defineProperty(exports, "FORMAT", { enumerable: true, get: function() {
      return format_1.FORMAT;
    } });
    var index_1 = require_response2();
    Object.defineProperty(exports, "ServerResponse", { enumerable: true, get: function() {
      return index_1.ServerResponse;
    } });
    Object.defineProperty(exports, "HttpServerResponse", { enumerable: true, get: function() {
      return index_1.HttpServerResponse;
    } });
    var typedResourceManager_1 = require_typedResourceManager();
    Object.defineProperty(exports, "TypedResourceManager", { enumerable: true, get: function() {
      return typedResourceManager_1.TypedResourceManager;
    } });
    var performanceManager_1 = require_performanceManager();
    Object.defineProperty(exports, "MidwayPerformanceManager", { enumerable: true, get: function() {
      return performanceManager_1.MidwayPerformanceManager;
    } });
  }
});
var app;
var index_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    if (!app) {
      const { Bootstrap } = require_dist2();
      app = await Bootstrap.run();
    }
    const ctx = await app.createAnonymousContext({
      path,
      method,
      headers: request.headers,
      body: method === "POST" ? await request.json() : {},
      query: Object.fromEntries(url.searchParams.entries())
    });
    await app.callback()(ctx.req, ctx.res);
    return new Response(JSON.stringify(ctx.body), {
      status: ctx.status,
      headers: ctx.response.headers
    });
  }
};
export {
  index_default as default
};

