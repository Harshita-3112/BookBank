import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const FilterServey = ({title, update}) => {
  return (
    <View
      style={{
        height: 48,
        width: 'auto',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#404041',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '400',
            color: '#727272',
          }}>
          {update}
        </Text>
      </View>
      <Entypo name="dots-three-vertical" size={20} color={'#284B63'} />
    </View>
  );
};

export default FilterServey;

const styles = StyleSheet.create({});
