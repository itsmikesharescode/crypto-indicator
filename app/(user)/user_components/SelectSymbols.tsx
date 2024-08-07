import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SymbolData } from '@/types';

interface Prop {
  symbols: SymbolData[]; //Bybit symbols
}

const SelectSymbols: React.FC<Prop> = ({ symbols }) => {
  const [select, setSelect] = useState(false);
  const [symbol, setSymbol] = useState<SymbolData | null>(null);

  const handleSelect = (symbolObj: SymbolData) => {
    setSelect(false);
    setSymbol(symbolObj);
  };

  return (
    <View className="w-full">
      <TouchableOpacity
        className="p-[15px] bg-secondary rounded-lg"
        onPress={() => setSelect(!select)}
      >
        <View className="flex-row justify-between items-center">
          {symbol ? (
            <>
              <Text className="font-psemibold">{symbol?.name}</Text>
              <Text className="font-psemibold">{symbol?.status}</Text>
            </>
          ) : (
            <>
              <Text className="font-psemibold">Select Symbol</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      {select && (
        <FlatList
          className="bg-secondary rounded-lg mt-[8vh] max-h-[70vh] p-[10px] absolute w-full z-10"
          data={symbols}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              className="p-[15px] bg-secondary-200 mt-[10px] rounded-lg flex-row justify-between"
            >
              <Text className="font-pregular">{item.name}</Text>
              <Text className="font-pregular">{item.status}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => <Text>No Symbols</Text>}
        />
      )}
    </View>
  );
};

export default SelectSymbols;

const styles = StyleSheet.create({});
