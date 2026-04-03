import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" className="mt-4 bg-primary justify-center rounded text-white p-4">
        Go to Onboarding
      </Link>

      <Link href="/(auth)/sign-in" className="mt-4 bg-primary justify-center rounded text-white p-4">
        Go to Sign In
      </Link>

      <Link href="/(auth)/sign-up" className="mt-4 bg-primary justify-center rounded text-white p-4">
        Go to Sign Up
      </Link>

      <Link href="/subscriptions/spotify">
        Spotify Subscription
      </Link>
      <Link 
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify"},
        }}
      >
        Claude Max Subscription
      </Link>
    </SafeAreaView>
  );
}
