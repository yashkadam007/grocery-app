import StackNavigator from "./navigation/StackNavigator";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

export default function App() {
  const [isLoaded] = useFonts({
    "manrope-regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "manrope-medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "manrope-semibold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "manrope-bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });
  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}
