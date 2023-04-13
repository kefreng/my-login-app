import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginForm from "./LoginForm";
import HomeScreen from "./HomeScreen";
import CategoryList from "./CategoryList";
import Detail from "./Detail";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginForm,
      navigationOptions: {
        title: "Login",
      },
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
      },
    },
    CategoryList: {
      screen: CategoryList,
      navigationOptions: {
        title: "CategoryList",
      },
    },
    Detail: { screen: Detail },
  },
  {
    initialRouteName: "Login",
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
