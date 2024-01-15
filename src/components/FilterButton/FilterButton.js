import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FilterButton = ({title}) => {
  return (
    <View
      style={{
        marginHorizontal: 24,
        marginTop: 30,
        height: 30,
        width: 'auto',
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 15, fontWeight: '400', color: '#a6a6a6'}}>
        {title}
      </Text>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({});
