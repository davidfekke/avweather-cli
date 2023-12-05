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
$ avwx (--version)
avweather-cli/0.5.8 darwin-arm64 node-v20.10.0
$ avwx --help [COMMAND]
USAGE
  $ avwx COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`avwx help [COMMANDS]`](#avwx-help-commands)
* [`avwx metar [ICAOID]`](#avwx-metar-icaoid)
* [`avwx plugins`](#avwx-plugins)
* [`avwx plugins:install PLUGIN...`](#avwx-pluginsinstall-plugin)
* [`avwx plugins:inspect PLUGIN...`](#avwx-pluginsinspect-plugin)
* [`avwx plugins:install PLUGIN...`](#avwx-pluginsinstall-plugin-1)
* [`avwx plugins:link PLUGIN`](#avwx-pluginslink-plugin)
* [`avwx plugins:uninstall PLUGIN...`](#avwx-pluginsuninstall-plugin)
* [`avwx plugins reset`](#avwx-plugins-reset)
* [`avwx plugins:uninstall PLUGIN...`](#avwx-pluginsuninstall-plugin-1)
* [`avwx plugins:uninstall PLUGIN...`](#avwx-pluginsuninstall-plugin-2)
* [`avwx plugins update`](#avwx-plugins-update)
* [`avwx taf [ICAOID]`](#avwx-taf-icaoid)

## `avwx help [COMMANDS]`

Display help for avwx.

```
USAGE
  $ avwx help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for avwx.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `avwx metar [ICAOID]`

describe the command here

```
USAGE
  $ avwx metar [ICAOID] [-f]

ARGUMENTS
  ICAOID  Identifier for reporting station

FLAGS
  -f, --raw  Raw Report

DESCRIPTION
  describe the command here

EXAMPLES
  $ avwx metar

FLAG DESCRIPTIONS
  -f, --raw  Raw Report

    Just show the raw metar report.
```

_See code: [src/commands/metar.ts](https://github.com/davidfekke/avweather-cli/blob/v0.5.8/src/commands/metar.ts)_

## `avwx plugins`

List installed plugins.

```
USAGE
  $ avwx plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ avwx plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/index.ts)_

## `avwx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ avwx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ avwx plugins add

EXAMPLES
  $ avwx plugins add myplugin 

  $ avwx plugins add https://github.com/someuser/someplugin

  $ avwx plugins add someuser/someplugin
```

## `avwx plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ avwx plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ avwx plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/inspect.ts)_

## `avwx plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ avwx plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ avwx plugins add

EXAMPLES
  $ avwx plugins install myplugin 

  $ avwx plugins install https://github.com/someuser/someplugin

  $ avwx plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/install.ts)_

## `avwx plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ avwx plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ avwx plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/link.ts)_

## `avwx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avwx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avwx plugins unlink
  $ avwx plugins remove

EXAMPLES
  $ avwx plugins remove myplugin
```

## `avwx plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ avwx plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/reset.ts)_

## `avwx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avwx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avwx plugins unlink
  $ avwx plugins remove

EXAMPLES
  $ avwx plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/uninstall.ts)_

## `avwx plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ avwx plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ avwx plugins unlink
  $ avwx plugins remove

EXAMPLES
  $ avwx plugins unlink myplugin
```

## `avwx plugins update`

Update installed plugins.

```
USAGE
  $ avwx plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.7/src/commands/plugins/update.ts)_

## `avwx taf [ICAOID]`

Get terminal area forecasts

```
USAGE
  $ avwx taf [ICAOID] [-f]

ARGUMENTS
  ICAOID  Identifier for reporting station

FLAGS
  -f, --raw  Raw Report

DESCRIPTION
  Get terminal area forecasts

EXAMPLES
  $ avwx taf

FLAG DESCRIPTIONS
  -f, --raw  Raw Report

    Just show the raw TAF report.
```

_See code: [src/commands/taf.ts](https://github.com/davidfekke/avweather-cli/blob/v0.5.8/src/commands/taf.ts)_
<!-- commandsstop -->
