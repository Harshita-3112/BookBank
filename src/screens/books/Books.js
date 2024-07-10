import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import StarIconCard from '../../components/StarIconCard/StarIconCard';
import GoBackButton from '../../components/GoBackbutton/GoBackButton';

const Books = ({ item, index }) => {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <GoBackButton />

      <Image
        source={require('../../assets/icons/book1.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 16,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{ color: '#121212', fontWeight: '700', fontSize: 18 }}>
          The Kite Runner
        </Text>
        <AntDesign name="heart" size={22} color={'#54408C'} />
      </View>
      <Image
        source={require('../../assets/icons/Frame3.png')}
        style={{ height: 60, width: 70, marginHorizontal: 24 }}
      />
      <Text
        style={{
          color: '#A6A6A6',
          marginHorizontal: 24,
          marginTop: 4,
          fontSize: 13,
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        dignissim ac ac ac. Nibh et sed ac, eget malesuada.
      </Text>
      <Text
        style={{
          color: '#121212',
          fontSize: 16,
          fontWeight: '700',
          marginHorizontal: 24,
          marginTop: 12,
        }}>
        Review
      </Text>
      <StarIconCard size={20} text={`(4.0)`} />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 24,
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 30,
            width: 80,
            backgroundColor: '#FAFAFA',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 12,
          }}>
          <AntDesign name="minuscircle" size={20} color={'#E8E8E8'} />
          <Text style={{ color: '#121212', fontSize: 16, fontWeight: '500' }}>
            1
          </Text>
          <AntDesign name="pluscircle" size={20} color={'#54408C'} />
        </View>
        <Text
          style={{
            color: '#54408C',
            fontSize: 14,
            fontWeight: '500',
            marginTop: 6,
          }}>
          $39.99
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 24,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: 40,
            width: 170,
            backgroundColor: '#54408C',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>
            Continue shopping
          </Text>
        </View>
        <View
          style={{
            height: 40,
            width: 105,
            backgroundColor: '#faf9fd',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: '#54408C', fontWeight: '700', fontSize: 13 }}>
            View cart
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  image: {
    height: 290,
    width: 'auto',
    borderRadius: 16,
    marginHorizontal: 60,
    marginTop: 41,
  },
  icon: {
    marginTop: 10,
    marginHorizontal: 24
  }
});
