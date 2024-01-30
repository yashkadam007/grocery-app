import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageIcon from '../assets/images/ImageIcon.svg';

const OfferCard = ( {cardColor} ) => {
  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      <View>
        <ImageIcon/>
      </View>
      <View>
         <Text style={styles.cardText}>Get </Text>
         <Text> 50% off</Text>
         <Text>on first three orders</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    flexDirection:'row',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 16,
    marginRight: 18,
    alignItems: 'center',
    width: 269,
    height: 123,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
});

export default OfferCard;
