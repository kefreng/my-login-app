import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginForm = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    console.log(username);
    console.log(password);
    try {
      const response = await axios.post(
        "http://192.168.20.101:8080/api/login",
        {
          username,
          password,
        }
      );
      console.log("Request:", response.config);
      console.log("Response:", response.data);
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      setLoading(false);
      navigation.navigate("Home", { token });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setUsername("");
      setPassword("");
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <View>
      <Input
        placeholder="Username"
        leftIcon={<Icon name="user" size={24} color="black" />}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        placeholder="Password"
        leftIcon={<Icon name="lock" size={24} color="black" />}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" loading={loading} onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
