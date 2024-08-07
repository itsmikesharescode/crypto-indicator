import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

interface Prop {
  onSelect: (interval: { name: string; value: string }) => void;
  select: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  externalSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const intervals = [
  {
    name: '1 minute',
    value: '1',
  },
  {
    name: '3 minutes',
    value: '3',
  },
  {
    name: '5 minutes',
    value: '5',
  },
  {
    name: '15 minutes',
    value: '15',
  },
  {
    name: '30 minutes',
    value: '30',
  },

  {
    name: '60 minutes',
    value: '60',
  },

  {
    name: '120 minutes',
    value: '120',
  },
  {
    name: '240 minutes',
    value: '240',
  },

  {
    name: '360 minutes',
    value: '360',
  },

  {
    name: '720 minutes',
    value: '720',
  },

  {
    name: '1 Day',
    value: 'D',
  },

  {
    name: '1 Week',
    value: 'W',
  },

  {
    name: '1 Month',
    value: 'M',
  },
];

const SelectIntervals: React.FC<Prop> = ({ onSelect, select, setSelect, externalSetter }) => {
  const [internalInterval, setInternalInterval] = useState<{ name: string; value: string } | null>(
    null,
  );

  return (
    <View className="w-full flex-col gap-[5px]">
      <Text className="text-base text-gray-100 font-pmedium">Select Interval</Text>
      <TouchableOpacity
        className="p-[15px] bg-secondary rounded-lg w-full"
        onPress={() => {
          setSelect(!select);
          externalSetter(false);
        }}
      >
        <View className="flex-row justify-between items-center">
          {internalInterval ? (
            <>
              <Text className="font-psemibold">{internalInterval.name}</Text>
            </>
          ) : (
            <>
              <Text className="font-psemibold">Select Interval</Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      {select && (
        <FlatList
          className="bg-secondary rounded-lg mt-[10px] max-h-[70vh] p-[10px] w-full z-10"
          data={intervals}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onSelect(item);
                setInternalInterval(item);
              }}
              className="p-[15px] bg-secondary-200 mt-[10px] rounded-lg flex-row justify-between"
            >
              <Text className="font-pregular">{item.name}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text className="p-[15px] font-pregular">No Intervals ...</Text>
          )}
        />
      )}
    </View>
  );
};

export default SelectIntervals;

const styles = StyleSheet.create({});
