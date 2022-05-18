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

- `--error-message "your message"` or `-e "your message"`
- `--result-message "your message"` or `-r "your message"`
- `--progress "your message"` or `-p "your message"`
- `--uploadfile "temp/file/path.js"` or `-u "temp/file/path.js"`
- `--parentid "salesforce id to which a file shall be uploaded to"`
- `--downloadfiles "temp/file/path.js"`

## Examples

```bash
copado --error-message "help, we are sinking!"
copado --uploadfile-message "temp/file/path.js" --parentid 0015500000WOHciAAH
```
