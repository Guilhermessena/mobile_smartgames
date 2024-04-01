import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import ProductsList from "./src/components/ProductsList";
import tw from 'twrnc';

export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center bg-gray-200 dark:bg-black`}>
      <View style={tw`flex-row w-full gap-5`}>
        <Text style={tw`dark:text-white text-2xl font-bold`}>
          Smart Games Ltda
        </Text>
      </View>
      <ProductsList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
