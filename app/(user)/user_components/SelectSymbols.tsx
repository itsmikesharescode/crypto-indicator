import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SymbolData } from '@/types';

interface Prop {
  symbols: SymbolData[]; //Bybit symbols
  onSelect: (symbol: SymbolData) => void;
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  externalSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectSymbols: React.FC<Prop> = ({
  symbols,
  onSelect,
  select,
  setSelect,
  externalSetter,
}) => {
  const [internalSymbol, setInternalSymbol] = useState<SymbolData | null>(null);

  return (
    <View className="w-full flex-col gap-[5px]">
      <Text className="text-base text-gray-100 font-pmedium">Select Symbol</Text>
      <TouchableOpacity
        className="p-[15px] bg-secondary rounded-lg w-full"
        onPress={() => {
          setSelect(!select);
          externalSetter(false);
        }}
      >
        <View className="flex-row justify-between items-center">
          {internalSymbol ? (
            <>
              <Text className="font-psemibold">{internalSymbol?.name}</Text>
              <Text className="font-psemibold">{internalSymbol?.status}</Text>
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
          className="bg-secondary rounded-lg mt-[5px] max-h-[70vh] p-[10px] w-full z-10"
          data={symbols}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                setInternalSymbol(item);
              }}
              className="p-[15px] bg-secondary-200 mt-[10px] rounded-lg flex-row justify-between"
            >
              <Text className="font-pregular">{item.name}</Text>
              <Text className="font-pregular">{item.status}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => <Text className="p-[15px] font-pregular">No Symbols</Text>}
        />
      )}
    </View>
  );
};

export default SelectSymbols;

const styles = StyleSheet.create({});
