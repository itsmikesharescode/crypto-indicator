import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const LoginPage = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="justify-center items-center flex-1 p-[10px]">
          <Text className="font-pbold text-3xl text-white">Login</Text>
          <FormField
            title="Email"
            value=""
            placeholder="Enter your email"
            handleChangeText={() => {}}
            otherStyles=""
          />
          <Text className="font-pregular mt-2 text-red-500 w-full">Must enter a valid email.</Text>

          <FormField
            title="Password"
            value=""
            placeholder="Enter your password"
            handleChangeText={() => {}}
            otherStyles="mt-2"
          />

          <Text className="font-pregular my-2 text-red-500 w-full">Must enter a password.</Text>

          <CustomButton containerStyle="" handPress={() => console.log('hi')} title="Log in" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
