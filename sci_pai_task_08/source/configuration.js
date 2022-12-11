require("dotenv").config();
const filesystem = require('fs');

const get_port = () => {
    const port_property = "PORT";
    const port_default = 3000;
    return undefined !== process.env[port_property] ? process.env[port_property] : port_default;
};

const get_ssl = () => {
    const ssl_key_property = "SSL_PRIVATE_KEY_PATH";
    const ssl_cert_property = "SSL_CERTIFICATE_PATH";
    const ssl_default = null;

    let result = ssl_default;
    if ((undefined !== process.env[ssl_key_property]) && (undefined !== process.env[ssl_cert_property])) {
        result = {
            key: filesystem.readFileSync(process.env[ssl_key_property]),
            cert: filesystem.readFileSync(process.env[ssl_cert_property]),
        };
    }

    return result;
};

module.exports = (() => {
    return {
        port: get_port(),
        ssl: get_ssl(),
    };
})();
