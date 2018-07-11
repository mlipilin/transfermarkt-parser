"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const jsdom_1 = require("jsdom");
const url_1 = require("../../url");
function list() {
    return axios_1.default.get(url_1.countryListUrl())
        .then(response => {
        const dom = new jsdom_1.JSDOM(response.data);
        return [...dom.window.document.querySelectorAll('option')]
            .filter(node => !!parseInt(node.getAttribute('value')))
            .map(node => ({
            id: parseInt(node.getAttribute('value')),
            title: node.innerHTML,
        }));
    });
}
exports.list = list;
//# sourceMappingURL=methods.js.map