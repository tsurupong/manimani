var path = require("path");
var manimani = require("../src/manimani");

var dic = path.join(__dirname, "..", "src", "dict");

manimani.tokenize(dic, "柿の種", function(err, moras) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(JSON.stringify(moras, null, 2));
});
