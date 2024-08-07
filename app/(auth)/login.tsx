import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';

const LoginPage = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
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
            secureTextEntry={true}
          />

          <Text className="font-pregular my-2 text-red-500 w-full">Must enter a password.</Text>

          <CustomButton
            containerStyle=""
            title="Log in"
            handPress={() => router.replace('/user-dashboard')}
          />

          <View className="h-[2px] bg-slate-600 mt-[20px] w-full"></View>

          <View className="w-full mt-[20px]">
            <Link asChild href="/forgot-password" className="p-[15px]  bg-secondary rounded-lg  ">
              <TouchableOpacity>
                <Text className="text-base font-psemibold text-center">Forgot Password</Text>
              </TouchableOpacity>
            </Link>
            <Link asChild href="/register" className="p-[15px]  bg-secondary rounded-lg mt-[10px] ">
              <TouchableOpacity>
                <Text className="text-base font-psemibold text-center">Sign Up Free</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginPage;
