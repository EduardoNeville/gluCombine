import { Nav } from "./Navigation";
import { NavigationIndependentTree } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationIndependentTree>
      <Nav />
    </NavigationIndependentTree>
  );
}

