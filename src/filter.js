import Vue from "vue";

// make upperCase
// Vue.filter("touppercase", function(v) {
//     return v.toUpperCase();
// });

// make reverse
Vue.filter("reversing", function(v) {
    return v
        .split("")
        .reverse()
        .join("");
});

// shorten text
Vue.filter("shorten", function(value, textlength, suffix) {
    return value.substring(0, textlength) + suffix;
});
