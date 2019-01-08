const marker = require("@ajar/marker")

function slugger(...words) {
    return words.join(' ')
        .split(' ')
        .join('-');
}

module.exports = {
    slugger
}
