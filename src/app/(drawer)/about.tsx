import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center justify-center' >
            <Text className='text-3xl'>Welcome to the Chat App About US page!</Text>
            <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 rounded">
                Go to Home Page
            </Link>
        </View>
    );
}