import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function () {
    return (
        <View className='flex-1 items-center justify-center' >
            <Text className='text-3xl'>Home!</Text>
            <Link href="/settings" className="mt-4 px-4 py-2 bg-blue-500 rounded">
                Go to Settings Page
            </Link>
        </View>
    );
}