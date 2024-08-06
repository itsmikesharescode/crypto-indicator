import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const RootIndex = () => {
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex-1 flex-col justify-center items-center gap-[20px]">
          <Text className="font-pregular text-xl text-white">Welcome to Binance App!</Text>
          <Link
            href="/login"
            className="p-[15] text-base justify-center items-center text-white bg-black rounded-lg"
          >
            Get Started
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootIndex;
