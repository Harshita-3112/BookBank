import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Poster from '../../components/Poster/Poster';
import Vendors from '../../components/Vendors/Vendors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleBooks = () => {
    navigation.navigate('Books');
  };
  const handleVendords = () => {
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
      <View>
        <View style={styles.header}>

          <AntDesign name="search1" size={18} color={'#121212'} />



          <Text style={styles.home}>Home</Text>


          <TouchableOpacity onPress={handleBell}>
            <Ionicons
              name="notifications-outline"
              size={18}
              color={'#121212'}
            />
          </TouchableOpacity>
        </View>
        {/* special offer */}
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 20,
            height: 150,
            width: 'auto',
            backgroundColor: '#faf9fd',
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1.3 }}>
            <View style={{ margin: 24 }}>
              <Text style={{ color: '#121212', fontWeight: '700', fontSize: 16 }}>
                Special Offer
              </Text>
              <Text style={{ fontSize: 12, fontWeight: '400', fontSize: 13 }}>
                Discount 25%
              </Text>
              <View
                style={{
                  height: 20,
                  width: 80,
                  backgroundColor: '#54408C',
                  borderRadius: 12,
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 12,
                    alignSelf: 'center',
                  }}>
                  Order Now
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <Image
              source={require('../../assets/icons/Image.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 24,
            marginTop: 30,
          }}>
          <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700' }}>
            Top of Week
          </Text>
          <TouchableOpacity onPress={handleBooks}>
            <Text style={{ color: '#54408C', fontSize: 12, fontWeight: '700' }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View>
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
        </View>
        <View
          style={{
            marginHorizontal: 24,
            marginTop: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700' }}>
            Best Vendors
          </Text>

          <TouchableOpacity onPress={handleVendords}>
            <Text style={{ color: '#54408C', fontSize: 12, fontWeight: '700' }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <ScrollView horizontal>
            <Vendors photo={require('../../assets/icons/Frame1.png')} />
            <Vendors photo={require('../../assets/icons/Frame2.png')} />
            <Vendors photo={require('../../assets/icons/Frame3.png')} />
            <Vendors photo={require('../../assets/icons/Frame4.png')} />
          </ScrollView>
        </View>

        <View
          style={{
            marginHorizontal: 24,
            marginTop: 18,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: '#121212', fontSize: 16, fontWeight: '700' }}>
            Authors
          </Text>
          <TouchableOpacity onPress={handleAuthors}>
            <Text style={{ color: '#54408C', fontSize: 12, fontWeight: '700' }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.author}>
          <Image
            source={require('../../assets/icons/Image1.png')}
            style={{ height: 80, width: 80, borderRadius: 40 }}
          />
          <Text style={{ color: '#121212', fontWeight: '500', fontSize: 12 }}>
            John Freeman
          </Text>
          <Text>Writer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
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
  image: {
    height: 150,
    width: 'auto',
    resizeMode: 'contain',
  },
  author: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginHorizontal: 24,
    marginTop: 12,
  },
});
