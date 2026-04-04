import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">
        Create Account
      </Link>
    </SafeAreaView>
  )
}

export default SignIn