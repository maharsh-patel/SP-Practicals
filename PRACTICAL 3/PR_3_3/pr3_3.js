const fs = require("fs");
const text = require("./TextProcessing");

fs.readFile("file1.txt", "utf8", function(err, data) {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Total Words :", text.countWords(data));
    console.log("Total Lines :", text.countLines(data));
    console.log("Total Characters :", text.countCharacters(data));

});