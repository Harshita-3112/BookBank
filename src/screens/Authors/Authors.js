import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterAuthors from '../../components/FilterAuthors/FilterAuthors';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import GoBackButton from '../../components/GoBackbutton/GoBackButton';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import { RotationGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture';

const Authors = () => {

  const AUTHORDATA = [
    {
      photo: require('../../assets/icons/Image1.png'),
      name: 'John Freeman',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim ac ac ac. Nibh et sed ac, eget malesuada.',
      specialist: 'Writer',
      rating: 1,
      books: [
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
      ]
    },


    {
      photo: require('../../assets/icons/Image2.png'),
      name: 'Tess Gunty',
      title: 'Gunty was born and raised in South Bend, Indiana.She graduated from the University of Notre Dame with a Bachelor of Arts in English and from New York University.',
      specialist: 'Writer',
      rating: 1,
      books: [
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
      ]
    },


    {
      photo: require('../../assets/icons/Image3.png'),
      name: 'Richard Perston',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim ac ac ac. Nibh et sed ac, eget malesuada.',
      specialist: 'Writer',
      rating: 1,
      books: [
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
      ]
    },


    {
      photo: require('../../assets/icons/Image4.png'),
      name: 'Ann Napolitano',
      title: 'She is the author of the novels A Good Hard...',
    },


    {
      photo: require('../../assets/icons/Image5.png'),
      name: 'Abraham verghese',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim ac ac ac. Nibh et sed ac, eget malesuada. ',
      specialist: 'Writer',
      rating: 1,
      books: [
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
      ]
    },


    {
      photo: require('../../assets/icons/Image6.png'),
      name: 'Adam Dalva',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra dignissim ac ac ac. Nibh et sed ac, eget malesuada.',
      specialist: 'Writer',
      rating: 1,
      books: [
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
        {
          image: require('../../assets/icons/product4.png'),
          name: 'The Da Vinci Code',
          price: `$27.12`
        },
      ]
    },

  ]

  const renderAuthorCards = ({ item, index }) => {
    return (
      <AuthorCard photo={item.photo} name={item.name} title={item.title} onPress={() => navigation.navigate('AuthorDetail', { data: item })} />
    )
  }

  const navigation = useNavigation()


  return (

    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
        <GoBackButton />
        <Text style={{ color: '#121212', fontSize: 18, fontWeight: '700' }}>
          Authors
        </Text>
        <AntDesign name="search1" size={22} color={'#121212'} />
      </View>
      <View style={{ marginHorizontal: 24, marginTop: 20 }}>
        <Text style={{ color: '#a6a6a6', fontSize: 15, fontWeight: '400' }}>
          Check the authors
        </Text>
        <Text style={{ color: '#54408C', fontSize: 19, fontWeight: '700' }}>
          Authors
        </Text>
      </View>
      <View>
        <ScrollView horizontal>
          <FilterAuthors title={'All'} />
          <FilterAuthors title={'Poets'} />
          <FilterAuthors title={'Playwrights'} />
          <FilterAuthors title={'Novelists'} />
          <FilterAuthors title={'Journalists'} />
        </ScrollView>
      </View>

      {/* author's deatails */}



      <FlatList data={AUTHORDATA} renderItem={renderAuthorCards} style={{ flex: 1, }} />
    </View>
  );
};

export default Authors;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 24,
    marginTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});






