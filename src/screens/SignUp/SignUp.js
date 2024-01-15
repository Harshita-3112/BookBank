import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();
  const handleRegister = () => {
    navigation.navigate('Home');
  };
  const handleSignUp = () => {
    if (
      name != null &&
      name != ' ' &&
      email != null &&
      email.includes('@gmail.com') &&
      password?.length > 6
    ) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('success');
        })
        .catch(error => {
          console.log(error, 'error');
        });
    } else {
      Alert.alert('Warning', 'please enter valid details');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{marginHorizontal: 24, marginTop: 40}}>
        <AntDesign name="arrowleft" size={20} color="#121212" />
      </View>

      <Text
        style={{
          color: '#121212',
          fontWeight: '700',
          fontSize: 20,
          marginHorizontal: 24,
          marginTop: 16,
        }}>
        Sign Up
      </Text>
      <Text style={{marginHorizontal: 24, marginTop: 6}}>
        Create account and choose favorite menu
      </Text>
      <Text
        style={{
          color: '#121212',
          marginHorizontal: 24,
          marginTop: 10,
          fontSize: 13,
          fontWeight: '500',
        }}>
        Name
      </Text>
      <View
        style={{
          height: 40,
          width: 'auto',
          backgroundColor: '#FAFAFA',
          marginHorizontal: 24,
          borderRadius: 8,
          marginTop: 8,
        }}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          style={{color: '#121212', padding: 12}}
          placeholderTextColor={'#B8B8B8'}
        />
      </View>
      <Text
        style={{
          color: '#121212',
          marginHorizontal: 24,
          marginTop: 10,
          fontSize: 13,
          fontWeight: '500',
        }}>
        Email
      </Text>

      <View
        style={{
          height: 40,
          width: 'auto',
          backgroundColor: '#FAFAFA',
          marginHorizontal: 24,
          borderRadius: 8,
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Your email"
          style={{color: '#121212'}}
          placeholderTextColor="#B8B8B8"
          keyboardType="email-address"
        />
      </View>

      <Text
        style={{
          color: '#121212',
          marginHorizontal: 24,
          marginTop: 10,
          fontSize: 13,
          fontWeight: '500',
        }}>
        Password
      </Text>

      <View
        style={{
          height: 40,
          width: 'auto',
          backgroundColor: '#FAFAFA',
          marginHorizontal: 24,
          borderRadius: 8,
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Your password"
          style={{color: '#121212'}}
          placeholderTextColor="#B8B8B8"
        />
        <Feather name="eye-off" size={22} color={'#B8B8B8'} />
      </View>

      <Text
        style={{
          marginHorizontal: 24,
          marginTop: 12,
          fontWeight: '600',
          fontSize: 11,
          color: '#54408C',
        }}>
        Forgot Password?
      </Text>
      <TouchableOpacity onPress={handleSignUp}>
        <View
          style={{
            height: 40,
            width: 'auto',
            backgroundColor: '#54408C',
            marginHorizontal: 24,
            marginTop: 20,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: '700', fontSize: 15}}>
            Register
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 24,
          marginTop: 14,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center'}}> Have an account? </Text>
        <TouchableOpacity>
          <Text
            style={{color: '#54408C', alignSelf: 'center', fontWeight: '500'}}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{alignItems: 'center', marginTop: 140, marginHorizontal: 24}}>
        <Text style={{fontSize: 13}}>
          By clicking Register, you agree to our{' '}
        </Text>
        <Text style={{color: '#54408C', fontWeight: '500', fontSize: 13}}>
          Terms and Data Policy.
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
