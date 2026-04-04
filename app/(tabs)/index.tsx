import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { Image } from "expo-image";
import { icons } from "@/constants/icons";
import images from "@/constants/images";

import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View className="mb-2.5 flex flex-row items-center justify-between">
              {/* Avatar + User Name */}
              <View className="flex flex-row items-center">
                <Image
                  source={images.avatar}             // Use fixed import
                  style={{ width: 64, height: 64, borderRadius: 32 }} // Proper rounded avatar
                  contentFit="cover"
                />
                <Text className="ml-4 text-2xl font-sans-bold text-primary">
                  {HOME_USER.name}
                </Text>
              </View>

              {/* Add Icon */}
              <Image
                source={icons.add}                  // Use fixed import
                style={{ width: 48, height: 48 }}  // Proper size
              />
            </View>

            <View className="my-2.5 min-h-[160px] flex justify-between gap-5 rounded-bl-2xl rounded-tr-2xl bg-accent p-6">
              <Text className="text-xl font-sans-semibold text-white/80">
                Balance
              </Text>
              <View className="flex flex-row items-center justify-between">
                <Text className="text-4xl font-sans-extrabold text-white">
                  {formatCurrency(HOME_BALANCE.amount)}
                </Text>
                <Text className="text-xl font-sans-medium text-white">
                  {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
                </Text>
              </View>
            </View>

            <View className="mb-5">
              <ListHeading title="Upcoming" />

              <FlatList
                data={UPCOMING_SUBSCRIPTIONS}
                renderItem={({ item }) => (
                  <UpcomingSubscriptionCard {...item} />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={
                  <Text className="py-4 text-sm font-sans-medium text-black/60">
                    No upcoming renewals yet.
                  </Text>
                }
                className="mt-4 mb-6"
              />
            </View>

            <ListHeading title="All Subscriptions" />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) =>
                currentId === item.id ? null : item.id,
              )
            }
          />
        )}
        extraData={expandedSubscriptionId}
        ItemSeparatorComponent={() => <View className="h-4" />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="py-4 text-sm font-sans-medium text-black/60">
            No subscriptions found. Start adding some!
          </Text>
        }
        contentContainerClassName="pb-30"
      />
    </SafeAreaView>
  );
}
