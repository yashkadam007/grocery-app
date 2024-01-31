import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/action/Actions";
import SafeViewAndroid from "../components/SafeViewAndroid";
import BackButton from "../components/BackButton";
import { connect } from "react-redux";
import { theme } from "../themes/theme";
import ActionButton from "../components/ActionButton";

const ShoppingCartScreen = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />
        <View>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productPrice}>${item.price}</Text>
        </View>
      </View>

      {/* <Text>Quantity: {item.quantity}</Text> */}
      <View style={styles.quantityButtons}>
        <ActionButton
          text="-"
          onPress={() => decreaseQuantity(item.id)}
          customStyle={increaseAndDecreaseButtonStyle}
        />
        <Text>{item.quantity}</Text>
        <ActionButton
          text="+"
          onPress={() => increaseQuantity(item.id)}
          customStyle={increaseAndDecreaseButtonStyle}
        />
      </View>
    </View>
  );

  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  const handleBuyNow = () => {};

  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <View style={styles.backAndCart}>
        <BackButton />
        <Text style={styles.shoppingCartText}>Shopping Cart ({cartItems.length})</Text>
      </View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
      />
      <View style={styles.totalCard}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.priceText}>${calculateTotalPrice()}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Delivery</Text>
          <Text style={styles.priceText}>$2</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Total</Text>
          <Text style={styles.priceText}>
            ${(parseFloat(calculateTotalPrice()) + 2.0).toFixed(2)}
          </Text>
        </View>
        <ActionButton
          text="Proceed  To checkout"
          onPress={handleBuyNow}
          customStyle={buyNowButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const increaseAndDecreaseButtonStyle = {
  button: {
    backgroundColor: "#F8F9FB",
    height: 40,
    width: 40,
    borderRadius: 80,
  },
  buttonText: {
    color: theme.colors.black100,
    fontFamily: theme.textVariants.regular,
    fontSize: theme.textVariants.xxl,
    marginTop: -5,
  },
};
const buyNowButtonStyle = {
  button: {
    marginTop:54,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  buttonText: {
    color: theme.colors.background,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.xs,
    marginLeft: 10,
    marginRight: 8,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backAndCart: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 21,
  },
  shoppingCartText: {
    fontFamily: theme.textVariants.regular,
    fontSize: theme.textVariants.s,
  },
  leftContainer: {
    flexDirection: "row",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBFB",
  },
  productName: {
    fontFamily: theme.textVariants.medium,
    fontSize: theme.textVariants.xs,
    marginLeft: 24,
    color: "#1E222B",
  },
  productPrice: {
    fontFamily: theme.textVariants.regular,
    fontSize: theme.textVariants.xs,
    marginLeft: 24,
    color: "#1E222B",
  },
  quantityButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
  },
  removeButton: {
    color: "red",
    marginTop: 8,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    alignSelf: "flex-end",
    paddingRight: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
  totalCard: {
    marginHorizontal: 8,
    height: 250,
    backgroundColor: "#F8F9FB",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 36,
    paddingTop: 17,
    gap: 13,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceLabel: {
    fontFamily: theme.textVariants.regular,
    fontSize: theme.textVariants.xs,
    lineHeight: 20,
    color: "#616A7D",
  },
  priceText: {
    fontFamily: theme.textVariants.medium,
    fontSize: theme.textVariants.xs,
    lineHeight: 20,
    color: "#1E222B",
  },
});

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(ShoppingCartScreen);

//export default ShoppingCartScreen;
