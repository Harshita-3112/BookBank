import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterServey from '../../components/FilterServey/FilterServey';
const Serveys = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2', marginHorizontal: 16}}>
      <View style={{flexDirection: 'row', marginTop: 18}}>
        <Ionicons
          name="chevron-back-circle-sharp"
          size={36}
          color={'#284B63'}
        />

        <Text
          style={{
            alignSelf: 'center',
            left: 100,
            fontSize: 22,
            fontWeight: '600',
            color: '#404041',
          }}>
          Serveys
        </Text>
      </View>

      <FilterServey title={'Survey 01'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 02'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 03'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 04'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 05'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 06'} update={'Updated on: Aug 15, 2023'} />
      <FilterServey title={'Survey 07'} update={'Updated on: Aug 15, 2023'} />
    </View>
  );
};

export default Serveys;

const styles = StyleSheet.create({});
