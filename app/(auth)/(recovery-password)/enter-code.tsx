import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const EnterCodePage = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View className="flex-col flex-1 justify-center items-center p-[10px]">
          <Text className="font-pbold text-3xl text-white">Enter Code</Text>
          <FormField
            title="Code"
            value=""
            placeholder="Enter passwrod reset code"
            handleChangeText={() => {}}
            otherStyles=""
          />
          <Text className="font-pregular mt-2 text-red-500 w-full">
            Must enter a valid reset code.
          </Text>

          <CustomButton
            containerStyle=""
            handPress={() => {
              router.dismissAll();
              router.replace('/update-password');
            }}
            title="Proceed"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EnterCodePage;
