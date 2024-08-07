import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const RecoveryPasswordLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="enter-code" options={{ headerShown: false }} />
      <Stack.Screen
        name="update-password"
        options={{ headerShown: false, gestureEnabled: false }}
      />
    </Stack>
  );
};

export default RecoveryPasswordLayout;

const styles = StyleSheet.create({});
