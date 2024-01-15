import 'react-native-gesture-handler';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterButton from '../../components/FilterButton/FilterButton';
import {ScrollView} from 'react-native-gesture-handler';

const VendorsList = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={22} color={'#121212'} />
        <Text style={{color: '#121212', fontSize: 18, fontWeight: '700'}}>
          Vendords
        </Text>
        <AntDesign name="search1" size={22} color={'#121212'} />
      </View>
      <View style={{marginHorizontal: 24, marginTop: 20}}>
        <Text style={{color: '#a6a6a6', fontSize: 15, fontWeight: '400'}}>
          Our Vendors
        </Text>
        <Text style={{color: '#54408C', fontSize: 19, fontWeight: '700'}}>
          Vendords
        </Text>
      </View>
      <View>
        <ScrollView horizontal>
          <FilterButton title={'All'} />
          <FilterButton title={'Books'} />
          <FilterButton title={'poems'} />
          <FilterButton title={'Special for you'} />
          <FilterButton title={'Stationary'} />
        </ScrollView>
      </View>
    </View>
  );
};

export default VendorsList;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
