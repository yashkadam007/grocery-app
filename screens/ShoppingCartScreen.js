import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/action/Actions';
import SafeViewAndroid from "../components/SafeViewAndroid";
import BackButton from "../components/BackButton";
import { connect } from 'react-redux';


const ShoppingCartScreen = ({ cartItems, increaseQuantity, decreaseQuantity }) => {
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.title}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <View style={styles.quantityButtons}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <BackButton />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
      <Text style={styles.totalPrice}>Total: ${calculateTotalPrice()}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  quantityButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  removeButton: {
    color: 'red',
    marginTop: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    alignSelf: 'flex-end',
    paddingRight: 16,
  },
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { removeFromCart, increaseQuantity, decreaseQuantity })(ShoppingCartScreen);

//export default ShoppingCartScreen;
