import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FilterAuthors from '../../components/FilterAuthors/FilterAuthors';
import {ScrollView} from 'react-native-gesture-handler';
import AuthorDetail from '../../components/AuthorDetail/AuthorDetail';

const Authors = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={22} color={'#121212'} />
        <Text style={{color: '#121212', fontSize: 18, fontWeight: '700'}}>
          Authors
        </Text>
        <AntDesign name="search1" size={22} color={'#121212'} />
      </View>
      <View style={{marginHorizontal: 24, marginTop: 20}}>
        <Text style={{color: '#a6a6a6', fontSize: 15, fontWeight: '400'}}>
          Check the authors
        </Text>
        <Text style={{color: '#54408C', fontSize: 19, fontWeight: '700'}}>
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

      <AuthorDetail
        photo={require('../../assets/icons/Image1.png')}
        name={'John Freeman'}
        title={'American writer he was the editor of the'}
      />

      <AuthorDetail
        photo={require('../../assets/icons/Image2.png')}
        name={'Tess Gunty'}
        title={'Gunty was born and raised in south bend,indiana'}
      />

      <AuthorDetail
        photo={require('../../assets/icons/Image3.png')}
        name={'Richard Perston'}
        title={'he is the best selling author'}
      />

      <AuthorDetail
        photo={require('../../assets/icons/Image4.png')}
        name={'Ann Napolitano'}
        title={'She is the author of the novels A Good Hard'}
      />

      <AuthorDetail
        photo={require('../../assets/icons/Image5.png')}
        name={'Abraham verghese'}
        title={'He is the professor and Linda R . Meier and '}
      />

      <AuthorDetail
        photo={require('../../assets/icons/Image6.png')}
        name={'Adam Dalva'}
        title={'He is the senior fiction editor of guernica ma'}
      />
    </ScrollView>
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
