(() => {
	"use strict";
	let t, e = chrome;

	function o(o) {
		t.set(o, (() => {
			e.runtime.lastError && (t = e.storage.local, t.set(o))
		}))
	}
	const c = ("object" == typeof browser && "object" == typeof browser.runtime && (e = browser), t = e.storage.local, "object" == typeof e.storage.sync && (t = e.storage.sync), e),
		i = {
			hide_element_logo_home: !1,
			hide_element_offline_hud: !1,
			hide_element_short_rec: !1,
			hide_element_top_bar: !1,
			hide_element_channel_leaderboard_header: !1,
			hide_element_left_sidebar: !1,
			hide_element_channel_panels: !1,
			hide_element_following: !1,
			hide_element_following_tab: !1,
			hide_element_browse_tab: !1,
			hide_element_notifs: !1,
			hide_element_loot: !1,
			hide_element_get_bits: !1,
			hide_element_whispers: !1,
			hide_element_avatar: !1,
			hide_element_sub_button: !1,
			hide_element_rec_channels: !1,
			hide_element_viewers_also_watch: !1,
			hide_element_full_chat: !1,
			hide_element_chat_header: !1,
			hide_element_channel_points: !1,
			hide_element_chat_footer: !1,
			hide_element_event_hud: !1,
			hide_element_tags: !1,
			hide_element_share_report: !1,
			hide_element_bg: !1,
			hide_element_about_section: !1,
			hide_element_carousel: !1,
			hide_element_unfollow: !1,
			hide_element_all_icons: !1,
			hide_element_main_icons: !1,
			hide_element_gift_alerts: !1,
			hide_element_neutral_nicknames: !1,
			hide_element_top_ellipsis: !1,
			hide_element_top_input: !1,
			hide_element_mid: !1,
			hide_element_extensions: !1,
			hide_element_live_status: !1,
			hide_element_live_indicator: !1,
			hide_element_clips_page: !1,
			hide_element_popup_notification: !1,
			hide_element_search_rec: !1,
			hide_element_image_avatar: !1,
			ext_off: !1
		};

	function r(t) {
		const e = t ? "-off" : "";
		c.action.setIcon({
			path: {
				16: `imgs/icon${e}-16.png`,
				32: `imgs/icon${e}-32.png`,
				48: `imgs/icon${e}-48.png`,
				128: `imgs/icon${e}-128.png`
			}
		})
	}
	c.runtime.onInstalled.addListener((({
		reason: t
	}) => {
		"install" === t && c.tabs.create({
			url: "index.html"
		})
	})),
		function (o, c = null, i = []) {
			t.get(c, (r => {
				e.runtime.lastError ? (t = e.storage.local, t.get(c, (t => {
					o(t, ...i)
				}))) : o(r, ...i)
			}))
		}((function (c) {
			const n = Object.keys(c).length;
			0 === n ? o(i) : function (t, e) {
				return e !== Object.keys(i).length || Object.keys(i).some((e => !Object.prototype.hasOwnProperty.call(t, e)))
			}(c, n) && (Object.keys(i).forEach((t => {
				Object.prototype.hasOwnProperty.call(c, t) && (i[t] = c[t])
			})), t.clear((() => {
				e.runtime.lastError && (t = e.storage.local, t.clear())
			})), o(i)), r(c.ext_off || i.ext_off)
		})), c.storage.onChanged.addListener((t => {
			Object.prototype.hasOwnProperty.call(t, "ext_off") && r(t.ext_off.newValue)
		}))
})();
