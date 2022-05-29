import { View, Text, Image } from "react-native";
import React from "react";

export default function Country({ count }) {
  const { name, flags } = count || {};
  return (
    <View style={{}}>
      <Text style={{ fontSize: 20 }}>{name.common}</Text>
      <Image source={{ uri: flags.png }} style={{ width: 300, height: 200 }} />
    </View>
  );
}
