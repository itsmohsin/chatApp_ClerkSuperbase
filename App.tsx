import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl text-blue-700 font-bold'>Welcome Mohsin!</Text>
      <StatusBar style="auto" />
    </View>
  );
}