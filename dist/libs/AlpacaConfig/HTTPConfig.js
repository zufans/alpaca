"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("@zufan_devops/console");
// type.toLocaleLowerCase()
function valdateBase(type) {
    return type.toLocaleLowerCase().trim().replaceAll(" ", "");
}
function trading(paper) {
    const version = "v2";
    if (paper)
        return `https://paper-api.alpaca.markets/${version}/`;
    else
        return `https://api.alpaca.markets/${version}/`;
}
function market(paper, version) {
    const versions = ["v2", "v1beta3", "v1beta1"];
    try {
        if (!versions.includes(version))
            throw new Error("Unsupported version");
        if (paper)
            return `https://data.sandbox.alpaca.markets/${version}/`;
        else
            return `https://data.alpaca.markets/${version}/`;
    }
    catch (error) {
        throw error;
    }
}
function broker(paper, version) {
    const versions = ["v1", "v2beta1", "v1beta"];
    try {
        if (!versions.includes(version))
            throw new Error("Unsupported version");
        if (paper)
            return `https://broker-api.sandbox.alpaca.markets/${version}/`;
        else
            return `https://broker-api.alpaca.markets/${version}/`;
    }
    catch (error) {
        throw error;
    }
}
class HTTPConfig {
    auth;
    constructor(auth) {
        this.auth = auth;
        this.auth = auth;
    }
    httpRequestConfig(config) {
        try {
            const sectionTypes = ["trading", "market", "broker"];
            // l(config); // { url: '/account', method: 'get', version: 'v2', section: 'trading' }
            const section = valdateBase(config.section);
            if (!sectionTypes.includes(section))
                throw new Error("Unsupported baseURL");
            let base;
            switch (section) {
                case "trading":
                    base = trading(this.auth["paper"]);
                    break;
                case "market":
                    base = market(this.auth["paper"], config.section);
                    break;
                case "broker":
                    base = broker(this.auth["paper"], config.section);
                    break;
                default:
                    throw new Error("Unsupported baseURL");
            }
            const baseURL = base;
            const configuration = {
                method: config.method.toUpperCase(),
                url: config.url,
                baseURL: baseURL,
                headers: {
                    accept: "application/json",
                    "APCA-API-KEY-ID": this.auth["keyId"],
                    "APCA-API-SECRET-KEY": this.auth["secretKey"],
                },
            };
            if (config.method !== "GET" && config.data)
                configuration["data"] = config.data;
            if (config.query) {
                configuration["url"] = `${configuration["url"]}?`;
                for (const key in config.query) {
                    const char = configuration["url"][configuration["url"].length - 1] === "?"
                        ? ""
                        : "&";
                    // l(char);
                    if (Array.isArray(config.query[key])) {
                        const query = config.query[key];
                        configuration["url"] = `${configuration["url"]}${char}${key}=${query}`;
                    }
                    else {
                        configuration["url"] = `${configuration["url"]}${char}${key}=${config.query[key]}`;
                    }
                }
            }
            (0, console_1.l)(configuration["url"]);
            // '/assets?status=active&asset_class=us_equity&exchange=AMEX&attributes=ptp_no_exception,ptp_with_exception,ipo,has_options',
            // '/assets?status=active&asset_class=us_equity&exchange=AMEX&attributes=ptp_no_exception,ptp_with_exception,ipo,has_options'
            // attributes=ptp_no_exception,ptp_with_exception,ipo,has_options
            return;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = HTTPConfig;
