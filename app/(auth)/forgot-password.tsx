import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const ForgotPassword = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View className="flex-col justify-center items-center flex-1 p-[10px]">
          <View>
            <Text className="font-pbold text-3xl text-white text-center">Forgot Password</Text>
            <Text className="text-base font-pregular text-gray-100/50 text-center">
              An email containing a code will be sent to your email address.
            </Text>
          </View>
          <FormField
            title="Email"
            value=""
            placeholder="Enter your email"
            handleChangeText={() => {}}
            otherStyles="mt-[10px]"
          />
          <Text className="font-pregular mt-2 text-red-500 w-full">Must enter a valid email.</Text>

          <CustomButton
            containerStyle=""
            handPress={() => console.log('hi')}
            title="Reset Password"
          />

          <View className="h-[2px] bg-slate-600 mt-[20px] w-full"></View>

          <Link
            asChild
            href="/login"
            className="p-[15px]  bg-secondary rounded-lg mt-[10px] w-full "
          >
            <TouchableOpacity>
              <Text className="text-base font-psemibold text-center">Log in here</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
