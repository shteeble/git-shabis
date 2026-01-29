const gitconfig = require('gitconfig');

var uninstall = function() {
  console.log("Trefing up Git...");
  gitconfig.unset([
    // English/Yiddish aliases
    'alias.vus', 'alias.chollent', 'alias.shlep',
    'alias.chap', 'alias.shtup', 'alias.loshon-hora',
    'alias.nafka-mina', 'alias.gniza', 'alias.farbinden',
    'alias.apikoyres', 'alias.drochim', 'alias.givald', 'alias.oy-vey',
    'alias.shmutz', 'alias.shmooz', 'alias.nochamol',
    // Hebrew aliases
    'alias.שלעפ', 'alias.שטופ', 'alias.חאפ', 'alias.נפקא_מינא',
    'alias.טשאלנט', 'alias.לשון_הרע', 'alias.גניזה', 'alias.שמוץ',
    'alias.פאַרבינדן', 'alias.דרכים', 'alias.אפיקורס', 'alias.נאך_א-מול',
    'alias.גוואלד', 'alias.אוי_ויי', 'alias.שמוז', 'alias.וואס'
  ], { location: 'global' }).then();

  setTimeout(function() {
    console.log("nebuch, Git is now treif.");
  }, 5000);
};

exports.uninstall = uninstall;
