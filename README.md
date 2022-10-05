# Mock for Copado command

[![view on npm](https://badgen.net/github/release/JoernBerkefeld/copado-mock)](https://www.npmjs.org/package/copado-mock)
[![view on npm](https://badgen.net/npm/node/copado-mock)](https://www.npmjs.org/package/copado-mock)
[![license](https://badgen.net/npm/license/copado-mock)](https://www.npmjs.org/package/copado-mock)
[![npm module downloads](https://badgen.net/npm/dt/copado-mock)](https://www.npmjs.org/package/copado-mock)
[![GitHub closed issues](https://badgen.net/github/closed-issues/JoernBerkefeld/copado-mock)](https://github.com/JoernBerkefeld/copado-mock/issues?q=is%3Aissue+is%3Aclosed)
[![GitHub releases](https://badgen.net/github/releases/JoernBerkefeld/copado-mock)](https://github.com/JoernBerkefeld/copado-mock/releases)

This very simple mock-version of `copado` seeks to allow developers local testing without the need of uploading their code to Copado functions online.

Currently the functionality is limited to checking if parameters are correct without actually implementing anything but a `console.log` for each correct command.

## Install

```bash
npm install -g copado-mock
```

## Supported options

- `--progress "your message"` (alias: `-p`)
- `--error-message "your message" -p "Error"` (aliases: `-e`, `--error`) - note that adding `-p` is required!
- `--result-data "your message" -p "Done"` (alias: `-r`) - note that adding `-p` is required!
- `--uploadfile "temp/file/path.js" --name "somefile.js" --parentid` (alias: `-u`); adding `--name` seems to be optional
  - `--name "name of file.js"`
  - `--parentid "salesforce id to which a file shall be uploaded to"`
- `--downloadfiles "temp/file/path.js"`
  - `--parentid "salesforce id to which a file shall be uploaded to"`

## Examples

```bash
copado --error-message "help, we are sinking!" -p "Error"
copado --uploadfile "temp/file/path.js" --parentid "0015500000WOHciAAH" --name "best-file-ever.js"
```
