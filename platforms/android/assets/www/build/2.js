webpackJsonp([2],Array(441).concat([
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportRecipeUrlPageModule", function() { return ImportRecipeUrlPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__import_recipe_url__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(735);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ImportRecipeUrlPageModule = (function () {
    function ImportRecipeUrlPageModule() {
    }
    ImportRecipeUrlPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__import_recipe_url__["a" /* ImportRecipeUrlPage */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__import_recipe_url__["a" /* ImportRecipeUrlPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */]]
        })
    ], ImportRecipeUrlPageModule);
    return ImportRecipeUrlPageModule;
}());

//# sourceMappingURL=import-recipe-url.module.js.map

/***/ }),
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(23);
var tryCatch_1 = __webpack_require__(19);
var errorObject_1 = __webpack_require__(17);
var Observable_1 = __webpack_require__(9);
var Subscriber_1 = __webpack_require__(3);
var map_1 = __webpack_require__(44);
function getCORSRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else if (!!root_1.root.XDomainRequest) {
        return new root_1.root.XDomainRequest();
    }
    else {
        throw new Error('CORS is not supported by your browser');
    }
}
function getXMLHttpRequest() {
    if (root_1.root.XMLHttpRequest) {
        return new root_1.root.XMLHttpRequest();
    }
    else {
        var progId = void 0;
        try {
            var progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'];
            for (var i = 0; i < 3; i++) {
                try {
                    progId = progIds[i];
                    if (new root_1.root.ActiveXObject(progId)) {
                        break;
                    }
                }
                catch (e) {
                }
            }
            return new root_1.root.ActiveXObject(progId);
        }
        catch (e) {
            throw new Error('XMLHttpRequest is not supported by your browser');
        }
    }
}
function ajaxGet(url, headers) {
    if (headers === void 0) { headers = null; }
    return new AjaxObservable({ method: 'GET', url: url, headers: headers });
}
exports.ajaxGet = ajaxGet;
;
function ajaxPost(url, body, headers) {
    return new AjaxObservable({ method: 'POST', url: url, body: body, headers: headers });
}
exports.ajaxPost = ajaxPost;
;
function ajaxDelete(url, headers) {
    return new AjaxObservable({ method: 'DELETE', url: url, headers: headers });
}
exports.ajaxDelete = ajaxDelete;
;
function ajaxPut(url, body, headers) {
    return new AjaxObservable({ method: 'PUT', url: url, body: body, headers: headers });
}
exports.ajaxPut = ajaxPut;
;
function ajaxPatch(url, body, headers) {
    return new AjaxObservable({ method: 'PATCH', url: url, body: body, headers: headers });
}
exports.ajaxPatch = ajaxPatch;
;
var mapResponse = map_1.map(function (x, index) { return x.response; });
function ajaxGetJSON(url, headers) {
    return mapResponse(new AjaxObservable({
        method: 'GET',
        url: url,
        responseType: 'json',
        headers: headers
    }));
}
exports.ajaxGetJSON = ajaxGetJSON;
;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var AjaxObservable = (function (_super) {
    __extends(AjaxObservable, _super);
    function AjaxObservable(urlOrRequest) {
        _super.call(this);
        var request = {
            async: true,
            createXHR: function () {
                return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
            },
            crossDomain: false,
            withCredentials: false,
            headers: {},
            method: 'GET',
            responseType: 'json',
            timeout: 0
        };
        if (typeof urlOrRequest === 'string') {
            request.url = urlOrRequest;
        }
        else {
            for (var prop in urlOrRequest) {
                if (urlOrRequest.hasOwnProperty(prop)) {
                    request[prop] = urlOrRequest[prop];
                }
            }
        }
        this.request = request;
    }
    AjaxObservable.prototype._subscribe = function (subscriber) {
        return new AjaxSubscriber(subscriber, this.request);
    };
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * @example
     * source = Rx.Observable.ajax('/products');
     * source = Rx.Observable.ajax({ url: 'products', method: 'GET' });
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
    */
    AjaxObservable.create = (function () {
        var create = function (urlOrRequest) {
            return new AjaxObservable(urlOrRequest);
        };
        create.get = ajaxGet;
        create.post = ajaxPost;
        create.delete = ajaxDelete;
        create.put = ajaxPut;
        create.patch = ajaxPatch;
        create.getJSON = ajaxGetJSON;
        return create;
    })();
    return AjaxObservable;
}(Observable_1.Observable));
exports.AjaxObservable = AjaxObservable;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AjaxSubscriber = (function (_super) {
    __extends(AjaxSubscriber, _super);
    function AjaxSubscriber(destination, request) {
        _super.call(this, destination);
        this.request = request;
        this.done = false;
        var headers = request.headers = request.headers || {};
        // force CORS if requested
        if (!request.crossDomain && !headers['X-Requested-With']) {
            headers['X-Requested-With'] = 'XMLHttpRequest';
        }
        // ensure content type is set
        if (!('Content-Type' in headers) && !(root_1.root.FormData && request.body instanceof root_1.root.FormData) && typeof request.body !== 'undefined') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        }
        // properly serialize body
        request.body = this.serializeBody(request.body, request.headers['Content-Type']);
        this.send();
    }
    AjaxSubscriber.prototype.next = function (e) {
        this.done = true;
        var _a = this, xhr = _a.xhr, request = _a.request, destination = _a.destination;
        var response = new AjaxResponse(e, xhr, request);
        destination.next(response);
    };
    AjaxSubscriber.prototype.send = function () {
        var _a = this, request = _a.request, _b = _a.request, user = _b.user, method = _b.method, url = _b.url, async = _b.async, password = _b.password, headers = _b.headers, body = _b.body;
        var createXHR = request.createXHR;
        var xhr = tryCatch_1.tryCatch(createXHR).call(request);
        if (xhr === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            this.xhr = xhr;
            // set up the events before open XHR
            // https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
            // You need to add the event listeners before calling open() on the request.
            // Otherwise the progress events will not fire.
            this.setupEvents(xhr, request);
            // open XHR
            var result = void 0;
            if (user) {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async, user, password);
            }
            else {
                result = tryCatch_1.tryCatch(xhr.open).call(xhr, method, url, async);
            }
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
            // timeout, responseType and withCredentials can be set once the XHR is open
            if (async) {
                xhr.timeout = request.timeout;
                xhr.responseType = request.responseType;
            }
            if ('withCredentials' in xhr) {
                xhr.withCredentials = !!request.withCredentials;
            }
            // set headers
            this.setHeaders(xhr, headers);
            // finally send the request
            result = body ? tryCatch_1.tryCatch(xhr.send).call(xhr, body) : tryCatch_1.tryCatch(xhr.send).call(xhr);
            if (result === errorObject_1.errorObject) {
                this.error(errorObject_1.errorObject.e);
                return null;
            }
        }
        return xhr;
    };
    AjaxSubscriber.prototype.serializeBody = function (body, contentType) {
        if (!body || typeof body === 'string') {
            return body;
        }
        else if (root_1.root.FormData && body instanceof root_1.root.FormData) {
            return body;
        }
        if (contentType) {
            var splitIndex = contentType.indexOf(';');
            if (splitIndex !== -1) {
                contentType = contentType.substring(0, splitIndex);
            }
        }
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return Object.keys(body).map(function (key) { return (encodeURI(key) + "=" + encodeURI(body[key])); }).join('&');
            case 'application/json':
                return JSON.stringify(body);
            default:
                return body;
        }
    };
    AjaxSubscriber.prototype.setHeaders = function (xhr, headers) {
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                xhr.setRequestHeader(key, headers[key]);
            }
        }
    };
    AjaxSubscriber.prototype.setupEvents = function (xhr, request) {
        var progressSubscriber = request.progressSubscriber;
        function xhrTimeout(e) {
            var _a = xhrTimeout, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (progressSubscriber) {
                progressSubscriber.error(e);
            }
            subscriber.error(new AjaxTimeoutError(this, request)); //TODO: Make betterer.
        }
        ;
        xhr.ontimeout = xhrTimeout;
        xhrTimeout.request = request;
        xhrTimeout.subscriber = this;
        xhrTimeout.progressSubscriber = progressSubscriber;
        if (xhr.upload && 'withCredentials' in xhr) {
            if (progressSubscriber) {
                var xhrProgress_1;
                xhrProgress_1 = function (e) {
                    var progressSubscriber = xhrProgress_1.progressSubscriber;
                    progressSubscriber.next(e);
                };
                if (root_1.root.XDomainRequest) {
                    xhr.onprogress = xhrProgress_1;
                }
                else {
                    xhr.upload.onprogress = xhrProgress_1;
                }
                xhrProgress_1.progressSubscriber = progressSubscriber;
            }
            var xhrError_1;
            xhrError_1 = function (e) {
                var _a = xhrError_1, progressSubscriber = _a.progressSubscriber, subscriber = _a.subscriber, request = _a.request;
                if (progressSubscriber) {
                    progressSubscriber.error(e);
                }
                subscriber.error(new AjaxError('ajax error', this, request));
            };
            xhr.onerror = xhrError_1;
            xhrError_1.request = request;
            xhrError_1.subscriber = this;
            xhrError_1.progressSubscriber = progressSubscriber;
        }
        function xhrReadyStateChange(e) {
            var _a = xhrReadyStateChange, subscriber = _a.subscriber, progressSubscriber = _a.progressSubscriber, request = _a.request;
            if (this.readyState === 4) {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status_1 = this.status === 1223 ? 204 : this.status;
                var response = (this.responseType === 'text' ? (this.response || this.responseText) : this.response);
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status_1 === 0) {
                    status_1 = response ? 200 : 0;
                }
                if (200 <= status_1 && status_1 < 300) {
                    if (progressSubscriber) {
                        progressSubscriber.complete();
                    }
                    subscriber.next(e);
                    subscriber.complete();
                }
                else {
                    if (progressSubscriber) {
                        progressSubscriber.error(e);
                    }
                    subscriber.error(new AjaxError('ajax error ' + status_1, this, request));
                }
            }
        }
        ;
        xhr.onreadystatechange = xhrReadyStateChange;
        xhrReadyStateChange.subscriber = this;
        xhrReadyStateChange.progressSubscriber = progressSubscriber;
        xhrReadyStateChange.request = request;
    };
    AjaxSubscriber.prototype.unsubscribe = function () {
        var _a = this, done = _a.done, xhr = _a.xhr;
        if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === 'function') {
            xhr.abort();
        }
        _super.prototype.unsubscribe.call(this);
    };
    return AjaxSubscriber;
}(Subscriber_1.Subscriber));
exports.AjaxSubscriber = AjaxSubscriber;
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
var AjaxResponse = (function () {
    function AjaxResponse(originalEvent, xhr, request) {
        this.originalEvent = originalEvent;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxResponse;
}());
exports.AjaxResponse = AjaxResponse;
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
var AjaxError = (function (_super) {
    __extends(AjaxError, _super);
    function AjaxError(message, xhr, request) {
        _super.call(this, message);
        this.message = message;
        this.xhr = xhr;
        this.request = request;
        this.status = xhr.status;
        this.responseType = xhr.responseType || request.responseType;
        this.response = parseXhrResponse(this.responseType, xhr);
    }
    return AjaxError;
}(Error));
exports.AjaxError = AjaxError;
function parseXhrResponse(responseType, xhr) {
    switch (responseType) {
        case 'json':
            if ('response' in xhr) {
                //IE does not support json as responseType, parse it internally
                return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || 'null');
            }
            else {
                return JSON.parse(xhr.responseText || 'null');
            }
        case 'xml':
            return xhr.responseXML;
        case 'text':
        default:
            return ('response' in xhr) ? xhr.response : xhr.responseText;
    }
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
var AjaxTimeoutError = (function (_super) {
    __extends(AjaxTimeoutError, _super);
    function AjaxTimeoutError(xhr, request) {
        _super.call(this, 'ajax timeout', xhr, request);
    }
    return AjaxTimeoutError;
}(AjaxError));
exports.AjaxTimeoutError = AjaxTimeoutError;
//# sourceMappingURL=AjaxObservable.js.map

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsapAction_1 = __webpack_require__(679);
var AsapScheduler_1 = __webpack_require__(682);
/**
 *
 * Asap Scheduler
 *
 * <span class="informal">Perform task as fast as it can be performed asynchronously</span>
 *
 * `asap` scheduler behaves the same as {@link async} scheduler when you use it to delay task
 * in time. If however you set delay to `0`, `asap` will wait for current synchronously executing
 * code to end and then it will try to execute given task as fast as possible.
 *
 * `asap` scheduler will do its best to minimize time between end of currently executing code
 * and start of scheduled task. This makes it best candidate for performing so called "deferring".
 * Traditionally this was achieved by calling `setTimeout(deferredTask, 0)`, but that technique involves
 * some (although minimal) unwanted delay.
 *
 * Note that using `asap` scheduler does not necessarily mean that your task will be first to process
 * after currently executing code. In particular, if some task was also scheduled with `asap` before,
 * that task will execute first. That being said, if you need to schedule task asynchronously, but
 * as soon as possible, `asap` scheduler is your best bet.
 *
 * @example <caption>Compare async and asap scheduler</caption>
 *
 * Rx.Scheduler.async.schedule(() => console.log('async')); // scheduling 'async' first...
 * Rx.Scheduler.asap.schedule(() => console.log('asap'));
 *
 * // Logs:
 * // "asap"
 * // "async"
 * // ... but 'asap' goes first!
 *
 * @static true
 * @name asap
 * @owner Scheduler
 */
exports.asap = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
//# sourceMappingURL=asap.js.map

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(681);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70)))

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var timeInterval_1 = __webpack_require__(327);
exports.TimeInterval = timeInterval_1.TimeInterval;
/**
 * @param scheduler
 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timeInterval
 * @owner Observable
 */
function timeInterval(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeInterval_1.timeInterval(scheduler)(this);
}
exports.timeInterval = timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog_1 = __webpack_require__(463);
var SubscriptionLoggable = (function () {
    function SubscriptionLoggable() {
        this.subscriptions = [];
    }
    SubscriptionLoggable.prototype.logSubscribedFrame = function () {
        this.subscriptions.push(new SubscriptionLog_1.SubscriptionLog(this.scheduler.now()));
        return this.subscriptions.length - 1;
    };
    SubscriptionLoggable.prototype.logUnsubscribedFrame = function (index) {
        var subscriptionLogs = this.subscriptions;
        var oldSubscriptionLog = subscriptionLogs[index];
        subscriptionLogs[index] = new SubscriptionLog_1.SubscriptionLog(oldSubscriptionLog.subscribedFrame, this.scheduler.now());
    };
    return SubscriptionLoggable;
}());
exports.SubscriptionLoggable = SubscriptionLoggable;
//# sourceMappingURL=SubscriptionLoggable.js.map

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscriptionLog = (function () {
    function SubscriptionLog(subscribedFrame, unsubscribedFrame) {
        if (unsubscribedFrame === void 0) { unsubscribedFrame = Number.POSITIVE_INFINITY; }
        this.subscribedFrame = subscribedFrame;
        this.unsubscribedFrame = unsubscribedFrame;
    }
    return SubscriptionLog;
}());
exports.SubscriptionLog = SubscriptionLog;
//# sourceMappingURL=SubscriptionLog.js.map

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function applyMixins(derivedCtor, baseCtors) {
    for (var i = 0, len = baseCtors.length; i < len; i++) {
        var baseCtor = baseCtors[i];
        var propertyKeys = Object.getOwnPropertyNames(baseCtor.prototype);
        for (var j = 0, len2 = propertyKeys.length; j < len2; j++) {
            var name_1 = propertyKeys[j];
            derivedCtor.prototype[name_1] = baseCtor.prototype[name_1];
        }
    }
}
exports.applyMixins = applyMixins;
//# sourceMappingURL=applyMixins.js.map

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(129);
var AsyncScheduler_1 = __webpack_require__(130);
var VirtualTimeScheduler = (function (_super) {
    __extends(VirtualTimeScheduler, _super);
    function VirtualTimeScheduler(SchedulerAction, maxFrames) {
        var _this = this;
        if (SchedulerAction === void 0) { SchedulerAction = VirtualAction; }
        if (maxFrames === void 0) { maxFrames = Number.POSITIVE_INFINITY; }
        _super.call(this, SchedulerAction, function () { return _this.frame; });
        this.maxFrames = maxFrames;
        this.frame = 0;
        this.index = -1;
    }
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    VirtualTimeScheduler.prototype.flush = function () {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while ((action = actions.shift()) && (this.frame = action.delay) <= maxFrames) {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        }
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    VirtualTimeScheduler.frameTimeFactor = 10;
    return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.VirtualTimeScheduler = VirtualTimeScheduler;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var VirtualAction = (function (_super) {
    __extends(VirtualAction, _super);
    function VirtualAction(scheduler, work, index) {
        if (index === void 0) { index = scheduler.index += 1; }
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.index = index;
        this.active = true;
        this.index = scheduler.index = index;
    }
    VirtualAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
        }
        this.active = false;
        // If an action is rescheduled, we save allocations by mutating its state,
        // pushing it to the end of the scheduler queue, and recycling the action.
        // But since the VirtualTimeScheduler is used for testing, VirtualActions
        // must be immutable so they can be inspected later.
        var action = new VirtualAction(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction.sortActions);
        return true;
    };
    VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return undefined;
    };
    VirtualAction.prototype._execute = function (state, delay) {
        if (this.active === true) {
            return _super.prototype._execute.call(this, state, delay);
        }
    };
    VirtualAction.sortActions = function (a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) {
                return 0;
            }
            else if (a.index > b.index) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (a.delay > b.delay) {
            return 1;
        }
        else {
            return -1;
        }
    };
    return VirtualAction;
}(AsyncAction_1.AsyncAction));
exports.VirtualAction = VirtualAction;
//# sourceMappingURL=VirtualTimeScheduler.js.map

/***/ }),
/* 466 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
var Subject_1 = __webpack_require__(13);
exports.Subject = Subject_1.Subject;
exports.AnonymousSubject = Subject_1.AnonymousSubject;
/* tslint:enable:no-unused-variable */
var Observable_1 = __webpack_require__(9);
exports.Observable = Observable_1.Observable;
// statics
/* tslint:disable:no-use-before-declare */
__webpack_require__(468);
__webpack_require__(471);
__webpack_require__(474);
__webpack_require__(476);
__webpack_require__(477);
__webpack_require__(480);
__webpack_require__(482);
__webpack_require__(483);
__webpack_require__(338);
__webpack_require__(484);
__webpack_require__(487);
__webpack_require__(488);
__webpack_require__(491);
__webpack_require__(494);
__webpack_require__(497);
__webpack_require__(498);
__webpack_require__(499);
__webpack_require__(502);
__webpack_require__(503);
__webpack_require__(505);
__webpack_require__(508);
__webpack_require__(511);
__webpack_require__(514);
__webpack_require__(515);
__webpack_require__(516);
//dom
__webpack_require__(518);
__webpack_require__(520);
//operators
__webpack_require__(524);
__webpack_require__(526);
__webpack_require__(528);
__webpack_require__(530);
__webpack_require__(532);
__webpack_require__(534);
__webpack_require__(536);
__webpack_require__(538);
__webpack_require__(540);
__webpack_require__(542);
__webpack_require__(544);
__webpack_require__(545);
__webpack_require__(547);
__webpack_require__(549);
__webpack_require__(551);
__webpack_require__(553);
__webpack_require__(555);
__webpack_require__(557);
__webpack_require__(559);
__webpack_require__(561);
__webpack_require__(563);
__webpack_require__(565);
__webpack_require__(567);
__webpack_require__(569);
__webpack_require__(571);
__webpack_require__(573);
__webpack_require__(575);
__webpack_require__(577);
__webpack_require__(578);
__webpack_require__(580);
__webpack_require__(582);
__webpack_require__(584);
__webpack_require__(586);
__webpack_require__(588);
__webpack_require__(590);
__webpack_require__(592);
__webpack_require__(594);
__webpack_require__(596);
__webpack_require__(598);
__webpack_require__(600);
__webpack_require__(602);
__webpack_require__(603);
__webpack_require__(605);
__webpack_require__(607);
__webpack_require__(609);
__webpack_require__(610);
__webpack_require__(612);
__webpack_require__(614);
__webpack_require__(616);
__webpack_require__(618);
__webpack_require__(620);
__webpack_require__(622);
__webpack_require__(624);
__webpack_require__(626);
__webpack_require__(628);
__webpack_require__(630);
__webpack_require__(632);
__webpack_require__(634);
__webpack_require__(636);
__webpack_require__(638);
__webpack_require__(640);
__webpack_require__(642);
__webpack_require__(644);
__webpack_require__(646);
__webpack_require__(648);
__webpack_require__(650);
__webpack_require__(652);
__webpack_require__(654);
__webpack_require__(656);
__webpack_require__(658);
__webpack_require__(660);
__webpack_require__(661);
__webpack_require__(663);
__webpack_require__(665);
__webpack_require__(667);
__webpack_require__(669);
__webpack_require__(671);
__webpack_require__(673);
__webpack_require__(675);
__webpack_require__(683);
__webpack_require__(685);
__webpack_require__(687);
__webpack_require__(689);
__webpack_require__(691);
__webpack_require__(141);
__webpack_require__(693);
__webpack_require__(695);
__webpack_require__(697);
__webpack_require__(699);
__webpack_require__(700);
__webpack_require__(702);
__webpack_require__(704);
__webpack_require__(706);
__webpack_require__(708);
__webpack_require__(709);
__webpack_require__(711);
__webpack_require__(713);
__webpack_require__(715);
__webpack_require__(717);
__webpack_require__(719);
__webpack_require__(721);
__webpack_require__(723);
/* tslint:disable:no-unused-variable */
var Subscription_1 = __webpack_require__(16);
exports.Subscription = Subscription_1.Subscription;
var Subscriber_1 = __webpack_require__(3);
exports.Subscriber = Subscriber_1.Subscriber;
var AsyncSubject_1 = __webpack_require__(246);
exports.AsyncSubject = AsyncSubject_1.AsyncSubject;
var ReplaySubject_1 = __webpack_require__(134);
exports.ReplaySubject = ReplaySubject_1.ReplaySubject;
var BehaviorSubject_1 = __webpack_require__(303);
exports.BehaviorSubject = BehaviorSubject_1.BehaviorSubject;
var ConnectableObservable_1 = __webpack_require__(254);
exports.ConnectableObservable = ConnectableObservable_1.ConnectableObservable;
var Notification_1 = __webpack_require__(71);
exports.Notification = Notification_1.Notification;
var EmptyError_1 = __webpack_require__(78);
exports.EmptyError = EmptyError_1.EmptyError;
var ArgumentOutOfRangeError_1 = __webpack_require__(56);
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
var ObjectUnsubscribedError_1 = __webpack_require__(76);
exports.ObjectUnsubscribedError = ObjectUnsubscribedError_1.ObjectUnsubscribedError;
var TimeoutError_1 = __webpack_require__(329);
exports.TimeoutError = TimeoutError_1.TimeoutError;
var UnsubscriptionError_1 = __webpack_require__(250);
exports.UnsubscriptionError = UnsubscriptionError_1.UnsubscriptionError;
var timeInterval_1 = __webpack_require__(461);
exports.TimeInterval = timeInterval_1.TimeInterval;
var timestamp_1 = __webpack_require__(249);
exports.Timestamp = timestamp_1.Timestamp;
var TestScheduler_1 = __webpack_require__(725);
exports.TestScheduler = TestScheduler_1.TestScheduler;
var VirtualTimeScheduler_1 = __webpack_require__(465);
exports.VirtualTimeScheduler = VirtualTimeScheduler_1.VirtualTimeScheduler;
var AjaxObservable_1 = __webpack_require__(458);
exports.AjaxResponse = AjaxObservable_1.AjaxResponse;
exports.AjaxError = AjaxObservable_1.AjaxError;
exports.AjaxTimeoutError = AjaxObservable_1.AjaxTimeoutError;
var pipe_1 = __webpack_require__(138);
exports.pipe = pipe_1.pipe;
var asap_1 = __webpack_require__(459);
var async_1 = __webpack_require__(18);
var queue_1 = __webpack_require__(306);
var animationFrame_1 = __webpack_require__(728);
var rxSubscriber_1 = __webpack_require__(73);
var iterator_1 = __webpack_require__(54);
var observable_1 = __webpack_require__(74);
var _operators = __webpack_require__(259);
exports.operators = _operators;
/* tslint:enable:no-unused-variable */
/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
var Scheduler = {
    asap: asap_1.asap,
    queue: queue_1.queue,
    animationFrame: animationFrame_1.animationFrame,
    async: async_1.async
};
exports.Scheduler = Scheduler;
/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
var Symbol = {
    rxSubscriber: rxSubscriber_1.rxSubscriber,
    observable: observable_1.observable,
    iterator: iterator_1.iterator
};
exports.Symbol = Symbol;
//# sourceMappingURL=Rx.js.map

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bindCallback_1 = __webpack_require__(469);
Observable_1.Observable.bindCallback = bindCallback_1.bindCallback;
//# sourceMappingURL=bindCallback.js.map

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundCallbackObservable_1 = __webpack_require__(470);
exports.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
//# sourceMappingURL=bindCallback.js.map

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var tryCatch_1 = __webpack_require__(19);
var errorObject_1 = __webpack_require__(17);
var AsyncSubject_1 = __webpack_require__(246);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundCallbackObservable = (function (_super) {
    __extends(BoundCallbackObservable, _super);
    function BoundCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a callback API to a function that returns an Observable.
     *
     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
     * it will return a function `g` that when called as `g(x)` will output an
     * Observable.</span>
     *
     * `bindCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done.
     *
     * The output of `bindCallback` is a function that takes the same parameters
     * as `func`, except the last one (the callback). When the output function
     * is called with arguments, it will return an Observable. If `func` function
     * calls its callback with one argument, the Observable will emit that value.
     * If on the other hand callback is called with multiple values, resulting
     * Observable will emit an array with these arguments.
     *
     * It is very important to remember, that input function `func` is not called
     * when output function is, but rather when Observable returned by output
     * function is subscribed. This means if `func` makes AJAX request, that request
     * will be made every time someone subscribes to resulting Observable, but not before.
     *
     * Optionally, selector function can be passed to `bindObservable`. That function
     * takes the same arguments as callback, and returns value
     * that will be emitted by Observable instead of callback parameters themselves.
     * Even though by default multiple arguments passed to callback appear in the stream as array,
     * selector function will be called with arguments directly, just as callback would.
     * This means you can imagine default selector (when one is not provided explicitly)
     * as function that aggregates all its arguments into array, or simply returns first argument,
     * if there is only one.
     *
     * Last optional parameter - {@link Scheduler} - can be used to control when call
     * to `func` happens after someone subscribes to Observable, as well as when results
     * passed to callback will be emitted. By default subscription to Observable calls `func`
     * synchronously, but using `Scheduler.async` as last parameter will defer call to input function,
     * just like wrapping that call in `setTimeout` with time `0` would. So if you use async Scheduler
     * and call `subscribe` on output Observable, all function calls that are currently executing,
     * will end before `func` is invoked.
     *
     * When it comes to emitting results passed to callback, by default they are emitted
     * immediately after `func` invokes callback. In particular, if callback is called synchronously,
     * then subscription to resulting Observable will call `next` function synchronously as well.
     * If you want to defer that call, using `Scheduler.async` will, again, do the job.
     * This means that by using `Scheduler.async` you can, in a sense, ensure that `func`
     * always calls its callback asynchronously, thus avoiding terrifying Zalgo.
     *
     * Note that Observable created by output function will always emit only one value
     * and then complete right after. Even if `func` calls callback multiple times, values from
     * second and following calls will never appear in the stream. If you need to
     * listen for multiple calls, you probably want to use {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * If `func` depends on some context (`this` property), that context will be set
     * to the same context that output function has at call time. In particular, if `func`
     * is called as method of some object, in order to preserve proper behaviour,
     * it is recommended to set context of output function to that object as well,
     * provided `func` is not already bound.
     *
     * If input function calls its callback in "node style" (i.e. first argument to callback is
     * optional error parameter signaling whether call failed or not), {@link bindNodeCallback}
     * provides convenient error handling and probably is a better choice.
     * `bindCallback` will treat such functions without any difference and error parameter
     * (whether passed or not) will always be interpreted as regular callback argument.
     *
     *
     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
     * // Suppose we have jQuery.getJSON('/my/url', callback)
     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
     * var result = getJSONAsObservable('/my/url');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Receive array of arguments passed to callback</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 5
     *   console.log(b); // 'some string'
     *   console.log(c); // {someProperty: 'someValue'}
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction);
     * boundSomeFunction().subscribe(values => {
     *   console.log(values) // [5, 'some string', {someProperty: 'someValue'}]
     * });
     *
     *
     * @example <caption>Use bindCallback with selector function</caption>
     * someFunction((a, b, c) => {
     *   console.log(a); // 'a'
     *   console.log(b); // 'b'
     *   console.log(c); // 'c'
     * });
     *
     * const boundSomeFunction = Rx.Observable.bindCallback(someFunction, (a, b, c) => a + b + c);
     * boundSomeFunction().subscribe(value => {
     *   console.log(value) // 'abc'
     * });
     *
     *
     * @example <caption>Compare behaviour with and without async Scheduler</caption>
     * function iCallMyCallbackSynchronously(cb) {
     *   cb();
     * }
     *
     * const boundSyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously);
     * const boundAsyncFn = Rx.Observable.bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);
     *
     * boundSyncFn().subscribe(() => console.log('I was sync!'));
     * boundAsyncFn().subscribe(() => console.log('I was async!'));
     * console.log('This happened...');
     *
     * // Logs:
     * // I was sync!
     * // This happened...
     * // I was async!
     *
     *
     * @example <caption>Use bindCallback on object method</caption>
     * const boundMethod = Rx.Observable.bindCallback(someObject.methodWithCallback);
     * boundMethod.call(someObject) // make sure methodWithCallback has access to someObject
     * .subscribe(subscriber);
     *
     *
     * @see {@link bindNodeCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the callback would deliver.
     * @static true
     * @name bindCallback
     * @owner Observable
     */
    BoundCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    BoundCallbackObservable.dispatch = function (state) {
        var self = this;
        var source = state.source, subscriber = state.subscriber, context = state.context;
        var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
        var subject = source.subject;
        if (!subject) {
            subject = source.subject = new AsyncSubject_1.AsyncSubject();
            var handler = function handlerFn() {
                var innerArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    innerArgs[_i - 0] = arguments[_i];
                }
                var source = handlerFn.source;
                var selector = source.selector, subject = source.subject;
                if (selector) {
                    var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                    if (result_2 === errorObject_1.errorObject) {
                        self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                    }
                    else {
                        self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                    }
                }
                else {
                    var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                    self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
                }
            };
            // use named function to pass values in without closure
            handler.source = source;
            var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
            if (result === errorObject_1.errorObject) {
                subject.error(errorObject_1.errorObject.e);
            }
        }
        self.add(subject.subscribe(subscriber));
    };
    return BoundCallbackObservable;
}(Observable_1.Observable));
exports.BoundCallbackObservable = BoundCallbackObservable;
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bindNodeCallback_1 = __webpack_require__(472);
Observable_1.Observable.bindNodeCallback = bindNodeCallback_1.bindNodeCallback;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var BoundNodeCallbackObservable_1 = __webpack_require__(473);
exports.bindNodeCallback = BoundNodeCallbackObservable_1.BoundNodeCallbackObservable.create;
//# sourceMappingURL=bindNodeCallback.js.map

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var tryCatch_1 = __webpack_require__(19);
var errorObject_1 = __webpack_require__(17);
var AsyncSubject_1 = __webpack_require__(246);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var BoundNodeCallbackObservable = (function (_super) {
    __extends(BoundNodeCallbackObservable, _super);
    function BoundNodeCallbackObservable(callbackFunc, selector, args, context, scheduler) {
        _super.call(this);
        this.callbackFunc = callbackFunc;
        this.selector = selector;
        this.args = args;
        this.context = context;
        this.scheduler = scheduler;
    }
    /* tslint:enable:max-line-length */
    /**
     * Converts a Node.js-style callback API to a function that returns an
     * Observable.
     *
     * <span class="informal">It's just like {@link bindCallback}, but the
     * callback is expected to be of type `callback(error, result)`.</span>
     *
     * `bindNodeCallback` is not an operator because its input and output are not
     * Observables. The input is a function `func` with some parameters, but the
     * last parameter must be a callback function that `func` calls when it is
     * done. The callback function is expected to follow Node.js conventions,
     * where the first argument to the callback is an error object, signaling
     * whether call was successful. If that object is passed to callback, it means
     * something went wrong.
     *
     * The output of `bindNodeCallback` is a function that takes the same
     * parameters as `func`, except the last one (the callback). When the output
     * function is called with arguments, it will return an Observable.
     * If `func` calls its callback with error parameter present, Observable will
     * error with that value as well. If error parameter is not passed, Observable will emit
     * second parameter. If there are more parameters (third and so on),
     * Observable will emit an array with all arguments, except first error argument.
     *
     * Optionally `bindNodeCallback` accepts selector function, which allows you to
     * make resulting Observable emit value computed by selector, instead of regular
     * callback arguments. It works similarly to {@link bindCallback} selector, but
     * Node.js-style error argument will never be passed to that function.
     *
     * Note that `func` will not be called at the same time output function is,
     * but rather whenever resulting Observable is subscribed. By default call to
     * `func` will happen synchronously after subscription, but that can be changed
     * with proper {@link Scheduler} provided as optional third parameter. Scheduler
     * can also control when values from callback will be emitted by Observable.
     * To find out more, check out documentation for {@link bindCallback}, where
     * Scheduler works exactly the same.
     *
     * As in {@link bindCallback}, context (`this` property) of input function will be set to context
     * of returned function, when it is called.
     *
     * After Observable emits value, it will complete immediately. This means
     * even if `func` calls callback again, values from second and consecutive
     * calls will never appear on the stream. If you need to handle functions
     * that call callbacks multiple times, check out {@link fromEvent} or
     * {@link fromEventPattern} instead.
     *
     * Note that `bindNodeCallback` can be used in non-Node.js environments as well.
     * "Node.js-style" callbacks are just a convention, so if you write for
     * browsers or any other environment and API you use implements that callback style,
     * `bindNodeCallback` can be safely used on that API functions as well.
     *
     * Remember that Error object passed to callback does not have to be an instance
     * of JavaScript built-in `Error` object. In fact, it does not even have to an object.
     * Error parameter of callback function is interpreted as "present", when value
     * of that parameter is truthy. It could be, for example, non-zero number, non-empty
     * string or boolean `true`. In all of these cases resulting Observable would error
     * with that value. This means usually regular style callbacks will fail very often when
     * `bindNodeCallback` is used. If your Observable errors much more often then you
     * would expect, check if callback really is called in Node.js-style and, if not,
     * switch to {@link bindCallback} instead.
     *
     * Note that even if error parameter is technically present in callback, but its value
     * is falsy, it still won't appear in array emitted by Observable or in selector function.
     *
     *
     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
     * import * as fs from 'fs';
     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
     * result.subscribe(x => console.log(x), e => console.error(e));
     *
     *
     * @example <caption>Use on function calling callback with multiple arguments</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // null
     *   console.log(a); // 5
     *   console.log(b); // "some string"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // [5, "some string"]
     * });
     *
     *
     * @example <caption>Use with selector function</caption>
     * someFunction((err, a, b) => {
     *   console.log(err); // undefined
     *   console.log(a); // "abc"
     *   console.log(b); // "DEF"
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction, (a, b) => a + b);
     * boundSomeFunction()
     * .subscribe(value => {
     *   console.log(value); // "abcDEF"
     * });
     *
     *
     * @example <caption>Use on function calling callback in regular style</caption>
     * someFunction(a => {
     *   console.log(a); // 5
     * });
     * var boundSomeFunction = Rx.Observable.bindNodeCallback(someFunction);
     * boundSomeFunction()
     * .subscribe(
     *   value => {}             // never gets called
     *   err => console.log(err) // 5
     *);
     *
     *
     * @see {@link bindCallback}
     * @see {@link from}
     * @see {@link fromPromise}
     *
     * @param {function} func Function with a Node.js-style callback as the last parameter.
     * @param {function} [selector] A function which takes the arguments from the
     * callback and maps those to a value to emit on the output Observable.
     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
     * callbacks.
     * @return {function(...params: *): Observable} A function which returns the
     * Observable that delivers the same values the Node.js callback would
     * deliver.
     * @static true
     * @name bindNodeCallback
     * @owner Observable
     */
    BoundNodeCallbackObservable.create = function (func, selector, scheduler) {
        if (selector === void 0) { selector = undefined; }
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            return new BoundNodeCallbackObservable(func, selector, args, this, scheduler);
        };
    };
    BoundNodeCallbackObservable.prototype._subscribe = function (subscriber) {
        var callbackFunc = this.callbackFunc;
        var args = this.args;
        var scheduler = this.scheduler;
        var subject = this.subject;
        if (!scheduler) {
            if (!subject) {
                subject = this.subject = new AsyncSubject_1.AsyncSubject();
                var handler = function handlerFn() {
                    var innerArgs = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        innerArgs[_i - 0] = arguments[_i];
                    }
                    var source = handlerFn.source;
                    var selector = source.selector, subject = source.subject;
                    var err = innerArgs.shift();
                    if (err) {
                        subject.error(err);
                    }
                    else if (selector) {
                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                        if (result_1 === errorObject_1.errorObject) {
                            subject.error(errorObject_1.errorObject.e);
                        }
                        else {
                            subject.next(result_1);
                            subject.complete();
                        }
                    }
                    else {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    }
                };
                // use named function instance to avoid closure.
                handler.source = this;
                var result = tryCatch_1.tryCatch(callbackFunc).apply(this.context, args.concat(handler));
                if (result === errorObject_1.errorObject) {
                    subject.error(errorObject_1.errorObject.e);
                }
            }
            return subject.subscribe(subscriber);
        }
        else {
            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber, context: this.context });
        }
    };
    return BoundNodeCallbackObservable;
}(Observable_1.Observable));
exports.BoundNodeCallbackObservable = BoundNodeCallbackObservable;
function dispatch(state) {
    var self = this;
    var source = state.source, subscriber = state.subscriber, context = state.context;
    // XXX: cast to `any` to access to the private field in `source`.
    var _a = source, callbackFunc = _a.callbackFunc, args = _a.args, scheduler = _a.scheduler;
    var subject = source.subject;
    if (!subject) {
        subject = source.subject = new AsyncSubject_1.AsyncSubject();
        var handler = function handlerFn() {
            var innerArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                innerArgs[_i - 0] = arguments[_i];
            }
            var source = handlerFn.source;
            var selector = source.selector, subject = source.subject;
            var err = innerArgs.shift();
            if (err) {
                self.add(scheduler.schedule(dispatchError, 0, { err: err, subject: subject }));
            }
            else if (selector) {
                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
                if (result_2 === errorObject_1.errorObject) {
                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
                }
                else {
                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
                }
            }
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
            }
        };
        // use named function to pass values in without closure
        handler.source = source;
        var result = tryCatch_1.tryCatch(callbackFunc).apply(context, args.concat(handler));
        if (result === errorObject_1.errorObject) {
            self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
        }
    }
    self.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}
//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var combineLatest_1 = __webpack_require__(475);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isScheduler_1 = __webpack_require__(36);
var isArray_1 = __webpack_require__(27);
var ArrayObservable_1 = __webpack_require__(37);
var combineLatest_1 = __webpack_require__(133);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var concat_1 = __webpack_require__(143);
Observable_1.Observable.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var defer_1 = __webpack_require__(478);
Observable_1.Observable.defer = defer_1.defer;
//# sourceMappingURL=defer.js.map

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DeferObservable_1 = __webpack_require__(479);
exports.defer = DeferObservable_1.DeferObservable.create;
//# sourceMappingURL=defer.js.map

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var subscribeToResult_1 = __webpack_require__(5);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var DeferObservable = (function (_super) {
    __extends(DeferObservable, _super);
    function DeferObservable(observableFactory) {
        _super.call(this);
        this.observableFactory = observableFactory;
    }
    /**
     * Creates an Observable that, on subscribe, calls an Observable factory to
     * make an Observable for each new Observer.
     *
     * <span class="informal">Creates the Observable lazily, that is, only when it
     * is subscribed.
     * </span>
     *
     * <img src="./img/defer.png" width="100%">
     *
     * `defer` allows you to create the Observable only when the Observer
     * subscribes, and create a fresh Observable for each Observer. It waits until
     * an Observer subscribes to it, and then it generates an Observable,
     * typically with an Observable factory function. It does this afresh for each
     * subscriber, so although each subscriber may think it is subscribing to the
     * same Observable, in fact each subscriber gets its own individual
     * Observable.
     *
     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
     * var clicksOrInterval = Rx.Observable.defer(function () {
     *   if (Math.random() > 0.5) {
     *     return Rx.Observable.fromEvent(document, 'click');
     *   } else {
     *     return Rx.Observable.interval(1000);
     *   }
     * });
     * clicksOrInterval.subscribe(x => console.log(x));
     *
     * // Results in the following behavior:
     * // If the result of Math.random() is greater than 0.5 it will listen
     * // for clicks anywhere on the "document"; when document is clicked it
     * // will log a MouseEvent object to the console. If the result is less
     * // than 0.5 it will emit ascending numbers, one every second(1000ms).
     *
     * @see {@link create}
     *
     * @param {function(): SubscribableOrPromise} observableFactory The Observable
     * factory function to invoke for each Observer that subscribes to the output
     * Observable. May also return a Promise, which will be converted on the fly
     * to an Observable.
     * @return {Observable} An Observable whose Observers' subscriptions trigger
     * an invocation of the given Observable factory function.
     * @static true
     * @name defer
     * @owner Observable
     */
    DeferObservable.create = function (observableFactory) {
        return new DeferObservable(observableFactory);
    };
    DeferObservable.prototype._subscribe = function (subscriber) {
        return new DeferSubscriber(subscriber, this.observableFactory);
    };
    return DeferObservable;
}(Observable_1.Observable));
exports.DeferObservable = DeferObservable;
var DeferSubscriber = (function (_super) {
    __extends(DeferSubscriber, _super);
    function DeferSubscriber(destination, factory) {
        _super.call(this, destination);
        this.factory = factory;
        this.tryDefer();
    }
    DeferSubscriber.prototype.tryDefer = function () {
        try {
            this._callFactory();
        }
        catch (err) {
            this._error(err);
        }
    };
    DeferSubscriber.prototype._callFactory = function () {
        var result = this.factory();
        if (result) {
            this.add(subscribeToResult_1.subscribeToResult(this, result));
        }
    };
    return DeferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=DeferObservable.js.map

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var empty_1 = __webpack_require__(481);
Observable_1.Observable.empty = empty_1.empty;
//# sourceMappingURL=empty.js.map

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var EmptyObservable_1 = __webpack_require__(38);
exports.empty = EmptyObservable_1.EmptyObservable.create;
//# sourceMappingURL=empty.js.map

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var forkJoin_1 = __webpack_require__(255);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var from_1 = __webpack_require__(270);
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var fromEventPattern_1 = __webpack_require__(485);
Observable_1.Observable.fromEventPattern = fromEventPattern_1.fromEventPattern;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FromEventPatternObservable_1 = __webpack_require__(486);
exports.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
//# sourceMappingURL=fromEventPattern.js.map

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = __webpack_require__(72);
var Observable_1 = __webpack_require__(9);
var Subscription_1 = __webpack_require__(16);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var FromEventPatternObservable = (function (_super) {
    __extends(FromEventPatternObservable, _super);
    function FromEventPatternObservable(addHandler, removeHandler, selector) {
        _super.call(this);
        this.addHandler = addHandler;
        this.removeHandler = removeHandler;
        this.selector = selector;
    }
    /**
     * Creates an Observable from an API based on addHandler/removeHandler
     * functions.
     *
     * <span class="informal">Converts any addHandler/removeHandler API to an
     * Observable.</span>
     *
     * <img src="./img/fromEventPattern.png" width="100%">
     *
     * Creates an Observable by using the `addHandler` and `removeHandler`
     * functions to add and remove the handlers, with an optional selector
     * function to project the event arguments to a result. The `addHandler` is
     * called when the output Observable is subscribed, and `removeHandler` is
     * called when the Subscription is unsubscribed.
     *
     * @example <caption>Emits clicks happening on the DOM document</caption>
     * function addClickHandler(handler) {
     *   document.addEventListener('click', handler);
     * }
     *
     * function removeClickHandler(handler) {
     *   document.removeEventListener('click', handler);
     * }
     *
     * var clicks = Rx.Observable.fromEventPattern(
     *   addClickHandler,
     *   removeClickHandler
     * );
     * clicks.subscribe(x => console.log(x));
     *
     * @see {@link from}
     * @see {@link fromEvent}
     *
     * @param {function(handler: Function): any} addHandler A function that takes
     * a `handler` function as argument and attaches it somehow to the actual
     * source of events.
     * @param {function(handler: Function, signal?: any): void} [removeHandler] An optional function that
     * takes a `handler` function as argument and removes it in case it was
     * previously attached using `addHandler`. if addHandler returns signal to teardown when remove,
     * removeHandler function will forward it.
     * @param {function(...args: any): T} [selector] An optional function to
     * post-process results. It takes the arguments from the event handler and
     * should return a single value.
     * @return {Observable<T>}
     * @static true
     * @name fromEventPattern
     * @owner Observable
     */
    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
        return new FromEventPatternObservable(addHandler, removeHandler, selector);
    };
    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
        var _this = this;
        var removeHandler = this.removeHandler;
        var handler = !!this.selector ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            _this._callSelector(subscriber, args);
        } : function (e) { subscriber.next(e); };
        var retValue = this._callAddHandler(handler, subscriber);
        if (!isFunction_1.isFunction(removeHandler)) {
            return;
        }
        subscriber.add(new Subscription_1.Subscription(function () {
            //TODO: determine whether or not to forward to error handler
            removeHandler(handler, retValue);
        }));
    };
    FromEventPatternObservable.prototype._callSelector = function (subscriber, args) {
        try {
            var result = this.selector.apply(this, args);
            subscriber.next(result);
        }
        catch (e) {
            subscriber.error(e);
        }
    };
    FromEventPatternObservable.prototype._callAddHandler = function (handler, errorSubscriber) {
        try {
            return this.addHandler(handler) || null;
        }
        catch (e) {
            errorSubscriber.error(e);
        }
    };
    return FromEventPatternObservable;
}(Observable_1.Observable));
exports.FromEventPatternObservable = FromEventPatternObservable;
//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var fromPromise_1 = __webpack_require__(256);
Observable_1.Observable.fromPromise = fromPromise_1.fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var generate_1 = __webpack_require__(489);
Observable_1.Observable.generate = generate_1.generate;
//# sourceMappingURL=generate.js.map

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GenerateObservable_1 = __webpack_require__(490);
exports.generate = GenerateObservable_1.GenerateObservable.create;
//# sourceMappingURL=generate.js.map

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var isScheduler_1 = __webpack_require__(36);
var selfSelector = function (value) { return value; };
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var GenerateObservable = (function (_super) {
    __extends(GenerateObservable, _super);
    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
        _super.call(this);
        this.initialState = initialState;
        this.condition = condition;
        this.iterate = iterate;
        this.resultSelector = resultSelector;
        this.scheduler = scheduler;
    }
    GenerateObservable.create = function (initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
        if (arguments.length == 1) {
            return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
        }
        if (resultSelectorOrObservable === undefined || isScheduler_1.isScheduler(resultSelectorOrObservable)) {
            return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
        }
        return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
    };
    GenerateObservable.prototype._subscribe = function (subscriber) {
        var state = this.initialState;
        if (this.scheduler) {
            return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
                subscriber: subscriber,
                iterate: this.iterate,
                condition: this.condition,
                resultSelector: this.resultSelector,
                state: state });
        }
        var _a = this, condition = _a.condition, resultSelector = _a.resultSelector, iterate = _a.iterate;
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            subscriber.next(value);
            if (subscriber.closed) {
                break;
            }
            try {
                state = iterate(state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        } while (true);
    };
    GenerateObservable.dispatch = function (state) {
        var subscriber = state.subscriber, condition = state.condition;
        if (subscriber.closed) {
            return;
        }
        if (state.needIterate) {
            try {
                state.state = state.iterate(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
        }
        else {
            state.needIterate = true;
        }
        if (condition) {
            var conditionResult = void 0;
            try {
                conditionResult = condition(state.state);
            }
            catch (err) {
                subscriber.error(err);
                return;
            }
            if (!conditionResult) {
                subscriber.complete();
                return;
            }
            if (subscriber.closed) {
                return;
            }
        }
        var value;
        try {
            value = state.resultSelector(state.state);
        }
        catch (err) {
            subscriber.error(err);
            return;
        }
        if (subscriber.closed) {
            return;
        }
        subscriber.next(value);
        if (subscriber.closed) {
            return;
        }
        return this.schedule(state);
    };
    return GenerateObservable;
}(Observable_1.Observable));
exports.GenerateObservable = GenerateObservable;
//# sourceMappingURL=GenerateObservable.js.map

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var if_1 = __webpack_require__(492);
Observable_1.Observable.if = if_1._if;
//# sourceMappingURL=if.js.map

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IfObservable_1 = __webpack_require__(493);
exports._if = IfObservable_1.IfObservable.create;
//# sourceMappingURL=if.js.map

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var subscribeToResult_1 = __webpack_require__(5);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IfObservable = (function (_super) {
    __extends(IfObservable, _super);
    function IfObservable(condition, thenSource, elseSource) {
        _super.call(this);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
    }
    IfObservable.create = function (condition, thenSource, elseSource) {
        return new IfObservable(condition, thenSource, elseSource);
    };
    IfObservable.prototype._subscribe = function (subscriber) {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        return new IfSubscriber(subscriber, condition, thenSource, elseSource);
    };
    return IfObservable;
}(Observable_1.Observable));
exports.IfObservable = IfObservable;
var IfSubscriber = (function (_super) {
    __extends(IfSubscriber, _super);
    function IfSubscriber(destination, condition, thenSource, elseSource) {
        _super.call(this, destination);
        this.condition = condition;
        this.thenSource = thenSource;
        this.elseSource = elseSource;
        this.tryIf();
    }
    IfSubscriber.prototype.tryIf = function () {
        var _a = this, condition = _a.condition, thenSource = _a.thenSource, elseSource = _a.elseSource;
        var result;
        try {
            result = condition();
            var source = result ? thenSource : elseSource;
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
            else {
                this._complete();
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return IfSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=IfObservable.js.map

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var interval_1 = __webpack_require__(495);
Observable_1.Observable.interval = interval_1.interval;
//# sourceMappingURL=interval.js.map

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IntervalObservable_1 = __webpack_require__(496);
exports.interval = IntervalObservable_1.IntervalObservable.create;
//# sourceMappingURL=interval.js.map

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(131);
var Observable_1 = __webpack_require__(9);
var async_1 = __webpack_require__(18);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var IntervalObservable = (function (_super) {
    __extends(IntervalObservable, _super);
    function IntervalObservable(period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        _super.call(this);
        this.period = period;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(period) || period < 0) {
            this.period = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = async_1.async;
        }
    }
    /**
     * Creates an Observable that emits sequential numbers every specified
     * interval of time, on a specified IScheduler.
     *
     * <span class="informal">Emits incremental numbers periodically in time.
     * </span>
     *
     * <img src="./img/interval.png" width="100%">
     *
     * `interval` returns an Observable that emits an infinite sequence of
     * ascending integers, with a constant interval of time of your choosing
     * between those emissions. The first emission is not sent immediately, but
     * only after the first period has passed. By default, this operator uses the
     * `async` IScheduler to provide a notion of time, but you may pass any
     * IScheduler to it.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
     * var numbers = Rx.Observable.interval(1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link delay}
     *
     * @param {number} [period=0] The interval size in milliseconds (by default)
     * or the time unit determined by the scheduler's clock.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a sequential number each time
     * interval.
     * @static true
     * @name interval
     * @owner Observable
     */
    IntervalObservable.create = function (period, scheduler) {
        if (period === void 0) { period = 0; }
        if (scheduler === void 0) { scheduler = async_1.async; }
        return new IntervalObservable(period, scheduler);
    };
    IntervalObservable.dispatch = function (state) {
        var index = state.index, subscriber = state.subscriber, period = state.period;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        state.index += 1;
        this.schedule(state, period);
    };
    IntervalObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var period = this.period;
        var scheduler = this.scheduler;
        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
            index: index, subscriber: subscriber, period: period
        }));
    };
    return IntervalObservable;
}(Observable_1.Observable));
exports.IntervalObservable = IntervalObservable;
//# sourceMappingURL=IntervalObservable.js.map

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var merge_1 = __webpack_require__(251);
Observable_1.Observable.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var race_1 = __webpack_require__(248);
Observable_1.Observable.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var never_1 = __webpack_require__(500);
Observable_1.Observable.never = never_1.never;
//# sourceMappingURL=never.js.map

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NeverObservable_1 = __webpack_require__(501);
exports.never = NeverObservable_1.NeverObservable.create;
//# sourceMappingURL=never.js.map

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var noop_1 = __webpack_require__(139);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var NeverObservable = (function (_super) {
    __extends(NeverObservable, _super);
    function NeverObservable() {
        _super.call(this);
    }
    /**
     * Creates an Observable that emits no items to the Observer.
     *
     * <span class="informal">An Observable that never emits anything.</span>
     *
     * <img src="./img/never.png" width="100%">
     *
     * This static operator is useful for creating a simple Observable that emits
     * neither values nor errors nor the completion notification. It can be used
     * for testing purposes or for composing with other Observables. Please note
     * that by never emitting a complete notification, this Observable keeps the
     * subscription from being disposed automatically. Subscriptions need to be
     * manually disposed.
     *
     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
     * function info() {
     *   console.log('Will not be called');
     * }
     * var result = Rx.Observable.never().startWith(7);
     * result.subscribe(x => console.log(x), info, info);
     *
     * @see {@link create}
     * @see {@link empty}
     * @see {@link of}
     * @see {@link throw}
     *
     * @return {Observable} A "never" Observable: never emits anything.
     * @static true
     * @name never
     * @owner Observable
     */
    NeverObservable.create = function () {
        return new NeverObservable();
    };
    NeverObservable.prototype._subscribe = function (subscriber) {
        noop_1.noop();
    };
    return NeverObservable;
}(Observable_1.Observable));
exports.NeverObservable = NeverObservable;
//# sourceMappingURL=NeverObservable.js.map

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var of_1 = __webpack_require__(55);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var onErrorResumeNext_1 = __webpack_require__(504);
Observable_1.Observable.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var onErrorResumeNext_1 = __webpack_require__(247);
exports.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNextStatic;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var pairs_1 = __webpack_require__(506);
Observable_1.Observable.pairs = pairs_1.pairs;
//# sourceMappingURL=pairs.js.map

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PairsObservable_1 = __webpack_require__(507);
exports.pairs = PairsObservable_1.PairsObservable.create;
//# sourceMappingURL=pairs.js.map

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
function dispatch(state) {
    var obj = state.obj, keys = state.keys, length = state.length, index = state.index, subscriber = state.subscriber;
    if (index === length) {
        subscriber.complete();
        return;
    }
    var key = keys[index];
    subscriber.next([key, obj[key]]);
    state.index = index + 1;
    this.schedule(state);
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var PairsObservable = (function (_super) {
    __extends(PairsObservable, _super);
    function PairsObservable(obj, scheduler) {
        _super.call(this);
        this.obj = obj;
        this.scheduler = scheduler;
        this.keys = Object.keys(obj);
    }
    /**
     * Convert an object into an observable sequence of [key, value] pairs
     * using an optional IScheduler to enumerate the object.
     *
     * @example <caption>Converts a javascript object to an Observable</caption>
     * var obj = {
     *   foo: 42,
     *   bar: 56,
     *   baz: 78
     * };
     *
     * var source = Rx.Observable.pairs(obj);
     *
     * var subscription = source.subscribe(
     *   function (x) {
     *     console.log('Next: %s', x);
     *   },
     *   function (err) {
     *     console.log('Error: %s', err);
     *   },
     *   function () {
     *     console.log('Completed');
     *   });
     *
     * @param {Object} obj The object to inspect and turn into an
     * Observable sequence.
     * @param {Scheduler} [scheduler] An optional IScheduler to run the
     * enumeration of the input sequence on.
     * @returns {(Observable<Array<string | T>>)} An observable sequence of
     * [key, value] pairs from the object.
     */
    PairsObservable.create = function (obj, scheduler) {
        return new PairsObservable(obj, scheduler);
    };
    PairsObservable.prototype._subscribe = function (subscriber) {
        var _a = this, keys = _a.keys, scheduler = _a.scheduler;
        var length = keys.length;
        if (scheduler) {
            return scheduler.schedule(dispatch, 0, {
                obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
            });
        }
        else {
            for (var idx = 0; idx < length; idx++) {
                var key = keys[idx];
                subscriber.next([key, this.obj[key]]);
            }
            subscriber.complete();
        }
    };
    return PairsObservable;
}(Observable_1.Observable));
exports.PairsObservable = PairsObservable;
//# sourceMappingURL=PairsObservable.js.map

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var range_1 = __webpack_require__(509);
Observable_1.Observable.range = range_1.range;
//# sourceMappingURL=range.js.map

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var RangeObservable_1 = __webpack_require__(510);
exports.range = RangeObservable_1.RangeObservable.create;
//# sourceMappingURL=range.js.map

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var RangeObservable = (function (_super) {
    __extends(RangeObservable, _super);
    function RangeObservable(start, count, scheduler) {
        _super.call(this);
        this.start = start;
        this._count = count;
        this.scheduler = scheduler;
    }
    /**
     * Creates an Observable that emits a sequence of numbers within a specified
     * range.
     *
     * <span class="informal">Emits a sequence of numbers in a range.</span>
     *
     * <img src="./img/range.png" width="100%">
     *
     * `range` operator emits a range of sequential integers, in order, where you
     * select the `start` of the range and its `length`. By default, uses no
     * IScheduler and just delivers the notifications synchronously, but may use
     * an optional IScheduler to regulate those deliveries.
     *
     * @example <caption>Emits the numbers 1 to 10</caption>
     * var numbers = Rx.Observable.range(1, 10);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link timer}
     * @see {@link interval}
     *
     * @param {number} [start=0] The value of the first integer in the sequence.
     * @param {number} [count=0] The number of sequential integers to generate.
     * @param {Scheduler} [scheduler] A {@link IScheduler} to use for scheduling
     * the emissions of the notifications.
     * @return {Observable} An Observable of numbers that emits a finite range of
     * sequential integers.
     * @static true
     * @name range
     * @owner Observable
     */
    RangeObservable.create = function (start, count, scheduler) {
        if (start === void 0) { start = 0; }
        if (count === void 0) { count = 0; }
        return new RangeObservable(start, count, scheduler);
    };
    RangeObservable.dispatch = function (state) {
        var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
        if (index >= count) {
            subscriber.complete();
            return;
        }
        subscriber.next(start);
        if (subscriber.closed) {
            return;
        }
        state.index = index + 1;
        state.start = start + 1;
        this.schedule(state);
    };
    RangeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var start = this.start;
        var count = this._count;
        var scheduler = this.scheduler;
        if (scheduler) {
            return scheduler.schedule(RangeObservable.dispatch, 0, {
                index: index, count: count, start: start, subscriber: subscriber
            });
        }
        else {
            do {
                if (index++ >= count) {
                    subscriber.complete();
                    break;
                }
                subscriber.next(start++);
                if (subscriber.closed) {
                    break;
                }
            } while (true);
        }
    };
    return RangeObservable;
}(Observable_1.Observable));
exports.RangeObservable = RangeObservable;
//# sourceMappingURL=RangeObservable.js.map

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var using_1 = __webpack_require__(512);
Observable_1.Observable.using = using_1.using;
//# sourceMappingURL=using.js.map

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UsingObservable_1 = __webpack_require__(513);
exports.using = UsingObservable_1.UsingObservable.create;
//# sourceMappingURL=using.js.map

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var subscribeToResult_1 = __webpack_require__(5);
var OuterSubscriber_1 = __webpack_require__(6);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var UsingObservable = (function (_super) {
    __extends(UsingObservable, _super);
    function UsingObservable(resourceFactory, observableFactory) {
        _super.call(this);
        this.resourceFactory = resourceFactory;
        this.observableFactory = observableFactory;
    }
    UsingObservable.create = function (resourceFactory, observableFactory) {
        return new UsingObservable(resourceFactory, observableFactory);
    };
    UsingObservable.prototype._subscribe = function (subscriber) {
        var _a = this, resourceFactory = _a.resourceFactory, observableFactory = _a.observableFactory;
        var resource;
        try {
            resource = resourceFactory();
            return new UsingSubscriber(subscriber, resource, observableFactory);
        }
        catch (err) {
            subscriber.error(err);
        }
    };
    return UsingObservable;
}(Observable_1.Observable));
exports.UsingObservable = UsingObservable;
var UsingSubscriber = (function (_super) {
    __extends(UsingSubscriber, _super);
    function UsingSubscriber(destination, resource, observableFactory) {
        _super.call(this, destination);
        this.resource = resource;
        this.observableFactory = observableFactory;
        destination.add(resource);
        this.tryUse();
    }
    UsingSubscriber.prototype.tryUse = function () {
        try {
            var source = this.observableFactory.call(this, this.resource);
            if (source) {
                this.add(subscribeToResult_1.subscribeToResult(this, source));
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    return UsingSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=UsingObservable.js.map

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var throw_1 = __webpack_require__(339);
Observable_1.Observable.throw = throw_1._throw;
//# sourceMappingURL=throw.js.map

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var timer_1 = __webpack_require__(261);
Observable_1.Observable.timer = timer_1.timer;
//# sourceMappingURL=timer.js.map

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var zip_1 = __webpack_require__(517);
Observable_1.Observable.zip = zip_1.zip;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__(136);
exports.zip = zip_1.zipStatic;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var ajax_1 = __webpack_require__(519);
Observable_1.Observable.ajax = ajax_1.ajax;
//# sourceMappingURL=ajax.js.map

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AjaxObservable_1 = __webpack_require__(458);
exports.ajax = AjaxObservable_1.AjaxObservable.create;
//# sourceMappingURL=ajax.js.map

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var webSocket_1 = __webpack_require__(521);
Observable_1.Observable.webSocket = webSocket_1.webSocket;
//# sourceMappingURL=webSocket.js.map

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var WebSocketSubject_1 = __webpack_require__(522);
exports.webSocket = WebSocketSubject_1.WebSocketSubject.create;
//# sourceMappingURL=webSocket.js.map

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(13);
var Subscriber_1 = __webpack_require__(3);
var Observable_1 = __webpack_require__(9);
var Subscription_1 = __webpack_require__(16);
var root_1 = __webpack_require__(23);
var ReplaySubject_1 = __webpack_require__(134);
var tryCatch_1 = __webpack_require__(19);
var errorObject_1 = __webpack_require__(17);
var assign_1 = __webpack_require__(523);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var WebSocketSubject = (function (_super) {
    __extends(WebSocketSubject, _super);
    function WebSocketSubject(urlConfigOrSource, destination) {
        if (urlConfigOrSource instanceof Observable_1.Observable) {
            _super.call(this, destination, urlConfigOrSource);
        }
        else {
            _super.call(this);
            this.WebSocketCtor = root_1.root.WebSocket;
            this._output = new Subject_1.Subject();
            if (typeof urlConfigOrSource === 'string') {
                this.url = urlConfigOrSource;
            }
            else {
                // WARNING: config object could override important members here.
                assign_1.assign(this, urlConfigOrSource);
            }
            if (!this.WebSocketCtor) {
                throw new Error('no WebSocket constructor can be found');
            }
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    }
    WebSocketSubject.prototype.resultSelector = function (e) {
        return JSON.parse(e.data);
    };
    /**
     * Wrapper around the w3c-compatible WebSocket object provided by the browser.
     *
     * @example <caption>Wraps browser WebSocket</caption>
     *
     * let socket$ = Observable.webSocket('ws://localhost:8081');
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @example <caption>Wraps WebSocket from nodejs-websocket (using node.js)</caption>
     *
     * import { w3cwebsocket } from 'websocket';
     *
     * let socket$ = Observable.webSocket({
     *   url: 'ws://localhost:8081',
     *   WebSocketCtor: w3cwebsocket
     * });
     *
     * socket$.subscribe(
     *    (msg) => console.log('message received: ' + msg),
     *    (err) => console.log(err),
     *    () => console.log('complete')
     *  );
     *
     * socket$.next(JSON.stringify({ op: 'hello' }));
     *
     * @param {string | WebSocketSubjectConfig} urlConfigOrSource the source of the websocket as an url or a structure defining the websocket object
     * @return {WebSocketSubject}
     * @static true
     * @name webSocket
     * @owner Observable
     */
    WebSocketSubject.create = function (urlConfigOrSource) {
        return new WebSocketSubject(urlConfigOrSource);
    };
    WebSocketSubject.prototype.lift = function (operator) {
        var sock = new WebSocketSubject(this, this.destination);
        sock.operator = operator;
        return sock;
    };
    WebSocketSubject.prototype._resetState = function () {
        this.socket = null;
        if (!this.source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
        this._output = new Subject_1.Subject();
    };
    // TODO: factor this out to be a proper Operator/Subscriber implementation and eliminate closures
    WebSocketSubject.prototype.multiplex = function (subMsg, unsubMsg, messageFilter) {
        var self = this;
        return new Observable_1.Observable(function (observer) {
            var result = tryCatch_1.tryCatch(subMsg)();
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                self.next(result);
            }
            var subscription = self.subscribe(function (x) {
                var result = tryCatch_1.tryCatch(messageFilter)(x);
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else if (result) {
                    observer.next(x);
                }
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
            return function () {
                var result = tryCatch_1.tryCatch(unsubMsg)();
                if (result === errorObject_1.errorObject) {
                    observer.error(errorObject_1.errorObject.e);
                }
                else {
                    self.next(result);
                }
                subscription.unsubscribe();
            };
        });
    };
    WebSocketSubject.prototype._connectSocket = function () {
        var _this = this;
        var WebSocketCtor = this.WebSocketCtor;
        var observer = this._output;
        var socket = null;
        try {
            socket = this.protocol ?
                new WebSocketCtor(this.url, this.protocol) :
                new WebSocketCtor(this.url);
            this.socket = socket;
            if (this.binaryType) {
                this.socket.binaryType = this.binaryType;
            }
        }
        catch (e) {
            observer.error(e);
            return;
        }
        var subscription = new Subscription_1.Subscription(function () {
            _this.socket = null;
            if (socket && socket.readyState === 1) {
                socket.close();
            }
        });
        socket.onopen = function (e) {
            var openObserver = _this.openObserver;
            if (openObserver) {
                openObserver.next(e);
            }
            var queue = _this.destination;
            _this.destination = Subscriber_1.Subscriber.create(function (x) { return socket.readyState === 1 && socket.send(x); }, function (e) {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                if (e && e.code) {
                    socket.close(e.code, e.reason);
                }
                else {
                    observer.error(new TypeError('WebSocketSubject.error must be called with an object with an error code, ' +
                        'and an optional reason: { code: number, reason: string }'));
                }
                _this._resetState();
            }, function () {
                var closingObserver = _this.closingObserver;
                if (closingObserver) {
                    closingObserver.next(undefined);
                }
                socket.close();
                _this._resetState();
            });
            if (queue && queue instanceof ReplaySubject_1.ReplaySubject) {
                subscription.add(queue.subscribe(_this.destination));
            }
        };
        socket.onerror = function (e) {
            _this._resetState();
            observer.error(e);
        };
        socket.onclose = function (e) {
            _this._resetState();
            var closeObserver = _this.closeObserver;
            if (closeObserver) {
                closeObserver.next(e);
            }
            if (e.wasClean) {
                observer.complete();
            }
            else {
                observer.error(e);
            }
        };
        socket.onmessage = function (e) {
            var result = tryCatch_1.tryCatch(_this.resultSelector)(e);
            if (result === errorObject_1.errorObject) {
                observer.error(errorObject_1.errorObject.e);
            }
            else {
                observer.next(result);
            }
        };
    };
    WebSocketSubject.prototype._subscribe = function (subscriber) {
        var _this = this;
        var source = this.source;
        if (source) {
            return source.subscribe(subscriber);
        }
        if (!this.socket) {
            this._connectSocket();
        }
        var subscription = new Subscription_1.Subscription();
        subscription.add(this._output.subscribe(subscriber));
        subscription.add(function () {
            var socket = _this.socket;
            if (_this._output.observers.length === 0) {
                if (socket && socket.readyState === 1) {
                    socket.close();
                }
                _this._resetState();
            }
        });
        return subscription;
    };
    WebSocketSubject.prototype.unsubscribe = function () {
        var _a = this, source = _a.source, socket = _a.socket;
        if (socket && socket.readyState === 1) {
            socket.close();
            this._resetState();
        }
        _super.prototype.unsubscribe.call(this);
        if (!source) {
            this.destination = new ReplaySubject_1.ReplaySubject();
        }
    };
    return WebSocketSubject;
}(Subject_1.AnonymousSubject));
exports.WebSocketSubject = WebSocketSubject;
//# sourceMappingURL=WebSocketSubject.js.map

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(23);
function assignImpl(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var len = sources.length;
    for (var i = 0; i < len; i++) {
        var source = sources[i];
        for (var k in source) {
            if (source.hasOwnProperty(k)) {
                target[k] = source[k];
            }
        }
    }
    return target;
}
exports.assignImpl = assignImpl;
;
function getAssign(root) {
    return root.Object.assign || assignImpl;
}
exports.getAssign = getAssign;
exports.assign = getAssign(root_1.root);
//# sourceMappingURL=assign.js.map

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var buffer_1 = __webpack_require__(525);
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var buffer_1 = __webpack_require__(262);
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return buffer_1.buffer(closingNotifier)(this);
}
exports.buffer = buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bufferCount_1 = __webpack_require__(527);
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferCount_1 = __webpack_require__(263);
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return bufferCount_1.bufferCount(bufferSize, startBufferEvery)(this);
}
exports.bufferCount = bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bufferTime_1 = __webpack_require__(529);
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var isScheduler_1 = __webpack_require__(36);
var bufferTime_1 = __webpack_require__(264);
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return bufferTime_1.bufferTime(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler)(this);
}
exports.bufferTime = bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bufferToggle_1 = __webpack_require__(531);
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferToggle_1 = __webpack_require__(265);
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return bufferToggle_1.bufferToggle(openings, closingSelector)(this);
}
exports.bufferToggle = bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var bufferWhen_1 = __webpack_require__(533);
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bufferWhen_1 = __webpack_require__(266);
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return bufferWhen_1.bufferWhen(closingSelector)(this);
}
exports.bufferWhen = bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var catch_1 = __webpack_require__(535);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var catchError_1 = __webpack_require__(267);
/**
 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
 *
 * <img src="./img/catch.png" width="100%">
 *
 * @example <caption>Continues with a different Observable when there's an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n == 4) {
 * 	     throw 'four!';
 *     }
 *	   return n;
 *   })
 *   .catch(err => Observable.of('I', 'II', 'III', 'IV', 'V'))
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, I, II, III, IV, V
 *
 * @example <caption>Retries the caught source Observable again in case of error, similar to retry() operator</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 * 	   if (n === 4) {
 * 	     throw 'four!';
 *     }
 * 	   return n;
 *   })
 *   .catch((err, caught) => caught)
 *   .take(30)
 *   .subscribe(x => console.log(x));
 *   // 1, 2, 3, 1, 2, 3, ...
 *
 * @example <caption>Throws a new error when the source Observable throws an error</caption>
 *
 * Observable.of(1, 2, 3, 4, 5)
 *   .map(n => {
 *     if (n == 4) {
 *       throw 'four!';
 *     }
 *     return n;
 *   })
 *   .catch(err => {
 *     throw 'error in source. Details: ' + err;
 *   })
 *   .subscribe(
 *     x => console.log(x),
 *     err => console.log(err)
 *   );
 *   // 1, 2, 3, error in source. Details: four!
 *
 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
 *  is returned by the `selector` will be used to continue the observable chain.
 * @return {Observable} An observable that originates from either the source or the observable returned by the
 *  catch `selector` function.
 * @method catch
 * @name catch
 * @owner Observable
 */
function _catch(selector) {
    return catchError_1.catchError(selector)(this);
}
exports._catch = _catch;
//# sourceMappingURL=catch.js.map

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var combineAll_1 = __webpack_require__(537);
Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineAll_1 = __webpack_require__(268);
/**
 * Converts a higher-order Observable into a first-order Observable by waiting
 * for the outer Observable to complete, then applying {@link combineLatest}.
 *
 * <span class="informal">Flattens an Observable-of-Observables by applying
 * {@link combineLatest} when the Observable-of-Observables completes.</span>
 *
 * <img src="./img/combineAll.png" width="100%">
 *
 * Takes an Observable of Observables, and collects all Observables from it.
 * Once the outer Observable completes, it subscribes to all collected
 * Observables and combines their values using the {@link combineLatest}
 * strategy, such that:
 * - Every time an inner Observable emits, the output Observable emits.
 * - When the returned observable emits, it emits all of the latest values by:
 *   - If a `project` function is provided, it is called with each recent value
 *     from each inner Observable in whatever order they arrived, and the result
 *     of the `project` function is what is emitted by the output Observable.
 *   - If there is no `project` function, an array of all of the most recent
 *     values is emitted by the output Observable.
 *
 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev =>
 *   Rx.Observable.interval(Math.random()*2000).take(3)
 * ).take(2);
 * var result = higherOrder.combineAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 * @see {@link mergeAll}
 *
 * @param {function} [project] An optional function to map the most recent
 * values from each inner Observable into a new result. Takes each of the most
 * recent values from each collected inner Observable as arguments, in order.
 * @return {Observable} An Observable of projected results or arrays of recent
 * values.
 * @method combineAll
 * @owner Observable
 */
function combineAll(project) {
    return combineAll_1.combineAll(project)(this);
}
exports.combineAll = combineAll;
//# sourceMappingURL=combineAll.js.map

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var combineLatest_1 = __webpack_require__(539);
Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var combineLatest_1 = __webpack_require__(133);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return combineLatest_1.combineLatest.apply(void 0, observables)(this);
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var concat_1 = __webpack_require__(541);
Observable_1.Observable.prototype.concat = concat_1.concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concat_1 = __webpack_require__(269);
/* tslint:enable:max-line-length */
/**
 * Creates an output Observable which sequentially emits all values from every
 * given input Observable after the current Observable.
 *
 * <span class="informal">Concatenates multiple Observables together by
 * sequentially emitting their values, one Observable after the other.</span>
 *
 * <img src="./img/concat.png" width="100%">
 *
 * Joins this Observable with multiple other Observables by subscribing to them
 * one at a time, starting with the source, and merging their results into the
 * output Observable. Will wait for each Observable to complete before moving
 * on to the next.
 *
 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
 * var timer = Rx.Observable.interval(1000).take(4);
 * var sequence = Rx.Observable.range(1, 10);
 * var result = timer.concat(sequence);
 * result.subscribe(x => console.log(x));
 *
 * // results in:
 * // 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3 -immediate-> 1 ... 10
 *
 * @example <caption>Concatenate 3 Observables</caption>
 * var timer1 = Rx.Observable.interval(1000).take(10);
 * var timer2 = Rx.Observable.interval(2000).take(6);
 * var timer3 = Rx.Observable.interval(500).take(10);
 * var result = timer1.concat(timer2, timer3);
 * result.subscribe(x => console.log(x));
 *
 * // results in the following:
 * // (Prints to console sequentially)
 * // -1000ms-> 0 -1000ms-> 1 -1000ms-> ... 9
 * // -2000ms-> 0 -2000ms-> 1 -2000ms-> ... 5
 * // -500ms-> 0 -500ms-> 1 -500ms-> ... 9
 *
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 *
 * @param {ObservableInput} other An input Observable to concatenate after the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Scheduler} [scheduler=null] An optional IScheduler to schedule each
 * Observable subscription on.
 * @return {Observable} All values of each passed Observable merged into a
 * single Observable, in order, in serial fashion.
 * @method concat
 * @owner Observable
 */
function concat() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return concat_1.concat.apply(void 0, observables)(this);
}
exports.concat = concat;
//# sourceMappingURL=concat.js.map

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var concatAll_1 = __webpack_require__(543);
Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concatAll_1 = __webpack_require__(144);
/* tslint:enable:max-line-length */
/**
 * Converts a higher-order Observable into a first-order Observable by
 * concatenating the inner Observables in order.
 *
 * <span class="informal">Flattens an Observable-of-Observables by putting one
 * inner Observable after the other.</span>
 *
 * <img src="./img/concatAll.png" width="100%">
 *
 * Joins every Observable emitted by the source (a higher-order Observable), in
 * a serial fashion. It subscribes to each inner Observable only after the
 * previous inner Observable has completed, and merges all of their values into
 * the returned observable.
 *
 * __Warning:__ If the source Observable emits Observables quickly and
 * endlessly, and the inner Observables it emits generally complete slower than
 * the source emits, you can run into memory issues as the incoming Observables
 * collect in an unbounded buffer.
 *
 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
 * to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
 * var firstOrder = higherOrder.concatAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link combineAll}
 * @see {@link concat}
 * @see {@link concatMap}
 * @see {@link concatMapTo}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable emitting values from all the inner
 * Observables concatenated.
 * @method concatAll
 * @owner Observable
 */
function concatAll() {
    return concatAll_1.concatAll()(this);
}
exports.concatAll = concatAll;
//# sourceMappingURL=concatAll.js.map

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var concatMap_1 = __webpack_require__(257);
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var concatMapTo_1 = __webpack_require__(546);
Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var concatMapTo_1 = __webpack_require__(271);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in a serialized fashion on the output Observable.
 *
 * <span class="informal">It's like {@link concatMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/concatMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. Each new `innerObservable`
 * instance emitted on the output Observable is concatenated with the previous
 * `innerObservable` instance.
 *
 * __Warning:__ if source values arrive endlessly and faster than their
 * corresponding inner Observables can complete, it will result in memory issues
 * as inner Observables amass in an unbounded buffer waiting for their turn to
 * be subscribed to.
 *
 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
 * set to `1`.
 *
 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // (results are not concurrent)
 * // For every click on the "document" it will emit values 0 to 3 spaced
 * // on a 1000ms interval
 * // one click = 1000ms-> 0 -1000ms-> 1 -1000ms-> 2 -1000ms-> 3
 *
 * @see {@link concat}
 * @see {@link concatAll}
 * @see {@link concatMap}
 * @see {@link mergeMapTo}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An observable of values merged together by joining the
 * passed observable with itself, one after the other, for each value emitted
 * from the source.
 * @method concatMapTo
 * @owner Observable
 */
function concatMapTo(innerObservable, resultSelector) {
    return concatMapTo_1.concatMapTo(innerObservable, resultSelector)(this);
}
exports.concatMapTo = concatMapTo;
//# sourceMappingURL=concatMapTo.js.map

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var count_1 = __webpack_require__(548);
Observable_1.Observable.prototype.count = count_1.count;
//# sourceMappingURL=count.js.map

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var count_1 = __webpack_require__(272);
/**
 * Counts the number of emissions on the source and emits that number when the
 * source completes.
 *
 * <span class="informal">Tells how many values were emitted, when the source
 * completes.</span>
 *
 * <img src="./img/count.png" width="100%">
 *
 * `count` transforms an Observable that emits values into an Observable that
 * emits a single value that represents the number of values emitted by the
 * source Observable. If the source Observable terminates with an error, `count`
 * will pass this error notification along without emitting a value first. If
 * the source Observable does not terminate at all, `count` will neither emit
 * a value nor terminate. This operator takes an optional `predicate` function
 * as argument, in which case the output emission will represent the number of
 * source values that matched `true` with the `predicate`.
 *
 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var secondsBeforeClick = seconds.takeUntil(clicks);
 * var result = secondsBeforeClick.count();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
 * var numbers = Rx.Observable.range(1, 7);
 * var result = numbers.count(i => i % 2 === 1);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 4
 *
 * @see {@link max}
 * @see {@link min}
 * @see {@link reduce}
 *
 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
 * boolean function to select what values are to be counted. It is provided with
 * arguments of:
 * - `value`: the value from the source Observable.
 * - `index`: the (zero-based) "index" of the value from the source Observable.
 * - `source`: the source Observable instance itself.
 * @return {Observable} An Observable of one number that represents the count as
 * described above.
 * @method count
 * @owner Observable
 */
function count(predicate) {
    return count_1.count(predicate)(this);
}
exports.count = count;
//# sourceMappingURL=count.js.map

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var dematerialize_1 = __webpack_require__(550);
Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dematerialize_1 = __webpack_require__(277);
/**
 * Converts an Observable of {@link Notification} objects into the emissions
 * that they represent.
 *
 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
 *
 * <img src="./img/dematerialize.png" width="100%">
 *
 * `dematerialize` is assumed to operate an Observable that only emits
 * {@link Notification} objects as `next` emissions, and does not emit any
 * `error`. Such Observable is the output of a `materialize` operation. Those
 * notifications are then unwrapped using the metadata they contain, and emitted
 * as `next`, `error`, and `complete` on the output Observable.
 *
 * Use this operator in conjunction with {@link materialize}.
 *
 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
 * var notifA = new Rx.Notification('N', 'A');
 * var notifB = new Rx.Notification('N', 'B');
 * var notifE = new Rx.Notification('E', void 0,
 *   new TypeError('x.toUpperCase is not a function')
 * );
 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
 * var upperCase = materialized.dematerialize();
 * upperCase.subscribe(x => console.log(x), e => console.error(e));
 *
 * // Results in:
 * // A
 * // B
 * // TypeError: x.toUpperCase is not a function
 *
 * @see {@link Notification}
 * @see {@link materialize}
 *
 * @return {Observable} An Observable that emits items and notifications
 * embedded in Notification objects emitted by the source Observable.
 * @method dematerialize
 * @owner Observable
 */
function dematerialize() {
    return dematerialize_1.dematerialize()(this);
}
exports.dematerialize = dematerialize;
//# sourceMappingURL=dematerialize.js.map

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var debounce_1 = __webpack_require__(552);
Observable_1.Observable.prototype.debounce = debounce_1.debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var debounce_1 = __webpack_require__(273);
/**
 * Emits a value from the source Observable only after a particular time span
 * determined by another Observable has passed without another source emission.
 *
 * <span class="informal">It's like {@link debounceTime}, but the time span of
 * emission silence is determined by a second Observable.</span>
 *
 * <img src="./img/debounce.png" width="100%">
 *
 * `debounce` delays values emitted by the source Observable, but drops previous
 * pending delayed emissions if a new value arrives on the source Observable.
 * This operator keeps track of the most recent value from the source
 * Observable, and spawns a duration Observable by calling the
 * `durationSelector` function. The value is emitted only when the duration
 * Observable emits a value or completes, and if no other value was emitted on
 * the source Observable since the duration Observable was spawned. If a new
 * value appears before the duration Observable emits, the previous value will
 * be dropped and will not be emitted on the output Observable.
 *
 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
 * delay-like operator since output emissions do not necessarily occur at the
 * same time as they did on the source Observable.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the timeout
 * duration for each source value, returned as an Observable or a Promise.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified duration Observable returned by
 * `durationSelector`, and may drop some values if they occur too frequently.
 * @method debounce
 * @owner Observable
 */
function debounce(durationSelector) {
    return debounce_1.debounce(durationSelector)(this);
}
exports.debounce = debounce;
//# sourceMappingURL=debounce.js.map

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var debounceTime_1 = __webpack_require__(554);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var debounceTime_1 = __webpack_require__(274);
/**
 * Emits a value from the source Observable only after a particular time span
 * has passed without another source emission.
 *
 * <span class="informal">It's like {@link delay}, but passes only the most
 * recent value from each burst of emissions.</span>
 *
 * <img src="./img/debounceTime.png" width="100%">
 *
 * `debounceTime` delays values emitted by the source Observable, but drops
 * previous pending delayed emissions if a new value arrives on the source
 * Observable. This operator keeps track of the most recent value from the
 * source Observable, and emits that only when `dueTime` enough time has passed
 * without any other value appearing on the source Observable. If a new value
 * appears before `dueTime` silence occurs, the previous value will be dropped
 * and will not be emitted on the output Observable.
 *
 * This is a rate-limiting operator, because it is impossible for more than one
 * value to be emitted in any time window of duration `dueTime`, but it is also
 * a delay-like operator since output emissions do not occur at the same time as
 * they did on the source Observable. Optionally takes a {@link IScheduler} for
 * managing timers.
 *
 * @example <caption>Emit the most recent click after a burst of clicks</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.debounceTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} dueTime The timeout duration in milliseconds (or the time
 * unit determined internally by the optional `scheduler`) for the window of
 * time required to wait for emission silence before emitting the most recent
 * source value.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the timeout for each value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified `dueTime`, and may drop some values if they occur
 * too frequently.
 * @method debounceTime
 * @owner Observable
 */
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return debounceTime_1.debounceTime(dueTime, scheduler)(this);
}
exports.debounceTime = debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var defaultIfEmpty_1 = __webpack_require__(556);
Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defaultIfEmpty_1 = __webpack_require__(145);
/* tslint:enable:max-line-length */
/**
 * Emits a given value if the source Observable completes without emitting any
 * `next` value, otherwise mirrors the source Observable.
 *
 * <span class="informal">If the source Observable turns out to be empty, then
 * this operator will emit a default value.</span>
 *
 * <img src="./img/defaultIfEmpty.png" width="100%">
 *
 * `defaultIfEmpty` emits the values emitted by the source Observable or a
 * specified default value if the source Observable is empty (completes without
 * having emitted any `next` value).
 *
 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link empty}
 * @see {@link last}
 *
 * @param {any} [defaultValue=null] The default value used if the source
 * Observable is empty.
 * @return {Observable} An Observable that emits either the specified
 * `defaultValue` if the source Observable emits no items, or the values emitted
 * by the source Observable.
 * @method defaultIfEmpty
 * @owner Observable
 */
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return defaultIfEmpty_1.defaultIfEmpty(defaultValue)(this);
}
exports.defaultIfEmpty = defaultIfEmpty;
//# sourceMappingURL=defaultIfEmpty.js.map

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var delay_1 = __webpack_require__(558);
Observable_1.Observable.prototype.delay = delay_1.delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var delay_1 = __webpack_require__(275);
/**
 * Delays the emission of items from the source Observable by a given timeout or
 * until a given Date.
 *
 * <span class="informal">Time shifts each item by some specified amount of
 * milliseconds.</span>
 *
 * <img src="./img/delay.png" width="100%">
 *
 * If the delay argument is a Number, this operator time shifts the source
 * Observable by that amount of time expressed in milliseconds. The relative
 * time intervals between the values are preserved.
 *
 * If the delay argument is a Date, this operator time shifts the start of the
 * Observable execution until the given date occurs.
 *
 * @example <caption>Delay each click by one second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @example <caption>Delay all clicks until a future date happens</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var date = new Date('March 15, 2050 12:00:00'); // in the future
 * var delayedClicks = clicks.delay(date); // click emitted only after that date
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounceTime}
 * @see {@link delayWhen}
 *
 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
 * a `Date` until which the emission of the source items is delayed.
 * @param {Scheduler} [scheduler=async] The IScheduler to use for
 * managing the timers that handle the time-shift for each item.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by the specified timeout or Date.
 * @method delay
 * @owner Observable
 */
function delay(delay, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return delay_1.delay(delay, scheduler)(this);
}
exports.delay = delay;
//# sourceMappingURL=delay.js.map

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var delayWhen_1 = __webpack_require__(560);
Observable_1.Observable.prototype.delayWhen = delayWhen_1.delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var delayWhen_1 = __webpack_require__(276);
/**
 * Delays the emission of items from the source Observable by a given time span
 * determined by the emissions of another Observable.
 *
 * <span class="informal">It's like {@link delay}, but the time span of the
 * delay duration is determined by a second Observable.</span>
 *
 * <img src="./img/delayWhen.png" width="100%">
 *
 * `delayWhen` time shifts each emitted value from the source Observable by a
 * time span determined by another Observable. When the source emits a value,
 * the `delayDurationSelector` function is called with the source value as
 * argument, and should return an Observable, called the "duration" Observable.
 * The source value is emitted on the output Observable only when the duration
 * Observable emits a value or completes.
 *
 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
 * is an Observable. When `subscriptionDelay` emits its first value or
 * completes, the source Observable is subscribed to and starts behaving like
 * described in the previous paragraph. If `subscriptionDelay` is not provided,
 * `delayWhen` will subscribe to the source Observable as soon as the output
 * Observable is subscribed.
 *
 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var delayedClicks = clicks.delayWhen(event =>
 *   Rx.Observable.interval(Math.random() * 5000)
 * );
 * delayedClicks.subscribe(x => console.log(x));
 *
 * @see {@link debounce}
 * @see {@link delay}
 *
 * @param {function(value: T): Observable} delayDurationSelector A function that
 * returns an Observable for each value emitted by the source Observable, which
 * is then used to delay the emission of that item on the output Observable
 * until the Observable returned from this function emits a value.
 * @param {Observable} subscriptionDelay An Observable that triggers the
 * subscription to the source Observable once it emits any value.
 * @return {Observable} An Observable that delays the emissions of the source
 * Observable by an amount of time specified by the Observable returned by
 * `delayDurationSelector`.
 * @method delayWhen
 * @owner Observable
 */
function delayWhen(delayDurationSelector, subscriptionDelay) {
    return delayWhen_1.delayWhen(delayDurationSelector, subscriptionDelay)(this);
}
exports.delayWhen = delayWhen;
//# sourceMappingURL=delayWhen.js.map

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var distinct_1 = __webpack_require__(562);
Observable_1.Observable.prototype.distinct = distinct_1.distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinct_1 = __webpack_require__(278);
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
 *
 * If a keySelector function is provided, then it will project each value from the source observable into a new value that it will
 * check for equality with previously projected values. If a keySelector function is not provided, it will use each value from the
 * source observable directly with an equality check against previous values.
 *
 * In JavaScript runtimes that support `Set`, this operator will use a `Set` to improve performance of the distinct value checking.
 *
 * In other runtimes, this operator will use a minimal implementation of `Set` that relies on an `Array` and `indexOf` under the
 * hood, so performance will degrade as more values are checked for distinction. Even in newer browsers, a long-running `distinct`
 * use might result in memory leaks. To help alleviate this in some scenarios, an optional `flushes` parameter is also provided so
 * that the internal `Set` can be "flushed", basically clearing it of values.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
 *   .distinct()
 *   .subscribe(x => console.log(x)); // 1, 2, 3, 4
 *
 * @example <caption>An example using a keySelector function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     .distinct((p: Person) => p.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 *
 * @see {@link distinctUntilChanged}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [keySelector] Optional function to select which value you want to check as distinct.
 * @param {Observable} [flushes] Optional Observable for flushing the internal HashSet of the operator.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinct
 * @owner Observable
 */
function distinct(keySelector, flushes) {
    return distinct_1.distinct(keySelector, flushes)(this);
}
exports.distinct = distinct;
//# sourceMappingURL=distinct.js.map

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var distinctUntilChanged_1 = __webpack_require__(564);
Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinctUntilChanged_1 = __webpack_require__(146);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>A simple example with numbers</caption>
 * Observable.of(1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4)
 *   .distinctUntilChanged()
 *   .subscribe(x => console.log(x)); // 1, 2, 1, 2, 3, 4
 *
 * @example <caption>An example using a compare function</caption>
 * interface Person {
 *    age: number,
 *    name: string
 * }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'})
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilChanged((p: Person, q: Person) => p.name === q.name)
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilKeyChanged}
 *
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values.
 * @method distinctUntilChanged
 * @owner Observable
 */
function distinctUntilChanged(compare, keySelector) {
    return distinctUntilChanged_1.distinctUntilChanged(compare, keySelector)(this);
}
exports.distinctUntilChanged = distinctUntilChanged;
//# sourceMappingURL=distinctUntilChanged.js.map

/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var distinctUntilKeyChanged_1 = __webpack_require__(566);
Observable_1.Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var distinctUntilKeyChanged_1 = __webpack_require__(279);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
 * using a property accessed by using the key provided to check if the two items are distinct.
 *
 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
 *
 * If a comparator function is not provided, an equality check is used by default.
 *
 * @example <caption>An example comparing the name of persons</caption>
 *
 *  interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo'},
 *     { age: 6, name: 'Foo'})
 *     .distinctUntilKeyChanged('name')
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo' }
 *
 * @example <caption>An example comparing the first letters of the name</caption>
 *
 * interface Person {
 *     age: number,
 *     name: string
 *  }
 *
 * Observable.of<Person>(
 *     { age: 4, name: 'Foo1'},
 *     { age: 7, name: 'Bar'},
 *     { age: 5, name: 'Foo2'},
 *     { age: 6, name: 'Foo3'})
 *     .distinctUntilKeyChanged('name', (x: string, y: string) => x.substring(0, 3) === y.substring(0, 3))
 *     .subscribe(x => console.log(x));
 *
 * // displays:
 * // { age: 4, name: 'Foo1' }
 * // { age: 7, name: 'Bar' }
 * // { age: 5, name: 'Foo2' }
 *
 * @see {@link distinct}
 * @see {@link distinctUntilChanged}
 *
 * @param {string} key String key for object property lookup on each item.
 * @param {function} [compare] Optional comparison function called to test if an item is distinct from the previous item in the source.
 * @return {Observable} An Observable that emits items from the source Observable with distinct values based on the key specified.
 * @method distinctUntilKeyChanged
 * @owner Observable
 */
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilKeyChanged_1.distinctUntilKeyChanged(key, compare)(this);
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var do_1 = __webpack_require__(568);
Observable_1.Observable.prototype.do = do_1._do;
Observable_1.Observable.prototype._do = do_1._do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tap_1 = __webpack_require__(325);
/* tslint:enable:max-line-length */
/**
 * Perform a side effect for every emission on the source Observable, but return
 * an Observable that is identical to the source.
 *
 * <span class="informal">Intercepts each emission on the source and runs a
 * function, but returns an output which is identical to the source as long as errors don't occur.</span>
 *
 * <img src="./img/do.png" width="100%">
 *
 * Returns a mirrored Observable of the source Observable, but modified so that
 * the provided Observer is called to perform a side effect for every value,
 * error, and completion emitted by the source. Any errors that are thrown in
 * the aforementioned Observer or handlers are safely sent down the error path
 * of the output Observable.
 *
 * This operator is useful for debugging your Observables for the correct values
 * or performing other side effects.
 *
 * Note: this is different to a `subscribe` on the Observable. If the Observable
 * returned by `do` is not subscribed, the side effects specified by the
 * Observer will never happen. `do` therefore simply spies on existing
 * execution, it does not trigger an execution to happen like `subscribe` does.
 *
 * @example <caption>Map every click to the clientX position of that click, while also logging the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var positions = clicks
 *   .do(ev => console.log(ev))
 *   .map(ev => ev.clientX);
 * positions.subscribe(x => console.log(x));
 *
 * @see {@link map}
 * @see {@link subscribe}
 *
 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
 * callback for `next`.
 * @param {function} [error] Callback for errors in the source.
 * @param {function} [complete] Callback for the completion of the source.
 * @return {Observable} An Observable identical to the source, but runs the
 * specified Observer or callback(s) for each item.
 * @method do
 * @name do
 * @owner Observable
 */
function _do(nextOrObserver, error, complete) {
    return tap_1.tap(nextOrObserver, error, complete)(this);
}
exports._do = _do;
//# sourceMappingURL=do.js.map

/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var exhaust_1 = __webpack_require__(570);
Observable_1.Observable.prototype.exhaust = exhaust_1.exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exhaust_1 = __webpack_require__(282);
/**
 * Converts a higher-order Observable into a first-order Observable by dropping
 * inner Observables while the previous inner Observable has not yet completed.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * next inner Observables while the current inner is still executing.</span>
 *
 * <img src="./img/exhaust.png" width="100%">
 *
 * `exhaust` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable begins emitting the items emitted by that
 * inner Observable. So far, it behaves like {@link mergeAll}. However,
 * `exhaust` ignores every new inner Observable if the previous Observable has
 * not yet completed. Once that one completes, it will accept and flatten the
 * next inner Observable and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(5));
 * var result = higherOrder.exhaust();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link switch}
 * @see {@link mergeAll}
 * @see {@link exhaustMap}
 * @see {@link zipAll}
 *
 * @return {Observable} An Observable that takes a source of Observables and propagates the first observable
 * exclusively until it completes before subscribing to the next.
 * @method exhaust
 * @owner Observable
 */
function exhaust() {
    return exhaust_1.exhaust()(this);
}
exports.exhaust = exhaust;
//# sourceMappingURL=exhaust.js.map

/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var exhaustMap_1 = __webpack_require__(572);
Observable_1.Observable.prototype.exhaustMap = exhaustMap_1.exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var exhaustMap_1 = __webpack_require__(283);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable only if the previous projected Observable has completed.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link exhaust}.</span>
 *
 * <img src="./img/exhaustMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. When it projects a source value to
 * an Observable, the output Observable begins emitting the items emitted by
 * that projected Observable. However, `exhaustMap` ignores every new projected
 * Observable if the previous projected Observable has not yet completed. Once
 * that one completes, it will accept and flatten the next projected Observable
 * and repeat this process.
 *
 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000).take(5));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaust}
 * @see {@link mergeMap}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable containing projected Observables
 * of each item of the source, ignoring projected Observables that start before
 * their preceding Observable has completed.
 * @method exhaustMap
 * @owner Observable
 */
function exhaustMap(project, resultSelector) {
    return exhaustMap_1.exhaustMap(project, resultSelector)(this);
}
exports.exhaustMap = exhaustMap;
//# sourceMappingURL=exhaustMap.js.map

/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var expand_1 = __webpack_require__(574);
Observable_1.Observable.prototype.expand = expand_1.expand;
//# sourceMappingURL=expand.js.map

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var expand_1 = __webpack_require__(284);
/* tslint:enable:max-line-length */
/**
 * Recursively projects each source value to an Observable which is merged in
 * the output Observable.
 *
 * <span class="informal">It's similar to {@link mergeMap}, but applies the
 * projection function to every source value as well as every output value.
 * It's recursive.</span>
 *
 * <img src="./img/expand.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger. *Expand* will re-emit on the output
 * Observable every source value. Then, each output value is given to the
 * `project` function which returns an inner Observable to be merged on the
 * output Observable. Those output values resulting from the projection are also
 * given to the `project` function to produce new output values. This is how
 * *expand* behaves recursively.
 *
 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var powersOfTwo = clicks
 *   .mapTo(1)
 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
 *   .take(10);
 * powersOfTwo.subscribe(x => console.log(x));
 *
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 *
 * @param {function(value: T, index: number) => Observable} project A function
 * that, when applied to an item emitted by the source or the output Observable,
 * returns an Observable.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each projected inner Observable.
 * @return {Observable} An Observable that emits the source values and also
 * result of applying the projection function to each value emitted on the
 * output Observable and and merging the results of the Observables obtained
 * from this transformation.
 * @method expand
 * @owner Observable
 */
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    if (scheduler === void 0) { scheduler = undefined; }
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return expand_1.expand(project, concurrent, scheduler)(this);
}
exports.expand = expand;
//# sourceMappingURL=expand.js.map

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var elementAt_1 = __webpack_require__(576);
Observable_1.Observable.prototype.elementAt = elementAt_1.elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var elementAt_1 = __webpack_require__(280);
/**
 * Emits the single value at the specified `index` in a sequence of emissions
 * from the source Observable.
 *
 * <span class="informal">Emits only the i-th value, then completes.</span>
 *
 * <img src="./img/elementAt.png" width="100%">
 *
 * `elementAt` returns an Observable that emits the item at the specified
 * `index` in the source Observable, or a default value if that `index` is out
 * of range and the `default` argument is provided. If the `default` argument is
 * not given and the `index` is out of range, the output Observable will emit an
 * `ArgumentOutOfRangeError` error.
 *
 * @example <caption>Emit only the third click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.elementAt(2);
 * result.subscribe(x => console.log(x));
 *
 * // Results in:
 * // click 1 = nothing
 * // click 2 = nothing
 * // click 3 = MouseEvent object logged to console
 *
 * @see {@link first}
 * @see {@link last}
 * @see {@link skip}
 * @see {@link single}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
 * Observable has completed before emitting the i-th `next` notification.
 *
 * @param {number} index Is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {T} [defaultValue] The default value returned for missing indices.
 * @return {Observable} An Observable that emits a single item, if it is found.
 * Otherwise, will emit the default value if given. If not, then emits an error.
 * @method elementAt
 * @owner Observable
 */
function elementAt(index, defaultValue) {
    return elementAt_1.elementAt(index, defaultValue)(this);
}
exports.elementAt = elementAt;
//# sourceMappingURL=elementAt.js.map

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var filter_1 = __webpack_require__(258);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var finally_1 = __webpack_require__(579);
Observable_1.Observable.prototype.finally = finally_1._finally;
Observable_1.Observable.prototype._finally = finally_1._finally;
//# sourceMappingURL=finally.js.map

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var finalize_1 = __webpack_require__(285);
/**
 * Returns an Observable that mirrors the source Observable, but will call a specified function when
 * the source terminates on complete or error.
 * @param {function} callback Function to be called when source terminates.
 * @return {Observable} An Observable that mirrors the source, but will call the specified function on termination.
 * @method finally
 * @owner Observable
 */
function _finally(callback) {
    return finalize_1.finalize(callback)(this);
}
exports._finally = _finally;
//# sourceMappingURL=finally.js.map

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var find_1 = __webpack_require__(581);
Observable_1.Observable.prototype.find = find_1.find;
//# sourceMappingURL=find.js.map

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var find_1 = __webpack_require__(147);
/* tslint:enable:max-line-length */
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * <img src="./img/find.png" width="100%">
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
function find(predicate, thisArg) {
    return find_1.find(predicate, thisArg)(this);
}
exports.find = find;
//# sourceMappingURL=find.js.map

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var findIndex_1 = __webpack_require__(583);
Observable_1.Observable.prototype.findIndex = findIndex_1.findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var findIndex_1 = __webpack_require__(286);
/**
 * Emits only the index of the first value emitted by the source Observable that
 * meets some condition.
 *
 * <span class="informal">It's like {@link find}, but emits the index of the
 * found value, not the value itself.</span>
 *
 * <img src="./img/findIndex.png" width="100%">
 *
 * `findIndex` searches for the first item in the source Observable that matches
 * the specified condition embodied by the `predicate`, and returns the
 * (zero-based) index of the first occurrence in the source. Unlike
 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
 * an error if a valid value is not found.
 *
 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link first}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable} An Observable of the index of the first item that
 * matches the condition.
 * @method find
 * @owner Observable
 */
function findIndex(predicate, thisArg) {
    return findIndex_1.findIndex(predicate, thisArg)(this);
}
exports.findIndex = findIndex;
//# sourceMappingURL=findIndex.js.map

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var first_1 = __webpack_require__(585);
Observable_1.Observable.prototype.first = first_1.first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var first_1 = __webpack_require__(287);
/**
 * Emits only the first value (or the first value that meets some condition)
 * emitted by the source Observable.
 *
 * <span class="informal">Emits only the first value. Or emits only the first
 * value that passes some test.</span>
 *
 * <img src="./img/first.png" width="100%">
 *
 * If called with no arguments, `first` emits the first value of the source
 * Observable, then completes. If called with a `predicate` function, `first`
 * emits the first value of the source that matches the specified condition. It
 * may also take a `resultSelector` function to produce the output value from
 * the input value, and a `defaultValue` to emit in case the source completes
 * before it is able to emit a valid value. Throws an error if `defaultValue`
 * was not provided and a matching element is not found.
 *
 * @example <caption>Emit only the first click that happens on the DOM</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first();
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Emits the first click that happens on a DIV</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
 * result.subscribe(x => console.log(x));
 *
 * @see {@link filter}
 * @see {@link find}
 * @see {@link take}
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
 * An optional function called with each item to test for condition matching.
 * @param {function(value: T, index: number): R} [resultSelector] A function to
 * produce the value on the output Observable based on the values
 * and the indices of the source Observable. The arguments passed to this
 * function are:
 * - `value`: the value that was emitted on the source.
 * - `index`: the "index" of the value from the source.
 * @param {R} [defaultValue] The default value emitted in case no valid value
 * was found on the source.
 * @return {Observable<T|R>} An Observable of the first item that matches the
 * condition.
 * @method first
 * @owner Observable
 */
function first(predicate, resultSelector, defaultValue) {
    return first_1.first(predicate, resultSelector, defaultValue)(this);
}
exports.first = first;
//# sourceMappingURL=first.js.map

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var groupBy_1 = __webpack_require__(587);
Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var groupBy_1 = __webpack_require__(288);
exports.GroupedObservable = groupBy_1.GroupedObservable;
/* tslint:enable:max-line-length */
/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * <img src="./img/groupBy.png" width="100%">
 *
 * @example <caption>Group objects by id and return as array</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs3'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *     )
 *     .groupBy(p => p.id)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], []))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'aze1' },
 * //   { id: 1, name: 'erg1' },
 * //   { id: 1, name: 'df1' } ]
 * //
 * // [ { id: 2, name: 'sf2' },
 * //   { id: 2, name: 'dg2' },
 * //   { id: 2, name: 'sfqfb2' },
 * //   { id: 2, name: 'qsgqsfg2' } ]
 * //
 * // [ { id: 3, name: 'qfs3' } ]
 *
 * @example <caption>Pivot data on the id field</caption>
 * Observable.of<Obj>({id: 1, name: 'aze1'},
 *                    {id: 2, name: 'sf2'},
 *                    {id: 2, name: 'dg2'},
 *                    {id: 1, name: 'erg1'},
 *                    {id: 1, name: 'df1'},
 *                    {id: 2, name: 'sfqfb2'},
 *                    {id: 3, name: 'qfs1'},
 *                    {id: 2, name: 'qsgqsfg2'}
 *                   )
 *     .groupBy(p => p.id, p => p.name)
 *     .flatMap( (group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
 *     .map(arr => ({'id': parseInt(arr[0]), 'values': arr.slice(1)}))
 *     .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'aze1', 'erg1', 'df1' ] }
 * // { id: 2, values: [ 'sf2', 'dg2', 'sfqfb2', 'qsgqsfg2' ] }
 * // { id: 3, values: [ 'qfs1' ] }
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return groupBy_1.groupBy(keySelector, elementSelector, durationSelector, subjectSelector)(this);
}
exports.groupBy = groupBy;
//# sourceMappingURL=groupBy.js.map

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var ignoreElements_1 = __webpack_require__(589);
Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ignoreElements_1 = __webpack_require__(289);
/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * <img src="./img/ignoreElements.png" width="100%">
 *
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
function ignoreElements() {
    return ignoreElements_1.ignoreElements()(this);
}
exports.ignoreElements = ignoreElements;
;
//# sourceMappingURL=ignoreElements.js.map

/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var isEmpty_1 = __webpack_require__(591);
Observable_1.Observable.prototype.isEmpty = isEmpty_1.isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isEmpty_1 = __webpack_require__(290);
/**
 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
 *
 * <img src="./img/isEmpty.png" width="100%">
 *
 * @return {Observable} An Observable that emits a Boolean.
 * @method isEmpty
 * @owner Observable
 */
function isEmpty() {
    return isEmpty_1.isEmpty()(this);
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=isEmpty.js.map

/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var audit_1 = __webpack_require__(593);
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map

/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var audit_1 = __webpack_require__(142);
/**
 * Ignores source values for a duration determined by another Observable, then
 * emits the most recent value from the source Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link auditTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/audit.png" width="100%">
 *
 * `audit` is similar to `throttle`, but emits the last value from the silenced
 * time window, instead of the first value. `audit` emits the most recent value
 * from the source Observable on the output Observable as soon as its internal
 * timer becomes disabled, and ignores source values while the timer is enabled.
 * Initially, the timer is disabled. As soon as the first source value arrives,
 * the timer is enabled by calling the `durationSelector` function with the
 * source value, which returns the "duration" Observable. When the duration
 * Observable emits a value or completes, the timer is disabled, then the most
 * recent source value is emitted on the output Observable, and this process
 * repeats for the next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttle}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration, returned as an Observable or a Promise.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method audit
 * @owner Observable
 */
function audit(durationSelector) {
    return audit_1.audit(durationSelector)(this);
}
exports.audit = audit;
//# sourceMappingURL=audit.js.map

/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var auditTime_1 = __webpack_require__(595);
Observable_1.Observable.prototype.auditTime = auditTime_1.auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),
/* 595 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var auditTime_1 = __webpack_require__(260);
/**
 * Ignores source values for `duration` milliseconds, then emits the most recent
 * value from the source Observable, then repeats this process.
 *
 * <span class="informal">When it sees a source values, it ignores that plus
 * the next ones for `duration` milliseconds, and then it emits the most recent
 * value from the source.</span>
 *
 * <img src="./img/auditTime.png" width="100%">
 *
 * `auditTime` is similar to `throttleTime`, but emits the last value from the
 * silenced time window, instead of the first value. `auditTime` emits the most
 * recent value from the source Observable on the output Observable as soon as
 * its internal timer becomes disabled, and ignores source values while the
 * timer is enabled. Initially, the timer is disabled. As soon as the first
 * source value arrives, the timer is enabled. After `duration` milliseconds (or
 * the time unit determined internally by the optional `scheduler`) has passed,
 * the timer is disabled, then the most recent source value is emitted on the
 * output Observable, and this process repeats for the next source value.
 * Optionally takes a {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.auditTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttleTime}
 *
 * @param {number} duration Time to wait before emitting the most recent source
 * value, measured in milliseconds or the time unit determined internally
 * by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the rate-limiting behavior.
 * @return {Observable<T>} An Observable that performs rate-limiting of
 * emissions from the source Observable.
 * @method auditTime
 * @owner Observable
 */
function auditTime(duration, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return auditTime_1.auditTime(duration, scheduler)(this);
}
exports.auditTime = auditTime;
//# sourceMappingURL=auditTime.js.map

/***/ }),
/* 596 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var last_1 = __webpack_require__(597);
Observable_1.Observable.prototype.last = last_1.last;
//# sourceMappingURL=last.js.map

/***/ }),
/* 597 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var last_1 = __webpack_require__(291);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits only the last item emitted by the source Observable.
 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
 * the last item from the source Observable, the resulting Observable will emit the last item
 * from the source Observable that satisfies the predicate.
 *
 * <img src="./img/last.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {function} predicate - The condition any source emitted item has to satisfy.
 * @return {Observable} An Observable that emits only the last item satisfying the given condition
 * from the source, or an NoSuchElementException if no such items are emitted.
 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
 * @method last
 * @owner Observable
 */
function last(predicate, resultSelector, defaultValue) {
    return last_1.last(predicate, resultSelector, defaultValue)(this);
}
exports.last = last;
//# sourceMappingURL=last.js.map

/***/ }),
/* 598 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var let_1 = __webpack_require__(599);
Observable_1.Observable.prototype.let = let_1.letProto;
Observable_1.Observable.prototype.letBind = let_1.letProto;
//# sourceMappingURL=let.js.map

/***/ }),
/* 599 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @param func
 * @return {Observable<R>}
 * @method let
 * @owner Observable
 */
function letProto(func) {
    return func(this);
}
exports.letProto = letProto;
//# sourceMappingURL=let.js.map

/***/ }),
/* 600 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var every_1 = __webpack_require__(601);
Observable_1.Observable.prototype.every = every_1.every;
//# sourceMappingURL=every.js.map

/***/ }),
/* 601 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var every_1 = __webpack_require__(281);
/**
 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
 *
 * @example <caption>A simple example emitting true if all elements are less than 5, false otherwise</caption>
 *  Observable.of(1, 2, 3, 4, 5, 6)
 *     .every(x => x < 5)
 *     .subscribe(x => console.log(x)); // -> false
 *
 * @param {function} predicate A function for determining if an item meets a specified condition.
 * @param {any} [thisArg] Optional object to use for `this` in the callback.
 * @return {Observable} An Observable of booleans that determines if all items of the source Observable meet the condition specified.
 * @method every
 * @owner Observable
 */
function every(predicate, thisArg) {
    return every_1.every(predicate, thisArg)(this);
}
exports.every = every;
//# sourceMappingURL=every.js.map

/***/ }),
/* 602 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var map_1 = __webpack_require__(140);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),
/* 603 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var mapTo_1 = __webpack_require__(604);
Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),
/* 604 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mapTo_1 = __webpack_require__(292);
/**
 * Emits the given constant value on the output Observable every time the source
 * Observable emits a value.
 *
 * <span class="informal">Like {@link map}, but it maps every source value to
 * the same output value every time.</span>
 *
 * <img src="./img/mapTo.png" width="100%">
 *
 * Takes a constant `value` as argument, and emits that whenever the source
 * Observable emits a value. In other words, ignores the actual source value,
 * and simply uses the emission moment to know when to emit the given `value`.
 *
 * @example <caption>Map every click to the string 'Hi'</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var greetings = clicks.mapTo('Hi');
 * greetings.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {any} value The value to map each source value to.
 * @return {Observable} An Observable that emits the given `value` every time
 * the source Observable emits something.
 * @method mapTo
 * @owner Observable
 */
function mapTo(value) {
    return mapTo_1.mapTo(value)(this);
}
exports.mapTo = mapTo;
//# sourceMappingURL=mapTo.js.map

/***/ }),
/* 605 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var materialize_1 = __webpack_require__(606);
Observable_1.Observable.prototype.materialize = materialize_1.materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),
/* 606 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var materialize_1 = __webpack_require__(293);
/**
 * Represents all of the notifications from the source Observable as `next`
 * emissions marked with their original types within {@link Notification}
 * objects.
 *
 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
 * {@link Notification} objects, emitted as `next` on the output Observable.
 * </span>
 *
 * <img src="./img/materialize.png" width="100%">
 *
 * `materialize` returns an Observable that emits a `next` notification for each
 * `next`, `error`, or `complete` emission of the source Observable. When the
 * source Observable emits `complete`, the output Observable will emit `next` as
 * a Notification of type "complete", and then it will emit `complete` as well.
 * When the source Observable emits `error`, the output will emit `next` as a
 * Notification of type "error", and then `complete`.
 *
 * This operator is useful for producing metadata of the source Observable, to
 * be consumed as `next` emissions. Use it in conjunction with
 * {@link dematerialize}.
 *
 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
 * var upperCase = letters.map(x => x.toUpperCase());
 * var materialized = upperCase.materialize();
 * materialized.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
 * // - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
 * // - Notification {kind: "E", value: undefined, error: TypeError:
 * //   x.toUpperCase is not a function at MapSubscriber.letters.map.x
 * //   [as project] (http://1…, hasValue: false}
 *
 * @see {@link Notification}
 * @see {@link dematerialize}
 *
 * @return {Observable<Notification<T>>} An Observable that emits
 * {@link Notification} objects that wrap the original emissions from the source
 * Observable with metadata.
 * @method materialize
 * @owner Observable
 */
function materialize() {
    return materialize_1.materialize()(this);
}
exports.materialize = materialize;
//# sourceMappingURL=materialize.js.map

/***/ }),
/* 607 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var max_1 = __webpack_require__(608);
Observable_1.Observable.prototype.max = max_1.max;
//# sourceMappingURL=max.js.map

/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var max_1 = __webpack_require__(294);
/**
 * The Max operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the largest value.
 *
 * <img src="./img/max.png" width="100%">
 *
 * @example <caption>Get the maximal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .max()
 *   .subscribe(x => console.log(x)); // -> 8
 *
 * @example <caption>Use a comparer function to get the maximal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .max<Person>((a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Beer'
 * }
 *
 * @see {@link min}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable} An Observable that emits item with the largest value.
 * @method max
 * @owner Observable
 */
function max(comparer) {
    return max_1.max(comparer)(this);
}
exports.max = max;
//# sourceMappingURL=max.js.map

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var merge_1 = __webpack_require__(252);
Observable_1.Observable.prototype.merge = merge_1.merge;
//# sourceMappingURL=merge.js.map

/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var mergeAll_1 = __webpack_require__(611);
Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 611 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeAll_1 = __webpack_require__(75);
/**
 * Converts a higher-order Observable into a first-order Observable which
 * concurrently delivers all values that are emitted on the inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables.</span>
 *
 * <img src="./img/mergeAll.png" width="100%">
 *
 * `mergeAll` subscribes to an Observable that emits Observables, also known as
 * a higher-order Observable. Each time it observes one of these emitted inner
 * Observables, it subscribes to that and delivers all the values from the
 * inner Observable on the output Observable. The output Observable only
 * completes once all inner Observables have completed. Any error delivered by
 * a inner Observable will be immediately emitted on the output Observable.
 *
 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var firstOrder = higherOrder.mergeAll();
 * firstOrder.subscribe(x => console.log(x));
 *
 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
 * var firstOrder = higherOrder.mergeAll(2);
 * firstOrder.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link merge}
 * @see {@link mergeMap}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switch}
 * @see {@link zipAll}
 *
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits values coming from all the
 * inner Observables emitted by the source Observable.
 * @method mergeAll
 * @owner Observable
 */
function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeAll_1.mergeAll(concurrent)(this);
}
exports.mergeAll = mergeAll;
//# sourceMappingURL=mergeAll.js.map

/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var mergeMap_1 = __webpack_require__(613);
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMap_1 = __webpack_require__(53);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link mergeAll}.</span>
 *
 * <img src="./img/mergeMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an Observable, and then merging those resulting Observables and
 * emitting the results of this merger.
 *
 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
 * var letters = Rx.Observable.of('a', 'b', 'c');
 * var result = letters.mergeMap(x =>
 *   Rx.Observable.interval(1000).map(i => x+i)
 * );
 * result.subscribe(x => console.log(x));
 *
 * // Results in the following:
 * // a0
 * // b0
 * // c0
 * // a1
 * // b1
 * // c1
 * // continues to list a,b,c with respective ascending integers
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMapTo}
 * @see {@link mergeScan}
 * @see {@link switchMap}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and merging the results of the Observables obtained
 * from this transformation.
 * @method mergeMap
 * @owner Observable
 */
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMap_1.mergeMap(project, resultSelector, concurrent)(this);
}
exports.mergeMap = mergeMap;
//# sourceMappingURL=mergeMap.js.map

/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var mergeMapTo_1 = __webpack_require__(615);
Observable_1.Observable.prototype.flatMapTo = mergeMapTo_1.mergeMapTo;
Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeMapTo_1 = __webpack_require__(295);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is merged multiple
 * times in the output Observable.
 *
 * <span class="informal">It's like {@link mergeMap}, but maps each value always
 * to the same inner Observable.</span>
 *
 * <img src="./img/mergeMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then merges those resulting Observables into one
 * single Observable, which is the output Observable.
 *
 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link merge}
 * @see {@link mergeAll}
 * @see {@link mergeMap}
 * @see {@link mergeScan}
 * @see {@link switchMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
 * Observables being subscribed to concurrently.
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable.
 * @method mergeMapTo
 * @owner Observable
 */
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeMapTo_1.mergeMapTo(innerObservable, resultSelector, concurrent)(this);
}
exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=mergeMapTo.js.map

/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var mergeScan_1 = __webpack_require__(617);
Observable_1.Observable.prototype.mergeScan = mergeScan_1.mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mergeScan_1 = __webpack_require__(296);
/**
 * Applies an accumulator function over the source Observable where the
 * accumulator function itself returns an Observable, then each intermediate
 * Observable returned is merged into the output Observable.
 *
 * <span class="informal">It's like {@link scan}, but the Observables returned
 * by the accumulator are merged into the outer Observable.</span>
 *
 * @example <caption>Count the number of click events</caption>
 * const click$ = Rx.Observable.fromEvent(document, 'click');
 * const one$ = click$.mapTo(1);
 * const seed = 0;
 * const count$ = one$.mergeScan((acc, one) => Rx.Observable.of(acc + one), seed);
 * count$.subscribe(x => console.log(x));
 *
 * // Results:
 * 1
 * 2
 * 3
 * 4
 * // ...and so on for each click
 *
 * @param {function(acc: R, value: T): Observable<R>} accumulator
 * The accumulator function called on each source value.
 * @param seed The initial accumulation value.
 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of
 * input Observables being subscribed to concurrently.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method mergeScan
 * @owner Observable
 */
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
    return mergeScan_1.mergeScan(accumulator, seed, concurrent)(this);
}
exports.mergeScan = mergeScan;
//# sourceMappingURL=mergeScan.js.map

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var min_1 = __webpack_require__(619);
Observable_1.Observable.prototype.min = min_1.min;
//# sourceMappingURL=min.js.map

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var min_1 = __webpack_require__(297);
/**
 * The Min operator operates on an Observable that emits numbers (or items that can be compared with a provided function),
 * and when source Observable completes it emits a single item: the item with the smallest value.
 *
 * <img src="./img/min.png" width="100%">
 *
 * @example <caption>Get the minimal value of a series of numbers</caption>
 * Rx.Observable.of(5, 4, 7, 2, 8)
 *   .min()
 *   .subscribe(x => console.log(x)); // -> 2
 *
 * @example <caption>Use a comparer function to get the minimal item</caption>
 * interface Person {
 *   age: number,
 *   name: string
 * }
 * Observable.of<Person>({age: 7, name: 'Foo'},
 *                       {age: 5, name: 'Bar'},
 *                       {age: 9, name: 'Beer'})
 *           .min<Person>( (a: Person, b: Person) => a.age < b.age ? -1 : 1)
 *           .subscribe((x: Person) => console.log(x.name)); // -> 'Bar'
 * }
 *
 * @see {@link max}
 *
 * @param {Function} [comparer] - Optional comparer function that it will use instead of its default to compare the
 * value of two items.
 * @return {Observable<R>} An Observable that emits item with the smallest value.
 * @method min
 * @owner Observable
 */
function min(comparer) {
    return min_1.min(comparer)(this);
}
exports.min = min;
//# sourceMappingURL=min.js.map

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var multicast_1 = __webpack_require__(621);
Observable_1.Observable.prototype.multicast = multicast_1.multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var multicast_1 = __webpack_require__(42);
/* tslint:enable:max-line-length */
/**
 * Allows source Observable to be subscribed only once with a Subject of choice,
 * while still sharing its values between multiple subscribers.
 *
 * <span class="informal">Subscribe to Observable once, but send its values to multiple subscribers.</span>
 *
 * <img src="./img/multicast.png" width="100%">
 *
 * `multicast` is an operator that works in two modes.
 *
 * In the first mode you provide a single argument to it, which can be either an initialized Subject or a Subject
 * factory. As a result you will get a special kind of an Observable - a {@link ConnectableObservable}. It can be
 * subscribed multiple times, just as regular Observable, but it won't subscribe to the source Observable at that
 * moment. It will do it only if you call its `connect` method. This means you can essentially control by hand, when
 * source Observable will be actually subscribed. What is more, ConnectableObservable will share this one subscription
 * between all of its subscribers. This means that, for example, `ajax` Observable will only send a request once,
 * even though usually it would send a request per every subscriber. Since it sends a request at the moment of
 * subscription, here request would be sent when the `connect` method of a ConnectableObservable is called.
 *
 * The most common pattern of using ConnectableObservable is calling `connect` when the first consumer subscribes,
 * keeping the subscription alive while several consumers come and go and finally unsubscribing from the source
 * Observable, when the last consumer unsubscribes. To not implement that logic over and over again,
 * ConnectableObservable has a special operator, `refCount`. When called, it returns an Observable, which will count
 * the number of consumers subscribed to it and keep ConnectableObservable connected as long as there is at least
 * one consumer. So if you don't actually need to decide yourself when to connect and disconnect a
 * ConnectableObservable, use `refCount`.
 *
 * The second mode is invoked by calling `multicast` with an additional, second argument - selector function.
 * This function accepts an Observable - which basically mirrors the source Observable - and returns Observable
 * as well, which should be the input stream modified by any operators you want. Note that in this
 * mode you cannot provide initialized Subject as a first argument - it has to be a Subject factory. If
 * you provide selector function, `multicast` returns just a regular Observable, instead of ConnectableObservable.
 * Thus, as usual, each subscription to this stream triggers subscription to the source Observable. However,
 * if inside the selector function you subscribe to the input Observable multiple times, actual source stream
 * will be subscribed only once. So if you have a chain of operators that use some Observable many times,
 * but you want to subscribe to that Observable only once, this is the mode you would use.
 *
 * Subject provided as a first parameter of `multicast` is used as a proxy for the single subscription to the
 * source Observable. It means that all values from the source stream go through that Subject. Thus, if a Subject
 * has some special properties, Observable returned by `multicast` will have them as well. If you want to use
 * `multicast` with a Subject that is one of the ones included in RxJS by default - {@link Subject},
 * {@link AsyncSubject}, {@link BehaviorSubject}, or {@link ReplaySubject} - simply use {@link publish},
 * {@link publishLast}, {@link publishBehavior} or {@link publishReplay} respectively. These are actually
 * just wrappers around `multicast`, with a specific Subject hardcoded inside.
 *
 * Also, if you use {@link publish} or {@link publishReplay} with a ConnectableObservables `refCount` operator,
 * you can simply use {@link share} and {@link shareReplay} respectively, which chain these two.
 *
 * @example <caption>Use ConnectableObservable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const connectableSeconds = seconds.multicast(new Subject());
 *
 * connectableSeconds.subscribe(value => console.log('first: ' + value));
 * connectableSeconds.subscribe(value => console.log('second: ' + value));
 *
 * // At this point still nothing happens, even though we subscribed twice.
 *
 * connectableSeconds.connect();
 *
 * // From now on `seconds` are being logged to the console,
 * // twice per every second. `seconds` Observable was however only subscribed once,
 * // so under the hood Observable.interval had only one clock started.
 *
 * @example <caption>Use selector</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds
 *     .multicast(
 *         () => new Subject(),
 *         seconds => seconds.zip(seconds) // Usually zip would subscribe to `seconds` twice.
 *                                         // Because we are inside selector, `seconds` is subscribed once,
 *     )                                   // thus starting only one clock used internally by Observable.interval.
 *     .subscribe();
 *
 * @see {@link publish}
 * @see {@link publishLast}
 * @see {@link publishBehavior}
 * @see {@link publishReplay}
 * @see {@link share}
 * @see {@link shareReplay}
 *
 * @param {Function|Subject} subjectOrSubjectFactory - Factory function to create an intermediate Subject through
 * which the source sequence's elements will be multicast to the selector function input Observable or
 * ConnectableObservable returned by the operator.
 * @param {Function} [selector] - Optional selector function that can use the input stream
 * as many times as needed, without causing multiple subscriptions to the source stream.
 * Subscribers to the input source will receive all notifications of the source from the
 * time of the subscription forward.
 * @return {Observable<T>|ConnectableObservable<T>} An Observable that emits the results of invoking the selector
 * on the source stream or a special {@link ConnectableObservable}, if selector was not provided.
 *
 * @method multicast
 * @owner Observable
 */
function multicast(subjectOrSubjectFactory, selector) {
    return multicast_1.multicast(subjectOrSubjectFactory, selector)(this);
}
exports.multicast = multicast;
//# sourceMappingURL=multicast.js.map

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var observeOn_1 = __webpack_require__(623);
Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var observeOn_1 = __webpack_require__(77);
/**
 *
 * Re-emits all notifications from source Observable with specified scheduler.
 *
 * <span class="informal">Ensure a specific scheduler is used, from outside of an Observable.</span>
 *
 * `observeOn` is an operator that accepts a scheduler as a first parameter, which will be used to reschedule
 * notifications emitted by the source Observable. It might be useful, if you do not have control over
 * internal scheduler of a given Observable, but want to control when its values are emitted nevertheless.
 *
 * Returned Observable emits the same notifications (nexted values, complete and error events) as the source Observable,
 * but rescheduled with provided scheduler. Note that this doesn't mean that source Observables internal
 * scheduler will be replaced in any way. Original scheduler still will be used, but when the source Observable emits
 * notification, it will be immediately scheduled again - this time with scheduler passed to `observeOn`.
 * An anti-pattern would be calling `observeOn` on Observable that emits lots of values synchronously, to split
 * that emissions into asynchronous chunks. For this to happen, scheduler would have to be passed into the source
 * Observable directly (usually into the operator that creates it). `observeOn` simply delays notifications a
 * little bit more, to ensure that they are emitted at expected moments.
 *
 * As a matter of fact, `observeOn` accepts second parameter, which specifies in milliseconds with what delay notifications
 * will be emitted. The main difference between {@link delay} operator and `observeOn` is that `observeOn`
 * will delay all notifications - including error notifications - while `delay` will pass through error
 * from source Observable immediately when it is emitted. In general it is highly recommended to use `delay` operator
 * for any kind of delaying of values in the stream, while using `observeOn` to specify which scheduler should be used
 * for notification emissions in general.
 *
 * @example <caption>Ensure values in subscribe are called just before browser repaint.</caption>
 * const intervals = Rx.Observable.interval(10); // Intervals are scheduled
 *                                               // with async scheduler by default...
 *
 * intervals
 * .observeOn(Rx.Scheduler.animationFrame)       // ...but we will observe on animationFrame
 * .subscribe(val => {                           // scheduler to ensure smooth animation.
 *   someDiv.style.height = val + 'px';
 * });
 *
 * @see {@link delay}
 *
 * @param {IScheduler} scheduler Scheduler that will be used to reschedule notifications from source Observable.
 * @param {number} [delay] Number of milliseconds that states with what delay every notification should be rescheduled.
 * @return {Observable<T>} Observable that emits the same notifications as the source Observable,
 * but with provided scheduler.
 *
 * @method observeOn
 * @owner Observable
 */
function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return observeOn_1.observeOn(scheduler, delay)(this);
}
exports.observeOn = observeOn;
//# sourceMappingURL=observeOn.js.map

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var onErrorResumeNext_1 = __webpack_require__(625);
Observable_1.Observable.prototype.onErrorResumeNext = onErrorResumeNext_1.onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var onErrorResumeNext_1 = __webpack_require__(247);
/* tslint:enable:max-line-length */
/**
 * When any of the provided Observable emits an complete or error notification, it immediately subscribes to the next one
 * that was passed.
 *
 * <span class="informal">Execute series of Observables no matter what, even if it means swallowing errors.</span>
 *
 * <img src="./img/onErrorResumeNext.png" width="100%">
 *
 * `onErrorResumeNext` is an operator that accepts a series of Observables, provided either directly as
 * arguments or as an array. If no single Observable is provided, returned Observable will simply behave the same
 * as the source.
 *
 * `onErrorResumeNext` returns an Observable that starts by subscribing and re-emitting values from the source Observable.
 * When its stream of values ends - no matter if Observable completed or emitted an error - `onErrorResumeNext`
 * will subscribe to the first Observable that was passed as an argument to the method. It will start re-emitting
 * its values as well and - again - when that stream ends, `onErrorResumeNext` will proceed to subscribing yet another
 * Observable in provided series, no matter if previous Observable completed or ended with an error. This will
 * be happening until there is no more Observables left in the series, at which point returned Observable will
 * complete - even if the last subscribed stream ended with an error.
 *
 * `onErrorResumeNext` can be therefore thought of as version of {@link concat} operator, which is more permissive
 * when it comes to the errors emitted by its input Observables. While `concat` subscribes to the next Observable
 * in series only if previous one successfully completed, `onErrorResumeNext` subscribes even if it ended with
 * an error.
 *
 * Note that you do not get any access to errors emitted by the Observables. In particular do not
 * expect these errors to appear in error callback passed to {@link subscribe}. If you want to take
 * specific actions based on what error was emitted by an Observable, you should try out {@link catch} instead.
 *
 *
 * @example <caption>Subscribe to the next Observable after map fails</caption>
 * Rx.Observable.of(1, 2, 3, 0)
 *   .map(x => {
 *       if (x === 0) { throw Error(); }
         return 10 / x;
 *   })
 *   .onErrorResumeNext(Rx.Observable.of(1, 2, 3))
 *   .subscribe(
 *     val => console.log(val),
 *     err => console.log(err),          // Will never be called.
 *     () => console.log('that\'s it!')
 *   );
 *
 * // Logs:
 * // 10
 * // 5
 * // 3.3333333333333335
 * // 1
 * // 2
 * // 3
 * // "that's it!"
 *
 * @see {@link concat}
 * @see {@link catch}
 *
 * @param {...ObservableInput} observables Observables passed either directly or as an array.
 * @return {Observable} An Observable that emits values from source Observable, but - if it errors - subscribes
 * to the next passed Observable and so on, until it completes or runs out of Observables.
 * @method onErrorResumeNext
 * @owner Observable
 */
function onErrorResumeNext() {
    var nextSources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nextSources[_i - 0] = arguments[_i];
    }
    return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, nextSources)(this);
}
exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=onErrorResumeNext.js.map

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var pairwise_1 = __webpack_require__(627);
Observable_1.Observable.prototype.pairwise = pairwise_1.pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pairwise_1 = __webpack_require__(298);
/**
 * Groups pairs of consecutive emissions together and emits them as an array of
 * two values.
 *
 * <span class="informal">Puts the current value and previous value together as
 * an array, and emits that.</span>
 *
 * <img src="./img/pairwise.png" width="100%">
 *
 * The Nth emission from the source Observable will cause the output Observable
 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
 * pair. For this reason, `pairwise` emits on the second and subsequent
 * emissions from the source Observable, but not on the first emission, because
 * there is no previous value in that case.
 *
 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var pairs = clicks.pairwise();
 * var distance = pairs.map(pair => {
 *   var x0 = pair[0].clientX;
 *   var y0 = pair[0].clientY;
 *   var x1 = pair[1].clientX;
 *   var y1 = pair[1].clientY;
 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
 * });
 * distance.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 *
 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
 * consecutive values from the source Observable.
 * @method pairwise
 * @owner Observable
 */
function pairwise() {
    return pairwise_1.pairwise()(this);
}
exports.pairwise = pairwise;
//# sourceMappingURL=pairwise.js.map

/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var partition_1 = __webpack_require__(629);
Observable_1.Observable.prototype.partition = partition_1.partition;
//# sourceMappingURL=partition.js.map

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var partition_1 = __webpack_require__(299);
/**
 * Splits the source Observable into two, one with values that satisfy a
 * predicate, and another with values that don't satisfy the predicate.
 *
 * <span class="informal">It's like {@link filter}, but returns two Observables:
 * one like the output of {@link filter}, and the other with values that did not
 * pass the condition.</span>
 *
 * <img src="./img/partition.png" width="100%">
 *
 * `partition` outputs an array with two Observables that partition the values
 * from the source Observable through the given `predicate` function. The first
 * Observable in that array emits source values for which the predicate argument
 * returns true. The second Observable emits source values for which the
 * predicate returns false. The first behaves like {@link filter} and the second
 * behaves like {@link filter} with the predicate negated.
 *
 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
 * var clicksOnDivs = parts[0];
 * var clicksElsewhere = parts[1];
 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
 *
 * @see {@link filter}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates each value emitted by the source Observable. If it returns `true`,
 * the value is emitted on the first Observable in the returned array, if
 * `false` the value is emitted on the second Observable in the array. The
 * `index` parameter is the number `i` for the i-th source emission that has
 * happened since the subscription, starting from the number `0`.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
 * with values that passed the predicate, and another with values that did not
 * pass the predicate.
 * @method partition
 * @owner Observable
 */
function partition(predicate, thisArg) {
    return partition_1.partition(predicate, thisArg)(this);
}
exports.partition = partition;
//# sourceMappingURL=partition.js.map

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var pluck_1 = __webpack_require__(631);
Observable_1.Observable.prototype.pluck = pluck_1.pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pluck_1 = __webpack_require__(300);
/**
 * Maps each source value (an object) to its specified nested property.
 *
 * <span class="informal">Like {@link map}, but meant only for picking one of
 * the nested properties of every emitted object.</span>
 *
 * <img src="./img/pluck.png" width="100%">
 *
 * Given a list of strings describing a path to an object property, retrieves
 * the value of a specified nested property from all values in the source
 * Observable. If a property can't be resolved, it will return `undefined` for
 * that value.
 *
 * @example <caption>Map every click to the tagName of the clicked target element</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var tagNames = clicks.pluck('target', 'tagName');
 * tagNames.subscribe(x => console.log(x));
 *
 * @see {@link map}
 *
 * @param {...string} properties The nested properties to pluck from each source
 * value (an object).
 * @return {Observable} A new Observable of property values from the source values.
 * @method pluck
 * @owner Observable
 */
function pluck() {
    var properties = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i - 0] = arguments[_i];
    }
    return pluck_1.pluck.apply(void 0, properties)(this);
}
exports.pluck = pluck;
//# sourceMappingURL=pluck.js.map

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var publish_1 = __webpack_require__(633);
Observable_1.Observable.prototype.publish = publish_1.publish;
//# sourceMappingURL=publish.js.map

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publish_1 = __webpack_require__(301);
/* tslint:enable:max-line-length */
/**
 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
 * before it begins emitting items to those Observers that have subscribed to it.
 *
 * <img src="./img/publish.png" width="100%">
 *
 * @param {Function} [selector] - Optional selector function which can use the multicasted source sequence as many times
 * as needed, without causing multiple subscriptions to the source sequence.
 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
 * @return A ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
 * @method publish
 * @owner Observable
 */
function publish(selector) {
    return publish_1.publish(selector)(this);
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var publishBehavior_1 = __webpack_require__(635);
Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishBehavior_1 = __webpack_require__(302);
/**
 * @param value
 * @return {ConnectableObservable<T>}
 * @method publishBehavior
 * @owner Observable
 */
function publishBehavior(value) {
    return publishBehavior_1.publishBehavior(value)(this);
}
exports.publishBehavior = publishBehavior;
//# sourceMappingURL=publishBehavior.js.map

/***/ }),
/* 636 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var publishReplay_1 = __webpack_require__(637);
Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),
/* 637 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishReplay_1 = __webpack_require__(305);
/* tslint:enable:max-line-length */
/**
 * @param bufferSize
 * @param windowTime
 * @param selectorOrScheduler
 * @param scheduler
 * @return {Observable<T> | ConnectableObservable<T>}
 * @method publishReplay
 * @owner Observable
 */
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    return publishReplay_1.publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler)(this);
}
exports.publishReplay = publishReplay;
//# sourceMappingURL=publishReplay.js.map

/***/ }),
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var publishLast_1 = __webpack_require__(639);
Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var publishLast_1 = __webpack_require__(304);
/**
 * @return {ConnectableObservable<T>}
 * @method publishLast
 * @owner Observable
 */
function publishLast() {
    //TODO(benlesh): correct type-flow through here.
    return publishLast_1.publishLast()(this);
}
exports.publishLast = publishLast;
//# sourceMappingURL=publishLast.js.map

/***/ }),
/* 640 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var race_1 = __webpack_require__(641);
Observable_1.Observable.prototype.race = race_1.race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 641 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var race_1 = __webpack_require__(307);
// NOTE: to support backwards compatability with 5.4.* and lower
var race_2 = __webpack_require__(248);
exports.raceStatic = race_2.race;
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that mirrors the first source Observable to emit an item
 * from the combination of this Observable and supplied Observables.
 * @param {...Observables} ...observables Sources used to race for which Observable emits first.
 * @return {Observable} An Observable that mirrors the output of the first Observable to emit an item.
 * @method race
 * @owner Observable
 */
function race() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return race_1.race.apply(void 0, observables)(this);
}
exports.race = race;
//# sourceMappingURL=race.js.map

/***/ }),
/* 642 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var reduce_1 = __webpack_require__(643);
Observable_1.Observable.prototype.reduce = reduce_1.reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),
/* 643 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var reduce_1 = __webpack_require__(57);
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns the
 * accumulated result when the source completes, given an optional seed value.
 *
 * <span class="informal">Combines together all values emitted on the source,
 * using an accumulator function that knows how to join a new source value into
 * the accumulation from the past.</span>
 *
 * <img src="./img/reduce.png" width="100%">
 *
 * Like
 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
 * `reduce` applies an `accumulator` function against an accumulation and each
 * value of the source Observable (from the past) to reduce it to a single
 * value, emitted on the output Observable. Note that `reduce` will only emit
 * one value, only when the source Observable completes. It is equivalent to
 * applying operator {@link scan} followed by operator {@link last}.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
 *   .takeUntil(Rx.Observable.interval(5000));
 * var ones = clicksInFiveSeconds.mapTo(1);
 * var seed = 0;
 * var count = ones.reduce((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link count}
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link scan}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator The accumulator function
 * called on each source value.
 * @param {R} [seed] The initial accumulation value.
 * @return {Observable<R>} An Observable that emits a single value that is the
 * result of accumulating the values emitted by the source Observable.
 * @method reduce
 * @owner Observable
 */
function reduce(accumulator, seed) {
    // providing a seed of `undefined` *should* be valid and trigger
    // hasSeed! so don't use `seed !== undefined` checks!
    // For this reason, we have to check it here at the original call site
    // otherwise inside Operator/Subscriber we won't know if `undefined`
    // means they didn't provide anything or if they literally provided `undefined`
    if (arguments.length >= 2) {
        return reduce_1.reduce(accumulator, seed)(this);
    }
    return reduce_1.reduce(accumulator)(this);
}
exports.reduce = reduce;
//# sourceMappingURL=reduce.js.map

/***/ }),
/* 644 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var repeat_1 = __webpack_require__(645);
Observable_1.Observable.prototype.repeat = repeat_1.repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),
/* 645 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var repeat_1 = __webpack_require__(308);
/**
 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times.
 *
 * <img src="./img/repeat.png" width="100%">
 *
 * @param {number} [count] The number of times the source Observable items are repeated, a count of 0 will yield
 * an empty Observable.
 * @return {Observable} An Observable that repeats the stream of items emitted by the source Observable at most
 * count times.
 * @method repeat
 * @owner Observable
 */
function repeat(count) {
    if (count === void 0) { count = -1; }
    return repeat_1.repeat(count)(this);
}
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map

/***/ }),
/* 646 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var repeatWhen_1 = __webpack_require__(647);
Observable_1.Observable.prototype.repeatWhen = repeatWhen_1.repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),
/* 647 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var repeatWhen_1 = __webpack_require__(309);
/**
 * Returns an Observable that mirrors the source Observable with the exception of a `complete`. If the source
 * Observable calls `complete`, this method will emit to the Observable returned from `notifier`. If that Observable
 * calls `complete` or `error`, then this method will call `complete` or `error` on the child subscription. Otherwise
 * this method will resubscribe to the source Observable.
 *
 * <img src="./img/repeatWhen.png" width="100%">
 *
 * @param {function(notifications: Observable): Observable} notifier - Receives an Observable of notifications with
 * which a user can `complete` or `error`, aborting the repetition.
 * @return {Observable} The source Observable modified with repeat logic.
 * @method repeatWhen
 * @owner Observable
 */
function repeatWhen(notifier) {
    return repeatWhen_1.repeatWhen(notifier)(this);
}
exports.repeatWhen = repeatWhen;
//# sourceMappingURL=repeatWhen.js.map

/***/ }),
/* 648 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var retry_1 = __webpack_require__(649);
Observable_1.Observable.prototype.retry = retry_1.retry;
//# sourceMappingURL=retry.js.map

/***/ }),
/* 649 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retry_1 = __webpack_require__(310);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will resubscribe to the source Observable for a maximum of `count` resubscriptions (given
 * as a number parameter) rather than propagating the `error` call.
 *
 * <img src="./img/retry.png" width="100%">
 *
 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
 * @param {number} count - Number of retry attempts before failing.
 * @return {Observable} The source Observable modified with the retry logic.
 * @method retry
 * @owner Observable
 */
function retry(count) {
    if (count === void 0) { count = -1; }
    return retry_1.retry(count)(this);
}
exports.retry = retry;
//# sourceMappingURL=retry.js.map

/***/ }),
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var retryWhen_1 = __webpack_require__(651);
Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var retryWhen_1 = __webpack_require__(311);
/**
 * Returns an Observable that mirrors the source Observable with the exception of an `error`. If the source Observable
 * calls `error`, this method will emit the Throwable that caused the error to the Observable returned from `notifier`.
 * If that Observable calls `complete` or `error` then this method will call `complete` or `error` on the child
 * subscription. Otherwise this method will resubscribe to the source Observable.
 *
 * <img src="./img/retryWhen.png" width="100%">
 *
 * @param {function(errors: Observable): Observable} notifier - Receives an Observable of notifications with which a
 * user can `complete` or `error`, aborting the retry.
 * @return {Observable} The source Observable modified with retry logic.
 * @method retryWhen
 * @owner Observable
 */
function retryWhen(notifier) {
    return retryWhen_1.retryWhen(notifier)(this);
}
exports.retryWhen = retryWhen;
//# sourceMappingURL=retryWhen.js.map

/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var sample_1 = __webpack_require__(653);
Observable_1.Observable.prototype.sample = sample_1.sample;
//# sourceMappingURL=sample.js.map

/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sample_1 = __webpack_require__(312);
/**
 * Emits the most recently emitted value from the source Observable whenever
 * another Observable, the `notifier`, emits.
 *
 * <span class="informal">It's like {@link sampleTime}, but samples whenever
 * the `notifier` Observable emits something.</span>
 *
 * <img src="./img/sample.png" width="100%">
 *
 * Whenever the `notifier` Observable emits a value or completes, `sample`
 * looks at the source Observable and emits whichever value it has most recently
 * emitted since the previous sampling, unless the source has not emitted
 * anything since the previous sampling. The `notifier` is subscribed to as soon
 * as the output Observable is subscribed.
 *
 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
 * var seconds = Rx.Observable.interval(1000);
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = seconds.sample(clicks);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {Observable<any>} notifier The Observable to use for sampling the
 * source Observable.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable whenever the notifier Observable
 * emits value or completes.
 * @method sample
 * @owner Observable
 */
function sample(notifier) {
    return sample_1.sample(notifier)(this);
}
exports.sample = sample;
//# sourceMappingURL=sample.js.map

/***/ }),
/* 654 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var sampleTime_1 = __webpack_require__(655);
Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var sampleTime_1 = __webpack_require__(313);
/**
 * Emits the most recently emitted value from the source Observable within
 * periodic time intervals.
 *
 * <span class="informal">Samples the source Observable at periodic time
 * intervals, emitting what it samples.</span>
 *
 * <img src="./img/sampleTime.png" width="100%">
 *
 * `sampleTime` periodically looks at the source Observable and emits whichever
 * value it has most recently emitted since the previous sampling, unless the
 * source has not emitted anything since the previous sampling. The sampling
 * happens periodically in time every `period` milliseconds (or the time unit
 * defined by the optional `scheduler` argument). The sampling starts as soon as
 * the output Observable is subscribed.
 *
 * @example <caption>Every second, emit the most recent click at most once</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.sampleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {number} period The sampling period expressed in milliseconds or the
 * time unit determined internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the sampling.
 * @return {Observable<T>} An Observable that emits the results of sampling the
 * values emitted by the source Observable at the specified time interval.
 * @method sampleTime
 * @owner Observable
 */
function sampleTime(period, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return sampleTime_1.sampleTime(period, scheduler)(this);
}
exports.sampleTime = sampleTime;
//# sourceMappingURL=sampleTime.js.map

/***/ }),
/* 656 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var scan_1 = __webpack_require__(657);
Observable_1.Observable.prototype.scan = scan_1.scan;
//# sourceMappingURL=scan.js.map

/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var scan_1 = __webpack_require__(148);
/* tslint:enable:max-line-length */
/**
 * Applies an accumulator function over the source Observable, and returns each
 * intermediate result, with an optional seed value.
 *
 * <span class="informal">It's like {@link reduce}, but emits the current
 * accumulation whenever the source emits a value.</span>
 *
 * <img src="./img/scan.png" width="100%">
 *
 * Combines together all values emitted on the source, using an accumulator
 * function that knows how to join a new source value into the accumulation from
 * the past. Is similar to {@link reduce}, but emits the intermediate
 * accumulations.
 *
 * Returns an Observable that applies a specified `accumulator` function to each
 * item emitted by the source Observable. If a `seed` value is specified, then
 * that value will be used as the initial value for the accumulator. If no seed
 * value is specified, the first item of the source is used as the seed.
 *
 * @example <caption>Count the number of click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var ones = clicks.mapTo(1);
 * var seed = 0;
 * var count = ones.scan((acc, one) => acc + one, seed);
 * count.subscribe(x => console.log(x));
 *
 * @see {@link expand}
 * @see {@link mergeScan}
 * @see {@link reduce}
 *
 * @param {function(acc: R, value: T, index: number): R} accumulator
 * The accumulator function called on each source value.
 * @param {T|R} [seed] The initial accumulation value.
 * @return {Observable<R>} An observable of the accumulated values.
 * @method scan
 * @owner Observable
 */
function scan(accumulator, seed) {
    if (arguments.length >= 2) {
        return scan_1.scan(accumulator, seed)(this);
    }
    return scan_1.scan(accumulator)(this);
}
exports.scan = scan;
//# sourceMappingURL=scan.js.map

/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var sequenceEqual_1 = __webpack_require__(659);
Observable_1.Observable.prototype.sequenceEqual = sequenceEqual_1.sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sequenceEqual_1 = __webpack_require__(314);
/**
 * Compares all values of two observables in sequence using an optional comparor function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * <img src="./img/sequenceEqual.png" width="100%">
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * @example <caption>figure out if the Konami code matches</caption>
 * var code = Rx.Observable.from([
 *  "ArrowUp",
 *  "ArrowUp",
 *  "ArrowDown",
 *  "ArrowDown",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "ArrowLeft",
 *  "ArrowRight",
 *  "KeyB",
 *  "KeyA",
 *  "Enter" // no start key, clearly.
 * ]);
 *
 * var keys = Rx.Observable.fromEvent(document, 'keyup')
 *  .map(e => e.code);
 * var matches = keys.bufferCount(11, 1)
 *  .mergeMap(
 *    last11 =>
 *      Rx.Observable.from(last11)
 *        .sequenceEqual(code)
 *   );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparor] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
function sequenceEqual(compareTo, comparor) {
    return sequenceEqual_1.sequenceEqual(compareTo, comparor)(this);
}
exports.sequenceEqual = sequenceEqual;
//# sourceMappingURL=sequenceEqual.js.map

/***/ }),
/* 660 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var share_1 = __webpack_require__(253);
Observable_1.Observable.prototype.share = share_1.share;
//# sourceMappingURL=share.js.map

/***/ }),
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var shareReplay_1 = __webpack_require__(662);
Observable_1.Observable.prototype.shareReplay = shareReplay_1.shareReplay;
//# sourceMappingURL=shareReplay.js.map

/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shareReplay_1 = __webpack_require__(315);
/**
 * @method shareReplay
 * @owner Observable
 */
function shareReplay(bufferSize, windowTime, scheduler) {
    return shareReplay_1.shareReplay(bufferSize, windowTime, scheduler)(this);
}
exports.shareReplay = shareReplay;
;
//# sourceMappingURL=shareReplay.js.map

/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var single_1 = __webpack_require__(664);
Observable_1.Observable.prototype.single = single_1.single;
//# sourceMappingURL=single.js.map

/***/ }),
/* 664 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var single_1 = __webpack_require__(316);
/**
 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
 *
 * <img src="./img/single.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {Function} predicate - A predicate function to evaluate items emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits the single item emitted by the source Observable that matches
 * the predicate.
 .
 * @method single
 * @owner Observable
 */
function single(predicate) {
    return single_1.single(predicate)(this);
}
exports.single = single;
//# sourceMappingURL=single.js.map

/***/ }),
/* 665 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var skip_1 = __webpack_require__(666);
Observable_1.Observable.prototype.skip = skip_1.skip;
//# sourceMappingURL=skip.js.map

/***/ }),
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skip_1 = __webpack_require__(317);
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * <img src="./img/skip.png" width="100%">
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 *
 * @method skip
 * @owner Observable
 */
function skip(count) {
    return skip_1.skip(count)(this);
}
exports.skip = skip;
//# sourceMappingURL=skip.js.map

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var skipLast_1 = __webpack_require__(668);
Observable_1.Observable.prototype.skipLast = skipLast_1.skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skipLast_1 = __webpack_require__(318);
/**
 * Skip the last `count` values emitted by the source Observable.
 *
 * <img src="./img/skipLast.png" width="100%">
 *
 * `skipLast` returns an Observable that accumulates a queue with a length
 * enough to store the first `count` values. As more values are received,
 * values are taken from the front of the queue and produced on the result
 * sequence. This causes values to be delayed.
 *
 * @example <caption>Skip the last 2 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 5);
 * var skipLastTwo = many.skipLast(2);
 * skipLastTwo.subscribe(x => console.log(x));
 *
 * // Results in:
 * // 1 2 3
 *
 * @see {@link skip}
 * @see {@link skipUntil}
 * @see {@link skipWhile}
 * @see {@link take}
 *
 * @throws {ArgumentOutOfRangeError} When using `skipLast(i)`, it throws
 * ArgumentOutOrRangeError if `i < 0`.
 *
 * @param {number} count Number of elements to skip from the end of the source Observable.
 * @returns {Observable<T>} An Observable that skips the last count values
 * emitted by the source Observable.
 * @method skipLast
 * @owner Observable
 */
function skipLast(count) {
    return skipLast_1.skipLast(count)(this);
}
exports.skipLast = skipLast;
//# sourceMappingURL=skipLast.js.map

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var skipUntil_1 = __webpack_require__(670);
Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skipUntil_1 = __webpack_require__(319);
/**
 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
 *
 * <img src="./img/skipUntil.png" width="100%">
 *
 * @param {Observable} notifier - The second Observable that has to emit an item before the source Observable's elements begin to
 * be mirrored by the resulting Observable.
 * @return {Observable<T>} An Observable that skips items from the source Observable until the second Observable emits
 * an item, then emits the remaining items.
 * @method skipUntil
 * @owner Observable
 */
function skipUntil(notifier) {
    return skipUntil_1.skipUntil(notifier)(this);
}
exports.skipUntil = skipUntil;
//# sourceMappingURL=skipUntil.js.map

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var skipWhile_1 = __webpack_require__(672);
Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var skipWhile_1 = __webpack_require__(320);
/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
 * true, but emits all further source items as soon as the condition becomes false.
 *
 * <img src="./img/skipWhile.png" width="100%">
 *
 * @param {Function} predicate - A function to test each item emitted from the source Observable.
 * @return {Observable<T>} An Observable that begins emitting items emitted by the source Observable when the
 * specified predicate becomes false.
 * @method skipWhile
 * @owner Observable
 */
function skipWhile(predicate) {
    return skipWhile_1.skipWhile(predicate)(this);
}
exports.skipWhile = skipWhile;
//# sourceMappingURL=skipWhile.js.map

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var startWith_1 = __webpack_require__(674);
Observable_1.Observable.prototype.startWith = startWith_1.startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var startWith_1 = __webpack_require__(321);
/* tslint:enable:max-line-length */
/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */
function startWith() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i - 0] = arguments[_i];
    }
    return startWith_1.startWith.apply(void 0, array)(this);
}
exports.startWith = startWith;
//# sourceMappingURL=startWith.js.map

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var subscribeOn_1 = __webpack_require__(676);
Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var subscribeOn_1 = __webpack_require__(677);
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return subscribeOn_1.subscribeOn(scheduler, delay)(this);
}
exports.subscribeOn = subscribeOn;
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SubscribeOnObservable_1 = __webpack_require__(678);
/**
 * Asynchronously subscribes Observers to this Observable on the specified IScheduler.
 *
 * <img src="./img/subscribeOn.png" width="100%">
 *
 * @param {Scheduler} scheduler - The IScheduler to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified IScheduler.
 .
 * @method subscribeOn
 * @owner Observable
 */
function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
exports.subscribeOn = subscribeOn;
var SubscribeOnOperator = (function () {
    function SubscribeOnOperator(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator.prototype.call = function (subscriber, source) {
        return new SubscribeOnObservable_1.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator;
}());
//# sourceMappingURL=subscribeOn.js.map

/***/ }),
/* 678 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var asap_1 = __webpack_require__(459);
var isNumeric_1 = __webpack_require__(131);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var SubscribeOnObservable = (function (_super) {
    __extends(SubscribeOnObservable, _super);
    function SubscribeOnObservable(source, delayTime, scheduler) {
        if (delayTime === void 0) { delayTime = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        _super.call(this);
        this.source = source;
        this.delayTime = delayTime;
        this.scheduler = scheduler;
        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
            this.delayTime = 0;
        }
        if (!scheduler || typeof scheduler.schedule !== 'function') {
            this.scheduler = asap_1.asap;
        }
    }
    SubscribeOnObservable.create = function (source, delay, scheduler) {
        if (delay === void 0) { delay = 0; }
        if (scheduler === void 0) { scheduler = asap_1.asap; }
        return new SubscribeOnObservable(source, delay, scheduler);
    };
    SubscribeOnObservable.dispatch = function (arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
            source: source, subscriber: subscriber
        });
    };
    return SubscribeOnObservable;
}(Observable_1.Observable));
exports.SubscribeOnObservable = SubscribeOnObservable;
//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Immediate_1 = __webpack_require__(680);
var AsyncAction_1 = __webpack_require__(129);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsapAction = (function (_super) {
    __extends(AsapAction, _super);
    function AsapAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If a microtask has already been scheduled, don't schedule another
        // one. If a microtask hasn't been scheduled yet, schedule one now. Return
        // the current scheduled microtask id.
        return scheduler.scheduled || (scheduler.scheduled = Immediate_1.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested microtask and
        // set the scheduled flag to undefined so the next AsapAction will schedule
        // its own.
        if (scheduler.actions.length === 0) {
            Immediate_1.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AsapAction;
}(AsyncAction_1.AsyncAction));
exports.AsapAction = AsapAction;
//# sourceMappingURL=AsapAction.js.map

/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {/**
Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
*/

var root_1 = __webpack_require__(23);
var ImmediateDefinition = (function () {
    function ImmediateDefinition(root) {
        this.root = root;
        if (root.setImmediate && typeof root.setImmediate === 'function') {
            this.setImmediate = root.setImmediate.bind(root);
            this.clearImmediate = root.clearImmediate.bind(root);
        }
        else {
            this.nextHandle = 1;
            this.tasksByHandle = {};
            this.currentlyRunningATask = false;
            // Don't get fooled by e.g. browserify environments.
            if (this.canUseProcessNextTick()) {
                // For Node.js before 0.9
                this.setImmediate = this.createProcessNextTickSetImmediate();
            }
            else if (this.canUsePostMessage()) {
                // For non-IE10 modern browsers
                this.setImmediate = this.createPostMessageSetImmediate();
            }
            else if (this.canUseMessageChannel()) {
                // For web workers, where supported
                this.setImmediate = this.createMessageChannelSetImmediate();
            }
            else if (this.canUseReadyStateChange()) {
                // For IE 6–8
                this.setImmediate = this.createReadyStateChangeSetImmediate();
            }
            else {
                // For older browsers
                this.setImmediate = this.createSetTimeoutSetImmediate();
            }
            var ci = function clearImmediate(handle) {
                delete clearImmediate.instance.tasksByHandle[handle];
            };
            ci.instance = this;
            this.clearImmediate = ci;
        }
    }
    ImmediateDefinition.prototype.identify = function (o) {
        return this.root.Object.prototype.toString.call(o);
    };
    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
        return this.identify(this.root.process) === '[object process]';
    };
    ImmediateDefinition.prototype.canUseMessageChannel = function () {
        return Boolean(this.root.MessageChannel);
    };
    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
        var document = this.root.document;
        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
    };
    ImmediateDefinition.prototype.canUsePostMessage = function () {
        var root = this.root;
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `root.postMessage` means something completely different and can't be used for this purpose.
        if (root.postMessage && !root.importScripts) {
            var postMessageIsAsynchronous_1 = true;
            var oldOnMessage = root.onmessage;
            root.onmessage = function () {
                postMessageIsAsynchronous_1 = false;
            };
            root.postMessage('', '*');
            root.onmessage = oldOnMessage;
            return postMessageIsAsynchronous_1;
        }
        return false;
    };
    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = function result() {
            var _a = result, handler = _a.handler, args = _a.args;
            if (typeof handler === 'function') {
                handler.apply(undefined, args);
            }
            else {
                (new Function('' + handler))();
            }
        };
        fn.handler = handler;
        fn.args = args;
        return fn;
    };
    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
        return this.nextHandle++;
    };
    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
        var root = this.root;
        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
        var onGlobalMessage = function globalMessageHandler(event) {
            var instance = globalMessageHandler.instance;
            if (event.source === root &&
                typeof event.data === 'string' &&
                event.data.indexOf(messagePrefix) === 0) {
                instance.runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };
        onGlobalMessage.instance = this;
        root.addEventListener('message', onGlobalMessage, false);
        var fn = function setImmediate() {
            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.postMessage(messagePrefix + handle, '*');
            return handle;
        };
        fn.instance = this;
        fn.messagePrefix = messagePrefix;
        return fn;
    };
    ImmediateDefinition.prototype.runIfPresent = function (handle) {
        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
        // So if we're currently running a task, we'll need to delay this invocation.
        if (this.currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // 'too much recursion' error.
            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
        }
        else {
            var task = this.tasksByHandle[handle];
            if (task) {
                this.currentlyRunningATask = true;
                try {
                    task();
                }
                finally {
                    this.clearImmediate(handle);
                    this.currentlyRunningATask = false;
                }
            }
        }
    };
    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
        var _this = this;
        var channel = new this.root.MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            _this.runIfPresent(handle);
        };
        var fn = function setImmediate() {
            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
        fn.channel = channel;
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var root = instance.root;
            var doc = root.document;
            var html = doc.documentElement;
            var handle = instance.addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement('script');
            script.onreadystatechange = function () {
                instance.runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
        var fn = function setImmediate() {
            var instance = setImmediate.instance;
            var handle = instance.addFromSetImmediateArguments(arguments);
            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
            return handle;
        };
        fn.instance = this;
        return fn;
    };
    return ImmediateDefinition;
}());
exports.ImmediateDefinition = ImmediateDefinition;
exports.Immediate = new ImmediateDefinition(root_1.root);
//# sourceMappingURL=Immediate.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(460).clearImmediate, __webpack_require__(460).setImmediate))

/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(70), __webpack_require__(466)))

/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(130);
var AsapScheduler = (function (_super) {
    __extends(AsapScheduler, _super);
    function AsapScheduler() {
        _super.apply(this, arguments);
    }
    AsapScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map

/***/ }),
/* 683 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var switch_1 = __webpack_require__(684);
Observable_1.Observable.prototype.switch = switch_1._switch;
Observable_1.Observable.prototype._switch = switch_1._switch;
//# sourceMappingURL=switch.js.map

/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchAll_1 = __webpack_require__(322);
/**
 * Converts a higher-order Observable into a first-order Observable by
 * subscribing to only the most recently emitted of those inner Observables.
 *
 * <span class="informal">Flattens an Observable-of-Observables by dropping the
 * previous inner Observable once a new one appears.</span>
 *
 * <img src="./img/switch.png" width="100%">
 *
 * `switch` subscribes to an Observable that emits Observables, also known as a
 * higher-order Observable. Each time it observes one of these emitted inner
 * Observables, the output Observable subscribes to the inner Observable and
 * begins emitting the items emitted by that. So far, it behaves
 * like {@link mergeAll}. However, when a new inner Observable is emitted,
 * `switch` unsubscribes from the earlier-emitted inner Observable and
 * subscribes to the new inner Observable and begins emitting items from it. It
 * continues to behave like this for subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * // Each click event is mapped to an Observable that ticks every second
 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
 * var switched = higherOrder.switch();
 * // The outcome is that `switched` is essentially a timer that restarts
 * // on every click. The interval Observables from older clicks do not merge
 * // with the current interval Observable.
 * switched.subscribe(x => console.log(x));
 *
 * @see {@link combineAll}
 * @see {@link concatAll}
 * @see {@link exhaust}
 * @see {@link mergeAll}
 * @see {@link switchMap}
 * @see {@link switchMapTo}
 * @see {@link zipAll}
 *
 * @return {Observable<T>} An Observable that emits the items emitted by the
 * Observable most recently emitted by the source Observable.
 * @method switch
 * @name switch
 * @owner Observable
 */
function _switch() {
    return switchAll_1.switchAll()(this);
}
exports._switch = _switch;
//# sourceMappingURL=switch.js.map

/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var switchMap_1 = __webpack_require__(686);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 686 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMap_1 = __webpack_require__(79);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return switchMap_1.switchMap(project, resultSelector)(this);
}
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),
/* 687 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var switchMapTo_1 = __webpack_require__(688);
Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),
/* 688 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMapTo_1 = __webpack_require__(323);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to the same Observable which is flattened multiple
 * times with {@link switch} in the output Observable.
 *
 * <span class="informal">It's like {@link switchMap}, but maps each value
 * always to the same inner Observable.</span>
 *
 * <img src="./img/switchMapTo.png" width="100%">
 *
 * Maps each source value to the given Observable `innerObservable` regardless
 * of the source value, and then flattens those resulting Observables into one
 * single Observable, which is the output Observable. The output Observables
 * emits values only from the most recently emitted instance of
 * `innerObservable`.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMapTo}
 * @see {@link switch}
 * @see {@link switchMap}
 * @see {@link mergeMapTo}
 *
 * @param {ObservableInput} innerObservable An Observable to replace each value from
 * the source Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits items from the given
 * `innerObservable` (and optionally transformed through `resultSelector`) every
 * time a value is emitted on the source Observable, and taking only the values
 * from the most recently projected inner Observable.
 * @method switchMapTo
 * @owner Observable
 */
function switchMapTo(innerObservable, resultSelector) {
    return switchMapTo_1.switchMapTo(innerObservable, resultSelector)(this);
}
exports.switchMapTo = switchMapTo;
//# sourceMappingURL=switchMapTo.js.map

/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var take_1 = __webpack_require__(690);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var take_1 = __webpack_require__(150);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    return take_1.take(count)(this);
}
exports.take = take;
//# sourceMappingURL=take.js.map

/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var takeLast_1 = __webpack_require__(692);
Observable_1.Observable.prototype.takeLast = takeLast_1.takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var takeLast_1 = __webpack_require__(149);
/**
 * Emits only the last `count` values emitted by the source Observable.
 *
 * <span class="informal">Remembers the latest `count` values, then emits those
 * only when the source completes.</span>
 *
 * <img src="./img/takeLast.png" width="100%">
 *
 * `takeLast` returns an Observable that emits at most the last `count` values
 * emitted by the source Observable. If the source emits fewer than `count`
 * values then all of its values are emitted. This operator must wait until the
 * `complete` notification emission from the source in order to emit the `next`
 * values on the output Observable, because otherwise it is impossible to know
 * whether or not more values will be emitted on the source. For this reason,
 * all values are emitted synchronously, followed by the complete notification.
 *
 * @example <caption>Take the last 3 values of an Observable with many values</caption>
 * var many = Rx.Observable.range(1, 100);
 * var lastThree = many.takeLast(3);
 * lastThree.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of values to emit from the end of
 * the sequence of values emitted by the source Observable.
 * @return {Observable<T>} An Observable that emits at most the last count
 * values emitted by the source Observable.
 * @method takeLast
 * @owner Observable
 */
function takeLast(count) {
    return takeLast_1.takeLast(count)(this);
}
exports.takeLast = takeLast;
//# sourceMappingURL=takeLast.js.map

/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var takeWhile_1 = __webpack_require__(694);
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var takeWhile_1 = __webpack_require__(324);
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return takeWhile_1.takeWhile(predicate)(this);
}
exports.takeWhile = takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var throttle_1 = __webpack_require__(696);
Observable_1.Observable.prototype.throttle = throttle_1.throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var throttle_1 = __webpack_require__(135);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for a duration determined by another Observable, then repeats this
 * process.
 *
 * <span class="informal">It's like {@link throttleTime}, but the silencing
 * duration is determined by a second Observable.</span>
 *
 * <img src="./img/throttle.png" width="100%">
 *
 * `throttle` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled by calling the `durationSelector` function with the source value,
 * which returns the "duration" Observable. When the duration Observable emits a
 * value or completes, the timer is disabled, and this process repeats for the
 * next source value.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link audit}
 * @see {@link debounce}
 * @see {@link delayWhen}
 * @see {@link sample}
 * @see {@link throttleTime}
 *
 * @param {function(value: T): SubscribableOrPromise} durationSelector A function
 * that receives a value from the source Observable, for computing the silencing
 * duration for each source value, returned as an Observable or a Promise.
 * @param {Object} config a configuration object to define `leading` and `trailing` behavior. Defaults
 * to `{ leading: true, trailing: false }`.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttle
 * @owner Observable
 */
function throttle(durationSelector, config) {
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttle_1.throttle(durationSelector, config)(this);
}
exports.throttle = throttle;
//# sourceMappingURL=throttle.js.map

/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var throttleTime_1 = __webpack_require__(698);
Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var throttle_1 = __webpack_require__(135);
var throttleTime_1 = __webpack_require__(326);
/**
 * Emits a value from the source Observable, then ignores subsequent source
 * values for `duration` milliseconds, then repeats this process.
 *
 * <span class="informal">Lets a value pass, then ignores source values for the
 * next `duration` milliseconds.</span>
 *
 * <img src="./img/throttleTime.png" width="100%">
 *
 * `throttleTime` emits the source Observable values on the output Observable
 * when its internal timer is disabled, and ignores source values when the timer
 * is enabled. Initially, the timer is disabled. As soon as the first source
 * value arrives, it is forwarded to the output Observable, and then the timer
 * is enabled. After `duration` milliseconds (or the time unit determined
 * internally by the optional `scheduler`) has passed, the timer is disabled,
 * and this process repeats for the next source value. Optionally takes a
 * {@link IScheduler} for managing timers.
 *
 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.throttleTime(1000);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link auditTime}
 * @see {@link debounceTime}
 * @see {@link delay}
 * @see {@link sampleTime}
 * @see {@link throttle}
 *
 * @param {number} duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds or the time unit determined
 * internally by the optional `scheduler`.
 * @param {Scheduler} [scheduler=async] The {@link IScheduler} to use for
 * managing the timers that handle the throttling.
 * @return {Observable<T>} An Observable that performs the throttle operation to
 * limit the rate of emissions from the source.
 * @method throttleTime
 * @owner Observable
 */
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return throttleTime_1.throttleTime(duration, scheduler, config)(this);
}
exports.throttleTime = throttleTime;
//# sourceMappingURL=throttleTime.js.map

/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var timeInterval_1 = __webpack_require__(461);
Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
//# sourceMappingURL=timeInterval.js.map

/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var timeout_1 = __webpack_require__(701);
Observable_1.Observable.prototype.timeout = timeout_1.timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var timeout_1 = __webpack_require__(328);
/**
 *
 * Errors if Observable does not emit a value in given time span.
 *
 * <span class="informal">Timeouts on Observable that doesn't emit values fast enough.</span>
 *
 * <img src="./img/timeout.png" width="100%">
 *
 * `timeout` operator accepts as an argument either a number or a Date.
 *
 * If number was provided, it returns an Observable that behaves like a source
 * Observable, unless there is a period of time where there is no value emitted.
 * So if you provide `100` as argument and first value comes after 50ms from
 * the moment of subscription, this value will be simply re-emitted by the resulting
 * Observable. If however after that 100ms passes without a second value being emitted,
 * stream will end with an error and source Observable will be unsubscribed.
 * These checks are performed throughout whole lifecycle of Observable - from the moment
 * it was subscribed to, until it completes or errors itself. Thus every value must be
 * emitted within specified period since previous value.
 *
 * If provided argument was Date, returned Observable behaves differently. It throws
 * if Observable did not complete before provided Date. This means that periods between
 * emission of particular values do not matter in this case. If Observable did not complete
 * before provided Date, source Observable will be unsubscribed. Other than that, resulting
 * stream behaves just as source Observable.
 *
 * `timeout` accepts also a Scheduler as a second parameter. It is used to schedule moment (or moments)
 * when returned Observable will check if source stream emitted value or completed.
 *
 * @example <caption>Check if ticks are emitted within certain timespan</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(1100) // Let's use bigger timespan to be safe,
 *                       // since `interval` might fire a bit later then scheduled.
 * .subscribe(
 *     value => console.log(value), // Will emit numbers just as regular `interval` would.
 *     err => console.log(err) // Will never be called.
 * );
 *
 * seconds.timeout(900).subscribe(
 *     value => console.log(value), // Will never be called.
 *     err => console.log(err) // Will emit error before even first value is emitted,
 *                             // since it did not arrive within 900ms period.
 * );
 *
 * @example <caption>Use Date to check if Observable completed</caption>
 * const seconds = Rx.Observable.interval(1000);
 *
 * seconds.timeout(new Date("December 17, 2020 03:24:00"))
 * .subscribe(
 *     value => console.log(value), // Will emit values as regular `interval` would
 *                                  // until December 17, 2020 at 03:24:00.
 *     err => console.log(err) // On December 17, 2020 at 03:24:00 it will emit an error,
 *                             // since Observable did not complete by then.
 * );
 *
 * @see {@link timeoutWith}
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source, unless timeout checks fail.
 * @method timeout
 * @owner Observable
 */
function timeout(due, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeout_1.timeout(due, scheduler)(this);
}
exports.timeout = timeout;
//# sourceMappingURL=timeout.js.map

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var timeoutWith_1 = __webpack_require__(703);
Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var timeoutWith_1 = __webpack_require__(330);
/* tslint:enable:max-line-length */
/**
 *
 * Errors if Observable does not emit a value in given time span, in case of which
 * subscribes to the second Observable.
 *
 * <span class="informal">It's a version of `timeout` operator that let's you specify fallback Observable.</span>
 *
 * <img src="./img/timeoutWith.png" width="100%">
 *
 * `timeoutWith` is a variation of `timeout` operator. It behaves exactly the same,
 * still accepting as a first argument either a number or a Date, which control - respectively -
 * when values of source Observable should be emitted or when it should complete.
 *
 * The only difference is that it accepts a second, required parameter. This parameter
 * should be an Observable which will be subscribed when source Observable fails any timeout check.
 * So whenever regular `timeout` would emit an error, `timeoutWith` will instead start re-emitting
 * values from second Observable. Note that this fallback Observable is not checked for timeouts
 * itself, so it can emit values and complete at arbitrary points in time. From the moment of a second
 * subscription, Observable returned from `timeoutWith` simply mirrors fallback stream. When that
 * stream completes, it completes as well.
 *
 * Scheduler, which in case of `timeout` is provided as as second argument, can be still provided
 * here - as a third, optional parameter. It still is used to schedule timeout checks and -
 * as a consequence - when second Observable will be subscribed, since subscription happens
 * immediately after failing check.
 *
 * @example <caption>Add fallback observable</caption>
 * const seconds = Rx.Observable.interval(1000);
 * const minutes = Rx.Observable.interval(60 * 1000);
 *
 * seconds.timeoutWith(900, minutes)
 *     .subscribe(
 *         value => console.log(value), // After 900ms, will start emitting `minutes`,
 *                                      // since first value of `seconds` will not arrive fast enough.
 *         err => console.log(err) // Would be called after 900ms in case of `timeout`,
 *                                 // but here will never be called.
 *     );
 *
 * @param {number|Date} due Number specifying period within which Observable must emit values
 *                          or Date specifying before when Observable should complete
 * @param {Observable<T>} withObservable Observable which will be subscribed if source fails timeout check.
 * @param {Scheduler} [scheduler] Scheduler controlling when timeout checks occur.
 * @return {Observable<T>} Observable that mirrors behaviour of source or, when timeout check fails, of an Observable
 *                          passed as a second parameter.
 * @method timeoutWith
 * @owner Observable
 */
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timeoutWith_1.timeoutWith(due, withObservable, scheduler)(this);
}
exports.timeoutWith = timeoutWith;
//# sourceMappingURL=timeoutWith.js.map

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var timestamp_1 = __webpack_require__(705);
Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var timestamp_1 = __webpack_require__(249);
/**
 * @param scheduler
 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
 * @method timestamp
 * @owner Observable
 */
function timestamp(scheduler) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    return timestamp_1.timestamp(scheduler)(this);
}
exports.timestamp = timestamp;
//# sourceMappingURL=timestamp.js.map

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var toArray_1 = __webpack_require__(707);
Observable_1.Observable.prototype.toArray = toArray_1.toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),
/* 707 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toArray_1 = __webpack_require__(151);
/**
 * Collects all source emissions and emits them as an array when the source completes.
 *
 * <span class="informal">Get all values inside an array when the source completes</span>
 *
 * <img src="./img/toArray.png" width="100%">
 *
 * `toArray` will wait until the source Observable completes
 * before emitting the array containing all emissions.
 * When the source Observable errors no array will be emitted.
 *
 * @example <caption>Create array from input</caption>
 * const input = Rx.Observable.interval(100).take(4);
 *
 * input.toArray()
 *   .subscribe(arr => console.log(arr)); // [0,1,2,3]
 *
 * @see {@link buffer}
 *
 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
 * @method toArray
 * @owner Observable
 */
function toArray() {
    return toArray_1.toArray()(this);
}
exports.toArray = toArray;
//# sourceMappingURL=toArray.js.map

/***/ }),
/* 708 */
/***/ (function(module, exports) {

// HACK: does nothing, because `toPromise` now lives on the `Observable` itself.
// leaving this module here to prevent breakage.
//# sourceMappingURL=toPromise.js.map

/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var window_1 = __webpack_require__(710);
Observable_1.Observable.prototype.window = window_1.window;
//# sourceMappingURL=window.js.map

/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window_1 = __webpack_require__(331);
/**
 * Branch out the source Observable values as a nested Observable whenever
 * `windowBoundaries` emits.
 *
 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
 * instead of an array.</span>
 *
 * <img src="./img/window.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping
 * windows. It emits the current window and opens a new one whenever the
 * Observable `windowBoundaries` emits an item. Because each window is an
 * Observable, the output is a higher-order Observable.
 *
 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var result = clicks.window(interval)
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link buffer}
 *
 * @param {Observable<any>} windowBoundaries An Observable that completes the
 * previous window and starts a new window.
 * @return {Observable<Observable<T>>} An Observable of windows, which are
 * Observables emitting values of the source Observable.
 * @method window
 * @owner Observable
 */
function window(windowBoundaries) {
    return window_1.window(windowBoundaries)(this);
}
exports.window = window;
//# sourceMappingURL=window.js.map

/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var windowCount_1 = __webpack_require__(712);
Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowCount_1 = __webpack_require__(332);
/**
 * Branch out the source Observable values as a nested Observable with each
 * nested Observable emitting at most `windowSize` values.
 *
 * <span class="informal">It's like {@link bufferCount}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowCount.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows every `startWindowEvery`
 * items, each containing no more than `windowSize` items. When the source
 * Observable completes or encounters an error, the output Observable emits
 * the current window and propagates the notification from the source
 * Observable. If `startWindowEvery` is not provided, then new windows are
 * started immediately at the start of the source and when each window completes
 * with size `windowSize`.
 *
 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(3)
 *   .map(win => win.skip(1)) // skip first of every 3 clicks
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.windowCount(2, 3)
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link windowWhen}
 * @see {@link bufferCount}
 *
 * @param {number} windowSize The maximum number of values emitted by each
 * window.
 * @param {number} [startWindowEvery] Interval at which to start a new window.
 * For example if `startWindowEvery` is `2`, then a new window will be started
 * on every other value from the source. A new window is started at the
 * beginning of the source by default.
 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
 * are Observable of values.
 * @method windowCount
 * @owner Observable
 */
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) { startWindowEvery = 0; }
    return windowCount_1.windowCount(windowSize, startWindowEvery)(this);
}
exports.windowCount = windowCount;
//# sourceMappingURL=windowCount.js.map

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var windowTime_1 = __webpack_require__(714);
Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var async_1 = __webpack_require__(18);
var isNumeric_1 = __webpack_require__(131);
var isScheduler_1 = __webpack_require__(36);
var windowTime_1 = __webpack_require__(333);
function windowTime(windowTimeSpan) {
    var scheduler = async_1.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (isScheduler_1.isScheduler(arguments[3])) {
        scheduler = arguments[3];
    }
    if (isScheduler_1.isScheduler(arguments[2])) {
        scheduler = arguments[2];
    }
    else if (isNumeric_1.isNumeric(arguments[2])) {
        maxWindowSize = arguments[2];
    }
    if (isScheduler_1.isScheduler(arguments[1])) {
        scheduler = arguments[1];
    }
    else if (isNumeric_1.isNumeric(arguments[1])) {
        windowCreationInterval = arguments[1];
    }
    return windowTime_1.windowTime(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler)(this);
}
exports.windowTime = windowTime;
//# sourceMappingURL=windowTime.js.map

/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var windowToggle_1 = __webpack_require__(716);
Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowToggle_1 = __webpack_require__(334);
/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowToggle.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var result = clicks.windowToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * ).mergeAll();
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
function windowToggle(openings, closingSelector) {
    return windowToggle_1.windowToggle(openings, closingSelector)(this);
}
exports.windowToggle = windowToggle;
//# sourceMappingURL=windowToggle.js.map

/***/ }),
/* 717 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var windowWhen_1 = __webpack_require__(718);
Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),
/* 718 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var windowWhen_1 = __webpack_require__(335);
/**
 * Branch out the source Observable values as a nested Observable using a
 * factory function of closing Observables to determine when to start a new
 * window.
 *
 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
 * Observable instead of an array.</span>
 *
 * <img src="./img/windowWhen.png" width="100%">
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits connected, non-overlapping windows.
 * It emits the current window and opens a new one whenever the Observable
 * produced by the specified `closingSelector` function emits an item. The first
 * window is opened immediately when subscribing to the output Observable.
 *
 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks
 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
 *   .map(win => win.take(2)) // each window has at most 2 emissions
 *   .mergeAll(); // flatten the Observable-of-Observables
 * result.subscribe(x => console.log(x));
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowToggle}
 * @see {@link bufferWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals (on either `next` or
 * `complete`) when to close the previous window and start a new one.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowWhen
 * @owner Observable
 */
function windowWhen(closingSelector) {
    return windowWhen_1.windowWhen(closingSelector)(this);
}
exports.windowWhen = windowWhen;
//# sourceMappingURL=windowWhen.js.map

/***/ }),
/* 719 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var withLatestFrom_1 = __webpack_require__(720);
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 720 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var withLatestFrom_1 = __webpack_require__(336);
/* tslint:enable:max-line-length */
/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * <img src="./img/withLatestFrom.png" width="100%">
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var timer = Rx.Observable.interval(1000);
 * var result = clicks.withLatestFrom(timer);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
function withLatestFrom() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return withLatestFrom_1.withLatestFrom.apply(void 0, args)(this);
}
exports.withLatestFrom = withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),
/* 721 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var zip_1 = __webpack_require__(722);
Observable_1.Observable.prototype.zip = zip_1.zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 722 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zip_1 = __webpack_require__(136);
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    return zip_1.zip.apply(void 0, observables)(this);
}
exports.zipProto = zipProto;
//# sourceMappingURL=zip.js.map

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(9);
var zipAll_1 = __webpack_require__(724);
Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var zipAll_1 = __webpack_require__(337);
/**
 * @param project
 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
 * @method zipAll
 * @owner Observable
 */
function zipAll(project) {
    return zipAll_1.zipAll(project)(this);
}
exports.zipAll = zipAll;
//# sourceMappingURL=zipAll.js.map

/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var Notification_1 = __webpack_require__(71);
var ColdObservable_1 = __webpack_require__(726);
var HotObservable_1 = __webpack_require__(727);
var SubscriptionLog_1 = __webpack_require__(463);
var VirtualTimeScheduler_1 = __webpack_require__(465);
var defaultMaxFrame = 750;
var TestScheduler = (function (_super) {
    __extends(TestScheduler, _super);
    function TestScheduler(assertDeepEqual) {
        _super.call(this, VirtualTimeScheduler_1.VirtualAction, defaultMaxFrame);
        this.assertDeepEqual = assertDeepEqual;
        this.hotObservables = [];
        this.coldObservables = [];
        this.flushTests = [];
    }
    TestScheduler.prototype.createTime = function (marbles) {
        var indexOf = marbles.indexOf('|');
        if (indexOf === -1) {
            throw new Error('marble diagram for time should have a completion marker "|"');
        }
        return indexOf * TestScheduler.frameTimeFactor;
    };
    TestScheduler.prototype.createColdObservable = function (marbles, values, error) {
        if (marbles.indexOf('^') !== -1) {
            throw new Error('cold observable cannot have subscription offset "^"');
        }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('cold observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var cold = new ColdObservable_1.ColdObservable(messages, this);
        this.coldObservables.push(cold);
        return cold;
    };
    TestScheduler.prototype.createHotObservable = function (marbles, values, error) {
        if (marbles.indexOf('!') !== -1) {
            throw new Error('hot observable cannot have unsubscription marker "!"');
        }
        var messages = TestScheduler.parseMarbles(marbles, values, error);
        var subject = new HotObservable_1.HotObservable(messages, this);
        this.hotObservables.push(subject);
        return subject;
    };
    TestScheduler.prototype.materializeInnerObservable = function (observable, outerFrame) {
        var _this = this;
        var messages = [];
        observable.subscribe(function (value) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createNext(value) });
        }, function (err) {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createError(err) });
        }, function () {
            messages.push({ frame: _this.frame - outerFrame, notification: Notification_1.Notification.createComplete() });
        });
        return messages;
    };
    TestScheduler.prototype.expectObservable = function (observable, unsubscriptionMarbles) {
        var _this = this;
        if (unsubscriptionMarbles === void 0) { unsubscriptionMarbles = null; }
        var actual = [];
        var flushTest = { actual: actual, ready: false };
        var unsubscriptionFrame = TestScheduler
            .parseMarblesAsSubscriptions(unsubscriptionMarbles).unsubscribedFrame;
        var subscription;
        this.schedule(function () {
            subscription = observable.subscribe(function (x) {
                var value = x;
                // Support Observable-of-Observables
                if (x instanceof Observable_1.Observable) {
                    value = _this.materializeInnerObservable(value, _this.frame);
                }
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createNext(value) });
            }, function (err) {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createError(err) });
            }, function () {
                actual.push({ frame: _this.frame, notification: Notification_1.Notification.createComplete() });
            });
        }, 0);
        if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            this.schedule(function () { return subscription.unsubscribe(); }, unsubscriptionFrame);
        }
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles, values, errorValue) {
                flushTest.ready = true;
                flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true);
            }
        };
    };
    TestScheduler.prototype.expectSubscriptions = function (actualSubscriptionLogs) {
        var flushTest = { actual: actualSubscriptionLogs, ready: false };
        this.flushTests.push(flushTest);
        return {
            toBe: function (marbles) {
                var marblesArray = (typeof marbles === 'string') ? [marbles] : marbles;
                flushTest.ready = true;
                flushTest.expected = marblesArray.map(function (marbles) {
                    return TestScheduler.parseMarblesAsSubscriptions(marbles);
                });
            }
        };
    };
    TestScheduler.prototype.flush = function () {
        var hotObservables = this.hotObservables;
        while (hotObservables.length > 0) {
            hotObservables.shift().setup();
        }
        _super.prototype.flush.call(this);
        var readyFlushTests = this.flushTests.filter(function (test) { return test.ready; });
        while (readyFlushTests.length > 0) {
            var test = readyFlushTests.shift();
            this.assertDeepEqual(test.actual, test.expected);
        }
    };
    TestScheduler.parseMarblesAsSubscriptions = function (marbles) {
        if (typeof marbles !== 'string') {
            return new SubscriptionLog_1.SubscriptionLog(Number.POSITIVE_INFINITY);
        }
        var len = marbles.length;
        var groupStart = -1;
        var subscriptionFrame = Number.POSITIVE_INFINITY;
        var unsubscriptionFrame = Number.POSITIVE_INFINITY;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '^':
                    if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    subscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                case '!':
                    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
                        throw new Error('found a second subscription point \'^\' in a ' +
                            'subscription marble diagram. There can only be one.');
                    }
                    unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
                    break;
                default:
                    throw new Error('there can only be \'^\' and \'!\' markers in a ' +
                        'subscription marble diagram. Found instead \'' + c + '\'.');
            }
        }
        if (unsubscriptionFrame < 0) {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame);
        }
        else {
            return new SubscriptionLog_1.SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
        }
    };
    TestScheduler.parseMarbles = function (marbles, values, errorValue, materializeInnerObservables) {
        if (materializeInnerObservables === void 0) { materializeInnerObservables = false; }
        if (marbles.indexOf('!') !== -1) {
            throw new Error('conventional marble diagrams cannot have the ' +
                'unsubscription marker "!"');
        }
        var len = marbles.length;
        var testMessages = [];
        var subIndex = marbles.indexOf('^');
        var frameOffset = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
        var getValue = typeof values !== 'object' ?
            function (x) { return x; } :
            function (x) {
                // Support Observable-of-Observables
                if (materializeInnerObservables && values[x] instanceof ColdObservable_1.ColdObservable) {
                    return values[x].messages;
                }
                return values[x];
            };
        var groupStart = -1;
        for (var i = 0; i < len; i++) {
            var frame = i * this.frameTimeFactor + frameOffset;
            var notification = void 0;
            var c = marbles[i];
            switch (c) {
                case '-':
                case ' ':
                    break;
                case '(':
                    groupStart = frame;
                    break;
                case ')':
                    groupStart = -1;
                    break;
                case '|':
                    notification = Notification_1.Notification.createComplete();
                    break;
                case '^':
                    break;
                case '#':
                    notification = Notification_1.Notification.createError(errorValue || 'error');
                    break;
                default:
                    notification = Notification_1.Notification.createNext(getValue(c));
                    break;
            }
            if (notification) {
                testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification: notification });
            }
        }
        return testMessages;
    };
    return TestScheduler;
}(VirtualTimeScheduler_1.VirtualTimeScheduler));
exports.TestScheduler = TestScheduler;
//# sourceMappingURL=TestScheduler.js.map

/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observable_1 = __webpack_require__(9);
var Subscription_1 = __webpack_require__(16);
var SubscriptionLoggable_1 = __webpack_require__(462);
var applyMixins_1 = __webpack_require__(464);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var ColdObservable = (function (_super) {
    __extends(ColdObservable, _super);
    function ColdObservable(messages, scheduler) {
        _super.call(this, function (subscriber) {
            var observable = this;
            var index = observable.logSubscribedFrame();
            subscriber.add(new Subscription_1.Subscription(function () {
                observable.logUnsubscribedFrame(index);
            }));
            observable.scheduleMessages(subscriber);
            return subscriber;
        });
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    ColdObservable.prototype.scheduleMessages = function (subscriber) {
        var messagesLength = this.messages.length;
        for (var i = 0; i < messagesLength; i++) {
            var message = this.messages[i];
            subscriber.add(this.scheduler.schedule(function (_a) {
                var message = _a.message, subscriber = _a.subscriber;
                message.notification.observe(subscriber);
            }, message.frame, { message: message, subscriber: subscriber }));
        }
    };
    return ColdObservable;
}(Observable_1.Observable));
exports.ColdObservable = ColdObservable;
applyMixins_1.applyMixins(ColdObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=ColdObservable.js.map

/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subject_1 = __webpack_require__(13);
var Subscription_1 = __webpack_require__(16);
var SubscriptionLoggable_1 = __webpack_require__(462);
var applyMixins_1 = __webpack_require__(464);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var HotObservable = (function (_super) {
    __extends(HotObservable, _super);
    function HotObservable(messages, scheduler) {
        _super.call(this);
        this.messages = messages;
        this.subscriptions = [];
        this.scheduler = scheduler;
    }
    HotObservable.prototype._subscribe = function (subscriber) {
        var subject = this;
        var index = subject.logSubscribedFrame();
        subscriber.add(new Subscription_1.Subscription(function () {
            subject.logUnsubscribedFrame(index);
        }));
        return _super.prototype._subscribe.call(this, subscriber);
    };
    HotObservable.prototype.setup = function () {
        var subject = this;
        var messagesLength = subject.messages.length;
        /* tslint:disable:no-var-keyword */
        for (var i = 0; i < messagesLength; i++) {
            (function () {
                var message = subject.messages[i];
                /* tslint:enable */
                subject.scheduler.schedule(function () { message.notification.observe(subject); }, message.frame);
            })();
        }
    };
    return HotObservable;
}(Subject_1.Subject));
exports.HotObservable = HotObservable;
applyMixins_1.applyMixins(HotObservable, [SubscriptionLoggable_1.SubscriptionLoggable]);
//# sourceMappingURL=HotObservable.js.map

/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AnimationFrameAction_1 = __webpack_require__(729);
var AnimationFrameScheduler_1 = __webpack_require__(731);
/**
 *
 * Animation Frame Scheduler
 *
 * <span class="informal">Perform task when `window.requestAnimationFrame` would fire</span>
 *
 * When `animationFrame` scheduler is used with delay, it will fall back to {@link async} scheduler
 * behaviour.
 *
 * Without delay, `animationFrame` scheduler can be used to create smooth browser animations.
 * It makes sure scheduled task will happen just before next browser content repaint,
 * thus performing animations as efficiently as possible.
 *
 * @example <caption>Schedule div height animation</caption>
 * const div = document.querySelector('.some-div');
 *
 * Rx.Scheduler.schedule(function(height) {
 *   div.style.height = height + "px";
 *
 *   this.schedule(height + 1);  // `this` references currently executing Action,
 *                               // which we reschedule with new state
 * }, 0, 0);
 *
 * // You will see .some-div element growing in height
 *
 *
 * @static true
 * @name animationFrame
 * @owner Scheduler
 */
exports.animationFrame = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
//# sourceMappingURL=animationFrame.js.map

/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncAction_1 = __webpack_require__(129);
var AnimationFrame_1 = __webpack_require__(730);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AnimationFrameAction = (function (_super) {
    __extends(AnimationFrameAction, _super);
    function AnimationFrameAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay is greater than 0, request as an async action.
        if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        // Push the action to the end of the scheduler queue.
        scheduler.actions.push(this);
        // If an animation frame has already been requested, don't request another
        // one. If an animation frame hasn't been requested yet, request one. Return
        // the current animation frame request id.
        return scheduler.scheduled || (scheduler.scheduled = AnimationFrame_1.AnimationFrame.requestAnimationFrame(scheduler.flush.bind(scheduler, null)));
    };
    AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If delay exists and is greater than 0, or if the delay is null (the
        // action wasn't rescheduled) but was originally scheduled as an async
        // action, then recycle as an async action.
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        // If the scheduler queue is empty, cancel the requested animation frame and
        // set the scheduled flag to undefined so the next AnimationFrameAction will
        // request its own.
        if (scheduler.actions.length === 0) {
            AnimationFrame_1.AnimationFrame.cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        // Return undefined so the action knows to request a new async id if it's rescheduled.
        return undefined;
    };
    return AnimationFrameAction;
}(AsyncAction_1.AsyncAction));
exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=AnimationFrameAction.js.map

/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(23);
var RequestAnimationFrameDefinition = (function () {
    function RequestAnimationFrameDefinition(root) {
        if (root.requestAnimationFrame) {
            this.cancelAnimationFrame = root.cancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.requestAnimationFrame.bind(root);
        }
        else if (root.mozRequestAnimationFrame) {
            this.cancelAnimationFrame = root.mozCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.mozRequestAnimationFrame.bind(root);
        }
        else if (root.webkitRequestAnimationFrame) {
            this.cancelAnimationFrame = root.webkitCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.webkitRequestAnimationFrame.bind(root);
        }
        else if (root.msRequestAnimationFrame) {
            this.cancelAnimationFrame = root.msCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.msRequestAnimationFrame.bind(root);
        }
        else if (root.oRequestAnimationFrame) {
            this.cancelAnimationFrame = root.oCancelAnimationFrame.bind(root);
            this.requestAnimationFrame = root.oRequestAnimationFrame.bind(root);
        }
        else {
            this.cancelAnimationFrame = root.clearTimeout.bind(root);
            this.requestAnimationFrame = function (cb) { return root.setTimeout(cb, 1000 / 60); };
        }
    }
    return RequestAnimationFrameDefinition;
}());
exports.RequestAnimationFrameDefinition = RequestAnimationFrameDefinition;
exports.AnimationFrame = new RequestAnimationFrameDefinition(root_1.root);
//# sourceMappingURL=AnimationFrame.js.map

/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AsyncScheduler_1 = __webpack_require__(130);
var AnimationFrameScheduler = (function (_super) {
    __extends(AnimationFrameScheduler, _super);
    function AnimationFrameScheduler() {
        _super.apply(this, arguments);
    }
    AnimationFrameScheduler.prototype.flush = function (action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler));
exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=AnimationFrameScheduler.js.map

/***/ }),
/* 732 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.DATA_URL,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    Camera.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'Browser', 'iOS', 'Windows']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),
/* 733 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePicker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```typescript
 * import { ImagePicker } from '@ionic-native/image-picker';
 *
 *
 * constructor(private imagePicker: ImagePicker) { }
 *
 * ...
 *
 * this.imagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => { });
 *
 * ```
 * @interfaces
 * ImagePickerOptions
 */
var ImagePicker = (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    ImagePicker.prototype.getPictures = function (options) { return; };
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    ImagePicker.prototype.hasReadPermission = function () { return; };
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    ImagePicker.prototype.requestReadPermission = function () { return; };
    ImagePicker.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    ImagePicker.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "getPictures", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "hasReadPermission", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['Android']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ImagePicker.prototype, "requestReadPermission", null);
    ImagePicker = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'ImagePicker',
            plugin: 'cordova-plugin-telerik-imagepicker',
            pluginRef: 'window.imagePicker',
            repo: 'https://github.com/Telerik-Verified-Plugins/ImagePicker',
            install: 'ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="your usage message"',
            installVariables: ['PHOTO_LIBRARY_USAGE_DESCRIPTION'],
            platforms: ['Android', 'iOS']
        })
    ], ImagePicker);
    return ImagePicker;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),
/* 734 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTransfer; });
/* unused harmony export FileTransferObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @deprecated
 * This plugin has been deprecated in favor of XHR2
 * https://cordova.apache.org/blog/2017/10/18/from-filetransfer-to-xhr2.html
 *
 * @usage
 * ```typescript
 * import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: FileTransfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: FileTransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 **
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * FileTransferObject
 */
var FileTransfer = (function (_super) {
    __extends(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    FileTransfer.ctorParameters = function () { return []; };
    FileTransfer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'FileTransfer',
            plugin: 'cordova-plugin-file-transfer',
            pluginRef: 'FileTransfer',
            repo: 'https://github.com/apache/cordova-plugin-file-transfer',
            platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
        })
    ], FileTransfer);
    return FileTransfer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

/**
 * @hidden
 */
var FileTransferObject = (function () {
    function FileTransferObject() {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["i" /* checkAvailability */])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return; };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return; };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param listener {function} Listener that takes a progress event.
     */
    FileTransferObject.prototype.onProgress = function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    FileTransferObject.prototype.abort = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Boolean]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "upload", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            successIndex: 2,
            errorIndex: 3
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean, Object]),
        __metadata("design:returntype", Promise)
    ], FileTransferObject.prototype, "download", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "onProgress", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
            sync: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileTransferObject.prototype, "abort", null);
    FileTransferObject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            plugin: 'cordova-plugin-file-transfer',
            pluginName: 'FileTransfer'
        }),
        __metadata("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=index.js.map

/***/ }),
/* 735 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(52);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
var File = (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    File.prototype.getFreeDiskSpace = function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    File.prototype.checkDir = function (path, dir) {
        if ((/^\//.test(dir))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var fullpath = path + dir;
        return this.resolveDirectoryUrl(fullpath)
            .then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcde, deste, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false, exclusive: false });
        })
            .then(function (de) {
            var reader = de.createReader();
            return _this.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    File.prototype.checkFile = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveLocalFilesystemUrl(path + file)
            .then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return _this.remove(fe);
        });
    };
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, fileName, getFileOpts);
        })
            .then(function (fileEntry) {
            return _this.writeFileEntry(fileEntry, text, options);
        });
    };
    /** Write content to FileEntry.
     *
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.prototype.writeExistingFile = function (path, fileName, text) {
        return this.writeFile(path, fileName, text, { replace: true });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    File.prototype.readAsText = function (path, file) {
        return this.readFile(path, file, 'Text');
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    File.prototype.readAsDataURL = function (path, file) {
        return this.readFile(path, file, 'DataURL');
    };
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    File.prototype.readAsBinaryString = function (path, file) {
        return this.readFile(path, file, 'BinaryString');
    };
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    File.prototype.readAsArrayBuffer = function (path, file) {
        return this.readFile(path, file, 'ArrayBuffer');
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        return this.resolveLocalFilesystemUrl(directoryUrl)
            .then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    File.ctorParameters = function () { return []; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "dataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "cacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalApplicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalCacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalRootDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "tempDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "syncedDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "documentsDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "sharedDirectory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFreeDiskSpace", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "listDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeRecursively", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeExistingFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsText", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsDataURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsBinaryString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsArrayBuffer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveLocalFilesystemUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveDirectoryUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getDirectory", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFile", null);
    File = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* Plugin */])({
            pluginName: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file',
            platforms: ['Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], File);
    return File;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportRecipeUrlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_security_security__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var heroesUrl = 'http://ionicteam.com:5001/api/';
var ImportRecipeUrlPage = (function () {
    function ImportRecipeUrlPage(transfer, file, loadingCtrl, imagePicker, alertCtrl, securityProvider, actionSheetCtrl, camera, navCtrl, navParams, popoverCtrl, viewCtrl, translate, toastCtrl) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.securityProvider = securityProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.viewCtrl = viewCtrl;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.fruits = [];
        this.multiImage = [];
        this.imagetext = 'Image';
        this.translate.get('popup').subscribe(function (value) {
            _this.popupMessages = value;
        });
        this.Recipes = {};
        this.Recipes.ingredients = [];
        this.Recipes.instructions = [];
        this.pic = this.navParams.get('pic');
        this.ImportUrlData = this.navParams.get('ImportUrlData');
        if (this.ImportUrlData) {
            this.Recipes.recipeTitle = this.ImportUrlData.recipeData.title;
            this.Recipes.description = this.ImportUrlData.recipeData.description;
            this.Recipes.mainImage = this.ImportUrlData.recipeData.mainImage;
            // this.Recipes.categories=this.ImportUrlData.category;
            this.Recipes.mealType = this.ImportUrlData.mealType;
            this.Recipes.ingredients = this.ImportUrlData.recipeIngredients;
            this.Recipes.instructions = this.ImportUrlData.instructions;
            this.Recipes.level = this.ImportUrlData.level;
            this.pic = this.ImportUrlData.recipeData.mainImage;
            console.log("ImportUrlData" + JSON.stringify(this.ImportUrlData));
        }
        //this.pic='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU3QzQxQzVDQUIzMTFFNzhDMkRBQjJBNTEwMUEyNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU3QzQxQzZDQUIzMTFFNzhDMkRBQjJBNTEwMUEyNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTdDNDFDM0NBQjMxMUU3OEMyREFCMkE1MTAxQTI3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTdDNDFDNENBQjMxMUU3OEMyREFCMkE1MTAxQTI3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhhhgqYAAETFSURBVHja7J0JsGXF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31Lw8+fDdegXgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKAj6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAAAIOgAAAIIOAAAACDoAAAAg6AAAAICgAwAAIOgAAACAoAMAAACCDgAAAAg6AAAAgg4AAAAIOgAAACDoAAAAgKADAAAg6AAAAICgAwAAQE78PwEGAGtCWmEKg4VvAAAAAElFTkSuQmCC'
        //this.Recipes.mainImage='iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU3QzQxQzVDQUIzMTFFNzhDMkRBQjJBNTEwMUEyNzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU3QzQxQzZDQUIzMTFFNzhDMkRBQjJBNTEwMUEyNzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTdDNDFDM0NBQjMxMUU3OEMyREFCMkE1MTAxQTI3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTdDNDFDNENBQjMxMUU3OEMyREFCMkE1MTAxQTI3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhhhgqYAAETFSURBVHja7J0JsGXF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31Lw8+fDdegXgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKAj6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAICgAwAAAIIOAAAACDoAAAAg6AAAAAg6AAAAIOgAAACAoAMAAACCDgAAgKADAAAAgg4AAAAIOgAAACDoAAAACDoAAAAg6AAAAICgAwAAAIIOAACAoAMAAACCDgAAAAg6AAAAIOgAAAAIOgAAACDoAAAAgKADAAAAgg4AAAAIOgAAAIIOAAAACDoAAAAg6AAAAICgAwAAIOgAAACAoAMAAACCDgAAAAg6AAAAgg4AAAAIOgAAACDoAAAAgKADAAAg6AAAAICgAwAAQE78PwEGAGtCWmEKg4VvAAAAAElFTkSuQmCC'
        this.Recipes.email = localStorage['email'];
        this.Recipes.userName = localStorage['username'];
        this.Recipes.user_id = localStorage['user_id'];
    }
    ImportRecipeUrlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImportRecipeUrlPage');
    };
    ImportRecipeUrlPage.prototype.ngOnInit = function () {
        var _this = this;
        this.securityProvider.category()
            .subscribe(function (data) {
            console.log("data" + JSON.stringify(data));
            var a = data;
            _this.category_name = a.data;
        }),
            function (error) { };
    };
    ImportRecipeUrlPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ImportRecipeUrlPage.prototype.onSave = function () {
        var _this = this;
        this.Recipes.categories = 'Others';
        var loading = this.loadingCtrl.create({
            content: this.popupMessages.Please_wait
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(loading.present())
            .flatMap(function (data) { return _this.securityProvider.addRecipes(_this.Recipes); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                var a = data;
                if (a.success == true) {
                    var b = a.recipeData;
                    _this.recipe_id = b._id;
                    var mesaage = _this.popupMessages.Recipe_Imported_Successfully;
                    /*  let alert = this.alertCtrl.create({
                       subTitle: mesaage,
                       buttons: [ this.popupMessages.ok]
                     });
                     alert.present(); */
                    var toast1 = _this.toastCtrl.create({
                        message: mesaage,
                        duration: 3000,
                        position: 'top'
                    });
                    toast1.onDidDismiss(function () {
                        console.log('over');
                    });
                    toast1.present();
                    _this.addmyRecipe(_this.recipe_id, localStorage['username']);
                    _this.dismiss();
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Alert!',
                        subTitle: 'Something went wrong!',
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: error,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    ImportRecipeUrlPage.prototype.addmyRecipe = function (recipe_id, userName) {
        var _this = this;
        var a = {
            recipe_id: recipe_id,
            user_id: localStorage['user_id']
        };
        var loading = this.loadingCtrl.create({
            content: this.popupMessages.Please_wait
        });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(loading.present())
            .flatMap(function (data) { return _this.securityProvider.AddtoMyRecipe(a); })
            .subscribe(function (data) {
            return loading.dismiss().then(function () {
                var a = data;
            });
        }, function (error) {
            return loading.dismiss().then(function () {
                var alert = _this.alertCtrl.create({
                    title: 'Alert!',
                    subTitle: error,
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    ImportRecipeUrlPage.prototype.onIngredients = function (value) {
        if (!value) {
        }
        else {
            this.Recipes.ingredientsValue = '';
            this.Recipes.ingredients.push(value);
            this.ingredients_data = this.Recipes.ingredients;
        }
    };
    ImportRecipeUrlPage.prototype.remove_btn = function (index) {
        var index1 = this.Recipes.ingredients.indexOf(index);
        this.Recipes.ingredients.splice(index1, 1);
    };
    ImportRecipeUrlPage.prototype.onInstruction = function (value) {
        if (!value) {
        }
        else {
            this.Recipes.instructionsValue = '';
            this.Recipes.instructions.push(value);
            this.instructions_data = this.Recipes.instructions;
        }
    };
    ImportRecipeUrlPage.prototype.remove_instruction = function (index) {
        var index1 = this.Recipes.instructions.indexOf(index);
        this.Recipes.instructions.splice(index1, 1);
    };
    ImportRecipeUrlPage.prototype.inst_edit_btn = function (index, value) {
        if (this.Recipes.instructionsValue) {
        }
        else {
            this.Recipes.instructionsValue = value;
            this.remove_instruction(index);
        }
    };
    ImportRecipeUrlPage.prototype.ing_edit_btn = function (index, value) {
        if (this.Recipes.ingredientsValue) {
        }
        else {
            this.Recipes.ingredientsValue = value;
            this.remove_btn(index);
        }
    };
    ImportRecipeUrlPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.popupMessages.Select_Image_Source,
            buttons: [{
                    text: this.popupMessages.Load_from_Library,
                    handler: function () {
                        _this.fromgallery();
                    }
                },
                {
                    text: this.popupMessages.use_camera,
                    handler: function () {
                        _this.fromcamera();
                    }
                },
                {
                    text: this.popupMessages.cancel,
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ImportRecipeUrlPage.prototype.fromgallery = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true
        }).then(function (imageData) {
            var base64Image = imageData;
            _this.pic = 'data:image/jpeg;base64,' + imageData;
            _this.Recipes.mainImage = base64Image;
            console.log(_this.Recipes.mainImage);
        }, function (err) {
            console.log('gallery not working');
        });
    };
    ImportRecipeUrlPage.prototype.fromcamera = function () {
        var _this = this;
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: true
        }).then(function (imageData) {
            var base64Image = imageData;
            _this.pic = 'data:image/jpeg;base64,' + imageData;
            _this.Recipes.mainImage = base64Image;
            console.log(_this.Recipes.mainImage);
        }, function (err) {
            console.log('camera not working');
        });
    };
    ImportRecipeUrlPage.prototype.onMultiImg = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: this.popupMessages.Select_Image_Source,
            buttons: [{
                    text: this.popupMessages.Load_from_Library,
                    handler: function () {
                        _this.Multiimage();
                    }
                },
                {
                    text: this.popupMessages.use_camera,
                    handler: function () {
                        _this.takePhoto();
                    }
                },
                {
                    text: this.popupMessages.cancel,
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ImportRecipeUrlPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            allowEdit: false
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            _this.imagetext = _this.popupMessages.add_more_images;
            _this.multiImage.push(_this.base64Image);
        }, function (err) {
        });
    };
    ImportRecipeUrlPage.prototype.Multiimage = function () {
        var _this = this;
        var options = {
            width: 800,
            height: 800,
            quality: 50,
            outputType: 0,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            var a = results.length;
            _this.multiImage = results;
        }, function (err) {
        });
    };
    ImportRecipeUrlPage.prototype.onVideo = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.FILE_URI,
            mediaType: this.camera.MediaType.VIDEO,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (videoData) {
            _this.video = videoData;
        }, function (err) { });
    };
    ImportRecipeUrlPage.prototype.onCancel = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.popupMessages.cancel_recipe,
            buttons: [{
                    text: this.popupMessages.cancel,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: this.popupMessages.yes,
                    handler: function () {
                        console.log('Yes clicked');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ImportRecipeUrlPage.prototype.uploadMultiimage = function () {
        var recipe_id = this.recipe_id;
        var multiImage = this.multiImage;
        for (var i = 0; i < multiImage.length; i++) {
            var recipeImage = multiImage[i];
            var image = multiImage[i];
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: 'photo',
                fileName: image,
                chunkedMode: false,
                headers: {}
            };
            fileTransfer.upload(recipeImage, heroesUrl + 'addRecipeImage/' + recipe_id, options)
                .then(function (data) {
                var a = data;
            }, function (err) {
            });
        }
    };
    ImportRecipeUrlPage.prototype.upload = function (message) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.popupMessages.Please_wait
        });
        loading.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'video',
            fileName: this.video,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            headers: {}
        };
        fileTransfer.upload(this.video, heroesUrl + 'recipeVideo/' + this.recipe_id, options)
            .then(function (data) {
            var a = data;
            loading.dismiss();
            /*  let alert = this.alertCtrl.create({
               subTitle: message,
               buttons: [this.popupMessages.ok]
             });
             alert.present(); */
            var toast1 = _this.toastCtrl.create({
                message: message,
                duration: 3000,
                position: 'top'
            });
            toast1.onDidDismiss(function () {
                console.log('over');
            });
            toast1.present();
            _this.navCtrl.setRoot('MyRecipesPage');
        }, function (err) {
        });
    };
    ImportRecipeUrlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-import-recipe-url',template:/*ion-inline-start:"E:\Balifood\Balifood\src\pages\import-recipe-url\import-recipe-url.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recipe Import</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n\n   <!--   <div class="main">\n         <div class="img-div" >\n            <img src={{pic}} class="main-img">\n         </div>\n\n         <div>\n           \n         </div>\n \n         </div> -->\n\n         <ion-card>\n        <img src={{pic}}/>\n        <ion-card-content>\n          <ion-card-title>\n           Title: {{this.Recipes.recipeTitle}}\n            </ion-card-title>\n            <!-- <div class="left">Category:{{Recipes.categories}}</div> -->\n          <p>\n          Description: {{Recipes.description}}\n          </p>\n          <div class="left">Level: {{Recipes.level}}</div>\n          <div class="left">mealType: {{Recipes.mealType}}</div>\n          <div class="left">Ingredients:\n             <ol type="number" class="green-tick">\n                <li *ngFor="let a of Recipes.ingredients"> {{a}}\n                  </li>\n            </ol>\n          </div>\n          <div class="left">Instructions:\n            <ol type="number" class="green-tick">\n                <li *ngFor="let a of Recipes.instructions"> {{a}}\n                  </li>\n            </ol>\n          </div>\n\n        </ion-card-content>\n</ion-card>\n   <div class="full-btn">\n      <button ion-button class="btn-left "  (click)="onCancel()">Cancel</button>\n      <button ion-button class="btn-right "  (click)="onSave()" >Save</button>\n   </div>\n</ion-content>\n'/*ion-inline-end:"E:\Balifood\Balifood\src\pages\import-recipe-url\import-recipe-url.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_security_security__["a" /* SecurityProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ViewController */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ToastController */]])
    ], ImportRecipeUrlPage);
    return ImportRecipeUrlPage;
}());

//# sourceMappingURL=import-recipe-url.js.map

/***/ })
]));
//# sourceMappingURL=2.js.map