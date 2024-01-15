import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Event = () => {
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const [heading, setHeading] = useState('Green Energy Challenge');
  const handleEvent = () => {
    navigation.navigate('EventDetail');
    setNumber(number + 1);
    setHeading('Sustainability Challenge');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <View style={{flexDirection: 'row', marginHorizontal: 20, marginTop: 18}}>
        <Ionicons
          name="chevron-back-circle-sharp"
          size={36}
          color={'#284B63'}
        />
        <TouchableOpacity onPress={handleEvent}>
          <Text
            style={{
              alignSelf: 'center',
              left: 100,
              fontSize: 22,
              fontWeight: '600',
              color: '#404041',
            }}>
            Event
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.map}>
        <Image
          source={require('../../assets/icons/map.png')}
          style={{height: 240, width: 'auto', borderRadius: 12}}
          resizeMode="cover"
        />
      </View>
      <View style={{marginHorizontal: 18, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <Octicons name="dot-fill" size={20} color={'#F00'} />
          <Text
            style={{
              color: '#284B63',
              fontSize: 10,
              fontWeight: 400,
              alignSelf: 'center',
              left: 4,
            }}>
            Ongoing
          </Text>
        </View>
        <View style={{flexDirection: 'row', left: 16}}>
          <Octicons name="dot-fill" size={20} color={'#284B63'} />
          <Text
            style={{
              color: '#284B63',
              fontSize: 10,
              fontWeight: 400,
              alignSelf: 'center',
              left: 4,
            }}>
            Upcoming
          </Text>
        </View>
      </View>

      {/* Green energy challange */}

      <View
        style={{
          backgroundColor: '#fff',
          height: 140,
          width: 'auto',
          marginHorizontal: 18,
          marginTop: 16,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/GreenEnergy.png')}
            style={{
              height: 105,
              width: 90,
              borderRadius: 6,
            }}
          />
        </View>

        <View
          style={{
            flex: 2,

            justifyContent: 'space-evenly',
            paddingVertical: 12,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: '#404041',
            }}>
            {heading}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: '#727272',
            }}>
            Join the 'Green Commute Week' challenge and reduce your carbon
            footprint by choosing eco-friendly...
          </Text>
          <Text style={{fontSize: 10, fontWeight: '500', color: '#727272'}}>
            {number}
          </Text>
          <Text style={{fontSize: 10, fontWeight: '500', color: '#007BFF'}}>
            01D - 17H - 25M
          </Text>
        </View>
      </View>
      {/* 2nd view */}
      <View
        style={{
          backgroundColor: '#fff',
          height: 140,
          width: 'auto',
          marginHorizontal: 18,
          marginTop: 12,
          borderRadius: 12,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/icons/GreenEnergy2.png')}
            style={{
              height: 105,
              width: 90,
              borderRadius: 6,
            }}
          />
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: 'space-evenly',
            paddingVertical: 12,
          }}>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#404041'}}>
            Green Energy Challenge
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: '#727272',
            }}>
            Join the 'Green Commute Week' challenge and reduce your carbon
            footprint by choosing eco-friendly...
          </Text>
          <Text style={{fontSize: 10, fontWeight: '500', color: '#727272'}}>
            Sep 13, 2023 - 11:00 AM To 10:00 PM
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 10, fontWeight: '500', color: '#F00'}}>
              05H - 44M
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: '#284B63',
                left: 4,
              }}>
              Left
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  map: {
    height: 240,
    width: 'auto',

    borderRadius: 12,
    marginHorizontal: 18,
    marginTop: 12,
  },
});
