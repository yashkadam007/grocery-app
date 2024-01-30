import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ id, imageUrl, price, name }) => {
    const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to ProductDetailScreen with the product ID
    navigation.navigate('ProductDetailScreen', { productId: id });
  };
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 20,
    width: '45%',
    height: 194,
  },
  image: {
    width: '100%',
    height: '60%', // Adjust the height based on your design
    resizeMode: 'cover',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default ProductCard;
