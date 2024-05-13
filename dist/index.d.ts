import { Authentication, GetAssetsParams, GetAnAssetByIDorSymbol, GetOptionContracts, GetOptionContractByIDorSymbol, GetAnnouncements, CreateAnOrder, GetAllOrders, GetOrderById, ReplaceOrderbyID, DeleteOrderbyID, CloseAllPositions, GetOpenPosition, ClosePosition, ExerciseOptionPosition, GetAccountPortfolioHistory, CreateWatchlist, GetWatchlistbyID, UpdateWatchlistById, AddAssettoWatchlist, DeleteWatchlistById, GetWatchlistbyName, UpdateWatchlistByName, AddAssettoWatchlistByName, DeleteWatchlistByName, DeleteSymbolfromWatchlist, AccountConfigurations, GetMarketCalendarinfo, GetRetrieveCryptoFundingWallets, RequestNewWithdrawal, GetRetrieveCryptoFundingTransfer, RequestNewWhitelistedAddress, DeleteWhitelistedAddress, GetEstimatedGasFee } from "./libs/TypescriptTypes/TradingAPI";
declare class Alpaca {
    private readonly auth;
    constructor(auth: Authentication);
    getAccount(): Promise<object>;
    getAssets(params?: GetAssetsParams): Promise<object>;
    getAnAssetByIDorSymbol(params: GetAnAssetByIDorSymbol): Promise<object>;
    getOptionContracts(param?: GetOptionContracts): Promise<object>;
    getOptionContractByIDorSymbol(param: GetOptionContractByIDorSymbol): Promise<object>;
    getSpecificAnnouncement(id: string): Promise<object>;
    getAnnouncements(param: GetAnnouncements): Promise<object>;
    createAnOrder(param: CreateAnOrder): Promise<object>;
    getAllOrders(param: GetAllOrders): Promise<object>;
    deleteAllOrders(): Promise<object>;
    getOrderById(param: GetOrderById): Promise<object>;
    replaceOrderbyID(param: ReplaceOrderbyID): Promise<object>;
    deleteOrderbyID(param: DeleteOrderbyID): Promise<object>;
    getAllOpenPositions(): Promise<object>;
    closeAllPositions(param: CloseAllPositions): Promise<object>;
    getOpenPosition(param: GetOpenPosition): Promise<object>;
    closePosition(param: ClosePosition): Promise<object>;
    exerciseOptionPosition(param: ExerciseOptionPosition): Promise<object>;
    getPortfolioHistory(param: GetAccountPortfolioHistory): Promise<any>;
    getAllWatchlists(): Promise<object>;
    createWatchlist(data: CreateWatchlist): Promise<object>;
    getWatchlistbyID(id: GetWatchlistbyID): Promise<object>;
    updateWatchlistById(id: UpdateWatchlistById): Promise<object>;
    addAssettoWatchlist(id: AddAssettoWatchlist): Promise<object>;
    deleteWatchlistById(id: DeleteWatchlistById): Promise<object>;
    getWatchlistbyName(name: GetWatchlistbyName): Promise<object>;
    updateWatchlistByName(name: UpdateWatchlistByName): Promise<object>;
    addAssettoWatchlistByName(name: AddAssettoWatchlistByName): Promise<object>;
    deleteWatchlistByName(name: DeleteWatchlistByName): Promise<object>;
    deleteSymbolfromWatchlist(id: DeleteSymbolfromWatchlist): Promise<object>;
    getAccountConfigurations(): Promise<object>;
    updateAccountConfigurations(data: AccountConfigurations): Promise<object>;
    getMarketCalendarinfo(param?: GetMarketCalendarinfo): Promise<object>;
    clockAndCalendar(): Promise<object>;
    getRetrieveCryptoFundingWallets(param: GetRetrieveCryptoFundingWallets): Promise<any>;
    getRetrieveCryptoFundingTransfer(): Promise<any>;
    requestNewWithdrawal(data: RequestNewWithdrawal): Promise<any>;
    getRetrieveSingleCryptoFundingTransfer(queryParams: GetRetrieveCryptoFundingTransfer): Promise<any>;
    getArrayofWhitelistedAddresses(queryParams: GetRetrieveCryptoFundingWallets): Promise<any>;
    requestNewWhitelistedAddress(data: RequestNewWhitelistedAddress): Promise<any>;
    deleteWhitelistedAddress(data: DeleteWhitelistedAddress): Promise<any>;
    getEstimatedGasFee(queryParams: GetEstimatedGasFee): Promise<any>;
}
export default Alpaca;
