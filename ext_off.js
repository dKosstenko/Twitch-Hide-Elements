(() => {
	"use strict";
	(() => {
		let t, e = chrome;

		function n(n, o = null, c = []) {
			t.get(o, (s => {
				e.runtime.lastError ? (t = e.storage.local, t.get(o, (t => {
					n(t, ...c)
				}))) : n(s, ...c)
			}))
		}

		function o(n) {
			t.set(n, (() => {
				e.runtime.lastError && (t = e.storage.local, t.set(n))
			}))
		}
		"object" == typeof browser && "object" == typeof browser.runtime && (e = browser), t = e.storage.local, "object" == typeof e.storage.sync && (t = e.storage.sync);
		const c = document.documentElement;

		function s(t) {
			Object.keys(t).forEach((e => {
				document.getElementById(e).checked = t[e], "ext_off" === e && c.setAttribute(e, t[e])
			}))
		}

		function r(t) {
			const e = {};
			Object.keys(t).forEach((n => {
				const o = document.getElementById(n).checked;
				t[n] !== o && (e[n] = o)
			})), o(e)
		}

		function d() {
			n(r)
		}
		document.addEventListener("DOMContentLoaded", (function() {
			n(s)
		}));
		const f = document.getElementsByClassName("check");
		for (let t = 0; t < f.length; t += 1) f[t].addEventListener("change", d);
		document.getElementById("ext_off").addEventListener("change", (function() {
			const t = this.checked;
			c.setAttribute("ext_off", t), o({
				ext_off: t
			})
		}))
	})()
})();