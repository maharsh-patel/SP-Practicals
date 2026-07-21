exports.countWords = function(text) {
    return text.trim().split(/\s+/).length;
};

exports.countLines = function(text) {
    return text.split("\n").length;
};

exports.countCharacters = function(text) {
    return text.length;
};