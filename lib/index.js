const gitconfig = require("gitconfig");

var configure = function() {
  console.log("Kashering Git...");
  gitconfig
    .set(
      {
        "alias.vus": "status",
        "alias.chollent": "merge",
        "alias.shlep": "pull",
        "alias.chap": "fetch",
        "alias.shtup": "push",
        "alias.loshon-hora": "blame",
        "alias.nafka-mina": "diff",
        "alias.gniza": "stash",
        "alias.shmutz": "stash",
        "alias.farbinden": "connect",
        "alias.apikoyres": "checkout -b",
        "alias.drochim": "branch",
        "alias.givald": "help",
        "alias.oy-vey": "help",
        "alias.shmooz": "log"
      },
      { location: "global" }
    )
    .then();

  setTimeout(function() {
    console.log("Toiveling...");
  }, 2000);

  setTimeout(function() {
    console.log("Learning Yiddish...");
  }, 5000);

  setTimeout(function() {
    console.log("Tasting Herring...");
  }, 8000);

  setTimeout(function() {
    var str1 = "(#############################)";
    console.log(str1);
    console.log(str1);
    console.log(str1);
    console.log(str1);
  }, 100);

  setTimeout(function() {
    var rIn = 4.5;
    var rOut = 5.5;
    for (y = 4; y >= -5; --y) {
      var str = "    ";
      if (y < 3) {
        str = "   $";
      }
      for (x = -5; x < rOut; x += 0.5) {
        const value = x * x + y * y;
        if (value >= rIn * rIn && value <= rOut * rOut) {
          str = str.concat("*");
        } else {
          str = str.concat(" ");
        }
      }
      if (y < 3) {
        str = str.concat("$");
      }
      console.log(str);
    }
  }, 100);

  setTimeout(function() {
    console.log("Shkuyach, Git is now kosher.");
  }, 10000);
};

exports.configure = configure;
