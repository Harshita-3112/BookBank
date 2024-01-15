import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Welcome = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '752562118811-balvd53ttrq48odctt9pvbi2g1ednq8d.apps.googleusercontent.com',
    });
  }, []);
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleLogin = () => {
    if (email != null && email.includes('@gmail.com') && password?.length > 6) {
      auth()
        .signInWithEmailAndPassword(email, password)
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

  const handleGoogleLogin = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const user = await auth().signInWithCredential(googleCredential);
      console.log(user, 'user here');
    } catch (error) {
      console.log(error, 'error here');
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
        Welcome Back 👋
      </Text>
      <Text style={{marginHorizontal: 24, marginTop: 6}}>
        Sign to your account
      </Text>
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
        }}>
        <TextInput
          placeholder="Your email"
          value={email}
          onChangeText={setEmail}
          style={{padding: 12, color: '#121212'}}
          placeholderTextColor={'#B8B8B8'}
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
          placeholder="Your password"
          value={password}
          onChangeText={setPassword}
          style={{color: '#121212'}}
          placeholderTextColor={'#B8B8B8'}
          // secureTextEntry={!showPassword}
        />
        <TouchableOpacity>
          <Feather
            // name={showPassword ? 'eye' : 'eye-off'}
            size={22}
            color={'#B8B8B8'}
          />
        </TouchableOpacity>
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
      <TouchableOpacity
        onPress={handleLogin}
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
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 24,
          marginTop: 14,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{alignSelf: 'center'}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text
            style={{color: '#54408C', alignSelf: 'center', fontWeight: '500'}}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{height: 1, width: 150, backgroundColor: '#E8E8E8'}}></View>
        <Text style={{color: '#A6A6A6'}}>Or with</Text>
        <View
          style={{height: 1, width: 150, backgroundColor: '#E8E8E8'}}></View>
      </View>
      <TouchableOpacity style={styles.google} onPress={handleGoogleLogin}>
        <Image
          source={require('../../assets/icons/Google.png')}
          style={{height: 15, width: 15}}
        />
        <Text
          style={{color: '#121212', fontWeight: '600', fontSize: 12, left: 10}}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
      <View style={styles.google}>
        <Image
          source={require('../../assets/icons/Apple.png')}
          style={{height: 15, width: 15}}
        />
        <Text
          style={{color: '#121212', fontWeight: '600', fontSize: 12, left: 10}}>
          Sign in with Apple
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  google: {
    height: 40,
    width: 'auto',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
    marginHorizontal: 24,
    marginTop: 26,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
