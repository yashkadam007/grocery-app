import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import ActionButton from "../components/ActionButton";
import { theme } from "../themes/theme";
import BackButton from "../components/BackButton";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/Actions";

const ProductDetailScreen = ({ route, cartItems }) => {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const existingCartItem = cartItems.find((item) => item.id === productId);

    if (!existingCartItem) {
      // If the item is not in the cart, add a new item
      dispatch(
        addToCart({
          id: productId,
          title: productDetails.title,
          price: productDetails.price,
          quantity: 1,
        })
      );
    }
  };
  const handleBuyNow = () => {};
  useEffect(() => {
    // Fetch product details based on the received productId
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!productDetails) {
    // Loading state or error handling can be added here
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.backAndCart}>
        <BackButton />
        <Cart dark={true} />
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.title}>{productDetails.title}</Text>
        <Text style={styles.brand}>{productDetails.brand}</Text>
        <Text style={styles.rating}>Rating: {productDetails.rating}</Text>
        <FlatList
          data={productDetails.images}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />

        <Text style={styles.price}>Price: ${productDetails.price}</Text>
        <View style={styles.buttonContainer}>
          <ActionButton
            text="Add to cart"
            onPress={handleAddToCart}
            customStyle={addToCartButtonStyle}
          />
          <ActionButton
            text="Buy Now"
            onPress={handleBuyNow}
            customStyle={buyNowButtonStyle}
          />
        </View>

        <Text style={styles.discount}>
          Discount: {productDetails.discountPercentage}%
        </Text>
        <Text style={styles.description}>{productDetails.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const addToCartButtonStyle = {
  button: {
    flex: 1,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 24,
  },
  buttonText: {
    color: theme.colors.primary,
    fontFamily: theme.textVariants.semiBold,
    fontSize: theme.textVariants.xs,
    marginLeft: 10,
    marginRight: 8,
  },
};
const buyNowButtonStyle = {
  button: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 24,
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
    padding: 16,
  },
  backAndCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  brand: {
    fontSize: 18,
    color: "gray",
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginRight: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
  discount: {
    fontSize: 16,
    color: "green",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 23,
  },
});

//export default ProductDetailScreen;
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { addToCart })(ProductDetailScreen);
