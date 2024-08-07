import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

const RootIndex = () => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ minHeight: '100%' }}>
        <View className="flex-col gap-[10px] justify-center items-center flex-1">
          <Text className="font-psemibold text-lg text-gray-200">Welcome to Crypto Indicator</Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text className="p-[15px] bg-secondary font-psemibold rounded-lg text-base">
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RootIndex;
