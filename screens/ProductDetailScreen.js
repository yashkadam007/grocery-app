import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import ActionButton from "../components/ActionButton";
import { theme } from "../themes/theme";
import BackButton from "../components/BackButton";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Cart from "../components/Cart";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action/Actions";
import Carousel, { Pagination } from "react-native-snap-carousel";


const { width } = Dimensions.get('window');

const ProductDetailScreen = ({ route, cartItems }) => {
  const { productId } = route.params;
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();
  const [activeSlide, setActiveSlide] = useState(0);

  const renderImageItem = ({ item }) => (
    <Image source={{ uri: item }} style={{ width, height: 200, resizeMode: 'cover' }} />
  );

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
          thumbnail: productDetails.thumbnail,
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
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.backAndCart}>
        <BackButton />
        <Cart dark={true} />
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.brand}>{productDetails.brand}</Text>
        <Text style={styles.title}>{productDetails.title}</Text>
        {/* <Text style={styles.rating}>Rating: {productDetails.rating}</Text> */}
        {/* <FlatList
          data={productDetails.images}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        /> */}
        <View>
      <Carousel
        data={productDetails.images}
        renderItem={renderImageItem}
        sliderWidth={width}
        itemWidth={width}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={productDetails.images.length}
        activeDotIndex={activeSlide}
        containerStyle={{ position: 'absolute', bottom: -15 }}
        dotStyle={{
          width: 21,
          height: 4,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: theme.colors.secondaryDark,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        inactiveDotStyle={{ backgroundColor: '#E4E4E4'}}
      />
    </View>

        <Text style={styles.price}>${productDetails.price}</Text>
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

        {/* <Text style={styles.discount}>
          Discount: {productDetails.discountPercentage}%
        </Text> */}
        <Text style={styles.detail}>Detail</Text>
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
    //marginTop: 24,
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
    //marginTop: 24,
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
    //padding: 16,
  },
  backAndCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    color: "#1e222b",
    fontFamily: theme.textVariants.bold,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  brand: {
    fontSize: 50,
    color: "#1e222b",
    fontFamily: theme.textVariants.regular,
    marginBottom: 8,
    paddingHorizontal: 16,

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
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.bold,
    color: theme.colors.primary,
    marginTop: 26,
    paddingHorizontal: 16,

  },
  discount: {
    fontSize: 16,
    color: "green",
    marginTop: 8,
  },
  description: {
    marginTop: 6,
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.regular,
    color: "#8891A5",
    paddingHorizontal: 16,

  },
  buttonContainer: {
    flexDirection: "row",
    gap: 23,
    marginTop: 30,
    paddingHorizontal: 16,

  },
  detail: {
    marginTop: 30,
    fontSize: theme.textVariants.s,
    fontFamily: theme.textVariants.regular,
    color: "#1e222b",
    paddingHorizontal: 16,

  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

//export default ProductDetailScreen;
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { addToCart })(ProductDetailScreen);
