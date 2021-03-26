import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <View style={{alignItems : 'center'}}>
      <ActivityIndicator size="large" color="#e5c535" />
    </View>
  );
}
