import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Detail = ({ navigation }) => {
  const { name, nationality, item, detail, photo } = navigation.state.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={photo} style={styles.photo} />
        <View style={styles.title}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nationality}>{nationality}</Text>
        </View>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Item:</Text>
          <Text style={styles.value}>{item}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Detail:</Text>
          <Text style={styles.value}>{detail}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  title: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  nationality: {
    fontSize: 16,
    color: "#666",
  },
  table: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  value: {
    flex: 2,
    fontSize: 16,
    color: "#333",
  },
});

export default Detail;
