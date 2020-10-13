const exportMethod = require("./exportMethod");
const { antSolution } = require("./solution");

module.exports = {
    ...exportMethod,
    solution:{
        antSolution
    }
};
