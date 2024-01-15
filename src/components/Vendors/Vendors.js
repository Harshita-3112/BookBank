import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Vendors = ({photo}) => {
  return (
    <View style={styles.vendors}>
      <Image source={photo} style={{height: 60, width: 70}} />
    </View>
  );
};

export default Vendors;

const styles = StyleSheet.create({
  vendors: {
    height: 60,
    width: 70,
    backgroundColor: '#FAFAFA',
    marginHorizontal: 24,
    marginTop: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
