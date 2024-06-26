import { Authentication } from "../TypescriptTypes/TradingAPI";
import { AxiosParmConfig, AxiosConfigurationObject } from "../TypescriptTypes/AxiosConfigurationPhasetypes";
declare class HTTPConfig {
    protected readonly auth: Authentication;
    constructor(auth: Authentication);
    httpRequestConfig(config: AxiosParmConfig): AxiosConfigurationObject;
}
export default HTTPConfig;
