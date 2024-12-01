import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/RootStackParamList";
import { NavigationContainer } from "@react-navigation/native";
import colors from '../types/colors';

import WalletScreen from "./screens/Wallet";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";
import TopBar from './components/TopBarComponent';
import MintScreen from "./screens/Mint";


const { Navigator, Screen, Group } = createNativeStackNavigator<RootStackParamList>();

export const Nav: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#FFF",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Group>
          <Screen name="Home"
            options={{
              headerShown: true,
              header: () => <TopBar />, // Use the TopBar as the header
            }}
          >
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
          <Screen name="Profile">
            {(props: any) => (
              <ProfileScreen
                {...props}
              />
            )}
          </Screen>
          <Screen name="Mint">
            {(props: any) => (
              <MintScreen
                {...props}
              />
            )}
          </Screen>
        </Group>
      </Navigator>
    </NavigationContainer>
  );
};
