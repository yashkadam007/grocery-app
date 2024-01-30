import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { theme } from '../themes/theme';
import Search from '../assets/images/Search.svg';
const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (text) => {
    setSearchTerm(text);
  };

  return (
    <View style={styles.container}>
       <Search/> 
      <TextInput
        style={styles.input}
        placeholder="Search Products or store"
        placeholderTextColor='#8891A5'
        value={searchTerm}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    height: 56,
    borderRadius:28,
    backgroundColor: theme.colors.primaryDark,
    //marginBottom: 10,
    paddingVertical: 18,
    paddingHorizontal:28,
    fontFamily: theme.textVariants.medium,
    flexDirection:'row',
    gap:12,
  },
  input: {
   flex:1, 
  },
});

export default SearchInput;
