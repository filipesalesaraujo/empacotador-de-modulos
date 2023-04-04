#!/usr/bin/env node
const shell = require('shelljs');
shell.exec('git clone https://github.com/filipesalesaraujo/webpack.git');
shell.cd('webpack');
shell.mv('assets', '../');
shell.cd('..');
shell.rm('-rf', 'webpack');
shell.cd('assets');
shell.exec('yarn');