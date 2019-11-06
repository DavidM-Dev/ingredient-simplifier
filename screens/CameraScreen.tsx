import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CameraScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mytext}>This is the Camera screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDE3E9',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 5,
      borderColor: "orange",
      marginBottom: 50,
      marginTop: 80,
      padding: 50
    },
    mytext: {
        color: "blue",
        fontFamily: "Times New Roman",
        fontSize: 80
    }
  });
  