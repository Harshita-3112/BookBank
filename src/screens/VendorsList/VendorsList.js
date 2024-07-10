import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterButton from '../../components/FilterButton/FilterButton';
import VendorsListCard from '../../components/VendorsListCard/VendorsListCard';
import GoBackButton from '../../components/GoBackbutton/GoBackButton';

const VendorsList = () => {

  const renderVendorCard = ({ item, index }) => {
    return (
      <VendorsListCard image={item.image} title={item.title} />
    )
  }



  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <GoBackButton />
        <Text style={{ color: '#121212', fontSize: 18, fontWeight: '700' }}>
          Vendords
        </Text>
        <AntDesign name="search1" size={22} color={'#121212'} />
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 20 }}>
        <Text style={{ color: '#a6a6a6', fontSize: 15, fontWeight: '400' }}>
          Our Vendors
        </Text>
        <Text style={{ color: '#54408C', fontSize: 19, fontWeight: '700' }}>
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


      <FlatList data={VENDORCARDS}
        renderItem={renderVendorCard}
        numColumns={3}
        columnWrapperStyle={styles.columnwrapper}
      />

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
  columnwrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 24
  }
});



const VENDORCARDS = [
  {
    image: require('../../assets/icons/Frame5.png'),
    title: 'Wattpad'
  },
  {
    image: require('../../assets/icons/Frame2.png'),
    title: 'Kuromi'
  },
  {
    image: require('../../assets/icons/Frame4.png'),
    title: 'Crane & Co'
  },
  {
    image: require('../../assets/icons/Frame3.png'),
    title: 'GoodDay'
  },
  {
    image: require('../../assets/icons/Frame1.png'),
    title: 'Warehouse'
  },
  {
    image: require('../../assets/icons/Frame6.png'),
    title: 'Peppa Pig'
  },
  {
    image: require('../../assets/icons/Frame8.png'),
    title: 'Jestor'
  },
  {
    image: require('../../assets/icons/Frame7.png'),
    title: 'Peloton'
  },
  {
    image: require('../../assets/icons/Frame9.png'),
    title: 'Haymarket'
  },
]