import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";

const MainMenu = ({ navigation }) => {
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handlePress = (event) => {
    const newMarker = {
      coordinate: event.nativeEvent.coordinate,
      message: "This is a marker",
    };
    setMarkers([...markers, newMarker]);
  };

  const handleCategoryPress = (category) => {
    navigation.navigate("CategoryList", { category });
  };

  const handleViewPositionPress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleCategoryPress("products")}
      >
        <Text style={styles.optionText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleCategoryPress("cars")}
      >
        <Text style={styles.optionText}>Niti</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleCategoryPress("users")}
      >
        <Text style={styles.optionText}>Dale color</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.option}
        onPress={() => handleCategoryPress("food")}
      >
        <Text style={styles.optionText}>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={handleViewPositionPress}>
        <Text style={styles.optionText}>View Position</Text>
      </TouchableOpacity>
      {region && (
        <MapView style={styles.map} initialRegion={region}>
          <Marker
            coordinate={region}
            onPress={() =>
              navigation.navigate("Detail", {
                name: "username",
                nationality: "nationality",
                item: ["party", "concert", "drink", "play", "music", "help"][
                  Math.floor(Math.random() * 6)
                ],
                detail: "lorem ipsum...",
                photo: require("./drink.png"),
              })
            }
          >
            <Image source={require("./custom-marker.png")} />
          </Marker>
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    marginBottom: 20,
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
  },
  map: {
    flex: 1,
    width: "100%",
  },
});

export default MainMenu;
