import { Daft } from "./sites/daft/daft";
const colors = require('colors');

const COUNTIES_REPUBLIC = require('./constants/counties-republic.json');
const COUNTIES_NORTH = require('./constants/counties-north.json');
const SITES = ['daft'];
const MODES = ['update', 'view', 'process'];

// site
const site = process.argv[2] ? process.argv[2].toLocaleLowerCase() : undefined;

if (site === undefined || !SITES.includes(site)) {
  console.error(
    colors.red(
      '[error] site arg needs to be one of [' + SITES.toString() + ']'
    )
  );
  process.exit(0);
}

// mode
const mode = process.argv[3] ? process.argv[3].toLocaleLowerCase() : undefined;

if (mode === undefined || !MODES.includes(mode)) {
  console.log(
    colors.red(
      '[error] mode arg needs to be one of [' + MODES.toString() + ']'
    )
  );
  process.exit(0);
}

// county
const county = process.argv[4] ? process.argv[4].toLocaleLowerCase() : undefined;

if (county === undefined) {
  console.log(
    colors.red(
      '[error] county is required'
    )
  );
  process.exit(0);
}


if (COUNTIES_NORTH.includes(county)) {
    console.log(
      colors.red(
        '[error] northern ireland counties are not currently supported'
      )
    );
    process.exit(0);
}

if (!COUNTIES_REPUBLIC.includes(county)) {
    console.log(
      colors.red(
        '[error] please enter a valid republic of ireland county'
      )
    );
    process.exit(0);
}

console.log('starting script...');

if (site === 'daft') {
  if (mode === 'view') {
    Daft.viewData(county);
  } else if (mode === 'update') {
    Daft.getAllData();
  } else if (mode === 'process') {
    Daft.processData(county);
  }
}