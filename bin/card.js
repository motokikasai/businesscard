#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("Motoki Kasai /"),
  handle: chalk.cyan("motokikasai"),
  work: chalk.white("Fullstack Developer"),
  github: chalk.cyan("https://github.com/motokikasai"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/motoki-kasai-82175171/"),
  npx: chalk.white("npx motokikasai"),
  labelWork: chalk.white.bold("      Work:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelCard: chalk.white.bold("      Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  githubing +
  newline +
  newline +
  linkedining +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
