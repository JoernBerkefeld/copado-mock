#!/usr/bin/env node
'use strict';

/**
 * CLI entry for SFMC DevTools
 */

const yargs = require('yargs');
const copadoOptions = {
    'error-message': {
        alias: 'e',
        describe: 'print an error message',
        type: 'string',
        demand: false,
        nargs: 1,
    },
    'result-message': {
        alias: 'r',
        describe: 'print an error message',
        type: 'string',
        demand: false,
        nargs: 1,
    },
    progress: {
        alias: 'p',
        describe: 'print a progress message',
        type: 'string',
        demand: false,
        nargs: 1,
    },
    uploadfile: {
        alias: 'u',
        describe: 'upload a file to Salesforce',
        type: 'string',
        demand: false,
        nargs: 1,
    },
    parentid: {
        describe: 'define the parent record for files uploaded to Salesforce in same command',
        type: 'string',
        demand: false,
        nargs: 1,
    },
    downloadfiles: {
        describe: 'relative path to file on virtual server',
        type: 'string',
        demand: false,
        nargs: 1,
    },
};

yargs
    .scriptName('copado')
    .usage('$0 <command> [options]')
    .command({
        command: '$0',
        desc: 'base command',
        handler: (argv) => {
            const params = [];
            const validOptions = Object.keys(copadoOptions);
            for (const item in argv) {
                if (validOptions.includes(item)) {
                    params.push(`--${item} ${argv[item]}`);
                }
            }
            if (params.length) {
                console.log('MOCK-RUN: ⚡ ' + argv['$0'] + ' ' + params.join(' '));
            } else {
                console.log(
                    `${argv['$0']} requires a valid parameter: \n --${validOptions.join('\n --')}`
                );
            }
        },
    })
    .options(copadoOptions)
    .strict()
    .recommendCommands()
    .wrap(yargs.terminalWidth())
    .epilog('Copyright 2022. Jörn Berkefeld.')
    .help().argv;
