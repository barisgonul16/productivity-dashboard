import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 justify-center items-center p-6">
      <View className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md items-center">
        <Text className="text-3xl font-bold text-gray-800 mb-4">Mobile Hazır!</Text>
        <Text className="text-gray-600 mb-6">Nativewind çalışıyor 🎉</Text>
        <TouchableOpacity
          onPress={() => setCount(count + 1)}
          className="bg-blue-600 active:bg-blue-800 px-6 py-3 rounded-lg"
        >
          <Text className="text-white font-bold text-lg">Sayı: {count}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}