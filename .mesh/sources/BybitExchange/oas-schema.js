module.exports = [
  {
    "openapi": "3.0.0",
    "info": {
      "title": "Bybit API",
      "termsOfService": "https://www.bybit.com/app/login",
      "description": "## REST API for the Bybit Exchange.\nBase URI: [https://api.bybit.com]\n\n",
      "contact": {
        "email": "IT@bybit.com"
      },
      "version": "0.2.12"
    },
    "paths": {
      "/v2/public/time": {
        "get": {
          "tags": [
            "Common"
          ],
          "summary": "Get bybit server time.",
          "operationId": "Common.getTime",
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/announcement": {
        "get": {
          "tags": [
            "Common"
          ],
          "summary": "Get Bybit OpenAPI announcements in the last 30 days in reverse order.",
          "operationId": "Common.announcements",
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Announcement"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/orderBook/L2": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Get the orderbook.",
          "operationId": "Market.orderbook",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderBookBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/tickers": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Get the latest information for symbol.",
          "operationId": "Market.symbolInfo",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/SymbolInfoBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/trading-records": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Get recent trades",
          "operationId": "Market.tradingRecords",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "From ID. Default: return latest data",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Number of results. Default 500; max 1000",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/TradingRecords"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/kline/list": {
        "get": {
          "tags": [
            "Kline"
          ],
          "summary": "Query historical kline.",
          "operationId": "Kline.get",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Kline interval.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "from timestamp.",
              "required": true,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/KlineBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/symbols": {
        "get": {
          "tags": [
            "Symbol"
          ],
          "summary": "Query Symbols.",
          "operationId": "Symbol.get",
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Symbols"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/liq-records": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Query liq records.",
          "operationId": "Market.liqRecords",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "From ID. Default: return latest data",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 1000. Default size is 500",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "description": "Start timestamp point for result, in millisecond",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "end_time",
              "in": "query",
              "description": "End timestamp point for result, in millisecond",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LiqRecords"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/mark-price-kline": {
        "get": {
          "tags": [
            "Kline"
          ],
          "summary": "Query mark price kline.",
          "operationId": "Kline.markPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Data refresh interval",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "From timestamp in seconds",
              "required": true,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 1000. Default size is 500",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/MarkPriceKlineBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/index-price-kline": {
        "get": {
          "tags": [
            "Kline"
          ],
          "summary": "Query index price kline.",
          "operationId": "Kline.indexPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Data refresh interval",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "From timestamp in seconds",
              "required": true,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 1000. Default size is 500",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/IndexPriceKlineBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/premium-index-kline": {
        "get": {
          "tags": [
            "Kline"
          ],
          "summary": "Query premium index price kline.",
          "operationId": "Kline.premiumIndexPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Data refresh interval",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "From timestamp in seconds",
              "required": true,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 1000. Default size is 500",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/PremiumIndexPriceKlineBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/open-interest": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Query Open Interest",
          "operationId": "Market.openInterest",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 200. Default size is 50",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "period",
              "in": "query",
              "description": "Data recording period. 5min, 15min, 30min, 1h, 4h, 1d",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OpenInterest"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/big-deal": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Query Big Deal",
          "operationId": "Market.bigDeal",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 1000. Default size is 500",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/BigDeal"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/public/account-ratio": {
        "get": {
          "tags": [
            "Market"
          ],
          "summary": "Query Account Long Short Ratio",
          "operationId": "Market.accountRatio",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size, max size is 500. Default size is 50",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "period",
              "in": "query",
              "description": "Data recording period. 5min, 15min, 30min, 1h, 4h, 1d",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/AccountRatio"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/v2/private/order/create": {
        "post": {
          "tags": [
            "Order"
          ],
          "summary": "Place active order",
          "operationId": "Order.new",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.new"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/order/list": {
        "get": {
          "tags": [
            "Order"
          ],
          "summary": "Get my active order list.",
          "operationId": "Order.getOrders",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type. Default BTCUSD",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "TLimit for data size per page, max size is 50. Default as showing 20 pieces of data per page",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "order_status",
              "in": "query",
              "description": "Query your orders for all statuses if 'order_status' is empty. If you want to query orders with specific statuses , you can pass the order_status split by",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "direction",
              "in": "query",
              "description": "Search direction. prev: prev page, next: next page. Defaults to next",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "cursor",
              "in": "query",
              "description": "cursor is a unique identifier for a specific record, which acts as a pointer to the next record we want to start querying from to get the next page of results",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2OrderListBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/order/cancel": {
        "post": {
          "tags": [
            "Order"
          ],
          "summary": "Get my active order list.",
          "operationId": "Order.cancel",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancel"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderCancelBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/order/cancelAll": {
        "post": {
          "tags": [
            "Order"
          ],
          "summary": "Get my active order list.",
          "operationId": "Order.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/order/replace": {
        "post": {
          "tags": [
            "Order"
          ],
          "summary": "Replace active order. Only incomplete orders can be modified. ",
          "operationId": "Order.replace",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.replace"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ReplaceOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/order": {
        "get": {
          "tags": [
            "Order"
          ],
          "summary": "Get my active order list.",
          "operationId": "Order.query",
          "parameters": [
            {
              "name": "order_id",
              "in": "query",
              "description": "Order ID",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type. Default BTCUSD",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "description": "Agency customized order ID",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/QueryOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order/create": {
        "post": {
          "tags": [
            "Conditional"
          ],
          "summary": "Place a new conditional order.",
          "operationId": "Conditional.new",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.new"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2ConditionalBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order/list": {
        "get": {
          "tags": [
            "Conditional"
          ],
          "summary": "Get my conditional order list.",
          "operationId": "Conditional.getOrders",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "stop_order_status",
              "in": "query",
              "description": "Stop order status.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "direction",
              "in": "query",
              "description": "Search direction. prev: prev page, next: next page. Defaults to next",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "cursor",
              "in": "query",
              "description": "Page turning mark，Use return cursor,Sign use origin data, in request please urlencode",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ConditionalOrdersResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order/cancel": {
        "post": {
          "tags": [
            "Conditional"
          ],
          "summary": "Cancel conditional order.",
          "operationId": "Conditional.cancel",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.cancel"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2CancelOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order/cancelAll": {
        "post": {
          "tags": [
            "Conditional"
          ],
          "summary": "Cancel conditional order.",
          "operationId": "Conditional.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ConditionalCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order/replace": {
        "post": {
          "tags": [
            "Conditional"
          ],
          "summary": "Replace conditional order. Only incomplete orders can be modified. ",
          "operationId": "Conditional.replace",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.replace"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ReplaceConditionalBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/stop-order": {
        "get": {
          "tags": [
            "Conditional"
          ],
          "summary": "Query real-time stop order information.",
          "operationId": "Conditional.query",
          "parameters": [
            {
              "name": "stop_order_id",
              "in": "query",
              "description": "Order ID of conditional order.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "description": "Agency customized order ID.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/StopOrderOrdersResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/user/leverage/save": {
        "post": {
          "tags": [
            "Positions"
          ],
          "summary": "Change user leverage.",
          "operationId": "Positions.saveLeverage",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "A symbol which you want change its leverage",
                      "type": "string"
                    },
                    "leverage": {
                      "description": "New leverage you want set",
                      "type": "string"
                    }
                  },
                  "required": [
                    "symbol",
                    "leverage"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/position/list": {
        "get": {
          "tags": [
            "Positions"
          ],
          "summary": "Get my position list.",
          "operationId": "Positions.myPosition",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type which you want update its margin",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Position"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/position/change-position-margin": {
        "post": {
          "tags": [
            "Positions"
          ],
          "summary": "Update margin.",
          "operationId": "Positions.changeMargin",
          "requestBody": {
            "$ref": "#/components/requestBodies/Positions.changeMargin"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/position/trading-stop": {
        "post": {
          "tags": [
            "Positions"
          ],
          "summary": "Set Trading-Stop Condition.",
          "operationId": "Positions.tradingStop",
          "requestBody": {
            "$ref": "#/components/requestBodies/Positions.tradingStop"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/TradingStopBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/exchange-order/list": {
        "get": {
          "tags": [
            "Wallet"
          ],
          "summary": "Asset Exchange Records",
          "operationId": "Wallet.exchangeOrder",
          "parameters": [
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "Start ID. By default, returns the latest IDs",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "direction",
              "in": "query",
              "description": "Search direction. Prev: searches in ascending order from start ID, Next: searches in descending order from start ID. Defaults to Next",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ExchangeOrderListBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/wallet/fund/records": {
        "get": {
          "tags": [
            "Wallet"
          ],
          "summary": "Get wallet fund records",
          "operationId": "Wallet.getRecords",
          "parameters": [
            {
              "name": "start_date",
              "in": "query",
              "description": "Start point for result",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "end_date",
              "in": "query",
              "description": "End point for result",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "currency",
              "in": "query",
              "description": "Currency type",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "wallet_fund_type",
              "in": "query",
              "description": "wallet fund type",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. Default getting first page data",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/FundRecordBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/wallet/withdraw/list": {
        "get": {
          "tags": [
            "Wallet"
          ],
          "summary": "Get wallet fund records",
          "operationId": "Wallet.withdraw",
          "parameters": [
            {
              "name": "start_date",
              "in": "query",
              "description": "Start point for result",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "end_date",
              "in": "query",
              "description": "End point for result",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "coin",
              "in": "query",
              "description": "Currency",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "status",
              "in": "query",
              "description": "Withdraw status",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. Default getting first page data",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/WithdrawResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/wallet/balance": {
        "get": {
          "tags": [
            "Wallet"
          ],
          "summary": "get wallet balance info",
          "operationId": "Wallet.getBalance",
          "parameters": [
            {
              "name": "coin",
              "in": "query",
              "description": "Coin.enum {BTC,EOS,XRP,ETH,USDT}",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/WalletBalanceBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/wallet/risk-limit": {
        "post": {
          "tags": [
            "Wallet"
          ],
          "summary": "Set risk limit",
          "operationId": "Wallet.setRiskLimit",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "Contract type.",
                      "type": "string"
                    },
                    "risk_id": {
                      "description": "Risk ID. Can be found with the Get risk limit list endpoint.",
                      "type": "number",
                      "format": "int32"
                    }
                  },
                  "required": [
                    "symbol",
                    "risk_id"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/SetRiskLimitBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/wallet/risk-limit/list": {
        "get": {
          "tags": [
            "Wallet"
          ],
          "summary": "Get risk limit.",
          "operationId": "Wallet.getRiskLimit",
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/RiskLimitBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/funding/prev-funding-rate": {
        "get": {
          "tags": [
            "Funding"
          ],
          "summary": "Get predicted funding rate and funding fee.",
          "operationId": "Funding.prevRate",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/FundingRateBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/funding/prev-funding": {
        "get": {
          "tags": [
            "Funding"
          ],
          "summary": "Funding settlement occurs every 8 hours at 00:00 UTC, 08:00 UTC and 16:00 UTC. The current interval's fund fee settlement is based on the previous interval's fund rate. For example, at 16:00, the settlement is based on the fund rate generated at 8:00. The fund rate generated at 16:00 will be used at 0:00 on the next day.",
          "operationId": "Funding.myLastFee",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/FundingFeeBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/open-api/funding/predicted-funding": {
        "get": {
          "tags": [
            "Funding"
          ],
          "summary": "Get predicted funding rate and funding fee.",
          "operationId": "Funding.predicted",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/FundingPredictedBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/execution/list": {
        "get": {
          "tags": [
            "Execution"
          ],
          "summary": "Get user’s trade records.",
          "operationId": "Execution.getTrades",
          "parameters": [
            {
              "name": "order_id",
              "in": "query",
              "description": "OrderID. If not provided, will return user’s trading records.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "description": "Start timestamp point for result.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. Default getting first page data.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/TradeRecordsBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/trade/closed-pnl/list": {
        "get": {
          "tags": [
            "Execution",
            "Positions"
          ],
          "summary": "Get user's closed profit and loss records",
          "operationId": "Positions.closePnlRecords",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "description": "Start timestamp point for result, in second",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "end_time",
              "in": "query",
              "description": "End timestamp point for result, in second",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "exec_type",
              "in": "query",
              "description": "Execution type",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. By default, gets first page of data. Maximum of 50 pages",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ClosedPnlBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/v2/private/account/lcp": {
        "get": {
          "tags": [
            "Common"
          ],
          "summary": "Query LCP info.",
          "operationId": "Common.getLcp",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LCPInfo"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false,
          "security": []
        }
      },
      "/open-api/api-key": {
        "get": {
          "tags": [
            "APIkey"
          ],
          "summary": "Get account api-key information.",
          "operationId": "APIkey.info",
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/APIKeyBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/order/create": {
        "post": {
          "description": "This will create linear order",
          "tags": [
            "LinearOrder"
          ],
          "summary": "Create Active Order",
          "operationId": "LinearOrder.new",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "order_type": {
                      "type": "string"
                    },
                    "time_in_force": {
                      "type": "string"
                    },
                    "qty": {
                      "type": "number",
                      "format": "double"
                    },
                    "price": {
                      "type": "number",
                      "format": "double"
                    },
                    "take_profit": {
                      "type": "number",
                      "format": "double"
                    },
                    "stop_loss": {
                      "type": "number",
                      "format": "double"
                    },
                    "reduce_only": {
                      "type": "boolean"
                    },
                    "tp_trigger_by": {
                      "type": "string"
                    },
                    "sl_trigger_by": {
                      "type": "string"
                    },
                    "close_on_trigger": {
                      "type": "boolean"
                    },
                    "order_link_id": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearCreateOrderResultBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/order/cancel": {
        "post": {
          "description": "This will cancel linear active order",
          "tags": [
            "LinearOrder"
          ],
          "summary": "Cancel Active Order",
          "operationId": "LinearOrder.cancel",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "order_id": {
                      "type": "string"
                    },
                    "order_link_id": {
                      "type": "string"
                    },
                    "symbol": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearCancelOrderResultBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/order/cancel-all": {
        "post": {
          "tags": [
            "LinearOrder"
          ],
          "summary": "Cancel all active orders.",
          "operationId": "LinearOrder.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearOrderCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/order/list": {
        "get": {
          "description": "This will get linear active orders",
          "tags": [
            "LinearOrder"
          ],
          "summary": "Get linear Active Orders",
          "operationId": "LinearOrder.getOrders",
          "parameters": [
            {
              "name": "order_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_status",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearOrderRecordsResponseBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/order/search": {
        "get": {
          "description": "This will get linear active orders(real-time)",
          "tags": [
            "LinearOrder"
          ],
          "summary": "Get Active Orders(real-time)",
          "operationId": "LinearOrder.query",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSearchOrderResultBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/order/replace": {
        "post": {
          "tags": [
            "LinearOrder"
          ],
          "summary": "Replace Active Order",
          "operationId": "LinearOrder.replace",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "order_id": {
                      "type": "string"
                    },
                    "order_link_id": {
                      "type": "string"
                    },
                    "p_r_qty": {
                      "type": "string"
                    },
                    "p_r_price": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "symbol"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearOrderReplace"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/stop-order/create": {
        "post": {
          "description": "This will create linear stop order",
          "tags": [
            "LinearConditional"
          ],
          "summary": "Create linear stop Order",
          "operationId": "LinearConditional.new",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "order_type": {
                      "type": "string"
                    },
                    "qty": {
                      "type": "number",
                      "format": "double"
                    },
                    "price": {
                      "type": "number",
                      "format": "double"
                    },
                    "base_price": {
                      "type": "number",
                      "format": "double"
                    },
                    "stop_px": {
                      "type": "number",
                      "format": "double"
                    },
                    "time_in_force": {
                      "type": "string"
                    },
                    "trigger_by": {
                      "type": "string"
                    },
                    "reduce_only": {
                      "type": "boolean"
                    },
                    "close_on_trigger": {
                      "type": "boolean"
                    },
                    "order_link_id": {
                      "type": "string"
                    },
                    "take_profit": {
                      "type": "number",
                      "format": "double"
                    },
                    "stop_loss": {
                      "type": "number",
                      "format": "double"
                    },
                    "tp_trigger_by": {
                      "type": "string"
                    },
                    "sl_trigger_by": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearCreateStopOrderResultBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/stop-order/cancel": {
        "post": {
          "description": "This will cancel linear active order",
          "tags": [
            "LinearConditional"
          ],
          "summary": "Cancel Active Order",
          "operationId": "LinearConditional.cancel",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "stop_order_id": {
                      "type": "string"
                    },
                    "order_link_id": {
                      "type": "string"
                    },
                    "symbol": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearCancelStopOrderResultBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/stop-order/cancel-all": {
        "post": {
          "tags": [
            "LinearConditional"
          ],
          "summary": "Cancel all stop orders.",
          "operationId": "LinearConditional.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearStopOrderCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/stop-order/list": {
        "get": {
          "description": "This will get linear active orders",
          "tags": [
            "LinearConditional"
          ],
          "summary": "Get linear Stop Orders",
          "operationId": "LinearConditional.getOrders",
          "parameters": [
            {
              "name": "stop_order_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "stop_order_status",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearStopOrderRecordsResponseBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/stop-order/search": {
        "get": {
          "description": "This will get linear stop orders(real-time)",
          "tags": [
            "LinearConditional"
          ],
          "summary": "Get Stop Orders(real-time)",
          "operationId": "LinearConditional.query",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "stop_order_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSearchStopOrderResultBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/stop-order/replace": {
        "post": {
          "tags": [
            "LinearConditional"
          ],
          "summary": "Replace conditional order",
          "operationId": "LinearConditional.replace",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "stop_order_id": {
                      "type": "string"
                    },
                    "order_link_id": {
                      "type": "string"
                    },
                    "p_r_qty": {
                      "type": "string"
                    },
                    "p_r_price": {
                      "type": "number"
                    },
                    "p_r_trigger_price": {
                      "type": "number"
                    }
                  },
                  "required": [
                    "symbol"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearStopOrderReplace"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/private/linear/position/list": {
        "get": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will get my position list.",
          "summary": "Get my position list.",
          "operationId": "LinearPositions.myPosition",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearPositionListResultBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/set-auto-add-margin": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will Set auto add margin",
          "summary": "Set auto add margin",
          "operationId": "LinearPositions.setAutoAddMargin",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "auto_add_margin": {
                      "type": "boolean"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSetMarginResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/set-leverage": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will Set Leverage",
          "summary": "Set leverage",
          "operationId": "LinearPositions.saveLeverage",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "buy_leverage": {
                      "type": "number",
                      "format": "double"
                    },
                    "sell_leverage": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSetLeverageResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/switch-isolated": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will switch isolated",
          "summary": "Switch isolated",
          "operationId": "LinearPositions.switchIsolated",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "is_isolated": {
                      "type": "boolean"
                    },
                    "buy_leverage": {
                      "type": "number",
                      "format": "double"
                    },
                    "sell_leverage": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSwitchIsolatedResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/trading-stop": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will set tradingStop",
          "summary": "Set tradingStop",
          "operationId": "LinearPositions.tradingStop",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "take_profit": {
                      "type": "number",
                      "format": "double"
                    },
                    "stop_loss": {
                      "type": "number",
                      "format": "double"
                    },
                    "trailing_stop": {
                      "type": "number",
                      "format": "double"
                    },
                    "tp_trigger_by": {
                      "type": "string"
                    },
                    "sl_trigger_by": {
                      "type": "string"
                    },
                    "sl_size": {
                      "type": "number",
                      "format": "double"
                    },
                    "tp_size": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSetTradingStopResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/add-margin": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will Add/Reduce Margin",
          "summary": "Add/Reduce Margin",
          "operationId": "LinearPositions.changeMargin",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "margin": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSetMarginResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/tpsl/switch-mode": {
        "post": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will Switch TP/SL Mode",
          "summary": "Switch Mode",
          "operationId": "LinearPositions.switchMode",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "type": "string"
                    },
                    "tp_sl_mode": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSwitchModeResult"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/trade/closed-pnl/list": {
        "get": {
          "tags": [
            "LinearPositions"
          ],
          "description": "This will get user's closed profit and loss records.",
          "summary": "Get user's closed profit and loss records.",
          "operationId": "LinearPositions.closePnlRecords",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "end_time",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "exec_type",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearClosePnlRecordsResponse"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/trade/execution/list": {
        "get": {
          "tags": [
            "LinearExecution"
          ],
          "description": "This will get user's trading records.",
          "summary": "Get user's trading records.",
          "operationId": "LinearExecution.getTrades",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "end_time",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "exec_type",
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearTradeRecordsResponse"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/funding/prev-funding": {
        "get": {
          "tags": [
            "LinearFunding"
          ],
          "description": "This will get prev funding",
          "summary": "Get prev funding",
          "operationId": "LinearFunding.myLastFee",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearPrevFundingRespBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/public/linear/funding/prev-funding-rate": {
        "get": {
          "tags": [
            "LinearFunding"
          ],
          "description": "This will get prev funding rate",
          "summary": "Get prev funding",
          "operationId": "LinearFunding.prevRate",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearPrevFundingRateRespBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/funding/predicted-funding": {
        "get": {
          "tags": [
            "LinearFunding"
          ],
          "summary": "Get predicted funding rate and funding fee.",
          "operationId": "LinearFunding.predicted",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearFundingPredictedBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/public/linear/kline": {
        "get": {
          "tags": [
            "LinearKline"
          ],
          "description": "This will get kline",
          "summary": "Get kline",
          "operationId": "LinearKline.get",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Kline interval.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "from timestamp.",
              "required": true,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearKlineRespBase"
                    }
                  }
                }
              }
            }
          },
          "security": []
        }
      },
      "/public/linear/mark-price-kline": {
        "get": {
          "tags": [
            "LinearKline"
          ],
          "description": "This will get mark price kline",
          "summary": "Get kline",
          "operationId": "LinearKline.markPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Kline interval.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "from timestamp.",
              "required": true,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearKlineRespBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/public/linear/index-price-kline": {
        "get": {
          "tags": [
            "LinearKline"
          ],
          "description": "This will get index price kline",
          "summary": "Get kline",
          "operationId": "LinearKline.indexPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Kline interval.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "from timestamp.",
              "required": true,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/IndexPriceKlineBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/public/linear/premium-index-kline": {
        "get": {
          "tags": [
            "LinearKline"
          ],
          "description": "This will get premium index price kline",
          "summary": "Get kline",
          "operationId": "LinearKline.premiumIndexPrice",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "interval",
              "in": "query",
              "description": "Kline interval.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "from",
              "in": "query",
              "description": "from timestamp.",
              "required": true,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/PremiumIndexPriceKlineBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/public/linear/recent-trading-records": {
        "get": {
          "tags": [
            "LinearMarket"
          ],
          "description": "This will get recent trades",
          "summary": "Get recent trades",
          "operationId": "LinearMarket.trading",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearRecentTradingRecordRespBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/public/linear/risk-limit": {
        "get": {
          "tags": [
            "LinearWallet"
          ],
          "description": "This will get risk limit.",
          "summary": "Get risk limit.",
          "operationId": "LinearWallet.getRiskLimit",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearRiskLimitRespBase"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/private/linear/position/set-risk": {
        "post": {
          "tags": [
            "LinearWallet"
          ],
          "summary": "This will set risk limit",
          "operationId": "LinearWallet.setRiskLimit",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "Contract type.",
                      "type": "string"
                    },
                    "side": {
                      "type": "string"
                    },
                    "risk_id": {
                      "description": "Risk ID. Can be found with the Get risk limit list endpoint.",
                      "type": "number",
                      "format": "int32"
                    }
                  },
                  "required": [
                    "symbol",
                    "risk_id"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/LinearSetRiskLimit"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order/create": {
        "post": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Place active order",
          "operationId": "FuturesOrder.new",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.new"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order/list": {
        "get": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Get my active order list.",
          "operationId": "FuturesOrder.getOrders",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type. Default BTCUSD",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "TLimit for data size per page, max size is 50. Default as showing 20 pieces of data per page",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "order_status",
              "in": "query",
              "description": "Query your orders for all statuses if 'order_status' is empty. If you want to query orders with specific statuses , you can pass the order_status split by",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "direction",
              "in": "query",
              "description": "Search direction. prev: prev page, next: next page. Defaults to next",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "cursor",
              "in": "query",
              "description": "cursor is a unique identifier for a specific record, which acts as a pointer to the next record we want to start querying from to get the next page of results",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2OrderListBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order/cancel": {
        "post": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Get my active order list.",
          "operationId": "FuturesOrder.cancel",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancel"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderCancelBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order/cancelAll": {
        "post": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Get my active order list.",
          "operationId": "FuturesOrder.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/OrderCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order/replace": {
        "post": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Replace active order. Only incomplete orders can be modified. ",
          "operationId": "FuturesOrder.replace",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.replace"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ReplaceOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/order": {
        "get": {
          "tags": [
            "FuturesOrder"
          ],
          "summary": "Get my active order list.",
          "operationId": "FuturesOrder.query",
          "parameters": [
            {
              "name": "order_id",
              "in": "query",
              "description": "Order ID",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type. Default BTCUSD",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "description": "Agency customized order ID",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/QueryOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order/create": {
        "post": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Place a new conditional order.",
          "operationId": "FuturesConditional.new",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.new"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2ConditionalBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order/list": {
        "get": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Get my conditional order list.",
          "operationId": "FuturesConditional.getOrders",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "stop_order_status",
              "in": "query",
              "description": "Stop order status.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "number",
                "format": "int32"
              }
            },
            {
              "name": "direction",
              "in": "query",
              "description": "Search direction. prev: prev page, next: next page. Defaults to next",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "cursor",
              "in": "query",
              "description": "Page turning mark，Use return cursor,Sign use origin data, in request please urlencode",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ConditionalOrdersResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order/cancel": {
        "post": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Cancel conditional order.",
          "operationId": "FuturesConditional.cancel",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.cancel"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/V2CancelOrderBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order/cancelAll": {
        "post": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Cancel conditional order.",
          "operationId": "FuturesConditional.cancelAll",
          "requestBody": {
            "$ref": "#/components/requestBodies/Order.cancelAll"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ConditionalCancelAllBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order/replace": {
        "post": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Replace conditional order. Only incomplete orders can be modified. ",
          "operationId": "FuturesConditional.replace",
          "requestBody": {
            "$ref": "#/components/requestBodies/Conditional.replace"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ReplaceConditionalBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/stop-order": {
        "get": {
          "tags": [
            "FuturesConditional"
          ],
          "summary": "Query real-time stop order information.",
          "operationId": "FuturesConditional.query",
          "parameters": [
            {
              "name": "stop_order_id",
              "in": "query",
              "description": "Order ID of conditional order.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "order_link_id",
              "in": "query",
              "description": "Agency customized order ID.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/StopOrderOrdersResBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/list": {
        "get": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Get my position list.",
          "operationId": "FuturesPositions.myPosition",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type which you want update its margin",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/Position"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/change-position-margin": {
        "post": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Update margin.",
          "operationId": "FuturesPositions.changeMargin",
          "requestBody": {
            "$ref": "#/components/requestBodies/Positions.changeMargin"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/trading-stop": {
        "post": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Set Trading-Stop Condition.",
          "operationId": "FuturesPositions.tradingStop",
          "requestBody": {
            "$ref": "#/components/requestBodies/Positions.tradingStop"
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/TradingStopBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/leverage/save": {
        "post": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Change user leverage.",
          "operationId": "FuturesPositions.saveLeverage",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "A symbol which you want change its leverage",
                      "type": "string"
                    },
                    "position_idx": {
                      "description": "Position idx, used to identify positions in different position modes",
                      "type": "integer"
                    },
                    "buy_leverage": {
                      "description": "New buy leverage you want set",
                      "type": "string"
                    },
                    "sell_leverage": {
                      "description": "New sell leverage you want set",
                      "type": "string"
                    }
                  },
                  "required": [
                    "symbol",
                    "position_idx",
                    "buy_leverage",
                    "sell_leverage"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/switch-mode": {
        "post": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Switch position mode.",
          "operationId": "FuturesPositions.switchPositionMode",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "A symbol which you want change its leverage",
                      "type": "string"
                    },
                    "mode": {
                      "description": "Position Mode. 0: One-Way Mode; 3: Hedge Mode",
                      "type": "integer",
                      "format": "int32"
                    }
                  },
                  "required": [
                    "symbol",
                    "mode"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/position/switch-isolated": {
        "post": {
          "tags": [
            "FuturesPositions"
          ],
          "summary": "Switch position isolated.",
          "operationId": "FuturesPositions.switchIsolated",
          "requestBody": {
            "content": {
              "application/x-www-form-urlencoded": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "symbol": {
                      "description": "A symbol which you want change its leverage",
                      "type": "string"
                    },
                    "position_idx": {
                      "description": "Position idx, used to identify positions in different position modes",
                      "type": "integer"
                    },
                    "is_isolated": {
                      "description": "Position margin mode",
                      "type": "boolean"
                    },
                    "buy_leverage": {
                      "description": "New buy leverage you want set",
                      "type": "string"
                    },
                    "sell_leverage": {
                      "description": "New sell leverage you want set",
                      "type": "string"
                    }
                  },
                  "required": [
                    "symbol",
                    "position_idx",
                    "buy_leverage",
                    "sell_leverage"
                  ]
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ServerTime"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/execution/list": {
        "get": {
          "tags": [
            "FuturesExecution"
          ],
          "summary": "Get user’s trade records.",
          "operationId": "FuturesExecution.getTrades",
          "parameters": [
            {
              "name": "order_id",
              "in": "query",
              "description": "OrderID. If not provided, will return user’s trading records.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type.",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "description": "Start timestamp point for result.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. Default getting first page data.",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/TradeRecordsBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      },
      "/futures/private/trade/closed-pnl/list": {
        "get": {
          "tags": [
            "FuturesExecution",
            "FuturesPositions"
          ],
          "summary": "Get user's closed profit and loss records",
          "operationId": "FuturesPositions.closePnlRecords",
          "parameters": [
            {
              "name": "symbol",
              "in": "query",
              "description": "Contract type",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "start_time",
              "in": "query",
              "description": "Start timestamp point for result, in second",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "end_time",
              "in": "query",
              "description": "End timestamp point for result, in second",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "exec_type",
              "in": "query",
              "description": "Execution type",
              "required": false,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "page",
              "in": "query",
              "description": "Page. By default, gets first page of data. Maximum of 50 pages",
              "required": false,
              "schema": {
                "type": "integer"
              }
            },
            {
              "name": "limit",
              "in": "query",
              "description": "Limit for data size per page, max size is 50. Default as showing 20 pieces of data per page.",
              "required": false,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Request was successful",
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "$ref": "#/components/schemas/ClosedPnlBase"
                    }
                  }
                }
              }
            }
          },
          "deprecated": false
        }
      }
    },
    "tags": [
      {
        "name": "Common",
        "description": "Common interface"
      },
      {
        "name": "APIKey",
        "description": "Get account api-key information"
      },
      {
        "name": "Order",
        "description": "Place new order, cancel, replace and get order list"
      },
      {
        "name": "Conditional",
        "description": "Place, cancel and replace conditional order, get conditional order list"
      },
      {
        "name": "Positions",
        "description": "Get account position info"
      },
      {
        "name": "Wallet",
        "description": "Get wallet funding records, get withdraw records"
      },
      {
        "name": "Funding",
        "description": "Get funding rate, get my funding fee, get predicted funding fee"
      },
      {
        "name": "Execution",
        "description": "Get the trade records of a order"
      },
      {
        "name": "Market",
        "description": "Get the orderbook and latest information for symbol"
      },
      {
        "name": "Kline",
        "description": "Query historical kline"
      },
      {
        "name": "Symbol",
        "description": "Query Symbols"
      },
      {
        "name": "LinearOrder",
        "description": "Place new linear order, cancel, replace and get linear order list"
      }
    ],
    "security": [
      {
        "apiKey": [],
        "timestamp": [],
        "apiSignature": []
      }
    ],
    "servers": [
      {
        "url": "//api.bybit.com"
      }
    ],
    "components": {
      "requestBodies": {
        "Conditional.replace": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "stop_order_id": {
                    "description": "Stop order ID.",
                    "type": "string"
                  },
                  "order_link_id": {
                    "description": "Order Link ID.",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  },
                  "p_r_qty": {
                    "description": "Order quantity.",
                    "type": "string"
                  },
                  "p_r_price": {
                    "description": "Order price.",
                    "type": "string"
                  },
                  "p_r_trigger_price": {
                    "description": "Trigger price.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          }
        },
        "Order.cancelAll": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          },
          "required": true
        },
        "Positions.changeMargin": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "symbol": {
                    "description": "Contract type which you want update its margin",
                    "type": "string"
                  },
                  "margin": {
                    "description": "New margin you want set",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol",
                  "margin"
                ]
              }
            }
          },
          "required": true
        },
        "Positions.tradingStop": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "symbol": {
                    "description": "Contract type",
                    "type": "string"
                  },
                  "take_profit": {
                    "description": "Not less than 0, 0 means cancel TP",
                    "type": "string"
                  },
                  "stop_loss": {
                    "description": "Not less than 0, 0 means cancel SL",
                    "type": "string"
                  },
                  "trailing_stop": {
                    "description": "Not less than 0, 0 means cancel TS",
                    "type": "string"
                  },
                  "new_trailing_active": {
                    "description": "Trailing stop trigger price. Trailing stops are triggered only when the price reaches the specified price. Trailing stops are triggered immediately by default.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          },
          "required": true
        },
        "Order.new": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "side": {
                    "description": "Side",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  },
                  "order_type": {
                    "description": "Active order type",
                    "type": "string"
                  },
                  "qty": {
                    "type": "number",
                    "format": "int32"
                  },
                  "price": {
                    "description": "Order price.",
                    "type": "number",
                    "format": "double"
                  },
                  "time_in_force": {
                    "description": "Time in force",
                    "type": "string"
                  },
                  "take_profit": {
                    "description": "take profit price",
                    "type": "number",
                    "format": "double"
                  },
                  "stop_loss": {
                    "description": "stop loss price",
                    "type": "number",
                    "format": "double"
                  },
                  "reduce_only": {
                    "description": "reduce only",
                    "type": "boolean"
                  },
                  "close_on_trigger": {
                    "description": "close on trigger",
                    "type": "boolean"
                  },
                  "order_link_id": {
                    "description": "TCustomized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique.",
                    "type": "string"
                  }
                },
                "required": [
                  "side",
                  "symbol",
                  "order_type",
                  "qty",
                  "time_in_force"
                ]
              }
            }
          },
          "required": true
        },
        "Order.cancel": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "order_id": {
                    "description": "Order ID",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  },
                  "order_link_id": {
                    "description": "Order link id.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          }
        },
        "Order.replace": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "order_id": {
                    "description": "Order ID.",
                    "type": "string"
                  },
                  "order_link_id": {
                    "description": "Order Link ID.",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  },
                  "p_r_qty": {
                    "description": "Order quantity.",
                    "type": "string"
                  },
                  "p_r_price": {
                    "description": "Order price.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          }
        },
        "Conditional.new": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "side": {
                    "description": "Side.",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  },
                  "order_type": {
                    "description": "Conditional order type.",
                    "type": "string"
                  },
                  "qty": {
                    "description": "Order quantity.",
                    "type": "string"
                  },
                  "price": {
                    "description": "Execution price for conditional order",
                    "type": "string"
                  },
                  "base_price": {
                    "description": "Send current market price. It will be used to compare with the value of 'stop_px', to decide whether your conditional order will be triggered by crossing trigger price from upper side or lower side. Mainly used to identify the expected direction of the current conditional order..",
                    "type": "string"
                  },
                  "stop_px": {
                    "description": "Trigger price.",
                    "type": "string"
                  },
                  "time_in_force": {
                    "description": "Time in force.",
                    "type": "string"
                  },
                  "trigger_by": {
                    "description": "Trigger price type. Default LastPrice.",
                    "type": "string"
                  },
                  "close_on_trigger": {
                    "description": "close on trigger.",
                    "type": "boolean"
                  },
                  "order_link_id": {
                    "description": "Customized order ID, maximum length at 36 characters, and order ID under the same agency has to be unique..",
                    "type": "string"
                  }
                },
                "required": [
                  "side",
                  "symbol",
                  "order_type",
                  "qty",
                  "base_price",
                  "stop_px",
                  "time_in_force"
                ]
              }
            }
          },
          "required": true
        },
        "Conditional.cancel": {
          "content": {
            "application/x-www-form-urlencoded": {
              "schema": {
                "type": "object",
                "properties": {
                  "stop_order_id": {
                    "description": "Order ID of conditional order.",
                    "type": "string"
                  },
                  "order_link_id": {
                    "description": "Agency customized order ID.",
                    "type": "string"
                  },
                  "symbol": {
                    "description": "Contract type.",
                    "type": "string"
                  }
                },
                "required": [
                  "symbol"
                ]
              }
            }
          }
        }
      },
      "securitySchemes": {
        "apiKey": {
          "type": "apiKey",
          "in": "query",
          "name": "api_key"
        },
        "timestamp": {
          "type": "apiKey",
          "in": "query",
          "name": "timestamp"
        },
        "apiSignature": {
          "type": "apiKey",
          "in": "query",
          "name": "sign"
        }
      },
      "schemas": {
        "ServerTime": {
          "description": "Get bybit server time.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {},
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LCPInfo": {
          "description": "Query LCP info.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "$ref": "#/components/schemas/LCPInfoBase"
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LCPInfoBase": {
          "description": "Query LCP info.",
          "properties": {
            "date": {
              "type": "string"
            },
            "self_ratio": {
              "format": "int32",
              "type": "number"
            },
            "platform_ratio": {
              "format": "int32",
              "type": "number"
            },
            "score": {
              "format": "int32",
              "type": "number"
            }
          },
          "type": "object"
        },
        "Announcement": {
          "description": "Get Bybit OpenAPI announcements in the last 30 days in reverse order.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AnnouncementInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "AnnouncementInfo": {
          "description": "Get Bybit OpenAPI announcements in the last 30 days in reverse order.",
          "properties": {
            "id": {
              "format": "int32",
              "type": "number"
            },
            "title": {
              "type": "string"
            },
            "link": {
              "type": "string"
            },
            "summary": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "APIKeyBase": {
          "description": "Get bybit server time.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/APIKeyInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "APIKeyInfo": {
          "description": "Get bybit server time.",
          "properties": {
            "api_key": {
              "type": "string"
            },
            "user_id": {
              "format": "int32",
              "type": "number"
            },
            "ips": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "note": {
              "type": "string"
            },
            "permissions": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "created_at": {
              "type": "string"
            },
            "read_only": {
              "type": "boolean"
            }
          },
          "type": "object"
        },
        "Leverage": {
          "description": "Get user leverage.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LeverageResult"
              }
            },
            "time_now": {
              "type": "string"
            },
            "rate_limit_status": {
              "type": "number"
            }
          },
          "type": "object"
        },
        "LeverageResult": {
          "properties": {
            "BTCUSD": {
              "items": {
                "$ref": "#/components/schemas/LeverageInfo"
              }
            },
            "EOSUSD": {
              "items": {
                "$ref": "#/components/schemas/LeverageInfo"
              }
            },
            "ETHUSD": {
              "items": {
                "$ref": "#/components/schemas/LeverageInfo"
              }
            },
            "XRPUSD": {
              "items": {
                "$ref": "#/components/schemas/LeverageInfo"
              }
            }
          },
          "type": "object"
        },
        "LeverageInfo": {
          "type": "object",
          "properties": {
            "leverage": {
              "type": "number"
            }
          }
        },
        "Symbols": {
          "description": "Get symbol information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SymbolInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "SymbolInfo": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "base_currency": {
              "type": "string"
            },
            "quote_currency": {
              "type": "string"
            },
            "price_scale": {
              "type": "number"
            },
            "price_filter": {
              "items": {
                "$ref": "#/components/schemas/price_filter"
              }
            },
            "lot_size_filter": {
              "items": {
                "$ref": "#/components/schemas/lot_size_filter"
              }
            }
          }
        },
        "LiqRecords": {
          "description": "Get liq_records information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LiqRecordsInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LiqRecordsInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "qty": {
              "type": "integer"
            },
            "side": {
              "type": "string"
            },
            "time": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            },
            "price": {
              "type": "integer"
            }
          }
        },
        "OpenInterest": {
          "description": "Get open_interest information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OpenInterestInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OpenInterestInfo": {
          "type": "object",
          "properties": {
            "open_interest": {
              "type": "integer"
            },
            "timestamp": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            }
          }
        },
        "BigDeal": {
          "description": "Get big deal information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/BigDealInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "BigDealInfo": {
          "type": "object",
          "properties": {
            "side": {
              "type": "string"
            },
            "timestamp": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            },
            "value": {
              "type": "integer"
            }
          }
        },
        "AccountRatio": {
          "description": "Get account long short account ratio information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/AccountRatioInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "AccountRatioInfo": {
          "type": "object",
          "properties": {
            "buy_ratio": {
              "type": "integer"
            },
            "sell_ratio": {
              "type": "integer"
            },
            "timestamp": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            }
          }
        },
        "MarkPriceKlineBase": {
          "description": "Get mark price kline information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/MarkPriceKlineInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "MarkPriceKlineInfo": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            },
            "period": {
              "type": "string"
            },
            "start_at": {
              "type": "integer"
            },
            "open": {
              "type": "integer"
            },
            "high": {
              "type": "integer"
            },
            "low": {
              "type": "integer"
            },
            "close": {
              "type": "integer"
            }
          }
        },
        "IndexPriceKlineBase": {
          "description": "Get mark price kline information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/IndexPriceKlineInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "IndexPriceKlineInfo": {
          "type": "object",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "period": {
              "type": "string"
            },
            "open_time": {
              "type": "integer"
            },
            "open": {
              "type": "string"
            },
            "high": {
              "type": "string"
            },
            "low": {
              "type": "string"
            },
            "close": {
              "type": "string"
            }
          }
        },
        "PremiumIndexPriceKlineBase": {
          "description": "Get mark price kline information.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/PremiumIndexPriceKlineInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "PremiumIndexPriceKlineInfo": {
          "type": "object",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "period": {
              "type": "string"
            },
            "open_time": {
              "type": "integer"
            },
            "open": {
              "type": "string"
            },
            "high": {
              "type": "string"
            },
            "low": {
              "type": "string"
            },
            "close": {
              "type": "string"
            }
          }
        },
        "price_filter": {
          "type": "object",
          "properties": {
            "min_price": {
              "type": "string"
            },
            "max_price": {
              "type": "string"
            },
            "tick_size": {
              "type": "string"
            }
          }
        },
        "lot_size_filter": {
          "type": "object",
          "properties": {
            "min_trading_qty": {
              "type": "object"
            },
            "max_trading_qty": {
              "type": "object"
            },
            "qty_step": {
              "type": "object"
            }
          }
        },
        "Position": {
          "description": "Get my position list.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/PositionInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "PositionInfo": {
          "description": "PositionInfo.",
          "properties": {
            "id": {
              "format": "int32",
              "type": "number"
            },
            "user_id": {
              "format": "int32",
              "type": "number"
            },
            "risk_id": {
              "format": "int32",
              "type": "number"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "size": {
              "format": "int32",
              "type": "number"
            },
            "position_value": {
              "format": "int32",
              "type": "number"
            },
            "entry_price": {
              "format": "int32",
              "type": "number"
            },
            "leverage": {
              "format": "int32",
              "type": "number"
            },
            "auto_add_margin": {
              "format": "int32",
              "type": "number"
            },
            "position_margin": {
              "format": "int32",
              "type": "number"
            },
            "liq_price": {
              "format": "int32",
              "type": "number"
            },
            "bust_price": {
              "format": "int32",
              "type": "number"
            },
            "occ_closing_fee": {
              "format": "int32",
              "type": "number"
            },
            "occ_funding_fee": {
              "format": "int32",
              "type": "number"
            },
            "take_profit": {
              "format": "int32",
              "type": "number"
            },
            "stop_loss": {
              "format": "int32",
              "type": "number"
            },
            "position_status": {
              "type": "string"
            },
            "deleverage_indicator": {
              "type": "string"
            },
            "oc_calc_data": {
              "type": "string",
              "format": "JSON"
            },
            "order_margin": {
              "format": "int32",
              "type": "number"
            },
            "wallet_balance": {
              "format": "int32",
              "type": "number"
            },
            "unrealised_pnl": {
              "format": "int32",
              "type": "number"
            },
            "realised_pnl": {
              "format": "int32",
              "type": "number"
            },
            "cum_realised_pnl": {
              "format": "int32",
              "type": "number"
            },
            "cum_commission": {
              "format": "int32",
              "type": "number"
            },
            "cross_seq": {
              "format": "int32",
              "type": "number"
            },
            "position_seq": {
              "format": "int32",
              "type": "number"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderResBase": {
          "description": "Place new order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/OrderRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderRes": {
          "description": "Place new order response",
          "properties": {
            "order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "number"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "string",
              "format": "int32"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "last_exec_time": {
              "type": "number",
              "format": "double"
            },
            "last_exec_price": {
              "type": "number",
              "format": "double"
            },
            "leaves_qty": {
              "type": "number",
              "format": "int32"
            },
            "cum_exec_qty": {
              "type": "number",
              "format": "int32"
            },
            "cum_exec_value": {
              "type": "number",
              "format": "int32"
            },
            "cum_exec_fee": {
              "type": "number",
              "format": "double"
            },
            "reject_reason": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2OrderRes": {
          "description": "order list response",
          "properties": {
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "order_status": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "qty": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "order_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "leaves_qty": {
              "type": "string"
            },
            "leaves_value": {
              "type": "string"
            },
            "cum_exec_qty": {
              "type": "string"
            },
            "cum_exec_value": {
              "type": "string"
            },
            "cum_exec_fee": {
              "type": "string"
            },
            "reject_reason": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderIdRes": {
          "description": "Order Id response",
          "properties": {
            "order_id": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2OrderListBase": {
          "description": "Get order list response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/V2OrderListData"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2OrderListData": {
          "description": "Get order list response",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/V2OrderRes"
              }
            },
            "cursor": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderCancelBase": {
          "description": "cancel order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/OrderRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderCancelAllBase": {
          "description": "Cancel all active orders response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/OrderCancelAllRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OrderCancelAllRes": {
          "description": "Cancel all active orders response",
          "properties": {
            "clOrdID": {
              "type": "string"
            },
            "user_id": {
              "format": "int32",
              "type": "number"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "qty": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "create_type": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "leaves_qty": {
              "format": "int32",
              "type": "number"
            },
            "leaves_value": {
              "format": "int32",
              "type": "number"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "cross_status": {
              "type": "string"
            },
            "cross_seq": {
              "format": "int32",
              "type": "number"
            }
          },
          "type": "object"
        },
        "ReplaceOrderBase": {
          "description": "Replace active order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "description": "Replace active order",
                "properties": {
                  "stop_order_id": {
                    "type": "string"
                  }
                },
                "type": "object"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "QueryOrderBase": {
          "description": "Query real-time active order information response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/QueryOrderRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "QueryOrderRes": {
          "description": "Query real-time active order information response",
          "properties": {
            "order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "number"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "string",
              "format": "int32"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "ext_fields": {
              "items": {
                "$ref": "#/components/schemas/extFields"
              }
            },
            "leaves_qty": {
              "type": "number",
              "format": "int32"
            },
            "leaves_value": {
              "type": "number",
              "format": "int32"
            },
            "cum_exec_qty": {
              "type": "number",
              "format": "int32"
            },
            "reject_reason": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "extFields": {
          "description": "extra fields",
          "properties": {
            "o_req_num": {
              "type": "number",
              "format": "int32"
            },
            "xreq_type": {
              "type": "string"
            },
            "xreq_offset": {
              "type": "number",
              "format": "int32"
            }
          },
          "type": "object"
        },
        "V2ConditionalBase": {
          "description": "Place new conditional order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/V2ConditionalRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2CancelOrderBase": {
          "description": "Place new conditional order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "description": "Cancel Stop Order",
                "properties": {
                  "stop_order_id": {
                    "type": "string"
                  }
                },
                "type": "object"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ConditionalRes": {
          "description": "Place new conditional order response",
          "properties": {
            "stop_order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "stop_order_status": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "int32"
            },
            "time_in_force": {
              "type": "string"
            },
            "stop_order_type": {
              "type": "string"
            },
            "base_price": {
              "type": "number",
              "format": "double"
            },
            "stop_px": {
              "type": "number",
              "format": "double"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2ConditionalRes": {
          "description": "Place new conditional order response",
          "properties": {
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "qty": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "trigger_by": {
              "type": "string"
            },
            "base_price": {
              "type": "string"
            },
            "remark": {
              "type": "string"
            },
            "reject_reason": {
              "type": "string"
            },
            "stop_px": {
              "type": "string"
            },
            "stop_order_id": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "V2ConditionalListRes": {
          "description": "conditional order list response",
          "properties": {
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "stop_order_status": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "qty": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "stop_order_type": {
              "type": "string"
            },
            "trigger_by": {
              "type": "string"
            },
            "base_price": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "stop_px": {
              "type": "string"
            },
            "stop_order_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ConditionalCancelAllBase": {
          "description": "Cancel all conditional order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/ConditionalCancelAllRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ConditionalCancelAllRes": {
          "description": "Cancel all conditional order response",
          "properties": {
            "clOrdID": {
              "type": "string"
            },
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "qty": {
              "type": "number",
              "format": "int32"
            },
            "time_in_force": {
              "type": "string"
            },
            "create_type": {
              "type": "string"
            },
            "cancel_type": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "leaves_qty": {
              "type": "number",
              "format": "int32"
            },
            "leaves_value": {
              "type": "string"
            },
            "cross_seq": {
              "type": "number",
              "format": "int32"
            },
            "stop_order_type": {
              "type": "string"
            },
            "trigger_by": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ConditionalOrdersResBase": {
          "description": "Get conditional order list",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ConditionalOrdersRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "StopOrderOrdersResBase": {
          "description": "Get conditional order list",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/ConditionalRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ConditionalOrdersRes": {
          "description": "Get order list response",
          "properties": {
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/V2ConditionalListRes"
              }
            },
            "cursor": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ReplaceConditionalBase": {
          "description": "Replace conditional order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "description": "Replace conditional order",
                "properties": {
                  "stop_order_id": {
                    "type": "string"
                  }
                },
                "type": "object"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundingRateBase": {
          "description": "Get the last funding Rate",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/FundingRate"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundingRate": {
          "description": "Get the last funding Rate",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "funding_rate": {
              "type": "string"
            },
            "funding_rate_timestamp": {
              "type": "number",
              "format": "int32"
            }
          },
          "type": "object"
        },
        "FundingFeeBase": {
          "description": "Get the last funding fee",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/FundingFeeRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundingFeeRes": {
          "description": "Get the last funding fee",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "size": {
              "type": "number",
              "format": "int32"
            },
            "funding_rate": {
              "type": "string"
            },
            "exec_fee": {
              "type": "number",
              "format": "double"
            },
            "exec_timestamp": {
              "type": "number",
              "format": "int64"
            }
          },
          "type": "object"
        },
        "FundingPredictedBase": {
          "description": "Get the last funding fee",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/FundingPredicted"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundingPredicted": {
          "description": "Get the last funding fee",
          "properties": {
            "predicted_funding_rate": {
              "type": "number",
              "format": "double"
            },
            "predicted_funding_fee": {
              "type": "number",
              "format": "double"
            }
          },
          "type": "object"
        },
        "TradeRecordsBase": {
          "description": "Get the trade records of a order response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TradeRecords"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "TradeRecords": {
          "description": "Get the trade records of a order response",
          "properties": {
            "order_id": {
              "type": "string"
            },
            "trade_list": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TradeRecordsInfo"
              }
            }
          },
          "type": "object"
        },
        "TradeRecordsInfo": {
          "description": "Get the trade records of a order response",
          "properties": {
            "closed_size": {
              "type": "number",
              "format": "int32"
            },
            "cross_seq": {
              "type": "number",
              "format": "int32"
            },
            "exec_fee": {
              "type": "string"
            },
            "exec_id": {
              "type": "string"
            },
            "exec_price": {
              "type": "string"
            },
            "exec_qty": {
              "type": "number",
              "format": "int32"
            },
            "exec_time": {
              "type": "string"
            },
            "exec_type": {
              "type": "string"
            },
            "exec_value": {
              "type": "string"
            },
            "fee_rate": {
              "type": "string"
            },
            "last_liquidity_ind": {
              "type": "string"
            },
            "leaves_qty": {
              "type": "number",
              "format": "int32"
            },
            "nth_fill": {
              "type": "number",
              "format": "int32"
            },
            "order_id": {
              "type": "string"
            },
            "order_price": {
              "type": "string"
            },
            "order_qty": {
              "type": "number",
              "format": "int32"
            },
            "order_type": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "user_id": {
              "type": "number",
              "format": "int32"
            }
          },
          "type": "object"
        },
        "OrderBookBase": {
          "description": "Get the orderbook response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/OderBookRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "OderBookRes": {
          "description": "Get the orderbook response",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "size": {
              "type": "number",
              "format": "int32"
            },
            "side": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ClosedPnlBase": {
          "description": "Get the closed-pnl/list response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ClosedPnlInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ClosedPnlInfo": {
          "description": "Get the closed-pnl/list response",
          "properties": {
            "id": {
              "type": "integer"
            },
            "user_id": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            },
            "order_id": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "qty": {
              "type": "integer"
            },
            "order_price": {
              "type": "integer"
            },
            "order_type": {
              "type": "string"
            },
            "exec_type": {
              "type": "string"
            },
            "closed_size": {
              "type": "integer"
            },
            "cum_entry_value": {
              "type": "number"
            },
            "avg_entry_price": {
              "type": "integer"
            },
            "cum_exit_value": {
              "type": "number"
            },
            "avg_exit_price": {
              "type": "integer"
            },
            "closed_pnl": {
              "type": "number"
            },
            "fill_count": {
              "type": "integer"
            },
            "leverage": {
              "type": "integer"
            },
            "created_at": {
              "type": "integer"
            }
          },
          "type": "object"
        },
        "SymbolInfoBase": {
          "description": "Get the orderbook response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SymbolTickInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "SymbolTickInfo": {
          "description": "Get the orderbook response",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "bid_price": {
              "type": "string"
            },
            "ask_price": {
              "type": "string"
            },
            "last_price": {
              "type": "string"
            },
            "last_tick_direction": {
              "type": "string"
            },
            "prev_price_24h": {
              "type": "string"
            },
            "price_24h_pcnt": {
              "type": "string"
            },
            "high_price_24h": {
              "type": "string"
            },
            "low_price_24h": {
              "type": "string"
            },
            "prev_price_1h": {
              "type": "string"
            },
            "price_1h_pcnt": {
              "type": "string"
            },
            "mark_price": {
              "type": "string"
            },
            "index_price": {
              "type": "string"
            },
            "open_interest": {
              "type": "number",
              "format": "int32"
            },
            "open_value": {
              "type": "string"
            },
            "total_turnover": {
              "type": "string"
            },
            "turnover_24h": {
              "type": "string"
            },
            "total_volume": {
              "type": "number",
              "format": "int64"
            },
            "volume_24h": {
              "type": "number",
              "format": "int64"
            },
            "funding_rate": {
              "type": "string"
            },
            "predicted_funding_rate": {
              "type": "string"
            },
            "next_funding_time": {
              "type": "string"
            },
            "countdown_hour": {
              "type": "number",
              "format": "int32"
            }
          },
          "type": "object"
        },
        "TradingRecords": {
          "description": "Get the Trading Records response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/TradingRecordsInfo"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "TradingRecordsInfo": {
          "description": "Get the orderbook response",
          "properties": {
            "id": {
              "type": "integer"
            },
            "symbol": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "qty": {
              "type": "number"
            },
            "side": {
              "type": "string"
            },
            "time": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "KlineBase": {
          "description": "Get the orderbook response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/KlineRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "KlineRes": {
          "description": "Get the orderbook response",
          "properties": {
            "symbol": {
              "type": "string"
            },
            "interval": {
              "type": "string"
            },
            "open_time": {
              "type": "number",
              "format": "int64"
            },
            "open": {
              "type": "string"
            },
            "high": {
              "type": "string"
            },
            "low": {
              "type": "string"
            },
            "close": {
              "type": "string"
            },
            "volume": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundRecordBase": {
          "description": "Get funding record response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/FundingRecords"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "FundingRecords": {
          "description": "Get funding record response",
          "properties": {
            "id": {
              "format": "int32",
              "type": "number"
            },
            "user_id": {
              "format": "int32",
              "type": "number"
            },
            "coin": {
              "type": "string"
            },
            "wallet_id": {
              "format": "int32",
              "type": "number"
            },
            "type": {
              "type": "string"
            },
            "amount": {
              "type": "string"
            },
            "tx_id": {
              "type": "string"
            },
            "address": {
              "type": "string"
            },
            "wallet_balance": {
              "type": "string"
            },
            "exec_time": {
              "type": "string"
            },
            "cross_seq": {
              "format": "int64",
              "type": "number"
            }
          },
          "type": "object"
        },
        "ExchangeOrderListBase": {
          "description": "Asset Exchange Records",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ExchangeOrderList"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "ExchangeOrderList": {
          "description": "Asset Exchange Records",
          "properties": {
            "from_coin": {
              "type": "string"
            },
            "to_coin": {
              "type": "string"
            },
            "from_amount": {
              "format": "int32",
              "type": "number"
            },
            "to_amount": {
              "format": "int32",
              "type": "number"
            },
            "exchange_rate": {
              "format": "int32",
              "type": "number"
            },
            "from_fee": {
              "format": "int32",
              "type": "number"
            },
            "created_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "WithdrawResBase": {
          "description": "Get account withdraw records response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/WithdrawRecords"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "WithdrawRecords": {
          "description": "Get withdraw records response",
          "properties": {
            "id": {
              "format": "int32",
              "type": "number"
            },
            "user_id": {
              "format": "int32",
              "type": "number"
            },
            "coin": {
              "type": "string"
            },
            "status": {
              "type": "string"
            },
            "amount": {
              "type": "string"
            },
            "fee": {
              "type": "string"
            },
            "address": {
              "type": "string"
            },
            "tx_id": {
              "type": "string"
            },
            "submited_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "WalletBalanceBase": {
          "description": "Get account withdraw balance response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "object",
              "items": {
                "$ref": "#/components/schemas/WalletBalance"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "WalletBalance": {
          "description": "Get wallet balance response",
          "properties": {
            "equity": {
              "format": "double",
              "type": "number"
            },
            "available_balance": {
              "format": "double",
              "type": "number"
            },
            "used_margin": {
              "format": "double",
              "type": "number"
            },
            "order_margin": {
              "format": "double",
              "type": "number"
            },
            "position_margin": {
              "format": "double",
              "type": "number"
            },
            "occ_closing_fee": {
              "format": "double",
              "type": "number"
            },
            "occ_funding_fee": {
              "format": "double",
              "type": "number"
            },
            "wallet_balance": {
              "format": "double",
              "type": "number"
            },
            "realised_pnl": {
              "format": "double",
              "type": "number"
            },
            "unrealised_pnl": {
              "format": "double",
              "type": "number"
            },
            "cum_realised_pnl": {
              "format": "double",
              "type": "number"
            },
            "given_cash": {
              "format": "double",
              "type": "number"
            },
            "service_cash": {
              "format": "double",
              "type": "number"
            }
          },
          "type": "object"
        },
        "SetRiskLimitBase": {
          "description": "Set risk limit.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/RiskLimitRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "RiskLimitRes": {
          "description": "Set risk limit.",
          "properties": {
            "position": {
              "items": {
                "$ref": "#/components/schemas/PositionInfo"
              }
            },
            "risk": {
              "items": {
                "$ref": "#/components/schemas/RiskIDRes"
              }
            }
          },
          "type": "object"
        },
        "RiskIDRes": {
          "description": "Set risk limit.",
          "properties": {
            "id": {
              "format": "int32",
              "type": "number"
            },
            "coin": {
              "type": "string"
            },
            "limit": {
              "format": "int32",
              "type": "number"
            },
            "maintain_margin": {
              "type": "string"
            },
            "starting_margin": {
              "type": "string"
            },
            "section": {
              "type": "string"
            },
            "is_lowest_risk": {
              "format": "int32",
              "type": "number"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "RiskLimitBase": {
          "description": "Get risk limit.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/GetRiskLimitRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "GetRiskLimitRes": {
          "description": "Get risk limit.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/RiskIDRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "TradingStopBase": {
          "description": "Set Trading-Stop Condition response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/TradingStopRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "TradingStopRes": {
          "description": "Set Trading-Stop Condition response",
          "properties": {
            "id": {
              "type": "number",
              "format": "int32"
            },
            "user_id": {
              "type": "number",
              "format": "int32"
            },
            "symbol": {
              "type": "string"
            },
            "side": {
              "type": "string"
            },
            "size": {
              "type": "number",
              "format": "int32"
            },
            "position_value": {
              "type": "number",
              "format": "double"
            },
            "entry_price": {
              "type": "number",
              "format": "double"
            },
            "risk_id": {
              "type": "number",
              "format": "int32"
            },
            "auto_add_margin": {
              "type": "number",
              "format": "double"
            },
            "leverage": {
              "type": "number",
              "format": "double"
            },
            "position_margin": {
              "type": "number",
              "format": "double"
            },
            "liq_price": {
              "type": "number",
              "format": "double"
            },
            "bust_price": {
              "type": "number",
              "format": "double"
            },
            "occ_closing_fee": {
              "type": "number",
              "format": "double"
            },
            "occ_funding_fee": {
              "type": "number",
              "format": "double"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "position_status": {
              "type": "string"
            },
            "deleverage_indicator": {
              "type": "number",
              "format": "int32"
            },
            "oc_calc_data": {
              "type": "string"
            },
            "order_margin": {
              "type": "number",
              "format": "double"
            },
            "wallet_balance": {
              "type": "number",
              "format": "double"
            },
            "realised_pnl": {
              "type": "number",
              "format": "double"
            },
            "cum_realised_pnl": {
              "type": "number",
              "format": "double"
            },
            "cum_commission": {
              "type": "number",
              "format": "int32"
            },
            "cross_seq": {
              "type": "number",
              "format": "int32"
            },
            "position_seq": {
              "type": "number",
              "format": "int32"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCreateOrderResultBase": {
          "description": "Create Linear Order Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearCreateOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCreateOrderResult": {
          "description": "Create Linear Order",
          "properties": {
            "created_time": {
              "type": "string"
            },
            "cum_exec_fee": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_qty": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_value": {
              "type": "number",
              "format": "double"
            },
            "last_exec_price": {
              "type": "number",
              "format": "double"
            },
            "order_id": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "reduce_only": {
              "type": "boolean"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "updated_time": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCancelOrderResultBase": {
          "description": "Create Linear Order Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearCancelOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearOrderReplace": {
          "description": "replace order can modify/amend your active orders",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/OrderIdRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCancelOrderResult": {
          "description": "Create Linear Order",
          "type": "object",
          "properties": {
            "order_id": {
              "type": "string"
            }
          }
        },
        "LinearOrderCancelAllBase": {
          "description": "Cancel all linear active orders response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearStopOrderReplace": {
          "description": "replace conditional order can modify/amend your conditional orders",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/OrderIdRes"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearOrderRecordsResponseBase": {
          "description": "Linear Order list Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearOrderRecordsResponse"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearOrderRecordsResponse": {
          "type": "object",
          "properties": {
            "current_page": {
              "type": "integer",
              "format": "int64"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LinearListOrderResult"
              }
            }
          }
        },
        "LinearListOrderResult": {
          "type": "object",
          "properties": {
            "created_time": {
              "type": "string"
            },
            "cum_exec_fee": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_qty": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_value": {
              "type": "number",
              "format": "double"
            },
            "last_exec_price": {
              "type": "number",
              "format": "double"
            },
            "order_id": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "reduce_only": {
              "type": "boolean"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "updated_time": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          }
        },
        "LinearSearchOrderResultBase": {
          "description": "Linear Order Query Result Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearSearchOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearSearchOrderResult": {
          "type": "object",
          "properties": {
            "created_time": {
              "type": "string"
            },
            "cum_exec_fee": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_qty": {
              "type": "number",
              "format": "double"
            },
            "cum_exec_value": {
              "type": "number",
              "format": "double"
            },
            "last_exec_price": {
              "type": "number",
              "format": "double"
            },
            "order_id": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "reduce_only": {
              "type": "boolean"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "time_in_force": {
              "type": "string"
            },
            "updated_time": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          }
        },
        "LinearCreateStopOrderResultBase": {
          "description": "Create Linear Stop Order Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearCreateStopOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCreateStopOrderResult": {
          "description": "Create Linear Stop Order",
          "properties": {
            "stop_order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "trigger_price": {
              "type": "number",
              "format": "double"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCancelStopOrderResultBase": {
          "description": "Cancel Linear Stop Order Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearCancelStopOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearCancelStopOrderResult": {
          "description": "Cancel Linear Stop Order",
          "properties": {
            "stop_order_id": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearStopOrderCancelAllBase": {
          "description": "Cancel all linear stop orders response",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearStopOrderRecordsResponseBase": {
          "description": "Linear Stop Order list Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearStopOrderRecordsResponse"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearStopOrderRecordsResponse": {
          "type": "object",
          "properties": {
            "current_page": {
              "type": "integer",
              "format": "int64"
            },
            "last_page": {
              "type": "integer",
              "format": "int64"
            },
            "data": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LinearListStopOrderResult"
              }
            }
          }
        },
        "LinearListStopOrderResult": {
          "type": "object",
          "properties": {
            "stop_order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "trigger_price": {
              "type": "number",
              "format": "double"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          }
        },
        "LinearSearchStopOrderResultBase": {
          "description": "Linear Order Query Result Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearSearchStopOrderResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearSearchStopOrderResult": {
          "type": "object",
          "properties": {
            "stop_order_id": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "time_in_force": {
              "type": "string"
            },
            "order_status": {
              "type": "string"
            },
            "trigger_price": {
              "type": "number",
              "format": "double"
            },
            "order_link_id": {
              "type": "string"
            },
            "created_at": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            },
            "take_profit": {
              "type": "number",
              "format": "double"
            },
            "stop_loss": {
              "type": "number",
              "format": "double"
            },
            "tp_trigger_by": {
              "type": "string"
            },
            "sl_trigger_by": {
              "type": "string"
            }
          }
        },
        "LinearPositionListResultBase": {
          "description": "Linear Positions Result Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LinearPositionListResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearPositionListResult": {
          "type": "object",
          "properties": {
            "bust_price": {
              "type": "number",
              "format": "double"
            },
            "cum_realised_pnl": {
              "type": "number",
              "format": "double"
            },
            "entry_price": {
              "type": "number",
              "format": "double"
            },
            "free_qty": {
              "type": "number",
              "format": "double"
            },
            "leverage": {
              "type": "number",
              "format": "double"
            },
            "liq_price": {
              "type": "number",
              "format": "double"
            },
            "occ_closing_fee": {
              "type": "number",
              "format": "double"
            },
            "position_margin": {
              "type": "number",
              "format": "double"
            },
            "position_value": {
              "type": "number",
              "format": "double"
            },
            "realised_pnl": {
              "type": "number",
              "format": "double"
            },
            "side": {
              "type": "string"
            },
            "size": {
              "type": "number",
              "format": "double"
            },
            "symbol": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            },
            "tp_sl_mode": {
              "type": "string"
            }
          }
        },
        "LinearSwitchModeResult": {
          "type": "object",
          "properties": {
            "tp_sl_mode": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LinearSetLeverageResult": {
          "description": "Set leverage result",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "nullable": true
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearSwitchIsolatedResult": {
          "description": "Switch isolated result",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "nullable": true
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearSetTradingStopResult": {
          "description": "Set Trading Stop result",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "nullable": true
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearClosePnlRecordsResponse": {
          "description": "Linear Positions Result Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LinearClosedPnlRecordResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearClosedPnlRecordResult": {
          "type": "object",
          "properties": {
            "avg_entry_price": {
              "type": "number",
              "format": "double"
            },
            "avg_exit_price": {
              "type": "number",
              "format": "double"
            },
            "closed_pnl": {
              "type": "number",
              "format": "double"
            },
            "closed_size": {
              "type": "number",
              "format": "double"
            },
            "created_at": {
              "type": "integer",
              "format": "int64"
            },
            "cum_entry_value": {
              "type": "number",
              "format": "double"
            },
            "cum_exit_value": {
              "type": "number",
              "format": "double"
            },
            "exec_type": {
              "type": "string"
            },
            "fill_count": {
              "type": "integer",
              "format": "int32"
            },
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "leverage": {
              "type": "number",
              "format": "double"
            },
            "order_id": {
              "type": "string"
            },
            "order_price": {
              "type": "number",
              "format": "double"
            },
            "order_type": {
              "type": "string"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "user_id": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "LinearTradeRecordsResponse": {
          "description": "Linear Positions Result Base",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/LinearTradeRecordItem"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearTradeRecordItem": {
          "type": "object",
          "properties": {
            "closed_size": {
              "type": "number",
              "format": "double"
            },
            "exec_fee": {
              "type": "number",
              "format": "double"
            },
            "exec_id": {
              "type": "string"
            },
            "exec_price": {
              "type": "number",
              "format": "double"
            },
            "exec_qty": {
              "type": "number",
              "format": "double"
            },
            "exec_type": {
              "type": "string"
            },
            "exec_value": {
              "type": "number",
              "format": "double"
            },
            "fee_rate": {
              "type": "number",
              "format": "double"
            },
            "last_liquidity_ind": {
              "type": "string"
            },
            "leaves_qty": {
              "type": "number",
              "format": "double"
            },
            "order_id": {
              "type": "string"
            },
            "order_link_id": {
              "type": "string"
            },
            "order_price": {
              "type": "number",
              "format": "double"
            },
            "order_qty": {
              "type": "number",
              "format": "double"
            },
            "order_type": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "trade_time": {
              "type": "integer",
              "format": "int64"
            },
            "trade_time_ms": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "LinearSetMarginResultBase": {
          "description": "Set auto add margin result",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearSetMarginResult"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearSetMarginResult": {
          "type": "object",
          "properties": {
            "PositionListResult": {
              "items": {
                "$ref": "#/components/schemas/LinearPositionListResult"
              }
            },
            "available_balance": {
              "type": "number",
              "format": "double"
            },
            "wallet_balance": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LinearKlineRespBase": {
          "description": "Get Kline",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearKlineResp"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearKlineResp": {
          "type": "object",
          "properties": {
            "close": {
              "type": "number",
              "format": "double"
            },
            "high": {
              "type": "number",
              "format": "double"
            },
            "id": {
              "type": "integer",
              "format": "int32"
            },
            "interval": {
              "type": "string"
            },
            "low": {
              "type": "number",
              "format": "double"
            },
            "open": {
              "type": "number",
              "format": "double"
            },
            "open_time": {
              "type": "integer",
              "format": "int64"
            },
            "period": {
              "type": "string"
            },
            "start_at": {
              "type": "integer",
              "format": "int64"
            },
            "symbol": {
              "type": "string"
            },
            "turnover": {
              "type": "number",
              "format": "double"
            },
            "volume": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LinearPrevFundingRateRespBase": {
          "description": "Get Prev Funding Rate",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearPrevFundingRateResp"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearPrevFundingRateResp": {
          "type": "object",
          "properties": {
            "funding_rate": {
              "type": "number",
              "format": "double"
            },
            "funding_rate_timestamp": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            }
          }
        },
        "LinearPrevFundingRespBase": {
          "description": "Get My Last Funding",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearPrevFundingResp"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearPrevFundingResp": {
          "type": "object",
          "properties": {
            "exec_fee": {
              "type": "number",
              "format": "double"
            },
            "exec_time": {
              "type": "string"
            },
            "funding_rate": {
              "type": "number",
              "format": "double"
            },
            "side": {
              "type": "string"
            },
            "size": {
              "type": "number",
              "format": "double"
            },
            "symbol": {
              "type": "string"
            }
          }
        },
        "LinearFundingPredictedBase": {
          "description": "Get Predicted Funding",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearFundingPredicted"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearFundingPredicted": {
          "type": "object",
          "properties": {
            "predicted_funding_rate": {
              "type": "number",
              "format": "double"
            },
            "predicted_funding_fee": {
              "type": "number",
              "format": "double"
            }
          }
        },
        "LinearRecentTradingRecordRespBase": {
          "description": "Get Recent Trading Record",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearRecentTradingRecordResp"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearRecentTradingRecordResp": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "price": {
              "type": "number",
              "format": "double"
            },
            "qty": {
              "type": "number",
              "format": "double"
            },
            "side": {
              "type": "string"
            },
            "symbol": {
              "type": "string"
            },
            "time": {
              "type": "string"
            },
            "trade_time_ms": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "LinearRiskLimitRespBase": {
          "description": "Get Risk Limit",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "items": {
                "$ref": "#/components/schemas/LinearRiskLimitResp"
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "LinearRiskLimitResp": {
          "type": "object",
          "properties": {
            "created_at": {
              "type": "string"
            },
            "id": {
              "type": "integer",
              "format": "int32"
            },
            "is_lowest_risk": {
              "type": "integer",
              "format": "int32"
            },
            "limit": {
              "type": "integer",
              "format": "int64"
            },
            "maintain_margin": {
              "type": "number",
              "format": "double"
            },
            "section": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "starting_margin": {
              "type": "number",
              "format": "double"
            },
            "symbol": {
              "type": "string"
            },
            "updated_at": {
              "type": "string"
            }
          }
        },
        "LinearSetRiskLimit": {
          "description": "Set risk limit.",
          "properties": {
            "ret_code": {
              "format": "int32",
              "type": "number"
            },
            "ret_msg": {
              "type": "string"
            },
            "ext_code": {
              "type": "string"
            },
            "ext_info": {
              "type": "string"
            },
            "result": {
              "type": "object",
              "properties": {
                "risk_id": {
                  "type": "number"
                }
              }
            },
            "time_now": {
              "type": "string"
            }
          },
          "type": "object"
        }
      }
    }
  }
]