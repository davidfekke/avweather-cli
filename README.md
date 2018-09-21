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
avweather-cli/0.0.1 darwin-x64 node-v10.11.0
$ avwx --help [COMMAND]
USAGE
  $ avwx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avwx metar`](#avwx-metar)
* [`avwx taf`](#avwx-taf)
* [`avwx help [COMMAND]`](#avwx-help-command)

## `avwx metar`

Get the METAR report for your airport

```
USAGE
  $ avwx metar

OPTIONS
  -a, --airport=icao  airport for weather

DESCRIPTION
  ...
  This will return the latest surface observation for the airport you specified.
```

## `avwx taf`

Get the terminal area forcast report for your airport

```
USAGE
  $ avwx taf

OPTIONS
  -a, --airport=icao  airport for weather

DESCRIPTION
  ...
  This will the terminal area forcast for the airport you specified.
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
