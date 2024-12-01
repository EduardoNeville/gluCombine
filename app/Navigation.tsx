import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { NavigationContainer } from "@react-navigation/native";

import WalletScreen from "./screens/Wallet";
import HomeScreen from "./screens/Home";

const { Navigator, Screen, Group } = createNativeStackNavigator<RootStackParamList>();

export const Nav: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f9f9f9",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Group>
          <Screen name="Home">
            {(props: any) => (
              <HomeScreen
                {...props}
              />
            )}
          </Screen>
          <Screen name="Wallet">
            {(props: any) => (
              <WalletScreen
                {...props}
              />
            )}
          </Screen>
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
