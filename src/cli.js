const fs = require("fs");
const ncp = require("ncp");
const path = require("path");
const chalk =require("chalk");
import { promisify } from 'util';
import { exec } from 'child_process';

const copy = promisify(ncp);

export async function cli(args) {
  if (args[2] && !fs.existsSync(args[2])) {
    fs.mkdirSync(args[2]); 

    const currentUrl = import.meta.url;
    const templateDir = path.resolve(
      new URL(currentUrl).pathname,
      '../../template'
    );

    await copy(templateDir, args[2]);
    console.log(chalk.blue("Files copied!"));
    install.on('exit', _ => console.log(chalk.green(`${args[2]} created!`)));
  } else {
    console.log(chalk.red.bold('Please give a valid directory name for your project!'));
  }
}