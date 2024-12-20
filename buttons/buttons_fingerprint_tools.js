﻿'use strict';
//09/12/24

/*
	Fingerprint tag (Chromaprint)
	----------------
	Save raw fingerprint.
 */

include('..\\helpers\\helpers_xxx.js');
/* global globFonts:readable, MK_SHIFT:readable, globTags:readable , MK_CONTROL:readable */
include('..\\helpers\\buttons_xxx.js');
/* global buttonsBar:readable, addButton:readable, ThemedButton:readable */
include('..\\helpers\\helpers_xxx_prototypes.js');
/* global isBoolean:readable, isString:readable, isInt:readable, isBoolean:readable,  */
include('..\\helpers\\helpers_xxx_UI.js');
/* global _gdiFont:readable, _gr:readable, _scale:readable, chars:readable */
include('..\\helpers\\helpers_xxx_properties.js');
/* global setProperties:readable, getPropertiesPairs:readable */
include('..\\main\\main_menu\\main_menu_custom.js'); // Dynamic SMP menu
/* global bindDynamicMenus:readable */
include('..\\helpers\\helpers_xxx_tags.js');
include('..\\main\\fingerprint\\chromaprint-utils-js_fingerprint.js');
include('..\\main\\fingerprint\\fooid-utils-js_fingerprint.js');
include('helpers\\buttons_fingerprint_tools_menu.js');
/* global createFpMenuLeft:readable */
var prefix = 'fp_0'; // NOSONAR[global]
var version = '1.4.0'; // NOSONAR[global]

try { window.DefineScript('Fingerprint Tools', { author: 'regorxxx', version, features: { drag_n_drop: false } }); } catch (e) { /* May be loaded along other buttons */ }

var newButtonsProperties = { // NOSONAR[global]
	fpTagC: ['Chromaprint Fingerprint tag', globTags.acoustidFP, { func: isString }, globTags.acoustidFP],
	bMergeC: ['Merge Chromaprint values sep by \', \' into one', true, { func: isBoolean }, true],
	thresholdC: ['Chromaprint minimum score', 85, { greater: 0, lowerEq: 100, func: isInt }, 85],
	fpTagF: ['FooID Fingerprint tag', globTags.fooidFP, { func: isString }, globTags.fooidFP],
	thresholdF: ['FooID minimum score', 85, { greater: 0, lowerEq: 100, func: isInt }, 85],
	playlistName: ['Playlist name', 'Search...', { func: isString }, 'Search...'],
	databaseHash: ['Chromaprint database hash', -1],
	bChromaprint: ['Enable Chromaprint tools', true, { func: isBoolean }, true],
	bFooId: ['Enable FooId tools', true, { func: isBoolean }, true],
	bReadFiles: ['Read directly from files', false, { func: isBoolean }, false],
	iMaxSelection: ['Allow only X items', 30, { func: isInt }, 30],
	bDynamicMenus: ['Menus at  \'File\\Spider Monkey Panel\\...\'', false, { func: isBoolean }, false],
	bIconMode: ['Icon-only mode', false, { func: isBoolean }, false]
};
setProperties(newButtonsProperties, prefix, 0); //This sets all the panel properties at once
{
	const ppt = getPropertiesPairs(newButtonsProperties, prefix, 0);
	buttonsBar.list.push(ppt);
	// Create dynamic menus
	if (ppt.bDynamicMenus[1]) {
		bindDynamicMenus({
			menu: createFpMenuLeft.bind({ buttonsProperties: ppt, prefix: '' }),
			parentName: 'Fingerprint Tools',
		});
	}
}

addButton({
	'Fingerprint Tools': new ThemedButton({ x: 0, y: 0, w: _gr.CalcTextWidth('Fingerprint Tools', _gdiFont(globFonts.button.name, globFonts.button.size * buttonsBar.config.scale)) + 25 * _scale(1, false) / _scale(buttonsBar.config.scale), h: 22 }, 'Fingerprint Tools', function (mask) {
		let bDone;
		if (mask === MK_SHIFT) { // Enable/disable menus
			// menuAlt.btn_up(this.currX, this.currY + this.currH);
		} else if (mask === MK_CONTROL) { // Simulate menus to get names
			// menu.btn_up(this.currX, this.currY + this.currH, void(0), void(0), false, _setClipboardData);
		} else { // Standard use
			bDone = createFpMenuLeft.bind(this)().btn_up(this.currX, this.currY + this.currH);
		}
		return bDone;
	}, null, void (0), (parent) => {
		parent.selItems = plman.GetPlaylistSelectedItems(plman.ActivePlaylist);
		let info = 'Fingerprinting tools:';
		info += '\nTracks:\t' + parent.selItems.Count + ' item(s)';
		return info;
	}, prefix, newButtonsProperties, chars.wrench, void (0), void (0), void (0), void (0), { scriptName: 'Fingerprint-Tools-SMP', version }),
});