import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import clsx from 'clsx'

const SubscriptionCard = ({name, price, currency, icon, billing, color, category, plan, renewalDate, expanded, onPress, paymentMethod, startDate, status}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-2xl border border-border p-4 ${expanded ? "bg-subscription" : "bg-card"}`}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      {/* Header */}
      <View className="flex flex-row items-center py-2">
        <View className="min-w-0 flex-1 flex flex-row items-center gap-3">
          <Image source={icon} className="w-16 h-16 rounded-lg" />
          <Text numberOfLines={1} className="mb-1 text-lg font-sans-bold text-primary">{name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" className="text-sm font-sans-semibold text-muted-foreground">
            {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : "")}
          </Text>
        </View>

        <View className="ml-3 shrink-0 flex items-end">
          <Text className="mb-1 text-lg font-sans-bold text-primary">{formatCurrency(price, currency)}</Text>
          <Text className="text-sm font-sans-medium text-muted-foreground">{billing}</Text>
        </View>
      </View>

      {/* Expanded Body */}
      {expanded && (
        <View className="mt-6 flex gap-4">
          <View className="flex gap-6">
            {/* Payment Row */}
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="min-w-0 flex-1 flex flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">Payment:</Text>
                <Text className="flex-1 font-sans-bold text-primary" numberOfLines={1} ellipsizeMode="tail">
                  {paymentMethod?.trim() || "Not provided"}
                </Text>
              </View>
            </View>

            {/* Category Row */}
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="min-w-0 flex-1 flex flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">Category:</Text>
                <Text className="flex-1 font-sans-bold text-primary" numberOfLines={1} ellipsizeMode="tail">
                  {category?.trim() || plan?.trim()}
                </Text>
              </View>
            </View>

            {/* Start Date Row */}
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="min-w-0 flex-1 flex flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">Started:</Text>
                <Text className="flex-1 font-sans-bold text-primary" numberOfLines={1} ellipsizeMode="tail">
                  {startDate ? formatSubscriptionDateTime(startDate) : ""}
                </Text>
              </View>
            </View>

            {/* Renewal Date Row */}
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="min-w-0 flex-1 flex flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">Renewal date:</Text>
                <Text className="flex-1 font-sans-bold text-primary" numberOfLines={1} ellipsizeMode="tail">
                  {renewalDate ? formatSubscriptionDateTime(renewalDate) : ""}
                </Text>
              </View>
            </View>

            {/* Status Row */}
            <View className="flex flex-row items-center justify-between gap-3">
              <View className="min-w-0 flex-1 flex flex-row items-center gap-2">
                <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">Status:</Text>
                <Text className="flex-1 font-sans-bold text-primary" numberOfLines={1} ellipsizeMode="tail">
                  {status ? formatStatusLabel(status) : ""}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  )
}

export default SubscriptionCard