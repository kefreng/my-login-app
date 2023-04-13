import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CategoryList = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const category = navigation.getParam("category");
    console.log("-----------> ", category);
    AsyncStorage.getItem("token").then((token) => {
      axios
        .get(`http://192.168.20.101:8080/api/${category}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setItems(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          alert("Failed to fetch items for category");
        });
    });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </View>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryList;
