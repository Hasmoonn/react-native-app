import { Text } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>Sign Up</Text>
      <Link href="/(auth)/sign-in">
        Sign In
      </Link>
    </SafeAreaView>
  )
}

export default SignUp