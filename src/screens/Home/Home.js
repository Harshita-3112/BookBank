import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Poster from '../../components/Poster/Poster';
import Vendors from '../../components/Vendors/Vendors';

const Home = () => {
  const navigation = useNavigation();

  const handleBooks = () => {
    navigation.navigate('Books');
  };
  const handleVendors = () => {
    navigation.navigate('VendorsList');
  };

  const handleAuthors = () => {
    navigation.navigate('Authors');
  };

  const handleBell = () => {
    navigation.navigate('Questions');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="search1" size={18} color={'#121212'} />
          <Text style={styles.home}>Home</Text>
          <TouchableOpacity onPress={handleBell}>
            <Ionicons name="notifications-outline" size={18} color={'#121212'} />
          </TouchableOpacity>
        </View>

        {/* Special offer */}
        <View style={styles.specialOffer}>
          <View style={{ flex: 1.3 }}>
            <View style={{ margin: 24 }}>
              <Text style={styles.offerTitle}>Special Offer</Text>
              <Text style={styles.offerDiscount}>Discount 25%</Text>
              <View style={styles.orderNowButton}>
                <Text style={styles.orderNowText}>Order Now</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require('../../assets/icons/Image.png')} style={styles.image} />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top of Week</Text>
          <TouchableOpacity onPress={handleBooks}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <Poster
            photo={require('../../assets/icons/book1.png')}
            title={'The Kite Runner'}
            price={'$14.99'}
          />
          <Poster
            photo={require('../../assets/icons/book2.png')}
            title={'The Kite Runner'}
            price={'$20.99'}
          />
          <Poster
            photo={require('../../assets/icons/book3.png')}
            title={'The Kite Runner'}
            price={'$14.99'}
          />
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Vendors</Text>
          <TouchableOpacity onPress={handleVendors}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <Vendors photo={require('../../assets/icons/Frame1.png')} />
          <Vendors photo={require('../../assets/icons/Frame2.png')} />
          <Vendors photo={require('../../assets/icons/Frame3.png')} />
          <Vendors photo={require('../../assets/icons/Frame4.png')} />
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Authors</Text>
          <TouchableOpacity onPress={handleAuthors}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: 24, alignItems: 'center', justifyContent: 'space-between' }}>
          <View style={styles.author}>
            <Image source={require('../../assets/icons/Image1.png')} style={styles.authorImage} />
            <View style={styles.writerDetail}>
              <Text style={styles.authorName}>John Freeman</Text>
              <Text style={{ fontSize: 12 }}>Writer</Text>
            </View>
          </View>


          <View style={styles.author}>
            <Image source={require('../../assets/icons/Image2.png')} style={styles.authorImage} />
            <View style={styles.writerDetail}>
              <Text style={styles.authorName}>Tess Gunty</Text>
              <Text style={{ fontSize: 12 }}>Novelist</Text>
            </View>
          </View>


          <View style={styles.author}>
            <Image source={require('../../assets/icons/Image3.png')} style={styles.authorImage} />
            <View style={styles.writerDetail}>
              <Text style={styles.authorName}>Richard Perry</Text>
              <Text style={{ fontSize: 12 }}>Writer</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  header: {
    marginHorizontal: 24,
    marginTop: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  home: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 16,
  },
  specialOffer: {
    marginHorizontal: 24,
    marginTop: 20,
    height: 150,
    backgroundColor: '#faf9fd',
    flexDirection: 'row',
  },
  offerTitle: {
    color: '#121212',
    fontWeight: '700',
    fontSize: 16,
  },
  offerDiscount: {
    fontSize: 13,
    fontWeight: '400',
  },
  orderNowButton: {
    height: 20,
    width: 80,
    backgroundColor: '#54408C',
    borderRadius: 12,
    marginTop: 12,
  },
  orderNowText: {
    color: '#fff',
    fontSize: 12,
    alignSelf: 'center',
  },
  image: {
    height: 150,
    width: 'auto',
    resizeMode: 'contain',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 30,
  },
  sectionTitle: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '700',
  },
  seeAll: {
    color: '#54408C',
    fontSize: 12,
    fontWeight: '700',
  },
  author: {
    // marginHorizontal: 24,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center'



  },
  authorImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    // marginLeft: 10

  },
  authorName: {
    color: '#121212',
    fontWeight: '500',
    fontSize: 12,


  },
  writerDetail: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
