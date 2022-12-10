require("dotenv").config();

module.exports = (() => {
    return {
        port: process.env["PORT"],
    };
})();
