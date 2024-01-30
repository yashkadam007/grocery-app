import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../themes/theme';

const ProductCard = ({ id, imageUrl, price, name }) => {
    const navigation = useNavigation();
    const windowWidth = useWindowDimensions().width;
    const cardWidth = (windowWidth - 55) / 2;

  const handleCardPress = () => {
    // Navigate to ProductDetailScreen with the product ID
    navigation.navigate('ProductDetailScreen', { productId: id });
  };
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={[styles.card, { width: cardWidth }]}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.price}>${price}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.black1,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
    marginRight:15,
    height: 194,
  },
  image: {
    width: '100%',
    height: '65%', // Adjust the height based on your design
    resizeMode: 'cover',
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
});

export default ProductCard;
