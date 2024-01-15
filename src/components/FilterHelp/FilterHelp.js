import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const FilterHelp = ({title}) => {
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
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#404041',
        }}>
        {title}
      </Text>
      <Entypo name="chevron-thin-right" size={22} color={'#284B63'} />
    </View>
  );
};

export default FilterHelp;

const styles = StyleSheet.create({});
