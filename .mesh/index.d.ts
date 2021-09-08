import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DocumentNode } from 'graphql';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} & {
    [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    JSON: any;
};
export declare type Query = {
    /**
     * Get account api-key information.
     *
     * Equivalent to GET /open-api/api-key
     */
    aPIkeyInfo?: Maybe<Array<Maybe<APIKeyBase>>>;
    /**
     * Get Bybit OpenAPI announcements in the last 30 days in reverse order.
     *
     * Equivalent to GET /v2/public/announcement
     */
    commonAnnouncements?: Maybe<Array<Maybe<Announcement>>>;
    /**
     * Query LCP info.
     *
     * Equivalent to GET /v2/private/account/lcp
     */
    commonGetLcp?: Maybe<Array<Maybe<LCPInfo>>>;
    /**
     * Get bybit server time.
     *
     * Equivalent to GET /v2/public/time
     */
    commonGetTime?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Get my conditional order list.
     *
     * Equivalent to GET /v2/private/stop-order/list
     */
    conditionalGetOrders?: Maybe<Array<Maybe<ConditionalOrdersResBase>>>;
    /**
     * Query real-time stop order information.
     *
     * Equivalent to GET /v2/private/stop-order
     */
    conditionalQuery?: Maybe<Array<Maybe<StopOrderOrdersResBase>>>;
    /**
     * Get user’s trade records.
     *
     * Equivalent to GET /v2/private/execution/list
     */
    executionGetTrades?: Maybe<Array<Maybe<TradeRecordsBase>>>;
    /**
     * Funding settlement occurs every 8 hours at 00:00 UTC, 08:00 UTC and 16:00 UTC. The current interval's fund fee settlement is based on the previous interval's fund rate. For example, at 16:00, the settlement is based on the fund rate generated at 8:00. The fund rate generated at 16:00 will be used at 0:00 on the next day.
     *
     * Equivalent to GET /open-api/funding/prev-funding
     */
    fundingMyLastFee?: Maybe<Array<Maybe<FundingFeeBase>>>;
    /**
     * Get predicted funding rate and funding fee.
     *
     * Equivalent to GET /open-api/funding/predicted-funding
     */
    fundingPredicted?: Maybe<Array<Maybe<FundingPredictedBase>>>;
    /**
     * Get predicted funding rate and funding fee.
     *
     * Equivalent to GET /open-api/funding/prev-funding-rate
     */
    fundingPrevRate?: Maybe<Array<Maybe<FundingRateBase>>>;
    /**
     * Get my conditional order list.
     *
     * Equivalent to GET /futures/private/stop-order/list
     */
    futuresConditionalGetOrders?: Maybe<Array<Maybe<ConditionalOrdersResBase>>>;
    /**
     * Query real-time stop order information.
     *
     * Equivalent to GET /futures/private/stop-order
     */
    futuresConditionalQuery?: Maybe<Array<Maybe<StopOrderOrdersResBase>>>;
    /**
     * Get user’s trade records.
     *
     * Equivalent to GET /futures/private/execution/list
     */
    futuresExecutionGetTrades?: Maybe<Array<Maybe<TradeRecordsBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to GET /futures/private/order/list
     */
    futuresOrderGetOrders?: Maybe<Array<Maybe<V2OrderListBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to GET /futures/private/order
     */
    futuresOrderQuery?: Maybe<Array<Maybe<QueryOrderBase>>>;
    /**
     * Get user's closed profit and loss records
     *
     * Equivalent to GET /futures/private/trade/closed-pnl/list
     */
    futuresPositionsClosePnlRecords?: Maybe<Array<Maybe<ClosedPnlBase>>>;
    /**
     * Get my position list.
     *
     * Equivalent to GET /futures/private/position/list
     */
    futuresPositionsMyPosition?: Maybe<Array<Maybe<Position>>>;
    /**
     * Query historical kline.
     *
     * Equivalent to GET /v2/public/kline/list
     */
    klineGet?: Maybe<Array<Maybe<KlineBase>>>;
    /**
     * Query index price kline.
     *
     * Equivalent to GET /v2/public/index-price-kline
     */
    klineIndexPrice?: Maybe<Array<Maybe<IndexPriceKlineBase>>>;
    /**
     * Query mark price kline.
     *
     * Equivalent to GET /v2/public/mark-price-kline
     */
    klineMarkPrice?: Maybe<Array<Maybe<MarkPriceKlineBase>>>;
    /**
     * Query premium index price kline.
     *
     * Equivalent to GET /v2/public/premium-index-kline
     */
    klinePremiumIndexPrice?: Maybe<Array<Maybe<PremiumIndexPriceKlineBase>>>;
    /**
     * This will get linear active orders
     *
     * Equivalent to GET /private/linear/stop-order/list
     */
    linearConditionalGetOrders?: Maybe<Array<Maybe<LinearStopOrderRecordsResponseBase>>>;
    /**
     * This will get linear stop orders(real-time)
     *
     * Equivalent to GET /private/linear/stop-order/search
     */
    linearConditionalQuery?: Maybe<Array<Maybe<LinearSearchStopOrderResultBase>>>;
    /**
     * This will get user's trading records.
     *
     * Equivalent to GET /private/linear/trade/execution/list
     */
    linearExecutionGetTrades?: Maybe<Array<Maybe<LinearTradeRecordsResponse>>>;
    /**
     * This will get prev funding
     *
     * Equivalent to GET /private/linear/funding/prev-funding
     */
    linearFundingMyLastFee?: Maybe<Array<Maybe<LinearPrevFundingRespBase>>>;
    /**
     * Get predicted funding rate and funding fee.
     *
     * Equivalent to GET /private/linear/funding/predicted-funding
     */
    linearFundingPredicted?: Maybe<Array<Maybe<LinearFundingPredictedBase>>>;
    /**
     * This will get prev funding rate
     *
     * Equivalent to GET /public/linear/funding/prev-funding-rate
     */
    linearFundingPrevRate?: Maybe<Array<Maybe<LinearPrevFundingRateRespBase>>>;
    /**
     * This will get kline
     *
     * Equivalent to GET /public/linear/kline
     */
    linearKlineGet?: Maybe<Array<Maybe<LinearKlineRespBase>>>;
    /**
     * This will get index price kline
     *
     * Equivalent to GET /public/linear/index-price-kline
     */
    linearKlineIndexPrice?: Maybe<Array<Maybe<IndexPriceKlineBase>>>;
    /**
     * This will get mark price kline
     *
     * Equivalent to GET /public/linear/mark-price-kline
     */
    linearKlineMarkPrice?: Maybe<Array<Maybe<LinearKlineRespBase>>>;
    /**
     * This will get premium index price kline
     *
     * Equivalent to GET /public/linear/premium-index-kline
     */
    linearKlinePremiumIndexPrice?: Maybe<Array<Maybe<PremiumIndexPriceKlineBase>>>;
    /**
     * This will get recent trades
     *
     * Equivalent to GET /public/linear/recent-trading-records
     */
    linearMarketTrading?: Maybe<Array<Maybe<LinearRecentTradingRecordRespBase>>>;
    /**
     * This will get linear active orders
     *
     * Equivalent to GET /private/linear/order/list
     */
    linearOrderGetOrders?: Maybe<Array<Maybe<LinearOrderRecordsResponseBase>>>;
    /**
     * This will get linear active orders(real-time)
     *
     * Equivalent to GET /private/linear/order/search
     */
    linearOrderQuery?: Maybe<Array<Maybe<LinearSearchOrderResultBase>>>;
    /**
     * This will get user's closed profit and loss records.
     *
     * Equivalent to GET /private/linear/trade/closed-pnl/list
     */
    linearPositionsClosePnlRecords?: Maybe<Array<Maybe<LinearClosePnlRecordsResponse>>>;
    /**
     * This will get my position list.
     *
     * Equivalent to GET /private/linear/position/list
     */
    linearPositionsMyPosition?: Maybe<Array<Maybe<LinearPositionListResultBase>>>;
    /**
     * This will get risk limit.
     *
     * Equivalent to GET /public/linear/risk-limit
     */
    linearWalletGetRiskLimit?: Maybe<Array<Maybe<LinearRiskLimitRespBase>>>;
    /**
     * Query Account Long Short Ratio
     *
     * Equivalent to GET /v2/public/account-ratio
     */
    marketAccountRatio?: Maybe<Array<Maybe<AccountRatio>>>;
    /**
     * Query Big Deal
     *
     * Equivalent to GET /v2/public/big-deal
     */
    marketBigDeal?: Maybe<Array<Maybe<BigDeal>>>;
    /**
     * Query liq records.
     *
     * Equivalent to GET /v2/public/liq-records
     */
    marketLiqRecords?: Maybe<Array<Maybe<LiqRecords>>>;
    /**
     * Query Open Interest
     *
     * Equivalent to GET /v2/public/open-interest
     */
    marketOpenInterest?: Maybe<Array<Maybe<OpenInterest2>>>;
    /**
     * Get the orderbook.
     *
     * Equivalent to GET /v2/public/orderBook/L2
     */
    marketOrderbook?: Maybe<Array<Maybe<OrderBookBase>>>;
    /**
     * Get the latest information for symbol.
     *
     * Equivalent to GET /v2/public/tickers
     */
    marketSymbolInfo?: Maybe<Array<Maybe<SymbolInfoBase>>>;
    /**
     * Get recent trades
     *
     * Equivalent to GET /v2/public/trading-records
     */
    marketTradingRecords?: Maybe<Array<Maybe<TradingRecords>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to GET /v2/private/order/list
     */
    orderGetOrders?: Maybe<Array<Maybe<V2OrderListBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to GET /v2/private/order
     */
    orderQuery?: Maybe<Array<Maybe<QueryOrderBase>>>;
    /**
     * Get user's closed profit and loss records
     *
     * Equivalent to GET /v2/private/trade/closed-pnl/list
     */
    positionsClosePnlRecords?: Maybe<Array<Maybe<ClosedPnlBase>>>;
    /**
     * Get my position list.
     *
     * Equivalent to GET /v2/private/position/list
     */
    positionsMyPosition?: Maybe<Array<Maybe<Position>>>;
    /**
     * Query Symbols.
     *
     * Equivalent to GET /v2/public/symbols
     */
    symbolGet?: Maybe<Array<Maybe<Symbols>>>;
    /**
     * Asset Exchange Records
     *
     * Equivalent to GET /v2/private/exchange-order/list
     */
    walletExchangeOrder?: Maybe<Array<Maybe<ExchangeOrderListBase>>>;
    /**
     * get wallet balance info
     *
     * Equivalent to GET /v2/private/wallet/balance
     */
    walletGetBalance?: Maybe<Array<Maybe<WalletBalanceBase>>>;
    /**
     * Get wallet fund records
     *
     * Equivalent to GET /open-api/wallet/fund/records
     */
    walletGetRecords?: Maybe<Array<Maybe<FundRecordBase>>>;
    /**
     * Get risk limit.
     *
     * Equivalent to GET /open-api/wallet/risk-limit/list
     */
    walletGetRiskLimit?: Maybe<Array<Maybe<RiskLimitBase>>>;
    /**
     * Get wallet fund records
     *
     * Equivalent to GET /open-api/wallet/withdraw/list
     */
    walletWithdraw?: Maybe<Array<Maybe<WithdrawResBase>>>;
};
export declare type QuerycommonGetLcpArgs = {
    symbol: Scalars['String'];
};
export declare type QueryconditionalGetOrdersArgs = {
    cursor?: Maybe<Scalars['String']>;
    direction?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    stopOrderStatus?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryconditionalQueryArgs = {
    orderLinkId?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QueryexecutionGetTradesArgs = {
    limit?: Maybe<Scalars['String']>;
    orderId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryfundingMyLastFeeArgs = {
    symbol: Scalars['String'];
};
export declare type QueryfundingPredictedArgs = {
    symbol: Scalars['String'];
};
export declare type QueryfundingPrevRateArgs = {
    symbol: Scalars['String'];
};
export declare type QueryfuturesConditionalGetOrdersArgs = {
    cursor?: Maybe<Scalars['String']>;
    direction?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    stopOrderStatus?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryfuturesConditionalQueryArgs = {
    orderLinkId?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QueryfuturesExecutionGetTradesArgs = {
    limit?: Maybe<Scalars['String']>;
    orderId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    startTime?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryfuturesOrderGetOrdersArgs = {
    cursor?: Maybe<Scalars['String']>;
    direction?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    orderStatus?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryfuturesOrderQueryArgs = {
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QueryfuturesPositionsClosePnlRecordsArgs = {
    endTime?: Maybe<Scalars['Int']>;
    execType?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    startTime?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QueryfuturesPositionsMyPositionArgs = {
    symbol?: Maybe<Scalars['String']>;
};
export declare type QueryklineGetArgs = {
    from: Scalars['Float'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
    symbol: Scalars['String'];
};
export declare type QueryklineIndexPriceArgs = {
    from: Scalars['Int'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QueryklineMarkPriceArgs = {
    from: Scalars['Int'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QueryklinePremiumIndexPriceArgs = {
    from: Scalars['Int'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearConditionalGetOrdersArgs = {
    limit?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    stopOrderStatus?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearConditionalQueryArgs = {
    orderLinkId?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearExecutionGetTradesArgs = {
    endTime?: Maybe<Scalars['Float']>;
    execType?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    page?: Maybe<Scalars['Float']>;
    startTime?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearFundingMyLastFeeArgs = {
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearFundingPredictedArgs = {
    symbol: Scalars['String'];
};
export declare type QuerylinearFundingPrevRateArgs = {
    symbol: Scalars['String'];
};
export declare type QuerylinearKlineGetArgs = {
    from: Scalars['Float'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearKlineIndexPriceArgs = {
    from: Scalars['Float'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearKlineMarkPriceArgs = {
    from: Scalars['Float'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearKlinePremiumIndexPriceArgs = {
    from: Scalars['Float'];
    interval: Scalars['String'];
    limit?: Maybe<Scalars['Float']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearMarketTradingArgs = {
    limit?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QuerylinearOrderGetOrdersArgs = {
    limit?: Maybe<Scalars['String']>;
    order?: Maybe<Scalars['String']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearOrderQueryArgs = {
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearPositionsClosePnlRecordsArgs = {
    endTime?: Maybe<Scalars['Float']>;
    execType?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    page?: Maybe<Scalars['Float']>;
    startTime?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearPositionsMyPositionArgs = {
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerylinearWalletGetRiskLimitArgs = {
    publicLinearRiskLimitInput: PublicLinearRiskLimitInput;
};
export declare type QuerymarketAccountRatioArgs = {
    limit?: Maybe<Scalars['Int']>;
    period: Scalars['String'];
    symbol: Scalars['String'];
};
export declare type QuerymarketBigDealArgs = {
    limit?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QuerymarketLiqRecordsArgs = {
    endTime?: Maybe<Scalars['Int']>;
    from?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    startTime?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QuerymarketOpenInterestArgs = {
    limit?: Maybe<Scalars['Int']>;
    period: Scalars['String'];
    symbol: Scalars['String'];
};
export declare type QuerymarketOrderbookArgs = {
    symbol: Scalars['String'];
};
export declare type QuerymarketSymbolInfoArgs = {
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerymarketTradingRecordsArgs = {
    from?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QueryorderGetOrdersArgs = {
    cursor?: Maybe<Scalars['String']>;
    direction?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Float']>;
    orderStatus?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type QueryorderQueryArgs = {
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerypositionsClosePnlRecordsArgs = {
    endTime?: Maybe<Scalars['Int']>;
    execType?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    startTime?: Maybe<Scalars['Int']>;
    symbol: Scalars['String'];
};
export declare type QuerypositionsMyPositionArgs = {
    symbol?: Maybe<Scalars['String']>;
};
export declare type QuerywalletExchangeOrderArgs = {
    direction?: Maybe<Scalars['String']>;
    from?: Maybe<Scalars['Float']>;
    limit?: Maybe<Scalars['Float']>;
};
export declare type QuerywalletGetBalanceArgs = {
    coin?: Maybe<Scalars['String']>;
};
export declare type QuerywalletGetRecordsArgs = {
    currency?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['String']>;
    walletFundType?: Maybe<Scalars['String']>;
};
export declare type QuerywalletWithdrawArgs = {
    coin?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['String']>;
    limit?: Maybe<Scalars['String']>;
    page?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
};
/** Get bybit server time. */
export declare type APIKeyBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<APIKeyInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get bybit server time. */
export declare type APIKeyInfo = {
    apiKey?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    ips?: Maybe<Array<Maybe<Scalars['String']>>>;
    note?: Maybe<Scalars['String']>;
    permissions?: Maybe<Array<Maybe<Scalars['String']>>>;
    readOnly?: Maybe<Scalars['Boolean']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Get Bybit OpenAPI announcements in the last 30 days in reverse order. */
export declare type Announcement = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<AnnouncementInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get Bybit OpenAPI announcements in the last 30 days in reverse order. */
export declare type AnnouncementInfo = {
    createdAt?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Float']>;
    link?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};
/** Query LCP info. */
export declare type LCPInfo = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    /** Query LCP info. */
    result?: Maybe<LCPInfoBase>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Query LCP info. */
export declare type LCPInfoBase = {
    date?: Maybe<Scalars['String']>;
    platformRatio?: Maybe<Scalars['Float']>;
    score?: Maybe<Scalars['Float']>;
    selfRatio?: Maybe<Scalars['Float']>;
};
/** Get bybit server time. */
export declare type ServerTime = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Scalars['JSON']>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get conditional order list */
export declare type ConditionalOrdersResBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<ConditionalOrdersRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get order list response */
export declare type ConditionalOrdersRes = {
    cursor?: Maybe<Scalars['String']>;
    data?: Maybe<Array<Maybe<V2ConditionalListRes>>>;
};
/** conditional order list response */
export declare type V2ConditionalListRes = {
    basePrice?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    stopOrderStatus?: Maybe<Scalars['String']>;
    stopOrderType?: Maybe<Scalars['String']>;
    stopPx?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    triggerBy?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Get conditional order list */
export declare type StopOrderOrdersResBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<ConditionalRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Place new conditional order response */
export declare type ConditionalRes = {
    basePrice?: Maybe<Scalars['Float']>;
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    stopOrderStatus?: Maybe<Scalars['String']>;
    stopOrderType?: Maybe<Scalars['String']>;
    stopPx?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Get the trade records of a order response */
export declare type TradeRecordsBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<TradeRecords>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the trade records of a order response */
export declare type TradeRecords = {
    orderId?: Maybe<Scalars['String']>;
    tradeList?: Maybe<Array<Maybe<TradeRecordsInfo>>>;
};
/** Get the trade records of a order response */
export declare type TradeRecordsInfo = {
    closedSize?: Maybe<Scalars['Float']>;
    crossSeq?: Maybe<Scalars['Float']>;
    execFee?: Maybe<Scalars['String']>;
    execId?: Maybe<Scalars['String']>;
    execPrice?: Maybe<Scalars['String']>;
    execQty?: Maybe<Scalars['Float']>;
    execTime?: Maybe<Scalars['String']>;
    execType?: Maybe<Scalars['String']>;
    execValue?: Maybe<Scalars['String']>;
    feeRate?: Maybe<Scalars['String']>;
    lastLiquidityInd?: Maybe<Scalars['String']>;
    leavesQty?: Maybe<Scalars['Float']>;
    nthFill?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderPrice?: Maybe<Scalars['String']>;
    orderQty?: Maybe<Scalars['Float']>;
    orderType?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Get the last funding fee */
export declare type FundingFeeBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<FundingFeeRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the last funding fee */
export declare type FundingFeeRes = {
    execFee?: Maybe<Scalars['Float']>;
    execTimestamp?: Maybe<Scalars['Float']>;
    fundingRate?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get the last funding fee */
export declare type FundingPredictedBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<FundingPredicted>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the last funding fee */
export declare type FundingPredicted = {
    predictedFundingFee?: Maybe<Scalars['Float']>;
    predictedFundingRate?: Maybe<Scalars['Float']>;
};
/** Get the last funding Rate */
export declare type FundingRateBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<FundingRate2>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the last funding Rate */
export declare type FundingRate2 = {
    fundingRate?: Maybe<Scalars['String']>;
    fundingRateTimestamp?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get order list response */
export declare type V2OrderListBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<V2OrderListData>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get order list response */
export declare type V2OrderListData = {
    cursor?: Maybe<Scalars['String']>;
    data?: Maybe<Array<Maybe<V2OrderRes>>>;
};
/** order list response */
export declare type V2OrderRes = {
    createdAt?: Maybe<Scalars['String']>;
    cumExecFee?: Maybe<Scalars['String']>;
    cumExecQty?: Maybe<Scalars['String']>;
    cumExecValue?: Maybe<Scalars['String']>;
    leavesQty?: Maybe<Scalars['String']>;
    leavesValue?: Maybe<Scalars['String']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['String']>;
    rejectReason?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Query real-time active order information response */
export declare type QueryOrderBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<QueryOrderRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Query real-time active order information response */
export declare type QueryOrderRes = {
    createdAt?: Maybe<Scalars['String']>;
    cumExecQty?: Maybe<Scalars['Float']>;
    extFields?: Maybe<Array<Maybe<ExtFields2>>>;
    leavesQty?: Maybe<Scalars['Float']>;
    leavesValue?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['String']>;
    rejectReason?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** extra fields */
export declare type ExtFields2 = {
    oReqNum?: Maybe<Scalars['Float']>;
    xreqOffset?: Maybe<Scalars['Float']>;
    xreqType?: Maybe<Scalars['String']>;
};
/** Get the closed-pnl/list response */
export declare type ClosedPnlBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<ClosedPnlInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the closed-pnl/list response */
export declare type ClosedPnlInfo = {
    avgEntryPrice?: Maybe<Scalars['Int']>;
    avgExitPrice?: Maybe<Scalars['Int']>;
    closedPnl?: Maybe<Scalars['Float']>;
    closedSize?: Maybe<Scalars['Int']>;
    createdAt?: Maybe<Scalars['Int']>;
    cumEntryValue?: Maybe<Scalars['Float']>;
    cumExitValue?: Maybe<Scalars['Float']>;
    execType?: Maybe<Scalars['String']>;
    fillCount?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    leverage?: Maybe<Scalars['Int']>;
    orderId?: Maybe<Scalars['String']>;
    orderPrice?: Maybe<Scalars['Int']>;
    orderType?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['Int']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Int']>;
};
/** Get my position list. */
export declare type Position = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<PositionInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** PositionInfo. */
export declare type PositionInfo = {
    autoAddMargin?: Maybe<Scalars['Float']>;
    bustPrice?: Maybe<Scalars['Float']>;
    createdAt?: Maybe<Scalars['String']>;
    crossSeq?: Maybe<Scalars['Float']>;
    cumCommission?: Maybe<Scalars['Float']>;
    cumRealisedPnl?: Maybe<Scalars['Float']>;
    deleverageIndicator?: Maybe<Scalars['String']>;
    entryPrice?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
    leverage?: Maybe<Scalars['Float']>;
    liqPrice?: Maybe<Scalars['Float']>;
    ocCalcData?: Maybe<Scalars['String']>;
    occClosingFee?: Maybe<Scalars['Float']>;
    occFundingFee?: Maybe<Scalars['Float']>;
    orderMargin?: Maybe<Scalars['Float']>;
    positionMargin?: Maybe<Scalars['Float']>;
    positionSeq?: Maybe<Scalars['Float']>;
    positionStatus?: Maybe<Scalars['String']>;
    positionValue?: Maybe<Scalars['Float']>;
    realisedPnl?: Maybe<Scalars['Float']>;
    riskId?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    unrealisedPnl?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
    walletBalance?: Maybe<Scalars['Float']>;
};
/** Get the orderbook response */
export declare type KlineBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<KlineRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the orderbook response */
export declare type KlineRes = {
    close?: Maybe<Scalars['String']>;
    high?: Maybe<Scalars['String']>;
    interval?: Maybe<Scalars['String']>;
    low?: Maybe<Scalars['String']>;
    open?: Maybe<Scalars['String']>;
    openTime?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    volume?: Maybe<Scalars['String']>;
};
/** Get mark price kline information. */
export declare type IndexPriceKlineBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<IndexPriceKlineInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type IndexPriceKlineInfo = {
    close?: Maybe<Scalars['String']>;
    high?: Maybe<Scalars['String']>;
    low?: Maybe<Scalars['String']>;
    open?: Maybe<Scalars['String']>;
    openTime?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get mark price kline information. */
export declare type MarkPriceKlineBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<MarkPriceKlineInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type MarkPriceKlineInfo = {
    close?: Maybe<Scalars['Int']>;
    high?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Int']>;
    low?: Maybe<Scalars['Int']>;
    open?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    startAt?: Maybe<Scalars['Int']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get mark price kline information. */
export declare type PremiumIndexPriceKlineBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<PremiumIndexPriceKlineInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PremiumIndexPriceKlineInfo = {
    close?: Maybe<Scalars['String']>;
    high?: Maybe<Scalars['String']>;
    low?: Maybe<Scalars['String']>;
    open?: Maybe<Scalars['String']>;
    openTime?: Maybe<Scalars['Int']>;
    period?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Linear Stop Order list Base */
export declare type LinearStopOrderRecordsResponseBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearStopOrderRecordsResponse>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearStopOrderRecordsResponse = {
    currentPage?: Maybe<Scalars['Float']>;
    data?: Maybe<Array<Maybe<LinearListStopOrderResult>>>;
    lastPage?: Maybe<Scalars['Float']>;
};
export declare type LinearListStopOrderResult = {
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    triggerPrice?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Linear Order Query Result Base */
export declare type LinearSearchStopOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearSearchStopOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearSearchStopOrderResult = {
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    triggerPrice?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Linear Positions Result Base */
export declare type LinearTradeRecordsResponse = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearTradeRecordItem>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearTradeRecordItem = {
    closedSize?: Maybe<Scalars['Float']>;
    execFee?: Maybe<Scalars['Float']>;
    execId?: Maybe<Scalars['String']>;
    execPrice?: Maybe<Scalars['Float']>;
    execQty?: Maybe<Scalars['Float']>;
    execType?: Maybe<Scalars['String']>;
    execValue?: Maybe<Scalars['Float']>;
    feeRate?: Maybe<Scalars['Float']>;
    lastLiquidityInd?: Maybe<Scalars['String']>;
    leavesQty?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderPrice?: Maybe<Scalars['Float']>;
    orderQty?: Maybe<Scalars['Float']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    tradeTime?: Maybe<Scalars['Float']>;
    tradeTimeMs?: Maybe<Scalars['Float']>;
};
/** Get My Last Funding */
export declare type LinearPrevFundingRespBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearPrevFundingResp>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearPrevFundingResp = {
    execFee?: Maybe<Scalars['Float']>;
    execTime?: Maybe<Scalars['String']>;
    fundingRate?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get Predicted Funding */
export declare type LinearFundingPredictedBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearFundingPredicted>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearFundingPredicted = {
    predictedFundingFee?: Maybe<Scalars['Float']>;
    predictedFundingRate?: Maybe<Scalars['Float']>;
};
/** Get Prev Funding Rate */
export declare type LinearPrevFundingRateRespBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearPrevFundingRateResp>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearPrevFundingRateResp = {
    fundingRate?: Maybe<Scalars['Float']>;
    fundingRateTimestamp?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get Kline */
export declare type LinearKlineRespBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearKlineResp>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearKlineResp = {
    close?: Maybe<Scalars['Float']>;
    high?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Int']>;
    interval?: Maybe<Scalars['String']>;
    low?: Maybe<Scalars['Float']>;
    open?: Maybe<Scalars['Float']>;
    openTime?: Maybe<Scalars['Float']>;
    period?: Maybe<Scalars['String']>;
    startAt?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    turnover?: Maybe<Scalars['Float']>;
    volume?: Maybe<Scalars['Float']>;
};
/** Get Recent Trading Record */
export declare type LinearRecentTradingRecordRespBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearRecentTradingRecordResp>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearRecentTradingRecordResp = {
    id?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    time?: Maybe<Scalars['String']>;
    tradeTimeMs?: Maybe<Scalars['Float']>;
};
/** Linear Order list Base */
export declare type LinearOrderRecordsResponseBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearOrderRecordsResponse>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearOrderRecordsResponse = {
    currentPage?: Maybe<Scalars['Float']>;
    data?: Maybe<Array<Maybe<LinearListOrderResult>>>;
};
export declare type LinearListOrderResult = {
    createdTime?: Maybe<Scalars['String']>;
    cumExecFee?: Maybe<Scalars['Float']>;
    cumExecQty?: Maybe<Scalars['Float']>;
    cumExecValue?: Maybe<Scalars['Float']>;
    lastExecPrice?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    reduceOnly?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    updatedTime?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Linear Order Query Result Base */
export declare type LinearSearchOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearSearchOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearSearchOrderResult = {
    createdTime?: Maybe<Scalars['String']>;
    cumExecFee?: Maybe<Scalars['Float']>;
    cumExecQty?: Maybe<Scalars['Float']>;
    cumExecValue?: Maybe<Scalars['Float']>;
    lastExecPrice?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    reduceOnly?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    updatedTime?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Linear Positions Result Base */
export declare type LinearClosePnlRecordsResponse = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearClosedPnlRecordResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearClosedPnlRecordResult = {
    avgEntryPrice?: Maybe<Scalars['Float']>;
    avgExitPrice?: Maybe<Scalars['Float']>;
    closedPnl?: Maybe<Scalars['Float']>;
    closedSize?: Maybe<Scalars['Float']>;
    createdAt?: Maybe<Scalars['Float']>;
    cumEntryValue?: Maybe<Scalars['Float']>;
    cumExitValue?: Maybe<Scalars['Float']>;
    execType?: Maybe<Scalars['String']>;
    fillCount?: Maybe<Scalars['Int']>;
    id?: Maybe<Scalars['Float']>;
    leverage?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderPrice?: Maybe<Scalars['Float']>;
    orderType?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Linear Positions Result Base */
export declare type LinearPositionListResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearPositionListResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearPositionListResult = {
    bustPrice?: Maybe<Scalars['Float']>;
    cumRealisedPnl?: Maybe<Scalars['Float']>;
    entryPrice?: Maybe<Scalars['Float']>;
    freeQty?: Maybe<Scalars['Float']>;
    leverage?: Maybe<Scalars['Float']>;
    liqPrice?: Maybe<Scalars['Float']>;
    occClosingFee?: Maybe<Scalars['Float']>;
    positionMargin?: Maybe<Scalars['Float']>;
    positionValue?: Maybe<Scalars['Float']>;
    realisedPnl?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    tpSlMode?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
/** Get Risk Limit */
export declare type LinearRiskLimitRespBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearRiskLimitResp>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LinearRiskLimitResp = {
    createdAt?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Int']>;
    isLowestRisk?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Float']>;
    maintainMargin?: Maybe<Scalars['Float']>;
    section?: Maybe<Array<Maybe<Scalars['String']>>>;
    startingMargin?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
};
export declare type PublicLinearRiskLimitInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Get account long short account ratio information. */
export declare type AccountRatio = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<AccountRatioInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type AccountRatioInfo = {
    buyRatio?: Maybe<Scalars['Int']>;
    sellRatio?: Maybe<Scalars['Int']>;
    symbol?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
};
/** Get big deal information. */
export declare type BigDeal = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<BigDealInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type BigDealInfo = {
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
    value?: Maybe<Scalars['Int']>;
};
/** Get liq_records information. */
export declare type LiqRecords = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LiqRecordsInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type LiqRecordsInfo = {
    id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Int']>;
    qty?: Maybe<Scalars['Int']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    time?: Maybe<Scalars['Int']>;
};
/** Get open_interest information. */
export declare type OpenInterest2 = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OpenInterestInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type OpenInterestInfo = {
    openInterest?: Maybe<Scalars['Int']>;
    symbol?: Maybe<Scalars['String']>;
    timestamp?: Maybe<Scalars['Int']>;
};
/** Get the orderbook response */
export declare type OrderBookBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OderBookRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the orderbook response */
export declare type OderBookRes = {
    price?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Get the orderbook response */
export declare type SymbolInfoBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<SymbolTickInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the orderbook response */
export declare type SymbolTickInfo = {
    askPrice?: Maybe<Scalars['String']>;
    bidPrice?: Maybe<Scalars['String']>;
    countdownHour?: Maybe<Scalars['Float']>;
    fundingRate?: Maybe<Scalars['String']>;
    highPrice24h?: Maybe<Scalars['String']>;
    indexPrice?: Maybe<Scalars['String']>;
    lastPrice?: Maybe<Scalars['String']>;
    lastTickDirection?: Maybe<Scalars['String']>;
    lowPrice24h?: Maybe<Scalars['String']>;
    markPrice?: Maybe<Scalars['String']>;
    nextFundingTime?: Maybe<Scalars['String']>;
    openInterest?: Maybe<Scalars['Float']>;
    openValue?: Maybe<Scalars['String']>;
    predictedFundingRate?: Maybe<Scalars['String']>;
    prevPrice1h?: Maybe<Scalars['String']>;
    prevPrice24h?: Maybe<Scalars['String']>;
    price1hPcnt?: Maybe<Scalars['String']>;
    price24hPcnt?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    totalTurnover?: Maybe<Scalars['String']>;
    totalVolume?: Maybe<Scalars['Float']>;
    turnover24h?: Maybe<Scalars['String']>;
    volume24h?: Maybe<Scalars['Float']>;
};
/** Get the Trading Records response */
export declare type TradingRecords = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<TradingRecordsInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get the orderbook response */
export declare type TradingRecordsInfo = {
    id?: Maybe<Scalars['Int']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    time?: Maybe<Scalars['String']>;
};
/** Get symbol information. */
export declare type Symbols = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<SymbolInfo>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type SymbolInfo = {
    baseCurrency?: Maybe<Scalars['String']>;
    lotSizeFilter?: Maybe<Array<Maybe<LotSizeFilter2>>>;
    name?: Maybe<Scalars['String']>;
    priceFilter?: Maybe<Array<Maybe<PriceFilter2>>>;
    priceScale?: Maybe<Scalars['Float']>;
    quoteCurrency?: Maybe<Scalars['String']>;
};
export declare type LotSizeFilter2 = {
    maxTradingQty?: Maybe<Scalars['JSON']>;
    minTradingQty?: Maybe<Scalars['JSON']>;
    qtyStep?: Maybe<Scalars['JSON']>;
};
export declare type PriceFilter2 = {
    maxPrice?: Maybe<Scalars['String']>;
    minPrice?: Maybe<Scalars['String']>;
    tickSize?: Maybe<Scalars['String']>;
};
/** Asset Exchange Records */
export declare type ExchangeOrderListBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<ExchangeOrderList>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Asset Exchange Records */
export declare type ExchangeOrderList = {
    createdAt?: Maybe<Scalars['String']>;
    exchangeRate?: Maybe<Scalars['Float']>;
    fromAmount?: Maybe<Scalars['Float']>;
    fromCoin?: Maybe<Scalars['String']>;
    fromFee?: Maybe<Scalars['Float']>;
    toAmount?: Maybe<Scalars['Float']>;
    toCoin?: Maybe<Scalars['String']>;
};
/** Get account withdraw balance response */
export declare type WalletBalanceBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Scalars['JSON']>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get funding record response */
export declare type FundRecordBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<FundingRecords>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get funding record response */
export declare type FundingRecords = {
    address?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['String']>;
    coin?: Maybe<Scalars['String']>;
    crossSeq?: Maybe<Scalars['Float']>;
    execTime?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Float']>;
    txId?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
    walletBalance?: Maybe<Scalars['String']>;
    walletId?: Maybe<Scalars['Float']>;
};
/** Get risk limit. */
export declare type RiskLimitBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<GetRiskLimitRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get risk limit. */
export declare type GetRiskLimitRes = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<RiskIDRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Set risk limit. */
export declare type RiskIDRes = {
    coin?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Float']>;
    isLowestRisk?: Maybe<Scalars['Float']>;
    limit?: Maybe<Scalars['Float']>;
    maintainMargin?: Maybe<Scalars['String']>;
    section?: Maybe<Scalars['String']>;
    startingMargin?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
};
/** Get account withdraw records response */
export declare type WithdrawResBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<WithdrawRecords>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Get withdraw records response */
export declare type WithdrawRecords = {
    address?: Maybe<Scalars['String']>;
    amount?: Maybe<Scalars['String']>;
    coin?: Maybe<Scalars['String']>;
    fee?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Float']>;
    status?: Maybe<Scalars['String']>;
    submitedAt?: Maybe<Scalars['String']>;
    txId?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type Mutation = {
    /**
     * Cancel conditional order.
     *
     * Equivalent to POST /v2/private/stop-order/cancel
     */
    conditionalCancel?: Maybe<Array<Maybe<V2CancelOrderBase>>>;
    /**
     * Cancel conditional order.
     *
     * Equivalent to POST /v2/private/stop-order/cancelAll
     */
    conditionalCancelAll?: Maybe<Array<Maybe<ConditionalCancelAllBase>>>;
    /**
     * Place a new conditional order.
     *
     * Equivalent to POST /v2/private/stop-order/create
     */
    conditionalNew?: Maybe<Array<Maybe<V2ConditionalBase>>>;
    /**
     * Replace conditional order. Only incomplete orders can be modified.
     *
     * Equivalent to POST /v2/private/stop-order/replace
     */
    conditionalReplace?: Maybe<Array<Maybe<ReplaceConditionalBase>>>;
    /**
     * Cancel conditional order.
     *
     * Equivalent to POST /futures/private/stop-order/cancel
     */
    futuresConditionalCancel?: Maybe<Array<Maybe<V2CancelOrderBase>>>;
    /**
     * Cancel conditional order.
     *
     * Equivalent to POST /futures/private/stop-order/cancelAll
     */
    futuresConditionalCancelAll?: Maybe<Array<Maybe<ConditionalCancelAllBase>>>;
    /**
     * Place a new conditional order.
     *
     * Equivalent to POST /futures/private/stop-order/create
     */
    futuresConditionalNew?: Maybe<Array<Maybe<V2ConditionalBase>>>;
    /**
     * Replace conditional order. Only incomplete orders can be modified.
     *
     * Equivalent to POST /futures/private/stop-order/replace
     */
    futuresConditionalReplace?: Maybe<Array<Maybe<ReplaceConditionalBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to POST /futures/private/order/cancel
     */
    futuresOrderCancel?: Maybe<Array<Maybe<OrderCancelBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to POST /futures/private/order/cancelAll
     */
    futuresOrderCancelAll?: Maybe<Array<Maybe<OrderCancelAllBase>>>;
    /**
     * Place active order
     *
     * Equivalent to POST /futures/private/order/create
     */
    futuresOrderNew?: Maybe<Array<Maybe<OrderResBase>>>;
    /**
     * Replace active order. Only incomplete orders can be modified.
     *
     * Equivalent to POST /futures/private/order/replace
     */
    futuresOrderReplace?: Maybe<Array<Maybe<ReplaceOrderBase>>>;
    /**
     * Update margin.
     *
     * Equivalent to POST /futures/private/position/change-position-margin
     */
    futuresPositionsChangeMargin?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Change user leverage.
     *
     * Equivalent to POST /futures/private/position/leverage/save
     */
    futuresPositionsSaveLeverage?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Switch position isolated.
     *
     * Equivalent to POST /futures/private/position/switch-isolated
     */
    futuresPositionsSwitchIsolated?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Switch position mode.
     *
     * Equivalent to POST /futures/private/position/switch-mode
     */
    futuresPositionsSwitchPositionMode?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Set Trading-Stop Condition.
     *
     * Equivalent to POST /futures/private/position/trading-stop
     */
    futuresPositionsTradingStop?: Maybe<Array<Maybe<TradingStopBase>>>;
    /**
     * This will cancel linear active order
     *
     * Equivalent to POST /private/linear/stop-order/cancel
     */
    linearConditionalCancel?: Maybe<Array<Maybe<LinearCancelStopOrderResultBase>>>;
    /**
     * Cancel all stop orders.
     *
     * Equivalent to POST /private/linear/stop-order/cancel-all
     */
    linearConditionalCancelAll?: Maybe<Array<Maybe<LinearStopOrderCancelAllBase>>>;
    /**
     * This will create linear stop order
     *
     * Equivalent to POST /private/linear/stop-order/create
     */
    linearConditionalNew?: Maybe<Array<Maybe<LinearCreateStopOrderResultBase>>>;
    /**
     * Replace conditional order
     *
     * Equivalent to POST /private/linear/stop-order/replace
     */
    linearConditionalReplace?: Maybe<Array<Maybe<LinearStopOrderReplace>>>;
    /**
     * This will cancel linear active order
     *
     * Equivalent to POST /private/linear/order/cancel
     */
    linearOrderCancel?: Maybe<Array<Maybe<LinearCancelOrderResultBase>>>;
    /**
     * Cancel all active orders.
     *
     * Equivalent to POST /private/linear/order/cancel-all
     */
    linearOrderCancelAll?: Maybe<Array<Maybe<LinearOrderCancelAllBase>>>;
    /**
     * This will create linear order
     *
     * Equivalent to POST /private/linear/order/create
     */
    linearOrderNew?: Maybe<Array<Maybe<LinearCreateOrderResultBase>>>;
    /**
     * Replace Active Order
     *
     * Equivalent to POST /private/linear/order/replace
     */
    linearOrderReplace?: Maybe<Array<Maybe<LinearOrderReplace>>>;
    /**
     * This will Add/Reduce Margin
     *
     * Equivalent to POST /private/linear/position/add-margin
     */
    linearPositionsChangeMargin?: Maybe<Array<Maybe<LinearSetMarginResult>>>;
    /**
     * This will Set Leverage
     *
     * Equivalent to POST /private/linear/position/set-leverage
     */
    linearPositionsSaveLeverage?: Maybe<Array<Maybe<LinearSetLeverageResult>>>;
    /**
     * This will Set auto add margin
     *
     * Equivalent to POST /private/linear/position/set-auto-add-margin
     */
    linearPositionsSetAutoAddMargin?: Maybe<Array<Maybe<LinearSetMarginResult>>>;
    /**
     * This will switch isolated
     *
     * Equivalent to POST /private/linear/position/switch-isolated
     */
    linearPositionsSwitchIsolated?: Maybe<Array<Maybe<LinearSwitchIsolatedResult>>>;
    /**
     * This will Switch TP/SL Mode
     *
     * Equivalent to POST /private/linear/tpsl/switch-mode
     */
    linearPositionsSwitchMode?: Maybe<Array<Maybe<LinearSwitchModeResult>>>;
    /**
     * This will set tradingStop
     *
     * Equivalent to POST /private/linear/position/trading-stop
     */
    linearPositionsTradingStop?: Maybe<Array<Maybe<LinearSetTradingStopResult>>>;
    /**
     * This will set risk limit
     *
     * Equivalent to POST /private/linear/position/set-risk
     */
    linearWalletSetRiskLimit?: Maybe<Array<Maybe<LinearSetRiskLimit>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to POST /v2/private/order/cancel
     */
    orderCancel?: Maybe<Array<Maybe<OrderCancelBase>>>;
    /**
     * Get my active order list.
     *
     * Equivalent to POST /v2/private/order/cancelAll
     */
    orderCancelAll?: Maybe<Array<Maybe<OrderCancelAllBase>>>;
    /**
     * Place active order
     *
     * Equivalent to POST /v2/private/order/create
     */
    orderNew?: Maybe<Array<Maybe<OrderResBase>>>;
    /**
     * Replace active order. Only incomplete orders can be modified.
     *
     * Equivalent to POST /v2/private/order/replace
     */
    orderReplace?: Maybe<Array<Maybe<ReplaceOrderBase>>>;
    /**
     * Update margin.
     *
     * Equivalent to POST /position/change-position-margin
     */
    positionsChangeMargin?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Change user leverage.
     *
     * Equivalent to POST /user/leverage/save
     */
    positionsSaveLeverage?: Maybe<Array<Maybe<ServerTime>>>;
    /**
     * Set Trading-Stop Condition.
     *
     * Equivalent to POST /open-api/position/trading-stop
     */
    positionsTradingStop?: Maybe<Array<Maybe<TradingStopBase>>>;
    /**
     * Set risk limit
     *
     * Equivalent to POST /open-api/wallet/risk-limit
     */
    walletSetRiskLimit?: Maybe<Array<Maybe<SetRiskLimitBase>>>;
};
export declare type MutationconditionalCancelArgs = {
    v2PrivateStopOrderCancelInput?: Maybe<V2PrivateStopOrderCancelInput>;
};
export declare type MutationconditionalCancelAllArgs = {
    v2PrivateStopOrderCancelAllInput: V2PrivateStopOrderCancelAllInput;
};
export declare type MutationconditionalNewArgs = {
    v2PrivateStopOrderCreateInput: V2PrivateStopOrderCreateInput;
};
export declare type MutationconditionalReplaceArgs = {
    v2PrivateStopOrderReplaceInput?: Maybe<V2PrivateStopOrderReplaceInput>;
};
export declare type MutationfuturesConditionalCancelArgs = {
    futuresPrivateStopOrderCancelInput?: Maybe<FuturesPrivateStopOrderCancelInput>;
};
export declare type MutationfuturesConditionalCancelAllArgs = {
    futuresPrivateStopOrderCancelAllInput: FuturesPrivateStopOrderCancelAllInput;
};
export declare type MutationfuturesConditionalNewArgs = {
    futuresPrivateStopOrderCreateInput: FuturesPrivateStopOrderCreateInput;
};
export declare type MutationfuturesConditionalReplaceArgs = {
    futuresPrivateStopOrderReplaceInput?: Maybe<FuturesPrivateStopOrderReplaceInput>;
};
export declare type MutationfuturesOrderCancelArgs = {
    futuresPrivateOrderCancelInput?: Maybe<FuturesPrivateOrderCancelInput>;
};
export declare type MutationfuturesOrderCancelAllArgs = {
    futuresPrivateOrderCancelAllInput: FuturesPrivateOrderCancelAllInput;
};
export declare type MutationfuturesOrderNewArgs = {
    futuresPrivateOrderCreateInput: FuturesPrivateOrderCreateInput;
};
export declare type MutationfuturesOrderReplaceArgs = {
    futuresPrivateOrderReplaceInput?: Maybe<FuturesPrivateOrderReplaceInput>;
};
export declare type MutationfuturesPositionsChangeMarginArgs = {
    futuresPrivatePositionChangePositionMarginInput: FuturesPrivatePositionChangePositionMarginInput;
};
export declare type MutationfuturesPositionsSaveLeverageArgs = {
    futuresPrivatePositionLeverageSaveInput: FuturesPrivatePositionLeverageSaveInput;
};
export declare type MutationfuturesPositionsSwitchIsolatedArgs = {
    futuresPrivatePositionSwitchIsolatedInput: FuturesPrivatePositionSwitchIsolatedInput;
};
export declare type MutationfuturesPositionsSwitchPositionModeArgs = {
    futuresPrivatePositionSwitchModeInput: FuturesPrivatePositionSwitchModeInput;
};
export declare type MutationfuturesPositionsTradingStopArgs = {
    futuresPrivatePositionTradingStopInput: FuturesPrivatePositionTradingStopInput;
};
export declare type MutationlinearConditionalCancelArgs = {
    privateLinearStopOrderCancelInput?: Maybe<PrivateLinearStopOrderCancelInput>;
};
export declare type MutationlinearConditionalCancelAllArgs = {
    privateLinearStopOrderCancelAllInput: PrivateLinearStopOrderCancelAllInput;
};
export declare type MutationlinearConditionalNewArgs = {
    privateLinearStopOrderCreateInput?: Maybe<PrivateLinearStopOrderCreateInput>;
};
export declare type MutationlinearConditionalReplaceArgs = {
    privateLinearStopOrderReplaceInput: PrivateLinearStopOrderReplaceInput;
};
export declare type MutationlinearOrderCancelArgs = {
    privateLinearOrderCancelInput?: Maybe<PrivateLinearOrderCancelInput>;
};
export declare type MutationlinearOrderCancelAllArgs = {
    privateLinearOrderCancelAllInput: PrivateLinearOrderCancelAllInput;
};
export declare type MutationlinearOrderNewArgs = {
    privateLinearOrderCreateInput?: Maybe<PrivateLinearOrderCreateInput>;
};
export declare type MutationlinearOrderReplaceArgs = {
    privateLinearOrderReplaceInput: PrivateLinearOrderReplaceInput;
};
export declare type MutationlinearPositionsChangeMarginArgs = {
    privateLinearPositionAddMarginInput?: Maybe<PrivateLinearPositionAddMarginInput>;
};
export declare type MutationlinearPositionsSaveLeverageArgs = {
    privateLinearPositionSetLeverageInput?: Maybe<PrivateLinearPositionSetLeverageInput>;
};
export declare type MutationlinearPositionsSetAutoAddMarginArgs = {
    privateLinearPositionSetAutoAddMarginInput?: Maybe<PrivateLinearPositionSetAutoAddMarginInput>;
};
export declare type MutationlinearPositionsSwitchIsolatedArgs = {
    privateLinearPositionSwitchIsolatedInput?: Maybe<PrivateLinearPositionSwitchIsolatedInput>;
};
export declare type MutationlinearPositionsSwitchModeArgs = {
    privateLinearTpslSwitchModeInput?: Maybe<PrivateLinearTpslSwitchModeInput>;
};
export declare type MutationlinearPositionsTradingStopArgs = {
    privateLinearPositionTradingStopInput?: Maybe<PrivateLinearPositionTradingStopInput>;
};
export declare type MutationlinearWalletSetRiskLimitArgs = {
    privateLinearPositionSetRiskInput: PrivateLinearPositionSetRiskInput;
};
export declare type MutationorderCancelArgs = {
    v2PrivateOrderCancelInput?: Maybe<V2PrivateOrderCancelInput>;
};
export declare type MutationorderCancelAllArgs = {
    v2PrivateOrderCancelAllInput: V2PrivateOrderCancelAllInput;
};
export declare type MutationorderNewArgs = {
    v2PrivateOrderCreateInput: V2PrivateOrderCreateInput;
};
export declare type MutationorderReplaceArgs = {
    v2PrivateOrderReplaceInput?: Maybe<V2PrivateOrderReplaceInput>;
};
export declare type MutationpositionsChangeMarginArgs = {
    positionChangePositionMarginInput: PositionChangePositionMarginInput;
};
export declare type MutationpositionsSaveLeverageArgs = {
    userLeverageSaveInput: UserLeverageSaveInput;
};
export declare type MutationpositionsTradingStopArgs = {
    openApiPositionTradingStopInput: OpenApiPositionTradingStopInput;
};
export declare type MutationwalletSetRiskLimitArgs = {
    openApiWalletRiskLimitInput: OpenApiWalletRiskLimitInput;
};
/** Place new conditional order response */
export declare type V2CancelOrderBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<Result22ListItem>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Cancel Stop Order */
export declare type Result22ListItem = {
    stopOrderId?: Maybe<Scalars['String']>;
};
export declare type V2PrivateStopOrderCancelInput = {
    /** Agency customized order ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order ID of conditional order. */
    stopOrderId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Cancel all conditional order response */
export declare type ConditionalCancelAllBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<ConditionalCancelAllRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Cancel all conditional order response */
export declare type ConditionalCancelAllRes = {
    cancelType?: Maybe<Scalars['String']>;
    clOrdID?: Maybe<Scalars['String']>;
    createType?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    crossSeq?: Maybe<Scalars['Float']>;
    leavesQty?: Maybe<Scalars['Float']>;
    leavesValue?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    stopOrderType?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    triggerBy?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type V2PrivateStopOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Place new conditional order response */
export declare type V2ConditionalBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<V2ConditionalRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Place new conditional order response */
export declare type V2ConditionalRes = {
    basePrice?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['String']>;
    rejectReason?: Maybe<Scalars['String']>;
    remark?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    stopPx?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    triggerBy?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type V2PrivateStopOrderCreateInput = {
    /** Send current market price. It will be used to compare with the value of 'stop_px', to decide whether your conditional order will be triggered by crossing trigger price from upper side or lower side. Mainly used to identify the expected direction of the current conditional order.. */
    basePrice: Scalars['String'];
    /** close on trigger. */
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    /** Customized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique.. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Conditional order type. */
    orderType: Scalars['String'];
    /** Execution price for conditional order */
    price?: Maybe<Scalars['String']>;
    /** Order quantity. */
    qty: Scalars['String'];
    /** Side. */
    side: Scalars['String'];
    /** Trigger price. */
    stopPx: Scalars['String'];
    /** Contract type. */
    symbol: Scalars['String'];
    /** Time in force. */
    timeInForce: Scalars['String'];
    /** Trigger price type. Default LastPrice. */
    triggerBy?: Maybe<Scalars['String']>;
};
/** Replace conditional order response */
export declare type ReplaceConditionalBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<Result24ListItem>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Replace conditional order */
export declare type Result24ListItem = {
    stopOrderId?: Maybe<Scalars['String']>;
};
export declare type V2PrivateStopOrderReplaceInput = {
    /** Order Link ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order price. */
    pRPrice?: Maybe<Scalars['String']>;
    /** Order quantity. */
    pRQty?: Maybe<Scalars['String']>;
    /** Trigger price. */
    pRTriggerPrice?: Maybe<Scalars['String']>;
    /** Stop order ID. */
    stopOrderId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type FuturesPrivateStopOrderCancelInput = {
    /** Agency customized order ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order ID of conditional order. */
    stopOrderId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type FuturesPrivateStopOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type FuturesPrivateStopOrderCreateInput = {
    /** Send current market price. It will be used to compare with the value of 'stop_px', to decide whether your conditional order will be triggered by crossing trigger price from upper side or lower side. Mainly used to identify the expected direction of the current conditional order.. */
    basePrice: Scalars['String'];
    /** close on trigger. */
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    /** Customized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique.. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Conditional order type. */
    orderType: Scalars['String'];
    /** Execution price for conditional order */
    price?: Maybe<Scalars['String']>;
    /** Order quantity. */
    qty: Scalars['String'];
    /** Side. */
    side: Scalars['String'];
    /** Trigger price. */
    stopPx: Scalars['String'];
    /** Contract type. */
    symbol: Scalars['String'];
    /** Time in force. */
    timeInForce: Scalars['String'];
    /** Trigger price type. Default LastPrice. */
    triggerBy?: Maybe<Scalars['String']>;
};
export declare type FuturesPrivateStopOrderReplaceInput = {
    /** Order Link ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order price. */
    pRPrice?: Maybe<Scalars['String']>;
    /** Order quantity. */
    pRQty?: Maybe<Scalars['String']>;
    /** Trigger price. */
    pRTriggerPrice?: Maybe<Scalars['String']>;
    /** Stop order ID. */
    stopOrderId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
/** cancel order response */
export declare type OrderCancelBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OrderRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Place new order response */
export declare type OrderRes = {
    createdAt?: Maybe<Scalars['String']>;
    cumExecFee?: Maybe<Scalars['Float']>;
    cumExecQty?: Maybe<Scalars['Float']>;
    cumExecValue?: Maybe<Scalars['Float']>;
    lastExecPrice?: Maybe<Scalars['Float']>;
    lastExecTime?: Maybe<Scalars['Float']>;
    leavesQty?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['String']>;
    rejectReason?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type FuturesPrivateOrderCancelInput = {
    /** Order ID */
    orderId?: Maybe<Scalars['String']>;
    /** Order link id. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Cancel all active orders response */
export declare type OrderCancelAllBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OrderCancelAllRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Cancel all active orders response */
export declare type OrderCancelAllRes = {
    clOrdID?: Maybe<Scalars['String']>;
    createType?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    crossSeq?: Maybe<Scalars['Float']>;
    crossStatus?: Maybe<Scalars['String']>;
    leavesQty?: Maybe<Scalars['Float']>;
    leavesValue?: Maybe<Scalars['Float']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
    qty?: Maybe<Scalars['String']>;
    side?: Maybe<Scalars['String']>;
    timeInForce?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type FuturesPrivateOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Place new order response */
export declare type OrderResBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OrderRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type FuturesPrivateOrderCreateInput = {
    /** close on trigger */
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    /** TCustomized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Active order type */
    orderType: Scalars['String'];
    /** Order price. */
    price?: Maybe<Scalars['Float']>;
    qty: Scalars['Float'];
    /** reduce only */
    reduceOnly?: Maybe<Scalars['Boolean']>;
    /** Side */
    side: Scalars['String'];
    /** stop loss price */
    stopLoss?: Maybe<Scalars['Float']>;
    /** Contract type. */
    symbol: Scalars['String'];
    /** take profit price */
    takeProfit?: Maybe<Scalars['Float']>;
    /** Time in force */
    timeInForce: Scalars['String'];
};
/** Replace active order response */
export declare type ReplaceOrderBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<Result18ListItem>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Replace active order */
export declare type Result18ListItem = {
    stopOrderId?: Maybe<Scalars['String']>;
};
export declare type FuturesPrivateOrderReplaceInput = {
    /** Order ID. */
    orderId?: Maybe<Scalars['String']>;
    /** Order Link ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order price. */
    pRPrice?: Maybe<Scalars['String']>;
    /** Order quantity. */
    pRQty?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type FuturesPrivatePositionChangePositionMarginInput = {
    /** New margin you want set */
    margin: Scalars['String'];
    /** Contract type which you want update its margin */
    symbol: Scalars['String'];
};
export declare type FuturesPrivatePositionLeverageSaveInput = {
    /** New buy leverage you want set */
    buyLeverage: Scalars['String'];
    /** Position idx, used to identify positions in different position modes */
    positionIdx: Scalars['Int'];
    /** New sell leverage you want set */
    sellLeverage: Scalars['String'];
    /** A symbol which you want change its leverage */
    symbol: Scalars['String'];
};
export declare type FuturesPrivatePositionSwitchIsolatedInput = {
    /** New buy leverage you want set */
    buyLeverage: Scalars['String'];
    /** Position margin mode */
    isIsolated?: Maybe<Scalars['Boolean']>;
    /** Position idx, used to identify positions in different position modes */
    positionIdx: Scalars['Int'];
    /** New sell leverage you want set */
    sellLeverage: Scalars['String'];
    /** A symbol which you want change its leverage */
    symbol: Scalars['String'];
};
export declare type FuturesPrivatePositionSwitchModeInput = {
    /** Position Mode. 0: One-Way Mode; 3: Hedge Mode */
    mode: Scalars['Int'];
    /** A symbol which you want change its leverage */
    symbol: Scalars['String'];
};
/** Set Trading-Stop Condition response */
export declare type TradingStopBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<TradingStopRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Set Trading-Stop Condition response */
export declare type TradingStopRes = {
    autoAddMargin?: Maybe<Scalars['Float']>;
    bustPrice?: Maybe<Scalars['Float']>;
    createdAt?: Maybe<Scalars['String']>;
    crossSeq?: Maybe<Scalars['Float']>;
    cumCommission?: Maybe<Scalars['Float']>;
    cumRealisedPnl?: Maybe<Scalars['Float']>;
    deleverageIndicator?: Maybe<Scalars['Float']>;
    entryPrice?: Maybe<Scalars['Float']>;
    id?: Maybe<Scalars['Float']>;
    leverage?: Maybe<Scalars['Float']>;
    liqPrice?: Maybe<Scalars['Float']>;
    ocCalcData?: Maybe<Scalars['String']>;
    occClosingFee?: Maybe<Scalars['Float']>;
    occFundingFee?: Maybe<Scalars['Float']>;
    orderMargin?: Maybe<Scalars['Float']>;
    positionMargin?: Maybe<Scalars['Float']>;
    positionSeq?: Maybe<Scalars['Float']>;
    positionStatus?: Maybe<Scalars['String']>;
    positionValue?: Maybe<Scalars['Float']>;
    realisedPnl?: Maybe<Scalars['Float']>;
    riskId?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
    walletBalance?: Maybe<Scalars['Float']>;
};
export declare type FuturesPrivatePositionTradingStopInput = {
    /** Trailing stop trigger price. Trailing stops are triggered only when the price reaches the specified price. Trailing stops are triggered immediately by default. */
    newTrailingActive?: Maybe<Scalars['String']>;
    /** Not less than 0, 0 means cancel SL */
    stopLoss?: Maybe<Scalars['String']>;
    /** Contract type */
    symbol: Scalars['String'];
    /** Not less than 0, 0 means cancel TP */
    takeProfit?: Maybe<Scalars['String']>;
    /** Not less than 0, 0 means cancel TS */
    trailingStop?: Maybe<Scalars['String']>;
};
/** Cancel Linear Stop Order Base */
export declare type LinearCancelStopOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearCancelStopOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Cancel Linear Stop Order */
export declare type LinearCancelStopOrderResult = {
    stopOrderId?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearStopOrderCancelInput = {
    orderLinkId?: Maybe<Scalars['String']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Cancel all linear stop orders response */
export declare type LinearStopOrderCancelAllBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<Scalars['String']>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearStopOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Create Linear Stop Order Base */
export declare type LinearCreateStopOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearCreateStopOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Create Linear Stop Order */
export declare type LinearCreateStopOrderResult = {
    createdAt?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    triggerPrice?: Maybe<Scalars['Float']>;
    updatedAt?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type PrivateLinearStopOrderCreateInput = {
    basePrice?: Maybe<Scalars['Float']>;
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    reduceOnly?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    stopPx?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    triggerBy?: Maybe<Scalars['String']>;
};
/** replace conditional order can modify/amend your conditional orders */
export declare type LinearStopOrderReplace = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OrderIdRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Order Id response */
export declare type OrderIdRes = {
    orderId?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearStopOrderReplaceInput = {
    orderLinkId?: Maybe<Scalars['String']>;
    pRPrice?: Maybe<Scalars['Float']>;
    pRQty?: Maybe<Scalars['String']>;
    pRTriggerPrice?: Maybe<Scalars['Float']>;
    stopOrderId?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
/** Create Linear Order Base */
export declare type LinearCancelOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearCancelOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Create Linear Order */
export declare type LinearCancelOrderResult = {
    orderId?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearOrderCancelInput = {
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Cancel all linear active orders response */
export declare type LinearOrderCancelAllBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<Scalars['String']>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
/** Create Linear Order Base */
export declare type LinearCreateOrderResultBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<LinearCreateOrderResult>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Create Linear Order */
export declare type LinearCreateOrderResult = {
    createdTime?: Maybe<Scalars['String']>;
    cumExecFee?: Maybe<Scalars['Float']>;
    cumExecQty?: Maybe<Scalars['Float']>;
    cumExecValue?: Maybe<Scalars['Float']>;
    lastExecPrice?: Maybe<Scalars['Float']>;
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderStatus?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    reduceOnly?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    updatedTime?: Maybe<Scalars['String']>;
    userId?: Maybe<Scalars['Float']>;
};
export declare type PrivateLinearOrderCreateInput = {
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    orderLinkId?: Maybe<Scalars['String']>;
    orderType?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    qty?: Maybe<Scalars['Float']>;
    reduceOnly?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    timeInForce?: Maybe<Scalars['String']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
};
/** replace order can modify/amend your active orders */
export declare type LinearOrderReplace = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<OrderIdRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearOrderReplaceInput = {
    orderId?: Maybe<Scalars['String']>;
    orderLinkId?: Maybe<Scalars['String']>;
    pRPrice?: Maybe<Scalars['Float']>;
    pRQty?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
};
export declare type LinearSetMarginResult = {
    availableBalance?: Maybe<Scalars['Float']>;
    positionListResult?: Maybe<Array<Maybe<LinearPositionListResult>>>;
    walletBalance?: Maybe<Scalars['Float']>;
};
export declare type PrivateLinearPositionAddMarginInput = {
    margin?: Maybe<Scalars['Float']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Set leverage result */
export declare type LinearSetLeverageResult = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Scalars['JSON']>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearPositionSetLeverageInput = {
    buyLeverage?: Maybe<Scalars['Float']>;
    sellLeverage?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearPositionSetAutoAddMarginInput = {
    autoAddMargin?: Maybe<Scalars['Boolean']>;
    side?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
};
/** Switch isolated result */
export declare type LinearSwitchIsolatedResult = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Scalars['JSON']>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearPositionSwitchIsolatedInput = {
    buyLeverage?: Maybe<Scalars['Float']>;
    isIsolated?: Maybe<Scalars['Boolean']>;
    sellLeverage?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};
export declare type LinearSwitchModeResult = {
    tpSlMode?: Maybe<Scalars['Float']>;
};
export declare type PrivateLinearTpslSwitchModeInput = {
    symbol?: Maybe<Scalars['String']>;
    tpSlMode?: Maybe<Scalars['String']>;
};
/** Set Trading Stop result */
export declare type LinearSetTradingStopResult = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Scalars['JSON']>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type PrivateLinearPositionTradingStopInput = {
    side?: Maybe<Scalars['String']>;
    slSize?: Maybe<Scalars['Float']>;
    slTriggerBy?: Maybe<Scalars['String']>;
    stopLoss?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
    takeProfit?: Maybe<Scalars['Float']>;
    tpSize?: Maybe<Scalars['Float']>;
    tpTriggerBy?: Maybe<Scalars['String']>;
    trailingStop?: Maybe<Scalars['Float']>;
};
/** Set risk limit. */
export declare type LinearSetRiskLimit = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Result63>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
export declare type Result63 = {
    riskId?: Maybe<Scalars['Float']>;
};
export declare type PrivateLinearPositionSetRiskInput = {
    /** Risk ID. Can be found with the Get risk limit list endpoint. */
    riskId: Scalars['Float'];
    side?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type V2PrivateOrderCancelInput = {
    /** Order ID */
    orderId?: Maybe<Scalars['String']>;
    /** Order link id. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type V2PrivateOrderCancelAllInput = {
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type V2PrivateOrderCreateInput = {
    /** close on trigger */
    closeOnTrigger?: Maybe<Scalars['Boolean']>;
    /** TCustomized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Active order type */
    orderType: Scalars['String'];
    /** Order price. */
    price?: Maybe<Scalars['Float']>;
    qty: Scalars['Float'];
    /** reduce only */
    reduceOnly?: Maybe<Scalars['Boolean']>;
    /** Side */
    side: Scalars['String'];
    /** stop loss price */
    stopLoss?: Maybe<Scalars['Float']>;
    /** Contract type. */
    symbol: Scalars['String'];
    /** take profit price */
    takeProfit?: Maybe<Scalars['Float']>;
    /** Time in force */
    timeInForce: Scalars['String'];
};
export declare type V2PrivateOrderReplaceInput = {
    /** Order ID. */
    orderId?: Maybe<Scalars['String']>;
    /** Order Link ID. */
    orderLinkId?: Maybe<Scalars['String']>;
    /** Order price. */
    pRPrice?: Maybe<Scalars['String']>;
    /** Order quantity. */
    pRQty?: Maybe<Scalars['String']>;
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type PositionChangePositionMarginInput = {
    /** New margin you want set */
    margin: Scalars['String'];
    /** Contract type which you want update its margin */
    symbol: Scalars['String'];
};
export declare type UserLeverageSaveInput = {
    /** New leverage you want set */
    leverage: Scalars['String'];
    /** A symbol which you want change its leverage */
    symbol: Scalars['String'];
};
export declare type OpenApiPositionTradingStopInput = {
    /** Trailing stop trigger price. Trailing stops are triggered only when the price reaches the specified price. Trailing stops are triggered immediately by default. */
    newTrailingActive?: Maybe<Scalars['String']>;
    /** Not less than 0, 0 means cancel SL */
    stopLoss?: Maybe<Scalars['String']>;
    /** Contract type */
    symbol: Scalars['String'];
    /** Not less than 0, 0 means cancel TP */
    takeProfit?: Maybe<Scalars['String']>;
    /** Not less than 0, 0 means cancel TS */
    trailingStop?: Maybe<Scalars['String']>;
};
/** Set risk limit. */
export declare type SetRiskLimitBase = {
    extCode?: Maybe<Scalars['String']>;
    extInfo?: Maybe<Scalars['String']>;
    result?: Maybe<Array<Maybe<RiskLimitRes>>>;
    retCode?: Maybe<Scalars['Float']>;
    retMsg?: Maybe<Scalars['String']>;
    timeNow?: Maybe<Scalars['String']>;
};
/** Set risk limit. */
export declare type RiskLimitRes = {
    position?: Maybe<Array<Maybe<PositionInfo>>>;
    risk?: Maybe<Array<Maybe<RiskIDRes>>>;
};
export declare type OpenApiWalletRiskLimitInput = {
    /** Risk ID. Can be found with the Get risk limit list endpoint. */
    riskId: Scalars['Float'];
    /** Contract type. */
    symbol: Scalars['String'];
};
export declare type WithIndex<TObject> = TObject & Record<string, any>;
export declare type ResolversObject<TObject> = WithIndex<TObject>;
export declare type ResolverTypeWrapper<T> = Promise<T> | T;
export declare type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export declare type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;
export declare type ResolverFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => Promise<TResult> | TResult;
export declare type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;
export declare type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{
        [key in TKey]: TResult;
    }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, {
        [key in TKey]: TResult;
    }, TContext, TArgs>;
}
export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}
export declare type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> = SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs> | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;
export declare type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> = ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>) | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;
export declare type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (parent: TParent, context: TContext, info: GraphQLResolveInfo) => Maybe<TTypes> | Promise<Maybe<TTypes>>;
export declare type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;
export declare type NextResolverFn<T> = () => Promise<T>;
export declare type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (next: NextResolverFn<TResult>, parent: TParent, args: TArgs, context: TContext, info: GraphQLResolveInfo) => TResult | Promise<TResult>;
/** Mapping between all available schema types and the resolvers types */
export declare type ResolversTypes = ResolversObject<{
    Query: ResolverTypeWrapper<{}>;
    APIKeyBase: ResolverTypeWrapper<APIKeyBase>;
    String: ResolverTypeWrapper<Scalars['String']>;
    APIKeyInfo: ResolverTypeWrapper<APIKeyInfo>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
    Float: ResolverTypeWrapper<Scalars['Float']>;
    Announcement: ResolverTypeWrapper<Announcement>;
    AnnouncementInfo: ResolverTypeWrapper<AnnouncementInfo>;
    LCPInfo: ResolverTypeWrapper<LCPInfo>;
    LCPInfoBase: ResolverTypeWrapper<LCPInfoBase>;
    ServerTime: ResolverTypeWrapper<ServerTime>;
    JSON: ResolverTypeWrapper<Scalars['JSON']>;
    ConditionalOrdersResBase: ResolverTypeWrapper<ConditionalOrdersResBase>;
    ConditionalOrdersRes: ResolverTypeWrapper<ConditionalOrdersRes>;
    V2ConditionalListRes: ResolverTypeWrapper<V2ConditionalListRes>;
    StopOrderOrdersResBase: ResolverTypeWrapper<StopOrderOrdersResBase>;
    ConditionalRes: ResolverTypeWrapper<ConditionalRes>;
    TradeRecordsBase: ResolverTypeWrapper<TradeRecordsBase>;
    TradeRecords: ResolverTypeWrapper<TradeRecords>;
    TradeRecordsInfo: ResolverTypeWrapper<TradeRecordsInfo>;
    FundingFeeBase: ResolverTypeWrapper<FundingFeeBase>;
    FundingFeeRes: ResolverTypeWrapper<FundingFeeRes>;
    FundingPredictedBase: ResolverTypeWrapper<FundingPredictedBase>;
    FundingPredicted: ResolverTypeWrapper<FundingPredicted>;
    FundingRateBase: ResolverTypeWrapper<FundingRateBase>;
    FundingRate2: ResolverTypeWrapper<FundingRate2>;
    V2OrderListBase: ResolverTypeWrapper<V2OrderListBase>;
    V2OrderListData: ResolverTypeWrapper<V2OrderListData>;
    V2OrderRes: ResolverTypeWrapper<V2OrderRes>;
    QueryOrderBase: ResolverTypeWrapper<QueryOrderBase>;
    QueryOrderRes: ResolverTypeWrapper<QueryOrderRes>;
    ExtFields2: ResolverTypeWrapper<ExtFields2>;
    ClosedPnlBase: ResolverTypeWrapper<ClosedPnlBase>;
    ClosedPnlInfo: ResolverTypeWrapper<ClosedPnlInfo>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    Position: ResolverTypeWrapper<Position>;
    PositionInfo: ResolverTypeWrapper<PositionInfo>;
    KlineBase: ResolverTypeWrapper<KlineBase>;
    KlineRes: ResolverTypeWrapper<KlineRes>;
    IndexPriceKlineBase: ResolverTypeWrapper<IndexPriceKlineBase>;
    IndexPriceKlineInfo: ResolverTypeWrapper<IndexPriceKlineInfo>;
    MarkPriceKlineBase: ResolverTypeWrapper<MarkPriceKlineBase>;
    MarkPriceKlineInfo: ResolverTypeWrapper<MarkPriceKlineInfo>;
    PremiumIndexPriceKlineBase: ResolverTypeWrapper<PremiumIndexPriceKlineBase>;
    PremiumIndexPriceKlineInfo: ResolverTypeWrapper<PremiumIndexPriceKlineInfo>;
    LinearStopOrderRecordsResponseBase: ResolverTypeWrapper<LinearStopOrderRecordsResponseBase>;
    LinearStopOrderRecordsResponse: ResolverTypeWrapper<LinearStopOrderRecordsResponse>;
    LinearListStopOrderResult: ResolverTypeWrapper<LinearListStopOrderResult>;
    LinearSearchStopOrderResultBase: ResolverTypeWrapper<LinearSearchStopOrderResultBase>;
    LinearSearchStopOrderResult: ResolverTypeWrapper<LinearSearchStopOrderResult>;
    LinearTradeRecordsResponse: ResolverTypeWrapper<LinearTradeRecordsResponse>;
    LinearTradeRecordItem: ResolverTypeWrapper<LinearTradeRecordItem>;
    LinearPrevFundingRespBase: ResolverTypeWrapper<LinearPrevFundingRespBase>;
    LinearPrevFundingResp: ResolverTypeWrapper<LinearPrevFundingResp>;
    LinearFundingPredictedBase: ResolverTypeWrapper<LinearFundingPredictedBase>;
    LinearFundingPredicted: ResolverTypeWrapper<LinearFundingPredicted>;
    LinearPrevFundingRateRespBase: ResolverTypeWrapper<LinearPrevFundingRateRespBase>;
    LinearPrevFundingRateResp: ResolverTypeWrapper<LinearPrevFundingRateResp>;
    LinearKlineRespBase: ResolverTypeWrapper<LinearKlineRespBase>;
    LinearKlineResp: ResolverTypeWrapper<LinearKlineResp>;
    LinearRecentTradingRecordRespBase: ResolverTypeWrapper<LinearRecentTradingRecordRespBase>;
    LinearRecentTradingRecordResp: ResolverTypeWrapper<LinearRecentTradingRecordResp>;
    LinearOrderRecordsResponseBase: ResolverTypeWrapper<LinearOrderRecordsResponseBase>;
    LinearOrderRecordsResponse: ResolverTypeWrapper<LinearOrderRecordsResponse>;
    LinearListOrderResult: ResolverTypeWrapper<LinearListOrderResult>;
    LinearSearchOrderResultBase: ResolverTypeWrapper<LinearSearchOrderResultBase>;
    LinearSearchOrderResult: ResolverTypeWrapper<LinearSearchOrderResult>;
    LinearClosePnlRecordsResponse: ResolverTypeWrapper<LinearClosePnlRecordsResponse>;
    LinearClosedPnlRecordResult: ResolverTypeWrapper<LinearClosedPnlRecordResult>;
    LinearPositionListResultBase: ResolverTypeWrapper<LinearPositionListResultBase>;
    LinearPositionListResult: ResolverTypeWrapper<LinearPositionListResult>;
    LinearRiskLimitRespBase: ResolverTypeWrapper<LinearRiskLimitRespBase>;
    LinearRiskLimitResp: ResolverTypeWrapper<LinearRiskLimitResp>;
    PublicLinearRiskLimitInput: PublicLinearRiskLimitInput;
    AccountRatio: ResolverTypeWrapper<AccountRatio>;
    AccountRatioInfo: ResolverTypeWrapper<AccountRatioInfo>;
    BigDeal: ResolverTypeWrapper<BigDeal>;
    BigDealInfo: ResolverTypeWrapper<BigDealInfo>;
    LiqRecords: ResolverTypeWrapper<LiqRecords>;
    LiqRecordsInfo: ResolverTypeWrapper<LiqRecordsInfo>;
    OpenInterest2: ResolverTypeWrapper<OpenInterest2>;
    OpenInterestInfo: ResolverTypeWrapper<OpenInterestInfo>;
    OrderBookBase: ResolverTypeWrapper<OrderBookBase>;
    OderBookRes: ResolverTypeWrapper<OderBookRes>;
    SymbolInfoBase: ResolverTypeWrapper<SymbolInfoBase>;
    SymbolTickInfo: ResolverTypeWrapper<SymbolTickInfo>;
    TradingRecords: ResolverTypeWrapper<TradingRecords>;
    TradingRecordsInfo: ResolverTypeWrapper<TradingRecordsInfo>;
    Symbols: ResolverTypeWrapper<Symbols>;
    SymbolInfo: ResolverTypeWrapper<SymbolInfo>;
    LotSizeFilter2: ResolverTypeWrapper<LotSizeFilter2>;
    PriceFilter2: ResolverTypeWrapper<PriceFilter2>;
    ExchangeOrderListBase: ResolverTypeWrapper<ExchangeOrderListBase>;
    ExchangeOrderList: ResolverTypeWrapper<ExchangeOrderList>;
    WalletBalanceBase: ResolverTypeWrapper<WalletBalanceBase>;
    FundRecordBase: ResolverTypeWrapper<FundRecordBase>;
    FundingRecords: ResolverTypeWrapper<FundingRecords>;
    RiskLimitBase: ResolverTypeWrapper<RiskLimitBase>;
    GetRiskLimitRes: ResolverTypeWrapper<GetRiskLimitRes>;
    RiskIDRes: ResolverTypeWrapper<RiskIDRes>;
    WithdrawResBase: ResolverTypeWrapper<WithdrawResBase>;
    WithdrawRecords: ResolverTypeWrapper<WithdrawRecords>;
    Mutation: ResolverTypeWrapper<{}>;
    V2CancelOrderBase: ResolverTypeWrapper<V2CancelOrderBase>;
    Result22ListItem: ResolverTypeWrapper<Result22ListItem>;
    V2PrivateStopOrderCancelInput: V2PrivateStopOrderCancelInput;
    ConditionalCancelAllBase: ResolverTypeWrapper<ConditionalCancelAllBase>;
    ConditionalCancelAllRes: ResolverTypeWrapper<ConditionalCancelAllRes>;
    V2PrivateStopOrderCancelAllInput: V2PrivateStopOrderCancelAllInput;
    V2ConditionalBase: ResolverTypeWrapper<V2ConditionalBase>;
    V2ConditionalRes: ResolverTypeWrapper<V2ConditionalRes>;
    V2PrivateStopOrderCreateInput: V2PrivateStopOrderCreateInput;
    ReplaceConditionalBase: ResolverTypeWrapper<ReplaceConditionalBase>;
    Result24ListItem: ResolverTypeWrapper<Result24ListItem>;
    V2PrivateStopOrderReplaceInput: V2PrivateStopOrderReplaceInput;
    FuturesPrivateStopOrderCancelInput: FuturesPrivateStopOrderCancelInput;
    FuturesPrivateStopOrderCancelAllInput: FuturesPrivateStopOrderCancelAllInput;
    FuturesPrivateStopOrderCreateInput: FuturesPrivateStopOrderCreateInput;
    FuturesPrivateStopOrderReplaceInput: FuturesPrivateStopOrderReplaceInput;
    OrderCancelBase: ResolverTypeWrapper<OrderCancelBase>;
    OrderRes: ResolverTypeWrapper<OrderRes>;
    FuturesPrivateOrderCancelInput: FuturesPrivateOrderCancelInput;
    OrderCancelAllBase: ResolverTypeWrapper<OrderCancelAllBase>;
    OrderCancelAllRes: ResolverTypeWrapper<OrderCancelAllRes>;
    FuturesPrivateOrderCancelAllInput: FuturesPrivateOrderCancelAllInput;
    OrderResBase: ResolverTypeWrapper<OrderResBase>;
    FuturesPrivateOrderCreateInput: FuturesPrivateOrderCreateInput;
    ReplaceOrderBase: ResolverTypeWrapper<ReplaceOrderBase>;
    Result18ListItem: ResolverTypeWrapper<Result18ListItem>;
    FuturesPrivateOrderReplaceInput: FuturesPrivateOrderReplaceInput;
    FuturesPrivatePositionChangePositionMarginInput: FuturesPrivatePositionChangePositionMarginInput;
    FuturesPrivatePositionLeverageSaveInput: FuturesPrivatePositionLeverageSaveInput;
    FuturesPrivatePositionSwitchIsolatedInput: FuturesPrivatePositionSwitchIsolatedInput;
    FuturesPrivatePositionSwitchModeInput: FuturesPrivatePositionSwitchModeInput;
    TradingStopBase: ResolverTypeWrapper<TradingStopBase>;
    TradingStopRes: ResolverTypeWrapper<TradingStopRes>;
    FuturesPrivatePositionTradingStopInput: FuturesPrivatePositionTradingStopInput;
    LinearCancelStopOrderResultBase: ResolverTypeWrapper<LinearCancelStopOrderResultBase>;
    LinearCancelStopOrderResult: ResolverTypeWrapper<LinearCancelStopOrderResult>;
    PrivateLinearStopOrderCancelInput: PrivateLinearStopOrderCancelInput;
    LinearStopOrderCancelAllBase: ResolverTypeWrapper<LinearStopOrderCancelAllBase>;
    PrivateLinearStopOrderCancelAllInput: PrivateLinearStopOrderCancelAllInput;
    LinearCreateStopOrderResultBase: ResolverTypeWrapper<LinearCreateStopOrderResultBase>;
    LinearCreateStopOrderResult: ResolverTypeWrapper<LinearCreateStopOrderResult>;
    PrivateLinearStopOrderCreateInput: PrivateLinearStopOrderCreateInput;
    LinearStopOrderReplace: ResolverTypeWrapper<LinearStopOrderReplace>;
    OrderIdRes: ResolverTypeWrapper<OrderIdRes>;
    PrivateLinearStopOrderReplaceInput: PrivateLinearStopOrderReplaceInput;
    LinearCancelOrderResultBase: ResolverTypeWrapper<LinearCancelOrderResultBase>;
    LinearCancelOrderResult: ResolverTypeWrapper<LinearCancelOrderResult>;
    PrivateLinearOrderCancelInput: PrivateLinearOrderCancelInput;
    LinearOrderCancelAllBase: ResolverTypeWrapper<LinearOrderCancelAllBase>;
    PrivateLinearOrderCancelAllInput: PrivateLinearOrderCancelAllInput;
    LinearCreateOrderResultBase: ResolverTypeWrapper<LinearCreateOrderResultBase>;
    LinearCreateOrderResult: ResolverTypeWrapper<LinearCreateOrderResult>;
    PrivateLinearOrderCreateInput: PrivateLinearOrderCreateInput;
    LinearOrderReplace: ResolverTypeWrapper<LinearOrderReplace>;
    PrivateLinearOrderReplaceInput: PrivateLinearOrderReplaceInput;
    LinearSetMarginResult: ResolverTypeWrapper<LinearSetMarginResult>;
    PrivateLinearPositionAddMarginInput: PrivateLinearPositionAddMarginInput;
    LinearSetLeverageResult: ResolverTypeWrapper<LinearSetLeverageResult>;
    PrivateLinearPositionSetLeverageInput: PrivateLinearPositionSetLeverageInput;
    PrivateLinearPositionSetAutoAddMarginInput: PrivateLinearPositionSetAutoAddMarginInput;
    LinearSwitchIsolatedResult: ResolverTypeWrapper<LinearSwitchIsolatedResult>;
    PrivateLinearPositionSwitchIsolatedInput: PrivateLinearPositionSwitchIsolatedInput;
    LinearSwitchModeResult: ResolverTypeWrapper<LinearSwitchModeResult>;
    PrivateLinearTpslSwitchModeInput: PrivateLinearTpslSwitchModeInput;
    LinearSetTradingStopResult: ResolverTypeWrapper<LinearSetTradingStopResult>;
    PrivateLinearPositionTradingStopInput: PrivateLinearPositionTradingStopInput;
    LinearSetRiskLimit: ResolverTypeWrapper<LinearSetRiskLimit>;
    Result63: ResolverTypeWrapper<Result63>;
    PrivateLinearPositionSetRiskInput: PrivateLinearPositionSetRiskInput;
    V2PrivateOrderCancelInput: V2PrivateOrderCancelInput;
    V2PrivateOrderCancelAllInput: V2PrivateOrderCancelAllInput;
    V2PrivateOrderCreateInput: V2PrivateOrderCreateInput;
    V2PrivateOrderReplaceInput: V2PrivateOrderReplaceInput;
    PositionChangePositionMarginInput: PositionChangePositionMarginInput;
    UserLeverageSaveInput: UserLeverageSaveInput;
    OpenApiPositionTradingStopInput: OpenApiPositionTradingStopInput;
    SetRiskLimitBase: ResolverTypeWrapper<SetRiskLimitBase>;
    RiskLimitRes: ResolverTypeWrapper<RiskLimitRes>;
    OpenApiWalletRiskLimitInput: OpenApiWalletRiskLimitInput;
}>;
/** Mapping between all available schema types and the resolvers parents */
export declare type ResolversParentTypes = ResolversObject<{
    Query: {};
    APIKeyBase: APIKeyBase;
    String: Scalars['String'];
    APIKeyInfo: APIKeyInfo;
    Boolean: Scalars['Boolean'];
    Float: Scalars['Float'];
    Announcement: Announcement;
    AnnouncementInfo: AnnouncementInfo;
    LCPInfo: LCPInfo;
    LCPInfoBase: LCPInfoBase;
    ServerTime: ServerTime;
    JSON: Scalars['JSON'];
    ConditionalOrdersResBase: ConditionalOrdersResBase;
    ConditionalOrdersRes: ConditionalOrdersRes;
    V2ConditionalListRes: V2ConditionalListRes;
    StopOrderOrdersResBase: StopOrderOrdersResBase;
    ConditionalRes: ConditionalRes;
    TradeRecordsBase: TradeRecordsBase;
    TradeRecords: TradeRecords;
    TradeRecordsInfo: TradeRecordsInfo;
    FundingFeeBase: FundingFeeBase;
    FundingFeeRes: FundingFeeRes;
    FundingPredictedBase: FundingPredictedBase;
    FundingPredicted: FundingPredicted;
    FundingRateBase: FundingRateBase;
    FundingRate2: FundingRate2;
    V2OrderListBase: V2OrderListBase;
    V2OrderListData: V2OrderListData;
    V2OrderRes: V2OrderRes;
    QueryOrderBase: QueryOrderBase;
    QueryOrderRes: QueryOrderRes;
    ExtFields2: ExtFields2;
    ClosedPnlBase: ClosedPnlBase;
    ClosedPnlInfo: ClosedPnlInfo;
    Int: Scalars['Int'];
    Position: Position;
    PositionInfo: PositionInfo;
    KlineBase: KlineBase;
    KlineRes: KlineRes;
    IndexPriceKlineBase: IndexPriceKlineBase;
    IndexPriceKlineInfo: IndexPriceKlineInfo;
    MarkPriceKlineBase: MarkPriceKlineBase;
    MarkPriceKlineInfo: MarkPriceKlineInfo;
    PremiumIndexPriceKlineBase: PremiumIndexPriceKlineBase;
    PremiumIndexPriceKlineInfo: PremiumIndexPriceKlineInfo;
    LinearStopOrderRecordsResponseBase: LinearStopOrderRecordsResponseBase;
    LinearStopOrderRecordsResponse: LinearStopOrderRecordsResponse;
    LinearListStopOrderResult: LinearListStopOrderResult;
    LinearSearchStopOrderResultBase: LinearSearchStopOrderResultBase;
    LinearSearchStopOrderResult: LinearSearchStopOrderResult;
    LinearTradeRecordsResponse: LinearTradeRecordsResponse;
    LinearTradeRecordItem: LinearTradeRecordItem;
    LinearPrevFundingRespBase: LinearPrevFundingRespBase;
    LinearPrevFundingResp: LinearPrevFundingResp;
    LinearFundingPredictedBase: LinearFundingPredictedBase;
    LinearFundingPredicted: LinearFundingPredicted;
    LinearPrevFundingRateRespBase: LinearPrevFundingRateRespBase;
    LinearPrevFundingRateResp: LinearPrevFundingRateResp;
    LinearKlineRespBase: LinearKlineRespBase;
    LinearKlineResp: LinearKlineResp;
    LinearRecentTradingRecordRespBase: LinearRecentTradingRecordRespBase;
    LinearRecentTradingRecordResp: LinearRecentTradingRecordResp;
    LinearOrderRecordsResponseBase: LinearOrderRecordsResponseBase;
    LinearOrderRecordsResponse: LinearOrderRecordsResponse;
    LinearListOrderResult: LinearListOrderResult;
    LinearSearchOrderResultBase: LinearSearchOrderResultBase;
    LinearSearchOrderResult: LinearSearchOrderResult;
    LinearClosePnlRecordsResponse: LinearClosePnlRecordsResponse;
    LinearClosedPnlRecordResult: LinearClosedPnlRecordResult;
    LinearPositionListResultBase: LinearPositionListResultBase;
    LinearPositionListResult: LinearPositionListResult;
    LinearRiskLimitRespBase: LinearRiskLimitRespBase;
    LinearRiskLimitResp: LinearRiskLimitResp;
    PublicLinearRiskLimitInput: PublicLinearRiskLimitInput;
    AccountRatio: AccountRatio;
    AccountRatioInfo: AccountRatioInfo;
    BigDeal: BigDeal;
    BigDealInfo: BigDealInfo;
    LiqRecords: LiqRecords;
    LiqRecordsInfo: LiqRecordsInfo;
    OpenInterest2: OpenInterest2;
    OpenInterestInfo: OpenInterestInfo;
    OrderBookBase: OrderBookBase;
    OderBookRes: OderBookRes;
    SymbolInfoBase: SymbolInfoBase;
    SymbolTickInfo: SymbolTickInfo;
    TradingRecords: TradingRecords;
    TradingRecordsInfo: TradingRecordsInfo;
    Symbols: Symbols;
    SymbolInfo: SymbolInfo;
    LotSizeFilter2: LotSizeFilter2;
    PriceFilter2: PriceFilter2;
    ExchangeOrderListBase: ExchangeOrderListBase;
    ExchangeOrderList: ExchangeOrderList;
    WalletBalanceBase: WalletBalanceBase;
    FundRecordBase: FundRecordBase;
    FundingRecords: FundingRecords;
    RiskLimitBase: RiskLimitBase;
    GetRiskLimitRes: GetRiskLimitRes;
    RiskIDRes: RiskIDRes;
    WithdrawResBase: WithdrawResBase;
    WithdrawRecords: WithdrawRecords;
    Mutation: {};
    V2CancelOrderBase: V2CancelOrderBase;
    Result22ListItem: Result22ListItem;
    V2PrivateStopOrderCancelInput: V2PrivateStopOrderCancelInput;
    ConditionalCancelAllBase: ConditionalCancelAllBase;
    ConditionalCancelAllRes: ConditionalCancelAllRes;
    V2PrivateStopOrderCancelAllInput: V2PrivateStopOrderCancelAllInput;
    V2ConditionalBase: V2ConditionalBase;
    V2ConditionalRes: V2ConditionalRes;
    V2PrivateStopOrderCreateInput: V2PrivateStopOrderCreateInput;
    ReplaceConditionalBase: ReplaceConditionalBase;
    Result24ListItem: Result24ListItem;
    V2PrivateStopOrderReplaceInput: V2PrivateStopOrderReplaceInput;
    FuturesPrivateStopOrderCancelInput: FuturesPrivateStopOrderCancelInput;
    FuturesPrivateStopOrderCancelAllInput: FuturesPrivateStopOrderCancelAllInput;
    FuturesPrivateStopOrderCreateInput: FuturesPrivateStopOrderCreateInput;
    FuturesPrivateStopOrderReplaceInput: FuturesPrivateStopOrderReplaceInput;
    OrderCancelBase: OrderCancelBase;
    OrderRes: OrderRes;
    FuturesPrivateOrderCancelInput: FuturesPrivateOrderCancelInput;
    OrderCancelAllBase: OrderCancelAllBase;
    OrderCancelAllRes: OrderCancelAllRes;
    FuturesPrivateOrderCancelAllInput: FuturesPrivateOrderCancelAllInput;
    OrderResBase: OrderResBase;
    FuturesPrivateOrderCreateInput: FuturesPrivateOrderCreateInput;
    ReplaceOrderBase: ReplaceOrderBase;
    Result18ListItem: Result18ListItem;
    FuturesPrivateOrderReplaceInput: FuturesPrivateOrderReplaceInput;
    FuturesPrivatePositionChangePositionMarginInput: FuturesPrivatePositionChangePositionMarginInput;
    FuturesPrivatePositionLeverageSaveInput: FuturesPrivatePositionLeverageSaveInput;
    FuturesPrivatePositionSwitchIsolatedInput: FuturesPrivatePositionSwitchIsolatedInput;
    FuturesPrivatePositionSwitchModeInput: FuturesPrivatePositionSwitchModeInput;
    TradingStopBase: TradingStopBase;
    TradingStopRes: TradingStopRes;
    FuturesPrivatePositionTradingStopInput: FuturesPrivatePositionTradingStopInput;
    LinearCancelStopOrderResultBase: LinearCancelStopOrderResultBase;
    LinearCancelStopOrderResult: LinearCancelStopOrderResult;
    PrivateLinearStopOrderCancelInput: PrivateLinearStopOrderCancelInput;
    LinearStopOrderCancelAllBase: LinearStopOrderCancelAllBase;
    PrivateLinearStopOrderCancelAllInput: PrivateLinearStopOrderCancelAllInput;
    LinearCreateStopOrderResultBase: LinearCreateStopOrderResultBase;
    LinearCreateStopOrderResult: LinearCreateStopOrderResult;
    PrivateLinearStopOrderCreateInput: PrivateLinearStopOrderCreateInput;
    LinearStopOrderReplace: LinearStopOrderReplace;
    OrderIdRes: OrderIdRes;
    PrivateLinearStopOrderReplaceInput: PrivateLinearStopOrderReplaceInput;
    LinearCancelOrderResultBase: LinearCancelOrderResultBase;
    LinearCancelOrderResult: LinearCancelOrderResult;
    PrivateLinearOrderCancelInput: PrivateLinearOrderCancelInput;
    LinearOrderCancelAllBase: LinearOrderCancelAllBase;
    PrivateLinearOrderCancelAllInput: PrivateLinearOrderCancelAllInput;
    LinearCreateOrderResultBase: LinearCreateOrderResultBase;
    LinearCreateOrderResult: LinearCreateOrderResult;
    PrivateLinearOrderCreateInput: PrivateLinearOrderCreateInput;
    LinearOrderReplace: LinearOrderReplace;
    PrivateLinearOrderReplaceInput: PrivateLinearOrderReplaceInput;
    LinearSetMarginResult: LinearSetMarginResult;
    PrivateLinearPositionAddMarginInput: PrivateLinearPositionAddMarginInput;
    LinearSetLeverageResult: LinearSetLeverageResult;
    PrivateLinearPositionSetLeverageInput: PrivateLinearPositionSetLeverageInput;
    PrivateLinearPositionSetAutoAddMarginInput: PrivateLinearPositionSetAutoAddMarginInput;
    LinearSwitchIsolatedResult: LinearSwitchIsolatedResult;
    PrivateLinearPositionSwitchIsolatedInput: PrivateLinearPositionSwitchIsolatedInput;
    LinearSwitchModeResult: LinearSwitchModeResult;
    PrivateLinearTpslSwitchModeInput: PrivateLinearTpslSwitchModeInput;
    LinearSetTradingStopResult: LinearSetTradingStopResult;
    PrivateLinearPositionTradingStopInput: PrivateLinearPositionTradingStopInput;
    LinearSetRiskLimit: LinearSetRiskLimit;
    Result63: Result63;
    PrivateLinearPositionSetRiskInput: PrivateLinearPositionSetRiskInput;
    V2PrivateOrderCancelInput: V2PrivateOrderCancelInput;
    V2PrivateOrderCancelAllInput: V2PrivateOrderCancelAllInput;
    V2PrivateOrderCreateInput: V2PrivateOrderCreateInput;
    V2PrivateOrderReplaceInput: V2PrivateOrderReplaceInput;
    PositionChangePositionMarginInput: PositionChangePositionMarginInput;
    UserLeverageSaveInput: UserLeverageSaveInput;
    OpenApiPositionTradingStopInput: OpenApiPositionTradingStopInput;
    SetRiskLimitBase: SetRiskLimitBase;
    RiskLimitRes: RiskLimitRes;
    OpenApiWalletRiskLimitInput: OpenApiWalletRiskLimitInput;
}>;
export declare type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
    aPIkeyInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['APIKeyBase']>>>, ParentType, ContextType>;
    commonAnnouncements?: Resolver<Maybe<Array<Maybe<ResolversTypes['Announcement']>>>, ParentType, ContextType>;
    commonGetLcp?: Resolver<Maybe<Array<Maybe<ResolversTypes['LCPInfo']>>>, ParentType, ContextType, RequireFields<QuerycommonGetLcpArgs, 'symbol'>>;
    commonGetTime?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType>;
    conditionalGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalOrdersResBase']>>>, ParentType, ContextType, RequireFields<QueryconditionalGetOrdersArgs, 'symbol'>>;
    conditionalQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['StopOrderOrdersResBase']>>>, ParentType, ContextType, RequireFields<QueryconditionalQueryArgs, never>>;
    executionGetTrades?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradeRecordsBase']>>>, ParentType, ContextType, RequireFields<QueryexecutionGetTradesArgs, 'symbol'>>;
    fundingMyLastFee?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingFeeBase']>>>, ParentType, ContextType, RequireFields<QueryfundingMyLastFeeArgs, 'symbol'>>;
    fundingPredicted?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingPredictedBase']>>>, ParentType, ContextType, RequireFields<QueryfundingPredictedArgs, 'symbol'>>;
    fundingPrevRate?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingRateBase']>>>, ParentType, ContextType, RequireFields<QueryfundingPrevRateArgs, 'symbol'>>;
    futuresConditionalGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalOrdersResBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesConditionalGetOrdersArgs, 'symbol'>>;
    futuresConditionalQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['StopOrderOrdersResBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesConditionalQueryArgs, never>>;
    futuresExecutionGetTrades?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradeRecordsBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesExecutionGetTradesArgs, 'symbol'>>;
    futuresOrderGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2OrderListBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesOrderGetOrdersArgs, 'symbol'>>;
    futuresOrderQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryOrderBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesOrderQueryArgs, never>>;
    futuresPositionsClosePnlRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClosedPnlBase']>>>, ParentType, ContextType, RequireFields<QueryfuturesPositionsClosePnlRecordsArgs, 'symbol'>>;
    futuresPositionsMyPosition?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType, RequireFields<QueryfuturesPositionsMyPositionArgs, never>>;
    klineGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['KlineBase']>>>, ParentType, ContextType, RequireFields<QueryklineGetArgs, 'from' | 'interval' | 'symbol'>>;
    klineIndexPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['IndexPriceKlineBase']>>>, ParentType, ContextType, RequireFields<QueryklineIndexPriceArgs, 'from' | 'interval' | 'symbol'>>;
    klineMarkPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkPriceKlineBase']>>>, ParentType, ContextType, RequireFields<QueryklineMarkPriceArgs, 'from' | 'interval' | 'symbol'>>;
    klinePremiumIndexPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['PremiumIndexPriceKlineBase']>>>, ParentType, ContextType, RequireFields<QueryklinePremiumIndexPriceArgs, 'from' | 'interval' | 'symbol'>>;
    linearConditionalGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearStopOrderRecordsResponseBase']>>>, ParentType, ContextType, RequireFields<QuerylinearConditionalGetOrdersArgs, never>>;
    linearConditionalQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSearchStopOrderResultBase']>>>, ParentType, ContextType, RequireFields<QuerylinearConditionalQueryArgs, never>>;
    linearExecutionGetTrades?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearTradeRecordsResponse']>>>, ParentType, ContextType, RequireFields<QuerylinearExecutionGetTradesArgs, never>>;
    linearFundingMyLastFee?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPrevFundingRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearFundingMyLastFeeArgs, never>>;
    linearFundingPredicted?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearFundingPredictedBase']>>>, ParentType, ContextType, RequireFields<QuerylinearFundingPredictedArgs, 'symbol'>>;
    linearFundingPrevRate?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPrevFundingRateRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearFundingPrevRateArgs, 'symbol'>>;
    linearKlineGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearKlineRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearKlineGetArgs, 'from' | 'interval' | 'symbol'>>;
    linearKlineIndexPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['IndexPriceKlineBase']>>>, ParentType, ContextType, RequireFields<QuerylinearKlineIndexPriceArgs, 'from' | 'interval' | 'symbol'>>;
    linearKlineMarkPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearKlineRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearKlineMarkPriceArgs, 'from' | 'interval' | 'symbol'>>;
    linearKlinePremiumIndexPrice?: Resolver<Maybe<Array<Maybe<ResolversTypes['PremiumIndexPriceKlineBase']>>>, ParentType, ContextType, RequireFields<QuerylinearKlinePremiumIndexPriceArgs, 'from' | 'interval' | 'symbol'>>;
    linearMarketTrading?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearRecentTradingRecordRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearMarketTradingArgs, 'symbol'>>;
    linearOrderGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearOrderRecordsResponseBase']>>>, ParentType, ContextType, RequireFields<QuerylinearOrderGetOrdersArgs, never>>;
    linearOrderQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSearchOrderResultBase']>>>, ParentType, ContextType, RequireFields<QuerylinearOrderQueryArgs, never>>;
    linearPositionsClosePnlRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearClosePnlRecordsResponse']>>>, ParentType, ContextType, RequireFields<QuerylinearPositionsClosePnlRecordsArgs, never>>;
    linearPositionsMyPosition?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPositionListResultBase']>>>, ParentType, ContextType, RequireFields<QuerylinearPositionsMyPositionArgs, never>>;
    linearWalletGetRiskLimit?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearRiskLimitRespBase']>>>, ParentType, ContextType, RequireFields<QuerylinearWalletGetRiskLimitArgs, 'publicLinearRiskLimitInput'>>;
    marketAccountRatio?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountRatio']>>>, ParentType, ContextType, RequireFields<QuerymarketAccountRatioArgs, 'period' | 'symbol'>>;
    marketBigDeal?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigDeal']>>>, ParentType, ContextType, RequireFields<QuerymarketBigDealArgs, 'symbol'>>;
    marketLiqRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['LiqRecords']>>>, ParentType, ContextType, RequireFields<QuerymarketLiqRecordsArgs, 'symbol'>>;
    marketOpenInterest?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenInterest2']>>>, ParentType, ContextType, RequireFields<QuerymarketOpenInterestArgs, 'period' | 'symbol'>>;
    marketOrderbook?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderBookBase']>>>, ParentType, ContextType, RequireFields<QuerymarketOrderbookArgs, 'symbol'>>;
    marketSymbolInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['SymbolInfoBase']>>>, ParentType, ContextType, RequireFields<QuerymarketSymbolInfoArgs, never>>;
    marketTradingRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradingRecords']>>>, ParentType, ContextType, RequireFields<QuerymarketTradingRecordsArgs, 'symbol'>>;
    orderGetOrders?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2OrderListBase']>>>, ParentType, ContextType, RequireFields<QueryorderGetOrdersArgs, 'symbol'>>;
    orderQuery?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryOrderBase']>>>, ParentType, ContextType, RequireFields<QueryorderQueryArgs, never>>;
    positionsClosePnlRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClosedPnlBase']>>>, ParentType, ContextType, RequireFields<QuerypositionsClosePnlRecordsArgs, 'symbol'>>;
    positionsMyPosition?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType, RequireFields<QuerypositionsMyPositionArgs, never>>;
    symbolGet?: Resolver<Maybe<Array<Maybe<ResolversTypes['Symbols']>>>, ParentType, ContextType>;
    walletExchangeOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExchangeOrderListBase']>>>, ParentType, ContextType, RequireFields<QuerywalletExchangeOrderArgs, never>>;
    walletGetBalance?: Resolver<Maybe<Array<Maybe<ResolversTypes['WalletBalanceBase']>>>, ParentType, ContextType, RequireFields<QuerywalletGetBalanceArgs, never>>;
    walletGetRecords?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundRecordBase']>>>, ParentType, ContextType, RequireFields<QuerywalletGetRecordsArgs, never>>;
    walletGetRiskLimit?: Resolver<Maybe<Array<Maybe<ResolversTypes['RiskLimitBase']>>>, ParentType, ContextType>;
    walletWithdraw?: Resolver<Maybe<Array<Maybe<ResolversTypes['WithdrawResBase']>>>, ParentType, ContextType, RequireFields<QuerywalletWithdrawArgs, never>>;
}>;
export declare type APIKeyBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['APIKeyBase'] = ResolversParentTypes['APIKeyBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['APIKeyInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type APIKeyInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['APIKeyInfo'] = ResolversParentTypes['APIKeyInfo']> = ResolversObject<{
    apiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    ips?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    permissions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    readOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AnnouncementResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Announcement'] = ResolversParentTypes['Announcement']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['AnnouncementInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AnnouncementInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AnnouncementInfo'] = ResolversParentTypes['AnnouncementInfo']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LCPInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LCPInfo'] = ResolversParentTypes['LCPInfo']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['LCPInfoBase']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LCPInfoBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LCPInfoBase'] = ResolversParentTypes['LCPInfoBase']> = ResolversObject<{
    date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    platformRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    selfRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ServerTimeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ServerTime'] = ResolversParentTypes['ServerTime']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
    name: 'JSON';
}
export declare type ConditionalOrdersResBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionalOrdersResBase'] = ResolversParentTypes['ConditionalOrdersResBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalOrdersRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ConditionalOrdersResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionalOrdersRes'] = ResolversParentTypes['ConditionalOrdersRes']> = ResolversObject<{
    cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    data?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2ConditionalListRes']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2ConditionalListResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2ConditionalListRes'] = ResolversParentTypes['V2ConditionalListRes']> = ResolversObject<{
    basePrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopPx?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type StopOrderOrdersResBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['StopOrderOrdersResBase'] = ResolversParentTypes['StopOrderOrdersResBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ConditionalResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionalRes'] = ResolversParentTypes['ConditionalRes']> = ResolversObject<{
    basePrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopPx?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradeRecordsBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradeRecordsBase'] = ResolversParentTypes['TradeRecordsBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradeRecords']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradeRecordsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradeRecords'] = ResolversParentTypes['TradeRecords']> = ResolversObject<{
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tradeList?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradeRecordsInfo']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradeRecordsInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradeRecordsInfo'] = ResolversParentTypes['TradeRecordsInfo']> = ResolversObject<{
    closedSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    feeRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lastLiquidityInd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    nthFill?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingFeeBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingFeeBase'] = ResolversParentTypes['FundingFeeBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingFeeRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingFeeResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingFeeRes'] = ResolversParentTypes['FundingFeeRes']> = ResolversObject<{
    execFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execTimestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    fundingRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingPredictedBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingPredictedBase'] = ResolversParentTypes['FundingPredictedBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingPredicted']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingPredictedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingPredicted'] = ResolversParentTypes['FundingPredicted']> = ResolversObject<{
    predictedFundingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    predictedFundingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingRateBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingRateBase'] = ResolversParentTypes['FundingRateBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingRate2']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingRate2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingRate2'] = ResolversParentTypes['FundingRate2']> = ResolversObject<{
    fundingRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fundingRateTimestamp?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2OrderListBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2OrderListBase'] = ResolversParentTypes['V2OrderListBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2OrderListData']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2OrderListDataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2OrderListData'] = ResolversParentTypes['V2OrderListData']> = ResolversObject<{
    cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    data?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2OrderRes']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2OrderResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2OrderRes'] = ResolversParentTypes['V2OrderRes']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecFee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    leavesValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rejectReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type QueryOrderBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryOrderBase'] = ResolversParentTypes['QueryOrderBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryOrderRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type QueryOrderResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryOrderRes'] = ResolversParentTypes['QueryOrderRes']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    extFields?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExtFields2']>>>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leavesValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rejectReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExtFields2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExtFields2'] = ResolversParentTypes['ExtFields2']> = ResolversObject<{
    oReqNum?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    xreqOffset?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    xreqType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ClosedPnlBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClosedPnlBase'] = ResolversParentTypes['ClosedPnlBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['ClosedPnlInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ClosedPnlInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ClosedPnlInfo'] = ResolversParentTypes['ClosedPnlInfo']> = ResolversObject<{
    avgEntryPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    avgExitPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    closedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    closedSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    cumEntryValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExitValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fillCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    leverage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PositionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PositionInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PositionInfo'] = ResolversParentTypes['PositionInfo']> = ResolversObject<{
    autoAddMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    bustPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumCommission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumRealisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    deleverageIndicator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    entryPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    liqPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    ocCalcData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    occClosingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    occFundingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    positionValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    realisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    riskId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    unrealisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    walletBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type KlineBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlineBase'] = ResolversParentTypes['KlineBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['KlineRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type KlineResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['KlineRes'] = ResolversParentTypes['KlineRes']> = ResolversObject<{
    close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    high?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    interval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    openTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    volume?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type IndexPriceKlineBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexPriceKlineBase'] = ResolversParentTypes['IndexPriceKlineBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['IndexPriceKlineInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type IndexPriceKlineInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['IndexPriceKlineInfo'] = ResolversParentTypes['IndexPriceKlineInfo']> = ResolversObject<{
    close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    high?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    openTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MarkPriceKlineBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarkPriceKlineBase'] = ResolversParentTypes['MarkPriceKlineBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['MarkPriceKlineInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MarkPriceKlineInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MarkPriceKlineInfo'] = ResolversParentTypes['MarkPriceKlineInfo']> = ResolversObject<{
    close?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    high?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    low?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    open?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startAt?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PremiumIndexPriceKlineBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PremiumIndexPriceKlineBase'] = ResolversParentTypes['PremiumIndexPriceKlineBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['PremiumIndexPriceKlineInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PremiumIndexPriceKlineInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PremiumIndexPriceKlineInfo'] = ResolversParentTypes['PremiumIndexPriceKlineInfo']> = ResolversObject<{
    close?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    high?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    low?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    open?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    openTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearStopOrderRecordsResponseBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearStopOrderRecordsResponseBase'] = ResolversParentTypes['LinearStopOrderRecordsResponseBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearStopOrderRecordsResponse']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearStopOrderRecordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearStopOrderRecordsResponse'] = ResolversParentTypes['LinearStopOrderRecordsResponse']> = ResolversObject<{
    currentPage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    data?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearListStopOrderResult']>>>, ParentType, ContextType>;
    lastPage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearListStopOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearListStopOrderResult'] = ResolversParentTypes['LinearListStopOrderResult']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSearchStopOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSearchStopOrderResultBase'] = ResolversParentTypes['LinearSearchStopOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSearchStopOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSearchStopOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSearchStopOrderResult'] = ResolversParentTypes['LinearSearchStopOrderResult']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearTradeRecordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearTradeRecordsResponse'] = ResolversParentTypes['LinearTradeRecordsResponse']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearTradeRecordItem']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearTradeRecordItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearTradeRecordItem'] = ResolversParentTypes['LinearTradeRecordItem']> = ResolversObject<{
    closedSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    execValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    feeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastLiquidityInd?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tradeTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    tradeTimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPrevFundingRespBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPrevFundingRespBase'] = ResolversParentTypes['LinearPrevFundingRespBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPrevFundingResp']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPrevFundingRespResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPrevFundingResp'] = ResolversParentTypes['LinearPrevFundingResp']> = ResolversObject<{
    execFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fundingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearFundingPredictedBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearFundingPredictedBase'] = ResolversParentTypes['LinearFundingPredictedBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearFundingPredicted']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearFundingPredictedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearFundingPredicted'] = ResolversParentTypes['LinearFundingPredicted']> = ResolversObject<{
    predictedFundingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    predictedFundingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPrevFundingRateRespBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPrevFundingRateRespBase'] = ResolversParentTypes['LinearPrevFundingRateRespBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPrevFundingRateResp']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPrevFundingRateRespResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPrevFundingRateResp'] = ResolversParentTypes['LinearPrevFundingRateResp']> = ResolversObject<{
    fundingRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    fundingRateTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearKlineRespBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearKlineRespBase'] = ResolversParentTypes['LinearKlineRespBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearKlineResp']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearKlineRespResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearKlineResp'] = ResolversParentTypes['LinearKlineResp']> = ResolversObject<{
    close?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    high?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    interval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    low?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    open?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    openTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    turnover?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    volume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearRecentTradingRecordRespBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearRecentTradingRecordRespBase'] = ResolversParentTypes['LinearRecentTradingRecordRespBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearRecentTradingRecordResp']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearRecentTradingRecordRespResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearRecentTradingRecordResp'] = ResolversParentTypes['LinearRecentTradingRecordResp']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tradeTimeMs?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearOrderRecordsResponseBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearOrderRecordsResponseBase'] = ResolversParentTypes['LinearOrderRecordsResponseBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearOrderRecordsResponse']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearOrderRecordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearOrderRecordsResponse'] = ResolversParentTypes['LinearOrderRecordsResponse']> = ResolversObject<{
    currentPage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    data?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearListOrderResult']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearListOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearListOrderResult'] = ResolversParentTypes['LinearListOrderResult']> = ResolversObject<{
    createdTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastExecPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    reduceOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSearchOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSearchOrderResultBase'] = ResolversParentTypes['LinearSearchOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSearchOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSearchOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSearchOrderResult'] = ResolversParentTypes['LinearSearchOrderResult']> = ResolversObject<{
    createdTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastExecPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    reduceOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearClosePnlRecordsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearClosePnlRecordsResponse'] = ResolversParentTypes['LinearClosePnlRecordsResponse']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearClosedPnlRecordResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearClosedPnlRecordResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearClosedPnlRecordResult'] = ResolversParentTypes['LinearClosedPnlRecordResult']> = ResolversObject<{
    avgEntryPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    avgExitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    closedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    closedSize?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumEntryValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExitValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fillCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPositionListResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPositionListResultBase'] = ResolversParentTypes['LinearPositionListResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPositionListResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearPositionListResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearPositionListResult'] = ResolversParentTypes['LinearPositionListResult']> = ResolversObject<{
    bustPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumRealisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    entryPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    freeQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    liqPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    occClosingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    realisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpSlMode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearRiskLimitRespBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearRiskLimitRespBase'] = ResolversParentTypes['LinearRiskLimitRespBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearRiskLimitResp']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearRiskLimitRespResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearRiskLimitResp'] = ResolversParentTypes['LinearRiskLimitResp']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    isLowestRisk?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    maintainMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    section?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    startingMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AccountRatioResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRatio'] = ResolversParentTypes['AccountRatio']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['AccountRatioInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type AccountRatioInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AccountRatioInfo'] = ResolversParentTypes['AccountRatioInfo']> = ResolversObject<{
    buyRatio?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    sellRatio?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BigDealResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BigDeal'] = ResolversParentTypes['BigDeal']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['BigDealInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type BigDealInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BigDealInfo'] = ResolversParentTypes['BigDealInfo']> = ResolversObject<{
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LiqRecordsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiqRecords'] = ResolversParentTypes['LiqRecords']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LiqRecordsInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LiqRecordsInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LiqRecordsInfo'] = ResolversParentTypes['LiqRecordsInfo']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    time?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OpenInterest2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpenInterest2'] = ResolversParentTypes['OpenInterest2']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpenInterestInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OpenInterestInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OpenInterestInfo'] = ResolversParentTypes['OpenInterestInfo']> = ResolversObject<{
    openInterest?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderBookBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderBookBase'] = ResolversParentTypes['OrderBookBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OderBookRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OderBookResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OderBookRes'] = ResolversParentTypes['OderBookRes']> = ResolversObject<{
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SymbolInfoBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SymbolInfoBase'] = ResolversParentTypes['SymbolInfoBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['SymbolTickInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SymbolTickInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SymbolTickInfo'] = ResolversParentTypes['SymbolTickInfo']> = ResolversObject<{
    askPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    bidPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    countdownHour?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    fundingRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    highPrice24h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    indexPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lastPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lastTickDirection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lowPrice24h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    markPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    nextFundingTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    openInterest?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    openValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    predictedFundingRate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    prevPrice1h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    prevPrice24h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price1hPcnt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price24hPcnt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    totalTurnover?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    totalVolume?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    turnover24h?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    volume24h?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradingRecordsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradingRecords'] = ResolversParentTypes['TradingRecords']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradingRecordsInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradingRecordsInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradingRecordsInfo'] = ResolversParentTypes['TradingRecordsInfo']> = ResolversObject<{
    id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SymbolsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Symbols'] = ResolversParentTypes['Symbols']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['SymbolInfo']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SymbolInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SymbolInfo'] = ResolversParentTypes['SymbolInfo']> = ResolversObject<{
    baseCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    lotSizeFilter?: Resolver<Maybe<Array<Maybe<ResolversTypes['LotSizeFilter2']>>>, ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    priceFilter?: Resolver<Maybe<Array<Maybe<ResolversTypes['PriceFilter2']>>>, ParentType, ContextType>;
    priceScale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    quoteCurrency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LotSizeFilter2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LotSizeFilter2'] = ResolversParentTypes['LotSizeFilter2']> = ResolversObject<{
    maxTradingQty?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    minTradingQty?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    qtyStep?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type PriceFilter2Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PriceFilter2'] = ResolversParentTypes['PriceFilter2']> = ResolversObject<{
    maxPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    minPrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tickSize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExchangeOrderListBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExchangeOrderListBase'] = ResolversParentTypes['ExchangeOrderListBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['ExchangeOrderList']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ExchangeOrderListResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExchangeOrderList'] = ResolversParentTypes['ExchangeOrderList']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    exchangeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    fromAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    fromCoin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fromFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    toAmount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    toCoin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type WalletBalanceBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WalletBalanceBase'] = ResolversParentTypes['WalletBalanceBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundRecordBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundRecordBase'] = ResolversParentTypes['FundRecordBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['FundingRecords']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type FundingRecordsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FundingRecords'] = ResolversParentTypes['FundingRecords']> = ResolversObject<{
    address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    coin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    execTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    txId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    walletBalance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    walletId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type RiskLimitBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RiskLimitBase'] = ResolversParentTypes['RiskLimitBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['GetRiskLimitRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type GetRiskLimitResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['GetRiskLimitRes'] = ResolversParentTypes['GetRiskLimitRes']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['RiskIDRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type RiskIDResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RiskIDRes'] = ResolversParentTypes['RiskIDRes']> = ResolversObject<{
    coin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    isLowestRisk?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    limit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    maintainMargin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    section?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    startingMargin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type WithdrawResBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawResBase'] = ResolversParentTypes['WithdrawResBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['WithdrawRecords']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type WithdrawRecordsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WithdrawRecords'] = ResolversParentTypes['WithdrawRecords']> = ResolversObject<{
    address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    amount?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    coin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    fee?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    submitedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    txId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
    conditionalCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2CancelOrderBase']>>>, ParentType, ContextType, RequireFields<MutationconditionalCancelArgs, never>>;
    conditionalCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationconditionalCancelAllArgs, 'v2PrivateStopOrderCancelAllInput'>>;
    conditionalNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2ConditionalBase']>>>, ParentType, ContextType, RequireFields<MutationconditionalNewArgs, 'v2PrivateStopOrderCreateInput'>>;
    conditionalReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplaceConditionalBase']>>>, ParentType, ContextType, RequireFields<MutationconditionalReplaceArgs, never>>;
    futuresConditionalCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2CancelOrderBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesConditionalCancelArgs, never>>;
    futuresConditionalCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesConditionalCancelAllArgs, 'futuresPrivateStopOrderCancelAllInput'>>;
    futuresConditionalNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2ConditionalBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesConditionalNewArgs, 'futuresPrivateStopOrderCreateInput'>>;
    futuresConditionalReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplaceConditionalBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesConditionalReplaceArgs, never>>;
    futuresOrderCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderCancelBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesOrderCancelArgs, never>>;
    futuresOrderCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesOrderCancelAllArgs, 'futuresPrivateOrderCancelAllInput'>>;
    futuresOrderNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderResBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesOrderNewArgs, 'futuresPrivateOrderCreateInput'>>;
    futuresOrderReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplaceOrderBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesOrderReplaceArgs, never>>;
    futuresPositionsChangeMargin?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationfuturesPositionsChangeMarginArgs, 'futuresPrivatePositionChangePositionMarginInput'>>;
    futuresPositionsSaveLeverage?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationfuturesPositionsSaveLeverageArgs, 'futuresPrivatePositionLeverageSaveInput'>>;
    futuresPositionsSwitchIsolated?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationfuturesPositionsSwitchIsolatedArgs, 'futuresPrivatePositionSwitchIsolatedInput'>>;
    futuresPositionsSwitchPositionMode?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationfuturesPositionsSwitchPositionModeArgs, 'futuresPrivatePositionSwitchModeInput'>>;
    futuresPositionsTradingStop?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradingStopBase']>>>, ParentType, ContextType, RequireFields<MutationfuturesPositionsTradingStopArgs, 'futuresPrivatePositionTradingStopInput'>>;
    linearConditionalCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCancelStopOrderResultBase']>>>, ParentType, ContextType, RequireFields<MutationlinearConditionalCancelArgs, never>>;
    linearConditionalCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearStopOrderCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationlinearConditionalCancelAllArgs, 'privateLinearStopOrderCancelAllInput'>>;
    linearConditionalNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCreateStopOrderResultBase']>>>, ParentType, ContextType, RequireFields<MutationlinearConditionalNewArgs, never>>;
    linearConditionalReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearStopOrderReplace']>>>, ParentType, ContextType, RequireFields<MutationlinearConditionalReplaceArgs, 'privateLinearStopOrderReplaceInput'>>;
    linearOrderCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCancelOrderResultBase']>>>, ParentType, ContextType, RequireFields<MutationlinearOrderCancelArgs, never>>;
    linearOrderCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearOrderCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationlinearOrderCancelAllArgs, 'privateLinearOrderCancelAllInput'>>;
    linearOrderNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCreateOrderResultBase']>>>, ParentType, ContextType, RequireFields<MutationlinearOrderNewArgs, never>>;
    linearOrderReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearOrderReplace']>>>, ParentType, ContextType, RequireFields<MutationlinearOrderReplaceArgs, 'privateLinearOrderReplaceInput'>>;
    linearPositionsChangeMargin?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSetMarginResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsChangeMarginArgs, never>>;
    linearPositionsSaveLeverage?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSetLeverageResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsSaveLeverageArgs, never>>;
    linearPositionsSetAutoAddMargin?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSetMarginResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsSetAutoAddMarginArgs, never>>;
    linearPositionsSwitchIsolated?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSwitchIsolatedResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsSwitchIsolatedArgs, never>>;
    linearPositionsSwitchMode?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSwitchModeResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsSwitchModeArgs, never>>;
    linearPositionsTradingStop?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSetTradingStopResult']>>>, ParentType, ContextType, RequireFields<MutationlinearPositionsTradingStopArgs, never>>;
    linearWalletSetRiskLimit?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearSetRiskLimit']>>>, ParentType, ContextType, RequireFields<MutationlinearWalletSetRiskLimitArgs, 'privateLinearPositionSetRiskInput'>>;
    orderCancel?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderCancelBase']>>>, ParentType, ContextType, RequireFields<MutationorderCancelArgs, never>>;
    orderCancelAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderCancelAllBase']>>>, ParentType, ContextType, RequireFields<MutationorderCancelAllArgs, 'v2PrivateOrderCancelAllInput'>>;
    orderNew?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderResBase']>>>, ParentType, ContextType, RequireFields<MutationorderNewArgs, 'v2PrivateOrderCreateInput'>>;
    orderReplace?: Resolver<Maybe<Array<Maybe<ResolversTypes['ReplaceOrderBase']>>>, ParentType, ContextType, RequireFields<MutationorderReplaceArgs, never>>;
    positionsChangeMargin?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationpositionsChangeMarginArgs, 'positionChangePositionMarginInput'>>;
    positionsSaveLeverage?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServerTime']>>>, ParentType, ContextType, RequireFields<MutationpositionsSaveLeverageArgs, 'userLeverageSaveInput'>>;
    positionsTradingStop?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradingStopBase']>>>, ParentType, ContextType, RequireFields<MutationpositionsTradingStopArgs, 'openApiPositionTradingStopInput'>>;
    walletSetRiskLimit?: Resolver<Maybe<Array<Maybe<ResolversTypes['SetRiskLimitBase']>>>, ParentType, ContextType, RequireFields<MutationwalletSetRiskLimitArgs, 'openApiWalletRiskLimitInput'>>;
}>;
export declare type V2CancelOrderBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2CancelOrderBase'] = ResolversParentTypes['V2CancelOrderBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Result22ListItem']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Result22ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Result22ListItem'] = ResolversParentTypes['Result22ListItem']> = ResolversObject<{
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ConditionalCancelAllBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionalCancelAllBase'] = ResolversParentTypes['ConditionalCancelAllBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['ConditionalCancelAllRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ConditionalCancelAllResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ConditionalCancelAllRes'] = ResolversParentTypes['ConditionalCancelAllRes']> = ResolversObject<{
    cancelType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    clOrdID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leavesValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2ConditionalBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2ConditionalBase'] = ResolversParentTypes['V2ConditionalBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['V2ConditionalRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type V2ConditionalResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['V2ConditionalRes'] = ResolversParentTypes['V2ConditionalRes']> = ResolversObject<{
    basePrice?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rejectReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    remark?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopPx?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ReplaceConditionalBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReplaceConditionalBase'] = ResolversParentTypes['ReplaceConditionalBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Result24ListItem']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Result24ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Result24ListItem'] = ResolversParentTypes['Result24ListItem']> = ResolversObject<{
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderCancelBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderCancelBase'] = ResolversParentTypes['OrderCancelBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderRes'] = ResolversParentTypes['OrderRes']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastExecPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastExecTime?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    rejectReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderCancelAllBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderCancelAllBase'] = ResolversParentTypes['OrderCancelAllBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderCancelAllRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderCancelAllResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderCancelAllRes'] = ResolversParentTypes['OrderCancelAllRes']> = ResolversObject<{
    clOrdID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    crossStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    leavesQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leavesValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderResBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderResBase'] = ResolversParentTypes['OrderResBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type ReplaceOrderBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ReplaceOrderBase'] = ResolversParentTypes['ReplaceOrderBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['Result18ListItem']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Result18ListItemResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Result18ListItem'] = ResolversParentTypes['Result18ListItem']> = ResolversObject<{
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradingStopBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradingStopBase'] = ResolversParentTypes['TradingStopBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['TradingStopRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type TradingStopResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TradingStopRes'] = ResolversParentTypes['TradingStopRes']> = ResolversObject<{
    autoAddMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    bustPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    crossSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumCommission?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumRealisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    deleverageIndicator?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    entryPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    leverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    liqPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    ocCalcData?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    occClosingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    occFundingFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionMargin?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionSeq?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    positionValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    realisedPnl?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    riskId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    size?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    walletBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCancelStopOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCancelStopOrderResultBase'] = ResolversParentTypes['LinearCancelStopOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCancelStopOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCancelStopOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCancelStopOrderResult'] = ResolversParentTypes['LinearCancelStopOrderResult']> = ResolversObject<{
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearStopOrderCancelAllBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearStopOrderCancelAllBase'] = ResolversParentTypes['LinearStopOrderCancelAllBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCreateStopOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCreateStopOrderResultBase'] = ResolversParentTypes['LinearCreateStopOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCreateStopOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCreateStopOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCreateStopOrderResult'] = ResolversParentTypes['LinearCreateStopOrderResult']> = ResolversObject<{
    createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    stopOrderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    triggerPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearStopOrderReplaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearStopOrderReplace'] = ResolversParentTypes['LinearStopOrderReplace']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderIdRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type OrderIdResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OrderIdRes'] = ResolversParentTypes['OrderIdRes']> = ResolversObject<{
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCancelOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCancelOrderResultBase'] = ResolversParentTypes['LinearCancelOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCancelOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCancelOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCancelOrderResult'] = ResolversParentTypes['LinearCancelOrderResult']> = ResolversObject<{
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearOrderCancelAllBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearOrderCancelAllBase'] = ResolversParentTypes['LinearOrderCancelAllBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCreateOrderResultBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCreateOrderResultBase'] = ResolversParentTypes['LinearCreateOrderResultBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearCreateOrderResult']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearCreateOrderResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearCreateOrderResult'] = ResolversParentTypes['LinearCreateOrderResult']> = ResolversObject<{
    createdTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    cumExecFee?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecQty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    cumExecValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    lastExecPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    orderId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    orderType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    qty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    reduceOnly?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
    side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    slTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    stopLoss?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    takeProfit?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    timeInForce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    tpTriggerBy?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    updatedTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    userId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearOrderReplaceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearOrderReplace'] = ResolversParentTypes['LinearOrderReplace']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['OrderIdRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSetMarginResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSetMarginResult'] = ResolversParentTypes['LinearSetMarginResult']> = ResolversObject<{
    availableBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    positionListResult?: Resolver<Maybe<Array<Maybe<ResolversTypes['LinearPositionListResult']>>>, ParentType, ContextType>;
    walletBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSetLeverageResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSetLeverageResult'] = ResolversParentTypes['LinearSetLeverageResult']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSwitchIsolatedResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSwitchIsolatedResult'] = ResolversParentTypes['LinearSwitchIsolatedResult']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSwitchModeResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSwitchModeResult'] = ResolversParentTypes['LinearSwitchModeResult']> = ResolversObject<{
    tpSlMode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSetTradingStopResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSetTradingStopResult'] = ResolversParentTypes['LinearSetTradingStopResult']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type LinearSetRiskLimitResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['LinearSetRiskLimit'] = ResolversParentTypes['LinearSetRiskLimit']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<ResolversTypes['Result63']>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Result63Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Result63'] = ResolversParentTypes['Result63']> = ResolversObject<{
    riskId?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type SetRiskLimitBaseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['SetRiskLimitBase'] = ResolversParentTypes['SetRiskLimitBase']> = ResolversObject<{
    extCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    extInfo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    result?: Resolver<Maybe<Array<Maybe<ResolversTypes['RiskLimitRes']>>>, ParentType, ContextType>;
    retCode?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
    retMsg?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    timeNow?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type RiskLimitResResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RiskLimitRes'] = ResolversParentTypes['RiskLimitRes']> = ResolversObject<{
    position?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionInfo']>>>, ParentType, ContextType>;
    risk?: Resolver<Maybe<Array<Maybe<ResolversTypes['RiskIDRes']>>>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;
export declare type Resolvers<ContextType = MeshContext> = ResolversObject<{
    Query?: QueryResolvers<ContextType>;
    APIKeyBase?: APIKeyBaseResolvers<ContextType>;
    APIKeyInfo?: APIKeyInfoResolvers<ContextType>;
    Announcement?: AnnouncementResolvers<ContextType>;
    AnnouncementInfo?: AnnouncementInfoResolvers<ContextType>;
    LCPInfo?: LCPInfoResolvers<ContextType>;
    LCPInfoBase?: LCPInfoBaseResolvers<ContextType>;
    ServerTime?: ServerTimeResolvers<ContextType>;
    JSON?: GraphQLScalarType;
    ConditionalOrdersResBase?: ConditionalOrdersResBaseResolvers<ContextType>;
    ConditionalOrdersRes?: ConditionalOrdersResResolvers<ContextType>;
    V2ConditionalListRes?: V2ConditionalListResResolvers<ContextType>;
    StopOrderOrdersResBase?: StopOrderOrdersResBaseResolvers<ContextType>;
    ConditionalRes?: ConditionalResResolvers<ContextType>;
    TradeRecordsBase?: TradeRecordsBaseResolvers<ContextType>;
    TradeRecords?: TradeRecordsResolvers<ContextType>;
    TradeRecordsInfo?: TradeRecordsInfoResolvers<ContextType>;
    FundingFeeBase?: FundingFeeBaseResolvers<ContextType>;
    FundingFeeRes?: FundingFeeResResolvers<ContextType>;
    FundingPredictedBase?: FundingPredictedBaseResolvers<ContextType>;
    FundingPredicted?: FundingPredictedResolvers<ContextType>;
    FundingRateBase?: FundingRateBaseResolvers<ContextType>;
    FundingRate2?: FundingRate2Resolvers<ContextType>;
    V2OrderListBase?: V2OrderListBaseResolvers<ContextType>;
    V2OrderListData?: V2OrderListDataResolvers<ContextType>;
    V2OrderRes?: V2OrderResResolvers<ContextType>;
    QueryOrderBase?: QueryOrderBaseResolvers<ContextType>;
    QueryOrderRes?: QueryOrderResResolvers<ContextType>;
    ExtFields2?: ExtFields2Resolvers<ContextType>;
    ClosedPnlBase?: ClosedPnlBaseResolvers<ContextType>;
    ClosedPnlInfo?: ClosedPnlInfoResolvers<ContextType>;
    Position?: PositionResolvers<ContextType>;
    PositionInfo?: PositionInfoResolvers<ContextType>;
    KlineBase?: KlineBaseResolvers<ContextType>;
    KlineRes?: KlineResResolvers<ContextType>;
    IndexPriceKlineBase?: IndexPriceKlineBaseResolvers<ContextType>;
    IndexPriceKlineInfo?: IndexPriceKlineInfoResolvers<ContextType>;
    MarkPriceKlineBase?: MarkPriceKlineBaseResolvers<ContextType>;
    MarkPriceKlineInfo?: MarkPriceKlineInfoResolvers<ContextType>;
    PremiumIndexPriceKlineBase?: PremiumIndexPriceKlineBaseResolvers<ContextType>;
    PremiumIndexPriceKlineInfo?: PremiumIndexPriceKlineInfoResolvers<ContextType>;
    LinearStopOrderRecordsResponseBase?: LinearStopOrderRecordsResponseBaseResolvers<ContextType>;
    LinearStopOrderRecordsResponse?: LinearStopOrderRecordsResponseResolvers<ContextType>;
    LinearListStopOrderResult?: LinearListStopOrderResultResolvers<ContextType>;
    LinearSearchStopOrderResultBase?: LinearSearchStopOrderResultBaseResolvers<ContextType>;
    LinearSearchStopOrderResult?: LinearSearchStopOrderResultResolvers<ContextType>;
    LinearTradeRecordsResponse?: LinearTradeRecordsResponseResolvers<ContextType>;
    LinearTradeRecordItem?: LinearTradeRecordItemResolvers<ContextType>;
    LinearPrevFundingRespBase?: LinearPrevFundingRespBaseResolvers<ContextType>;
    LinearPrevFundingResp?: LinearPrevFundingRespResolvers<ContextType>;
    LinearFundingPredictedBase?: LinearFundingPredictedBaseResolvers<ContextType>;
    LinearFundingPredicted?: LinearFundingPredictedResolvers<ContextType>;
    LinearPrevFundingRateRespBase?: LinearPrevFundingRateRespBaseResolvers<ContextType>;
    LinearPrevFundingRateResp?: LinearPrevFundingRateRespResolvers<ContextType>;
    LinearKlineRespBase?: LinearKlineRespBaseResolvers<ContextType>;
    LinearKlineResp?: LinearKlineRespResolvers<ContextType>;
    LinearRecentTradingRecordRespBase?: LinearRecentTradingRecordRespBaseResolvers<ContextType>;
    LinearRecentTradingRecordResp?: LinearRecentTradingRecordRespResolvers<ContextType>;
    LinearOrderRecordsResponseBase?: LinearOrderRecordsResponseBaseResolvers<ContextType>;
    LinearOrderRecordsResponse?: LinearOrderRecordsResponseResolvers<ContextType>;
    LinearListOrderResult?: LinearListOrderResultResolvers<ContextType>;
    LinearSearchOrderResultBase?: LinearSearchOrderResultBaseResolvers<ContextType>;
    LinearSearchOrderResult?: LinearSearchOrderResultResolvers<ContextType>;
    LinearClosePnlRecordsResponse?: LinearClosePnlRecordsResponseResolvers<ContextType>;
    LinearClosedPnlRecordResult?: LinearClosedPnlRecordResultResolvers<ContextType>;
    LinearPositionListResultBase?: LinearPositionListResultBaseResolvers<ContextType>;
    LinearPositionListResult?: LinearPositionListResultResolvers<ContextType>;
    LinearRiskLimitRespBase?: LinearRiskLimitRespBaseResolvers<ContextType>;
    LinearRiskLimitResp?: LinearRiskLimitRespResolvers<ContextType>;
    AccountRatio?: AccountRatioResolvers<ContextType>;
    AccountRatioInfo?: AccountRatioInfoResolvers<ContextType>;
    BigDeal?: BigDealResolvers<ContextType>;
    BigDealInfo?: BigDealInfoResolvers<ContextType>;
    LiqRecords?: LiqRecordsResolvers<ContextType>;
    LiqRecordsInfo?: LiqRecordsInfoResolvers<ContextType>;
    OpenInterest2?: OpenInterest2Resolvers<ContextType>;
    OpenInterestInfo?: OpenInterestInfoResolvers<ContextType>;
    OrderBookBase?: OrderBookBaseResolvers<ContextType>;
    OderBookRes?: OderBookResResolvers<ContextType>;
    SymbolInfoBase?: SymbolInfoBaseResolvers<ContextType>;
    SymbolTickInfo?: SymbolTickInfoResolvers<ContextType>;
    TradingRecords?: TradingRecordsResolvers<ContextType>;
    TradingRecordsInfo?: TradingRecordsInfoResolvers<ContextType>;
    Symbols?: SymbolsResolvers<ContextType>;
    SymbolInfo?: SymbolInfoResolvers<ContextType>;
    LotSizeFilter2?: LotSizeFilter2Resolvers<ContextType>;
    PriceFilter2?: PriceFilter2Resolvers<ContextType>;
    ExchangeOrderListBase?: ExchangeOrderListBaseResolvers<ContextType>;
    ExchangeOrderList?: ExchangeOrderListResolvers<ContextType>;
    WalletBalanceBase?: WalletBalanceBaseResolvers<ContextType>;
    FundRecordBase?: FundRecordBaseResolvers<ContextType>;
    FundingRecords?: FundingRecordsResolvers<ContextType>;
    RiskLimitBase?: RiskLimitBaseResolvers<ContextType>;
    GetRiskLimitRes?: GetRiskLimitResResolvers<ContextType>;
    RiskIDRes?: RiskIDResResolvers<ContextType>;
    WithdrawResBase?: WithdrawResBaseResolvers<ContextType>;
    WithdrawRecords?: WithdrawRecordsResolvers<ContextType>;
    Mutation?: MutationResolvers<ContextType>;
    V2CancelOrderBase?: V2CancelOrderBaseResolvers<ContextType>;
    Result22ListItem?: Result22ListItemResolvers<ContextType>;
    ConditionalCancelAllBase?: ConditionalCancelAllBaseResolvers<ContextType>;
    ConditionalCancelAllRes?: ConditionalCancelAllResResolvers<ContextType>;
    V2ConditionalBase?: V2ConditionalBaseResolvers<ContextType>;
    V2ConditionalRes?: V2ConditionalResResolvers<ContextType>;
    ReplaceConditionalBase?: ReplaceConditionalBaseResolvers<ContextType>;
    Result24ListItem?: Result24ListItemResolvers<ContextType>;
    OrderCancelBase?: OrderCancelBaseResolvers<ContextType>;
    OrderRes?: OrderResResolvers<ContextType>;
    OrderCancelAllBase?: OrderCancelAllBaseResolvers<ContextType>;
    OrderCancelAllRes?: OrderCancelAllResResolvers<ContextType>;
    OrderResBase?: OrderResBaseResolvers<ContextType>;
    ReplaceOrderBase?: ReplaceOrderBaseResolvers<ContextType>;
    Result18ListItem?: Result18ListItemResolvers<ContextType>;
    TradingStopBase?: TradingStopBaseResolvers<ContextType>;
    TradingStopRes?: TradingStopResResolvers<ContextType>;
    LinearCancelStopOrderResultBase?: LinearCancelStopOrderResultBaseResolvers<ContextType>;
    LinearCancelStopOrderResult?: LinearCancelStopOrderResultResolvers<ContextType>;
    LinearStopOrderCancelAllBase?: LinearStopOrderCancelAllBaseResolvers<ContextType>;
    LinearCreateStopOrderResultBase?: LinearCreateStopOrderResultBaseResolvers<ContextType>;
    LinearCreateStopOrderResult?: LinearCreateStopOrderResultResolvers<ContextType>;
    LinearStopOrderReplace?: LinearStopOrderReplaceResolvers<ContextType>;
    OrderIdRes?: OrderIdResResolvers<ContextType>;
    LinearCancelOrderResultBase?: LinearCancelOrderResultBaseResolvers<ContextType>;
    LinearCancelOrderResult?: LinearCancelOrderResultResolvers<ContextType>;
    LinearOrderCancelAllBase?: LinearOrderCancelAllBaseResolvers<ContextType>;
    LinearCreateOrderResultBase?: LinearCreateOrderResultBaseResolvers<ContextType>;
    LinearCreateOrderResult?: LinearCreateOrderResultResolvers<ContextType>;
    LinearOrderReplace?: LinearOrderReplaceResolvers<ContextType>;
    LinearSetMarginResult?: LinearSetMarginResultResolvers<ContextType>;
    LinearSetLeverageResult?: LinearSetLeverageResultResolvers<ContextType>;
    LinearSwitchIsolatedResult?: LinearSwitchIsolatedResultResolvers<ContextType>;
    LinearSwitchModeResult?: LinearSwitchModeResultResolvers<ContextType>;
    LinearSetTradingStopResult?: LinearSetTradingStopResultResolvers<ContextType>;
    LinearSetRiskLimit?: LinearSetRiskLimitResolvers<ContextType>;
    Result63?: Result63Resolvers<ContextType>;
    SetRiskLimitBase?: SetRiskLimitBaseResolvers<ContextType>;
    RiskLimitRes?: RiskLimitResResolvers<ContextType>;
}>;
import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { InContextSdkMethod } from '@graphql-mesh/types';
export declare type QueryBybitExchangeSdk = {
    aPIkeyInfo: InContextSdkMethod<Query['aPIkeyInfo'], {}, MeshContext>;
    commonAnnouncements: InContextSdkMethod<Query['commonAnnouncements'], {}, MeshContext>;
    commonGetLcp: InContextSdkMethod<Query['commonGetLcp'], QuerycommonGetLcpArgs, MeshContext>;
    commonGetTime: InContextSdkMethod<Query['commonGetTime'], {}, MeshContext>;
    conditionalGetOrders: InContextSdkMethod<Query['conditionalGetOrders'], QueryconditionalGetOrdersArgs, MeshContext>;
    conditionalQuery: InContextSdkMethod<Query['conditionalQuery'], QueryconditionalQueryArgs, MeshContext>;
    executionGetTrades: InContextSdkMethod<Query['executionGetTrades'], QueryexecutionGetTradesArgs, MeshContext>;
    fundingMyLastFee: InContextSdkMethod<Query['fundingMyLastFee'], QueryfundingMyLastFeeArgs, MeshContext>;
    fundingPredicted: InContextSdkMethod<Query['fundingPredicted'], QueryfundingPredictedArgs, MeshContext>;
    fundingPrevRate: InContextSdkMethod<Query['fundingPrevRate'], QueryfundingPrevRateArgs, MeshContext>;
    futuresConditionalGetOrders: InContextSdkMethod<Query['futuresConditionalGetOrders'], QueryfuturesConditionalGetOrdersArgs, MeshContext>;
    futuresConditionalQuery: InContextSdkMethod<Query['futuresConditionalQuery'], QueryfuturesConditionalQueryArgs, MeshContext>;
    futuresExecutionGetTrades: InContextSdkMethod<Query['futuresExecutionGetTrades'], QueryfuturesExecutionGetTradesArgs, MeshContext>;
    futuresOrderGetOrders: InContextSdkMethod<Query['futuresOrderGetOrders'], QueryfuturesOrderGetOrdersArgs, MeshContext>;
    futuresOrderQuery: InContextSdkMethod<Query['futuresOrderQuery'], QueryfuturesOrderQueryArgs, MeshContext>;
    futuresPositionsClosePnlRecords: InContextSdkMethod<Query['futuresPositionsClosePnlRecords'], QueryfuturesPositionsClosePnlRecordsArgs, MeshContext>;
    futuresPositionsMyPosition: InContextSdkMethod<Query['futuresPositionsMyPosition'], QueryfuturesPositionsMyPositionArgs, MeshContext>;
    klineGet: InContextSdkMethod<Query['klineGet'], QueryklineGetArgs, MeshContext>;
    klineIndexPrice: InContextSdkMethod<Query['klineIndexPrice'], QueryklineIndexPriceArgs, MeshContext>;
    klineMarkPrice: InContextSdkMethod<Query['klineMarkPrice'], QueryklineMarkPriceArgs, MeshContext>;
    klinePremiumIndexPrice: InContextSdkMethod<Query['klinePremiumIndexPrice'], QueryklinePremiumIndexPriceArgs, MeshContext>;
    linearConditionalGetOrders: InContextSdkMethod<Query['linearConditionalGetOrders'], QuerylinearConditionalGetOrdersArgs, MeshContext>;
    linearConditionalQuery: InContextSdkMethod<Query['linearConditionalQuery'], QuerylinearConditionalQueryArgs, MeshContext>;
    linearExecutionGetTrades: InContextSdkMethod<Query['linearExecutionGetTrades'], QuerylinearExecutionGetTradesArgs, MeshContext>;
    linearFundingMyLastFee: InContextSdkMethod<Query['linearFundingMyLastFee'], QuerylinearFundingMyLastFeeArgs, MeshContext>;
    linearFundingPredicted: InContextSdkMethod<Query['linearFundingPredicted'], QuerylinearFundingPredictedArgs, MeshContext>;
    linearFundingPrevRate: InContextSdkMethod<Query['linearFundingPrevRate'], QuerylinearFundingPrevRateArgs, MeshContext>;
    linearKlineGet: InContextSdkMethod<Query['linearKlineGet'], QuerylinearKlineGetArgs, MeshContext>;
    linearKlineIndexPrice: InContextSdkMethod<Query['linearKlineIndexPrice'], QuerylinearKlineIndexPriceArgs, MeshContext>;
    linearKlineMarkPrice: InContextSdkMethod<Query['linearKlineMarkPrice'], QuerylinearKlineMarkPriceArgs, MeshContext>;
    linearKlinePremiumIndexPrice: InContextSdkMethod<Query['linearKlinePremiumIndexPrice'], QuerylinearKlinePremiumIndexPriceArgs, MeshContext>;
    linearMarketTrading: InContextSdkMethod<Query['linearMarketTrading'], QuerylinearMarketTradingArgs, MeshContext>;
    linearOrderGetOrders: InContextSdkMethod<Query['linearOrderGetOrders'], QuerylinearOrderGetOrdersArgs, MeshContext>;
    linearOrderQuery: InContextSdkMethod<Query['linearOrderQuery'], QuerylinearOrderQueryArgs, MeshContext>;
    linearPositionsClosePnlRecords: InContextSdkMethod<Query['linearPositionsClosePnlRecords'], QuerylinearPositionsClosePnlRecordsArgs, MeshContext>;
    linearPositionsMyPosition: InContextSdkMethod<Query['linearPositionsMyPosition'], QuerylinearPositionsMyPositionArgs, MeshContext>;
    linearWalletGetRiskLimit: InContextSdkMethod<Query['linearWalletGetRiskLimit'], QuerylinearWalletGetRiskLimitArgs, MeshContext>;
    marketAccountRatio: InContextSdkMethod<Query['marketAccountRatio'], QuerymarketAccountRatioArgs, MeshContext>;
    marketBigDeal: InContextSdkMethod<Query['marketBigDeal'], QuerymarketBigDealArgs, MeshContext>;
    marketLiqRecords: InContextSdkMethod<Query['marketLiqRecords'], QuerymarketLiqRecordsArgs, MeshContext>;
    marketOpenInterest: InContextSdkMethod<Query['marketOpenInterest'], QuerymarketOpenInterestArgs, MeshContext>;
    marketOrderbook: InContextSdkMethod<Query['marketOrderbook'], QuerymarketOrderbookArgs, MeshContext>;
    marketSymbolInfo: InContextSdkMethod<Query['marketSymbolInfo'], QuerymarketSymbolInfoArgs, MeshContext>;
    marketTradingRecords: InContextSdkMethod<Query['marketTradingRecords'], QuerymarketTradingRecordsArgs, MeshContext>;
    orderGetOrders: InContextSdkMethod<Query['orderGetOrders'], QueryorderGetOrdersArgs, MeshContext>;
    orderQuery: InContextSdkMethod<Query['orderQuery'], QueryorderQueryArgs, MeshContext>;
    positionsClosePnlRecords: InContextSdkMethod<Query['positionsClosePnlRecords'], QuerypositionsClosePnlRecordsArgs, MeshContext>;
    positionsMyPosition: InContextSdkMethod<Query['positionsMyPosition'], QuerypositionsMyPositionArgs, MeshContext>;
    symbolGet: InContextSdkMethod<Query['symbolGet'], {}, MeshContext>;
    walletExchangeOrder: InContextSdkMethod<Query['walletExchangeOrder'], QuerywalletExchangeOrderArgs, MeshContext>;
    walletGetBalance: InContextSdkMethod<Query['walletGetBalance'], QuerywalletGetBalanceArgs, MeshContext>;
    walletGetRecords: InContextSdkMethod<Query['walletGetRecords'], QuerywalletGetRecordsArgs, MeshContext>;
    walletGetRiskLimit: InContextSdkMethod<Query['walletGetRiskLimit'], {}, MeshContext>;
    walletWithdraw: InContextSdkMethod<Query['walletWithdraw'], QuerywalletWithdrawArgs, MeshContext>;
};
export declare type MutationBybitExchangeSdk = {
    conditionalCancel: InContextSdkMethod<Mutation['conditionalCancel'], MutationconditionalCancelArgs, MeshContext>;
    conditionalCancelAll: InContextSdkMethod<Mutation['conditionalCancelAll'], MutationconditionalCancelAllArgs, MeshContext>;
    conditionalNew: InContextSdkMethod<Mutation['conditionalNew'], MutationconditionalNewArgs, MeshContext>;
    conditionalReplace: InContextSdkMethod<Mutation['conditionalReplace'], MutationconditionalReplaceArgs, MeshContext>;
    futuresConditionalCancel: InContextSdkMethod<Mutation['futuresConditionalCancel'], MutationfuturesConditionalCancelArgs, MeshContext>;
    futuresConditionalCancelAll: InContextSdkMethod<Mutation['futuresConditionalCancelAll'], MutationfuturesConditionalCancelAllArgs, MeshContext>;
    futuresConditionalNew: InContextSdkMethod<Mutation['futuresConditionalNew'], MutationfuturesConditionalNewArgs, MeshContext>;
    futuresConditionalReplace: InContextSdkMethod<Mutation['futuresConditionalReplace'], MutationfuturesConditionalReplaceArgs, MeshContext>;
    futuresOrderCancel: InContextSdkMethod<Mutation['futuresOrderCancel'], MutationfuturesOrderCancelArgs, MeshContext>;
    futuresOrderCancelAll: InContextSdkMethod<Mutation['futuresOrderCancelAll'], MutationfuturesOrderCancelAllArgs, MeshContext>;
    futuresOrderNew: InContextSdkMethod<Mutation['futuresOrderNew'], MutationfuturesOrderNewArgs, MeshContext>;
    futuresOrderReplace: InContextSdkMethod<Mutation['futuresOrderReplace'], MutationfuturesOrderReplaceArgs, MeshContext>;
    futuresPositionsChangeMargin: InContextSdkMethod<Mutation['futuresPositionsChangeMargin'], MutationfuturesPositionsChangeMarginArgs, MeshContext>;
    futuresPositionsSaveLeverage: InContextSdkMethod<Mutation['futuresPositionsSaveLeverage'], MutationfuturesPositionsSaveLeverageArgs, MeshContext>;
    futuresPositionsSwitchIsolated: InContextSdkMethod<Mutation['futuresPositionsSwitchIsolated'], MutationfuturesPositionsSwitchIsolatedArgs, MeshContext>;
    futuresPositionsSwitchPositionMode: InContextSdkMethod<Mutation['futuresPositionsSwitchPositionMode'], MutationfuturesPositionsSwitchPositionModeArgs, MeshContext>;
    futuresPositionsTradingStop: InContextSdkMethod<Mutation['futuresPositionsTradingStop'], MutationfuturesPositionsTradingStopArgs, MeshContext>;
    linearConditionalCancel: InContextSdkMethod<Mutation['linearConditionalCancel'], MutationlinearConditionalCancelArgs, MeshContext>;
    linearConditionalCancelAll: InContextSdkMethod<Mutation['linearConditionalCancelAll'], MutationlinearConditionalCancelAllArgs, MeshContext>;
    linearConditionalNew: InContextSdkMethod<Mutation['linearConditionalNew'], MutationlinearConditionalNewArgs, MeshContext>;
    linearConditionalReplace: InContextSdkMethod<Mutation['linearConditionalReplace'], MutationlinearConditionalReplaceArgs, MeshContext>;
    linearOrderCancel: InContextSdkMethod<Mutation['linearOrderCancel'], MutationlinearOrderCancelArgs, MeshContext>;
    linearOrderCancelAll: InContextSdkMethod<Mutation['linearOrderCancelAll'], MutationlinearOrderCancelAllArgs, MeshContext>;
    linearOrderNew: InContextSdkMethod<Mutation['linearOrderNew'], MutationlinearOrderNewArgs, MeshContext>;
    linearOrderReplace: InContextSdkMethod<Mutation['linearOrderReplace'], MutationlinearOrderReplaceArgs, MeshContext>;
    linearPositionsChangeMargin: InContextSdkMethod<Mutation['linearPositionsChangeMargin'], MutationlinearPositionsChangeMarginArgs, MeshContext>;
    linearPositionsSaveLeverage: InContextSdkMethod<Mutation['linearPositionsSaveLeverage'], MutationlinearPositionsSaveLeverageArgs, MeshContext>;
    linearPositionsSetAutoAddMargin: InContextSdkMethod<Mutation['linearPositionsSetAutoAddMargin'], MutationlinearPositionsSetAutoAddMarginArgs, MeshContext>;
    linearPositionsSwitchIsolated: InContextSdkMethod<Mutation['linearPositionsSwitchIsolated'], MutationlinearPositionsSwitchIsolatedArgs, MeshContext>;
    linearPositionsSwitchMode: InContextSdkMethod<Mutation['linearPositionsSwitchMode'], MutationlinearPositionsSwitchModeArgs, MeshContext>;
    linearPositionsTradingStop: InContextSdkMethod<Mutation['linearPositionsTradingStop'], MutationlinearPositionsTradingStopArgs, MeshContext>;
    linearWalletSetRiskLimit: InContextSdkMethod<Mutation['linearWalletSetRiskLimit'], MutationlinearWalletSetRiskLimitArgs, MeshContext>;
    orderCancel: InContextSdkMethod<Mutation['orderCancel'], MutationorderCancelArgs, MeshContext>;
    orderCancelAll: InContextSdkMethod<Mutation['orderCancelAll'], MutationorderCancelAllArgs, MeshContext>;
    orderNew: InContextSdkMethod<Mutation['orderNew'], MutationorderNewArgs, MeshContext>;
    orderReplace: InContextSdkMethod<Mutation['orderReplace'], MutationorderReplaceArgs, MeshContext>;
    positionsChangeMargin: InContextSdkMethod<Mutation['positionsChangeMargin'], MutationpositionsChangeMarginArgs, MeshContext>;
    positionsSaveLeverage: InContextSdkMethod<Mutation['positionsSaveLeverage'], MutationpositionsSaveLeverageArgs, MeshContext>;
    positionsTradingStop: InContextSdkMethod<Mutation['positionsTradingStop'], MutationpositionsTradingStopArgs, MeshContext>;
    walletSetRiskLimit: InContextSdkMethod<Mutation['walletSetRiskLimit'], MutationwalletSetRiskLimitArgs, MeshContext>;
};
export declare type SubscriptionBybitExchangeSdk = {};
export declare type BybitExchangeContext = {
    ["BybitExchange"]: {
        Query: QueryBybitExchangeSdk;
        Mutation: MutationBybitExchangeSdk;
        Subscription: SubscriptionBybitExchangeSdk;
    };
};
export declare type MeshContext = BybitExchangeContext & BaseMeshContext;
import { GetMeshOptions } from '@graphql-mesh/runtime';
import { YamlConfig } from '@graphql-mesh/types';
export declare const rawConfig: YamlConfig.Config;
export declare function getMeshOptions(): GetMeshOptions;
export declare const documentsInSDL: any[];
export declare function getBuiltMesh(): Promise<MeshInstance>;
export declare function getMeshSDK(): Promise<{}>;
export declare type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>;
export declare function getSdk<C>(requester: Requester<C>): {};
export declare type Sdk = ReturnType<typeof getSdk>;
