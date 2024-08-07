import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const RegisterPage = () => {
  return (
    <SafeAreaView className="bg-primary text-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View className="justify-center items-center flex-1 p-[10px]">
          <Text className="font-pbold text-3xl text-white my-10">Sign Up Free</Text>

          <FormField
            title="Username"
            value=""
            placeholder="Enter your username"
            handleChangeText={() => {}}
            otherStyles=""
          />
          <Text className="font-pregular mt-2 text-red-500 w-full">Must enter a username.</Text>

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

          <FormField
            title="Confirm Password"
            value=""
            placeholder="Confirm your password"
            handleChangeText={() => {}}
            otherStyles="mt-2"
          />

          <Text className="font-pregular my-2 text-red-500 w-full">
            Must confirm your password.
          </Text>

          <CustomButton
            containerStyle=""
            handPress={() => console.log('hi')}
            title="Create Account"
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

export default RegisterPage;
