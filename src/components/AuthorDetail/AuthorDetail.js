import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AuthorDetail = ({photo, name, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 24,
        marginTop: 30,
      }}>
      <View>
        <Image
          source={photo}
          style={{height: 70, width: 70, borderRadius: 35, marginRight: 12}}
        />
      </View>
      <View>
        <Text style={{color: '#121212', fontSize: 16, fontWeight: '700'}}>
          {name}
        </Text>
        <View style={{width: 180}}>
          <Text style={{color: '#66707A', fontSize: 14}}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default AuthorDetail;

const styles = StyleSheet.create({});
