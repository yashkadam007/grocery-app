import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../themes/theme";
import AddToFavourite from "./AddToFavourite";

const ProductCard = ({ id, imageUrl, price, name }) => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const cardWidth = (windowWidth - 55) / 2;

  const handleCardPress = () => {
    navigation.navigate("ProductDetailScreen", { productId: id });
  };
  return (
    <View>
      <View style={styles.favoriteContainer}>
        <AddToFavourite productId={id} />
      </View>
      <TouchableOpacity onPress={handleCardPress}>
        <View style={[styles.card, { width: cardWidth }]}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.black1,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    marginRight: 15,
    height: 194,
  },
  image: {
    width: "100%",
    height: "65%",
    resizeMode: "cover",
  },
  price: {
    fontSize: theme.textVariants.xs,
    fontFamily: theme.textVariants.semiBold,
    marginTop: 10,
    paddingHorizontal: 17,
  },
  name: {
    fontSize: theme.textVariants.xxs,
    fontFamily: theme.textVariants.regular,
    marginVertical: 4,
    paddingHorizontal: 17,
  },
  favoriteContainer: {
    position: "absolute",
    top: 12,
    right: 25,
    zIndex: 1,
  },
});

export default ProductCard;
