avweather-cli
=============

Terminal application for getting aviation/pilot weather

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/avweather-cli.svg)](https://npmjs.org/package/avweather-cli)
[![Downloads/week](https://img.shields.io/npm/dw/avweather-cli.svg)](https://npmjs.org/package/avweather-cli)
[![License](https://img.shields.io/npm/l/avweather-cli.svg)](https://github.com/davidfekke/avweather-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g avweather-cli
$ avwx COMMAND
running command...
$ avwx (-v|--version|version)
avweather-cli/0.4.3 darwin-x64 node-v16.13.1
$ avwx --help [COMMAND]
USAGE
  $ avwx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avwx help [COMMAND]`](#avwx-help-command)
* [`avwx metar [ICAOIDENTIFIER]`](#avwx-metar-icaoidentifier)
* [`avwx taf [ICAOIDENTIFIER]`](#avwx-taf-icaoidentifier)

## `avwx help [COMMAND]`

display help for avwx

```
USAGE
  $ avwx help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `avwx metar [ICAOIDENTIFIER]`

This command is used to display current METAR information for your airport

```
USAGE
  $ avwx metar [ICAOIDENTIFIER]

OPTIONS
  -a, --airport=airport  name to print
  -r, --raw              Raw text for the METAR

DESCRIPTION
  ...
  Simply use the ICAO identifier for your airport.
```

_See code: [src/commands/metar.js](https://github.com/davidfekke/avweather-cli/blob/v0.4.3/src/commands/metar.js)_

## `avwx taf [ICAOIDENTIFIER]`

This command is used to display current TAF information for your airport

```
USAGE
  $ avwx taf [ICAOIDENTIFIER]

OPTIONS
  -a, --airport=airport  name to print
  -r, --raw              Print raw text of TAF

DESCRIPTION
  ...
  Simply use the ICAO identifier for your airport.
```

_See code: [src/commands/taf.js](https://github.com/davidfekke/avweather-cli/blob/v0.4.3/src/commands/taf.js)_
<!-- commandsstop -->
