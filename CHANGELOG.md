# Changelog

## [Table of Contents]
- [Unreleased](#unreleased)
- [1.4.0](#140---2024-10-09)
- [1.3.1](#131---2024-08-13)
- [1.3.0](#130---2024-07-30)
- [1.2.0](#120---2024-07-24)
- [1.1.0](#110---2024-03-21)
- [1.0.0](#100---2024-02-29)

## [Unreleased][]
### Added
- UI: toolbar tooltip now shows 'Shift + Win + R. Click' shortcut to open SMP/JSpliter panel menu (which works globally on any script and panel, at any position).
- Readmes: Ctrl + L. Click on any entry within 'Add button' submenu on toolbar now opens directly their associated readme (without actually adding the button).
### Changed
- Installation: script may now be installed at any path within the foobar profile folder, no longer limited to '[FOOBAR PROFILE FOLDER]\scripts\SMP\xxx-scripts\' folder. Obviously it may still be installed at such place, which may be preferred if updating an older version.
- Installation: multiple improvements to path handling for portable and non-portable installations. By default scripts will always try to use only relative paths to the profile folder, so scripts will work without any change when exporting the profile to any other installation. This change obviously doesn't apply to already existing installations unless restoring defaults.
- Helpers: updated helpers.
- Helpers: general code cleanup on menus internal code. Please report any bug on extra separators or menu entries not working as expected.
### Removed
### Fixed
- SMP Dynamic menu: fixed multiple errors on dynamic menus (un)registering.
- UI: '&' being displayed as '_' on tooltips.

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

[Unreleased]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.4.0...HEAD
[1.4.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/regorxxx/Fingerprint-Tools-SMP/compare/2b58c28...v1.0.0