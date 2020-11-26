import "react-native-gesture-handler";
import React from "react";
import { IntlProvider } from "react-intl";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/home";
import Album from "./screens/album";
import Category from "./screens/category";
import TrackContainer from "./screens/track";
import ErrorPage from "./screens/error";
import { SCREENS } from "./constants";

const Stack = createStackNavigator();

const App = () => {

  return (
    <IntlProvider locale="en">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREENS.HOME}
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREENS.ALBUM}
            component={Album}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor: "#ffffff",
            }}
          />
          <Stack.Screen
            name={SCREENS.CATEGORY}
            component={Category}
            options={{
              title: "",
              headerTransparent: true,
              headerTintColor: "#ffffff",
            }}
          />
          <Stack.Screen
            name={SCREENS.TRACKCONTAINER}
            component={TrackContainer}
            options={{
              title: "Track info",
              headerTintColor: "#bc143c",
              headerStyle: {
                backgroundColor: "#F6F6F6",
              },
              headerTitleStyle: {
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name={SCREENS.ERROR}
            component={ErrorPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </IntlProvider>
  );

};

export default App;
