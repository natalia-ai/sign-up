'use strict';
(function () {

window.onload = function () {
    var day = new Date,
        md = (new Date(day.getFullYear(), day.getMonth() + 2, 0, 0, 0, 0, 0)).getDate(),
        $month_name = "January Febrary March April May June July August September October November December".split(" ");

    function set_select(a, c, d, e) {
        var el = document.getElementsByName(a)[0];
        for (var b = el.options.length = 0; b < c; b++) {
            el.options[b] = new Option(a == 'month' ? $month_name[b] : b + d, b + d);
         }
        el.options[e] && (el.options[e].selected = !0)
    }
    set_select("day", md, 1, day.getDate() + 8);
    set_select("month", 12, 1, day.getMonth() + 1);
    set_select("year", 81, day.getFullYear()-80, 56);

    var year = document.getElementById('year');
    var month = document.getElementById("month");

    function check_date() {
        var a = year.value | 0,
            c = month.value | 0;
        md = (new Date(a, c, 0, 0, 0, 0, 0)).getDate();
        a = document.getElementById("day").selectedIndex;
        set_select("day", md, 1, a)
    };

    if (document.addEventListener) {
        year.addEventListener('change', check_date, false);
        month.addEventListener('change', check_date, false);

    } else {
        year.detachEvent('onchange', check_date);
        month.detachEvent('onchange', check_date);
    }

}
}) ()