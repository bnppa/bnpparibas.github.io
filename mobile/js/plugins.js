/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.html
*/
(function (e, t, n, r) {
    'use strict';
    function l(e) {
        if (typeof e == 'string' || e instanceof String) e = e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
        return e
    }
    var i = function (t) {
        var n = t.length,
        r = e('head');
        while (n--) r.has('.' + t[n]).length === 0 && r.append('<meta class="' + t[n] + '" />')
    };
    i(['foundation-mq-small',
    'foundation-mq-medium',
    'foundation-mq-large',
    'foundation-mq-xlarge',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']),
    e(function () {
        typeof FastClick != 'undefined' && typeof n.body != 'undefined' && FastClick.attach(n.body)
    });
    var s = function (t, r) {
        if (typeof t == 'string') {
            if (r) {
                var i;
                if (r.jquery) {
                    i = r[0];
                    if (!i) return r
                } else i = r;
                return e(i.querySelectorAll(t))
            }
            return e(n.querySelectorAll(t))
        }
        return e(t, r)
    },
    o = function (e) {
        var t = [
        ];
        return e || t.push('data'),
        this.namespace.length > 0 && t.push(this.namespace),
        t.push(this.name),
        t.join('-')
    },
    u = function (e) {
        var t = e.split('-'),
        n = t.length,
        r = [
        ];
        while (n--) n !== 0 ? r.push(t[n])  : this.namespace.length > 0 ? r.push(this.namespace, t[n])  : r.push(t[n]);
        return r.reverse().join('-')
    },
    a = function (t, n) {
        var r = this,
        i = !s(this).data(this.attr_name(!0));
        if (typeof t == 'string') return this[t].call(this, n);
        s(this.scope).is('[' + this.attr_name() + ']') ? (s(this.scope).data(this.attr_name(!0) + '-init', e.extend({
        }, this.settings, n || t, this.data_options(s(this.scope)))), i && this.events(this.scope))  : s('[' + this.attr_name() + ']', this.scope).each(function () {
            var i = !s(this).data(r.attr_name(!0) + '-init');
            s(this).data(r.attr_name(!0) + '-init', e.extend({
            }, r.settings, n || t, r.data_options(s(this)))),
            i && r.events(this)
        })
    },
    f = function (e, t) {
        function n() {
            t(e[0])
        }
        function r() {
            this.one('load', n);
            if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                var e = this.attr('src'),
                t = e.match(/\?/) ? '&' : '?';
                t += 'random=' + (new Date).getTime(),
                this.attr('src', e + t)
            }
        }
        if (!e.attr('src')) {
            n();
            return
        }
        e[0].complete || e[0].readyState === 4 ? n()  : r.call(e)
    };
    t.matchMedia = t.matchMedia || function (e) {
        var t,
        n = e.documentElement,
        r = n.firstElementChild || n.firstChild,
        i = e.createElement('body'),
        s = e.createElement('div');
        return s.id = 'mq-test-1',
        s.style.cssText = 'position:absolute;top:-100em',
        i.style.background = 'none',
        i.appendChild(s),
        function (e) {
            return s.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>',
            n.insertBefore(i, r),
            t = s.offsetWidth === 42,
            n.removeChild(i),
            {
                matches: t,
                media: e
            }
        }
    }(n),
    function (e) {
        function a() {
            n && (s(a), u && jQuery.fx.tick())
        }
        var n,
        r = 0,
        i = [
            'webkit',
            'moz'
        ],
        s = t.requestAnimationFrame,
        o = t.cancelAnimationFrame,
        u = 'undefined' != typeof jQuery.fx;
        for (; r < i.length && !s; r++) s = t[i[r] + 'RequestAnimationFrame'],
        o = o || t[i[r] + 'CancelAnimationFrame'] || t[i[r] + 'CancelRequestAnimationFrame'];
        s ? (t.requestAnimationFrame = s, t.cancelAnimationFrame = o, u && (jQuery.fx.timer = function (e) {
            e() && jQuery.timers.push(e) && !n && (n = !0, a())
        }, jQuery.fx.stop = function () {
            n = !1
        }))  : (t.requestAnimationFrame = function (e) {
            var n = (new Date).getTime(),
            i = Math.max(0, 16 - (n - r)),
            s = t.setTimeout(function () {
                e(n + i)
            }, i);
            return r = n + i,
            s
        }, t.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(jQuery),
    t.Foundation = {
        name: 'Foundation',
        version: '5.2.2',
        media_queries: {
            small: s('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            medium: s('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            large: s('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            xlarge: s('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
            xxlarge: s('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
        },
        stylesheet: e('<style></style>').appendTo('head') [0].sheet,
        global: {
            namespace: r
        },
        init: function (e, t, n, r, i) {
            var o = [
                e,
                n,
                r,
                i
            ],
            u = [
            ];
            this.rtl = /rtl/i.test(s('html').attr('dir')),
            this.scope = e || this.scope,
            this.set_namespace();
            if (t && typeof t == 'string' && !/reflow/i.test(t)) this.libs.hasOwnProperty(t) && u.push(this.init_lib(t, o));
             else for (var a in this.libs) u.push(this.init_lib(a, t));
            return e
        },
        init_lib: function (t, n) {
            return this.libs.hasOwnProperty(t) ? (this.patch(this.libs[t]), n && n.hasOwnProperty(t) ? (typeof this.libs[t].settings != 'undefined' ? e.extend(!0, this.libs[t].settings, n[t])  : typeof this.libs[t].defaults != 'undefined' && e.extend(!0, this.libs[t].defaults, n[t]), this.libs[t].init.apply(this.libs[t], [
                this.scope,
                n[t]
            ]))  : (n = n instanceof Array ? n : new Array(n), this.libs[t].init.apply(this.libs[t], n)))  : function () {
            }
        },
        patch: function (e) {
            e.scope = this.scope,
            e.namespace = this.global.namespace,
            e.rtl = this.rtl,
            e.data_options = this.utils.data_options,
            e.attr_name = o,
            e.add_namespace = u,
            e.bindings = a,
            e.S = this.utils.S
        },
        inherit: function (e, t) {
            var n = t.split(' '),
            r = n.length;
            while (r--) this.utils.hasOwnProperty(n[r]) && (e[n[r]] = this.utils[n[r]])
        },
        set_namespace: function () {
            var t = this.global.namespace === r ? e('.foundation-data-attribute-namespace').css('font-family')  : this.global.namespace;
            this.global.namespace = t === r || /false/i.test(t) ? '' : t
        },
        libs: {
        },
        utils: {
            S: s,
            throttle: function (e, t) {
                var n = null;
                return function () {
                    var r = this,
                    i = arguments;
                    n == null && (n = setTimeout(function () {
                        e.apply(r, i),
                        n = null
                    }, t))
                }
            },
            debounce: function (e, t, n) {
                var r,
                i;
                return function () {
                    var s = this,
                    o = arguments,
                    u = function () {
                        r = null,
                        n || (i = e.apply(s, o))
                    },
                    a = n && !r;
                    return clearTimeout(r),
                    r = setTimeout(u, t),
                    a && (i = e.apply(s, o)),
                    i
                }
            },
            data_options: function (t) {
                function a(e) {
                    return !isNaN(e - 0) && e !== null && e !== '' && e !== !1 && e !== !0
                }
                function f(t) {
                    return typeof t == 'string' ? e.trim(t)  : t
                }
                var n = {
                },
                r,
                i,
                s,
                o = function (e) {
                    var t = Foundation.global.namespace;
                    return t.length > 0 ? e.data(t + '-options')  : e.data('options')
                },
                u = o(t);
                if (typeof u == 'object') return u;
                s = (u || ':').split(';'),
                r = s.length;
                while (r--) i = s[r].split(':'),
                /true/i.test(i[1]) && (i[1] = !0),
                /false/i.test(i[1]) && (i[1] = !1),
                a(i[1]) && (i[1].indexOf('.') === - 1 ? i[1] = parseInt(i[1], 10)  : i[1] = parseFloat(i[1])),
                i.length === 2 && i[0].length > 0 && (n[f(i[0])] = f(i[1]));
                return n
            },
            register_media: function (t, n) {
                Foundation.media_queries[t] === r && (e('head').append('<meta class="' + n + '">'), Foundation.media_queries[t] = l(e('.' + n).css('font-family')))
            },
            add_custom_rule: function (e, t) {
                if (t === r) Foundation.stylesheet.insertRule(e, Foundation.stylesheet.cssRules.length);
                 else {
                    var n = Foundation.media_queries[t];
                    n !== r && Foundation.stylesheet.insertRule('@media ' + Foundation.media_queries[t] + '{ ' + e + ' }')
                }
            },
            image_loaded: function (e, t) {
                var n = this,
                r = e.length;
                r === 0 && t(e),
                e.each(function () {
                    f(n.S(this), function () {
                        r -= 1,
                        r === 0 && t(e)
                    })
                })
            },
            random_str: function () {
                return this.fidx || (this.fidx = 0),
                this.prefix = this.prefix || [this.name || 'F',
                ( + (new Date)).toString(36)].join('-'),
                this.prefix + (this.fidx++).toString(36)
            }
        }
    },
    e.fn.foundation = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            return Foundation.init.apply(Foundation, [
                this
            ].concat(e)),
            this
        })
    }
}) (jQuery, this, this.document),
function (e, t, n, r) {
    'use strict';
    function i(e) {
        var t = /fade/i.test(e),
        n = /pop/i.test(e);
        return {
            animate: t || n,
            pop: n,
            fade: t
        }
    }
    Foundation.libs.reveal = {
        name: 'reveal',
        version: '5.2.2',
        locked: !1,
        settings: {
            animation: 'fadeAndPop',
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: 'close-reveal-modal',
            bg_class: 'reveal-modal-bg',
            open: function () {
            },
            opened: function () {
            },
            close: function () {
            },
            closed: function () {
            },
            bg: e('.reveal-modal-bg'),
            css: {
                open: {
                    opacity: 0,
                    visibility: 'visible',
                    display: 'block'
                },
                close: {
                    opacity: 1,
                    visibility: 'hidden',
                    display: 'none'
                }
            }
        },
        init: function (t, n, r) {
            e.extend(!0, this.settings, n, r),
            this.bindings(n, r)
        },
        events: function (e) {
            var t = this,
            r = t.S;
            return r(this.scope).off('.reveal').on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']', function (e) {
                e.preventDefault();
                if (!t.locked) {
                    var n = r(this),
                    i = n.data(t.data_attr('reveal-ajax'));
                    t.locked = !0;
                    if (typeof i == 'undefined') t.open.call(t, n);
                    else {
                        var s = i === !0 ? n.attr('href')  : i;
                        t.open.call(t, n, {
                            url: s
                        })
                    }
                }
            }),
            r(n).on('touchend.fndtn.reveal click.fndtn.reveal', this.close_targets(), function (e) {
                e.preventDefault();
                if (!t.locked) {
                    var n = r('[' + t.attr_name() + '].open').data(t.attr_name(!0) + '-init'),
                    i = r(e.target) [0] === r('.' + n.bg_class) [0];
                    if (i) {
                        if (!n.close_on_background_click) return;
                        e.stopPropagation()
                    }
                    t.locked = !0,
                    t.close.call(t, i ? r('[' + t.attr_name() + '].open')  : r(this).closest('[' + t.attr_name() + ']'))
                }
            }),
            r('[' + t.attr_name() + ']', this.scope).length > 0 ? r(this.scope).on('open.fndtn.reveal', this.settings.open).on('opened.fndtn.reveal', this.settings.opened).on('opened.fndtn.reveal', this.open_video).on('close.fndtn.reveal', this.settings.close).on('closed.fndtn.reveal', this.settings.closed).on('closed.fndtn.reveal', this.close_video)  : r(this.scope).on('open.fndtn.reveal', '[' + t.attr_name() + ']', this.settings.open).on('opened.fndtn.reveal', '[' + t.attr_name() + ']', this.settings.opened).on('opened.fndtn.reveal', '[' + t.attr_name() + ']', this.open_video).on('close.fndtn.reveal', '[' + t.attr_name() + ']', this.settings.close).on('closed.fndtn.reveal', '[' + t.attr_name() + ']', this.settings.closed).on('closed.fndtn.reveal', '[' + t.attr_name() + ']', this.close_video),
            !0
        },
        key_up_on: function (e) {
            var t = this;
            return t.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function (e) {
                var n = t.S('[' + t.attr_name() + '].open'),
                r = n.data(t.attr_name(!0) + '-init');
                r && e.which === 27 && r.close_on_esc && !t.locked && t.close.call(t, n)
            }),
            !0
        },
        key_up_off: function (e) {
            return this.S('body').off('keyup.fndtn.reveal'),
            !0
        },
        open: function (t, n) {
            $("body").css("overflow","hidden");
            
            var r = this;
            if (t) if (typeof t.selector != 'undefined') var i = r.S('#' + t.data(r.data_attr('reveal-id')));
             else {
                var i = r.S(this.scope);
                n = t
            } else var i = r.S(this.scope);
            var s = i.data(r.attr_name(!0) + '-init');
            if (!i.hasClass('open')) {
                var o = r.S('[' + r.attr_name() + '].open');
                typeof i.data('css-top') == 'undefined' && i.data('css-top', parseInt(i.css('top'), 10)).data('offset', this.cache_offset(i)),
                this.key_up_on(i),
                i.trigger('open'),
                o.length < 1 && this.toggle_bg(i),
                typeof n == 'string' && (n = {
                    url: n
                });
                if (typeof n == 'undefined' || !n.url) o.length > 0 && this.hide(o, s.css.close),
                this.show(i, s.css.open);
                 else {
                    var u = typeof n.success != 'undefined' ? n.success : null;
                    e.extend(n, {
                        success: function (t, n, a) {
                            e.isFunction(u) && u(t, n, a),
                            i.html(t),
                            r.S(i).foundation('section', 'reflow'),
                            o.length > 0 && r.hide(o, s.css.close),
                            r.show(i, s.css.open)
                        }
                    }),
                    e.ajax(n)
                }
            }
        },
        close: function (e) {
            $("body").css("overflow","auto");
            
            var e = e && e.length ? e : this.S(this.scope),
            t = this.S('[' + this.attr_name() + '].open'),
            n = e.data(this.attr_name(!0) + '-init');
            t.length > 0 && (this.locked = !0, this.key_up_off(e), e.trigger('close'), this.toggle_bg(e), this.hide(t, n.css.close, n))
        },
        close_targets: function () {
            var e = '.' + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? e + ', .' + this.settings.bg_class : e
        },
        toggle_bg: function (t) {
            var n = t.data(this.attr_name(!0));
            this.S('.' + this.settings.bg_class).length === 0 && (this.settings.bg = e('<div />', {
                'class': this.settings.bg_class
            }).appendTo('body').hide()),
            this.settings.bg.filter(':visible').length > 0 ? this.hide(this.settings.bg)  : this.show(this.settings.bg)
        },
        show: function (n, r) {
            if (r) {
                var s = n.data(this.attr_name(!0) + '-init');
                if (n.parent('body').length === 0) {
                    var o = n.wrap('<div style="display: none;" />').parent(),
                    u = this.settings.rootElement || 'body';
                    n.on('closed.fndtn.reveal.wrapped', function () {
                        n.detach().appendTo(o),
                        n.unwrap().unbind('closed.fndtn.reveal.wrapped')
                    }),
                    n.detach().appendTo(u)
                }
                var a = i(s.animation);
                a.animate || (this.locked = !1);
                if (a.pop) {
                    r.top = e(t).scrollTop() - n.data('offset') + 'px';
                    var f = {
                        top: e(t).scrollTop() + n.data('css-top') + 'px',
                        opacity: 1
                    };
                    return setTimeout(function () {
                        return n.css(r).animate(f, s.animation_speed, 'linear', function () {
                            this.locked = !1,
                            n.trigger('opened')
                        }.bind(this)).addClass('open')
                    }.bind(this), s.animation_speed / 2)
                }
                if (a.fade) {
                    r.top = e(t).scrollTop() + n.data('css-top') + 'px';
                    var f = {
                        opacity: 1
                    };
                    return setTimeout(function () {
                        return n.css(r).animate(f, s.animation_speed, 'linear', function () {
                            this.locked = !1,
                            n.trigger('opened')
                        }.bind(this)).addClass('open')
                    }.bind(this), s.animation_speed / 2)
                }
                return n.css(r).show().css({
                    opacity: 1
                }).addClass('open').trigger('opened')
            }
            var s = this.settings;
            return i(s.animation).fade ? n.fadeIn(s.animation_speed / 2)  : (this.locked = !1, n.show())
        },
        hide: function (n, r) {
            if (r) {
                var s = n.data(this.attr_name(!0) + '-init'),
                o = i(s.animation);
                o.animate || (this.locked = !1);
                if (o.pop) {
                    var u = {
                        top: - e(t).scrollTop() - n.data('offset') + 'px',
                        opacity: 0
                    };
                    return setTimeout(function () {
                        return n.animate(u, s.animation_speed, 'linear', function () {
                            this.locked = !1,
                            n.css(r).trigger('closed')
                        }.bind(this)).removeClass('open')
                    }.bind(this), s.animation_speed / 2)
                }
                if (o.fade) {
                    var u = {
                        opacity: 0
                    };
                    return setTimeout(function () {
                        return n.animate(u, s.animation_speed, 'linear', function () {
                            this.locked = !1,
                            n.css(r).trigger('closed')
                        }.bind(this)).removeClass('open')
                    }.bind(this), s.animation_speed / 2)
                }
                return n.hide().css(r).removeClass('open').trigger('closed')
            }
            var s = this.settings;
            return i(s.animation).fade ? n.fadeOut(s.animation_speed / 2)  : n.hide()
        },
        close_video: function (t) {
            var n = e('.flex-video', t.target),
            r = e('iframe', n);
            r.length > 0 && (r.attr('data-src', r[0].src), r.attr('src', 'about:blank'), n.hide())
        },
        open_video: function (t) {
            var n = e('.flex-video', t.target),
            i = n.find('iframe');
            if (i.length > 0) {
                var s = i.attr('data-src');
                if (typeof s == 'string') i[0].src = i.attr('data-src');
                 else {
                    var o = i[0].src;
                    i[0].src = r,
                    i[0].src = o
                }
                n.show()
            }
        },
        data_attr: function (e) {
            return this.namespace.length > 0 ? this.namespace + '-' + e : e
        },
        cache_offset: function (e) {
            var t = e.show().height() + parseInt(e.css('top'), 10);
            return e.hide(),
            t
        },
        off: function () {
            e(this.scope).off('.fndtn.reveal')
        },
        reflow: function () {
        }
    }
}(jQuery, this, this.document),
function (e, t, n, r) {
    'use strict';
    Foundation.libs.tooltip = {
        name: 'tooltip',
        version: '5.2.2',
        settings: {
            additional_inheritable_classes: [
            ],
            tooltip_class: '.tooltip',
            append_to: 'body',
            touch_close_text: 'Tap To Close',
            disable_for_touch: !1,
            hover_delay: 200,
            tip_template: function (e, t) {
                return '<span data-selector="' + e + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + t + '<span class="nub"></span></span>'
            }
        },
        cache: {
        },
        init: function (e, t, n) {
            Foundation.inherit(this, 'random_str'),
            this.bindings(t, n)
        },
        events: function (t) {
            var n = this,
            r = n.S;
            n.create(this.S(t)),
            e(this.scope).off('.tooltip').on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + ']', function (t) {
                var i = r(this),
                s = e.extend({
                }, n.settings, n.data_options(i)),
                o = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && r(t.target).is('a')) return !1;
                if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                if (i.hasClass('open')) Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && t.preventDefault(),
                n.hide(i);
                 else {
                    if (s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type)) return;
                    !s.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(t.type) && (t.preventDefault(), r(s.tooltip_class + '.open').hide(), o = !0),
                    /enter|over/i.test(t.type) ? this.timer = setTimeout(function () {
                        var e = n.showTip(i)
                    }.bind(this), n.settings.hover_delay)  : t.type === 'mouseout' || t.type === 'mouseleave' ? (clearTimeout(this.timer), n.hide(i))  : n.showTip(i)
                }
            }).on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (t) {
                if (/mouse/i.test(t.type) && n.ie_touch(t)) return !1;
                if (e(this).data('tooltip-open-event-type') == 'touch' && t.type == 'mouseleave') return;
                e(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(t.type) ? n.convert_to_touch(e(this))  : n.hide(e(this))
            }).on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {
                n.hide(r(this))
            })
        },
        ie_touch: function (e) {
            return !1
        },
        showTip: function (e) {
            var t = this.getTip(e);
            return this.show(e)
        },
        getTip: function (t) {
            var n = this.selector(t),
            r = e.extend({
            }, this.settings, this.data_options(t)),
            i = null;
            return n && (i = this.S('span[data-selector="' + n + '"]' + r.tooltip_class)),
            typeof i == 'object' ? i : !1
        },
        selector: function (e) {
            var t = e.attr('id'),
            n = e.attr(this.attr_name()) || e.attr('data-selector');
            return (t && t.length < 1 || !t) && typeof n != 'string' && (n = this.random_str(6), e.attr('data-selector', n)),
            t && t.length > 0 ? t : n
        },
        create: function (n) {
            var r = this,
            i = e.extend({
            }, this.settings, this.data_options(n)),
            s = this.settings.tip_template;
            typeof i.tip_template == 'string' && t.hasOwnProperty(i.tip_template) && (s = t[i.tip_template]);
            var o = e(s(this.selector(n), e('<div></div>').html(n.attr('title')).html())),
            u = this.inheritable_classes(n);
            o.addClass(u).appendTo(i.append_to),
            Modernizr.touch && (o.append('<span class="tap-to-close">' + i.touch_close_text + '</span>'), o.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function (e) {
                r.hide(n)
            })),
            n.removeAttr('title').attr('title', '')
        },
        reposition: function (t, n, r) {
            var i,
            s,
            o,
            u,
            a,
            f;
            n.css('visibility', 'hidden').show(),
            i = t.data('width'),
            s = n.children('.nub'),
            o = s.outerHeight(),
            u = s.outerHeight(),
            this.small() ? n.css({
                width: '100%'
            })  : n.css({
                width: i ? i : 'auto'
            }),
            f = function (e, t, n, r, i, s) {
                return e.css({
                    top: t ? t : 'auto',
                    bottom: r ? r : 'auto',
                    left: i ? i : 'auto',
                    right: n ? n : 'auto'
                }).end()
            },
            f(n, t.offset().top + t.outerHeight() + 10, 'auto', 'auto', t.offset().left);
            if (this.small()) f(n, t.offset().top + t.outerHeight() + 10, 'auto', 'auto', 12.5, e(this.scope).width()),
            n.addClass('tip-override'),
            f(s, - o, 'auto', 'auto', t.offset().left);
             else {
                var l = t.offset().left;
                Foundation.rtl && (s.addClass('rtl'), l = t.offset().left + t.outerWidth() - n.outerWidth()),
                f(n, t.offset().top + t.outerHeight() + 10, 'auto', 'auto', l),
                n.removeClass('tip-override'),
                r && r.indexOf('tip-top') > - 1 ? (Foundation.rtl && s.addClass('rtl'), f(n, t.offset().top - n.outerHeight(), 'auto', 'auto', l).removeClass('tip-override'))  : r && r.indexOf('tip-left') > - 1 ? (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, 'auto', 'auto', t.offset().left - n.outerWidth() - o).removeClass('tip-override'), s.removeClass('rtl'))  : r && r.indexOf('tip-right') > - 1 && (f(n, t.offset().top + t.outerHeight() / 2 - n.outerHeight() / 2, 'auto', 'auto', t.offset().left + t.outerWidth() + o).removeClass('tip-override'), s.removeClass('rtl'))
            }
            n.css('visibility', 'visible').hide()
        },
        small: function () {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function (t) {
            var n = e.extend({
            }, this.settings, this.data_options(t)),
            r = [
                'tip-top',
                'tip-left',
                'tip-bottom',
                'tip-right',
                'radius',
                'round'
            ].concat(n.additional_inheritable_classes),
            i = t.attr('class'),
            s = i ? e.map(i.split(' '), function (t, n) {
                if (e.inArray(t, r) !== - 1) return t
            }).join(' ')  : '';
            return e.trim(s)
        },
        convert_to_touch: function (t) {
            var n = this,
            r = n.getTip(t),
            i = e.extend({
            }, n.settings, n.data_options(t));
            r.find('.tap-to-close').length === 0 && (r.append('<span class="tap-to-close">' + i.touch_close_text + '</span>'), r.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function (e) {
                n.hide(t)
            })),
            t.data('tooltip-open-event-type', 'touch')
        },
        show: function (e) {
            var t = this.getTip(e);
            e.data('tooltip-open-event-type') == 'touch' && this.convert_to_touch(e),
            this.reposition(e, t, e.attr('class')),
            e.addClass('open'),
            t.fadeIn(150)
        },
        hide: function (e) {
            var t = this.getTip(e);
            t.fadeOut(150, function () {
                t.find('.tap-to-close').remove(),
                t.off('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose'),
                e.removeClass('open')
            })
        },
        off: function () {
            var t = this;
            this.S(this.scope).off('.fndtn.tooltip'),
            this.S(this.settings.tooltip_class).each(function (n) {
                e('[' + t.attr_name() + ']').eq(n).attr('title', e(this).text())
            }).remove()
        },
        reflow: function () {
        }
    }
}(jQuery, this, this.document);

/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
!function (a) {
    function b() {
    }
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }
        function e(b, c) {
            a.fn[b] = function (e) {
                if ('string' == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                        k = a.data(j, b);
                        if (k) if (a.isFunction(k[e]) && '_' !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l) return l
                        } else f('no such method \'' + e + '\' for ' + b + ' instance');
                         else f('cannot call methods on ' + b + ' prior to initialization; attempted to call \'' + e + '\'')
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init())  : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = 'undefined' == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b),
                e(a, b)
            },
            a.bridget
        }
    }
    var d = Array.prototype.slice;
    'function' == typeof define && define.amd ? define('jquery-bridget/jquery.bridget', [
        'jquery'
    ], c)  : c(a.jQuery)
}(window),
function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement,
    d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    }
     : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
         : function () {
            var c = b(a);
            d.call(a, c)
        },
        a.attachEvent('on' + c, a[c + d])
    });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    }
     : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent('on' + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    'function' == typeof define && define.amd ? define('eventie/eventie', f)  : 'object' == typeof exports ? module.exports = f : a.eventie = f
}(this),
function (a) {
    function b(a) {
        'function' == typeof a && (b.isReady ? a()  : f.push(a))
    }
    function c(a) {
        var c = 'readystatechange' === a.type && 'complete' !== e.readyState;
        if (!b.isReady && !c) {
            b.isReady = !0;
            for (var d = 0, g = f.length; g > d; d++) {
                var h = f[d];
                h()
            }
        }
    }
    function d(d) {
        return d.bind(e, 'DOMContentLoaded', c),
        d.bind(e, 'readystatechange', c),
        d.bind(a, 'load', c),
        b
    }
    var e = a.document,
    f = [
    ];
    b.isReady = !1,
    'function' == typeof define && define.amd ? (b.isReady = 'function' == typeof requirejs, define('doc-ready/doc-ready', [
        'eventie/eventie'
    ], d))  : a.docReady = d(a.eventie)
}(this),
function () {
    function a() {
    }
    function b(a, b) {
        for (var c = a.length; c--; ) if (a[c].listener === b) return c;
        return - 1
    }
    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
    e = this,
    f = e.EventEmitter;
    d.getListeners = function (a) {
        var b,
        c,
        d = this._getEvents();
        if (a instanceof RegExp) {
            b = {
            };
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = [
        ]);
        return b
    },
    d.flattenListeners = function (a) {
        var b,
        c = [
        ];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    },
    d.getListenersAsObject = function (a) {
        var b,
        c = this.getListeners(a);
        return c instanceof Array && (b = {
        }, b[a] = c),
        b || c
    },
    d.addListener = function (a, c) {
        var d,
        e = this.getListenersAsObject(a),
        f = 'object' == typeof c;
        for (d in e) e.hasOwnProperty(d) && - 1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    },
    d.on = c('addListener'),
    d.addOnceListener = function (a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    },
    d.once = c('addOnceListener'),
    d.defineEvent = function (a) {
        return this.getListeners(a),
        this
    },
    d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    },
    d.removeListener = function (a, c) {
        var d,
        e,
        f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), - 1 !== d && f[e].splice(d, 1));
        return this
    },
    d.off = c('removeListener'),
    d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    },
    d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    },
    d.manipulateListeners = function (a, b, c) {
        var d,
        e,
        f = a ? this.removeListener : this.addListener,
        g = a ? this.removeListeners : this.addListeners;
        if ('object' != typeof b || b instanceof RegExp) for (d = c.length; d--; ) f.call(this, b, c[d]);
         else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ('function' == typeof e ? f.call(this, d, e)  : g.call(this, d, e));
        return this
    },
    d.removeEvent = function (a) {
        var b,
        c = typeof a,
        d = this._getEvents();
        if ('string' === c) delete d[a];
         else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
         else delete this._events;
        return this
    },
    d.removeAllListeners = c('removeEvent'),
    d.emitEvent = function (a, b) {
        var c,
        d,
        e,
        f,
        g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--; ) c = g[e][d],
        c.once === !0 && this.removeListener(a, c.listener),
        f = c.listener.apply(this, b || []),
        f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    },
    d.trigger = c('emitEvent'),
    d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    },
    d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a,
        this
    },
    d._getOnceReturnValue = function () {
        return this.hasOwnProperty('_onceReturnValue') ? this._onceReturnValue : !0
    },
    d._getEvents = function () {
        return this._events || (this._events = {
        })
    },
    a.noConflict = function () {
        return e.EventEmitter = f,
        a
    },
    'function' == typeof define && define.amd ? define('eventEmitter/EventEmitter', [
    ], function () {
        return a
    })  : 'object' == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}.call(this),
function (a) {
    function b(a) {
        if (a) {
            if ('string' == typeof d[a]) return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, 'string' == typeof d[b]) return b
        }
    }
    var c = 'Webkit Moz ms Ms O'.split(' '),
    d = document.documentElement.style;
    'function' == typeof define && define.amd ? define('get-style-property/get-style-property', [
    ], function () {
        return b
    })  : 'object' == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window),
function (a) {
    function b(a) {
        var b = parseFloat(a),
        c = - 1 === a.indexOf('%') && !isNaN(b);
        return c && b
    }
    function c() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = g.length; c > b; b++) {
            var d = g[b];
            a[d] = 0
        }
        return a
    }
    function d(a) {
        function d(a) {
            if ('string' == typeof a && (a = document.querySelector(a)), a && 'object' == typeof a && a.nodeType) {
                var d = f(a);
                if ('none' === d.display) return c();
                var e = {
                };
                e.width = a.offsetWidth,
                e.height = a.offsetHeight;
                for (var k = e.isBorderBox = !(!j || !d[j] || 'border-box' !== d[j]), l = 0, m = g.length; m > l; l++) {
                    var n = g[l],
                    o = d[n];
                    o = h(a, o);
                    var p = parseFloat(o);
                    e[n] = isNaN(p) ? 0 : p
                }
                var q = e.paddingLeft + e.paddingRight,
                r = e.paddingTop + e.paddingBottom,
                s = e.marginLeft + e.marginRight,
                t = e.marginTop + e.marginBottom,
                u = e.borderLeftWidth + e.borderRightWidth,
                v = e.borderTopWidth + e.borderBottomWidth,
                w = k && i,
                x = b(d.width);
                x !== !1 && (e.width = x + (w ? 0 : q + u));
                var y = b(d.height);
                return y !== !1 && (e.height = y + (w ? 0 : r + v)),
                e.innerWidth = e.width - (q + u),
                e.innerHeight = e.height - (r + v),
                e.outerWidth = e.width + s,
                e.outerHeight = e.height + t,
                e
            }
        }
        function h(a, b) {
            if (e || - 1 === b.indexOf('%')) return b;
            var c = a.style,
            d = c.left,
            f = a.runtimeStyle,
            g = f && f.left;
            return g && (f.left = a.currentStyle.left),
            c.left = b,
            b = c.pixelLeft,
            c.left = d,
            g && (f.left = g),
            b
        }
        var i,
        j = a('boxSizing');
        return function () {
            if (j) {
                var a = document.createElement('div');
                a.style.width = '200px',
                a.style.padding = '1px 2px 3px 4px',
                a.style.borderStyle = 'solid',
                a.style.borderWidth = '1px 2px 3px 4px',
                a.style[j] = 'border-box';
                var c = document.body || document.documentElement;
                c.appendChild(a);
                var d = f(a);
                i = 200 === b(d.width),
                c.removeChild(a)
            }
        }(),
        d
    }
    var e = a.getComputedStyle,
    f = e ? function (a) {
        return e(a, null)
    }
     : function (a) {
        return a.currentStyle
    },
    g = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];
    'function' == typeof define && define.amd ? define('get-size/get-size', [
        'get-style-property/get-style-property'
    ], d)  : 'object' == typeof exports ? module.exports = d(require('get-style-property'))  : a.getSize = d(a.getStyleProperty)
}(window),
function (a, b) {
    function c(a, b) {
        return a[h](b)
    }
    function d(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function e(a, b) {
        d(a);
        for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++) if (c[e] === a) return !0;
        return !1
    }
    function f(a, b) {
        return d(a),
        c(a, b)
    }
    var g,
    h = function () {
        if (b.matchesSelector) return 'matchesSelector';
        for (var a = [
            'webkit',
            'moz',
            'ms',
            'o'
        ], c = 0, d = a.length; d > c; c++) {
            var e = a[c],
            f = e + 'MatchesSelector';
            if (b[f]) return f
        }
    }();
    if (h) {
        var i = document.createElement('div'),
        j = c(i, 'div');
        g = j ? c : f
    } else g = e;
    'function' == typeof define && define.amd ? define('matches-selector/matches-selector', [
    ], function () {
        return g
    })  : window.matchesSelector = g
}(this, Element.prototype),
function (a) {
    function b(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function c(a) {
        for (var b in a) return !1;
        return b = null,
        !0
    }
    function d(a) {
        return a.replace(/([A-Z])/g, function (a) {
            return '-' + a.toLowerCase()
        })
    }
    function e(a, e, f) {
        function h(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var i = f('transition'),
        j = f('transform'),
        k = i && j,
        l = !!f('perspective'),
        m = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'otransitionend',
            transition: 'transitionend'
        }
        [
            i
        ],
        n = [
            'transform',
            'transition',
            'transitionDuration',
            'transitionProperty'
        ],
        o = function () {
            for (var a = {
            }, b = 0, c = n.length; c > b; b++) {
                var d = n[b],
                e = f(d);
                e && e !== d && (a[d] = e)
            }
            return a
        }();
        b(h.prototype, a.prototype),
        h.prototype._create = function () {
            this._transn = {
                ingProperties: {
                },
                clean: {
                },
                onEnd: {
                }
            },
            this.css({
                position: 'absolute'
            })
        },
        h.prototype.handleEvent = function (a) {
            var b = 'on' + a.type;
            this[b] && this[b](a)
        },
        h.prototype.getSize = function () {
            this.size = e(this.element)
        },
        h.prototype.css = function (a) {
            var b = this.element.style;
            for (var c in a) {
                var d = o[c] || c;
                b[d] = a[c]
            }
        },
        h.prototype.getPosition = function () {
            var a = g(this.element),
            b = this.layout.options,
            c = b.isOriginLeft,
            d = b.isOriginTop,
            e = parseInt(a[c ? 'left' : 'right'], 10),
            f = parseInt(a[d ? 'top' : 'bottom'], 10);
            e = isNaN(e) ? 0 : e,
            f = isNaN(f) ? 0 : f;
            var h = this.layout.size;
            e -= c ? h.paddingLeft : h.paddingRight,
            f -= d ? h.paddingTop : h.paddingBottom,
            this.position.x = e,
            this.position.y = f
        },
        h.prototype.layoutPosition = function () {
            var a = this.layout.size,
            b = this.layout.options,
            c = {
            };
            b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + 'px', c.right = '')  : (c.right = this.position.x + a.paddingRight + 'px', c.left = ''),
            b.isOriginTop ? (c.top = this.position.y + a.paddingTop + 'px', c.bottom = '')  : (c.bottom = this.position.y + a.paddingBottom + 'px', c.top = ''),
            this.css(c),
            this.emitEvent('layout', [
                this
            ])
        };
        var p = l ? function (a, b) {
            return 'translate3d(' + a + 'px, ' + b + 'px, 0)'
        }
         : function (a, b) {
            return 'translate(' + a + 'px, ' + b + 'px)'
        };
        h.prototype._transitionTo = function (a, b) {
            this.getPosition();
            var c = this.position.x,
            d = this.position.y,
            e = parseInt(a, 10),
            f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
            i = b - d,
            j = {
            },
            k = this.layout.options;
            h = k.isOriginLeft ? h : - h,
            i = k.isOriginTop ? i : - i,
            j.transform = p(h, i),
            this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        },
        h.prototype.goTo = function (a, b) {
            this.setPosition(a, b),
            this.layoutPosition()
        },
        h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo,
        h.prototype.setPosition = function (a, b) {
            this.position.x = parseInt(a, 10),
            this.position.y = parseInt(b, 10)
        },
        h.prototype._nonTransition = function (a) {
            this.css(a.to),
            a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        },
        h.prototype._transition = function (a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0,
            a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to),
            this.css(a.to),
            this.isTransitioning = !0
        };
        var q = j && d(j) + ',opacity';
        h.prototype.enableTransition = function () {
            this.isTransitioning || (this.css({
                transitionProperty: q,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(m, this, !1))
        },
        h.prototype.transition = h.prototype[i ? '_transition' : '_nonTransition'],
        h.prototype.onwebkitTransitionEnd = function (a) {
            this.ontransitionend(a)
        },
        h.prototype.onotransitionend = function (a) {
            this.ontransitionend(a)
        };
        var r = {
            '-webkit-transform': 'transform',
            '-moz-transform': 'transform',
            '-o-transform': 'transform'
        };
        h.prototype.ontransitionend = function (a) {
            if (a.target === this.element) {
                var b = this._transn,
                d = r[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = '', delete b.clean[d]), d in b.onEnd) {
                    var e = b.onEnd[d];
                    e.call(this),
                    delete b.onEnd[d]
                }
                this.emitEvent('transitionEnd', [
                    this
                ])
            }
        },
        h.prototype.disableTransition = function () {
            this.removeTransitionStyles(),
            this.element.removeEventListener(m, this, !1),
            this.isTransitioning = !1
        },
        h.prototype._removeStyles = function (a) {
            var b = {
            };
            for (var c in a) b[c] = '';
            this.css(b)
        };
        var s = {
            transitionProperty: '',
            transitionDuration: ''
        };
        return h.prototype.removeTransitionStyles = function () {
            this.css(s)
        },
        h.prototype.removeElem = function () {
            this.element.parentNode.removeChild(this.element),
            this.emitEvent('remove', [
                this
            ])
        },
        h.prototype.remove = function () {
            if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.on('transitionEnd', function () {
                return a.removeElem(),
                !0
            }),
            this.hide()
        },
        h.prototype.reveal = function () {
            delete this.isHidden,
            this.css({
                display: ''
            });
            var a = this.layout.options;
            this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0
            })
        },
        h.prototype.hide = function () {
            this.isHidden = !0,
            this.css({
                display: ''
            });
            var a = this.layout.options;
            this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function () {
                        this.isHidden && this.css({
                            display: 'none'
                        })
                    }
                }
            })
        },
        h.prototype.destroy = function () {
            this.css({
                position: '',
                left: '',
                right: '',
                top: '',
                bottom: '',
                transition: '',
                transform: ''
            })
        },
        h
    }
    var f = a.getComputedStyle,
    g = f ? function (a) {
        return f(a, null)
    }
     : function (a) {
        return a.currentStyle
    };
    'function' == typeof define && define.amd ? define('outlayer/item', [
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'get-style-property/get-style-property'
    ], e)  : (a.Outlayer = {
    }, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty))
}(window),
function (a) {
    function b(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    function c(a) {
        return '[object Array]' === l.call(a)
    }
    function d(a) {
        var b = [
        ];
        if (c(a)) b = a;
         else if (a && 'number' == typeof a.length) for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
         else b.push(a);
        return b
    }
    function e(a, b) {
        var c = n(b, a);
        - 1 !== c && b.splice(c, 1)
    }
    function f(a) {
        return a.replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + '-' + c
        }).toLowerCase()
    }
    function g(c, g, l, n, o, p) {
        function q(a, c) {
            if ('string' == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void (i && i.error('Bad ' + this.constructor.namespace + ' element: ' + a));
            this.element = a,
            this.options = b({
            }, this.constructor.defaults),
            this.option(c);
            var d = ++r;
            this.element.outlayerGUID = d,
            s[d] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        }
        var r = 0,
        s = {
        };
        return q.namespace = 'outlayer',
        q.Item = p,
        q.defaults = {
            containerStyle: {
                position: 'relative'
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: '0.4s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            }
        },
        b(q.prototype, l.prototype),
        q.prototype.option = function (a) {
            b(this.options, a)
        },
        q.prototype._create = function () {
            this.reloadItems(),
            this.stamps = [
            ],
            this.stamp(this.options.stamp),
            b(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        },
        q.prototype.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        },
        q.prototype._itemize = function (a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [
            ], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                h = new c(g, this);
                d.push(h)
            }
            return d
        },
        q.prototype._filterFindItemElements = function (a) {
            a = d(a);
            for (var b = this.options.itemSelector, c = [
            ], e = 0, f = a.length; f > e; e++) {
                var g = a[e];
                if (m(g)) if (b) {
                    o(g, b) && c.push(g);
                    for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i])
                } else c.push(g)
            }
            return c
        },
        q.prototype.getItemElements = function () {
            for (var a = [
            ], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        },
        q.prototype.layout = function () {
            this._resetLayout(),
            this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a),
            this._isLayoutInited = !0
        },
        q.prototype._init = q.prototype.layout,
        q.prototype._resetLayout = function () {
            this.getSize()
        },
        q.prototype.getSize = function () {
            this.size = n(this.element)
        },
        q.prototype._getMeasurement = function (a, b) {
            var c,
            d = this.options[a];
            d ? ('string' == typeof d ? c = this.element.querySelector(d)  : m(d) && (c = d), this[a] = c ? n(c) [b] : d)  : this[a] = 0
        },
        q.prototype.layoutItems = function (a, b) {
            a = this._getItemsForLayout(a),
            this._layoutItems(a, b),
            this._postLayout()
        },
        q.prototype._getItemsForLayout = function (a) {
            for (var b = [
            ], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        },
        q.prototype._layoutItems = function (a, b) {
            function c() {
                d.emitEvent('layoutComplete', [
                    d,
                    a
                ])
            }
            var d = this;
            if (!a || !a.length) return void c();
            this._itemsOn(a, 'layout', c);
            for (var e = [
            ], f = 0, g = a.length; g > f; f++) {
                var h = a[f],
                i = this._getItemLayoutPosition(h);
                i.item = h,
                i.isInstant = b || h.isLayoutInstant,
                e.push(i)
            }
            this._processLayoutQueue(e)
        },
        q.prototype._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        },
        q.prototype._processLayoutQueue = function (a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        },
        q.prototype._positionItem = function (a, b, c, d) {
            d ? a.goTo(b, c)  : a.moveTo(b, c)
        },
        q.prototype._postLayout = function () {
            this.resizeContainer()
        },
        q.prototype.resizeContainer = function () {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        },
        q.prototype._getContainerSize = k,
        q.prototype._setContainerMeasure = function (a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
                a = Math.max(a, 0),
                this.element.style[b ? 'width' : 'height'] = a + 'px'
            }
        },
        q.prototype._itemsOn = function (a, b, c) {
            function d() {
                return e++,
                e === f && c.call(g),
                !0
            }
            for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                var j = a[h];
                j.on(b, d)
            }
        },
        q.prototype.ignore = function (a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        },
        q.prototype.unignore = function (a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        },
        q.prototype.stamp = function (a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        },
        q.prototype.unstamp = function (a) {
            if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                e(d, this.stamps),
                this.unignore(d)
            }
        },
        q.prototype._find = function (a) {
            return a ? ('string' == typeof a && (a = this.element.querySelectorAll(a)), a = d(a))  : void 0
        },
        q.prototype._manageStamps = function () {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        },
        q.prototype._getBoundingRect = function () {
            var a = this.element.getBoundingClientRect(),
            b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        },
        q.prototype._manageStamp = k,
        q.prototype._getElementOffset = function (a) {
            var b = a.getBoundingClientRect(),
            c = this._boundingRect,
            d = n(a),
            e = {
                left: b.left - c.left - d.marginLeft,
                top: b.top - c.top - d.marginTop,
                right: c.right - b.right - d.marginRight,
                bottom: c.bottom - b.bottom - d.marginBottom
            };
            return e
        },
        q.prototype.handleEvent = function (a) {
            var b = 'on' + a.type;
            this[b] && this[b](a)
        },
        q.prototype.bindResize = function () {
            this.isResizeBound || (c.bind(a, 'resize', this), this.isResizeBound = !0)
        },
        q.prototype.unbindResize = function () {
            this.isResizeBound && c.unbind(a, 'resize', this),
            this.isResizeBound = !1
        },
        q.prototype.onresize = function () {
            function a() {
                b.resize(),
                delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        },
        q.prototype.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        },
        q.prototype.needsResizeLayout = function () {
            var a = n(this.element),
            b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        },
        q.prototype.addItems = function (a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)),
            b
        },
        q.prototype.appended = function (a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        },
        q.prototype.prepended = function (a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(b, !0),
                this.reveal(b),
                this.layoutItems(c)
            }
        },
        q.prototype.reveal = function (a) {
            var b = a && a.length;
            if (b) for (var c = 0; b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        },
        q.prototype.hide = function (a) {
            var b = a && a.length;
            if (b) for (var c = 0; b > c; c++) {
                var d = a[c];
                d.hide()
            }
        },
        q.prototype.getItem = function (a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        },
        q.prototype.getItems = function (a) {
            if (a && a.length) {
                for (var b = [
                ], c = 0, d = a.length; d > c; c++) {
                    var e = a[c],
                    f = this.getItem(e);
                    f && b.push(f)
                }
                return b
            }
        },
        q.prototype.remove = function (a) {
            a = d(a);
            var b = this.getItems(a);
            if (b && b.length) {
                this._itemsOn(b, 'remove', function () {
                    this.emitEvent('removeComplete', [
                        this,
                        b
                    ])
                });
                for (var c = 0, f = b.length; f > c; c++) {
                    var g = b[c];
                    g.remove(),
                    e(g, this.items)
                }
            }
        },
        q.prototype.destroy = function () {
            var a = this.element.style;
            a.height = '',
            a.position = '',
            a.width = '';
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize(),
            delete this.element.outlayerGUID,
            j && j.removeData(this.element, this.constructor.namespace)
        },
        q.data = function (a) {
            var b = a && a.outlayerGUID;
            return b && s[b]
        },
        q.create = function (a, c) {
            function d() {
                q.apply(this, arguments)
            }
            return Object.create ? d.prototype = Object.create(q.prototype)  : b(d.prototype, q.prototype),
            d.prototype.constructor = d,
            d.defaults = b({
            }, q.defaults),
            b(d.defaults, c),
            d.prototype.settings = {
            },
            d.namespace = a,
            d.data = q.data,
            d.Item = function () {
                p.apply(this, arguments)
            },
            d.Item.prototype = new p,
            g(function () {
                for (var b = f(a), c = h.querySelectorAll('.js-' + b), e = 'data-' + b + '-options', g = 0, k = c.length; k > g; g++) {
                    var l,
                    m = c[g],
                    n = m.getAttribute(e);
                    try {
                        l = n && JSON.parse(n)
                    } catch (o) {
                        i && i.error('Error parsing ' + e + ' on ' + m.nodeName.toLowerCase() + (m.id ? '#' + m.id : '') + ': ' + o);
                        continue
                    }
                    var p = new d(m, l);
                    j && j.data(m, a, p)
                }
            }),
            j && j.bridget && j.bridget(a, d),
            d
        },
        q.Item = p,
        q
    }
    var h = a.document,
    i = a.console,
    j = a.jQuery,
    k = function () {
    },
    l = Object.prototype.toString,
    m = 'object' == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    }
     : function (a) {
        return a && 'object' == typeof a && 1 === a.nodeType && 'string' == typeof a.nodeName
    },
    n = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    }
     : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return - 1
    };
    'function' == typeof define && define.amd ? define('outlayer/outlayer', [
        'eventie/eventie',
        'doc-ready/doc-ready',
        'eventEmitter/EventEmitter',
        'get-size/get-size',
        'matches-selector/matches-selector',
        './item'
    ], g)  : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
}(window),
function (a) {
    function b(a, b) {
        var d = a.create('masonry');
        return d.prototype._resetLayout = function () {
            this.getSize(),
            this._getMeasurement('columnWidth', 'outerWidth'),
            this._getMeasurement('gutter', 'outerWidth'),
            this.measureColumns();
            var a = this.cols;
            for (this.colYs = [
            ]; a--; ) this.colYs.push(0);
            this.maxY = 0
        },
        d.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter,
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
            this.cols = Math.max(this.cols, 1)
        },
        d.prototype.getContainerWidth = function () {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
            c = b(a);
            this.containerWidth = c && c.innerWidth
        },
        d.prototype._getItemLayoutPosition = function (a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
            d = b && 1 > b ? 'round' : 'ceil',
            e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = {
                x: this.columnWidth * h,
                y: g
            }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        },
        d.prototype._getColGroup = function (a) {
            if (2 > a) return this.colYs;
            for (var b = [
            ], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        },
        d.prototype._manageStamp = function (a) {
            var c = b(a),
            d = this._getElementOffset(a),
            e = this.options.isOriginLeft ? d.left : d.right,
            f = e + c.outerWidth,
            g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1,
            h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        },
        d.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
            a
        },
        d.prototype._getContainerFitWidth = function () {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        },
        d.prototype.needsResizeLayout = function () {
            var a = this.containerWidth;
            return this.getContainerWidth(),
            a !== this.containerWidth
        },
        d
    }
    var c = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    }
     : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            if (e === b) return c
        }
        return - 1
    };
    'function' == typeof define && define.amd ? define(['outlayer/outlayer',
    'get-size/get-size'], b)  : a.Masonry = b(a.Outlayer, a.getSize)
}(window);
