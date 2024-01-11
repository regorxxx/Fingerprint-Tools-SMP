# Fingerprint-Tools-SMP
[![version][version_badge]][changelog]
[![CodeFactor][codefactor_badge]](https://www.codefactor.io/repository/github/regorxxx/Fingerprint-Tools-SMP/overview/main)
[![CodacyBadge][codacy_badge]](https://www.codacy.com/gh/regorxxx/Fingerprint-Tools-SMP/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=regorxxx/Fingerprint-Tools-SMP&amp;utm_campaign=Badge_Grade)
![GitHub](https://img.shields.io/github/license/regorxxx/Fingerprint-Tools-SMP)  
[Spider Monkey Panel](https://theqwertiest.github.io/foo_spider_monkey_panel) Script for [foobar2000](https://www.foobar2000.org), built within a button. [ChromaPrint](https://acoustid.org/chromaprint) and [fooID](https://hydrogenaud.io/index.php/topic,65185.0.html) tools to compare fingerprints, search on library or tagging.

![Auto-device](https://user-images.githubusercontent.com/83307074/125860905-3127eee3-5618-4487-a181-b8defbd6031f.gif)

## Features

* **[ChromaPrint](https://acoustid.org/chromaprint) support:** tagging (provided 'fpcalc') and full processing without binaries.
* **[fooID](https://hydrogenaud.io/index.php/topic,65185.0.html) support:** tagging (provided by the original plugin) and full processing without binaries.
* **Tagging:** tag your files with any of the supported fingerprint methods.
* **Read from files:** fingerprints may be read from library (provided by foobar2000 cached tags values) or directly from files (using ffprobe) to minimiz RAM usage.
* **Searching on library:** find similar tracks by fingerprint on your library.
* **Fingerprint comparison:** report the similarity between the selected tracks.
* **Fast processing:** fingerprint processing is entirely done withint he script files, without other dependencies, and heavily optimized to be as fast as possible.
* **Toolbar:** the button can be loaded within a toolbar or as an independent button. It's fully compatible with my other scripts which also use a toolbar (see at bottom), so the button can be simply merged with your already existing toolbar panel easily.

### Compatible with (toolbar)
 1. [Search-by-Distance-SMP](https://github.com/regorxxx/Search-by-Distance-SMP): creates intelligent "spotify-like" playlist using high-level data from tracks and computing their similarity using genres/styles.
 2. [Playlist-Tools-SMP](https://github.com/regorxxx/Playlist-Tools-SMP): Offers different pre-defefined examples for intelligent playlist creation.
 3. [ListenBrainz-SMP](https://github.com/regorxxx/ListenBrainz-SMP): Integrates Listenbrainz's feedback and recommendations.
 4. [Autobackup-SMP](https://github.com/regorxxx/Autobackup-SMP): Automatic saving and backup of configuration and other data in foobar2000.
 5. [Device-Priority-SMP](https://github.com/regorxxx/Device-Priority-SMP): Automatic output device selection.

![Auto-device2](https://user-images.githubusercontent.com/83307074/125861102-9253716b-ded6-41d5-83b5-84664edeb17f.gif)

## Installation
See [_TIPS and INSTALLATION (txt)](https://github.com/regorxxx/Fingerprint-Tools-SMP/blob/main/_TIPS%20and%20INSTALLATION.txt) and the [Wiki](https://github.com/regorxxx/Fingerprint-Tools-SMP/wiki/Installation).
Not properly following the installation instructions will result in scripts not working as intended. Please don't report errors before checking this.

[changelog]: CHANGELOG.md
[version_badge]: https://img.shields.io/github/release/regorxxx/Fingerprint-Tools-SMP.svg
[codacy_badge]: https://api.codacy.com/project/badge/Grade/e04be28637dd40d99fae7bd92f740677
[codefactor_badge]: https://www.codefactor.io/repository/github/regorxxx/Fingerprint-Tools-SMP/badge/main
