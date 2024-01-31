import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../assets/images/Cart.svg";
import DarkCartIcon from "../assets/images/DarkCart.svg";
import { useSelector } from "react-redux";
import { theme } from "../themes/theme";

const Cart = ({ dark }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ShoppingCartScreen");
  };

  // Calculate the item count
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.length;
  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        {dark ? <DarkCartIcon /> : <CartIcon />}
        {itemCount > 0 && (
          <View
            style={{
              position: "absolute",
              top: -5,
              right: -10,
              backgroundColor: theme.colors.secondaryDark,
              borderRadius: 50,
              //padding: 5,
              height: 20,
              width: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 14 }}>{itemCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Cart;
