import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectSymbols from './user_components/SelectSymbols';
import { KlineData, SymbolData } from '@/types';
import SelectIntervals from './user_components/SelectIntervals';

const UserDashboardPage = () => {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [symbol, setSymbol] = useState<SymbolData | null>(null);
  const [interval, setInterval] = useState<{ name: string; value: string } | null>(null);
  const [symbolSelect, setSymbolSelect] = useState(false);
  const [intervalSelect, setIntervalSelect] = useState(false);

  const handleSelectSymbol = (symbolObj: SymbolData) => {
    setSymbol(symbolObj);
    setSymbolSelect(false);
  };

  const handleSelectIntervals = (interval: { name: string; value: string }) => {
    setInterval(interval);
    setIntervalSelect(false);
  };

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const response = await fetch('https://api.bybit.com/v2/public/symbols');
        const data = await response.json();
        if (data.ret_code === 0) {
          setSymbols(data.result);
        } else {
          setError(data.ret_msg);
        }
      } catch (error) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchSymbols();
  }, []);

  const [klineData, setKlineData] = useState<KlineData | null>(null);
  let ws: WebSocket;

  useEffect(() => {
    // Connect to the Bybit WebSocket API
    ws = new WebSocket('wss://stream-testnet.bybit.com/v5/public/spot');

    ws.onopen = () => {
      console.log('WebSocket connection opened');

      // Subscribe to the kline data for a specific trading pair and interval
      const subscribeMessage = {
        op: 'subscribe',
        args: ['kline.5.BTCUSDT'], // Replace 'BTCUSDT' with your desired trading pair
      };

      ws.send(JSON.stringify(subscribeMessage));
    };

    ws.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Received data:', data);

        // Check if the event type is kline
        if (data.topic === 'kline.5.BTCUSDT' && data.type === 'snapshot') {
          const kline = data.data[0];
          setKlineData(kline);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    ws.onerror = (event: Event) => {
      console.error('WebSocket error', event);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="p-[10px]">
        <SelectSymbols
          symbols={symbols}
          onSelect={handleSelectSymbol}
          select={symbolSelect}
          setSelect={setSymbolSelect}
          externalSetter={setIntervalSelect}
        />
      </View>

      <View className="p-[10px]">
        <SelectIntervals
          onSelect={handleSelectIntervals}
          select={intervalSelect}
          setSelect={setIntervalSelect}
          externalSetter={setSymbolSelect}
        />
      </View>
      <ScrollView contentContainerStyle={{ minHeight: '70%' }}>
        <View className="flex-1  items-center p-[10px]">
          <View>
            {klineData && (
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#FFFFFF' }}>Kline Data:</Text>
                <Text style={{ color: '#FFFFFF' }}>Open: {klineData.open}</Text>
                <Text style={{ color: '#FFFFFF' }}>High: {klineData.high}</Text>
                <Text style={{ color: '#FFFFFF' }}>Low: {klineData.low}</Text>
                <Text style={{ color: '#FFFFFF' }}>Close: {klineData.close}</Text>
                <Text style={{ color: '#FFFFFF' }}>Volume: {klineData.volume}</Text>
                <Text style={{ color: '#FFFFFF' }}>Turnover: {klineData.turnover}</Text>
                <Text style={{ color: '#FFFFFF' }}>Interval: {klineData.interval} minutes</Text>
                <Text style={{ color: '#FFFFFF' }}>
                  Start: {new Date(klineData.start).toLocaleString()}
                </Text>
                <Text style={{ color: '#FFFFFF' }}>
                  End: {new Date(klineData.end).toLocaleString()}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDashboardPage;

const styles = StyleSheet.create({});
