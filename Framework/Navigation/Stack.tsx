import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Welcome';
import LogIn from '../Screen/LogIn';
import { HomeScreen } from '../Screen/HomeScreen';
import Details from '../Screen/Details';
import Bag from '../Screen/Bag';
import Favorite from '../Screen/Favorite';
import Updates from '../Screen/Updates';
import Order from '../Screen/Order';
import PickUp from '../Screen/PickUp';
// import Shopper from '../Screen/shopper';


export type RootStackParamList = {
  Welcome: undefined;
  LogIn: undefined;
  HomeScreen: undefined;
  Details: {
    name: string;
    image: any;
    description: string;
    label: string;
    title: string;
    rating: number;
    price: number;
  };
  Bag: { items: { id: number; name: string; image: any; price: number; quantity: number; title: string}[] };
  Favorite: {
    name: string;
    image: any;
    price: number;
    selectedSize: string
    title: string
  };
  Updates: undefined;
  PickUp: undefined;
  Order: {
    name: string;
    image: any;
    price: number;
    selectedSize: string
    title: string
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
        <Stack.Screen name="Bag" component={Bag} options={{ headerShown: false }} />
        <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
        <Stack.Screen name="Updates" component={Updates} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={Order} options={{ headerShown: false }} />
        <Stack.Screen name="PickUp" component={PickUp} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
