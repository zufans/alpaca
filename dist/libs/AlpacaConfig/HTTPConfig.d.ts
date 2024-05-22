import { Authentication } from "../TypescriptTypes/TradingAPI";
import { AxiosParmConfig } from "../TypescriptTypes/AxiosConfigurationPhasetypes";
declare class HTTPConfig {
    protected readonly auth: Authentication;
    constructor(auth: Authentication);
    httpRequestConfig(config: AxiosParmConfig): any;
}
export default HTTPConfig;
