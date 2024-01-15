import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#54408C',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={'#54408C'} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/icons/Vector.png')}
          style={{
            height: 40,
            width: 40,
            right: 40,
          }}
        />
        <Text
          style={{color: '#fff', fontWeight: '700', right: 25, fontSize: 24}}>
          Bazar.
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
