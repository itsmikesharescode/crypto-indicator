import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';

const UpdatePasswordPage = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View className="flex-col flex-1 justify-center items-center p-[10px]">
          <View>
            <Text className="font-pbold text-3xl text-white text-center">Update Password</Text>
            <Text className="text-base font-pregular text-gray-100/50 text-center">
              Never share your password to anyone.
            </Text>
          </View>
          <FormField
            title="New Password"
            value=""
            placeholder="Enter your new password"
            handleChangeText={() => {}}
            otherStyles="mt-2"
            secureTextEntry={true}
          />
          <Text className="font-pregular mt-2 text-red-500 w-full">Must enter a new password.</Text>

          <FormField
            title="Confirm New Password"
            value=""
            placeholder="Confirm your new password"
            handleChangeText={() => {}}
            otherStyles="mt-2"
            secureTextEntry={true}
          />

          <Text className="font-pregular my-2 text-red-500 w-full">Must confirm new password.</Text>

          <CustomButton
            containerStyle=""
            handPress={() => console.log('hi')}
            title="Change Password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdatePasswordPage;

const styles = StyleSheet.create({});
