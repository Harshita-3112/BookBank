import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const AuthorCard = ({ photo, name, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 30,
      }}>
      <View>
        <Image
          source={photo}
          style={{ height: 70, width: 70, borderRadius: 35, marginRight: 12 }}
        />
      </View>
      <View>
        <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700' }}>
          {name}
        </Text>
        <View style={{ width: 180 }}>
          <Text numberOfLines={2} style={{ color: '#66707A', fontSize: 14 }}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AuthorCard;

const styles = StyleSheet.create({});
