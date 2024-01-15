import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useRef} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          color: '#54408C',
          fontWeight: '500',
          marginHorizontal: 24,
          marginTop: 60,
        }}>
        Skip
      </Text>
      <Image
        source={require('../../assets/icons/Frame.png')}
        style={{
          height: 280,
          width: 'auto',
          marginHorizontal: 27,
          marginTop: 30,
        }}
      />
      <Text
        style={{
          color: '#121212',
          fontSize: 22,
          marginHorizontal: 76,
          fontWeight: '700',
          marginTop: 16,
          textAlign: 'center',
        }}>
        Now reading books will be easier
      </Text>

      <View style={{marginTop: 8, marginHorizontal: 50}}>
        <Text style={{textAlign: 'center'}}>
          Discover new worlds, join a vibrant reading community. Start your
          reading adventure effortlessly with us.
        </Text>
      </View>
      <TouchableOpacity onPress={handleContinue}>
        <View
          style={{
            height: 45,
            width: 'auto',
            backgroundColor: '#54408C',
            marginHorizontal: 24,
            borderRadius: 10,
            marginTop: 50,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Continue
          </Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          color: '#54408C',
          marginTop: 30,
          fontWeight: '700',
          textAlign: 'center',
        }}>
        Sign in
      </Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
