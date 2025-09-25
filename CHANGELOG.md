# Changelog

## [Table of Contents]
- [Unreleased](#unreleased)
- [2.0.0](#200---2025-09-20)
- [1.4.0](#140---2024-10-09)
- [1.3.1](#131---2024-08-13)
- [1.3.0](#130---2024-07-30)
- [1.2.0](#120---2024-07-24)
- [1.1.0](#110---2024-03-21)
- [1.0.0](#100---2024-02-29)

## [Unreleased][]
### Added
### Changed
### Removed
- Installation: fonts are no longer bundled at '_resources' folder, but found at: https://github.com/regorxxx/foobar2000-assets/tree/main/Fonts
### Fixed
- Toolbar: fix missing preset names for Music Map scripts on new installs.
- Auto-update: fix error including a file when enabling auto-updates if it was previously disabled.

## [2.0.0] - 2025-09-20
### Added
- UI: toolbar tooltip now shows 'Shift + Win + R. Click' shortcut to open SMP/JSpliter panel menu (which works globally on any script and panel, at any position).
- UI: exposed color settings via window.NotifyOthers() method for themes/multi-panel support. You may pass a color scheme -size 6 recommended- (output from GetColourScheme()) at 'Colors: set color scheme' (applies to all compatible panels) or 'Toolbar: set color scheme' (applies only to this script), which will set appropriate colors following panel's color logic; alternatively you may set direct color settings at 'Toolbar: set colors' which needs an array of 5 colors or an object {toolbar, text, button, hover, active}. Panel has also independent settings to listen to colors from other panels (but not for sending colors as a color-server to others). See [this](https://github.com/regorxxx/Not-A-Waveform-Seekbar-SMP/issues/4) and [this](https://hydrogenaudio.org/index.php/topic,120980.msg1069107.html#msg1069107).
- Readmes: Ctrl + L. Click on any entry within 'Add button' submenu on toolbar now opens directly their associated readme (without actually adding the button).
- Installation: new panel menu, accessed through 'Ctrl + Win + R. Click' (which works globally on any script and panel, at any position), used to export/import panel settings and any other associated data. These entries may be used to fully backup the panel data, help when moving between different JS components (JSplitter <-> SMP) or even foobar2000 installations,, without needing to manually backup the panel properties or other external files (like .json, etc.).
### Changed
- UI: changed button name to 'Fingerprinting'.
- Installation: added popup warnings when scripts are installed outside foobar2000 profile folder. These checks can be tweaked at globSettings.json.
- Installation: script may now be installed at any path within the foobar profile folder, no longer limited to '[FOOBAR PROFILE FOLDER]\scripts\SMP\xxx-scripts\' folder. Obviously it may still be installed at such place, which may be preferred if updating an older version.
- Installation: multiple improvements to path handling for portable and non-portable installations. By default scripts will always try to use only relative paths to the profile folder, so scripts will work without any change when exporting the profile to any other installation. This change obviously doesn't apply to already existing installations unless restoring defaults.
- UI: unified script updates settings across all my scripts, look for 'Updates' submenu.
- UI: show shortcuts on tooltip setting moved to global setting for the toolbar.
- Helpers: updated helpers.
- Helpers: general code cleanup on menus internal code. Please report any bug on extra separators or menu entries not working as expected.
### Removed
### Fixed
- SMP Dynamic menu: fixed multiple errors on dynamic menus (un)registering.
- UI: '&' being displayed as '_' on tooltips.
- UI: multiple workarounds for rounded rectangles not being painted properly or producing crashes (SMP limitation).
- UI: workaround for DPI checking under multiple OSes, specially for Wine (Unix).
- Fixed some misspelled terms on UI and variables (which also lead to some minor bugs).

## [1.4.0] - 2024-10-09
### Added
### Changed
- [JSplitter (SMP)](https://foobar2000.ru/forum/viewtopic.php?t=6378&start=360) support and ES2021 compatibility.
- Helpers: in case saving a file throws an error due to long paths (+255 chars) a warning popup will be shown.
- Helpers: updated helpers.
### Removed
### Fixed

## [1.3.1] - 2024-08-13
### Added
### Changed
- Helpers: updated helpers.
### Removed
### Fixed

## [1.3.0] - 2024-07-30
### Added
### Changed
- Helpers: updated helpers.
### Removed
### Fixed

## [1.2.0] - 2024-07-24
### Added
- Readmes: added readme for global settings found at 'foobar2000\js_data\presets\global' .json files.
- Configuration: expanded user configurable file at '[FOOBAR PROFILE FOLDER]\js_data\presets\global\globSettings.json' with a new setting for console logging to file. Disabled by default. Now this is a change from the previous behavior, where console was always logged to 'console.log' file at the [FOOBAR PROFILE FOLDER]. It can now be switched, but since it's probably not useful for most users is disabled by default.
### Changed
- Helpers: json button files are now saved with Windows EOL for compatibility improvements with Windows text editors.
- Helpers: updated helpers.
### Removed
### Fixed
- Configuration: .json files at 'foobar2000\js_data\presets\global' not being saved with the calculated properties based on user values from other files.

## [1.1.0] - 2024-03-21
### Added
- Configuration: expanded user configurable file at '[FOOBAR PROFILE FOLDER]\js_data\presets\global\globSettings.json' with a new setting for panel repaint debugging purpose. Disabled by default.
### Changed
- UI: Improved panel repaint routines to minimize resources usage.
- Helpers: updated helpers.
### Removed
### Fixed

## [1.0.0] - 2024-02-29
### Added
- First release.
### Changed
### Removed
### Fixed

[Unreleased]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/2b58c28...v1.0.0