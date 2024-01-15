import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Poster = ({photo, title, price}) => {
  return (
    <View style={styles.poster}>
      <Image
        source={photo}
        style={{height: 120, width: 100, borderRadius: 8}}
        resizeMode="cover"
      />
      <Text
        style={{
          color: '#121212',
          fontWeight: '500',
          fontSize: 12,
          marginTop: 6,
        }}>
        {title}
      </Text>
      <Text style={{color: '#54408C', fontSize: 10, fontWeight: '700'}}>
        {price}
      </Text>
    </View>
  );
};

export default Poster;

const styles = StyleSheet.create({
  poster: {
    marginHorizontal: 24,
    marginTop: 16,
    borderRadius: 8,
    marginRight: -8,
  },
});
