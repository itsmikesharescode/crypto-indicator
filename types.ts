export type SymbolData = {
  name: string;
  base_currency: string;
  quote_currency: string;
  status: string;
  // Add any additional fields you need
};

export type KlineData = {
  start: number; // Start time of the kline interval
  end: number; // End time of the kline interval
  interval: string; // Interval of the kline (5 minutes)
  open: string; // Opening price
  close: string; // Closing price
  high: string; // Highest price during the interval
  low: string; // Lowest price during the interval
  volume: string; // Trading volume
  turnover: string; // Total turnover (value of traded assets)
  confirm: boolean; // Whether the kline is confirmed
  timestamp: number; // Timestamp of the message
};
