var EasyWeekWidget = function () {
    'use strict';

    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }

    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function n(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t
    }

    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function a(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function (e) {
                i(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function r(t, e) {
        if (null == t) return {};
        var n, i, o = function (t, e) {
            if (null == t) return {};
            var n, i, o = {}, a = Object.keys(t);
            for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || (o[n] = t[n]);
            return o
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            for (i = 0; i < a.length; i++) n = a[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }

    function s(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var n = [], i = !0, o = !1, a = void 0;
            try {
                for (var r, s = t[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !e || n.length !== e); i = !0) ;
            } catch (t) {
                o = !0, a = t
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (o) throw a
                }
            }
            return n
        }(t, e) || function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return c(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
        }(t, e) || function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }()
    }

    function c(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }

    var d = function (t) {
        return '_' + t + 'Id'
    }, l = function () {
        function e(n) {
            var i = this;
            if (t(this, e), this._trackers = [], n.ga_autodetect && window.ga ? (this[d('ga')] = Object.keys(window.gaData)[0], this._trackers.push('ga')) : n.ga_tracking_id && (this._initGa(n.ga_tracking_id), this[d('ga')] = n.ga_tracking_id, this._trackers.push('ga')), n.ga4_autodetect && window.dataLayer) {
                for (var o = document.getElementsByTagName('script'), a = '', r = 0; r < o.length; r++) {
                    var s = o[r];
                    if (s.src.includes('https://www.googletagmanager.com/gtag/js')) {
                        var c = s.src.split('G-');
                        c.length > 1 && (a = 'G-'.concat(c[1]))
                    }
                }
                this[d('ga4')] = a, this._trackers.push('ga4')
            } else n.ga4_tracking_id && (this._initGa4(n.ga4_tracking_id), this[d('ga4')] = n.ga4_tracking_id, this._trackers.push('ga4'));
            if (n.gtm_autodetect && window.dataLayer) {
                for (var l = document.getElementsByTagName('script'), h = '', g = 0; g < l.length; g++) {
                    var u = l[g];
                    if (u.innerHTML.includes('https://www.googletagmanager.com/gtm.js?id=')) {
                        var v = u.innerHTML.split('GTM');
                        v.length > 1 && (h = 'GTM'.concat(v[1].split('\'')[0]))
                    }
                }
                this[d('gtm')] = h, this._trackers.push('gtm')
            } else n.gtm_tracking_id && (this._initGtm(n.gtm_tracking_id), this[d('gtm')] = n.gtm_tracking_id, this._trackers.push('gtm'));
            if (n.ym_autodetect && window.ym) {
                for (var m in window) if (m.startsWith('yaCounter')) {
                    var f = parseInt(m.replace('yaCounter', ''));
                    f && (this[d('ym')] = f, this._trackers.push('ym'))
                }
            } else n.ym_tracking_id && (this._initYm(n.ym_tracking_id), this[d('ym')] = n.ym_tracking_id, this._trackers.push('ym'));
            if (n.roistat_autodetect) if (window.roistat) this[d('roistat')] = window.roistatProjectId, this._trackers.push('roistat'); else {
                var p = 'function' == typeof window.onRoistatAllModulesLoaded && window.onRoistatAllModulesLoaded;
                window.onRoistatAllModulesLoaded = function () {
                    i[d('roistat')] = window.roistatProjectId, i._trackers.push('roistat'), p && p()
                }
            } else n.roistat_tracking_id && (window.onRoistatAllModulesLoaded = function () {
                i._trackers.push('roistat')
            }, this._initRoistat(n.roistat_tracking_id), this[d('roistat')] = n.roistat_tracking_id);
            n.facebook_pixel_autodetect && window.fbq ? this._trackers.push('facebook') : n.facebook_pixel_tracking_id && (this._initFacebook(n.facebook_pixel_tracking_id), this[d('facebook')] = n.facebook_pixel_tracking_id, this._trackers.push('facebook'))
        }

        return n(e, [{
            key: 'track', value: function (t) {
                for (var e = 0; e < this._trackers.length; e++) {
                    var n = this._trackers[e];
                    'function' == typeof this[n] && this[n](t)
                }
            }
        }, {
            key: 'ga', value: function (t) {
                var e = this, n = window.ga.getAll().find((function (t) {
                    return t.get('trackingId') === e._gaId
                }));
                if (n) switch (t.hitType) {
                    case'event':
                        n.send('event', { eventCategory: 'EasyWeek', eventAction: t.eventAction });
                        break;
                    case'pageview':
                        n.send('pageview', { page: t.page });
                        break;
                    default:
                        n.send(t)
                }
            }
        }, {
            key: 'ga4', value: function (t) {
                switch (t.hitType) {
                    case'event':
                        window.dataLayer.push({
                            event: t.eventAction,
                            eventCategory: 'EasyWeek',
                            eventAction: t.eventAction
                        }), window.gtag('event', t.eventAction, {
                            eventCategory: 'EasyWeek',
                            eventAction: t.eventAction
                        });
                        break;
                    case'pageview':
                        window.dataLayer.push({ event: 'gtm.navigation', 'gtm.newUrl': t.page });
                        break;
                    default:
                        window.dataLayer(t)
                }
            }
        }, {
            key: 'gtm', value: function (t) {
                switch (t.hitType) {
                    case'event':
                        window.dataLayer.push({
                            event: t.eventAction,
                            eventCategory: 'EasyWeek',
                            eventAction: t.eventAction
                        });
                        break;
                    case'pageview':
                        window.dataLayer.push({ event: 'gtm.navigation', 'gtm.newUrl': t.page });
                        break;
                    default:
                        window.dataLayer(t)
                }
            }
        }, {
            key: 'ym', value: function (t) {
                switch (t.hitType) {
                    case'event':
                        window.ym(this._ymId, 'reachGoal', 'EasyWeek:' + t.eventAction);
                        break;
                    case'pageview':
                        window.ym(this._ymId, 'hit', t.page);
                        break;
                    default:
                        window.ym(this._ymId, 'params', t)
                }
            }
        }, {
            key: 'roistat', value: function (t) {
                switch (t.hitType) {
                    case'event':
                        window.roistat.event.send('EasyWeek:' + t.eventAction);
                        break;
                    case'pageview':
                        window.roistat.event.send('EasyWeek:Pageview', { page: t.page });
                        break;
                    default:
                        window.roistat.setRoistatParams(t)
                }
            }
        }, {
            key: 'facebook', value: function (t) {
                switch (t.hitType) {
                    case'event':
                        window.fbq('trackCustom', 'EasyWeek:' + t.eventAction);
                        break;
                    case'pageview':
                        window.fbq('track', 'PageView'), window.fbq('trackCustom', 'EasyWeek:Pageview', { page: t.page });
                        break;
                    default:
                        console.error('Unknown type: ' + t.hitType, t)
                }
            }
        }, {
            key: 'getTrackersIds', value: function () {
                for (var t = {}, e = 0; e < this._trackers.length; e++) {
                    var n = d(this._trackers[e]);
                    this[n] && (t[this._trackers[e]] = this[n])
                }
                return t
            }
        }, {
            key: '_initGa', value: function (t) {
                if (!window.ga) {
                    window.GoogleAnalyticsObject = 'ga', window.ga = function () {
                        window.ga.q = window.ga.q || [], window.ga.q.push(arguments)
                    }, window.ga.l = 1 * new Date;
                    var e = document.createElement('script'), n = document.getElementsByTagName('script')[0];
                    e.async = !0, e.src = 'https://www.google-analytics.com/analytics.js', n.parentNode.insertBefore(e, n)
                }
                window.ga('create', t, 'auto'), window.ga('send', 'pageview')
            }
        }, {
            key: '_initGa4', value: function (t) {
                if (!window.dataLayer) {
                    var e = document.createElement('script'), n = document.getElementsByTagName('script')[0];
                    e.async = !0, e.src = 'https://www.googletagmanager.com/gtag/js?id='.concat(t), n.parentNode.insertBefore(e, n), window.dataLayer = window.dataLayer || []
                }

                function i() {
                    window.dataLayer.push(arguments)
                }

                window.gtag = i, i('js', new Date), i('config', ''.concat(t))
            }
        }, {
            key: '_initGtm', value: function (t) {
                window.dataLayer = window.dataLayer || [], window.dataLayer.push({
                    'gtm.start': (new Date).getTime(),
                    event: 'gtm.js'
                });
                var e = document.createElement('script'), n = document.getElementsByTagName('script')[0];
                e.async = !0, e.src = 'https://www.googletagmanager.com/gtm.js?id='.concat(t), n.parentNode.insertBefore(e, n)
            }
        }, {
            key: '_initYm', value: function (t) {
                if (!window.ym) {
                    window.ym = function () {
                        window.ym.a = window.ym.a || [], window.ym.a.push(arguments)
                    }, window.ym.l = 1 * new Date;
                    var e = document.createElement('script'), n = document.getElementsByTagName('script')[0];
                    e.async = !0, e.src = 'https://mc.yandex.ru/metrika/tag.js', n.parentNode.insertBefore(e, n)
                }
                window.ym(t, 'init', { clickmap: !0, trackLinks: !0, accurateTrackBounce: !0 })
            }
        }, {
            key: '_initRoistat', value: function (t) {
                window.roistatProjectId = t, window.roistatHost = 'cloud.roistat.com';
                var e = 'https:' === document.location.protocol ? 'https://' : 'http://',
                    n = /^.*roistat_visit=[^;]+(.*)?$/.test(document.cookie) ? '/dist/module.js' : '/api/site/1.0/'.concat(t, '/init?referrer=').concat(encodeURIComponent(document.location.href)),
                    i = document.createElement('script');
                i.charset = 'UTF-8', i.async = !0, i.src = e + window.roistatHost + n;
                var o = document.getElementsByTagName('script')[0];
                o.parentNode.insertBefore(i, o)
            }
        }, {
            key: '_initFacebook', value: function (t) {
                if (!window.fbq) {
                    var e = window.fbq = function () {
                        e.callMethod ? e.callMethod.apply(e, arguments) : e.queue.push(arguments)
                    };
                    window._fbq || (window._fbq = e), e.push = e, e.loaded = !0, e.version = '2.0', e.queue = [];
                    var n = document.createElement('script');
                    n.async = !0, n.src = 'https://connect.facebook.net/en_US/fbevents.js';
                    var i = document.getElementsByTagName('script')[0];
                    i.parentNode.insertBefore(n, i)
                }
                window.fbq('init', t)
            }
        }]), e
    }();
    !function (t, e) {
        void 0 === e && (e = {});
        var n = e.insertAt;
        if (t && 'undefined' != typeof document) {
            var i = document.head || document.getElementsByTagName('head')[0], o = document.createElement('style');
            o.type = 'text/css', 'top' === n && i.firstChild ? i.insertBefore(o, i.firstChild) : i.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t))
        }
    }('.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n}\n\n.EWBookingWidget {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    z-index: 99999999;\n    transition: 300ms opacity;\n}\n\nbody.EWNoScroll {\n    overflow: hidden;\n}\n\n.EWBookingWidget_hidden {\n    opacity: 0;\n}\n\n.EWInstagram .EWBookingWidget {\n    height: calc(100% - 40px);\n}\n\n.EWInstagram .EWScrolled .EWBookingWidget {\n    top: 40px;\n}\n\n.EWBookingWidget_hidden .EWBookingWidget__frame_right {\n    transform: translateX(100%);\n}\n\n.EWBookingWidget_hidden .EWBookingWidget__frame_left {\n    transform: translateX(-100%);\n}\n\n.EWBookingWidget__overlay {\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(0,0,0,.5);\n}\n\n.EWBookingWidget__frame {\n    display: block;\n    position: relative;\n    width: 600px;\n    max-width: 100%;\n    height: 100%;\n    transition: 300ms transform;\n}\n\n.EWBookingWidget__frame_left {\n    margin-right: auto;\n}\n\n.EWBookingWidget__frame_right {\n    margin-left: auto;\n}\n\n.EWBookingWidgetTrigger {\n    appearance: none;\n    text-decoration: none;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 0;\n    margin: 0;\n    position: fixed;\n    bottom: 10px;\n    right: 10px;\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n}\n\n.EWInstagram .EWBookingWidgetTrigger {\n    bottom: 50px;\n}\n\n.EWBookingWidgetTrigger:hover,\n.EWBookingWidgetTrigger:focus {\n    text-decoration: none;\n}\n\n.EWBookingWidgetTrigger__text {\n    padding: .5rem 1rem;\n    border-radius: .25rem;\n    margin-right: -15px;\n    box-shadow: 0 0 15px rgba(0,0,0,.1);\n    font-family: \'Geometria\', Arial, sans-serif;\n}\n\n.EWBookingWidgetTrigger__icon {\n    width: 90px;\n    height: 90px;\n}\n\n.EWBookingWidgetTrigger_left {\n    right: auto;\n    left: 20px;\n    flex-direction: row-reverse;\n}\n\n.EWBookingWidgetTrigger__circle {\n    transform-origin: 50% 50%;\n    display: none;\n}\n\n.EWBookingWidgetTrigger_animate .EWBookingWidgetTrigger__circle {\n    display: block;\n    animation: 3s EWBookingRipple infinite;\n}\n\n.EWBookingWidgetLoader {\n    position: fixed;\n    z-index: 1000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0,0,0,.5);\n    animation: 250ms EWBookingFade ease-out forwards;\n}\n\n.EWBookingWidgetLoader__scene {\n    width: 90px;\n    height: 90px;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    margin-left: -45px;\n    margin-top: -45px;\n    transform: translateZ(120px);\n}\n\n.EWBookingWidgetLoader__spinner {\n    width: 0;\n    height: 0;\n    animation: EWBookingRotate 0s infinite;\n}\n\n.EWBookingWidgetLoader__icon {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    width: 0%;\n    height: 0%;\n    transform: translate(-50%, -50%);\n}\n\n@media (min-width: 768px) {\n    .EWBookingWidgetTrigger {\n        right: 20px;\n        bottom: 20px;\n    }\n    .EWBookingWidgetTrigger_left {\n        right: auto;\n        left: 20px;\n    }\n    .EWBookingWidgetTrigger__icon {\n        width: 130px;\n        height: 130px;\n    }\n}\n\n[dir="rtl"] .EWBookingWidgetTrigger_left {\n    flex-direction: row;\n}\n\n[dir="rtl"] .EWBookingWidgetTrigger_right {\n    flex-direction: row-reverse;\n}\n\n@keyframes EWBookingRipple {\n    0% {\n        transform: scale(0.615);\n    }\n    100% {\n        opacity: 0;\n    }\n}\n\n@keyframes EWBookingRotate {\n    0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n        transform: perspective(120px) rotateX(-360deg) rotateY(0deg);\n    }\n    100% {\n        transform: perspective(120px) rotateX(-360deg) rotateY(360deg);\n    }\n}\n\n@keyframes EWBookingFade {\n    from {\n        opacity: 0;\n    }\n}\n');
    var h = /instagram/i, g = /(https?:\/\/[^/]+)\/([^/]+)\/?([^/]+)?\/?([^/]+)?\/?(users|date)?/,
        u = /(https?:\/\/[^/]+)\/([^/]+)\/(?:team\/)([^/]+)?\/?([^/]+)\/?([^/]+)?/, v = {
            text: 'Book Now',
            showText: !1,
            color: '#fff',
            background: '#ffbe0b',
            textColor: '#000',
            textBackground: '#fff'
        }, m = 'EWBookingWidget', f = 'EWBookingWidgetTrigger';
    return function () {
        function e(n) {
            var i = n.url, o = n.button, r = n.logo, s = void 0 === r || r, c = n.logoBackground, d = n.trigger;
            t(this, e), this.loaded = !1, this._setUrl(i), this.button = o, this._buttonProps = a(a({}, v), o), this._logo = s, this._logoBackground = c, this._isLoading = !1, this.triggerSelector = '.'.concat(f).concat(d ? ', '.concat(d) : ''), this.isInstagram = 'undefined' != typeof window && h.test(window.navigator.userAgent), this.start = this.start.bind(this), 'loading' === document.readyState ? document.addEventListener('DOMContentLoaded', this.start) : this.start()
        }

        return n(e, [{
            key: 'url', get: function () {
                var t = this;
                return (this._url.team ? [this._url.domain, this._url.slug, 'team', this._url.branchId, this._url.userId, this._url.productId] : [this._url.domain, this._url.slug, this._url.branchId, this._url.productId, this._url.postfix]).filter(Boolean).join('/') + (Object.keys(this._query).length ? '?' + Object.keys(this._query).reduce((function (e, n) {
                    return null === t._query[n] || void 0 === t._query[n] ? e : e.concat(''.concat(n, '=').concat(encodeURIComponent(t._query[n])))
                }), []).join('&') : '')
            }
        }, {
            key: 'start', value: function () {
                this._buttonProps.position || (this._buttonProps.position = function () {
                    try {
                        return 'rtl' === getComputedStyle(document.body).direction
                    } catch (t) {
                        return !1
                    }
                }() ? 'left' : 'right'), document.removeEventListener('DOMContentLoaded', this.start), this._toggleInstagramClass(this.isInstagram), this.button && this.createTriggerButton(), this._autobind(), this._addListeners()
            }
        }, {
            key: 'show', value: function (t) {
                var e = this;
                if (t = 'function' == typeof t ? t : function () {
                    return !1
                }, clearTimeout(this._tm), this._toggleTriggerAnimation(!1), !this.loaded) return this._query.back_url = 'iframe', this.loadIframe((function () {
                    return e.show(t)
                }));
                this.isInstagram && (this._toggleScrolledClass(window.innerHeight === document.documentElement.clientHeight), this._toggleScrolledListener(!0)), this._lockBodyScroll(!0), this.container.removeAttribute('hidden'), this._tm = setTimeout((function () {
                    e.container.classList.remove(''.concat(m, '_hidden'))
                }), 10), this._track({ hitType: 'event', eventAction: 'Widget:Opened' }), this.container.focus(), t()
            }
        }, {
            key: 'setMain', value: function () {
                var t = this;
                this._url.branchId = null, this._url.productId = null, this._url.userId = null, this._url.team = !1, this.show((function () {
                    t._track({
                        hitType: 'event',
                        eventAction: 'Site:Homepage:Selected'
                    }), t.iframe.contentWindow.location.href = t.url
                }))
            }
        }, {
            key: 'setProduct', value: function (t, e, n) {
                var i = this;
                this._url.branchId = e, this._url.productId = t, this._url.userId = n, this._url.team = !!n, this.show((function () {
                    i._track({
                        hitType: 'event',
                        eventAction: 'Site:Service:Selected'
                    }), i.iframe.contentWindow.location.href = i.url
                }))
            }
        }, {
            key: 'setBranch', value: function (t) {
                var e = this;
                this._url.branchId = t, this._url.productId = null, this.show((function () {
                    e._track({
                        hitType: 'event',
                        eventAction: 'Site:Location:Selected'
                    }), e.iframe.contentWindow.location.href = e.url
                }))
            }
        }, {
            key: 'setUser', value: function (t, e) {
                var n = this;
                this._url.branchId = e, this._url.userId = t, this._url.team = !0, this.show((function () {
                    n._track({
                        hitType: 'event',
                        eventAction: 'Site:User:Selected'
                    }), n.iframe.contentWindow.location.href = n.url
                }))
            }
        }, {
            key: 'hide', value: function () {
                var t = this;
                clearTimeout(this._tm), this.container.classList.add(''.concat(m, '_hidden')), this._tm = setTimeout((function () {
                    t.container.setAttribute('hidden', ''), t._track({ hitType: 'event', eventAction: 'Widget:Closed' })
                }), 200), this._lockBodyScroll(!1), this._toggleScrolledClass(!1), this._toggleScrolledListener(!1), this._toggleTriggerAnimation(!0)
            }
        }, {
            key: 'loadIframe', value: function (t) {
                if (!this._isLoading) {
                    this._isLoading = !0;
                    var e = this._buttonProps, n = e.background, i = e.color, o = e.position,
                        a = 'string' == typeof this._logo, r = !!this._logo, s = this._logoBackground || n;
                    this._loader = this._h('DIV', 'EWBookingWidgetLoader', void 0, '<div class="'.concat('EWBookingWidgetLoader', '__scene">\n                <div class="').concat('EWBookingWidgetLoader', '__spinner" style="background-color: ').concat(s, '">\n                    ').concat(a ? '<img class="'.concat('EWBookingWidgetLoader', '__icon" src="').concat(this._logo, '" width="81" height="81"/>') : r ? '<svg\n                                    class="'.concat('EWBookingWidgetLoader', '__icon"\n                                    width="40"\n                                    height="34"\n                                    viewBox="0 0 40 34"\n                                    xmlns="http://www.w3.org/2000/svg"\n                                >\n                                    <path fill="').concat(i, '"\n                                        d="M20 0c3.5 0 5.5 2.9 5.7 6A2.9 2.9 0 0021 7.8V8h-1.8a2.9 2.9 0 00-4.8-2v.5A2.5 2.5 0 0118.7 8a2.5 2.5 0 01-3.8 2.2l.2.5h.2A2.9 2.9 0 0019 8.6v-.2h1.8a2.9 2.9 0 004 2.5l-.4.8v.2c-.6 1.5-.6 2.6.2 3.2 1.1 1 3.8.6 4.3-1.7l.3-1.7v-.7l.1-.7v-.1l.1-.2v-.2a4 4 0 014-2.9c1.5 0 2.4 1 2.7 2.9-.6-.2-.5-.9-1.2-1.4-1-.5-2-.3-2.3.6-.3.9 0 1.7 0 3v2.5a6 6 0 013.6-.6c1.9.2 3.7 1.9 3.7 4.1 0 2.2-1.3 3.8-3.1 4.3-1 .2-1.8 0-2.1-.4 1.8-.4 3-1.2 3.2-2.5.5-2.1-1.3-3.5-3.5-2.8a8 8 0 00-2.1 1.3l-.3.2-.6.4-.3.3-.1.1a8 8 0 01-.6.4l-2.4 1c2.7 1.2 4.6 2.2 5.7 3a4.8 4.8 0 011.5 5.5c-.8 2-3.3 3.1-5 2.2-1.5-.8-1.7-1.8-1.4-2.2.7.9 1.5 1.4 2.3 1.4 1.4 0 2.8-1.4 2.6-3-.1-1-1-1.8-2.4-2.4l-.3-.1-.2-.1-.3-.2h-.2l-1.2-.5-1.2-.5h-.3l-.2-.2-2.8-1.3c1.2 2.2 2 4 2.3 5.1.7 2.3.5 5.9-2.7 6.9-2.6.8-3.9-1-4-1.7 1.3.9 2.5 1.1 3.6.7 1.5-.7 1.8-2.9 1-4.6l-1-1.5h-.1l-.1-.2-.3-.3-.3-.3-.2-.3a14.6 14.6 0 01-.8-.9 44 44 0 00-1.8-3l-.3-.5a45.4 45.4 0 00-2.1 3.5l-.8.9-.2.3-.3.3-.3.3v.1l-.1.1c-.5.6-.8 1-1 1.5-.9 1.7-.6 3.9 1 4.6 1 .4 2.2.2 3.4-.7 0 .8-1.3 2.5-4 1.7-3-1-3.3-4.6-2.6-6.9.4-1.2 1.1-2.9 2.3-5.1L12.5 23l-.2.1-1.5.6-1.2.5h-.2l-.2.1-.3.1c-1.7.7-2.6 1.5-2.7 2.6-.2 1.6 1.2 3 2.6 3 .8 0 1.6-.5 2.3-1.4.3.4.1 1.4-1.4 2.2-1.7.9-4.2-.3-5-2.2-.8-1.9-.1-4.2 1.5-5.5 1.1-.8 3-1.8 5.7-3a165.1 165.1 0 01-2.4-1 8 8 0 01-.6-.4l-.4-.4-.6-.4-2.4-1.5c-2.2-.7-4 .7-3.5 2.8.3 1.3 1.4 2.1 3.2 2.5-.3.4-1.1.6-2 .4-2-.5-3.2-2-3.2-4.3 0-2.2 1.8-3.9 3.7-4.1a6 6 0 013.6.6 19.9 19.9 0 010-2.5c0-1.3.3-2.1 0-3-.3-1-1.4-1.1-2.3-.6-.7.5-.6 1.2-1.2 1.4.3-2 1.2-2.9 2.8-2.9a4 4 0 013.9 3V10l.2.8v.2c0 .8.1 1.5.3 2.2.5 2.3 3.2 2.8 4.3 1.7.8-.7.8-1.7.2-3.2l-.1-.3-.3-.7h-.2a2.9 2.9 0 01-.8-4.6l.1-.1v-.3c.3-3 2.3-5.8 5.8-5.8zm2.9 26.2l.3.3.2.3.2.1 1 1.4c.7 1.6.4 3.5-.9 4.1-.9.4-1.9.2-3-.5l-.2-.2c.5-.3 1.5.5 2.6-.3 1-.7 1.3-1.9.1-4.5a27.6 27.6 0 00-.3-.7zm-5.8 0l-.3.7c-1.2 2.6-.9 3.8.1 4.5 1 .8 2 0 2.6.2v.1c-1.2 1-2.3 1.2-3.2.7-1.3-.6-1.6-2.5-.8-4 .2-.5.5-1 1-1.5v-.1l.3-.3.3-.3zm-7.3-1.6C9 25 8.5 25.5 8 26c-.7 1-.3 2.4.7 2.8 1 .3 1.6-.3 2-.3-.6.7-1.2 1.1-1.9 1.1a2.4 2.4 0 01-2.2-2.6c0-1 .9-1.6 2.4-2.2l.5-.2h.2v-.1zm20.4 0H30.5l.5.3c1.5.6 2.3 1.3 2.4 2.2.2 1.4-1 2.6-2.2 2.6-.7 0-1.3-.4-2-1.1.5 0 1.1.6 2 .3 1.1-.4 1.5-1.8.8-2.8l-1.5-1.4-.3-.1zm7.5-5.4c-.3 1.1-1.2 1.9-2.8 2.3h-.3c.2-.5 2.2-1 1.9-2.7-.4-1.7-2.6-1.3-4-.5H32.1l.3-.1a8 8 0 012.2-1.3c1.8-.7 3.4.5 3 2.3zM5.3 16.9c.8.3 1.4.6 2.2 1.3l.2.1h.1a36 36 0 01-.2 0c-1.5-.8-3.7-1.2-4 .5-.4 1.7 1.6 2.2 1.8 2.7-1.8-.4-2.8-1.1-3-2.3-.5-1.8 1-3 3-2.3zm9-10.3a2.5 2.5 0 00.6 3.7 12.9 12.9 0 01-.7-3.1 8.3 8.3 0 010-.6zm-4.6-.5c.5.7.7 1.7.8 2.8a4.5 4.5 0 00-4-2.5c-1.7 0-2.8 1.1-3 3.3-1-.1-1.4-3 .7-4.5 1.5-1 4.3-.9 5.5.9zm26-1c2.2 1.6 1.7 4.5.8 4.6-.2-2.2-1.3-3.3-3-3.3-1.8 0-3.4 1-4 2.5 0-1 .3-2 .8-2.8 1.2-1.8 4-2 5.5-1zM16.3 7.5c-.4 0-.5.4-.5.7 0 .4.1.8.5.8s.6-.4.6-.8c0-.3-.2-.7-.6-.7zm7.6 0c-.4 0-.6.4-.6.7 0 .4.2.8.6.8s.5-.4.5-.8c0-.3-.1-.7-.5-.7zm2-.5v.3a12.8 12.8 0 01-.7 3.1 2.5 2.5 0 01-3.8-2.2 2.5 2.5 0 014.3-1.7l.1.1V6l.2.2a2.9 2.9 0 01-.7 4.4l-.1.1-.2.1c0-.3.1-.5.2-.5a2.5 2.5 0 00.8-3.6l-.2-.1v.3z"\n                                        fill-rule="evenodd"\n                                    />\n                                </svg>') : '', '\n                </div>\n            </div>')), document.body.appendChild(this._loader), this._lockBodyScroll(!0), this.container = this._h('DIV', ''.concat(m, ' ').concat(m, '_hidden'), {
                        tabindex: '0',
                        hidden: ''
                    }, '<div class="'.concat(m, '__overlay" onclick="postMessage({ type: \'close\' })"></div>\n            <iframe\n                id="EWBookingWidget"\n                class="').concat(m, '__frame ').concat(m, '__frame_').concat(o, '"\n                src="').concat(this.url, '"\n                style="border:0"\n                frameborder="0"\n            ></iframe>\n            ')), document.body.appendChild(this.container), this.iframe = document.getElementById('EWBookingWidget'), this._onLoad = function (e) {
                        this._loader.remove(), delete this._loader, this._isLoading = !1, this.loaded = !0, this.iframe.removeEventListener('load', this._onLoad), 'function' == typeof t && t()
                    }.bind(this), this.iframe.addEventListener('load', this._onLoad)
                }
            }
        }, {
            key: 'createTriggerButton', value: function () {
                var t = this._buttonProps, e = t.text, n = t.showText, i = t.position, o = t.color, a = t.background,
                    r = t.textColor, s = t.textBackground;
                this.button = this._h('A', ''.concat(f, ' ').concat(f, '_animate ').concat(f, '_').concat(i), { href: this.url }, '<span class="'.concat(n ? ''.concat(f, '__text') : 'sr-only', '" style="background: ').concat(s, '; color: ').concat(r, '">').concat(e, '</span>\n            <svg class="').concat(f, '__icon" aria-hidden="true" width="130" height="130" viewBox="0 0 130 130">\n              <circle class="').concat(f, '__circle" fill="').concat(a, '" cx="65" cy="65" r="60"/>\n              <circle fill="').concat(a, '" cx="65" cy="65" r="40" fill-opacity=".95"/>\n              <path fill="').concat(a, '" d="M45 49.5a4 4 0 014-4h2v2a3 3 0 106 0v-2h16v2a3 3 0 106 0v-2h2a4 4 0 014 4v3a2 2 0 01-2 2H47a2 2 0 01-2-2v-3z"/>\n              <g fill="').concat(o, '">\n                <path d="M73 47.5v-2H57v2h16zm-22 0v-2h-2.3a4 4 0 00-4 3.7 254.7 254.7 0 00-.1 34.7 4 4 0 004 3.6h26.6c.5 0 1-.2 1.4-.6l8-8c.3-.3.5-.6.6-1 .5-2 .8-6 .8-11.4 0-5-.2-10.8-.7-17.3a4 4 0 00-4-3.7H79v2h2.3c1 0 2 .8 2 1.9.5 6.4.7 12.1.7 17.1 0 5.3-.3 9-.8 11l-8 8H48.5a2 2 0 01-2-1.8 252.7 252.7 0 01.1-34.3c.2-1.1 1-1.9 2-1.9H51z"/>\n                <path d="M55 45.5v2a1 1 0 01-2 0v-2a1 1 0 012 0zm-4 0v2a3 3 0 106 0v-2a3 3 0 10-6 0zM77 45.5v2a1 1 0 01-2 0v-2a1 1 0 012 0zm-4 0v2a3 3 0 106 0v-2a3 3 0 10-6 0z"/>\n                <path fill-opacity=".3" d="M75 86v-8.5h8.5L75 86z"/>\n                <path d="M76 78.5h7.5a1 1 0 000-2H75a1 1 0 00-1 1V86a1 1 0 002 0v-7.5z"/>\n                <path fill-opacity=".4" d="M51 60.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM51 69.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM62 60.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM62 69.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM73 60.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM73 69.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM51 78.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM62 78.5c0-1.1.9-2 2-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>\n                <path d="M55 60.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM55 69.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM66 60.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM66 69.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM77 60.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM77 69.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM55 78.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2zM66 78.5v2h-2v-2h2zm-4 0v2c0 1.1.9 2 2 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2z"/>\n                <path d="M45 54.5c0-.6.4-1 1-1h22a1 1 0 010 2H46a1 1 0 01-1-1z"/>\n                <path d="M71 54.5c0-.6.4-1 1-1h4a1 1 0 010 2h-4a1 1 0 01-1-1z"/>\n                <path d="M79 54.5a1 1 0 112 0 1 1 0 01-2 0z"/>\n              </g>\n            </svg>\n            ')), document.body.appendChild(this.button)
            }
        }, {
            key: 'destroy', value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                window.removeEventListener('message', this._onMessage), document.removeEventListener('click', this._onClick), clearTimeout(this._tm), this._lockBodyScroll(!1), this._toggleInstagramClass(!1), this._toggleScrolledClass(!1), this._toggleScrolledListener(!1), t && (this.container && this.container.remove(), this.button && this.button.remove()), this._loader && (this._loader.remove(), delete this.loader), this.iframe && this.iframe.removeEventListener('load', this._onLoad), this.container = null, this.button = null, this.iframe = null, this.loaded = !1
            }
        }, {
            key: '_h', value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : '',
                    o = document.createElement(t);
                for (var a in o.className = e, o.innerHTML = i, n) o.setAttribute(a, n[a]);
                return o
            }
        }, {
            key: '_setUrl', value: function (t) {
                var e = this, n = s(t.split('?'), 2), i = n[0], o = n[1];
                if (u.test(i)) {
                    var a = i.match(u);
                    this._url = {
                        domain: a[1],
                        slug: a[2],
                        branchId: a[3],
                        userId: a[4],
                        productId: a[5],
                        team: !0,
                        postfix: ''
                    }
                } else {
                    var r = i.match(g);
                    this._url = {
                        domain: r[1],
                        slug: r[2],
                        branchId: r[3],
                        productId: r[4],
                        team: !1,
                        userId: null,
                        postfix: r[5]
                    }
                }
                o ? (this._query = {}, o.split('&').forEach((function (t) {
                    var n = s(t.split('='), 2), i = n[0], o = n[1];
                    e._query[i] = decodeURIComponent(o)
                }))) : this._query = { ref: 'embed_widget' }, location.search.replace('?', '').split('&').forEach((function (t) {
                    var n = s(t.split('='), 2), i = n[0], o = void 0 === i ? '' : i, a = n[1];
                    o.startsWith('utm_') && void 0 === e._query[o] && (e._query[o] = a)
                }))
            }
        }, {
            key: '_autobind', value: function () {
                this.show = this.show.bind(this), this.hide = this.hide.bind(this), this._onMessage = this._onMessage.bind(this), this._onClick = this._onClick.bind(this)
            }
        }, {
            key: '_addListeners', value: function () {
                window.addEventListener('message', this._onMessage), document.addEventListener('click', this._onClick)
            }
        }, {
            key: '_onMessage', value: function (t) {
                if ((t.origin === location.origin || 0 === this.url.indexOf(t.origin)) && t.data) {
                    var e = t.data, n = e.type, i = r(e, ['type']);
                    switch (n) {
                        case'close':
                            this.hide();
                            break;
                        case'trackers':
                            this._initTrackers(i);
                            break;
                        case'track':
                            this._track(i);
                            break;
                        case'redirect':
                            this._redirect(i.url)
                    }
                }
            }
        }, {
            key: '_redirect', value: function (t) {
                window.location.replace(t)
            }
        }, {
            key: '_onClick', value: function (t) {
                var e = t.target;
                e && (e.matches(this.triggerSelector) || e.closest(this.triggerSelector)) && (t.preventDefault(), this.show())
            }
        }, {
            key: '_lockBodyScroll', value: function (t) {
                document.body.classList[t ? 'add' : 'remove']('EWNoScroll')
            }
        }, {
            key: '_toggleInstagramClass', value: function (t) {
                document.documentElement.classList[t ? 'add' : 'remove']('EWInstagram')
            }
        }, {
            key: '_toggleScrolledClass', value: function (t) {
                document.body.classList[t ? 'add' : 'remove']('EWScrolled')
            }
        }, {
            key: '_toggleScrolledListener', value: function (t) {
                var e = this._toggleScrolledClass;
                window[t ? 'addEventListener' : 'removeEventListener']('scroll', (function () {
                    e(window.innerHeight === document.documentElement.clientHeight)
                }))
            }
        }, {
            key: '_toggleTriggerAnimation', value: function (t) {
                this.button && this.button.classList[t ? 'add' : 'remove'](''.concat(f, '_animate'))
            }
        }, {
            key: '_initTrackers', value: function (t) {
                this.trackers = new l(t)
            }
        }, {
            key: '_track', value: function (t) {
                try {
                    this.trackers && this.trackers.track(t)
                } catch (t) {
                    console.log('Error tracking: ', t)
                }
            }
        }]), e
    }()
}();
