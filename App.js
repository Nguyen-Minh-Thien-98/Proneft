import react from 'react';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { HomeScreen, DetailScreen} from './src/Screens';


const Stack = createNativeStackNavigator()

const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
 
  }
}


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!loaded) return null
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const Home = () => {}

