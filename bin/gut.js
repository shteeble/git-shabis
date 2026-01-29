#!/usr/bin/env node

const { spawn } = require('child_process');

const hebrewCommands = {
  'שלעפ': 'pull',
  'שטופ': 'push',
  'חאפ': 'fetch',
  'נפקא_מינא': 'diff',
  'טשאלנט': 'merge',
  'לשון_הרע': 'blame',
  'גניזה': 'stash',
  'שמוץ': 'stash',
  'פאַרבינדן': 'connect',
  'דרכים': 'branch',
  'אפיקורס': ['checkout', '-b'],
  'נאך_א-מול': 'rebase',
  'גוואלד': 'help',
  'אוי_ויי': 'help',
  'שמוז': 'log',
  'וואס': 'status',
};

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Usage: gut <command> [options]');
  console.log('\nHebrew commands:');
  Object.entries(hebrewCommands).forEach(([hebrew, english]) => {
    const cmd = Array.isArray(english) ? english.join(' ') : english;
    console.log(`  ${hebrew} => git ${cmd}`);
  });
  process.exit(0);
}

// Translate first argument if it's Hebrew
let gitArgs = [...args];
const firstArg = args[0];

if (hebrewCommands[firstArg]) {
  const translated = hebrewCommands[firstArg];
  if (Array.isArray(translated)) {
    gitArgs = [...translated, ...args.slice(1)];
  } else {
    gitArgs = [translated, ...args.slice(1)];
  }
  console.log(`${firstArg} => git ${gitArgs.join(' ')}`);
}

// Run git with translated arguments
const git = spawn('git', gitArgs, { stdio: 'inherit' });

git.on('close', (code) => {
  process.exit(code);
});
