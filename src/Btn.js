import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 300,
        paddingVertical: 5,
        marginVertical: 10,
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
