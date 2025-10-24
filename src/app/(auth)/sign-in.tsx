import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View className='flex-1 items-center justify-center' >
            <Text className='text-3xl'>Welcome to the Chat App Sign-In page!</Text>
            <Link href="/sign-up" className="mt-4 px-4 py-2 bg-blue-500 rounded">
                Go to Sign-Up Page
            </Link>
        </View>
    );
}