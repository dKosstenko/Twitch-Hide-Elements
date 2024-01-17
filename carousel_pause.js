(() => {
	const t = document.documentElement;

	function e(t) {
		"playing" === t.getAttribute("data-a-player-state") && t.click()
	}

	function n(t) {
		const n = t.querySelector('div[data-a-target="featured-item"] button[data-a-target="player-play-pause-button"]');
		return !!n && (e(n), new MutationObserver((function(t) {
			for (let a = 0; a < t.length; a += 1) "data-a-player-state" === t[a].attributeName && (e(n), this.disconnect())
		})).observe(n, {
			attributes: !0
		}), !0)
	}
	window.addEventListener("load", (function() {
		"true" === t.getAttribute("hide_element_carousel") && function() {
			const t = document.getElementsByClassName("front-page-carousel")[0];
			t && (n(t) || new MutationObserver((function() {
				n(t) && this.disconnect()
			})).observe(t, {
				childList: !0,
				subtree: !0
			}))
		}()
	}))
})();