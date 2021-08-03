import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CheckBox = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={setIsSelected.bind(null, !isSelected)}>
        <View style={[styles.backLayer, {backgroundColor: isSelected ? 'rgba(0, 0, 255, 0.9)' : 'transparent'}]} />
        <View style={[styles.container, { backgroundColor: isSelected ? 'blue' : 'transparent' }]}>
          { isSelected && ( <Image source={require('./tick.png')} style={styles.tick} resizeMode={'cover'} /> )}
        </View>
      </TouchableOpacity>
  );
}

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderRadius: 2,
  },
  touchableOpacity: {
    width: 32, 
    height: 32, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  backLayer: {
    position: 'absolute', 
    top: 4, 
    left: 4, 
    width: 24, 
    height: 24, 
    borderRadius: 3,
  },
  tick: {
    tintColor: 'white'
  }
})
