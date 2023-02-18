import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./Login";
import HomeScreen from "./Home";

export default function App() {

   const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

