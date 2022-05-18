# Mock for Copado command

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
