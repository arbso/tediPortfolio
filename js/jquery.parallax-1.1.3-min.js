(function (a) {
    var b = a(window);
    var c = b.height();
    b.resize(function () {
        c = b.height();
    });
    a.fn.parallax = function (e, d, g) {
        var i = a(this);
        var j;
        var h;
        var f = 0;
        function k() {
            i.each(function () {
                h = i.offset().top;
            });
            if (g) {
                j = function (m) {
                    return m.outerHeight(true);
                };
            } else {
                j = function (m) {
                    return m.height();
                };
            }
            if (arguments.length < 1 || e === null) {
                e = "50%";
            }
            if (arguments.length < 2 || d === null) {
                d = 0.5;
            }
            if (arguments.length < 3 || g === null) {
                g = true;
            }
            var l = b.scrollTop();
            i.each(function () {
                var n = a(this);
                var o = n.offset().top;
                var m = j(n);
                if (o + m < l || o > l + c) {
                    return;
                }
                i.css("backgroundPosition", e + " " + Math.round((h - l) * d) + "px");
            });
        }
        b.bind("scroll", k).resize(k);
        k();
    };
})(jQuery);
