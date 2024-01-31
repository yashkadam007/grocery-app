import React, {useEffect} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../redux/action/FavoriteActions';
import HeartOutline from '../assets/images/HeartOutline.svg';
import HeartBold from '../assets/images/HeartBold.svg';

const AddToFavourite = ({ productId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);
  
  const isFavorite = favorites.includes(productId);

  const handleAddToFavourite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(productId));
    } else {
      dispatch(addToFavorite(productId));
    }
  };

  return (
    <TouchableOpacity onPress={handleAddToFavourite} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
      <View>
        {isFavorite ? <HeartBold /> : <HeartOutline />}
      </View>
    </TouchableOpacity>
  );
};

export default AddToFavourite;
