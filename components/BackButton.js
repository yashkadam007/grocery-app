// components/BackButton.js
import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//Icon
import BackButtonIcon from '../assets/images/BackButtonIcon.svg';

const BackButton = ({style}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={style} onPress={handleGoBack}>
        <BackButtonIcon/>
    </TouchableOpacity>
  );
};

export default BackButton;
