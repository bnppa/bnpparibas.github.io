/*! Categorizr.js: Device Detection Scripts | https://github.com/Skookum/categorizr.js/blob/master/license.md */
(function (name, context, definition) {
    typeof module != 'undefined' ? module.exports = definition(name, context)  : typeof define == 'function' && typeof define.amd == 'object' ? define(definition)  : context[name] = definition(name, context)
}) ('categorizr', this, function (name, context) {
    function _setDeviceBooleans() {
        var i = deviceTypes.length;
        while (i--) categorizr['is' + deviceTypes[i]] = is(deviceTypes[i].toLowerCase()),
        is$ && (context.$['is' + deviceTypes[i]] = is(deviceTypes[i].toLowerCase()))
    }
    function _setClassName() {
        isBrowser && (docElement.className = docElement.className.replace(/(^|\s)desktop|tablet|tv|mobile(\s|$)/, '$1$2') + (' ' + device))
    }
    function _update() {
        _setDeviceBooleans(),
        _setClassName(),
        eventEmitter && context.$(context).trigger('deviceChange', [
            {
                type: device
            }
        ])
    }
    var key,
    isBrowser = context != null && context == context.window,
    isNode = !isBrowser,
    is$ = isBrowser && context.$,
    eventEmitter = function () {
        var e;
        return is$ && (e = context.$('').trigger),
        e
    }(),
    docElement = isNode ? null : document.documentElement,
    deviceTypes = 'Tv Desktop Tablet Mobile'.split(' '),
    test = function (ua) {
        return ua.match(/GoogleTV|SmartTV|Internet.TV|NetCast|NETTV|AppleTV|boxee|Kylo|Roku|DLNADOC|CE\-HTML/i) ? 'tv' : ua.match(/Xbox|PLAYSTATION.3|Wii/i) ? 'tv' : ua.match(/iPad/i) || ua.match(/tablet/i) && !ua.match(/RX-34/i) || ua.match(/FOLIO/i) ? 'tablet' : ua.match(/Linux/i) && ua.match(/Android/i) && !ua.match(/Fennec|mobi|HTC.Magic|HTCX06HT|Nexus.One|SC-02B|fone.945/i) ? 'tablet' : ua.match(/Kindle/i) || ua.match(/Mac.OS/i) && ua.match(/Silk/i) ? 'tablet' : ua.match(/GT-P10|SC-01C|SHW-M180S|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC(.Flyer|\_Flyer)|Sprint.ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos.S7|Dell.Streak.7|Advent.Vega|A101IT|A70BHT|MID7015|Next2|nook/i) || ua.match(/MB511/i) && ua.match(/RUTEM/i) ? 'tablet' : ua.match(/BOLT|Fennec|Iris|Maemo|Minimo|Mobi|mowser|NetFront|Novarra|Prism|RX-34|Skyfire|Tear|XV6875|XV6975|Google.Wireless.Transcoder/i) ? 'mobile' : ua.match(/Opera/i) && ua.match(/Windows.NT.5/i) && ua.match(/HTC|Xda|Mini|Vario|SAMSUNG\-GT\-i8000|SAMSUNG\-SGH\-i9/i) ? 'mobile' : ua.match(/Windows.(NT|XP|ME|9)/) && !ua.match(/Phone/i) || ua.match(/Win(9|.9|NT)/i) ? 'desktop' : ua.match(/Macintosh|PowerPC/i) && !ua.match(/Silk/i) ? 'desktop' : ua.match(/Linux/i) && ua.match(/X11/i) ? 'desktop' : ua.match(/Solaris|SunOS|BSD/i) ? 'desktop' : ua.match(/Bot|Crawler|Spider|Yahoo|ia_archiver|Covario-IDS|findlinks|DataparkSearch|larbin|Mediapartners-Google|NG-Search|Snappy|Teoma|Jeeves|TinEye/i) && !ua.match(/Mobile/i) ? 'desktop' : 'mobile'
    },
    device = test(context.navigator ? context.navigator.userAgent : context.request ? context.request.headers['user-agent'] : 'No User-Agent Provided'),
    is = function (type) {
        return device === type
    },
    categorizr = function () {
        var args = [
        ].slice.call(arguments, 0);
        return args.length === 2 && device === args[0] ? (device = args[1], _update())  : args.length === 1 && typeof args[0] == 'string' && (device = args[0], _update()),
        device
    };
    categorizr.is = is,
    categorizr.test = test,
    _update();
    if (is$) {
        for (key in categorizr) Object.hasOwnProperty.call(categorizr, key) && (context.$[key == 'test' ? 'testUserAgent' : key == 'is' ? 'isDeviceType' : key] = categorizr[key]);
        context.$.categorizr = categorizr
    }
    return categorizr
}),
(function (){
  ('detectMob', this, function () {
      detectMob = function () {
      	alert("o");
          detectMob = "je suis detect mob";
      };
      
      return detectMob;
  })
});