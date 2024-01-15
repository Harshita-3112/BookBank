import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FilterHelp from '../../components/FilterHelp/FilterHelp';

const EventDetail = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2F2F2',
        marginHorizontal: 16,
      }}>
      <View style={{flexDirection: 'row', marginTop: 18}}>
        <Ionicons
          name="chevron-back-circle-sharp"
          size={36}
          color={'#284B63'}
        />

        <Text
          style={{
            alignSelf: 'center',
            left: 60,
            fontSize: 22,
            fontWeight: '600',
            color: '#404041',
          }}>
          Help & Support
        </Text>
      </View>
      <FilterHelp title={'Language and Accessibility'} />
      <FilterHelp title={'Feedback Form'} />
      <FilterHelp title={'User Support Policy'} />
      <FilterHelp title={'Troubleshooting Guides'} />
      <FilterHelp title={'Knowledge Base'} />
      <FilterHelp title={'Support Ticket System'} />
      <FilterHelp title={'Response and Resolution Tracking'} />
      <FilterHelp title={'Live Chat'} />
    </View>
  );
};

export default EventDetail;

const styles = StyleSheet.create({});
