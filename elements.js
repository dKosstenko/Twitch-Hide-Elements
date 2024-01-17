(() => {
	"use strict";
	(() => {
		let t, e = chrome;

		function o(o, c = null, n = []) {
			t.get(c, (r => {
				e.runtime.lastError ? (t = e.storage.local, t.get(c, (t => {
					o(t, ...n)
				}))) : o(r, ...n)
			}))
		}
		const c = ("object" == typeof browser && "object" == typeof browser.runtime && (e = browser), t = e.storage.local, "object" == typeof e.storage.sync && (t = e.storage.sync), e),
			n = document.documentElement;

		function r(t) {
			Object.keys(t).forEach((e => {
				-1 !== e.indexOf("hide") && n.setAttribute(e, t[e])
			}))
		}

		function i(t) {
			!0 !== t.ext_off && r(t),
				function () {
					const t = document.createElement("script");
					t.src = c.runtime.getURL("carousel_pause.js"), t.id = "carousel_pause", n.appendChild(t)
				}()
		}

		function s(t) {
			Object.keys(t).forEach((t => {
				-1 !== t.indexOf("hide") && n.removeAttribute(t)
			}))
		}
		o(i), c.storage.onChanged.addListener((t => {
			Object.prototype.hasOwnProperty.call(t, "ext_off") ? t.ext_off.newValue ? o(s) : o(r) : Object.keys(t).forEach((e => {
				-1 !== e.indexOf("hide") && n.setAttribute(e, t[e].newValue)
			}))
		}))
	})()
})();
