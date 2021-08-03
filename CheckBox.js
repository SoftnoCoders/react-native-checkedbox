import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const App = props => { // props: value | onPress | disabled | tickColor | backgroundColor 
  return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={props?.onPress} disabled={props?.disabled}>
        <View style={[styles.backLayer, {backgroundColor: props?.value ? 'rgba(42, 187, 155, 0.1)' : 'transparent'}]} />
        <View style={[styles.container, { backgroundColor: props?.value ? (props?.backgroundColor ? props?.backgroundColor : 'blue') : 'transparent', borderColor: props?.backgroundColor ? props?.backgroundColor : 'blue'  }]}>
          { props?.value && ( <Image source={require('./tick.png')} style={[{tintColor: props?.tickColor ? props.tickColor: 'white'} ]} resizeMode={'cover'} /> )}
        </View>
      </TouchableOpacity>
  );
}

export default App;

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
  }
})
