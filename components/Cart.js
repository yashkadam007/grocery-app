import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartIcon from "../assets/images/Cart.svg";
import DarkCartIcon from "../assets/images/DarkCart.svg";

const Cart = ({ dark }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ShoppingCartScreen");
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>{dark ? <DarkCartIcon /> : <CartIcon />}</View>
    </TouchableOpacity>
  );
};

export default Cart;
