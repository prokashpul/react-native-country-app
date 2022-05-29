import { View, Text } from "react-native";
import React from "react";

export default function Country({ count }) {
  const { name } = count || {};
  return (
    <View>
      <Text>{name.common}</Text>
    </View>
  );
}
