// HomeScreen.js
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { theme } from "../themes/theme";
import SafeViewAndroid from "../components/SafeViewAndroid";
import SearchInput from "../components/SearchInput";
import DeliveryDetails from "../components/DeliveryDetails";
import OfferCard from "../components/OfferCard";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
//Icons

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the API
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
      <View style={styles.topSection}>
        <View style={styles.nameAndCart}>
          <Text style={styles.name}>Hey, Rahul</Text>
          <Cart />
        </View>
        <SearchInput />
        <DeliveryDetails />
      </View>
      <View style={styles.bottomSection}>
        <ScrollView
          style={styles.horizontalScroll}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <OfferCard cardColor={theme.colors.secondaryDark} />
          <OfferCard cardColor={theme.colors.cardYellow} />
        </ScrollView>
        <Text style={styles.recommeded}>Recommended</Text>
      </View>
      <View style={styles.productGrid}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              id={item.id}
              imageUrl={item.thumbnail}
              price={item.price}
              name={item.title}
            />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'space-between',
    backgroundColor: theme.colors.background,
  },
  name: {
    color: theme.colors.black1,
    fontFamily: theme.textVariants.semiBold,
    fontSize: 22,
  },
  topSection: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    // flexDirection:'row',
    // marginHorizontal: 16,
    // alignItems:'center',
    // gap:8,
  },
  nameAndCart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomSection: {
    //paddingHorizontal:20,
    marginTop: 27,
    paddingLeft: 20,
  },
  recommeded: {
    marginTop: 27,
    fontFamily: theme.textVariants.regular,
    fontSize: theme.textVariants.xxl,
    lineHeight: 38,
  },
  horizontalScroll: {},
  productGrid: {
    marginHorizontal: 20,
  },
});
export default HomeScreen;
